'use strict';

function get_browser_info() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], d = 'desktop', OSName = 'unknown-os';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
        d = 'mobile';
    }
    if (navigator.appVersion.indexOf("Win") != -1)
        OSName = "windows";
    if (navigator.appVersion.indexOf("Mac") != -1)
        OSName = "mac";
    if (navigator.appVersion.indexOf("X11") != -1)
        OSName = "unix";
    if (navigator.appVersion.indexOf("Linux") != -1)
        OSName = "linux";
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name: 'ie', version: (tem[1] || ''), device: d, os: OSName};
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return {name: 'opera', version: tem[1], device: d, os: OSName};
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {name: M[0].toLowerCase(), version: M[1], device: d, os: OSName};
}

var __browser = get_browser_info();

function isSupportedNotification() { if ('serviceWorker' in navigator && 'PushManager' in window && window.safari === undefined) { return true; } return false;    /*    if (((__browser.name == 'opera' && __browser.version >= 26) || (__browser.name == 'chrome' && __browser.version >= 43) || (__browser.device != 'mobile' && __browser.name == 'firefox' && __browser.version >= 44))) {        return true;    }    return false;    */ }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(base_url + 'sw.js', {scope: base_url})
            .catch(function (error) {
                //printMsg('<span style="color:#D67C7C;">Your browser is not supporting this feature, please get chrome (42+) or firefox (44+) </span>' + error)
            });
}

function querySt(e) {
    var hu = '', ft = '';
    hu = window.location.search.substring(1).split("&");
    for (var i = 0; i < hu.length; i++) {
        ft = hu[i].split("=");
        if (ft[0] == e) {
            return ft[1]
        }
    }
    return '';
}
var unsubscribe = '',__elexConst='';
var settings = '';var ___site = 'ndtv';
var sections = '', constID = '';
var __pushSite = (typeof __pushSite === "undefined") ? 'ndtv' : __pushSite;
//__pushSite = 'ndtv';
var blogID = querySt('blogID') || 0;
var parentsite = document.referrer || 'https://www.ndtv.com';
var isSilent = false;
parentsite = parentsite + ((parentsite.indexOf('?') > -1) ? '&' : '?') + 'browserpush=true';

var usermsg = (constID?'Election ':'')+'News alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;" onclick="__showSubscribePopup();">Click here</a> to turn on.';
var usermsg_un = 'You have subscribed to our '+(constID?'Election ':'')+'news updates. To unsubscribe, <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="unSubscribe();">click here</a>';
var usermsg_re = (constID?'Election ':'')+'News alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px;background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="__showSubscribePopup();">Click here</a> to turn on.';

var site_text = '';

var sitetitle = 'NDTV';
switch(__pushSite) {
    case 'profit':
        sitetitle = 'NDTV Profit';
        ___site = 'profit';
        break;
    case 'news-tamil':
        sitetitle = 'NDTV Tamil';
        usermsg = usermsg_re = 'நியூஸ் அலெர்ட் நிறுத்தி வைக்கப்பட்டுள்ளது. <a href="javascript:void(0);" style="color:#841111;" onclick="__showSubscribePopup();">ஆன் செய்ய இங்கே க்ளிக் செய்யவும்.</a>';
        usermsg_un = 'நியூஸ் அலெர்ட் ஆன் செய்யப்பட்டுள்ளது. <a href="javascript:void(0);" style="color:#841111;"  onclick="unSubscribe();">நிறுத்தி வைக்க இங்கே க்ளிக் செய்யவும்.</a>';
        ___site = 'ndtvtamil';
        break;
    case 'news-bengali':
        sitetitle = 'NDTV Bangla';
        usermsg = usermsg_re = 'নিউজ অ্যালার্ট বন্ধ আছে। <a href="javascript:void(0);" style="color:#841111;" onclick="__showSubscribePopup();">এখানে ক্লিক করে অন করুন</a>';
        usermsg_un = 'নিউজ অ্যালার্ট অন আছে। <a href="javascript:void(0);" style="color:#841111;"  onclick="unSubscribe();">এখানে ক্লিক করে বন্ধ করুন</a>';
        ___site = 'ndtvbengali';
        break;
    case 'education':
        sitetitle = 'NDTV Education';
        ___site = 'education';
        break;
    case 'entertainment':
        sitetitle = 'NDTV Movies';
        ___site = 'entertainment';
        site_text = '<h2>Get <span>Entertainment</span> News Alerts From '+sitetitle+'.</h2> <div class="botinfo">We\'ll send you updates on celebrity news and trending stories through the day. You can manage them any time from your browser settings.</div>';
        usermsg = 'Entertainment alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;" onclick="__showSubscribePopup();">Click here</a> to turn on.';
        usermsg_un = 'You have subscribed to our Entertainment news updates. To unsubscribe, <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="unSubscribe();">click here</a>';
        usermsg_re = 'Entertainment alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px;background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="__showSubscribePopup();">Click here</a> to turn on.';
        break;
    case 'swirlster':
        sitetitle = 'NDTV Swirlster';
        ___site = 'swirlster';
        break;
    case 'shopping':
        sitetitle = 'NDTV Shopping';
        ___site = 'shopping';
        site_text = '<h2>Get <span>The Best Shopping</span> Alerts From '+sitetitle+'.</h2> <div class="botinfo">You will receive the latest updates on the best deals from NDTV Shopping through the day. You can manage them when you need in browser settings.</div>';
        usermsg = sitetitle+ ' alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;" onclick="__showSubscribePopup();">Click here</a> to turn on.';
        usermsg_un = 'You have subscribed to our '+sitetitle+' updates. To unsubscribe, <a href="javascript:void(0);" style="color:#841111; margin-right: 3px; background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="unSubscribe();">click here</a>';
        usermsg_re = sitetitle + ' alerts are turned off. <a href="javascript:void(0);" style="color:#841111; margin-right: 3px;background: #fff; border-radius: 18px; text-decoration: none; padding: 2px 10px;"  onclick="__showSubscribePopup();">Click here</a> to turn on.';
        break;
    default:
        sitetitle = 'NDTV';
}

if(site_text==''){
site_text = '<h2>Get <span>Breaking</span> News Alerts From '+sitetitle+'.</h2> <div class="botinfo">We\'ll send you latest news updates through the day. You can manage them any time from your browser settings.</div>';
}

var __cname = ___site + '_isSubscribed_elex_v1';
var ___page = (typeof __page !== 'undefined') ? __page : '';
var dbName = 'ndtvNotify', dbTable = 'settings', dbVersion = 1, db;
var notifyType = 'news';


checkSetup('');

function checkSetup(passconstID) {
    if (!isSupportedNotification()) {
        return false;
    }
    //check for live blog
    if($("input[data-type='lv']").length){
        $('.live__updts').css('display','flex');
        var tmp = {'id':$("input[data-type='lv']").attr('data-id'),'type':'liveblog','action':'get'};
        initalizeDB(tmp);
    }
    var check = __getCookieVal(__cname) || '';
    ndtvUnsubscribeButton(); //show setting bell
    if (check == '') {
        setTimeout(__showSubscribePopup, ___page=='hp'?17000:3000);
        return false;
    }
     //disabled auto subscribe
    //refresh the notification subscription if you want
    var __checkRefresh = parseInt(localStorage.getItem('_ndtvBPush')) || 0;
    var currTime = new Date().getTime();
    //60*60*24*5 = 2 days
    if (Notification.permission == 'granted' && (currTime - __checkRefresh > 1000 * 60 * 60 * 24 * 10)) {
        localStorage.setItem('_ndtvBPush', new Date().getTime());
        isSilent = true;
        initialiseState();
    }
    
}

function initalizeDB(obj) {
    
    if (!indexedDB) {
        console.log("Your Browser does not support IndexedDB");
    } else {
        var requestDB = indexedDB.open(dbName, dbVersion);
        requestDB.onerror = function (event) {
            console.log("Error opening DB", event);
        }
        requestDB.onupgradeneeded = function (event) {
            console.log("Upgrading");
            db = event.target.result;
            db.createObjectStore(dbTable, {keyPath: 'val'});
        };
        requestDB.onsuccess = function (event) {
            console.log("Success opening DB");
            db = event.target.result;
            if (obj.id && obj.type) {
                if (obj.action === 'get') {
                    getDB(obj.id, obj.type);
                }else if (obj.action === 'remove') {
                    removeDB(obj.id, obj.type);
                } else {
                    if(obj.type == 'election'){
                        removeDB(obj.id, obj.type);
                        obj.id.split(/\s*,\s*/).forEach(function(ii) {
                            saveDB(ii, obj.type);
                        });
                    }else{
                        saveDB(obj.id, obj.type);
                    }
                }
            }
        }
    }
}

function getDB(id, type) {
    var transaction = db.transaction([dbTable], "readwrite");
    var objectStore = transaction.objectStore(dbTable);
    var gid = objectStore.get(id + '-' + type);
    gid.onsuccess = function(event){
        if(gid.result && gid.result.val == id + '-' + type){
            $("input[data-id='"+id+"']").attr('checked','checked');
        }
    }
}

function saveDB(id, type) {
    var transaction = db.transaction([dbTable], "readwrite");
    var objectStore = transaction.objectStore(dbTable);
    objectStore.add({id: id, type: type, lastId: 0, val: id + '-' + type});
}

function removeDB(id, type) {
    var transaction = db.transaction([dbTable], "readwrite");
    var objectStore = transaction.objectStore(dbTable);
    //objectStore.delete(id + '-' + type);
    objectStore.clear()
}

