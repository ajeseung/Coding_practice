/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**

    *****   ***********     ****          *****     ***     *******          ****
  ***  ***  **  **   **    **  **         **  **     **     **  **          **  **
  ***       *   **    *   **    **        **   **    **        **          **    **
    ****        **       **********       **    **   **       **          **********
       ***      **      **        **      **     **  **      **          **        **
  ***   ***     **     **          **     **      ** **     **  **      **          **
    ****       ****   ***          ***    ***      ****    *******    ****          ****

 */

/**
 * StanzaCal Embed Widget
 * version - 0.0.1
 * description - Embed a schedule and allow users to sync events to their Google, ICal, Exchange, Outlook and Yahoo calendars
 * Developer Notes:
 * Searches for <div> tags with the class attribute set to 'stanzacal'
 * All Attributes:
 * data-stanzacal (required) - the unique stanzcal name provided to you. If you do not know what this is, email help@stanza.co
 * data-width - specify the width of your widget in pixels, em or percentage. If nothing is provided it defaulats to 100%
 * data-height - specify the height of your widget in pixels, em or percentage. If nothing is provided it defaulats to 100%
 * data-site - If you have a rev share agreement with Stanza. Place your unique site name provided by stanza, so we can determine
 *             how many page views came from you. If you do not know where to find this, email help@stanza.co.
 * data-theme - "dark" or "light"
 */
