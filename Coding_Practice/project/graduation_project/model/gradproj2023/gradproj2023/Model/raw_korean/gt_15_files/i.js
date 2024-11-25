(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2754,"name":"Consequence Media | Consequence of Sound","cookie_name":"bounceClientVisit2754","domain":"consequence.net","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":0,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"pie":true,"cme":false,"gbi_enabled":1,"bpush":false,"pt":null,"els":{"#viewport-wrapper.leaderboard-wrapper":"Masthead","encore":".bx-mobile:not(.highlander-enabled) div.next-previous-story, #footer","endcap":"#main-content","infeed":".content-col p + .bxc + p, .content-col p + p","masthead":".post-header"},"vars":[{"name":"ad_preroll_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#acm-tag-COS_300_600_RHS').is(':visible');","trigger":""},{"name":"ad_outstream_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#acm-tag-COS_1_1_In_Article:visible iframe').height() > 1;","trigger":""},{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\r\n    if (!bouncex.dfpRan) {\r\n        bouncex.dfpRan = true;\r\n        return 'not_ready';\r\n    }\r\n    function check() {\r\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\r\n        \r\n        var event = bouncex.gbi2.getDfpEndPageViewEvent();\r\n        \r\n        if (event && event.dfp_status) {\r\n            if (event.dfp_status == 'pending') {\r\n                return 'not_ready';\r\n            } \r\n            \r\n            bouncex.dfp_loaded = true;\r\n\r\n            if (event.dfp_status == 'suppressed') {\r\n                return 'sponsor';\r\n            }\r\n\r\n            return 'allow';\r\n        }\r\n\r\n        return 'not_ready';\r\n    }\r\n\r\n    if (bouncex.website.gbi.rblocks) {\r\n        if (!bouncex.website.gbi_enabled) {\r\n            return 'disabled';\r\n        } else if (bouncex.dfp_loaded) {\r\n            return null;\r\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {\r\n            return check();\r\n        } else if (typeof window.googletag === 'undefined') {\r\n            return 'no_googletag';\r\n        }\r\n        return 'fallback';\r\n    } else {\r\n        return 'not_ready';\r\n    }\r\n})()","trigger":""},{"name":"pbb_response","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"just_premium_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#jpx-wp-front-container').is(':visible');","trigger":"pageload"},{"name":"user_on_mobile","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n    if(bouncex.browser.ios || bouncex.browser.android){\n        document.getElementsByTagName('body')[0].classList.add('bx-mobile');\n        return true;\n    } else {\n        return false;\n    }\n})();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"gamNetwork":"134312942","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":true,"fme":false,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":1},"pubs":{"enabled":1},"websdk":{"enabled":0},"ga4_property_id":"","ga4_measurement_id":""}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"edfd761442efc667ac2ab2aa94495562","creativesBaseStyles":"a53944a2","gam_134312942":"//assets.bounceexchange.com/assets/gam/134312942/1122ceb7f6fe14dc517408fb2f39033b.json","inbox":"48b3046e5658d067d380731acb25edd9","onsite":"5631bf90701659009118a89f964ae570","sms":"59133b5ff2491255abf0da3a6c439b40","websdk":"98cb0e9b7177c4b73a6e8bcf83f7595b"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_8b30b4890203fd4144c54b9ffd765f5e.br.js');
		runtime.setAttribute('async', 'async');
		runtime.setAttribute('onload', 'bouncex.initializeTag()');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_66377c5541a9d3e9bad770a1fd4c102b.br.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			var deviceGraphScript = document.createElement('script');
			deviceGraphScript.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_e56025bf788e01599545a68c3c69921e.js');
			deviceGraphScript.setAttribute('async', 'async');
			var dgAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-fire","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
			if (dgAttrs) {
				for (var i = 0; i < dgAttrs.length; i++) {
					deviceGraphScript.setAttribute(dgAttrs[i].Key, dgAttrs[i].Value);
				}
			}
			document.body.appendChild(deviceGraphScript);

			bouncex.initializeTag = function() {};
		};

		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();