function initialiseState() {

    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        printMsg('Notifications aren\'t supported.');
        return false;
    }
    if (Notification.permission == 'granted') {
        //already registered or not allowed
        //printMsg(usermsg_un);
        //return false;
    }

    if (Notification.permission == 'default' && settings == '') {
        overlayAction('block');
    }

    if (Notification.permission === 'denied') {
        overlayAction('none');
        printMsg('You have blocked notifications for this site.<br/><span style="color:#7ADA10;"><a target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop&oco=0">Click here for detials.</span>');
    }

    if (!('PushManager' in window)) {
        overlayAction('none');
        printMsg('Push messaging isn\'t supported.');
        redirectToParent(2000);
        return;
    }

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        // Do we already have a push message subscription?  
        serviceWorkerRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    var msg = '';
                    if (!subscription) {
                        // We aren't subscribed to push, so set UI
                        subscribe('');
                        return true;
                    }

                    var ep = getEndPoint(subscription);
                    subscribeNow(ep, '');
                    printMsg((constID ? 'Election ' : '') +usermsg_un);
                    ndtvCloseThis(365, 'yes');
                })
                .catch(function (err) {
                    printMsg('Error during getSubscription()', err);
                    //window.location.reload();
                    return;
                });
    }).catch(function (error) {
        printMsg('<span style="color:#D67C7C;">Your browser is not supporting this feature, please get chrome (42+) or firefox (44+) </span>' + error);
    });
}

function unSubscribe() {
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        // To unsubscribe from push messaging, you need get the  
        // subscription object, which you can call unsubscribe() on.  
        serviceWorkerRegistration.pushManager.getSubscription().then(
                function (subscription) {
                    // Check we have a subscription to unsubscribe  
                    if (!subscription) {
                        printMsg((constID ? 'Election ' : '') +usermsg_re);
                        ndtvCloseThis(1, '');
                        return;
                    }

                    var ep = getEndPoint(subscription);
                    subscribeNow(ep, 1);
                    subscription.unsubscribe().then(function (successful) {
                        printMsg((constID ? 'Election ' : '') +usermsg_re);
                        ndtvCloseThis(1, '');
                    }).catch(function (e) {
                        printMsg('Error during getSubscription()', e);
                        window.location.reload();
                        return;
                    });
                }).catch(function (e) {
            printMsg('Error thrown while unsubscribing from push messaging.', e);
            window.location.reload();
            return;
        });
    });
}

function subscribe(old) {
    if (Notification.permission == 'default') {
        overlayAction('block');
    }
    if (Notification.permission == 'granted') {
        overlayAction('none');
    }
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
                .then(function (subscription) {
                    var ep = getEndPoint(subscription);
                    if ((settings == '' || old == '1') && !isSilent) {
                        onRegisterNotify(serviceWorkerRegistration);
                    }
                    overlayAction('none');
                    subscribeNow(ep, '');
                    printMsg((constID ? 'Election ' : '') +usermsg_un);
                    ndtvCloseThis(365,'yes');
                    return true;
                })
                .catch(function (e) {
                    if (Notification.permission === 'denied') {
                        overlayAction('none');
                        printMsg('You have blocked notifications for this site.<br/><span style="color:#7ADA10;"><a target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop&oco=0">Click here for detials.</span>');
                    } else {
                        overlayAction('none');
                        console.log(e);
                        printMsg('<span style="color:#D67C7C;">Something went wrong <br> Please refresh page</span>');
                    }
                });
    });


}

function overlayAction(type) {
    if (document.getElementById('ndtvnotify') && (type == 'block' || type == 'none')) {
        document.getElementById('ndtvnotify').style.display = type;
    }
}
function redirectToParent(time) {
    return;
    if (parentsite != '') {
        setTimeout(function () {
            location.href = parentsite;
        }, time);
    }
}

function getEndPoint(pushSubscription) {
    //console.log(pushSubscription);
    if (pushSubscription.subscriptionId) {
        return pushSubscription.subscriptionId;
    }
    var endpoint = 'https://android.googleapis.com/gcm/send/';
    var parts = pushSubscription.endpoint.split(endpoint);
    if (parts.length > 1)
    {
        return {
            'browser': 'chrome',
            'id': parts[1]
        };
    }
    var endpoint = 'https://fcm.googleapis.com/fcm/send/';
    var parts = pushSubscription.endpoint.split(endpoint);
    if (parts.length > 1)
    {
        return {
            'browser': 'chrome',
            'id': parts[1]
        };
    }
    endpoint = 'https://updates.push.services.mozilla.com/push/';
    parts = pushSubscription.endpoint.split(endpoint);
    if (parts.length > 1)
    {
        return {
            'browser': 'firefox',
            'id': parts[1]
        };
    }
    endpoint = 'https://updates.push.services.mozilla.com/wpush/';
    parts = pushSubscription.endpoint.split(endpoint);
    if (parts.length > 1)
    {
        return {
            'browser': 'firefox',
            'id': parts[1]
        };
    }
    return '';
}

function subscribeNow(registrationDetail, unregister) {
    if (!registrationDetail) {
        return;
    }
    /*console.log(registrationDetail);*/
    var ep = 'https://ipush.apps.ndtv.com/subscribeBrowser.php';
    //var ep = 'http://localhost/ndtvapps/pushnotification/public/subscribeBrowser.php';

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: ep,
        data: {
            'packageName': ___site+'.' + registrationDetail.browser,
            'env': 'PRODUCTION',
            'sections': sections,
            'unregister': unregister,
            'registration_id': registrationDetail.id,
            'blogID':blogID
        },
        complete: function (data) {}
    });

    var obj = {id: 'news', type: ___site};
    if (blogID) {
        notifyType = 'liveblog';
        obj = {id: blogID, type: 'liveblog'};
        //message format change
        sitetitle = "Live Updates";
        usermsg_un = "Thanks for subscribing. You will receive news alerts as this story develops";
        usermsg_re = usermsg = "Thank You, Unsubscribe request completed. <a href='javascript:initialiseState();'>Click here</a> to re-subscribe";

    }
    if (constID) {
        notifyType = 'election';
        obj = {id: constID, type: 'election'};
        storageSet('__elexConst',constID);
    }
    if(unregister){
       obj.action = 'remove'; 
       storageSet('__elexConst','');
    }
    initalizeDB(obj);
}

function printMsg(msg) {
    if(!isSilent){
        $('.popover-content').html('<div style="position: absolute; width: 12px; height: 12px; display: block; right: 7px; top: 7px;"><img style="width:100%; border-radius:0px; vertical-align:top;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhY2Nlc3MtZGVuaWVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMDAwMDAwLCAtODguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTExNC4yOTQzOTQsMTA5Ljk5OTMyNiBMMTMxLjExNjE1Niw5My4xODM0ODI3IEMxMzIuMjk0NjE1LDkxLjk5ODgyMzcgMTMyLjI5NDYxNSw5MC4wNzI5NTM0IDEzMS4xMTYxNTYsODguODg4NDk0MyBDMTI5LjkzMTUwMiw4Ny43MDM4MzUyIDEyNy45OTk2NDYsODcuNzAzODM1MiAxMjYuODIxMTg3LDg4Ljg4ODQ5NDMgTDEwOS45OTk0MjUsMTA1LjcwNDMzNyBMOTMuMTgzNDU5MSw4OC44ODg0OTQzIEM5MS45OTg4MDU1LDg3LjcwMzgzNTIgOTAuMDcyOTQ0LDg3LjcwMzgzNTIgODguODg4NDkwMiw4OC44ODg0OTQzIEM4Ny43MDQwMzY0LDkwLjA3MzE1MzMgODcuNzAzODM2Niw5MS45OTkwMjM1IDg4Ljg4ODQ5MDIsOTMuMTgzNDgyNyBMMTA1LjcwNDI1NywxMDkuOTk5MzI2IEw4OC44ODg0OTAyLDEyNi44MjExNjQgQzg3LjcwMzgzNjYsMTI3Ljk5OTYyOCA4Ny43MDM4MzY2LDEyOS45MzE2OTMgODguODg4NDkwMiwxMzEuMTE2MTUyIEM5MC4wNzMxNDM4LDEzMi4yOTQ2MTYgOTEuOTk5MDA1MywxMzIuMjk0NjE2IDkzLjE4MzQ1OTEsMTMxLjExNjE1MiBMMTA5Ljk5OTIyNiwxMTQuMjk0MzE0IEwxMjYuODIwOTg3LDEzMS4xMTYxNTIgQzEyNy45OTk0NDYsMTMyLjI5NDYxNiAxMjkuOTMxNTAyLDEzMi4yOTQ2MTYgMTMxLjExNTk1NiwxMzEuMTE2MTUyIEMxMzIuMjk0NDE1LDEyOS45MzE0OTMgMTMyLjI5NDQxNSwxMjcuOTk5NjI4IDEzMS4xMTU5NTYsMTI2LjgyMTE2NCBMMTE0LjI5NDM5NCwxMDkuOTk5MzI2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></div>' + msg);
        $('.popover').show();
    }
    //alert(msg);
    //if (document.getElementById('msg')) {document.getElementById('msg').innerHTML = msg;}
}


function onRegisterNotify(reg) {
    var logo = 'https://drop.ndtv.com/ndtv/alerts/logo/'+___site+'.png';
    //var m_ = 'You have subscribed to NDTV election alerts. We\'ll send you latest updates as votes are counted on Dec 18. Stay tuned.';
    var m_ = 'Thank you for subscribing to ' + sitetitle + (constID ? ' Election' : '') + ' News alerts.';
    var ss_ = 'NDTV';
    if(blogID){
        m_ = 'Thanks for subscribing. You will receive news alerts as this story develops';
        ss_ = 'NDTV Updates';
    }
    try {
        var notification = reg.showNotification(ss_, {
            body: m_,
            icon: logo,
            vibrate: [300, 100, 400],
            tag: 'ndtvnews-welcome',
            data: {
                url: 'https://www.ndtv.com?browserpush=true'
            }
        });
        notification.onclick = function (event) {
            event.target.close();
            window.location.href = event.target.data.url;
            return;
        };
    } catch (err) {console.log(err.message);}
}