try {
  var checkAdblocker = function checkAdblocker(cb) {

    if (!adBlockerStatusKnown) {
      queueAdBlockerChecks.push(cb);
      if (queueAdBlockerChecks.length === 1) {
        var test = document.createElement('div');
        test.innerHTML = '&nbsp;';
        test.className = 'adsbox';

        document.body.appendChild(test);

        setTimeout(function () {
          adBlockerStatus = test.offsetHeight === 0;
          test.remove();
          adBlockerStatusKnown = true;
          queueAdBlockerChecks.forEach(function (check) {
            return check(adBlockerStatus);
          });
        }, 10);
      }
    } else {
      cb(adBlockerStatus);
    }
  };

  var isMobile = function isMobile() {
    var match = window.matchMedia || window.msMatchMedia;
    if (match) {
      var mq = match("(pointer:coarse)");
      return mq.matches;
    }
    return false;
  };

  var PREBID_ONE_PUBLISHERS = 'ix-test,polymorph-test,rubicon-prebid-one,appnexus-prebid-1-testing,indexexchange-prebid-one,aol-prebid-one,herokuapp.com,dodgerblue,lee-madison,postdispatch,lakersnation,accuweather.com,mynhltraderumors,realgm.com,sny.tv,footwearnews.com,foxsports.com,foxsports-wisconsin,autoweek,snackmedia-bluemoon-mcfc,dkpittsburghsports.com,foxsports-north,sovrn-testing,smartadserver-prebid-one-friendly,playgroundmag,goal-uk,goal-us,goal-german,goal-southafrica,toffeeweb';
  var V3_FRIENDLY_FRAME_PUBLISHERS_BLACKLIST = ['patch.com'];
  var VENATUS_V2_WHITELIST = ['fifarenderz.com', 'tennessean.com', 'wingsnation.com', 'autoweek', 'mobafire', 'dotafire', 'heroesfire', 'smitefire.com', 'mynhltraderumors', 'lakersnation', 'dodgerblue', 'goal-us', 'realgm.com', '49erswebzone', 'dailyfaceoff.com', 'clutchpoints.com', 'flamesnation.ca', 'theleafsnation.com', 'oilersnation.com', 'elitesportsny.com', 'bluejaysnation.com', 'pittsburghhockeynow', 'canucksarmy.com', 'dkpittsburghsports.com', 'pittsburghsportsnow.com', 'ultimateknicks', 'huskermax', 'ramsnation', 'raidersnation', 'chicitysports', 'nationnetwork-canucksarmy', 'whoscored', 'puckpedia.com'];
  var VENATUS_AD_MANAGER_BLACKLIST = ['whoscored', 'fifarenderz.com'];
  var TIMELINE_EMBED_SITES = ['patch.com'];
  var FULL_STORY_WHITELIST = ['nhl-blackhawks', 'nba-thunder'];
  var STANZACAL_ENDPOINT_WHITELIST = ['*'];
  var DARK_MODE_WHITELIST = ['autoweek', 'tentonhammer', 'legapallacanestro.com'];
  var NBC_CALENDAR_COUNT = 0;
  var NO_HOMEPAGE_GAMEDAY = ['dkpittsburghsports.com'];
  var SECOND_ELEMENT_LIST = ['oilersnation.com', 'theleafsnation.com', 'nationnetwork-canucksarmy'];
  var SECOND_STANZACAL = ['theleafsnation.com'];
  var SC_COUNT = 0;

  var topwin = window.top || window;
  var topDoc = topwin.document;
  var topUrl = topDoc.location.href;
  var isDebug = topUrl.indexOf('stanzaDebug=true') > -1;
  window.__STANZA_LIVE_SCORE_UNIT__ = window.__STANZA_LIVE_SCORE_UNIT__ ? window.__STANZA_LIVE_SCORE_UNIT__ : {
    injected: false,
    isVisible: true
  };
  var NEO_TRAFFIC_WHITELIST = [];

  var topPlayersProps = {
    'nba': { seasonId: 55467 },
    'mlb': { seasonId: 61503 },
    'nhl': { seasonId: 68156 },
    'nfl': { seasonId: 2022 }
  };

  var carouselProps = {
    'nba': { uniqueTournamentId: 132 },
    'nhl': { uniqueTournamentId: 234 },
    'mlb': { uniqueTournamentId: 109 },
    'nfl': { uniqueTournamentId: 31 }
  };

  var adBlockerStatus = true;
  var adBlockerStatusKnown = false;
  var queueAdBlockerChecks = [];

  if (typeof StanzaCal === 'undefined') {
    (function (window, document) {
      function getDomain() {
        // The embed script is hosted at /timeline/static/embed.js as well as https://dff2h0hbfv6w4.cloudfront.net/scripts/embed-stanzacal-v1.js
        // to simplify testing, let's infer the desired domain from the location of this script
        // if it's not a stanza domain (or local.spoton for local testing) assume prod

        if (typeof window.testDomain !== 'undefined') return window.testDomain;

        var scripts = document.getElementsByTagName('script');
        var src = scripts[scripts.length - 1].src;
        var protocol = src.indexOf('https://') === -1 ? 'http://' : 'https://';
        var domain = protocol + src.replace(protocol, '').split('/')[0];

        return domain.indexOf('stanza.') === -1 && domain.indexOf('local.spoton') === -1 ? 'https://www.stanza.co' : domain;
      }
      // TLDR: checks browser and browser version
      navigator.sayswho = function () {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
          tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
          if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
      }();

      var USER_AGENT = navigator.sayswho.split(' ');
      // we do not want to render friend frames for Firefox 43 and below
      var IS_FIREFOX_V43 = USER_AGENT[0] === 'Firefox' && Number(USER_AGENT[1]) < 44;
      var DOMAIN = 'https://www.stanza.co';

      var IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var THEMES = ['default', 'dark', 'light'];
      var DEFAULT_THEME = THEMES[0];
      var URL_ON_LOAD = window.location.href;

      function makeRequest(method, url, body, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
          callback(null, xhr.response);
        };
        xhr.onerror = function () {
          callback(xhr.response);
        };
        if (method === 'POST') {
          xhr.send(JSON.stringify(body));
        } else {
          xhr.send();
        }
      }

      function shouldRenderFriendlyFrame(site) {
        site = decodeURIComponent(site).replace(/"/g, '');
        return V3_FRIENDLY_FRAME_PUBLISHERS_BLACKLIST.indexOf(site) === -1;
      }

      function isVisible(el) {
        // the rect is relative to the top left of the viewport
        var rect = el.getBoundingClientRect();
        var left = Math.max(0, rect.left);
        var top = Math.max(0, rect.top);
        var right = Math.min(window.innerWidth, rect.right);
        var bottom = Math.min(window.innerHeight, rect.bottom);
        var visibleWidth = right - left;
        var visibleHeight = bottom - top;
        return visibleWidth >= 250 && visibleHeight >= 250;
      }

      function checkTopUrlChange(el) {
        if (URL_ON_LOAD !== window.location.href && !getAttribute(el, 'topUrl')) {
          setAttribute(el, 'injected', 'false');
          setAttribute(el, 'topUrl', window.location.href);
          el.innerHTML = '';
          tryInjectIframe(el);
        }
      }

      function checkStanzaCalVisibility() {
        // since this runs on all scroll events, this should be as fast as possible
        // on Chrome this typically takes < 0.05ms

        var elements = document.getElementsByClassName('stanzacal');
        // inject again if
        if (SC_COUNT < elements.length) {
          SC_COUNT = elements.length;
          inject();
        }

        for (var i = 0; i < elements.length; i++) {
          var el = elements[i];
          if (isVisible(el)) {
            var iframes = el.getElementsByTagName('iframe');
            if (iframes.length > 0) {
              /**
               * reportView must be called before checkTopUrlChange
               * On infinite scroll websites If the top url of the page
               * is different from what it used to be on page load,
               * checkTopUrlChange will reinject the stanzacal and
               * call /api/guess_shortname with the new url. If you flip the
               * order, reportView will throw an error:
               * Cannot setAttribute of null or undefined.
               */
              reportView(iframes[0]);
              checkTopUrlChange(el);
            }
          }
        }
      }

      function reportView(iframe) {
        setAttribute(iframe, 'viewed');
        if (getAttribute(iframe, 'loaded') && !getAttribute(iframe, 'reported')) {
          iframe.contentWindow.postMessage({
            iframeviewed: {
              width: window.innerWidth,
              height: window.innerHeight
            }
          }, '*');
          setAttribute(iframe, 'reported');
        }
      }

      function getAttribute(el, attr) {
        return el.getAttribute('data-' + attr) || el.getAttribute(attr);
      }

      function setAttribute(el, attr, val) {
        el.setAttribute('data-' + attr, typeof val === 'undefined' ? 'true' : val);
      }

      function ensureCompleteData(el, callback) {
        var shortname = getAttribute(el, 'stanzacal');
        var site = getAttribute(el, 'site');
        var getSite = !site;
        var isHuskerMax = window.location.href.indexOf('huskermax.com') > -1;
        var getShortname = (!shortname || URL_ON_LOAD !== window.location.href) && window.location.href.indexOf('stanzacal/builder') < 0;
        if (!getShortname && !getSite && !isHuskerMax) {
          return callback();
        }
        var vertical = getAttribute(el, 'vertical');
        var keywords = getAttribute(el, 'keywords');
        var topUrl = getAttribute(el, 'topUrl') || window.location.href;
        var category;
        var customLink;
        var requestUrl = DOMAIN + '/api/guess_shortname?url=' + encodeURIComponent(topUrl);
        makeRequest('GET', requestUrl, null, function (err, response) {
          try {
            response = JSON.parse(response);
            shortname = response.calendar;
            category = response.category;
            site = response.site;
            customLink = response.customLink;
          } catch (e) {}
          if (getShortname && shortname || isHuskerMax) {
            setAttribute(el, 'stanzacal', shortname);
            if (category) {
              setAttribute(el, 'category', category);
            }
          }
          if (getSite) {
            setAttribute(el, 'site', site);
          }
          if (customLink) {
            setAttribute(el, 'customLink', customLink);
          }
          callback();
        });
      }

      function getUpcomingGames(shortname, site, callback) {
        var requestUrl = DOMAIN + '/api/events/upcoming/' + encodeURIComponent(shortname) + '/' + encodeURIComponent(site);
        makeRequest('GET', requestUrl, null, function (err, response) {
          var response;
          var events;
          var adTag;
          var venatusConfig;
          var siteDoc;
          try {
            response = JSON.parse(response);
            events = response.events;
            adTag = response.insticatorCdnUrl;
            siteDoc = response.siteConfig;
          } catch (e) {}
          if (events) {
            callback(events, adTag, siteDoc);
          }
        });
      }

      function tryInjectIframe(el) {
        if (!getAttribute(el, 'injected') || getAttribute(el, 'injected') === 'false') {
          setAttribute(el, 'injected', true);
          ensureCompleteData(el, function () {
            injectIframe(el);
          });
        }
      }

      function loadAndInjectStanzaCalScript(friendlyFrame, scriptSrc) {
        // Only do this for firefox
        return new Promise((resolve, reject) => {
          friendlyFrame.contentWindow.document.write('<body></body>');
          if (window.location.hostname.indexOf('lnppass') !== -1) {
            fetch(
              scriptSrc,
              {
                method: 'GET',
              }
            ).then(v => {
              return v.text()
            }).then(responseText => {
              var s = document.createElement('script');
              s.textContent = responseText;
              friendlyFrame.contentWindow.document.body.appendChild(s);
              s.remove();
              resolve();
            }).catch(e => resolve());
          } else {
            var x = new XMLHttpRequest();
            x.open('GET', scriptSrc, false);
            x.send();
            var actualCode = x.responseText;
            var s = document.createElement('script');
            s.textContent = actualCode;
            friendlyFrame.contentWindow.document.body.appendChild(s);
            s.remove();
            resolve();
          }
        })
      }

      function injectIframe(el) {
        var site = getAttribute(el, 'site');
        var width = getAttribute(el, 'width');
        var height = getAttribute(el, 'height');
        var category = getAttribute(el, 'category');
        var customLink = getAttribute(el, 'customLink');
        var shortname = getAttribute(el, 'stanzacal');
        var buttonColor = getAttribute(el, 'button-color');
        var theme = getAttribute(el, 'theme');
        var layout = getAttribute(el, 'layout');
        var opacity = getAttribute(el, 'opacity');
        var showAds = getAttribute(el, 'showAds');
        var topUrl = getAttribute(el, 'topUrl');
        var isNeo = NEO_TRAFFIC_WHITELIST.indexOf(shortname) > -1;
        if (DARK_MODE_WHITELIST.indexOf(site) > -1 || theme === 'dark') {
          el.style.border = '1px solid #404040';
        } else {
          el.style.border = '1px solid #ebebeb';
        }

        if (site === 'nbcsports-northwest') {
          if (NBC_CALENDAR_COUNT > 2) {
            return;
          } else {
            NBC_CALENDAR_COUNT++;
          }
        }
        if (!shortname) return;
        el.style.width = width || '100%';
        if (site && site === 'sfgate.com') {
          if (width) {
            try {
              var newWidth = parseInt(width);
              newWidth = newWidth - 2;
              newWidth = newWidth + 'px';
              el.style.width = newWidth;
            } catch (e) {
              el.style.width = '298px';
            }
          }
        }

        var defaultHeight = layout === 'booking' ? '' : '100%';
        el.style.height = height || defaultHeight;
        if (IS_IOS) {
          // issue exclusive to vertical layout and iOS
          // without this, the iframe will overflow past the expected dimensions and cover the parent page
          // https://coderwall.com/p/c-aqqw/scrollable-iframe-on-mobile-safari
          el.style.overflow = 'hidden';
          el.style.webkitOverflowScrolling = 'touch';
        }
        if (shouldRenderFriendlyFrame(site) && !IS_FIREFOX_V43) {
          // FRIENDLY FRAME - Implemenatation
          var friendlyFrame = document.createElement('iframe');
          friendlyFrame.frameboard = 0;
          friendlyFrame.seamless = 'seamless';
          friendlyFrame.style.width = '1px';
          friendlyFrame.style.minWidth = '100%';
          friendlyFrame.style.height = '100%';
          friendlyFrame.style.border = 'none';
          friendlyFrame.style.outline = 0;
          if (window.location.href.indexOf('cinemablend.com') > -1) {
            shortname = 'cinemablend';
          }
          friendlyFrame.setAttribute('data-calendar', shortname);

          friendlyFrame.setAttribute('data-site', site);
          friendlyFrame.setAttribute('data-sdk', true);
          if (DARK_MODE_WHITELIST.indexOf(site) > -1 || theme === 'dark') {
            friendlyFrame.setAttribute('data-theme', 'dark');
          }
          friendlyFrame.setAttribute('data-layout', layout);
          friendlyFrame.setAttribute('data-prebidWhiteList', encodeURIComponent(PREBID_ONE_PUBLISHERS));
          friendlyFrame.setAttribute('data-env', 'prod');
          if (showAds) {
            friendlyFrame.setAttribute('data-showAds', showAds);
          }
          friendlyFrame.setAttribute('data-topUrl', topUrl);
          friendlyFrame.setAttribute('data-venatusV2WhiteList', VENATUS_V2_WHITELIST);
          friendlyFrame.setAttribute('data-stanzaCalEndpointWhitelist', STANZACAL_ENDPOINT_WHITELIST);
          friendlyFrame.setAttribute('data-fullStoryWhitelist', FULL_STORY_WHITELIST);
          friendlyFrame.setAttribute('data-neoWhiteList', NEO_TRAFFIC_WHITELIST);
          friendlyFrame.name = 'sdk-stanzacal';
          if (category) {
            friendlyFrame.setAttribute('data-category', category);
          }
          if (customLink) {
            friendlyFrame.setAttribute('data-ticketing', customLink);
          }

          if (shortname === 'nba-celtics' || shortname === 'nfl-jets') {
            friendlyFrame.setAttribute('data-buttonColor', 'rgb(0,131,72)');
          } else if (shortname === 'nba-kings') {
            friendlyFrame.setAttribute('data-buttonColor', 'rgb(91,43,130)');
          } else if (shortname === 'nfl-chiefs') {
            friendlyFrame.setAttribute('data-buttonColor', 'rgb(227,24,55)');
          } else if (shortname === 'nba-heat') {
            friendlyFrame.setAttribute('data-buttonColor', 'rgb(152,0,46)');
          } else if (shortname === 'nfl-bears') {
            friendlyFrame.setAttribute('data-buttonColor', 'rgb(11,22,42)');
          } else {
            friendlyFrame.setAttribute('data-buttonColor', buttonColor);
          }

          el.appendChild(friendlyFrame);

          // Only do this for firefox version >= 42
          friendlyFrame.contentWindow.document.open('text/htmlreplace');
          // if (true) {
            //   // Add firefox check here
            // } else {
              //   friendlyFrame.contentWindow.document.write('<script src="' + DOMAIN + '/timeline/static/StanzaCal-v3.js"></script>');
              // }
          var baseURL = isNeo ? 'https://test-2.stanza.dance' : DOMAIN;
          loadAndInjectStanzaCalScript(friendlyFrame, baseURL + '/timeline/static/StanzaCal-v3.js').then(_ => {
            friendlyFrame.contentWindow.document.close();
            var isWhoScored = window.top.location.href.indexOf('www.whoscored.com') > -1;
            if (isWhoScored) {
              fixWhoScoredPlacement();
            }
          });
        } else {
          var isTimelineEmbed = TIMELINE_EMBED_SITES.indexOf(site) > -1;
          // REGULAR IFRAME - Implemenatation
          var iframe = document.createElement('iframe');
          iframe.frameboard = 0;
          iframe.seamless = 'seamless';
          iframe.style.width = '1px';
          iframe.style.minWidth = '100%';
          iframe.style.height = '100%';
          iframe.style.border = 'none';
          iframe.style.outline = 0;
          // changing the order of these params will cause us to DOS attack ourselves
          if (!isTimelineEmbed) {
            iframe.src = DOMAIN + '/@' + shortname + '?embed=true' + '&prebidWhiteList=' + encodeURIComponent(PREBID_ONE_PUBLISHERS) + '&venatusV2WhiteList=' + encodeURIComponent(VENATUS_V2_WHITELIST) + '&stanzaCalEndpointWhitelist=' + encodeURIComponent(STANZACAL_ENDPOINT_WHITELIST) + '&fullStoryWhitelist=' + encodeURIComponent(FULL_STORY_WHITELIST) + (site ? '&site=' + site : '') + (category ? '&categoryId=' + category : '') + (buttonColor ? '&buttonColor=' + encodeURIComponent(buttonColor) : '') + (layout ? '&layout=' + layout : '') + (opacity ? '&opacity=' + opacity : '') + (showAds ? '&showAds=' + showAds : '') + (topUrl ? '&topUrl=' + topUrl : '') + (THEMES.indexOf(theme) !== -1 && theme !== DEFAULT_THEME ? '&theme=' + theme : '');
          } else {
            iframe.src = DOMAIN + '/@' + shortname + '?site=' + site;
            if (DARK_MODE_WHITELIST.indexOf(site) > -1 || theme === 'dark') {
              el.style.border = '1px solid #404040';
            } else {
              el.style.border = '1px solid #ebebeb';
            }
          }

          el.style.width = width || '100%';

          var defaultHeight = layout === 'booking' ? '' : '100%';
          el.style.height = height || defaultHeight;

          if (IS_IOS) {
            // issue exclusive to vertical layout and iOS
            // without this, the iframe will overflow past the expected dimensions and cover the parent page
            // https://coderwall.com/p/c-aqqw/scrollable-iframe-on-mobile-safari
            el.style.overflow = 'hidden';
            el.style.webkitOverflowScrolling = 'touch';
          }
          el.appendChild(iframe);
        }
        if (window.__STANZA_LIVE_SCORE_UNIT__ && !window.__STANZA_LIVE_SCORE_UNIT__.injected) {
          window.__STANZA_LIVE_SCORE_UNIT__.injected = true;
          if (site === 'chicitysports' || site === 'dkpittsburghsports.com') {
            var topUrl = getAttribute(el, 'topUrl') || window.location.href;
            var newShortname;
            var requestUrl = DOMAIN + '/api/guess_shortname?url=' + encodeURIComponent(topUrl);
            makeRequest('GET', requestUrl, null, function (err, response) {
              try {
                response = JSON.parse(response);
                newShortname = response.calendar;
              } catch (e) {}
              injectGameDayUnit(site, newShortname, null);
            });
          } else {
            if (category) {
              injectGameDayUnit(site, shortname, category);
            } else {
              injectGameDayUnit(site, shortname, null);
            }
          }
          return;
        }
      }

      function loadStyleFile(path, iframe) {
        if (!iframe) {
          var styles = document.createElement('link');
          styles.rel = 'stylesheet';
          styles.type = 'text/css';
          styles.media = 'screen';
          styles.href = path;
          document.getElementsByTagName('head')[0].appendChild(styles);
        } else {
          var styles = iframe.contentWindow.document.createElement('link');
          styles.rel = 'stylesheet';
          styles.type = 'text/css';
          styles.media = 'screen';
          styles.href = path;
          iframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(styles);
        }
      }

      function renderInsticatorCreative(site, adIframe, adTag) {
        var topWindow = adIframe.contentWindow;
        var c = topWindow.document;
        var u = adTag;
        if (typeof topWindow.Insticator === 'undefined') {
          topWindow.Insticator = {
            ad: {
              loadAd: function loadAd(b) {
                topWindow.Insticator.ad.q.push(b);
              },
              q: []
            },
            helper: {},
            embed: {},
            version: "3.0",
            q: [],
            load: function load(t, o) {
              topWindow.Insticator.q.push({
                t: t,
                o: o
              });
            }
          };
          var b = c.createElement('script');
          b.src = u;
          b.id = 'insticator-script-load';
          var d = c.getElementsByTagName('head')[0];
          d.appendChild(b);
          b.addEventListener('load', function () {
            topWindow.Insticator.ad.loadAd('div-insticator-ad-4');
          });
        } else {
          topWindow.Insticator.ad.loadAd('div-insticator-ad-4');
        }
      }

      function loadVenatusAdManager(venatusConfig) {
        // Make sure ad manager does not exist yet
        if (venatusConfig) {
          var topWindow = window.top || window;
          var topDocument = topWindow.document;
          if (typeof topWindow.__stanza_venatus_loaded === 'undefined') {
            var adManager = topDocument.createElement('script');
            adManager.src = 'https://hb.vntsm.com/v3/live/ad-manager.min.js';
            adManager.type = 'text/javascript';
            adManager.setAttribute('data-mode', 'scan');
            adManager.setAttribute('data-stanza', 'true');
            adManager.setAttribute('data-site-id', venatusConfig.siteId);
            topDocument.head.appendChild(adManager);
            topWindow.__stanza_venatus_loaded = true;
          } else if (isDebug) {
            console.warn('Stanza Debug - attempted to load ad manager multiple times');
          }
        } else if (isDebug) {
          console.warn('Stanza Debug - attempted to load ad manager without a venatusConfig');
        }
      }

      function fixWhoScoredPlacement() {
        var topWindow = window.top;
        if (typeof topWindow.__STANZA_FIXED_WHOSCORED__ === 'undefined') {
          var stanzaParent = window.parent && window.parent.parent;
          if (stanzaParent) {
            var dfpAdContainer = stanzaParent.document.getElementById('WS_480x440');
            if (typeof dfpAdContainer !== 'undefined' && dfpAdContainer) {
              dfpAdContainer.style.width = '100%';
              dfpAdContainer.style.height = '250px';
              var dfpIframes = stanzaParent.document.body.querySelectorAll("iframe[id^=google_ads_iframe_]");
              for (var i = 0; i < dfpIframes.length; i++) {
                var adContainer = dfpIframes[i];
                if (adContainer.id.indexOf('480x440') > -1) {
                  adContainer.style.width = '100%';
                  adContainer.style.height = '250px';
                  topWindow.__STANZA_FIXED_WHOSCORED__ = true;
                }
              }
            }
          }
        }
      };

      function renderVenatusCreative(site, adIframe, venatusConfig, slotNum, isExternalAd) {
        var topWindow = window.top;
        var topDocument = topWindow.document;
        var containerId = 'venatus-ad-container-' + slotNum;
        var venatusContainer = document.getElementById(containerId);

        // In case an ad is traffiked incorrectly going forward
        // we also do not want to switch reporting for ad rendering outside of stanzacal
        var useSecondaryId = venatusConfig && venatusConfig.secondaryId && !isExternalAd;
        var venatusId = useSecondaryId ? venatusConfig.secondaryId : venatusConfig.id;

        loadVenatusAdManager(venatusConfig);

        var newPlacement = document.createElement('div');
        newPlacement.className = 'vm-placement';
        newPlacement.setAttribute('data-id', venatusId);
        venatusContainer.appendChild(newPlacement);
        window.top.__vm_add = window.top.__vm_add || [];
        window.top.__vm_add.push(newPlacement);
      }

      function getMatchId(shortname, site, category, callback) {
        getUpcomingGames(shortname, site, function (upcomingGames, adTag, siteDoc) {
          var liveGameIndex = null;
          var prev = null;
          var curr = null;
          var next = null;
          for (var i = 0; i < upcomingGames.length; i++) {
            var game = upcomingGames[i];
            if (new Date(game.dates.start) > new Date()) {
              var next = game;
              var curr = upcomingGames[i - 1];
              var prev = upcomingGames[i - 2];
              break;
            }
          }
          callback({
            liveGame: curr,
            nextGame: next,
            prevGame: prev,
            adTag: adTag,
            siteDoc: siteDoc
          });
        });
      }

      function renderSportsRadarWidget(matchConfig, site, calendar, showCarousel, showNflUnit, divId, gameDayUnit, sportLeague, unitCount, hasAdsBlocked, event, category) {
        var parseMatchId;
        var parseTeamId;
        var extraWidgetProps = gameDayUnit ? gameDayUnit.extraProps : { showDate: true };

        // stop showing old game score and show upcoming game within 12 hours of next game
        var containerId = 'stanza-live-score-unit-inner-container';
        if (unitCount !== 1) {
          var containerId = 'stanza-live-score-unit-inner-container-' + unitCount;
        }
        var sportsRadarUnitContainer = document.getElementById(containerId);
        var widget;
        if (site === 'huskermax') {
          widget = 'us.match.scoreSmall';
          if (category === '5751c17d3b9a89b14c67a53c') {
            //football
            parseMatchId = '17919276';
            parseTeamId = '4282';
          } else if (category === '5751c17d3b9a89b14c67a53a') {
            //basketball
            parseMatchId = '19872356';
            parseTeamId = '4282';
          }
        } else if (gameDayUnit) {
          widget = gameDayUnit.widgetType;
          if (showCarousel) {
            extraWidgetProps = Object.assign(extraWidgetProps, carouselProps[sportLeague]);
            // HOTFIX for sportsradar carousel issue
            var cssPath = 'https://dff2h0hbfv6w4.cloudfront.net/stanza/live-score-unit/' + sportLeague + '-carousel.css';
            if (site === '49erswebzone') {
              loadStyleFile('https://dff2h0hbfv6w4.cloudfront.net/stanza/live-score-unit/49ers-carousel.css');
            } else if (site === 'chicitysports' && sportLeague === 'mlb') {
              loadStyleFile('https://dff2h0hbfv6w4.cloudfront.net/stanza/live-score-unit/chi-carousel.css');
            } else {
              loadStyleFile(cssPath);
            }
            if (sportLeague.includes('ncaa')) {
              var clickHandler = function clickHandler(topUrl, site, calendar, hasAdsBlocked, event) {
                return function (target, data) {
                  var kinesisUrl = 'https://rvubpygo5f.execute-api.us-west-2.amazonaws.com/prod/kinesis';
                  var kinesisBody = {
                    EventName: 'Action',
                    EventType: 'game_day_unit_click',
                    App: 'live_score_unit',
                    Site: site,
                    Event: event,
                    Source: 'live_score_unit',
                    AdBlocker: hasAdsBlocked,
                    TopUrl: topUrl,
                    Calendar: calendar
                  };
                  var xhr = new XMLHttpRequest();
                  xhr.open('POST', kinesisUrl);
                  xhr.send(JSON.stringify(kinesisBody));
                  var matchId = data.matchId;
                  if (matchId) {
                    matchId = matchId.split(':');
                    if (matchId.length === 3) {
                      matchId = matchId[2];
                      var url = 'https://www.stanza.co/api/events/match/' + matchId + '/nfl/';
                      window.open(url);
                    } else {
                      window.open('https://www.stanza.co/');
                    }
                  } else {
                    window.open('https://www.stanza.co/');
                  }
                };
              };

              extraWidgetProps = Object.assign(extraWidgetProps, { onItemClick: clickHandler(topUrl, site, calendar, hasAdsBlocked, event), useGlobalMatchIds: true, conference: 'big12' });
            } else if (sportLeague === 'nfl') {
              var _clickHandler = function _clickHandler(topUrl, site, calendar, hasAdsBlocked, event) {
                return function (target, data) {
                  var kinesisUrl = 'https://rvubpygo5f.execute-api.us-west-2.amazonaws.com/prod/kinesis';
                  var kinesisBody = {
                    EventName: 'Action',
                    EventType: 'game_day_unit_click',
                    App: 'live_score_unit',
                    Site: site,
                    Event: event,
                    Source: 'live_score_unit',
                    AdBlocker: hasAdsBlocked,
                    TopUrl: topUrl,
                    Calendar: calendar
                  };
                  var xhr = new XMLHttpRequest();
                  xhr.open('POST', kinesisUrl);
                  xhr.send(JSON.stringify(kinesisBody));
                  var matchId = data.matchId;
                  if (matchId) {
                    matchId = matchId.split(':');
                    if (matchId.length === 3) {
                      matchId = matchId[2];
                      var url = 'https://www.stanza.co/api/events/match/' + matchId + '/nfl/';
                      window.open(url);
                    } else {
                      window.open('https://www.stanza.co/');
                    }
                  } else {
                    window.open('https://www.stanza.co/');
                  }
                };
              };

              extraWidgetProps = Object.assign(extraWidgetProps, { onItemClick: _clickHandler(topUrl, site, calendar, hasAdsBlocked, event), useGlobalMatchIds: true });
            } else {
              var _clickHandler2 = function _clickHandler2(topUrl, site, calendar, hasAdsBlocked, event) {
                return function (target, data) {
                  var kinesisUrl = 'https://rvubpygo5f.execute-api.us-west-2.amazonaws.com/prod/kinesis';
                  var kinesisBody = {
                    EventName: 'Action',
                    EventType: 'game_day_unit_click',
                    App: 'live_score_unit',
                    Site: site,
                    Event: event,
                    Source: 'live_score_unit',
                    AdBlocker: hasAdsBlocked,
                    TopUrl: topUrl,
                    Calendar: calendar
                  };
                  var xhr = new XMLHttpRequest();
                  xhr.open('POST', kinesisUrl);
                  xhr.send(JSON.stringify(kinesisBody));
                  var matchId = data.matchId;
                  if (matchId) {
                    var url = 'https://www.stanza.co/api/events/match/' + matchId + '/all/';
                    window.open(url);
                  } else {
                    window.open('https://www.stanza.co/');
                  }
                };
              };
            }
          } else if (widget.includes('topPlayers') || widget.includes('standings')) {
            extraWidgetProps = Object.assign(extraWidgetProps, topPlayersProps[sportLeague]);
            if (widget.includes('standings') && (sportLeague.includes('nfl') || sportLeague.includes('nhl'))) {
              extraWidgetProps = Object.assign(extraWidgetProps, carouselProps[sportLeague]);
            }
            if (widget.includes('topPlayers')) {
              loadStyleFile('https://dff2h0hbfv6w4.cloudfront.net/stanza/live-score-unit/topPlayersPadding.css');
            }
          } else if (widget.includes('scoreSmall')) {
            if (matchConfig && matchConfig.liveGame) {
              var date = new Date();
              var hours = 12 * 60 * 60 * 1000;
              var newDate = new Date(date - hours);
              var getMatch = new Date(matchConfig.liveGame.dates.start) < newDate ? matchConfig.nextGame.srMatchId : matchConfig.liveGame.srMatchId;
              var getTeam = new Date(matchConfig.liveGame.dates.start) < newDate ? matchConfig.nextGame.calendar.srTeamId : matchConfig.liveGame.calendar.srTeamId;
              parseMatchId = getMatch.split(':')[2];
              parseTeamId = getTeam.split(':')[2];
            }
          }
        }

        (function (a, b, c, d, e, f, g, h, i) {
          a[e] || (i = a[e] = function () {
            (a[e].q = a[e].q || []).push(arguments);
          }, i.l = 1 * new Date(), i.o = f, g = b.createElement(c), h = b.getElementsByTagName(c)[0], g.async = 1, g.src = d, g.setAttribute("n", e), h.parentNode.insertBefore(g, h));
        })(window, document, "script", "https://widgets.media.sportradar.com/stanza/widgetloader", "SIR", {
          language: 'en',
          matchId: parseMatchId,
          teamUid: parseTeamId,
          theme: false,
          showDate: true
        });
        SIR('addWidget', '#' + containerId, widget, extraWidgetProps);
        fireSportRadarTrackingPixel(site, calendar, widget, parseMatchId, parseTeamId);
      }

      function fireSportRadarTrackingPixel(site, calendar, widget, matchId, teamId) {
        try {
          (function (a, b, c, d, e, f) {
            a[e] = a[e] || [];a.x = b.createElement(c);a.y = b.getElementsByTagName(c)[0];x.src = d + "?id=" + f;x.setAttribute("data-srtmn", e);y.parentNode.insertBefore(x, y);
          })(window, document, "script", "https://tm.ads.sportradar.com/dist/tag-manager.js", "srtmCommands", "AAAAAAAAAD");
          if (typeof srtmCommands !== 'undefined') {
            srtmCommands.push({
              "event": "srt.widget",
              "payload": {
                originator: "stanza_widget",
                trigger: "widget_view",
                type: "calendar_widget",
                tags: [calendar, site, matchId, teamId]
              }
            });
          }
        } catch (e) {
          console.log(e);
        }
      }

      function toggleLiveScoreUnit() {
        var topWindow = window;
        var c = topWindow.document;
        var adContainer = document.getElementById('stanza-live-score-ad-iframe-container');
        if (adContainer && window.__STANZA_LIVE_SCORE_UNIT__ && !window.__STANZA_LIVE_SCORE_UNIT__.hideAd) {
          adContainer.style.transform = 'translateX(-500px)';
          adContainer.style.height = 0;
          adContainer.parentNode.removeChild(adContainer);
          window.__STANZA_LIVE_SCORE_UNIT__.hideAd = true;
        } else {
          window.clearTimeout(window.insticatorToggleTimeout);
          window.clearTimeout(window.insticatorLivesScoreTimeout);
          var isVisible = window.__STANZA_LIVE_SCORE_UNIT__.isVisible;
          var fixedMiniCTA = document.getElementById('stanza-live-score-unit-fixed-cta');
          if (window.__STANZA_LIVE_SCORE_UNIT__) {
            if (window.__STANZA_LIVE_SCORE_UNIT__.isVisible) {
              window.__STANZA_LIVE_SCORE_UNIT__.isVisible = false;
              isVisible = false;
              fixedMiniCTA.style.transform = 'translateX(0px)';
            } else {
              window.__STANZA_LIVE_SCORE_UNIT__.isVisible = true;
              fixedMiniCTA.style.transform = 'translateX(-500px)';
              isVisible = true;
            }
          }
          var liveScoreContainer = document.getElementById('stanza-live-score-unit');
          if (isVisible) {
            liveScoreContainer.style.transform = 'translateY(0%)';
          } else {
            liveScoreContainer.style.transform = 'translateY(120%)';
          }
        }
      }

      function showLiveScoreUnitContent(unitCount) {
        var sportsRadarUnitContainer = document.getElementById('stanza-live-score-unit-inner-container');
        if (unitCount !== 1) {
          sportsRadarUnitContainer = document.getElementById('stanza-live-score-unit-inner-container-' + unitCount);
        }
        sportsRadarUnitContainer.style.opacity = 1;
      }

      function neverMissGameText() {
        var neverMissGameText = document.createElement('div');
        neverMissGameText.id = 'stanza-live-score-unit-never-miss-game';
        neverMissGameText.innerHTML = 'Never miss another game!';
        return neverMissGameText;
      }

      function renderA2C() {
        var addToCalendarButton = document.createElement('div');
        addToCalendarButton.id = 'stanza-live-score-add-to-calendar';
        return addToCalendarButton;
      }

      function renderMiniCTA(currentGame) {
        var fixedMiniCTA = document.createElement('stanza-live-scorve-fixed-cta');
        fixedMiniCTA.id = 'stanza-live-score-unit-fixed-cta';
        fixedMiniCTA.style.transform = 'translateX(-500px)';
        var teamLogo = document.createElement('div');
        teamLogo.id = 'stanza-live-score-unit-fixed-cta-logo';
        var backImage = currentGame && currentGame.calendar && currentGame.calendar.image;
        teamLogo.style.backgroundImage = 'url(' + backImage + ')';
        fixedMiniCTA.appendChild(teamLogo);
        var teamName = document.createElement('p');
        teamName.id = 'stanza-live-score-unit-fixed-cta-name';
        teamName.innerHTML = 'VIEW LIVE SCORES';
        fixedMiniCTA.appendChild(teamName);
        return fixedMiniCTA;
      }

      function renderLiveScoreAd(site, slotNum, isInsticator) {
        var liveScoreAdContainer = document.createElement('div');
        liveScoreAdContainer.id = 'stanza-live-score-ad-container';
        var liveScoreAd = document.createElement('div');
        liveScoreAdContainer.style.overflow = 'hidden';
        liveScoreAd.style.overflow = 'hidden';
        liveScoreAdContainer.style.width = '100%';
        liveScoreAdContainer.style.height = '250px';
        liveScoreAd.style.margin = 'auto';
        if (!isInsticator) {
          liveScoreAd.id = 'venatus-ad-container-' + slotNum;
        } else {
          liveScoreAd.id = 'div-insticator-ad-4';
        }
        liveScoreAdContainer.appendChild(liveScoreAd);
        return liveScoreAdContainer;
      }

      function renderSportsRadarContainer(app, site, calendar, event, source, topUrl, hasAdsBlocked, showCarousel, isEmbed, currentGame, showNflUnit, isForums, divId, gameDayUnit, unitCount, category) {
        var liveScoreUnitContainer = document.createElement('div');
        liveScoreUnitContainer.id = 'stanza-live-score-unit-container';
        var liveScoreUnitInnerContainer = document.createElement('div');
        var containerId = 'stanza-live-score-unit-inner-container';
        if (unitCount !== 1) {
          containerId = 'stanza-live-score-unit-inner-container-' + unitCount;
        }
        liveScoreUnitInnerContainer.id = containerId;
        liveScoreUnitContainer.appendChild(liveScoreUnitInnerContainer);
        var liveScoreUnitInnerContainerLayer = document.createElement('div');
        liveScoreUnitInnerContainerLayer.id = 'stanza-live-score-unit-inner-container-layer';
        liveScoreUnitInnerContainerLayer.style.opacity = 0;
        if (divId && !calendar.includes('nba')) {
          liveScoreUnitContainer.style.overflow = 'scroll';
        } else if (calendar.includes('nhl')) {
          liveScoreUnitContainer.style.overflow = 'scroll';
        } else {
          liveScoreUnitContainer.style.overflow = 'hidden';
        }
        if (gameDayUnit && gameDayUnit.customHeight) {
          var height = gameDayUnit.customHeight + 'px';
          liveScoreUnitContainer.style.height = height;
          if (gameDayUnit.widgetType.includes('topPlayers')) {
            liveScoreUnitContainer.style.overflow = 'scroll';
          }
        } else if ((showNflUnit || divId || calendar.includes('nhl')) && !isForums) {
          liveScoreUnitContainer.style.height = '180px';
          if (divId && site === 'realgm.com') {
            liveScoreUnitContainer.style.height = '115px';
            liveScoreUnitContainer.style.cursor = 'pointer';
            liveScoreUnitContainer.onclick = function () {
              var id = currentGame ? currentGame._id : event;
              var url = 'https://www.stanza.co/event/' + id + '?embed=true';
              trackMpRedirect(app, site, calendar, event, source, topUrl, url, 'unit_click', 'Action', hasAdsBlocked);
              window.open(url);
            };
          }
        } else if (isForums) {
          liveScoreUnitContainer.style.height = '170px';
        } else if (showCarousel && isMobile()) {
          liveScoreUnitContainer.style.height = '98px';
        } else if (!isMobile() && !showCarousel) {
          liveScoreUnitContainer.style.height = '72px';
        } else if (!isMobile() && showCarousel) {
          liveScoreUnitContainer.style.height = '104px';
        } else {
          liveScoreUnitContainer.style.height = '95px';
          liveScoreUnitContainer.appendChild(liveScoreUnitInnerContainerLayer);
          liveScoreUnitInnerContainerLayer.addEventListener('click', function (e) {
            var id = currentGame ? currentGame._id : null;
            var url = 'https://www.stanza.co/event/' + id + '?embed=true';
            trackMpRedirect(app, site, calendar, event, source, topUrl, url, 'unit_click', 'Action', hasAdsBlocked);
            window.open(url);
          });
        }
        if (site === 'huskermax') {
          var id = '5cf01185af357d001b756b28';
          if (category === '5751c17d3b9a89b14c67a53c') {
            //football
            id = '5cf01185af357d001b756b28';
          } else if (category === '5751c17d3b9a89b14c67a53a') {
            //basketball
            id = '5d08c609d9259a001fa1ba32';
          }
          liveScoreUnitContainer.style.height = '95px';
          liveScoreUnitContainer.appendChild(liveScoreUnitInnerContainerLayer);
          liveScoreUnitInnerContainerLayer.addEventListener('click', function (e) {

            var url = 'https://www.stanza.co/event/' + id + '?embed=true';
            trackMpRedirect(app, site, calendar, event, source, topUrl, url, 'unit_click', 'Action', hasAdsBlocked);
            window.open(url);
          });
        }
        return liveScoreUnitContainer;
      }

      function injectAdIframe(liveScoreContainer, liveScoreAdContainer, site, pathToCss, isInsticator) {
        var adIframe;
        if (!isInsticator) {
          adIframe = document.createElement('div');
        } else {
          adIframe = document.createElement('iframe');
        }

        adIframe.id = 'stanza-live-score-ad-iframe-container';
        adIframe.style.width = '300px';
        adIframe.style.height = '250px';
        if (isMobile()) {
          adIframe.style.margin = 'auto';
        }
        liveScoreContainer.appendChild(adIframe);

        if (!isInsticator) {
          adIframe.appendChild(liveScoreAdContainer);
        } else {
          adIframe.contentWindow.document.write('<body style="margin: 0px;"></body>');
          adIframe.contentWindow.document.body.appendChild(liveScoreAdContainer);
          adIframe.contentWindow.document.body.style.margin = '0px';
          loadStyleFile(pathToCss, adIframe);
        }
        return adIframe;
      }

      function injectGameDayUnit(site, calendar, category) {
        var isDev = false;
        getMatchId(calendar, site, category, function (matchConfig) {
          checkAdblocker(function (hasAdsBlocked) {
            var date = new Date();
            var hours = 12 * 60 * 60 * 1000;
            var adTag = matchConfig.adTag;
            var newDate = new Date(date - hours);
            var liveGameDate = matchConfig.liveGame && new Date(matchConfig.liveGame.dates.start);
            var isNextGame = matchConfig.liveGame && new Date(matchConfig.liveGame.dates.start) < new Date();
            var siteDoc = matchConfig.siteDoc;
            var currentGame;
            if (matchConfig && matchConfig.liveGame && matchConfig.liveGame.dates && matchConfig.liveGame.dates.start) {
              currentGame = new Date(matchConfig.liveGame.dates.start) < newDate ? matchConfig.nextGame : matchConfig.liveGame;
            }
            // Venatus config will come down as an object, Insticator as a string
            var isInsticator = typeof adTag === 'string';
            var unitCount = 0;
            var showAds = isMobile() ? !hasAdsBlocked && siteDoc && siteDoc.enabled && siteDoc.mobileAds : !hasAdsBlocked && siteDoc && siteDoc.enabled;
            var scElements = document.getElementsByClassName('stanzacal');

            var topWindow = window.top || window;
            if (site && site === 'hornsports') {
              console.log(!hasAdsBlocked && (siteDoc && siteDoc.enabled && !isMobile() || siteDoc && siteDoc.mobileAds && isMobile()) && !isInsticator && VENATUS_AD_MANAGER_BLACKLIST.indexOf(site) < 0 && topWindow && !topWindow.__stanza_venatus_loaded);
              console.log(!hasAdsBlocked, siteDoc, siteDoc.enabled, !isMobile(), siteDoc, siteDoc.mobileAds, isMobile(), !isInsticator, VENATUS_AD_MANAGER_BLACKLIST.indexOf(site) < 0, topWindow, !topWindow.__stanza_venatus_loaded);
            }
            if (!hasAdsBlocked && (siteDoc && siteDoc.enabled && !isMobile() || siteDoc && siteDoc.mobileAds && isMobile()) && !isInsticator && VENATUS_AD_MANAGER_BLACKLIST.indexOf(site) < 0 && topWindow && !topWindow.__stanza_venatus_loaded) {
              loadVenatusAdManager(adTag);
            }
            if (site !== '49erswebzone' || site === '49erswebzone' && !window.location.href.includes('forum')) {
              // Second ad unit below Stanzacal
              if (siteDoc && siteDoc.showSecondAdUnit && !isMobile() && window.__STANZA_LIVE_SCORE_UNIT__ && !window.__STANZA_LIVE_SCORE_UNIT__.injectedSecondAd && showAds) {
                var adContainer = document.createElement('div');
                var ad = renderLiveScoreAd(site, 2, isInsticator);
                var adIframe = injectAdIframe(adContainer, ad, site, null, isInsticator);
                adIframe.style.margin = 'auto';
                scElements[0].parentNode.insertBefore(adContainer, scElements[0].nextSibling);
                scElements[0].style.margin = 'auto';
                window.__STANZA_LIVE_SCORE_UNIT__.injectedSecondAd = true;
                if (!isInsticator) {
                  renderVenatusCreative(site, adIframe, adTag, 2, true);
                } else {
                  renderInsticatorCreative(site, adIframe, adTag);
                }
              }
            }
            if (siteDoc && siteDoc.gameDayUnits && siteDoc.gameDayUnits.length > 0) {
              var pathToCss = isDev ? 'http://localhost:7000/styles/live-score-unit.css' : 'https://dff2h0hbfv6w4.cloudfront.net/stanza/live-score-unit/live-score-unit.css';
              loadStyleFile(pathToCss);
              for (var i = 0; i < siteDoc.gameDayUnits.length; i++) {
                var gameDayUnit = siteDoc.gameDayUnits[i];
                var shouldSkip = false;
                var sportLeague;
                if (calendar.includes('nba') || calendar.includes('cavsnation')) {
                  sportLeague = 'nba';
                } else if (calendar.includes('nhl') || calendar.includes('dkpittsburghsports')) {
                  sportLeague = 'nhl';
                } else if (calendar.includes('mlb') || calendar.includes('russellstreetreport') && site === 'eutawstreetreport') {
                  sportLeague = 'mlb';
                } else if (calendar.includes('nfl') || calendar.includes('49erswebzone') || calendar.includes('russellstreetreport')) {
                  sportLeague = 'nfl';
                } else if (gameDayUnit.widgetType && gameDayUnit.widgetType.includes('ncaab')) {
                  sportLeague = 'ncaab';
                } else if (gameDayUnit.widgetType && gameDayUnit.widgetType.includes('ncaaf')) {
                  sportLeague = 'ncaaf';
                }
                if (gameDayUnit.testPage) {
                  if (!window.location.href.includes(gameDayUnit.testPage)) {
                    continue;
                  }
                }
                if (gameDayUnit.blacklistPages && gameDayUnit.blacklistPages.length > 0) {
                  gameDayUnit.blacklistPages.forEach(function (blackPage) {
                    if (window.location.href.includes(blackPage)) {
                      shouldSkip = true;
                    }
                  });
                }
                if (gameDayUnit.whitelistPages && gameDayUnit.whitelistPages.length > 0) {
                  gameDayUnit.whitelistPages.forEach(function (whitePage) {
                    if (!window.location.href.includes(whitePage)) {
                      shouldSkip = true;
                    }
                  });
                }
                if (gameDayUnit.activeSports && gameDayUnit.activeSports.length > 0) {
                  var foundLeague = false;
                  gameDayUnit.activeSports.forEach(function (sport) {
                    if (sport.includes(sportLeague)) {
                      foundLeague = true;
                    }
                  });
                  if (!foundLeague && site !== 'huskermax') {
                    continue;
                  }
                }
                if (NO_HOMEPAGE_GAMEDAY.indexOf(site) > -1 && window && window.location && window.location.pathname === '/') {
                  shouldSkip = true;
                }
                if (site === 'huskermax') {
                  shouldSkip = false;
                }
                if (shouldSkip) {
                  continue;
                }
                if (!gameDayUnit.showDesktop && !isMobile()) {
                  continue;
                }
                if (!gameDayUnit.showMobile && isMobile()) {
                  continue;
                }
                unitCount++; //Used to display correct ad containers
                var app = 'live_score_unit';
                var topUrl = window.location.href;
                var divId = unitCount === 1 ? false : true;
                var source = 'live_score_unit';
                var event = currentGame ? currentGame._id : 'No event Rendered';
                var isEmbed = isMobile();
                var showCarousel = gameDayUnit.widgetType.includes('Carousel') && !gameDayUnit.widgetType.includes('standings');
                var showNflUnit = gameDayUnit.widgetType.includes('topPlayers');
                var isForums = !isMobile() && gameDayUnit.showHorizontal;

                // Track live score unit load event
                trackMpRedirect(app, site, calendar, event, source, topUrl, null, 'InView', 'Load', hasAdsBlocked);
                var extrastyles;
                if (gameDayUnit.extraStyles && gameDayUnit.extraStyles.container) {
                  extrastyles = gameDayUnit.extraStyles.container;
                }
                var liveScoreContainer = document.createElement('div');
                liveScoreContainer.id = 'stanza-live-score-unit';
                liveScoreContainer.style = extrastyles ? extrastyles : '';
                if (gameDayUnit.customHeight) {
                  liveScoreContainer.style.height = gameDayUnit.customHeight + ' px';
                  if (isForums) {
                    liveScoreContainer.style.width = '100%';
                  } else {
                    liveScoreContainer.style.width = '300px';
                  }
                } else {
                  liveScoreContainer.style.height = '250px';
                  if (isForums) {
                    liveScoreContainer.style.width = '100%';
                  } else {
                    liveScoreContainer.style.width = '300px';
                  }
                }
                if (gameDayUnit.centeredUnit) {
                  liveScoreContainer.style.margin = '0px auto';
                }
                var elements = document.getElementsByClassName(gameDayUnit.className);
                // if there is a typo in the tag or publisher changes tag name, fail gracefully
                if (elements.length === 0) {
                  continue;
                }

                if (window.location.href === 'https://basketball.realgm.com/' || window.location.href === 'https://football.realgm.com/') {
                  elements = document.getElementsByClassName('portal widget');
                  if (elements.length > 1) {
                    elements[1].parentNode.insertBefore(liveScoreContainer, elements[1]);
                  }
                } else {
                  if (gameDayUnit.unitPosition === 'above') {
                    if (SECOND_STANZACAL.indexOf(site) > -1 && elements.length > 1 && gameDayUnit.className === 'stanzacal') {
                      elements[1].parentNode.insertBefore(liveScoreContainer, elements[1]);
                    } else if (SECOND_ELEMENT_LIST.indexOf(site) > -1 && elements.length > 1 && gameDayUnit.className !== 'stanzacal' && !isMobile()) {
                      elements[1].parentNode.insertBefore(liveScoreContainer, elements[1]);
                    } else {
                      elements[0].parentNode.insertBefore(liveScoreContainer, elements[0]);
                    }
                  } else {
                    if (site === 'chicitysports' && elements.length > 1) {
                      elements[1].parentNode.insertBefore(liveScoreContainer, elements[1].nextSibling);
                    } else {
                      elements[0].parentNode.insertBefore(liveScoreContainer, elements[0].nextSibling);
                    }
                  }
                }

                // Ad Container
                if (showAds) {
                  if (unitCount !== 1) {
                    var liveScoreAdContainer = renderLiveScoreAd(site, unitCount + 1, isInsticator);
                  } else {
                    var liveScoreAdContainer = renderLiveScoreAd(site, 1, isInsticator);
                  }
                }
                var liveScoreInnerContainer = document.createElement('div');
                liveScoreInnerContainer.id = 'live-score-unit-inner-container';

                // Sports Radar Widget
                var liveScoreUnitContainer = renderSportsRadarContainer(app, site, calendar, event, source, topUrl, hasAdsBlocked, showCarousel, isEmbed, currentGame, showNflUnit, isForums, divId, gameDayUnit, unitCount, category);
                var largeContainer = document.createElement('div');
                largeContainer.id = 'stanza-live-score-large-container';

                if (gameDayUnit.showHeader) {
                  var liveScoreUnitNflHead = document.createElement('div');
                  var nflText = document.createElement('div');

                  var icon = sportLeague;

                  liveScoreUnitNflHead.id = 'stanza-live-score-nfl-heading';
                  if (gameDayUnit.customCopy) {
                    nflText.innerHTML = gameDayUnit.customCopy;
                  } else if (isForums) {
                    largeContainer.style.verticalAlign = 'top';
                    liveScoreUnitNflHead.style.textAlign = 'center';
                    var sport = icon.toUpperCase();
                    if (isForums && !divId) {
                      nflText.innerHTML = sport + ' Odds & Live Game Scores';
                      if (calendar.includes('nba') && site === 'realgm.com') {
                        nflText.innerHTML = 'NBA Finals Live Scores';
                      }
                    } else if (divId) {
                      nflText.innerHTML = sport + ' Stats Leaders';
                      if (calendar.includes('nba') && site === 'realgm.com') {
                        nflText.innerHTML = 'NBA Finals Live Scores';
                      }
                    }
                    liveScoreUnitNflHead.style.textAlign = 'center';
                    largeContainer.style.verticalAlign = 'top';
                  } else if (calendar.includes('nhl')) {
                    nflText.innerHTML = 'NHL Stats Leaders';
                  }
                  nflText.id = 'stanza-live-score-nfl-text';
                  liveScoreUnitNflHead.appendChild(nflText);
                  largeContainer.appendChild(liveScoreUnitNflHead);
                }
                // Powered By Stanza
                var poweredByStanza = document.createElement('div');
                poweredByStanza.id = 'stanza-live-score-unit-poweredby';

                var addSchedules = document.createElement('div');
                addSchedules.id = 'stanza-live-score-unit-add-schedules';
                var schedulesTextContainer = document.createElement('div');
                schedulesTextContainer.id = 'stanza-scedules-text-container';
                var schedulesText = document.createElement('span');
                var schedulesText2 = document.createElement('span');
                var schedulesText3 = document.createElement('span');
                schedulesText.id = 'stanza-schedules-text';
                schedulesText.innerHTML = 'Join';
                schedulesText2.id = 'stanza-schedules-text-2';
                schedulesText2.innerHTML = '2.8M';
                schedulesText3.id = 'stanza-schedules-text-3';
                schedulesText3.innerHTML = 'fans and follow your team';
                schedulesTextContainer.appendChild(schedulesText);
                schedulesTextContainer.appendChild(schedulesText2);
                schedulesTextContainer.appendChild(schedulesText3);
                var lowerSchedulesContainer = document.createElement('div');
                lowerSchedulesContainer.id = 'stanza-lower-add-container';
                var a2c = document.createElement('div');
                a2c.id = 'stanza-live-score-a2c-button';
                var a2cLogo = document.createElement('img');
                a2cLogo.src = 'https://dff2h0hbfv6w4.cloudfront.net/images/stanza/logos/stanza-icon-white-3x.png';
                a2cLogo.id = 'stanza-live-score-a2c-logo';
                var a2cText = document.createElement('span');
                a2cText.id = 'stanza-a2c-text';
                a2cText.innerHTML = 'ADD TO CALENDAR';
                var newPoweredBy = document.createElement('img');
                newPoweredBy.id = 'stanza-powered-by-stacked';
                newPoweredBy.src = 'https://dff2h0hbfv6w4.cloudfront.net/images/stanza/logos/powered-stacked-logo-grey.png';
                newPoweredBy.addEventListener('click', function () {
                  var url = 'https://www.stanza.co';
                  trackMpRedirect(app, site, calendar, event, source, topUrl, url, 'powered_by_stanza_click', 'Action', hasAdsBlocked);
                });
                a2c.appendChild(a2cLogo);
                a2c.appendChild(a2cText);
                lowerSchedulesContainer.appendChild(a2c);
                lowerSchedulesContainer.appendChild(newPoweredBy);
                addSchedules.appendChild(schedulesTextContainer);
                addSchedules.appendChild(lowerSchedulesContainer);

                a2c.addEventListener('click', function () {
                  var url = 'https://www.stanza.co/@' + sportLeague;
                  if (sportLeague.indexOf('ncaa') > -1) {
                    var url = 'https://www.stanza.co/@' + calendar;
                  }
                  if (site === 'huskermax') {
                    if (category === '5751c17d3b9a89b14c67a53a') {
                      url = 'https://www.stanza.co/@huskermax/sync#/subscribe/nebraskamensbasketball';
                    } else if (category === '5751c17d3b9a89b14c67a53c') {
                      url = 'https://www.stanza.co/@huskermax/sync#/subscribe/nebraskafootball';
                    }
                  }
                  window.open(url);
                  trackMpRedirect(app, site, calendar, event, source, topUrl, url, 'a2c_stanza_click', 'Action', hasAdsBlocked);
                });

                largeContainer.appendChild(liveScoreUnitContainer);
                // largeContainer.appendChild(poweredByStanza);
                largeContainer.appendChild(addSchedules);
                if (isForums) {
                  largeContainer.style.display = 'inline-block';
                  largeContainer.style.width = 'calc(100% - 302px)';
                }
                liveScoreContainer.appendChild(largeContainer);

                // largeContainer.appendChild(liveScoreInnerContainer);
                // }

                if (showAds) {
                  var adIframe = injectAdIframe(liveScoreContainer, liveScoreAdContainer, site, pathToCss, isInsticator);
                }
                if (isForums) {
                  adIframe.style.display = 'inline-block';
                }
                if (showAds) {
                  if (gameDayUnit.showVenatus) {
                    if (unitCount !== 1) {
                      renderVenatusCreative(site, adIframe, adTag, unitCount + 1, false);
                    } else {
                      renderVenatusCreative(site, adIframe, adTag, unitCount, false);
                    }
                  } else {
                    renderInsticatorCreative(site, adIframe, adTag);
                  }
                }
                renderSportsRadarWidget(matchConfig, site, calendar, showCarousel, showNflUnit, divId, gameDayUnit, sportLeague, unitCount, hasAdsBlocked, event, category);
                setTimeout(function () {
                  showLiveScoreUnitContent(unitCount);
                }, 1000);
              };
            } else {
              return;
            }
          });
        });
      }

      function getAdBlockerStatus(cb) {
        var adBlockTester = document.createElement('div');
        adBlockTester.innerHTML = '&nbsp;';
        adBlockTester.className = 'adsbox';
        document.body.appendChild(adBlockTester);
        window.setTimeout(function () {
          var adBlockStatus = adBlockTester.offsetHeight === 0;
          adBlockTester.remove();
          if (adBlockStatus) {
            cb(true);
          } else {
            cb(false);
          }
        }, 60);
      }

      function trackMpRedirect(app, site, calendar, event, source, topUrl, redirectUrl, type, name, adBlockerStatus) {
        var kinesisUrl = 'https://rvubpygo5f.execute-api.us-west-2.amazonaws.com/prod/kinesis';
        var kinesisBody = {
          EventName: name,
          EventType: type,
          App: app,
          Site: site,
          Event: event,
          Source: source,
          AdBlocker: adBlockerStatus,
          TopUrl: topUrl,
          RedirectUrl: redirectUrl,
          Calendar: calendar
        };
        makeRequest('POST', kinesisUrl, kinesisBody, function (err, response) {
          var xhr = new XMLHttpRequest();
          var queryString = '?app=' + app + '&site=' + site + '&calendar=' + calendar + '&event=' + event + '&source=' + source + '&tu=' + topUrl + '&ru=' + redirectUrl + '&type=' + type + '&name=' + name + '&adBlockerStatus=' + adBlockerStatus;
          var url = getDomain() + "/api/track/load" + queryString;
          if (redirectUrl) {
            var win = window.open(url);
            win.focus();
          } else {
            xhr.open('GET', url);
            xhr.send();
          }
        });
      }

      function tryGetIframeByMessage(event) {
        var iframes = document.getElementsByTagName('iframe');

        for (var i = 0; i < iframes.length; i++) {
          if (event.source === iframes[i].contentWindow) {
            return iframes[i];
          }
        }
      }

      // Temp for testing
      function injectStats() {
        var element = document.getElementsByClassName('stanza-game-stats')[0];
        if (element) {
          var site = getAttribute(element, 'site');
          var shortname = getAttribute(element, 'stanzacal');
          var theme = getAttribute(element, 'theme');

          var container = document.createElement('div');
          var friendlyFrameStats = document.createElement('iframe');
          var friendlyFrameStanzacal = document.createElement('div');

          element.style.margin = 'auto';
          element.style.maxWidth = '1100px';

          container.style.width = '100%';
          container.style.height = '100%';
          container.style.overflow = 'hidden';
          container.style.marginTop = '50px';

          if (site) {
            friendlyFrameStanzacal.setAttribute('data-site', site);
          }
          if (shortname) {
            friendlyFrameStanzacal.setAttribute('data-stanzacal', shortname);
          }
          if (theme) {
            friendlyFrameStanzacal.setAttribute('data-theme', theme);
          }
          friendlyFrameStanzacal.className = 'stanzacal';
          friendlyFrameStanzacal.setAttribute('data-site', site);
          friendlyFrameStanzacal.setAttribute('data-height', '250px');
          friendlyFrameStanzacal.setAttribute('data-width', '100%');

          friendlyFrameStats.frameboard = 0;
          friendlyFrameStats.seamless = 'seamless';
          friendlyFrameStats.style.width = '1px';
          friendlyFrameStats.style.position = 'relative';
          friendlyFrameStats.style.minWidth = '100%';
          friendlyFrameStats.style.height = window.innerHeight - 20 + 'px';
          friendlyFrameStats.style.border = 'none';
          friendlyFrameStats.style.top = '-50px';
          friendlyFrameStats.style.outline = 0;
          friendlyFrameStats.src = 'https://sportcenter.sir.sportradar.com/usdefault/usstats/baseball/season/61503/scoreboard';

          element.appendChild(friendlyFrameStanzacal);
          element.appendChild(container);
          container.appendChild(friendlyFrameStats);
        }
      }

      function inject() {
        var elements = document.getElementsByClassName('stanzacal');
        for (var i = 0; i < elements.length; i++) {
          tryInjectIframe(elements[i]);
        }
        checkStanzaCalVisibility();
      }

      function injectGameDay() {
        var injectGameDay = window && window.location && window.location.href && (window.location.href.indexOf('realgm') > -1 || window.location.href.indexOf('stanzacal-examples') > -1);
        if (injectGameDay && window.__STANZA_LIVE_SCORE_UNIT__ && !window.__STANZA_LIVE_SCORE_UNIT__.injected) {
          var topUrl = window.location.href;
          var newShortname;
          var requestUrl = DOMAIN + '/api/guess_shortname?url=' + encodeURIComponent(topUrl);
          makeRequest('GET', requestUrl, null, function (err, response) {
            try {
              response = JSON.parse(response);
              newShortname = response.calendar;
            } catch (e) {}
            // for first run we are hard coding site id, site will come thru guess shortname
            injectGameDayUnit('realgm.com', newShortname, null);
          });
        }
      }

      inject();
      injectStats();

      document.addEventListener('DOMContentLoaded', inject);
      document.addEventListener('scroll', checkStanzaCalVisibility);

      window.addEventListener('message', function (event) {
        var iframe = tryGetIframeByMessage(event);

        if (iframe) {
          if (event && event.data === 'iframeloaded') {
            setAttribute(iframe, 'loaded');
            if (getAttribute(iframe, 'viewed')) {
              reportView(iframe);
              if (getAttribute(iframe, 'data-calendar')) {
                var cal = getAttribute(iframe, 'data-calendar');
                var site = getAttribute(iframe, 'data-site') || '';
                var cat = getAttribute(iframe, 'data-category') || '';
              }
            }
          } else if (event && event.data && event.data.type === 'scSize') {
            var el = iframe.parentElement;

            if (!el.style.height) {
              el.style.height = event.data.height + 'px';
            }
          }
        }
      });

      window.StanzaCal = {
        inject: inject
      };
    })(window, document);

    /**
     * Convert vertical scrolling to horizontal scrolling
     */
    (function (window, document) {
      var scrollTop = 0;
      var currentIframeWindow;
      var scrollPos;
      window.addEventListener('message', function (event) {
        try {
          var data = JSON.parse(event.data);
        } catch (e) {}
        if (data) {
          if (data.type === 'mouseenter') {
            currentIframeWindow = event.source;
            currentIframeWindow.postMessage(JSON.stringify({
              type: 'enablehorizontalscroll'
            }), '*');
          } else if (data.type === 'scrollpos') {
            scrollPos = data.pos;
          }
        }
      });

      window.addEventListener('DOMContentLoaded', function () {
        scrollTop = document.body.scrollTop;
      });

      window.addEventListener('mousemove', function (event) {
        // we can't rely on the mouseout event of the iframe to accurately report when the user focuses out of the iframe
        currentIframeWindow = null;
        scrollPos = null;
      });

      window.addEventListener('scroll', function (event) {
        var delta = document.body.scrollTop - scrollTop;
        var preventScroll = !(scrollPos === 'left' && delta < 0) && !(scrollPos === 'right' && delta > 0);
        if (currentIframeWindow && preventScroll) {
          // the user is focused inside of a stanza cal iframe
          document.body.scrollTop = scrollTop; // prevent parent page from scrolling

          currentIframeWindow.postMessage(JSON.stringify({
            type: 'scroll',
            scroll: delta
          }), '*');
        } else {
          // remember the last scroll position so we can reset to that
          scrollTop = document.body.scrollTop;
        }
      });
    })(window, document);
  } else {
    StanzaCal.inject();
  }
} catch (err) {
  var kinesisBody = {
    EventType: 'error',
    App: 'stanzacal-sdk',
    Event: err.message
  };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://rvubpygo5f.execute-api.us-west-2.amazonaws.com/prod/kinesis');
  xhr.send(JSON.stringify(kinesisBody));
}

/***/ })
/******/ ]);
//# sourceMappingURL=embed-stanzacal-v1.js.map