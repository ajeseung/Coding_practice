(function(){
    function nop(){}
    var sig = "RTA2IFRAMEEVENT" ;
    var elt = document.getElementsByClassName("RTA2-loader")[0] || document.querySelector("[data-rta2]") ;
    if (!elt) {
        window.RTA = {ito:nop, geo:nop, tedEvent:nop};
        return console.warn("RTA2: config error") ;
    }

    function getRUID() {
        if (RTA._ruid) return RTA._ruid ;
        var m ;
        try {
            m = window.localStorage.getItem('rta2') ;
            return RTA._ruid = JSON.parse(m || "{}") ;
        } catch (ex) {
            m = document.cookie.match(/ruid=([^;]*)/) ;
            m = (m && m[1] && decodeURIComponent(m[1])) ;
            return RTA._ruid = JSON.parse(m || "{}") ;
        }
        return {} ;
    }

    function asyncRUID() {
        if (this.readyState==4 && this.status===200) {
            setRUID(this.rtahost,this.ruid,this.responseText) ;
        }
    }
                
    function setRUID(host,m,v) {
        try {
            var j = JSON.parse(v = v||"{}") ;
        } catch (ex) {
            return ;
        }
        for (var k in j)
            if (j.hasOwnProperty(k))
                if (k==='/')
                    m[k] = j[k] ;
                else
                    m[host][k] = j[k] ;
        RTA._ruid = m ;

        if (m['/']) {
            if (+m['/'].dd)
                dwellDelta = +r['/'].dd ;
            if (+m['/'].df)
                dwellFactor = +r['/'].df ;
        }

    		if (m[RTA._hosts[0]].chid && m[RTA._hosts[0]].__mou && RTA._resolveIDs) {
    			RTA._resolveIDs({ 
    				user: m[RTA._hosts[0]].__mou.toString().split(":")[0], 
    				created: +m[RTA._hosts[0]].__mou.toString().split(":")[2],
    				page: m[RTA._hosts[0]].chid 
    			}) ;
    			RTA._resolveIDs = null ;
    		}

        m.v = RTA.version ;
        v = JSON.stringify(m) ;
        try {
            window.localStorage.setItem('rta2',v) ;
        } catch (ex) { }
        document.cookie = "ruid="+encodeURIComponent(v)+";path=/;max-age=31536000;expires="+new Date(new Date().getTime()+31536000000).toUTCString() ;
    }

    function sendEvent(type,args) {
        if (type!==undefined) {
            RTA._buffer.push({t:type,a:args,d:new Date().getTime()});
        }
        return flushEvents(type==='unload') ;
    }
    
    function flushEvents(sync) { 
        var params = RTA._buffer ;
        RTA._buffer = [] ;

        if (Object.prototype.toString.call(params) === "[object Array]") {
            if (params.length===0) return ;
        } else {
            params = [params] ;
        }

        var k,qs = {
            ts:new Date().getTime(),
            o:params,
            r:document.referrer,
            p:window.location.href,
            v:""+RTA.version
        };
        if (RTA._ito)
            qs.c = RTA._ito;

        for (k=0; k<RTA._hosts.length; k++) {
            var data, src = window.location.protocol+"//"+RTA._hosts[k]+"/s/sa", xhr = new XMLHttpRequest() ;
            xhr.withCredentials = true;
            xhr.rtahost = RTA._hosts[k] ;
            xhr.ruid = getRUID() ;
            xhr.ruid[xhr.rtahost] = xhr.ruid[xhr.rtahost] || {} ;
            qs.i = xhr.ruid[xhr.rtahost] ;
            delete qs.i.phid ;
            qs.i.chid = pvid ;
            data = JSON.stringify(qs) ;
            if (sync) {
                try {
                    if(navigator.sendBeacon) {
                        navigator.sendBeacon(src, data);
                    }
                    else {
                        xhr.open('POST',src,false) ;
                        xhr.send(data);
                        if (xhr.status!==200) throw xhr ;
                        setRUID(xhr.rtahost,xhr.ruid,xhr.responseText) ;
                    }
                } catch (ex) {
                    console.warn("RTA2:",ex) ;
                }
            } else {
                xhr.open('POST',src,true) ;
                xhr.onreadystatechange = asyncRUID ;
                xhr.send(data);
            }
        }
    }

    function chid(r) { return (r || (Math.random()*1e17)).toString(36).replace(/\./,r||"")}
    var pvid = [chid(new Date().getTime()),chid(),chid()].join("-") ;
    var dwellDelta = 1987, dwellFactor = 1.5 ;
    var RTA = {
        version:0.31,
        _start:new Date().getTime(),
        _init:{type:elt.getAttribute("data-type"),params:decodeURIComponent(elt.getAttribute("data-params")||"%7B%7D")},
        _hosts:elt.getAttribute("data-hosts"),
        _pageSelector:elt.getAttribute("data-track-sel") || '#masthead #pageBody .pageBackground .floating-buttons div[itemtype="//schema.org/NewsArticle"] div[itemprop="mainEntity"] .scrollable-content #page-container',
        _script:elt.src.match(/(https?:\/\/)([^/]+)/),
        _ito:elt.getAttribute("data-ito")||undefined,
        _buffer:[],
        tedEvent:function(type,args){
            var pageType = (type==='view' || type==='cview' || type==='report') && type ;
            if (pageType) {
                if (!tidDwell) tidDwell = setTimeout(sendDwell,tNext);
                RTA._pageType = type ;
            }
            if (pageType || RTA._unloaded) {
                return sendEvent(type,args) ;
            }
            if (type==='video-event' && (args.action === 'video.content-started' || args.action === 'video.content-completed'))
                return sendEvent(type,args) ;
            RTA._buffer.push({t:type,a:args,d:new Date().getTime()});
        },
        tedFinalEvent:function(type,args){
        		this.tedEvent(type,args);
        		return flushEvents(true) ;
        },
        ito:function(id){RTA._ito = id},
        geo:nop
    };

    if (window.Promise) {
    		RTA.ids = new Promise(function(resolve){
    			RTA._resolveIDs = resolve ;
    		}) ;
    }
    
    if (window!==window.parent) {
        RTA.tedEvent = function() {
            window.parent.postMessage({sig:sig,call:'tedEvent',args:[].slice.call(arguments,0)},"*") ;
        } ;
        window.RTA = RTA;
        return ;
    }

    RTA._hosts = RTA._hosts?RTA._hosts.split(","):[RTA._script[2]];

    // Init dwell timing, update ruid
    var r ;
    try {
        r = window.localStorage.getItem('ruid') ;
        if (r && (r = JSON.parse(r))) {
            if (!r.v || r.v < "0.15") {
                var r2 = {} ;
                r2[RTA._hosts[0]] = r ;
                r2.v = RTA.version ;
                var v = JSON.stringify(r2) ;
                window.localStorage.setItem('rta2',v) ;
                document.cookie = "ruid="+encodeURIComponent(v)+";path=/;max-age=31536000;expires="+new Date(new Date().getTime()+31536000000).toUTCString() ;
                window.localStorage.removeItem('ruid');
            }
        }
    } catch (ex){}
    r = getRUID() ;

    window.RTA = RTA;

    // Send initial event
    if (RTA._init.type)
        RTA.tedEvent(RTA._init.type,JSON.parse(RTA._init.params));

    var tidDwell,tNext = 4567+(+(r && r['/'] && r['/'].dd)||0) ;
    function sendDwell() {
        var dwellTime = new Date().getTime() - RTA._start ;
        if (dwellTime > 30*60000)
            return ;
        var r = sendEvent('dwell',{dw:dwellTime});
        if (!RTA._unloaded) {
            tNext = (tNext+dwellDelta)*dwellFactor ;
            tidDwell = setTimeout(sendDwell,tNext);
        }
        return r ;
    }

    var lastClick, selectedText, scrollDepth = { }, lastPos = 0, lastTime = RTA._start ;
    function onScroll() {
        var p,
            now = new Date().getTime(),
            thisPos = ((window.pageYOffset/100)|0),
            period = ((now-lastTime)/50|0),
            endPos = lastPos + ((window.innerHeight/100)|0) ;

        for (p = lastPos; p != endPos; p += 1) {
            var pos = p ;
            if (pos>500) pos = 'dw' ;
            else pos = pos.toString(36) ;
            scrollDepth[pos] = (scrollDepth[pos]||0) + period ;
        }

        lastTime = now ;
        lastPos = thisPos ;
    };

    var hiddenTime, hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    function pageNowVisible() {
        if (hiddenTime)
            RTA._start += new Date().getTime()-hiddenTime ;
        RTA._unloaded = false ;
        hiddenTime = null ;
        if (!tidDwell) tidDwell = setTimeout(sendDwell,tNext);
    }
    
    function handleVisibilityChange(e) {
        if (document[hidden]) {
            beforeUnload(e);
            hiddenTime = new Date().getTime() ;
        } else {
            pageNowVisible() ;
        }
    }

    function beforeUnload(e){
        hiddenTime = new Date().getTime() ;

        if (RTA._unloaded)
            return ;

        if (!RTA._pageType)
            return ; // No view, cview or report was ever issued for this page.

        if (tidDwell) { clearTimeout(tidDwell); tidDwell = null; }

        onScroll() ;
        var sd = {} ;
        if (scrollDepth)
            for (var dp in scrollDepth)
                if (scrollDepth[dp]>0)
                    sd[dp] = Math.log(scrollDepth[dp])*10+0.5|0 ;
        var params = {dw:new Date().getTime() - RTA._start, selectedText:selectedText, scrollDepth:sd, lastEvent:e.type} ;
        if (lastClick) params.click = lastClick ;
        if ('performance' in window && 'timing' in performance) {
            params.load = performance.timing.loadEventEnd-performance.timing.requestStart ;
            params.domLoaded = performance.timing.domContentLoadedEventEnd-performance.timing.requestStart ;
            params.domComplete = performance.timing.domComplete-performance.timing.requestStart ;
        }
        try {
            params.impressions = window.adverts.getRendered().length;
        } catch(ex){}

        var r = sendEvent('unload',params);
        RTA._unloaded = true ;
        return r ;
    }

    function recordLastClick(e) {
        var elts, sels, i, pageTop, path, f, r;
        function selectorOf(e) {
            for (var i = 0;i < sels.length; i++) 
                if (e === elts[i]) 
                    return sels[i];
            var attr = attr = e.getAttribute("data-track");
            if (attr) 
                return '[data-track="' + attr + '"]';
            return e.tagName.toLowerCase() + (e.className ? "." + e.className.split(/\s+/)[0] : "") + (e.id ? "#" + e.id : "");
        }
        
        elts = [], sels = RTA._pageSelector ? RTA._pageSelector.split(/\s+/) : [];
        for (i = 0; i < sels.length; i++) 
            elts[i] = document.querySelector(sels[i]);
        sels.push("body");
        elts.push(document.body);
        for (i = 0; i < sels.length; i++) {
            if (elts[i] && elts[i].contains(e.target)) {
                pageTop = elts[i];
                path = [];
                for (f = e.target; f; f = f.parentNode) {
                    path.push(selectorOf(f));
                    if (pageTop === f) 
                        break;
                }
                r = pageTop.getBoundingClientRect();
                lastClick = {
                    x: e.clientX - r.left,
                    y: e.clientY - r.top,
                    top: path[path.length - 1],
                    path: path
                };
                break;
            }
        }
    }
    
    document.addEventListener('click',recordLastClick,false);
    
    document.addEventListener('selectstart',function(){ selectedText = true },false);
    window.addEventListener('scroll',onScroll) ;
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    window.addEventListener('pagehide',beforeUnload,false);
    window.addEventListener('pageshow',pageNowVisible,false);
    window.addEventListener('beforeunload',beforeUnload,false);
    window.addEventListener('unload',beforeUnload,false);
    if (window===window.parent) {
        window.addEventListener("message",function(event){
            if (event.data.sig===sig)
                window.RTA[event.data.call].apply(window.RTA,event.data.args) ;
        },false) ;
    }
})();