function __setCookieVal(c_name, value, exdays)
{
    var current = new Date();
    var exdate = new Date(current.getTime() + 86400000 * exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() + ';path=/;');
    document.cookie = c_name + "=" + c_value;
}

function __getCookieVal(c_name)
{
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++)
    {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name)
        {
            return unescape(y);
        }
    }
    return '';
}

function __showSubscribePopup(){
    //elexSubs(true);return;
    var logo = 'https://drop.ndtv.com/ndtv/alerts/logo/'+___site+'.png';
    var id = document.getElementById('___ndtvpushdiv');
    if(id){
        id.innerHTML = '<style>.noti_bgstyle{width:100%;height:100%;position:fixed;left:0;top:0;z-index:15010000;background:rgba(0,0,0,.8);opacity:.95;filter:alpha(opacity=95)}.noti_wrap{z-index:2147483647;left:50%;top:0;position:fixed;width:400px;margin-left:-200px;box-sizing:border-box;padding:12px;background:#fff;font-family:Roboto,sans-serif;-moz-box-shadow:1px 1px 1px 0 #c9c9c9;-webkit-box-shadow:1px 1px 1px 0 #c9c9c9;box-shadow:1px 1px 1px 0 #c9c9c9;border:1px solid #e8e8e8}.notif_box{display:table;margin-top:10px}.noti_wrap .noti_img{width:65px;height:65px;float:left;margin:0 10px 0 0}.noti_wrap .noti_cont{display:table-cell;vertical-align:top}.noti_wrap .noti_cont h2{font-size:14px;margin:0;font-weight:600;line-height:18px}.noti_wrap .noti_cont .botinfo{font-size:12px;font-weight:400;padding:5px 0;line-height:18px;color:#666}.noti_wrap .noti_btnwrap{text-align:right;padding:10px 0 0;clear:both}.noti_btnwrap a.allow,.noti_btnwrap a.notnow{width:auto;padding:4px 15px;background:#fff;line-height:20px;border:1px solid #ccc;font-size:11px;color:#333;text-decoration:none;text-transform:uppercase;border-radius:3px;margin:0 0 0 10px}.noti_btnwrap a.notnow{border:none;border-radius:none;text-transform:none;text-decoration:underline;font-size:12px}.noti_btnwrap a.allow:hover{color:#fff;-moz-transition:background .3s ease-in;-o-transition:background .3s ease-in;-webkit-transition:background .3s ease-in;background:#4FACEF;border:1px solid #4B84AD}.noti_btnwrap a.active{background:#b40002;color:#fff;border:1px solid #b40002}.noti_wrap .teaminfo{font-size:12px}.noti_wrap h3{color:#184b80;margin-top: 10px; margin-bottom: 10px;}.noti_wrap h2 span,.noti_wrap h3 span{color:#4a9400}.noti_wrap li{padding-bottom:2px} .noti_wrap input[type="checkbox"]{margin:4px;}@media only screen and (max-device-width:480px){.noti_wrap{width:300px;margin-left:-150px}}</style>';
        id.innerHTML +='<div id="__cricketsubscribe"><div class="noti_bgstyle"></div><div class="noti_wrap"> <div class="notif_box"> <div class="noti_img"><img width="65" height="65" style="border-radius:5px;" src="'+logo+'"></div><div class="noti_cont">'+site_text+'</div></div><div class="noti_btnwrap"><span id="__emsg" style="color:red;font-size:12px;"></span><a class="notnow" onclick="ndtvCloseThis(60,\'no\');" href="javascript:void(0);">No Thanks</a> <a class="allow" onclick="__alw();" href="javascript:void(0);">&nbsp;&nbsp;&nbsp;&nbsp;Allow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </div></div></div>';
        if(___page=='mobile' || ___page=='wap'){
			id.innerHTML += '<style>@media (prefers-color-scheme: dark) {.noti_wrap {background-color: #28292b; color: #e2e2e2; border-color: #404040; box-shadow: none;}.noti_btnwrap a.allow, .noti_btnwrap a.notnow {background-color: #404040; color: #e2e2e2; border-color: #28292b;}.noti_wrap .noti_cont .botinfo {color: #e2e2e2;}}.day_night .noti_wrap {background-color: #28292b;color: #e2e2e2;border-color: #404040;box-shadow: none;}.day_night .noti_btnwrap a.allow, .day_night .noti_btnwrap a.notnow {background-color: #404040;color: #e2e2e2;border-color: #28292b;}.day_night .noti_wrap .noti_cont .botinfo {color: #e2e2e2;}@media (prefers-color-scheme: dark) {.day_night .noti_wrap {background-color: #fff;color: #000;border-color: #e8e8e8;box-shadow: 1px 1px 1px 0 #c9c9c9;}.day_night .noti_btnwrap a.allow, .day_night .noti_btnwrap a.notnow {background-color: #fff;color: #333;border-color: #ccc;}.day_night .noti_wrap .noti_cont .botinfo {color: #666;}}</style>';  
		}

    }
}

function ndtvCloseThis(cday, val) {
    __setCookieVal(__cname, val, cday);
    if (document.getElementById('__cricketsubscribe')) {
        document.getElementById('__cricketsubscribe').style.display = 'none';
    }
}

