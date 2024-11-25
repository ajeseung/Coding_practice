/**
 * WbGeoLocation version 1.0.1
 *
 * requires
 * - jquery >= 1.7.2
 * - jquery.cookie
 *
 * If you're not using a module loader this will be
 * added as a global called "WbGeoLocation".
 *
 */
(function(root, factory) {
    // Montage Require
    if (typeof bootstrap === 'function') {
        bootstrap('WbGeoLocation', factory(root.$));

    // CommonJS/Node
    } else if (typeof exports === "object") {
        module.exports = factory(require('jquery'), require('jquery.cookie'));

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define('wb/geolocation/1.0.1/geolocation', ['jquery', 'jquery.cookie'], factory);

    // <script>
    } else {
        root.WbGeoLocation = factory(root.$);
    }

})(this, function($) {
    var logEnabled = this.console && typeof console.log != 'undefined';
    var log = function(msg) {
        if (logEnabled) {
            var type = $.type(msg);
            if (type === 'string' || type === 'number') {
                console.log('[WbGeoLocation] ' + msg);
            } else {
                console.log(msg);
            }
        }
    };

    var ipLookupUri = '/wb-geolocation';
    var testIpAddress = '';
    var useGoogleClientLocation = false;
    var useGetByCoordinates = true;
    var getByCoordinatesProvider = 'google'; // todo: provide option to supply list of providers
    var googleJsApiUrl = '//www.google.com/jsapi';
    var googleMapsLookupUrl = '//maps.google.com/maps/api/geocode/json?sensor=false&latlng=';
    var cookieName = 'WBGEO';
    var cookieExpires = 365; // 1 year
    var cookieDomain = (document.domain).match(/(.\.)?(\w+\.\w+)$/)[2];

    /**
     * WB - Geo Location Service
     */
    var module = function() {
        var _this = Object.create({});
        var geoLocation;
        var geoLocationDeferred;
        var zip;
        var zipDeferred;

        /**
         * Resets the deferred object so you can do a fresh location lookup.
         *
         * @return {!Object} _this
         */
        var resetGeoLocation = function() {
            log('resetGeoLocation');
            geoLocation = undefined;
            geoLocationDeferred = undefined;
            return _this;
        };

        /**
         * Gets the deferred object managing the geo location lookups
         *
         * @return {!Object} jQuery Deferred Object
         */
        var getGeoLocationDeferred = function() {
            if (geoLocationDeferred) {
                log('getGeoLocationDeferred::already created');
                return geoLocationDeferred;
            }

            log('getGeoLocationDeferred::new');
            geoLocationDeferred = $.Deferred();

            geoLocationDeferred.always(function(newGeoLocation) {
                log('getGeoLocationDeferred::always,geolocation=');
                log(newGeoLocation);
                geoLocation = newGeoLocation;
            });

            return geoLocationDeferred;
        };

        /**
         * Returns a promise for the user's geo location
         *
         * @param {boolean} askForLocation
         *
         * @return {!Object} jQuery Promise Object
         */
        var getGeoLocation = function(askForLocation) {
            if (geoLocationDeferred) {
                log('getGeoLocation::cached promise');
                return geoLocationDeferred.promise();
            }

            var deferred = getGeoLocationDeferred();

            /*
             * if we are asking for the location we won't
             * fallback to another method as that would
             * be sort of against the user's wish.
             */
            if (askForLocation) {
                getGeoLocationFromNavigator().then(
                    // resolved / success
                    function(geoLocation) {
                        deferred.resolve(geoLocation);
                    },

                    // rejected / fail
                    function(error) {
                        deferred.reject();
                    }
                );

                return deferred.promise();
            }

            getGeoLocationFromGoogle().then(
                // resolved / success
                function(geoLocation) {
                    deferred.resolve(geoLocation);
                },
                // rejected / fail
                function(error) {
                    // if we couldn't get it from google, for free,
                    // then we use our own service to get it by IP.
                    getGeoLocationByIp().then(
                        // resolved / success
                        function(geoLocation) {
                            deferred.resolve(geoLocation);
                        },
                        // rejected / fail
                        function(error) {
                            deferred.reject();
                        }
                    );
                }
            );

            return deferred.promise();
        };

        /**
         * Returns a promise for getting the geo location by
         * the user's IP Address.
         *
         * @return {!Object} jQuery Promise Object
         */
        var getGeoLocationByIp = function() {
            var url = testIpAddress ? ipLookupUri + '/' + testIpAddress : ipLookupUri;
            var deferred = $.Deferred();

            log('getGeoLocationByIp::calling api::' + url);

            $.ajax(url, {dataType: 'json'})
                .done(function(data) {
                    if (data.status == 'ok') {
                        log('getGeoLocationByIp::zip=' + data.location.zipCode);
                        if (data.location.zipCode.length > 1) {
                            deferred.resolve(data.location);
                        } else {

                            /*
                             * the last ditch effort to get the mother blanking ZIP code.  If the
                             * provider is maxmind then we know the location is pretty solid.
                             *
                             * If the country is the US then let's attempt to get the zip from
                             * by the coordinates.
                             *
                             */
                            if (data.provider == 'maxmind' && data.location.countryCode == 'US') {
                                log('getGeoLocationByIp::still no zip, provider is maxmind so attempt lookup by coordinates.');
                                getGeoLocationByCoordinates(data.location.latitude, data.location.longitude).then(
                                    // resolved / success
                                    function(geoLocation) {
                                        data.location.zipCode = geoLocation.zipCode;
                                        deferred.resolve(data.location);
                                    },
                                    // rejected / fail
                                    function() {
                                        deferred.reject();
                                    }
                                );
                                return;
                            }

                            deferred.reject();
                        }
                    } else {
                        log('getGeoLocationByIp::failed:ip address not found');
                        deferred.reject();
                    }
                })
                .fail(function(xhr) {
                    log('getGeoLocationByIp::failed:' + xhr.status + ' -> ' + xhr.statusText);
                    deferred.reject();
                });

            return deferred.promise();
        };

        /**
         * Returns a promise for getting the geo location by
         * the coordinates (latitude, longitude)
         *
         * This will only succeed if the zipCode was returned.
         *
         * @param {float} lat
         * @param {float} lng
         *
         * @return {!Object} jQuery Promise Object
         */
        var getGeoLocationByCoordinates = function(lat, lng) {
            var url;
            var deferred = $.Deferred();
            var geoLocation = {latitude: lat, longitude: lng};

            if (!useGetByCoordinates) {
                log('getGeoLocationByCoordinates::disabled');
                deferred.reject();
                return deferred.promise();
            }

            if (getByCoordinatesProvider == 'google') {
                url = googleMapsLookupUrl + lat + ',' + lng;
                $.ajax(url, {dataType: 'json'})
                    .done(function(data) {
                        if (data.results instanceof Array && data.status == 'OK' && data.results.length > 0) {
                            $.each(data.results[0].address_components, function(ix, comp) {
                                if ($.inArray('postal_code', comp.types) >= 0) {
                                    geoLocation.zipCode = comp.long_name;
                                } else if($.inArray('country', comp.types) >= 0) {
                                    geoLocation.countryCode = comp.short_name;
                                    geoLocation.countryName = comp.long_name;
                                } else if($.inArray('locality', comp.types) >= 0) {
                                    geoLocation.cityName = comp.long_name;
                                } else if($.inArray('administrative_area_level_1', comp.types) >= 0) {
                                    geoLocation.regionName = comp.long_name;
                                }
                            });

                            if (geoLocation.countryCode != 'US') {
                                log('getGeoLocationByCoordinates::NON-US, address=' + data.results[0].formatted_address);
                                deferred.resolve(geoLocation);
                                return;
                            }

                            if (geoLocation.countryCode == 'US' && geoLocation.zipCode && geoLocation.zipCode.length > 1) {
                                log('getGeoLocationByCoordinates::address=' + data.results[0].formatted_address);
                                deferred.resolve(geoLocation);
                                return;
                            }
                        }

                        log('getGeoLocationByCoordinates::failed: no zip code');
                        deferred.reject();
                    })
                    .fail(function(xhr) {
                        log('getGeoLocationByCoordinates::failed: ' + xhr.status + ' -> ' + xhr.statusText);
                        deferred.reject();
                    });
            } else if (getByCoordinatesProvider == 'bing') {
                // todo: add bing lookup
                log('getGeoLocationByCoordinates::bing not implemented');
                deferred.reject();
            } else {
                log('getGeoLocationByCoordinates::invalid provider=' + getByCoordinatesProvider);
                deferred.reject();
            }

            return deferred.promise();
        };

        /**
         * Returns a promise for getting the location from the google loader.
         * This may not be very accurate.  Some reports of this being
         * up to 200 miles off, or more.
         *
         * This is disabled by default.
         *
         * @return {!Object} jQuery Promise Object
         */
        var getGeoLocationFromGoogle = function() {
            var deferred = $.Deferred();
            var latitude;
            var longitude;

            if (!useGoogleClientLocation) {
                log('getGeoLocationFromGoogle::ClientLocation check disabled');
                deferred.reject();
                return deferred.promise();
            }

            var handleClientLocation = function() {
                if (!window['google'] || !window['google']['loader']) {
                    log('getGeoLocationFromGoogle::no google loader');
                    deferred.reject();
                    return;
                }

                if (!google.loader.ClientLocation) {
                    log('getGeoLocationFromGoogle::no ClientLocation');
                    deferred.reject();
                    return;
                }

                latitude = google.loader.ClientLocation.latitude;
                longitude = google.loader.ClientLocation.longitude;
                log('getGeoLocationFromGoogle::latitude=' + latitude + ',longitude=' + longitude);

                getGeoLocationByCoordinates(latitude, longitude).then(
                    // resolved / success
                    function(geoLocation) {
                        deferred.resolve(geoLocation);
                    },
                    // rejected / fail
                    function() {
                        deferred.reject();
                    }
                );
            };

            if (!window['google'] || !window['google']['loader']) {
                $.ajax(googleJsApiUrl, {dataType: 'script', cache: true})
                    .done(function() {
                        handleClientLocation();
                    })
                    .fail(function(xhr) {
                        log('getGeoLocationFromGoogle::failed: ' + xhr.status + ' -> ' + xhr.statusText);
                        deferred.reject();
                    });
            } else {
                handleClientLocation();
            }

            return deferred.promise();
        };

        /**
         * Returns a promise for getting the location from the html5 geolocation
         * service in the browser.
         *
         * @return {!Object} jQuery Promise Object
         */
        var getGeoLocationFromNavigator = function() {
            var deferred = $.Deferred();
            var timer;

            if (!navigator.geolocation) {
                log('getGeoLocationFromNavigator::geolocation not supported in browser.');
                deferred.reject();
                return deferred.promise();
            }

            log('getGeoLocationFromNavigator::calling getCurrentPosition()');
            navigator.geolocation.getCurrentPosition(
                function(pos) {
                    if (pos && pos.coords) {
                        log('getGeoLocationFromNavigator::pos=');
                        log(pos);

                        getGeoLocationByCoordinates(pos.coords.latitude, pos.coords.longitude).then(
                            // resolved / success
                            function(geoLocation) {
                                deferred.resolve(geoLocation);
                                clearTimeout(timer);
                            },
                            // rejected / fail
                            function() {
                                deferred.reject();
                                clearTimeout(timer);
                            }
                        );
                    } else {
                        log('getGeoLocationFromNavigator::pos is invalid');
                        deferred.reject({code:'POSITION_UNAVAILABLE'});
                        clearTimeout(timer);
                    }
                },
                function(error) {
                    log('getGeoLocationFromNavigator::error=');
                    log(error);
                    deferred.reject(error);
                    clearTimeout(timer);
                },
                {timeout: 2000}
            );

            /*
             * if the user selects "not now" when asking to share location no error will
             * be generated.  so we set a timer and automatically resolve the deferred with
             * an error for this condition.
             */
            timer = setTimeout(function(){
                    log('getGeoLocationFromNavigator::user selected "not now" or dismissed dialog');
                    deferred.reject({code:'PERMISSION_DENIED'});
                }, 10000);

            return deferred.promise();
        };

        /**
         * Resets the deferred object so you can do a fresh zip lookup.
         *
         * @return {!Object} _this
         */
        var resetZip = function() {
            log('resetZip');
            zip = undefined;
            zipDeferred = undefined;
            return _this;
        };

        /**
         * Gets the deferred object managing the zip lookups
         *
         * @return {!Object} jQuery Deferred Object
         */
        var getZipDeferred = function() {
            if (zipDeferred) {
                log('getZipDeferred::already created');
                return zipDeferred;
            }

            log('getZipDeferred::new');
            zipDeferred = $.Deferred();

            zipDeferred.always(function(newZip) {
                log('getZipDeferred::always,zip=' + newZip);
                zip = newZip;
            });

            return zipDeferred;
        };

        /**
         * Returns a promise for the user's zip
         *
         * @param {boolean} askForLocation
         *
         * @return {!Object} jQuery Promise Object
         */
        var getZip = function(askForLocation) {
            var deferred;
            var zip;
            var geoLocationPromise;

            if (zipDeferred) {
                log('getZip::cached promise');
                return zipDeferred.promise();
            }

            deferred = getZipDeferred();

            zip = getZipCookie();
            if (zip && zip.length > 0) {
                // for some users (international or otherwise) we just can't
                // get their zip code.  this prevents a continuous check for
                // their location.  we basically cache the failure as well.
                if (zip == '-1') {
                    log('getZip::reject with cookie=' + zip);
                    deferred.reject();
                } else {
                    log('getZip::resolve with cookie=' + zip);
                    deferred.resolve(zip);
                }
                return deferred.promise();
            }

            geoLocationPromise = getGeoLocation(askForLocation);
            geoLocationPromise.then(
                // resolved / success
                function(geoLocation) {
                    if (geoLocation.zipCode) {
                        log('getZip::resolve from getGeoLocation=' + geoLocation.zipCode);
                        setZipCookie(geoLocation.zipCode);
                        deferred.resolve(geoLocation.zipCode);
                    } else {
                        log('getZip::reject from getGeoLocation, no zipCode property');
                        setZipCookie('-1');
                        deferred.reject();
                    }
                },
                // rejected / fail
                function() {
                    log('getZip::reject from getGeoLocation');
                    setZipCookie('-1');
                    deferred.reject();
                }
            );

            return deferred.promise();
        };

        /**
         * Gets the zip from a cookie.
         *
         * @return {string}
         */
        var getZipCookie = function() {
            var zip = $.cookie(cookieName + 'ZIP') || '';
            return zip.replace(/[^a-zA-Z0-9\s_-]/g, '');
        };

        /**
         * Sets the zip to a cookie.
         *
         * @param {string} zip
         */
        var setZipCookie = function(zip) {
            if (GDPR_APPLIES) {
              return;
            }

            log('setZipCookie::' + zip);
            // delete the subdomain cookie, todo: remove in next version
            $.cookie(cookieName + 'ZIP', null, {path: '/', expires: -1});
            $.cookie(cookieName + 'ZIP', zip, {path: '/', expires: cookieExpires, domain: cookieDomain});
        };

        /**
         * Resets the local zip and the cookie.  Use this when the
         * user has changed their zip somewhere.
         *
         * Note, this doesn't modify the geo location data.
         *
         * @param {string} newZip
         *
         * @return {!Object} _this
         */
        var setZip = function(newZip) {
            log('setZip::' + newZip);
            setZipCookie(newZip);

            if (zip == newZip) {
                log('setZip::zip unchanged');
                return _this;
            }

            resetZip();
            if (newZip) {
                if (newZip == '-1') {
                    log('setZip::reject with newZip=' + newZip);
                    getZipDeferred().reject();
                } else {
                    log('setZip::resolve with newZip=' + newZip);
                    getZipDeferred().resolve(newZip);
                }
            }

            return _this;
        };

        /**
         * Sets the test ip address so if the ip lookup service
         * is used, this is the IP it will use.
         *
         * set to nothing to disable it.
         *
         * @param {string} ip
         *
         * @return {!Object} _this
         */
        var setTestIpAddress = function(ip) {
            log('setTestIpAddress::' + ip);
            testIpAddress = ip;
            return _this;
        };

        /**
         * Enables/disables the use of google's client
         * location from their js api.
         *
         * @param {boolean} enabled
         *
         * @return {!Object} _this
         */
        var enableGoogleClientLocation = function(enabled) {
            log('enableGoogleClientLocation::' + enabled);
            useGoogleClientLocation = enabled ? true : false;
            return _this;
        };

        /**
         * Enables/disables the get by coordinates feature.
         *
         * @param {boolean} enabled
         *
         * @return {!Object} _this
         */
        var enableGetByCoordinates = function(enabled) {
            log('enableGetByCoordinates::' + enabled);
            useGetByCoordinates = enabled ? true : false;
            return _this;
        };

        /**
         * add privileged methods
         */
        _this.resetGeoLocation = resetGeoLocation;
        _this.getGeoLocation = getGeoLocation;
        _this.resetZip = resetZip;
        _this.getZip = getZip;
        _this.getZipCookie = getZipCookie;
        _this.setZip = setZip;
        _this.setTestIpAddress = setTestIpAddress;
        _this.enableGoogleClientLocation = enableGoogleClientLocation;
        _this.enableGetByCoordinates = enableGetByCoordinates;

        return _this;
    };

    return module();

});
