/**
 * WbShowTimes version 1.0.1
 *
 * requires
 * - jquery >= 1.7.2
 *
 * If you're not using a module loader this will be
 * added as a global called "WbShowTimes".
 *
 */
(function(root, factory) {
    // Montage Require
    if (typeof bootstrap === 'function') {
        bootstrap('WbShowTimes', factory(root.$));

    // CommonJS/Node
    } else if (typeof exports === "object") {
        module.exports = factory(require('jquery'));

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define('wb/showtimes/1.0.1/showtimes', ['jquery'], factory);

    // <script>
    } else {
        root.WbShowTimes = factory(root.$);
    }

})(this, function($) {
    var theWindow = this;
    var logEnabled = this.console && typeof console.log != 'undefined';
    var log = function(msg) {
        if (logEnabled) {
            var type = $.type(msg);
            if (type === 'string' || type === 'number') {
                console.log('[WbShowTimes] ' + msg);
            } else {
                console.log(msg);
            }
        }
    };

    /**
     * @type {{siteName: string, serviceUrl: string}}
     */
    var defaults = {siteName: '', serviceUrl: 'http://showtimes.telepicturestv.com/%SITE_NAME%/lookup/zip/'};

    /**
     * WB - Show Times Module
     *
     * @param {Object} options
     */
    return function(options) {
        var _this = Object.create({});
        var settings = $.extend({}, defaults, options);
        var serviceUrl = settings.serviceUrl.replace('%SITE_NAME%', settings.siteName);
        var callbackHandler = 'wbShowTimes_' + settings.siteName + '_';
        var promises = {};

        log('serviceUrl=' + serviceUrl);
        log('callbackHandler=' + callbackHandler);

        /**
         * Returns a promise from the API call to the show times service.
         * This call is cached by zip code so multiple calls in a single
         * page will not call the API again.
         *
         * @param {string} zip
         * @return {!Object} jQuery Promise Object
         */
        var getByUSZip = function(zip) {
            zip = zip.replace(/\D/g, '');
            var cacheKey = 'byUSZip_' + zip;
            var deferred;

            if (!promises[cacheKey] && zip.length != 5) {
                log('getByUSZip::not a US Zip=' + zip);
                deferred = $.Deferred();
                deferred.reject();
                promises[cacheKey] = deferred.promise();
                return promises[cacheKey];
            }

            if (!promises[cacheKey]) {
                log('getByUSZip::calling api::' + serviceUrl + zip);
                deferred = $.ajax(serviceUrl + zip, {
                        dataType: 'jsonp',
                        jsonpCallback: callbackHandler + 'onGetByUSZip',
                        cache: true
                    });

                promises[cacheKey] = deferred.promise();
            } else {
                log('getByUSZip::cached promise::' + zip);
            }

            return promises[cacheKey];
        };

        /**
         * Receives data from the jsonp call.  This isn't actually used yet but
         * is needed to prevent an invalid function call when the jsonp loads.
         *
         * @param {*} data
         */
        var onGetByUSZip = function(data) {
            // do nothing for now
            log('onGetByUSZip::called');
        };

        /**
         * add privileged methods
         */
        _this.getByUSZip = getByUSZip;

        /**
         * attach a global callback handler to the window.  this is done so the
         * url to the jsonp service doesn't constantly change and we can properly
         * cache the request.
         */
        theWindow[callbackHandler + 'onGetByUSZip'] = onGetByUSZip;

        return _this;
    };

});