function ndtvUnsubscribeButton(){
    if(isSupportedNotification()){
        var id = document.getElementById('___ndtvspldiv');
        var msg = (constID ? 'Election ' : '') +(__getCookieVal(__cname) == 'yes' ? usermsg_un : usermsg);
        msg = (Notification.permission === 'denied') ? 'You have blocked notifications for this site.<br/><span style="color:#7ADA10;"><a target="_blank" href="https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop&oco=0">Click here for detials.</span>' : msg
        if(id){
            var msgdispl = (window.location.href.indexOf('browserpush=true') > -1)?'block':'none';
            if(___page=='mobile'){
                id.innerHTML = '<style>.vj-icn-bell{display:inline-block;position:absolute;right:0;top:0;height:40px;padding:0 11px;width:40px;text-align:center;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle}#___ndtvspldiv{display: inline-block;float: right;	height: 40px;width: 40px;}.popover {text-transform:none;font-size: 14px;font-style: normal;font-weight: 400;letter-spacing: normal;background-color: #a93434;border-radius: 4px;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);width: 220px;padding: 1px;right:-26px;top: 44px;position: absolute;z-index: 100060;color:#FFF;}.popover-content{cursor:pointer;line-height: 22px; padding: 20px 10px;text-align:center;font-size: 15px;}.popover > .arrow, .popover > .arrow::after {border-color: transparent;border-style: solid;display: block;height: 0;position: absolute;width: 0;}.popover > .arrow {border-width: 11px;border-bottom-color:transparent;border-top-width: 0;left: 50%;margin-left: 44px;top: -11px;}.popover > .arrow::after {border-width: 10px;border-bottom-color: #a93434;border-top-width: 0;content: " ";margin-left: -2px;top: 1px;}</style>';
                id.innerHTML += '<div style="position:relative;"><a href="javascript:void(0);" onclick="$(\'.popover\').toggle();" title="Breaking News Alerts"><svg class="vj_icn vj-icn-bell"><use xlink:href="#vj-icn-bell"></use></svg></a><div class="popover" style="display: '+msgdispl+';" onclick="this.style.display=\'none\';"><div class="arrow" style="left: 50%;"></div><div class="popover-content"><div style="position: absolute; width: 12px; height: 12px; display: block; right: 7px; top: 7px;"><img style="width:100%; border-radius:0px; vertical-align:top;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhY2Nlc3MtZGVuaWVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMDAwMDAwLCAtODguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTExNC4yOTQzOTQsMTA5Ljk5OTMyNiBMMTMxLjExNjE1Niw5My4xODM0ODI3IEMxMzIuMjk0NjE1LDkxLjk5ODgyMzcgMTMyLjI5NDYxNSw5MC4wNzI5NTM0IDEzMS4xMTYxNTYsODguODg4NDk0MyBDMTI5LjkzMTUwMiw4Ny43MDM4MzUyIDEyNy45OTk2NDYsODcuNzAzODM1MiAxMjYuODIxMTg3LDg4Ljg4ODQ5NDMgTDEwOS45OTk0MjUsMTA1LjcwNDMzNyBMOTMuMTgzNDU5MSw4OC44ODg0OTQzIEM5MS45OTg4MDU1LDg3LjcwMzgzNTIgOTAuMDcyOTQ0LDg3LjcwMzgzNTIgODguODg4NDkwMiw4OC44ODg0OTQzIEM4Ny43MDQwMzY0LDkwLjA3MzE1MzMgODcuNzAzODM2Niw5MS45OTkwMjM1IDg4Ljg4ODQ5MDIsOTMuMTgzNDgyNyBMMTA1LjcwNDI1NywxMDkuOTk5MzI2IEw4OC44ODg0OTAyLDEyNi44MjExNjQgQzg3LjcwMzgzNjYsMTI3Ljk5OTYyOCA4Ny43MDM4MzY2LDEyOS45MzE2OTMgODguODg4NDkwMiwxMzEuMTE2MTUyIEM5MC4wNzMxNDM4LDEzMi4yOTQ2MTYgOTEuOTk5MDA1MywxMzIuMjk0NjE2IDkzLjE4MzQ1OTEsMTMxLjExNjE1MiBMMTA5Ljk5OTIyNiwxMTQuMjk0MzE0IEwxMjYuODIwOTg3LDEzMS4xMTYxNTIgQzEyNy45OTk0NDYsMTMyLjI5NDYxNiAxMjkuOTMxNTAyLDEzMi4yOTQ2MTYgMTMxLjExNTk1NiwxMzEuMTE2MTUyIEMxMzIuMjk0NDE1LDEyOS45MzE0OTMgMTMyLjI5NDQxNSwxMjcuOTk5NjI4IDEzMS4xMTU5NTYsMTI2LjgyMTE2NCBMMTE0LjI5NDM5NCwxMDkuOTk5MzI2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></div>' + msg + '</div></div></div>';
            }else if(___page=='wap'){
                id.innerHTML = '<style>#___ndtvspldiv{display:table-cell;width:32px;}.popover {text-transform:none;font-size: 14px;font-style: normal;font-weight: 400;letter-spacing: normal;background-color: #841111;border-radius: 4px;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);width: 220px;padding: 1px;right:-26px;top: 44px;position: absolute;z-index: 100060;color:#FFF;}.popover-content{cursor:pointer; line-height: 22px; padding:20px 10px;text-align:center;font-size: 15px;}.popover > .arrow, .popover > .arrow::after {border-color: transparent;border-style: solid;display: block;height: 0;position: absolute;width: 0;}.popover > .arrow {border-width: 11px;border-bottom-color:transparent;border-top-width: 0;left: 50%;margin-left: 44px;top: -11px;}.popover > .arrow::after {border-width: 10px;border-bottom-color: #841111;border-top-width: 0;content: " ";margin-left: -2px;top: 1px;}</style>';
                id.innerHTML += '<div class="notify_bell" style="position:relative;"><a href="javascript:void(0);" onclick="$(\'.popover\').toggle();" title="Breaking News Alerts"><i class="sprite"></i></a><div class="popover" style="display: '+msgdispl+';" onclick="this.style.display=\'none\';"><div class="arrow" style="left: 50%;"></div><div class="popover-content"><div style="position: absolute; width: 12px; height: 12px; display: block; right: 7px; top: 3px;"><img style="width:100%; border-radius:0px; vertical-align:top;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhY2Nlc3MtZGVuaWVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMDAwMDAwLCAtODguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTExNC4yOTQzOTQsMTA5Ljk5OTMyNiBMMTMxLjExNjE1Niw5My4xODM0ODI3IEMxMzIuMjk0NjE1LDkxLjk5ODgyMzcgMTMyLjI5NDYxNSw5MC4wNzI5NTM0IDEzMS4xMTYxNTYsODguODg4NDk0MyBDMTI5LjkzMTUwMiw4Ny43MDM4MzUyIDEyNy45OTk2NDYsODcuNzAzODM1MiAxMjYuODIxMTg3LDg4Ljg4ODQ5NDMgTDEwOS45OTk0MjUsMTA1LjcwNDMzNyBMOTMuMTgzNDU5MSw4OC44ODg0OTQzIEM5MS45OTg4MDU1LDg3LjcwMzgzNTIgOTAuMDcyOTQ0LDg3LjcwMzgzNTIgODguODg4NDkwMiw4OC44ODg0OTQzIEM4Ny43MDQwMzY0LDkwLjA3MzE1MzMgODcuNzAzODM2Niw5MS45OTkwMjM1IDg4Ljg4ODQ5MDIsOTMuMTgzNDgyNyBMMTA1LjcwNDI1NywxMDkuOTk5MzI2IEw4OC44ODg0OTAyLDEyNi44MjExNjQgQzg3LjcwMzgzNjYsMTI3Ljk5OTYyOCA4Ny43MDM4MzY2LDEyOS45MzE2OTMgODguODg4NDkwMiwxMzEuMTE2MTUyIEM5MC4wNzMxNDM4LDEzMi4yOTQ2MTYgOTEuOTk5MDA1MywxMzIuMjk0NjE2IDkzLjE4MzQ1OTEsMTMxLjExNjE1MiBMMTA5Ljk5OTIyNiwxMTQuMjk0MzE0IEwxMjYuODIwOTg3LDEzMS4xMTYxNTIgQzEyNy45OTk0NDYsMTMyLjI5NDYxNiAxMjkuOTMxNTAyLDEzMi4yOTQ2MTYgMTMxLjExNTk1NiwxMzEuMTE2MTUyIEMxMzIuMjk0NDE1LDEyOS45MzE0OTMgMTMyLjI5NDQxNSwxMjcuOTk5NjI4IDEzMS4xMTU5NTYsMTI2LjgyMTE2NCBMMTE0LjI5NDM5NCwxMDkuOTk5MzI2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></div>' + msg + '</div></div></div>';
            }else{
                id.innerHTML = '<style>.topnav2014 .comments{position:relative;}.popover {text-transform:none;font-size: 14px;font-style: normal;font-weight: 400;letter-spacing: normal;background-color: #841111;border-radius: 4px;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);max-width: 220px;padding: 1px;left:40%;transform: translateX(-50%);top: 45px;position: absolute;z-index: 100060;color:#FFF;width:220px;}.popover-content{cursor:pointer; line-height: 22px; padding:20px 10px;text-align:center;font-size: 15px; color: #fff;}.popover > .arrow, .popover > .arrow::after {border-color: transparent;border-style: solid;display: block;height: 0;position: absolute;width: 0;}.popover > .arrow {border-width: 11px;border-bottom-color:transparent;border-top-width: 0;left: 50%;margin-left: -11px;top: -11px;}.popover > .arrow::after {border-width: 10px;border-bottom-color: #841111;border-top-width: 0;content: " ";margin-left: -10px;top: 1px;}.fbmsginner{position:relative;'+(___page=='hp'?'padding:14px 5px 20px 0px;':'')+'}</style>';
                id.innerHTML += '<span class="fbmsginner"><a class="break_fbmsg" href="javascript:void(0);" onclick="$(\'.popover\').toggle();" title="Breaking News Alerts"><b></b></a><div class="popover" style="display: '+msgdispl+';" onclick="this.style.display=\'none\';"><div class="arrow" style="left: 50%;"></div><div class="popover-content"><div style="position: absolute; width: 12px; height: 12px; display: block; right: 7px; top: 7px;"><img style="width:100%; border-radius:0px; vertical-align:top;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhY2Nlc3MtZGVuaWVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODguMDAwMDAwLCAtODguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTExNC4yOTQzOTQsMTA5Ljk5OTMyNiBMMTMxLjExNjE1Niw5My4xODM0ODI3IEMxMzIuMjk0NjE1LDkxLjk5ODgyMzcgMTMyLjI5NDYxNSw5MC4wNzI5NTM0IDEzMS4xMTYxNTYsODguODg4NDk0MyBDMTI5LjkzMTUwMiw4Ny43MDM4MzUyIDEyNy45OTk2NDYsODcuNzAzODM1MiAxMjYuODIxMTg3LDg4Ljg4ODQ5NDMgTDEwOS45OTk0MjUsMTA1LjcwNDMzNyBMOTMuMTgzNDU5MSw4OC44ODg0OTQzIEM5MS45OTg4MDU1LDg3LjcwMzgzNTIgOTAuMDcyOTQ0LDg3LjcwMzgzNTIgODguODg4NDkwMiw4OC44ODg0OTQzIEM4Ny43MDQwMzY0LDkwLjA3MzE1MzMgODcuNzAzODM2Niw5MS45OTkwMjM1IDg4Ljg4ODQ5MDIsOTMuMTgzNDgyNyBMMTA1LjcwNDI1NywxMDkuOTk5MzI2IEw4OC44ODg0OTAyLDEyNi44MjExNjQgQzg3LjcwMzgzNjYsMTI3Ljk5OTYyOCA4Ny43MDM4MzY2LDEyOS45MzE2OTMgODguODg4NDkwMiwxMzEuMTE2MTUyIEM5MC4wNzMxNDM4LDEzMi4yOTQ2MTYgOTEuOTk5MDA1MywxMzIuMjk0NjE2IDkzLjE4MzQ1OTEsMTMxLjExNjE1MiBMMTA5Ljk5OTIyNiwxMTQuMjk0MzE0IEwxMjYuODIwOTg3LDEzMS4xMTYxNTIgQzEyNy45OTk0NDYsMTMyLjI5NDYxNiAxMjkuOTMxNTAyLDEzMi4yOTQ2MTYgMTMxLjExNTk1NiwxMzEuMTE2MTUyIEMxMzIuMjk0NDE1LDEyOS45MzE0OTMgMTMyLjI5NDQxNSwxMjcuOTk5NjI4IDEzMS4xMTU5NTYsMTI2LjgyMTE2NCBMMTE0LjI5NDM5NCwxMDkuOTk5MzI2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></div>' + msg + '</div></div></span>';
            }
        }
        if(document.getElementById('___ndtvELexBanner')){
            elexSubs(true);document.getElementById('___ndtvELexBanner').style.display = 'block';
        }
    }
}

function __getcheckboxes() {
    var chkbox = [];
    $("input:checkbox[name^=__s]:checked").each(function(){
        chkbox.push($(this).attr('id'));
    });
    var vals = chkbox.join(',');
    return vals;
}

function __alw() {
    if(document.getElementById('__emsg')){
        document.getElementById('__emsg').innerHTML = '';
    }
    ndtvCloseThis(180,'yes');
    initialiseState();
    //setTimeout(function(){location.href = 'https://alerts.ndtv.com/';},2);    
    return false;
}

function elexSubs(forced){
    if(!isSupportedNotification()){return true;}
    forced = (typeof forced !== 'undefined') ? forced : false;
    var check = __getCookieVal(__cname) || '';
    if(forced){check = '';}
    if (check!='') {return false;}
    
    var _stts = '<select onchange="$(\'.mutliSelect\').hide();$(\'#_elex_const_\'+this.value).show();" style="float:left;"><option value="MEG">Meghalaya</option><option value="NAG">Nagaland</option><option value="TRI">Tripura</option></select>';
	var _consts = '<div class="mutliSelect" style="" id="_elex_const_MEG" onchange=$(\"#_elex_sub\").attr("data-constid", this.value)><ul><li><input type="checkbox" name="__s[]" id="15007" value="Amlarem" data-checked="0" />Amlarem</li><li><input type="checkbox" name="__s[]" id="15053" value="Ampati" data-checked="0" />Ampati</li><li><input type="checkbox" name="__s[]" id="15060" value="Baghmara" data-checked="0" />Baghmara</li><li><input type="checkbox" name="__s[]" id="15040" value="Bajengdoba" data-checked="0" />Bajengdoba</li><li><input type="checkbox" name="__s[]" id="15059" value="Chokpot" data-checked="0" />Chokpot</li><li><input type="checkbox" name="__s[]" id="15049" value="Dadenggre" data-checked="0" />Dadenggre</li><li><input type="checkbox" name="__s[]" id="15057" value="Dalu" data-checked="0" />Dalu</li><li><input type="checkbox" name="__s[]" id="15016" value="East Shillong" data-checked="0" />East Shillong</li><li><input type="checkbox" name="__s[]" id="15056" value="Gambegre" data-checked="0" />Gambegre</li><li><input type="checkbox" name="__s[]" id="15010" value="Jirang" data-checked="0" />Jirang</li><li><input type="checkbox" name="__s[]" id="15002" value="Jowai" data-checked="0" />Jowai</li><li><input type="checkbox" name="__s[]" id="15037" value="Kharkutta" data-checked="0" />Kharkutta</li><li><input type="checkbox" name="__s[]" id="15006" value="Khliehriat" data-checked="0" />Khliehriat</li><li><input type="checkbox" name="__s[]" id="15054" value="Mahendraganj" data-checked="0" />Mahendraganj</li><li><input type="checkbox" name="__s[]" id="15030" value="Mairang" data-checked="0" />Mairang</li><li><input type="checkbox" name="__s[]" id="15008" value="Mawhati" data-checked="0" />Mawhati</li><li><input type="checkbox" name="__s[]" id="15029" value="Mawkynrew" data-checked="0" />Mawkynrew</li><li><input type="checkbox" name="__s[]" id="15036" value="Mawkyrwat" data-checked="0" />Mawkyrwat</li><li><input type="checkbox" name="__s[]" id="15015" value="Mawlai" data-checked="0" />Mawlai</li><li><input type="checkbox" name="__s[]" id="15024" value="Mawphlang" data-checked="0" />Mawphlang</li><li><input type="checkbox" name="__s[]" id="15013" value="Mawryngkneng" data-checked="0" />Mawryngkneng</li><li><input type="checkbox" name="__s[]" id="15034" value="Mawshynrut" data-checked="0" />Mawshynrut</li><li><input type="checkbox" name="__s[]" id="15025" value="Mawsynram" data-checked="0" />Mawsynram</li><li><input type="checkbox" name="__s[]" id="15031" value="Mawthadraishan" data-checked="0" />Mawthadraishan</li><li><input type="checkbox" name="__s[]" id="15038" value="Mendipathar" data-checked="0" />Mendipathar</li><li><input type="checkbox" name="__s[]" id="15004" value="Mowkaiaw" data-checked="0" />Mowkaiaw</li><li><input type="checkbox" name="__s[]" id="15020" value="Mylliem" data-checked="0" />Mylliem</li><li><input type="checkbox" name="__s[]" id="15001" value="Nartiang" data-checked="0" />Nartiang</li><li><input type="checkbox" name="__s[]" id="15022" value="Nongkrem" data-checked="0" />Nongkrem</li><li><input type="checkbox" name="__s[]" id="15009" value="Nongpoh" data-checked="0" />Nongpoh</li><li><input type="checkbox" name="__s[]" id="15032" value="Nongstoin" data-checked="0" />Nongstoin</li><li><input type="checkbox" name="__s[]" id="15021" value="Nongthymmai" data-checked="0" />Nongthymmai</li><li><input type="checkbox" name="__s[]" id="15017" value="North Shillong" data-checked="0" />North Shillong</li><li><input type="checkbox" name="__s[]" id="15050" value="North Tura" data-checked="0" />North Tura</li><li><input type="checkbox" name="__s[]" id="15046" value="Phulbari" data-checked="0" />Phulbari</li><li><input type="checkbox" name="__s[]" id="15014" value="Pynthorumkhrah" data-checked="0" />Pynthorumkhrah</li><li><input type="checkbox" name="__s[]" id="15027" value="Pynursla" data-checked="0" />Pynursla</li><li><input type="checkbox" name="__s[]" id="15047" value="Rajabala" data-checked="0" />Rajabala</li><li><input type="checkbox" name="__s[]" id="15044" value="Raksamgre" data-checked="0" />Raksamgre</li><li><input type="checkbox" name="__s[]" id="15003" value="Raliang" data-checked="0" />Raliang</li><li><input type="checkbox" name="__s[]" id="15033" value="Rambrai Jyrngam" data-checked="0" />Rambrai Jyrngam</li><li><input type="checkbox" name="__s[]" id="15052" value="Rangsakona" data-checked="0" />Rangsakona</li><li><input type="checkbox" name="__s[]" id="15035" value="Ranikor" data-checked="0" />Ranikor</li><li><input type="checkbox" name="__s[]" id="15039" value="Resubelpara" data-checked="0" />Resubelpara</li><li><input type="checkbox" name="__s[]" id="15058" value="Rongara-Siju" data-checked="0" />Rongara-Siju</li><li><input type="checkbox" name="__s[]" id="15042" value="Rongjeng" data-checked="0" />Rongjeng</li><li><input type="checkbox" name="__s[]" id="15055" value="Salmanpara" data-checked="0" />Salmanpara</li><li><input type="checkbox" name="__s[]" id="15048" value="Selsella" data-checked="0" />Selsella</li><li><input type="checkbox" name="__s[]" id="15026" value="Shella" data-checked="0" />Shella</li><li><input type="checkbox" name="__s[]" id="15023" value="Sohiong" data-checked="0" />Sohiong</li><li><input type="checkbox" name="__s[]" id="15028" value="Sohra" data-checked="0" />Sohra</li><li><input type="checkbox" name="__s[]" id="15041" value="Songsak" data-checked="0" />Songsak</li><li><input type="checkbox" name="__s[]" id="15019" value="South Shillong" data-checked="0" />South Shillong</li><li><input type="checkbox" name="__s[]" id="15051" value="South Tura" data-checked="0" />South Tura</li><li><input type="checkbox" name="__s[]" id="15005" value="Sutnga-Saipung" data-checked="0" />Sutnga-Saipung</li><li><input type="checkbox" name="__s[]" id="15045" value="Tikrikila" data-checked="0" />Tikrikila</li><li><input type="checkbox" name="__s[]" id="15012" value="Umroi" data-checked="0" />Umroi</li><li><input type="checkbox" name="__s[]" id="15011" value="Umsning" data-checked="0" />Umsning</li><li><input type="checkbox" name="__s[]" id="15018" value="West Shillong" data-checked="0" />West Shillong</li><li><input type="checkbox" name="__s[]" id="15043" value="William Nagar" data-checked="0" />William Nagar</li></ul></div><div class="mutliSelect" style="display:none;" id="_elex_const_NAG" onchange=$(\"#_elex_sub\").attr("data-constid", this.value)><ul><li><input type="checkbox" name="__s[]" id="17047" value="Aboi" data-checked="0" />Aboi</li><li><input type="checkbox" name="__s[]" id="17034" value="Aghunato" data-checked="0" />Aghunato</li><li><input type="checkbox" name="__s[]" id="17031" value="Akuluto" data-checked="0" />Akuluto</li><li><input type="checkbox" name="__s[]" id="17030" value="Alungtaki" data-checked="0" />Alungtaki</li><li><input type="checkbox" name="__s[]" id="17024" value="Angetyongpang" data-checked="0" />Angetyongpang</li><li><input type="checkbox" name="__s[]" id="17026" value="Aonglenden" data-checked="0" />Aonglenden</li><li><input type="checkbox" name="__s[]" id="17022" value="Arkakong" data-checked="0" />Arkakong</li><li><input type="checkbox" name="__s[]" id="17032" value="Atoizu" data-checked="0" />Atoizu</li><li><input type="checkbox" name="__s[]" id="17040" value="Bhandari" data-checked="0" />Bhandari</li><li><input type="checkbox" name="__s[]" id="17018" value="Chazouba" data-checked="0" />Chazouba</li><li><input type="checkbox" name="__s[]" id="17017" value="Chizami" data-checked="0" />Chizami</li><li><input type="checkbox" name="__s[]" id="17001" value="Dimapur I" data-checked="0" />Dimapur I</li><li><input type="checkbox" name="__s[]" id="17002" value="Dimapur II" data-checked="0" />Dimapur II</li><li><input type="checkbox" name="__s[]" id="17003" value="Dimapur III" data-checked="0" />Dimapur III</li><li><input type="checkbox" name="__s[]" id="17004" value="Ghaspani I" data-checked="0" />Ghaspani I</li><li><input type="checkbox" name="__s[]" id="17005" value="Ghaspani II" data-checked="0" />Ghaspani II</li><li><input type="checkbox" name="__s[]" id="17023" value="Impur" data-checked="0" />Impur</li><li><input type="checkbox" name="__s[]" id="17029" value="Jangpetkong" data-checked="0" />Jangpetkong</li><li><input type="checkbox" name="__s[]" id="17009" value="Kohima Town" data-checked="0" />Kohima Town</li><li><input type="checkbox" name="__s[]" id="17028" value="Koridang" data-checked="0" />Koridang</li><li><input type="checkbox" name="__s[]" id="17052" value="Longkhim Chare" data-checked="0" />Longkhim Chare</li><li><input type="checkbox" name="__s[]" id="17050" value="Longleng" data-checked="0" />Longleng</li><li><input type="checkbox" name="__s[]" id="17020" value="Meluri" data-checked="0" />Meluri</li><li><input type="checkbox" name="__s[]" id="17048" value="Moka" data-checked="0" />Moka</li><li><input type="checkbox" name="__s[]" id="17027" value="Mokokchung Town" data-checked="0" />Mokokchung Town</li><li><input type="checkbox" name="__s[]" id="17046" value="Mon Town" data-checked="0" />Mon Town</li><li><input type="checkbox" name="__s[]" id="17025" value="Monguya" data-checked="0" />Monguya</li><li><input type="checkbox" name="__s[]" id="17056" value="Noklak" data-checked="0" />Noklak</li><li><input type="checkbox" name="__s[]" id="17051" value="Noksen" data-checked="0" />Noksen</li><li><input type="checkbox" name="__s[]" id="17010" value="Northern Angami I" data-checked="0" />Northern Angami I</li><li><input type="checkbox" name="__s[]" id="17011" value="Northern Angami II" data-checked="0" />Northern Angami II</li><li><input type="checkbox" name="__s[]" id="17007" value="Peren" data-checked="0" />Peren</li><li><input type="checkbox" name="__s[]" id="17016" value="Pfutsero" data-checked="0" />Pfutsero</li><li><input type="checkbox" name="__s[]" id="17019" value="Phek" data-checked="0" />Phek</li><li><input type="checkbox" name="__s[]" id="17044" value="Phomching" data-checked="0" />Phomching</li><li><input type="checkbox" name="__s[]" id="17013" value="Pughoboto" data-checked="0" />Pughoboto</li><li><input type="checkbox" name="__s[]" id="17060" value="Pungro Kiphire" data-checked="0" />Pungro Kiphire</li><li><input type="checkbox" name="__s[]" id="17039" value="Sanis" data-checked="0" />Sanis</li><li><input type="checkbox" name="__s[]" id="17036" value="Satakha" data-checked="0" />Satakha</li><li><input type="checkbox" name="__s[]" id="17058" value="Shamtorr Chessore" data-checked="0" />Shamtorr Chessore</li><li><input type="checkbox" name="__s[]" id="17059" value="Siyuchong Sitimi" data-checked="0" />Siyuchong Sitimi</li><li><input type="checkbox" name="__s[]" id="17014" value="Southern Angami I" data-checked="0" />Southern Angami I</li><li><input type="checkbox" name="__s[]" id="17015" value="Southern Angami II" data-checked="0" />Southern Angami II</li><li><input type="checkbox" name="__s[]" id="17033" value="Suruhuto" data-checked="0" />Suruhuto</li><li><input type="checkbox" name="__s[]" id="17049" value="Tamlu" data-checked="0" />Tamlu</li><li><input type="checkbox" name="__s[]" id="17043" value="Tapi" data-checked="0" />Tapi</li><li><input type="checkbox" name="__s[]" id="17045" value="Tehok" data-checked="0" />Tehok</li><li><input type="checkbox" name="__s[]" id="17006" value="Tenning" data-checked="0" />Tenning</li><li><input type="checkbox" name="__s[]" id="17057" value="Thonoknyu" data-checked="0" />Thonoknyu</li><li><input type="checkbox" name="__s[]" id="17041" value="Tizit" data-checked="0" />Tizit</li><li><input type="checkbox" name="__s[]" id="17055" value="Tobu" data-checked="0" />Tobu</li><li><input type="checkbox" name="__s[]" id="17012" value="Tseminyu" data-checked="0" />Tseminyu</li><li><input type="checkbox" name="__s[]" id="17053" value="Tuensang Sadar I" data-checked="0" />Tuensang Sadar I</li><li><input type="checkbox" name="__s[]" id="17054" value="Tuensang Sadar II" data-checked="0" />Tuensang Sadar II</li><li><input type="checkbox" name="__s[]" id="17021" value="Tuli" data-checked="0" />Tuli</li><li><input type="checkbox" name="__s[]" id="17037" value="Tyui" data-checked="0" />Tyui</li><li><input type="checkbox" name="__s[]" id="17042" value="Wakching" data-checked="0" />Wakching</li><li><input type="checkbox" name="__s[]" id="17008" value="Western Angami" data-checked="0" />Western Angami</li><li><input type="checkbox" name="__s[]" id="17038" value="Wokha" data-checked="0" />Wokha</li><li><input type="checkbox" name="__s[]" id="17035" value="Zunheboto" data-checked="0" />Zunheboto</li></ul></div><div class="mutliSelect" style="display:none;" id="_elex_const_TRI" onchange=$(\"#_elex_sub\").attr("data-constid", this.value)><ul><li><input type="checkbox" name="__s[]" id="23006" value="Agartala" data-checked="0" />Agartala</li><li><input type="checkbox" name="__s[]" id="23042" value="Amarpur" data-checked="0" />Amarpur</li><li><input type="checkbox" name="__s[]" id="23047" value="Ambassa" data-checked="0" />Ambassa</li><li><input type="checkbox" name="__s[]" id="23041" value="Ampinagar" data-checked="0" />Ampinagar</li><li><input type="checkbox" name="__s[]" id="23026" value="Asharambari" data-checked="0" />Asharambari</li><li><input type="checkbox" name="__s[]" id="23014" value="Badharghat" data-checked="0" />Badharghat</li><li><input type="checkbox" name="__s[]" id="23055" value="Bagbassa" data-checked="0" />Bagbassa</li><li><input type="checkbox" name="__s[]" id="23030" value="Bagma" data-checked="0" />Bagma</li><li><input type="checkbox" name="__s[]" id="23003" value="Bamutia" data-checked="0" />Bamutia</li><li><input type="checkbox" name="__s[]" id="23009" value="Banamalipur" data-checked="0" />Banamalipur</li><li><input type="checkbox" name="__s[]" id="23004" value="Barjala" data-checked="0" />Barjala</li><li><input type="checkbox" name="__s[]" id="23035" value="Belonia" data-checked="0" />Belonia</li><li><input type="checkbox" name="__s[]" id="23016" value="Bishalgarh" data-checked="0" />Bishalgarh</li><li><input type="checkbox" name="__s[]" id="23020" value="Boxanagar" data-checked="0" />Boxanagar</li><li><input type="checkbox" name="__s[]" id="23052" value="Chandipur" data-checked="0" />Chandipur</li><li><input type="checkbox" name="__s[]" id="23019" value="Charilam" data-checked="0" />Charilam</li><li><input type="checkbox" name="__s[]" id="23049" value="Chhawmanu" data-checked="0" />Chhawmanu</li><li><input type="checkbox" name="__s[]" id="23023" value="Dhanpur" data-checked="0" />Dhanpur</li><li><input type="checkbox" name="__s[]" id="23056" value="Dharmanagar" data-checked="0" />Dharmanagar</li><li><input type="checkbox" name="__s[]" id="23051" value="Fatikroy" data-checked="0" />Fatikroy</li><li><input type="checkbox" name="__s[]" id="23017" value="Golaghati" data-checked="0" />Golaghati</li><li><input type="checkbox" name="__s[]" id="23037" value="Hrishyamukh" data-checked="0" />Hrishyamukh</li><li><input type="checkbox" name="__s[]" id="23038" value="Jolaibari" data-checked="0" />Jolaibari</li><li><input type="checkbox" name="__s[]" id="23057" value="Jubarajnagar" data-checked="0" />Jubarajnagar</li><li><input type="checkbox" name="__s[]" id="23054" value="Kadamtala-Kurti" data-checked="0" />Kadamtala-Kurti</li><li><input type="checkbox" name="__s[]" id="23053" value="Kailashahar" data-checked="0" />Kailashahar</li><li><input type="checkbox" name="__s[]" id="23033" value="Kakraban-Salgarah" data-checked="0" />Kakraban-Salgarah</li><li><input type="checkbox" name="__s[]" id="23027" value="Kalyanpur-Pramodenagar" data-checked="0" />Kalyanpur-Pramodenagar</li><li><input type="checkbox" name="__s[]" id="23015" value="Kamalasagar" data-checked="0" />Kamalasagar</li><li><input type="checkbox" name="__s[]" id="23045" value="Kamalpur" data-checked="0" />Kamalpur</li><li><input type="checkbox" name="__s[]" id="23060" value="Kanchanpur" data-checked="0" />Kanchanpur</li><li><input type="checkbox" name="__s[]" id="23048" value="Karamchhara" data-checked="0" />Karamchhara</li><li><input type="checkbox" name="__s[]" id="23043" value="Karbook" data-checked="0" />Karbook</li><li><input type="checkbox" name="__s[]" id="23005" value="Khayerpur" data-checked="0" />Khayerpur</li><li><input type="checkbox" name="__s[]" id="23025" value="Khowai" data-checked="0" />Khowai</li><li><input type="checkbox" name="__s[]" id="23029" value="Krishnapur" data-checked="0" />Krishnapur</li><li><input type="checkbox" name="__s[]" id="23010" value="Majlishpur" data-checked="0" />Majlishpur</li><li><input type="checkbox" name="__s[]" id="23011" value="Mandaibazar" data-checked="0" />Mandaibazar</li><li><input type="checkbox" name="__s[]" id="23039" value="Manu" data-checked="0" />Manu</li><li><input type="checkbox" name="__s[]" id="23032" value="Matarbari" data-checked="0" />Matarbari</li><li><input type="checkbox" name="__s[]" id="23002" value="Mohanpur" data-checked="0" />Mohanpur</li><li><input type="checkbox" name="__s[]" id="23021" value="Nalchar" data-checked="0" />Nalchar</li><li><input type="checkbox" name="__s[]" id="23050" value="Pabiachhara" data-checked="0" />Pabiachhara</li><li><input type="checkbox" name="__s[]" id="23058" value="Panisagar" data-checked="0" />Panisagar</li><li><input type="checkbox" name="__s[]" id="23059" value="Pencharthal" data-checked="0" />Pencharthal</li><li><input type="checkbox" name="__s[]" id="23013" value="Pratapgarh" data-checked="0" />Pratapgarh</li><li><input type="checkbox" name="__s[]" id="23031" value="Radhakishorepur" data-checked="0" />Radhakishorepur</li><li><input type="checkbox" name="__s[]" id="23044" value="Raima Valley" data-checked="0" />Raima Valley</li><li><input type="checkbox" name="__s[]" id="23034" value="Rajnagar" data-checked="0" />Rajnagar</li><li><input type="checkbox" name="__s[]" id="23024" value="Ramchandraghat" data-checked="0" />Ramchandraghat</li><li><input type="checkbox" name="__s[]" id="23007" value="Ramnagar" data-checked="0" />Ramnagar</li><li><input type="checkbox" name="__s[]" id="23040" value="Sabroom" data-checked="0" />Sabroom</li><li><input type="checkbox" name="__s[]" id="23036" value="Santirbazar" data-checked="0" />Santirbazar</li><li><input type="checkbox" name="__s[]" id="23001" value="Simna" data-checked="0" />Simna</li><li><input type="checkbox" name="__s[]" id="23022" value="Sonamura" data-checked="0" />Sonamura</li><li><input type="checkbox" name="__s[]" id="23046" value="Surma" data-checked="0" />Surma</li><li><input type="checkbox" name="__s[]" id="23018" value="Suryamaninagar" data-checked="0" />Suryamaninagar</li><li><input type="checkbox" name="__s[]" id="23012" value="Takarjala" data-checked="0" />Takarjala</li><li><input type="checkbox" name="__s[]" id="23028" value="Teliamura" data-checked="0" />Teliamura</li><li><input type="checkbox" name="__s[]" id="23008" value="Town Bordowali" data-checked="0" />Town Bordowali</li></ul></div>';
	var _elecdt = '2nd March';
    var html = '<style>#__elexWidget h2,.subs_button span{text-transform:uppercase;text-align:center}#__elexWidget,.subs_button span{box-sizing:border-box;font-family:Roboto}#__cricketsubscribe select{padding:4px 0;font-size:12px;border-radius:5px;width:100%;border:1px solid #ccc}.__drpdown{width:100%;display:block;margin:0;position:relative}#___ndtvELexBanner h3{text-align:left;font-size:14px;padding:10px;margin:10px 15px 15px 15px;line-height:22px;font-weight:500;position:relative;z-index:2;background-color:#fff;border-radius:6px;box-sizing:border-box}#___ndtvELexBanner h3 .not_sub_head,#___ndtvELexBanner h3 .not_sub_head2{color:#000;padding-bottom:7px;line-height:17px;margin-bottom:0;font-size:14px;display:block;text-decoration:none}#___ndtvELexBanner h3 .not_sub_head{font-weight:500}#___ndtvELexBanner h3 .not_sub_head2{font-weight:700}#___ndtvELexBanner h3 .not_sub_head2 strong{text-align:left;font-size:14px;margin:7px 0;font-weight:500;position:relative;z-index:2;padding:0}#__elexWidget h2{font-size:18px;margin:0;font-weight:600;z-index:2;position:relative;color:#fff;padding:4px;padding:8px 0 0 45px;text-align:left}.__drpdown dt a .close_a,.__drpdown dt a .drop_a{width:10px;height:10px;position:absolute;font-weight:400;right:0}.__drpdown dt a .drop_a:after{content:"";position:absolute;right:10px;top:9px;width:2px;height:2px;transform:rotate(45deg);-webkit-transform:rotate(45deg);border:solid #333;border-width:0 2px 2px 0;display:inline-block;padding:2px}.__drpdown dt a .close_a{color:#000;right:5px;top:10px;font-size:13px;display:block}.__drpdown dt a .close_a:after,.__drpdown dt a .close_a:before{position:absolute;left:0;content:"";height:10px;width:2px;background-color:#333}.close_a:before{transform:rotate(45deg)}.close_a:after{transform:rotate(-45deg)}.__drpdown dt a.closex .close_a{display:none}.__drpdown dt a.closex .drop_a{display:block}.__drpdown dt a::before{content:"Select Constituencies";color:#000;font-size:13px;display:inline-block;float:left;padding:3px 0 3px 10px;font-weight:400}.__drpdown dt a{height:30px;border-radius:3px;background:#fff;padding-left:8px;margin-top:10px;position:relative;width:93%}.divFacet{background:rgba(255,255,255,1);border:1px solid #ccc;padding:0 15px 0 5px;float:left;border-radius:3px;position:relative;overflow:hidden;font-size:13px;line-height:19px;margin:0 8px 7px 0}.divFacet span{font-weight:400;color:#000;padding-right:5px}.divFacet b{text-indent:100px}.divFacet b,.divFacet b:hover{color:#ca4242;float:right;cursor:pointer;position:absolute;right:5px;text-decoration:none;width:9px;height:9px}.divFacet b::before{content:"";width:9px;height:9px;position:absolute;left:0;top:6px;background:url(https://www.ndtv.com/convergence/electionsubscribe/images/delete_icon.png) no-repeat;background-size:80%}.foot_note{display:block;font-size:10px;color:#000;font-weight:400;line-height:normal;padding-top:6px}.subs_button{width:100%;text-align:center;margin-top:5px}.subs_button span{cursor:pointer;color:#fff;font-size:13px;font-weight:700;background:#7685c1;background:-moz-linear-gradient(-45deg,#7685c1 0,#348ac7 100%);background:-webkit-linear-gradient(-45deg,#7685c1 0,#348ac7 100%);background:linear-gradient(135deg,#7685c1 0,#348ac7 100%);padding:4px 25px 4px;margin:0;text-decoration:none;display:inline-block;border-radius:5px;top:0px;position:relative}#__cricketsubscribe .noti_bgstyle{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.8);opacity:.45}.__drpdown dd,.__drpdown dt{margin:0;padding:0}.__drpdown ul{margin:-1px 0 0}.__drpdown dd{position:absolute;width:100%;z-index:99;background-color:#fff;border-radius:4px;box-shadow:0 2px 5px rgba(0,0,0,.25);display:none;padding:5px;box-sizing:border-box}.__drpdown a,.__drpdown a:visited{color:#fff;text-decoration:none;outline:0;font-size:12px}.__drpdown dt a{display:block;padding:0;min-height:30px;line-height:26px;border:1px solid #ccc}.__drpdown span.value,.hida{display:none}.__drpdown dd ul li input{margin-right:10px}.mutliSelect ul{position:relative;z-index:9999}.__drpdown dd ul{color:#fff;display:block;left:0;padding:0;list-style:none;height:130px;overflow:auto;width:93%}.__drpdown dd .mutliSelect ul li{cursor:pointer;text-align:left;padding:5px;border-bottom:1px solid #e7e7e7;color:#000}.__drpdown dd .mutliSelect ul li:after{display:none}.__drpdown dd ul li a{padding:5px;display:block}.__drpdown dd ul li a:hover{background-color:#fff}.__drpdown button{background-color:#6bbe92;width:302px;border:0;padding:10px 0;margin:5px 0;text-align:center;color:#fff;font-weight:700}.__drpdown p{height:auto;overflow:auto;margin-top:5px}.elec_stamp{background:url(https://drop.ndtv.com/ndtv/images/election-stamp.jpg) center center no-repeat;float:left;height:227px;margin:0;padding:0;position:absolute;left:39px;top:50px;width:195px;z-index:1}.note_wrap{float:left;border-radius:5px;width:100%;height:auto;background:#7474bf;background:-moz-linear-gradient(-45deg,#7474bf 0,#348ac7 100%);background:-webkit-linear-gradient(-45deg,#7474bf 0,#348ac7 100%);background:linear-gradient(135deg,#7474bf 0,#348ac7 100%);padding:0;box-sizing:border-box;position:relative}#__elexWidget{z-index:99999;color:#333;width:100%;text-align:center;font-size:12px;padding:0;border-radius:3px}#tfnewsearch{float:right;padding:10px 0 0;width:100%}.tftextinput{margin:0;padding:4px 8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;border:1px solid #dfdfdf;border-right:0;border-top-left-radius:5px 5px;border-bottom-left-radius:5px 5px;width:79%;outline:0}.tfbutton{margin:0;padding:5px 5px 4px;cursor:pointer;color:#fff;background:url(Search.png) center center no-repeat;background-color:inherit;border:1px solid #dfdfdf;border-left:0;width:20px;border-top-right-radius:5px 5px;border-bottom-right-radius:5px 5px;outline:0}.tfbutton::-moz-focus-inner{border:0}.tfclear{clear:both}#___ndtvELexBanner h3 .not_sub_head{font-weight:600}#___ndtvELexBanner h3 .not_sub_head2{border-bottom:0;margin-bottom:0;font-weight:400}.__drpdown dd ul{width:100%}#___ndtvELexBanner h3 .not_sub_head2 strong{padding-left:0}.__drpdown a{width:100%!important}.foot_note{text-align:center}.styled-select{background:#fff;border:1px solid #ccc;height:30px;overflow:hidden;width:100%;border-radius:3px;margin:5px auto 0 auto;cursor:pointer;position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none}.styled-select:after{content:"";position:absolute;background:0 0;right:10px;top:9px;width:2px;height:2px;transform:rotate(45deg);-webkit-transform:rotate(45deg);border:solid #333;border-width:0 2px 2px 0;display:inline-block;padding:2px}.styled-select select{background:0 0;border:none;outline:0;font-size:14px;height:30px;padding:0 10px;width:100%;text-transform:none;color:#000;font-weight:400;line-height:1.2;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.styled-select select option{background:#fff;font-size:12px}.note_wrap:before{content:"";position:absolute;top:-10px;left:-10px;width:41px;height:41px;box-sizing:border-box;border-radius:50%;border:solid 5px #fff;background:#6776c0;background:-moz-linear-gradient(-45deg,#6776c0 0,#6676c0 100%);background:-webkit-linear-gradient(-45deg,#6776c0 0,#6676c0 100%);background:linear-gradient(135deg,#6776c0 0,#6676c0 100%)}.note_wrap:after{content:"";position:absolute;top:1px;left:2px;display:block;width:17px;height:18px;z-index:9;-webkit-animation:bell-vibrate 3s .7s ease-in-out infinite;-webkit-transform-origin:50% 4px;-moz-animation:bell-vibrate 3s .7s ease-in-out infinite;-moz-transform-origin:50% 4px;animation:bell-vibrate 3s .7s ease-in-out infinite;transform-origin:50% 4px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDc2cHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA0NzYgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4yICg2NzE0NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZG93bmxvYWQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOTMuNDA0LDI4OC41MDYgQzM3NC45NDksMjQzLjQ5MiAzNjUuNzE5LDE5Ni4wNTEgMzY1LjcxOSwxNDYuMTgxIEMzNjUuNzE5LDExNC43NzYgMzU2LjU4OCw4OS44NDQgMzM4LjMyMSw3MS4zNzkgQzMyMC4wNDEsNTIuOTE1IDI5NC45MTUsNDEuNzc3IDI2Mi45MzgsMzcuOTcyIEMyNjQuNDU4LDM0LjU0OCAyNjUuMjE3LDMxLjAyNyAyNjUuMjE3LDI3LjQxIEMyNjUuMjE3LDE5Ljc5NiAyNjIuNTU0LDEzLjMxOSAyNTcuMjI2LDcuOTk0IEMyNTEuODk4LDIuNjYzIDI0NS40MjcsMCAyMzcuODEyLDAgQzIzMC4yMDIsMCAyMjMuNzI5LDIuNjYzIDIxOC4zOTgsNy45OTQgQzIxMy4wNjgsMTMuMzIzIDIxMC40MDUsMTkuNzk2IDIxMC40MDUsMjcuNDEgQzIxMC40MDUsMzEuMDI3IDIxMS4xNjUsMzQuNTQ1IDIxMi42OSwzNy45NzIgQzE4MC43MTMsNDEuNzgxIDE1NS41ODcsNTIuOTE0IDEzNy4zMTUsNzEuMzc5IEMxMTkuMDQ0LDg5Ljg0MyAxMDkuOTA5LDExNC43NzUgMTA5LjkwOSwxNDYuMTgxIEMxMDkuOTA5LDE5Ni4wNTEgMTAwLjY4LDI0My40OTIgODIuMjE1LDI4OC41MDYgQzYzLjc1MSwzMzMuNTIxIDM2LjQzOSwzNzEuMzUzIDAuMjczLDQwMS45OTggQzAuMjczLDQxMS44OTQgMy44OSw0MjAuNDYxIDExLjEyMyw0MjcuNjkxIEMxOC4zNTUsNDM0LjkyMiAyNi45MTksNDM4LjU0MyAzNi44Miw0MzguNTQzIEwxNjQuNzI3LDQzOC41NDMgQzE2NC43MjcsNDU4LjcyMSAxNzEuODYyLDQ3NS45NDcgMTg2LjEzOCw0OTAuMjE4IEMyMDAuNDE1LDUwNC40OTEgMjE3LjY0Miw1MTEuNjMgMjM3LjgxNiw1MTEuNjMgQzI1Ny45OTMsNTExLjYzIDI3NS4yMiw1MDQuNDkxIDI4OS40OTEsNDkwLjIxOCBDMzAzLjc2NCw0NzUuOTQ3IDMxMC45MDMsNDU4LjcyMSAzMTAuOTAzLDQzOC41NDMgTDQzOC44MSw0MzguNTQzIEM0NDguNzA3LDQzOC41NDMgNDU3LjI4LDQzNC45MyA0NjQuNTA0LDQyNy42OTEgQzQ3MS43MzgsNDIwLjQ2MSA0NzUuMzU2LDQxMS44OTQgNDc1LjM1Niw0MDEuOTk4IEM0MzkuMTk2LDM3MS4zNTMgNDExLjg4MSwzMzMuNTIxIDM5My40MDQsMjg4LjUwNiBaIE0yMzcuODE2LDQ4OC43ODcgQzIyMy45MjIsNDg4Ljc4NyAyMTIuMDY5LDQ4My44OTEgMjAyLjI2OCw0NzQuMDg5IEMxOTIuNDY3LDQ2NC4yODUgMTg3LjU2NSw0NTIuNDMxIDE4Ny41NjUsNDM4LjUzNiBDMTg3LjU2NSw0MzUuNDkgMTg5LjA4OSw0MzMuOTY4IDE5Mi4xMzMsNDMzLjk2OCBDMTk1LjE3OSw0MzMuOTY4IDE5Ni43MDMsNDM1LjQ5IDE5Ni43MDMsNDM4LjUzNiBDMTk2LjcwMyw0NDkuNzY3IDIwMC43NDYsNDU5LjQyNSAyMDguODM1LDQ2Ny41MTggQzIxNi45MjYsNDc1LjYxMiAyMjYuNTg0LDQ3OS42NTMgMjM3LjgxNSw0NzkuNjUzIEMyNDAuODYxLDQ3OS42NTMgMjQyLjM5LDQ4MS4xODMgMjQyLjM5LDQ4NC4yMjIgQzI0Mi4zOTIsNDg3LjI2OCAyNDAuODYyLDQ4OC43ODcgMjM3LjgxNiw0ODguNzg3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);background-size:100%;background-repeat:no-repeat;background-position:center center;opacity:.85}@keyframes bell-vibrate{0%{transform:rotate(0)}4%{transform:rotate(8deg)}8%{transform:rotate(-8deg)}12%{transform:rotate(8deg)}16%{transform:rotate(-8deg)}20%{transform:rotate(0)}100%{transform:rotate(0)}}@-webkit-keyframes bell-vibrate{0%{transform:rotate(0)}4%{transform:rotate(8deg)}8%{transform:rotate(-8deg)}12%{transform:rotate(8deg)}16%{transform:rotate(-8deg)}20%{transform:rotate(0)}100%{transform:rotate(0)}}</style>\
            <div id="__elexWidget">\
            <div class="note_wrap">\
               <div class="elec_stamp"></div>\
               <a href="https://www.ndtv.com/elections"><h2> Election Alerts </h2></a>\
               <h3><span class="not_sub_head">Subscribe here for real-time election results by constituency</span><span class="not_sub_head2">Select up to 10 constituencies and we\'ll send you latest updates as votes are counted on <strong>'+_elecdt+'</strong></span>\
               <div class="styled-select">'+_stts+'</div>\
                <div>\
                <dl class="__drpdown">\
                    <dt><a href="javascript:void(0);" class="closex"><span class="tgle drop_a"></span><span class="tgle close_a"></span></a></dt>\
                    <dd>'+_consts+'</dd>\
                    <p class="multiSel"><span class="hida">Select</span></p>\
                </dl>\
                <div class="subs_button"><span  id="_elex_sub" data-constid="" onClick="if($(this).attr(\'data-constid\')!=\'\'){constID = sections = $(this).attr(\'data-constid\');__alw();}else{alert(\'Please select your Constituency\');}">Subscribe</span></div>\
                <span class="foot_note" style="display:none;font-size:12px;"><a target="_blank" href="https://twitter.com/ndtv/status/995970776170819584">Or tweet @ndtv with #NDTVLiveResults to subscribe.</a></span>\
                <span class="foot_note">Browser notifications can be managed from settings tab.</span>\
                </div>\
               </h3>\
            </div>\
            </div>';
    var id = document.getElementById('___ndtvELexBanner');
    if (id) {
        id.innerHTML = html; 
        var userClicked = 0;
        $(".__drpdown dt a").on('click', function () {
            $(".__drpdown dd").slideToggle('fast');
            $('.tgle').toggle();
            userClicked = 1;
        });

        $(".__drpdown dd ul li a").on('click', function () {
            $(".__drpdown dd").hide();
        });
        $('.__drpdown .mutliSelect li').on('click', function () {
            var checkboxID = $(this).closest('li').find('input[type="checkbox"]').attr('id');
            var title = $(this).closest('li').find('input[type="checkbox"]').val();//title = title + ",";
            var isChecked = $(this).closest('li').find('input[type="checkbox"]').attr('data-checked');
            isChecked = parseInt(isChecked);
            if (!isChecked) {
                if($('input[name^=__s]:checked').length>=10 && userClicked){alert('You can only select up to 10 constituencies'); return true;}
                var html = '<div title="' + checkboxID + '" class="divFacet" onclick=uncheckOpt("'+checkboxID+'") ><span>' + title + '</span><b>x</b></div>';
                $('.multiSel').append(html);
                $(".hida").hide();
                $('#' + checkboxID).attr('checked', true);
                $('#' + checkboxID).attr('data-checked', 1);
            } else {
                $('div[title="' + checkboxID + '"]').remove();
                var ret = $(".hida");
                $('.__drpdown dt a').append(ret);
                $('#' + checkboxID).attr('checked', false);
                $('#' + checkboxID).attr('data-checked', 0);
            }
            $("#_elex_sub").attr("data-constid", __getcheckboxes());
        });
        
        $(document).bind('click', function (e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("__drpdown"))
                $(".__drpdown dd").hide();
            //$('.close_a').hide();
            if ($('.__drpdown dd').css('display') == 'none') {
                $(".close_a").hide();
                $(".drop_a").show();
            }
        });

        __elexConst = storageGet('__elexConst') || '';
        if(__elexConst){
            $.each( __elexConst.split(','), function(index, value) {
                if($('#'+value)){
                    $('#'+value).trigger( "click");
                }
            });
        }
    }
}

function uncheckOpt(checkboxID){
    $('div[title="' + checkboxID + '"]').remove();
    $('#'+checkboxID).trigger( "click");
}
function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

function storageSet(name, val) {
    try {
        localStorage.setItem(name, val);
    } catch (e) {
    }
}

function storageGet(name) {
    var val = null;
    try {
        val = localStorage.getItem(name);
    } catch (e) {
        val = null;
    }
    return val;
}


            
