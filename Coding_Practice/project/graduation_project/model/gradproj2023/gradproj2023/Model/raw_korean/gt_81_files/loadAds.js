window.aps=window.aps||{};
if(aps.cmd){throw new Error("loadAds.js already loaded")
}aps.cfg=aps.cfg||{};
aps.cfg.version="23.11.11.1";
console.log("juice "+aps.cfg.version);(function(){aps.sitesWithoutCallback=["www.greenstate.com","datebook.sfchronicle.com","education.seattlepi.com","healthyeating.sfgate.com","homeguides.sfgate.com","livehealthy.chron.com","preview.houstonchronicle.com","pyme.lavoztx.com","smallbusiness.chron.com","work.chron.com","www.beaumontenterprise.com","www.bigrapidsnews.com","www.chron.com","www.countytimes.com","www.ctinsider.com","www.ctpost.com","www.darientimes.com","www.expressnews.com","www.greenwichtime.com","www.houstonchronicle.com","www.lakecountystar.com","www.lmtonline.com","www.manisteenews.com","www.michigansthumb.com","www.middletownpress.com","www.milfordmirror.com","www.mrt.com","www.myjournalcourier.com","www.myplainview.com","www.mysanantonio.com","www.ncadvertiser.com","www.newstimes.com","www.nhregister.com","www.ourmidland.com","www.recordpatriot.com","www.registercitizen.com","www.seattlepi.com","www.sfchronicle.com","www.sfgate.com","www.sheltonherald.com","www.stamfordadvocate.com","www.theheraldreview.com","www.thehour.com","www.theintelligencer.com","www.theridgefieldpress.com","www.thetelegraph.com","www.timesunion.com","www.trumbulltimes.com","www.yourconroenews.com","www.wiltonbulletin.com"];
["m.","s.","ftp.","origin."].forEach(function(a){if(document.location.hostname.startsWith(a)){var b=document.location.hostname.replace(a,"www.");
if(aps.sitesWithoutCallback.includes(b)){aps.sitesWithoutCallback.push(document.location.hostname)
}}});
window.debugSGA=window.debugSGA||false;
window.APSpageUrl=window.APSpageUrl||"";
window.devices={DESKTOP:1,MOBILE:2,TABLET:3};
window.prebid_source={CLIENT:1,SERVER:2,SERVER_COMPATIBLE:3};
window.sizeLimitation={NONE:0,LOOSE:1,STRICT:2};
aps.cfg.host=document.location.hostname||window.location.hostname;
aps.cfg.subdom=aps.cfg.host.split(".");
aps.cfg.subdom.length-=2;
aps.cfg.begin=new Date().valueOf();
aps.cfg.logToConsole=aps.cfg.logToConsole||false;
aps.cfg.allAds=[];
aps.cfg.is={};
aps.cfg.multi={};
aps.cfg.multiAds=[];
aps.cmd=[];
aps.juiceLog=[];
aps.events=[];
aps.event={};
aps.logtype={};
aps.implementSRA=true;
aps.o={};
aps.fn=aps.fn||{};
aps.cfg.leafsSites=["education.seattlepi.com","healthyeating.sfgate.com","homeguides.sfgate.com","livehealthy.chron.com","pyme.lavoztx.com","smallbusiness.chron.com","work.chron.com"];
aps.cfg.inFrame=window!=top.window;
aps.cfg.networkCode="36117602";
window.JuicePageUrl=document.location.href.replace("/?","?").replace("%3F","?").replace("%3D","=").replace("%26","&");
window.googletag=window.googletag||{};
googletag.cmd=googletag.cmd||[];
window.pbjs=window.pbjs||{};
pbjs.que=pbjs.que||[];
pbjs.bidderSettings=pbjs.bidderSettings||{};
window.HDN=window.HDN||{};
HDN.dataLayer=HDN.dataLayer||{};
HDN.dataLayer.ads=HDN.dataLayer.ads||{};
HDN.dataLayer.content=HDN.dataLayer.content||{};
HDN.dataLayer.href=HDN.dataLayer.href||{};
HDN.dataLayer.identity=HDN.dataLayer.identity||{};
HDN.dataLayer.presentation=HDN.dataLayer.presentation||{};
HDN.dataLayer.sharing=HDN.dataLayer.sharing||{};
HDN.dataLayer.source=HDN.dataLayer.source||{};
HDN.dataLayer.paywall=HDN.dataLayer.paywall||{};
window.loadAd_UrlLocation=window.loadAd_UrlLocation||"https://aps.hearstnp.com/"
})();(function(){aps.o.kvp=function(a){this.key=a;
this.value=[]
};
aps.o.baseAd=function(a,e,b,d,c){this.code=a;
this.width=e;
this.height=b;
this.sizeMappings=d;
this.kvps=c;
if(aps.cfg.allAds){aps.cfg.allAds[a]=this
}};
aps.o.gamAd=function(a,h,c,g,e){this.code=a;
this.width=h;
this.height=c;
this.sizeMappings=g;
this.lowerCode=this.code.toLowerCase();
aps.fn.checkMultiType=function(i){var j=i.code.split("-")[0];
if(!aps.cfg.multiAds[j]){i.multiAd=false;
i.multiType=null
}else{i.multiAd=true;
i.multiType=j
}i.MultiCalled=false;
aps.cfg.multi.enabled=true
}(this);
if(!aps.fn.toBeDisplayed(this)){aps.fn.logSkip(this.code,"will not show on this device");
this.exclude=true
}if(!aps.fn.shouldPlaceAd(a)){aps.fn.logSkip(this.code,"excluded by query string");
this.exclude=true
}if(!aps.fn.filterRevenueProfileAds(this.code)&&!this.multiAd){aps.fn.logSkip(this.code,"not included in revenueProfile");
this.exclude=true
}if(!this.exclude){this.a9={};
this.a9.bids=[];
this.pb={};
this.pb.bids=[];
this.gam=null;
this.rm=false;
this.kvps=e||[];
this.interstitial=(this.code=="GO300"||(aps.cfg.page.device==devices.MOBILE&&this.code=="S300"))?true:false;
this.exclude=false;
this.state=null;
this.video=(this.lowerCode.indexOf("video")>-1)?true:false;
this.companion_units=false;
this.doNotRefresh=(this.code=="Crown"||this.code=="exit"||this.code.startsWith("SSHOW"))?true:false;
this.viewability=-1;
this.refreshable=false;
this.impressionViewable=false;
this.advertiserId=null;
this.advertiser=null;
this.lineitemId=null;
this.creativeId=null;
this.isEmpty=null;
this.position=null;
this.renderedSize=null;
this.googleFrame=null;
this.isBounceX=false;
this.isDynamic=false;
this.isLoading=false;
this.mediaType="banner";
this.supportsNative=this.code.startsWith("NTV")?true:false;
this.renderCount=1;
this.renderedAt=null;
this.viewableAt=null;
this.sizes=aps.fn.setAdSize(this);
this.stringSizes=[];
this.scrollDepth=0;
if(aps.cfg.is.leafsSite){var f=this.code.split("-");
this.scrollDepth=(f.length==1)?0:f[1]
}this.getPage=function(){return aps.cfg.page.allPages[this.scrollDepth]
};
this.getDataLayerInterstitial=function(i){if(!aps.cfg.dfp.dataLayerInterstials){var j="";
try{j=HDN.dataLayer.revenueProfiles.profiles.nonsub.interstitials.value
}catch(k){}aps.cfg.dfp.dataLayerInterstials=j.split(",")||[]
}if(["BGS_REC_IN","EEinsert"].includes(i.code)||aps.cfg.dfp.dataLayerInterstials.indexOf(i.code)>-1){i.interstitial=true;
i.refreshable=true;
i.impressionViewable=true
}}(this);
for(var d=0;
d<this.sizes.length;
d++){this.stringSizes.push(this.sizes[d].join("x"))
}var b={"atf":["box","bpflex","concert1","concert2","crown","eeinsert","ee300","ee300_2","ee300_3","ee320","ee728","flex1","leaf1","leaf2","leaf3","leaf4","list","lnlogo","mad","mw_1_text","pmad","qat","rb","vsf1","inline","rb","ntv1hed","ntvalt6dcp"],"btf":["cp300","dp300","ep300","cpflex","dpflex","epflex","fpflex","gpflex","mw_2_text","qat2","tmp300_3","vsf2","ntvbtfmw","ntvbtfrr"],"stf":["ft728","la300","mw_3_text","mw728_1","mw728_2","rs300","vsf3"],"":["noad","spweather","Video_MOS_Multi"]};
this.addAdKvp=function(i,m,l){var k=l||false;
var j=this.kvps.filter(function(n){return n.key==i
})[0];
if(j&&k){j.value=[]
}if(j==undefined){j=new aps.o.kvp(i);
this.kvps.push(j)
}if(!j.value.includes(m)){j.value.push(m);
aps.fn.logInfo(this.code+" KVP: "+i+" = "+j.value)
}};
this.setAdPosition=function(i,l,o){var n=o||false;
var p=i.kvps.filter(function(r){return r.key=="position"
});
var q=(p.length==0)?"":p[0].value;
if(p[0]&&Array.isArray(p[0].value)){p[0].value=p[0].value[0];
q=p[0].value
}var j=i.lowerCode.replace("dtbk_","").replace("obit-","").replace("gs","").split("-")[0];
var m="";
var k=j.substring(0,1);
if(["a","b","s"].includes(k)){m=k+"tf"
}else{if(j.startsWith("ntv")){m="atf"
}}if(!aps.cfg.is.kfs){i.position=aps.fn.getDictionnaryKey(l,j,m)
}else{i.position="atf"
}i.addAdKvp("position",i.position);
i.addAdKvp("DIV_ID",i.code);
if(i.code=="mad"){i.position="mad"
}if(i.code=="tmp300_3"){i.potision="atf"
}}(this,b,true);
aps.cfg.ads[this.code]=this;
this.div=document.getElementById(this.code);
if(this.div){aps.fireEvent(aps.event.on_new_div,this.div)
}aps.fireEvent(aps.event.on_define_bid_data,this)
}};
aps.o.datalayer=function(){this.content={};
this.content.designTemplate=null;
this.content.galleryListType=null;
this.content.isSensitive=null;
this.content.keyNlpCategories=null;
this.content.keyNlpConsumerGood=null;
this.content.keyNlpEvent=null;
this.content.keyNlpLocation=null;
this.content.keyNlpOrganization=null;
this.content.keyNlpOther=null;
this.content.keyNlpPerson=null;
this.content.keyNlpUnknown=null;
this.content.keyNlpWorkOfArt=null;
this.content.keySubjects=null;
this.content.lastModifiedDate=null;
this.content.objectId=null;
this.content.objectType=null;
this.content.paragraphCount=null;
this.content.pubDate=null;
this.content.publishedOnline=null;
this.content.sectionPath=null;
this.content.subtitle=null;
this.content.title=null;
this.content.wordCount=null;
this.ads={};
this.ads.programmatic=true;
this.href={};
this.href.canonicalUrl=null;
this.href.pageUrl=null;
this.href.pageUrlHash=null;
this.href.pageUrlPath=null;
this.href.pageUrlPathFolders=null;
this.href.pageUrlQueryParams=null;
this.infiniteScrollDepth=null;
this.isAffiliatedContent=null;
this.isSponsoredContent=null;
this.presentation={};
this.presentation.hasInteractive=null;
this.presentation.hasSlideshow=null;
this.presentation.hasSlideshowListView=null;
this.presentation.hasVideo=null;
this.presentation.infiniteScrollEnabled=null;
this.sharing={};
this.sharing.openGraphUrl=null;
this.source={};
this.source.authorName=null;
this.source.authorTitle=null;
this.source.originalSourceSite=null;
this.source.sourceSite=null;
this.visit={};
this.visit.urlHash=null;
this.meta={};
this.meta.author=null;
this.meta.name=null;
this.meta.release=null;
this.meta.description=null;
this.meta.id=null;
this.meta.published=null;
this.meta.description=null;
this.meta.image=null;
this.meta.title=null;
this.meta.type=null;
this.meta.url=null;
this.meta.sections=null;
this.meta.release=null;
this.meta.title=null;
this.meta.nlpCategories=null;
this.meta.nlpConsumerGood=null;
this.meta.nlpEvent=null;
this.meta.nlpLocation=null;
this.meta.nlpOrganisation=null;
this.meta.nlpOther=null;
this.meta.nlpPerson=null;
this.meta.nlpUnknown=null;
this.meta.nlpWorkOfArt=null;
this._getLookup=function(b){var a=HDN;
b.forEach(function(c){a=a[c]
});
return a
};
this._copyFromDataLayer=function(a,b,c){var d=["ads","content","href","isAffiliatedContent","isSponsoredContent","presentation","sharing","source"];
Object.entries(b).forEach(function(e){var h=["dataLayer"].concat(c);
h.push(e[0]);
if(!d.includes(h[1])){return
}var f=a._getLookup(h);
if(!f&&a[e[0]]){h.splice(1,1);
f=a._getLookup(h)
}if(typeof f=="undefined"){return
}if(typeof e[1]=="object"&&e[1]!=null){var g=c.slice();
g.push(e[0]);
a._copyFromDataLayer(a,b[e[0]],g)
}else{if(typeof f!=undefined){b[e[0]]=f
}}})
};
this._copyFromMetaData=function(a){var b=["author","name","release","description","id","published","description","image","title","type","url","sections","release","title"];
b.forEach(function(c){var e=null;
var d=document.querySelector("meta[name='"+c+"']");
if(d){e=d.content
}if(typeof e!="undefined"){a.meta[c]=e
}})
};
this._copyFromDataObject=function(b,a){b.data=a;
Object.entries(a).forEach(function(c){var d=c[0].split("_");
if(d[0]=="HDN"){d.splice(0,2);
switch(d.length){case 1:b[d[0]]=c[1];
break;
case 2:b[d[0]][d[1]]=c[1];
break;
case 3:b[d[0]][d[1]][d[2]]=c[1];
break
}}else{b.meta[c[0].replace("meta_","")]=c[1]
}})
};
this._init=function(b,a){if(a){this._copyFromDataObject(b,a)
}else{this._copyFromDataLayer(b,b,[]);
this._copyFromMetaData(b)
}if(!this.infiniteScrollDepth){if(aps.cfg.is.wcm){this.infiniteScrollDepth=0
}}if(aps.cfg.is.leafsSite){this.infiniteScrollDepth=aps.cfg.page.urls.length
}}
};
aps.o.page=function(b,c,a){this.href=aps.fn.getFilteredHref(b);
if(aps.cfg.is.richie){this.href=APSpageUrl
}this.juicePageUrl=this.href.replace("/?","?");
var f=this.href.indexOf("/");
this.hostname=this.href.substring(0,f);
this.pathname=this.href.substring(f);
var d={};
var e=decodeURI(document.location.search.substr(1)).replace("?","&").split("&");
e.forEach(function(h){var g=h.split("=");
if(g[0]=="adtest"){d["adtest"]=h.replace("adtest=","")
}else{d[g[0]]=g[1]
}});
this.queryParameter=d;
this.host=this.hostname.toLowerCase().split(".");
this.domain=this.host.slice(-2).join(".");
this.isSubDomain=(this.host[0]=="www")?false:true,this.path=this.pathname.toLowerCase().split("?")[0].split("/");
this.path=(this.path[this.path.length-1]=="")?this.path.slice(1,this.path.length-1):this.path.slice(1,this.path.length);
this.pageUrl=this.hostname+"/"+this.path.join("/");
this.datalayer=new aps.o.datalayer();
this.datalayer._init(this.datalayer,a);
this.bids=[];
this.a9=null;
this.a9BidsReceived=false;
this.pb=null;
this.pbBidsReceived=false;
this.scrollDepth=0;
this.requestNo=0;
this.permutive={};
this.kvps=c||[];
this.addPageKvp=function(g,l,j,m){var i=j||false;
var k=m||[];
var h=this.kvps.filter(function(n){return n.key==g
})[0];
if(h&&i){h.value=[]
}if(h==undefined){h=new aps.o.kvp(g);
this.kvps.push(h)
}if(!h.value.includes(l)){if(Array.isArray(l)){l.forEach(function(n){h.value.push(n.toString())
})
}else{h.value.push(l)
}aps.fn.logInfo("Page KVP: "+g+" = "+h.value)
}};
this.page_type2=null;
this.setPageType2=function(g){if(aps.cfg.is.faceBookInstantArticle){g.page_type2="instant article"
}else{if(aps.cfg.is.leafsSite){if(document.location.pathname=="/"){g.page_type2="channel"
}else{g.page_type2="article"
}}else{if(window.ess&&window.ess.prop24){g.page_type2=ess.prop24
}else{if(g.datalayer&&g.datalayer.content){if(g.datalayer.content.galleryListType&&g.datalayer.content.galleryListType=="list"){g.page_type2="slideshow list view"
}else{if(aps.cfg.is.platypus&&g.path.length==0){g.page_type2="home page"
}else{g.page_type2=g.datalayer.content.objectType
}}}else{if(typeof(top.omni_blogname)!="undefined"){g.page_type2=aps.fn.getBlogOmniType()
}}}}}if(g.page_type2!=null){aps.fn.logInfo("page_type2: "+g.page_type2);
g.addPageKvp("page_type2",g.page_type2)
}}(this);
this.init=function(){aps.fn.setPageTargettedUrl(this,"PageUrl",this.juicePageUrl,["Testpage","Cmpid","Ipid"]);
var g=document.referrer.replace(/^(http(?:s)?:\/\/)/,"").split("/")[0];
aps.fn.setPageTargettedUrl(this,"referrer",g,[]);
if(this.datalayer.infiniteScrollDepth){this.addPageKvp("ScrollPage",this.datalayer.infiniteScrollDepth);
this.scrollDepth=this.datalayer.infiniteScrollDepth
}if(aps.key){this.addPageKvp(aps.key,aps.values,true);
delete aps.key;
delete aps.values
}if(!this.datalayer.ads.programmatic){this.addPageKvp("custom","progfalse");
aps.fn.logInfo("*Disabling bidders - dataLayer.ads.programmatic");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}if(!aps.cfg.bid.domains.includes(this.domain)){aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false;
aps.fn.logInfo("Disabling bidders - domain "+this.domain)
}aps.fireEvent(aps.event.on_new_page,this)
};
this.init()
};
aps.o.base=function(){this.lastRequestedHref="";
this.current=null;
this.next=null;
this.allPages=[];
this.urls=[];
this.device=window.current_device;
this.checkPage=function(){var a=aps.fn.getFilteredHref();
if(this.next&&this.next.href==a){this.current=this.next;
this.currentIndex=this.urls.indexOf(a);
this.next=null;
aps.logInfo("Changing current URL to "+a)
}else{if(!this.current||a!=this.current.href){if(!this.urls.includes(a)){aps.fn.getPageInfo()
}this.currentIndex=this.urls.indexOf(a);
this.current=this.allPages[this.currentIndex];
aps.logInfo("Changing current URL to "+a)
}}};
this.googleUrlFilter=function(b){var a=["username","password","testinggooglefilter","email","client_id","loginID","error","e","parameter","email_id","emailaddress","bc_em","cm_lm"];
Object.entries(b.qs).forEach(function(c){if(!aps.cfg.serveAds){return
}if(a.includes(c[0])){aps.fn.logInfo("setting serve ads to false");
aps.cfg.serveAds=false
}});
if(aps.cfg.serveAds&&window.location.href.indexOf("#cluid")!==-1){aps.fn.logInfo("setting serve ads to false");
aps.cfg.serveAds=false
}};
this.kvps=[];
this.addBaseKvp=function(a,e,d){var c=d||false;
var b=this.kvps.filter(function(f){return f.key==a
})[0];
if(b&&c){b.value=[]
}if(b==undefined){b=new aps.o.kvp(a);
this.kvps.push(b)
}if(!b.value.includes(e)){b.value.push(e);
aps.fn.logInfo("Base KVP: "+a+" = "+b.value)
}};
this.qs=[];
this.parseQS=function(a){var c=location.search.slice(1);
var b=c.split("&");
b.forEach(function(f){f=f.split("=");
var e=f[0];
var g=f[1];
for(var d=2;
d<f.length;
d++){g=g+"="+f[d]
}if(e.length){if(a.qs[e]!==undefined){if(!a.qs[e].push){a.qs[e]=[a.qs[e]]
}a.qs[e].push(g||"")
}else{a.qs[e]=g||""
}}})
}(this);
this.init=function(a){if(a.qs["console"]==1){aps.fn.logToConsole=true
}a.googleUrlFilter(a);
aps.fireEvent(aps.event.on_first_load,a)
}(this)
};
aps.o.req=function(a){this.ads=[];
this.gams=[];
this.page=a;
this.pageTargeting=null;
this.renders=[]
}
})();(function(){aps.fn.defineBaseAds=function(){new aps.o.baseAd("Crown",99,99,["0001x99x99","0001x001x002"]);
new aps.o.baseAd("exit",1,2,["0001x001x002"]);
new aps.o.baseAd("Flex1",970,250,["0996x970x250","0996x970x90","0996x728x90","0996x88x88","0996x055x001","0768x055x001","0768x728x90","0768x88x88","0001x300x50","0001x320x50","0001x88x88","0001x055x001"]);
new aps.o.baseAd("APflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("BPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("CPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("DPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("EPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("FPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("GPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("Box",300,250,["0996x970x250","0996x970x90","0996x728x90","0996x620x366","0996x336x280","0996x320x100","0996x320x250","0996x001x001","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("CONCERT1",501,501,["0996x001x001","0996x501x501","0996x620x366","0996x336x280","0996x320x250","0996x320x100","0001x501x501","0001x336x280","0001x325x508","0001x325x204","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("CONCERT2",501,501,["0996x620x366","0996x501x501","0996x336x280","0996x320x100","0996x300x250","0996x001x001","0001x501x501","0001x336x280","0001x325x508","0001x325x204","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("LNlogo",150,47,["0001x150x47"]);
new aps.o.baseAd("SPweather",150,32,["0986x150x32","0001x000x000"]);
new aps.o.baseAd("A951",970,250,["1312x002x001","1312x1200x300","1312x980x40","1312x971x90","1312x970x415","1312x970x250","1312x970x90","1312x970x168","1312x960x150","1312x950x30","0996x002x001","0996x980x40","0996x971x90","0996x970x415","0996x970x250","0996x970x168","0996x970x90","0996x960x300","0996x960x150","0996x950x30","0654x002x001","0654x704x300","0001x000x000"]);
new aps.o.baseAd("A728",728,90,["1312x970x90","1312x728x90","1312x003x003","1312x003x001","0996x970x90","0996x728x90","0996x468x60","0996x003x001","0996x003x003","0768x728x90","0654x468x60","0654x003x001","0654x003x003","0001x000x000"]);
new aps.o.baseAd("A300",300,250,["1312x300x600","1312x300x250","1312x004x001","0996x300x600","0996x300x250","0996x004x001","0654x300x600","0654x300x250","0654x004x001","0001x300x250","0001x004x001","0001x320x460"]);
new aps.o.baseAd("A300x600",300,600,["0001x300x600","0001x300x250"]);
new aps.o.baseAd("B300",300,250,["0654x300x600","0654x300x250","0654x160x600","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("B728",728,90,["1312x970x90","1312x728x90","1312x003x003","0996x970x90","0996x728x90","0996x468x60","0996x003x003","0654x728x90","0654x468x60","0654x003x003","0001x000x000"]);
new aps.o.baseAd("S300",300,250,["0654x300x600","0654x300x250","0654x160x600","0001x300x250"]);
new aps.o.baseAd("MW728_1",728,90,["1280x970x415","1280x940x250","1280x728x90","0768x003x003","0001x000x000"]);
new aps.o.baseAd("MW728_2",728,90,["1280x940x250","1280x728x90","0768x003x003","0001x000x000"]);
new aps.o.baseAd("TMP300_3",300,250,["0654x300x250","0001x000x000"]);
new aps.o.baseAd("MAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]);
new aps.o.baseAd("AP300",300,250,["0001x004x001","0001x300x250"]);
new aps.o.baseAd("BP300",300,250,["0001x300x250","0001x005x001"]);
new aps.o.baseAd("CP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("DP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("EP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("PMAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]);
new aps.o.baseAd("Inline",300,250,["0996x620x366","0996x501x501","0996x336x280","0996x320x100","0996x300x250","0996x001x001","0001x501x501","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("LIST",300,250,["996x300x600","996x300x250","996x001x001","001x300x250","001x001x001"]);
new aps.o.baseAd("RB",300,250,["0996x300x250","0996x300x600","0996x160x600","0996x005x001","0654x300x250","0654x300x600","0654x160x600","0654x005x001","0001x300x250"]);
new aps.o.baseAd("SSHOW",300,250,["001x300x250","001x001x001"]);
new aps.o.baseAd("EE300",300,250,["000x300x250"]);
new aps.o.baseAd("EE300_2",300,250,["000x300x250"]);
new aps.o.baseAd("EE300_3",300,250,["000x300x250"]);
new aps.o.baseAd("EE320",320,50,["0768x000x000","0000x320x50"]);
new aps.o.baseAd("EE728",728,90,["0768x728x90","000x000x000"]);
new aps.o.baseAd("EEinsert",1,1,["0001x001x001"]);
new aps.o.baseAd("OBIT-A728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]);
new aps.o.baseAd("OBIT-AP300",300,250,["0001x300x250"]);
new aps.o.baseAd("OBIT-B728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]);
new aps.o.baseAd("Leaf1",300,250,["0001x300x255","0001x343x255","0001x343x280","0001x300x250"]);
new aps.o.baseAd("Leaf2",300,250,["0996x620x366","0996x336x280","0996x300x250","0996x320x100","0996x320x50","0996x250x250","0996x300x50","0001x300x600","0001x160x600","0001x336x280","0001x325x508","0001x325x204","0001x300x250","0001x250x250","0001x320x50","0001x300x50","0001x501x501"]);
new aps.o.baseAd("Leaf3",300,250,["0996x728x90","0996x468x60","0996x320x50","0996x300x50","0001x300x250","0001x325x508","0001x325x204","0001x250x250","0001x336,280"]);
new aps.o.baseAd("Leaf4",300,250,["0996x620x366","0996x336x280","0996x300x250","0996x250x250","0001x325x508","0001x325x204"]);
new aps.o.baseAd("DTBK_AP951",970,250,["1024x001x001","1024x970x250","0001x000x000"]);
new aps.o.baseAd("DTBK_AP300",300,250,["1024x300x600","1024x300x250","0001x000x000"]);
new aps.o.baseAd("DTBK_BP300",300,250,["1024x300x250","1024x300x600","0001x000x000"]);
new aps.o.baseAd("DTBK_AP300_M",300,250,["1020x000x000","0001x300x250"]);
new aps.o.baseAd("DTBK_BP300_M",300,250,["1024x000x000","0001x300x250"]);
new aps.o.baseAd("DTBK_AP728",728,90,["996x001x001","996x970x250","996x970x90","996x728x90","0001x000x000"]);
new aps.o.baseAd("DTBK_BP728",728,90,["996x001x001","996x970x250","996x970x90","996x728x90","0001x000x000"]);
new aps.o.baseAd("Video_MOS_Multi",1,4,["0001x400x300","0001x640x480","0001x001x004","0001x640x360"])
};
aps.fn.defineBaseAds()
})();(function(){aps.fn.now=function(){return new Date().valueOf()
};
aps.fn.getSecondsSince=function(ref){return Math.floor((aps.fn.now()-ref)/1000)
};
aps.fn.fixLen=function(text,len){var padder="                                    ";
var tlen=(""+text).length;
var pad=(tlen<len)?len-tlen:0;
return text+padder.substr(0,pad)
};
aps.fn.logEvent=function(timeStamp,msg,mtype){aps.juiceLog.push({d:timeStamp,pt:(window.performance)?window.performance.now():null,m:msg,t:mtype})
};
aps.fn.logf=function(e,t){var color=(aps.cfg.inFrame)?"ff8a99":"ff8a45";
return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #"+color+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cJuice"),e
};
aps.fn.logInfo=function(msg){if(aps.cfg.logToConsole){aps.fn.logEvent(new Date(),msg,aps.logtype.info);
console.info.apply(console,aps.fn.logf(arguments,""))
}};
aps.logInfo=aps.fn.logInfo;
aps.fn.setPerformanceMetrics=function(name,description){aps.fn.logInfo(description)
};
aps.fn.setPerformanceMetrics("JuiceScriptLoading","start of juice script loading");
aps.fn.logWarning=function(msg){aps.fn.logEvent(new Date(),msg,aps.logtype.warning);
if(aps.cfg.logToConsole){console.info.apply(console,aps.fn.logf(arguments,"WARNING:"))
}};
aps.fn.logError=function(msg){aps.fn.logEvent(new Date(),msg,aps.logtype.error);
if(aps.cfg.logToConsole){console.info.apply(console,aps.fn.logf(arguments,"ERROR:"))
}};
aps.fn.logException=function(msg,e){if(typeof e!="undefined"){if(typeof e.message!="undefined"){aps.fn.logEvent(new Date(),msg+e.message);
return
}}aps.fn.logEvent(new Date(),msg,aps.logtype.error)
};
aps.fn.logSkip=function(adcode,reason){aps.alreadyLogged=aps.alreadyLogged||[];
if(aps.alreadyLogged.indexOf[adcode+":"+reason]>-1){return
}aps.fn.logInfo("*SKIP "+aps.fn.fixLen(adcode,10)+" "+reason);
aps.alreadyLogged.push(adcode+":"+reason)
};
aps.fn.domLoaded=function(){aps.fn.setPerformanceMetrics("DomLoaded","DomLoaded");
aps.cfg.domIsLoaded=true;
aps.fireEvent(aps.event.on_dom_loaded)
};
aps.fn.dumpLogWindow=function(){var logs=aps.juiceLog;
var html="";
for(var i=0;
i<logs.length;
i++){var sClass="msg";
var time="";
if(typeof(logs[i].pt)=="undefined"){time=(performance.timing.navigationStart+logs[i].pt)-performance.timing.domLoading;
time=time.toFixed(2)
}else{time=aps.fn.formatDateTime(logs[i].d)
}if(typeof(logs[i].t)!="undefined"){if(logs[i].t==aps.logtype.warning){sClass+=" warning"
}if(logs[i].t==aps.logtype.error){sClass+=" error"
}}var msg='<div class="'+sClass+'">'+time+" : "+logs[i].m+"</div>";
html+=msg
}var w=window.open("","wnd");
w.document.body.innerHTML=html
};
aps.fn.formatDateTime=function(timeStamp){var h=(timeStamp.getHours()<10?"0":"")+timeStamp.getHours();
var m=(timeStamp.getMinutes()<10?"0":"")+timeStamp.getMinutes();
var s=(timeStamp.getSeconds()<10?"0":"")+timeStamp.getSeconds();
var ms=timeStamp.getMilliseconds();
return h+":"+m+":"+s+": "+ms
};
aps.fn.getCookie=function(cname){var name=cname+"=";
var ca=document.cookie.split(";");
for(var i=0;
i<ca.length;
i++){var c=ca[i];
while(c.charAt(0)==" "){c=c.substring(1)
}if(c.indexOf(name)==0){return c.substring(name.length,c.length)
}}return""
};
aps.fn.setAdSize=function(ad){var availables=[];
aps.cfg.bid.adSizes.forEach(function(sz){availables.push(""+sz[0]+"x"+sz[1]+"")
});
var sizes=[];
var widthfound=30000;
var doNotServe=["MW_1_TEXT","MW_2_TEXT","MW_3_TEXT"];
if(doNotServe.indexOf(ad.code)>-1){aps.fn.logSkip(ad.code,"is in do not serve array");
return sizes
}ad.sizeMappings=ad.sizeMappings||[];
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){var adSize=map[1]+"x"+map[2];
if(availables.indexOf(adSize)>-1){sizes.push([parseInt(map[1]),parseInt(map[2])])
}}}return sizes
};
aps.fn.getBlogOmniType=function(){var abOmniPagename;
var abOmniChannel;
var abOmniHier1;
var abOmniServer=aps.cfg.host;
var abOmniSSL1;
var abOmniSSL2;
var abOmniSSL3;
var abOmniSSL4;
var abOmniBlogType;
var abOmniTitle="";
var abOmniID="";
var abOmniContentType="Blogs";
var abOmniAuthor="";
var abOmniQuery="";
var abOmniDomain;
var abOmniBlogName="";
var abOmniHeadline="";
var abOmniFullURL=document.URL.toLowerCase();
var abOmniBlobUX="";
var abBlogCat=new Object;
abBlogCat.SuperCategory="";
abBlogCat.Category="";
abBlogCat.AuthorType="reader";
abBlogCat.Usage="blog";
abBlogCat.Section="";
abBlogCat.Voice="";
var abStrRelativePath;
var abStrPageURL="";
var abStrBlogPath;
var abStrPagePath;
var abBoolIs404=false;
this.toProperCase=function toProperCase(pc){if(pc!="undefined"){if(pc.length>1){return pc.toLowerCase().replace(/^(.)|\s(.)/g,function($1){return $1.toUpperCase()
})
}}};
if(typeof(omni_blogID)!="undefined"){abOmniID=omni_blogID
}if(typeof(omni_blogauthor)!="undefined"){abOmniAuthor=toProperCase(omni_blogauthor)
}if(typeof(omni_blogauthortype)!="undefined"){abBlogCat.AuthorType=omni_blogauthortype
}if(typeof(omni_blogposttitle)!="undefined"){abBoolIs404=(omni_blogposttitle.toLowerCase()=="page not found");
abOmniTitle=omni_blogposttitle;
if(abOmniTitle.charAt(abOmniTitle.length-1)==" "){abOmniTitle=abOmniTitle.substr(0,abOmniTitle.length-1)
}}if(typeof(omni_blogname)!="undefined"){abOmniBlogName=omni_blogname
}if(typeof(omni_blogcategory2)!="undefined"){abBlogCat.Category=omni_blogcategory2
}if(abBlogCat.Category.length>0){if(typeof(omni_blogcategory)!="undefined"){abBlogCat.SuperCategory=omni_blogcategory
}}else{if(typeof(omni_blogcategory)!="undefined"){abBlogCat.Category=omni_blogcategory
}}if(typeof(omni_blogusage)!="undefined"){abBlogCat.Usage=omni_blogusage
}if(typeof(omni_section)!="undefined"){abBlogCat.Section=omni_section
}if(typeof(omni_voices)!="undefined"){abBlogCat.Voice=omni_voices
}this.abParseURL=function(){var strFullURL=abOmniFullURL;
if(strFullURL.indexOf("#")>-1){strFullURL=strFullURL.split("#")[0]
}var intQStart=strFullURL.indexOf("?")+1;
var intRelPathStart=strFullURL.indexOf(".com")+5;
abOmniDomain=strFullURL.substr(0,intRelPathStart);
if(intQStart>0){abOmniQuery=strFullURL.substring(intQStart);
abStrRelativePath=strFullURL.substring(0,intQStart-1)
}else{abStrRelativePath=strFullURL
}abStrPageURL=abStrRelativePath;
abStrRelativePath=abStrRelativePath.substr(intRelPathStart);
if(abStrRelativePath.charAt(abStrRelativePath.length-1)=="/"){abStrRelativePath=abStrRelativePath.substr(0,abStrRelativePath.length-1)
}var arrayTemp=new Array();
arrayTemp=abStrRelativePath.split("/");
abStrBlogPath=arrayTemp[0];
abStrPagePath=arrayTemp[arrayTemp.length-1];
if(abStrBlogPath==abStrPagePath){abStrPagePath="index"
}if(top.document.location.hostname=="insidescoopsf.sfgate.com"){abStrBlogPath="insidescoop"
}return abStrBlogPath+":"+abStrPagePath
};
this.abAssignSections=function(){if(abBlogCat.SuperCategory.length>0){abOmniChannel=abBlogCat.SuperCategory;
abOmniSSL1=abBlogCat.SuperCategory;
abOmniSSL2=abOmniSSL1+":"+abBlogCat.Category;
abOmniSSL3=abOmniSSL2+":blogs";
abOmniSSL4=abOmniSSL3+":"+abOmniBlogName.toLowerCase()
}else{abOmniChannel=abBlogCat.Category;
abOmniSSL1=abBlogCat.Category;
abOmniSSL2=abOmniSSL1+":blogs";
abOmniSSL3=abOmniSSL2+":"+abOmniBlogName.toLowerCase();
abOmniSSL4=abOmniSSL3;
if(abBlogCat.Voice.length>0){abOmniSSL4=abOmniSSL4+":"+abBlogCat.Voice.toLowerCase()
}}abOmniHier1=abOmniSSL4.replace(/:/g,",")
};
abOmniPagename="Blogs-"+abParseURL();
if(abBlogCat.Category==""){abCategorizeBlog(abStrBlogPath,abBlogCat)
}abAssignSections();
if(abOmniTitle==""||abOmniTitle==abOmniBlogName){abOmniTitle="Blog index page"
}if(abBlogCat.Section.length>0){abOmniBlogName=abOmniBlogName+":"+abBlogCat.Section
}abOmniTitle=abOmniBlogName+":"+abOmniTitle;
abOmniID=abOmniBlogName+"--"+abOmniID;
abOmniBlogType=abBlogCat.AuthorType;
abOmniBlogName=abOmniBlogName+"("+abBlogCat.AuthorType+")";
abOmniTitle=abOmniTitle+"("+abBlogCat.AuthorType+")";
abOmniTitle=abOmniTitle.replace(/'/g,"");
abOmniHeadline=abOmniTitle;
if(abOmniAuthor){if(abOmniAuthor.indexOf(",")!=-1){abOmniAuthor=abOmniAuthor.substring(0,abOmniAuthor.indexOf(","))
}}if(abBoolIs404){return"undefined"
}else{return abOmniContentType
}};
aps.fn.getDictionnaryKey=function(dictionnary,value,destination){var BreakException={};
var retValue=destination;
try{Object.entries(dictionnary).forEach(function(line){if(line[1].includes(value)){retValue=line[0];
throw BreakException
}})
}catch(e){if(e!==BreakException){throw e
}}return retValue
};
aps.fn.toBeDisplayed=function(ad){var willDisplay=false;
var widthfound=30000;
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map[0]);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){if(parseInt(map[1])>0&&parseInt(map[2])>0){willDisplay=true
}}}return willDisplay
};
aps.fn.getQueryParameterByName=function(key){if(aps.qeueryStringObj==null){aps.qeueryStringObj=aps.fn.queryStringToJSON()
}var qobj=aps.qeueryStringObj;
var keyToUse=key.replace("[]","");
if(!qobj.hasOwnProperty(keyToUse)){return null
}if(key.indexOf("[]")==-1){return qobj[keyToUse]
}if(typeof qobj[keyToUse]==="string"){var retval=[];
retval.push(qobj[keyToUse]);
return retval
}return qobj[keyToUse]
};
aps.fn.queryStringToJSON=function(){var str=location.search.slice(1);
var pairs=str.split("&");
var result={};
pairs.forEach(function(pair){pair=pair.split("=");
var name=pair[0];
var value=pair[1];
if(name.length){if(result[name]!==undefined){if(!result[name].push){result[name]=[result[name]]
}result[name].push(value||"")
}else{result[name]=value||""
}}});
return(result)
};
aps.fn.desktopOrMobile=function(desktopValue,mobileValue){return(aps.cfg.bid.current_device==devices.DESKTOP)?desktopValue:mobileValue
};
aps.fn.addPageKvp=function(key,value,overwrite){aps.cfg.page.checkPage();
aps.cfg.page.current.addPageKvp(key,value,overwrite)
};
aps.fn.getFilteredHref=function(href){var loc=href||document.location.href;
return loc.replace("https://","").replace("http://","").replace("%3F","?").replace("%3D","=").replace("%26","&").split("#")[0].substring(0,300)||""
};
aps.fn.insertScript=function(url,async,type,id){var a=document.createElement("script");
a.src=url;
if(type){a.type=type
}if(id){a.id=id
}a.async=async;
var tgt=document.getElementsByTagName("script")[0];
tgt.parentNode.insertBefore(a,tgt)
};
aps.fn.readRevenueProfile=function(){aps.cfg.revenueProfile=[];
try{if(aps.cfg.is.platypus||HDN.dataLayer.content.designTemplate.indexOf("dynamic_two_column.tpl")>-1){var revProfile=Object.entries(HDN.dataLayer.revenueProfiles.profiles);
for(var rp in revProfile){var subscriptions=revProfile[rp][1];
Object.entries(subscriptions).forEach(function(obj){if(obj[0].indexOf("column")==0){var ads=obj[1];
Object.entries(obj[1]).forEach(function(adtype){if(adtype[1].render){aps.cfg.revenueProfile.push(adtype[1].id)
}})
}})
}if(aps.cfg.page.current.domain=="timesunion.com"){aps.cfg.revenueProfile.push("LNlogo")
}if(aps.cfg.revenueProfile.includes("Crown")&&aps.cfg.useExit){aps.cfg.revenueProfile.push("exit")
}if(aps.cfg.revenueProfile.length==0){aps.cfg.serveAds=false
}}}catch(e){}};
aps.fn.filterRevenueProfileAds=function(code){if(typeof aps.cfg.revenueProfile=="undefined"){aps.fn.readRevenueProfile()
}if(aps.cfg.revenueProfile.length>0&&aps.cfg.revenueProfile.indexOf(code)==-1){return false
}else{return true
}};
aps.fn.isValidBid=function(adDef,bidder,wrapper){aps.cfg.bid.isValid=aps.cfg.bid.isValid||[];
var encode=adDef.code+bidder+wrapper;
if(aps.cfg.bid.isValid[encode]!=undefined){return aps.cfg.bid.isValid[encode]
}aps.cfg.bid.isValid[encode]=true;
aps.cfg.bid.excludedBids.forEach(function(rule){try{if(eval(rule[0])){aps.fn.logSkip(adDef.code,rule[1]);
aps.cfg.bid.isValid[encode]=false
}}catch(e){return false
}});
return aps.cfg.bid.isValid[encode]
};
aps.fn.shouldRunThirdParty=function(modulecode){return true
};
aps.fn.stripAndPreserveQueryStringVars=function(qstring,preserveList){if(typeof(qstring)=="undefined"){return""
}var pairs=qstring.split("&");
var result=[];
pairs.forEach(function(pair){pair=pair.split("=");
if(preserveList.indexOf(pair[0])!=-1){result.push(pair[0]+"="+pair[1])
}});
if(result.length>0){return"?"+result.join("&")
}return""
};
aps.fn.setPageTargettedUrl=function(page,kvpName,fullUrl,preserveQueryParms){var urlPieces=fullUrl.split("?");
var kvpUrl="";
if(preserveQueryParms.length==0){kvpUrl=urlPieces[0]
}else{kvpUrl=urlPieces[0]+aps.fn.stripAndPreserveQueryStringVars(urlPieces[1],preserveQueryParms)
}page.addPageKvp(kvpName,kvpUrl)
};
aps.fn.setPrebidDefault=function(){return{count:0,hasNative:false,hasVideo:false,isPositionless:false,isSizeless:false,params:{},run:prebid_source.CLIENT,singleUse:false,splitBySize:false,}
};
aps.fn.checkKvps=function(kvps){var ok=true;
try{kvps.forEach(function(kvp){if(typeof kvp.key!="string"||typeof kvp.value!="string"){ok=false
}})
}catch(ex){ok=false
}return ok
};
aps.fn.waitForDefinedTags=function(func){if(!aps.cfg.serveAds){return
}if(aps.cfg.adDefinitionLoaded){eval(func)()
}else{aps.alreadyWaiting=aps.alreadyWaiting||false;
aps.waitingForDefinedTags=aps.waitingForDefinedTags||[];
if(aps.waitingForDefinedTags.indexOf(func)>-1){return
}aps.waitingForDefinedTags.push(func);
if(!aps.cfg.adDefinitionLoaded){aps.registerEvent(aps.event.on_ad_definition_loaded,function(){eval(func)()
});
if(!aps.alreadyWaiting){aps.fn.setPerformanceMetrics(null,"waiting for Ad Definition");
aps.alreadyWaiting=true
}}}};
aps.fn.setupResponsiveMappings=function(slot,ad){var arSizeMappings=aps.fn.generateSizeMappings(ad);
slot.defineSizeMapping(arSizeMappings)
};
aps.fn.generateSizeMappings=function(ad){var arSizeMappings=[];
if(ad.sizeMappings!=undefined&&ad.sizeMappings.length>0){var arFixedMappings=[];
var arViewports=[];
var viewPortIDX={};
for(var i=0;
i<ad.sizeMappings.length;
i++){var arMap=ad.sizeMappings[i].split("x");
var adSize=[parseInt(arMap[1],10),parseInt(arMap[2],10)];
var nViewport=parseInt(arMap[0],10);
var idx=viewPortIDX[arMap[0]];
if(idx==undefined){idx=arFixedMappings.length;
arFixedMappings[idx]=new Array();
viewPortIDX[arMap[0]]=idx;
arViewports.push(arMap[0])
}if(adSize[0]!=0&&adSize[1]!=0){arFixedMappings[idx].push(adSize)
}}for(i=0;
i<arViewports.length;
i++){var viewport=[parseInt(arViewports[i],10),100];
var idx=viewPortIDX[arViewports[i]];
var slots=arFixedMappings[idx];
var addFluid=true;
if(aps.cfg.is.kfs){addFluid=false
}if(addFluid){slots.push(["fluid"])
}if(slots.length==1){arSizeMappings.push([viewport,slots[0]])
}else{arSizeMappings.push([viewport,slots])
}}}else{arSizeMappings.push([[0,0],[ad.width,ad.height]])
}return arSizeMappings
};
aps.fn.contentLoaded=function(win,fn){var done=false,top=true,doc=win.document,root=doc.documentElement,add=doc.addEventListener?"addEventListener":"attachEvent",rem=doc.addEventListener?"removeEventListener":"detachEvent",pre=doc.addEventListener?"":"on",init=function(e){if(e.type=="readystatechange"&&doc.readyState!="complete"){return
}(e.type=="load"?win:doc)[rem](pre+e.type,init,false);
if(!done&&(done=true)){fn.call(win,e.type||e)
}},poll=function(){try{root.doScroll("left")
}catch(e){setTimeout(poll,50);
return
}init("poll")
};
if(doc.readyState=="complete"){fn.call(win,"lazy")
}else{if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement
}catch(e){}if(top){poll()
}}doc[add](pre+"DOMContentLoaded",init,false);
doc[add](pre+"readystatechange",init,false);
win[add](pre+"load",init,false)
}};
aps.fn.monitofCeltraIframe=function(c){if(c===7||aps.cfg.dfp.celtra.divs.length==0){return
}for(var i=aps.cfg.dfp.celtra.divs.length-1;
i>=0;
i--){var frame=aps.cfg.dfp.celtra.divs[i];
var pFrame=frame.parentElement;
if(frame.style.display==="none"){if(pFrame.children.length>1){pFrame.style.position="relative";
frame.style.position="absolute";
frame.style.width="100%";
frame.style.height="100%";
frame.style.left="0"
}frame.style.display="block";
aps.fn.logInfo(pFrame.parentElement.id+": fixing Celtra display");
aps.cfg.dfp.celtra.divs.splice(i,1)
}}if(aps.cfg.dfp.celtra.divs.length>0){setTimeout(function(){aps.fn.monitofCeltraIframe(c+1)
},1000)
}};
aps.fn.maxLen=function(str,max){var ret=String(str);
if(ret.length<=max){return ret
}return'<span style="color:darkGray" title="'+ret+'">'+String(ret).substring(0,max-5)+"(...)</span>"
};
aps.fn.dumpObject=function(keep){if(!keep){aps.aps.search=""
}aps.aps.current=aps.aps.current||["aps","cfg"];
aps.aps.search=aps.aps.search||"";
aps.aps.div.innerHTML="";
var html="";
for(var i=1;
i<=aps.aps.current.length;
i++){html+='<a onclick="aps.aps.current='+JSON.stringify(aps.aps.current.slice(0,i)).replaceAll('"',"'")+';aps.fn.dumpObject();return false;">'+aps.aps.current.slice(i-1,i)+"</a>&nbsp;"
}aps.aps.div.innerHTML='<div style="padding-left:20px;color:blue" onclick="">'+html+'<input onChange="aps.fn.checkSearch" id="juiceSearch" style="position:sticky;left:'+(aps.aps.width/2)+'px" type="test" size="10" value="'+((keep)?aps.aps.search:"")+'"/><div style="float:right;width:20px;font-family:cursive;color:black" onclick="aps.fn.toggleAps()">j&lt;</div></div>';
var js=document.getElementById("juiceSearch");
js.addEventListener("input",function(e){if(e.target.value.length>2){aps.aps.search=e.target.value;
aps.fn.dumpObject(true)
}if(e.target.value.length==0){aps.aps.search="";
aps.fn.dumpObject(true)
}});
var o=window;
for(var i=0;
i<aps.aps.current.length;
i++){o=o[aps.aps.current[i]]
}var cont=aps.aps.content;
while(cont.hasChildNodes()){cont.removeChild(cont.firstChild)
}var obj=Object.entries(o);
if(obj.length==0){return"<small><i>nothing</i></small>"
}try{obj.sort()
}catch(e){}var t=document.createElement("table");
t.style="border:solid 1px black;cellspacing:0;padding:0;vertical-align:top;width:100%";
cont.appendChild(t);
var bgcolor="white";
obj.forEach(function(conf){if(aps.aps.search!=""&&!conf[0].includes(aps.aps.search)){return
}bgcolor=(bgcolor=="white")?"whiteSmoke":"white";
var tr=document.createElement("tr");
tr.style="background-color:"+bgcolor;
t.appendChild(tr);
var col1w=200;
var col2w=290;
if(aps.aps.width<500){col1w=aps.aps.width*0.4;
col2w=aps.aps.width*0.6
}var td=document.createElement("td");
td.innerHTML=aps.fn.maxLen(conf[0],30);
td.style="width:"+col1w+"px;vertical-align:top;overflow-x:hidden";
var td2=document.createElement("td");
td2.style="width:"+col2w+"px;white-space:normal";
if(typeof conf[1]=="function"){td2.innerHTML="<i>function</i>"
}else{if(Array.isArray(conf[1])){if(typeof conf[1][0]=="undefined"||typeof conf[1][0]=="object"){var obj=Object.entries(conf[1]);
td2.innerHTML="[";
var arrToPush=[];
arrToPush=arrToPush.concat(aps.aps.current);
arrToPush.push(conf[0]);
if(conf[1].length==0&&Object.entries(conf[1]).length==0){td2.innerHTML="<i>[]</i>"
}else{td.innerHTML='<a style="color:blue" onclick="aps.aps.current='+JSON.stringify(arrToPush).replaceAll('"',"'")+';aps.fn.dumpObject()">'+aps.fn.maxLen(conf[0],35)+"</a>";
obj.forEach(function(ent){var arrToPush=[];
arrToPush=arrToPush.concat(aps.aps.current);
arrToPush.push(conf[0]);
arrToPush.push(ent[0]);
td2.innerHTML+='"<a style="color:blue" onclick="aps.aps.current='+JSON.stringify(arrToPush).replaceAll('"',"'")+';aps.fn.dumpObject()">'+ent[0]+'</a>", '
});
td2.innerHTML+="]"
}}else{td2.innerHTML=JSON.stringify(conf[1]).replaceAll(",",", ")
}}else{if(typeof conf[1]=="object"){if(conf[1]==null){td2.innerHTML="<i>null</i>"
}else{if(Object.entries(conf[1]).length==0){try{td2.innerHTML=JSON.stringify(conf[1])
}catch(e){td2.innerHTML="<i>Blocked</i>"
}}else{var arrToPush=[];
arrToPush=arrToPush.concat(aps.aps.current);
arrToPush.push(conf[0]);
td.innerHTML='<a style="color:blue" onclick="aps.aps.current='+JSON.stringify(arrToPush).replaceAll('"',"'")+';aps.fn.dumpObject()">'+aps.fn.maxLen(conf[0],35)+"</a>";
td2.innerHTML='<a style="color:blue" onclick="aps.aps.current='+JSON.stringify(arrToPush).replaceAll('"',"'")+';aps.fn.dumpObject()"><i>click to open object</i></a>'
}}}else{td2.innerHTML=aps.fn.maxLen(conf[1],35)
}}}tr.appendChild(td);
tr.appendChild(td2)
})
};
aps.fn.toggleAps=function(){if(aps.aps.div.style.left==-(aps.aps.width-5)+"px"){aps.aps.div.style.left="-15px";
aps.aps.content.style.display="block";
aps.fn.dumpObject()
}else{aps.aps.div.style.left=-(aps.aps.width-5)+"px";
aps.aps.content.style.display="none";
aps.aps.div.innerHTML="";
var html="";
aps.aps.div.innerHTML='<div style="padding-left:20px" onclick=""><div style="float:right;width:15px;font-family:cursive;" onclick="aps.fn.toggleAps()">j&gt;</div></div>'
}};
aps.fn.tagAd=function(ad){if(!aps.cfg.logToConsole){return
}var div=document.getElementById(ad.code+"dbg");
if(!div){div=document.createElement("div");
div.id=ad.code+"dbg";
div.setAttribute("onmouseover","aps.fn.showAdDetails(this)");
var ori=document.getElementById(ad.code);
ori.style.position="relative";
var left=0;
if(ori.clientWidth&&ori.clientWidth>aps.pageWidth){left=30
}var style="top:0px;left:"+left+"px;min-height:50px;line-height:12pt;text-align:left; inline-block; color: #fff; background:rgba(255,138,69,70%); padding: 1px 4px; border-radius: 3px;position:absolute;font-family:Source Sans Pro Regular,Sans Serif, Arial,system-ui;font-size:10pt;min-width:80px;z-index:2900";
div.style=style;
ad.div.appendChild(div)
}if(!aps.cfg.infoDiv){aps.aps=aps.aps||{};
aps.aps.top=200;
aps.aps.width=(window.innerWidth<510)?window.innerWidth:510;
aps.aps.div=document.createElement("div");
aps.aps.div.style="position:fixed;left:-"+(aps.aps.width-5)+"px;top:"+(aps.aps.top)+"px;width:"+(aps.aps.width+16)+"px;height:25px;border:black 1px solid;border-radius:5px;background:rgba(255,138,69,100%);z-index:3000";
document.body.insertBefore(aps.aps.div,document.body.firstChild);
aps.aps.title=document.createElement("div");
aps.aps.title.innerHTML="";
aps.aps.title.style="width:100%";
aps.aps.div.appendChild(aps.aps.title);
aps.aps.toggle=document.createElement("div");
aps.aps.toggle.style="float:right;width:15px;font-family:cursive;";
aps.aps.toggle.innerHTML="j&gt;";
aps.aps.toggle.onclick=aps.fn.toggleAps;
aps.aps.title.appendChild(aps.aps.toggle);
aps.aps.content=document.createElement("div");
aps.aps.content.style="overflow-y:scroll;display:none;position:fixed;left:5px;top:"+(aps.aps.top+20)+"px;width:"+(aps.aps.width-5)+"px;height:500px;border:black 1px solid;border-radius:5px;background:white;z-index:3000";
document.body.insertBefore(aps.aps.content,document.body.firstChild);
var infoDiv=document.createElement("div");
infoDiv.id="infoDiv";
infoDiv.style="position:absolute;display:none;width:406px;height:366px;overflow:hide;z-index;3000;background-color:rgba(255,138,69,100%);border-radius: 3px;font-family:Source Sans Pro Regular,Sans Serif, Arial;padding:3px 3px 3px 3px;font-size:10pt";
infoDiv.style.zIndex=3000;
document.body.insertBefore(infoDiv,document.body.firstChild);
aps.cfg.infoDiv=infoDiv;
var infoDivClick=document.createElement("div");
infoDivClick.style="position.absolute;top:0px;float:right;font-family:Source Sans Pro Regular,Sans Serif, Arial;font-size:10pt;color:white;";
infoDivClick.innerHTML="Click to close";
infoDiv.appendChild(infoDivClick);
var titleDiv=document.createElement("div");
titleDiv.id="infoDivTitle";
titleDiv.title="Click to close";
titleDiv.style="height:40px;width:400px;text-align:left;position:relativefont-family:Source Sans Pro Regular,Sans Serif, Arial;font-size:12pt";
titleDiv.setAttribute("onclick","aps.fn.hideAdDetails()");
infoDiv.appendChild(titleDiv);
var detailsDiv=document.createElement("div");
detailsDiv.id="infoDivDetails";
detailsDiv.style="overflow-y:scroll;width:400px;height:300px;oveflow:scroll;font-size:10pt;font-family:Source Sans Pro Regular,Sans Serif, Arial;line-height:normal;padding:3px;position:relative;background-color:white;color:black;";
infoDiv.appendChild(detailsDiv)
}var inner=ad.code+"<br/>SD: "+ad.scrollDepth;
if(ad.advertiser){inner+="<br/>"+ad.advertiser
}div.innerHTML=inner;
if(aps.cfg.infoDivDisplaying==ad.code){aps.fn.setAdDetails(ad.code)
}};
aps.fn.setAdDetails=function(id){if(!aps.cfg.logToConsole){return
}var ad=aps.cfg.ads[id];
document.getElementById("infoDivTitle").innerHTML="<h3>"+id+"</h3>";
if(aps.cfg.inFrame){aps.cfg.infoDiv.style.height=ad.div.offsetHeight;
document.getElementById("infoDivTitle").innerHTML=id;
document.getElementById("infoDivTitle").style.height="auto";
document.getElementById("infoDiv").style.height=ad.div.offsetHeight+"px";
document.getElementById("infoDivDetails").style.height=ad.div.offsetHeight-21+"px"
}var inner="<b>Misc</b><br/>";
inner+="AdUnit: <font color='blue'>"+ad.getPage().adUnit+"</font><br/>";
inner+="Advertiser: <font color='blue'>"+ad.advertiser+"</font><br/>";
inner+="SizeMappings: <font color='blue'>"+ad.sizeMappings.join(", ")+"</font><br/>";
inner+="Sizes: <font color='blue'>"+ad.stringSizes.join(", ")+"</font><br/>";
inner+="Page Width:  <font color='blue'>"+aps.pageWidth+"</font><br/>";
inner+="Current Device:  <font color='blue'>";
switch(current_device){case devices.DESKTOP:inner+="Desktop";
break;
case devices.TABLER:inner+="Tablet";
break;
case devices.MOBILE:inner+="Mobile";
break
}inner+="</font><br/>";
inner+="<hr/>";
if(ad.render){if(!ad.render.responseInfo){return
}inner+="<b>Response Info</b><br/>";
var orderId=ad.render.responseInfo.campaignId;
var lineItemId=ad.render.responseInfo.lineItemId||ad.render.responseInfo.sourceAgnosticLineItemId;
Object.entries(ad.render.responseInfo).forEach(function(item){var link=item[1];
if(item[1]!=null){switch(item[0]){case"creativeId":link="<a href='https://admanager.google.com/"+aps.cfg.networkCode+"#creatives/creative/detail/creative_id="+item[1]+"&line_item_id="+lineItemId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"sourceAgnosticCreativeId":link="<a href='https://admanager.google.com/"+aps.cfg.networkCode+"#creatives/creative/detail/creative_id="+item[1]+"&line_item_id="+lineItemId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"lineItemId":link="<a href='https://admanager.google.com/"+aps.cfg.networkCode+"#delivery/line_item/detail/line_item_id="+item[1]+"&order_id="+orderId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"sourceAgnosticLineItemId":link="<a href='https://admanager.google.com/"+aps.cfg.networkCode+"#delivery/line_item/detail/line_item_id="+item[1]+"&order_id="+orderId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"campaignId":link="<a href='https://admanager.google.com/"+aps.cfg.networkCode+"#delivery/order/order_overview/order_id="+item[1]+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break
}}inner+=item[0]+": <font color='blue'>"+link+"</font><br/>"
});
inner+="<hr/>";
inner+="<b>Targeting</b><br/>";
Object.entries(ad.render.targetingMap).forEach(function(item){var value=Array.isArray(item[1])?item[1].join(", "):item[1].replace(",",", ");
inner+=item[0]+": <font color='blue'>"+value+"</font><br/>"
});
inner+="<hr/>";
inner+="<b>Page Targeting</b><br/>";
Object.entries(ad.render.request.pageTargeting).forEach(function(item){var value=Array.isArray(item[1])?item[1].join(", "):item[1].replace(",",", ");
inner+=item[0]+": <font color='blue'>"+value+"</font><br/>"
})
}document.getElementById("infoDivDetails").innerHTML=inner
};
aps.fn.showAdDetails=function(adinfo){var theAd=adinfo.id.replace("dbg","");
if(aps.cfg.infoDivDisplaying==theAd){return
}aps.cfg.infoDiv.style.display="block";
aps.cfg.infoDiv.style.top=event.pageY+15+"px";
aps.cfg.infoDiv.style.left=event.pageX+15+"px";
aps.cfg.infoDivDisplaying=theAd;
aps.fn.setAdDetails(theAd)
};
aps.fn.hideAdDetails=function(ad){if(aps.cfg.infoDiv){aps.cfg.infoDiv.style.display="none"
}aps.cfg.infoDivDisplaying=""
};
aps.fn.refreshAds=function(adcodes){var refreshable=[];
adcodes.forEach(function(id){var adDef=aps.cfg.ads[id];
if(adDef.state=="firstLoad"){aps.fn.logInfo("refreshAds: first load of "+adDef.code);
adDef.state="displayed";
refreshable.push(adDef.code)
}else{if(adDef.state=="forcedRefresh"){aps.fn.logInfo("refreshAds: forced refresh of "+adDef.code);
adDef.state="displayed";
refreshable.push(adDef.code)
}else{if(adDef.doNotRefresh){aps.fn.logSkip(adDef.code,"DoNotRefresh")
}else{if(aps.cfg.dfp.celtraAds.indexOf(adDef.code)>-1){aps.fn.logSkip(adDef.code,"Celtra ad")
}else{if(!aps.cfg.is.leafsSite&&adDef.isLoading==true){aps.fn.logSkip(adDef.code,"Last request not completed")
}else{if(!aps.cfg.is.leafsSite&&!adDef.refreshable){aps.fn.logSkip(adDef.code,"Not refreshable")
}else{if(!aps.cfg.is.leafsSite&&adDef.renderCount<=1){aps.fn.logSkip(adDef.code,"Not rendered")
}else{if(!aps.cfg.is.leafsSite&&aps.cfg.refreshViewableOnly&&!adDef.impressionViewable){aps.fn.logSkip(adDef.code,"Not viewable")
}else{if(adDef.code=="Crown"){aps.fn.logSkip(adDef.code,"Not refreshing Crown");
adDef.exclude=true
}else{if(aps.page_type2=="article"&&["www.expressnews.com","www.houstonchronicle.com","www.sfchronicle.com"].includes(aps.cfg.host)&&((current_device==devices.MOBILE&&adDef.code!="MAD")||(!["A300","B300","S300"].includes(adDef.code)&&!adDef.code.startsWith("rb")))){aps.fn.logSkip(adDef.code,"refreshAds: not refreshing masthead ads on premium site ");
adDef.exclude=true
}else{if(aps.cfg.ivm&&adDef.div.dataset.inview=="false"){aps.fn.logSkip(adDef.code,"only refreshing in view ads")
}else{aps.fn.logInfo("refreshAds: refreshing "+adDef.code);
refreshable.push(adDef.code)
}}}}}}}}}}}});
if(refreshable.length<=0){aps.fn.logInfo("refreshAds: No ads are in refreshable state - skipping refresh");
return
}aps.fn.logInfo("refreshAds: refreshing ad slots "+refreshable);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(refreshable);
aps.fn.requestAds()
};
aps.fn.requestAds=function(){if(!aps.cfg.readyToCallGAM){aps.fn.waitToCallGAM();
return
}var requests=[];
var req;
var missing=[];
aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(id){return !["Inline","RB"].includes(id)
});
var arr=[];
aps.cfg.queuedAds.forEach(function(id){if(!arr.includes(id)){arr.push(id)
}});
aps.cfg.queuedAds=arr;
aps.cfg.toRemoveFromQue=[];
aps.cfg.queuedAds.forEach(function(id){var ad=aps.cfg.ads[id];
if(!ad){return
}if(ad.code=="exit"){var pg=ad.getPage();
if(pg.requestNo<2){return
}if(!pg.exitRequested){pg.exitRequested=true
}else{return
}}if(!requests[ad.scrollDepth]){req=new aps.o.req(aps.cfg.page.allPages[ad.scrollDepth]);
requests[ad.scrollDepth]=req
}if(!ad.div){ad.div=document.getElementById(ad.code);
if(!ad.div){ad.retries=ad.retries||0;
ad.retries++;
if(ad.retries>20){aps.fn.logInfo("Enough retries loading "+ad.code);
aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(code){return code!=ad.code
});
return
}missing.push(ad.code);
aps.cfg.missingDivs.push(ad.code);
return
}}if(aps.cfg.is.platypus&&!["Crown","exit"].includes(ad.code)&&ad.div.dataset&&ad.div.dataset.inview&&ad.div.dataset.inview!="true"){aps.fn.logInfo(ad.code+" not in view - removing from queue");
ad.state="cancelled";
aps.cfg.toRemoveFromQue.push(ad.code);
return
}if(!ad.gam){var allGSlots=googletag.pubads().getSlots();
var thisSlot=allGSlots.filter(function(gslot){return gslot.getSlotElementId()==id
});
if(thisSlot.length>0){ad.gam=thisSlot[0]
}else{if(ad.supportsNative){ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,["fluid"],ad.code)
}else{if(aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget){ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,ad.sizes,ad.code)
}else{ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,[ad.width,ad.height],ad.code)
}}}if(ad.gam){googletag.display(ad.code);
ad.kvps.forEach(function(kvp){ad.gam.setTargeting(kvp.key,kvp.value)
})
}}if(ad.gam){ad.gam.clearTargeting("frsh");
ad.gam.setTargeting("frsh",ad.renderCount);
ad.gam.clearTargeting("i");
ad.gam.setTargeting("i",""+aps.cfg.dfp.requests.length);
if(["Crown"].includes(ad.code)){ad.gam.setCollapseEmptyDiv(true,true)
}else{if(aps.cfg.is.platypus){ad.gam.setCollapseEmptyDiv(false)
}}aps.fn.setupResponsiveMappings(ad.gam,ad);
ad.gam.addService(googletag.pubads())
}if(ad.gam&&ad.div){if(req.ads.length<aps.cfg.dfp.maxAdsPerRequest){ad.isLoading=true;
ad.renderedAd=null;
ad.viewableAt=null;
req.gams.push(ad.gam);
req.ads.push(ad.code)
}}});
if(missing.length>0){aps.logInfo("*GAM* Not requesting "+missing+" div(s) not on the page")
}requests.forEach(function(request,index){if(request.ads.length==0&&aps.cfg.dfp.requests.length==0){aps.cfg.waitingForAds=aps.cfg.waitingForAds||new Date().valueOf();
var thisTime=new Date().valueOf();
if(thisTime>aps.cfg.waitingForAds+15000){aps.logInfo("*GAM* Page not ready - no ads to request - enough waiting");
aps.cfg.queuedAds=[]
}else{aps.logInfo("*GAM* Page not ready - no ads to request");
setTimeout(aps.fn.requestAds,100)
}return
}if(!aps.cfg.is.platypus){if(aps.cfg.bid.enabled&&((aps.cfg.bid.a9.enabled&&!request.page.a9BidsReceived)||!request.page.pbBidsReceived)){aps.logInfo("Bids not received for page "+request.page.scrollDepth);
request.gams=[];
request.ads=[]
}}if(request.gams.length>0){if(request.page.datalayer.content.isSensitive){aps.logInfo("Don't serve ad on "+request.page.href+" - tragedy flag");
return
}request.page.addPageKvp("scrollpage",""+request.page.scrollDepth,true);
aps.fireEvent(aps.event.on_before_request_ads,request);
request.pageTargeting={};
var pagetm=googletag.pubads().getTargetingKeys();
pagetm.forEach(function(key){request.pageTargeting[key]=googletag.pubads().getTargeting(key)
});
request.ads.forEach(function(adId){aps.cfg.ads[adId].state="requested";
var div=aps.cfg.ads[adId].div;
if(div&&div.clientHeight>0&&adId!="MAD"){div.style.minHeight=div.clientHeight+"px"
}});
aps.fn.logInfo("*GAM* requesting for page "+index+" : "+request.ads);
if(aps.cfg.dfp.batchSRA.enabled||request.page.page_type2=="article"){googletag.pubads().refresh(request.gams,{changeCorrelator:false})
}else{googletag.pubads().refresh(request.gams)
}if(!aps.cfg.logToConsole){request={ads:request.ads,page:{requestNo:request.page.requestNo}}
}aps.cfg.dfp.requests.push(request);
request.page.requestNo++
}aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(id){return !request.ads.includes(id)
});
aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(id){return !aps.cfg.toRemoveFromQue.includes(id)
});
if(aps.cfg.queuedAds.length>0){if(Object.entries(aps.cfg.ads).filter(function(ad){return ad[1].renderCount>1
}).length>0&&(HDN.dataLayer.ads.loaded||!aps.cfg.is.wcm)){var divs=[];
for(var i=aps.cfg.queuedAds.length-1;
i>=0;
i--){if(!aps.cfg.ads[aps.cfg.queuedAds[1]]){aps.logInfo("Ad not defined:"+aps.cfg.queuedAds[1]);
aps.cfg.queuedAds.splice(i,1)
}else{if(!aps.cfg.ads[aps.cfg.queuedAds[i]].div){divs.push(aps.cfg.queuedAds[i]);
aps.cfg.queuedAds.splice(i,1)
}}}if(divs.length>0){aps.fn.logInfo("*GAM* "+divs+" removed from queue, still not on page")
}}if(aps.cfg.queuedAds.length>0){setTimeout(aps.fn.requestAds,500)
}}});
if(aps.cfg.dfp.batchSRA.enabled){aps.cfg.dfp.batchSRA.waitingNext=true;
if(aps.cfg.dfp.batchSRA.auto){aps.fn.logInfo("BatchSRA : waiting to next step in "+aps.cfg.dfp.batchSRA.delay+" ms");
setTimeout(aps.fn.displayNextBatch,aps.cfg.dfp.batchSRA.delay)
}}};
aps.fn.waitToCallGAM=function(){if(aps.cfg.readyToCallGAM){aps.fn.requestAds();
return
}if(!googletag.apiReady||aps.cfg.waitingForRichie||(!aps.cfg.tregReady&&aps.cfg.waitForTreg)||(aps.cfg.bid.a9.enabled&&!aps.cfg.bid.a9.received)||(aps.cfg.bid.enabled&&!aps.cfg.bid.pb.received)){if(aps.cfg.waitingSince){var now=new Date().valueOf();
if(now-aps.cfg.waitingSince>=5000){var info={version:aps.cfg.version,pbBids:{enabled:aps.cfg.bid.enabled,received:aps.cfg.bid.pb.received},a9Bids:{enabled:aps.cfg.bid.a9.enabled,received:aps.cfg.bid.a9.received},DOM:document.readyState,apiReady:googletag.apiReady,richie:{is:aps.cfg.is.richie,waiting:aps.cfg.waitingForRichie},treg:{waiting:aps.cfg.waitForTreg,ready:aps.cfg.tregReady},platypus:{is:aps.cfg.is.platypus},};
aps.logInfo(["Waiting for 5 seconds.",info]);
if(googletag.apiReady){aps.cfg.readyToCallGAM=true;
aps.fn.requestAds()
}else{aps.cfg.forcedGam=aps.cfg.forcedGam||false;
if(!aps.cfg.forcedGam){aps.fn.logInfo("Force loading gpt.js");
aps.fn.insertScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js",true,"text/javascript","gdfp");
aps.cfg.forcedGam=true
}setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Not ready to call GAM");
setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Not ready to call GAM");
aps.cfg.waitingSince=aps.cfg.waitingSince||new Date().valueOf();
setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Ready to call GAM");
aps.cfg.readyToCallGAM=true;
aps.fn.requestAds()
}};
aps.fn.sendLog=function(param,force){if(!aps.cfg.gaLog&&!force){return
}var i=document.createElement("img");
i.src="https://aps.hearstnp.com/log?v"+aps.cfg.version+"&"+param;
i.style="display:none";
document.head.appendChild(i)
}
})();(function(){aps.event.on_dom_loaded=10;
aps.event.on_before_request_ads=20;
aps.event.on_get_bids=30;
aps.event.on_request_new_video_ads=40;
aps.event.on_ad_definition_loaded=50;
aps.event.on_define_bid_data=60;
aps.event.on_initial_bid_request=70;
aps.event.on_timer=80;
aps.event.on_timer10=81;
aps.event.on_timer60=82;
aps.event.on_new_page=90;
aps.event.on_first_load=100;
aps.event.on_new_div=110;
aps.event.on_request_bid=120;
aps.event.on_check_include_ad=130;
aps.event.on_render_ad=140;
aps.event.on_define_adUnit=150;
aps.event.on_before_define_adUnit=160;
var a=0;
aps.cfg.timer=setInterval(function(){a++;
aps.fireEvent(aps.event.on_timer,{now:new Date().valueOf(),count:a});
if(a%60==0){aps.fireEvent(aps.event.on_timer60,{now:new Date().valueOf(),count:a})
}},1000);
aps.logtype.info=0;
aps.logtype.warning=1;
aps.logtype.error=2;
aps.registerEvent=function(c,b){var d=aps.events[c];
aps.events[c]=function(e){d&&d(e);
b(e)
}
};
aps.fireEvent=function(b,c){aps.events[b]&&aps.events[b](c)
}
})();(function(){aps.cfg.fastly={};
var b=aps.fn.getCookie("hnpde");
if(b&&b!=""){try{b=atob(b);
aps.cfg.fastly=JSON.parse(b);
if(aps.cfg.fastly.ipc_id.length==0){aps.cfg.fastly.ipc_id="null"
}if(!aps.cfg.fastly.f_id){aps.cfg.fastly.f_id="null"
}aps.cfg.fastly.f_kb=aps.cfg.fastly.f_kb.toString()
}catch(a){}}if(aps.cfg.fastly.hnp_na){throw new Error("Don't serve ads to friendly bots")
}if(aps.cfg.fastly.ipc_id){aps.registerEvent(aps.event.on_before_request_ads,function(c){c.page.addPageKvp("hpx_ipc",aps.cfg.fastly.ipc_id,true);
c.page.addPageKvp("hpx_fid",aps.cfg.fastly.f_id,true);
c.page.addPageKvp("hpx_kb",aps.cfg.fastly.f_kb,true)
})
}})();(function(){aps.cfg.is.wcm=(HDN&&HDN.dataLayer&&HDN.dataLayer.content&&typeof HDN.dataLayer.content.designTemplate!="undefined")?true:false;
aps.cfg.is.authorPage=(aps.cfg.is.wcm&&document.location.pathname.startsWith("/author/"))?true:false;
aps.cfg.is.datebookSF=aps.cfg.host=="datebook.sfchronicle.com";
aps.cfg.is.eedition=aps.cfg.host.indexOf("olivesoftware.com")>0;
aps.cfg.is.faceBookInstantArticle=(window.JuicePageUrl.indexOf("juicemode=fbinstant")!==-1);
aps.cfg.is.leafsSite=aps.cfg.leafsSites.includes(aps.cfg.host);
aps.cfg.is.obits=aps.cfg.host=="obituaries.lmtonline.com"||(aps.cfg.host.indexOf("legacy.com")>-1||(top.location!=location&&document.referrer=="https://www.legacy.com/"));
aps.cfg.is.premium=(HDN&&HDN.dataLayer&&typeof HDN.dataLayer.paywall!=="undefined"&&typeof HDN.dataLayer.paywall.premiumStatus!=="undefined"&&HDN.dataLayer.paywall.premiumStatus==="isPremium")?true:false;
aps.cfg.is.premiumSite=["expressnews.com","houstonchronicle.com","sfchronicle.com"].some(function(a){return aps.cfg.host.endsWith(a)
})&&aps.cfg.host.split(".").some(function(a){return["www","cmf"].includes(a)
});
aps.cfg.is.qa=(aps.cfg.subdom.some(function(b){return["preview-dev","cmf","web","web1","web2","web3","qa","dev","w"].includes(b)
})||loadAd_UrlLocation=="https://aps-staging.hearstnp.com/")?true:false;
aps.cfg.is.previewHC=aps.cfg.host=="preview.houstonchronicle.com";
aps.cfg.is.projectPage=(document.location.pathname.startsWith("/projects")||aps.cfg.host.startsWith("projects."))?true:false;
aps.cfg.is.richie=APSpageUrl.indexOf("staging.richie")==0||APSpageUrl.indexOf("richie")==0||APSpageUrl.indexOf("papp")==0;
aps.cfg.is.wp=typeof(window.wp_content)=="object";
aps.cfg.is.kfs=(window.juice&&window.juice.kfs&&typeof(window.juice.kfs)=="string")||false;
aps.cfg.is.kfsComicsWidget=(window.juice&&juice.kfs&&juice.kfs=="comicsWidget")||aps.cfg.host.startsWith("v7.comicskingdom")||false;
aps.cfg.is.kfsPuzzleWidget=(window.juice&&juice.kfs&&juice.kfs=="puzzleWidget")||false;
aps.cfg.is.kfsWidget=aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget;
aps.cfg.is.platypus=(HDN&&HDN.dataLayer&&HDN.dataLayer.ads&&HDN.dataLayer.ads.isPlatypus)?true:false;
aps.cfg.is.greenstate=(document.location.hostname.indexOf("greenstate.com")>-1);
aps.cfg.is.storystudio=aps.cfg.host.startsWith("storystudio");
aps.cfg.is.realmpage=(document.location.pathname.startsWith("/realm/"));
aps.cfg.is.subscription=(document.location.hostname.startsWith("subscription."))
})();(function(){aps.pageWidth=window.screen.width||top.window.innerWidth||window.width||-1;
if(aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget){aps.pageWidth=window.innerWidth||window.screen.width||window.width||-1
}if(navigator.userAgent.indexOf("iPad")>-1){window.current_device=devices.TABLET
}else{if(navigator.userAgent.indexOf("iPhone")>-1){window.current_device=devices.MOBILE
}else{if(navigator.userAgent.indexOf("Android")>-1){window.current_device=devices.MOBILE
}else{if(document.querySelectorAll("meta[name=viewport]").length>0){try{var d;
var c=document.querySelectorAll("meta[name=viewport]")[0].content.split(",");
for(var b=0;
b<c.length;
b++){var e=c[b].split("=");
if(e[0].trim()=="width"){d=e[1].trim()
}}aps.pageWidth=(d=="device-width")?window.innerWidth:d
}catch(a){}}window.current_device=(aps.pageWidth<768)?devices.MOBILE:devices.DESKTOP
}}}})();(function(){aps.registerEvent(aps.event.on_new_page,function(a){a.adUnit=null;
a.setAdUnit=function(){var b={adUnit:(aps.page&&aps.page.adUnit)?aps.page.adUnit:"",previousValue:(aps.page&&aps.page.adUnit)?aps.page.adUnit:"",queryStringOverwritten:false,levelOne:{value:"hnp-"+a.domain,forced:false,},levelTwo:{value:"",forced:false,},checkQueryStringValue:function(){var d=aps.fn.getQueryParameterByName("hnpau");
if(!d){return
}var c=d.split("/");
if(c[0]&&c[0]!=""){if(c[0].startsWith("hnp-")){this.levelOne.value=c[0];
this.levelOne.forced=true;
this.queryStringOverwritten=true
}else{aps.fn.logInfo("*WRN* Using hnpau query string param to set runtime adunit needs to have an adunit to start with 'hnp-'. To define second level, add it after /. To only change second level, start at /")
}}if(c[1]&&c[1]!=""){this.levelTwo.value=c[1];
this.levelTwo.forced=true;
this.queryStringOverwritten=true
}},getNewValue:function(){this.checkQueryStringValue();
if(aps.cfg.is.richie){this.levelOne.value="hnp-"+a.domain;
this.levelOne.forced=true;
this.levelTwo.value="article_rapp";
this.levelTwo.forced=true
}if(aps.cfg.is.authorPage||aps.cfg.is.projectPage){this.levelTwo.value="general_wcm";
this.levelTwo.forced=true
}if(aps.cfg.is.datebookSF||aps.cfg.is.previewHC){this.levelTwo.value="datebook_wp";
this.levelTwo.forced=true
}if(window.juice&&window.juice.definedTags&&window.juice.definedTags.adUnit){var c=juice.definedTags.adUnit.split("/");
this.levelOne.value=c[0];
this.levelOne.forced=true;
this.levelTwo.value=c[1];
this.levelTwo.forced=true
}if(aps.cfg.is.eedition){if(!this.levelOne.forced){var d=document.location.pathname.split("/")[3]+".com";
switch(document.location.pathname.split("/")[3]){case"albanytimesunion":d="timesunion.com";
break;
case"albanytimesuniondemo":d="timesunion.com";
break;
case"albanytimesunionnie":d="timesunion.com";
break;
case"albanytimesunionss":d="timesunion.com";
break;
case"allamericanmagazine":d="mrt.com";
break;
case"altontelegraph":d="thetelegraph.com";
this.levelTwo.value="e-edition";
break;
case"atuspecialsectionfree":d="timesunion.com";
break;
case"atuspecialsectionpaid":d="timesunion.com";
break;
case"atusubscriberexclusives":d="timesunion.com";
break;
case"beaumontenterprise":d="beaumontenterprise.com";
break;
case"beaumontenterprisenie":d="beaumontenterprise.com";
break;
case"beaumontlakecaster":d="beaumontenterprise.com";
break;
case"beaumontvip":d="beaumontenterprise.com";
break;
case"beeventbook":d="beaumontenterprise.com";
break;
case"behardincounty":d="beaumontenterprise.com";
break;
case"bejaspernewsboy":d="beaumontenterprise.com";
break;
case"benziepatriot":d="recordpatriot.com";
this.levelTwo.value="e-edition";
break;
case"bigrapidspioneer":d="bigrapidsnews.com";
this.levelTwo.value="e-edition";
break;
case"connecticutmag":d="connecticutmag.com";
this.levelTwo.value="e-edition";
break;
case"connecticutpost":d="ctpost.com";
break;
case"connecticutpostdemo":d="ctpost.com";
break;
case"connecticutpostnie":d="ctpost.com";
break;
case"couriermontgomerycounty":d="yourconroenews.com";
break;
case"cthousehunter":d="ctpost.com";
break;
case"danburynewstimes":d="newstimes.com";
break;
case"danburynewstimesdemo":d="newstimes.com";
break;
case"danburynewstimesnie":d="newstimes.com";
break;
case"darientimes":d="darientimes.com";
this.levelTwo.value="e-edition";
break;
case"fairfieldcitizen":d="fairfieldcitizenonline.com";
break;
case"fanguide":d="sfgate.com";
break;
case"foothillstrader":d="nhregister.com";
this.levelTwo.value="e-edition";
break;
case"gametimect":d="gametimect.com";
this.levelTwo.value="e-edition";
break;
case"greenwichtime":d="greenwichtime.com";
break;
case"greenwichtimedemo":d="greenwichtime.com";
break;
case"greenwichtimenie":d="greenwichtime.com";
break;
case"habitat":d="sfgate.com";
break;
case"habitatnie":d="sfgate.com";
break;
case"hccommunityextra":d="chron.com";
break;
case"hcinvestigations":d="chron.com";
break;
case"hcmgspecialsections":d="ctpost.com";
break;
case"hcspecialsections":d="chron.com";
break;
case"hcsubscriberbonus":d="chron.com";
break;
case"hcsubscriberexclusives":d="chron.com";
break;
case"heraldreview":d="theheraldreview.com";
this.levelTwo.value="e-edition";
break;
case"houstonchronicle":d="chron.com";
break;
case"houstonchronicledemo":d="chron.com";
break;
case"houstonchroniclenie":d="chron.com";
break;
case"hurondailytribune":d="michigansthumb.com";
break;
case"hurondailytribunenie":d="michigansthumb.com";
break;
case"intelligencer":d="theintelligencer";
break;
case"jacksonvillejournalcourier":d="myjournalcourier.com";
this.levelTwo.value="e-edition";
break;
case"lakecountystar":d="lakecountystar.com";
this.levelTwo.value="e-edition";
break;
case"laredomorningtimes":d="lmtonline.com";
break;
case"lavoz":d="chron.com";
break;
case"lmtspecialsections":d="lmtonline.com";
break;
case"manisteenewsadvocate":d="manisteenews.com";
this.levelTwo.value="e-edition";
break;
case"middletownpress":d="middletownpress.com";
this.levelTwo.value="e-edition";
break;
case"midlanddailynews":d="ourmidland.com";
break;
case"midlanddailynewsnie":d="ourmidland.com";
break;
case"midlandreportertelegram":d="mrt.com";
break;
case"midlandreportertelegramnie":d="mrt.com";
break;
case"milfordmirror":d="milfordmirror.com";
this.levelTwo.value="e-edition";
break;
case"mrtdiscover":d="mrt.com";
break;
case"mrthealthwellness":d="mrt.com";
break;
case"mrtmagazine":d="mrt.com";
break;
case"mrtmagbusinessinsider":d="mrt.com";
break;
case"mrtmdc":d="mrt.com";
break;
case"mrtoilreport":d="mrt.com";
break;
case"mrtprojectliteracy":d="mrt.com";
break;
case"mrtreaderchoice":d="mrt.com";
break;
case"mrtyearinreview":d="mrt.com";
break;
case"newcanaanadvertiser":d="ncadvertiser.com";
this.levelTwo.value="e-edition";
break;
case"newhavenregister":d="nhregister.com";
this.levelTwo.value="e-edition";
break;
case"newmilfordspectrum":d="newmilfordspectrum.com";
break;
case"plainviewherald":d="myplainview.com";
break;
case"registercitizen":d="registercitizen.com";
this.levelTwo.value="e-edition";
break;
case"ridgefieldpress":d="theridgefieldpress.com";
this.levelTwo.value="e-edition";
break;
case"saencommunities":d="mysanantonio.com";
break;
case"saenmilitary":d="mysanantonio.com";
break;
case"saenpuzzles":d="mysanantonio.com";
break;
case"saenspursnation":d="mysanantonio.com";
break;
case"saensubscriberexclusives":d="mysanantonio.com";
break;
case"saenweeklies":d="mysanantonio.com";
break;
case"sanantonioexpressnews":d="mysanantonio.com";
break;
case"sanantonioexpressnewsdemo":d="mysanantonio.com";
break;
case"sanantonioexpressnewsnie":d="mysanantonio.com";
break;
case"sanfranciscochronicle":d="sfgate.com";
break;
case"sanfranciscochronicledemo":d="sfgate.com";
break;
case"sanfranciscochroniclenie":d="sfgate.com";
break;
case"sellingthetallcity":d="mrt.com";
break;
case"sheltonherald":d="sheltonherald.com";
this.levelTwo.value="e-edition";
break;
case"shorelinetimes":d="shorelinetimes.com";
this.levelTwo.value="e-edition";
break;
case"ssptsanantonioexpressnews":d="mysanantonio.com";
break;
case"texassportsnation":d="chron.com";
break;
case"theadvocate":d="stamfordadvocate.com";
break;
case"theadvocatedemo":d="stamfordadvocate.com";
break;
case"theadvocatenie":d="stamfordadvocate.com";
break;
case"thehour":d="thehour.com";
break;
case"truebrew":d="timesunion.com";
break;
case"trumbulltimes":d="trumbulltimes.com";
this.levelTwo.value="e-edition";
break;
case"westportnews":d="ctpost.com";
break;
case"wiltonbulletin":d="wiltonbulletin.com";
this.levelTwo.value="e-edition";
break
}if(d!=""){this.levelOne.value="hnp-"+d;
this.levelOne.forced=true
}if(d=="theintelligencer"){this.levelOne.value=d
}}if(this.levelTwo.value==""){this.levelTwo.value="E-edition"
}this.levelTwo.forced=true
}if(aps.cfg.is.kfs){if(!aps.cfg.is.kfsComicsWidget&&!aps.cfg.is.kfsPuzzleWidget){this.levelOne.value="kfs-comicskingdom";
this.levelOne.forced=true;
var f=0;
if(["puzzles","political"].includes(a.path[0])&&a.path.length>1){f=1
}this.levelTwo.value=(a.path.length>0)?a.path[f]:"homepage";
this.levelTwo.forced=true
}else{if(aps.cfg.is.kfsPuzzleWidget){this.levelOne.value="kfs-puzzleswidget";
this.levelOne.forced=true
}else{if(aps.cfg.is.kfsComicsWidget){this.levelOne.value="kfs-comicswidget";
this.levelOne.forced=true
}}var d=new URL(document.referrer||"https://www.kingfeatures.com");
this.levelTwo.value=d.hostname.split(".").slice(-2).join(".");
this.levelTwo.forced=true
}}if(aps.cfg.is.qa&&aps.cfg.is.wcm&&!aps.cfg.is.platypus){if(!this.levelOne.forced){this.levelOne.value="hnp-hearstdemosite";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="hearstdemozone";
this.levelTwo.forced=true
}}if(aps.cfg.is.leafsSite){if(aps.cfg.host=="pyme.lavoztx.com"){if(!this.levelOne.forced){this.levelOne.value="hnp-chron.com";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="La_Voz";
this.levelTwo.forced=true
}}if(!this.levelOne.forced){this.levelOne.value="hnp-"+aps.cfg.host.split(".").slice(-2).join(".");
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value=(document.location.pathname=="/")?"channel_leaf":"article_leaf";
this.levelTwo.forced=true
}}if(!this.levelTwo.forced&&!a.isSubDomain&&a.path.length==0){this.levelTwo.value="Homepage";
this.levelTwo.forced=true
}aps.fireEvent(aps.event.on_before_define_adUnit,this);
if(!this.levelTwo.forced){switch(a.datalayer.content.designTemplate){case"design/article/dynamic_two_column.tpl":this.levelTwo.value="article_dtc";
this.levelTwo.forced=true;
break;
case"design/article/dynamic_one_column.tpl":this.levelTwo.value="article_doc";
this.levelTwo.forced=true;
break;
case"design/slideshow/dynamic_two_column.tpl":this.levelTwo.value="article_list";
this.levelTwo.forced=true;
break;
case"design/channel/dynamic_two_column.tpl":this.levelTwo.value="channel_wcm";
this.levelTwo.forced=true;
break;
default:if(a.datalayer.content.designTemplate&&a.datalayer.content.designTemplate.indexOf("channel")>-1){this.levelTwo.value="channel_old";
this.levelTwo.forced=true
}else{this.levelTwo.value="article_old";
this.levelTwo.forced=true
}}}this.levelOne.value=this.levelOne.value.replace("hnp-theintelligencer.com","theintelligencer");
var e=this.levelOne.value+"/"+this.levelTwo.value;
if(e.endsWith("/")){e=e.substring(0,e.length-1)
}if(this.queryStringOverwritten||aps.sitesWithoutCallback.includes(a.hostname)||aps.cfg.is.kfs){this.adUnit=e;
aps.fn.logInfo("*AdUnit: setting adUnit to : "+this.adUnit)
}this.newValue=e;
return e
}};
aps.fireEvent(aps.event.on_define_adUnit,{page:a,adUnit:b});
a.adUnit=b.getNewValue()
}()
})
})();(function(){aps.registerEvent(aps.event.on_new_page,function(a){a.sectionPath=[];
a.setSectionPath=function(){if(aps.cfg.is.datebookSF){a.sectionPath=["entertainment","datebook"]
}else{if(aps.cfg.is.previewHC){a.sectionPath=["entertainment","preview"]
}else{if(aps.cfg.is.authorPage){a.sectionPath=a.path
}else{if(aps.cfg.is.leafsSite){a.sectionPath=[aps.cfg.host.split(".")[0]];
a.addPageKvp("category","third_party");
a.addPageKvp("custom","demandmedia")
}else{if(a.datalayer.content.sectionPath){a.sectionPath=a.datalayer.content.sectionPath;
if(a.domain=="greenstate.com"&&a.path.length>0){a.sectionPath.push(a.path[0])
}if(a.sectionPath.length>0&&typeof a.sectionPath[0].title=="string"){var c=[];
Object.entries(a.sectionPath).forEach(function(d){c.push(d[1].title.toLowerCase())
});
a.sectionPath=c
}}else{if(window.juice){if(window.juice.definedTags&&window.juice.definedTags.sectionPath){a.sectionPath=juice.definedTags.sectionPath
}else{if(window.juice.is&&["wehaa","ipublish"].includes(window.juice.is)){a.sectionPath.push("real_estate")
}}}}}}}}if(a.sectionPath.length<2&&a.datalayer.content.sectionPath&&a.datalayer.content.sectionPath.length==0){if(a.path.length==0){a.sectionPath.push("homepage")
}else{a.path.forEach(function(d){if(d!="category"&&a.sectionPath.length<4){a.sectionPath.push(d)
}})
}}if(a.sectionPath){for(var b=0;
b<a.sectionPath.length;
b++){a.sectionPath[b]=a.sectionPath[b].replace(/["\'=!#*~;\^<>]/g,"");
a.sectionPath[b]=a.sectionPath[b].replace(/\s\+\s|\s\&\s|\+|\&/g,"-and-");
a.sectionPath[b]=a.sectionPath[b].replace(/[\(\)\[\],]/g,"|")
}}if(a.sectionPath.length>0){aps.fn.logInfo("section Path: "+a.sectionPath);
for(var b=0;
b<a.sectionPath.length;
b++){if(a.sectionPath[b]){aps.fn.logInfo("section Path: section"+(b+1)+"="+a.sectionPath[b]);
a.addPageKvp("section"+(b+1),a.sectionPath[b])
}}}}()
})
})();(function(){aps.cfg.advertisers={46962802:"House PSA",46402162:"House PSA",46328242:"A9",4506751574:"Aardvark",198604042:"AppNexus",4401584047:"Consumable",4594233306:"Concert",46513882:"Criteo",99465802:"Facebook",5266952821:"Flipp",53211082:"Google Adx",47574562:"ix",4726587804:"JustPremium",47576002:"Kargo",4542983697:"Lockerdome",4903417422:"NoBid",53204482:"OpenX",5174193964:"PublicGood",79962922:"Pubmatic",5024029832:"PulsePoint",53212282:"Rubicon",55181242:"Teads",53212402:"TripleLift",4907535500:"Vidazoo",4958539431:"Wunderkind",4401894681:"Yieldmo",203184442:"Gamut Media",169654522:"ix",169655602:"OpenX",169656562:"RhythmOne",169656562:"Rubicon",195800602:"Sovrn",4579237619:"Media.net",4417528020:"TripleLift",5204003199:"A9",5204001786:"Pubmatic",};
if(window.location.search.indexOf("console=2")!==-1){window.debugSGA=true
}aps.cfg.adDefinitionLoaded=false;
aps.cfg.iPhone=(navigator.userAgent.indexOf("iPhone")>-1);
aps.cfg.ads=[];
aps.cfg.adtest={};
aps.cfg.adMap=aps.cfg.adMap||[];
aps.cfg.adtestparam="";
aps.cfg.domIsLoaded=false;
aps.cfg.infiniteScroll=HDN.dataLayer.presentation.infiniteScrollEnabled;
aps.cfg.missingDivs=[];
aps.cfg.disablePersonalisation=false;
aps.cfg.doNotSell=HDN&&HDN.dataLayer&&HDN.dataLayer.privacy&&HDN.dataLayer.privacy.ccpaDoNotSell||false;
aps.cfg.juiceCustom=false;
aps.cfg.logToConsole=aps.cfg.logToConsole||(window.debugSGA)?true:(window.location.search.indexOf("console=1")!==-1)?true:false;
var a=aps.fn.getCookie("console");
if(a!=undefined&&a=="1"){aps.cfg.logToConsole=true
}aps.cfg.nlpCat=[];
aps.cfg.dfp={celtra:{},dynamicAds:[],phd:{enabled:false,},rnd:{},celtraAds:[],googleSlots:[],adsNotShowing:[],refreshes:0,undefinedAds:[],waiting:[],isWaiting:false,dataLayerInterstitialRefreshables:["Flex1","A300","TMP300_3","MAD"],viewability:[],rendered:{timer:null,que:[]},requests:[],maxAdsPerRequest:10,};
aps.cfg.bid={a9:{adUnits:[],enabled:true,config:{},apstag:{},enableOptimization:false,initCalled:false,videoAdUnits:[],partners:[],received:false,},pb:{config:{},data:{},adUnits:[],adUnitIds:[],videoAdUnits:[],s2sBidders:[],bidders:[],biddersCount:0,biddersDone:[],biddersPriority:["triplelift","criteo","concert","ix","kargo"],enableOptimization:false,dataProviders:[],settings:{},moveToS2SOnMax:["rubicon","appnexus","pubmatic"],notSupportingGDPR:[],shuffleMoveToS2SOnMax:true,received:false,},adSizes:[[160,600],[300,50],[300,250],[300,600],[320,50],[320,100],[325,508],[325,204],[336,280],[501,501],[620,366],[728,90],[970,90],[970,250]],domains:["beaumontenterprise.com","bigrapidsnews.com","chron.com","comicskingdom.com","comicskingdom.net","ctinsider.com","ctpost.com","darientimes.com","expressnews.com","greenstate.com","greenwichtime.com","houstonchronicle.com","lakecountystar.com","lmtonline.com","kingfeatures.com","manisteenews.com","michigansthumb.com","middletownpress.com","milfordmirror.com","mrt.com","myjournalcourier.com","myplainview.com","mysanantonio.com","ncadvertiser.com","newstimes.com","nhregister.com","ourmidland.com","recordpatriot.com","registercitizen.com","seattlepi.com","sfchronicle.com","sfgate.com","sheltonherald.com","southeasttexas.com","stamfordadvocate.com","theheraldreview.com","thehour.com","theintelligencer.com","theridgefieldpress.com","thetelegraph.com","timesunion.com","trumbulltimes.com","weekand.com","wiltonbulletin.com","workand.com","yourconroenews.com"],bids:[],detectAllBids:true,disableNative:true,disableMobile:false,disabledOnMobile:[],enableOptimization:true,enabled:(window.location.search.indexOf("pb=0")!==-1)?false:true,enableGDPR:false,excludedDomains:["gametimect.com","olivesoftware.com"],lessBidder:0,current_domain:"",current_device:current_device,showTargeting:true,showType:false,maxClientSideBidders:(current_device==devices.DESKTOP)?7:6,excludedBids:[['wrapper=="pb" && aps.cfg.page.current.domain=="chron.com" && adDef.code == "A951" && ["home page","channel"].includes(aps.cfg.page.current.page_type2)',"no bid on A951 for page_type2 home_page or channel on chron.com"],['wrapper=="pb" && aps.cfg.page.current.page_type2 != "article" && adDef.code.startsWith("CONCERT")',"no bid on CONCERTx ads for page_type2 not article"],['bidder == "criteo" && adDef.code.startsWith("NTV")',"no bid on NTV ads for criteo"],['bidder=="triplelift" && ["Flex1","B728","TMP300_3"].includes(adDef.code)',"no bid on Flex1, B728 or TMP300_3 for triplelift"],['adDef.code == "A951" && document.location.href.startsWith("https://www.sfgate.com/realestate/")',"no bid on A951 on sfgate realestate"],['bidder == "kargo" && adDef.code == "MAD" && ["expressnews.com","houstonchronicle.com","sfchronicle.com"].includes(aps.cfg.page.current.domain)',"no bid on MAD on Premium sites for Kargo"],['bidder == "kargo" && adDef.code == "Flex1"',"no bid on Flex1 for Kargo"],['adDef.code == "DTBK_AP951"',"no bid on DTBK_AP951, direct sales only."],],};
if(!aps.cfg.is.leafsSite){aps.cfg.bid.excludedBids.push(["adDef.code == adDef.multiType","no bid for stub multi slots"])
}aps.cfg.vid={mode:"apv",tagUrl:"",enabled:false,};
aps.cfg.gaLog=(Math.floor(Math.random()*100)<=5);
aps.cfg.excludeModules=[];
aps.cfg.waitingGoogle=false;
aps.cfg.preventCeltraAdsToRefresh=true;
aps.cfg.queuedAds=[];
aps.cfg.serveAds=true;
aps.cfg.readyToCallGAM=false;
aps.cfg.refreshViewableOnly=true;
aps.cfg.videoAdTag=null;
aps.cfg.limitAdSize=sizeLimitation.NONE;
var d=aps.cfg.abtestvar||[];
aps.cfg.abtestvar=window.HDN&&HDN.dataLayer&&HDN.dataLayer.abtest&&HDN.dataLayer.abtest.experimentId||aps.abtest||aps.npabtest||[];
if(d.length>0){aps.cfg.abtestvar=aps.cfg.abtestvar.concat(d)
}if(aps.cfg.logToConsole){var b=new Date();
b.setTime(b.getTime()+(1000*24*60*60*1000));
var c="; expires="+b.toGMTString();
document.cookie="console=1"+c+"; path=/"
}if(window.location.search.indexOf("console=0")!==-1){var b=new Date();
b.setTime(b.getTime()+(60*1000));
var c="; expires="+b.toGMTString();
document.cookie="console=0"+c+"; path=/";
aps.cfg.logToConsole=false
}aps.cfg.source="Prod";
if(window.loadAd_UrlLocation.indexOf("dev.")>-1||aps.cfg.is.qa||aps.cfg.host.split(".")[0].startsWith("web")||aps.cfg.host=="127.0.0.1"||aps.cfg.host=="localhost"){aps.cfg.source="QA"
}if(aps.cfg.source=="QA"){aps.cfg.gaLog=false
}aps.registerEvent(aps.event.on_new_page,function(e){if(document.location.pathname.indexOf("/sponsored/")!==-1){aps.fn.logInfo("*Disabling bidders - sponsored content");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}if(aps.cfg.bid.excludedDomains.includes(e.domain)){aps.fn.logInfo("*Disabling bidders - excluded domains");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}if(aps.cfg.is.realmpage||aps.cfg.is.storystudio||aps.cfg.is.obits||aps.cfg.is.subscription||aps.cfg.host=="webcache.googleusercontent.com"){aps.fn.logInfo("Not Serving Ads");
aps.sitesWithoutCallback.push(aps.cfg.host);
aps.cfg.serveAds=false;
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false;
aps.cfg.logToConsole=false
}if(aps.cfg.is.projectPage||aps.cfg.is.kfs||aps.cfg.is.eedition||aps.cfg.is.authorPage||aps.cfg.host.startsWith("v7.comicskingdom.com")){aps.sitesWithoutCallback.push(aps.cfg.host)
}if(aps.cfg.is.qa&&aps.cfg.is.wcm){aps.sitesWithoutCallback.push(aps.cfg.host)
}})
})();(function(){if(aps.cfg.abtestvar.includes("ENG15462_V1")){aps.registerEvent(aps.event.on_new_page,function(b){aps.cfg.allAds.Crown.sizeMappings=aps.cfg.allAds.Crown.sizeMappings.filter(function(c){return !c.endsWith("001x002")
});
var a=document.createElement("div");
a.id="exit";
a.style="display:none;width:0px;height:0px;overflow:hidden";
document.body.appendChild(a);
aps.cfg.useExit=true
});
aps.registerEvent(aps.event.on_render_ad,function(a){if(aps.cfg.ads.exit.renderCount==1&&a.ad.getPage().requestNo>=2){aps.cfg.queuedAds.push("exit");
aps.fn.requestAds()
}})
}})();(function(){aps.cfg.waitingForRichie=aps.cfg.waitingForRichie||false;
if(APSpageUrl){if(aps.cfg.is.richie){googletag.cmd.push(function(){try{googletag.pubads().set("page_url",JuicePageUrl);
aps.fn.logInfo("Richie app: Setting page_url to "+JuicePageUrl)
}catch(b){}});
aps.fn.logInfo("Richie app: disabling modules");
if(document.location.href.indexOf("?appId=")==-1){aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}aps.cfg.excludeModules=["nlp","ab_testing","blueconic","PublisherProvidedId","permutive"];
if(typeof mraid=="undefined"){aps.fn.logInfo("mraid not present, not waiting for Richie");
aps.cfg.waitingForRichie=false
}else{aps.cfg.waitingForRichie=true;
aps.fn.logInfo("Richie app: enabling viewable trigger");
function a(b){if(b){aps.cfg.waitingForRichie=false;
aps.fn.logInfo("Richie app: viewable triggered")
}}mraid.addEventListener("viewableChange",a)
}}}})();(function(){aps.cfg.multi=aps.cfg.multi||{};
aps.cfg.multi.enabled=aps.cfg.multi.enabled||false;
aps.cfg.multi.availableTypes={};
if(aps.cfg.is.wcm){aps.cfg.multiAds["Inline"]=aps.cfg.allAds["Inline"];
aps.cfg.multiAds["LIST"]=aps.cfg.allAds["LIST"];
aps.cfg.multiAds["RB"]=aps.cfg.allAds["RB"];
aps.cfg.multiAds["SSHOW"]=aps.cfg.allAds["SSHOW"];
aps.cfg.multiAds["Box"]=aps.cfg.allAds["Box"]
}else{if(aps.cfg.is.leafsSite){aps.cfg.multiAds["A728"]=aps.cfg.allAds["A728"];
aps.cfg.multiAds["A300"]=aps.cfg.allAds["A300"];
aps.cfg.multiAds["B300"]=aps.cfg.allAds["B300"];
aps.cfg.multiAds["S300"]=aps.cfg.allAds["S300"];
aps.cfg.multiAds["Leaf1"]=aps.cfg.allAds["Leaf1"];
aps.cfg.multiAds["Leaf2"]=aps.cfg.allAds["Leaf2"];
aps.cfg.multiAds["Leaf3"]=aps.cfg.allAds["Leaf3"];
aps.cfg.multiAds["Leaf4"]=aps.cfg.allAds["Leaf4"];
aps.cfg.multiAds["MAD"]=aps.cfg.allAds["MAD"]
}else{if(aps.cfg.is.greenstate){aps.cfg.multiAds["Inline"]=aps.cfg.allAds["Inline"];
aps.cfg.multiAds["RB"]=aps.cfg.allAds["RB"];
aps.cfg.multiAds["AP300"]=aps.cfg.allAds["AP300"]
}}}aps.registerEvent(aps.event.on_ad_definition_loaded,function(){if(!aps.cfg.serveAds){return
}aps.cfg.multi.createMultiAds();
Object.entries(aps.cfg.multiAds).forEach(function(d){if((!aps.cfg.juiceDirect&&!aps.cfg.juiceCustom)||aps.cfg.adMap.includes(d[0])){if(aps.cfg.ads[d[0]]){aps.cfg.bid.prefetch.checkMultiAd(aps.cfg.ads[d[0]])
}}});
var b=["Crown","Flex1"];
var c=aps.cfg.adMap.filter(function(d){return !b.includes(d)
});
var a=aps.cfg.adMap.filter(function(d){return b.includes(d)
});
aps.cfg.adMap=a.concat(c);
aps.cfg.adMap.forEach(function(e){var d=aps.cfg.ads[e];
if(!d){aps.logInfo(e+" not found!");
aps.cfg.adMap=aps.cfg.adMap.filter(function(f){return f!=e
});
return
}d.checkForInclude={addAdSlot:false,stop:false};
aps.fireEvent(aps.event.on_check_include_ad,d);
if(!d.checkForInclude.stop){d.checkForInclude.addAdSlot=true
}if(d.checkForInclude.addAdSlot){aps.cfg.queuedAds.push(e)
}})
});
aps.registerEvent(aps.event.on_render_ad,function(a){if(!aps.cfg.bid.enabled){return
}aps.cfg.bid.prefetch.checkMultiAd(a.ad)
});
aps.cfg.multi.createMultiAds=function(){Object.entries(aps.cfg.multiAds).forEach(function(c){var b=aps.cfg.multiAds[c[0]];
if((!aps.cfg.juiceDirect&&!aps.cfg.JuiceCustom)||aps.cfg.adMap.includes(c[0])){var a=aps.cfg.ads[b.code]||new aps.o.gamAd(b.code,b.width,b.height,b.sizeMappings);
aps.cfg.multi.availableTypes[b.code]=a
}})
};
aps.cloneAdMulti=function(c){if(aps.cfg.ads[c]){return
}var a=c.split("-")[0];
var b=aps.cfg.ads[a];
if(b.code==undefined){return
}var d=new aps.o.gamAd(c,b.width,b.height,b.sizeMappings);
d.batchRequest=""
};
aps.showLIST=function(b){if((JSON.stringify(b)=="[null]"||JSON.stringify(b)=="[]")&&!aps.cfg.dfp.isWaiting){aps.fn.logInfo("showLIST: Called with empty array");
return
}aps.cfg.multi.enabled=true;
var a=[];
b.forEach(function(f){var e="";
var g=f.id.split("-");
var d=true;
if(g.length==1){aps.fn.logInfo("showLIST: Base ad "+g[0]+" won't be re-created");
d=false
}e=g[0];
if(aps.cfg.multi.availableTypes[e]==undefined){aps.fn.logInfo("showLIST: This type of LIST ad is not supported");
d=false
}if(d){var c=aps.cfg.ads[f.id];
if(!c){aps.cloneAdMulti(f.id);
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[f.id]);
c=aps.cfg.ads[f.id]
}if(!c.div){c.div=f;
aps.fireEvent(aps.event.on_new_div,f)
}a.push(f.id)
}});
aps.cfg.lazyLoadingForced=aps.cfg.lazyLoadingForced||false;
if(aps.cfg.lazyLoadingForced||(b.length>5&&aps.cfg.queuedAds.length>0)){if(!aps.cfg.lazyLoadingForced){aps.cfg.ivm.options.rootMargin="200px 0px 1000px 0px";
aps.cfg.ivm.options.delayBeforeDelete=3000;
aps.cfg.lazyLoadingForced=true;
aps.fn.logInfo("showLIST: LazyLoading of ads forced");
aps.fn.logInfo("*IVM* delayBeforeDelete : 3000");
aps.fn.logInfo("*IVM* rootMargin : "+aps.cfg.ivm.options.rootMargin);
aps.cfg.bid.prefetch.allBidsOnRefresh=true;
aps.cfg.bid.prefetch.delay=3000;
aps.cfg.bid.excludedBidders=[];
if(aps.cfg.bid.excludedBidders.length>0){aps.cfg.bid.excludedBids.push(["aps.cfg.bid.excludedBidders.includes(bidder)","triplelift excluded, too many ads"]);
aps.cfg.bid.pb.bidders=aps.cfg.bid.pb.bidders.filter(function(c){return !aps.cfg.bid.excludedBidders.includes(c)
});
aps.cfg.bid.pb.biddersCount=aps.cfg.bid.pb.bidders.length;
aps.cfg.bid.excludedBidders.forEach(function(c){aps.cfg.bid.pb.data[c]={extra:aps.cfg.bid.pb.data[c].extra}
});
Object.entries(aps.cfg.ads).forEach(function(c){c[1].pb.bids=c[1].pb.bids.filter(function(d){return !aps.cfg.bid.excludedBidders.includes(d.bidder)
})
})
}}aps.fn.logInfo("showLIST: Ready MULTI slots: "+a)
}else{aps.fn.logInfo("showLIST: Calling MULTI slots: "+a);
a.forEach(function(c){aps.cfg.queuedAds.push(c)
})
}setTimeout(aps.fn.waitToCallGAM,200)
}
})();(function(){if(aps.cfg.is.wcm||aps.cfg.is.kfs||aps.cfg.is.platypus||aps.cfg.is.greenstate||aps.cfg.is.eedition){aps.fn.logInfo("IVM Enabling In-View ad Management");
aps.cfg.ivm={autoRefresh:{enabled:false,inViewOnly:true,viewableDelay:25000,},observed:[],observer:null,delayBeforeDelete:5000,options:{root:null,rootMargin:"200px 0px 1000px 0px",thresholds:0,},appendToObserver:function(a){if(!a||a.id==""||a.id=="NTV7ARD"){return
}if(!aps.cfg.ivm.observed.includes(a.id)){aps.cfg.ivm.observed.push(a.id);
aps.cfg.ivm.observer.observe(a);
aps.logInfo("*IVM* observing "+a.id)
}},callback:function(a){a.forEach(function(c){var b=aps.cfg.ads[c.target.id];
if(!b){return
}if(b.div==null){b.div=document.getElementById(b.code)
}var d=c.isIntersecting;
var e=b.getPage();
b.div.dataset.inview=d;
if(b.doNotRefresh){return
}if(c.isIntersecting){aps.fn.tagAd(b);
aps.fn.logInfo("*IVM* "+b.code+" in view");
if(b.state=="toDelete"){b.state="displayed"
}else{if((b.state==null&&aps.cfg.lazyLoadingForced)||b.state=="cancelled"){b.state="firstLoad";
aps.fn.logInfo("*IVM* "+b.code+" loading");
b.impressionViewable=true;
aps.fn.refreshAds([b.code])
}else{if(b.state=="deleted"||b.state=="reloading"){b.state="reloading";
aps.fn.logInfo("*IVM* "+b.code+" reloading");
b.impressionViewable=true;
aps.fn.refreshAds([b.code])
}}}}else{if(b.renderCount>1){aps.fn.logInfo("*IVM* "+b.code+" out of view");
if(aps.cfg.ivm.delayBeforeDelete>0){b.state="toDelete";
b.ivm=new Date().valueOf()
}}}})
}};
if(aps.cfg.is.platypus){if(aps.cfg.host=="www.sfgate.com"){aps.cfg.ivm.delayBeforeDelete=5000
}else{aps.cfg.ivm.delayBeforeDelete=120000
}}if(window.juice&&window.juice.ivm){if(window.juice.ivm.rootMargin){aps.cfg.ivm.options.rootMargin=window.juice.ivm.rootMargin
}if(window.juice.ivm.autoRefresh){aps.cfg.ivm.autoRefresh=window.juice.autoRefresh
}}aps.cfg.ivm.observer=new IntersectionObserver(aps.cfg.ivm.callback,aps.cfg.ivm.options);
if(window.juice&&juice.definedTags&&juice.definedTags.ads){juice.definedTags.ads.forEach(function(a){var b=document.getElementById(a.code);
if(b){aps.cfg.ivm.appendToObserver(b)
}})
}if(aps.cfg.is.greenstate){aps.cfg.ivm.autoRefresh.enabled=true;
aps.cfg.lazyLoadingForced=true
}aps.registerEvent(aps.event.on_before_request_ads,function(a){a.ads.forEach(function(c){var b=document.getElementById(c);
aps.cfg.ivm.appendToObserver(b)
})
});
aps.registerEvent(aps.event.on_new_div,function(a){aps.cfg.ivm.appendToObserver(a)
});
aps.registerEvent(aps.event.on_timer,function(d){var c=new Date().valueOf();
var e=document.visibilityState=="visible";
if(!e&&aps.cfg.ivm.tabHasFocus){aps.fn.logInfo("*IVM* tab has lost focus")
}if(e&&!aps.cfg.ivm.tabHasFocus){aps.fn.logInfo("*IVM* tab has focus")
}aps.cfg.ivm.tabHasFocus=e;
var b=c-aps.cfg.ivm.delayBeforeDelete;
var a=[];
Object.entries(aps.cfg.ads).forEach(function(h){var f=h[1];
if(f.state=="toDelete"){if(f.ivm<b&&!f.doNotRefresh){f.state="deleted";
f.advertiserId=null;
f.advertiser=null;
var g=document.getElementById(f.code);
if(g){g.style.minHeight=g.clientHeight+"px";
g.innerHTML="";
aps.fn.logInfo("*IVM* "+f.code+" deleted")
}}}if(aps.cfg.ivm.autoRefresh.enabled&&aps.cfg.ivm.tabHasFocus){if(f.renderedAt!=null&&!f.doNotRefresh){var i=false;
if((aps.cfg.ivm.autoRefresh.inViewOnly&&f.div.dataset.inview=="true")||!aps.cfg.ivm.autoRefresh.inViewOnly){if(f.state=="displayed"){if(f.viewableAt!=null&&c>=(f.viewableAt+aps.cfg.ivm.autoRefresh.viewableDelay)){i=true
}}}if(i&&f.state!="reloading"){f.state="reloading";
f.impressionViewable=true;
f.renderedAt=null;
f.viewableAt=null;
a.push(f.code)
}}}});
if(a.length>0){aps.fn.logInfo("*IVM* auto refresh "+a);
aps.fn.refreshAds(a)
}})
}})();(function(){if(aps.cfg.is.kfs){aps.cfg.lazyLoadingForced=true;
aps.cfg.ivm.autoRefresh.enabled=true;
aps.cfg.ivm.delayBeforeDelete=-1;
aps.cfg.excludeModules.push("criteo","ix");
if(aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget){aps.cfg.excludeModules.push("optimeraRTD")
}if(typeof window.juice=="undefined"){window.juice={};
window.juice.definedTags={ads:[{code:"cmn-leaderboard"},{code:"cmn-leaderboard_2"},{code:"cmn-feed-inline_0"},{code:"cmn-aside_0"},{code:"cmn-tile-square"},{code:"side-by-side_ad-left_varying-1"},{code:"side-by-side_ad-right_varying-1"},{code:"side-by-side_ad-left_varying-2"},{code:"side-by-side_ad-right_varying-2"},{code:"inline-ad-slot-404"},{code:"inline-ad-slot-1"},{code:"inline-ad-slot-2"},{code:"inline-ad-slot-3"},{code:"mad"},]}
}aps.fn.defineBaseAds=function(){aps.cfg.allAds=[];
new aps.o.baseAd("cmn-leaderboard",728,90,["0996x728x90","0996x970x90","0996x970x250","0996x620x366","0996x336x280","0996x320x100","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250"]);
new aps.o.baseAd("cmn-leaderboard_2",728,90,["0996x728x90","0996x970x90","0996x970x250","0996x620x366","0996x336x280","0996x320x100","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250"]);
new aps.o.baseAd("cmn-feed-inline_0",300,250,["0001x300x250"]);
new aps.o.baseAd("cmn-aside_0",300,250,["0001x300x250"]);
new aps.o.baseAd("cmn-tile-square",300,250,["0001x300x250"]);
new aps.o.baseAd("side-by-side_ad-left_varying-1",300,250,["0001x300x250"]);
new aps.o.baseAd("side-by-side_ad-right_varying-1",300,250,["0650x300x250"]);
new aps.o.baseAd("side-by-side_ad-left_varying-2",300,250,["0001x300x250"]);
new aps.o.baseAd("side-by-side_ad-right_varying-2",300,250,["0650x300x250"]);
if(window.current_device==devices.MOBILE){new aps.o.baseAd("mad",320,50,["0001x320x50","0001x300x50","0650x000x000"])
}if(juice.definedTags&&juice.definedTags.ads){Object.entries(juice.definedTags.ads).forEach(function(b){if(b[1].code.startsWith("inline-ad-slot-")){new aps.o.baseAd(b[1].code,300,250,["0001x300x250"])
}else{var c=b[1].code;
var f=b[1].width||aps.cfg.allAds[c].width;
var d=b[1].height||aps.cfg.allAds[c].height;
var e=b[1].sizeMappings||aps.cfg.allAds[c].sizeMappings;
new aps.o.baseAd(b[1].code,f,d,e)
}})
}};
aps.fn.defineBaseAds();
if(aps.cfg.is.kfsWidget){aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"kingfeatures.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"kingfeatures.com_728x90_AD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"kingfeatures.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("kingfeatures.com_300x250_AD@300x250","kingfeatures.com_300x250_AM@300x250")},},};
aps.cfg.bid.pb.data.pubmatic.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.pubmatic.extra.run=prebid_source.SERVER_COMPATIBLE
}if(aps.cfg.is.kfs&&!aps.cfg.is.kfsWidget&&window.current_device!==devices.MOBILE){new aps.o.baseAd("oop",1,1,["0001x001x001"]);
var a=document.createElement("div");
a.id="oop";
a.width="1px";
a.height="1px";
document.body.appendChild(a)
}window.addEventListener("hnp_spaNewPage",function(b){aps.pageWidth=window.innerWidth||window.screen.width||window.width||-1;
Object.entries(aps.cfg.ads).forEach(function(c){if(aps.cfg.ivm.observed.includes(c[0])){aps.cfg.ivm.observer.unobserve(c[1].div);
c[1].div.innerHTML=""
}if(c[1].gam){googletag.destroySlots([c[1].gam])
}});
aps.cfg.ivm.observed=[];
aps.fn.hideAdDetails();
aps.fn.startFirstPage();
delete window.definedTags;
aps.cfg.adMap=[];
aps.cfg.ads=[];
delete aps.page;
aps.cfg.adDefinitionLoaded=false;
aps.fn.defineBaseAds();
aps.fn.defineDefaultAds();
aps.page=definedTags;
aps.cfg.adDefinitionLoaded=true;
aps.fireEvent(aps.event.on_ad_definition_loaded,{})
})
}})();(function(){if(aps.cfg.is.greenstate){aps.registerEvent(aps.event.on_timer,function(){Object.entries(aps.cfg.multiAds).forEach(function(c){var d=document.querySelectorAll('[id^="'+c[0]+'"]');
d.forEach(function(e){if(e.id.endsWith("dbg")){return
}if(aps.cfg.ivm.observed.includes(e.id)){return
}hearstPlaceAd(e.id)
})
});
if(!aps.cfg.ivm.observed.includes("AP300")){var b=document.getElementById("AP300--1");
if(b){b.id="AP300";
hearstPlaceAd("AP300")
}}if(!aps.cfg.ivm.observed.includes("MAD")){var a=document.getElementById("AGS_MAD");
if(a){a.id="MAD";
hearstPlaceAd("MAD")
}}});
aps.registerEvent(aps.event.on_define_adUnit,function(b){var c=b.page;
var a=b.adUnit;
a.levelTwo.value="Homepage";
if(c.path.length>0){if(c.path.length==1){a.levelTwo.value="channel"
}else{a.levelTwo.value="article"
}}a.levelTwo.forced=true
});
aps.registerEvent(aps.event.on_new_page,function(a){a.datalayer.content.keyNlpCategories=["cannabis"];
if(a.path.length==0){a.page_type2="homepage"
}else{if(a.path.length==1){a.page_type2="channel"
}else{a.page_type2="article"
}if(["news","explained","lifestyle","perspective","health","food-drink","travel","arts"].includes(a.path[0])){a.sectionPath.push(a.path[0]);
a.addPageKvp("section3",a.path[0])
}}a.addPageKvp("page_type2",a.page_type2,true)
})
}})();(function(){if(aps.cfg.is.platypus){aps.pageWidth=window.innerWidth;
window.current_device=(aps.pageWidth<768)?devices.MOBILE:devices.DESKTOP;
aps.cfg.lazyLoadingForced=true;
var a=2;
if(aps.cfg.abtestvar.includes("ENG13594_V1")){aps.logInfo("ENG13594 - enabling autoRefresh");
aps.cfg.ivm.autoRefresh.enabled=true;
aps.cfg.ivm.autoRefresh.viewableDelay=30000
}aps.cfg.platScreenSize=window.HDN.dataLayer.ads.screenSize;
aps.fn.setPlatAds=function(){var b=document.querySelectorAll('[data-block-type="ad"]');
if(b.length>0){aps.cfg.platypusAdUnit=b[0].dataset.unit.split("/")[1];
if(document.location.pathname=="/"){aps.cfg.platypusAdUnit="homepage"
}}b.forEach(function(c){if(c.dataset[aps.cfg.platScreenSize+"Id"]){c.id=c.dataset[aps.cfg.platScreenSize+"Id"]
}aps.cfg.ivm.appendToObserver(c)
})
};
aps.fn.setPlatAds();
aps.registerEvent(aps.event.on_before_define_adUnit,function(b){b.levelTwo.value=aps.cfg.platypusAdUnit;
b.levelTwo.forced=true
});
window.addEventListener("hnp_spaNewPage",function(c){Object.entries(aps.cfg.ads).forEach(function(d){if(aps.cfg.ivm.observed.includes(d[0])){aps.cfg.ivm.observer.unobserve(d[1].div);
d[1].div.innerHTML=""
}if(d[1].gam){googletag.destroySlots([d[1].gam])
}});
aps.cfg.ivm.observed=[];
aps.fn.hideAdDetails();
googletag.cmd.push(function(){googletag.setAdIframeTitle("3rd party ad content page "+a++)
});
aps.cfg.allAds=[];
delete window.definedTags;
aps.cfg.adMap=[];
aps.cfg.ads=[];
delete aps.page;
aps.cfg.adDefinitionLoaded=false;
aps.cfg.juiceMdUrlHash=HDN.dataLayer.visit.urlHash;
delete aps.cfg.revenueProfile;
aps.fn.defineBaseAds();
var b=document.querySelectorAll('[data-block-type="ad"]');
if(b.length>0){aps.cfg.platypusAdUnit=b[0].dataset.unit.split("/")[1];
if(document.location.pathname=="/"){aps.cfg.platypusAdUnit="homepage"
}}aps.fn.startFirstPage();
aps.fn.setPlatAds();
aps.fn.defineDefaultAds();
aps.page=definedTags;
aps.cfg.adDefinitionLoaded=true;
aps.fireEvent(aps.event.on_ad_definition_loaded,{})
})
}})();(function(){aps.fn.getHDNnlpWithId=function(e,g,d){var f=[];
try{var a=e.datalayer.content["keyNlp"+g];
for(var c=0;
c<a.length;
c++){if(c<10){f.push(d+"_"+a[c].trim())
}}}catch(b){}return f
};
aps.registerEvent(aps.event.on_new_page,function(d){try{var a=[];
var f=d.datalayer.content.keyNlpCategories||[];
f=f.map(function(g){if(g.startsWith("/")){return g.substring(1)
}return g
});
d.addPageKvp("nlp",f);
var b=[];
var e=d.datalayer.source.authorName;
if(e.length>0){b=b.concat("a_"+e)
}e=aps.fn.getHDNnlpWithId(d,"ConsumerGood","g");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Event","e");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Location","l");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Organization","o");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Person","p");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Unknown","u");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"WorkOfArt","w");
if(e.length>0){b=b.concat(e)
}d.addPageKvp("nlp_entities",b)
}catch(c){aps.fn.logInfo("nlp_categories: exception")
}})
})();(function(){aps.hash=aps.hash||{};
aps.codec=aps.codec||{};
aps.bitArray={bitSlice:function(b,d,c){b=aps.bitArray._shiftRight(b.slice(d/32),32-(d&31)).slice(1);
return(c===undefined)?b:aps.bitArray.clamp(b,c-d)
},extract:function(b,d,c){var f,e=Math.floor((-d-c)&31);
if((d+c-1^d)&-32){f=(b[d/32|0]<<(32-e))^(b[d/32+1|0]>>>e)
}else{f=b[d/32|0]>>>e
}return f&((1<<c)-1)
},concat:function(a,b){if(a.length===0||b.length===0){return a.concat(b)
}var c=a[a.length-1],d=aps.bitArray.getPartial(c);
if(d===32){return a.concat(b)
}else{return aps.bitArray._shiftRight(b,d,c|0,a.slice(0,a.length-1))
}},bitLength:function(b){var c=b.length,d;
if(c===0){return 0
}d=b[c-1];
return(c-1)*32+aps.bitArray.getPartial(d)
},clamp:function(b,d){if(b.length*32<d){return b
}b=b.slice(0,Math.ceil(d/32));
var c=b.length;
d=d&31;
if(c>0&&d){b[c-1]=aps.bitArray.partial(d,b[c-1]&2147483648>>(d-1),1)
}return b
},partial:function(b,c,a){if(b===32){return c
}return(a?c|0:c<<(32-b))+b*1099511627776
},getPartial:function(a){return Math.round(a/1099511627776)||32
},equal:function(c,d){if(aps.bitArray.bitLength(c)!==aps.bitArray.bitLength(d)){return false
}var f=0,e;
for(e=0;
e<c.length;
e++){f|=c[e]^d[e]
}return(f===0)
},_shiftRight:function(b,g,c,f){var d,e=0,h;
if(f===undefined){f=[]
}for(;
g>=32;
g-=32){f.push(c);
c=0
}if(g===0){return f.concat(b)
}for(d=0;
d<b.length;
d++){f.push(c|b[d]>>>g);
c=b[d]<<(32-g)
}e=b.length?b[b.length-1]:0;
h=aps.bitArray.getPartial(e);
f.push(aps.bitArray.partial(g+h&31,(g+h>32)?c:f.pop(),1));
return f
},_xor4:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]
},byteswapM:function(b){var c,e,d=65280;
for(c=0;
c<b.length;
++c){e=b[c];
b[c]=(e>>>24)|((e>>>8)&d)|((e&d)<<8)|(e<<24)
}return b
}};
aps.codec.hex={fromBits:function(a){var c="",b;
for(b=0;
b<a.length;
b++){c+=((a[b]|0)+263882790666240).toString(16).substr(4)
}return c.substr(0,aps.bitArray.bitLength(a)/4)
},toBits:function(d){var a,c=[],b;
d=d.replace(/\s|0x/g,"");
b=d.length;
d=d+"00000000";
for(a=0;
a<d.length;
a+=8){c.push(parseInt(d.substr(a,8),16)^0)
}return aps.bitArray.clamp(c,b*4)
}};
aps.hash.sha256=function(a){if(!this._key[0]){this._precompute()
}if(a){this._h=a._h.slice(0);
this._buffer=a._buffer.slice(0);
this._length=a._length
}else{this.reset()
}};
aps.codec.utf8String={fromBits:function(a){var d="",b=aps.bitArray.bitLength(a),c,e;
for(c=0;
c<b/8;
c++){if((c&3)===0){e=a[c/4]
}d+=String.fromCharCode(e>>>8>>>8>>>8);
e<<=8
}return decodeURIComponent(escape(d))
},toBits:function(c){c=unescape(encodeURIComponent(c));
var b=[],a,d=0;
for(a=0;
a<c.length;
a++){d=d<<8|c.charCodeAt(a);
if((a&3)===3){b.push(d);
d=0
}}if(a&3){b.push(aps.bitArray.partial(8*(a&3),d))
}return b
}};
aps.hash.sha256.hash=function(a){return(new aps.hash.sha256()).update(a).finalize()
};
aps.hash.sha256.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);
this._buffer=[];
this._length=0;
return this
},update:function(e){if(typeof e==="string"){e=aps.codec.utf8String.toBits(e)
}var f,a=this._buffer=aps.bitArray.concat(this._buffer,e),k=this._length,h=this._length=k+aps.bitArray.bitLength(e);
if(h>9007199254740991){throw ("Cannot hash more than 2^53 - 1 bits")
}if(typeof Uint32Array!=="undefined"){var d=new Uint32Array(a);
var g=0;
for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(d.subarray(16*g,16*(g+1)));
g+=1
}a.splice(0,16*g)
}else{for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(a.splice(0,16))
}}return this
},finalize:function(){var d,a=this._buffer,c=this._h;
a=aps.bitArray.concat(a,[aps.bitArray.partial(1,1)]);
for(d=a.length+2;
d&15;
d++){a.push(0)
}a.push(Math.floor(this._length/4294967296));
a.push(this._length|0);
while(a.length){this._block(a.splice(0,16))
}this.reset();
return c
},_init:[],_key:[],_precompute:function(){var c=0,e=2,a,d;
function b(f){return(f-Math.floor(f))*4294967296|0
}for(;
c<64;
e++){d=true;
for(a=2;
a*a<=e;
a++){if(e%a===0){d=false;
break
}}if(d){if(c<8){this._init[c]=b(Math.pow(e,1/2))
}this._key[c]=b(Math.pow(e,1/3));
c++
}}},_block:function(t){var q,s,c,d,e=this._h,r=this._key,f=e[0],g=e[1],j=e[2],l=e[3],m=e[4],n=e[5],o=e[6],p=e[7];
for(q=0;
q<64;
q++){if(q<16){s=t[q]
}else{c=t[(q+1)&15];
d=t[(q+14)&15];
s=t[q&15]=((c>>>7^c>>>18^c>>>3^c<<25^c<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+t[q&15]+t[(q+9)&15])|0
}s=(s+p+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(o^m&(n^o))+r[q]);
p=o;
o=n;
n=m;
m=l+s|0;
l=j;
j=g;
g=f;
f=(s+((g&j)^(l&(g^j)))+(g>>>2^g>>>13^g>>>22^g<<30^g<<19^g<<10))|0
}e[0]=e[0]+f|0;
e[1]=e[1]+g|0;
e[2]=e[2]+j|0;
e[3]=e[3]+l|0;
e[4]=e[4]+m|0;
e[5]=e[5]+n|0;
e[6]=e[6]+o|0;
e[7]=e[7]+p|0
}}
})();(function(){if(!aps.cfg.serveAds){return
}if(!aps.cfg.is.platypus){aps.fn.setPerformanceMetrics("GoogleLoadingStart","loading google");
aps.fn.insertScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js",true,"text/javascript","gdfp")
}aps.cfg.ppid="";
var a=aps.fn.getCookie("BCSessionID");
if(a!=""){aps.cfg.ppid=aps.codec.hex.fromBits(aps.hash.sha256.hash(a));
aps.fn.logInfo("PublisherProvidedId: "+a+" hash: "+aps.cfg.ppid)
}else{aps.fn.logInfo("PublisherProvidedId: BCSessionID not detected")
}googletag.cmd.push(function(){aps.fn.setPerformanceMetrics("GoogleLoaded","google ready");
googletag.pubads().collapseEmptyDivs(false);
googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().setPrivacySettings({childDirectedTreatment:false});
googletag.pubads().set("page_url",document.location.href);
googletag.enableServices();
try{var c=JSON.parse(aps.fn.getCookie("location_data"));
if(c.is_eu){aps.cfg.disablePersonalisation=true
}}catch(b){}if(aps.cfg.disablePersonalisation){aps.fn.logInfo("disabling personalizedAds");
googletag.pubads().setRequestNonPersonalizedAds(1)
}if(aps.cfg.ppid!=""){googletag.pubads().setPublisherProvidedId(aps.cfg.ppid)
}googletag.pubads().addEventListener("slotRenderEnded",function(d){if(typeof d.slot.getSlotId!="undefined"){if(typeof d.slot.getSlotId().getDomId!="undefined"){aps.fn.onRender(d)
}}});
googletag.pubads().addEventListener("impressionViewable",function(f){if(typeof f.slot.getSlotId!="undefined"){var e=f.slot.getSlotId().getDomId();
if(typeof(e)!="undefined"){aps.fn.setPerformanceMetrics("FirstAdViewable","*VIEW "+e);
var d=aps.cfg.ads[e];
if(d){d.impressionViewable=true;
d.viewableAt=new Date().valueOf()
}}}});
aps.fn.requestAds()
});
window.hearstGetVideoAdTagSize=function(b){var f="";
if(b.sizeMappings!=undefined&&b.sizeMappings.length>0){var e=[];
for(var d=0;
d<b.sizeMappings.length;
d++){var c=b.sizeMappings[d].split("x");
if(parseInt(c[1],10)>1&&parseInt(c[2],10)>4){e.push(parseInt(c[1],10)+"x"+parseInt(c[2],10))
}}f="?sz="+e.join("%7C")
}else{f="?sz="+encodeURIComponent(b.width+"x"+b.height)
}return f
};
window.hearstGetVideoAdTag=function(c){if(aps.cfg.videoAdTag==null){aps.cfg.videoAdTag={width:1,height:4,code:"Video_MOS",rm:false,interstitial:false,sizeMappings:["001x400x300","001x640x360","001x640x480","001x001x004"],video:true,companion_units:null,kvps:[],}
}var b=aps.cfg.videoAdTag;
if(typeof(b)=="undefined"){aps.fn.logInfo("hearstGetVideoAdTag called with non-defined ad slot "+c+" : ignoring ");
return null
}if(b.video==false){aps.fn.logInfo("hearstGetVideoAdTag called non video defined ad slot "+c);
return null
}var g=hearstGetVideoAdTagSize(b);
var h="https://pubads.g.doubleclick.net/gampad/ads";
h+=g;
h+="&iu=/"+encodeURIComponent(aps.cfg.networkCode+"/"+aps.cfg.page.current.adUnit);
h+="&url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
h+="&impl=s";
h+="&gdfp_req=1";
h+="&env=vp";
h+="&output=xml_vast3";
h+="&page_type="+aps.cfg.page.current.page_type2;
h+="&unviewed_position_start=1";
h+="&description_url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
h+="&vpos=preroll";
h+="&ad_safe=medium";
if(b.companion_units!=null&&b.companion_units!=""){h+="&ciu_szs="+encodeURIComponent(b.companion_units)
}else{h+="&ciu_szs="
}var d="";
d+="distributor_domain=";
if(aps.cfg.page.current.domain.indexOf("m.")==0){d+=aps.cfg.page.current.domain.substr(2)
}else{d+=aps.cfg.page.current.domain
}d+="&page_type2="+aps.cfg.page.current.page_type2;
d+="&pageurl="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
d+="&referrer="+encodeURIComponent(document.referrer);
d+="&urlhash="+aps.cfg.juiceMdUrlHash;
d+="&pw=__player-width__&ph=__player-height__";
d+=(aps.cfg.vid.tagUrl=="")?"":"&"+aps.cfg.vid.tagUrl;
for(var e=0;
e<aps.cfg.page.kvps.length;
e++){var f=aps.cfg.page.kvps[e];
d+="&"+f.key+"="+f.value
}for(var e=0;
e<aps.cfg.page.current.kvps.length;
e++){var f=aps.cfg.page.current.kvps[e];
d+="&"+f.key+"="+f.value
}for(var e=0;
e<b.kvps.length;
e++){var f=b.kvps[e];
d+="&"+f.key+"="+f.value
}aps.cfg.adtest[b.code]=aps.cfg.adtest[b.code]||[];
for(var e=0;
e<aps.cfg.adtest[b.code].length;
e++){var f=aps.cfg.adtest[b.code][e];
d+="&"+f.key+"="+f.value
}if(d.length>0){h+="&cust_params="+encodeURIComponent(d)
}h+="&correlator="+new Date().getTime();
aps.fn.logInfo("hearstGetVideoAdTag:"+h);
return h
};
window.defineTags=function(){};
window.hearstPlaceAd=function(c){var b=aps.cfg.ads[c];
var d=document.getElementById(c);
if(d&&b&&b.div==null){aps.fireEvent(aps.event.on_new_div,d)
}aps.fn.logInfo("hearstPlaceAd "+c)
};
window.hearstRefreshAds=function(){if(aps.cfg.abtestvar.includes("ENG13594_V1")){aps.logInfo("ENG13594_V1 enabled - hearstRefreshAds disabled");
return
}var d=[];
var b=[];
if(arguments.length==1){b=arguments[0]
}else{Object.entries(aps.cfg.ads).map(function(e){if(!e[1].exclude&&e[1].refreshable&&!e[1].doNotRefresh){b.push(e[0])
}})
}if(arguments.length==0){aps.fn.logInfo("hearstRefreshAds called : (all refreshable slots) "+b.join(", "))
}else{aps.fn.logInfo("hearstRefreshAds called : "+b)
}var c=(aps.cfg.ivm&&arguments.length==1)?false:true;
if(debugSGA){c=false
}if(c&&!document.hasFocus()){aps.fn.logInfo("hearstRefreshAds: Tab does not have focus - skipped");
return
}aps.fn.refreshAds(b)
};
window.hearstRefreshInterstitialAds=function(b){var c=[];
if(!Array.isArray(b)){b=[b]
}aps.fn.logInfo("hearstRefreshInterstitialAds called: "+b.join(", "));
b.forEach(function(e){var d=aps.cfg.ads[e];
if(e=="EEinsert"){if(!aps.cfg.ads["EEinsert"]){aps.logInfo("EEinsert not defined")
}else{c.push(e)
}return
}if(!d){aps.fn.logSkip(e+" not defined");
return
}if(!d.interstitial){aps.fn.logSkip(d.code+" not an interstitial ad");
return
}if(d.isLoading==true&&d.code!="EEinsert"){aps.fn.logInfo("skipping refresh of "+d.code+" .  It has not completed last request.");
return
}if(aps.cfg.refreshViewableOnly&&!d.impressionViewable&&d.code!="EEinsert"){aps.fn.logInfo("skipping refresh of interstitial "+d.code+" .  It is not viewable.")
}else{aps.fn.logInfo("hearstRefreshInterstitialAds: refreshing "+d.code);
c.push(d.code)
}});
if(c.length<=0){aps.fn.logInfo("hearstRefreshInterstitialAds: No ads are in refreshable state - skipping refresh");
return
}aps.fn.logInfo("hearstRefreshInterstitialAds: refreshing ad slots "+c);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(c);
aps.fn.requestAds()
};
aps.fn.contentLoaded(window,aps.fn.domLoaded)
})();(function(){aps.fn.startFirstPage=function(){aps.cfg.page=new aps.o.base();
aps.fn.getPageInfo=function(b,a){var b=b||aps.fn.getFilteredHref(document.location.href);
var e=aps.cfg.page;
if(!e.urls.includes(b)){var d=new aps.o.page(b,[],a);
e.allPages.push(d);
e.urls.push(b);
if(!e.current){e.current=d;
e.currentIndex=0;
aps.logInfo("Changing current URL to "+b);
if(aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget){e.current.domain="kingfeatures.com"
}if(e.current.domain=="comicskingdom.net"){e.current.domain="comicskingdom.com"
}aps.cfg.current_domain=e.current.domain
}else{e.next=d;
if(aps.cfg.is.wcm){if(!e.next.scrollDepth){e.next.scrollDepth=aps.cfg.page.urls.length-1
}}if(aps.cfg.is.leafsSite){e.next.scrollDepth=aps.cfg.page.urls.length-1
}}}else{var c=e.urls.indexOf(b);
e.currentIndex=c;
e.current=e.allPages[c]
}};
aps.fn.getPageInfo();
JuicePageUrl=aps.cfg.page.current.href.replace("/?","?");
if(aps.cfg.page.current.domain=="ctinsider.com"){aps.cfg.page.addBaseKvp("sect","ctinsider")
}if(aps.cfg.abtestvar.length>0){aps.fn.logInfo("npabtest : "+aps.cfg.abtestvar);
aps.cfg.abtestvar.forEach(function(a){aps.cfg.page.addBaseKvp("ab",a);
aps.cfg.page.addBaseKvp("hnpab",a);
if(a=="ENG10993_C"){aps.cfg.bid.enableOptimization=false
}})
}else{aps.fn.logInfo("npabtest not detected.")
}aps.cfg.page.addBaseKvp("v",aps.cfg.version)
};
aps.fn.startFirstPage()
})();(function(){aps.cfg.thirdp={"permutive":0,"tmt":0,"a9":0,"identityhub":0,"prebid":0,};
var setAll=-1;
if(aps.cfg.page.current.queryParameter["jtp[*]"]==1){setAll=1
}if(aps.cfg.page.current.queryParameter["jtp[*]"]==0){setAll=0
}Object.entries(aps.cfg.thirdp).forEach(function(entry){if(setAll>-1){aps.cfg.thirdp[entry[0]]=setAll
}if(aps.cfg.page.current.queryParameter["jtp["+entry[0]+"]"]){aps.cfg.thirdp[entry[0]]=eval(aps.cfg.page.current.queryParameter["jtp["+entry[0]+"]"])
}});
if(aps.cfg.thirdp.prebid){aps.cfg.page.current.pbBidsReceived=1
}if(aps.cfg.thirdp.a9){aps.cfg.page.current.a9BidsReceived=1
}})();(function(){if(!aps.cfg.serveAds){return
}if(aps.cfg.thirdp.permutive){return
}if(aps.cfg.is.eedition){return
}if(!aps.fn.shouldRunThirdParty("permutive")){return
}aps.cfg.permutive=aps.cfg.permutive||{};
aps.cfg.permutive.excludedFrom=["www.sfgate.com/partner/transparensee","www.mysanantonio.com/partner/transparensee","www.timesunion.com/partner/transparensee","https://realestate.timesunion.com/"];
aps.cfg.permutive.setPermutiveValue=function(page,arrToTest){var retValue=null;
if(!arrToTest.length){arrToTest=[arrToTest]
}for(var i=0;
i<arrToTest.length;
i++){if(retValue==null){try{retValue=eval(arrToTest[i]);
if(retValue){return retValue
}}catch(e){}}}return retValue
};
aps.fn.setPermutiveValues=function(page){if(aps.cfg.permutive.excludedFrom.includes(APSpageUrl)){return
}window.ntvConfig=window.ntvConfig||{};
window.ntvConfig.keyValues=window.ntvConfig.keyValues||{};
page.permutive.ntvConfig=localStorage.getItem("_pnativo");
if(page.permutive.ntvConfig){window.ntvConfig.keyValues.permutive=page.permutive.ntvConfig
}page.permutive.config={"page":{"type":"","article":{"id":"","title":"","description":"","authors":[],"sections":[],"publishedAt":"","keywords":[],"nlp":{"categories":[],"person":[],"location":[],"organization":[],"event":[],"workOfArt":[],"consumerGood":[],"other":[],"unknown":[]}},"user":{"bcDFPTargetingParams":[]}}};
page.permutive.config.page.type=aps.cfg.permutive.setPermutiveValue(page,["wp_content.objectType","page.datalayer.content.objectType","dataLayer.filter(function(e){return e.pagetype})[0].pagetype","document.querySelector(\"meta[property='og:type']\").content",page.permutive.config.page.type]);
page.permutive.config.page.article.id=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.objectId",page.permutive.config.page.article.id]);
page.permutive.config.page.article.title=aps.cfg.permutive.setPermutiveValue(page,["wp_content.title","page.datalayer.content.title","dataLayer.filter(function(e){return e.content_name})[0].content_name","document.querySelector(\"meta[property='og:title']\").content",page.permutive.config.page.article.title]);
page.permutive.config.page.article.description=aps.cfg.permutive.setPermutiveValue(page,["document.querySelector(\"meta[name='description']\").content",page.permutive.config.page.article.description]);
page.permutive.config.page.article.authors=aps.cfg.permutive.setPermutiveValue(page,["wp_source.authorName.split(', ')","page.datalayer.source.authorName.split(', ')","dataLayer.filter(function(e){return e.author})[0].author.split(', ')","document.querySelector(\"meta[name='author']\").content.split(', ')",""]);
page.permutive.config.page.article.sections=aps.cfg.permutive.setPermutiveValue(page,["wp_content.sectionPath.filter(function(e){return e!=''})","page.datalayer.content.sectionPath","var e = dataLayer.filter(function(e){return e.category})[0];var p=[e.category,e.subcategory]; p.filter(function(e){return e || false})","document.querySelector(\"meta[property='og:section']\").content.split(', ')",page.permutive.config.page.article.section]);
page.permutive.config.page.article.publishedAt=aps.cfg.permutive.setPermutiveValue(page,["wp_content.pubDate.replace(' ','T')+ 'Z'","page.datalayer.content.pubDate.replace(' ','T')+ 'Z'","getPublishedDateISO()","pubDate",page.permutive.config.page.article.publishedAt]);
page.permutive.config.page.article.keywords=aps.cfg.permutive.setPermutiveValue(page,['document.querySelector("meta[name=\'news_keywords\']").content.split(", ")','document.querySelector("a[rel=\'category tag\']").textContent.split(", ")',"[dataLayer.filter(function(e){return e.adcat1})[0].adcat1 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat2 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat3 || ''].filter(function (e){return e != ''})","[document.location.pathname.split('/')[1]]",[]]);
page.permutive.config.page.article.nlp.categories=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpCategories",page.permutive.config.page.article.nlp.categories]);
page.permutive.config.page.article.nlp.person=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpPerson",page.permutive.config.page.article.nlp.person]);
page.permutive.config.page.article.nlp.location=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpLocation",page.permutive.config.page.article.nlp.location]);
page.permutive.config.page.article.nlp.organization=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpOrganization",page.permutive.config.page.article.nlp.organization]);
page.permutive.config.page.article.nlp.event=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpEvent",page.permutive.config.page.article.nlp.event]);
page.permutive.config.page.article.nlp.workOfArt=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpWorkOfArt",page.permutive.config.page.article.nlp.workOfArt]);
page.permutive.config.page.article.nlp.consumerGood=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpConsumerGood",page.permutive.config.page.article.nlp.consumerGood]);
page.permutive.config.page.article.nlp.other=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpOther",page.permutive.config.page.article.nlp.other]);
page.permutive.config.page.article.nlp.unknown=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpUnknown",page.permutive.config.page.article.nlp.unknown]);
page.permutive.config.page.user.bcDFPTargetingParams=aps.cfg.permutive.setPermutiveValue(page,['JSON.parse(localStorage.getItem("bcDFPTargetingParams"))[0].value']);
page.permutive.config.page.user.subscriberStatus=aps.cfg.permutive.setPermutiveValue(page,["treg.identity.isEntitled.toString()","'false'"]);
page.permutive.project_id="0272ac85-5199-4024-a555-397c3d825d95";
page.permutive.organization_id="0272ac85-5199-4024-a555-397c3d825d95";
page.permutive.public_api_key="8cbbdd6e-f6b9-4f84-9637-a93d3032cbf2";
page.permutive.workspace_id="6af07a2d-d0d3-4dfd-961a-bab066126220";
page.permutive.realm_userid=window.treg&&treg.identity&&treg.identity.id||"";
page.permutive.blueconic_userid=aps.fn.getCookie("BCSessionID");
page.permutive.publisherUserId=aps.fn.getCookie("hnpdiudpf2");
page.permutive.maxItems=170;
page.permutive.ids=[];
!function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";
for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;
r<o.length;
r++){var t=o[r];
n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);
n.q.push({functionName:e,arguments:i})
}
}(t)
}}}(window.permutive,page.permutive.public_api_key,{});
page.permutive.UserIds=[];
if(page.permutive.realm_userid!=""){page.permutive.UserIds.push({"tag":"realm_userid","id":page.permutive.realm_userid,"priority":0})
}if(page.permutive.blueconic_userid!=""){page.permutive.UserIds.push({"tag":"blueconic_userid","id":page.permutive.blueconic_userid,"priority":1})
}if(page.permutive.publisherUserId!=""){page.permutive.UserIds.push({"tag":"publisherUserId","id":page.permutive.publisherUserId,"priority":2})
}if(page.permutive.UserIds.length>0){window.permutive.identify(page.permutive.UserIds)
}permutive.addon("web",page.permutive.config);
if(aps.cfg.doNotSell){permutive.consent({"opt_in":false})
}aps.fn.insertScript("https://"+page.permutive.organization_id+".edge.permutive.app/"+page.permutive.workspace_id+"-web.js",true);
aps.fn.logInfo("Permutive: Loading")
};
aps.fn.setPermutiveValues(aps.cfg.page.current);
aps.registerEvent(aps.event.on_new_page,function(page){aps.fn.setPermutiveValues(page)
});
aps.registerEvent(aps.event.on_before_request_ads,function(request){request.page.permutive.ids=googletag.pubads().getTargeting("permutive");
if(request.page.permutive.ids.length===0){try{request.page.permutive.ids=JSON.parse(localStorage.getItem("_pdfps"))
}catch(e){request.page.permutive.ids=[]
}request.page.permutive.ids=request.page.permutive.ids||[];
if(request.page.permutive.ids.length>request.page.permutive.maxItems){aps.fn.logInfo("Permutive: "+request.page.permutive.ids.length+" audiences found");
if(request.page.domain!="stamfordadvocate.com"){request.page.permutive.ids=request.page.permutive.ids.slice(0,request.page.permutive.maxItems)
}}aps.fn.logInfo("Permutive (from local storage)")
}else{request.page.permutive.ids=request.page.permutive.ids||[];
if(request.page.permutive.ids.length>request.page.permutive.maxItems){aps.fn.logInfo("Permutive: "+request.page.permutive.ids.length+" audiences found");
if(request.page.domain!="stamfordadvocate.com"){request.page.permutive.ids=request.page.permutive.ids.slice(0,request.page.permutive.maxItems)
}}}var permutiveKvp=request.page.kvps.filter(function(kvp){return kvp.key=="permutive"
})[0];
if(permutiveKvp){permutiveKvp.value=[]
}request.page.addPageKvp("permutive",request.page.permutive.ids,true)
})
})();(function(){if(!aps.cfg.bid.enabled){return
}aps.cfg.bid.prefetch={enabled:true,delay:10000,allBidsOnRefresh:false,que:[],refreshTimeout:2500,timeout:2500,timeoutPadding:10*1000,multiAdsToPrefetch:4,version:1.4,a9:{adUnits:[],enabled:true,},pb:{adUnits:[],bidCount:[],biddersDone:[],calledBidders:[],clientSideBidders:[],enabled:true,},checkMultiAd:function(a){if(!a.multiAd||aps.cfg.infiniteScroll){return
}if(aps.cfg.is.wcm||aps.cfg.is.greenstate){var b=(parseInt(a.code.split("-")[1])+1)||1;
var c=b+aps.cfg.bid.prefetch.multiAdsToPrefetch;
if(aps.page_type2=="slideshow list view"){c=b+10
}for(var d=b;
d<c;
d++){if(!aps.cfg.ads[a.multiType+"-"+d]){var e=a.multiType+"-"+d;
aps.cloneAdMulti(e);
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[e])
}}}},};
aps.fn.logInfo("Bid prefetching enabled");
aps.registerEvent(aps.event.on_render_ad,function(a){aps.cfg.bid.prefetch.que=aps.cfg.bid.prefetch.que||[];
aps.cfg.bid.prefetch.que.push(a.slot.getSlotElementId());
if(aps.cfg.bid.prefetch.timer==null&&aps.cfg.bid.bids.length<500){aps.cfg.bid.prefetch.timer=setTimeout(function(){var b=aps.cfg.bid.prefetch.que.slice();
aps.cfg.bid.prefetch.que=[];
aps.cfg.bid.prefetch.timer=null;
aps.fireEvent(aps.event.on_get_bids,b)
},aps.cfg.bid.prefetch.delay)
}})
})();(function(){if(aps.cfg.is.wcm){window.addEventListener("expectedDataForNextArticle_infiniteScroll",function(b){var a=b.detail;
var d=aps.fn.getFilteredHref(a.HDN_dataLayer_href_pageUrl);
aps.cfg.page.checkPage();
aps.fn.getPageInfo(d,a);
aps.logInfo(["New infinite scroll event: ",b.detail]);
var e=aps.cfg.adMap.filter(function(f){return aps.cfg.ads[f].multiAd
});
var c=[];
e.forEach(function(j){var f=1;
while(aps.cfg.ads[j+"-"+f]){f++
}var g=f+aps.cfg.bid.prefetch.multiAdsToPrefetch;
for(var h=f;
h<g;
h++){if(!aps.cfg.ads[j+"-"+h]){var k=j+"-"+h;
aps.cloneAdMulti(k);
c.push(k);
aps.cfg.ads[k].scrollDepth=aps.cfg.page.next.scrollDepth;
aps.cfg.ads[k].page=aps.cfg.page.next;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[k])
}}});
aps.fireEvent(aps.event.on_get_bids,c)
});
window.addEventListener("extraArticleInView_infiniteScroll",function(a){aps.cfg.page.checkPage();
if(aps.cfg.ads["MAD"]){aps.cfg.ads["MAD"].scrollDepth=aps.cfg.page.current.scrollDepth;
aps.cfg.ads["MAD"].isLoading=false;
googletag.destroySlots([aps.cfg.ads["MAD"].gam]);
aps.cfg.ads["MAD"].gam=null;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads["MAD"]);
aps.cfg.queuedAds.push("MAD");
aps.fireEvent(aps.event.on_get_bids,["MAD"])
}})
}if(aps.cfg.is.leafsSite){aps.cfg.infiniteScroll=true;
window.addEventListener("leaf_next_url",function(a){var c=aps.fn.getFilteredHref(a.detail);
aps.fn.getPageInfo(c);
aps.logInfo(["New infinite scroll event: ",a.detail]);
var d=aps.cfg.adMap.filter(function(e){return typeof aps.cfg.ads[e]!="undefined"
}).filter(function(e){return aps.cfg.ads[e].multiAd
});
var b=[];
d.forEach(function(f){var e=aps.cfg.page.next.scrollDepth;
var g=f+"-"+e;
aps.cloneAdMulti(g);
b.push(g)
});
aps.fireEvent(aps.event.on_get_bids,b)
});
window.addEventListener("leaf_new_url",function(a){aps.cfg.page.checkPage();
if(aps.cfg.ads["MAD"]){aps.cfg.ads["MAD"].scrollDepth=aps.cfg.page.current.scrollDepth;
aps.cfg.ads["MAD"].isLoading=false;
if(googletag.destroySlots){googletag.destroySlots([aps.cfg.ads["MAD"].gam])
}aps.cfg.ads["MAD"].gam=null;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads["MAD"]);
aps.cfg.queuedAds.push("MAD");
aps.fireEvent(aps.event.on_get_bids,["MAD"])
}})
}aps.registerEvent(aps.event.on_timer,function(a){var b=Date.now();
var c=aps.cfg.dfp.rendered.que.filter(function(d){return !d.done&&(b-d.ts)>1000
});
c.forEach(function(f){var d=aps.cfg.ads[f.code];
var e=document.getElementById(f.code);
if(e.firstChild&&e.firstChild.name&&e.firstChild.name.startsWith("google")){e=e.firstChild
}var g=e.getClientRects();
if(g.length>0){d.renderedSize=Math.round(g[0].width)+"x"+Math.round(g[0].height);
f.renderedSize=d.renderedSize;
f.advertiser=d.advertiser;
f.sizes=d.stringSizes.join(",")
}f.done=true
})
});
aps.registerEvent(aps.event.on_new_div,function(b){var a=aps.cfg.ads[b.id];
var c=0;
a.div=b;
if(aps.cfg.is.wcm){if(b.dataset&&b.dataset.scrolldepth){c=b.dataset.scrolldepth
}a.scrollDepth=c
}aps.logInfo("*DIV* New div : "+b.id+" scrollDepth: "+c)
})
})();(function(){try{aps.cfg.adtestparam=aps.cfg.page.current.queryParameter["adtest"];
if(aps.cfg.adtestparam){aps.page_kvps=aps.page_kvps||[];
aps.cfg.adtestparam=decodeURI(aps.cfg.adtestparam).split("|");
for(var d=0;
d<aps.cfg.adtestparam.length;
d++){var b=aps.cfg.adtestparam[d];
var f=b.split(":");
var g=f[0];
var c=f[1].split("=");
if(g=="page"){aps.cfg.page.addBaseKvp(c[0],c[1])
}else{if(!aps.cfg.adtest[g]){aps.cfg.adtest[g]=[]
}aps.cfg.adtest[g].push({key:c[0],value:c[1]})
}}}}catch(a){}})();(function(){aps.cfg.dfp.lazyload={enabled:(HDN.dataLayer.ads.adMode=="lazy")||false,firstLoad:["Crown","Flex1","A300","MAD"],};
aps.placeAd=function(a){if(!aps.cfg.dfp.lazyload.enabled){aps.fn.logInfo("aps.placeAd called but lazyload is not enabled via HDN.dataLayer.ads.adMode");
return
}if((JSON.stringify(a)=="[null]"||JSON.stringify(a)=="[]")&&!aps.cfg.dfp.isWaiting){aps.fn.logInfo("aps.placeAd: Called with empty array");
return
}var d=(a.length==0||!aps.cfg.dfp.isWaiting);
var b=[];
var c=[];
a.forEach(function(e){var f=e.id;
b.push(f);
if(!aps.cfg.ads[f]){aps.fn.logSkip(f,"ad not defined - aps.placeAd");
return
}if(aps.cfg.queuedAds.includes(f)){aps.fn.logSkip(f,"ad already queued - aps.placeAd");
return
}if(aps.cfg.ads[f].renderCount>1){aps.fn.logSkip(f,"ad already displayed - aps.placeAd");
return
}c.push(f);
aps.cfg.dfp.waiting.push(f);
aps.cfg.dfp.isWaiting=true;
d=true
});
aps.fn.logInfo("aps.placeAd: called with values: "+b.join(","));
if(c.length==0){aps.fn.logInfo("aps.placeAd: No ad to proceed");
return
}aps.fn.logInfo("aps.placeAd: processing: "+c.join(","));
aps.waitStartStep("lazyload")
};
if(aps.cfg.dfp.lazyload.enabled){aps.fn.logInfo("lazyloading: enabled");
aps.registerEvent(aps.event.on_check_include_ad,function(a){var c=aps.cfg.adMap.filter(function(d){return !aps.cfg.dfp.lazyload.firstLoad.includes(d)
});
var b=aps.cfg.dfp.lazyload.firstLoad.filter(function(d){return aps.cfg.adMap.includes(d)
});
aps.cfg.adMap=b.concat(c);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(b)
})
}})();(function(){aps.cfg.dfp.batchSRA={delay:3000,enabled:(window.location.search.indexOf("batchsra=1")!==-1||aps.cfg.host.toLowerCase()=="sfinsider.sfgate.com")?true:false,auto:false,waitingNext:false,hasScrolled:false,userInteractFor:1,atfFirst:true,completed:false,};
if(HDN.dataLayer.ads.adMode=="batch"){aps.cfg.dfp.batchSRA.enabled=true;
aps.logInfo("BatchSRA enabled")
}if(aps.cfg.dfp.batchSRA.enabled){aps.fn.onScroll=function(){if(!aps.cfg.dfp.batchSRA.waitingNext||aps.cfg.dfp.batchSRA.hasScrolled){return
}aps.fn.logInfo("Batch SRA : Scrolled");
aps.cfg.dfp.batchSRA.auto=true;
aps.cfg.dfp.batchSRA.hasScrolled=true;
aps.cfg.dfp.batchSRA.waitingNext=false;
aps.fn.displayNextBatch()
};
aps.fn.logInfo("Batch SRA : listening to Scroll event");
if(window.addEventListener){window.addEventListener("scroll",aps.fn.onScroll,false);
window.addEventListener("click",aps.fn.onScroll,false)
}else{if(window.attachEvent){window.attachEvent("onscroll",aps.fn.onScroll);
window.attachEvent("onclick",aps.fn.onScroll)
}}aps.registerEvent(aps.event.on_check_include_ad,function(a){a.checkForInclude.stop=true;
if(a.position=="atf"||a.position=="mad"){a.checkForInclude.addAdSlot=true
}});
aps.fn.displayNextBatch=function(){if(aps.cfg.dfp.batchSRA.completed){return
}var a=Object.entries(aps.cfg.ads).filter(function(b){return b[1].renderCount==1
}).map(function(b){return b[0]
});
if(a.length>0){aps.cfg.queuedAds=aps.cfg.queuedAds.concat(a);
aps.fn.requestAds()
}aps.cfg.dfp.batchSRA.completed
}
}})();(function(){if(aps.cfg.is.leafsSite){if(document.cookie.split(";").filter(function(a){return a.indexOf("region=EU")>=0
}).length==1){aps.fn.logInfo("region EU detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true;
if(document.location.href.indexOf("gdpr=true")>-1){aps.cfg.bid.enableGDPR=true
}}}else{if(document.location.href.indexOf("?is_eu=1")>-1){aps.fn.logInfo("region EU (test) detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true
}}})();(function(){if(!aps.cfg.serveAds){return
}if(aps.cfg.thirdp.tmt){return
}if(aps.cfg.is.leafsSite){return
}var d={"beaumontenterprise.com":"75e9ad4b5f1f1f3de38dea085cc34f079b9d8243999d3b30d70a543f2c3ae813","sfgate.com":"1cbbeea35302b334c17ec7de41048b19077c3452b8825fa3017876cf49d877c2","chron.com":"b8d94fd702b39f91830ea26eb261a1dd7eb3f9d18e86f88c83f7a317f3115379","mysanantonio.com":"3c81fd9605d796d254c7bdc62001ec2c520515c7c306b66b713a4421f7343766","seattlepi.com":"a3e9f57e66bb33f8f8995e6866a7eace83bca9720ee52bb2d8ab18fb8dddae94","sfchronicle.com":"a5e03e178aaf9b41b3fc69428362339bd7ba9a606118acee43f6169a1f7f9847","houstonchronicle.com":"48a6940997d234b7add9af8ed2b41694654edaeb6e7b5827579702d25182700b","expressnews.com":"d65ba7cd6a96847162fb556c3a5dc7b7e66de309481ec4e558b4e9dc40515858","timesunion.com":"f999472effec7a1ef427ab8ed55df47b4d250f60f376ce71f7293b353026f514","ctpost.com":"1118fad26ca4bcdf2a99fdee52724e3c512a258c149cbd8e6c4084c13040e86a","stamfordadvocate.com":"2df4f16391dbd310915a08bd62897dde4902fe30a7c29dcb2b80ba04345df633","nhregister.com":"2370d2dc32ab1b0d0894de8f024e2764a55756c723edb12fa7d7b6b221922fba","newstimes.com":"68fab42777221c69e8d127d9ba7a8b29e0ba95aae66e6166eb070c330ac04c0f","greenwichtime.com":"4a6fb4d137bab5bdc207d09d4b1acfc191dbad1e9e0e3190ca676d3730195d06","thehour.com":"049118934d099a757a2987317f05327a8ccd5a7c1501feaf8e4639fadbdb8936","ctinsider.com":"21b81f81bd7fa576db043ec887848073bbc6eafc46d9f8bec5240163093e2d46","registercitizen.com":"3377ba9d7d5061bf618f4ae6d3900e0067f913f99748fc366b7cb1542e6a96b2","middletownpress.com":"4f1f32e75691195dd027c417eed6c56d8a37e7ed729eb57c8ecd8abf8d5f420b","thetelegraph.com":"bf557221a53f15d39c7bce3aeed56dd6c13e57b3eba48f8e4fd2d54af42f0122","ourmidland.com":"37af6c3aa88542ced759eb5a9c478617d1b50eeae32789a669e3facca42eb56a","myjournalcourier.com":"5497becf77524b62bee5a589030b1e2163d34a60b7d960cdc976afc12b64d623","michigansthumb.com":"601647fe4d84d12a565e709dc7e944d38db91923d65d9bb6865788234f41893d","theintelligencer.com":"aadf36ee0d8d0f2765013057eb1bad1a552f9377dfc4b532d9b698df9a655884","manisteenews.com":"a2031afbd2e08a959fa777db882a99b7cc56d1dbff61d9d2d56c20a89c6d8b7e","bigrapidsnews.com":"7c907dba0dac340d4f0b3879a3d1699f0bf19e2a95b06945aa3b31cfde002c09","recordpatriot.com":"d4c71cee77592309f10e62ab4ce1a4d995719a82a77932eee5fc18a7948e2f41","lakecountystar.com":"2a7c7fb608092db498480edf2068123ffcd679d5ce9e8819760338386e1350e4","theheraldreview.com":"1655d53ab46f5391a09e189a8cf86f8e22098886ea6a2ae727b112087a05cbd0","yourconroenews.com":"aa3912f9cfd7f1fafd025dbd846d2383acce1b3574061b2c9508d43d5cc653da","lmtonline.com":"ffd0921bb88989b2dc6bac92611425966d93e8be7cf154e95fd27ae95db26375","mrt.com":"08621a723e4a1cd4ba4c25f46ce953173b9b3cffad4ec0bfb9b0e5d22bc22bc8","myplainview.com":"b49696bc422c346e4f4282e32cfc324d782f32b9c9d0fec6751d29dc0862bf61","theridgefieldpress.com":"053f373cd281b81bb04913797ec13da4438c7cc4596fc29e382ce5a1a93ce32d","ncadvertiser.com":"eaff3ad2730aea1b010a2434dad485aef8e1a473f8977f048e5888c27a0a8b15","fairfieldcitizenonline.com":"ddbcce19fd54ba6f20d8e3bedb35cfea7887e9579c34d38307b3f3fa3f659ab0","wiltonbulletin.com":"7ef8a69225bec566b6a15690bd94081ed7898400ff9a8c68ac05ee924c2c2ce3","darientimes.com":"f0790e5c63dd390570f98d8b20ad18ee2666f8184dc03434de1c60fb823ff71c","trumbulltimes.com":"909616d5d05133cda02800bf40834036448deeea436efebe0d39fcb3f3f4bec8","sheltonherald.com":"2ea54058f6365a6a2bcb4ecda879ff406900d5b274c1e1ed6e2f0e746ad5068f","milfordmirror.com":"0f7190eb184e8a5af5171a9ea07a792b5a193725ebdb8a2c55a30ff187802fef","southeasttexas.com":"1ca0a738d5cf7bb8ce1434d5522573d7f6894098e4706151b2882420b6bb6c62","gametimect.com":"c5a3ed040f3b98d6d9877a09dc7f00f3ba126d6f10836272b84a07be9ced5df7","shorelinetimes.com":"91a7025281ac9294e20e8cdd7b9c5d6414f44d887193db48097942a2404a9d1d","countytimes.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","westhartfordnews.com":"5de2ce5445b39d5609215833a7fa6410f027135902d458f6751d115c11c33634","dolphin-news.com":"041a5d17decdae44358ae2eca8065b501b5a4936882e2188a3d41470b64eb47d","ctpostchronicle.com":"645700f07ec80b72131b2a6fc97f8f43da5820ce68bd559b0b507dfdf08f9f6a","ctbulletin.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","greenstate.com":"412163cc8d602f027626c2ffab24515bd8f6ff426d0d4096330b64d8e7681e03","canyonnews.com":"593c0a648b760954871854fb60be6dfc252fd7387de8bcb568ebf2cd5449f3d8","sellitlaredo.com":"a86e9a199fadcfd738a0fa46b3fa9381cbb92bdc9b7a75b7fa222e143eaac6b9","comicskingdom.com":"5bf6a1e0d11973210ea5c35cfa0df62607e66f86c41d8b2a69030b0575fd89ce","weekand.com":"1f219ce7e5d1e402d2ff47ffc3f1d841e9749a13c4e7daa4320056eceda56f04",};
var b=d[aps.cfg.current_domain]||"";
if(b!=""){aps.fn.logInfo("The Media Trust: Loading");
var a=document.getElementsByTagName("script")[0];
var c=document.createElement("script");
c.async=1;
c.src="https://scripts.webcontentassessor.com/scripts/"+b;
a.parentNode.insertBefore(c,a);
window.addEventListener("tmt_blockedAd",function(h){var f=aps.cfg.ads[h.detail];
aps.fn.logInfo("*TMT* "+f.code+" blocked");
f.state="forcedRefresh";
f.addAdKvp("hnp","tmt_refreshed");
aps.fn.refreshAds([f.code]);
try{var i="";
var j=f.gam.getResponseInformation();
Object.entries(j).forEach(function(e){i+="&"+e[0]+"="+e[1]
});
aps.fn.sendLog("tmt=1&href="+window.location.href+"&tmt=1"+i,true)
}catch(g){}})
}})();(function(){aps.fn.onRender=function(c){if(aps.cfg.noRefresh&&aps.cfg.noRefresh.triggered){return
}var f={};
var g=c.slot||null;
f.slot=g;
f.divid=g.getSlotElementId();
f.ad=aps.cfg.ads[f.divid];
if(f.divid&&f.divid.startsWith("browsi")){return
}if(f.ad){aps.cfg.adRendered=true;
f.targetingMap=g.getTargetingMap();
f.responseInfo=g.getResponseInformation();
f.emptyAd=c.isEmpty;
f.adsize=c.size||null;
f.request=aps.cfg.dfp.requests[f.targetingMap.i];
f.bidInfo="";
g.currentBids=g.currentBids||[];
f.originalBid=(g.currentBids.length>0)?JSON.parse(JSON.stringify(g.currentBids[0])):null;
f.winningBid=null;
f.lineitemId=c.lineItemId||null;
if(f.lineitemId==null&&f.responseInfo){if(f.responseInfo.lineItemId==null&&f.responseInfo.yieldGroupIds!=null){f.lineitemId=f.responseInfo.yieldGroupIds[0]
}}f.ad.state=(f.emptyAd)?"empty":"displayed";
f.ad.renderCount++;
f.ad.renderedAt=new Date().valueOf();
f.ad.isLoading=false;
f.ad.refreshable=true;
f.ad.advertiserId=c.advertiserId;
f.ad.size=f.adsize;
f.ad.lineItemId=c.lineItemId;
f.ad.creativeId=c.creativeId;
f.ad.isEmpty=f.emptyAd;
f.html="";
if(f.ad.code=="Crown"&&f.ad.advertiserId==4958539431){f.ad.div.style="display:none"
}if(f.ad.creativeId){f.html=g.getHtml()
}f.adType="banner";
if(f.targetingMap.hb_format){f.adType=f.targetingMap.hb_format[0]
}if(f.adType=="native"&&f.html.indexOf("pbNativeTagData")==-1){f.adType="banner"
}if(f.ad.kvps.includes("hnp")){g.clearTargeting("hnp")
}var a=f.ad.kvps.filter(function(e){return(e.key=="customblank")
});
var d=(a.length>0&&a[0].value.includes("blank_refresh"))||false;
if(f.emptyAd){if(!["Crown","LNLogo","EEinsert","exit"].includes(f.divid)&&!d){f.ad.addAdKvp("customblank","blank_refresh");
aps.cfg.queuedAds.push(f.divid);
aps.fn.logInfo("*BLANK* "+f.divid+" - blank ad served. Refreshing");
aps.fn.requestAds()
}if(d&&f.divid.dataset&&f.divid.dataset.slug=="Advertisement"){aps.fn.logInfo(f.divid+" - slot empty: hiding div");
f.divid.style.display="none"
}}f.advertiser=(f.responseInfo&&f.responseInfo.advertiserId!=null)?"Direct Ad":"No Ad";
if(f.advertiser!="No Ad"){if(aps.cfg.advertisers[f.responseInfo.advertiserId]){f.advertiser=aps.cfg.advertisers[f.responseInfo.advertiserId]
}if(c.yieldGroupIds!=null){f.advertiser="exb/"+f.advertiser;
try{if(typeof(companyIds[0])!="undefined"){f.advertiser="ExB/"+aps.cfg.advertisers[companyIds[0]]
}}catch(b){}}}if(aps.cfg.infoDivDisplaying==f.ad.code){aps.fn.setAdDetails(f.ad.code)
}f.ad.advertiser=f.advertiser;
if(aps.cfg.logToConsole){f.ad.render=f
}aps.fireEvent(aps.event.on_render_ad,f);
aps.fn.tagAd(f.ad);
aps.fn.logInfo("*IMP* "+aps.fn.fixLen(f.ad.code,10)+" "+aps.fn.fixLen(f.advertiser,14)+" lineitem: "+aps.fn.fixLen(f.lineitemId,12)+f.bidInfo)
}};
aps.registerEvent(aps.event.on_render_ad,function(c){if(c.ad.advertiserId==4594233306){var a=document.getElementById(c.ad.code).firstChild;
var b=a.style.cssText||"";
b=(b=="")?"flex-grow:1":"flex-grow:1; "+b;
a.setAttribute("style",b)
}});
aps.registerEvent(aps.event.on_render_ad,function(a){if(a.html.indexOf("HNP-RM-NoRefresh")>-1){aps.fn.logInfo(a.ad.code+": NoRefresh detected");
a.ad.refreshable=false;
a.ad.doNotRefresh=true
}});
aps.registerEvent(aps.event.on_render_ad,function(e){if(e.html.indexOf("celtra")>-1){if(aps.cfg.preventCeltraAdsToRefresh){var a=e.ad;
if(aps.cfg.dfp.celtraAds.indexOf(a.code)==-1){aps.cfg.dfp.celtraAds.push(a.code);
aps.fn.logInfo(a.code+": Celtra ad detected")
}e.ad.refreshable=false;
e.ad.doNotRefresh=true;
if(e.ad.code=="Crown"||e.ad.code=="Flex1"){if(aps.fn.getQueryParameterByName("plainceltra")==null){aps.cfg.dfp.celtra.preventMonitorIframe=aps.cfg.dfp.celtra.preventMonitorIframe||false;
aps.cfg.dfp.celtra.checkMonitorIframe=aps.cfg.dfp.celtra.checkMonitorIframe||false;
if(!aps.cfg.dfp.celtra.checkMonitorIframe){aps.cfg.dfp.celtra.checkMonitorIframe=true;
aps.page.kvps.forEach(function(f){if(f.key=="testpage"&&f.value=="NYC_AdTech_CeltraViewTest"){aps.cfg.dfp.celtra.preventMonitorIframe=true
}})
}if(aps.cfg.dfp.celtra.preventMonitorIframe){aps.fn.logInfo("Not loading CeltraIframeFix");
return
}aps.cfg.dfp.celtra.divs=aps.cfg.dfp.celtra.divs||[];
aps.cfg.dfp.celtra.monitorIframe=aps.cfg.dfp.celtra.monitorIframe||false;
var c=document.getElementById("google_ads_iframe_"+e.slot.getSlotId().getId());
aps.cfg.dfp.celtra.divs.push(c);
if(!aps.cfg.dfp.celtra.monitorIframe){aps.cfg.dfp.celtra.monitorIframe=true;
c.addEventListener("load",function(f){aps.fn.monitofCeltraIframe(0)
})
}}if(aps.cfg.dfp.celtraAds.indexOf("Flex1")==-1){aps.cfg.dfp.celtraAds.push("Flex1");
aps.fn.logInfo("Flex1 also disabled (Celtra on Crown)")
}if(aps.cfg.dfp.celtraAds.indexOf("Crown")==-1){aps.cfg.dfp.celtraAds.push("Crown");
aps.fn.logInfo("Crown also disabled (Celtra on Flex1)")
}}}if(e.ad.code=="Flex1"&&current_device==devices.DESKTOP){var b=document.getElementById(e.ad.code);
var d=b.querySelectorAll("div[id^='google']")[0];
if(!d.style){d.style={cssText:"width:100%"}
}else{d.style.cssText+=";width:100%"
}}}});
aps.registerEvent(aps.event.on_render_ad,function(b){if(b.divid=="MAD"){if(b.adsize&&(b.adsize[0]!=320||b.adsize[1]!=50)){aps.fn.logInfo("Fixing: MAD having wrong size: "+b.adsize);
var a=document.getElementById("MAD").firstChild;
a.style.width="320px";
a.style.height="50px"
}aps.cfg.ads["MAD"].impressionTimer=aps.cfg.ads["MAD"].impressionTimer||null;
if(aps.cfg.ads["MAD"].impressionTimer==null){aps.cfg.ads["MAD"].impressionTimer=setTimeout(function(){aps.fn.logInfo("Forcing MAD viewability");
aps.cfg.ads["MAD"].impressionTimer=null;
aps.cfg.ads["MAD"].impressionViewable=true
},30000)
}}})
})();(function(){if(aps.cfg.current_domain!="sfgate.com"&&!aps.cfg.iPhone){return
}})();(function(){aps.specifiedAdSlots={};
aps.usingSelectiveAdSlotLoading=false;
aps.selectiveAdSlotCookieName="Ju13ceSelectiveAdsList";
aps.fn.shouldPlaceAd=function(c){if(!aps.usingSelectiveAdSlotLoading){return true
}return(typeof(aps.specifiedAdSlots[c])!="undefined")
};
var b=aps.fn.getQueryParameterByName("sadslot[]");
if(b!=null){aps.usingSelectiveAdSlotLoading=true;
for(var a=0;
a<b.length;
a++){aps.specifiedAdSlots[b[a]]=true
}}})();(function(){aps.specified3rdParties={};
aps.usingSelective3rdLoading=false;
aps.fn.shouldRunThirdParty=function(c){if(aps.cfg.is.faceBookInstantArticle){return false
}if(aps.cfg.excludeModules.indexOf(c)>-1){return false
}if(!aps.usingSelective3rdLoading){return true
}return(typeof(aps.specified3rdParties[c])!="undefined")
};
aps.add3rdToSelectiveLoadingList=function(c){aps.specified3rdParties[c]=true
};
var a=aps.fn.getQueryParameterByName("sad3rd[]");
if(a!=null){aps.usingSelective3rdLoading=true;
for(var b=0;
b<a.length;
b++){aps.specified3rdParties[a[b]]=true
}}})();(function(){if(!aps.cfg.serveAds){return
}if(aps.cfg.thirdp.a9){return
}if(!aps.fn.shouldRunThirdParty("a9")){return
}if(aps.cfg.page.current.domain=="greenstate.com"){aps.cfg.bid.a9.enabled=false
}if((aps.cfg.bid.current_device==devices.MOBILE||aps.cfg.bid.current_device==devices.TABLET)&&(aps.cfg.bid.disabledOnMobile.indexOf("a9")>-1||aps.cfg.bid.disableMobile)){aps.cfg.bid.a9.enabled=false
}if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){aps.cfg.bid.a9.enabled=false
}if(!aps.cfg.bid.enabled||!aps.cfg.bid.a9.enabled){aps.fn.logInfo("A9 disabled");
return
}aps.fn.insertScript("https://c.amazon-adsystem.com/aax2/apstag.js",1);
!function(d,b,f,i,j,c,e){if(b[d]){return
}function h(a,g){b[d]._Q.push([a,g])
}b[d]={init:function(){h("i",arguments)
},fetchBids:function(){h("f",arguments)
},setDisplayBids:function(){},targetingKeys:function(){return[]
},dpa:function(){h("di",arguments)
},rpa:function(){h("ri",arguments)
},upa:function(){h("ui",arguments)
},_Q:[]}
}("apstag",window);
aps.cfg.bid.a9.config.pubID="3070";
aps.cfg.bid.a9.config.adServer="googletag";
aps.cfg.bid.a9.config.bidTimeout=aps.cfg.bid.prefetch.refreshTimeout;
aps.cfg.bid.a9.config.deals=true;
aps.cfg.bid.a9.useHashedEmail=true;
if(aps.cfg.is.kfsComicsWidget||aps.cfg.is.kfsPuzzleWidget){aps.cfg.bid.a9.config.pubID="5135"
}aps.cfg.bid.a9.partners={"1y9xr0g":"amobee","1ayvuv4":"appnexus","1ginqio":"conversant","2kotmo":"districtm","j80glc":"dmx","1eaqzgg":"gumgum","yrdq0w":"index","t7ludc":"magnite","1gqg3k":"oath","bgbtvk":"openX","1m2fm68":"pubmatic","kbyu4g":"pulsepoint","1r28b28":"sharethgough","e87rpc":"simpli.fi","16j2cqo":"triplelift","rjoa2o":"undertone","1gqg3k":"verizon mkt","lfx7nx":"verizon","t7ludc":"rubicon","1iqkhkw":"yieldmo",};
aps.cfg.bid.a9.validSections={"":"home page","Homepage":"home page","news":"news","entertainment":"entertainment","sports":"sports","burningman":"burningman","realestate":"real estate","obituaries":"obituaries","bayarea":"local news","seen-events":"seen","neighborhood":"local news","food":"food","lifestyle":"living","life":"living","business":"business","local":"local news","ontheblock":"real estate","politics":"news","homestyle":"real estate","living":"living","california-wildfires":"local news","seen-saratoga":"seen","comics-and-games":"entertainment","technology":"technology","education":"education","seen":"seen","expensive-san-francisco":"local news","2018":"local news","2019":"local news","weather":"local news","national":"news","homes":"real estate","photogallery":"news","style":"living","search":"other","science":"news","houseoftheweek":"real estate","music":"entertainment","sfhistory":"local news","nation":"news","readmore":"other","49ers":"sports","portal":"subsciption","crime":"local news","client":"entertainment","warriors":"sports","chris-mcginnis":"travel","raiders":"sports","chronicle_vault":"entertainment","art":"entertainment","real-estate":"real estate","insidescoop":"food","mommyfiles":"living","seattlenews":"local news","beer":"food","access.aspx?product=newedition&from=http:":"subsciption","travel":"travel","giants":"sports","galleries":"news","home":"real estate","opinion":"local news","jobs":"jobs","houston":"local news","education_clone_6643_20180713151626":"local news","dearabby":"entertainment","beauty":"living","outdoors":"travel","subscribe-new-offers":"subsciption","earthquakes":"local news","cars":"autos","chronicle-history":"local news","capitol":"local news","tablehopping":"food","photos":"news","latestnews":"news","mlb":"sports","horoscope":"entertainment","new-haven":"local news","fiesta":"local news","collegesports":"sports","blogs":"other","preps":"sports","auto":"autos","originalpets":"living","lifestyles":"living","athletics":"sports","weird":"news","wine":"food","games":"entertainment","comics":"entertainment","columns":"local news","getaways":"travel","us":"news","rodeo":"entertainment",};
aps.cfg.bid.a9.getSection=function(a){var b="";
if(aps.cfg.bid.a9.validSections[a.path[0]]==undefined){b="other"
}else{b=aps.cfg.bid.a9.validSections[a.path[0]]
}switch(a.hostname){case"education.seattlepi.com":b="Education";
break;
case"healthyeating.sfgate.com":b="Healthy Eating";
break;
case"homeguides.sfgate.com":b="Home Guides";
break;
case"livehealthy.chron.com":b="Live Healthy";
break;
case"pyme.lavoztx.com":b="Pyme";
break;
case"smallbusiness.chron.com":b="Small Business";
break;
case"work.chron.com":b="Work";
break
}return b
};
aps.cfg.bid.a9.configSlot=function(a){var c={sizes:[]};
if(a.exclude){return c
}if(!aps.fn.isValidBid(a,"","a9")){return c
}a.sizes=a.sizes||[];
if(a.mediaType=="native"){return c
}if(a.sizes.length==0){aps.fn.logSkip(a.code,"no size available to bidders (a9)");
return c
}if(a.video){return c
}var b={};
b.slotID=a.code;
b.slotName="/"+aps.cfg.networkCode+"/"+aps.cfg.page.current.adUnit+"/"+b.slotID;
b.sizes=a.sizes;
if(!aps.cfg.is.qa){b.floor={value:5,currency:"USD"}
}return b
};
aps.registerEvent(aps.event.on_define_bid_data,function(a){if(a.code=="Crown"){return
}var b=aps.cfg.bid.a9.configSlot(a);
if(b.sizes.length>0){if(!aps.cfg.bid.prefetch.a9.adUnits.includes(a.code)){aps.cfg.bid.prefetch.a9.adUnits.push(a.code)
}a.a9=b
}});
aps.registerEvent(aps.event.on_request_bid,function(a){a.pages.forEach(function(g){var c=g.a9.ads.filter(function(j){return j.slotID
});
var b=g.a9.adIds;
if(aps.cfg.bid.prefetch.allBidsOnRefresh){if(c.length>24){var d=[];
var i=[];
var f=[];
var e=[];
Object.entries(aps.cfg.ads).forEach(function(j){if(j[1].renderedAt==null){f.push(j[1])
}});
Object.entries(aps.cfg.ads).forEach(function(j){if(j[1].renderedAt!=null){d.push(j[1])
}});
d=d.sort(function(j,k){return k.renderedAt-j.renderedAt
});
d.forEach(function(j){if(j.multiAd){if(!e.includes(j.multiType)){var l=parseInt(j.code.split("-")[1]);
if(l>1){l=l-1
}for(var k=0;
k<6;
k++){i.push(j.multiType+"-"+(l+k))
}e.push(j.multiType)
}}else{i.push(j.code)
}});
f.forEach(function(j){if(j.multiAd){if(!e.includes(j.multiType)){var l=parseInt(j.code.split("-")[1]||1);
if(l>1){l=l-1
}for(var k=0;
k<6;
k++){i.push(j.multiType+"-"+(l+k))
}e.push(j.multiType)
}}else{i.push(j.code)
}});
if(i.length>25){i=i.slice(0,25)
}c=c.filter(function(j){return i.includes(j.slotID)
});
b=b.filter(function(j){return i.includes(j)
})
}}else{if(a.slotIds){c=c.filter(function(j){return a.slotIds.includes(j.slotID)
});
b=b.filter(function(j){return a.slotIds.includes(j)
})
}}if(c.length>0){aps.fn.setPerformanceMetrics("A9BidsRequested","calling a9 for page "+g.scrollDepth+" ads: "+b);
apstag.init(g.a9.config);
if(aps.cfg.bid.a9.useHashedEmail&&!aps.cfg.bid.prefetch.requested){aps.cfg.emailHash=HDN.dataLayer.identity.emailHashed||null;
if(!aps.cfg.emailHash&&window.treg&&treg.identity&&treg.identity.emailHash){aps.cfg.emailHash=treg.identity.emailHash
}if(aps.cfg.doNotSell){var h={optOut:true};
apstag.upa(h)
}else{if(aps.cfg.emailHash){var h={hashedRecords:[{type:"email",record:aps.cfg.emailHash}],gdpr:{enabled:true,consent:"1---"}};
apstag.rpa(h)
}}if(!aps.cfg.emailHash&&!aps.cfg.tregReady&&!aps.cfg.doNotSell){aps.cfg.bid.prefetch.requested=false
}else{aps.cfg.bid.prefetch.requested=true
}}apstag.fetchBids({slots:c,timeout:aps.cfg.bid.prefetch.timeout,},function(j){aps.cfg.bid.a9.handleDisplayBids(j,g)
});
setTimeout(function(){aps.cfg.bid.a9.received=true;
g.a9BidsReceived=true
},aps.cfg.bid.prefetch.timeout)
}})
});
aps.cfg.bid.a9.handleDisplayBids=function(a,b){a.forEach(function(d){var g=(d.targeting)?d.targeting.amznbid:d.amznbid;
var f=(d.targeting)?d.targeting.amznp:d.amznp;
var e=aps.cfg.bid.a9.partners[f]||"a9";
var c=aps.cfg.ads[d.slotID];
aps.fn.logInfo("*BID* "+c.code+" "+e+" "+g)
});
aps.cfg.bid.a9.received=true;
b.a9BidsReceived=true;
aps.fn.logInfo("A9 bids received")
}
})();(function(){aps.registerEvent(aps.event.on_before_request_ads,function(c){var a=!1;
if(aps.cfg.page.current.domain=="expressnews.com"||aps.cfg.page.current.domain=="houstonchronicle.com"){try{if(GetCookie("hrstctok")!=null){a=1
}}catch(b){}}else{if(aps.cfg.page.current.domain=="sfchronicle.com"){try{if(JSON.parse(sessionStorage.getItem("sync-subscriberPlans-status"))["hasActivePlans"]==true){a=1
}}catch(b){}}}if(a){aps.cfg.page.addBaseKvp("category","premuser")
}})
})();(function(){var a="";
switch(aps.cfg.page.current.domain){case"houstonchronicle.com":case"chron.com":a="hou";
break;
case"expressnews.com":case"mysanantonio.com.com":a="sa";
break;
case"sfchronicle.com":case"sfgate.com":a="sf";
break;
case"timesunion.com":a="tu";
break;
default:return;
break
}aps.registerEvent(aps.event.on_before_request_ads,function(h){var d=false;
var l=false;
var j=[];
try{if(typeof(localStorage)!=undefined){var f=JSON.parse(localStorage.getItem("hnp_subs"));
var b=1;
var e=null;
if(f!=null){for(var g in f){if(f.hasOwnProperty(g)){e=f[g];
if(e.hasOwnProperty("sub_status_"+b)){var i=a;
if(e["sub_status_"+b]=="Active"){i=i+"_a_"
}else{i=i+"_ex_"
}i=i+e["sub_product_"+b]+"_";
i=i+e["sub_product_code_"+b];
j.push(i)
}}b++
}}}}catch(c){}var k=a+"_na";
if(j.length>=1){k=j.join(",")
}aps.fn.addPageKvp("swgt",k)
})
})();!function(){aps.fn.createHash=function(Q,S){function U(c,d){return c<<d|c>>>32-d
}function W(h,i){var j,k,l,m,n;
return l=2147483648&h,m=2147483648&i,j=1073741824&h,k=1073741824&i,n=(1073741823&h)+(1073741823&i),j&k?2147483648^n^l^m:j|k?1073741824&n?3221225472^n^l^m:1073741824^n^l^m:n^l^m
}function Y(d,e,f){return d&e|~d&f
}function aa(d,e,f){return d&f|e&~f
}function ac(d,e,f){return d^e^f
}function ae(d,e,f){return e^(d|~f)
}function ag(c,d,e,k,l,m,n){return c=W(c,W(W(Y(d,e,k),l),n)),W(U(c,m),d)
}function ai(c,d,f,k,l,m,n){return c=W(c,W(W(aa(d,f,k),l),n)),W(U(c,m),d)
}function ak(c,d,g,k,l,m,n){return c=W(c,W(W(ac(d,g,k),l),n)),W(U(c,m),d)
}function am(c,d,h,k,l,m,n){return c=W(c,W(W(ae(d,h,k),l),n)),W(U(c,m),d)
}function ao(j){for(var k,l=j.length,m=l+8,n=(m-m%64)/64,o=16*(n+1),p=Array(o-1),q=0,r=0;
l>r;
){k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|j.charCodeAt(r)<<q,r++
}return k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|128<<q,p[o-2]=l<<3,p[o-1]=l>>>29,p
}function aq(f){var g,h,i="",j="";
for(h=0;
3>=h;
h++){g=f>>>8*h&255,j="0"+g.toString(16),i+=j.substr(j.length-2,2)
}return i
}function at(e){e=e.replace(/\r\n/g,"\n");
for(var f="",g=0;
g<e.length;
g++){var h=e.charCodeAt(g);
128>h?f+=String.fromCharCode(h):h>127&&2048>h?(f+=String.fromCharCode(h>>6|192),f+=String.fromCharCode(63&h|128)):(f+=String.fromCharCode(h>>12|224),f+=String.fromCharCode(h>>6&63|128),f+=String.fromCharCode(63&h|128))
}return f
}void 0===S&&(S=""),void 0===Q&&(Q=10000000000*Math.random()+"||"+window.location.href+"||"+(new Date).getTime()+"||"+S);
var av,ax,ay,az,aA,aB,aC,aD,aE,aF=Array(),aG=7,R=12,T=17,V=22,X=5,Z=9,ab=14,ad=20,af=4,ah=11,aj=16,al=23,an=6,ap=10,ar=15,au=21;
for(Q=at(Q),aF=ao(Q),aB=1732584193,aC=4023233417,aD=2562383102,aE=271733878,av=0;
av<aF.length;
av+=16){ax=aB,ay=aC,az=aD,aA=aE,aB=ag(aB,aC,aD,aE,aF[av+0],aG,3614090360),aE=ag(aE,aB,aC,aD,aF[av+1],R,3905402710),aD=ag(aD,aE,aB,aC,aF[av+2],T,606105819),aC=ag(aC,aD,aE,aB,aF[av+3],V,3250441966),aB=ag(aB,aC,aD,aE,aF[av+4],aG,4118548399),aE=ag(aE,aB,aC,aD,aF[av+5],R,1200080426),aD=ag(aD,aE,aB,aC,aF[av+6],T,2821735955),aC=ag(aC,aD,aE,aB,aF[av+7],V,4249261313),aB=ag(aB,aC,aD,aE,aF[av+8],aG,1770035416),aE=ag(aE,aB,aC,aD,aF[av+9],R,2336552879),aD=ag(aD,aE,aB,aC,aF[av+10],T,4294925233),aC=ag(aC,aD,aE,aB,aF[av+11],V,2304563134),aB=ag(aB,aC,aD,aE,aF[av+12],aG,1804603682),aE=ag(aE,aB,aC,aD,aF[av+13],R,4254626195),aD=ag(aD,aE,aB,aC,aF[av+14],T,2792965006),aC=ag(aC,aD,aE,aB,aF[av+15],V,1236535329),aB=ai(aB,aC,aD,aE,aF[av+1],X,4129170786),aE=ai(aE,aB,aC,aD,aF[av+6],Z,3225465664),aD=ai(aD,aE,aB,aC,aF[av+11],ab,643717713),aC=ai(aC,aD,aE,aB,aF[av+0],ad,3921069994),aB=ai(aB,aC,aD,aE,aF[av+5],X,3593408605),aE=ai(aE,aB,aC,aD,aF[av+10],Z,38016083),aD=ai(aD,aE,aB,aC,aF[av+15],ab,3634488961),aC=ai(aC,aD,aE,aB,aF[av+4],ad,3889429448),aB=ai(aB,aC,aD,aE,aF[av+9],X,568446438),aE=ai(aE,aB,aC,aD,aF[av+14],Z,3275163606),aD=ai(aD,aE,aB,aC,aF[av+3],ab,4107603335),aC=ai(aC,aD,aE,aB,aF[av+8],ad,1163531501),aB=ai(aB,aC,aD,aE,aF[av+13],X,2850285829),aE=ai(aE,aB,aC,aD,aF[av+2],Z,4243563512),aD=ai(aD,aE,aB,aC,aF[av+7],ab,1735328473),aC=ai(aC,aD,aE,aB,aF[av+12],ad,2368359562),aB=ak(aB,aC,aD,aE,aF[av+5],af,4294588738),aE=ak(aE,aB,aC,aD,aF[av+8],ah,2272392833),aD=ak(aD,aE,aB,aC,aF[av+11],aj,1839030562),aC=ak(aC,aD,aE,aB,aF[av+14],al,4259657740),aB=ak(aB,aC,aD,aE,aF[av+1],af,2763975236),aE=ak(aE,aB,aC,aD,aF[av+4],ah,1272893353),aD=ak(aD,aE,aB,aC,aF[av+7],aj,4139469664),aC=ak(aC,aD,aE,aB,aF[av+10],al,3200236656),aB=ak(aB,aC,aD,aE,aF[av+13],af,681279174),aE=ak(aE,aB,aC,aD,aF[av+0],ah,3936430074),aD=ak(aD,aE,aB,aC,aF[av+3],aj,3572445317),aC=ak(aC,aD,aE,aB,aF[av+6],al,76029189),aB=ak(aB,aC,aD,aE,aF[av+9],af,3654602809),aE=ak(aE,aB,aC,aD,aF[av+12],ah,3873151461),aD=ak(aD,aE,aB,aC,aF[av+15],aj,530742520),aC=ak(aC,aD,aE,aB,aF[av+2],al,3299628645),aB=am(aB,aC,aD,aE,aF[av+0],an,4096336452),aE=am(aE,aB,aC,aD,aF[av+7],ap,1126891415),aD=am(aD,aE,aB,aC,aF[av+14],ar,2878612391),aC=am(aC,aD,aE,aB,aF[av+5],au,4237533241),aB=am(aB,aC,aD,aE,aF[av+12],an,1700485571),aE=am(aE,aB,aC,aD,aF[av+3],ap,2399980690),aD=am(aD,aE,aB,aC,aF[av+10],ar,4293915773),aC=am(aC,aD,aE,aB,aF[av+1],au,2240044497),aB=am(aB,aC,aD,aE,aF[av+8],an,1873313359),aE=am(aE,aB,aC,aD,aF[av+15],ap,4264355552),aD=am(aD,aE,aB,aC,aF[av+6],ar,2734768916),aC=am(aC,aD,aE,aB,aF[av+13],au,1309151649),aB=am(aB,aC,aD,aE,aF[av+4],an,4149444226),aE=am(aE,aB,aC,aD,aF[av+11],ap,3174756917),aD=am(aD,aE,aB,aC,aF[av+2],ar,718787259),aC=am(aC,aD,aE,aB,aF[av+9],au,3951481745),aB=W(aB,ax),aC=W(aC,ay),aD=W(aD,az),aE=W(aE,aA)
}var aw=aq(aB)+aq(aC)+aq(aD)+aq(aE);
return aw.toLowerCase()
};
aps.registerEvent(aps.event.on_before_request_ads,function(b){try{if(window.Bootstrapper&&window.Bootstrapper.mdHash){aps.cfg.juiceMdUrlHash=Bootstrapper.mdHash
}else{if(HDN.dataLayer&&HDN.dataLayer.visit&&HDN.dataLayer.visit.urlHash){aps.cfg.juiceMdUrlHash=HDN.dataLayer.visit.urlHash
}else{aps.cfg.juiceMdUrlHash=aps.fn.createHash()
}}aps.cfg.page.addBaseKvp("urlhash",aps.cfg.juiceMdUrlHash,true);
aps.fn.setPerformanceMetrics("urlHash",aps.cfg.juiceMdUrlHash)
}catch(a){console.warn("Error Generating Unique Hash")
}})
}();(function(){if(aps.fn.shouldRunThirdParty("blueconic")){var a=this;
aps.registerEvent(aps.event.on_before_request_ads,function(d){if(typeof localStorage.bcDFPTargetingParams!=="undefined"){aps.fn.logInfo("Blueconic segments detected");
try{var b=window.JSON.parse(localStorage.bcDFPTargetingParams);
if(b[0]["key"]=="audiences"&&b[0]["value"].length>0){aps.cfg.page.addPageKvp("bc_audiences",b[0]["value"])
}else{aps.fn.logInfo("Empty blueconic segment detected")
}}catch(c){aps.fn.logInfo("error parsing blueconic data")
}}else{aps.fn.logInfo("Blueconic segments not detected")
}})
}})();(function () {
if(!aps.cfg.serveAds) return;
if(aps.cfg.thirdp.prebid) return;
/* prebid.js v8.19.0
Updated: 2023-10-12
Modules: appnexusBidAdapter, concertBidAdapter, criteoBidAdapter, ixBidAdapter, kargoBidAdapter, openxBidAdapter, prebidServerBidAdapter, pubmaticBidAdapter, rubiconBidAdapter, tripleliftBidAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, gdprEnforcement, gptPreAuction, rtdModule, optimeraRtdProvider, permutiveRtdProvider, userId, criteoIdSystem, id5IdSystem, unifiedIdSystem, identityLinkIdSystem, lotamePanoramaIdSystem, quantcastIdSystem */
if(window.pbjs&&window.pbjs.libLoaded)try{window.pbjs.getConfig("debug")&&console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")}catch(e){}else (function(){
!function(){var n,e={5706:function(n,e,t){t.d(e,{Pd:function(){return s},Th:function(){return d},_U:function(){return f}});var r=t(5730),i=t(4358),o=t(265),a=t(4614),u=(0,t(8640).R)(),c="outstream";function d(n){var e=this,t=n.url,o=n.config,a=n.id,u=n.callback,d=n.loaded,s=n.adUnitCode,f=n.renderNow;this.url=t,this.config=o,this.handlers={},this.id=a,this.renderNow=f,this.loaded=d,this.cmd=[],this.push=function(n){"function"==typeof n?e.loaded?n.call():e.cmd.push(n):(0,i.H)("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||function(){e.loaded=!0,e.process()},this.render=function(){var n=this,e=arguments,o=function(){n._render?n._render.apply(n,e):(0,i.yN)("No render function was provided, please use .setRender on the renderer")};l(s)?((0,i.yN)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(s)),o()):f?o():(this.cmd.unshift(o),(0,r.B)(t,c,this.callback,this.documentContext))}.bind(this)}function s(n){return!(!n||!n.url&&!n.renderNow)}function f(n,e,t){var r=null;n.config&&n.config.documentResolver&&(r=n.config.documentResolver(e,document,t)),r||(r=document),n.documentContext=r,n.render(e,n.documentContext)}function l(n){var e=u.adUnits,t=(0,a.sE)(e,(function(e){return e.code===n}));if(!t)return!1;var r=(0,o.Z)(t,"renderer"),i=!!(r&&r.url&&r.render),c=(0,o.Z)(t,"mediaTypes.video.renderer"),d=!!(c&&c.url&&c.render);return!!(i&&!0!==r.backupOnly||d&&!0!==c.backupOnly)}d.install=function(n){return new d({url:n.url,config:n.config,id:n.id,callback:n.callback,loaded:n.loaded,adUnitCode:n.adUnitCode,renderNow:n.renderNow})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(n){this._render=n},d.prototype.setEventHandlers=function(n){this.handlers=n},d.prototype.handleVideoEvent=function(n){var e=n.id,t=n.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),(0,i.ji)("Prebid Renderer event for id ".concat(e," type ").concat(t))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(n){(0,i.H)("Error processing Renderer command: ",n)}}},4947:function(n,e,t){t.d(e,{EL:function(){return a},Jt:function(){return l},K$:function(){return i},S1:function(){return r},S5:function(){return o},UE:function(){return u},e:function(){return d},g0:function(){return f},oK:function(){return s},x$:function(){return c}});var r="accessDevice",i="syncUser",o="enrichUfpd",a="enrichEids",u="fetchBids",c="reportAnalytics",d="transmitEids",s="transmitUfpd",f="transmitPreciseGeo",l="transmitTid"},286:function(n,e,t){t.d(e,{T:function(){return i}});var r=t(6104),i=(0,t(6310).Oj)((function(n){return r.ZP.resolveAlias(n)}))},9633:function(n,e,t){t.d(e,{UL:function(){return i},XG:function(){return a},_U:function(){return u},wu:function(){return r},y2:function(){return o}});var r="prebid",i="bidder",o="userId",a="rtd",u="analytics"},6310:function(n,e,t){t.d(e,{$k:function(){return u},Hw:function(){return v},IV:function(){return g},JR:function(){return a},Ki:function(){return d},Oj:function(){return p},Qf:function(){return f},Ww:function(){return h},bL:function(){return s},bp:function(){return c},cx:function(){return l}});var r=t(4942),i=t(9633),o=t(2797),a="component",u=a+"Type",c=a+"Name",d="adapterCode",s="storageType",f="configName",l="syncType",g="syncUrl",v="_config";function p(n){return function(e,t,o){var s,f=(s={},(0,r.Z)(s,u,e),(0,r.Z)(s,c,t),(0,r.Z)(s,a,"".concat(e,".").concat(t)),s);return e===i.UL&&(f[d]=n(t)),h(Object.assign(f,o))}}var h=(0,o.z3)("sync",(function(n){return n}))},1087:function(n,e,t){t.d(e,{$8:function(){return f},Db:function(){return p},Mp:function(){return w},RD:function(){return h},ZZ:function(){return l},a:function(){return y},hb:function(){return A},js:function(){return m}});var r=t(1002),i=t(3324),o=t(265),a=t(3193),u=t(571),c=t(4947);function d(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var f=["data","ext.data","yob","gender","keywords","kwarray","id","buyeruid","customdata"].map((function(n){return"user.".concat(n)})),l=["user.eids","user.ext.eids"],g=["user.geo.lat","user.geo.lon","device.geo.lat","device.geo.lon"];function v(n){return Object.assign({get:function(){},run:function(n,e,t,r,i){var o=t&&t[r];if(y(o)&&i()){var a=this.get(o);void 0===a?delete t[r]:t[r]=a}}},n)}function p(n){return n.forEach((function(n){n.paths=n.paths.map((function(n){var e=n.split("."),t=e.pop();return[e.length>0?e.join("."):null,t]}))})),function(e,t){for(var r=[],a=arguments.length,u=new Array(a>2?a-2:0),c=2;c<a;c++)u[c-2]=arguments[c];var s=h.apply(void 0,[e].concat(u));return n.forEach((function(n){if(!1!==e[n.name]){var a,u=d(n.paths);try{for(u.s();!(a=u.n()).done;){var c=(0,i.Z)(a.value,2),f=c[0],l=c[1],g=null==f?t:(0,o.Z)(t,f);if(r.push(n.run(t,f,g,l,s.bind(null,n))),!1===e[n.name])return}}catch(n){u.e(n)}finally{u.f()}}})),r.filter((function(n){return null!=n}))}}function h(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(e){return n.hasOwnProperty(e.name)||(n[e.name]=!!e.applies.apply(e,t)),n[e.name]}}function y(n){return null!=n&&("object"!==(0,r.Z)(n)||Object.keys(n).length>0)}function m(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.xD;return function(t){return!e(n,t)}}function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD;return[{name:c.e,paths:["userId","userIdAsEids"],applies:m(c.e,n)},{name:c.Jt,paths:["ortb2Imp.ext.tid"],applies:m(c.Jt,n)}].map(v)}function w(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD;return[{name:c.oK,paths:f,applies:m(c.oK,n)},{name:c.e,paths:l,applies:m(c.e,n)},{name:c.g0,paths:g,applies:m(c.g0,n),get:function(n){return Math.round(100*(n+Number.EPSILON))/100}},{name:c.Jt,paths:["source.tid"],applies:m(c.Jt,n)}].map(v)}var A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.xD,e=p(w(n)),t=p(b(n));return function(n){var r={};return{ortb2:function(t){return e(r,t,n),t},bidRequest:function(e){return t(r,e,n),e}}}}();(0,u.oB)(c.Jt,"enableTIDs config",(function(){if(!a.vc.getConfig("enableTIDs"))return{allow:!1,reason:"TIDs are disabled"}}))},571:function(n,e,t){t.d(e,{oB:function(){return s},xD:function(){return f}});var r=t(3324),i=t(4358),o=t(6310);function a(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){c=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw o}}}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.qp)("Activity control:"),e={};function t(n){return e[n]=e[n]||[]}function u(e,t,r,i){var a;try{a=r(i)}catch(r){n.logError("Exception in rule ".concat(t," for '").concat(e,"'"),r),a={allow:!1,reason:r}}return a&&Object.assign({activity:e,name:t,component:i[o.JR]},a)}var c={},d=1e3;function s(e){var t=e.activity,r=e.name,i=e.allow,o=e.reason,a=e.component,u="".concat(r," ").concat(i?"allowed":"denied"," '").concat(t,"' for '").concat(a,"'").concat(o?":":""),s=c.hasOwnProperty(u);if(s&&clearTimeout(c[u]),c[u]=setTimeout((function(){return delete c[u]}),d),!s){var f=[u];o&&f.push(o),(i?n.logInfo:n.logWarn).apply(n,f)}}return[function(n,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=t(n),u=a.findIndex((function(n){var e=(0,r.Z)(n,1)[0];return o<e})),c=[o,e,i];return a.splice(u<0?a.length:u,0,c),function(){var n=a.indexOf(c);n>=0&&a.splice(n,1)}},function(n,e){var i,o,c,d=a(t(n));try{for(d.s();!(c=d.n()).done;){var f=(0,r.Z)(c.value,3),l=f[0],g=f[1],v=f[2];if(i!==l&&o)break;i=l;var p=u(n,g,v,e);if(p){if(!p.allow)return s(p),!1;o=p}}}catch(n){d.e(n)}finally{d.f()}return o&&s(o),!0}]}(),d=(0,r.Z)(c,2),s=d[0],f=d[1]},875:function(n,e,t){t.d(e,{f:function(){return a}});var r=t(265),i={};function o(n,e,t){var r=function(n,e){var t=i[n]=i[n]||{bidders:{}};return e?t.bidders[e]=t.bidders[e]||{}:t}(n,t);return r[e]=(r[e]||0)+1,r[e]}var a={incrementRequestsCounter:function(n){return o(n,"requestsCounter")},incrementBidderRequestsCounter:function(n,e){return o(n,"requestsCounter",e)},incrementBidderWinsCounter:function(n,e){return o(n,"winsCounter",e)},getRequestsCounter:function(n){return(0,r.Z)(i,"".concat(n,".requestsCounter"))||0},getBidderRequestsCounter:function(n,e){return(0,r.Z)(i,"".concat(n,".bidders.").concat(e,".requestsCounter"))||0},getBidderWinsCounter:function(n,e){return(0,r.Z)(i,"".concat(n,".bidders.").concat(e,".winsCounter"))||0}}},8525:function(n,e,t){function r(n){var e=n;return{callBids:function(){},setBidderCode:function(n){e=n},getBidderCode:function(){return e}}}t.d(e,{Z:function(){return r}})},6104:function(n,e,t){t.d(e,{O6:function(){return q},uV:function(){return z}});var r=t(9062),i=t(3324),o=t(4942),a=t(4358),u=t(265),c=t(59),d=t(4699),s=t(8928),f=t(3193),l=t(2797),g=t(4614),v=t(875),p=t(5102),h=t(4516),y=t(2021),m=t(5644),b=t(9128),w=t(1176),A=t(9633),C=t(571),T=t(4947),E=t(6310),O=t(1087);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j="pbsBidAdapter",B="client",S="server",U={isAllowed:C.xD,redact:O.hb},R={},P=R.bidderRegistry={},N=R.aliasRegistry={},Z=[];f.vc.getConfig("s2sConfig",(function(n){n&&n.s2sConfig&&(Z=(0,a.kJ)(n.s2sConfig)?n.s2sConfig:[n.s2sConfig])}));var _={},D=(0,E.Oj)((function(n){return R.resolveAlias(n)}));function q(n){return D(A.wu,j,(0,o.Z)({},E.Qf,n.configName))}var x=(0,l.z3)("sync",(function(n){var e=n.bidderCode,t=n.auctionId,r=n.bidderRequestId,i=n.adUnits,o=n.src,c=n.metrics;return i.reduce((function(n,i){var d=i.bids.filter((function(n){return n.bidder===e}));return null==e&&0===d.length&&null!=i.s2sBid&&d.push({bidder:null}),n.push(d.reduce((function(n,e){var d=null==(e=Object.assign({},e,{ortb2Imp:(0,a.Ee)({},i.ortb2Imp,e.ortb2Imp)},(0,a.iG)(i,["nativeParams","nativeOrtbRequest","mediaType","renderer"]))).mediaTypes?i.mediaTypes:e.mediaTypes;return(0,a.FS)(d)?e=Object.assign({},e,{mediaTypes:d}):(0,a.H)("mediaTypes is not correctly configured for adunit ".concat(i.code)),n.push(Object.assign({},e,{adUnitCode:i.code,transactionId:i.transactionId,sizes:(0,u.Z)(d,"banner.sizes")||(0,u.Z)(d,"video.playerSize")||[],bidId:e.bid_id||(0,a._d)(),bidderRequestId:r,auctionId:t,src:o,metrics:c,bidRequestsCount:v.f.getRequestsCounter(i.code),bidderRequestsCount:v.f.getBidderRequestsCounter(i.code,e.bidder),bidderWinsCount:v.f.getBidderWinsCounter(i.code,e.bidder)})),n}),[])),n}),[]).reduce(a.xH,[]).filter((function(n){return""!==n}))}),"getBids");var H=(0,l.z3)("sync",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.getS2SBidders,i=void 0===r?z:r;if(null==e)return n;var o=i(e);return n.filter((function(n){return o.has(n.bidder)}))}),"filterBidsForAdUnit");function M(n,e){var t=(0,a.I8)(n),r=!1;return t.forEach((function(n){var t=n.bids.filter((function(n){var t;return n.module===j&&(null===(t=n.params)||void 0===t?void 0:t.configName)===e.configName}));1===t.length?(n.s2sBid=t[0],r=!0,n.ortb2Imp=(0,a.Ee)({},n.s2sBid.ortb2Imp,n.ortb2Imp)):t.length>1&&(0,a.yN)('Multiple "module" bids for the same s2s configuration; all will be ignored',t),n.bids=H(n.bids,e).map((function(n){return n.bid_id=(0,a._d)(),n}))})),{adUnits:t=t.filter((function(n){return 0!==n.bids.length||null!=n.s2sBid})),hasModuleBids:r}}function F(n){var e=(0,a.I8)(n);return e.forEach((function(n){n.bids=H(n.bids,null)})),e=e.filter((function(n){return 0!==n.bids.length}))}var W=(0,l.z3)("sync",(function(n,e){return n}),"setupAdUnitMediaTypes");function z(n){(0,a.kJ)(n)||(n=[n]);var e=new Set([null]);return n.filter((function(n){return n&&n.enabled})).flatMap((function(n){return n.bidders})).forEach((function(n){return e.add(n)})),e}var L=(0,l.z3)("sync",(function(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.getS2SBidders,u=void 0===i?z:i,c=u(e);return(0,a.pP)(n).reduce((function(n,e){return n[c.has(e)?S:B].push(e),n}),(t={},(0,o.Z)(t,B,[]),(0,o.Z)(t,S,[]),t))}),"partitionBidders");function K(n,e){var t=P[n],r=(null==t?void 0:t.getSpec)&&t.getSpec();if(r&&r[e]&&"function"==typeof r[e])return[r,r[e]]}function G(n,e,t,r){try{(0,a.PN)("Invoking ".concat(n,".").concat(e));for(var i=arguments.length,o=new Array(i>4?i-4:0),u=4;u<i;u++)o[u-4]=arguments[u];f.vc.runWithBidder(n,r.bind.apply(r,[t].concat(o)))}catch(t){(0,a.yN)("Error calling ".concat(e," of ").concat(n))}}function J(n,e,t){if((null==t?void 0:t.src)!==m.os.YZ){var i=K(n,e);null!=i&&G.apply(void 0,[n,e].concat((0,r.Z)(i),[t]))}}function V(n){for(var e=new Set;N.hasOwnProperty(n)&&!e.has(n);)e.add(n),n=N[n];return n}R.makeBidRequests=(0,l.z3)("sync",(function(n,e,t,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6?arguments[6]:void 0;u=(0,b.Bf)(u),y.j8(m.FP.BEFORE_REQUEST_BIDS,n),(0,c.Fb)(n),n.forEach((function(n){(0,a.PO)(n.mediaTypes)||(n.mediaTypes={}),n.bids=n.bids.filter((function(n){return!n.bidder||U.isAllowed(T.UE,D(A.UL,n.bidder))}))})),n=W(n,i);var d=L(n,Z),s=d[B],l=d[S];f.vc.getConfig("bidderSequence")===f.FD&&(s=(0,a.TV)(s));var v=(0,p.nH)(),w=[],C=o.global||{},E=o.bidder||{};function O(n,e){var r=U.redact(null!=e?e:D(A.UL,n.bidderCode)),i=Object.freeze(r.ortb2((0,a.Ee)({source:{tid:t}},C,E[n.bidderCode])));return n.ortb2=i,n.bids=n.bids.map((function(n){return n.ortb2=i,r.bidRequest(n)})),n}Z.forEach((function(r){var i=q(r);if(r&&r.enabled&&U.isAllowed(T.UE,i)){var o=M(n,r),c=o.adUnits,d=o.hasModuleBids,s=(0,a.DO)();(0===l.length&&d?[null]:l).forEach((function(n){var o=(0,a._d)(),d=u.fork(),f=O({bidderCode:n,auctionId:t,bidderRequestId:o,uniquePbsTid:s,bids:x({bidderCode:n,auctionId:t,bidderRequestId:o,adUnits:(0,a.I8)(c),src:m.os.YZ,metrics:d}),auctionStart:e,timeout:r.timeout,src:m.os.YZ,refererInfo:v,metrics:d},i);0!==f.bids.length&&w.push(f)})),c.forEach((function(n){var e=n.bids.filter((function(n){return(0,g.sE)(w,(function(e){return(0,g.sE)(e.bids,(function(e){return e.bidId===n.bid_id}))}))}));n.bids=e})),w.forEach((function(n){void 0===n.adUnitsS2SCopy&&(n.adUnitsS2SCopy=c.filter((function(n){return n.bids.length>0||null!=n.s2sBid})))}))}}));var k=F(n);return s.forEach((function(n){var o=(0,a._d)(),c=u.fork(),d=O({bidderCode:n,auctionId:t,bidderRequestId:o,bids:x({bidderCode:n,auctionId:t,bidderRequestId:o,adUnits:(0,a.I8)(k),labels:i,src:"client",metrics:c}),auctionStart:e,timeout:r,refererInfo:v,metrics:c}),s=P[n];s||(0,a.H)("Trying to make a request for bidder that does not exist: ".concat(n)),s&&d.bids&&0!==d.bids.length&&w.push(d)})),w.forEach((function(n){h.rp.getConsentData()&&(n.gdprConsent=h.rp.getConsentData()),h.nX.getConsentData()&&(n.uspConsent=h.nX.getConsentData()),h.TJ.getConsentData()&&(n.gppConsent=h.TJ.getConsentData())})),w}),"makeBidRequests"),R.callBids=function(n,e,t,r,o,u,c){var d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};if(e.length){var l=e.reduce((function(n,e){return n[Number(void 0!==e.src&&e.src===m.os.YZ)].push(e),n}),[[],[]]),g=(0,i.Z)(l,2),v=g[0],p=g[1],h=[];p.forEach((function(n){for(var e=-1,t=0;t<h.length;++t)if(n.uniquePbsTid===h[t].uniquePbsTid){e=t;break}e<=-1&&h.push(n)}));var b=0;Z.forEach((function(n){if(n&&h[b]&&z(n).has(h[b].bidderCode)){var e=(0,s.OI)(u,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0),i=n.bidders,f=P[n.adapter],l=h[b].uniquePbsTid,g=h[b].adUnitsS2SCopy,v=p.filter((function(n){return n.uniquePbsTid===l}));if(f){var w={ad_units:g,s2sConfig:n,ortb2Fragments:d};if(w.ad_units.length){var A=v.map((function(n){return n.start=(0,a.AB)(),function(){c(n.bidderRequestId),r.apply(n,arguments)}})),C=(0,a.pP)(w.ad_units).filter((function(n){return i.includes(n)}));(0,a.ji)("CALLING S2S HEADER BIDDERS ==== ".concat(C.length>0?C.join(", "):'No bidder specified, using "ortb2Imp" definition(s) only')),v.forEach((function(n){y.j8(m.FP.BID_REQUESTED,I(I({},n),{},{tid:n.auctionId}))})),f.callBids(w,p,t,(function(){return A.forEach((function(n){return n()}))}),e)}}else(0,a.H)("missing "+n.adapter);b++}})),v.forEach((function(n){n.start=(0,a.AB)();var e=P[n.bidderCode];f.vc.runWithBidder(n.bidderCode,(function(){(0,a.ji)("CALLING BIDDER"),y.j8(m.FP.BID_REQUESTED,n)}));var i=(0,s.OI)(u,o?{request:o.request.bind(null,n.bidderCode),done:o.done}:void 0),d=r.bind(n);try{f.vc.runWithBidder(n.bidderCode,e.callBids.bind(e,n,t,d,i,(function(){return c(n.bidderRequestId)}),f.vc.callbackWithBidder(n.bidderCode)))}catch(e){(0,a.H)("".concat(n.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:e,bidRequest:n}),d()}}))}else(0,a.yN)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},R.videoAdapters=[],R.registerBidAdapter=function(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.supportedMediaTypes,o=void 0===i?[]:i;n&&e?"function"==typeof n.callBids?(P[e]=n,h.qh.register(A.UL,e,null===(t=n.getSpec)||void 0===t?void 0:t.call(n).gvlid),(0,g.q9)(o,"video")&&R.videoAdapters.push(e),(0,g.q9)(o,"native")&&c.Sg.push(e)):(0,a.H)("Bidder adaptor error for bidder code: "+e+"bidder must implement a callBids() function"):(0,a.H)("bidAdapter or bidderCode not specified")},R.aliasBidAdapter=function(n,e,t){if(void 0===P[e]){var r=P[n];if(void 0===r){var i=[];Z.forEach((function(t){if(t.bidders&&t.bidders.length){var r=t&&t.bidders;t&&(0,g.q9)(r,e)?N[e]=n:i.push(n)}})),i.forEach((function(n){(0,a.H)('bidderCode "'+n+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}))}else try{var o,u=function(n){var e=[];return(0,g.q9)(R.videoAdapters,n)&&e.push("video"),(0,g.q9)(c.Sg,n)&&e.push("native"),e}(n);if(r.constructor.prototype!=Object.prototype)(o=new r.constructor).setBidderCode(e);else{var s=r.getSpec(),f=t&&t.gvlid;null!=s.gvlid&&null==f&&(0,a.yN)("Alias '".concat(e,"' will NOT re-use the GVL ID of the original adapter ('").concat(s.code,"', gvlid: ").concat(s.gvlid,"). Functionality that requires TCF consent may not work as expected."));var l=t&&t.skipPbsAliasing;o=(0,d.PZ)(Object.assign({},s,{code:e,gvlid:f,skipPbsAliasing:l})),N[e]=n}R.registerBidAdapter(o,e,{supportedMediaTypes:u})}catch(e){(0,a.H)(n+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else(0,a.ji)('alias name "'+e+'" has been already specified.')},R.resolveAlias=function(n){for(var e,t=n;N[t]&&(!e||!e.has(t));)t=N[t],(e=e||new Set).add(t);return t},R.registerAnalyticsAdapter=function(n){var e=n.adapter,t=n.code,r=n.gvlid;e&&t?"function"==typeof e.enableAnalytics?(e.code=t,_[t]={adapter:e,gvlid:r},h.qh.register(A._U,t,r)):(0,a.H)('Prebid Error: Analytics adaptor error for analytics "'.concat(t,'"\n        analytics adapter must implement an enableAnalytics() function')):(0,a.H)("Prebid Error: analyticsAdapter or analyticsCode not specified")},R.enableAnalytics=function(n){(0,a.kJ)(n)||(n=[n]),n.forEach((function(n){var e=_[n.provider];e&&e.adapter?U.isAllowed(T.x$,D(A._U,n.provider,(0,o.Z)({},E.Hw,n)))&&e.adapter.enableAnalytics(n):(0,a.H)("Prebid Error: no analytics adapter found in registry for '".concat(n.provider,"'."))}))},R.getBidAdapter=function(n){return P[n]},R.getAnalyticsAdapter=function(n){return _[n]},R.callTimedOutBidders=function(n,e,t){e=e.map((function(e){return e.params=(0,a.S0)(n,e.adUnitCode,e.bidder),e.timeout=t,e})),e=(0,a.vM)(e,"bidder"),Object.keys(e).forEach((function(n){J(n,"onTimeout",e[n])}))},R.callBidWonBidder=function(n,e,t){e.params=(0,a.S0)(t,e.adUnitCode,e.bidder),v.f.incrementBidderWinsCounter(e.adUnitCode,e.bidder),J(n,"onBidWon",e)},R.callBidBillableBidder=function(n){J(n.bidder,"onBidBillable",n)},R.callSetTargetingBidder=function(n,e){J(n,"onSetTargeting",e)},R.callBidViewableBidder=function(n,e){J(n,"onBidViewable",e)},R.callBidderError=function(n,e,t){J(n,"onBidderError",{error:e,bidderRequest:t})},R.callDataDeletionRequest=(0,l.z3)("sync",(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var o="onDataDeletionRequest";Object.keys(P).filter((function(n){return!N.hasOwnProperty(n)})).forEach((function(n){var t=K(n,o);if(null!=t){var i=w.K.getBidsRequested().filter((function(e){return V(e.bidderCode)===n}));G.apply(void 0,[n,o].concat((0,r.Z)(t),[i],e))}})),Object.entries(_).forEach((function(n){var t,r=(0,i.Z)(n,2),u=r[0],c=r[1],d=null==c||null===(t=c.adapter)||void 0===t?void 0:t[o];if("function"==typeof d)try{d.apply(c.adapter,e)}catch(n){(0,a.H)("error calling ".concat(o," of ").concat(u),n)}}))})),e.ZP=R},4699:function(n,e,t){t.d(e,{BF:function(){return S},JY:function(){return R},PZ:function(){return I},dX:function(){return k}});var r=t(1002),i=t(3324),o=t(8525),a=t(6104),u=t(3193),c=t(9626),d=t(1974),s=t(59),f=t(154),l=t(5644),g=t(2021),v=t(4614),p=t(4358),h=t(2797),y=t(1176),m=t(5975),b=t(9128),w=t(571),A=t(286),C=t(9633),T=t(4947),E=["cpm","ttl","creativeId","netRevenue","currency"],O=["auctionId","transactionId"];function k(n){var e=Array.isArray(n.supportedMediaTypes)?{supportedMediaTypes:n.supportedMediaTypes}:void 0;function t(n){var t=I(n);a.ZP.registerBidAdapter(t,n.code,e)}t(n),Array.isArray(n.aliases)&&n.aliases.forEach((function(e){var r,i,o=e;(0,p.PO)(e)&&(o=e.code,r=e.gvlid,i=e.skipPbsAliasing),a.ZP.aliasRegistry[o]=n.code,t(Object.assign({},n,{code:o,gvlid:r,skipPbsAliasing:i}))}))}function I(n){return Object.assign(new o.Z(n.code),{getSpec:function(){return Object.freeze(Object.assign({},n))},registerSyncs:e,callBids:function(t,r,o,d,s,f){if(Array.isArray(t.bids)){var v=function(n){if((0,w.xD)(T.Jt,(0,A.T)(C.UL,n)))return{bidRequest:function(n){return n},bidderRequest:function(n){return n}};function e(n,e,t){return O.includes(e)?null:Reflect.get(n,e,t)}function t(n,e){var t=new Proxy(n,e);return Object.entries(n).filter((function(n){var e=(0,i.Z)(n,2);return e[0],"function"==typeof e[1]})).forEach((function(e){var r=(0,i.Z)(e,2),o=r[0],a=r[1];return t[o]=a.bind(n)})),t}var r=(0,p.HP)((function(n){return t(n,{get:e})}),(function(n){return n.bidId}));return{bidRequest:r,bidderRequest:function(n){return t(n,{get:function(t,i,o){return"bids"===i?n.bids.map(r):e(t,i,o)}})}}}(t.bidderCode),h={},y=[],E=P(t).measureTime("validate",(function(){return t.bids.filter((function(e){return function(e){if(!n.isBidRequestValid(e))return(0,p.yN)("Invalid bid sent to bidder ".concat(n.code,": ").concat(JSON.stringify(e))),!1;return!0}(v.bidRequest(e))}))}));if(0!==E.length){var k={};E.forEach((function(n){k[n.bidId]=n,n.adUnitCode||(n.adUnitCode=n.placementCode)})),j(n,E.map(v.bidRequest),v.bidderRequest(t),d,f,{onRequest:function(n){return g.j8(l.FP.BEFORE_BIDDER_HTTP,t,n)},onResponse:function(e){s(n.code),y.push(e)},onFledgeAuctionConfigs:function(n){n.forEach((function(n){var e=k[n.bidId];e?S(e.auctionId,e.adUnitCode,n.config):(0,p.yN)("Received fledge auction configuration for an unknown bidId",n)}))},onError:function(e,r){s(n.code),a.ZP.callBidderError(n.code,r,t),g.j8(l.FP.BIDDER_ERROR,{error:r,bidderRequest:t}),(0,p.H)("Server call for ".concat(n.code," failed: ").concat(e," ").concat(r.status,". Continuing without bids."))},onBid:function(e){var t=k[e.requestId];if(t){if(e.adapterCode=t.bidder,function(n,e){var t=m.S.get(e,"allowAlternateBidderCodes")||!1,r=m.S.get(e,"allowedAlternateBidderCodes");if(n&&e&&e!==n&&(r=(0,p.kJ)(r)?r.map((function(n){return n.trim().toLowerCase()})).filter((function(n){return!!n})).filter(p.tT):r,!t||(0,p.kJ)(r)&&"*"!==r[0]&&!r.includes(n)))return!0;return!1}(e.bidderCode,t.bidder))return(0,p.yN)("".concat(e.bidderCode," is not a registered partner or known bidder of ").concat(t.bidder,", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.")),void r.reject(t.adUnitCode,e,l.Gw.Dg);e.originalCpm=e.cpm,e.originalCurrency=e.currency,e.meta=e.meta||Object.assign({},e[t.bidder]);var i=Object.assign((0,c.m)(l.Q_.Q,t),e,(0,p.ei)(t,O));!function(n,e){var t=(0,b.Bf)(e.metrics);t.checkpoint("addBidResponse"),h[n]=!0,t.measureTime("addBidResponse.validate",(function(){return R(n,e)}))?r(n,e):r.reject(n,e,l.Gw.UI)}(t.adUnitCode,i)}else(0,p.yN)("Bidder ".concat(n.code," made bid for unknown request ID: ").concat(e.requestId,". Ignoring.")),r.reject(null,e,l.Gw.Gp)},onCompletion:I})}else I()}function I(){o(),u.vc.runWithBidder(n.code,(function(){g.j8(l.FP.BIDDER_DONE,t),e(y,t.gdprConsent,t.uspConsent,t.gppConsent)}))}}});function e(e,t,r,i){B(n,e,t,r,i)}}var j=(0,h.z3)("sync",(function(n,e,t,i,o,a){var u=a.onRequest,c=a.onResponse,d=a.onFledgeAuctionConfigs,s=a.onError,f=a.onBid,l=a.onCompletion,g=P(t);l=g.startTiming("total").stopBefore(l);var v=g.measureTime("buildRequests",(function(){return n.buildRequests(e,t)}));if(v&&0!==v.length){Array.isArray(v)||(v=[v]);var h=(0,p.yx)(l,v.length);v.forEach((function(e){var t=g.fork();function a(n){null!=n&&(n.metrics=t.fork().renameWith()),f(n)}var l=o((function(r,i){y();try{r=JSON.parse(r)}catch(n){}r={body:r,headers:{get:i.getResponseHeader.bind(i)}},c(r);try{r=t.measureTime("interpretResponse",(function(){return n.interpretResponse(r,e)}))}catch(e){return(0,p.H)("Bidder ".concat(n.code," failed to interpret the server's response. Continuing without bids"),null,e),void h()}var o;r&&(0,p.kJ)(r.fledgeAuctionConfigs)?(d(r.fledgeAuctionConfigs),o=r.bids):o=r,o&&((0,p.kJ)(o)?o.forEach(a):a(o)),h()})),v=o((function(n,e){y(),s(n,e),h()}));u(e);var y=t.startTiming("net");function m(t){var r=e.options;return Object.assign(t,r,{browsingTopics:!(null!=r&&r.hasOwnProperty("browsingTopics")&&!r.browsingTopics)&&(0,w.xD)(T.oK,(0,A.T)(C.UL,n.code))})}switch(e.method){case"GET":i("".concat(e.url).concat(function(n){if(n)return"?".concat("object"===(0,r.Z)(n)?(0,p.Re)(n):n);return""}(e.data)),{success:l,error:v},void 0,m({method:"GET",withCredentials:!0}));break;case"POST":i(e.url,{success:l,error:v},"string"==typeof e.data?e.data:JSON.stringify(e.data),m({method:"POST",contentType:"text/plain",withCredentials:!0}));break;default:(0,p.yN)("Skipping invalid request from ".concat(n.code,". Request type ").concat(e.type," must be GET or POST")),h()}}))}else l()}),"processBidderRequests"),B=(0,h.z3)("async",(function(n,e,t,r,i){var o=u.vc.getConfig("userSync.aliasSyncEnabled");if(n.getUserSyncs&&(o||!a.ZP.aliasRegistry[n.code])){var c=u.vc.getConfig("userSync.filterSettings"),s=n.getUserSyncs({iframeEnabled:!(!c||!c.iframe&&!c.all),pixelEnabled:!(!c||!c.image&&!c.all)},e,t,r,i);s&&(Array.isArray(s)||(s=[s]),s.forEach((function(e){d.k_.registerSync(e.type,n.code,e.url)})),d.k_.bidderDone(n.code))}}),"registerSyncs"),S=(0,h.z3)("sync",(function(n,e){}),"addComponentAuction");function U(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,o=void 0===r?y.K.index:r;if((e.width||0===parseInt(e.width,10))&&(e.height||0===parseInt(e.height,10)))return e.width=parseInt(e.width,10),e.height=parseInt(e.height,10),!0;var a=o.getBidRequest(e),u=o.getMediaTypes(e),c=a&&a.sizes||u&&u.banner&&u.banner.sizes,d=(0,p.sF)(c);if(1===d.length){var s=d[0].split("x"),f=(0,i.Z)(s,2),l=f[0],g=f[1];return e.width=parseInt(l,10),e.height=parseInt(g,10),!0}return!1}function R(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,i=void 0===r?y.K.index:r;function o(){var n=Object.keys(e);return E.every((function(t){return(0,v.q9)(n,t)&&!(0,v.q9)([void 0,null],e[t])}))}function a(n){return"Invalid bid from ".concat(e.bidderCode,". Ignoring bid: ").concat(n)}return n?e?o()?"native"!==e.mediaType||(0,s.r4)(e,{index:i})?"video"!==e.mediaType||(0,f.Dn)(e,{index:i})?!("banner"===e.mediaType&&!U(n,e,{index:i}))||((0,p.H)(a("Banner bids require a width and height")),!1):((0,p.H)(a("Video bid does not have required vastUrl or renderer property")),!1):((0,p.H)(a("Native bid missing some required properties.")),!1):((0,p.H)(a("Bidder ".concat(e.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1):((0,p.yN)("Some adapter tried to add an undefined bid for ".concat(n,".")),!1):((0,p.yN)("No adUnitCode was supplied to addBidResponse."),!1)}function P(n){return(0,b.Bf)(n.metrics).renameWith((function(e){return["adapter.client.".concat(e),"adapters.client.".concat(n.bidderCode,".").concat(e)]}))}},5730:function(n,e,t){t.d(e,{B:function(){return u}});var r=t(4614),i=t(4358),o=new WeakMap,a=["debugging","adloox","criteo","outstream","adagio","spotx","browsi","brandmetrics","justtag","tncId","akamaidap","ftrackId","inskin","hadron","medianet","improvedigital","aaxBlockmeter","confiant","arcspan","airgrid","clean.io","a1Media","geoedge","qortex"];function u(n,e,t,u,c){if(e&&n){if((0,r.q9)(a,e)){u||(u=document);var d=l(u,n);if(d)return t&&"function"==typeof t&&(d.loaded?t():d.callbacks.push(t)),d.tag;var s=o.get(u)||{},f={loaded:!1,tag:null,callbacks:[]};return s[n]=f,o.set(u,s),t&&"function"==typeof t&&f.callbacks.push(t),(0,i.yN)("module ".concat(e," is loading external JavaScript")),function(e,t,r,o){r||(r=document);var a=r.createElement("script");a.type="text/javascript",a.async=!0;var u=l(r,n);u&&(u.tag=a);a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()};a.src=e,o&&(0,i.D9)(a,o);return(0,i.jC)(a,r),a}(n,(function(){f.loaded=!0;try{for(var n=0;n<f.callbacks.length;n++)f.callbacks[n]()}catch(n){(0,i.H)("Error executing callback","adloader.js:loadExternalScript",n)}}),u,c)}(0,i.H)("".concat(e," not whitelisted for loading external JavaScript"))}else(0,i.H)("cannot load external script without url and moduleCode");function l(n,e){var t=o.get(n);return t&&t[e]?t[e]:null}}},8928:function(n,e,t){t.d(e,{OI:function(){return p},hj:function(){return h}});var r=t(3324),i=t(1002),o=t(3193),a=t(4358),u={fetch:window.fetch.bind(window),makeRequest:function(n,e){return new Request(n,e)},timeout:function(n,e){var t=new AbortController,r=setTimeout((function(){t.abort(),(0,a.H)("Request timeout after ".concat(n,"ms"),e),r=null}),n);return{signal:t.signal,done:function(){r&&clearTimeout(r)}}}},c="GET",d="POST",s="Content-Type";function f(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.method||(e?d:c);if(r===c&&e){var i=(0,a.en)(n,t);Object.assign(i.search,e),n=(0,a.Q2)(i)}var o=new Headers(t.customHeaders);o.set(s,t.contentType||"text/plain");var f={method:r,headers:o};return r!==c&&e&&(f.body=e),t.withCredentials&&(f.credentials="include"),t.browsingTopics&&isSecureContext&&(f.browsingTopics=!0),u.makeRequest(n,f)}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.request,r=e.done,i=function(e,t){var r,i,a;null==n||null!=(null===(r=t)||void 0===r?void 0:r.signal)||o.vc.getConfig("disableAjaxTimeout")||(a=u.timeout(n,e),t=Object.assign({signal:a.signal},t));var c=u.fetch(e,t);return null!=(null===(i=a)||void 0===i?void 0:i.done)&&(c=c.finally(a.done)),c};return null==t&&null==r||(i=function(n){return function(e,i){var o=new URL(null==(null==e?void 0:e.url)?e:e.url,document.location).origin,a=n(e,i);return t&&t(o),r&&(a=a.finally((function(){return r(o)}))),a}}(i)),i}function g(n,e){var t=n.status,r=n.statusText,i=void 0===r?"":r,o=n.headers,u=n.url,c=0;function d(n){if(0===c)try{var t,r;c=(new DOMParser).parseFromString(e,null==o||null===(t=o.get(s))||void 0===t||null===(r=t.split(";"))||void 0===r?void 0:r[0])}catch(e){c=null,n&&n(e)}return c}return{readyState:XMLHttpRequest.DONE,status:t,statusText:i,responseText:e,response:e,responseType:"",responseURL:u,get responseXML(){return d(a.H)},getResponseHeader:function(n){return null!=o&&o.has(n)?o.get(n):null},toJSON:function(){return Object.assign({responseXML:d()},this)}}}function v(n,e){var t="object"===(0,i.Z)(e)&&null!=e?e:{success:"function"==typeof e?e:function(){return null},error:function(n,e){return(0,a.H)("Network error",n,e)}},o=t.success,u=t.error;n.then((function(n){return n.text().then((function(e){return[n,e]}))})).then((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1],a=g(t,i);t.ok||304===t.status?o(i,a):u(t.statusText,a)}),(function(){return u("",g({status:0},""))}))}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.request,r=e.done,i=l(n,{request:t,done:r});return function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};v(i(f(n,t,r)),e)}}var h=p();l()},1176:function(n,e,t){t.d(e,{K:function(){return cn}});var r=t(3324),i=t(9062),o=t(4358),a=t(1002),u=t(265),c=t(6463),d=t(59),s=t(8928),f=t(3193);function l(n,e){var t=e?"<![CDATA[".concat(e,"]]>"):"";return'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(n,"]]></VASTAdTagURI>\n        <Impression>").concat(t,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")}function g(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.index,r=void 0===t?cn.index:t,i=n.vastXml?n.vastXml:l(n.vastUrl,n.vastImpUrl),o=r.getAuction(n),a=Number(n.ttl)+15,u={type:"xml",value:i,ttlseconds:a};return f.vc.getConfig("cache.vasttrack")&&(u.bidder=n.bidder,u.bidid=n.requestId,u.aid=n.auctionId),null!=o&&(u.timestamp=o.getAuctionStart()),"string"==typeof n.customCacheKey&&""!==n.customCacheKey&&(u.key=n.customCacheKey),u}function v(n){return{success:function(e){var t;try{t=JSON.parse(e).responses}catch(e){return void n(e,[])}t?n(null,t):n(new Error("The cache server didn't respond with a responses property."),[])},error:function(e,t){n(new Error("Error storing video ad in the cache: ".concat(e,": ").concat(JSON.stringify(t))),[])}}}var p=t(5706),h=t(1974),y=t(2797),m=t(4614),b=t(154),w=t(4679),A=t(5975),C=t(2021),T=t(6104),E=t(5644),O=t(8792),k=t(9128);var I=t(8640),j=h.k_.syncUsers,B="completed";C.on(E.FP.BID_ADJUSTMENT,(function(n){!function(n){var e=function(n,e,t){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.index,u=void 0===a?cn.index:a,c=i.bs,d=void 0===c?A.S:c;t=t||u.getBidRequest(e);var s=null==e?void 0:e.adapterCode,f=(null==e?void 0:e.bidderCode)||(null===(r=t)||void 0===r?void 0:r.bidder),l=d.get(null==e?void 0:e.adapterCode,"adjustAlternateBids"),g=d.getOwn(f,"bidCpmAdjustment")||d.get(l?s:f,"bidCpmAdjustment");if(g&&"function"==typeof g)try{return g(n,Object.assign({},e),t)}catch(n){(0,o.H)("Error during bid adjustment",n)}return n}(n.cpm,n);e>=0&&(n.cpm=e)}(n)}));var S={},U={},R=[],P=(0,I.R)();function N(n){var e=n.adUnits,t=n.adUnitCodes,r=n.callback,i=n.cbTimeout,u=n.labels,c=n.auctionId,d=n.ortb2Fragments,s=n.metrics;s=(0,k.Bf)(s);var l,g,v,p,h=e,y=u,b=t,A=c||(0,o.DO)(),I=i,N=new Set,M=(0,O.P)(),F=[],z=r,L=[],K=[],V=[],Q=[],$=[];function Y(){return{auctionId:A,timestamp:l,auctionEnd:g,auctionStatus:p,adUnits:h,adUnitCodes:b,labels:y,bidderRequests:L,noBids:V,bidsReceived:K,bidsRejected:F,winningBids:Q,timeout:I,metrics:s,seatNonBids:$}}function X(n){if(n||clearTimeout(v),void 0===g){var t=[];n&&((0,o.ji)("Auction ".concat(A," timedOut")),(t=L.filter((function(n){return!N.has(n.bidderRequestId)})).flatMap((function(n){return n.bids}))).length&&C.j8(E.FP.BID_TIMEOUT,t)),p=B,g=Date.now(),s.checkpoint("auctionEnd"),s.timeBetween("requestBids","auctionEnd","requestBids.total"),s.timeBetween("callBids","auctionEnd","requestBids.callBids"),M.resolve(),C.j8(E.FP.AUCTION_END,Y()),q(h,(function(){try{if(null!=z){var r=K.filter((function(n){return b.includes(n.adUnitCode)})).reduce(nn,{});z.apply(P,[r,n,A]),z=null}}catch(n){(0,o.H)("Error executing bidsBackHandler",null,n)}finally{t.length&&T.ZP.callTimedOutBidders(e,t,I);var i=f.vc.getConfig("userSync")||{};i.enableOverride||j(i.syncDelay)}}))}}function en(){f.vc.resetBidder(),(0,o.PN)("Bids Received for Auction with id: ".concat(A),K),p=B,X(!1)}function tn(n){N.add(n)}function rn(n){var e=this;n.forEach((function(n){var e;e=n,L=L.concat(e)}));var t={},r={bidRequests:n,run:function(){v=setTimeout((function(){return X(!0)}),I),p="inProgress",C.j8(E.FP.AUCTION_INIT,Y());var r=function(n,e){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,r=(void 0===t&&cn.index,0),i=!1,u=new Set,c={};function d(){r--,i&&0===r&&n()}function s(n,e,t){return c[e.requestId]=!0,G(e,n),r++,t(d)}function l(n,t){s(n,t,(function(n){var r=J(t);r.mediaType===w.pX?H(e,r,n):(null!=r.native&&"object"===(0,a.Z)(r.native)&&W(r),x(e,r),n())}))}function g(n,t,r){return s(n,t,(function(n){t.rejectionReason=r,(0,o.yN)("Bid from ".concat(t.bidder||"unknown bidder"," was rejected: ").concat(r),t),C.j8(E.FP.BID_REJECTED,t),e.addBidRejected(t),n()}))}function v(){var t=this,a=e.getBidRequests(),d=f.vc.getConfig("auctionOptions");if(u.add(t),d&&!(0,o.xb)(d)){var s=d.secondaryBidders;s&&!a.every((function(n){return(0,m.q9)(s,n.bidderCode)}))&&(a=a.filter((function(n){return!(0,m.q9)(s,n.bidderCode)})))}i=a.every((function(n){return u.has(n)})),t.bids.forEach((function(n){c[n.bidId]||(e.addNoBid(n),C.j8(E.FP.NO_BID,n))})),i&&0===r&&n()}return{addBidResponse:function(){function n(n,e){var t;Z.call({dispatch:l},n,e,(t=!1,function(r){t||(g(n,e,r),t=!0)}))}return n.reject=g,n}(),adapterDone:function(){var n=this;_(O.Z.resolve()).finally((function(){return v.call(n)}))}}}(en,e);T.ZP.callBids(h,n,r.addBidResponse,r.adapterDone,{request:function(n,e){u(S,e),u(t,n),U[n]||(U[n]={SRA:!0,origin:e}),t[n]>1&&(U[n].SRA=!1)},done:function(n){S[n]--,R[0]&&i(R[0])&&R.shift()}},I,tn,d)}};function i(n){var e=!0,t=f.vc.getConfig("maxRequestsPerOrigin")||4;return n.bidRequests.some((function(n){var r=1,i=void 0!==n.src&&n.src===E.os.YZ?"s2s":n.bidderCode;return U[i]&&(!1===U[i].SRA&&(r=Math.min(n.bids.length,t)),S[U[i].origin]+r>t&&(e=!1)),!e})),e&&n.run(),e}function u(n,e){void 0===n[e]?n[e]=1:n[e]++}i(r)||((0,o.yN)("queueing auction due to limited endpoint capacity"),R.push(r))}return C.on(E.FP.SEAT_NON_BID,(function(n){var e;n.auctionId===A&&(e=n.seatnonbid,$=$.concat(e))})),{addBidReceived:function(n){K=K.concat(n)},addBidRejected:function(n){F=F.concat(n)},addNoBid:function(n){V=V.concat(n)},callBids:function(){p="started",l=Date.now();var n=s.measureTime("requestBids.makeRequests",(function(){return T.ZP.makeBidRequests(h,l,A,I,y,d,s)}));(0,o.PN)("Bids Requested for Auction with id: ".concat(A),n),s.checkpoint("callBids"),n.length<1?((0,o.yN)("No valid bid requests returned for auction"),en()):D.call({dispatch:rn,context:this},n)},addWinningBid:function(n){var t=e.find((function(e){return e.transactionId===n.transactionId}));Q=Q.concat(n),T.ZP.callBidWonBidder(n.adapterCode||n.bidder,n,e),t&&!t.deferBilling&&T.ZP.callBidBillableBidder(n)},setBidTargeting:function(n){T.ZP.callSetTargetingBidder(n.adapterCode||n.bidder,n)},getWinningBids:function(){return Q},getAuctionStart:function(){return l},getAuctionEnd:function(){return g},getTimeout:function(){return I},getAuctionId:function(){return A},getAuctionStatus:function(){return p},getAdUnits:function(){return h},getAdUnitCodes:function(){return b},getBidRequests:function(){return L},getBidsReceived:function(){return K},getNoBids:function(){return V},getNonBids:function(){return $},getFPD:function(){return d},getMetrics:function(){return s},end:M.promise}}var Z=(0,y.z3)("sync",(function(n,e,t){this.dispatch.call(null,n,e)}),"addBidResponse"),_=(0,y.z3)("sync",(function(n){return n}),"responsesReady"),D=(0,y.z3)("sync",(function(n){this.dispatch.call(this.context,n)}),"addBidderRequests"),q=(0,y.z3)("async",(function(n,e){e&&e()}),"bidsBackCallback");function x(n,e){!function(n){var e,t=!0===A.S.get(n.bidderCode,"allowZeroCpmBids")?n.cpm>=0:n.cpm>0;n.bidderCode&&(t||n.dealId)&&(e=function(n,e){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).index,r=void 0===t?cn.index:t;if(!e)return{};var i=r.getBidRequest(e),o={},a=Y(e.mediaType,n);X(o,a,e,i),n&&A.S.getOwn(n,E.k2.xn)&&(X(o,A.S.ownSettingsFor(n),e,i),e.sendStandardTargeting=A.S.get(n,"sendStandardTargeting"));e.native&&(o=Object.assign({},o,(0,d.Ur)(e)));return o}(n.bidderCode,n));n.adserverTargeting=Object.assign(n.adserverTargeting||{},e)}(e),(0,k.Bf)(e.metrics).timeSince("addBidResponse","addBidResponse.total"),n.addBidReceived(e),C.j8(E.FP.BID_RESPONSE,e)}function H(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.index,a=void 0===i?cn.index:i,c=!0,d=(0,u.Z)(a.getMediaTypes({requestId:e.originalRequestId||e.requestId,transactionId:e.transactionId}),"video"),s=d&&(0,u.Z)(d,"context"),l=d&&(0,u.Z)(d,"useCacheKey");f.vc.getConfig("cache.url")&&(l||s!==b.gZ)&&(!e.videoCacheKey||f.vc.getConfig("cache.ignoreBidderCacheKey")?(c=!1,K(n,e,t,d)):e.vastUrl||((0,o.H)("videoCacheKey specified but not required vastUrl for video bid"),c=!1)),c&&(x(n,e),t())}var M,F,W=function(n){var e,t,r=null===(e=cn.index.getAdUnit(n))||void 0===e?void 0:e.nativeOrtbRequest,i=null===(t=n.native)||void 0===t?void 0:t.ortb;if(r&&i){var o=(0,d.zq)(i,r);Object.assign(n.native,o)}},z=function(n){!function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.OI,r={puts:n.map(g)};t(f.vc.getConfig("cache.timeout"))(f.vc.getConfig("cache.url"),v(e),JSON.stringify(r),{contentType:"text/plain",withCredentials:!0})}(n.map((function(n){return n.bidResponse})),(function(e,t){t.forEach((function(t,r){var i,a=n[r],u=a.auctionInstance,c=a.bidResponse,d=a.afterBidAdded;e?(0,o.yN)("Failed to save to the video cache: ".concat(e,". Video bid must be discarded.")):""===t.uuid?(0,o.yN)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."):(c.videoCacheKey=t.uuid,c.vastUrl||(c.vastUrl=(i=c.videoCacheKey,"".concat(f.vc.getConfig("cache.url"),"?uuid=").concat(i))),x(u,c),d())}))}))};f.vc.getConfig("cache",(function(n){M="number"==typeof n.cache.batchSize&&n.cache.batchSize>0?n.cache.batchSize:1,F="number"==typeof n.cache.batchTimeout&&n.cache.batchTimeout>0?n.cache.batchTimeout:0}));var L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:setTimeout,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,t=[[]],r=!1,i=function(n){return n()};return function(o,a,u){var c=F>0?n:i;t[t.length-1].length>=M&&t.push([]),t[t.length-1].push({auctionInstance:o,bidResponse:a,afterBidAdded:u}),r||(r=!0,c((function(){t.forEach(e),t=[[]],r=!1}),F))}}(),K=(0,y.z3)("async",(function(n,e,t,r){L(n,e,t)}),"callPrebidCache");function G(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.index,i=void 0===r?cn.index:r,a=i.getBidderRequest(n),u=i.getAdUnit(n),c=a&&a.start||n.requestTimestamp;Object.assign(n,{responseTimestamp:n.responseTimestamp||(0,o.AB)(),requestTimestamp:n.requestTimestamp||c,cpm:parseFloat(n.cpm)||0,bidder:n.bidder||n.bidderCode,adUnitCode:e}),null!=(null==u?void 0:u.ttlBuffer)&&(n.ttlBuffer=u.ttlBuffer),n.timeToRespond=n.responseTimestamp-n.requestTimestamp}function J(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.index,i=void 0===r?cn.index:r;C.j8(E.FP.BID_ADJUSTMENT,n);var o=(null===(e=i.getBidRequest(n))||void 0===e?void 0:e.renderer)||i.getAdUnit(n).renderer,u=n.mediaType,d=i.getMediaTypes(n),s=d&&d[u],l=s&&s.renderer,g=null;l&&l.url&&l.render&&(!0!==l.backupOnly||!n.renderer)?g=l:o&&o.url&&o.render&&(!0!==o.backupOnly||!n.renderer)&&(g=o),g&&(n.renderer=p.Th.install({url:g.url,config:g.options}),n.renderer.setRender(g.render));var v=V(n.mediaType,d,f.vc.getConfig("mediaTypePriceGranularity")),h=(0,c.D)(n.cpm,"object"===(0,a.Z)(v)?v:f.vc.getConfig("customPriceBucket"),f.vc.getConfig("currency.granularityMultiplier"));return n.pbLg=h.low,n.pbMg=h.med,n.pbHg=h.high,n.pbAg=h.auto,n.pbDg=h.dense,n.pbCg=h.custom,n}function V(n,e,t){if(n&&t){if(n===w.pX){var r=(0,u.Z)(e,"".concat(w.pX,".context"),"instream");if(t["".concat(w.pX,"-").concat(r)])return t["".concat(w.pX,"-").concat(r)]}return t[n]}}var Q=function(n){return function(e){var t=n||function(n){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).index,t=void 0===e?cn.index:e,r=V(n.mediaType,t.getMediaTypes(n),f.vc.getConfig("mediaTypePriceGranularity"));return"string"==typeof n.mediaType&&r?"string"==typeof r?r:"custom":f.vc.getConfig("priceGranularity")}(e);return t===E.Ql.B7?e.pbAg:t===E.Ql.uN?e.pbDg:t===E.Ql.yE?e.pbLg:t===E.Ql.M2?e.pbMg:t===E.Ql.lj?e.pbHg:t===E.Ql.qN?e.pbCg:void 0}};function $(n,e){return{key:n,val:"function"==typeof e?function(n,t){return e(n,t)}:function(n){return(0,o.NA)(n,e)}}}function Y(n,e){var t=E.TD,r=Object.assign({},A.S.settingsFor(null));if(r[E.k2.xn]||(r[E.k2.xn]=function(){var n=E.TD;return[$(n.BIDDER,"bidderCode"),$(n.AD_ID,"adId"),$(n.PRICE_BUCKET,Q()),$(n.SIZE,"size"),$(n.DEAL,"dealId"),$(n.SOURCE,"source"),$(n.FORMAT,"mediaType"),$(n.ADOMAIN,(function(n){return n.meta&&n.meta.advertiserDomains&&n.meta.advertiserDomains.length>0?[n.meta.advertiserDomains].flat()[0]:""})),$(n.ACAT,(function(n){return n.meta&&n.meta.primaryCatId?n.meta.primaryCatId:""})),$(n.DSP,(function(n){return n.meta&&(n.meta.networkId||n.meta.networkName)?(0,u.Z)(n,"meta.networkName")||(0,u.Z)(n,"meta.networkId"):""})),$(n.CRID,(function(n){return n.creativeId?n.creativeId:""}))]}()),"video"===n){var i=r[E.k2.xn].slice();if(r[E.k2.xn]=i,[t.UUID,t.CACHE_ID].forEach((function(n){void 0===(0,m.sE)(i,(function(e){return e.key===n}))&&i.push($(n,"videoCacheKey"))})),f.vc.getConfig("cache.url")&&(!e||!1!==A.S.get(e,"sendStandardTargeting"))){var a=(0,o.en)(f.vc.getConfig("cache.url"));void 0===(0,m.sE)(i,(function(n){return n.key===t.CACHE_HOST}))&&i.push($(t.CACHE_HOST,(function(n){return(0,u.Z)(n,"adserverTargeting.".concat(t.CACHE_HOST))?n.adserverTargeting[t.CACHE_HOST]:a.hostname})))}}return r}function X(n,e,t,r){var i=e[E.k2.xn];return t.size=t.getSize(),(i||[]).forEach((function(i){var a=i.key,u=i.val;if(n[a]&&(0,o.yN)("The key: "+a+" is being overwritten"),(0,o.LQ)(u))try{u=u(t,r)}catch(n){(0,o.H)("bidmanager","ERROR",n)}(void 0===e.suppressEmptyKeys||!0!==e.suppressEmptyKeys)&&a!==E.TD.DEAL&&a!==E.TD.ACAT&&a!==E.TD.DSP&&a!==E.TD.CRID||!(0,o.jH)(u)&&null!=u?n[a]=u:(0,o.PN)("suppressing empty key '"+a+"' from adserver targeting")})),n}function nn(n,e){return n[e.adUnitCode]||(n[e.adUnitCode]={bids:[]}),n[e.adUnitCode].bids.push(e),n}function en(n){Object.assign(this,{getAuction:function(e){var t=e.auctionId;if(null!=t)return n().find((function(n){return n.getAuctionId()===t}))},getAdUnit:function(e){var t=e.transactionId;if(null!=t)return n().flatMap((function(n){return n.getAdUnits()})).find((function(n){return n.transactionId===t}))},getMediaTypes:function(n){var e=n.transactionId,t=n.requestId;if(null!=t){var r=this.getBidRequest({requestId:t});if(null!=r&&(null==e||r.transactionId===e))return r.mediaTypes}else if(null!=e){var i=this.getAdUnit({transactionId:e});if(null!=i)return i.mediaTypes}},getBidderRequest:function(e){var t=e.requestId,r=e.bidderRequestId;if(null!=t||null!=r){var i=n().flatMap((function(n){return n.getBidRequests()}));return null!=r&&(i=i.filter((function(n){return n.bidderRequestId===r}))),null==t?i[0]:i.find((function(n){return n.bids&&null!=n.bids.find((function(n){return n.bidId===t}))}))}},getBidRequest:function(e){var t=e.requestId;if(null!=t)return n().flatMap((function(n){return n.getBidRequests()})).flatMap((function(n){return n.bids})).find((function(n){return n&&n.bidId===t}))}})}var tn=t(613),rn=t(8833);function on(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return an(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return an(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function an(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var un="minBidCacheTTL";var cn=function(){var n=null,e=(0,tn.Z)({startTime:function(n){return n.end.then((function(){return n.getAuctionEnd()}))},ttl:function(e){return null==n?null:e.end.then((function(){return 1e3*Math.max.apply(Math,[n].concat((0,i.Z)(e.getBidsReceived().map(rn.N))))}))}});(0,rn.l)((function(){null!=n&&e.refresh()})),f.vc.getConfig(un,(function(t){n!==(n="number"==typeof(n=null==t?void 0:t.minBidCacheTTL)?n:null)&&e.refresh()}));var t={};function a(n){var t,r=on(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i.getAuctionId()===n)return i}}catch(n){r.e(n)}finally{r.f()}}function u(){return e.toArray().flatMap((function(n){return n.getBidsReceived()}))}return t.addWinningBid=function(n){var e=(0,k.Bf)(n.metrics);e.checkpoint("bidWon"),e.timeBetween("auctionEnd","bidWon","render.pending"),e.timeBetween("requestBids","bidWon","render.e2e");var t=a(n.auctionId);t?(n.status=E.UE.fe,t.addWinningBid(n)):(0,o.yN)("Auction not found when adding winning bid")},Object.entries({getAllWinningBids:{name:"getWinningBids"},getBidsRequested:{name:"getBidRequests"},getNoBids:{},getAdUnits:{},getBidsReceived:{pre:function(n){return n.getAuctionStatus()===B}},getAdUnitCodes:{post:o.tT}}).forEach((function(n){var i=(0,r.Z)(n,2),o=i[0],a=i[1],u=a.name,c=void 0===u?o:u,d=a.pre,s=a.post,f=null==d?function(n){return n[c]()}:function(n){return d(n)?n[c]():[]},l=null==s?function(n){return n}:function(n){return n.filter(s)};t[o]=function(){return l(e.toArray().flatMap(f))}})),t.getAllBidsForAdUnitCode=function(n){return u().filter((function(e){return e&&e.adUnitCode===n}))},t.createAuction=function(n){var t=N(n);return function(n){e.add(n)}(t),t},t.findBidByAdId=function(n){return u().find((function(e){return e.adId===n}))},t.getStandardBidderAdServerTargeting=function(){return Y()[E.k2.xn]},t.setStatusForBids=function(n,e){var r=t.findBidByAdId(n);if(r&&(r.status=e),r&&e===E.UE.CK){var i=a(r.auctionId);i&&i.setBidTargeting(r)}},t.getLastAuctionId=function(){var n=e.toArray();return n.length&&n[n.length-1].getAuctionId()},t.clearAllAuctions=function(){e.clear()},t.index=new en((function(){return e.toArray()})),t}()},8833:function(n,e,t){t.d(e,{N:function(){return u},l:function(){return c}});var r=t(3193),i=t(4358),o=1,a=[];function u(n){return n.ttl-(n.hasOwnProperty("ttlBuffer")?n.ttlBuffer:o)}function c(n){a.push(n)}r.vc.getConfig("ttlBuffer",(function(n){"number"==typeof n.ttlBuffer?o!==(o=n.ttlBuffer)&&a.forEach((function(n){return n(o)})):(0,i.H)("Invalid value for ttlBuffer",n.ttlBuffer)}))},5975:function(n,e,t){t.d(e,{S:function(){return g}});var r=t(5671),i=t(3144),o=t(265),a=t(4358),u=t(8640),c=t(5644);function d(n,e){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.add(n)}function s(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}var f=new WeakSet;function l(n){return null==n?this.defaultScope:n}var g=new(function(){function n(e,t){(0,r.Z)(this,n),d(this,f),this.getSettings=e,this.defaultScope=t}return(0,i.Z)(n,[{key:"get",value:function(n,e){var t=this.getOwn(n,e);return void 0===t&&(t=this.getOwn(null,e)),t}},{key:"getOwn",value:function(n,e){return n=s(this,f,l).call(this,n),(0,o.Z)(this.getSettings(),"".concat(n,".").concat(e))}},{key:"getScopes",value:function(){var n=this;return Object.keys(this.getSettings()).filter((function(e){return e!==n.defaultScope}))}},{key:"settingsFor",value:function(n){return(0,a.Ee)({},this.ownSettingsFor(null),this.ownSettingsFor(n))}},{key:"ownSettingsFor",value:function(n){return n=s(this,f,l).call(this,n),this.getSettings()[n]||{}}}]),n}())((function(){return(0,u.R)().bidderSettings||{}}),c.k2.zF)},9626:function(n,e,t){t.d(e,{m:function(){return o}});var r=t(4358);function i(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.src,i=void 0===t?"client":t,o=e.bidder,a=void 0===o?"":o,u=e.bidId,c=e.transactionId,d=e.auctionId,s=i,f=n||0;function l(){switch(f){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}this.bidderCode=a,this.width=0,this.height=0,this.statusMessage=l(),this.adId=(0,r._d)(),this.requestId=u,this.transactionId=c,this.auctionId=d,this.mediaType="banner",this.source=s,this.getStatusCode=function(){return f},this.getSize=function(){return this.width+"x"+this.height},this.getIdentifiers=function(){return{src:this.source,bidder:this.bidderCode,bidId:this.requestId,transactionId:this.transactionId,auctionId:this.auctionId}}}function o(n,e){return new i(n,e)}},3193:function(n,e,t){t.d(e,{FD:function(){return g},vc:function(){return m}});var r=t(4942),i=t(1002),o=t(3324),a=t(6463),u=t(4614),c=t(4358),d=t(265),s=t(5644);function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var l="TRUE"===(0,c.ak)(s.f).toUpperCase(),g="random",v={};v[g]=!0,v.fixed=!0;var p=g,h={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},y="*";var m=function(){var n,e,t,s=[],g=null;function m(){function r(n){return d[n].val}function i(n,e){d[n].val=e}n={};var d={publisherDomain:{set:function(n){null!=n&&(0,c.yN)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),i("publisherDomain",n)}},priceGranularity:{val:h.MEDIUM,set:function(n){g(n)&&("string"==typeof n?i("priceGranularity",f(n)?n:h.MEDIUM):(0,c.PO)(n)&&(i("customPriceBucket",n),i("priceGranularity",h.CUSTOM),(0,c.ji)("Using custom price granularity")))}},customPriceBucket:{val:{},set:function(){}},mediaTypePriceGranularity:{val:{},set:function(n){null!=n&&i("mediaTypePriceGranularity",Object.keys(n).reduce((function(e,t){return g(n[t])?"string"==typeof n?e[t]=f(n[t])?n[t]:r("priceGranularity"):(0,c.PO)(n)&&(e[t]=n[t],(0,c.ji)("Using custom price granularity for ".concat(t))):(0,c.yN)("Invalid price granularity for media type: ".concat(t)),e}),{}))}},bidderSequence:{val:p,set:function(n){v[n]?i("bidderSequence",n):(0,c.yN)("Invalid order: ".concat(n,". Bidder Sequence was not set."))}},auctionOptions:{val:{},set:function(n){(function(n){if(!(0,c.PO)(n))return(0,c.yN)("Auction Options must be an object"),!1;for(var e=0,t=Object.keys(n);e<t.length;e++){var r=t[e];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return(0,c.yN)("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!(0,c.kJ)(n[r]))return(0,c.yN)("Auction Options ".concat(r," must be of type Array")),!1;if(!n[r].every(c.d8))return(0,c.yN)("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!(0,c.jn)(n[r]))return(0,c.yN)("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(n)&&i("auctionOptions",n)}}},s={debug:l,bidderTimeout:3e3,enableSendAllBids:true,useBidCache:false,deviceAccess:true,timeoutBuffer:400,disableAjaxTimeout:false,maxNestedIframes:10};function f(n){return(0,u.sE)(Object.keys(h),(function(e){return n===h[e]}))}function g(n){if(!n)return(0,c.H)("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof n)f(n)||(0,c.yN)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if((0,c.PO)(n)&&!(0,a.t)(n))return(0,c.H)("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}Object.defineProperties(s,Object.fromEntries(Object.entries(d).map((function(n){var e=(0,o.Z)(n,2),t=e[0],a=e[1];return[t,Object.assign({get:r.bind(null,t),set:i.bind(null,t),enumerable:!0},a)]})))),e&&S(Object.keys(e).reduce((function(n,t){return e[t]!==s[t]&&(n[t]=s[t]||{}),n}),{})),e=s,t={}}function b(){if(g&&t&&(0,c.PO)(t[g])){var n=t[g],r=new Set(Object.keys(e).concat(Object.keys(n)));return(0,u.Oc)(r).reduce((function(t,r){return void 0===n[r]?t[r]=e[r]:void 0===e[r]?t[r]=n[r]:(0,c.PO)(n[r])?t[r]=(0,c.Ee)({},e[r],n[r]):t[r]=n[r],t}),{})}return Object.assign({},e)}var w=[b,function(){var n=b();return Object.defineProperty(n,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),n}].map((function(n){return function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?(0,d.Z)(n(),e):b()}return B.apply(void 0,arguments)}})),A=(0,o.Z)(w,2),C=A[0],T=A[1],E=[T,C].map((function(n){return function(){var e=n.apply(void 0,arguments);return e&&"object"===(0,i.Z)(e)&&(e=(0,c.I8)(e)),e}})),O=(0,o.Z)(E,2),k=O[0],I=O[1];function j(t){if((0,c.PO)(t)){var r=Object.keys(t),i={};r.forEach((function(r){var o=t[r];(0,c.PO)(n[r])&&(0,c.PO)(o)&&(o=Object.assign({},n[r],o));try{i[r]=e[r]=o}catch(n){(0,c.yN)("Cannot set config for property ".concat(r," : "),n)}})),S(i)}else(0,c.H)("setConfig options must be an object")}function B(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e;if("string"!=typeof n&&(i=n,n=y,t=e||{}),"function"==typeof i){var o={topic:n,callback:i};return s.push(o),t.init&&i(n===y?T():(0,r.Z)({},n,T(n))),function(){s.splice(s.indexOf(o),1)}}(0,c.H)("listener must be a function")}function S(n){var e=Object.keys(n);s.filter((function(n){return(0,u.q9)(e,n.topic)})).forEach((function(e){e.callback((0,r.Z)({},e.topic,n[e.topic]))})),s.filter((function(n){return n.topic===y})).forEach((function(e){return e.callback(n)}))}function U(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{r(n),n.bidders.forEach((function(r){t[r]||(t[r]={}),Object.keys(n.config).forEach((function(i){var o=n.config[i];if((0,c.PO)(o)){var a=e?c.Ee:Object.assign;t[r][i]=a({},t[r][i]||{},o)}else t[r][i]=o}))}))}catch(n){(0,c.H)(n)}function r(n){if(!(0,c.PO)(n))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(n.bidders)||!n.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!(0,c.PO)(n.config))throw"setBidderConfig bidder options must contain a config object"}}function R(n,e){g=n;try{return e()}finally{P()}}function P(){g=null}return m(),{getCurrentBidder:function(){return g},resetBidder:P,getConfig:T,getAnyConfig:C,readConfig:k,readAnyConfig:I,setConfig:j,mergeConfig:function(n){if((0,c.PO)(n)){var e=(0,c.Ee)(b(),n);return j(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e)),e}(0,c.H)("mergeConfig input must be an object")},setDefaults:function(t){(0,c.PO)(n)?(Object.assign(n,t),Object.assign(e,t)):(0,c.H)("defaults must be an object")},resetConfig:m,runWithBidder:R,callbackWithBidder:function(n){return function(e){return function(){if("function"==typeof e){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return R(n,e.bind.apply(e,[this].concat(r)))}(0,c.yN)("config.callbackWithBidder callback is not a function")}}},setBidderConfig:U,getBidderConfig:function(){return t},mergeBidderConfig:function(n){return U(n,!0)}}}()},4516:function(n,e,t){t.d(e,{$P:function(){return w},NO:function(){return F},TJ:function(){return q},VP:function(){return x},nX:function(){return D},qh:function(){return H},rp:function(){return _}});var r=t(3324),i=t(7326),o=t(9340),a=t(2963),u=t(1120),c=t(5671),d=t(3144),s=t(4942),f=t(8916),l=t(2793),g=t(4358),v=t(8792),p=t(3193);function h(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=(0,u.Z)(n);if(e){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function y(n,e,t){m(n,e),e.set(n,t)}function m(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function b(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}var w=Object.freeze({}),A=new WeakMap,C=new WeakMap,T=new WeakMap,E=new WeakMap,O=new WeakMap,k=new WeakMap,I=new WeakSet,j=function(){function n(){var e,t;(0,c.Z)(this,n),m(e=this,t=I),t.add(e),y(this,A,{writable:!0,value:void 0}),y(this,C,{writable:!0,value:void 0}),y(this,T,{writable:!0,value:void 0}),y(this,E,{writable:!0,value:void 0}),y(this,O,{writable:!0,value:!0}),y(this,k,{writable:!0,value:void 0}),(0,s.Z)(this,"generatedTime",void 0),(0,s.Z)(this,"hashFields",void 0),this.reset()}return(0,d.Z)(n,[{key:"reset",value:function(){(0,l.Z)(this,T,(0,v.P)()),(0,l.Z)(this,A,!1),(0,l.Z)(this,C,null),(0,l.Z)(this,E,!1),this.generatedTime=null}},{key:"enable",value:function(){(0,l.Z)(this,A,!0)}},{key:"enabled",get:function(){return(0,f.Z)(this,A)}},{key:"ready",get:function(){return(0,f.Z)(this,E)}},{key:"promise",get:function(){return(0,f.Z)(this,E)?v.Z.resolve((0,f.Z)(this,C)):((0,f.Z)(this,A)||b(this,I,B).call(this,null),(0,f.Z)(this,T).promise)}},{key:"setConsentData",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,g.AB)();this.generatedTime=e,(0,l.Z)(this,O,!0),b(this,I,B).call(this,n)}},{key:"getConsentData",value:function(){return(0,f.Z)(this,C)}},{key:"hash",get:function(){var n=this;return(0,f.Z)(this,O)&&((0,l.Z)(this,k,(0,g._R)(JSON.stringify((0,f.Z)(this,C)&&this.hashFields?this.hashFields.map((function(e){return(0,f.Z)(n,C)[e]})):(0,f.Z)(this,C)))),(0,l.Z)(this,O,!1)),(0,f.Z)(this,k)}}]),n}();function B(n){(0,l.Z)(this,E,!0),(0,l.Z)(this,C,n),(0,f.Z)(this,T).resolve(n)}var S=function(n){(0,o.Z)(t,n);var e=h(t);function t(){return(0,c.Z)(this,t),e.apply(this,arguments)}return(0,d.Z)(t,[{key:"getConsentMeta",value:function(){var n=this.getConsentData();if(n&&this.generatedTime)return{usp:n,generatedAt:this.generatedTime}}}]),t}(j),U=function(n){(0,o.Z)(t,n);var e=h(t);function t(){var n;(0,c.Z)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=e.call.apply(e,[this].concat(o)),(0,s.Z)((0,i.Z)(n),"hashFields",["gdprApplies","consentString"]),n}return(0,d.Z)(t,[{key:"getConsentMeta",value:function(){var n=this.getConsentData();if(n&&n.vendorData&&this.generatedTime)return{gdprApplies:n.gdprApplies,consentStringSize:(0,g.d8)(n.vendorData.tcString)?n.vendorData.tcString.length:0,generatedAt:this.generatedTime,apiVersion:n.apiVersion}}}]),t}(j),R=function(n){(0,o.Z)(t,n);var e=h(t);function t(){var n;(0,c.Z)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=e.call.apply(e,[this].concat(o)),(0,s.Z)((0,i.Z)(n),"hashFields",["applicableSections","gppString"]),n}return(0,d.Z)(t,[{key:"getConsentMeta",value:function(){if(this.getConsentData()&&this.generatedTime)return{generatedAt:this.generatedTime}}}]),t}(j);var P,N,Z,_=new U,D=new S,q=new R,x=function(){function n(){return!!p.vc.getConfig("coppa")}return{getCoppa:n,getConsentData:n,getConsentMeta:n,reset:function(){},get promise(){return v.Z.resolve(n())},get hash(){return n()?"1":"0"}}}(),H=(P={},N={},Z={},{register:function(n,e,t){t&&((P[e]=P[e]||{})[n]=t,N.hasOwnProperty(e)?N[e]!==t&&(N[e]=Z):N[e]=t)},get:function(n){var e={modules:P[n]||{}};return N.hasOwnProperty(n)&&N[n]!==Z&&(e.gvlid=N[n]),e}}),M={gdpr:_,usp:D,gpp:q,coppa:x};var F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;function e(e){return function(){return Object.fromEntries(n.map((function(n){var t=(0,r.Z)(n,2);return[t[0],t[1][e]()]})))}}return n=Object.entries(n),Object.assign({get promise(){return v.Z.all(n.map((function(n){var e=(0,r.Z)(n,2),t=e[0];return e[1].promise.then((function(n){return[t,n]}))}))).then((function(n){return Object.fromEntries(n)}))},get hash(){return(0,g._R)(n.map((function(n){var e=(0,r.Z)(n,2);e[0];return e[1].hash})).join(":"))}},Object.fromEntries(["getConsentData","getConsentMeta","reset"].map((function(n){return[n,e(n)]}))))}()},6463:function(n,e,t){t.d(e,{D:function(){return f},t:function(){return g}});var r=t(4614),i=t(4358),o=t(3193),a={buckets:[{max:5,increment:.5}]},u={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},d={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},s={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function f(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(n);return isNaN(r)&&(r=""),{low:""===r?"":l(n,a,t),med:""===r?"":l(n,u,t),high:""===r?"":l(n,c,t),auto:""===r?"":l(n,s,t),dense:""===r?"":l(n,d,t),custom:""===r?"":l(n,e,t)}}function l(n,e,t){var a="";if(!g(e))return a;var u=e.buckets.reduce((function(n,e){return n.max>e.max?n:e}),{max:0}),c=0,d=(0,r.sE)(e.buckets,(function(e){if(n>u.max*t){var r=e.precision;void 0===r&&(r=2),a=(e.max*t).toFixed(r)}else{if(n<=e.max*t&&n>=c*t)return e.min=c,e;c=e.max}}));return d&&(a=function(n,e,t){var r=void 0!==e.precision?e.precision:2,a=e.increment*t,u=e.min*t,c=Math.floor,d=o.vc.getConfig("cpmRoundingFunction");"function"==typeof d&&(c=d);var s,f,l=Math.pow(10,r+2),g=(n*l-u*l)/(a*l);try{s=c(g)*a+u}catch(n){f=!0}(f||"number"!=typeof s)&&((0,i.yN)("Invalid rounding function passed in config"),s=Math.floor(g)*a+u);return(s=Number(s.toFixed(10))).toFixed(r)}(n,d,t)),a}function g(n){if((0,i.xb)(n)||!n.buckets||!Array.isArray(n.buckets))return!1;var e=!0;return n.buckets.forEach((function(n){n.max&&n.increment||(e=!1)})),e}},2021:function(n,e,t){t.d(e,{S1:function(){return h},j8:function(){return m},on:function(){return p},vw:function(){return y}});var r=t(4358),i=t(5644),o=t(613),a=t(3193),u="eventHistoryTTL",c=null,d=(0,o.Z)({monotonic:!0,ttl:function(){return c}});a.vc.getConfig(u,(function(n){var e,t=c;n=null===(e=n)||void 0===e?void 0:e[u],t!==(c="number"==typeof n?1e3*n:null)&&d.refresh()}));var s=Array.prototype.slice,f=Array.prototype.push,l=Object.values(i.FP),g=i.aI,v=function(){var n={},e={};function t(e,t){r.ji("Emitting event for: "+e);var i=t[0]||{},o=i[g[e]],a=n[e]||{que:[]},u=Object.keys(a),c=[];d.add({eventType:e,args:i,id:o,elapsedTime:r.bd()}),o&&u.includes(o)&&f.apply(c,a[o].que),f.apply(c,a.que),(c||[]).forEach((function(n){if(n)try{n.apply(null,t)}catch(n){r.H("Error executing handler:","events.js",n)}}))}return e.on=function(e,t,i){if(function(n){return l.includes(n)}(e)){var o=n[e]||{que:[]};i?(o[i]=o[i]||{que:[]},o[i].que.push(t)):o.que.push(t),n[e]=o}else r.H("Wrong event name : "+e+" Valid event names :"+l)},e.emit=function(n){var e=s.call(arguments,1);t(n,e)},e.off=function(e,t,i){var o=n[e];r.xb(o)||r.xb(o.que)&&r.xb(o[i])||i&&(r.xb(o[i])||r.xb(o[i].que))||(i?(o[i].que||[]).forEach((function(n){var e=o[i].que;n===t&&e.splice(e.indexOf(n),1)})):(o.que||[]).forEach((function(n){var e=o.que;n===t&&e.splice(e.indexOf(n),1)})),n[e]=o)},e.get=function(){return n},e.addEvents=function(n){l=l.concat(n)},e.getEvents=function(){return d.toArray().map((function(n){return Object.assign({},n)}))},e}();r.u2(v.emit.bind(v));var p=v.on,h=v.off,y=(v.get,v.getEvents),m=v.emit;v.addEvents},4078:function(n,e,t){t.d(e,{S:function(){return A}});var r=t(3324),i=t(2797),o=t(5102),a=t(8196),u=t(4358),c=t(6475),d=t(3193),s=t(8792),f=["architecture","bitness","model","platformVersion","fullVersionList"],l=["brands","mobile","platform"],g=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(n=window.navigator)||void 0===n?void 0:n.userAgentData,t=e&&l.some((function(n){return void 0!==e[n]}))?Object.freeze(p(1,e)):null;return function(){return t}}(),v=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(n=window.navigator)||void 0===n?void 0:n.userAgentData,t={},r=new WeakMap;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;if(!r.has(n)){var i=Array.from(n);i.sort(),r.set(n,i.join("|"))}var o=r.get(n);if(!t.hasOwnProperty(o))try{t[o]=e.getHighEntropyValues(n).then((function(n){return(0,u.xb)(n)?null:Object.freeze(p(2,n))})).catch((function(){return null}))}catch(n){t[o]=s.Z.resolve(null)}return t[o]}}();function p(n,e){function t(n,e){var t={brand:n};return(0,u.d8)(e)&&!(0,u.jH)(e)&&(t.version=e.split(".")),t}var r={source:n};return e.platform&&(r.platform=t(e.platform,e.platformVersion)),(e.fullVersionList||e.brands)&&(r.browsers=(e.fullVersionList||e.brands).map((function(n){return t(n.brand,n.version)}))),void 0!==e.mobile&&(r.mobile=e.mobile?1:0),["model","bitness","architecture"].forEach((function(n){var t=e[n];(0,u.d8)(t)&&(r[n]=t)})),r}var h=t(3790);function y(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var b={getRefererInfo:o.nH,findRootDomain:a.W,getWindowTop:u.Zy,getWindowSelf:u.e7,getHighEntropySUA:v,getLowEntropySUA:g},w=(0,h.A_)("FPD"),A=(0,i.z3)("sync",(function(n){return s.Z.all([n,(e=d.vc.getConfig("firstPartyData.uaHints"),Array.isArray(e)&&0!==e.length?b.getHighEntropySUA(e):s.Z.resolve(b.getLowEntropySUA())).catch((function(){return null}))]).then((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1],o=b.getRefererInfo();!function(n){["app","site","device"].forEach((function(e){var t=d.vc.getConfig(e);null!=t&&(n[e]=(0,u.Ee)({},t,n[e]))}))}(t),Object.entries(E).forEach((function(n){var e=(0,r.Z)(n,2),i=e[0],a=(0,e[1])(t,o);a&&Object.keys(a).length>0&&(t[i]=(0,u.Ee)({},a,t[i]))})),i&&(0,c.N)(t,"device.sua",Object.assign({},i,t.device.sua)),t=w(t);var a,s=y(h.Iq);try{for(s.s();!(a=s.n()).done;){var f=a.value;if((0,h.Qg)(t,f)){t[f]=(0,u.Ee)({},O(t,o),t[f]);break}}}catch(n){s.e(n)}finally{s.f()}return t}));var e}));function C(n){try{return n(b.getWindowTop())}catch(e){return n(b.getWindowSelf())}}function T(n){return(0,u.iG)(n,Object.keys(n))}var E={site:function(n,e){if(!h.Iq.filter((function(n){return"site"!==n})).some(h.Qg.bind(null,n)))return T({page:e.page,ref:e.ref})},device:function(){return C((function(n){return{w:n.innerWidth||n.document.documentElement.clientWidth||n.document.body.clientWidth,h:n.innerHeight||n.document.documentElement.clientHeight||n.document.body.clientHeight,dnt:(0,u.oV)()?1:0,ua:n.navigator.userAgent,language:n.navigator.language.split("-").shift()}}))},regs:function(){var n={};C((function(n){return n.navigator.globalPrivacyControl}))&&(0,c.N)(n,"ext.gpc",1);var e=d.vc.getConfig("coppa");return"boolean"==typeof e&&(n.coppa=e?1:0),n}};function O(n,e){var t,r,i,a=(0,o.hh)(e.page,{noLeadingWww:!0});return T({domain:a,keywords:null===(t=C((function(n){return n.document.querySelector("meta[name='keywords']")})))||void 0===t||null===(r=t.content)||void 0===r||null===(i=r.replace)||void 0===i?void 0:i.call(r,/\s/g,""),publisher:T({domain:b.findRootDomain(a)})})}},3790:function(n,e,t){t.d(e,{A_:function(){return o},Iq:function(){return i},Qg:function(){return a}});var r=t(4358),i=["dooh","app","site"];function o(n){return function(e){return i.reduce((function(t,i){return a(e,i)&&(null!=t?((0,r.yN)("".concat(n," specifies both '").concat(t,"' and '").concat(i,"'; dropping the latter.")),delete e[i]):t=i),t}),null),e}}function a(n,e){return null!=n[e]&&Object.keys(n[e]).length>0}},8196:function(n,e,t){t.d(e,{W:function(){return o}});var r=t(4358),i=(0,t(5164).eA)("fpdEnrichment"),o=(0,r.HP)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.host;if(!i.cookiesAreEnabled())return n;var e,t,o=n.split(".");if(2===o.length)return n;var a=-2,u="_rdc".concat(Date.now()),c="writeable";do{e=o.slice(a).join(".");var d=new Date((0,r.AB)()+1e4).toUTCString();i.setCookie(u,c,d,"Lax",e,void 0);var s=i.getCookie(u,void 0);s===c?(t=!1,i.setCookie(u,"","Thu, 01 Jan 1970 00:00:01 GMT",void 0,e,void 0)):(a+=-1,t=Math.abs(a)<=o.length)}while(t);return e}))},2797:function(n,e,t){t.d(e,{Bx:function(){return g},Cd:function(){return d},IF:function(){return v},bA:function(){return l},v5:function(){return s},z3:function(){return u}});var r=t(9062),i=t(1432),o=t.n(i),a=t(8792),u=o()({ready:o().SYNC|o().ASYNC|o().QUEUE}),c=(0,a.P)();u.ready=function(){var n=u.ready;return function(){try{return n.apply(u,arguments)}finally{c.resolve()}}}();var d=c.promise,s=u.get;var f={};function l(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.postInstallAllowed,o=void 0!==i&&i;u("async",(function(t){t.forEach((function(n){return e.apply(void 0,(0,r.Z)(n))})),o&&(f[n]=e)}),n)([])}function g(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=f[n];if(i)return i.apply(void 0,t);s(n).before((function(n,e){e.push(t),n(e)}))}function v(n,e){return Object.defineProperties(e,Object.fromEntries(["before","after","getHooks","removeAll"].map((function(e){return[e,{get:function(){return n[e]}}]})))),e}},4679:function(n,e,t){t.d(e,{B5:function(){return r},Mk:function(){return o},Oh:function(){return a},pX:function(){return i}});var r="native",i="video",o="banner",a="adpod"},59:function(n,e,t){t.d(e,{Fb:function(){return B},JL:function(){return q},Sg:function(){return h},Ur:function(){return N},e6:function(){return P},eK:function(){return D},lY:function(){return F},r4:function(){return U},xc:function(){return y},zq:function(){return L}});var r=t(9062),i=t(3324),o=t(4942),a=t(265),u=t(4358),c=t(4614),d=t(1176),s=t(5644),f=t(4679);function l(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var h=[],y=Object.keys(s.FY).map((function(n){return s.FY[n]})),m={image:{ortb:{ver:"1.2",assets:[{required:1,id:1,img:{type:3,wmin:100,hmin:100}},{required:1,id:2,title:{len:140}},{required:1,id:3,data:{type:1}},{required:0,id:4,data:{type:2}},{required:0,id:5,img:{type:1,wmin:20,hmin:20}}]},image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}},b=s.s$,w=s.oF,A=s.V1,C=s.zA,T=s.FY,E=K(A),O=K(b),k={img:1,js:2,1:"img",2:"js"},I=1;function j(n){if(n&&n.type&&function(n){if(!n||!(0,c.q9)(Object.keys(m),n))return(0,u.H)("".concat(n," nativeParam is not supported")),!1;return!0}(n.type)&&(n=m[n.type]),!n||!n.ortb||S(n.ortb))return n}function B(n){n.forEach((function(n){var e=n.nativeParams||(0,a.Z)(n,"mediaTypes.native");e&&(n.nativeParams=j(e)),n.nativeParams&&(n.nativeOrtbRequest=n.nativeParams.ortb||function(n){if(!n&&!(0,u.PO)(n))return void(0,u.H)("Native assets object is empty or not an object: ",n);var e={ver:"1.2",assets:[]};for(var t in n)if(!C.includes(t))if(T.hasOwnProperty(t))if("privacyLink"!==t){var r=n[t],i=0;r.required&&(0,u.jn)(r.required)&&(i=Number(r.required));var o={id:e.assets.length,required:i};if(t in A)o.data={type:b[A[t]]},r.len&&(o.data.len=r.len);else if("icon"===t||"image"===t){if(o.img={type:"icon"===t?w.ICON:w.MAIN},r.aspect_ratios)if((0,u.kJ)(r.aspect_ratios))if(r.aspect_ratios.length){var a=r.aspect_ratios[0],c=a.min_width,d=a.min_height;(0,u.U)(c)&&(0,u.U)(d)?(o.img.wmin=c,o.img.hmin=d):(0,u.H)("image.aspect_ratios min_width or min_height are invalid: ",c,d);var s=r.aspect_ratios.filter((function(n){return n.ratio_width&&n.ratio_height})).map((function(n){return"".concat(n.ratio_width,":").concat(n.ratio_height)}));s.length>0&&(o.img.ext={aspectratios:s})}else(0,u.H)("image.aspect_ratios was passed, but it's empty:",r.aspect_ratios);else(0,u.H)("image.aspect_ratios was passed, but it's not a an array:",r.aspect_ratios);r.sizes&&(2===r.sizes.length&&(0,u.U)(r.sizes[0])&&(0,u.U)(r.sizes[1])?(o.img.w=r.sizes[0],o.img.h=r.sizes[1],delete o.img.hmin,delete o.img.wmin):(0,u.H)("image.sizes was passed, but its value is not an array of integers:",r.sizes))}else"title"===t?o.title={len:r.len||140}:"ext"===t&&(o.ext=r,delete o.required);e.assets.push(o)}else e.privacy=1;else(0,u.H)("Unrecognized native asset code: ".concat(t,". Asset will be ignored."));return e}(n.nativeParams))}))}function S(n){var e=n.assets;if(!Array.isArray(e)||0===e.length)return(0,u.H)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",e),!1;var t=e.map((function(n){return n.id}));return e.length!==new Set(t).size||t.some((function(n){return n!==parseInt(n,10)}))?((0,u.H)("each asset object must have 'id' property, it must be unique and it must be an integer"),!1):n.hasOwnProperty("eventtrackers")&&!Array.isArray(n.eventtrackers)?((0,u.H)("ortb.eventtrackers is not an array. Eventtrackers: ",n.eventtrackers),!1):e.every((function(n){return function(n){if(!(0,u.PO)(n))return(0,u.H)("asset must be an object. Provided asset: ",n),!1;if(n.img){if(!(0,u.hj)(n.img.w)&&!(0,u.hj)(n.img.wmin))return(0,u.H)("for img asset there must be 'w' or 'wmin' property"),!1;if(!(0,u.hj)(n.img.h)&&!(0,u.hj)(n.img.hmin))return(0,u.H)("for img asset there must be 'h' or 'hmin' property"),!1}else if(n.title){if(!(0,u.hj)(n.title.len))return(0,u.H)("for title asset there must be 'len' property defined"),!1}else if(n.data){if(!(0,u.hj)(n.data.type))return(0,u.H)("for data asset 'type' property must be a number"),!1}else if(n.video&&!(Array.isArray(n.video.mimes)&&Array.isArray(n.video.protocols)&&(0,u.hj)(n.video.minduration)&&(0,u.hj)(n.video.maxduration)))return(0,u.H)("video asset is not properly configured"),!1;return!0}(n)}))}function U(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.index,i=void 0===r?d.K.index:r,o=i.getAdUnit(n);if(!o)return!1;var a=o.nativeOrtbRequest,u=(null===(e=n.native)||void 0===e?void 0:e.ortb)||z(n.native,a);return R(u,a)}function R(n,e){if(!(0,a.Z)(n,"link.url"))return(0,u.H)("native response doesn't have 'link' property. Ortb response: ",n),!1;var t=e.assets.filter((function(n){return 1===n.required})).map((function(n){return n.id})),r=n.assets.map((function(n){return n.id})),i=t.every((function(n){return(0,c.q9)(r,n)}));return i||(0,u.H)("didn't receive a bid with all required assets. Required ids: ".concat(t,", but received ids in response: ").concat(r)),i}function P(n,e){var t=e.native.ortb||W(e.native);return"click"===n.action?function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).fetchURL,r=void 0===t?u.hq:t;if(e){var i,o=(n.assets||[]).filter((function(n){return n.link})).reduce((function(n,e){return n[e.id]=e.link,n}),{}),a=(null===(i=n.link)||void 0===i?void 0:i.clicktrackers)||[],c=o[e],d=a;c&&(d=c.clicktrackers||[]),d.forEach((function(n){return r(n)}))}else{var s;((null===(s=n.link)||void 0===s?void 0:s.clicktrackers)||[]).forEach((function(n){return r(n)}))}}(t,null==n?void 0:n.assetId):function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.runMarkup,r=void 0===t?function(n){return(0,u.$8)(n)}:t,i=e.fetchURL,o=void 0===i?u.hq:i,a=(n.eventtrackers||[]).filter((function(n){return n.event===I})).reduce((function(n,e){return k.hasOwnProperty(e.method)&&n[k[e.method]].push(e.url),n}),{img:[],js:[]}),c=a.img,d=a.js;n.imptrackers&&(c=c.concat(n.imptrackers));c.forEach((function(n){return o(n)})),d=d.map((function(n){return'<script async src="'.concat(n,'"><\/script>')})),n.jstracker&&(d=d.concat([n.jstracker]));d.length&&r(d.join("\n"))}(t),n.action}function N(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.index,r=void 0===t?d.K.index:t,i={},o=r.getAdUnit(n);(0,a.Z)(o,"nativeParams.rendererUrl")?n.native.rendererUrl=x(o.nativeParams.rendererUrl):(0,a.Z)(o,"nativeParams.adTemplate")&&(n.native.adTemplate=x(o.nativeParams.adTemplate));var u=!1!==(0,a.Z)(o,"nativeParams.sendTargetingKeys"),c=H(o),s=p(p({},n.native),n.native.ext);return delete s.ext,Object.keys(s).forEach((function(e){var t=c[e],r=x(n.native[e])||x((0,a.Z)(n,"native.ext.".concat(e)));if("adTemplate"!==e&&t&&r){var d=(0,a.Z)(o,"nativeParams.".concat(e,".sendId"));if("boolean"!=typeof d&&(d=(0,a.Z)(o,"nativeParams.ext.".concat(e,".sendId"))),d)r="".concat(t,":").concat(n.adId);var s=(0,a.Z)(o,"nativeParams.".concat(e,".sendTargetingKeys"));"boolean"!=typeof s&&(s=(0,a.Z)(o,"nativeParams.ext.".concat(e,".sendTargetingKeys"))),("boolean"==typeof s?s:u)&&(i[t]=r)}})),i}function Z(n,e,t){var r,i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=o.index,u=void 0===a?d.K.index:a,c={message:"assetResponse",adId:n.adId},f=u.getAdUnit(e),l=e.native;return e.native.ortb?c.ortb=e.native.ortb:null!==(r=f.mediaTypes)&&void 0!==r&&null!==(i=r.native)&&void 0!==i&&i.ortb&&(c.ortb=z(e.native,f.nativeOrtbRequest)),c.assets=[],(null==t?Object.keys(l):t).forEach((function(n){if("adTemplate"===n&&l[n])c.adTemplate=x(l[n]);else if("rendererUrl"===n&&l[n])c.rendererUrl=x(l[n]);else if("ext"===n)Object.keys(l[n]).forEach((function(e){if(l[n][e]){var t=x(l[n][e]);c.assets.push({key:e,value:t})}}));else if(l[n]&&s.FY.hasOwnProperty(n)){var e=x(l[n]);c.assets.push({key:n,value:e})}})),c}var _=Object.fromEntries(Object.entries(s.FY).map((function(n){var e=(0,i.Z)(n,2),t=e[0];return[e[1],t]})));function D(n,e){var t=n.assets.map((function(n){return _[n]}));return Z(n,e,t)}function q(n,e){return Z(n,e,null)}function x(n){return(null==n?void 0:n.url)||n}function H(n){var e={};return(0,a.Z)(n,"nativeParams.ext")&&Object.keys(n.nativeParams.ext).forEach((function(n){e[n]="hb_native_".concat(n)})),p(p({},s.FY),e)}function M(n){if(S(n)){var e,t={},r=l(n.assets);try{var i=function(){var r=e.value;if(r.title){var i={required:!!r.required&&Boolean(r.required),len:r.title.len};t.title=i}else if(r.img){var o={required:!!r.required&&Boolean(r.required)};if(r.img.w&&r.img.h)o.sizes=[r.img.w,r.img.h];else if(r.img.wmin&&r.img.hmin){var a=function(n,e){for(;n&&e&&n!==e;)n>e?n-=e:e-=n;return n||e}(r.img.wmin,r.img.hmin);o.aspect_ratios=[{min_width:r.img.wmin,min_height:r.img.hmin,ratio_width:r.img.wmin/a,ratio_height:r.img.hmin/a}]}r.img.type===w.MAIN?t.image=o:t.icon=o}else if(r.data){var u=Object.keys(b).find((function(n){return b[n]===r.data.type})),c=Object.keys(A).find((function(n){return A[n]===u}));t[c]={required:!!r.required&&Boolean(r.required)},r.data.len&&(t[c].len=r.data.len)}n.privacy&&(t.privacyLink={required:!1})};for(r.s();!(e=r.n()).done;)i()}catch(n){r.e(n)}finally{r.f()}return t}}function F(n){if(!n||!(0,u.kJ)(n))return n;if(!n.some((function(n){var e;return null===(e=((null==n?void 0:n.mediaTypes)||{})[f.B5])||void 0===e?void 0:e.ortb})))return n;var e,t=(0,u.I8)(n),r=l(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;i.mediaTypes&&i.mediaTypes[f.B5]&&i.mediaTypes[f.B5].ortb&&(i.mediaTypes[f.B5]=Object.assign((0,u.ei)(i.mediaTypes[f.B5],C),M(i.mediaTypes[f.B5].ortb)),i.nativeParams=j(i.mediaTypes[f.B5]))}}catch(n){r.e(n)}finally{r.f()}return t}function W(n){var e={link:{},eventtrackers:[]};return Object.entries(n).forEach((function(n){var t=(0,i.Z)(n,2),r=t[0],o=t[1];switch(r){case"clickUrl":e.link.url=o;break;case"clickTrackers":e.link.clicktrackers=Array.isArray(o)?o:[o];break;case"impressionTrackers":(Array.isArray(o)?o:[o]).forEach((function(n){e.eventtrackers.push({event:I,method:k.img,url:n})}));break;case"javascriptTrackers":e.jstracker=Array.isArray(o)?o.join(""):o;break;case"privacyLink":e.privacy=o}})),e}function z(n,e){var t=p(p({},W(n)),{},{assets:[]});function r(n,r){var i=e.assets.find(n);null!=i&&(r(i=(0,u.I8)(i)),t.assets.push(i))}return Object.keys(n).filter((function(e){return!!n[e]})).forEach((function(e){var t=x(n[e]);switch(e){case"title":r((function(n){return null!=n.title}),(function(n){n.title={text:t}}));break;case"image":case"icon":var i="image"===e?w.MAIN:w.ICON;r((function(n){return null!=n.img&&n.img.type===i}),(function(n){n.img={url:t}}));break;default:e in A&&r((function(n){return null!=n.data&&n.data.type===b[A[e]]}),(function(n){n.data={value:t}}))}})),t}function L(n,e){var t={},i=(null==e?void 0:e.assets)||[];t.clickUrl=n.link.url,t.privacyLink=n.privacy;var o,a=l((null==n?void 0:n.assets)||[]);try{var u=function(){var n=o.value,e=i.find((function(e){return n.id===e.id}));n.title?t.title=n.title.text:n.img?t[e.img.type===w.MAIN?"image":"icon"]={url:n.img.url,width:n.img.w,height:n.img.h}:n.data&&(t[E[O[e.data.type]]]=n.data.value)};for(a.s();!(o=a.n()).done;)u()}catch(n){a.e(n)}finally{a.f()}t.impressionTrackers=[];var c,d=[];n.imptrackers&&(c=t.impressionTrackers).push.apply(c,(0,r.Z)(n.imptrackers));var s,f=l((null==n?void 0:n.eventtrackers)||[]);try{for(f.s();!(s=f.n()).done;){var g=s.value;g.event===I&&g.method===k.img&&t.impressionTrackers.push(g.url),g.event===I&&g.method===k.js&&d.push(g.url)}}catch(n){f.e(n)}finally{f.f()}return d=d.map((function(n){return'<script async src="'.concat(n,'"><\/script>')})),null!=n&&n.jstracker&&d.push(n.jstracker),d.length&&(t.javascriptTrackers=d.join("\n")),t}function K(n){var e={};for(var t in n)e[n[t]]=t;return e}},4614:function(n,e,t){function r(n,e,t){return n&&n.includes(e,t)||!1}function i(){return Array.from.apply(Array,arguments)}function o(n,e,t){return n&&n.find(e,t)}t.d(e,{Oc:function(){return i},q9:function(){return r},sE:function(){return o}})},8640:function(n,e,t){t.d(e,{R:function(){return o},z:function(){return a}});var r=window,i=r.pbjs=r.pbjs||{};function o(){return i}function a(n){i.installedModules.push(n)}i.cmd=i.cmd||[],i.que=i.que||[],r===window&&(r._pbjsGlobals=r._pbjsGlobals||[],r._pbjsGlobals.push("pbjs"))},5102:function(n,e,t){t.d(e,{hh:function(){return a},nH:function(){return d}});var r=t(3193),i=t(4358);function o(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(!n)return n;if(/\w+:\/\//.exec(n))return n;var t=e.location.protocol;try{t=e.top.location.protocol}catch(n){}return/^\/\//.exec(n)?t+n:"".concat(t,"//").concat(n)}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.noLeadingWww,r=void 0!==t&&t,i=e.noPort,a=void 0!==i&&i;try{n=new URL(o(n))}catch(n){return}return n=a?n.hostname:n.host,r&&n.startsWith("www.")&&(n=n.substring(4)),n}function u(n){try{var e=n.querySelector("link[rel='canonical']");if(null!==e)return e.href}catch(n){}return null}var c,d=function(n){var e,t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return i.top!==i?n:function(){var o=u(i.document),a=i.location.href;return e===o&&a===t||(e=o,t=a,r=n()),r}}((c=window,function(){var n,e,t,d,s=[],f=function(n){try{if(!n.location.ancestorOrigins)return;return n.location.ancestorOrigins}catch(n){}}(c),l=r.vc.getConfig("maxNestedIframes"),g=!1,v=0,p=!1,h=!1,y=!1;do{var m=n,b=h,w=void 0,A=!1,C=null;h=!1,n=n?n.parent:c;try{w=n.location.href||null}catch(n){A=!0}if(A)if(b){var T=m.context;try{e=C=T.sourceUrl,y=!0,p=!0,n===c.top&&(g=!0),T.canonicalUrl&&(t=T.canonicalUrl)}catch(n){}}else{(0,i.yN)("Trying to access cross domain iframe. Continuing without referrer and location");try{var E=m.document.referrer;E&&(C=E,n===c.top&&(g=!0))}catch(n){}!C&&f&&f[v-1]&&(C=f[v-1],n===c.top&&(y=!0)),C&&!p&&(e=C)}else{if(w&&(e=C=w,p=!1,n===c.top)){g=!0;var O=u(n.document);O&&(t=O)}n.context&&n.context.sourceUrl&&(h=!0)}s.push(C),v++}while(n!==c.top&&v<l);s.reverse();try{d=c.top.document.referrer}catch(n){}var k=g||y?e:null,I=r.vc.getConfig("pageUrl")||t||null,j=r.vc.getConfig("pageUrl")||k||o(I,c);return k&&k.indexOf("?")>-1&&-1===j.indexOf("?")&&(j="".concat(j).concat(k.substring(k.indexOf("?")))),{reachedTop:g,isAmp:p,numIframes:v-1,stack:s,topmostLocation:e||null,location:k,canonicalUrl:I,page:j,domain:a(j)||null,ref:d||null,legacy:{reachedTop:g,isAmp:p,numIframes:v-1,stack:s,referer:e||null,canonicalUrl:I}}}))},5164:function(n,e,t){t.d(e,{Dp:function(){return g},Ld:function(){return p},c$:function(){return v},df:function(){return y},eA:function(){return m}});var r=t(4942),i=t(4358),o=t(5975),a=t(9633),u=t(571),c=t(6310),d=t(4947),s=t(3193),f=t(6104),l=t(286),g="html5",v="cookie",p=[];function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.moduleName,t=n.moduleType,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=o.isAllowed,y=void 0===h?u.xD:h;function m(n,i){var o=e,u=s.vc.getCurrentBidder();return u&&t===a.UL&&f.ZP.aliasRegistry[u]===e&&(o=u),n({valid:y(d.S1,(0,l.T)(t,o,(0,r.Z)({},c.bL,i)))})}function b(n,e,t){if(!t||"function"!=typeof t)return m(n,e);p.push((function(){var r=m(n,e);t(r)}))}var w=function(n,e,t,r,i,o){return b((function(o){if(o&&o.valid){var a=i&&""!==i?" ;domain=".concat(encodeURIComponent(i)):"",u=t&&""!==t?" ;expires=".concat(t):"",c=null!=r&&"none"==r.toLowerCase()?"; Secure":"";document.cookie="".concat(n,"=").concat(encodeURIComponent(e)).concat(u,"; path=/").concat(a).concat(r?"; SameSite=".concat(r):"").concat(c)}}),v,o)},A=function(n,e){return b((function(e){if(e&&e.valid){var t=window.document.cookie.match("(^|;)\\s*"+n+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}),v,e)},C=function(n){return b((function(n){if(n&&n.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(n){}finally{try{localStorage.removeItem("prebid.cookieTest")}catch(n){}}return!1}),g,n)},T=function(n){return b((function(n){return!(!n||!n.valid)&&(0,i.IG)()}),v,n)},E=function(n,e,t){return b((function(t){t&&t.valid&&I()&&window.localStorage.setItem(n,e)}),g,t)},O=function(n,e){return b((function(e){return e&&e.valid&&I()?window.localStorage.getItem(n):null}),g,e)},k=function(n,e){return b((function(e){e&&e.valid&&I()&&window.localStorage.removeItem(n)}),g,e)},I=function(n){return b((function(n){if(n&&n.valid)try{return!!window.localStorage}catch(n){(0,i.H)("Local storage api disabled")}return!1}),g,n)},j=function(n,e){return b((function(e){if(e&&e.valid){var t=[];if((0,i.wn)())for(var r=document.cookie.split(";");r.length;){var o=r.pop(),a=o.indexOf("=");a=a<0?o.length:a,decodeURIComponent(o.slice(0,a).replace(/^\s+/,"")).indexOf(n)>=0&&t.push(decodeURIComponent(o.slice(a+1)))}return t}}),v,e)};return{setCookie:w,getCookie:A,localStorageIsEnabled:C,cookiesAreEnabled:T,setDataInLocalStorage:E,getDataFromLocalStorage:O,removeDataFromLocalStorage:k,hasLocalStorage:I,findSimilarCookies:j}}function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.moduleType,t=n.moduleName,r=n.bidderCode;function i(){throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")}return r?((e&&e!==a.UL||t)&&i(),e=a.UL,t=r):t&&e||i(),h({moduleType:e,moduleName:t})}function m(n){return h({moduleName:n,moduleType:a.wu})}(0,u.oB)(d.S1,"deviceAccess config",(function(){if(!(0,i.wn)())return{allow:!1}})),(0,u.oB)(d.S1,"bidderSettings.*.storageAllowed",(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.S;if(n[c.$k]===a.UL){var t=e.get(n[c.Ki],"storageAllowed");if(t&&!0!==t){var r=n[c.bL];t=Array.isArray(t)?t.some((function(n){return n===r})):t===r}else t=!!t;return t?void 0:{allow:t}}}))},1974:function(n,e,t){t.d(e,{k_:function(){return p}});var r=t(4942),i=t(3324),o=t(4358),a=t(3193),u=t(4614),c=t(5164),d=t(571),s=t(4947),f=t(6310),l=t(9633),g=t(286);a.vc.setDefaults({userSync:(0,o.I8)({syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0})});var v=(0,c.eA)("usersync");var p=function(n){var e={},t={image:[],iframe:[]},c=new Set,d={},v={image:!0,iframe:!1},p=n.config;function h(){if(p.syncEnabled&&n.browserSupportsCookies){try{!function(){if(!v.iframe)return;y(t.iframe,(function(n){var e=(0,i.Z)(n,2),r=e[0],a=e[1];(0,o.ji)("Invoking iframe user sync for bidder: ".concat(r)),(0,o.Vs)(a),function(n,e){n.image=n.image.filter((function(n){return n[0]!==e}))}(t,r)}))}(),function(){if(!v.image)return;y(t.image,(function(n){var e=(0,i.Z)(n,2),t=e[0],r=e[1];(0,o.ji)("Invoking image pixel user sync for bidder: ".concat(t)),(0,o.hq)(r)}))}()}catch(n){return(0,o.H)("Error firing user syncs",n)}t={image:[],iframe:[]}}}function y(n,e){(0,o.TV)(n).forEach(e)}function m(n,e){var t=p.filterSettings;if(function(n,e){if(n.all&&n[e])return(0,o.yN)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(e,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var t=n.all?n.all:n[e],r=n.all?"all":e;if(!t)return!1;var i=t.filter,a=t.bidders;if(i&&"include"!==i&&"exclude"!==i)return(0,o.yN)('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(i,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==a&&!(Array.isArray(a)&&a.length>0&&a.every((function(n){return(0,o.d8)(n)&&"*"!==n}))))return(0,o.yN)('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(t,n)){v[n]=!0;var r=t.all?t.all:t[n],i="*"===r.bidders?[e]:r.bidders,a={include:function(n,e){return!(0,u.q9)(n,e)},exclude:function(n,e){return(0,u.q9)(n,e)}};return a[r.filter||"include"](i,e)}return!v[n]}return a.vc.getConfig("userSync",(function(n){if(n.userSync){var e=n.userSync.filterSettings;(0,o.PO)(e)&&(e.image||e.all||(n.userSync.filterSettings.image={bidders:"*",filter:"include"}))}p=Object.assign(p,n.userSync)})),n.regRule(s.K$,"userSync config",(function(n){if(!p.syncEnabled)return{allow:!1,reason:"syncs are disabled"};if(n[f.$k]===l.UL){var t=n[f.cx],r=n[f.bp];if(!e.canBidderRegisterSync(t,r))return{allow:!1,reason:"".concat(t," syncs are not enabled for ").concat(r)}}})),e.registerSync=function(e,i,a){var u;return c.has(i)?(0,o.ji)('already fired syncs for "'.concat(i,'", ignoring registerSync call')):p.syncEnabled&&(0,o.kJ)(t[e])?i?0!==p.syncsPerBidder&&Number(d[i])>=p.syncsPerBidder?(0,o.yN)('Number of user syncs exceeded for "'.concat(i,'"')):void(n.isAllowed(s.K$,(0,g.T)(l.UL,i,(u={},(0,r.Z)(u,f.cx,e),(0,r.Z)(u,f.IV,a),u)))&&(t[e].push([i,a]),d=function(n,e){return n[e]?n[e]+=1:n[e]=1,n}(d,i))):(0,o.yN)("Bidder is required for registering sync"):(0,o.yN)('User sync type "'.concat(e,'" not supported'))},e.bidderDone=c.add.bind(c),e.syncUsers=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(n)return setTimeout(h,Number(n));h()},e.triggerUserSyncs=function(){p.enableOverride&&e.syncUsers()},e.canBidderRegisterSync=function(n,e){return!p.filterSettings||!m(n,e)},e}(Object.defineProperties({config:a.vc.getConfig("userSync"),isAllowed:d.xD,regRule:d.oB},{browserSupportsCookies:{get:function(){return!(0,o.fr)()&&v.cookiesAreEnabled()}}}))},4358:function(n,e,t){t.d(e,{$8:function(){return sn},$u:function(){return K},AB:function(){return kn},D9:function(){return $n},DO:function(){return S},EE:function(){return k},Ee:function(){return Gn},FS:function(){return Pn},H:function(){return F},HC:function(){return Mn},HP:function(){return Qn},I8:function(){return An},IG:function(){return Bn},LQ:function(){return V},NA:function(){return hn},Ob:function(){return R},PN:function(){return H},PO:function(){return X},Q2:function(){return Ln},R_:function(){return dn},Re:function(){return U},S0:function(){return Nn},SG:function(){return ln},T9:function(){return mn},TV:function(){return wn},U:function(){return xn},Uv:function(){return _n},Vs:function(){return fn},X4:function(){return bn},Yp:function(){return Wn},Zy:function(){return _},_R:function(){return Jn},_d:function(){return B},ak:function(){return G},bd:function(){return In},d8:function(){return Q},dj:function(){return Vn},e7:function(){return D},eB:function(){return L},ei:function(){return Hn},en:function(){return zn},ew:function(){return En},fr:function(){return Tn},hj:function(){return Y},hq:function(){return cn},iG:function(){return Rn},jC:function(){return an},jH:function(){return tn},ji:function(){return x},jn:function(){return nn},kJ:function(){return $},oV:function(){return Zn},or:function(){return qn},pP:function(){return yn},qp:function(){return W},r3:function(){return on},ry:function(){return Yn},sF:function(){return P},tT:function(){return gn},u2:function(){return C},vM:function(){return Un},vZ:function(){return Kn},wn:function(){return jn},xH:function(){return vn},x_:function(){return On},xb:function(){return en},yL:function(){return Cn},yN:function(){return M},yi:function(){return rn},yx:function(){return Sn},zE:function(){return pn},zV:function(){return Dn}});var r,i=t(9062),o=t(4942),a=t(3324),u=t(1002),c=t(3193),d=t(7079),s=t.n(d),f=t(4614),l=t(5644),g=t(8792),v=t(8640),p=Object.prototype.toString,h=Boolean(window.console),y=Boolean(h&&window.console.log),m=Boolean(h&&window.console.info),b=Boolean(h&&window.console.warn),w=Boolean(h&&window.console.error),A=(0,v.R)();function C(n){r=n}function T(){null!=r&&r.apply(void 0,arguments)}var E={checkCookieSupport:Bn,createTrackPixelIframeHtml:function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!n)return"";e&&(n=encodeURI(n));t&&(t='sandbox="'.concat(t,'"'));return"<iframe ".concat(t,' id="').concat(B(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(n,'">\n    </iframe>')},getWindowSelf:D,getWindowTop:_,getWindowLocation:q,insertUserSyncIframe:fn,insertElement:an,isFn:V,triggerPixel:cn,logError:F,logWarn:M,logMessage:x,logInfo:H,parseQS:Fn,formatQS:Wn,deepEqual:Kn},O={};function k(){return O}var I,j=(I=0,function(){return++I});function B(){return j()+Math.random().toString(16).substr(2)}function S(n){return n?(n^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,S)}function U(n){var e="";for(var t in n)n.hasOwnProperty(t)&&(e+=t+"="+encodeURIComponent(n[t])+"&");return e=e.replace(/&$/,"")}function R(n){return n&&Object.getOwnPropertyNames(n).length>0?Object.keys(n).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))})).join("&"):""}function P(n){return"string"==typeof n?n.split(",").filter((function(n){return n.match(/^(\d)+x(\d)+$/i)})):"object"===(0,u.Z)(n)?2===n.length&&"number"==typeof n[0]&&"number"==typeof n[1]?[N(n)]:n.map(N):[]}function N(n){if(Z(n))return n[0]+"x"+n[1]}function Z(n){return $(n)&&2===n.length&&!isNaN(n[0])&&!isNaN(n[1])}function _(){return window.top}function D(){return window.self}function q(){return window.location}function x(){L()&&y&&console.log.apply(console,z(arguments,"MESSAGE:"))}function H(){L()&&m&&console.info.apply(console,z(arguments,"INFO:"))}function M(){L()&&b&&console.warn.apply(console,z(arguments,"WARNING:")),T(l.FP.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function F(){L()&&w&&console.error.apply(console,z(arguments,"ERROR:")),T(l.FP.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function W(n){function e(e){return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.apply(void 0,[n].concat(r))}}return{logError:e(F),logWarn:e(M),logMessage:e(x),logInfo:e(H)}}function z(n,e){n=[].slice.call(n);var t=c.vc.getCurrentBidder();return e&&n.unshift(e),t&&n.unshift(r("#aaa")),n.unshift(r("#3b88c3")),n.unshift("%cPrebid"+(t?"%c".concat(t):"")),n;function r(n){return"display: inline-block; color: #fff; background: ".concat(n,"; padding: 1px 4px; border-radius: 3px;")}}function L(){return!!c.vc.getConfig("debug")}function K(){var n=document.createElement("iframe");return n.id=B(),n.height=0,n.width=0,n.border="0px",n.hspace="0",n.vspace="0",n.marginWidth="0",n.marginHeight="0",n.style.border="0",n.scrolling="no",n.frameBorder="0",n.src="about:blank",n.style.display="none",n.style.height="0px",n.style.width="0px",n.allowtransparency="true",n}function G(n){return Fn(q().search)[n]||""}function J(n,e){return p.call(n)==="[object "+e+"]"}function V(n){return J(n,"Function")}function Q(n){return J(n,"String")}var $=Array.isArray.bind(Array);function Y(n){return J(n,"Number")}function X(n){return J(n,"Object")}function nn(n){return J(n,"Boolean")}function en(n){return!n||($(n)||Q(n)?!(n.length>0):Object.keys(n).length<=0)}function tn(n){return Q(n)&&(!n||0===n.length)}function rn(n,e){var t=this;if(V(null==n?void 0:n.forEach))return n.forEach(e,this);Object.entries(n||{}).forEach((function(n){var r=(0,a.Z)(n,2),i=r[0],o=r[1];return e.call(t,o,i)}))}function on(n,e){return V(null==n?void 0:n.includes)&&n.includes(e)}function an(n,e,t,r){var i;e=e||document,i=t?e.getElementsByTagName(t):e.getElementsByTagName("head");try{if((i=i.length?i:e.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(n,o)}}catch(n){}}function un(n,e){var t=null;return new g.Z((function(r){var i=function e(){n.removeEventListener("load",e),n.removeEventListener("error",e),null!=t&&window.clearTimeout(t),r()};n.addEventListener("load",i),n.addEventListener("error",i),null!=e&&(t=window.setTimeout(i,e))}))}function cn(n,e,t){var r=new Image;e&&E.isFn(e)&&un(r,t).then(e),r.src=n}function dn(n){var e=n.source,t=n.burl;e===l.os.YZ&&t&&E.triggerPixel(t)}function sn(n){if(n){var e,t=K();E.insertElement(t,document,"body"),(e=t.contentWindow.document).open(),e.write(n),e.close()}}function fn(n,e,t){var r=E.createTrackPixelIframeHtml(n,!1,"allow-scripts allow-same-origin"),i=document.createElement("div");i.innerHTML=r;var o=i.firstChild;e&&E.isFn(e)&&un(o,t).then(e),E.insertElement(o,document,"html",!0)}function ln(n){if(!n)return"";var e='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return e+='<img src="'+encodeURI(n)+'"></div>'}function gn(n,e,t){return t.indexOf(n)===e}function vn(n,e){return n.concat(e)}function pn(n,e){if(n)return e.flatMap((function(n){return n.bids})).find((function(e){return["bidId","adId","bid_id"].some((function(t){return e[t]===n}))}))}function hn(n,e){return n[e]}function yn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.adUnits;return n.map((function(n){return n.bids.map((function(n){return n.bidder})).reduce(vn,[])})).reduce(vn,[]).filter((function(n){return void 0!==n})).filter(gn)}function mn(){if(window.googletag&&V(window.googletag.pubads)&&V(window.googletag.pubads().getSlots))return!0}function bn(){if(window.apntag&&V(window.apntag.getTag))return!0}function wn(n){for(var e=n.length;e>0;){var t=Math.floor(Math.random()*e),r=n[--e];n[e]=n[t],n[t]=r}return n}function An(n){return s()(n)}function Cn(){try{return E.getWindowSelf()!==E.getWindowTop()}catch(n){return!0}}function Tn(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}function En(n,e){if(n)return n.replace(/\$\{AUCTION_PRICE\}/g,e)}function On(n,e){if(n&&e&&"string"==typeof e)return n.replace(/\${CLICKTHROUGH}/g,e)}function kn(){return(new Date).getTime()}function In(){return window.performance&&window.performance.now&&window.performance.now()||0}function jn(){return!1!==c.vc.getConfig("deviceAccess")}function Bn(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}function Sn(n,e){if(e<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(e));var t=0;return function(){++t===e&&n.apply(this,arguments)}}function Un(n,e){return n.reduce((function(n,t){return(n[t[e]]=n[t[e]]||[]).push(t),n}),{})}function Rn(n,e){return e.filter((function(e){return n[e]})).reduce((function(e,t){return Object.assign(e,(0,o.Z)({},t,n[t]))}),{})}function Pn(n){var e=["banner","native","video"];return!!Object.keys(n).every((function(n){return(0,f.q9)(e,n)}))&&(!n.video||!n.video.context||(0,f.q9)(["instream","outstream","adpod"],n.video.context))}function Nn(n,e,t){return n.filter((function(n){return n.code===e})).flatMap((function(n){return n.bids})).filter((function(n){return n.bidder===t})).map((function(n){return n.params||{}}))}function Zn(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack}var _n=function(n,e){return n.getAdUnitPath()===e||n.getSlotElementId()===e};function Dn(n){return function(e){return _n(n,e)}}function qn(n,e){var t=Object.keys(n.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(n.code," is a ").concat(t," ad unit\n    containing bidders that don't support ").concat(t,": ").concat(e,".\n    This bidder won't fetch demand.\n  ")}var xn=Number.isInteger.bind(Number);function Hn(n,e){return"object"!==(0,u.Z)(n)?{}:e.reduce((function(t,r,i){if("function"==typeof r)return t;var o=r,a=r.match(/^(.+?)\sas\s(.+?)$/i);a&&(r=a[1],o=a[2]);var u=n[r];return"function"==typeof e[i+1]&&(u=e[i+1](u,t)),void 0!==u&&(t[o]=u),t}),{})}function Mn(n,e){return $(n)&&(!e||n.length===e)&&n.every((function(n){return xn(n)}))}function Fn(n){return n?n.replace(/^\?/,"").split("&").reduce((function(n,e){var t=e.split("="),r=(0,a.Z)(t,2),i=r[0],o=r[1];return/\[\]$/.test(i)?(n[i=i.replace("[]","")]=n[i]||[],n[i].push(o)):n[i]=o||"",n}),{}):{}}function Wn(n){return Object.keys(n).map((function(e){return Array.isArray(n[e])?n[e].map((function(n){return"".concat(e,"[]=").concat(n)})).join("&"):"".concat(e,"=").concat(n[e])})).join("&")}function zn(n,e){var t=document.createElement("a");e&&"noDecodeWholeURL"in e&&e.noDecodeWholeURL?t.href=n:t.href=decodeURIComponent(n);var r=e&&"decodeSearchAsString"in e&&e.decodeSearchAsString;return{href:t.href,protocol:(t.protocol||"").replace(/:$/,""),hostname:t.hostname,port:+t.port,pathname:t.pathname.replace(/^(?!\/)/,"/"),search:r?t.search:E.parseQS(t.search||""),hash:(t.hash||"").replace(/^#/,""),host:t.host||window.location.host}}function Ln(n){return(n.protocol||"http")+"://"+(n.host||n.hostname+(n.port?":".concat(n.port):""))+(n.pathname||"")+(n.search?"?".concat(E.formatQS(n.search||"")):"")+(n.hash?"#".concat(n.hash):"")}function Kn(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.checkTypes,i=void 0!==r&&r;if(n===e)return!0;if("object"!==(0,u.Z)(n)||null===n||"object"!==(0,u.Z)(e)||null===e||i&&n.constructor!==e.constructor)return!1;if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var o in n){if(!e.hasOwnProperty(o))return!1;if(!Kn(n[o],e[o],{checkTypes:i}))return!1}return!0}function Gn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];if(!t.length)return n;var a=t.shift();if(X(n)&&X(a)){var u=function(e){X(a[e])?(n[e]||Object.assign(n,(0,o.Z)({},e,{})),Gn(n[e],a[e])):$(a[e])?n[e]?$(n[e])&&a[e].forEach((function(t){for(var r=1,i=0;i<n[e].length;i++)if(Kn(n[e][i],t)){r=0;break}r&&n[e].push(t)})):Object.assign(n,(0,o.Z)({},e,(0,i.Z)(a[e]))):Object.assign(n,(0,o.Z)({},e,a[e]))};for(var c in a)u(c)}return Gn.apply(void 0,[n].concat(t))}function Jn(n){for(var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(n,e){if(V(Math.imul))return Math.imul(n,e);var t=(4194303&n)*(e|=0);return 4290772992&n&&(t+=(4290772992&n)*e|0),0|t},i=3735928559^t,o=1103547991^t,a=0;a<n.length;a++)i=r(i^(e=n.charCodeAt(a)),2654435761),o=r(o^e,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()}function Vn(n){try{return JSON.parse(n)}catch(n){}}function Qn(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return n},t=new Map,r=function(){var r=e.apply(this,arguments);return t.has(r)||t.set(r,n.apply(this,arguments)),t.get(r)};return r.clear=t.clear.bind(t),r}function $n(n,e){Object.entries(e).forEach((function(e){var t=(0,a.Z)(e,2),r=t[0],i=t[1];return n.setAttribute(r,i)}))}function Yn(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(n){return n},r=0,i=n.length&&n.length-1,o=t(e);i-r>1;){var a=r+Math.round((i-r)/2);o>t(n[a])?r=a:i=a}for(;n.length>r&&o>t(n[r]);)r++;return r}},9128:function(n,e,t){t.d(e,{Bf:function(){return h},V6:function(){return m},g3:function(){return w}});var r=t(3324),i=t(3193);function o(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return u=n.done,n},e:function(n){c=!0,o=n},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var u="performanceMetrics",c=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()},d=new WeakMap;function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.now,t=void 0===e?c:e,r=n.mkNode,i=void 0===r?g:r,o=n.mkTimer,a=void 0===o?l:o,u=n.mkRenamer,s=void 0===u?function(n){return n}:u,f=n.nodes,v=void 0===f?d:f;return function(){return function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return{forEach:function(e){e(n)}}};function o(n){return function(t){return e.dfWalk({visit:function(e,r){var i=r[n];if(i.hasOwnProperty(t))return i[t]}})}}r=s(r);var u=o("timestamps");function c(n,t){var i=r(n);e.dfWalk({follow:function(n,e){return e.propagate&&(!n||!n.stopPropagation)},visit:function(n,e){i.forEach((function(r){null==n?e.metrics[r]=t:(e.groups.hasOwnProperty(r)||(e.groups[r]=[]),e.groups[r].push(t))}))}})}function d(n){e.timestamps[n]=t()}function f(n,e){var r=u(n),i=null!=r?t()-r:null;return null!=e&&c(e,i),i}function l(n,e,t){var r=u(n),i=u(e),o=null!=r&&null!=i?i-r:null;return null!=t&&c(t,o),o}function g(n){return a(t,(function(e){return c(n,e)}))}function p(n,e){return g(n).stopAfter(e)()}function h(n,e,t){var r=g(n);return t(function(n){var e=r.stopBefore(n);return e.bail=n.bail&&r.stopBefore(n.bail),e.stopTiming=r,e.untimed=n,e}(e))}function y(){var n={};return e.dfWalk({visit:function(e,t){n=Object.assign({},!e||e.includeGroups?t.groups:null,t.metrics,n)}}),n}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.propagate,a=void 0===o||o,u=t.stopPropagation,c=void 0!==u&&u,d=t.includeGroups,s=void 0!==d&&d;return n(i([[e,{propagate:a,stopPropagation:c,includeGroups:s}]]),r)}function b(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.propagate,i=void 0===r||r,o=t.stopPropagation,a=void 0!==o&&o,u=t.includeGroups,c=void 0!==u&&u,d=v.get(n);null!=d&&d.addParent(e,{propagate:i,stopPropagation:a,includeGroups:c})}function w(t){return n(e,t)}function A(){return n(e.newSibling(),r)}var C={startTiming:g,measureTime:p,measureHookTime:h,checkpoint:d,timeSince:f,timeBetween:l,setMetric:c,getMetrics:y,fork:m,join:b,newMetrics:A,renameWith:w,toJSON:function(){return y()}};return v.set(C,e),C}(i([]))}}function f(n,e,t){return function(){e&&e();try{return n.apply(this,arguments)}finally{t&&t()}}}function l(n,e){var t=n(),r=!1;function i(){r||(e(n()-t),r=!0)}return i.stopBefore=function(n){return f(n,i)},i.stopAfter=function(n){return f(n,null,i)},i}function g(n){return{metrics:{},timestamps:{},groups:{},addParent:function(e,t){n.push([e,t])},newSibling:function(){return g(n.slice())},dfWalk:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.visit,a=t.follow,u=void 0===a?function(){return!0}:a,c=t.visited,d=void 0===c?new Set:c,s=t.inEdge;if(!d.has(this)){if(d.add(this),null!=(e=i(s,this)))return e;var f,l=o(n);try{for(l.s();!(f=l.n()).done;){var g=(0,r.Z)(f.value,2),v=g[0],p=g[1];if(u(s,p)&&null!=(e=v.dfWalk({visit:i,follow:u,visited:d,inEdge:p})))return e}}catch(n){l.e(n)}finally{l.f()}}}}}var v=function(){var n=function(){},e=function(){return{}},t={forEach:n},r=function(){return null};r.stopBefore=function(n){return n},r.stopAfter=function(n){return n};var i=Object.defineProperties({dfWalk:n,newSibling:function(){return i},addParent:n},Object.fromEntries(["metrics","timestamps","groups"].map((function(n){return[n,{get:e}]}))));return s({now:function(){return 0},mkNode:function(){return i},mkRenamer:function(){return function(){return t}},mkTimer:function(){return r},nodes:{get:n,set:n}})()}(),p=!0;function h(n){return p&&n||v}i.vc.getConfig(u,(function(n){p=!!n[u]}));var y,m=(y=s(),function(){return p?y():v});function b(n,e){return function(t,r){return function(i){for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];var c=this;return h(e.apply(c,a)).measureHookTime(n+t,i,(function(n){return r.call.apply(r,[c,n].concat(a))}))}}}var w=b("requestBids.",(function(n){return n.metrics}));b("addBidResponse.",(function(n,e){return e.metrics}))},8792:function(n,e,t){t.d(e,{P:function(){return h},Z:function(){return v}});var r=t(3324),i=t(5671),o=t(3144),a=t(8916),u=t(2793);function c(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}function d(n,e,t){return function(n,e){if(n!==e)throw new TypeError("Private static access of wrong provenance")}(n,e),t}var s=0,f=1,l=new WeakMap,g=new WeakMap,v=function(){function n(e){if((0,i.Z)(this,n),c(this,l,{writable:!0,value:void 0}),c(this,g,{writable:!0,value:void 0}),"function"!=typeof e)throw new Error("resolver not a function");var t=[],o=[],a=[s,f].map((function(n){return function(e){if(n===s&&"function"==typeof(null==e?void 0:e.then))e.then(v,p);else if(!t.length)for(t.push(n,e);o.length;)o.shift()()}})),d=(0,r.Z)(a,2),v=d[0],p=d[1];try{e(v,p)}catch(n){p(n)}(0,u.Z)(this,l,t),(0,u.Z)(this,g,o)}return(0,o.Z)(n,[{key:"then",value:function(n,e){var t=this,i=(0,a.Z)(this,l);return new this.constructor((function(o,u){var c=function(){var t=i[1],a=i[0]===s?[n,o]:[e,u],c=(0,r.Z)(a,2),d=c[0],f=c[1];if("function"==typeof d){try{t=d(t)}catch(n){return void u(n)}f=o}f(t)};i.length?c():(0,a.Z)(t,g).push(c)}))}},{key:"catch",value:function(n){return this.then(null,n)}},{key:"finally",value:function(n){var e,t=this;return this.then((function(t){return e=t,n()}),(function(r){return e=t.constructor.reject(r),n()})).then((function(){return e}))}}],[{key:"timeout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new n((function(n){0===e?n():setTimeout(n,e)}))}},{key:"race",value:function(e){var t=this;return new this((function(r,i){d(t,n,p).call(t,e,(function(n,e){return n?r(e):i(e)}))}))}},{key:"all",value:function(e){var t=this;return new this((function(r,i){var o=[];d(t,n,p).call(t,e,(function(n,e,t){return n?o[t]=e:i(e)}),(function(){return r(o)}))}))}},{key:"allSettled",value:function(e){var t=this;return new this((function(r){var i=[];d(t,n,p).call(t,e,(function(n,e,t){return i[t]=n?{status:"fulfilled",value:e}:{status:"rejected",reason:e}}),(function(){return r(i)}))}))}},{key:"resolve",value:function(n){return new this((function(e){return e(n)}))}},{key:"reject",value:function(n){return new this((function(e,t){return t(n)}))}}]),n}();function p(n,e,t){var r=this,i=n.length;function o(){e.apply(this,arguments),--i<=0&&t&&t()}0===n.length&&t?t():n.forEach((function(n,e){return r.resolve(n).then((function(n){return o(!0,n,e)}),(function(n){return o(!1,n,e)}))}))}function h(){var n,e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.promiseFactory,i=void 0===r?function(n){return new v(n)}:r;function o(n){return function(e){return n(e)}}return{promise:i((function(t,r){n=t,e=r})),resolve:o(n),reject:o(e)}}},1136:function(n,e,t){function r(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return u=n.done,n},e:function(n){c=!0,a=n},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw a}}}}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return n===e?0:n<e?-1:1}function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n){return n};return function(e,t){return o(n(e),n(t))}}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return function(e,t){return-n(e,t)||0}}function c(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n,t){var i,o=r(e);try{for(o.s();!(i=o.n()).done;){var a=(0,i.value)(n,t);if(0!==a)return a}}catch(n){o.e(n)}finally{o.f()}return 0}}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return function(e,t){return n(t,e)<0?t:e}}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return d(u(n))}t.d(e,{K$:function(){return v},LT:function(){return d},ZH:function(){return g},xI:function(){return a}});var f=a((function(n){return n.cpm})),l=a((function(n){return n.responseTimestamp})),g=s(c(f,u(a((function(n){return n.timeToRespond}))))),v=s(c(f,u(l)));s(c(f,l))},613:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(4942),i=t(3324),o=t(8792),a=t(4358);function u(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function d(){var n,e,t,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=c.startTime,s=void 0===d?a.AB:d,f=c.ttl,l=void 0===f?function(){return null}:f,g=c.monotonic,v=void 0!==g&&g,p=c.slack,h=void 0===p?5e3:p,y=new Map,m=[],b=v?function(n){return m.push(n)}:function(n){return m.splice((0,a.ry)(m,n,(function(n){return n.expiry})),0,n)};function w(){if(t&&clearTimeout(t),m.length>0){var n=(0,a.AB)();e=Math.max(n,m[0].expiry+h),t=setTimeout((function(){var n,e=(0,a.AB)(),r=0,i=u(m);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.expiry>e)break;y.delete(o.item),r++}}catch(n){i.e(n)}finally{i.f()}m.splice(0,r),t=null,w()}),e-n)}else t=null}function A(n){var r,a={},u=C;var c=Object.entries({start:s,delta:l}).map((function(c){var d,s=(0,i.Z)(c,2),f=s[0],l=s[1];return function(){var i=d={};o.Z.resolve(l(n)).then((function(n){i===d&&(a[f]=n,u===C&&null!=a.start&&null!=a.delta&&(r=a.start+a.delta,b(v),(null==t||e>r+h)&&w()))}))}})),d=(0,i.Z)(c,2),f=d[0],g=d[1],v={item:n,refresh:g,get expiry(){return r}};return f(),g(),v}var C={};return n={},(0,r.Z)(n,Symbol.iterator,(function(){return y.keys()})),(0,r.Z)(n,"add",(function(n){!y.has(n)&&y.set(n,A(n))})),(0,r.Z)(n,"clear",(function(){m.length=0,w(),y.clear(),C={}})),(0,r.Z)(n,"toArray",(function(){return Array.from(y.keys())})),(0,r.Z)(n,"refresh",(function(){m.length=0,w();var n,e=u(y.values());try{for(e.s();!(n=e.n()).done;){n.value.refresh()}}catch(n){e.e(n)}finally{e.f()}})),n}},154:function(n,e,t){t.d(e,{Dn:function(){return f},LD:function(){return d},cx:function(){return s},gZ:function(){return c}});var r=t(265),i=t(4358),o=t(3193),a=t(2797),u=t(1176),c="outstream",d="instream";function s(n){var e,t=null==n||null===(e=n.mediaTypes)||void 0===e?void 0:e.video;null!=t&&null==t.plcmt&&(t.context===c||[2,3,4].includes(t.placement)?t.plcmt=4:t.context!==c&&[2,6].includes(t.playbackmethod)&&(t.plcmt=2))}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.index,i=void 0===t?u.K.index:t,o=(0,r.Z)(i.getMediaTypes(n),"video"),a=o&&(0,r.Z)(o,"context"),c=o&&(0,r.Z)(o,"useCacheKey"),d=i.getAdUnit(n);return l(n,d,o,a,c)}var l=(0,a.z3)("sync",(function(n,e,t,r,a){return t&&(a||r!==c)?o.vc.getConfig("cache.url")||!n.vastXml||n.vastUrl?!(!n.vastUrl&&!n.vastXml):((0,i.H)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):!(r===c&&!a)||!!(n.renderer||e&&e.renderer||t.renderer)}),"checkVideoBidSetup")},265:function(n,e,t){function r(n,e,t,r,i){for(e=e.split?e.split("."):e,r=0;r<e.length;r++)n=n?n[e[r]]:i;return n===i?t:n}t.d(e,{Z:function(){return r}})},1432:function(n){a.SYNC=1,a.ASYNC=2,a.QUEUE=4;var e=Object.freeze({useProxy:!0,ready:0}),t=new WeakMap,r="2,1,0"===[1].reduce((function(n,e,t){return[n,e,t]}),2).toString()?Array.prototype.reduce:function(n,e){var t,r=Object(this),i=r.length>>>0,o=0;if(e)t=e;else{for(;o<i&&!(o in r);)o++;t=r[o++]}for(;o<i;)o in r&&(t=n(t,r[o],o,r)),o++;return t};function i(n,e){return Array.prototype.slice.call(n,e)}var o=Object.assign||function(n){return r.call(i(arguments,1),(function(n,e){return e&&Object.keys(e).forEach((function(t){n[t]=e[t]})),n}),n)};function a(n){var u,c={},d=[];function s(n,e){return"function"==typeof n?v.call(null,"sync",n,e):"string"==typeof n&&"function"==typeof e?v.apply(null,arguments):"object"==typeof n?f.apply(null,arguments):void 0}function f(n,e,t){var r=!0;void 0===e&&(e=Object.getOwnPropertyNames(n),r=!1);var i={},o=["constructor"];do{(e=e.filter((function(e){return!("function"!=typeof n[e]||-1!==o.indexOf(e)||e.match(/^_/))}))).forEach((function(e){var r=e.split(":"),o=r[0],a=r[1]||"sync";if(!i[o]){var u=n[o];i[o]=n[o]=v(a,u,t?[t,o]:void 0)}})),n=Object.getPrototypeOf(n)}while(r&&n);return i}function l(n){var e=Array.isArray(n)?n:n.split(".");return r.call(e,(function(t,r,i){var o=t[r],a=!1;return o||(i===e.length-1?(u||d.push((function(){a||console.warn("fun-hooks: referenced '"+n+"' but it was never created")})),t[r]=g((function(n){t[r]=n,a=!0}))):t[r]={})}),c)}function g(n){var e=[],r=[],i=function(){},a={before:function(n,t){return c.call(this,e,"before",n,t)},after:function(n,e){return c.call(this,r,"after",n,e)},getHooks:function(n){var t=e.concat(r);"object"==typeof n&&(t=t.filter((function(e){return Object.keys(n).every((function(t){return e[t]===n[t]}))})));try{o(t,{remove:function(){return t.forEach((function(n){n.remove()})),this}})}catch(n){console.error("error adding `remove` to array, did you modify Array.prototype?")}return t},removeAll:function(){return this.getHooks().remove()}},u={install:function(t,o,a){this.type=t,i=a,a(e,r),n&&n(o)}};return t.set(a.after,u),a;function c(n,t,o,a){var u={hook:o,type:t,priority:a||10,remove:function(){var t=n.indexOf(u);-1!==t&&(n.splice(t,1),i(e,r))}};return n.push(u),n.sort((function(n,e){return e.priority-n.priority})),i(e,r),this}}function v(e,r,c){var s=r.after&&t.get(r.after);if(s){if(s.type!==e)throw"fun-hooks: recreated hookable with different type";return r}var f,v,p=c?l(c):g(),h={get:function(n,e){return p[e]||Reflect.get.apply(Reflect,arguments)}};return u||d.push(y),n.useProxy&&"function"==typeof Proxy&&Proxy.revocable?v=new Proxy(r,h):(v=function(){return h.apply?h.apply(r,this,i(arguments)):r.apply(this,arguments)},o(v,p)),t.get(v.after).install(e,v,(function(n,t){var r,o=[];n.length||t.length?(n.forEach(a),r=o.push(void 0)-1,t.forEach(a),f=function(n,t,a){var u,c=0,d="async"===e&&"function"==typeof a[a.length-1]&&a.pop();function s(n){"sync"===e?u=n:d&&d.apply(null,arguments)}function f(n){if(o[c]){var r=i(arguments);return f.bail=s,r.unshift(f),o[c++].apply(t,r)}"sync"===e?u=n:d&&d.apply(null,arguments)}return o[r]=function(){var r=i(arguments,1);"async"===e&&d&&(delete f.bail,r.push(f));var o=n.apply(t,r);"sync"===e&&f(o)},f.apply(null,a),u}):f=void 0;function a(n){o.push(n.hook)}y()})),v;function y(){!u&&("sync"!==e||n.ready&a.SYNC)&&("async"!==e||n.ready&a.ASYNC)?"sync"!==e&&n.ready&a.QUEUE?h.apply=function(){var n=arguments;d.push((function(){v.apply(n[1],n[2])}))}:h.apply=function(){throw"fun-hooks: hooked function not ready"}:h.apply=f}}return(n=o({},e,n)).ready?s.ready=function(){u=!0,function(n){for(var e;e=n.shift();)e()}(d)}:u=!0,s.get=l,s}n.exports=a},7079:function(n){n.exports=function n(e){var t=Array.isArray(e)?[]:{};for(var r in e){var i=e[r];t[r]=i&&"object"==typeof i?n(i):i}return t}},907:function(n,e,t){function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,{Z:function(){return r}})},3878:function(n,e,t){function r(n){if(Array.isArray(n))return n}t.d(e,{Z:function(){return r}})},5057:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(907);function i(n){if(Array.isArray(n))return(0,r.Z)(n)}},7326:function(n,e,t){function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},6983:function(n,e,t){function r(n,e){return e.get?e.get.call(n):e.value}t.d(e,{Z:function(){return r}})},6011:function(n,e,t){function r(n,e,t){if(e.set)e.set.call(n,t);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=t}}t.d(e,{Z:function(){return r}})},5671:function(n,e,t){function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:function(){return r}})},1519:function(n,e,t){function r(n,e,t){if(!e.has(n))throw new TypeError("attempted to "+t+" private field on non-instance");return e.get(n)}t.d(e,{Z:function(){return r}})},8916:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(6983),i=t(1519);function o(n,e){var t=(0,i.Z)(n,e,"get");return(0,r.Z)(n,t)}},2793:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(6011),i=t(1519);function o(n,e,t){var o=(0,i.Z)(n,e,"set");return(0,r.Z)(n,o,t),t}},3144:function(n,e,t){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}t.d(e,{Z:function(){return i}})},4942:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,{Z:function(){return r}})},1120:function(n,e,t){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},9340:function(n,e,t){function r(n,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},r(n,e)}function i(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&r(n,e)}t.d(e,{Z:function(){return i}})},9199:function(n,e,t){function r(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}t.d(e,{Z:function(){return r}})},1902:function(n,e,t){function r(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){u=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}}t.d(e,{Z:function(){return r}})},5267:function(n,e,t){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(e,{Z:function(){return r}})},2786:function(n,e,t){function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(e,{Z:function(){return r}})},2963:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(1002),i=t(7326);function o(n,e){if(e&&("object"===(0,r.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(n)}},3324:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(3878),i=t(1902),o=t(181),a=t(5267);function u(n,e){return(0,r.Z)(n)||(0,i.Z)(n,e)||(0,o.Z)(n,e)||(0,a.Z)()}},9062:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(5057),i=t(9199),o=t(181),a=t(2786);function u(n){return(0,r.Z)(n)||(0,i.Z)(n)||(0,o.Z)(n)||(0,a.Z)()}},1002:function(n,e,t){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}t.d(e,{Z:function(){return r}})},181:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(907);function i(n,e){if(n){if("string"==typeof n)return(0,r.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(n,e):void 0}}},6475:function(n,e,t){function r(n,e,t){e.split&&(e=e.split("."));for(var r,i,o=0,a=e.length,u=n;o<a&&"__proto__"!==(i=e[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?t:typeof(r=u[i])==typeof e?r:0*e[o]!=0||~(""+e[o]).indexOf(".")?{}:[]}t.d(e,{N:function(){return r}})},5644:function(n){n.exports=JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"Q":1},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_REJECTED":"bidRejected","NO_BID":"noBid","SEAT_NON_BID":"seatNonBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain","ACAT":"hb_acat","CRID":"hb_crid","DSP":"hb_dsp"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered"},"Gw":{"UI":"Bid has missing or invalid properties","Gp":"Invalid request ID","Dg":"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}')}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,n=[],r.O=function(e,t,i,o){if(!t){var a=1/0;for(s=0;s<n.length;s++){t=n[s][0],i=n[s][1],o=n[s][2];for(var u=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(n){return r.O[n](t[c])}))?t.splice(c--,1):(u=!1,o<a&&(a=o));if(u){n.splice(s--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[t,i,o]},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={602:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var i,o,a=t[0],u=t[1],c=t[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(c)var s=c(r)}for(e&&e(t);d<a.length;d++)o=a[d],r.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return r.O(s)},t=self.pbjsChunk=self.pbjsChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var i={};!function(){var n=r(3324),e=r(4942),t=r(8640),i=r(4358),o=r(265),a=r(6475),u=r(2021),c=r(59),d=r(5644),s=r(1176),f=r(4614),l=r(5706),g=r(3193),v=d.FP,p=v.AD_RENDER_FAILED,h=v.AD_RENDER_SUCCEEDED;function y(n){var e=n.reason,t=n.message,r=n.bid,o=n.id,a={reason:e,message:t};r&&(a.bid=r),o&&(a.adId=o),(0,i.H)(t),u.j8(p,a)}function m(n){var e=n.doc,t=n.bid,r=n.id,i={doc:e};t&&(i.bid=t),r&&(i.adId=r),u.j8(h,i)}var b=d.FP.BID_WON,w=d.FP.STALE_RENDER,A=new WeakSet,C={"Prebid Request":function(n,e,t){if(null==t)return void y({reason:d.q_.CANNOT_FIND_AD,message:"Cannot find ad for cross-origin render request: '".concat(e.adId,"'"),id:e.adId});if(t.status===d.UE.fe&&((0,i.yN)("Ad id ".concat(t.adId," has been rendered before")),u.j8(w,t),(0,o.Z)(g.vc.getConfig("auctionOptions"),"suppressStaleRender")))return;try{!function(n,e){var t=n.adId,r=n.ad,o=n.adUrl,a=n.width,u=n.height,c=n.renderer,d=n.cpm,s=n.originalCpm;(0,l.Pd)(c)?(0,l._U)(c,n):t&&(E(n),e({message:"Prebid Response",ad:(0,i.ew)(r,s||d),adUrl:(0,i.ew)(o,s||d),adId:t,width:a,height:u}))}(t,n)}catch(n){return void y({reason:d.q_.EXCEPTION,message:n.message,id:e.adId,bid:t})}s.K.addWinningBid(t),u.j8(b,t)},"Prebid Event":function(n,e,t){if(null==t)return void(0,i.H)("Cannot find ad '".concat(e.adId,"' for x-origin event request"));if(t.status!==d.UE.fe)return void(0,i.yN)("Received x-origin event request without corresponding render request for ad '".concat(e.adId,"'"));switch(e.event){case d.FP.AD_RENDER_FAILED:y({bid:t,id:e.adId,reason:e.info.reason,message:e.info.message});break;case d.FP.AD_RENDER_SUCCEEDED:m({doc:null,bid:t,id:e.adId});break;default:(0,i.H)("Received x-origin event request for unsupported event: '".concat(e.event,"' (adId: '").concat(e.adId,"')"))}}};function T(n){var e=n.message?"message":"data",t={};try{t=JSON.parse(n[e])}catch(n){return}if(t&&t.adId&&t.message){var r=(0,f.sE)(s.K.getBidsReceived(),(function(n){return n.adId===t.adId}));C.hasOwnProperty(t.message)&&C[t.message](function(n){return null==n.origin&&0===n.ports.length?function(){var n="Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";throw(0,i.H)(n),new Error(n)}:n.ports.length>0?function(e){n.ports[0].postMessage(JSON.stringify(e))}:function(e){n.source.postMessage(JSON.stringify(e),n.origin)}}(n),t,r)}}function E(n){var e=n.adId,t=n.adUnitCode,r=n.width,o=n.height;["div","iframe"].forEach((function(n){var a=function(n){var r=function(n,e){return(0,i.T9)()?function(n){var e=(0,f.sE)(window.googletag.pubads().getSlots(),(function(e){return(0,f.sE)(e.getTargetingKeys(),(function(t){return(0,f.q9)(e.getTargeting(t),n)}))}));return e?e.getSlotElementId():null}(n):(0,i.X4)()?function(n){var e=window.apntag.getTag(n);return e&&e.targetId}(e):e}(e,t),o=document.getElementById(r);return o&&o.querySelector(n)}(n+':not([style*="display: none"])');if(a){var u=a.style;u.width=r?r+"px":"100%",u.height=o+"px"}else(0,i.yN)("Unable to locate matching page element for adUnitCode ".concat(t,".  Can't resize it to ad's dimensions.  Please review setup."))}))}Object.assign(C,{"Prebid Native":function(n,e,t){if(null==t)return void(0,i.H)("Cannot find ad for x-origin event request: '".concat(e.adId,"'"));A.has(t)||(A.add(t),s.K.addWinningBid(t),u.j8(b,t));switch(e.action){case"assetRequest":n((0,c.eK)(e,t));break;case"allAssetRequest":n((0,c.JL)(e,t));break;case"resizeNativeHeight":t.height=e.height,t.width=e.width,E(t);break;default:(0,c.e6)(e,t)}}});var O=r(1974),k=r(9062),I=r(4679),j=r(2797),B=r(5975),S=r(1136),U=r(8833),R=[],P="targetingControls.allowTargetingKeys",N="targetingControls.addTargetingKeys",Z='Only one of "'.concat(P,'" or "').concat(N,'" can be set'),_=Object.keys(d.TD).map((function(n){return d.TD[n]})),D={isActualBid:function(n){return n.getStatusCode()===d.Q_.Q},isBidNotExpired:function(n){return n.responseTimestamp+1e3*(0,U.N)(n)>(0,i.AB)()},isUnusedBid:function(n){return n&&(n.status&&!(0,f.q9)([d.UE.fe],n.status)||!n.status)}};function q(n){return!Object.values(D).some((function(e){return!e(n)}))}var x=(0,j.z3)("sync",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!r){var o=[],a=g.vc.getConfig("sendBidsControl.dealPrioritization"),u=(0,i.vM)(n,"adUnitCode");return Object.keys(u).forEach((function(n){var r=[],c=(0,i.vM)(u[n],"bidderCode");Object.keys(c).forEach((function(n){return r.push(c[n].reduce(e))})),t>0?(r=a?r.sort(H(!0)):r.sort((function(n,e){return e.cpm-n.cpm})),o.push.apply(o,(0,k.Z)(r.slice(0,t)))):o.push.apply(o,(0,k.Z)(r))})),o}return n}));function H(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e,t){return void 0!==e.adserverTargeting.hb_deal&&void 0===t.adserverTargeting.hb_deal?-1:void 0===e.adserverTargeting.hb_deal&&void 0!==t.adserverTargeting.hb_deal?1:n?t.cpm-e.cpm:t.adserverTargeting.hb_pb-e.adserverTargeting.hb_pb}}var M=function(n){var t={},r={};function a(n,e){return n.adserverTargeting&&e&&((0,i.kJ)(e)&&(0,f.q9)(e,n.adUnitCode)||"string"==typeof e&&n.adUnitCode===e)}function u(n,t){if(!0===g.vc.getConfig("targetingControls.alwaysIncludeDeals")){var r=_.concat(c.xc);return x(t,S.ZH).map((function(t){if(t.dealId&&a(t,n))return(0,e.Z)({},t.adUnitCode,E(t,r.filter((function(n){return void 0!==t.adserverTargeting[n]}))))})).filter((function(n){return n}))}return[]}function s(n,e){var t=Object.assign({},d.TD,d.FY),r=Object.keys(t),o={};(0,i.PN)("allowTargetingKeys - allowed keys [ ".concat(e.map((function(n){return t[n]})).join(", ")," ]")),n.map((function(n){var i=Object.keys(n)[0],a=n[i].filter((function(n){var i=Object.keys(n)[0],a=0===r.filter((function(n){return 0===i.indexOf(t[n])})).length||(0,f.sE)(e,(function(n){var e=t[n];return 0===i.indexOf(e)}));return o[i]=!a,a}));n[i]=a}));var a=Object.keys(o).filter((function(n){return o[n]}));return(0,i.PN)("allowTargetingKeys - removed keys [ ".concat(a.join(", ")," ]")),n.filter((function(n){return n[Object.keys(n)[0]].length>0}))}function l(n,e){var t=(0,i.I8)(n);return Object.keys(t).map((function(n){return{adUnitCode:n,adserverTargeting:t[n]}})).sort(H()).reduce((function(n,r,o,a){var u,c=(u=r.adserverTargeting,Object.keys(u).reduce((function(n,e){return n+"".concat(e,"%3d").concat(encodeURIComponent(u[e]),"%26")}),""));o+1===a.length&&(c=c.slice(0,-3));var d=r.adUnitCode,s=c.length;return s<=e?(e-=s,(0,i.PN)("AdUnit '".concat(d,"' auction keys comprised of ").concat(s," characters.  Deducted from running threshold; new limit is ").concat(e),t[d]),n[d]=t[d]):(0,i.yN)("The following keys for adUnitCode '".concat(d,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(s,", the current allotted amount was ").concat(e,".\n"),t[d]),o+1===a.length&&0===Object.keys(n).length&&(0,i.H)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),n}),{})}function v(n){var t=n.map((function(n){return(0,e.Z)({},Object.keys(n)[0],n[Object.keys(n)[0]].map((function(n){return(0,e.Z)({},Object.keys(n)[0],n[Object.keys(n)[0]].join(","))})).reduce((function(n,e){return Object.assign(e,n)}),{}))})).reduce((function(n,e){var t=Object.keys(e)[0];return n[t]=Object.assign({},n[t],e[t]),n}),{});return t}function p(e){return"string"==typeof e?[e]:(0,i.kJ)(e)?e:n.getAdUnitCodes()||[]}function h(){var e=n.getBidsReceived();if(g.vc.getConfig("useBidCache")){var t=g.vc.getConfig("bidCacheFilterFunction");"function"==typeof t&&(e=e.filter((function(n){return r[n.adUnitCode]===n.auctionId||!!t(n)})))}else e=e.filter((function(n){return r[n.adUnitCode]===n.auctionId}));return(e=e.filter((function(n){return(0,o.Z)(n,"video.context")!==I.Oh})).filter(q)).forEach((function(n){return n.latestTargetedAuctionId=r[n.adUnitCode],n})),x(e,S.K$)}function y(n,r){var i=t.getWinningBids(n,r),o=m();return i=i.map((function(n){return(0,e.Z)({},n.adUnitCode,Object.keys(n.adserverTargeting).filter((function(e){return void 0===n.sendStandardTargeting||n.sendStandardTargeting||-1===o.indexOf(e)})).reduce((function(t,r){var i=[n.adserverTargeting[r]],o=(0,e.Z)({},r.substring(0,20),i);if(r===d.TD.DEAL){var a="".concat(r,"_").concat(n.bidderCode).substring(0,20),u=(0,e.Z)({},a,i);return[].concat((0,k.Z)(t),[o,u])}return[].concat((0,k.Z)(t),[o])}),[]))})),i}function m(){return n.getStandardBidderAdServerTargeting().map((function(n){return n.key})).concat(_).filter(i.tT)}function b(n,e,t,r){return Object.keys(e.adserverTargeting).filter(w()).forEach((function(t){n.length&&n.filter(function(n){return function(t){return t.adUnitCode===e.adUnitCode&&t.adserverTargeting[n]}}(t)).forEach(function(n){return function(t){(0,i.kJ)(t.adserverTargeting[n])||(t.adserverTargeting[n]=[t.adserverTargeting[n]]),t.adserverTargeting[n]=t.adserverTargeting[n].concat(e.adserverTargeting[n]).filter(i.tT),delete e.adserverTargeting[n]}}(t))})),n.push(e),n}function w(){var n=m();return n=n.concat(c.xc),function(e){return-1===n.indexOf(e)}}function A(n){return(0,e.Z)({},n.adUnitCode,Object.keys(n.adserverTargeting).filter(w()).map((function(t){return(0,e.Z)({},t.substring(0,20),[n.adserverTargeting[t]])})))}function C(n,e){return e.filter((function(e){return(0,f.q9)(n,e.adUnitCode)})).map((function(n){return Object.assign({},n)})).reduce(b,[]).map(A).filter((function(n){return n}))}function T(n,t){var r=_.concat(c.xc),i=g.vc.getConfig("sendBidsControl.bidLimit"),o=x(t,S.ZH,i),u=g.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),s=u?u.map((function(n){return d.TD[n]})):r;return o.map((function(t){if(a(t,n))return(0,e.Z)({},t.adUnitCode,E(t,r.filter((function(n){return void 0!==t.adserverTargeting[n]&&-1!==s.indexOf(n)}))))})).filter((function(n){return n}))}function E(n,t){return t.map((function(t){return(0,e.Z)({},"".concat(t,"_").concat(n.bidderCode).substring(0,20),[n.adserverTargeting[t]])}))}function O(t){function r(n){return(0,o.Z)(n,d.k2.xn)}return n.getAdUnits().filter((function(n){return(0,f.q9)(t,n.code)&&r(n)})).map((function(n){return(0,e.Z)({},n.code,function(n){var t=r(n);return Object.keys(t).map((function(n){return(0,i.d8)(t[n])&&(t[n]=t[n].split(",").map((function(n){return n.trim()}))),(0,i.kJ)(t[n])||(t[n]=[t[n]]),(0,e.Z)({},n,t[n])}))}(n))}))}return t.setLatestAuctionForAdUnit=function(n,e){r[n]=e},t.resetPresetTargeting=function(e,t){if((0,i.T9)()){var r=p(e),o=n.getAdUnits().filter((function(n){return(0,f.q9)(r,n.code)})),a=R.reduce((function(n,e){return n[e]=null,n}),{});window.googletag.pubads().getSlots().forEach((function(n){var e=(0,i.LQ)(t)&&t(n);o.forEach((function(t){(t.code===n.getAdUnitPath()||t.code===n.getSlotElementId()||(0,i.LQ)(e)&&e(t.code))&&n.updateTargetingFromMap(a)}))}))}},t.resetPresetTargetingAST=function(n){p(n).forEach((function(n){var e=window.apntag.getTag(n);if(e&&e.keywords){var t=Object.keys(e.keywords),r={};t.forEach((function(n){(0,f.q9)(R,n.toLowerCase())||(r[n]=e.keywords[n])})),window.apntag.modifyTag(n,{keywords:r})}}))},t.getAllTargeting=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h(),t=p(n),r=y(t,e).concat(C(t,e)).concat(g.vc.getConfig("enableSendAllBids")?T(t,e):u(t,e)).concat(O(t));r.map((function(n){Object.keys(n).map((function(e){n[e].map((function(n){-1===R.indexOf(Object.keys(n)[0])&&(R=Object.keys(n).concat(R))}))}))}));var o=Object.keys(Object.assign({},d.kF,d.FY)),a=g.vc.getConfig(P),c=g.vc.getConfig(N);if(null!=c&&null!=a)throw new Error(Z);a=null!=c?o.concat(c):a||o,Array.isArray(a)&&a.length>0&&(r=s(r,a)),r=v(r);var f=g.vc.getConfig("targetingControls.auctionKeyMaxChars");return f&&((0,i.PN)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(f," characters.  Running checks on auction keys...")),r=l(r,f)),t.forEach((function(n){r[n]||(r[n]={})})),r},g.vc.getConfig("targetingControls",(function(n){null!=(0,o.Z)(n,P)&&null!=(0,o.Z)(n,N)&&(0,i.H)(Z)})),t.setTargetingForGPT=function(n,e){window.googletag.pubads().getSlots().forEach((function(t){Object.keys(n).filter(e?e(t):(0,i.zV)(t)).forEach((function(e){Object.keys(n[e]).forEach((function(t){var r=n[e][t];"string"==typeof r&&-1!==r.indexOf(",")&&(r=r.split(",")),n[e][t]=r})),(0,i.ji)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId()," with targeting-map:"),n[e]),t.updateTargetingFromMap(n[e])}))}))},t.getWinningBids=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h(),t=p(n);return e.filter((function(n){return(0,f.q9)(t,n.adUnitCode)})).filter((function(n){return!0===B.S.get(n.bidderCode,"allowZeroCpmBids")?n.cpm>=0:n.cpm>0})).map((function(n){return n.adUnitCode})).filter(i.tT).map((function(n){return e.filter((function(e){return e.adUnitCode===n?e:null})).reduce(S.ZH)}))},t.setTargetingForAst=function(n){var e=t.getAllTargeting(n);try{t.resetPresetTargetingAST(n)}catch(n){(0,i.H)("unable to reset targeting for AST"+n)}Object.keys(e).forEach((function(n){return Object.keys(e[n]).forEach((function(t){if((0,i.ji)("Attempting to set targeting for targetId: ".concat(n," key: ").concat(t," value: ").concat(e[n][t])),(0,i.d8)(e[n][t])||(0,i.kJ)(e[n][t])){var r={};t.search(/pt[0-9]/)<0?r[t.toUpperCase()]=e[n][t]:r[t]=e[n][t],window.apntag.setKeywords(n,r,{overrideKeyValue:!0})}}))}))},t.isApntagDefined=function(){if(window.apntag&&(0,i.LQ)(window.apntag.setKeywords))return!0},t}(s.K),F=r(9626),W=r(5730),z=r(8792),L="__pbjs_debugging__";function K(){return(0,t.R)().installedModules.includes("debugging")}function G(n){return new z.Z((function(e){(0,W.B)(n,"debugging",e)}))}function J(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.alreadyInstalled,r=void 0===e?K:e,o=n.script,a=void 0===o?G:o,u=null;return function(){return null==u&&(u=new z.Z((function(n,e){setTimeout((function(){if(r())n();else{var o="https://cdn.jsdelivr.net/npm/prebid.js@8.19.0/dist/debugging-standalone.js";(0,i.ji)('Debugging module not installed, loading it from "'.concat(o,'"...')),(0,t.R)()._installDebugging=!0,a(o).then((function(){(0,t.R)()._installDebugging({DEBUG_KEY:L,hook:j.z3,config:g.vc,createBid:F.m,logger:(0,i.qp)("DEBUG:")})})).then(n,e)}}))}))),u}}var V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.load,t=void 0===e?J():e,r=n.hook,i=void 0===r?(0,j.v5)("requestBids"):r,o=null,a=!1;function u(n){for(var e=this,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return(o||z.Z.resolve()).then((function(){return n.apply(e,r)}))}function c(){a||(o=t(),i.before(u,99),a=!0)}function d(){i.getHooks({hook:u}).remove(),a=!1}function s(){o=null,d()}return{enable:c,disable:d,reset:s}}();V.reset;g.vc.getConfig("debugging",(function(n){var e=n.debugging;null!=e&&e.enabled?V.enable():V.disable()}));var Q=r(875),$=r(5164),Y=r(6104),X=r(9128),nn=r(4078),en=r(4516),tn=r(154),rn=(0,t.R)(),on=O.k_.triggerUserSyncs,an=d.FP,un=an.ADD_AD_UNITS,cn=an.BID_WON,dn=an.REQUEST_BIDS,sn=an.SET_TARGETING,fn=an.STALE_RENDER,ln=d.q_,gn=ln.PREVENT_WRITING_ON_MAIN_DOCUMENT,vn=ln.NO_AD,pn=ln.EXCEPTION,hn=ln.CANNOT_FIND_AD,yn=ln.MISSING_DOC_OR_ADID,mn={bidWon:function(n){if(!s.K.getBidsRequested().map((function(n){return n.bids.map((function(n){return n.adUnitCode}))})).reduce(i.xH).filter(i.tT).includes(n))return void(0,i.H)('The "'+n+'" placement is not defined.');return!0}};function bn(n,e,t){n.defaultView&&n.defaultView.frameElement&&(n.defaultView.frameElement.width=e,n.defaultView.frameElement.height=t)}function wn(n,e){var t=[];return(0,i.kJ)(n)&&(e?n.length===e:n.length>0)&&(n.every((function(n){return(0,i.HC)(n,2)}))?t=n:(0,i.HC)(n,2)&&t.push(n)),t}function An(n){var e=(0,i.I8)(n),t=e.mediaTypes.banner,r=wn(t.sizes);return r.length>0?(t.sizes=r,e.sizes=r):((0,i.H)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete e.mediaTypes.banner),e}function Cn(n){var e=(0,i.I8)(n),t=e.mediaTypes.video;if(t.playerSize){var r="number"==typeof t.playerSize[0]?2:1,o=wn(t.playerSize,r);o.length>0?(2===r&&(0,i.PN)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),t.playerSize=o,e.sizes=o):((0,i.H)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete e.mediaTypes.video.playerSize)}return e}function Tn(n){var e=(0,i.I8)(n),t=e.mediaTypes.native;if(t.ortb){var r=Object.keys(d.FY).filter((function(n){return d.FY[n].includes("hb_native_")})),o=Object.keys(t).filter((function(n){return r.includes(n)}));o.length>0&&((0,i.H)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(o," keys from request.")),o.forEach((function(n){return delete e.mediaTypes.native[n]})))}return t.image&&t.image.sizes&&!Array.isArray(t.image.sizes)&&((0,i.H)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete e.mediaTypes.native.image.sizes),t.image&&t.image.aspect_ratios&&!Array.isArray(t.image.aspect_ratios)&&((0,i.H)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete e.mediaTypes.native.image.aspect_ratios),t.icon&&t.icon.sizes&&!Array.isArray(t.icon.sizes)&&((0,i.H)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete e.mediaTypes.native.icon.sizes),e}function En(n,e){var t=(0,o.Z)(n,"mediaTypes.".concat(e,".pos"));if(!(0,i.hj)(t)||isNaN(t)||!isFinite(t)){var r="Value of property 'pos' on ad unit ".concat(n.code," should be of type: Number");(0,i.yN)(r),u.j8(d.FP.AUCTION_DEBUG,{type:"WARNING",arguments:r}),delete n.mediaTypes[e].pos}return n}function On(n){var e=function(e){return"adUnit.code '".concat(n.code,"' ").concat(e)},t=n.mediaTypes,r=n.bids;return null==r||(0,i.kJ)(r)?null==r&&null==n.ortb2Imp?((0,i.H)(e("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")),null):t&&0!==Object.keys(t).length?(null==n.ortb2Imp||null!=r&&0!==r.length||(n.bids=[{bidder:null}],(0,i.ji)(e("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))),n):((0,i.H)(e("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")),null):((0,i.H)(e("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")),null)}!function(){var n=null;try{n=window.sessionStorage}catch(n){}if(null!==n){var e=V,t=null;try{t=n.getItem(L)}catch(n){}null!==t&&e.enable()}}(),rn.bidderSettings=rn.bidderSettings||{},rn.libLoaded=!0,rn.version="v8.19.0",(0,i.PN)("Prebid.js v8.19.0 loaded"),rn.installedModules=rn.installedModules||[],rn.adUnits=rn.adUnits||[],rn.triggerUserSyncs=on;var kn={validateAdUnit:On,validateBannerMediaType:An,validateSizes:wn};Object.assign(kn,{validateNativeMediaType:Tn}),Object.assign(kn,{validateVideoMediaType:Cn});var In,jn=(0,j.z3)("sync",(function(n){var e=[];return n.forEach((function(n){if(null!=(n=On(n))){var t,r,i,o=n.mediaTypes;o.banner&&(t=An(n),o.banner.hasOwnProperty("pos")&&(t=En(t,"banner"))),o.video&&(r=Cn(t||n),o.video.hasOwnProperty("pos")&&(r=En(r,"video"))),o.native&&(i=Tn(r||(t||n)));var a=Object.assign({},t,r,i);e.push(a)}})),e}),"checkAdUnitSetup");function Bn(n){n.forEach((function(n){return(0,tn.cx)(n)}))}function Sn(n){var t=s.K[n]().filter((function(n){return s.K.getAdUnitCodes().includes(n.adUnitCode)})),r=s.K.getLastAuctionId();return t.map((function(n){return n.adUnitCode})).filter(i.tT).map((function(n){return t.filter((function(e){return e.auctionId===r&&e.adUnitCode===n}))})).filter((function(n){return n&&n[0]&&n[0].adUnitCode})).map((function(n){return(0,e.Z)({},n[0].adUnitCode,{bids:n})})).reduce((function(n,e){return Object.assign(n,e)}),{})}function Un(n,e,t){var r=e.querySelector(t);n.parentNode&&n.parentNode===r||(0,i.jC)(n,e,t)}rn.getAdserverTargetingForAdUnitCodeStr=function(n){if((0,i.PN)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),n){var e=rn.getAdserverTargetingForAdUnitCode(n);return(0,i.Ob)(e)}(0,i.ji)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},rn.getHighestUnusedBidResponseForAdUnitCode=function(n){if(n){var e=s.K.getAllBidsForAdUnitCode(n).filter(q);return e.length?e.reduce(S.ZH):{}}(0,i.ji)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},rn.getAdserverTargetingForAdUnitCode=function(n){return rn.getAdserverTargeting(n)[n]},rn.getAdserverTargeting=function(n){return(0,i.PN)("Invoking pbjs.getAdserverTargeting",arguments),M.getAllTargeting(n)},rn.getConsentMetadata=function(){return(0,i.PN)("Invoking pbjs.getConsentMetadata"),en.NO.getConsentMeta()},rn.getNoBids=function(){return(0,i.PN)("Invoking pbjs.getNoBids",arguments),Sn("getNoBids")},rn.getNoBidsForAdUnitCode=function(n){return{bids:s.K.getNoBids().filter((function(e){return e.adUnitCode===n}))}},rn.getBidResponses=function(){return(0,i.PN)("Invoking pbjs.getBidResponses",arguments),Sn("getBidsReceived")},rn.getBidResponsesForAdUnitCode=function(n){return{bids:s.K.getBidsReceived().filter((function(e){return e.adUnitCode===n}))}},rn.setTargetingForGPTAsync=function(n,e){if((0,i.PN)("Invoking pbjs.setTargetingForGPTAsync",arguments),(0,i.T9)()){var t=M.getAllTargeting(n);M.resetPresetTargeting(n,e),M.setTargetingForGPT(t,e),Object.keys(t).forEach((function(n){Object.keys(t[n]).forEach((function(e){"hb_adid"===e&&s.K.setStatusForBids(t[n][e],d.UE.CK)}))})),u.j8(sn,t)}else(0,i.H)("window.googletag is not defined on the page")},rn.setTargetingForAst=function(n){(0,i.PN)("Invoking pbjs.setTargetingForAn",arguments),M.isApntagDefined()?(M.setTargetingForAst(n),u.j8(sn,M.getAllTargeting())):(0,i.H)("window.apntag is not defined on the page")},rn.renderAd=(0,j.z3)("async",(function(n,e,t){if((0,i.PN)("Invoking pbjs.renderAd",arguments),(0,i.ji)("Calling renderAd with adId :"+e),e)try{var r=s.K.findBidByAdId(e);if(!r){var a="Error trying to write ad. Cannot find ad by given id : ".concat(e);return void y({reason:hn,message:a,id:e})}if(r.status===d.UE.fe&&((0,i.yN)("Ad id ".concat(r.adId," has been rendered before")),u.j8(fn,r),(0,o.Z)(g.vc.getConfig("auctionOptions"),"suppressStaleRender")))return;if(r.ad=(0,i.ew)(r.ad,r.originalCpm||r.cpm),r.adUrl=(0,i.ew)(r.adUrl,r.originalCpm||r.cpm),t&&t.clickThrough){var c=t.clickThrough;r.ad=(0,i.x_)(r.ad,c),r.adUrl=(0,i.x_)(r.adUrl,c)}s.K.addWinningBid(r),u.j8(cn,r);var f=r.height,v=r.width,p=r.ad,h=r.mediaType,b=r.adUrl,w=r.renderer,A=r.adUnitCode,C=rn.adUnits.filter((function(n){return n.code===A})),T=rn.videoModule;if(C.video&&T)return void T.renderBid(C.video.divId,r);if(!n){var E="Error trying to write ad Id :".concat(e," to the page. Missing document");return void y({reason:yn,message:E,id:e})}var O=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));if((0,i.jC)(O,n,"html"),(0,l.Pd)(w))(0,l._U)(w,r,n),Un(O,n,"html"),m({doc:n,bid:r,id:e});else if(n===document&&!(0,i.yL)()||"video"===h){var k="Error trying to write ad. Ad render call ad id ".concat(e," was prevented from writing to the main document.");y({reason:gn,message:k,bid:r,id:e})}else if(p)n.write(p),n.close(),bn(n,v,f),Un(O,n,"html"),(0,i.R_)(r),m({doc:n,bid:r,id:e});else if(b){var I=(0,i.$u)();I.height=f,I.width=v,I.style.display="inline",I.style.overflow="hidden",I.src=b,(0,i.jC)(I,n,"body"),bn(n,v,f),Un(O,n,"html"),(0,i.R_)(r),m({doc:n,bid:r,id:e})}else{var j="Error trying to write ad. No ad for bid response id: ".concat(e);y({reason:vn,message:j,bid:r,id:e})}}catch(n){var B="Error trying to write ad Id :".concat(e," to the page:").concat(n.message);y({reason:pn,message:B,id:e})}else{var S="Error trying to write ad Id :".concat(e," to the page. Missing adId");y({reason:yn,message:S,id:e})}})),rn.removeAdUnit=function(n){((0,i.PN)("Invoking pbjs.removeAdUnit",arguments),n)?((0,i.kJ)(n)?n:[n]).forEach((function(n){for(var e=rn.adUnits.length-1;e>=0;e--)rn.adUnits[e].code===n&&rn.adUnits.splice(e,1)})):rn.adUnits=[]},rn.requestBids=(In=(0,j.z3)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,r=e.timeout,o=e.adUnits,a=e.adUnitCodes,c=e.labels,d=e.auctionId,s=e.ttlBuffer,l=e.ortb2,v=e.metrics,p=e.defer;u.j8(dn);var h=r||g.vc.getConfig("bidderTimeout");(0,i.PN)("Invoking pbjs.requestBids",arguments),a&&a.length?o=o.filter((function(n){return(0,f.q9)(a,n.code)})):a=o&&o.map((function(n){return n.code}));var y={global:(0,i.Ee)({},g.vc.getAnyConfig("ortb2")||{},l||{}),bidder:Object.fromEntries(Object.entries(g.vc.getBidderConfig()).map((function(e){var t=(0,n.Z)(e,2);return[t[0],t[1].ortb2]})).filter((function(e){var t=(0,n.Z)(e,2);return t[0],null!=t[1]})))};return(0,nn.S)(z.Z.resolve(y.global)).then((function(n){return y.global=n,Rn({bidsBackHandler:t,timeout:h,adUnits:o,adUnitCodes:a,labels:c,auctionId:d,ttlBuffer:s,ortb2Fragments:y,metrics:v,defer:p})}))}),"requestBids"),(0,j.IF)(In,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.adUnits||rn.adUnits;return n.adUnits=(0,i.kJ)(e)?e.slice():[e],n.metrics=(0,X.V6)(),n.metrics.checkpoint("requestBids"),n.defer=(0,z.P)({promiseFactory:function(n){return new Promise(n)}}),In.call(this,n),n.defer.promise})));var Rn=(0,j.z3)("async",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.bidsBackHandler,t=n.timeout,r=n.adUnits,o=n.ttlBuffer,u=n.adUnitCodes,c=n.labels,d=n.auctionId,l=n.ortb2Fragments,v=n.metrics,p=n.defer,h=(0,Y.uV)(g.vc.getConfig("s2sConfig")||[]);function y(n,t,r){if("function"==typeof e)try{e(n,t,r)}catch(n){(0,i.H)("Error executing bidsBackHandler",null,n)}p.resolve({bids:n,timedOut:t,auctionId:r})}if(Bn(r),(r=(0,X.Bf)(v).measureTime("requestBids.validate",(function(){return jn(r)}))).forEach((function(n){var e,t,r=Object.keys(n.mediaTypes||{banner:"banner"}),u=n.bids.map((function(n){return n.bidder})),c=Y.ZP.bidderRegistry,d=u.filter((function(n){return!h.has(n)})),s=(null===(e=n.ortb2Imp)||void 0===e||null===(t=e.ext)||void 0===t?void 0:t.tid)||(0,i.DO)();n.transactionId=s,null==o||n.hasOwnProperty("ttlBuffer")||(n.ttlBuffer=o),(0,a.N)(n,"ortb2Imp.ext.tid",s),d.forEach((function(e){var t=c[e],o=t&&t.getSpec&&t.getSpec(),a=o&&o.supportedMediaTypes||["banner"];r.some((function(n){return(0,f.q9)(a,n)}))?Q.f.incrementBidderRequestsCounter(n.code,e):((0,i.yN)((0,i.or)(n,e)),n.bids=n.bids.filter((function(n){return n.bidder!==e})))})),Q.f.incrementRequestsCounter(n.code)})),r&&0!==r.length){var m=s.K.createAuction({adUnits:r,adUnitCodes:u,callback:y,cbTimeout:t,labels:c,auctionId:d,ortb2Fragments:l,metrics:v}),b=r.length;b>15&&(0,i.PN)("Current auction ".concat(m.getAuctionId()," contains ").concat(b," adUnits."),r),u.forEach((function(n){return M.setLatestAuctionForAdUnit(n,m.getAuctionId())})),m.callBids()}else(0,i.ji)("No adUnits configured. No bids requested."),y()}),"startAuction");rn.requestBids.before((function(n,e){function t(n){for(var e;e=n.shift();)e()}t($.Ld),t(Pn),n.call(this,e)}),49),rn.addAdUnits=function(n){(0,i.PN)("Invoking pbjs.addAdUnits",arguments),rn.adUnits.push.apply(rn.adUnits,(0,i.kJ)(n)?n:[n]),u.j8(un)},rn.onEvent=function(n,e,t){(0,i.PN)("Invoking pbjs.onEvent",arguments),(0,i.LQ)(e)?!t||mn[n].call(null,t)?u.on(n,e,t):(0,i.H)('The id provided is not valid for event "'+n+'" and no handler was set.'):(0,i.H)('The event handler provided is not a function and was not set on event "'+n+'".')},rn.offEvent=function(n,e,t){(0,i.PN)("Invoking pbjs.offEvent",arguments),t&&!mn[n].call(null,t)||u.S1(n,e,t)},rn.getEvents=function(){return(0,i.PN)("Invoking pbjs.getEvents"),u.vw()},rn.registerBidAdapter=function(n,e){(0,i.PN)("Invoking pbjs.registerBidAdapter",arguments);try{Y.ZP.registerBidAdapter(n(),e)}catch(n){(0,i.H)("Error registering bidder adapter : "+n.message)}},rn.registerAnalyticsAdapter=function(n){(0,i.PN)("Invoking pbjs.registerAnalyticsAdapter",arguments);try{Y.ZP.registerAnalyticsAdapter(n)}catch(n){(0,i.H)("Error registering analytics adapter : "+n.message)}},rn.createBid=function(n){return(0,i.PN)("Invoking pbjs.createBid",arguments),(0,F.m)(n)};var Pn=[],Nn=(0,j.z3)("async",(function(n){n&&!(0,i.xb)(n)?((0,i.PN)("Invoking pbjs.enableAnalytics for: ",n),Y.ZP.enableAnalytics(n)):(0,i.H)("pbjs.enableAnalytics should be called with option {}")}),"enableAnalyticsCb");rn.enableAnalytics=function(n){Pn.push(Nn.bind(this,n))},rn.aliasBidder=function(n,e,t){(0,i.PN)("Invoking pbjs.aliasBidder",arguments),n&&e?Y.ZP.aliasBidAdapter(n,e,t):(0,i.H)("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},rn.aliasRegistry=Y.ZP.aliasRegistry,g.vc.getConfig("aliasRegistry",(function(n){"private"===n.aliasRegistry&&delete rn.aliasRegistry})),rn.getAllWinningBids=function(){return s.K.getAllWinningBids()},rn.getAllPrebidWinningBids=function(){return s.K.getBidsReceived().filter((function(n){return n.status===d.UE.CK}))},rn.getHighestCpmBids=function(n){return M.getWinningBids(n)},rn.markWinningBidAsUsed=function(n){var e=Zn(n,"Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.");e.length>0&&s.K.addWinningBid(e[0])};var Zn=function(n,e){var t=[];return n.adUnitCode&&n.adId?t=s.K.getBidsReceived().filter((function(e){return e.adId===n.adId&&e.adUnitCode===n.adUnitCode})):n.adUnitCode?t=M.getWinningBids(n.adUnitCode):n.adId?t=s.K.getBidsReceived().filter((function(e){return e.adId===n.adId})):(0,i.yN)(e),t};function _n(n){n.forEach((function(n){if(void 0===n.called)try{n.call(),n.called=!0}catch(n){(0,i.H)("Error processing command :","prebid.js",n)}}))}rn.getConfig=g.vc.getAnyConfig,rn.readConfig=g.vc.readAnyConfig,rn.mergeConfig=g.vc.mergeConfig,rn.mergeBidderConfig=g.vc.mergeBidderConfig,rn.setConfig=g.vc.setConfig,rn.setBidderConfig=g.vc.setBidderConfig,rn.que.push((function(){window.addEventListener("message",T,!1)})),rn.cmd.push=function(n){if("function"==typeof n)try{n.call()}catch(n){(0,i.H)("Error processing command :",n.message,n.stack)}else(0,i.H)("Commands written into pbjs.cmd.push must be wrapped in a function")},rn.que.push=rn.cmd.push,rn.processQueue=function(){j.z3.ready(),_n(rn.que),_n(rn.cmd)},rn.triggerBilling=function(n){var e=Zn(n,"Improper use of triggerBilling. It requires a bid with at least an adUnitCode or an adId to function."),t=e.find((function(e){return e.requestId===n.requestId}))||e[0];if(e.length>0&&t)try{Y.ZP.callBidBillableBidder(t)}catch(n){(0,i.H)("Error when triggering billing :",n)}else(0,i.yN)("The bid provided to triggerBilling did not match any bids received.")}}(),i=r.O(i)}();
(self.pbjsChunk=self.pbjsChunk||[]).push([[402],{5370:function(n,e,u){u.d(e,{u:function(){return t}});var r=u(4358);function t(n,e){return Object.keys(n).forEach((function(u){var t,s;e[u]&&((0,r.LQ)(n[u])?e[u]=n[u](e[u]):e[u]=(t=n[u],s=e[u],"string"===t?s&&s.toString():"number"===t?Number(s):s),isNaN(e[u])&&delete e.key)})),e}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[157],{676:function(n,r,t){t.d(r,{c:function(){return f}});var e=t(9062),u=t(3790),c=t(265),o=["user.keywords"].concat(u.Iq.flatMap((function(n){return["keywords","content.keywords"].map((function(r){return"".concat(n,".").concat(r)}))})));function a(){for(var n=new Set,r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter((function(n){return n})).flatMap((function(n){return Array.isArray(n)?n:n.split(",")})).map((function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")})).filter((function(n){return n})).forEach((function(r){return n.add(r)})),Array.from(n.keys())}function f(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),u=1;u<r;u++)t[u-1]=arguments[u];return a.apply(void 0,(0,e.Z)(o.map((function(r){return(0,c.Z)(n,r)}))).concat(t))}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[277],{9050:function(n,r,t){t.d(r,{Bq:function(){return h},bn:function(){return g},cM:function(){return l},gw:function(){return y}});var e=t(3324),u=t(9062),o=t(4358),i=t(265),c=t(676),f=t(3790),a={526:"1plusX",527:"1plusX",541:"captify_segments",540:"perid"},s=["user.data"].concat(f.Iq.map((function(n){return"".concat(n,".content.data")})));function p(n,r,t){return null==r?t:(0,o.d8)(r)?r:(0,o.hj)(r)?r.toString():void(0,o.yN)("Unsuported type for param: "+n+" required type: String")}function h(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keywords",t=[];return(0,o.yi)(n,(function(n,e){if((0,o.kJ)(n)){var u=[];(0,o.yi)(n,(function(n){((n=p(r+"."+e,n))||""===n)&&u.push(n)})),n=u}else{if(n=p(r+"."+e,n),!(0,o.d8)(n))return;n=[n]}n=n.filter((function(n){return""!==n}));var i={key:e};n.length>0&&(i.value=n),t.push(i)})),t}function l(n){return(0,o.d8)(n)&&""!==n?d(n.split(/\s*(?:,)\s*/)):{}}function d(n){var r={};return n.forEach((function(n){if(-1!==n.indexOf("=")){var t=n.split("="),e=t[0],u=t[1];r.hasOwnProperty(e)?r[e].push(u):r[e]=[u]}else r.hasOwnProperty(n)||(r[n]=[])})),r}function v(n){return d((0,c.c)(n))}function y(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return h(o.Ee.apply(void 0,(0,u.Z)(r.map((function(n){return Object.fromEntries(Object.entries(n||{}).map((function(n){var r=(0,e.Z)(n,2),t=r[0],u=r[1];return[t,(0,o.hj)(u)||(0,o.d8)(u)?[u]:u]})))})))))}function g(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];return y.apply(void 0,[v(n),m(n)].concat(t))}function m(n){var r={};return s.forEach((function(t){((0,i.Z)(n,t)||[]).forEach((function(n){var t=a[(0,i.Z)(n,"ext.segtax")];t&&n.segment.forEach((function(n){r[t]?r[t].push(n.id):r[t]=[n.id]}))}))})),r}},7374:function(n,r,t){t.d(r,{G:function(){return u},h:function(){return o}});var e=t(4358);function u(n){return n.replace(/(?:^|\.?)([A-Z])/g,(function(n,r){return"_"+r.toLowerCase()})).replace(/^_/,"")}function o(n,r){for(var t=[],u=0;u<r;u++){var o=(0,e.PO)(n)?(0,e.I8)(n):n;t.push(o)}return t}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[284],{6296:function(n,u,e){function r(n,u){for(var e=[],r=0;r<Math.ceil(n.length/u);r++){var s=r*u,t=s+u;e.push(n.slice(s,t))}return e}e.d(u,{y:function(){return r}})}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[190],{4292:function(A,B,I){I.d(B,{m:function(){return n}});var n={1:"IAB20-3",2:"IAB18-5",3:"IAB10-1",4:"IAB2-3",5:"IAB19-8",6:"IAB22-1",7:"IAB18-1",8:"IAB12-3",9:"IAB5-1",10:"IAB4-5",11:"IAB13-4",12:"IAB8-7",13:"IAB9-7",14:"IAB7-1",15:"IAB20-18",16:"IAB10-7",17:"IAB19-18",18:"IAB13-6",19:"IAB18-4",20:"IAB1-5",21:"IAB1-6",22:"IAB3-4",23:"IAB19-13",24:"IAB22-2",25:"IAB3-9",26:"IAB17-18",27:"IAB19-6",28:"IAB1-7",29:"IAB9-30",30:"IAB20-7",31:"IAB20-17",32:"IAB7-32",33:"IAB16-5",34:"IAB19-34",35:"IAB11-5",36:"IAB12-3",37:"IAB11-4",38:"IAB12-3",39:"IAB9-30",41:"IAB7-44",42:"IAB7-1",43:"IAB7-30",50:"IAB19-30",51:"IAB17-12",52:"IAB19-30",53:"IAB3-1",55:"IAB13-2",56:"IAB19-30",57:"IAB19-30",58:"IAB7-39",59:"IAB22-1",60:"IAB7-39",61:"IAB21-3",62:"IAB5-1",63:"IAB12-3",64:"IAB20-18",65:"IAB11-2",66:"IAB17-18",67:"IAB9-9",68:"IAB9-5",69:"IAB7-44",71:"IAB22-3",73:"IAB19-30",74:"IAB8-5",78:"IAB22-1",85:"IAB12-2",86:"IAB22-3",87:"IAB11-3",112:"IAB7-32",113:"IAB7-32",114:"IAB7-32",115:"IAB7-32",118:"IAB9-5",119:"IAB9-5",120:"IAB9-5",121:"IAB9-5",122:"IAB9-5",123:"IAB9-5",124:"IAB9-5",125:"IAB9-5",126:"IAB9-5",127:"IAB22-1",132:"IAB1-2",133:"IAB19-30",137:"IAB3-9",138:"IAB19-3",140:"IAB2-3",141:"IAB2-1",142:"IAB2-3",143:"IAB17-13",166:"IAB11-4",175:"IAB3-1",176:"IAB13-4",182:"IAB8-9",183:"IAB3-5"}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[968],{2712:function(n,t,r){r.d(t,{b6:function(){return p},kX:function(){return f},m1:function(){return s},sM:function(){return u}});var e=r(4942),a=r(3324),c=r(9062),o=r(8792);function i(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function l(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var u=0,f=1,s=2;function p(n){var t=n.apiName,r=n.apiVersion,i=n.apiArgs,p=void 0===i?["command","callback","parameter","version"]:i,v=n.callbackArgs,b=void 0===v?["returnValue","success"]:v,d=n.mode,O=void 0===d?u:d,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,g={},m="".concat(t,"Call"),j="".concat(t,"Return");function k(n){var t,r="string"==typeof n.data&&n.data.includes(j)?JSON.parse(n.data):n.data;if(null!=r&&null!==(t=r[j])&&void 0!==t&&t.callId){var e=r[j];g.hasOwnProperty(e.callId)&&g[e.callId].apply(g,(0,c.Z)(b.map((function(n){return e[n]}))))}}function h(){for(var n,r=y,e=!1;null!=r;){try{if("function"==typeof r[t]){n=r,e=!0;break}}catch(n){}try{if(r.frames["".concat(t,"Locator")]){n=r;break}}catch(n){}if(r===y.top)break;r=r.parent}return[n,e]}var w,P=h(),Z=(0,a.Z)(P,2),D=Z[0],E=Z[1];if(D)return E?w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o.Z((function(r,e){var o=D[t].apply(D,(0,c.Z)(I(l(l({},n),{},{callback:n.callback||O===s?S(n.callback,r,e):void 0})).map((function(n){var t=(0,a.Z)(n,2);t[0];return t[1]}))));(O===f||null==n.callback&&O===u)&&r(o)}))}:(y.addEventListener("message",k,!1),w=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new o.Z((function(r,c){var o=Math.random().toString(),i=(0,e.Z)({},m,l(l({},Object.fromEntries(I(n).filter((function(n){return"callback"!==(0,a.Z)(n,1)[0]})))),{},{callId:o}));g[o]=S(null==n?void 0:n.callback,r,c,(t||null==(null==n?void 0:n.callback))&&function(){delete g[o]}),D.postMessage(i,"*"),O===f&&r()}))}),Object.assign(w,{isDirect:E,close:function(){!E&&y.removeEventListener("message",k)}});function I(n){return n=Object.assign({version:r},n),p.map((function(t){return[t,n[t]]}))}function S(n,t,r,e){var a="function"==typeof n;return function(c,o){if(e&&e(),O!==f){var i=null==o||o?t:r;i(a?void 0:c)}a&&n.apply(this,arguments)}}}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[703],{75:function(n,t,u){u.d(t,{ky:function(){return i}});var e=u(4614),r=u(4358);function o(n){var t;return(0,r.T9)()&&(t=(0,e.sE)(window.googletag.pubads().getSlots(),function(n){return function(t){return(0,r.Uv)(t,n)}}(n))),t}function i(n){var t=o(n);return t?{gptSlot:t.getAdUnitPath(),divId:t.getSlotElementId()}:{}}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[279],{4980:function(e,r,t){t.d(r,{T:function(){return R},x:function(){return O}});var n=t(3324),i=new WeakMap;function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!i.has(e)){var t=Object.entries(e);t.sort((function(e,r){return(e=e[1].priority||0)===(r=r[1].priority||0)?0:e>r?-1:1})),i.set(e,t.map((function(e){var r=(0,n.Z)(e,2);return[r[0],r[1].fn]})))}var o=i.get(e).filter((function(e){var t=(0,n.Z)(e,1)[0];return!r.hasOwnProperty(t)||r[t]})).map((function(e){var t=(0,n.Z)(e,2),i=t[0],o=t[1];return r.hasOwnProperty(i)?r[i].bind(this,o):o}));return function(){var e=this,r=Array.from(arguments);o.forEach((function(t){t.apply(e,r)}))}}var a=t(4358),s=t(4942),d=t(265),u=t(4679);function p(e){return(e=(0,a.sF)(e)).map((function(e){var r=e.split("x"),t=(0,n.Z)(r,2),i=t[0],o=t[1];return{w:parseInt(i,10),h:parseInt(o,10)}}))}var f=new Set(["pos","placement","plcmt","api","mimes","protocols","playbackmethod","minduration","maxduration","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","minbitrate","maxbitrate","delivery","playbackend"]),c={instream:1};var v=t(5840);var m,l=t(6372),b=t(3790),y=(m={},(0,s.Z)(m,l.Z,{fpd:{priority:99,fn:function(e,r){(0,a.Ee)(e,r.ortb2)}},onlyOneClient:{priority:-99,fn:(0,b.A_)("ORTB request")},props:{fn:function(e,r){Object.assign(e,{id:e.id||(0,a.DO)(),test:e.test||0});var t=parseInt(r.timeout,10);isNaN(t)||(e.tmax=t)}}}),(0,s.Z)(m,l.DZ,{fpd:{priority:99,fn:function(e,r){(0,a.Ee)(e,r.ortb2Imp)}},id:{fn:function(e,r){e.id=r.bidId}},banner:{fn:function(e,r,t){if(!t.mediaType||t.mediaType===u.Mk){var n=(0,d.Z)(r,"mediaTypes.banner");if(n){var i={topframe:!0===(0,a.yL)()?0:1};n.sizes&&(i.format=p(n.sizes)),n.hasOwnProperty("pos")&&(i.pos=n.pos),e.banner=(0,a.Ee)(i,e.banner)}}}},pbadslot:{fn:function(e){var r,t,n,i,o=null===(r=e.ext)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.pbadslot;o&&"string"==typeof o||(null===(n=e.ext)||void 0===n||(null===(i=n.data)||void 0===i||delete i.pbadslot))}}}),(0,s.Z)(m,l.Px,{mediaType:{priority:99,fn:v.R},banner:{fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createPixel,t=void 0===r?function(e){return(0,a.SG)(decodeURIComponent(e))}:r;return function(e,r){e.mediaType===u.Mk&&(r.adm&&r.nurl?(e.ad=r.adm,e.ad+=t(r.nurl)):r.adm?e.ad=r.adm:r.nurl&&(e.adUrl=r.nurl))}}()},props:{fn:function(e,r,t){var i;Object.entries({requestId:null===(i=t.bidRequest)||void 0===i?void 0:i.bidId,seatBidId:r.id,cpm:r.price,currency:t.ortbResponse.cur||t.currency,width:r.w,height:r.h,dealId:r.dealid,creative_id:r.crid,creativeId:r.crid,burl:r.burl,ttl:r.exp||t.ttl,netRevenue:t.netRevenue}).filter((function(e){var r=(0,n.Z)(e,2);r[0];return void 0!==r[1]})).forEach((function(r){var t=(0,n.Z)(r,2),i=t[0],o=t[1];return e[i]=o})),e.meta||(e.meta={}),r.adomain&&(e.meta.advertiserDomains=r.adomain)}}}),m);y[l.DZ].native={fn:function(e,r,t){if(!t.mediaType||t.mediaType===u.B5){var n,i=r.nativeOrtbRequest;i&&(null!==(n=(i=Object.assign({},t.nativeRequest,i)).assets)&&void 0!==n&&n.length?e.native=(0,a.Ee)({},{request:JSON.stringify(i),ver:i.ver},e.native):(0,a.yN)("mediaTypes.native is set, but no assets were specified. Native request skipped.",r))}}},y[l.Px].native={fn:function(e,r){if(e.mediaType===u.B5){var t;if(t="string"==typeof r.adm?JSON.parse(r.adm):r.adm,!(0,a.PO)(t)||!Array.isArray(t.assets))throw new Error("ORTB native response contained no assets");e.native={ortb:t}}}},y[l.DZ].video={fn:function(e,r,t){if(!t.mediaType||t.mediaType===u.pX){var i=(0,d.Z)(r,"mediaTypes.video");if(!(0,a.xb)(i)){var o=Object.fromEntries(Object.entries(i).filter((function(e){var r=(0,n.Z)(e,1)[0];return f.has(r)})));if(i.playerSize){var s=p(i.playerSize);s.length>1&&(0,a.yN)("video request specifies more than one playerSize; all but the first will be ignored"),Object.assign(o,s[0])}var v=c[i.context];null!=v&&(o.placement=v),e.video=(0,a.Ee)(o,e.video)}}}},y[l.Px].video={fn:function(e,r,t){if(e.mediaType===u.pX){if((0,d.Z)(t.imp,"video.w")&&(0,d.Z)(t.imp,"video.h")){var n=[t.imp.video.w,t.imp.video.h];e.playerWidth=n[0],e.playerHeight=n[1]}r.adm&&(e.vastXml=r.adm),r.nurl&&(e.vastUrl=r.nurl)}}};var h=t(1283);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.context,t=void 0===r?{}:r,n=e.processors,i=void 0===n?R:n,s=e.overrides,d=void 0===s?{}:s,u=e.imp,p=e.request,f=e.bidResponse,c=e.response,v=new WeakMap;function m(e,r,t,n){var a;return function(){return null==a&&(a=function(){var a=t.bind(this,o(i()[e]||{},d[e]||{}));return r&&(a=r.bind(this,a)),function(){try{return a.apply(this,arguments)}catch(e){n.call.apply(n,[this,e].concat(Array.prototype.slice.call(arguments)))}}}()),a.apply(this,arguments)}}var b=m(l.DZ,u,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.H)("Error while converting bidRequest to ORTB imp; request skipped.",{error:e,bidRequest:r,context:t})})),y=m(l.Z,p,(function(e,r,t,n){var i={imp:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.H)("Error while converting to ORTB request",{error:e,imps:r,bidderRequest:t,context:n}),e})),h=m(l.Px,f,(function(e,r,t){var n={};return e(n,r,t),n}),(function(e,r,t){(0,a.H)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.",{error:e,bid:r,context:t})})),O=m(l.YC,c,(function(e,r,t,n){var i={bids:r};return e(i,t,n),i}),(function(e,r,t,n){throw(0,a.H)("Error while converting from ORTB response",{error:e,bidResponses:r,ortbResponse:t,context:n}),e}));return{toORTB:function(e){var r=e.bidderRequest,n=e.bidRequests,i=e.context,o=void 0===i?{}:i;n=n||r.bids;var s={req:Object.assign({bidRequests:n},t,o),imp:{}};s.req.impContext=s.imp;var d=n.map((function(e){var n=Object.assign({bidderRequest:r,reqContext:s.req},t,o),i=b(e,n);if(null!=i){if(i.hasOwnProperty("id"))return Object.assign(n,{bidRequest:e,imp:i}),s.imp[i.id]=n,i;(0,a.H)("Converted ORTB imp does not specify an id, ignoring bid request",e,i)}})).filter(Boolean),u=y(d,r,s.req);return s.req.bidderRequest=r,null!=u&&v.set(u,s),u},fromORTB:function(e){var r=e.request,t=e.response,n=v.get(r);if(null==n)throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(e,{ortbRequest:r},t,e)}var o=Object.fromEntries((r.imp||[]).map((function(e){return[e.id,e]}))),s=(t.seatbid||[]).flatMap((function(e){return(e.bid||[]).map((function(r){if(o.hasOwnProperty(r.impid)&&n.imp.hasOwnProperty(r.impid))return h(r,i(n.imp[r.impid],{imp:o[r.impid],seatbid:e,ortbResponse:t}));(0,a.H)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid",r)}))})).filter(Boolean);return O(s,t,i(n.req))}}}var R=(0,a.HP)((function(){return(0,h.F)(y,(0,l.fP)(l.TP))}))},1283:function(e,r,t){t.d(r,{F:function(){return i}});var n=t(6372);function i(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=r.shift(),a=r.length>1?i.apply(void 0,r):r[0];return Object.fromEntries(n.gm.map((function(e){return[e,Object.assign({},o[e],a[e])]})))}},5840:function(e,r,t){t.d(r,{R:function(){return o},e:function(){return i}});var n=t(4679),i={1:n.Mk,2:n.pX,4:n.B5};function o(e,r,t){if(!e.mediaType){var n=t.mediaType;if(!n&&!i.hasOwnProperty(r.mtype))throw new Error("Cannot determine mediaType for response");e.mediaType=n||i[r.mtype]}}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[951],{9933:function(e,i,d){d.d(i,{X:function(){return x}});var r=d(1283),t=d(4942),n=d(3324),a=d(6372),o=d(265),s=d(4358),c=d(1021),b=d(6104),u=d(6475);var v=d(9702);var p=d(3193),f=d(8640);var l,g=d(4679);var m=(l={},(0,t.Z)(l,a.Z,{extPrebid:{fn:function(e,i){var d;(0,u.N)(e,"ext.prebid",(0,s.Ee)({auctiontimestamp:i.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}},null===(d=e.ext)||void 0===d?void 0:d.prebid)),p.vc.getConfig("debug")&&(e.ext.prebid.debug=!0)}},extPrebidChannel:{fn:function(e){var i,d;(0,u.N)(e,"ext.prebid.channel",Object.assign({name:"pbjs",version:(0,f.R)().version},null===(i=e.ext)||void 0===i||null===(d=i.prebid)||void 0===d?void 0:d.channel))}},extPrebidAliases:{fn:function(e,i,d){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=r.am,n=void 0===t?b.ZP:t;if(n.aliasRegistry[i.bidderCode]){var a=n.bidderRegistry[i.bidderCode];a&&a.getSpec().skipPbsAliasing||(0,u.N)(e,"ext.prebid.aliases.".concat(i.bidderCode),n.aliasRegistry[i.bidderCode])}}}}),(0,t.Z)(l,a.DZ,{params:{fn:v.j},adUnitCode:{fn:function(e,i){var d=i.adUnitCode;d&&(0,u.N)(e,"ext.prebid.adunitcode",d)}}}),(0,t.Z)(l,a.Px,{mediaType:{fn:c.P,priority:99},videoCache:{fn:function(e,i){if(e.mediaType===g.pX){var d=(0,o.Z)(i,"ext.prebid.cache.vastXml")||{},r=d.cacheId,t=d.url;if(!r||!t){var n=(0,o.Z)(i,"ext.prebid.targeting")||{},a=n.hb_uuid,s=n.hb_cache_host,c=n.hb_cache_path;a&&s&&c&&(r=a,t="https://".concat(s).concat(c,"?uuid=").concat(a))}r&&t&&Object.assign(e,{videoCacheKey:r,vastUrl:t})}},priority:-10},bidderCode:{fn:function(e,i,d){var r;e.bidderCode=d.seatbid.seat,e.adapterCode=(0,o.Z)(i,"ext.prebid.meta.adaptercode")||(null===(r=d.bidRequest)||void 0===r?void 0:r.bidder)||e.bidderCode}},pbsBidId:{fn:function(e,i){var d=(0,o.Z)(i,"ext.prebid.bidid");(0,s.d8)(d)&&(e.pbsBidId=d)}},adserverTargeting:{fn:function(e,i){var d=(0,o.Z)(i,"ext.prebid.targeting");(0,s.PO)(d)&&(e.adserverTargeting=d)}},extPrebidMeta:{fn:function(e,i){e.meta=(0,s.Ee)({},(0,o.Z)(i,"ext.prebid.meta"),e.meta)}},pbsWurl:{fn:function(e,i){var d=(0,o.Z)(i,"ext.prebid.events.win");(0,s.d8)(d)&&(e.pbsWurl=d)}}}),(0,t.Z)(l,a.YC,{serverSideStats:{fn:function(e,i,d){Object.entries({errors:"serverErrors",responsetimemillis:"serverResponseTimeMs"}).forEach((function(e){var r=(0,n.Z)(e,2),t=r[0],a=r[1],s=(0,o.Z)(i,"ext.".concat(t,".").concat(d.bidderRequest.bidderCode));s&&(d.bidderRequest[a]=s,d.bidRequests.forEach((function(e){return e[a]=s})))}))}}}),l),h=d(4980),x=(0,s.HP)((function(){return(0,r.F)((0,h.T)(),m,(0,a.fP)(a.md))}))},1021:function(e,i,d){d.d(i,{E:function(){return o},P:function(){return s}});var r,t=d(4942),n=d(4679),a=d(5840),o=(r={},(0,t.Z)(r,n.Mk,"banner"),(0,t.Z)(r,n.B5,"native"),(0,t.Z)(r,n.pX,"video"),r);function s(e,i,d){var r,t,s=d.mediaType;s||(s=a.e.hasOwnProperty(i.mtype)?a.e[i.mtype]:null===(r=i.ext)||void 0===r||null===(t=r.prebid)||void 0===t?void 0:t.type,o.hasOwnProperty(s)||(s=n.Mk));e.mediaType=s}},9702:function(e,i,d){d.d(i,{j:function(){return a}});var r=d(1176),t=d(6104),n=d(6475);function a(e,i,d){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=a.adUnit,s=a.bidderRequests,c=a.index,b=void 0===c?r.K.index:c,u=a.bidderRegistry,v=void 0===u?t.ZP.bidderRegistry:u,p=i.params,f=v[i.bidder];f&&f.getSpec().transformBidParams&&(o=o||b.getAdUnit(i),s=s||[d.bidderRequest],p=f.getSpec().transformBidParams(p,!0,o,s)),p&&(0,n.N)(e,"ext.prebid.bidder.".concat(i.bidder),p)}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[635],{9957:function(n,r,t){t.d(r,{fe:function(){return c}});var u=t(8640),e=t(1136);function i(n,r,t){var e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(r===t)return n;var i=n;try{i=(0,u.R)().convertCurrency(n,r,t)}catch(n){if(!e)throw n}return i}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return function(u,e){return null==n&&(n=e),t(u,e,n,r)}}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n){return[n.cpm,n.currency]},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o();return(0,e.xI)((function(t){return r.apply(null,n(t))}))}}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[75],{7172:function(n,r,e){e.d(r,{fC:function(){return p}});var t=e(3324),i=e(571),o=e(4947),u=e(1087),c=e(1002),a=e(4358),f=e(265),l=e(6475);function v(n){var r={},e=[];n.forEach((function(n){n.wp&&e.push(n),n.get&&n.paths.forEach((function(e){var t=r;e.split(".").forEach((function(n){t.children=t.children||{},t.children[n]=t.children[n]||{},t=t.children[n]})),t.rule=n}))}));var t=(0,u.Db)(e);function i(n,r,e){return new Proxy(n,{get:function(n,t,o){var a=Reflect.get(n,t,o);if(r.hasOwnProperty(t)){var f=r[t],l=f.children,v=f.rule;if(l&&null!=a&&"object"===(0,c.Z)(a))return i(a,l,e);if(v&&(0,u.a)(a)&&e(v))return v.get(a)}return a}})}function o(n){return function(){n.forEach((function(n){return n()}))}}return function(n){for(var e={},c=arguments.length,a=new Array(c>1?c-1:0),f=1;f<c;f++)a[f-1]=arguments[f];return{obj:i(n,r.children||{},u.RD.apply(void 0,[e].concat(a))),verify:o(t.apply(void 0,[e,n].concat(a)))}}}function d(n){return Object.assign({wp:!0,run:function(n,r,e,t,i){var o=e&&e.hasOwnProperty(t),v=o?e[t]:void 0,d=o&&null!=v&&"object"===(0,c.Z)(v)?(0,a.I8)(v):v;return function(){var e=null==r?n:(0,f.Z)(n,r),c=e&&(0,u.a)(e[t]),h=c?e[t]:void 0;!o&&c&&i()?delete e[t]:o===c&&h===v&&(0,a.vZ)(h,d)||!i()||(0,l.N)(n,(null==r?[]:[r]).concat(t).join("."),d)}}},n)}function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.xD;return[{name:o.EL,paths:u.ZZ,applies:(0,u.js)(o.EL,n)},{name:o.S5,paths:u.$8,applies:(0,u.js)(o.S5,n)}].map(d)}var b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.xD;return v((0,u.Mp)(n).concat(h(n)))}();var p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return function(r,e){r.global=r.global||{},r.bidder=r.bidder||{};var i=new Set(Object.keys(r.bidder)),o=[];function u(r){var t=n(r,e);return o.push(t.verify),t.obj}var c={global:u(r.global),bidder:Object.fromEntries(Object.entries(r.bidder).map((function(n){var r=(0,t.Z)(n,2);return[r[0],u(r[1])]})))};return{obj:c,verify:function(){Object.entries(c.bidder).filter((function(n){var r=(0,t.Z)(n,1)[0];return!i.has(r)})).forEach((function(i){var o=(0,t.Z)(i,2),u=o[0],c=o[1],f={},l=n(f,e);(0,a.Ee)(l.obj,c),l.verify(),r.bidder[u]=f})),o.forEach((function(n){return n()}))}}}}()}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[213],{9865:function(n,u,e){function t(n,u,e){return e?n+u+"="+encodeURIComponent(e)+"&":n}e.d(u,{t:function(){return t}})}}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[864],{6319:function(e,r,a){var n=a(1002),t=a(9062),i=a(8640),s=a(4358),o=a(265),d=a(5706),p=a(3193),u=a(4699),c=a(4679),l=a(4614),m=a(154),f=a(5164),v=a(5975),b=a(7673),_=a(59),g=a(4292),y=a(9050),h=a(7374),k=a(5370),x=a(6296),w="appnexus",C="https://ib.adnxs.com/ut/v3/prebid",I="https://ib.adnxs-simple.com/ut/v3/prebid",E=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],O=["minduration","maxduration","skip","skipafter","playbackmethod","api","startdelay"],j=["age","externalUid","external_uid","segments","gender","dnt","language"],T=["geo","device_id"],S=["enabled","dongle","member_id","debug_timeout"],q={apn_debug_dongle:"dongle",apn_debug_member_id:"member_id",apn_debug_timeout:"debug_timeout"},U={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},R={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},Z="<script",A=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,N="trk.js",z=(0,f.df)({bidderCode:w}),P={code:w,gvlid:32,aliases:[{code:"appnexusAst",gvlid:32},{code:"emxdigital",gvlid:183},{code:"pagescience",gvlid:32},{code:"gourmetads",gvlid:32},{code:"matomy",gvlid:32},{code:"featureforward",gvlid:32},{code:"oftmedia",gvlid:32},{code:"adasta",gvlid:32},{code:"beintoo",gvlid:618},{code:"projectagora",gvlid:1032},{code:"uol",gvlid:32}],supportedMediaTypes:[c.Mk,c.pX,c.B5],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.placement_id||e.params.member&&(e.params.invCode||e.params.inv_code))},buildRequests:function(e,r){var a,n,i=(e=(0,_.lY)(e)).map(B),o=(0,l.sE)(e,M),d={};!0===p.vc.getConfig("coppa")&&(d={coppa:!0}),o&&Object.keys(o.params.user).filter((function(e){return(0,l.q9)(j,e)})).forEach((function(e){var r=(0,h.G)(e);if("segments"===e&&(0,s.kJ)(o.params.user[e])){var a=[];o.params.user[e].forEach((function(e){(0,s.hj)(e)?a.push({id:e}):(0,s.PO)(e)&&a.push(e)})),d[r]=a}else"segments"!==e&&(d[r]=o.params.user[e])}));var u,c=(0,l.sE)(e,X);c&&c.params&&c.params.app&&(u={},Object.keys(c.params.app).filter((function(e){return(0,l.q9)(T,e)})).forEach((function(e){return u[e]=c.params.app[e]})));var m,f=(0,l.sE)(e,H);f&&f.params&&c.params.app&&c.params.app.id&&(m={appid:f.params.app.id});var v={},g={},w=z.getCookie("apn_prebid_debug")||null;if(w)try{v=JSON.parse(w)}catch(e){(0,s.H)("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{Object.keys(q).forEach((function(e){var r=(0,s.ak)(e);(0,s.d8)(r)&&""!==r&&(v[q[e]]=r,v.enabled=!0)})),v=(0,k.u)({member_id:"number",debug_timeout:"number"},v);var E=(0,l.sE)(e,L);E&&E.debug&&(v=E.debug)}v&&v.enabled&&Object.keys(v).filter((function(e){return(0,l.q9)(S,e)})).forEach((function(e){g[e]=v[e]}));var O=(0,l.sE)(e,D),U=O?parseInt(O.params.member,10):0,R=e[0].schain,Z=(0,l.sE)(e,V),A={tags:(0,t.Z)(i),user:d,sdk:{source:"pbjs",version:"8.19.0"},schain:R};Z&&(A.iab_support={omidpn:"Appnexus",omidpv:"8.19.0"}),U>0&&(A.member_id=U),c&&(A.device=u),f&&(A.app=m);var N=(0,s.I8)(r&&r.ortb2),P=(0,s.I8)(p.vc.getConfig("appnexusAuctionKeywords"))||{},J=(0,y.bn)(N,P);if(J.length>0&&(A.keywords=J),p.vc.getConfig("adpod.brandCategoryExclusion")&&(A.brand_category_uniqueness=!0),g.enabled&&(A.debug=g,(0,s.PN)("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(g,null,4))),r&&r.gdprConsent&&(A.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},r.gdprConsent.addtlConsent&&-1!==r.gdprConsent.addtlConsent.indexOf("~"))){var $=r.gdprConsent.addtlConsent,K=$.substring($.indexOf("~")+1);A.gdpr_consent.addtl_consent=K.split(".").map((function(e){return parseInt(e,10)}))}if(r&&r.uspConsent&&(A.us_privacy=r.uspConsent),null!=r&&r.gppConsent?A.privacy={gpp:r.gppConsent.gppString,gpp_sid:r.gppConsent.applicableSections}:null!=r&&null!==(a=r.ortb2)&&void 0!==a&&null!==(n=a.regs)&&void 0!==n&&n.gpp&&(A.privacy={gpp:r.ortb2.regs.gpp,gpp_sid:r.ortb2.regs.gpp_sid}),r&&r.refererInfo){var Q={rd_ref:encodeURIComponent(r.refererInfo.topmostLocation),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")},W=r.refererInfo.canonicalUrl;(0,s.d8)(W)&&""!==W&&(Q.rd_can=W),A.referrer_detection=Q}if((0,l.sE)(e,G)&&e.filter(G).forEach((function(e){var r=function(e,r){var a=r.mediaTypes.video,n=a.durationRangeSec,i=a.requireExactDuration,s=function(e){var r=e.adPodDurationSec,a=e.durationRangeSec,n=e.requireExactDuration,i=Math.min.apply(Math,(0,t.Z)(a)),s=Math.floor(r/i);return n?Math.max(s,a.length):s}(r.mediaTypes.video),o=Math.max.apply(Math,(0,t.Z)(n)),d=e.filter((function(e){return e.uuid===r.bidId})),p=h.h.apply(void 0,(0,t.Z)(d).concat([s]));if(i){var u=Math.ceil(s/n.length),c=(0,x.y)(p,u);n.forEach((function(e,r){c[r].map((function(r){F(r,"minduration",e),F(r,"maxduration",e)}))}))}else p.map((function(e){return F(e,"maxduration",o)}));return p}(i,e),a=A.tags.filter((function(r){return r.uuid!==e.bidId}));A.tags=[].concat((0,t.Z)(a),(0,t.Z)(r))})),e[0].userId){var Y=[];e[0].userIdAsEids.forEach((function(e){!e||!e.uids||e.uids.length<1||e.uids.forEach((function(r){var a={source:e.source,id:r.id};"adserver.org"==e.source?a.rti_partner="TDID":"uidapi.com"==e.source&&(a.rti_partner="UID2"),Y.push(a)}))})),Y.length&&(A.eids=Y)}i[0].publisher_id&&(A.publisher_id=i[0].publisher_id);var ee=function(e,r){var a=[],n={withCredentials:!0},t=C;(0,b.h)(null==r?void 0:r.gdprConsent)||(t=I);"TRUE"!==(0,s.ak)("apn_test").toUpperCase()&&!0!==p.vc.getConfig("apn_test")||(n.customHeaders={"X-Is-Test":1});if(e.tags.length>15){var i=(0,s.I8)(e);(0,x.y)(e.tags,15).forEach((function(e){i.tags=e;var s=JSON.stringify(i);a.push({method:"POST",url:t,data:s,bidderRequest:r,options:n})}))}else{var o=JSON.stringify(e);a={method:"POST",url:t,data:o,bidderRequest:r,options:n}}return a}(A,r);return ee},interpretResponse:function(e,r){var a=this,n=r.bidderRequest;e=e.body;var t=[];if(!e||e.error){var i="in response for ".concat(n.bidderCode," adapter");return e&&e.error&&(i+=": ".concat(e.error)),(0,s.H)(i),t}if(e.tags&&e.tags.forEach((function(e){var r,i=(r=e)&&r.ads&&r.ads.length&&(0,l.sE)(r.ads,(function(e){return e.rtb}));if(i&&((!0===v.S.get(n.bidderCode,"allowZeroCpmBids")?i.cpm>=0:i.cpm>0)&&(0,l.q9)(a.supportedMediaTypes,i.ad_type))){var p=function(e,r,a){var n=(0,s.zE)(e.uuid,[a]),t=(0,s._d)(),i={adId:t,requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:n.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.adomain&&(i.meta=Object.assign({},i.meta,{advertiserDomains:[r.adomain]}));r.advertiser_id&&(i.meta=Object.assign({},i.meta,{advertiserId:r.advertiser_id}));function p(e){return{ver:"1.0",complete:0,nodes:[{bsid:e.buyer_member_id.toString()}]}}r.buyer_member_id&&(i.meta=Object.assign({},i.meta,{dchain:p(r)}));r.brand_id&&(i.meta=Object.assign({},i.meta,{brandId:r.brand_id}));if(r.rtb.video){switch(Object.assign(i,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastImpUrl:r.notify_url,ttl:3600}),(0,o.Z)(n,"mediaTypes.video.context")){case c.Oh:var u=g.m[r.brand_category_id]?g.m[r.brand_category_id]:null;i.meta=Object.assign({},i.meta,{primaryCatId:u});var f=r.deal_priority;i.video={context:c.Oh,durationSeconds:Math.floor(r.rtb.video.duration_ms/1e3),dealTier:f},i.vastUrl=r.rtb.video.asset_url;break;case m.gZ:if(i.adResponse=e,i.adResponse.ad=i.adResponse.ads[0],i.adResponse.ad.video=i.adResponse.ad.rtb.video,i.vastXml=r.rtb.video.content,r.renderer_url){var v=(0,l.sE)(a.bids,(function(r){return r.bidId===e.uuid})),b=(0,o.Z)(v,"mediaTypes.video.renderer.options");b||(b=(0,o.Z)(v,"renderer.options")),i.renderer=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=d.Th.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1,adUnitCode:e});try{n.setRender($)}catch(e){(0,s.yN)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return(0,s.ji)("AppNexus outstream video impression event")},loaded:function(){return(0,s.ji)("AppNexus outstream video loaded event")},ended:function(){(0,s.ji)("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),n}(i.adUnitCode,r,b)}break;case m.LD:i.vastUrl=r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)}}else if(r.rtb[c.B5]){var _,y=r.rtb[c.B5];if(function(e){if(!e||""===e)return!1;var r=e.match(A),a=null!=r&&r.length>=1,n=e.match(N),t=null!=n&&n.length>=1;return e.startsWith(Z)&&t&&a}(r.viewability.config)){var h="pbjs_adid="+t+";pbjs_auc="+n.adUnitCode;_=r.viewability.config.replace("dom_id=%native_dom_id%",h)}var k=y.javascript_trackers;null==k?k=_:(0,s.d8)(k)?k=[k,_]:k.push(_),i[c.B5]={title:y.title,body:y.desc,body2:y.desc2,cta:y.ctatext,rating:y.rating,sponsoredBy:y.sponsored,privacyLink:y.privacy_link,address:y.address,downloads:y.downloads,likes:y.likes,phone:y.phone,price:y.price,salePrice:y.saleprice,clickUrl:y.link.url,displayUrl:y.displayurl,clickTrackers:y.link.click_trackers,impressionTrackers:y.impression_trackers,video:y.video,javascriptTrackers:k},y.main_img&&(i.native.image={url:y.main_img.url,height:y.main_img.height,width:y.main_img.width}),y.icon&&(i.native.icon={url:y.icon.url,height:y.icon.height,width:y.icon.width})}else{Object.assign(i,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{if(r.rtb.trackers)for(var x=0;x<r.rtb.trackers[0].impression_urls.length;x++){var w=r.rtb.trackers[0].impression_urls[x],C=(0,s.SG)(w);i.ad+=C}}catch(e){(0,s.H)("Error appending tracking pixel",e)}}return i}(e,i,n);p.mediaType=function(e){var r=e.ad_type;return r===c.pX?c.pX:r===c.B5?c.B5:c.Mk}(i),t.push(p)}})),e.debug&&e.debug.debug_info){var p="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;p=p.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),(0,s.ji)("https://console.appnexus.com/docs/understanding-the-debug-auction"),(0,s.ji)(p)}return t},getUserSyncs:function(e,r,a,n,t){if(e.iframeEnabled&&(0,b.h)(a)&&function(e){return!e||!Array.isArray(e.applicableSections)||e.applicableSections.every((function(e){return"number"==typeof e&&e<=5}))}(t))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(e,r,a,n){var t=y.Bq;if(!0===r){var i=null,d=p.vc.getConfig("s2sConfig");(0,s.PO)(d)?i=(0,o.Z)(d,"endpoint.p1Consent"):(0,s.kJ)(d)&&d.forEach((function(e){(0,l.q9)(e.bidders,a.bids[0].bidder)&&(i=(0,o.Z)(e,"endpoint.p1Consent"))})),i&&i.match("/openrtb2/prebid")&&(t=Q)}return e=(0,k.u)({member:"string",invCode:"string",placementId:"number",keywords:t,publisherId:"number"},e),r&&(Object.keys(e).forEach((function(r){var a=(0,h.G)(r);a!==r&&(e[a]=e[r],delete e[r])})),e.use_pmt_rule="boolean"==typeof e.use_payment_rule&&e.use_payment_rule,e.use_payment_rule&&delete e.use_payment_rule),e}};function B(e){var r,a={};Object.keys(e.params).forEach((function(r){var a=(0,h.G)(r);a!==r&&(e.params[a]=e.params[r],delete e.params[r])})),a.sizes=J(e.sizes),a.primary_size=a.sizes[0],a.ad_types=[],a.uuid=e.bidId,e.params.placement_id?a.id=parseInt(e.params.placement_id,10):a.code=e.params.inv_code,a.allow_smaller_sizes=e.params.allow_smaller_sizes||!1,a.use_pmt_rule="boolean"==typeof e.params.use_payment_rule?e.params.use_payment_rule:"boolean"==typeof e.params.use_pmt_rule&&e.params.use_pmt_rule,a.prebid=!0,a.disable_psa=!0;var n=function(e){if(!(0,s.LQ)(e.getFloor))return e.params.reserve?e.params.reserve:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if((0,s.PO)(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);if(n&&(a.reserve=n),e.params.position)a.position={above:1,below:2}[e.params.position]||0;else{var t=(0,o.Z)(e,"mediaTypes.banner.pos")||(0,o.Z)(e,"mediaTypes.video.pos");0!==t&&1!==t&&3!==t||(a.position=3===t?2:t)}e.params.traffic_source_code&&(a.traffic_source_code=e.params.traffic_source_code),e.params.private_sizes&&(a.private_sizes=J(e.params.private_sizes)),e.params.supply_type&&(a.supply_type=e.params.supply_type),e.params.pub_click&&(a.pubclick=e.params.pub_click),e.params.ext_inv_code&&(a.ext_inv_code=e.params.ext_inv_code),e.params.publisher_id&&(a.publisher_id=parseInt(e.params.publisher_id,10)),e.params.external_imp_id&&(a.external_imp_id=e.params.external_imp_id);var i=(0,y.gw)((0,y.cM)((0,o.Z)(e,"ortb2Imp.ext.data.keywords")),null===(r=e.params)||void 0===r?void 0:r.keywords);i.length>0&&(a.keywords=i);var d,p,u=(0,o.Z)(e,"ortb2Imp.ext.gpid")||(0,o.Z)(e,"ortb2Imp.ext.data.pbadslot");if(u&&(a.gpid=u),(e.mediaType===c.B5||(0,o.Z)(e,"mediaTypes.".concat(c.B5)))&&(a.ad_types.push(c.B5),0===a.sizes.length&&(a.sizes=J([1,1])),e.nativeParams)){var m=(d=e.nativeParams,p={},Object.keys(d).forEach((function(e){var r=R[e]&&R[e].serverName||R[e]||e,a=R[e]&&R[e].requiredParams;if(p[r]=Object.assign({},a,d[e]),(r===R.image.serverName||r===R.icon.serverName)&&p[r].sizes){var n=p[r].sizes;((0,s.HC)(n)||(0,s.kJ)(n)&&n.length>0&&n.every((function(e){return(0,s.HC)(e)})))&&(p[r].sizes=J(p[r].sizes))}r===R.privacyLink&&(p.privacy_supported=!0)})),p);a[c.B5]={layouts:[m]}}var f=(0,o.Z)(e,"mediaTypes.".concat(c.pX)),v=(0,o.Z)(e,"mediaTypes.video.context");return a.hb_source=f&&"adpod"===v?7:1,(e.mediaType===c.pX||f)&&a.ad_types.push(c.pX),(e.mediaType===c.pX||f&&"outstream"!==v)&&(a.require_asset_url=!0),e.params.video&&(a.video={},Object.keys(e.params.video).filter((function(e){return(0,l.q9)(E,e)})).forEach((function(r){switch(r){case"context":case"playback_method":var n=e.params.video[r];n=(0,s.kJ)(n)?n[0]:n,a.video[r]=U[r][n];break;case"frameworks":break;default:a.video[r]=e.params.video[r]}})),e.params.video.frameworks&&(0,s.kJ)(e.params.video.frameworks)&&(a.video_frameworks=e.params.video.frameworks)),f&&(a.video=a.video||{},Object.keys(f).filter((function(e){return(0,l.q9)(O,e)})).forEach((function(e){switch(e){case"minduration":case"maxduration":"number"!=typeof a.video[e]&&(a.video[e]=f[e]);break;case"skip":"boolean"!=typeof a.video.skippable&&(a.video.skippable=1===f[e]);break;case"skipafter":"number"!=typeof a.video.skipoffset&&(a.video.skippoffset=f[e]);break;case"playbackmethod":if("number"!=typeof a.video.playback_method){var r=f[e];(r=(0,s.kJ)(r)?r[0]:r)>=1&&r<=4&&(a.video.playback_method=r)}break;case"api":if(!a.video_frameworks&&(0,s.kJ)(f[e])){var n=f[e].map((function(e){var r=4===e?5:5===e?4:e;if(r>=1&&r<=5)return r})).filter((function(e){return e}));a.video_frameworks=n}break;case"startdelay":case"placement":if("number"!=typeof a.video.context){var t=f.placement,i=f.startdelay,o=function(e){if(!e)return;if(2===e)return"in-banner";if(e>2)return"outstream"}(t)||function(e){if(!e)return;if(0===e)return"pre_roll";if(-1===e)return"mid_roll";if(-2===e)return"post_roll"}(i);a.video.context=U.context[o]}}}))),e.renderer&&(a.video=Object.assign({},a.video,{custom_renderer_present:!0})),e.params.frameworks&&(0,s.kJ)(e.params.frameworks)&&(a.banner_frameworks=e.params.frameworks),(0,o.Z)(e,"mediaTypes.".concat(c.Mk))&&a.ad_types.push(c.Mk),0===a.ad_types.length&&delete a.ad_types,a}function J(e){var r=[],a={};if((0,s.kJ)(e)&&2===e.length&&!(0,s.kJ)(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===(0,n.Z)(e))for(var t=0;t<e.length;t++){var i=e[t];(a={}).width=parseInt(i[0],10),a.height=parseInt(i[1],10),r.push(a)}return r}function M(e){return!!e.params.user}function D(e){return!!parseInt(e.params.member,10)}function X(e){if(e.params)return!!e.params.app}function H(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function L(e){return!!e.debug}function G(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===c.Oh}function V(e){var r=!1,a=e.params,n=e.params.video;return a.frameworks&&(0,s.kJ)(a.frameworks)&&(r=(0,l.q9)(e.params.frameworks,6)),!r&&n&&n.frameworks&&(0,s.kJ)(n.frameworks)&&(r=(0,l.q9)(e.params.video.frameworks,6)),r}function F(e,r,a){(0,s.xb)(e.video)&&(e.video={}),e.video[r]=a}function $(e,r){!function(e){try{var r=document.getElementById(e).querySelectorAll("div[id^='google_ads']");r[0]&&r[0].style.setProperty("display","none")}catch(e){}}(e.adUnitCode),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((function(){((null==r?void 0:r.defaultView)||window).ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},K.bind(null,e))}))}function K(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}function Q(e){var r="";return Object.keys(e).forEach((function(a){(0,s.d8)(e[a])?""!==e[a]?r+="".concat(a,"=").concat(e[a],","):r+="".concat(a,","):(0,s.kJ)(e[a])&&(""===e[a][0]?r+="".concat(a,","):e[a].forEach((function(e){r+="".concat(a,"=").concat(e,",")})))})),r=r.substring(0,r.length-1)}(0,u.dX)(P),(0,i.z)("appnexusBidAdapter")},7673:function(e,r,a){a.d(r,{h:function(){return t}});var n=a(265);function t(e){return null==e||!e.gdprApplies||!0===(0,n.Z)(e,"vendorData.purpose.consents.1")}}},function(e){e.O(0,[402,157,277,284,190],(function(){return r=6319,e(e.s=r);var r}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[188],{3109:function(e,n,t){var r=t(1002),i=t(8640),o=t(4358),d=t(265),a=t(4699),u=t(5164),s=t(7673),p="concert",c={code:p,isBidRequestValid:function(e){return!!e.params.partnerId||((0,o.yN)("Missing partnerId bid parameter"),!1)},buildRequests:function(e,n){var t,r;(0,o.ji)(e),(0,o.ji)(n);var i=[],d={meta:{prebidVersion:"8.19.0",pageUrl:n.refererInfo.page,screen:[window.screen.width,window.screen.height].join("x"),browserLanguage:window.navigator.language,debug:(0,o.eB)(),uid:f(n,e),optedOut:g(),adapterVersion:"1.2.0",uspConsent:n.uspConsent,gdprConsent:n.gdprConsent,gppConsent:n.gppConsent,tdid:m(n,e)}};return!d.meta.gppConsent&&null!==(t=n.ortb2)&&void 0!==t&&null!==(r=t.regs)&&void 0!==r&&r.gpp&&(d.meta.gppConsent={gppString:n.ortb2.regs.gpp,applicableSections:n.ortb2.regs.gpp_sid}),d.slots=e.map((function(e){var t,r;!function(e,n){if(n.userId){var t=function(e,n,t,r){if(e){var i={id:e,atype:r};return t&&(i.ext=t),{source:n,uids:[i]}}}(n.userId.uid2&&n.userId.uid2.id,"uidapi.com",void 0,3);e.push(t)}}(i,e);var o=function(e){if(e){var n=e.getBoundingClientRect();return{left:n.left+window.scrollX,top:n.top+window.scrollY}}}(document.getElementById(e.adUnitCode));return{name:e.adUnitCode,bidId:e.bidId,transactionId:null===(t=e.ortb2Imp)||void 0===t||null===(r=t.ext)||void 0===r?void 0:r.tid,sizes:e.params.sizes||e.sizes,partnerId:e.params.partnerId,slotType:e.params.slotType,adSlot:e.params.slot||e.adUnitCode,placementId:e.params.placementId||"",site:e.params.site||n.refererInfo.page,ref:n.refererInfo.ref,offsetCoordinates:{x:null==o?void 0:o.left,y:null==o?void 0:o.top}}})),d.meta.eids=i.filter(Boolean),(0,o.ji)(d),{method:"POST",url:"".concat("https://bids.concert.io","/bids/prebid"),data:JSON.stringify(d)}},interpretResponse:function(e,n){(0,o.ji)(e),(0,o.ji)(n);var t=e.body;if(!t||"object"!==(0,r.Z)(t))return[];var i;return i=t.bids.map((function(e){return{requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency}})),(0,o.eB)()&&t.debug&&(0,o.ji)("CONCERT",t.debug),(0,o.ji)(i),i},onTimeout:function(e){(0,o.ji)("concert bidder timed out"),(0,o.ji)(e)},onBidWon:function(e){(0,o.ji)("concert bidder won bid"),(0,o.ji)(e)}};(0,a.dX)(c);var l=(0,u.df)({bidderCode:p});function f(e,n){if(g()||!v(e))return!1;var t=(0,d.Z)(n[0],"userId.sharedid.id")||(0,d.Z)(n[0],"userId.pubcid"),r=(0,d.Z)(n[0],"crumbs.pubcid");if(t)return t;if(r)return r;var i="c_uid",a="vmconcert_uid",u=l.getDataFromLocalStorage(i),s=l.getDataFromLocalStorage(a);return u&&(s=u,l.setDataInLocalStorage(a,s),l.removeDataFromLocalStorage(i)),s||(s=(0,o.DO)(),l.setDataInLocalStorage(a,s)),s}function g(){return"true"===l.getDataFromLocalStorage("c_nap")}function v(e){var n=!0;"string"==typeof(null==e?void 0:e.uspConsent)&&"1"===(null==e?void 0:e.uspConsent[0])&&"Y"===(null==e?void 0:e.uspConsent[2].toUpperCase())&&(n=!1);var t=(0,s.h)(null==e?void 0:e.gdprConsent);return n&&t}function m(e,n){return g()||!v(e)?null:(0,d.Z)(n[0],"userId.tdid")||null}(0,i.z)("concertBidAdapter")},7673:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(265);function i(e){return null==e||!e.gdprApplies||!0===(0,r.Z)(e,"vendorData.purpose.consents.1")}}},function(e){var n;n=3109,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[266],{5630:function(n,e,t){var o,r,i,a,c,s,u=t(1002),d=t(8640),l=t(4358),p=t(6475),f=t(3193),g=t(4516),m=t(4614),v=t(9128),b=t(6372),P=t(4078),y=t(2712),C=!1,h={iab:function(n){var e=n.onSuccess,t=n.onError,o=n.onEvent;var r=(0,y.b6)({apiName:"__tcfapi",apiVersion:2,apiArgs:["command","version","callback","parameter"]});if(!r)return t("TCF2 CMP not found.");r.isDirect?(0,l.PN)("Detected CMP API is directly accessible, calling it now..."):(0,l.PN)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now...");r({command:"addEventListener",callback:function(n,r){(0,l.PN)("Received a response from CMP",n),r?(o(n),!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||w(n,{onSuccess:e,onError:t})):t("CMP unable to register callback function.  Please check CMP setup.")}})},static:function(n){var e=n.onSuccess,t=n.onError;w(a,{onSuccess:e,onError:t})}};function M(n){var e,t,i=!1,a=null,s=!1;function u(n){null!=a&&clearTimeout(a),i||null==n||(0===n?e():a=setTimeout(e,n))}function d(e,t,o){if(u(null),i=!0,g.rp.setConsentData(e),"function"==typeof n){for(var r=arguments.length,a=new Array(r>3?r-3:0),c=3;c<r;c++)a[c-3]=arguments[c];n.apply(void 0,[t,o].concat(a))}}if((0,m.q9)(Object.keys(h),o)){var l={onSuccess:function(n){return d(n,!1)},onError:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];d.apply(void 0,[null,!0,n].concat(t))},onEvent:function(n){t=n,s||(s=!0,null!=c&&u(c))}};e=function(){var n=function(n){d(n,!1,"".concat(s?"Timeout waiting for user action on CMP":"CMP did not load",", continuing auction..."))};w(t,{onSuccess:n,onError:function(){return n(S(void 0))}})},h[o](l),null!=c&&s||u(r)}else d(null,!1,"CMP framework (".concat(o,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}var A=(0,v.g3)("gdpr",(function(n,e){var t;t=function(t,o){if(o){var r=l.yN;t&&(r=l.H,o="".concat(o," Canceling auction as per consentManagement config."));for(var i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];r.apply(void 0,[o].concat(a))}t?(n.stopTiming(),"function"==typeof e.bidsBackHandler?e.bidsBackHandler():(0,l.H)("Error executing bidsBackHandler")):n.call(this,e)},s?((0,l.PN)("User consent information already known.  Pulling internally stored information..."),t(!1)):M(t)}));function w(n,e){var t,o,r=e.onSuccess,a=e.onError;t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i,o=n&&n.tcString,"boolean"==typeof t&&(!0!==t||o&&(0,l.d8)(o))?r(S(n)):a("CMP returned unexpected value during lookup process.",n)}function S(n){return s={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:i},n&&n.addtlConsent&&(0,l.d8)(n.addtlConsent)&&(s.addtlConsent=n.addtlConsent),s.apiVersion=2,s}f.vc.getConfig("consentManagement",(function(n){return function(n){if((n=n&&(n.gdpr||n.usp||n.gpp?n.gdpr:n))&&"object"===(0,u.Z)(n)){var e;(0,l.d8)(n.cmpApi)?o=n.cmpApi:(o="iab",(0,l.PN)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,l.hj)(n.timeout)?r=n.timeout:(r=1e4,(0,l.PN)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),c=(0,l.hj)(n.actionTimeout)?n.actionTimeout:null,i=!0===n.defaultGdprScope,(0,l.PN)("consentManagement module has been activated..."),"static"===o&&((0,l.PO)(n.consentData)?(null!=(null===(e=a=n.consentData)||void 0===e?void 0:e.getTCData)&&(a=a.getTCData),r=0):(0,l.H)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),C||(0,d.R)().requestBids.before(A,50),C=!0,g.rp.enable(),M()}else(0,l.yN)("consentManagement (gdpr) config not defined, exiting consent manager")}(n.consentManagement)})),P.S.before((function(n,e){return n(e.then((function(n){var e=g.rp.getConsentData();return e&&("boolean"==typeof e.gdprApplies&&(0,p.N)(n,"regs.ext.gdpr",e.gdprApplies?1:0),(0,p.N)(n,"user.ext.consent",e.consentString)),n})))})),(0,b.f8)({type:b.Z,name:"gdprAddtlConsent",fn:function(n,e){var t,o=null===(t=e.gdprConsent)||void 0===t?void 0:t.addtlConsent;o&&"string"==typeof o&&(0,p.N)(n,"user.ext.ConsentedProvidersSettings.consented_providers",o)}}),(0,d.z)("consentManagement")},6372:function(n,e,t){t.d(e,{DZ:function(){return a},Px:function(){return c},TP:function(){return u},YC:function(){return s},Z:function(){return i},f8:function(){return g},fP:function(){return m},gm:function(){return o},md:function(){return d}});var o=["request","imp","bidResponse","response"],r=["default","pbs"],i=o[0],a=o[1],c=o[2],s=o[3],u=r[0],d=r[1],l=new Set(o);var p,f=(p={},{registerOrtbProcessor:function(n){var e=n.type,t=n.name,r=n.fn,i=n.priority,a=void 0===i?0:i,c=n.dialects,s=void 0===c?[u]:c;if(!l.has(e))throw new Error("ORTB processor type must be one of: ".concat(o.join(", ")));s.forEach((function(n){p.hasOwnProperty(n)||(p[n]={}),p[n].hasOwnProperty(e)||(p[n][e]={}),p[n][e][t]={priority:a,fn:r}}))},getProcessors:function(n){return p[n]||{}}}),g=f.registerOrtbProcessor,m=f.getProcessors}},function(n){n.O(0,[968],(function(){return e=5630,n(n.s=e);var e}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[168],{277:function(n,t,e){var r=e(1002),i=e(7326),a=e(9340),o=e(2963),c=e(1120);function u(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=(0,c.Z)(n)););return n}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,t,e){var r=u(n,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?n:e):i.value}},s.apply(this,arguments)}var l=e(3324),p=e(4942),f=e(8916),d=e(3144),v=e(5671),g=e(9062),h=e(8640),y=e(4358),m=e(6475),P=e(3193),b=e(4516),w=e(9128),Z=e(4078),S=e(2712),C=e(8792),O=e(6310);function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=(0,c.Z)(n);if(t){var i=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)}}function M(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?M(Object(e),!0).forEach((function(t){(0,p.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function N(n,t,e){!function(n,t){if(t.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,t),t.set(n,e)}function T(n,t){var e=function(n,t,e){if(!t.has(n))throw new TypeError("attempted to "+e+" private field on non-instance");return t.get(n)}(n,t,"set");return function(n,t){if(t.set)return"__destrObj"in t||(t.__destrObj={set value(e){t.set.call(n,e)}}),t.__destrObj;if(!t.writable)throw new TypeError("attempted to set read only private field");return t}(n,e)}var D,E,R,G,A=!1;function I(n,t){var e=t.onSuccess,r=t.onError;new C.Z((function(t){return t(n())})).then(e,(function(n){n instanceof x?r.apply(void 0,[n.message].concat((0,g.Z)(n.args))):r("GPP error:",n)}))}var _="1.0",x=(0,d.Z)((function n(t,e){(0,v.Z)(this,n),this.message=t,this.args=null==e?[]:[e]})),z=new WeakMap,L=new WeakMap,U=new WeakMap,V=function(){function n(t,e){var r=this;(0,v.Z)(this,n),N(this,z,{writable:!0,value:void 0}),N(this,L,{writable:!0,value:void 0}),N(this,U,{writable:!0,value:[]}),(0,p.Z)(this,"initialized",!1),this.apiVersion=this.constructor.apiVersion,this.cmpVersion=e,this.cmp=e;var i=[0,1].map((function(n){return function(t){for(;(0,f.Z)(r,U).length;)(0,f.Z)(r,U).pop()[n](t)}})),a=(0,l.Z)(i,2);T(this,z).value=a[0],T(this,L).value=a[1]}return(0,d.Z)(n,[{key:"init",value:function(n){var t=this,e=this.updateWhenReady(n);return this.initialized||(this.initialized=!0,this.cmp({command:"addEventListener",callback:function(n,e){var r;null==e||e?"error"===(null==n||null===(r=n.pingData)||void 0===r?void 0:r.cmpStatus)?(0,f.Z)(t,L).call(t,new x('CMP status is "error"; please check CMP setup',n)):t.isCMPReady((null==n?void 0:n.pingData)||{})&&t.events.includes(null==n?void 0:n.eventName)&&(0,f.Z)(t,z).call(t,t.updateConsent(n.pingData)):(0,f.Z)(t,L).call(t,new x("Received error response from CMP",n))}})),e}},{key:"refresh",value:function(){return this.cmp({command:"ping"}).then(this.updateWhenReady.bind(this))}},{key:"updateConsent",value:function(n){return this.getGPPData(n).then((function(n){if(null==n||(0,y.xb)(n))throw new x("Received empty response from CMP",n);return X(n)})).then((function(n){return(0,y.PN)("Retrieved GPP consent from CMP:",n),n}))}},{key:"nextUpdate",value:function(){var n=this;return new C.Z((function(t,e){(0,f.Z)(n,U).push([t,e])}))}},{key:"updateWhenReady",value:function(n){return this.isCMPReady(n)?this.updateConsent(n):this.nextUpdate()}}],[{key:"register",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.apiVersion=n,this.CLIENTS[n]=this,t&&(this.CLIENTS.default=this)}},{key:"init",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.b6;return null==this.INST&&(this.INST=this.ping(t).catch((function(t){throw n.INST=null,t}))),this.INST.then((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1];return[e,e.initialized?e.refresh():e.init(r)]}))}},{key:"ping",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.b6,e={apiName:"__gpp",apiArgs:["command","callback","parameter"]},r=t(j(j({},e),{},{mode:S.kX}));return new C.Z((function(i,a){if(null!=r){var o=!1,c=function(r,c){if(!o)if(null==c||c){if(null!=r){o=!0;var u=null==r?void 0:r.gppVersion,s=n.getClient(u);u!==s.apiVersion?(0,y.yN)("Unrecognized GPP CMP version: ".concat(u,". Continuing using GPP API version ").concat(s,"...")):(0,y.PN)("Using GPP version ".concat(u));var l=s.apiVersion===_?S.sM:S.m1,p=new s(u,t(j(j({},e),{},{mode:l})));i([p,r])}}else a(r)};r({command:"ping",callback:c}).then((function(n){return c(n,!0)}),a)}else a(new x("GPP CMP not found"))})).finally((function(){r&&r.close()}))}},{key:"getClient",value:function(n){return this.CLIENTS.hasOwnProperty(n)?this.CLIENTS[n]:this.CLIENTS.default}}]),n}();(0,p.Z)(V,"CLIENTS",{}),(0,p.Z)(V,"INST",void 0);var W=function(n){(0,a.Z)(e,n);var t=k(e);function e(){var n;(0,v.Z)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),(0,p.Z)((0,i.Z)(n),"events",["sectionChange","cmpStatus"]),n}return(0,d.Z)(e,[{key:"isCMPReady",value:function(n){return"loaded"===n.cmpStatus}},{key:"getGPPData",value:function(n){var t=this,e=C.Z.all((n.supportedAPIs||n.apiSupport||[]).map((function(n){return t.cmp({command:"getSection",parameter:n}).catch((function(t){(0,y.yN)("Could not retrieve GPP section '".concat(n,"'"),t)})).then((function(t){return[n,t]}))}))).then((function(n){return Object.fromEntries(n.filter((function(n){var t=(0,l.Z)(n,2);t[0];return null!=t[1]})).map((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1],i=[Object.fromEntries(Object.entries(r).filter((function(n){return"Gpc"!==(0,l.Z)(n,1)[0]})))];return null!=r.Gpc&&i.push({SubsectionType:1,Gpc:r.Gpc}),[e,i]})))}));return C.Z.all([this.cmp({command:"getGPPData"}),e]).then((function(n){var t=(0,l.Z)(n,2),e=t[0],r=t[1];return Object.assign({},e,{parsedSections:r})}))}}]),e}(V);s((0,c.Z)(W),"register",W).call(W,_);var B=function(n){(0,a.Z)(e,n);var t=k(e);function e(){var n;(0,v.Z)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a)),(0,p.Z)((0,i.Z)(n),"events",["sectionChange","signalStatus"]),n}return(0,d.Z)(e,[{key:"isCMPReady",value:function(n){return"ready"===n.signalStatus}},{key:"getGPPData",value:function(n){return C.Z.resolve(n)}}]),e}(V);s((0,c.Z)(B),"register",B).call(B,"1.1",!0);var H={iab:function(n){var t=n.onSuccess,e=n.onError,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.b6;I((function(){return V.init(r).then((function(n){var t=(0,l.Z)(n,2);t[0];return t[1]}))}),{onSuccess:t,onError:e})},static:function(n){return I((function(){return X(R)}),n)}};function J(n){var t=!1,e=null;function r(r,i,a){if(null!=e&&clearTimeout(e),t=!0,b.TJ.setConsentData(r),"function"==typeof n){for(var o=arguments.length,c=new Array(o>3?o-3:0),u=3;u<o;u++)c[u-3]=arguments[u];n.apply(void 0,[i,a].concat(c))}}if(H.hasOwnProperty(D)){var i={onSuccess:function(n){return r(n,!1)},onError:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];r.apply(void 0,[null,!0,n].concat(e))}};if(H[D](i),!t){var a=function(){var n=function(n){r(n,!1,"GPP CMP did not load, continuing auction...")};I((function(){return X(G)}),{onSuccess:n,onError:function(){return n(F())}})};0===E?a():e=setTimeout(a,E)}}else r(null,!1,"GPP CMP framework (".concat(D,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}var q=(0,w.g3)("gpp",(function(n,t){var e;e=function(e,r){if(r){var i=y.yN;e&&(i=y.H,r="".concat(r," Canceling auction as per consentManagement config."));for(var a=arguments.length,o=new Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];i.apply(void 0,[r].concat(o))}e?(n.stopTiming(),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():(0,y.H)("Error executing bidsBackHandler")):n.call(this,t)},G?((0,y.PN)("User consent information already known.  Pulling internally stored information..."),e(!1)):J(e)}));function X(n){if(null!=(null==n?void 0:n.applicableSections)&&!Array.isArray(n.applicableSections)||null!=(null==n?void 0:n.gppString)&&!(0,y.d8)(n.gppString)||null!=(null==n?void 0:n.parsedSections)&&!(0,y.PO)(n.parsedSections))throw new x("CMP returned unexpected value during lookup process.",n);return F(n)}function F(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return G={gppString:null==n?void 0:n.gppString,applicableSections:(null==n?void 0:n.applicableSections)||[],parsedSections:(null==n?void 0:n.parsedSections)||{},gppData:n},b.TJ.setConsentData(n),G}P.vc.getConfig("consentManagement",(function(n){return function(n){(n=n&&n.gpp)&&"object"===(0,r.Z)(n)?((0,y.d8)(n.cmpApi)?D=n.cmpApi:(D="iab",(0,y.PN)("consentManagement.gpp config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,y.hj)(n.timeout)?E=n.timeout:(E=1e4,(0,y.PN)("consentManagement.gpp config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"static"===D&&((0,y.PO)(n.consentData)?(R=n.consentData,E=0):(0,y.H)("consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),(0,y.PN)("consentManagement.gpp module has been activated..."),A||((0,h.R)().requestBids.before(q,50),O.Ww.before((function(n,t){return n(Object.assign({gppConsent:b.TJ.getConsentData()},t))}))),A=!0,b.TJ.enable(),J()):(0,y.yN)("consentManagement.gpp config not defined, exiting consent manager module")}(n.consentManagement)})),Z.S.before((function(n,t){return n(t.then((function(n){var t=b.TJ.getConsentData();return t&&(Array.isArray(t.applicableSections)&&(0,m.N)(n,"regs.gpp_sid",t.applicableSections),(0,m.N)(n,"regs.gpp",t.gppString)),n})))})),(0,h.z)("consentManagementGpp")}},function(n){n.O(0,[968],(function(){return t=277,n(n.s=t);var t}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[160],{9099:function(n,t,e){var a,o,c=e(1002),i=e(8640),s=e(4358),r=e(6475),u=e(3193),l=e(6104),f=e(4516),g=e(9128),p=e(2797),d=e(4078),m=e(2712),v="iab",P=v,S=50,b=!1,y={iab:function(n){var t=n.onSuccess,e=n.onError;var a=(c={},{consentDataCallback:function(n,a){a&&n.uspString&&(c.usPrivacy=n.uspString),c.usPrivacy?U(c,{onSuccess:t,onError:e}):e("Unable to get USP consent string.")}}),o=(0,m.b6)({apiName:"__uspapi",apiVersion:1,apiArgs:["command","version","callback"]});var c;if(!o)return e("USP CMP not found.");o.isDirect?(0,s.PN)("Detected USP CMP is directly accessible, calling it now..."):(0,s.PN)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...");o({command:"getUSPData",callback:a.consentDataCallback}),o({command:"registerDeletion",callback:function(n,t){return(null==t||t)&&l.ZP.callDataDeletionRequest(n)}}).catch((function(n){(0,s.H)("Error invoking CMP `registerDeletion`:",n)}))},static:function(n){var t=n.onSuccess,e=n.onError;U(a,{onSuccess:t,onError:e})}};function D(n){var t=null,e=!1;function a(a,o){if(null!=t&&clearTimeout(t),e=!0,f.nX.setConsentData(a),null!=n){for(var c=arguments.length,i=new Array(c>2?c-2:0),s=2;s<c;s++)i[s-2]=arguments[s];n.apply(void 0,[o].concat(i))}}if(y[P]){var o={onSuccess:a,onError:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];a.apply(void 0,[null,"".concat(n," Resuming auction without consent data as per consentManagement config.")].concat(e))}};y[P](o),e||(0===S?U(void 0,o):t=setTimeout(o.onError.bind(null,"USPAPI workflow exceeded timeout threshold."),S))}else a(null,"USP framework (".concat(P,") is not a supported framework. Aborting consentManagement module and resuming auction."))}var h=(0,g.g3)("usp",(function(n,t){var e=this;b||M(),D((function(a){if(null!=a){for(var o=arguments.length,c=new Array(o>1?o-1:0),i=1;i<o;i++)c[i-1]=arguments[i];s.yN.apply(void 0,[a].concat(c))}n.call(e,t)}))}));function U(n,t){var e=t.onSuccess,a=t.onError;!n||!n.usPrivacy?a("USPAPI returned unexpected value during lookup process.",n):(!function(n){n&&n.usPrivacy&&(o=n.usPrivacy)}(n),e(o))}function M(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b||((0,s.PN)("USPAPI consentManagement module has been activated".concat(n?"":" using default values (api: '".concat(P,"', timeout: ").concat(S,"ms)"))),b=!0,f.nX.enable()),D()}u.vc.getConfig("consentManagement",(function(n){return function(n){(n=n&&n.usp)&&"object"===(0,c.Z)(n)||(0,s.yN)("consentManagement.usp config not defined, using defaults"),n&&(0,s.d8)(n.cmpApi)?P=n.cmpApi:(P=v,(0,s.PN)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(v,")."))),n&&(0,s.hj)(n.timeout)?S=n.timeout:(S=50,(0,s.PN)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),"static"===P&&((0,s.PO)(n.consentData)&&(0,s.PO)(n.consentData.getUSPData)?(n.consentData.getUSPData.uspString&&(a={usPrivacy:n.consentData.getUSPData.uspString}),S=0):(0,s.H)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),M(!0)}(n.consentManagement)})),(0,p.v5)("requestBids").before(h,50),d.S.before((function(n,t){return n(t.then((function(n){var t=f.nX.getConsentData();return t&&(0,r.N)(n,"regs.ext.us_privacy",t),n})))})),(0,i.z)("consentManagementUsp")}},function(n){n.O(0,[968],(function(){return t=9099,n(n.s=t);var t}));n.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[406],{241:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9062),_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(8640),_src_utils_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4358),_src_utils_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(265),_src_adloader_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5730),_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(4699),_src_config_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3193),_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4679),criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1582),_src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5164),_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5102),_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7673),_src_Renderer_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(5706),_src_video_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(154),_src_ajax_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8928);function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,n=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){n=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(n)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var GVLID=91,ADAPTER_VERSION=36,BIDDER_CODE="criteo",CDB_ENDPOINT="https://bidder.criteo.com/cdb",PROFILE_ID_INLINE=207,PROFILE_ID_PUBLISHERTAG=185,storage=(0,_src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({bidderCode:BIDDER_CODE}),LOG_PREFIX="Criteo: ",FAST_BID_VERSION_PLACEHOLDER="%FAST_BID_VERSION%",FAST_BID_VERSION_CURRENT=139,FAST_BID_VERSION_LATEST="latest",FAST_BID_VERSION_NONE="none",PUBLISHER_TAG_URL_TEMPLATE="https://static.criteo.net/js/ld/publishertag.prebid"+FAST_BID_VERSION_PLACEHOLDER+".js",PUBLISHER_TAG_OUTSTREAM_SRC="https://static.criteo.net/js/ld/publishertag.renderer.js",FAST_BID_PUBKEY_E=65537,FAST_BID_PUBKEY_N="ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",OPTOUT_COOKIE_NAME="cto_optout",BUNDLE_COOKIE_NAME="cto_bundle",GUID_RETENTION_TIME_HOUR=9360,OPTOUT_RETENTION_TIME_HOUR=43200,spec={code:BIDDER_CODE,gvlid:GVLID,supportedMediaTypes:[_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk,_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5],getUserSyncs:function(e,t,r,i){if(canFastBid(_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion")))return[];var o=(0,_src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__.nH)(),a="criteoPrebidAdapter";if(e.iframeEnabled&&(0,_src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__.h)(r)){var s=[];s.push("origin=".concat(a)),s.push("topUrl=".concat(o.domain)),r&&(r.gdprApplies&&s.push("gdpr=".concat(1==r.gdprApplies?1:0)),r.consentString&&s.push("gdpr_consent=".concat(r.consentString))),i&&s.push("us_privacy=".concat(i));var n=Math.random().toString(),_={bundle:readFromAllStorages(BUNDLE_COOKIE_NAME),cw:storage.cookiesAreEnabled(),lsw:storage.localStorageIsEnabled(),optoutCookie:readFromAllStorages(OPTOUT_COOKIE_NAME),origin:a,requestId:n,tld:o.domain,topUrl:o.domain,version:"8.19.0".replace(/\./g,"_")};window.addEventListener("message",(function e(t){if(t.data&&"https://gum.criteo.com"==t.origin&&t.data.requestId===n){this.removeEventListener("message",e),t.stopImmediatePropagation();var r=t.data;r.optout?(deleteFromAllStorages(BUNDLE_COOKIE_NAME),saveOnAllStorages(OPTOUT_COOKIE_NAME,!0,OPTOUT_RETENTION_TIME_HOUR)):r.bundle&&saveOnAllStorages(BUNDLE_COOKIE_NAME,r.bundle,GUID_RETENTION_TIME_HOUR)}}),!0);var d=JSON.stringify(_).replace(/"/g,"%22");return[{type:"iframe",url:"https://gum.criteo.com/syncframe?".concat(s.join("&"),"#").concat(d)}]}return[]},isBidRequestValid:function(e){return!(!e||!e.params||!e.params.zoneId&&!e.params.networkId)&&!(hasVideoMediaType(e)&&!hasValidVideoMediaType(e))},buildRequests:function(e,t){var r,i,o,a,s=t.ortb2||{};Object.assign(t,{publisherExt:null===(r=s.site)||void 0===r?void 0:r.ext,userExt:null===(i=s.user)||void 0===i?void 0:i.ext,ceh:_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.ceh"),coppa:_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("coppa")});var n=_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"),_=canFastBid(n);if(!publisherTagAvailable()&&_){window.Criteo=window.Criteo||{},window.Criteo.usePrebidEvents=!1,tryGetCriteoFastBid();var d=getFastBidUrl(n);setTimeout((function(){(0,_src_adloader_js__WEBPACK_IMPORTED_MODULE_6__.B)(d,BIDDER_CODE)}),t.timeout)}if(publisherTagAvailable()){var u=new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG,ADAPTER_VERSION,e,t,"8.19.0",{createOutstreamVideoRenderer:createOutstreamVideoRenderer});o=u.buildCdbUrl(),a=u.buildCdbRequest()}else{var c=buildContext(e,t);o=buildCdbUrl(c),a=buildCdbRequest(c,e,t)}if(a)return{method:"POST",url:o,data:a,bidRequests:e}},interpretResponse:function(e,t){var r=e.body||e;if(publisherTagAvailable()){var i=Criteo.PubTag.Adapters.Prebid.GetAdapter(t);if(i)return i.interpretResponse(r,t)}var o=[];return r&&r.slots&&(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.kJ)(r.slots)&&r.slots.forEach((function(i){var a=getAssociatedBidRequest(t.bidRequests,i);if(a){var s,n,_,d,u,c,p=a.bidId,l={requestId:p,cpm:i.cpm,currency:i.currency,netRevenue:!0,ttl:i.ttl||60,creativeId:i.creativecode,width:i.width,height:i.height,dealId:i.deal};if(null!==(s=r.ext)&&void 0!==s&&null!==(n=s.paf)&&void 0!==n&&n.transmission&&null!==(_=i.ext)&&void 0!==_&&null!==(d=_.paf)&&void 0!==d&&d.content_id){var v={content_id:i.ext.paf.content_id,transmission:e.ext.paf.transmission};l.meta=Object.assign({},l.meta,{paf:v})}if(i.adomain&&(l.meta=Object.assign({},l.meta,{advertiserDomains:[i.adomain].flat()})),null!==(u=i.ext)&&void 0!==u&&null!==(c=u.meta)&&void 0!==c&&c.networkName&&(l.meta=Object.assign({},l.meta,{networkName:i.ext.meta.networkName})),i.native)a.params.nativeCallback?l.ad=createNativeAd(p,i.native,a.params.nativeCallback):(l.native=createPrebidNativeAd(i.native),l.mediaType=_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5);else if(i.video){l.vastUrl=i.displayurl,l.mediaType=_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX,(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(a,"mediaTypes.video.context")===_src_video_js__WEBPACK_IMPORTED_MODULE_9__.gZ&&(l.renderer=createOutstreamVideoRenderer(i))}else l.ad=i.creative;o.push(l)}})),o},onTimeout:function(e){if(publisherTagAvailable()&&Array.isArray(e)){var t=[];e.forEach((function(e){-1===t.indexOf(e.auctionId)&&(t.push(e.auctionId),Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleBidTimeout())}))}},onBidWon:function(e){publisherTagAvailable()&&e&&Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleBidWon(e)},onSetTargeting:function(e){publisherTagAvailable()&&Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleSetTargeting(e)},onDataDeletionRequest:function(e){var t=readFromAllStorages(BUNDLE_COOKIE_NAME);t&&(deleteFromAllStorages(BUNDLE_COOKIE_NAME),(0,_src_ajax_js__WEBPACK_IMPORTED_MODULE_10__.hj)("https://privacy.criteo.com/api/privacy/datadeletionrequest",null,JSON.stringify({publisherUserId:t}),{contentType:"application/json",method:"POST"}))}};function readFromAllStorages(e){var t=storage.getCookie(e),r=storage.getDataFromLocalStorage(e);return t||r||void 0}function saveOnAllStorages(e,t,r){var i=new Date;i.setTime(i.getTime()+60*r*60*1e3);var o="expires=".concat(i.toUTCString());storage.setCookie(e,t,o),storage.setDataInLocalStorage(e,t)}function deleteFromAllStorages(e){storage.setCookie(e,"",0),storage.removeDataFromLocalStorage(e)}function publisherTagAvailable(){return"undefined"!=typeof Criteo&&Criteo.PubTag&&Criteo.PubTag.Adapters&&Criteo.PubTag.Adapters.Prebid}function buildContext(e,t){var r,i="";t&&t.refererInfo&&(i=t.refererInfo.page);var o=(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.en)(null==t||null===(r=t.refererInfo)||void 0===r?void 0:r.topmostLocation).search,a={url:i,debug:"1"===o.pbt_debug,noLog:"1"===o.pbt_nolog,amp:!1};return e.forEach((function(e){"amp"===e.params.integrationMode&&(a.amp=!0)})),a}function buildCdbUrl(e){var t=CDB_ENDPOINT;t+="?profileId="+PROFILE_ID_INLINE,t+="&av="+String(ADAPTER_VERSION),t+="&wv="+encodeURIComponent("8.19.0"),t+="&cb="+String(Math.floor(99999999999*Math.random())),storage.localStorageIsEnabled()?t+="&lsavail=1":t+="&lsavail=0",e.amp&&(t+="&im=1"),e.debug&&(t+="&debug=1"),e.noLog&&(t+="&nolog=1");var r=readFromAllStorages(BUNDLE_COOKIE_NAME);return r&&(t+="&bundle=".concat(r)),readFromAllStorages(OPTOUT_COOKIE_NAME)&&(t+="&optout=1"),t}function checkNativeSendId(e){return!(e.nativeParams&&(e.nativeParams.image&&(!0!==e.nativeParams.image.sendId||!0===e.nativeParams.image.sendTargetingKeys)||e.nativeParams.icon&&(!0!==e.nativeParams.icon.sendId||!0===e.nativeParams.icon.sendTargetingKeys)||e.nativeParams.clickUrl&&(!0!==e.nativeParams.clickUrl.sendId||!0===e.nativeParams.clickUrl.sendTargetingKeys)||e.nativeParams.displayUrl&&(!0!==e.nativeParams.displayUrl.sendId||!0===e.nativeParams.displayUrl.sendTargetingKeys)||e.nativeParams.privacyLink&&(!0!==e.nativeParams.privacyLink.sendId||!0===e.nativeParams.privacyLink.sendTargetingKeys)||e.nativeParams.privacyIcon&&(!0!==e.nativeParams.privacyIcon.sendId||!0===e.nativeParams.privacyIcon.sendTargetingKeys)))}function buildCdbRequest(e,t,r){var i,o,a,s,n,_,d,u,c,p,l,v,h,f,E,m,T,O,b={id:(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.DO)(),publisher:{url:e.url,ext:r.publisherExt},regs:{coppa:!0===r.coppa?1:!1===r.coppa?0:void 0,gpp:null===(i=r.ortb2)||void 0===i||null===(o=i.regs)||void 0===o?void 0:o.gpp,gpp_sid:null===(a=r.ortb2)||void 0===a||null===(s=a.regs)||void 0===s?void 0:s.gpp_sid},slots:t.map((function(e){var t,r,i;m||(m=e.userIdAsEids),f=e.params.networkId||f,E=e.schain||E;var o={slotid:e.bidId,impid:e.adUnitCode,transactionid:null===(t=e.ortb2Imp)||void 0===t||null===(r=t.ext)||void 0===r?void 0:r.tid};if(e.params.zoneId&&(o.zoneid=e.params.zoneId),(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"ortb2Imp.ext")&&(o.ext=e.ortb2Imp.ext),(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"ortb2Imp.rwdd")&&(o.rwdd=e.ortb2Imp.rwdd),e.params.ext&&(o.ext=Object.assign({},o.ext,e.params.ext)),null!==(i=e.nativeOrtbRequest)&&void 0!==i&&i.assets&&(o.ext=Object.assign({},o.ext,{assets:e.nativeOrtbRequest.assets})),e.params.publisherSubId&&(o.publishersubid=e.params.publisherSubId),(e.params.nativeCallback||hasNativeMediaType(e))&&(o.native=!0,checkNativeSendId(e)||(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.yN)(LOG_PREFIX+"all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)")),hasBannerMediaType(e)?o.sizes=parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.banner.sizes"),parseSize):o.sizes=[],hasVideoMediaType(e)){var a={playersizes:parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.video.playerSize"),parseSize),mimes:e.mediaTypes.video.mimes,protocols:e.mediaTypes.video.protocols,maxduration:e.mediaTypes.video.maxduration,api:e.mediaTypes.video.api,skip:e.mediaTypes.video.skip,placement:e.mediaTypes.video.placement,minduration:e.mediaTypes.video.minduration,playbackmethod:e.mediaTypes.video.playbackmethod,startdelay:e.mediaTypes.video.startdelay,plcmt:e.mediaTypes.video.plcmt},s=e.params.video;void 0!==s&&(a.skip=a.skip||s.skip||0,a.placement=a.placement||s.placement,a.minduration=a.minduration||s.minduration,a.playbackmethod=a.playbackmethod||s.playbackmethod,a.startdelay=a.startdelay||s.startdelay||0),o.video=a}return enrichSlotWithFloors(o,e),o}))};(f&&(b.publisher.networkid=f),b.source={tid:null===(n=r.ortb2)||void 0===n||null===(_=n.source)||void 0===_?void 0:_.tid},E&&(b.source.ext={schain:E}),b.user=(null===(d=r.ortb2)||void 0===d?void 0:d.user)||{},b.site=(null===(u=r.ortb2)||void 0===u?void 0:u.site)||{},r&&r.ceh&&(b.user.ceh=r.ceh),r&&r.gdprConsent&&(b.gdprConsent={},void 0!==r.gdprConsent.gdprApplies&&(b.gdprConsent.gdprApplies=!!r.gdprConsent.gdprApplies),b.gdprConsent.version=r.gdprConsent.apiVersion,void 0!==r.gdprConsent.consentString&&(b.gdprConsent.consentData=r.gdprConsent.consentString)),r&&r.uspConsent&&(b.user.uspIab=r.uspConsent),r&&null!==(c=r.ortb2)&&void 0!==c&&null!==(p=c.device)&&void 0!==p&&p.sua)&&(b.user.ext=b.user.ext||{},b.user.ext.sua=(null===(T=r.ortb2)||void 0===T||null===(O=T.device)||void 0===O?void 0:O.sua)||{});return m&&(b.user.ext=b.user.ext||{},b.user.ext.eids=(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__.Z)(m)),r&&null!==(l=r.ortb2)&&void 0!==l&&l.bcat&&(b.bcat=r.ortb2.bcat),r&&null!==(v=r.ortb2)&&void 0!==v&&v.badv&&(b.badv=r.ortb2.badv),r&&null!==(h=r.ortb2)&&void 0!==h&&h.bapp&&(b.bapp=r.ortb2.bapp),b}function parseSizes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return null==e?[]:Array.isArray(e[0])?e.map((function(e){return t(e)})):[t(e)]}function parseSize(e){return e[0]+"x"+e[1]}function hasVideoMediaType(e){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.video")}function hasBannerMediaType(e){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.banner")}function hasNativeMediaType(e){return void 0!==(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.native")}function hasValidVideoMediaType(e){var t=!0;if(["mimes","playerSize","maxduration","protocols","api","skip","placement","playbackmethod"].forEach((function(r){void 0===(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"mediaTypes.video."+r)&&void 0===(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(e,"params.video."+r)&&(t=!1,(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.H)("Criteo Bid Adapter: mediaTypes.video."+r+" is required"))})),t){var r=e.mediaTypes.video.placement||e.params.video.placement;if("instream"==e.mediaTypes.video.context&&1===r)return!0;if("outstream"==e.mediaTypes.video.context&&1!==r)return!0}return!1}function createPrebidNativeAd(e){return{sendTargetingKeys:!1,title:e.products[0].title,body:e.products[0].description,sponsoredBy:e.advertiser.description,icon:e.advertiser.logo,image:e.products[0].image,clickUrl:e.products[0].click_url,privacyLink:e.privacy.optout_click_url,privacyIcon:e.privacy.optout_image_url,cta:e.products[0].call_to_action,price:e.products[0].price,impressionTrackers:e.impression_pixels.map((function(e){return e.url}))}}function createNativeAd(e,t,r){var i="criteo_prebid_native_slots";return window[i]=window[i]||{},window[i][e]={callback:r,payload:t},'\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i,';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(e,'"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')}function pickAvailableGetFloorFunc(e){if(e.getFloor)return e.getFloor;if(e.params.bidFloor&&e.params.bidFloorCur)try{var t=parseFloat(e.params.bidFloor);return function(){return{currency:e.params.bidFloorCur,floor:t}}}catch(e){}}function enrichSlotWithFloors(e,t){try{var r={},i=pickAvailableGetFloorFunc(t);if(i){var o,a,s;if(null!==(o=t.mediaTypes)&&void 0!==o&&o.banner)r.banner={},parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(t,"mediaTypes.banner.sizes")).forEach((function(e){return r.banner[parseSize(e).toString()]=i.call(t,{size:e,mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk})}));if(null!==(a=t.mediaTypes)&&void 0!==a&&a.video)r.video={},parseSizes((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_8__.Z)(t,"mediaTypes.video.playerSize")).forEach((function(e){return r.video[parseSize(e).toString()]=i.call(t,{size:e,mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX})}));null!==(s=t.mediaTypes)&&void 0!==s&&s.native&&(r.native={},r.native["*"]=i.call(t,{size:"*",mediaType:_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5})),Object.keys(r).length>0&&(e.ext||(e.ext={}),Object.assign(e.ext,{floors:r}))}}catch(e){(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.H)("Could not parse floors from Prebid: "+e)}}function canFastBid(e){return e!==FAST_BID_VERSION_NONE}function getFastBidUrl(e){var t;if(e===FAST_BID_VERSION_LATEST)t="";else if(e){String(e).split(".")[0]<102&&(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.yN)("Specifying a Fastbid version which is not supporting version selection."),t="."+e}else t="."+FAST_BID_VERSION_CURRENT;return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER,t)}function createOutstreamVideoRenderer(e){if(void 0!==e.ext.videoPlayerConfig&&void 0!==e.ext.videoPlayerType){var t=_src_Renderer_js__WEBPACK_IMPORTED_MODULE_12__.Th.install({url:PUBLISHER_TAG_OUTSTREAM_SRC,config:{documentResolver:function(e,t,r){return null!=r?r:t}}});return t.setRender((function(t,r){var i={slotid:e.impid,vastUrl:e.displayurl,vastXml:e.creative,documentContext:r},o=e.ext.videoPlayerConfig;window.CriteoOutStream[e.ext.videoPlayerType].play(i,o)})),t}}function getAssociatedBidRequest(e,t){var r,i=_createForOfIteratorHelper(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(o.adUnitCode===t.impid){var a,s;if(o.params.zoneId&&parseInt(o.params.zoneId)===t.zoneid)return o;if(t.native){if(null!==(s=o.mediaTypes)&&void 0!==s&&s.native||o.nativeParams)return o}else if(t.video){var n;if(null!==(n=o.mediaTypes)&&void 0!==n&&n.video)return o}else if(null!==(a=o.mediaTypes)&&void 0!==a&&a.banner||o.sizes)return o}}}catch(e){i.e(e)}finally{i.f()}}function tryGetCriteoFastBid(){try{var fastBidStorageKey="criteo_fast_bid",hashPrefix="// Hash: ",fastBidFromStorage=storage.getDataFromLocalStorage(fastBidStorageKey);if(null!==fastBidFromStorage){var firstLineEndPosition=fastBidFromStorage.indexOf("\n"),firstLine=fastBidFromStorage.substr(0,firstLineEndPosition).trim();if(firstLine.substr(0,hashPrefix.length)!==hashPrefix)(0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.yN)("No hash found in FastBid"),storage.removeDataFromLocalStorage(fastBidStorageKey);else{var publisherTagHash=firstLine.substr(hashPrefix.length),publisherTag=fastBidFromStorage.substr(firstLineEndPosition+1);(0,criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(publisherTag,publisherTagHash,FAST_BID_PUBKEY_N,FAST_BID_PUBKEY_E)?((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.PN)("Using Criteo FastBid"),eval(publisherTag)):((0,_src_utils_js__WEBPACK_IMPORTED_MODULE_7__.yN)("Invalid Criteo FastBid found"),storage.removeDataFromLocalStorage(fastBidStorageKey))}}}catch(e){}}(0,_src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_13__.dX)(spec),(0,_src_prebidGlobal_js__WEBPACK_IMPORTED_MODULE_14__.z)("criteoBidAdapter")},7673:function(e,t,r){r.d(t,{h:function(){return o}});var i=r(265);function o(e){return null==e||!e.gdprApplies||!0===(0,i.Z)(e,"vendorData.purpose.consents.1")}},4611:function(e,t){var r;Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){null!==e&&this.fromHexString(e)}return e.prototype.toHexString=function(){if(this.s<0)return"-"+this.negate().toHexString();var e,t=!1,r="",i=this.t,o=this.DB-i*this.DB%4;if(i-- >0)for(o<this.DB&&(e=this[i]>>o)>0&&(t=!0,r=u(e));i>=0;)o<4?(e=(this[i]&(1<<o)-1)<<4-o,e|=this[--i]>>(o+=this.DB-4)):(e=this[i]>>(o-=4)&15,o<=0&&(o+=this.DB,--i)),e>0&&(t=!0),t&&(r+=u(e));return t?r:"0"},e.prototype.fromHexString=function(t){if(null!==t){this.t=0,this.s=0;for(var r=t.length,i=!1,o=0;--r>=0;){var a=d(t,r);a<0?"-"==t.charAt(r)&&(i=!0):(i=!1,0==o?this[this.t++]=a:o+4>this.DB?(this[this.t-1]|=(a&(1<<this.DB-o)-1)<<o,this[this.t++]=a>>this.DB-o):this[this.t-1]|=a<<o,(o+=4)>=this.DB&&(o-=this.DB))}0,this.clamp(),i&&e.ZERO.subTo(this,this)}},e.prototype.negate=function(){var t=o();return e.ZERO.subTo(this,t),t},e.prototype.abs=function(){return this.s<0?this.negate():this},e.prototype.mod=function(t){var r=o();return this.abs().divRemTo(t,null,r),this.s<0&&r.compareTo(e.ZERO)>0&&t.subTo(r,r),r},e.prototype.copyTo=function(e){for(var t=this.t-1;t>=0;--t)e[t]=this[t];e.t=this.t,e.s=this.s},e.prototype.lShiftTo=function(e,t){for(var r=e%this.DB,i=this.DB-r,o=(1<<i)-1,a=Math.floor(e/this.DB),s=this.s<<r&this.DM,n=this.t-1;n>=0;--n)t[n+a+1]=this[n]>>i|s,s=(this[n]&o)<<r;for(n=a-1;n>=0;--n)t[n]=0;t[a]=s,t.t=this.t+a+1,t.s=this.s,t.clamp()},e.prototype.invDigit=function(){if(this.t<1)return 0;var e=this[0];if(0==(1&e))return 0;var t=3&e;return(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this.DV)%this.DV)>0?this.DV-t:-t},e.prototype.dlShiftTo=function(e,t){var r;for(r=this.t-1;r>=0;--r)t[r+e]=this[r];for(r=e-1;r>=0;--r)t[r]=0;t.t=this.t+e,t.s=this.s},e.prototype.squareTo=function(e){for(var t=this.abs(),r=e.t=2*t.t;--r>=0;)e[r]=0;for(r=0;r<t.t-1;++r){var i=t.am(r,t[r],e,2*r,0,1);(e[r+t.t]+=t.am(r+1,2*t[r],e,2*r+1,i,t.t-r-1))>=t.DV&&(e[r+t.t]-=t.DV,e[r+t.t+1]=1)}e.t>0&&(e[e.t-1]+=t.am(r,t[r],e,2*r,0,1)),e.s=0,e.clamp()},e.prototype.multiplyTo=function(t,r){var i=this.abs(),o=t.abs(),a=i.t;for(r.t=a+o.t;--a>=0;)r[a]=0;for(a=0;a<o.t;++a)r[a+i.t]=i.am(0,o[a],r,a,0,i.t);r.s=0,r.clamp(),this.s!=t.s&&e.ZERO.subTo(r,r)},e.prototype.divRemTo=function(t,r,i){var s=t.abs();if(!(s.t<=0)){var n=this.abs();if(n.t<s.t)return null!=r&&r.fromHexString("0"),void(null!=i&&this.copyTo(i));null==i&&(i=o());var _=o(),d=this.s,u=t.s,c=this.DB-a(s[s.t-1]);c>0?(s.lShiftTo(c,_),n.lShiftTo(c,i)):(s.copyTo(_),n.copyTo(i));var p=_.t,l=_[p-1];if(0!=l){var v=l*(1<<this.F1)+(p>1?_[p-2]>>this.F2:0),h=this.FV/v,f=(1<<this.F1)/v,E=1<<this.F2,m=i.t,T=m-p,O=null==r?o():r;for(_.dlShiftTo(T,O),i.compareTo(O)>=0&&(i[i.t++]=1,i.subTo(O,i)),e.ONE.dlShiftTo(p,O),O.subTo(_,_);_.t<p;)_[_.t++]=0;for(;--T>=0;){var b=i[--m]==l?this.DM:Math.floor(i[m]*h+(i[m-1]+E)*f);if((i[m]+=_.am(0,b,i,T,0,p))<b)for(_.dlShiftTo(T,O),i.subTo(O,i);i[m]<--b;)i.subTo(O,i)}null!=r&&(i.drShiftTo(p,r),d!=u&&e.ZERO.subTo(r,r)),i.t=p,i.clamp(),c>0&&i.rShiftTo(c,i),d<0&&e.ZERO.subTo(i,i)}}},e.prototype.rShiftTo=function(e,t){t.s=this.s;var r=Math.floor(e/this.DB);if(r>=this.t)t.t=0;else{var i=e%this.DB,o=this.DB-i,a=(1<<i)-1;t[0]=this[r]>>i;for(var s=r+1;s<this.t;++s)t[s-r-1]|=(this[s]&a)<<o,t[s-r]=this[s]>>i;i>0&&(t[this.t-r-1]|=(this.s&a)<<o),t.t=this.t-r,t.clamp()}},e.prototype.drShiftTo=function(e,t){for(var r=e;r<this.t;++r)t[r-e]=this[r];t.t=Math.max(this.t-e,0),t.s=this.s},e.prototype.subTo=function(e,t){for(var r=0,i=0,o=Math.min(e.t,this.t);r<o;)i+=this[r]-e[r],t[r++]=i&this.DM,i>>=this.DB;if(e.t<this.t){for(i-=e.s;r<this.t;)i+=this[r],t[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<e.t;)i-=e[r],t[r++]=i&this.DM,i>>=this.DB;i-=e.s}t.s=i<0?-1:0,i<-1?t[r++]=this.DV+i:i>0&&(t[r++]=i),t.t=r,t.clamp()},e.prototype.clamp=function(){for(var e=this.s&this.DM;this.t>0&&this[this.t-1]==e;)--this.t},e.prototype.modPowInt=function(e,t){var r;return r=e<256||t.isEven()?new c(t):new p(t),this.exp(e,r)},e.prototype.exp=function(t,r){if(t>4294967295||t<1)return e.ONE;var i=o(),s=o(),n=r.convert(this),_=a(t)-1;for(n.copyTo(i);--_>=0;)if(r.sqrTo(i,s),(t&1<<_)>0)r.mulTo(s,n,i);else{var d=i;i=s,s=d}return r.revert(i)},e.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},e.prototype.compareTo=function(e){var t=this.s-e.s;if(0!=t)return t;var r=this.t;if(0!=(t=r-e.t))return this.s<0?-t:t;for(;--r>=0;)if(0!=(t=this[r]-e[r]))return t;return 0},e.prototype.am1=function(e,t,r,i,o,a){for(;--a>=0;){var s=t*this[e++]+r[i]+o;o=Math.floor(s/67108864),r[i++]=67108863&s}return o},e.prototype.am2=function(e,t,r,i,o,a){for(var s=32767&t,n=t>>15;--a>=0;){var _=32767&this[e],d=this[e++]>>15,u=n*_+d*s;o=((_=s*_+((32767&u)<<15)+r[i]+(1073741823&o))>>>30)+(u>>>15)+n*d+(o>>>30),r[i++]=1073741823&_}return o},e.prototype.am3=function(e,t,r,i,o,a){for(var s=16383&t,n=t>>14;--a>=0;){var _=16383&this[e],d=this[e++]>>14,u=n*_+d*s;o=((_=s*_+((16383&u)<<14)+r[i]+o)>>28)+(u>>14)+n*d,r[i++]=268435455&_}return o},e}();function o(){return new i(null)}function a(e){var t,r=1;return 0!=(t=e>>>16)&&(e=t,r+=16),0!=(t=e>>8)&&(e=t,r+=8),0!=(t=e>>4)&&(e=t,r+=4),0!=(t=e>>2)&&(e=t,r+=2),0!=(t=e>>1)&&(e=t,r+=1),r}t.BigInteger=i,t.nbi=o,t.nbits=a;var s,n,_=[];for(s="0".charCodeAt(0),n=0;n<=9;++n)_[s++]=n;for(s="a".charCodeAt(0),n=10;n<36;++n)_[s++]=n;for(s="A".charCodeAt(0),n=10;n<36;++n)_[s++]=n;function d(e,t){var r=_[e.charCodeAt(t)];return null==r?-1:r}t.intAt=d;function u(e){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)}t.int2char=u;t.b64toHex=function(e){var t,r="",i=0,o=0;for(t=0;t<e.length&&"="!=e.charAt(t);++t){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t));a<0||(0==i?(r+=u(a>>2),o=3&a,i=1):1==i?(r+=u(o<<2|a>>4),o=15&a,i=2):2==i?(r+=u(o),r+=u(a>>2),o=3&a,i=3):(r+=u(o<<2|a>>4),r+=u(15&a),i=0))}return 1==i&&(r+=u(o<<2)),r},t.removeExtraSymbols=function(e){return e.replace(/^1f+00/,"").replace("3031300d060960864801650304020105000420","")};var c=function(){function e(e){this.m=e}return e.prototype.convert=function(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e},e.prototype.revert=function(e){return e},e.prototype.reduce=function(e){e.divRemTo(this.m,null,e)},e.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},e.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},e}(),p=function(){function e(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}return e.prototype.convert=function(e){var t=o();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(i.ZERO)>0&&this.m.subTo(t,t),t},e.prototype.revert=function(e){var t=o();return e.copyTo(t),this.reduce(t),t},e.prototype.reduce=function(e){for(;e.t<=this.mt2;)e[e.t++]=0;for(var t=0;t<this.m.t;++t){var r=32767&e[t],i=r*this.mpl+((r*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;for(e[r=t+this.m.t]+=this.m.am(0,i,e,t,0,this.m.t);e[r]>=e.DV;)e[r]-=e.DV,e[++r]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)},e.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},e.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},e}();function l(e){var t=o();return t.fromHexString(e.toString()),t}t.nbv=l,i.ZERO=l(0),i.ONE=l(1),"Microsoft Internet Explorer"==navigator.appName?(i.prototype.am=i.prototype.am2,r=30):"Netscape"!=navigator.appName?(i.prototype.am=i.prototype.am1,r=26):(i.prototype.am=i.prototype.am3,r=28),i.prototype.DB=r,i.prototype.DM=(1<<r)-1,i.prototype.DV=1<<r;i.prototype.FV=Math.pow(2,52),i.prototype.F1=52-r,i.prototype.F2=2*r-52},4950:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.hash=function(t){t=e.utf8Encode(t||"");for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=(t+=String.fromCharCode(128)).length/4+2,a=Math.ceil(o/16),s=new Array(a),n=0;n<a;n++){s[n]=new Array(16);for(var _=0;_<16;_++)s[n][_]=t.charCodeAt(64*n+4*_)<<24|t.charCodeAt(64*n+4*_+1)<<16|t.charCodeAt(64*n+4*_+2)<<8|t.charCodeAt(64*n+4*_+3)<<0}var d=8*(t.length-1)/Math.pow(2,32),u=8*(t.length-1)>>>0;s[a-1][14]=Math.floor(d),s[a-1][15]=u;for(n=0;n<a;n++){for(var c=new Array(64),p=0;p<16;p++)c[p]=s[n][p];for(p=16;p<64;p++)c[p]=e.q1(c[p-2])+c[p-7]+e.q0(c[p-15])+c[p-16]>>>0;var l=i[0],v=i[1],h=i[2],f=i[3],E=i[4],m=i[5],T=i[6],O=i[7];for(p=0;p<64;p++){var b=O+e.z1(E)+e.Ch(E,m,T)+r[p]+c[p],g=e.z0(l)+e.Maj(l,v,h);O=T,T=m,m=E,E=f+b>>>0,f=h,h=v,v=l,l=b+g>>>0}i[0]=i[0]+l>>>0,i[1]=i[1]+v>>>0,i[2]=i[2]+h>>>0,i[3]=i[3]+f>>>0,i[4]=i[4]+E>>>0,i[5]=i[5]+m>>>0,i[6]=i[6]+T>>>0,i[7]=i[7]+O>>>0}var y=new Array(i.length);for(O=0;O<i.length;O++)y[O]=("00000000"+i[O].toString(16)).slice(-8);return y.join("")},e.utf8Encode=function(e){try{return(new TextEncoder).encode(e).reduce((function(e,t){return e+String.fromCharCode(t)}),"")}catch(t){return unescape(encodeURIComponent(e))}},e.ROTR=function(e,t){return t>>>e|t<<32-e},e.z0=function(t){return e.ROTR(2,t)^e.ROTR(13,t)^e.ROTR(22,t)},e.z1=function(t){return e.ROTR(6,t)^e.ROTR(11,t)^e.ROTR(25,t)},e.q0=function(t){return e.ROTR(7,t)^e.ROTR(18,t)^t>>>3},e.q1=function(t){return e.ROTR(17,t)^e.ROTR(19,t)^t>>>10},e.Ch=function(e,t,r){return e&t^~e&r},e.Maj=function(e,t,r){return e&t^e&r^t&r},e}();t.Sha256=r},1582:function(e,t,r){var i=r(4611),o=r(4950);t.T=function(e,t,r,a){var s=new i.BigInteger(i.b64toHex(t)),n=new i.BigInteger(i.b64toHex(r)),_=s.modPowInt(a,n);return i.removeExtraSymbols(_.toHexString())===o.Sha256.hash(e)}}},function(e){var t;t=241,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[73],{7713:function(e,n,o){var t=o(8640),c=o(4358),r=o(8928),a=o(5102),i=o(2797),d=o(5164),l=o(9633),s=o(4516),u="criteo",p=(0,d.df)({moduleType:l.y2,moduleName:u}),g="cto_bidid",f="cto_bundle",m=new Date(0).toString(),b=new Date((0,c.AB)()+33696e6).toString();function I(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=(0,c.en)(e,{noDecodeWholeURL:!0});return n?"".concat(o.hostname):"".concat(o.protocol,"://").concat(o.hostname).concat(o.port?":"+o.port:"","/")}function h(e){return p.getCookie(e)||p.getDataFromLocalStorage(e)}function v(e,n,o){e&&n&&(p.setDataInLocalStorage(e,n),S(e,n,b,o,!0))}function S(e,n,o,t,c){for(var r=t.split("."),a=0;a<r.length;++a){var i=r.slice(r.length-a-1,r.length).join(".");try{if(p.setCookie(e,n,o,null,"."+i),c){var d=p.getCookie(e);if(d&&d===n)break}}catch(e){}}}function y(e,n){var o=p.cookiesAreEnabled(),t=p.localStorageIsEnabled(),i=I((0,a.nH)().page),d=I(document.location.href,!0),l="undefined"!=typeof criteo_pubtag,u=function(e,n,o,t,c,r,a){var i="https://gum.criteo.com/sid/json?origin=prebid"+"".concat(e?"&topUrl="+encodeURIComponent(e):"")+"".concat(n?"&domain="+encodeURIComponent(n):"")+"".concat(o?"&bundle="+encodeURIComponent(o):"")+"".concat(t?"&info="+encodeURIComponent(t):"")+"".concat(c?"&cw=1":"")+"".concat(a?"&pbt=1":"")+"".concat(r?"&lsw=1":""),d=s.nX.getConsentData();d&&(i+="&us_privacy=".concat(encodeURIComponent(d)));var l=s.rp.getConsentData();l&&(i+="".concat(l.consentString?"&gdprString="+encodeURIComponent(l.consentString):""),i+="&gdpr=".concat(!0===l.gdprApplies?1:0));var u=s.TJ.getConsentData();return u&&(i+="".concat(u.gppString?"&gpp="+encodeURIComponent(u.gppString):""),i+="".concat(u.applicableSections?"&gpp_sid="+encodeURIComponent(u.applicableSections):"")),i}(i,d,e.bundle,e.dnaBundle,o,t,l),b={success:function(e){var o,t=JSON.parse(e);(t.pixels&&t.pixels.forEach((function(e){return function(e,n){n.writeBundleInStorage&&n.bundlePropertyName&&n.storageKeyName?(0,r.hj)(n.pixelUrl,{success:function(o){if(o){var t=JSON.parse(o);t&&t[n.bundlePropertyName]&&v(n.storageKeyName,t[n.bundlePropertyName],e)}},error:function(e){(0,c.H)("criteoIdSystem: unable to sync user id",e)}},void 0,{method:"GET",withCredentials:!0}):(0,c.hq)(n.pixelUrl)}(d,e)})),t.acwsUrl)?("string"==typeof t.acwsUrl?[t.acwsUrl]:t.acwsUrl).forEach((function(e){return(0,c.hq)(e)})):t.bundle&&v(f,t.bundle,d);if(t.bidId){v(g,t.bidId,d);var a={criteoId:t.bidId};n(a)}else S(o=g,"",m,d,!0),p.removeDataFromLocalStorage(o),n()},error:function(e){(0,c.H)("criteoIdSystem: unable to sync user id",e),n()}};(0,r.hj)(u,b,void 0,{method:"GET",contentType:"application/json",withCredentials:!0})}var C={name:u,gvlid:91,decode:function(e){return e},getId:function(){var e={bundle:h(f),dnaBundle:h("cto_dna_bundle"),bidId:h(g)};return{id:e.bidId?{criteoId:e.bidId}:void 0,callback:function(n){return y(e,n)}}},eids:{criteoId:{source:"criteo.com",atype:1}}};(0,i.Bx)("userId",C),(0,t.z)("criteoIdSystem")}},function(e){var n;n=7713,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[806],{9749:function(n,s,u){(0,u(8640).z)("enrichmentFpdModule")}},function(n){var s;s=9749,n(n.s=s)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[83],{1498:function(e,n,r){var t=r(3324),o=r(8640),u=r(4358),i=r(265),a=r(3193),c=r(6104),l=r(4516),s=r(2021),p=r(5644),f=r(9633),d=r(6310),v=r(571),g=r(4947);function y(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw u}}}}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var m={purpose:{},feature:{}},b={purpose:"purpose.consents",feature:"specialFeatureOptins"},w={storage:{type:"purpose",default:{purpose:"storage",enforcePurpose:!0,enforceVendor:!0,vendorExceptions:[]},id:1},basicAds:{type:"purpose",id:2,default:{purpose:"basicAds",enforcePurpose:!0,enforceVendor:!0,vendorExceptions:[]}},personalizedAds:{type:"purpose",id:4},measurement:{type:"purpose",id:7},transmitPreciseGeo:{type:"feature",id:1}},E=new Set,A=new Set,k=new Set,B=new Set,S=new Set,P=new Set,C=!1,j=!1,D=[f.UL,f.y2,f._U,f.XG],I="TCF2",O=[],x=[2];function F(e,n,r){if(n){var t=a.vc.getConfig("gvlMapping");if(t&&t[n])return t[n];if(e===f.wu)return l.$P;var o=l.qh.get(n),i=o.gvlid,c=o.modules;if(null==i&&Object.keys(c).length>0){var s,p=y(D);try{for(p.s();!(s=p.n()).done;){var d=s.value;if(c.hasOwnProperty(d)){i=c[d],d!==e&&(0,u.yN)("Multiple GVL IDs found for module '".concat(n,"'; using the ").concat(d," module's ID (").concat(i,") instead of the ").concat(e,"'s ID (").concat(c[e],")"));break}}}catch(e){p.e(e)}finally{p.f()}}return null==i&&r&&(i=r()),i||null}return null}function Z(e,n,r){return null==e&&l.rp.enabled?((0,u.yN)("Attempting operation that requires purpose ".concat(n," consent while consent data is not available").concat(r?" (module: ".concat(r,")"):"",". Assuming no consent was given.")),!0):e&&e.gdprApplies}function $(e,n,r,t){var o=!!(0,i.Z)(e,"vendorData.".concat(b[n],".").concat(r)),u=!!(0,i.Z)(e,"vendorData.vendor.consents.".concat(t));return"purpose"===n&&x.includes(r)&&(o||(o=!!(0,i.Z)(e,"vendorData.purpose.legitimateInterests.".concat(r))),u||(u=!!(0,i.Z)(e,"vendorData.vendor.legitimateInterests.".concat(t)))),{purpose:o,vendor:u}}function N(e,n,r,t){var o=w[e.purpose];if((e.vendorExceptions||[]).includes(r))return!0;var u=e.enforceVendor&&!(t===l.$P||(e.softVendorExceptions||[]).includes(r)),i=$(n,o.type,o.id,t),a=i.purpose,c=i.vendor;return(!e.enforcePurpose||a)&&(!u||c)}function M(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return null};return function(o){var u=l.rp.getConsentData(),i=o[d.bp];if(Z(u,e,i)){var a=F(o[d.$k],i,t(o)),c=!!n(u,i,a);if(!c)return r&&r.add(i),{allow:c}}}}function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};return M(e,(function(n,r,t){return!!N(m.purpose[e],n,r,t)}),n,r)}function V(e){return function(n){if(n[d.$k]!==f.wu)return e(n)}}var U,q,G,L=(U=T(1,E),function(e){if(e[d.$k]!==f.wu||j)return U(e)}),_=T(1,E),z=T(1,E),H=V(T(2,A)),K=T(7,k,(function(e){return n=e[d.bp],r=e[d.Hw],function(e){if("function"!=typeof e)return e;try{return e.call(o.adapter,r)}catch(e){(0,u.H)("Error invoking ".concat(n," adapter.gvlid()"),e)}}(null==(o=c.ZP.getAnalyticsAdapter(n))||null===(t=o.adapter)||void 0===t?void 0:t.gvlid);var n,r,t,o})),R=T(4,B),X=V((q=M("2-10",(function(e,n,r){for(var t=2;t<=10;t++){var o,u,i,a;if(null!==(o=m.purpose[t])&&void 0!==o&&null!==(u=o.vendorExceptions)&&void 0!==u&&u.includes(n))return!0;var c=$(e,"purpose",t,r),l=c.purpose,s=c.vendor;if(l&&(s||null!==(i=m.purpose[t])&&void 0!==i&&null!==(a=i.softVendorExceptions)&&void 0!==a&&a.includes(n)))return!0}return!1}),S),G=T(4,S),function(){var e,n=null!==(e=m.purpose[4])&&void 0!==e&&e.eidsRequireP4Consent?G:q;return n.apply(this,arguments)})),J=M("Special Feature 1",(function(e,n,r){return N(m.feature[1],e,n,r)}),P);s.on(p.FP.AUCTION_END,(function(){var e=function(e){return Array.from(e.keys()).filter((function(e){return null!=e}))},n={storageBlocked:e(E),biddersBlocked:e(A),analyticsBlocked:e(k),ufpdBlocked:e(B),eidsBlocked:e(S),geoBlocked:e(P)};s.j8(p.FP.TCF2_ENFORCEMENT,n),[E,A,k,B,S,P].forEach((function(e){return e.clear()}))})),a.vc.getConfig("consentManagement",(function(e){return function(e){var n=(0,i.Z)(e,"gdpr.rules");n||(0,u.yN)("TCF2: enforcing P1 and P2 by default"),n=Object.fromEntries((n||[]).map((function(e){return[e.purpose,e]}))),j=!!(0,i.Z)(e,"strictStorageEnforcement"),Object.entries(w).forEach((function(e){var r,o=(0,t.Z)(e,2),u=o[0],i=o[1];m[i.type][i.id]=null!==(r=n[u])&&void 0!==r?r:i.default})),C||(null!=m.purpose[1]&&(C=!0,O.push((0,v.oB)(g.S1,I,L)),O.push((0,v.oB)(g.K$,I,_)),O.push((0,v.oB)(g.EL,I,z))),null!=m.purpose[2]&&O.push((0,v.oB)(g.UE,I,H)),null!=m.purpose[4]&&O.push((0,v.oB)(g.oK,I,R),(0,v.oB)(g.S5,I,R)),null!=m.purpose[7]&&O.push((0,v.oB)(g.x$,I,K)),null!=m.feature[1]&&O.push((0,v.oB)(g.g0,I,J)),O.push((0,v.oB)(g.e,I,X)))}(e.consentManagement)})),(0,o.z)("gdprEnforcement")}},function(e){var n;n=1498,e(e.s=n)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[296],{6787:function(t,o,e){var n=e(8640),a=e(4358),r=e(6475),d=e(265),u=e(3193),c=e(2797),i=e(4614),s=void 0,f={},l=!1,p=function(t){var o=f.customGptSlotMatching;if((0,a.T9)()){var e=t.reduce((function(t,o){return t[o.code]=t[o.code]||[],t[o.code].push(o),t}),{});window.googletag.pubads().getSlots().forEach((function(t){var n=(0,i.sE)(Object.keys(e),o?o(t):(0,a.zV)(t));if(n){var d={name:"gam",adslot:v(t.getAdUnitPath())};e[n].forEach((function(t){var o,e,n;(0,r.N)(t,"ortb2Imp.ext.data.adserver",Object.assign({},null===(o=t.ortb2Imp)||void 0===o||null===(e=o.ext)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.adserver,d))}))}}))}},v=function(t){return(u.vc.getConfig("gptPreAuction")||{}).mcmEnabled?t.replace(/(^\/\d*),\d*\//,"$1/"):t},b=function(t,o){var e=t.ortb2Imp.ext.data;if(e.pbadslot)return e.pbadslot;if((0,a.T9)()){var n=window.googletag.pubads().getSlots().filter((function(t){return t.getAdUnitPath()===o}));if(0!==n.length)return 1===n.length?o:"".concat(o,"#").concat(t.code)}},g=function(t){var o=t.ortb2Imp.ext.data,e=f.customPbAdSlot;if(!o.pbadslot)if(e)o.pbadslot=e(t.code,(0,d.Z)(o,"adserver.adslot"));else{try{var n=document.getElementById(t.code);if(n.dataset.adslotid)return void(o.pbadslot=n.dataset.adslotid)}catch(t){}if(!(0,d.Z)(o,"adserver.adslot"))return o.pbadslot=t.code,!0;o.pbadslot=o.adserver.adslot}},m=function(t,o){p(o);var e=f,n=e.useDefaultPreAuction,a=e.customPreAuction;o.forEach((function(t){t.ortb2Imp=t.ortb2Imp||{},t.ortb2Imp.ext=t.ortb2Imp.ext||{},t.ortb2Imp.ext.data=t.ortb2Imp.ext.data||{};var o=t.ortb2Imp.ext;if(a||n){var e,r=(0,d.Z)(o,"data.adserver.adslot");a?e=a(t,r):n&&(e=b(t,r)),e&&(o.gpid=o.data.pbadslot=e)}else{var u=g(t);o.gpid||u||(o.gpid=o.data.pbadslot)}}));for(var r=arguments.length,u=new Array(r>2?r-2:0),c=2;c<r;c++)u[c-2]=arguments[c];return t.call.apply(t,[s,o].concat(u))},h=function(t){(f=(0,a.ei)(t,["enabled",function(t){return!1!==t},"customGptSlotMatching",function(t){return"function"==typeof t&&t},"customPbAdSlot",function(t){return"function"==typeof t&&t},"customPreAuction",function(t){return"function"==typeof t&&t},"useDefaultPreAuction",function(t){return!0===t}])).enabled?l||((0,c.v5)("makeBidRequests").before(m),l=!0):((0,a.PN)("".concat("GPT Pre-Auction",": Turning off module")),f={},(0,c.v5)("makeBidRequests").getHooks({hook:m}).remove(),l=!1)};u.vc.getConfig("gptPreAuction",(function(t){return h(t.gptPreAuction)})),h({}),(0,n.z)("gptPreAuction")}},function(t){var o;o=6787,t(t.s=o)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[618],{272:function(e,t,r){var n=r(4942),o=r(5671),i=r(3144),a=r(8640),s=r(265),c=r(4358),u=r(6475),d=r(8928),p=r(2797),f=r(5102),g=r(5164),l=r(4516),h=r(9633);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function y(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}var D="id5id",S="".concat(D,"_privacy"),O="html5",P="User ID - ID5 submodule: ",w=["pbjs-id5id","id5id.1st","id5id"],j=(0,g.df)({moduleType:h.y2,moduleName:"id5Id"}),C={name:"id5Id",gvlid:131,decode:function(e,t){var r={};if(e&&"string"==typeof e.universal_uid){var n={id5id:{uid:e.universal_uid,ext:r=e.ext||r}};switch((0,s.Z)(e,"ab_testing.result")){case"control":(0,c.PN)(P+"A/B Testing - user is in the Control Group: ID5 ID is NOT exposed"),(0,u.N)(n,"id5id.ext.abTestingControlGroup",!0);break;case"error":(0,c.H)(P+"A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1");break;case"normal":(0,c.PN)(P+"A/B Testing - user is NOT in the Control Group"),(0,u.N)(n,"id5id.ext.abTestingControlGroup",!1)}return(0,c.PN)(P+"Decoded ID",n),n}},getId:function(e,t,r){if(L(e)){if(F(t)){return{callback:function(n){new H(e,t,r,l.nX.getConsentData()).execute().then((function(e){n(e)})).catch((function(e){(0,c.H)(P+"getId fetch encountered an error",e),n()}))}}}(0,c.PN)(P+"Skipping ID5 local storage write because no consent given.")}},extendId:function(e,t,r){return F(t)?(W(L(e)?e.params.partner:0),(0,c.PN)(P+"using cached ID",r),r):((0,c.PN)(P+"No consent given for ID5 local storage writing, skipping nb increment."),r)},eids:{id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}}}},I=new WeakSet,N=new WeakSet,x=new WeakSet,T=new WeakSet,k=new WeakSet,H=function(){function e(t,r,n,i){(0,o.Z)(this,e),m(this,k),m(this,T),m(this,x),m(this,N),m(this,I),this.submoduleConfig=t,this.gdprConsentData=r,this.cacheIdObj=n,this.usPrivacyData=i}return(0,i.Z)(e,[{key:"execute",value:function(){var e=this;return y(this,N,E).call(this,this.submoduleConfig).then((function(t){return y(e,x,G).call(e,t.extensionsCall).then((function(r){return y(e,T,A).call(e,t.fetchCall,r)}))})).then((function(t){try{Z(e.submoduleConfig.params.partner,0),t.privacy&&B(S,JSON.stringify(t.privacy),30)}catch(e){(0,c.H)(P+e)}return t}))}}]),e}();function _(e,t,r){return new Promise((function(n,o){(0,d.hj)(e,{success:function(e){n(e)},error:function(e){o(e)}},t,r)}))}function E(e){var t=e.params.configUrl||"https://id5-sync.com/api/config/prebid";return y(this,I,_).call(this,t,JSON.stringify(e),{method:"POST"}).then((function(e){var t=JSON.parse(e);return(0,c.PN)(P+"config response received from the server",t),t}))}function G(e){if(void 0===e)return Promise.resolve(void 0);var t=e.url,r=e.method||"GET",n="GET"===r?void 0:JSON.stringify(e.body||{});return y(this,I,_).call(this,t,n,{method:r}).then((function(e){var t=JSON.parse(e);return(0,c.PN)(P+"extensions response received from the server",t),t}))}function A(e,t){var r=e.url,n=e.overrides||{},o=b(b(b({},y(this,k,J).call(this)),n),{},{extensions:t});return y(this,I,_).call(this,r,JSON.stringify(o),{method:"POST",withCredentials:!0}).then((function(e){var t=JSON.parse(e);return(0,c.PN)(P+"fetch response received from the server",t),t}))}function J(){var e,t=this.submoduleConfig.params,r=this.gdprConsentData&&"boolean"==typeof this.gdprConsentData.gdprApplies&&this.gdprConsentData.gdprApplies?1:0,n=(0,f.nH)(),o=this.cacheIdObj&&this.cacheIdObj.signature?this.cacheIdObj.signature:(w.forEach((function(t){j.getCookie(t)&&(e=(0,c.dj)(j.getCookie(t))||e)})),e&&e.signature||""),i=W(t.partner),a={partner:t.partner,gdpr:r,nbPage:i,o:"pbjs",tml:n.topmostLocation,ref:n.ref,cu:n.canonicalUrl,top:n.reachedTop?1:0,u:n.stack[0]||window.location.href,v:"8.19.0",storage:this.submoduleConfig.storage,localStorage:j.localStorageIsEnabled()?1:0};!r||void 0===this.gdprConsentData.consentString||(0,c.xb)(this.gdprConsentData.consentString)||(0,c.jH)(this.gdprConsentData.consentString)||(a.gdpr_consent=this.gdprConsentData.consentString),void 0===this.usPrivacyData||(0,c.xb)(this.usPrivacyData)||(0,c.jH)(this.usPrivacyData)||(a.us_privacy=this.usPrivacyData),void 0===o||(0,c.jH)(o)||(a.s=o),void 0===t.pd||(0,c.jH)(t.pd)||(a.pd=t.pd),void 0===t.provider||(0,c.jH)(t.provider)||(a.provider=t.provider);var s=t.abTesting||{enabled:!1};return s.enabled&&(a.ab_testing={enabled:!0,control_group_pct:s.controlGroupPct}),a}function L(e){if(!e||!e.params||!e.params.partner)return(0,c.H)(P+"partner required to be defined"),!1;var t=e.params.partner;if("string"==typeof t||t instanceof String){var r=parseInt(t);if(isNaN(r)||r<0)return(0,c.H)(P+"partner required to be a number or a String parsable to a positive integer"),!1;e.params.partner=r}else if("number"!=typeof t)return(0,c.H)(P+"partner required to be a number or a String parsable to a positive integer"),!1;return e.storage&&e.storage.type&&e.storage.name?(e.storage.type!==O&&(0,c.yN)(P+"storage type recommended to be '".concat(O,"'. In a future release this may become a strict requirement")),e.storage.name!==D&&(0,c.yN)(P+"storage name recommended to be '".concat(D,"'. In a future release this may become a strict requirement")),!0):((0,c.H)(P+"storage required to be set"),!1)}function q(e){return"".concat(D,"_").concat(e,"_nb")}function Z(e,t){B(q(e),t,30)}function U(e){var t=function(e){var t=j.getDataFromLocalStorage("".concat(e,"_exp"));if(""===t)return j.getDataFromLocalStorage(e);if(t&&new Date(t).getTime()-Date.now()>0)return j.getDataFromLocalStorage(e);return j.removeDataFromLocalStorage(e),null}(q(e));return t?parseInt(t):0}function W(e){var t=U(e)+1;return Z(e,t),t}function B(e,t,r){j.setDataInLocalStorage("".concat(e,"_exp"),function(e){return new Date(Date.now()+864e5*e).toUTCString()}(r)),j.setDataInLocalStorage("".concat(e),t)}function F(e){var t=e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies,r=(0,s.Z)(e,"vendorData.purpose.consents.1"),n=(0,s.Z)(e,"vendorData.vendor.consents.".concat(131..toString()));return!!(!t||r&&n)}(0,p.Bx)("userId",C),(0,a.z)("id5IdSystem")}},function(e){var t;t=272,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[114],{5407:function(e,t,i){var n=i(8640),r=i(4358),o=i(265),a=i(8928),s=i(2797),d=i(5164),c=i(9633),l="identityLink",p=(0,d.df)({moduleType:c.y2,moduleName:l}),v="_lr_env",u={name:l,gvlid:97,decode:function(e){return{idl_env:e}},getId:function(e,t){var i=e&&e.params||{};if(i&&"string"==typeof i.pid){var n=t&&"boolean"==typeof t.gdprApplies&&t.gdprApplies?1:0,a=n?t.consentString:"",s=2===o.Z(t,"vendorData.tcfPolicyVersion");if(!n||a&&""!==a){var d="https://api.rlcdn.com/api/identity/envelope?pid=".concat(i.pid).concat(n?(s?"&ct=4&cv=":"&ct=1&cv=")+a:"");return{callback:function(e){if(window.ats)r.PN("identityLink: ATS exists!"),window.ats.retrieveEnvelope((function(t){t?(r.PN("identityLink: An envelope can be retrieved from ATS!"),y(!0),e(JSON.parse(t).envelope)):f(d,e,i)}));else{var t=(n=p.getCookie(v)||p.getDataFromLocalStorage(v))?window.atob(n):void 0;t?(r.PN("identityLink: LiveRamp envelope successfully retrieved from storage!"),e(JSON.parse(t).envelope)):f(d,e,i)}var n}}}r.PN("identityLink: Consent string is required to call envelope API.")}else r.H("identityLink: requires partner id to be defined")},eids:{idl_env:{source:"liveramp.com",atype:3}}};function f(e,t,i){var n,o={success:function(e){var i;if(e)try{i=JSON.parse(e)}catch(e){r.PN(e)}t(i&&i.envelope?i.envelope:"")},error:function(e){r.PN("identityLink: identityLink: ID fetch encountered an error",e),t()}};i.notUse3P||p.getCookie("_lr_retry_request")||((n=new Date).setTime(n.getTime()+36e5),p.setCookie("_lr_retry_request","true",n.toUTCString()),r.PN("identityLink: A 3P retrieval is attempted!"),y(!1),(0,a.hj)(e,o,void 0,{method:"GET",withCredentials:!0}))}function y(e){var t=new Date;t.setTime(t.getTime()+2592e6),p.setCookie("_lr_env_src_ats",e,t.toUTCString())}(0,s.Bx)("userId",u),(0,n.z)("identityLinkIdSystem")}},function(e){var t;t=5407,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[155],{3390:function(e,t,r){var i=r(3324),n=r(9062),a=r(4942),o=r(1002),d=r(8640),s=r(265),p=r(4358),u=r(6475),c=r(4679),l=r(3193),f=r(5644),m=r(5164),v=r(2021),g=r(4614),b=r(4699),y=r(154),x=r(5706),h=r(75),I=r(5370);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){d=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw a}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var S="ix",U="roundel",P=[c.Mk,c.pX,c.B5],E=[144,144],k={JPY:1},T="p",D="x",N=1,j=2,A=3,B=4,_=5,F=9,R={SITE:["id","name","domain","cat","sectioncat","pagecat","page","ref","search","mobile","privacypolicy","publisher","content","keywords","ext"],USER:["id","buyeruid","yob","gender","keywords","customdata","geo","data","ext"]},X={"liveramp.com":"idl","netid.de":"NETID","neustar.biz":"fabrickId","zeotap.com":"zeotapIdPlus","uidapi.com":"UID2","adserver.org":"TDID","id5-sync.com":"","crwdcntrl.net":"","epsilon.com":"","audigent.com":"","pubcid.org":"","utiq.com":"","intimatemerger.com":"","33across.com":"","liveintent.indexexchange.com":"","google.com":""},z=["britepoolid","lipbid","criteoId","merkleId","parrableId","connectid","tapadId","quantcastId","pubProvidedId","pairId"],L=["mimes","minduration","maxduration"],M=["mimes","minduration","maxduration","protocols","protocol","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext","playerSize","w","h","plcmt"],q="ixdiag",H="".concat(S,"_features"),J=!1,G=(0,m.df)({bidderCode:S}),Q={REQUESTED_FEATURE_TOGGLES:["pbjs_enable_multiformat"],featureToggles:{},isFeatureEnabled:function(e){return(0,s.Z)(this.featureToggles,"features.".concat(e,".activated"),!1)},getFeatureToggles:function(){if(G.localStorageIsEnabled()){var e=(0,p.dj)(G.getDataFromLocalStorage(H));(0,s.Z)(e,"expiry")&&e.expiry>=(new Date).getTime()?this.featureToggles=e:this.clearFeatureToggles()}},setFeatureToggles:function(e){var t=e.body,r=new Date,i=(0,s.Z)(t,"ext.features");i&&(this.featureToggles={expiry:r.setHours(r.getHours()+1),features:i},G.localStorageIsEnabled()&&G.setDataInLocalStorage(H,JSON.stringify(this.featureToggles)))},clearFeatureToggles:function(){this.featureToggles={},G.localStorageIsEnabled()&&G.removeDataFromLocalStorage(H)}},V=0,$="",Y="",K=!1,W=2;function ee(e){var t=te(e,c.pX),r=(0,s.Z)(e,"mediaTypes.video"),i=(0,s.Z)(e,"params.video");if(oe(r,i).length)return{};for(var n in t.video=i?(0,p.I8)(e.params.video):{},t.ext.tid=(0,s.Z)(e,"ortb2Imp.ext.tid"),function(e,t){if((0,s.Z)(t,"mediaTypes.video.context")===y.gZ){var r=(0,s.Z)(t,"mediaTypes.video.renderer");if(r||(r=(0,s.Z)(t,"renderer")),(0,s.Z)(t,"schain",!1))e.displaymanager="pbjs_wrapper";else if(r&&"object"===(0,o.Z)(r)){if(void 0!==r.url){var i="";try{i=new URL(r.url).hostname}catch(e){return}i.includes("js-sec.indexww")?e.displaymanager="ix":e.displaymanager=r.url}}else e.displaymanager="ix"}}(t,e),fe(t,e),r)-1===M.indexOf(n)||t.video.hasOwnProperty(n)||(t.video[n]=r[n]);if(t.video.minduration>t.video.maxduration)return(0,p.H)("IX Bid Adapter: video minduration [".concat(t.video.minduration,"] cannot be greater than video maxduration [").concat(t.video.maxduration,"]"),{bidder:S,code:F}),{};var a=i&&i.context||r&&r.context;if(function(e){e.video.hasOwnProperty("plcmt")&&(!(0,p.U)(e.video.plcmt)||e.video.plcmt<1||e.video.plcmt>4)&&((0,p.yN)("IX Bid Adapter: video.plcmt [".concat(e.video.plcmt,"] must be an integer between 1-4 inclusive")),delete e.video.plcmt)}(t),a&&!t.video.hasOwnProperty("placement")&&(a===y.LD?t.video.placement=1:a===y.gZ?(0,s.Z)(i,"playerConfig.floatOnScroll")?t.video.placement=5:(t.video.placement=3,K=!0):(0,p.yN)("IX Bid Adapter: Video context '".concat(a,"' is not supported"))),!t.video.w||!t.video.h){var d=de((0,s.Z)(t,"video.playerSize"))||de((0,s.Z)(e,"params.size"));if(!d)return(0,p.yN)("IX Bid Adapter: Video size is missing in [mediaTypes.video]"),{};t.video.w=d[0],t.video.h=d[1]}return re(e,t,c.pX),t}function te(e,t){var r={};if(r.id=e.bidId,r.ext={},(0,s.Z)(e,"params.".concat(t,".siteId"))&&!isNaN(Number(e.params[t].siteId)))switch(t){case c.Mk:r.ext.siteID=e.params.banner.siteId.toString();break;case c.pX:r.ext.siteID=e.params.video.siteId.toString();break;case c.B5:r.ext.siteID=e.params.native.siteId.toString()}else r.ext.siteID=e.params.siteId.toString();return!e.params.hasOwnProperty("id")||"string"!=typeof e.params.id&&"number"!=typeof e.params.id||(r.ext.sid=String(e.params.id)),r}function re(e,t,r){var i=null,n=null;if(e.params.bidFloor&&e.params.bidFloorCur&&(i={floor:e.params.bidFloor,currency:e.params.bidFloorCur}),(0,p.LQ)(e.getFloor)){var a="*",o="*";if(r&&(0,p.r3)(P,r)){var d=t[r];a=r,o=[d.w,d.h]}try{n=e.getFloor({mediaType:a,size:o})}catch(e){(0,p.yN)("priceFloors module call getFloor failed, error : ",e)}}var s=!1;n?(t.bidfloor=n.floor,t.bidfloorcur=n.currency,t.ext.fl=T,s=!0):i&&(t.bidfloor=i.floor,t.bidfloorcur=i.currency,t.ext.fl=D,s=!0),s&&(r==c.Mk?((0,u.N)(t,"banner.ext.bidfloor",t.bidfloor),(0,u.N)(t,"banner.ext.fl",t.ext.fl)):r==c.pX?((0,u.N)(t,"video.ext.bidfloor",t.bidfloor),(0,u.N)(t,"video.ext.fl",t.ext.fl)):((0,u.N)(t,"native.ext.bidfloor",t.bidfloor),(0,u.N)(t,"native.ext.fl",t.ext.fl)))}function ie(e,t,r){var i={},n=!(!(0,s.Z)(e,"exp")||!(0,p.U)(e.exp)),a=(0,s.Z)(e,"dealid")||(0,s.Z)(e,"ext.dealid");k.hasOwnProperty(t)?i.cpm=e.price/k[t]:i.cpm=e.price/100,i.requestId=e.impid,a&&(i.dealId=a),i.netRevenue=true,i.currency=t,i.creativeId=e.hasOwnProperty("crid")?e.crid:"-",e.mtype!=W||(!e.ext||e.ext.vasturl)&&e.ext?e.ext&&e.ext.vasturl&&(i.vastUrl=e.ext.vasturl):i.vastXml=e.adm;var o=null;if("string"==typeof e.adm&&"{"===e.adm[0]&&"}"===e.adm[e.adm.length-1])try{o=JSON.parse(e.adm)}catch(e){(0,p.yN)("adm looks like JSON but failed to parse: ",e)}return e.ext&&e.ext.vasturl||e.mtype==W?(i.width=r.video.w,i.height=r.video.h,i.mediaType=c.pX,i.mediaTypes=r.mediaTypes,i.ttl=n?e.exp:3600):o&&o.native?(i.native={ortb:o.native},i.width=e.w?e.w:1,i.height=e.h?e.h:1,i.mediaType=c.B5,i.ttl=n?e.exp:3600):(i.ad=e.adm,i.width=e.w,i.height=e.h,i.mediaType=c.Mk,i.ttl=n?e.exp:300),i.meta={},i.meta.networkId=(0,s.Z)(e,"ext.dspid"),i.meta.brandId=(0,s.Z)(e,"ext.advbrandid"),i.meta.brandName=(0,s.Z)(e,"ext.advbrand"),e.adomain&&e.adomain.length>0&&(i.meta.advertiserDomains=e.adomain),i}function ne(e){return Array.isArray(e)&&2===e.length&&(0,p.U)(e[0])&&(0,p.U)(e[1])}function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(ne(e))return e[0]===t[0]&&e[1]===t[1];for(var r=0;r<e.length;r++)if(e[r][0]===t[0]&&e[r][1]===t[1])return!0;return!1}function oe(e,t){var r=[];e||(0,p.yN)("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");var i,n=w(L);try{for(n.s();!(i=n.n()).done;){var a=i.value,o=e&&e.hasOwnProperty(a),d=t&&t.hasOwnProperty(a);o||d||r.push("IX Bid Adapter: ".concat(a," is not included in either the adunit or params level"))}}catch(e){n.e(e)}finally{n.f()}var s=e&&e.hasOwnProperty("protocol"),u=e&&e.hasOwnProperty("protocols"),c=t&&t.hasOwnProperty("protocol"),l=t&&t.hasOwnProperty("protocols");return s||u||c||l||r.push("IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"),r}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return ne(e)?e:!!ne(e[0])&&e[0]}function se(e,t,r){if(e)return Z(Z({},(0,g.sE)(r,(function(t){return t.bidId===e}))),(0,g.sE)(t,(function(t){return t.id===e})))}function pe(e,t,r,i){var n="https://htlb.casalemedia.com/openrtb/pbjs",a=function(e){var t=[],r={};if((0,p.kJ)(e)){var i,n=w(e);try{for(n.s();!(i=n.n()).done;){var a=i.value;X.hasOwnProperty(a.source)&&(0,s.Z)(a,"uids.0")&&(r[a.source]=!0,""!=X[a.source]&&(a.uids[0].ext={rtiPartner:X[a.source]}),delete a.uids[0].atype,t.push(a))}}catch(e){n.e(e)}finally{n.f()}}return{toSend:t,seenSources:r}}((0,s.Z)(e,"0.userIdAsEids")),d=a.toSend;if(window.headertag&&"function"==typeof window.headertag.getIdentityInfo&&function(e,t){var r=window.headertag.getIdentityInfo();if(r&&"object"===(0,o.Z)(r))for(var i in r)if(r.hasOwnProperty(i)){var n=r[i];!n.responsePending&&n.data&&"object"===(0,o.Z)(n.data)&&Object.keys(n.data).length&&!t.seenSources[n.data.source]&&e.push(n.data)}}(d,a),t&&t.bidderCode===U&&!a.seenSources["liveramp.com"])return[];var c=[],f=function(e){var t={};return t.id=e[0].bidderRequestId.toString(),t.site={},t.ext={},t.ext.source="prebid",t.ext.ixdiag={},t.ext.ixdiag.ls=G.localStorageIsEnabled(),t.imp=[],t.at=1,t}(e);f=function(e,t){t.length>0&&(e.ext.features={},t.forEach((function(t){e.ext.features[t]={activated:Q.isFeatureEnabled(t)}})));return e}(f,Q.REQUESTED_FEATURE_TOGGLES);var m=function(e,t){var r,i=e.map((function(e){return e.adUnitCode})).filter((function(e,t,r){return r.indexOf(e)===t})),n={mfu:0,bu:0,iu:0,nu:0,ou:0,allu:0,ren:!1,version:"8.19.0",userIds:ve(e[0]),url:window.location.href.split("?")[0],vpd:K,ae:t},a=w(i);try{var o=function(){var t=r.value,i=e.filter((function(e){return e.adUnitCode===t}))[0];(0,s.Z)(i,"mediaTypes")&&(Object.keys(i.mediaTypes).length>1&&n.mfu++,(0,s.Z)(i,"mediaTypes.native")&&n.nu++,(0,s.Z)(i,"mediaTypes.banner")&&n.bu++,"outstream"===(0,s.Z)(i,"mediaTypes.video.context")&&(n.ou++,we(i)&&(n.ren=!0)),"instream"===(0,s.Z)(i,"mediaTypes.video.context")&&n.iu++,n.allu++)};for(a.s();!(r=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return n}(e,(0,s.Z)(t,"fledgeEnabled"));for(var v in m)f.ext.ixdiag[v]=m[v];f=function(e,t,r,i,n){var a,o,d=(0,s.Z)(t,"timeout");d&&(e.ext.ixdiag.tmax=d);l.vc.getConfig("userSync")&&(e.ext.ixdiag.syncsPerBidder=l.vc.getConfig("userSync").syncsPerBidder);var u=function(){if(!G.localStorageIsEnabled())return;var e,t={};try{e=JSON.parse(G.getDataFromLocalStorage(q)||"{}")}catch(e){return(0,p.H)("ix can not read ixdiag from localStorage."),null}return Object.keys(e).forEach((function(r){Object.keys(e[r]).forEach((function(i){"number"==typeof e[r][i]&&(t[i]=t[i]?t[i]+e[r][i]:e[r][i])}))})),t}();(0,p.xb)(u)||(e.ext.ixdiag.err=u);e.ext.ixdiag.imps=Object.keys(r).length,e.source={tid:null==t||null===(a=t.ortb2)||void 0===a||null===(o=a.source)||void 0===o?void 0:o.tid},i[0].schain&&(e.source.ext={},e.source.ext.schain=i[0].schain);n.length>0&&(e.user={},e.user.eids=n);document.referrer&&""!==document.referrer&&(e.site.ref=document.referrer);return e}(f,t,r,e,d),f=function(e,t){if(t){t.gdprConsent&&(($=t.gdprConsent).hasOwnProperty("gdprApplies")&&(e.regs={ext:{gdpr:$.gdprApplies?1:0}}),$.hasOwnProperty("consentString")&&(e.user=e.user||{},e.user.ext={consent:$.consentString||""},$.hasOwnProperty("addtlConsent")&&$.addtlConsent&&(e.user.ext.consented_providers_settings={addtl_consent:$.addtlConsent}))),t.uspConsent&&((0,u.N)(e,"regs.ext.us_privacy",t.uspConsent),Y=t.uspConsent);var r=(0,s.Z)(t,"refererInfo.page");r&&(e.site.page=r),t.gppConsent&&((0,u.N)(e,"regs.gpp",t.gppConsent.gppString),(0,u.N)(e,"regs.gpp_sid",t.gppConsent.applicableSections))}l.vc.getConfig("coppa")&&(0,u.N)(e,"regs.coppa",1);return e}(f,t);var g={};V=e[0].params.siteId,g.s=V;for(var b=Object.keys(r),y=!1,x=0;x<b.length&&!(c.length>=4);x++){f=ue(r,b,f,x);var h=(0,s.Z)(t,"ortb2")||{},I=Z({},h.site||h.context);I.page=ce(t);var O=Z({},h.user);(0,p.xb)(h)||y||((f=le(t,f,h,I,O)).site=(0,p.Ee)({},f.site,I),f.user=(0,p.Ee)({},f.user,O),y=!0),f=me(r,f,b,x,g,n);var C=x===b.length-1;f=Pe(f=Ue(f=ke(f))),C&&(c.push({method:"POST",url:n+"?s="+V,data:(0,p.I8)(f),option:{contentType:"text/plain"},validBidRequests:e}),f.imp=[],y=!1)}return c}function ue(e,t,r,i){var a=e[t[i]],o=a.missingImps,d=void 0===o?[]:o,l=a.ixImps,f={ixImps:void 0===l?[]:l,missingBannerImpressions:d},m=Object.keys(f).map((function(e){return f[e]})).filter((function(e){return Array.isArray(e)})).reduce((function(e,t){return e.concat.apply(e,(0,n.Z)(t))}),[]),v=e[t[i]].gpid,g=e[t[i]].dfp_ad_unit_code,b=e[t[i]].tid,y=e[t[i]].sid,x=e[t[i]].ae,h=m.filter((function(e){return c.Mk in e})),I=m.filter((function(e){return!(c.Mk in e)}));if(h.length>0){var O=h.reduce((function(e,t){return e[t.adunitCode]||(e[t.adunitCode]=[]),e[t.adunitCode].push(t),e}),{});for(var Z in O){for(var w=O[Z],C=w[0],S={id:C.id,banner:{topframe:C.banner.topframe,format:w.map((function(e){var t=e.banner;return{w:t.w,h:t.h,ext:e.ext}}))}},U=0;U<S.banner.format.length;U++)null!=S.banner.format[U].ext&&null!=S.banner.format[U].ext.sid&&delete S.banner.format[U].ext.sid,"bidfloor"in w[U]&&(S.banner.format[U].ext.bidfloor=w[U].bidfloor);var P=e[t[i]].pos;(0,p.U)(P)&&(S.banner.pos=P),(g||v||b||y||x)&&(S.ext={},S.ext.dfp_ad_unit_code=g,S.ext.gpid=v,S.ext.tid=b,S.ext.sid=y,1==x&&(S.ext.ae=1)),"bidfloor"in w[0]&&(S.bidfloor=w[0].bidfloor),"bidfloorcur"in w[0]&&(S.bidfloorcur=w[0].bidfloorcur);var E=e[t[i]].adUnitFPD;E&&(0,u.N)(S,"ext.data",E),r.imp.push(S)}}return I.length>0&&I.forEach((function(e){if((0,u.N)(e,"ext.gpid",v),r.imp.length>0){var t=!1;r.imp.forEach((function(i,n){e.id===i.id&&c.pX in e?(i.video=e.video,i.video.ext=Object.assign({},e.video.ext,e.ext),(0,s.Z)(i,"video.ext.bidfloor",!1)&&(0,s.Z)(i,"bidfloor",!1)&&i.video.ext.bidfloor<i.bidfloor&&(i.bidfloor=i.video.ext.bidfloor),!(0,s.Z)(i,"ext.siteID",!1)&&(0,s.Z)(e,"video.ext.siteID")&&((0,u.N)(i,"ext.siteID",e.video.ext.siteID),(0,u.N)(r,"ext.ixdiag.usid",!0)),t=!0):e.id===i.id&&c.B5 in e&&(i.native=e.native,i.native.ext=Object.assign({},e.native.ext,e.ext),(0,s.Z)(i,"native.ext.bidfloor",!1)&&(0,s.Z)(i,"bidfloor",!1)&&i.native.ext.bidfloor<i.bidfloor&&(i.bidfloor=i.native.ext.bidfloor),!(0,s.Z)(i,"ext.siteID",!1)&&(0,s.Z)(e,"native.ext.siteID",!1)&&((0,u.N)(i,"ext.siteID",e.native.ext.siteID),(0,u.N)(r,"ext.ixdiag.usid",!0)),t=!0)})),t||r.imp.push(e)}else r.imp.push(e)})),r}function ce(e){var t=e&&e.bidderCode||"ix",r=l.vc.getConfig(t),n="";if((n=(0,s.Z)(e,"ortb2.site.page")?e.ortb2.site.page:(0,s.Z)(e,"refererInfo.page"),r)&&"object"===(0,o.Z)(r.firstPartyData))return function(e,t,r){var n;try{n=new URL(t)}catch(r){(0,p.yN)("IX Bid Adapter: Invalid URL set in ortb2.site.page: ".concat(t,". Using referer URL instead.")),n=new URL((0,s.Z)(e,"refererInfo.page"))}for(var a=new URLSearchParams(n.search),o=0,d=Object.entries(r);o<d.length;o++){var u=(0,i.Z)(d[o],2),c=u[0],l=u[1];a.has(c)||a.append(c,l)}return n.search=a.toString(),n.toString()}(e,n,r.firstPartyData);return n}function le(e,t,r,i,n){if(t.ext.ixdiag.fpd=!0,Object.keys(i).forEach((function(e){-1===R.SITE.indexOf(e)&&delete i[e]})),Object.keys(n).forEach((function(e){-1===R.USER.indexOf(e)&&delete n[e]})),r.device){var a=Z({},r.device.sua);(0,p.xb)(a)||(0,u.N)(t,"device.sua",a)}return r.hasOwnProperty("regs")&&!e.gppConsent&&(r.regs.hasOwnProperty("gpp")&&"string"==typeof r.regs.gpp&&(0,u.N)(t,"regs.gpp",r.regs.gpp),r.regs.hasOwnProperty("gpp_sid")&&Array.isArray(r.regs.gpp_sid)&&(0,u.N)(t,"regs.gpp_sid",r.regs.gpp_sid)),t}function fe(e,t){var r=(0,s.Z)(t,"ortb2Imp.ext.data");r&&(0,u.N)(e,"ext.data",r)}function me(e,t,r,i,n,a){var o=e[r[i]].pbadslot,d=e[r[i]].tagId,s=e[r[i]].adUnitCode,p=e[r[i]].divId;return(o||d||s||p)&&(t.ext.ixdiag.pbadslot=o,t.ext.ixdiag.tagid=d,t.ext.ixdiag.adunitcode=s,t.ext.ixdiag.divId=p),t}function ve(e){var t=e.userId||{};return z.filter((function(e){return t[e]}))}function ge(e,t){if(t)for(var r=0;r<e.length;r++){var i=e[r];if(t[0]===i[0]&&t[1]===i[1]){e.splice(r,1);break}}}function be(e,t){var r=function(e){var t=te(e,c.B5),r=e.nativeOrtbRequest;return r.eventtrackers=[{event:1,methods:[1,2]}],r.privacy=1,t.native={request:JSON.stringify(r),ver:"1.2"},t.ext.tid=(0,s.Z)(e,"ortb2Imp.ext.tid"),fe(t,e),re(e,t,c.B5),t}(e);if(0!=Object.keys(r).length){t[e.adUnitCode]={},t[e.adUnitCode].ixImps=[],t[e.adUnitCode].ixImps.push(r),t[e.adUnitCode].gpid=(0,s.Z)(e,"ortb2Imp.ext.gpid"),t[e.adUnitCode].dfp_ad_unit_code=(0,s.Z)(e,"ortb2Imp.ext.data.adserver.adslot"),t[e.adUnitCode].pbadslot=(0,s.Z)(e,"ortb2Imp.ext.data.pbadslot"),t[e.adUnitCode].tagId=(0,s.Z)(e,"params.tagId");var i=e.adUnitCode,n=document.getElementById(i)?i:(0,h.ky)(i).divId;t[e.adUnitCode].adUnitCode=i,t[e.adUnitCode].divId=n}}function ye(e,t){var r=ee(e);if(0!=Object.keys(r).length){t[e.adUnitCode]={},t[e.adUnitCode].ixImps=[],t[e.adUnitCode].ixImps.push(r),t[e.adUnitCode].gpid=(0,s.Z)(e,"ortb2Imp.ext.gpid"),t[e.adUnitCode].dfp_ad_unit_code=(0,s.Z)(e,"ortb2Imp.ext.data.adserver.adslot"),t[e.adUnitCode].pbadslot=(0,s.Z)(e,"ortb2Imp.ext.data.pbadslot"),t[e.adUnitCode].tagId=(0,s.Z)(e,"params.tagId");var i=e.adUnitCode,n=document.getElementById(i)?i:(0,h.ky)(i).divId;t[e.adUnitCode].adUnitCode=i,t[e.adUnitCode].divId=n}}function xe(e,t,r,i){var n=function(e){var t=te(e,c.Mk);t.banner={},t.adunitCode=e.adUnitCode;var r=(0,s.Z)(e,"params.size");return r&&(t.banner.w=r[0],t.banner.h=r[1]),t.banner.topframe=(0,p.yL)()?0:1,re(e,t,c.Mk),t}(e),a=ae((0,s.Z)(e,"mediaTypes.banner.sizes"),(0,s.Z)(e,"params.size"));if(r.hasOwnProperty(e.adUnitCode)||(r[e.adUnitCode]={}),r[e.adUnitCode].gpid=(0,s.Z)(e,"ortb2Imp.ext.gpid"),r[e.adUnitCode].dfp_ad_unit_code=(0,s.Z)(e,"ortb2Imp.ext.data.adserver.adslot"),r[e.adUnitCode].tid=(0,s.Z)(e,"ortb2Imp.ext.tid"),r[e.adUnitCode].pbadslot=(0,s.Z)(e,"ortb2Imp.ext.data.pbadslot"),r[e.adUnitCode].tagId=(0,s.Z)(e,"params.tagId"),r[e.adUnitCode].pos=(0,s.Z)(e,"mediaTypes.banner.pos"),(0,s.Z)(i,"fledgeEnabled")){var o=(0,s.Z)(e,"ortb2Imp.ext.ae");o?(0,p.U)(o)?r[e.adUnitCode].ae=o:(0,p.yN)("error setting auction environment flag - must be an integer"):1==(0,s.Z)(i,"defaultForSlots")&&(r[e.adUnitCode].ae=1)}var d=(0,s.Z)(e,"ortb2Imp.ext.data");d&&(r[e.adUnitCode].adUnitFPD=d);var u=(0,s.Z)(e,"params.id");!u||"string"!=typeof u&&"number"!=typeof u||(r[e.adUnitCode].sid=String(u));var l=e.adUnitCode,f=document.getElementById(l)?l:(0,h.ky)(l).divId;r[e.adUnitCode].adUnitCode=l,r[e.adUnitCode].divId=f,a&&(r[e.adUnitCode].hasOwnProperty("ixImps")||(r[e.adUnitCode].ixImps=[]),r[e.adUnitCode].ixImps.push(n)),function(e,t,r){if(t.hasOwnProperty(e.adUnitCode)){var i=[];t[e.adUnitCode].hasOwnProperty("missingSizes")&&(i=t[e.adUnitCode].missingSizes),ge(i,e.params.size),t[e.adUnitCode].missingSizes=i}else if((0,s.Z)(e,"mediaTypes.banner.sizes")){var n=(0,p.I8)(e.mediaTypes.banner.sizes);ge(n,e.params.size);var a={missingSizes:n,impression:r};t[e.adUnitCode]=a}}(e,t,n)}function he(e,t,r){var i=(0,p.I8)(t);return i.banner.w=r[0],i.banner.h=r[1],re(e,i,c.Mk),i}function Ie(e){"ERROR"===e.type&&e.arguments&&e.arguments[1]&&e.arguments[1].bidder===S&&function(e){if(G.localStorageIsEnabled()){var t;try{t=JSON.parse(G.getDataFromLocalStorage(q)||"{}")}catch(e){(0,p.yN)("ix can not read ixdiag from localStorage.")}var r=new Date;if(Object.keys(t).map((function(e){var i=new Date(e);i.setDate(i.getDate()+7)-r<0&&delete t[e]})),"ERROR"===e.type&&e.arguments&&e.arguments[1]&&e.arguments[1].bidder===S){var i=r.toISOString().slice(0,10),n=e.arguments[1].code;n&&(t[i]=t[i]||{},Number(t[i][n])||(t[i][n]=0),t[i][n]++)}G.setDataInLocalStorage(q,JSON.stringify(t))}}(e)}function Oe(e){e.renderer.push((function(){var t=e.adUnitCode,r=document.getElementById(t)?t:(0,h.ky)(t).divId;r?window.createIXPlayer(r,e):(0,p.yN)("IX Bid Adapter: adUnitCode: ".concat(r," not found on page."))}))}function Ze(e,t){var r=x.Th.install({id:e,url:t,loaded:!1});try{r.setRender(Oe)}catch(e){return(0,p.yN)("Prebid Error calling setRender on renderer",e),null}return t?r:((0,p.yN)("Outstream renderer URL not found"),null)}function we(e){if("outstream"!==(0,s.Z)(e,"mediaTypes.video.context"))return!1;var t=(0,s.Z)(e,"mediaTypes.video.renderer");return t||(t=(0,s.Z)(e,"renderer")),!!("object"!==(0,o.Z)(t)||!t.url||!t.render)||t.backupOnly}var Ce={code:S,gvlid:10,aliases:[{code:U,gvlid:10,skipPbsAliasing:!1}],supportedMediaTypes:P,isBidRequestValid:function(e){J||(v.on(f.FP.AUCTION_DEBUG,Ie),v.on(f.FP.AD_RENDER_FAILED,Ie),J=!0);var t,r,i=(0,s.Z)(e,"params.video"),n=(0,s.Z)(e,"params.size"),a=(0,s.Z)(e,"mediaTypes.banner.sizes"),o=(0,s.Z)(e,"mediaTypes.video"),d=(0,s.Z)(e,"mediaTypes.video.playerSize"),u=e.params.hasOwnProperty("bidFloor"),c=e.params.hasOwnProperty("bidFloorCur");if(e.hasOwnProperty("mediaType")&&!(0,p.r3)(P,e.mediaType))return(0,p.yN)("IX Bid Adapter: media type is not supported."),!1;if((0,s.Z)(e,"mediaTypes.banner")&&!a)return!1;if(n){var l=de(n);if(!l)return(0,p.H)("IX Bid Adapter: size has invalid format.",{bidder:S,code:N}),!1;if(!ae(e.sizes,l)&&!ae(d,l)&&!ae(a,l))return(0,p.H)("IX Bid Adapter: bid size is not included in ad unit sizes or player size.",{bidder:S,code:j}),!1}if("string"!=typeof e.params.siteId&&"number"!=typeof e.params.siteId)return(0,p.H)("IX Bid Adapter: siteId must be string or number type.",{bidder:S,code:B}),!1;if("string"!=typeof e.params.siteId&&isNaN(Number(e.params.siteId)))return(0,p.H)("IX Bid Adapter: siteId must valid value",{bidder:S,code:B}),!1;if((u||c)&&!(u&&c&&(t=e.params.bidFloor,r=e.params.bidFloorCur,Boolean("number"==typeof t&&"string"==typeof r&&r.match(/^[A-Z]{3}$/)))))return(0,p.H)("IX Bid Adapter: bidFloor / bidFloorCur parameter has invalid format.",{bidder:S,code:_}),!1;if(o&&i){var m=ee(e).video,g=oe(o,i);if((0,s.Z)(e,"mediaTypes.video.context")===y.gZ&&we(e)&&m){var b=[(0,s.Z)(m,"w"),(0,s.Z)(m,"h")];if(!(b[0]>=E[0]&&b[1]>=E[1]))return(0,p.H)("IX Bid Adapter: ".concat(b," is an invalid size for IX outstream renderer")),!1}if(g.length)return g.forEach((function(e){(0,p.H)(e,{bidder:S,code:A})})),!1}return function(e){return void 0===(0,s.Z)(e,"mediaTypes.native")||e.nativeOrtbRequest&&Array.isArray(e.nativeOrtbRequest.assets)&&e.nativeOrtbRequest.assets.length>0}(e)},buildRequests:function(e,t){var r=[],i={},a={},o={},d={};for(var u in Q.getFeatureToggles(),e.forEach((function(e){var r=Object.keys((0,s.Z)(e,"mediaTypes",{}));for(var n in r)switch(r[n]){case c.Mk:xe(e,d,i,t);break;case c.pX:ye(e,a);break;case c.B5:be(e,o);break;default:(0,p.yN)("IX Bid Adapter: ad unit mediaTypes ".concat(n," is not supported"))}})),d)if(d.hasOwnProperty(u)){var l=d[u].missingSizes;i.hasOwnProperty(u)||(i[u]={}),i[u].hasOwnProperty("missingImps")||(i[u].missingImps=[],i[u].missingCount=0);for(var f=d[u].impression,m=0;m<l.length;m++){var v=he(e[0],f,l[m]);i[u].missingImps.push(v),i[u].missingCount++}}var g,b=[];return Object.keys(i).length>0&&b.push(i),Object.keys(a).length>0&&b.push(a),Object.keys(o).length>0&&b.push(o),Q.isFeatureEnabled("pbjs_enable_multiformat")?r.push.apply(r,(0,n.Z)(pe(e,t,(g={},b.forEach((function(e){Object.keys(e).forEach((function(t){Object.keys(g).includes(t)?g[t].hasOwnProperty("ixImps")&&e[t].hasOwnProperty("ixImps")?g[t].ixImps=[].concat((0,n.Z)(g[t].ixImps),(0,n.Z)(e[t].ixImps)):g[t].hasOwnProperty("missingImps")&&e[t].hasOwnProperty("missingImps")?g[t].missingImps=[].concat((0,n.Z)(g[t].missingImps),(0,n.Z)(e[t].missingImps)):e[t].hasOwnProperty("ixImps")?g[t].ixImps=e[t].ixImps:e[t].hasOwnProperty("missingImps")&&(g[t].missingImps=e[t].missingImps):g[t]=e[t]}))})),g)))):(Object.keys(i).length>0&&r.push.apply(r,(0,n.Z)(pe(e,t,i))),Object.keys(a).length>0&&r.push.apply(r,(0,n.Z)(pe(e,t,a))),Object.keys(o).length>0&&r.push.apply(r,(0,n.Z)(pe(e,t,o)))),r},interpretResponse:function(e,t){var r=[],i=null,n=(0,s.Z)(e,"body.ext.protectedAudienceAuctionConfigs")||[];if(Q.setFeatureToggles(e),!e.hasOwnProperty("body"))return r;for(var a=e.body,d=a.seatbid||[],u=0;u<d.length;u++)if(d[u].hasOwnProperty("bid")){for(var l=d[u].bid,f=t.data,m=0;m<l.length;m++){var v=se(l[m].impid,f.imp,t.validBidRequests);if((i=ie(l[m],a.cur,v)).mediaType===c.pX&&we(v)){var g=(0,s.Z)(a,"ext.videoplayerurl");if(i.renderer=Ze(l[m].bidId,g),!i.renderer)continue}r.push(i)}if((0,s.Z)(f,"ext.ixdiag.err")&&G.localStorageIsEnabled())try{G.removeDataFromLocalStorage(q)}catch(e){(0,p.H)("ix can not clear ixdiag from localStorage.")}}if(!(Array.isArray(n)&&n.length>0))return r;n=n.filter((function(e){return!!function(e){return"object"===(0,o.Z)(e)&&null!==e}(e)||((0,p.yN)("Malformed auction config detected:",e),!1)}));try{return{bids:r,fledgeAuctionConfigs:n}}catch(e){return(0,p.yN)("Error attaching AuctionConfigs",e),r}},transformBidParams:function(e,t){return(0,I.u)({siteID:"number"},e)},getUserSyncs:function(e,t){var r=[],i=null;if(t.length>0&&(i=(0,s.Z)(t[0],"body.ext.publishersyncsperbidderoverride")),void 0!==i&&0==i)return[];if(e.iframeEnabled)r.push({type:"iframe",url:"https://js-sec.indexww.com/um/ixmatch.html"});else{var n=null;l.vc.getConfig("userSync")&&(n=l.vc.getConfig("userSync").syncsPerBidder),0===n&&(n=i),n=i&&(0===n||n)?i>n?n:i:1;for(var a=0;a<n;a++)r.push({type:"image",url:Se(n,a)})}return r}};function Se(e,t){var r="",i="0";return $&&$.hasOwnProperty("gdprApplies")&&(i=$.gdprApplies?"1":"0"),$&&$.hasOwnProperty("consentString")&&(r=$.consentString||""),"https://dsum.casalemedia.com/pbusermatch?origin=prebid&site_id="+V.toString()+"&p="+e.toString()+"&i="+t.toString()+"&gdpr="+i+"&gdpr_consent="+r+"&us_privacy="+(Y||"")}function Ue(e){return e.imp.forEach((function(t,r){var i=t.ext;if(null==i)return e;Ee(t)<2||Object.keys(i).forEach((function(n){if(c.Mk in t){var a=t.banner.ext;if(void 0!==a&&void 0!==a[n]&&a[n]==i[n]&&delete e.imp[r].banner.ext[n],void 0!==t.banner.format)for(var o=0;o<t.banner.format.length;o++)null!=t.banner.format[o].ext&&null!=t.banner.format[o].ext[n]&&t.banner.format[o].ext[n]==i[n]&&delete e.imp[r].banner.format[o].ext[n]}if(c.pX in t){var d=t.video.ext;void 0!==d&&void 0!==d[n]&&d[n]==i[n]&&delete e.imp[r].video.ext[n]}if(c.B5 in t){var s=t.native.ext;void 0!==s&&void 0!==s[n]&&s[n]==i[n]&&delete e.imp[r].native.ext[n]}}))})),e}function Pe(e){return e.imp.forEach((function(t,r){if(null==t.ext)return e;if(!(Ee(t)<2)){if(c.Mk in t){var i=t.banner.ext;if(void 0!==i&&void 0!==i.siteID&&delete e.imp[r].banner.ext.siteID,void 0!==t.banner.format)for(var n=0;n<t.banner.format.length;n++)void 0!==t.banner.format[n].ext&&void 0!==t.banner.format[n].ext.siteID&&((0,u.N)(e.imp[r],"ext.siteID",t.banner.format[n].ext.siteID),(0,u.N)(e,"ext.ixdiag.usid",!0),delete e.imp[r].banner.format[n].ext.siteID)}if(c.pX in t){var a=t.video.ext;void 0!==a&&void 0!==a.siteID&&delete e.imp[r].video.ext.siteID}if(c.B5 in t){var o=t.native.ext;void 0!==o&&void 0!==o.siteID&&delete e.imp[r].native.ext.siteID}}})),e}function Ee(e){var t=0;return void 0!==e.banner&&(t+=1),void 0!==e.video&&(t+=1),void 0!==e.native&&(t+=1),t}function ke(e){return null==e.device&&(e.device={}),e.device.h=window.screen.height,e.device.w=window.screen.width,e}(0,b.dX)(Ce),(0,d.z)("ixBidAdapter")}},function(e){e.O(0,[402,703],(function(){return t=3390,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[826],{5526:function(e,t,r){var n,a,i,o=r(3324),d=r(1002),l=r(8640),c=r(4358),u=r(265),p=r(3193),s=r(4699),I=r(5164),S=r(4679),E=Object.freeze({CODE:"kargo",HOST:"krk2.kargo.com",REQUEST_METHOD:"POST",REQUEST_ENDPOINT:"/api/v1/prebid",TIMEOUT_ENDPOINT:"/api/v1/event/timeout",GVLID:972,SUPPORTED_MEDIA_TYPES:[S.Mk,S.pX]}),m=(0,I.df)({bidderCode:E.CODE}),b=Object.freeze({KEY:"currency",US_DOLLAR:"USD"}),g=Object.freeze({SOCIAL_CANVAS:"params.socialCanvas",SUA:"ortb2.device.sua",TDID_ADAPTER:"userId.tdid"}),f=Object.freeze({BROWSERS:"browsers",MOBILE:"mobile",MODEL:"model",PLATFORM:"platform",SOURCE:"source"}),v=[f.BROWSERS,f.MOBILE,f.MODEL,f.SOURCE,f.PLATFORM],D=Object.freeze({KEY:"krg_crb",SYNC_URL:"https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}&gdpr={GDPR}&gdpr_consent={GDPR_CONSENT}&us_privacy={US_PRIVACY}&gpp={GPP_STRING}&gpp_sid={GPP_SID}",SYNC_COUNT:5,PAGE_VIEW_ID:"pageViewId",PAGE_VIEW_TIMESTAMP:"pageViewTimestamp",PAGE_VIEW_URL:"pageViewUrl"});function T(){try{var e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=-177&e[6]|64,e[8]=-65&e[8]|128;var t=Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("");return t.slice(0,8)+"-"+t.slice(8,12)+"-"+t.slice(12,16)+"-"+t.slice(16,20)+"-"+t.slice(20)}catch(e){return""}}function C(){return n||(n=T()),n}function _(e){try{return m.getDataFromLocalStorage(e)}catch(e){return null}}function R(e,t,r,n,a){var i=O._getCrb(),o={crbIDs:i.syncIds||{}};e&&(o.tdID=e),!e&&i.tdID&&(o.tdID=i.tdID),t&&(o.usp=t);try{r&&(o.gdpr={consent:r.consentString||"",applies:!!r.gdprApplies})}catch(e){}if(null!=i.lexId&&(o.kargoID=i.lexId),null!=i.clientId&&(o.clientID=i.clientId),null!=i.optOut&&(o.optOut=i.optOut),null!=n&&(o.sharedIDEids=n),a){var d={};a&&a.consentString&&(d.gppString=a.consentString),a&&a.applicableSections&&(d.applicableSections=a.applicableSections),(0,c.xb)(d)||(o.gpp=d)}return o}var O={gvlid:E.GVLID,code:E.CODE,isBidRequestValid:function(e){return!(!e||!e.params)&&!!e.params.placementId},buildRequests:function(e,t){var r=p.vc.getConfig(b.KEY),n=r&&r.adServerCurrency?r.adServerCurrency:null,o=[];(0,c.yi)(e,(function(e){o.push(function(e){var t,r,n={id:e.bidId,tid:null===(t=e.ortb2Imp)||void 0===t||null===(r=t.ext)||void 0===r?void 0:r.tid,pid:e.params.placementId,code:e.adUnitCode};null!=e.floorData&&e.floorData.floorMin>0&&(n.floor=e.floorData.floorMin);e.bidRequestsCount>0&&(n.bidRequestCount=e.bidRequestsCount);e.bidderRequestsCount>0&&(n.bidderRequestCount=e.bidderRequestsCount);e.bidderWinsCount>0&&(n.bidderWinCount=e.bidderWinsCount);var a=function(e){if(null!=e.ortb2Imp){if(null!=e.ortb2Imp.gpid&&""!=e.ortb2Imp.gpid)return e.ortb2Imp.gpid;if(null!=e.ortb2Imp.ext&&null!=e.ortb2Imp.ext.data){if(null!=e.ortb2Imp.ext.data.pbAdSlot&&""!=e.ortb2Imp.ext.data.pbAdSlot)return e.ortb2Imp.ext.data.pbAdSlot;if(null!=e.ortb2Imp.ext.data.adServer&&null!=e.ortb2Imp.ext.data.adServer.adSlot&&""!=e.ortb2Imp.ext.data.adServer.adSlot)return e.ortb2Imp.ext.data.adServer.adSlot}}if(null!=e.adUnitCode&&""!=e.adUnitCode)return e.adUnitCode;return""}(e);null!=a&&""!=a&&(n.fpd={gpid:a});null!=e.mediaTypes&&(null!=e.mediaTypes.banner&&(n.banner=e.mediaTypes.banner),null!=e.mediaTypes.video&&(n.video=e.mediaTypes.video),null!=e.mediaTypes.native&&(n.native=e.mediaTypes.native));return n}(e))}));var d=e[0],l=(0,u.Z)(d,g.TDID_ADAPTER),s=function(e){var t;return{pageURL:null==e||null===(t=e.refererInfo)||void 0===t?void 0:t.page,rawCRB:m.getCookie(D.KEY),rawCRBLocalStorage:_(D.KEY)}}(t),I=Object.assign({},{pbv:"8.19.0",aid:d.auctionId,sid:C(),url:s.pageURL,timeout:t.timeout,ts:(new Date).getTime(),device:{size:[window.screen.width,window.screen.height]},imp:o,user:R(l,t.uspConsent,t.gdprConsent,d.userIdAsEids,t.gppConsent)});null!=d.ortb2&&(I.site={cat:d.ortb2.site.cat}),d.schain&&d.schain.nodes&&(I.schain=d.schain);var S=function(){if(a===window.location.pathname)return++i;return a=window.location.pathname,i=0}();null!=S&&(I.requestCount=S),null!=n&&n!=b.US_DOLLAR&&(I.cur=n),null!=s.rawCRB&&(I.rawCRB=s.rawCRB),null!=s.rawCRBLocalStorage&&(I.rawCRBLocalStorage=s.rawCRBLocalStorage);var T=(0,u.Z)(d,g.SOCIAL_CANVAS);null!=T&&(I.socan=T);var O=(0,u.Z)(d,g.SUA);if(O){var P=[];v.forEach((function(e){var t=O[e];if(t&&("string"!=typeof t||""!==t.trim()))switch(e){case f.MOBILE&&t<1:case f.SOURCE&&t<1:break;default:P.push(e)}})),I.device.sua=(0,c.ei)(O,P)}var y=null!=_(D.PAGE_VIEW_ID),A=null!=_(D.PAGE_VIEW_TIMESTAMP),U=null!=_(D.PAGE_VIEW_URL),h={};return y&&(h.id=_(D.PAGE_VIEW_ID)),A&&(h.timestamp=Number(_(D.PAGE_VIEW_TIMESTAMP))),U&&(h.url=_(D.PAGE_VIEW_URL)),(0,c.xb)(h)||(I.page=h),Object.assign({},t,{method:E.REQUEST_METHOD,url:"https://".concat(E.HOST).concat(E.REQUEST_ENDPOINT),data:I,currency:n})},interpretResponse:function(e,t){var r=e.body,n=[];return(0,c.xb)(r)||"object"!==(0,d.Z)(r)||Object.entries(r).forEach((function(e){var r=(0,o.Z)(e,2),a=r[0],i=r[1],d={mediaType:i.mediaType&&E.SUPPORTED_MEDIA_TYPES.includes(i.mediaType)?i.mediaType:S.Mk};i.metadata&&i.metadata.landingPageDomain&&(d.clickUrl=i.metadata.landingPageDomain[0],d.advertiserDomains=i.metadata.landingPageDomain);var l={requestId:a,cpm:Number(i.cpm),width:i.width,height:i.height,ttl:300,creativeId:i.id,dealId:i.targetingCustom,netRevenue:!0,currency:i.currency||t.currency,mediaType:d.mediaType,meta:d};d.mediaType==S.pX?i.admUrl?l.vastUrl=i.admUrl:l.vastXml=i.adm:l.ad=i.adm,n.push(l)})),n},getUserSyncs:function(e,t,r,n,a){var i=[],o=T(),d=O._getCrb().clientId,l=r&&r.gdprApplies?1:0,c=r&&r.consentString?r.consentString:"",u=a&&a.consentString?a.consentString:"",p=a&&a.applicableSections&&Array.isArray(a.applicableSections)?a.applicableSections.join(","):"";if("string"==typeof n&&4==n.length&&1==n[0]&&"Y"==n[2])return i;if(e.iframeEnabled&&o&&d)for(var s=0;s<D.SYNC_COUNT;s++)i.push({type:"iframe",url:D.SYNC_URL.replace("{UUID}",d).replace("{SEED}",o).replace("{INDEX}",s).replace("{GDPR}",l).replace("{GDPR_CONSENT}",c).replace("{US_PRIVACY}",n||"").replace("{GPP_STRING}",u).replace("{GPP_SID}",p)});return i},supportedMediaTypes:E.SUPPORTED_MEDIA_TYPES,onTimeout:function(e){null!=e&&e.forEach((function(e){!function(e,t){var r={aid:e,ato:t};try{var n=(0,c.Q2)({protocol:"https",hostname:E.HOST,pathname:E.TIMEOUT_ENDPOINT,search:r});(0,c.hq)(n)}catch(e){}}(e.auctionId,e.timeout)}))},_getCrb:function(){var e=function(){try{return JSON.parse(atob(_(D.KEY)))}catch(e){return{}}}();return Object.keys(e).length?e:function(){try{var e=JSON.parse(m.getCookie(D.KEY));if(e&&e.v){var t=JSON.parse(atob(e.v));if(t)return t}return{}}catch(e){return{}}}()},_getSessionId:C};(0,s.dX)(O),(0,l.z)("kargoBidAdapter")}},function(e){var t;t=5526,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[299],{57:function(e,a,o){var t,r=o(8640),n=o(4358),i=o(8928),c=o(2797),s=o(5164),d=o(4516),l=o(9633),p="panoramaId",v="".concat(p,"_expiry"),g="_cc_id",m="lotamePanoramaId",u=864e5,f=(0,s.df)({moduleType:l.y2,moduleName:m});function _(e){var a=null;if(f.cookiesAreEnabled()&&(a=f.getCookie(e,void 0)),f.hasLocalStorage()&&null===a){var o=f.getDataFromLocalStorage("".concat(e,"_exp"),void 0);(""===o||null===o||o&&new Date(parseInt(o,10)).getTime()-Date.now()>0)&&(a=f.getDataFromLocalStorage(e,void 0))}return a}function x(e,a){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,n.AB)()+7*u;if(e&&a){var r=new Date(o).toUTCString();f.cookiesAreEnabled()&&f.setCookie(e,a,r,"Lax",t,void 0),f.hasLocalStorage()&&(f.setDataInLocalStorage("".concat(e,"_exp"),String(o),void 0),f.setDataInLocalStorage(e,a,void 0))}}function h(e){if(e){if(f.cookiesAreEnabled()){var a=new Date(0).toUTCString();f.setCookie(e,"",a,"Lax",t,void 0)}f.hasLocalStorage()&&f.removeDataFromLocalStorage(e,void 0)}}var S={name:m,gvlid:95,decode:function(e,a){return(0,n.d8)(e)?{lotamePanoramaId:e}:void 0},getId:function(e,a,o){t=S.findRootDomain();var r=(e&&e.params||{}).clientId,c=!(0,n.xb)(r),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,a={data:_(p),expiryTimestampMs:0,clientExpiryTimestampMs:0};try{if(e){var o=_("".concat(v,"_").concat(e));(0,n.d8)(o)&&(a.clientExpiryTimestampMs=parseInt(o,10))}var t=_(v);(0,n.d8)(t)&&(a.expiryTimestampMs=parseInt(t,10))}catch(e){(0,n.H)(e)}return a}(r),l=Date.now()>s.expiryTimestampMs;if(c&&Date.now()<s.clientExpiryTimestampMs)return{id:void 0,reason:"NO_CLIENT_CONSENT"};if(!l)return{id:s.data};var m,u,y=(f.cookiesAreEnabled()&&(m=f.getCookie(g,void 0)),!m&&f.hasLocalStorage()&&(m=f.getDataFromLocalStorage(g,void 0)),m),L=d.nX.getConsentData();void 0===L||(0,n.xb)(L)||(0,n.jH)(L)||(u=L),u||(u=_("us_privacy"));return{callback:function(e){var o,s={};y&&(s.fp=y),a&&((0,n.jn)(a.gdprApplies)&&(s.gdpr_applies=a.gdprApplies),o=a.consentString),o||(o=_("eupubconsent-v2")),o||(o=_("euconsent-v2")),o&&(s.gdpr_consent=o),u&&(s.us_privacy=u),c&&(s.c=r);var d=(0,n.Q2)({protocol:"https",host:navigator.userAgent&&-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?"c.ltmsphrcl.net":"id.crwdcntrl.net",pathname:"/id",search:(0,n.xb)(s)?void 0:s});(0,i.hj)(d,(function(a){var o;if(a)try{var i=JSON.parse(a),s=!((0,n.kJ)(i.errors)&&-1!==i.errors.indexOf(111));if(c)if(s)h("".concat(v,"_").concat(r));else if((0,n.d8)(i.no_consent)&&"CLIENT"===i.no_consent)return x("".concat(v,"_").concat(r),i.expiry_ts,i.expiry_ts),void e();x(v,i.expiry_ts,i.expiry_ts),(0,n.d8)(i.profile_id)?(s&&function(e){if(f.cookiesAreEnabled()){var a=new Date((0,n.AB)()+23328e6).toUTCString();f.setCookie(g,e,a,"Lax",t,void 0)}f.hasLocalStorage()&&f.setDataInLocalStorage(g,e,void 0)}(i.profile_id),(0,n.d8)(i.core_id)?(x(p,i.core_id,i.expiry_ts),o=i.core_id):h(p)):(s&&h(g),h(p))}catch(e){(0,n.H)(e)}e(o)}),void 0,{method:"GET",withCredentials:!0})}}},eids:{lotamePanoramaId:{source:"crwdcntrl.net",atype:1}}};(0,c.Bx)("userId",S),(0,r.z)("lotamePanoramaIdSystem")}},function(e){var a;a=57,e(e.s=a)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[534],{7851:function(e,t,r){var n=r(4942),o=r(3324),a=r(8640),i=r(3193),s=r(4699),p=r(6475),u=r(265),c=r(4358),d=r(4679),f=r(4980),m=r(5370);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={code:"openx",gvlid:69,supportedMediaTypes:[d.Mk,d.pX],isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;if(u.Z(e,"mediaTypes.banner")&&t)return!!e.params.unit||u.Z(e,"mediaTypes.banner.sizes.length")>0;return!(!e.params.unit||!t)},buildRequests:function(e,t){var r=e.filter((function(e){return x(e)})),n=e.filter((function(e){return function(e){return u.Z(e,"mediaTypes.banner")||!x(e)}(e)})),o=n.length?[y(n,t,d.Mk)]:[];return r.forEach((function(e){o.push(y([e],t,d.pX))})),o},interpretResponse:function(e,t){e.body||(e.body={nbr:0});return g.fromORTB({request:t.data,response:e.body})},getUserSyncs:function(e,t,r,n){if(e.iframeEnabled||e.pixelEnabled){var o=e.iframeEnabled?"iframe":"image",a=[],i="https://u.openx.net/w/1.0/pd";if(r&&(a.push("gdpr="+(r.gdprApplies?1:0)),a.push("gdpr_consent="+encodeURIComponent(r.consentString||""))),n&&a.push("us_privacy="+encodeURIComponent(n)),t.length>0&&t[0].body&&t[0].body.ext){var s=t[0].body.ext;s.delDomain?i="https://".concat(s.delDomain,"/w/1.0/pd"):s.platform&&a.push("ph="+s.platform)}else a.push("ph=2d1251ae-7f3a-47cf-bd2a-2f288854a0ba");return[{type:o,url:"".concat(i).concat(a.length>0?"?"+a.join("&"):"")}]}},transformBidParams:function(e,t){return(0,m.u)({unit:"string",customFloor:"number"},e)}};(0,s.dX)(v);var g=(0,f.x)({context:{netRevenue:!0,ttl:300},imp:function(e,t,r){var n=e(t,r);return(0,c.Ee)(n,{tagid:t.params.unit,ext:{divid:t.adUnitCode}}),t.params.customParams&&p.N(n,"ext.customParams",t.params.customParams),t.params.customFloor&&!n.bidfloor&&(n.bidfloor=t.params.customFloor),n},request:function(e,t,r,n){var o=e(t,r,n);(0,c.Ee)(o,{at:1,ext:{bc:"".concat("hb_pb_ortb","_").concat("2.0")}});var a=n.bidRequests[0];return a.params.coppa&&p.N(o,"regs.coppa",1),a.params.doNotTrack&&p.N(o,"device.dnt",1),a.params.platform&&p.N(o,"ext.platform",a.params.platform),a.params.delDomain&&p.N(o,"ext.delDomain",a.params.delDomain),a.params.response_template_name&&p.N(o,"ext.response_template_name",a.params.response_template_name),a.params.test&&(o.test=1),o},bidResponse:function(e,t,r){var n=e(t,r);t.ext&&(n.meta.networkId=t.ext.dsp_id,n.meta.advertiserId=t.ext.buyer_id,n.meta.brandId=t.ext.brand_id);var o=r.ortbResponse;return o.ext&&o.ext.paf&&(n.meta.paf=Object.assign({},o.ext.paf),n.meta.paf.content_id=u.Z(t,"ext.paf.content_id")),n},response:function(e,t,r,n){var a=n.ortbRequest;a.ext&&(a.ext.delDomain&&p.N(r,"ext.delDomain",a.ext.delDomain),a.ext.platform&&p.N(r,"ext.platform",a.ext.platform));var i=e(t,r,n),s=u.Z(r,"ext.fledge_auction_configs");return s?(s=Object.entries(s).map((function(e){var t=(0,o.Z)(e,2),r=t[0],n=t[1];return{bidId:r,config:Object.assign({auctionSignals:{}},n)}})),{bids:i.bids,fledgeAuctionConfigs:s}):i.bids},overrides:{imp:{bidfloor:function(e,t,r,n){var o={};e(o,r,l(l({},n),{},{currency:"USD"})),"USD"===o.bidfloorcur&&Object.assign(t,o)},video:function(e,t,r,o){var a,i=r.mediaTypes[d.pX];i&&(i=Object.assign({},i,r.params.video),r=l(l({},r),{},{mediaTypes:(0,n.Z)({},d.pX,i)})),e(t,r,o),t.video&&"outstream"===(null===(a=i)||void 0===a?void 0:a.context)&&(t.video.placement=t.video.placement||4)}}}});function y(e,t,r){return{method:"POST",url:i.vc.getConfig("openxOrtbUrl")||"https://rtb.openx.net/openrtbb/prebidjs",data:g.toORTB({bidRequests:e,bidderRequest:t,context:{mediaType:r}})}}function x(e){return u.Z(e,"mediaTypes.video")}(0,a.z)("openxBidAdapter")},6372:function(e,t,r){r.d(t,{DZ:function(){return i},Px:function(){return s},TP:function(){return u},YC:function(){return p},Z:function(){return a},f8:function(){return b},fP:function(){return l},gm:function(){return n},md:function(){return c}});var n=["request","imp","bidResponse","response"],o=["default","pbs"],a=n[0],i=n[1],s=n[2],p=n[3],u=o[0],c=o[1],d=new Set(n);var f,m=(f={},{registerOrtbProcessor:function(e){var t=e.type,r=e.name,o=e.fn,a=e.priority,i=void 0===a?0:a,s=e.dialects,p=void 0===s?[u]:s;if(!d.has(t))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));p.forEach((function(e){f.hasOwnProperty(e)||(f[e]={}),f[e].hasOwnProperty(t)||(f[e][t]={}),f[e][t][r]={priority:i,fn:o}}))},getProcessors:function(e){return f[e]||{}}}),b=m.registerOrtbProcessor,l=m.getProcessors}},function(e){e.O(0,[402,279],(function(){return t=7851,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[112],{5238:function(t,i,e){var n,a,o=e(8640),c=e(4358),r=e(2797),s=e(8928),p={},m="hb_deal_optimera",u={v0:"https://dyv1bugovvq1g.cloudfront.net/",v1:"https://v1.oapi26b.com/"},d="default",h="v0",l={},f=!0;function v(){(0,c.PN)("Fetch Optimera score file."),(0,s.OI)()(n,{success:function(t,i){if(200===i.status)try{!function(t){var i={};try{i=JSON.parse(t),"default"!==d&&i.device[d]&&(i=i.device[d]),(0,c.PN)(i),window.optimera=window.optimera||{},window.optimera.data=window.optimera.data||{},window.optimera.insights=window.optimera.insights||{},Object.keys(i).map((function(t){"insights"!==t&&(window.optimera.data[t]=i[t])})),i.insights&&(window.optimera.insights=i.insights)}catch(t){(0,c.H)("Optimera score file could not be parsed.")}l=i}(t)}catch(t){(0,c.H)("Unable to parse Optimera Score File.",t)}else 403===i.status&&(0,c.H)("Unable to fetch the Optimera Score File - 403")},error:function(){(0,c.H)("Unable to fetch the Optimera Score File.")}})}function w(){var t,i=window.location.host,e=window.location.pathname,o=u[h]?u[h]:u.v0;t="v1"===h?"".concat(o,"api/products/scores?c=").concat(a,"&h=").concat(i,"&p=").concat(e,"&s=").concat(d):"".concat(o).concat(a,"/").concat(i).concat(e,".js"),n!==t?(n=t,f=!0):f=!1}var g={name:"optimeraRTD",onAuctionInitEvent:function(t,i,e){w(),f&&v()},getTargetingData:function(t,i){var e={};try{t.forEach((function(t){l[t]&&(e[t]={},e[t][m]=[l[t]])}))}catch(t){(0,c.H)("error",t)}return(0,c.PN)("Apply Optimera targeting"),e},init:function(t){return(p=t.params)&&p.clientID?(a=p.clientID,p.optimeraKeyName&&(m=p.optimeraKeyName),p.device&&(d=p.device),p.apiVersion&&(h=p.apiVersion.includes("v1","v0")?p.apiVersion:"v0"),w(),v(),!0):(p.clientID||(0,c.H)("Optimera clientID is missing in the Optimera RTD configuration."),!1)}};(0,r.Bx)("realTimeData",g),(0,o.z)("optimeraRtdProvider")}},function(t){var i;i=5238,t(t.s=i)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[365],{968:function(t,r,n){var e=n(3324),a=n(4942),o=n(9062),i=n(8640),u=n(2797),s=n(5164),c=n(4358),d=n(265),p=n(6475),f=n(4614),m=n(9633),v="permutive",l=(0,c.qp)("[PermutiveRTD]"),g="permutive-prebid-rtd",b="p_standard",h="permutive",w="p_standard_aud",x=(0,s.df)({moduleType:m.XG,moduleName:v});function Z(t){return(0,c.PO)(t)?{params:t}:{}}var y={};function _(t){var r=function(){try{return Z(window.permutive.addons.prebid.getPermutiveRtdConfig())}catch(t){return null}}()||y;return(0,c.Ee)({waitForIt:!1,params:{maxSegs:500,acBidders:[],overwrites:{}}},r,t)}function I(t,r,n){var i,u,s,f,m=(0,d.Z)(r,"params.acBidders"),v=(0,d.Z)(r,"params.maxSegs"),g=(0,d.Z)(r,"params.transformations")||[],x=null!==(i=null==n||null===(u=n.ssp)||void 0===u?void 0:u.ssps)&&void 0!==i?i:[],Z=null!==(s=null==n||null===(f=n.ssp)||void 0===f?void 0:f.cohorts)&&void 0!==s?s:[];new Set([].concat((0,o.Z)(m),(0,o.Z)(x))).forEach((function(r){var i={ortb2:t[r]||{}},u=[];m.indexOf(r)>-1&&(u=n.ac),x.indexOf(r)>-1&&(u=(0,o.Z)(new Set([].concat((0,o.Z)(u),(0,o.Z)(Z)))).slice(0,v));var s=function(t,r,n,i,u,s){var f;l.logInfo("Current ortb2 config",{bidder:t,config:r});var m=(0,d.Z)(s,t)||[],v={name:"permutive.com",segment:n.map((function(t){return{id:t}}))},g=u.filter((function(t){var r=t.id;return k.hasOwnProperty(r)})).map((function(t){var r=t.id,n=t.config;return k[r](v,n)})),x={name:h,segment:m.map((function(t){return{id:t}}))},Z=(0,c.Ee)({},r),y=((0,d.Z)(Z,"ortb2.user.data")||[]).filter((function(t){return t.name!==v.name&&t.name!==x.name})).concat(v,g,x);l.logInfo("Updating ortb2.user.data",{bidder:t,user_data:y}),(0,p.N)(Z,"ortb2.user.data",y);var _=(0,d.Z)(Z,"ortb2.user.keywords"),I=(f={},(0,a.Z)(f,b,n),(0,a.Z)(f,w,i),(0,a.Z)(f,h,m),f),S=Object.entries(I).flatMap((function(t){var r=(0,e.Z)(t,2),n=r[0];return r[1].map((function(t){return"".concat(n,"=").concat(t)}))})),E=[_].concat((0,o.Z)(S)).filter(Boolean).join(",");l.logInfo("Updating ortb2.user.keywords",{bidder:t,keywords:E}),(0,p.N)(Z,"ortb2.user.keywords",E),n.length>0&&((0,p.N)(Z,"ortb2.user.ext.data.".concat(b),n),l.logInfo('Extending ortb2.user.ext.data with "'.concat(b,'"'),n));m.length>0&&((0,p.N)(Z,"ortb2.user.ext.data.".concat(h),m.map(String)),l.logInfo('Extending ortb2.user.ext.data with "'.concat(h,'"'),m));n.length>0&&((0,p.N)(Z,"ortb2.site.ext.permutive.".concat(b),n),l.logInfo('Extending ortb2.site.ext.permutive with "'.concat(b,'"'),n));return l.logInfo("Updated ortb2 config",{bidder:t,config:Z}),Z}(r,i,u,Z,g,n);t[r]=s.ortb2}))}function S(t,r,n){var e=t&&t.adUnits||(0,i.R)().adUnits,a={deepSetValue:p.N,deepAccess:d.Z,isFn:c.LQ,mergeDeep:c.Ee},o={appnexusAst:"appnexus"};e&&e.forEach((function(t){t.bids.forEach((function(t){var e=t.bidder;void 0!==o[e]&&(e=o[e]);var i=function(t,r){var n=(0,d.Z)(t,"params.acBidders")||[];return(0,f.q9)(n,r)}(r,e),u=function(t,r){var n=(0,d.Z)(t,"params.overwrites.".concat(r));return n&&(0,c.LQ)(n)?n:null}(r,e);if(u){u(t,n,i,a,(function(t){return t}))}}))}))}function E(t){try{t()}catch(t){(0,c.H)(t)}}function N(t,r){try{return JSON.parse(x.getDataFromLocalStorage(t))||r}catch(t){return r}}var D="_unknown_",k={iab:function(t,r){return{name:t.name,ext:{segtax:r.segtax},segment:(t.segment||[]).map((function(t){return{id:(n=t.id,e=r.iabIds,e[n]||D)};var n,e})).filter((function(t){return t.id!==D}))}}};function R(t,r){var n=function(t){var r=N("_psegs",[]).map(Number).filter((function(t){return t>=1e6})).map(String),n=N("_ppam",[]),e=N("_pcrprs",[]),a={ac:[].concat((0,o.Z)(e),(0,o.Z)(n),(0,o.Z)(r)),ix:N("_pindexs",[]),rubicon:N("_prubicons",[]),appnexus:N("_papns",[]),gam:N("_pdfps",[]),ssp:N("_pssps",{cohorts:[],ssps:[]})};for(var i in a)"ssp"===i?a[i].cohorts&&Array.isArray(a[i].cohorts)&&(a[i].cohorts=a[i].cohorts.slice(0,t)):a[i]=a[i].slice(0,t);return a}((0,d.Z)(r,"params.maxSegs"));E((function(){S(t,r,n)})),E((function(){var e;I(null===(e=t.ortb2Fragments)||void 0===e?void 0:e.bidder,r,n)}))}var B=!1,F={name:v,getBidRequestData:function(t,r,n){var e=function(){l.logInfo("Request data updated"),r()},a=_(n);R(t,a),E((function(){if(B||!a.waitForIt||void 0===window.permutive||"function"!=typeof window.permutive.ready)return e();window.permutive.ready((function(){l.logInfo("SDK is realtime, updating cohorts"),B=!0,R(t,_(n)),e()}),"realtime"),l.logInfo("Registered cohort update when SDK is realtime")}))},init:function(t,r){var n;return n=(0,c.dj)(x.getDataFromLocalStorage(g)),y=Z(n),!0}};(0,u.Bx)("realTimeData",F),(0,i.z)("permutiveRtdProvider")}},function(t){var r;r=968,t(t.s=r)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[30],{7497:function(e,n,t){var r,i=t(8640),o=t(8525),s=t(4358),d=t(265),c=t(5644),a=t(6104),u=t(3193),f=t(4699),p=t(2021),l=t(4614),b={appnexuspsp:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://ib.adnxs.com/openrtb2/prebid",noP1Consent:"https://ib.adnxs-simple.com/openrtb2/prebid"},syncEndpoint:{p1Consent:"https://prebid.adnxs.com/pbs/v1/cookie_sync",noP1Consent:"https://prebid.adnxs-simple.com/pbs/v1/cookie_sync"},timeout:1e3},rubicon:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://prebid-server.rubiconproject.com/openrtb2/auction",noP1Consent:"https://prebid-server.rubiconproject.com/openrtb2/auction"},syncEndpoint:{p1Consent:"https://prebid-server.rubiconproject.com/cookie_sync",noP1Consent:"https://prebid-server.rubiconproject.com/cookie_sync"},timeout:500},openx:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://prebid.openx.net/openrtb2/auction",noP1Consent:"https://prebid.openx.net/openrtb2/auction"},syncEndpoint:{p1Consent:"https://prebid.openx.net/cookie_sync",noP1Consent:"https://prebid.openx.net/cookie_sync"},timeout:1e3}},v=t(8928),g=t(2797),m=t(7673),y=t(3324),h=t(1002),C=t(4942),O=t(4980),B=t(6475),q=t(9626),R=t(9933),P=t(9702),j=t(1021),S=t(6372),E=t(1087),x=t(286),I=t(9633),w=t(571),k=t(4947),T=t(9957),A=t(1136);function N(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){d=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(d)throw o}}}}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=new Set(["bidderCode","bidderRequestId","uniquePbsTid","bids","timeout"]),H=(0,O.x)({processors:R.X,context:{netRevenue:!0},imp:function(e,n,t){Object.assign(t,n.pbsData);var r=e(n,t);if((n.bids||[]).forEach((function(e){e.ortb2Imp&&Object.keys(e.ortb2Imp).length>0&&(0,B.N)(r,"ext.prebid.imp.".concat(e.bidder),e.ortb2Imp)})),Object.values(j.E).some((function(e){return r[e]})))return r.secure=t.s2sBidRequest.s2sConfig.secure,r},request:function(e,n,t,r){if(n.length){var i=r.s2sBidRequest,o=r.requestedBidders,d=r.eidPermissions,c=e(n,t,r);return c.tmax=i.s2sConfig.timeout,[c.app,c.dooh,c.site].forEach((function(e){var n;!e||null!==(n=e.publisher)&&void 0!==n&&n.id||(0,B.N)(e,"publisher.id",i.s2sConfig.accountId)})),(0,s.kJ)(d)&&d.length>0&&(o&&(0,s.kJ)(o)&&(d=d.map((function(e){return Z(Z({},e),{},{bidders:e.bidders.filter((function(e){return o.includes(e)}))})}))),(0,B.N)(c,"ext.prebid.data.eidpermissions",d)),r.transmitTids||(0,B.N)(c,"ext.prebid.createtids",!1),c}(0,s.H)("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")},bidResponse:function(e,n,t){var r,i,o=t.actualBidRequests.get(t.seatbid.seat);null==o&&(o=t.actualBidRequests.get(null)),o&&Object.assign(t,{bidRequest:o,bidderRequest:t.actualBidderRequests.find((function(e){return e.bidderCode===o.bidder}))});var s=e(n,t);return s.requestBidder=null===(r=o)||void 0===r?void 0:r.bidder,null!==(i=s.native)&&void 0!==i&&i.ortb&&(s.adm=s.native.ortb),s.requestTimestamp=t.requestTimestamp,{bid:Object.assign((0,q.m)(c.Q_.Q,{src:c.os.YZ,bidId:o?o.bidId||o.bid_Id:null,transactionId:t.adUnit.transactionId,auctionId:t.bidderRequest.auctionId}),s),adUnit:t.adUnit.code}},overrides:(r={},(0,C.Z)(r,S.DZ,{id:function(e,n,t,r){n.id=r.impId},params:function(e,n,t,r){var i,o=r.s2sBidRequest.s2sConfig.adapterOptions,s=N(r.actualBidRequests.values());try{for(s.s();!(i=s.n()).done;){var d=i.value;(0,P.j)(n,d,r,r),o&&o[d.bidder]&&Object.assign(n.ext.prebid.bidder[d.bidder],o[d.bidder])}}catch(e){s.e(e)}finally{s.f()}},bidfloor:function(e,n,t,r){var i,o,s=(0,A.LT)((0,T.fe)((function(e){return[e.bidfloor,e.bidfloorcur]}))),d=N(r.actualBidRequests.values());try{for(d.s();!(o=d.n()).done;){var c=o.value,a={};if(e(a,c,r),null==a.bidfloorcur||null==a.bidfloor){i=null;break}i=null==i?a:s(i,a)}}catch(e){d.e(e)}finally{d.f()}null!=i&&Object.assign(n,i)}}),(0,C.Z)(r,S.Z,{fpd:function(e,n,t,r){var i,o,d;(r.transmitTids&&(0,B.N)(n,"source.tid",t.auctionId),(0,s.Ee)(n,null===(i=r.s2sBidRequest.ortb2Fragments)||void 0===i?void 0:i.global),r.s2sBidRequest.s2sConfig.extPrebid&&"object"===(0,h.Z)(r.s2sBidRequest.s2sConfig.extPrebid))&&(0,B.N)(n,"ext.prebid",(0,s.Ee)((null===(d=n.ext)||void 0===d?void 0:d.prebid)||{},r.s2sBidRequest.s2sConfig.extPrebid));r.getRedactor().ortb2(n);var c=Object.entries((null===(o=r.s2sBidRequest.ortb2Fragments)||void 0===o?void 0:o.bidder)||{}).filter((function(e){var n=(0,y.Z)(e,1)[0],t=r.s2sBidRequest.s2sConfig.bidders;return r.s2sBidRequest.s2sConfig.allowUnknownBidderCodes||t&&t.includes(n)})).map((function(e){var n=(0,y.Z)(e,2),t=n[0],i=n[1];return{bidders:[t],config:{ortb2:r.getRedactor(t).ortb2(i)}}}));c.length&&(0,B.N)(n,"ext.prebid.bidderconfig",c)},extPrebidAliases:function(e,n,t,r){r.actualBidderRequests.forEach((function(t){return e(n,t,r)}))},sourceExtSchain:function(e,n,t,r){var i,o=(0,d.Z)(n,"ext.prebid.schains")||[],s=new Set(o.flatMap((function(e){return e.bidders})));o=Object.values(o.concat(r.actualBidderRequests.filter((function(e){return!s.has(e.bidderCode)})).map((function(e){return{bidders:[e.bidderCode],schain:(0,d.Z)(e,"bids.0.schain")}}))).filter((function(e){var n=e.bidders,t=e.schain;return(null==n?void 0:n.length)>0&&t})).reduce((function(e,n){var t=n.bidders,r=n.schain,o=JSON.stringify(r);return e.hasOwnProperty(o)||(e[o]={bidders:new Set,schain:r}),t.forEach((function(n){return e[o].bidders.add(n)})),(null==i||e[o].bidders.size>i.bidders.size)&&(i=e[o]),e}),{})).map((function(e){var n=e.bidders,t=e.schain;return{bidders:Array.from(n),schain:t}})),null!=i&&(0,B.N)(n,"source.ext.schain",i.schain),o.length&&(0,B.N)(n,"ext.prebid.schains",o)}}),(0,C.Z)(r,S.YC,{serverSideStats:function(e,n,t,r){r.actualBidderRequests.forEach((function(i){return e(n,t,Z(Z({},r),{},{bidderRequest:i,bidRequests:i.bids}))}))},fledgeAuctionConfigs:function(e,n,t,r){var i=Object.values(r.impContext).flatMap((function(e){return(e.fledgeConfigs||[]).map((function(n){return{adUnitCode:e.adUnit.code,config:n.config}}))}));i.length>0&&(n.fledgeAuctionConfigs=i)}}),r)});var J,M,F=t(9128),z=u.vc.getConfig,W=c.os.YZ,Y=0,V={bidders:Object.freeze([]),timeout:1e3,syncTimeout:1e3,maxBids:1,adapter:"prebidServer",allowUnknownBidderCodes:!1,adapterOptions:{},syncUrlModifier:{},ortbNative:{eventtrackers:[{event:1,methods:[1,2]}]}};function G(e){if(e){var n=Array.isArray(e)?e:[e],t=[];return n.every((function(n,r,i){!function(e){["endpoint","syncEndpoint"].forEach((function(n){if((0,s.d8)(e[n])){var t=e[n];e[n]={p1Consent:t,noP1Consent:t}}!(0,s.PO)(e[n])||e[n].p1Consent&&e[n].noP1Consent||["p1Consent","noP1Consent"].forEach((function(t){e[n][t]||(0,s.yN)("s2sConfig.".concat(n,".").concat(t," not defined.  PBS request will be skipped in some P1 scenarios."))}))}))}(e);var o=function(e){if(e.defaultVendor){var n=e.defaultVendor,t=Object.keys(e);if(!b[n])return(0,s.H)("Incorrect or unavailable prebid server default vendor option: "+n),!1;Object.keys(b[n]).forEach((function(r){V[r]!==e[r]&&(0,l.q9)(t,r)||(e[r]=b[n][r])}))}return e.enabled="boolean"==typeof e.enabled&&e.enabled}(n);if(!1!==o){var d=function(e){var n=Object.keys(e);if(["accountId","endpoint"].filter((function(e){return!(0,l.q9)(n,e)&&((0,s.H)(e+" missing in server to server config"),!0)})).length>0)return!1}(n);if(!1!==d)return Array.isArray(n.bidders)&&(i[r].bidders=n.bidders.filter((function(e){return-1===t.indexOf(e)&&(t.push(e),!0)}))),!0}return(0,s.yN)("prebidServer: s2s config is disabled"),!1}))?J=n:void 0}}function L(e,n,t,r,i){if(J.length!==Y){Y++;var o={},d=z("userSync.filterSettings");if(d){var c=d.all,a=d.iframe||c,u=d.image||c;a&&(o=Object.assign({iframe:a},o)),u&&(o=Object.assign({image:u},o))}var f={uuid:(0,s.DO)(),bidders:e,account:i.accountId,filterSettings:o},p=i.userSyncLimit;(0,s.hj)(p)&&p>0&&(f.limit=p),n&&(f.gdpr=n.gdprApplies?1:0,!1!==n.gdprApplies&&(f.gdpr_consent=n.consentString)),t&&(f.us_privacy=t),r&&(f.gpp_sid=r.applicableSections.join(),f.gpp=r.gppString),"boolean"==typeof i.coopSync&&(f.coopSync=i.coopSync);var l=JSON.stringify(f);(0,v.hj)($(i.syncEndpoint,n),(function(e){try{Q((e=JSON.parse(e)).bidder_status,i)}catch(e){(0,s.H)(e)}}),l,{contentType:"text/plain",withCredentials:!0})}}function Q(e,n){if(0!==e.length){var t=e.shift();t.no_cookie?function(e,n,t,r,i){i.syncUrlModifier&&"function"==typeof i.syncUrlModifier[t]&&(n=i.syncUrlModifier[t](e,n,t));!function(e,n,t,r,i){n?"image"===e||"redirect"===e?((0,s.ji)('Invoking image pixel user sync for bidder: "'.concat(t,'"')),(0,s.hq)(n,r,i)):"iframe"===e?((0,s.ji)('Invoking iframe user sync for bidder: "'.concat(t,'"')),(0,s.Vs)(n,r,i)):((0,s.H)('User sync type "'.concat(e,'" not supported for bidder: "').concat(t,'"')),r()):((0,s.H)('No sync url for bidder "'.concat(t,'": ').concat(n)),r())}(e,n,t,r,i.syncTimeout)}(t.usersync.type,t.usersync.url,t.bidder,Q.bind(null,e,n),n):Q(e,n)}}u.vc.setDefaults({s2sConfig:V}),z("s2sConfig",(function(e){return G(e.s2sConfig)}));var K={};function X(e){var n,t,r=function(e,n){if([e,n].every(s.d8))return K["".concat(e).concat(n)]}(e.auctionId,e.adId);(0,s.d8)(r)&&((0,s.ji)('Invoking image pixel for wurl on BID_WIN: "'.concat(r,'"')),(0,s.hq)(r),n=e.auctionId,t=e.adId,[n,t].every(s.d8)&&(K["".concat(n).concat(t)]=void 0))}function $(e,n){return(0,m.h)(n)?e.p1Consent:e.noP1Consent}function ee(e){var n,t,r;return Array.isArray(e)&&e.length>0&&(n=e[0].gdprConsent,t=e[0].uspConsent,r=e[0].gppConsent),{gdprConsent:n,uspConsent:t,gppConsent:r}}var ne=(0,g.z3)("sync",(function(e,n,t,r){var i=r.onResponse,o=r.onError,d=r.onBid,c=r.onFledge,f=ee(n).gdprConsent,p=(0,s.I8)(e.ad_units),b=p.map((function(e){return e.bids.map((function(e){return e.bidder})).filter(s.tT)})).reduce(s.xH,[]).filter(s.tT),v=e.metrics.measureTime("buildRequests",(function(){return function(e,n,t,r,i){var o,d,c=(0,s.AB)(),f=new Set,p=[],l=(0,a.O6)(e.s2sConfig),b=(o=(0,E.hb)(l),d={},function(e){return null==e?o:(d.hasOwnProperty(e)||(d[e]=(0,E.hb)((0,x.T)(I.UL,e))),d[e])});(t=t.map((function(e){return b().bidRequest(e)}))).forEach((function(e){var r=new Map;t.bids=e.bids.map((function(e){return b(e.bidder).bidRequest(e)})),e.bids.forEach((function(t){null!=t.mediaTypes&&(0,s.yN)("Prebid Server adapter does not (yet) support bidder-specific mediaTypes for the same adUnit. Size mapping configuration will be ignored for adUnit: ".concat(e.code,", bidder: ").concat(t.bidder)),r.set(t.bidder,(0,s.zE)(t.bid_id,n))}));for(var i=e.code,o=1;f.has(i);)o++,i="".concat(e.code,"-").concat(o);f.add(i),p.push(Z(Z(Z({},e),{},{adUnitCode:e.code},(0,s.iG)(r.values().next().value||{},["userId","userIdAsEids","schain"])),{},{pbsData:{impId:i,actualBidRequests:r,adUnit:e}}))}));var v=Z(Z({},Object.fromEntries(Object.entries(n[0]).filter((function(e){var n=(0,y.Z)(e,1)[0];return!_.has(n)})))),{},{fledgeEnabled:n.some((function(e){return e.fledgeEnabled}))});return H.toORTB({bidderRequest:v,bidRequests:p,context:{currency:u.vc.getConfig("currency.adServerCurrency")||"USD",ttl:e.s2sConfig.defaultTtl||60,requestTimestamp:c,s2sBidRequest:e,requestedBidders:r,actualBidderRequests:n,eidPermissions:i,nativeRequest:e.s2sConfig.ortbNative,getRedactor:b,transmitTids:(0,w.xD)(k.Jt,l)}})}(e,n,p,b,M)})),g=v&&JSON.stringify(v);(0,s.PN)("BidRequest: "+g);var m=$(e.s2sConfig.endpoint,f);if(v&&g&&m){var h=e.metrics.startTiming("net");t(m,{success:function(n){var t;h();try{t=JSON.parse(n);var r=e.metrics.measureTime("interpretResponse",(function(){return function(e,n){return H.fromORTB({response:e,request:n})}(t,v)})),o=r.bids,a=r.fledgeAuctionConfigs;o.forEach(d),a&&a.forEach(c)}catch(e){(0,s.H)(e)}!t||t.status&&(0,l.q9)(t.status,"Error")?((0,s.H)("error parsing response: ",t?t.status:"not valid JSON"),i(!1,b)):i(!0,b,t)},error:function(){h(),o.apply(this,arguments)}},g,{contentType:"text/plain",withCredentials:!0,browsingTopics:(0,w.xD)(k.oK,(0,a.O6)(e.s2sConfig))})}else(0,s.H)("PBS request not made.  Check endpoints.")}),"processPBSRequest");(0,s.EE)().setEidPermissions=function(e){M=e},a.ZP.registerBidAdapter(new function(){var e=new o.Z("prebidServer");return e.callBids=function(e,n,t,r,i){var o=e.metrics=(0,F.Bf)((0,d.Z)(n,"0.metrics")).newMetrics().renameWith((function(n){return["adapter.s2s.".concat(n),"adapters.s2s.".concat(e.s2sConfig.defaultVendor,".").concat(n)]}));r=o.startTiming("total").stopBefore(r),n.forEach((function(e){return(0,F.Bf)(e.metrics).join(o,{continuePropagation:!1})}));var l=ee(n),b=l.gdprConsent,v=l.uspConsent,g=l.gppConsent;if(Array.isArray(J)){if(e.s2sConfig&&e.s2sConfig.syncEndpoint&&$(e.s2sConfig.syncEndpoint,b))L(e.s2sConfig.bidders.map((function(e){return a.ZP.aliasRegistry[e]||e})).filter((function(e,n,t){return t.indexOf(e)===n})),b,v,g,e.s2sConfig);ne(e,n,i,{onResponse:function(t,i,s){t&&n.forEach((function(e){return p.j8(c.FP.BIDDER_DONE,e)})),function(e,n){var t,r;return(null==e||null===(t=e.extPrebid)||void 0===t?void 0:t.returnallbidstatus)&&(null==n||null===(r=n.ext)||void 0===r?void 0:r.seatnonbid)}(e.s2sConfig,s)&&p.j8(c.FP.SEAT_NON_BID,{seatnonbid:s.ext.seatnonbid,auctionId:n[0].auctionId,requestedBidders:i,response:s,adapterMetrics:o}),r(),function(e,n,t,r){e.forEach((function(e){var i=a.ZP.getBidAdapter(e);i&&i.registerSyncs&&u.vc.runWithBidder(e,i.registerSyncs.bind(i,[],n,t,r))}))}(i,b,v,g)},onError:function(e,t){(0,s.H)("Prebid server call failed: '".concat(e,"'"),t),n.forEach((function(e){return p.j8(c.FP.BIDDER_ERROR,{error:t,bidderRequest:e})})),r()},onBid:function(n){var r,i,o,d=n.adUnit,a=n.bid,u=a.metrics=e.metrics.fork().renameWith();u.checkpoint("addBidResponse"),null!=a.requestId&&null!=a.requestBidder||e.s2sConfig.allowUnknownBidderCodes?u.measureTime("addBidResponse.validate",(function(){return(0,f.JY)(d,a)}))?(t(d,a),a.pbsWurl&&(r=a.auctionId,i=a.adId,o=a.pbsWurl,[r,i].every(s.d8)&&(K["".concat(r).concat(i)]=o))):t.reject(d,a,c.Gw.UI):((0,s.yN)("PBS adapter received bid from unknown bidder (".concat(a.bidder,"), but 's2sConfig.allowUnknownBidderCodes' is not set. Ignoring bid.")),t.reject(d,a,c.Gw.Dg))},onFledge:function(e){var t=e.adUnitCode,r=e.config;(0,f.BF)(n[0].auctionId,t,r)}})}},p.on(c.FP.BID_WON,X),Object.assign(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,type:W})},"prebidServer"),(0,i.z)("prebidServerBidAdapter")},6372:function(e,n,t){t.d(n,{DZ:function(){return s},Px:function(){return d},TP:function(){return a},YC:function(){return c},Z:function(){return o},f8:function(){return b},fP:function(){return v},gm:function(){return r},md:function(){return u}});var r=["request","imp","bidResponse","response"],i=["default","pbs"],o=r[0],s=r[1],d=r[2],c=r[3],a=i[0],u=i[1],f=new Set(r);var p,l=(p={},{registerOrtbProcessor:function(e){var n=e.type,t=e.name,i=e.fn,o=e.priority,s=void 0===o?0:o,d=e.dialects,c=void 0===d?[a]:d;if(!f.has(n))throw new Error("ORTB processor type must be one of: ".concat(r.join(", ")));c.forEach((function(e){p.hasOwnProperty(e)||(p[e]={}),p[e].hasOwnProperty(n)||(p[e][n]={}),p[e][n][t]={priority:s,fn:i}}))},getProcessors:function(e){return p[e]||{}}}),b=l.registerOrtbProcessor,v=l.getProcessors},7673:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(265);function i(e){return null==e||!e.gdprApplies||!0===(0,r.Z)(e,"vendorData.purpose.consents.1")}}},function(e){e.O(0,[279,951,635],(function(){return n=7497,e(e.s=n);var n}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[126],{5817:function(e,t,r){var a=r(3324),i=r(9062),n=r(4942),s=r(1002),o=r(8640),d=r(4358),p=r(265),c=r(6475),l=r(4699),u=r(4679),m=r(3193),g=r(5706),f=r(5975),h=r(5644),b=r(5370);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w="pubmatic",x="PubMatic: ",P="USD",N=void 0,O="https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),I={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},T="number",k="string",z="boolean",C="array",S={mimes:C,minduration:T,maxduration:T,startdelay:T,playbackmethod:C,api:C,protocols:C,w:T,h:T,battr:C,linearity:T,placement:T,plcmt:T,minbitrate:T,maxbitrate:T,skip:T},E=1,j=3,_={1:"PMP",5:"PREF",6:"PMPG"},R={bootstrapPlayer:function(e){var t={code:e.adUnitCode};if(e.vastXml?t.vastXml=e.vastXml:e.vastUrl&&(t.vastUrl=e.vastUrl),e.vastXml||e.vastUrl){for(var r,a=R.getRendererId("pubmatic",e.rendererCode),i=document.getElementById(e.adUnitCode),n=0;n<window.bluebillywig.renderers.length;n++)if(window.bluebillywig.renderers[n]._id===a){r=window.bluebillywig.renderers[n];break}r?r.bootstrap(t,i):(0,d.yN)("".concat(x,": Couldn't find a renderer with ").concat(a))}else(0,d.yN)("".concat(x,": No vastXml or vastUrl on bid, bailing..."))},newRenderer:function(e,t){var r=O.replace("$RENDERER",e),a=g.Th.install({url:r,loaded:!1,adUnitCode:t});try{a.setRender(R.outstreamRender)}catch(e){(0,d.yN)("".concat(x,": Error tying to setRender on renderer"),e)}return a},outstreamRender:function(e){e.renderer.push((function(){R.bootstrapPlayer(e)}))},getRendererId:function(e,t){return"".concat(e,"-").concat(t)}},M=[u.Mk,u.pX,u.B5],U=0,q=!1,Z=["pubmatic"],A=["all"];function J(e,t){if(!(0,d.d8)(t))return t&&(0,d.yN)("PubMatic: Ignoring param key: "+e+", expects string-value, found "+(0,s.Z)(t)),N;switch(e){case"pmzoneid":return t.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(t)||N;case"yob":return parseInt(t)||N;default:return t}}function B(e){var t;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(t=e.params.adSlot,(0,d.d8)(t)?t.replace(/^\s+/g,"").replace(/\s+$/g,""):(t&&(0,d.yN)("pubmatic: adSlot must be a string. Ignoring adSlot"),""));var r=e.params.adSlot,a=r.split(":");if(r=a[0],2==a.length&&(e.params.adUnitIndex=a[1]),a=r.split("@"),e.params.adUnit=a[0],a.length>1){if(2!=(a=a[1].split("x")).length)return void(0,d.yN)("PubMatic: AdSlot Error: adSlot not in required format");e.params.width=parseInt(a[0],10),e.params.height=parseInt(a[1],10)}else if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(u.Mk)&&e.mediaTypes.banner.hasOwnProperty("sizes")){for(var i=0,n=[];i<e.mediaTypes.banner.sizes.length;i++)2===e.mediaTypes.banner.sizes[i].length&&n.push(e.mediaTypes.banner.sizes[i]);e.mediaTypes.banner.sizes=n,e.mediaTypes.banner.sizes.length>=1&&(e.params.width=e.mediaTypes.banner.sizes[0][0],e.params.height=e.mediaTypes.banner.sizes[0][1],e.mediaTypes.banner.sizes=e.mediaTypes.banner.sizes.splice(1,e.mediaTypes.banner.sizes.length-1))}}function X(e,t,r){var a,i="Ignoring param key: "+e+", expects "+r+", found "+(0,s.Z)(t);switch(r){case z:a=d.jn;break;case T:a=d.hj;break;case k:a=d.d8;break;case C:a=d.kJ}return a(t)?t:((0,d.yN)(x+i),N)}var D={desc:"desc",desc2:"desc2",body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl",saleprice:"saleprice",displayurl:"displayurl"},F=h.oF,L=h.zA,H=h.FY,V=h.s$,$=Object.values(D);function W(e){var t;if(e.ortb){e=e.ortb,t=v(v({ver:"1.2"},e),{},{assets:[]});var r=e.assets,a=function(e){return e.title||e.img||e.data||e.video};if(r.length<1||!r.some((function(e){return a(e)})))return(0,d.yN)("".concat(x,": Native assets object is empty or contains some invalid object")),q=!0,t;r.forEach((function(e){var r=e;r.img&&(r.img.type==j?(r.w=r.w||r.width||(r.sizes?r.sizes[0]:N),r.h=r.h||r.height||(r.sizes?r.sizes[1]:N),r.wmin=r.wmin||r.minimumWidth||(r.minsizes?r.minsizes[0]:N),r.hmin=r.hmin||r.minimumHeight||(r.minsizes?r.minsizes[1]:N)):r.img.type==E&&(r.w=r.w||r.width||(r.sizes?r.sizes[0]:N),r.h=r.h||r.height||(r.sizes?r.sizes[1]:N))),r&&void 0!==r.id&&a(r)&&t.assets.push(r)}))}else t=function(e){if(!e&&!(0,d.PO)(e))return(0,d.yN)("".concat(x,": Native assets object is empty or not an object: ").concat(e)),void(q=!0);var t={ver:"1.2",assets:[]};for(var r in e)if(!L.includes(r))if(H.hasOwnProperty(r)||$.includes(r)){var a=e[r],i=0;a.required&&(0,d.jn)(a.required)&&(i=Number(a.required));var n={id:t.assets.length,required:i};if(r in D)n.data={type:V[D[r]]},(a.len||a.length)&&(n.data.len=a.len||a.length),a.ext&&(n.data.ext=a.ext);else if("icon"===r||"image"===r){if(n.img={type:"icon"===r?F.ICON:F.MAIN},a.aspect_ratios)if((0,d.kJ)(a.aspect_ratios))if(a.aspect_ratios.length){var s=a.aspect_ratios[0],o=s.min_width,p=s.min_height;(0,d.U)(o)&&(0,d.U)(p)?(n.img.wmin=o,n.img.hmin=p):(0,d.yN)("".concat(x,": image.aspect_ratios min_width or min_height are invalid: ").concat(o,", ").concat(p));var c=a.aspect_ratios.filter((function(e){return e.ratio_width&&e.ratio_height})).map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}));c.length>0&&(n.img.ext={aspectratios:c})}else(0,d.yN)("".concat(x,": image.aspect_ratios was passed, but it's empty: ").concat(a.aspect_ratios));else(0,d.yN)("".concat(x,": image.aspect_ratios was passed, but it's not a an array: ").concat(a.aspect_ratios));n.img.w=a.w||a.width,n.img.h=a.h||a.height,n.img.wmin=a.wmin||a.minimumWidth||(a.minsizes?a.minsizes[0]:N),n.img.hmin=a.hmin||a.minimumHeight||(a.minsizes?a.minsizes[1]:N),a.sizes&&(2===a.sizes.length&&(0,d.U)(a.sizes[0])&&(0,d.U)(a.sizes[1])?((0,d.PN)("".concat(x,": if asset.sizes exist, by OpenRTB spec we should remove wmin and hmin")),n.img.w=a.sizes[0],n.img.h=a.sizes[1],delete n.img.hmin,delete n.img.wmin):(0,d.yN)("".concat(x,": image.sizes was passed, but its value is not an array of integers: ").concat(a.sizes))),a.ext&&(n.img.ext=a.ext),a.mimes&&(n.img.mimes=a.mimes)}else"title"===r?(n.title={len:a.len||a.length||140},a.ext&&(n.title.ext=a.ext)):"ext"===r&&(n.ext=a,delete n.required);t.assets.push(n)}else(0,d.yN)("".concat(x,": Unrecognized native asset code: ").concat(r,". Asset will be ignored."));return t.assets.length<1?((0,d.yN)("".concat(x,": Could not find any valid asset")),void(q=!0)):t}(e);return t}function G(e){var t,r=e.mediaTypes.banner.sizes,a=[];if(r!==N&&(0,d.kJ)(r)){if(t={},e.params.width||e.params.height)t.w=e.params.width,t.h=e.params.height;else{if(0===r.length)return t=N,(0,d.yN)("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),t;t.w=parseInt(r[0][0],10),t.h=parseInt(r[0][1],10),r=r.splice(1,r.length-1)}r.length>0&&(a=[],r.forEach((function(e){e.length>1&&a.push({w:e[0],h:e[1]})})),a.length>0&&(t.format=a)),t.pos=0,t.topframe=(0,d.yL)()?0:1}else(0,d.yN)("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),t=N;return t}function Y(e){var t,r=(0,d.Ee)((0,p.Z)(e.mediaTypes,"video"),e.params.video);if(r!==N){for(var a in t={},function(e,t){(0,p.Z)(e,"placement")||(0,d.yN)("Video.Placement param missing for "+t)}(r,e.adUnitCode),S)r.hasOwnProperty(a)&&(t[a]=X(a,r[a],S[a]));(0,d.kJ)(e.mediaTypes.video.playerSize[0])?(t.w=parseInt(e.mediaTypes.video.playerSize[0][0],10),t.h=parseInt(e.mediaTypes.video.playerSize[0][1],10)):(0,d.hj)(e.mediaTypes.video.playerSize[0])&&(t.w=parseInt(e.mediaTypes.video.playerSize[0],10),t.h=parseInt(e.mediaTypes.video.playerSize[1],10))}else t=N,(0,d.yN)("PubMatic: Error: Video config params missing for adunit: "+e.params.adUnit+" with mediaType set as video. Ignoring video impression in the adunit.");return t}function K(e,t){var r,a,i={},n={},o=e.hasOwnProperty("sizes")?e.sizes:[],l="",g=[],f=null==t?void 0:t.fledgeEnabled;if(function(e,t){t.params.deals&&((0,d.kJ)(t.params.deals)?t.params.deals.forEach((function(t){(0,d.d8)(t)&&t.length>3?(e.pmp||(e.pmp={private_auction:0,deals:[]}),e.pmp.deals.push({id:t})):(0,d.yN)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: "+t)})):(0,d.yN)("PubMatic: Error: bid.params.deals should be an array of strings."))}(i={id:e.bidId,tagid:e.params.adUnit||void 0,bidfloor:J("kadfloor",e.params.kadfloor),secure:1,ext:{pmZoneId:J("pmzoneid",e.params.pmzoneid)},bidfloorcur:e.params.currency?J("currency",e.params.currency):P},e),function(e,t){var r,a="";if(t.params.dctr)if(a=t.params.dctr,(0,d.d8)(a)&&a.length>0){var i=a.split("|");a="",i.forEach((function(e){a+=e.length>0?e.trim()+"|":""})),r=a.length,"|"===a.substring(r,r-1)&&(a=a.substring(0,r-1)),e.ext.key_val=a.trim()}else(0,d.yN)("PubMatic: Ignoring param : dctr with value : "+a+", expects string-value, found empty or non-string value")}(i,e),function(e,t){var r=t.rtd&&t.rtd.jwplayer&&t.rtd.jwplayer.targeting||void 0,a="";if(void 0!==r&&""!==r&&r.hasOwnProperty("segments")){var i,n=r.segments.length;a+="jw-id="+r.content.id;for(var s=0;s<n;s++)a+="|jw-"+r.segments[s]+"=1";(i=e.ext)&&void 0===i.key_val?i.key_val=a:i.key_val+="|"+a}}(i,e),e.hasOwnProperty("mediaTypes"))for(l in e.mediaTypes)switch(l){case u.Mk:(r=G(e))!==N&&(i.banner=r);break;case u.B5:n.request=JSON.stringify(W(e.nativeParams)),q?((0,d.yN)("PubMatic: Error: Error in Native adunit "+e.params.adUnit+". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."),q=!1):i.native=n;break;case u.pX:(a=Y(e))!==N&&(i.video=a)}else r={pos:0,w:e.params.width,h:e.params.height,topframe:(0,d.yL)()?0:1},(0,d.kJ)(o)&&o.length>1&&((o=o.splice(1,o.length-1)).forEach((function(e){g.push({w:e[0],h:e[1]})})),r.format=g),i.banner=r;return function(e,t){var r=v({},(0,p.Z)(t,"ortb2Imp.ext.data"));Object.keys(r).forEach((function(t){"pbadslot"===t?"string"==typeof r[t]&&r[t]&&(0,c.N)(e,"ext.data.pbadslot",r[t]):"adserver"===t?["name","adslot"].forEach((function(t){var a=(0,p.Z)(r,"adserver.".concat(t));"string"==typeof a&&a&&((0,c.N)(e,"ext.data.adserver.".concat(t.toLowerCase()),a),"adslot"===t&&(0,c.N)(e,"ext.dfp_ad_unit_code",a))})):(0,c.N)(e,"ext.data.".concat(t),r[t])}))}(i,e),function(e,t){var r=-1;"function"!=typeof t.getFloor||m.vc.getConfig("pubmatic.disableFloors")||[u.Mk,u.pX,u.B5].forEach((function(a){if(e.hasOwnProperty(a)){var i=[];"banner"===a&&(e[a].w&&e[a].h&&i.push([e[a].w,e[a].h]),(0,d.kJ)(e[a].format)&&e[a].format.forEach((function(e){return i.push([e.w,e.h])}))),0===i.length&&i.push("*"),i.forEach((function(i){var n=t.getFloor({currency:e.bidfloorcur,mediaType:a,size:i});if((0,d.PN)(x,"floor from floor module returned for mediatype:",a," and size:",i," is: currency",n.currency,"floor",n.floor),"object"===(0,s.Z)(n)&&n.currency===e.bidfloorcur&&!isNaN(parseInt(n.floor))){var o=parseFloat(n.floor);(0,d.PN)(x,"floor from floor module:",o,"previous floor value",r,"Min:",Math.min(o,r)),r=-1===r?o:Math.min(o,r),(0,d.PN)(x,"new floor value:",r)}}))}}));e.bidfloor&&((0,d.PN)(x,"floor from floor module:",r,"impObj.bidfloor",e.bidfloor,"Max:",Math.max(r,e.bidfloor)),r=Math.max(r,e.bidfloor));e.bidfloor=!isNaN(r)&&r>0?r:N,(0,d.PN)(x,"new impObj.bidfloor value:",e.bidfloor)}(i,e),function(e,t,r){if(r){var a,i;e.ext=e.ext||{},void 0!==(null==t||null===(a=t.ortb2Imp)||void 0===a||null===(i=a.ext)||void 0===i?void 0:i.ae)&&(e.ext.ae=t.ortb2Imp.ext.ae)}else{var n;null!==(n=e.ext)&&void 0!==n&&n.ae&&delete e.ext.ae}}(i,e,f),i.hasOwnProperty(u.Mk)||i.hasOwnProperty(u.B5)||i.hasOwnProperty(u.pX)?i:N}function Q(e,t){(t=t.filter((function(e){return"string"==typeof e||((0,d.yN)("PubMatic: acat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,t,r){return r.indexOf(e)===t}))).length>0&&((0,d.yN)("PubMatic: acat: Selected: ",t),e.ext.acat=t)}function ee(e){return!0===(0,d.kJ)(e)&&e.length>0}var te={code:w,gvlid:76,supportedMediaTypes:[u.Mk,u.pX,u.B5],isBidRequestValid:function(e){if(e&&e.params){if(!(0,d.d8)(e.params.publisherId))return(0,d.yN)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1;if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(u.pX)){var t=(0,p.Z)(e.mediaTypes,"video.mimes"),r=(0,p.Z)(e,"params.video.mimes");if(!1===ee(t)&&!1===ee(r))return(0,d.yN)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1;if(!e.mediaTypes[u.pX].hasOwnProperty("context"))return(0,d.H)("".concat(x,": no context specified in bid. Rejecting bid: "),e),!1;if("outstream"===e.mediaTypes[u.pX].context&&!(0,d.d8)(e.params.outstreamAU)&&!e.hasOwnProperty("renderer")&&!e.mediaTypes[u.pX].hasOwnProperty("renderer"))return e.mediaTypes.hasOwnProperty(u.Mk)||e.mediaTypes.hasOwnProperty(u.B5)?(delete e.mediaTypes[u.pX],(0,d.yN)("".concat(x,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '),e),!0):((0,d.H)("".concat(x,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '),e),!1)}return!0}return!1},buildRequests:function(e,t){var r,a,n,o,l,g,h,b,y,w;t&&t.refererInfo&&(w=t.refererInfo);var x,O=function(e){return{pageURL:(null==e?void 0:e.page)||window.location.href,refURL:(null==e?void 0:e.ref)||window.document.referrer}}(w),T=function(e){return{id:""+(new Date).getTime(),at:1,cur:[P],imp:[],site:{page:e.pageURL,ref:e.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}}}(O),k="",z=[],C=[],S=[];if(e.forEach((function(e){var r,a;if((x=(0,d.I8)(e)).params.adSlot=x.params.adSlot||"",B(x),x.mediaTypes&&x.mediaTypes.hasOwnProperty("video")||x.params.hasOwnProperty("video"));else if(!(x.hasOwnProperty("mediaTypes")&&x.mediaTypes.hasOwnProperty(u.B5)||0!==x.params.width||0!==x.params.height))return void(0,d.yN)("PubMatic: Skipping the non-standard adslot: ",x.params.adSlot,JSON.stringify(x));O.pubId=O.pubId||x.params.publisherId,(O=function(e,t){var r,a,i;for(r in t.kadpageurl||(t.kadpageurl=t.pageURL),I)I.hasOwnProperty(r)&&(a=e[r])&&(i=I[r],"object"===(0,s.Z)(i)&&(a=i.f(a,t)),(0,d.d8)(a)?t[r]=a:(0,d.yN)("PubMatic: Ignoring param : "+r+" with value : "+I[r]+", expects string-value, found "+(0,s.Z)(a)));return t}(x.params,O)).transactionId=null===(r=x.ortb2Imp)||void 0===r||null===(a=r.ext)||void 0===a?void 0:a.tid,""===k?k=x.params.currency||N:x.params.hasOwnProperty("currency")&&k!==x.params.currency&&(0,d.yN)("PubMatic: Currency specifier ignored. Only one currency permitted."),x.params.currency=k,x.params.hasOwnProperty("dctr")&&(0,d.d8)(x.params.dctr)&&z.push(x.params.dctr),x.params.hasOwnProperty("bcat")&&(0,d.kJ)(x.params.bcat)&&(C=C.concat(x.params.bcat)),x.params.hasOwnProperty("acat")&&(0,d.kJ)(x.params.acat)&&(S=S.concat(x.params.acat));var i=K(x,t);i&&T.imp.push(i)})),0!=T.imp.length){T.site.publisher.id=O.pubId.trim(),U=O.pubId.trim(),T.ext.wrapper={},T.ext.wrapper.profile=parseInt(O.profId)||N,T.ext.wrapper.version=parseInt(O.verId)||N,T.ext.wrapper.wiid=O.wiid||t.auctionId,T.ext.wrapper.wv="prebid_prebid_8.19.0",T.ext.wrapper.transactionId=O.transactionId,T.ext.wrapper.wp="pbjs";var E,j,_=t?f.S.get(t.bidderCode,"allowAlternateBidderCodes"):void 0;if(void 0!==_){if(T.ext.marketplace={},t&&1==_){var R=f.S.get(t.bidderCode,"allowedAlternateBidderCodes");(0,d.kJ)(R)?(R=R.map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e})).filter(d.tT),Z=R.includes("*")?A:[].concat((0,i.Z)(Z),(0,i.Z)(R))):Z=A}T.ext.marketplace.allowedbidders=Z.filter(d.tT)}T.user.gender=O.gender?O.gender.trim():N,T.user.geo={},T.user.yob=J("yob",O.yob),T.site.page=O.kadpageurl.trim()||T.site.page.trim(),T.site.domain=(E=T.site.page,(j=document.createElement("a")).href=E,j.hostname),"object"===(0,s.Z)(m.vc.getConfig("content"))&&(T.site.content=m.vc.getConfig("content")),"object"===(0,s.Z)(m.vc.getConfig("device"))&&(T.device=Object.assign(T.device,m.vc.getConfig("device"))),T.device.language=T.device.language&&T.device.language.split("-")[0],(0,c.N)(T,"source.tid",null==t||null===(r=t.ortb2)||void 0===r||null===(a=r.source)||void 0===a?void 0:a.tid),-1!==window.location.href.indexOf("pubmaticTest=true")&&(T.test=1),e[0].schain&&(0,c.N)(T,"source.ext.schain",e[0].schain),t&&t.gdprConsent&&((0,c.N)(T,"user.ext.consent",t.gdprConsent.consentString),(0,c.N)(T,"regs.ext.gdpr",t.gdprConsent.gdprApplies?1:0)),t&&t.uspConsent&&(0,c.N)(T,"regs.ext.us_privacy",t.uspConsent),null!=t&&null!==(n=t.gppConsent)&&void 0!==n&&n.gppString?((0,c.N)(T,"regs.gpp",t.gppConsent.gppString),(0,c.N)(T,"regs.gpp_sid",t.gppConsent.applicableSections)):null!=t&&null!==(o=t.ortb2)&&void 0!==o&&null!==(l=o.regs)&&void 0!==l&&l.gpp&&((0,c.N)(T,"regs.gpp",t.ortb2.regs.gpp),(0,c.N)(T,"regs.gpp_sid",t.ortb2.regs.gpp_sid)),!0===m.vc.getConfig("coppa")&&(0,c.N)(T,"regs.coppa",1),function(e,t){var r=(0,p.Z)(t,"0.userIdAsEids");(0,d.kJ)(r)&&r.length>0&&(0,c.N)(e,"user.eids",r)}(T,e);var M,q,X,D=t&&t.ortb2||{},F=D.user,L=D.device,H=D.site,V=D.bcat;if(H){var $=T.site,W=$.page,G=$.domain,Y=$.ref;(0,d.Ee)(T,{site:H}),T.site.page=W,T.site.domain=G,T.site.ref=Y}if(F&&(0,d.Ee)(T,{user:F}),V&&(C=C.concat(V)),null!=L&&L.sua&&(T.device.sua=null==L?void 0:L.sua),null!=F&&F.geo&&null!=L&&L.geo?(T.device.geo=v(v({},T.device.geo),L.geo),T.user.geo=v(v({},T.user.geo),F.geo)):(null!=F&&F.geo||null!=L&&L.geo)&&(T.user.geo=T.device.geo=null!=F&&F.geo?v(v({},T.user.geo),F.geo):v(v({},T.user.geo),L.geo)),null!==(g=D.ext)&&void 0!==g&&null!==(h=g.prebid)&&void 0!==h&&null!==(b=h.bidderparams)&&void 0!==b&&null!==(y=b[t.bidderCode])&&void 0!==y&&y.acat){var ee=D.ext.prebid.bidderparams[t.bidderCode].acat;Q(T,ee)}else S.length&&Q(T,S);if(function(e,t){(t=t.filter((function(e){return"string"==typeof e||((0,d.yN)("PubMatic: bcat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,t,r){if(e.length>3)return r.indexOf(e)===t;(0,d.yN)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: "+e)}))).length>0&&((0,d.yN)("PubMatic: bcat: Selected: ",t),e.bcat=t)}(T,C),null!=t&&t.timeout)T.tmax=t.timeout;else T.tmax=null===(M=window)||void 0===M||null===(q=M.PWT)||void 0===q||null===(X=q.versionDetails)||void 0===X?void 0:X.timeout;return T.ext.epoch=(new Date).getTime(),"object"===(0,s.Z)(m.vc.getConfig("app"))&&(T.app=m.vc.getConfig("app"),T.app.publisher=T.site.publisher,T.app.ext=T.site.ext||N,"object"!==(0,s.Z)(T.app.content)&&(T.app.content=T.site.content||N),delete T.site),{method:"POST",url:"https://hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(T),bidderRequest:t}}},interpretResponse:function(e,t){var r=[],i=P,n=JSON.parse(t.data),s=n.site&&n.site.ref?n.site.ref:"";try{e.body&&e.body.seatbid&&(0,d.kJ)(e.body.seatbid)&&(i=e.body.cur||i,e.body.seatbid.forEach((function(e){e.bid&&(0,d.kJ)(e.bid)&&e.bid.forEach((function(a){var o={requestId:a.impid,cpm:parseFloat((a.price||0).toFixed(2)),width:a.w,height:a.h,creativeId:a.crid||a.id,dealId:a.dealid,currency:i,netRevenue:true,ttl:300,referrer:s,ad:a.adm,pm_seat:e.seat||null,pm_dspid:a.ext&&a.ext.dspid?a.ext.dspid:null,partnerImpId:a.id||""};n.imp&&n.imp.length>0&&n.imp.forEach((function(e){if(a.impid===e.id)switch(function(e,t){if(e.ext&&null!=e.ext.bidtype)t.mediaType=M[e.ext.bidtype];else{(0,d.PN)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");var r=e.adm,a="",i=new RegExp(/VAST\s+version/);if(r.indexOf('span class="PubAPIAd"')>=0)t.mediaType=u.Mk;else if(i.test(r))t.mediaType=u.pX;else try{(a=JSON.parse(r.replace(/\\/g,"")))&&a.native&&(t.mediaType=u.B5)}catch(e){(0,d.yN)("PubMatic: Error: Cannot parse native reponse for ad response: "+r)}}}(a,o),o.mediaType){case u.Mk:break;case u.pX:o.width=a.hasOwnProperty("w")?a.w:e.video.w,o.height=a.hasOwnProperty("h")?a.h:e.video.h,o.vastXml=a.adm,function(e,t){var r,a,i;if(t.bidderRequest&&t.bidderRequest.bids){for(var n=0;n<t.bidderRequest.bids.length;n++)t.bidderRequest.bids[n].bidId===e.requestId&&(r=t.bidderRequest.bids[n].params,a=t.bidderRequest.bids[n].mediaTypes[u.pX].context,i=t.bidderRequest.bids[n].adUnitCode);a&&"outstream"===a&&r&&r.outstreamAU&&i&&(e.rendererCode=r.outstreamAU,e.renderer=R.newRenderer(e.rendererCode,i))}}(o,t),function(e,t,r){var a,i,n;if(null!=t&&null!==(a=t.ext)&&void 0!==a&&a.prebiddealpriority){var s=(0,d.zE)(e.requestId,[r.bidderRequest]),o=(0,p.Z)(s,"mediaTypes.video");if((null==o?void 0:o.context)==u.Oh){var c=(null==t||null===(i=t.ext)||void 0===i||null===(n=i.video)||void 0===n?void 0:n.duration)||(null==o?void 0:o.maxduration);e.video={context:u.Oh,durationSeconds:c,dealTier:t.ext.prebiddealpriority}}}}(o,a,t);break;case u.B5:!function(e,t){if(e.hasOwnProperty("adm")){var r="";try{r=JSON.parse(e.adm.replace(/\\/g,""))}catch(e){return void(0,d.yN)("PubMatic: Error: Cannot parse native reponse for ad response: "+t.adm)}t.native={ortb:v({},r.native)},t.mediaType=u.B5,t.width||(t.width=0),t.height||(t.height=0)}}(a,o)}})),a.ext&&a.ext.deal_channel&&(o.dealChannel=_[a.ext.deal_channel]||null),function(e,t,r){e.meta={},t.ext&&t.ext.dspid&&(e.meta.networkId=t.ext.dspid,e.meta.demandSource=t.ext.dspid),t.ext&&t.ext.dchain&&(e.meta.dchain=t.ext.dchain);var a=r||t.ext&&t.ext.advid;a&&(e.meta.advertiserId=a,e.meta.agencyId=a,e.meta.buyerId=a),t.adomain&&ee(t.adomain)&&(e.meta.advertiserDomains=t.adomain,e.meta.clickUrl=t.adomain[0],e.meta.brandId=t.adomain[0]),t.cat&&ee(t.cat)&&(e.meta.secondaryCatIds=t.cat,e.meta.primaryCatId=t.cat[0])}(o,a,e.seat),e.ext&&e.ext.buyid&&(o.adserverTargeting={hb_buyid_pubmatic:e.ext.buyid}),a.ext&&a.ext.marketplace&&(o.bidderCode=a.ext.marketplace),r.push(o)}))})));var o=(0,p.Z)(e.body,"ext.fledge_auction_configs");if(o)return o=Object.entries(o).map((function(e){var t=(0,a.Z)(e,2),r=t[0],i=t[1];return{bidId:r,config:Object.assign({auctionSignals:{}},i)}})),{bids:r,fledgeAuctionConfigs:o}}catch(e){(0,d.H)(e)}return r},getUserSyncs:function(e,t,r,a,i){var n,s,o=""+U;(r&&(o+="&gdpr="+(r.gdprApplies?1:0),o+="&gdpr_consent="+encodeURIComponent(r.consentString||"")),a&&(o+="&us_privacy="+encodeURIComponent(a)),null!=i&&i.gppString&&null!=i&&null!==(n=i.applicableSections)&&void 0!==n&&n.length)&&(o+="&gpp="+encodeURIComponent(i.gppString),o+="&gpp_sid="+encodeURIComponent(null==i||null===(s=i.applicableSections)||void 0===s?void 0:s.join(",")));return!0===m.vc.getConfig("coppa")&&(o+="&coppa=1"),e.iframeEnabled?[{type:"iframe",url:"https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p="+o}]:[{type:"image",url:"https://image8.pubmatic.com/AdServer/ImgSync?p="+o}]},transformBidParams:function(e,t,r,a){return(0,b.u)({publisherId:"string",adSlot:"string"},e)}};(0,l.dX)(te),(0,o.z)("pubmaticBidAdapter")}},function(e){e.O(0,[402],(function(){return t=5817,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[967],{9747:function(e,t,n){var a=n(8640),o=n(2797),r=n(5164),i=n(4358),s=n(4516),c=n(9633),d="__qca",p=864e5,u="p-KceJUEvXN48CE",l="https://pixel.quantserve.com/pixel",g="11",f=["1","10"],v=["1"],m=["1"],h=s.rp.getConsentData(),I=s.nX.getConsentData(),y="quantcastId",C=(0,r.df)({moduleType:c.y2,moduleName:y});function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:392;if(!window._qevents&&e&&""!=e){var n,a,o=C.getCookie(d),r="0",s=x.findRootDomain(),c=new Date,g="";if(!o){var f=c.getTime(),v=new Date(f+t*p).toGMTString(),m=Math.round(2147483647*Math.random());o="B0-".concat(m,"-").concat(f),r="1",C.setCookie(d,o,v,"/",s,null)}n="&fpan=".concat(r,"&fpa=").concat(o),a="&gdpr=0",h&&"boolean"==typeof h.gdprApplies&&h.gdprApplies&&(a="gdpr=1&gdpr_consent=".concat(h.consentString)),I&&"string"==typeof I&&(g="&us_privacy=".concat(I));var y=l+"?d="+s+"&client_id="+e+"&a="+u+g+a+n;(0,i.hq)(y)}}function D(e){return!e||"boolean"!=typeof e.gdprApplies||!e.gdprApplies||!!e.vendorData&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=e.gdprApplies,a=e.purpose,o=e.vendor,r=o&&o.consents&&o.consents[11],i=o&&o.legitimateInterests&&o.legitimateInterests[11],s=e.publisher?e.publisher.restrictions:{};if(!n)return!0;return t.map((function(e){var t=!!a.consents&&a.consents[e],n=!!a.legitimateInterests&&a.legitimateInterests[e],o=s&&s[e]?s[e][11]:null;return 0!==o&&(!(!r||!t||2===o||-1==v.indexOf(e)&&1!==o)||!(1===o||!i||!n||-1!=m.indexOf(e)||-1!=v.indexOf(e)&&2!==o))})).reduce((function(e,t){return e&&t}),!0)}(e.vendorData)}var x={name:y,gvlid:g,decode:function(e){return e},getId:function(e){var t,n=C.getCookie(d);if(s.VP.getCoppa()||(t=I)&&"string"==typeof t&&4==t.length&&"Y"==t.charAt(1)&&"Y"==t.charAt(2)||!D(h)){var a=new Date(0).toUTCString(),o=x.findRootDomain();return(0,i.PN)("QuantcastId: Necessary consent not present for Id, exiting QuantcastId"),void C.setCookie(d,"",a,"/",o,null)}var r=e&&e.params||{},c=e&&e.storage||{},p=r.clientId||"",u=c.expires||392;return"complete"===document.readyState?q(p,u):window.addEventListener("load",(function(){q(p,u)})),{id:n?{quantcastId:n}:void 0}},eids:{quantcastId:{source:"quantcast.com",atype:1}}};(0,o.Bx)("userId",x),(0,a.z)("quantcastIdSystem")}},function(e){var t;t=9747,e(e.s=t)}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[184],{5456:function(t,n,e){var r=e(1002),o=e(3324),a=e(4942),i=e(8640),c=e(3193),u=e(2797),f=e(4358),s=e(2021),g=e(5644),l=e(6104),p=e(4516),v=e(4614),h=e(9128),d=e(9633),D=e(7172);function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){(0,a.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var m,y,E=(0,e(6310).Oj)((function(t){return l.ZP.resolveAlias(t)})),P=[],j=[],T=[];var R,w=(R=!1,function(){var t;R||(Object.entries((t={},(0,a.Z)(t,g.FP.AUCTION_INIT,["onAuctionInitEvent"]),(0,a.Z)(t,g.FP.AUCTION_END,["onAuctionEndEvent",F]),(0,a.Z)(t,g.FP.BID_RESPONSE,["onBidResponseEvent"]),(0,a.Z)(t,g.FP.BID_REQUESTED,["onBidRequestEvent"]),t)).forEach((function(t){var n=(0,o.Z)(t,2),e=n[0],r=(0,o.Z)(n[1],2),a=r[0],i=r[1];s.on(e,(function(t){i&&i(t),j.forEach((function(n){try{n[a]&&n[a](t,n.config,y)}catch(t){(0,f.H)("RTD provider '".concat(n.name,"': error in '").concat(a,"':"),t)}}))}))})),R=!0)});function C(){return{gdpr:p.rp.getConsentData(),usp:p.nX.getConsentData(),gpp:p.TJ.getConsentData(),coppa:!!c.vc.getConfig("coppa")}}function A(){y=C();var t=[];T.forEach((function(n){var e=(0,v.sE)(P,(function(t){return t.name===n.name}));e&&e.init&&e.init(n,y)&&t.push(Object.assign(e,{config:n}))})),j=t,(0,f.PN)("Real time data module enabled, using submodules: ".concat(j.map((function(t){return t.name})).join(", ")))}var Z,I,q=(0,h.g3)("rtd",(function(t,n){y=C();var e=[],r=[];j.forEach((function(t){if("function"==typeof t.getBidRequestData){e.push(t);var n=t.config;n&&n.waitForIt&&r.push(t)}}));var o,a=r.length&&m.auctionDelay&&m.auctionDelay>0,i=r.length,c=!1,u=[];if(!e.length)return s();function f(){c||(this.config&&this.config.waitForIt&&i--,0===i&&setTimeout(s,0))}function s(){c||(c=!0,clearTimeout(o),u.forEach((function(t){return t()})),t.call(this,n))}o=setTimeout(s,a?m.auctionDelay:0),e.forEach((function(t){var e=(0,D.fC)(n.ortb2Fragments||{},E(d.XG,t.name));u.push(e.verify),t.getBidRequestData(O(O({},n),{},{ortb2Fragments:e.obj}),f.bind(t),t.config,y)}))}));function F(t){var n=j.filter((function(t){return"function"==typeof t.getTargetingData}));if(n.length){var e=t.adUnitCodes;if(e){for(var o=[],a=n.length-1;a>=0;a--){var i=n[a].getTargetingData(e,n[a].config,y,t);i&&"object"===(0,r.Z)(i)?o.push(i):(0,f.yN)("invalid getTargetingData response for sub module",n[a].name)}var c=function(t){if(!Array.isArray(t)||!t.length)return{};return t.reduce((function(t,n){for(var e in n)if(n.hasOwnProperty(e))if(t.hasOwnProperty(e)){var r=n[e];for(var o in r)r.hasOwnProperty(o)&&(t[e][o]=r[o])}else t[e]=n[e];return t}),{})}(o);return t.adUnits.forEach((function(t){var n=t.code&&c[t.code];n&&((0,f.PN)("RTD set ad unit targeting of",n,"for",t),t[g.k2.xn]=Object.assign(t[g.k2.xn]||{},n))})),t.adUnits}}}function N(t){j.forEach((function(t){if("function"==typeof t.onDataDeletionRequest)try{t.onDataDeletionRequest(t.config)}catch(n){(0,f.H)("Error executing ".concat(t.name,".onDataDeletionRequest"),n)}}));for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];t.apply(this,e)}(0,u.bA)("realTimeData",(function(t){return P.push(t),p.qh.register(d.XG,t.name,t.gvlid),function(){var n=P.indexOf(t);n>=0&&(P.splice(n,1),A())}})),Z=c.vc,I=Z.getConfig("realTimeData",(function(t){var n=t.realTimeData;n.dataProviders?(I(),m=n,T=n.dataProviders,w(),(0,u.v5)("startAuction").before(q,20),l.ZP.callDataDeletionRequest.before(N),A()):(0,f.H)("missing parameters for real time module")})),(0,i.z)("rtdModule")}},function(t){t.O(0,[75],(function(){return n=5456,t(t.s=n);var n}));t.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[187],{60:function(e,t,r){var n=r(9062),i=r(4942),o=r(3324),a=r(1002),s=r(8640),d=r(4980),c=r(9933),u=r(4699),p=r(3193),l=r(4679),f=r(4614),m=r(5706),v=r(4358),g=r(6475),b=r(265),x=r(676),y=r(5370);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j="https://video-outstream.rubiconproject.com/apex-2.2.1.js",k=p.vc.getConfig("rubicon")||{};p.vc.getConfig("rubicon",(function(e){(0,v.Ee)(k,e.rubicon)}));var O={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",261:"480x480",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",524:"1x2",548:"500x1000",550:"980x480",552:"300x200",558:"640x640",562:"300x431",564:"320x431",566:"320x300",568:"300x150",570:"300x125",572:"250x350",574:"620x891",576:"610x877",578:"980x552",580:"505x656",622:"192x160",632:"1200x450",634:"340x450"};(0,v.yi)(O,(function(e,t){return O[e]=t}));var w=(0,d.x)({request:function(e,t,r,i){var o,d,c,u=i.bidRequests,l=e(t,r,i);l.cur=["USD"],l.test=p.vc.getConfig("debug")?1:0,(0,g.N)(l,"ext.prebid.cache",{vastxml:{returnCreative:!0===k.returnVast}}),(0,g.N)(l,"ext.prebid.bidders",{rubicon:{integration:k.int_type||"pbjs"}}),(0,g.N)(l,"ext.prebid.targeting.pricegranularity",{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:(c=p.vc).getConfig("customPriceBucket")&&c.getConfig("customPriceBucket").buckets}[c.getConfig("priceGranularity")]});var f=(0,s.R)().installedModules;return!f||f.length&&-1===f.indexOf("rubiconAnalyticsAdapter")||(0,g.N)(l,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),function(e,t,r){var i,o,a={},s=x.c.apply(void 0,[r].concat((0,n.Z)(t.map((function(e){return e.params.keywords})))));t.forEach((function(t){var r,n,i,o,s,d={user:{ext:{data:_({},t.params.visitor)}},site:{ext:{data:_({},t.params.inventory)}}},c=e.imp.find((function(e){var t,r,n,i,o;return null===(t=e.ext)||void 0===t||null===(r=t.prebid)||void 0===r||null===(n=r.bidder)||void 0===n||null===(i=n.rubicon)||void 0===i||null===(o=i.video)||void 0===o?void 0:o.language}));c&&(d.site.content={language:null===(r=c.ext)||void 0===r||null===(n=r.prebid)||void 0===n||null===(i=n.bidder)||void 0===i||null===(o=i.rubicon)||void 0===o||null===(s=o.video)||void 0===s?void 0:s.language});a=(0,v.Ee)(a,t.ortb2||{},d);var u=p.vc.getConfig("user.id");a.user.id=a.user.id||u})),(0,v.Ee)(e,a),s&&s.length&&(0,g.N)(e,"site.keywords",s.join(","));null==e||(null===(i=e.ext)||void 0===i||(null===(o=i.prebid)||void 0===o||delete o.storedrequest))}(l,u,r.ortb2),null==l||(null===(o=l.ext)||void 0===o||(null===(d=o.prebid)||void 0===d||delete d.storedrequest)),!0===k.disableFloors&&delete l.ext.prebid.floors,u.filter((function(e){return"object"===(0,a.Z)(e.floorData)})).length>0&&(l.ext.prebid.floors={enabled:!1}),l},imp:function(e,t,r){var n,i,o=Z(t);if(!o.includes(l.Mk)||1!=o.length){var a=e(t,r);return a.id=t.adUnitCode,delete a.banner,p.vc.getConfig("s2sConfig.defaultTtl")&&(a.exp=p.vc.getConfig("s2sConfig.defaultTtl")),"atf"===t.params.position&&a.video&&(a.video.pos=1),"btf"===t.params.position&&a.video&&(a.video.pos=3),null===(n=a.ext)||void 0===n||(null===(i=n.prebid)||void 0===i||delete i.storedrequest),!0===t.params.bidonmultiformat&&o.length>1&&(0,g.N)(a,"ext.prebid.bidder.rubicon.formats",o),function(e,t){"USD"!=t.bidfloorcur&&(delete t.bidfloor,delete t.bidfloorcur);if(!t.bidfloor){var r=parseFloat((0,b.Z)(e,"params.floor"));isNaN(r)||(t.bidfloor=r,t.bidfloorcur="USD")}}(t,a),a}},bidResponse:function(e,t,r){var n,i=e(t,r);i.meta.mediaType=(0,b.Z)(t,"ext.prebid.type");var a=r.bidRequest,s="outstream"===(null===(n=a.mediaTypes.video)||void 0===n?void 0:n.context)?A(a,l.pX):[void 0,void 0],d=(0,o.Z)(s,2),c=d[0],u=d[1];return i.width=t.w||c||i.playerWidth,i.height=t.h||u||i.playerHeight,i.mediaType===l.pX&&"outstream"===a.mediaTypes.video.context&&(i.renderer=function(e){var t=m.Th.install({id:e.adId,url:k.rendererUrl||j,config:k.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{t.setRender(R)}catch(e){(0,v.yN)("Prebid Error calling setRender on renderer",e)}return t}(i)),(0,b.Z)(t,"ext.bidder.rp.advid")&&(0,g.N)(i,"meta.advertiserId",t.ext.bidder.rp.advid),i},context:{netRevenue:!1!==k.netRevenue,ttl:300},processors:c.X}),S={code:"rubicon",gvlid:52,supportedMediaTypes:[l.Mk,l.pX,l.B5],isBidRequestValid:function(e){var t=!0;if("object"!==(0,a.Z)(e.params))return!1;for(var r=0,n=["accountId","siteId","zoneId"];r<n.length;r++)if(e.params[n[r]]=parseInt(e.params[n[r]]),isNaN(e.params[n[r]]))return(0,v.H)("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=Z(e,!0);if(!i.length)return!1;i.includes(l.pX)&&(t=function(e){var t=!0,r=Object.prototype.toString.call([]),n=Object.prototype.toString.call(0),i={mimes:r,protocols:r,linearity:n,api:r};return Object.keys(i).forEach((function(r){Object.prototype.toString.call((0,b.Z)(e,"mediaTypes.video."+r))!==i[r]&&(t=!1,(0,v.H)("Rubicon: mediaTypes.video."+r+" is required and must be of type: "+i[r]))})),t}(e));var o=[l.Mk,l.B5].filter((function(e){return i.includes(e)})).length>0;return o?t&&o:t},buildRequests:function(e,t){var r,n=[],i=[];if((r=e.filter((function(e){var t=Z(e)||[],r=t.length,n=e.params||{},i=n.bidonmultiformat,o=n.video;return 1===r&&(t.includes(l.pX)||t.includes(l.B5))||2===r&&!t.includes(l.Mk)||o&&t.includes(l.pX)||i&&(t.includes(l.pX)||t.includes(l.B5))})))&&r.length){var o=w.toORTB({bidRequests:r,bidderRequest:t});i.push({method:"POST",url:"https://".concat(k.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:o,bidRequest:r})}var a=e.filter((function(e){var t=Z(e)||[],r=e.params||{},n=r.bidonmultiformat,i=r.video;return t.includes(l.Mk)&&(1===t.length||n||!n&&!i||!n&&i&&!t.includes(l.pX))}));if(!0!==k.singleRequest)n=i.concat(a.map((function(e){var r=S.createSlotParams(e,t);return{method:"GET",url:"https://".concat(k.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:S.getOrderedParams(r).reduce((function(e,t){var n=r[t];return(0,v.d8)(n)&&""!==n||(0,v.hj)(n)?"".concat(e).concat(P(t,n),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var s=a.reduce((function(e,t){return(e[t.params.siteId]=e[t.params.siteId]||[]).push(t),e}),{});n=i.concat(Object.keys(s).reduce((function(e,r){var n,i;return(n=s[r],i=10,n.map((function(e,t){return t%i==0?n.slice(t,t+i):null})).filter((function(e){return e}))).forEach((function(r){var n=S.combineSlotUrlParams(r.map((function(e){return S.createSlotParams(e,t)})));e.push({method:"GET",url:"https://".concat(k.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:S.getOrderedParams(n).reduce((function(e,t){var r=n[t];return(0,v.d8)(r)&&""!==r||(0,v.hj)(r)?"".concat(e).concat(P(t,r),"&"):e}),"")+"slots=".concat(r.length,"&rand=").concat(Math.random()),bidRequest:r})})),e}),[]))}return n},getOrderedParams:function(e){var t=/^tg_v/,r=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","gpp","gpp_sid","rp_schain"].concat(Object.keys(e).filter((function(e){return n.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(["tk_flint","x_source.tid","l_pb_bid_id","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var t=e.reduce((function(t,r,n){return Object.keys(r).forEach((function(i){t.hasOwnProperty(i)||(t[i]=new Array(e.length)),t[i].splice(n,1,r[i])})),t}),{}),r=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(t).forEach((function(e){var n=t[e].join(";"),i=n.match(r);t[e]=i?i[1]:n})),t},createSlotParams:function(e,t){var r,n,i,s,d;e.startTime=(new Date).getTime();var c=e.params,u=A(e,"banner"),m=c.latLong||[],g=(0,o.Z)(m,2),x=g[0],y=g[1],h={account_id:c.accountId,site_id:c.siteId,zone_id:c.zoneId,size_id:u[0],alt_size_ids:u.slice(1).join(",")||void 0,rp_floor:(c.floor=parseFloat(c.floor))>=.01?c.floor:void 0,rp_secure:"1",tk_flint:"".concat(k.int_type||"pbjs_lite","_v8.19.0"),"x_source.tid":null===(r=t.ortb2)||void 0===r||null===(n=r.source)||void 0===n?void 0:n.tid,"x_imp.ext.tid":null===(i=e.ortb2Imp)||void 0===i||null===(s=i.ext)||void 0===s?void 0:s.tid,l_pb_bid_id:e.bidId,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:c.userId,"p_geo.latitude":isNaN(parseFloat(x))?void 0:parseFloat(x).toFixed(4),"p_geo.longitude":isNaN(parseFloat(y))?void 0:parseFloat(y).toFixed(4),"tg_fl.eid":e.code,rf:C(e,t)};if("function"==typeof e.getFloor&&!k.disableFloors){var j;try{j=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){(0,v.H)("Rubicon: getFloor threw an error: ",e)}h.rp_hard_floor="object"!==(0,a.Z)(j)||"USD"!==j.currency||isNaN(parseInt(j.floor))?void 0:j.floor}!0===c.bidonmultiformat&&(0,b.Z)(e,"mediaTypes")&&Object.keys(e.mediaTypes).length>1&&(h.p_formats=Object.keys(e.mediaTypes).join(","));var O={1:"atf",3:"btf"}[(0,b.Z)(e,"mediaTypes.banner.pos")]||"";h.p_pos="atf"===c.position||"btf"===c.position?c.position:O;var w,R,I=p.vc.getConfig("user.id");(I&&(h.ppuid=I),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source)h.tpid_tdid=e.uids[0].id,h["eid_adserver.org"]=e.uids[0].id;else if("liveintent.com"===e.source)h["tpid_liveintent.com"]=e.uids[0].id,h["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(h["tg_v.LIseg"]=e.ext.segments.join(","));else if("liveramp.com"===e.source)h.x_liverampidl=e.uids[0].id;else if("id5-sync.com"===e.source)h["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||"");else{var t="rubiconproject.com"===e.source?e.uids[0].id:"".concat(e.uids[0].id,"^").concat(e.uids[0].atype||"");h["eid_".concat(e.source)]=t}if(!h.ppuid){var r=(0,f.sE)(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));r&&r.id&&(h.ppuid=r.id)}}catch(t){(0,v.yN)("Rubicon: error reading eid:",e,t)}})),t.gdprConsent&&("boolean"==typeof t.gdprConsent.gdprApplies&&(h.gdpr=Number(t.gdprConsent.gdprApplies)),h.gdpr_consent=t.gdprConsent.consentString),t.uspConsent&&(h.us_privacy=encodeURIComponent(t.uspConsent)),null!==(d=t.gppConsent)&&void 0!==d&&d.gppString)&&(h.gpp=t.gppConsent.gppString,h.gpp_sid=null===(w=t.gppConsent)||void 0===w||null===(R=w.applicableSections)||void 0===R?void 0:R.toString());return h.rp_maxbids=t.bidLimit||1,function(e,t,r){var n={user:{ext:{data:_({},e.params.visitor)}},site:{ext:{data:_({},e.params.inventory)}}};e.params.keywords&&(n.site.keywords=(0,v.kJ)(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var i=(0,v.Ee)({},e.ortb2||{},n),o=(0,b.Z)(e.ortb2Imp,"ext")||{},s=(0,b.Z)(e.ortb2Imp,"ext.data")||{},d=(0,b.Z)(e,"ortb2Imp.ext.gpid"),c={user:[4],site:[1,2,5,6]},u={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},p=function(e,t,r){return"data"===t&&Array.isArray(e)?e.filter((function(e){return e.segment&&(0,b.Z)(e,"ext.segtax")&&c[r]&&-1!==c[r].indexOf((0,b.Z)(e,"ext.segtax"))})).map((function(e){var t=e.segment.filter((function(e){return e.id})).reduce((function(e,t){return e.push(t.id),e}),[]);if(t.length>0)return t.toString()})).toString():("object"!==(0,a.Z)(e)||Array.isArray(e))&&void 0!==e?Array.isArray(e)?e.filter((function(e){if("object"!==(0,a.Z)(e)&&void 0!==e)return e.toString();(0,v.yN)("Rubicon: Filtered value: ",e,"for key",t,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString():void 0},f=function(e,t,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=p(e,n,t),a=u[n]&&i?"".concat(u[n]):"data"===n?"".concat(u[t],"iab"):"".concat(u[t]).concat(n);r[a]=r[a]?r[a].concat(",",o):o};t===l.Mk?(["site","user"].forEach((function(e){Object.keys(i[e]).forEach((function(t){"site"===e&&"content"===t&&i[e][t].data?f(i[e][t].data,e,"data"):"ext"!==t?f(i[e][t],e,t):i[e][t].data&&Object.keys(i[e].ext.data).forEach((function(t){f(i[e].ext.data[t],e,t,!1)}))}))})),Object.keys(s).forEach((function(e){"adserver"!==e?f(s[e],"site",e):"gam"===s[e].name&&f(s[e].adslot,name,e)})),d&&(r.p_gpid=d),r["tg_i.pbadslot"]&&delete r["tg_i.dfp_ad_unit_code"]):(Object.keys(o).length&&(0,v.Ee)(r.imp[0].ext,o),d&&(r.imp[0].ext.gpid=d),(0,v.Ee)(r,i))}(e,l.Mk,h),!0===p.vc.getConfig("coppa")&&(h.coppa=1),e.schain&&z(e.schain)&&(h.rp_schain=S.serializeSupplyChain(e.schain)),h},serializeSupplyChain:function(e){if(!z(e))return"";var t=e.ver,r=e.complete,n=e.nodes;return"".concat(t,",").concat(r,"!").concat(S.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var t=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return t.map((function(t){return encodeURIComponent(e[t]||"")})).join(",")})).join("!")},interpretResponse:function(e,t){e=e.body;var r=t.data;if(!e||"object"!==(0,a.Z)(e))return[];if(e.seatbid){var n=(0,b.Z)(e,"ext.errors.rubicon");return Array.isArray(n)&&n.length>0&&(0,v.yN)("Rubicon: Error in video response"),w.fromORTB({request:r,response:e}).bids}var i,s=e.ads,d=0,c=t.bidRequest;return"object"===(0,a.Z)(c)&&!Array.isArray(c)&&Z(c).includes(l.pX)&&"object"===(0,a.Z)(s)&&(s=s[c.adUnitCode]),!Array.isArray(s)||s.length<1?[]:s.reduce((function(t,r,n){if(r.impression_id&&i===r.impression_id?d++:i=r.impression_id,"ok"!==r.status)return t;var s,u,p=Array.isArray(c)?c[n-d]:c;if(p&&"object"===(0,a.Z)(p)){var f={requestId:p.bidId,currency:"USD",creativeId:r.creative_id||"".concat(r.network||"","-").concat(r.advertiser||""),cpm:r.cpm||0,dealId:r.deal,ttl:300,netRevenue:!1!==k.netRevenue,rubicon:{advertiserId:r.advertiser,networkId:r.network},meta:{advertiserId:r.advertiser,networkId:r.network,mediaType:l.Mk}};if(r.creative_type&&(f.mediaType=r.creative_type),r.adomain&&(f.meta.advertiserDomains=Array.isArray(r.adomain)?r.adomain:[r.adomain]),r.creative_type===l.pX)f.width=p.params.video.playerWidth,f.height=p.params.video.playerHeight,f.vastUrl=r.creative_depot_url,f.impression_id=r.impression_id,f.videoCacheKey=r.impression_id;else{f.ad=(s=r.script,u=r.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(u,"'>\n<script type='text/javascript'>").concat(s,"<\/script>\n</div>\n</body>\n</html>"));var m=O[r.size_id].split("x").map((function(e){return Number(e)})),g=(0,o.Z)(m,2);f.width=g[0],f.height=g[1]}f.rubiconTargeting=(Array.isArray(r.targeting)?r.targeting:[]).reduce((function(e,t){return e[t.key]=t.values[0],e}),{rpfl_elemid:p.adUnitCode}),t.push(f)}else(0,v.H)("Rubicon: bidRequest undefined at index position:".concat(n),c,e);return t}),[]).sort((function(e,t){return(t.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,t,r,n,i){if(!E&&e.iframeEnabled){var o,a={};if(r&&("boolean"==typeof r.gdprApplies&&(a.gdpr=Number(r.gdprApplies)),"string"==typeof r.consentString&&(a.gdpr_consent=r.consentString)),n&&(a.us_privacy=encodeURIComponent(n)),null!=i&&i.gppString)a.gpp=i.gppString,a.gpp_sid=null===(o=i.applicableSections)||void 0===o?void 0:o.toString();return a=Object.keys(a).length?"?".concat((0,v.Yp)(a)):"",E=!0,{type:"iframe",url:"https://".concat(k.syncHost||"eus",".rubiconproject.com/usync.html")+a}}},transformBidParams:function(e,t){return(0,y.u)({accountId:"number",siteId:"number",zoneId:"number"},e)}};function C(e,t){var r;return r=e.params.referrer?e.params.referrer:t.refererInfo.page,e.params.secure?r.replace(/^http:/i,"https:"):r}function R(e){var t,r=document.getElementById(e.adUnitCode);(t=r.querySelector("div[id^='google_ads']"))&&t.style.setProperty("display","none"),function(e){var t=e.querySelector("script[id^='sas_script']"),r=t&&t.nextSibling;r&&"iframe"===r.localName&&r.style.setProperty("display","none")}(r);var n=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:r,align:n.align||"center",position:n.position||"append"},closeButton:n.closeButton||!1,label:n.label||void 0,collapse:n.collapse||!0})}))}function A(e,t){var r=e.params;if(t===l.pX){var n=[];return r.video&&r.video.playerWidth&&r.video.playerHeight?n=[r.video.playerWidth,r.video.playerHeight]:Array.isArray((0,b.Z)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(n=e.sizes[0]),n}var i=[];return Array.isArray(r.sizes)?i=r.sizes:void 0!==(0,b.Z)(e,"mediaTypes.banner.sizes")?i=I(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?i=I(e.sizes):(0,v.yN)("Rubicon: no sizes are setup or found"),function(e){var t=[15,2,9];return e.sort((function(e,r){var n=t.indexOf(e),i=t.indexOf(r);return n>-1||i>-1?-1===n?1:-1===i?-1:n-i:e-r}))}(i)}function I(e){return(0,v.sF)(e).reduce((function(e,t){var r=parseInt(O[t],10);return r&&e.push(r),e}),[])}function T(e){var t=void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.pX)),r=void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.Mk)),n=void 0!==(0,b.Z)(e,"params.bidonmultiformat"),i="object"!==(0,a.Z)((0,b.Z)(e,"params.video"));return!(!t||!n)||(r&&i&&(t=!1),t&&i&&(0,g.N)(e,"params.video",{}),t)}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[];if(T(e)){if(-1===["outstream","instream"].indexOf((0,b.Z)(e,"mediaTypes.".concat(l.pX,".context"))))return t&&(0,v.H)("Rubicon: mediaTypes.video.context must be outstream or instream"),r;if(A(e,l.pX).length<2)return t&&(0,v.H)("Rubicon: could not determine the playerSize of the video"),r;t&&(0,v.ji)("Rubicon: making video request for adUnit",e.adUnitCode),r.push(l.pX)}if(void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.B5))&&r.push(l.B5),void 0!==(0,b.Z)(e,"mediaTypes.".concat(l.Mk))){if(0===A(e,l.Mk).length)return t&&(0,v.H)("Rubicon: could not determine the sizes for banner request"),r;t&&(0,v.ji)("Rubicon: making banner request for adUnit",e.adUnitCode),r.push(l.Mk)}return r}function z(e){var t=!1,r=["asi","sid","hp"];return e.nodes?((t=e.nodes.reduce((function(e,t){return e?r.every((function(e){return t.hasOwnProperty(e)})):e}),!0))||(0,v.H)("Rubicon: required schain params missing"),t):t}function P(e,t){return"rp_schain"===e?"rp_schain=".concat(t):"".concat(e,"=").concat(encodeURIComponent(t))}var E=!1;(0,u.dX)(S),(0,s.z)("rubiconBidAdapter")},6372:function(e,t,r){r.d(t,{DZ:function(){return a},Px:function(){return s},TP:function(){return c},YC:function(){return d},Z:function(){return o},f8:function(){return m},fP:function(){return v},gm:function(){return n},md:function(){return u}});var n=["request","imp","bidResponse","response"],i=["default","pbs"],o=n[0],a=n[1],s=n[2],d=n[3],c=i[0],u=i[1],p=new Set(n);var l,f=(l={},{registerOrtbProcessor:function(e){var t=e.type,r=e.name,i=e.fn,o=e.priority,a=void 0===o?0:o,s=e.dialects,d=void 0===s?[c]:s;if(!p.has(t))throw new Error("ORTB processor type must be one of: ".concat(n.join(", ")));d.forEach((function(e){l.hasOwnProperty(e)||(l[e]={}),l[e].hasOwnProperty(t)||(l[e][t]={}),l[e][t][r]={priority:a,fn:i}}))},getProcessors:function(e){return l[e]||{}}}),m=f.registerOrtbProcessor,v=f.getProcessors}},function(e){e.O(0,[402,279,951,157],(function(){return t=60,e(e.s=t);var t}));e.O()}]);
(self.pbjsChunk=self.pbjsChunk||[]).push([[599],{789:function(e,t,r){var n=r(1002),i=r(9062),o=r(4942),a=r(8640),c=r(4358),u=r(4679),d=r(4699),s=r(3193),p=r(5164),l=r(9865);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b="triplelift",g=null,v=null,y=(0,p.df)({bidderCode:b}),h={gvlid:28,code:b,supportedMediaTypes:[u.Mk,u.pX],isBidRequestValid:function(e){return void 0!==e.params.inventoryCode},buildRequests:function(e,t){var r="https://tlx.3lift.com/header/auction?",n=function(e,t){var r,n,o={},a=e[0].schain,u=function(e){var t={},r={},n={},i=e.ortb2||{},o=function(){var e=y.getDataFromLocalStorage("opecloud_ctx");if(!e)return null;try{return JSON.parse(e)}catch(e){return(0,c.H)("Triplelift: error parsing JSON: ",e),null}}(),a=Object.assign({},i.site),u=Object.assign({},i.user);if(o){u.data=u.data||[];try{u.data.push({name:"www.1plusx.com",ext:o})}catch(e){(0,c.H)("Triplelift: error adding 1plusX segments: ",e)}}S(r,a),S(n,u),(0,c.xb)(r)||(t.context=r);(0,c.xb)(n)||(t.user=n);return t}(t);o.imp=e.map((function(e,t){var r={id:t,tagid:e.params.inventoryCode,floor:j(e)};return x(e)&&(r.video=function(e){var t=m(m({},e.params.video),e.mediaTypes.video);try{t.w||(t.w=t.playerSize[0][0]),t.h||(t.h=t.playerSize[0][1])}catch(e){(0,c.yN)("Video size not defined",e)}"instream"===t.context&&(t.placement||(t.placement=1));"outstream"===t.context&&(t.placement?-1===[3,4,5].indexOf(t.placement)&&((0,c.ji)("video.placement value of ".concat(t.placement," is invalid for outstream context. Setting placement to 3")),t.placement=3):t.placement=3);t.playbackmethod&&Number.isInteger(t.playbackmethod)&&(t.playbackmethod=Array.from(String(t.playbackmethod),Number));return delete t.playerSize,t}(e)),e.mediaTypes.banner&&!O(e)&&(r.banner={format:C(e.sizes)}),(0,c.xb)(e.ortb2Imp)||(r.fpd=function(e){var t={},r={};S(r,e.ext),(0,c.xb)(r)||(t.context=r);return t}(e.ortb2Imp),(0,c.xb)(e.ortb2Imp.ext)||(r.ext=m({},e.ortb2Imp.ext))),r}));var d=[].concat((0,i.Z)((s=[e[0]],_(s,"tdid","adserver.org","TDID"))),(0,i.Z)(function(e){return _(e,"idl_env","liveramp.com","idl")}([e[0]])),(0,i.Z)(function(e){return _(e,"criteoId","criteo.com","criteoId")}([e[0]])),(0,i.Z)(function(e){return _(e,"pubcid","pubcid.org","pubcid")}([e[0]])),(0,i.Z)(function(e){var t=["adserver.org","liveramp.com","criteo.com","pubcid.org"],r=[];e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if(-1===t.indexOf(e.source)){var n=e.uids.map((function(t){return{id:t.id,ext:{rtiPartner:e.source}}}));r.push({source:e.source,uids:n})}}catch(t){(0,c.yN)("Triplelift: Error attempting to add ".concat(e," to bid request"),t)}}));return r}(e[0])));var s;d.length>0&&(o.user={ext:{eids:d}});var p=function(e,t){var r={};(0,c.xb)(e)||(r.schain=m({},e));(0,c.xb)(t)||(r.fpd=m({},t));return r}(a,u);(0,c.xb)(p)||(o.ext=p);null!=t&&null!==(r=t.ortb2)&&void 0!==r&&null!==(n=r.regs)&&void 0!==n&&n.gpp&&(o.regs=Object.assign({},t.ortb2.regs));null!=t&&t.ortb2&&(o.ext.ortb2=Object.assign({},t.ortb2));return o}(e,t);if(r=(0,l.t)(r,"lib","prebid"),r=(0,l.t)(r,"v","8.19.0"),t&&t.refererInfo){var o=t.refererInfo.page;r=(0,l.t)(r,"referrer",o)}return t&&t.timeout&&(r=(0,l.t)(r,"tmax",t.timeout)),t&&t.gdprConsent&&(g=void 0===t.gdprConsent.gdprApplies||t.gdprConsent.gdprApplies,r=(0,l.t)(r,"gdpr",g.toString()),void 0!==t.gdprConsent.consentString&&(v=t.gdprConsent.consentString,r=(0,l.t)(r,"cmp_cs",v))),t&&t.uspConsent&&(r=(0,l.t)(r,"us_privacy",t.uspConsent)),t&&t.fledgeEnabled&&(r=(0,l.t)(r,"fledge",t.fledgeEnabled)),!0===s.vc.getConfig("coppa")&&(r=(0,l.t)(r,"coppa",!0)),r.lastIndexOf("&")===r.length-1&&(r=r.substring(0,r.length-1)),(0,c.ji)("tlCall request built: "+r),{method:"POST",url:r,data:n,bidderRequest:t}},interpretResponse:function(e,t){var r=t.bidderRequest,n=e.body.bids||[],i=e.body.paapi||[];if(n=n.map((function(e){return function(e,t){var r={},n=t.width||1,i=t.height||1,o=t.deal_id||"",a=t.crid||"",c=e.bids[t.imp_id];0!=t.cpm&&t.ad&&(r={requestId:c.bidId,cpm:t.cpm,width:n,height:i,netRevenue:!0,ad:t.ad,creativeId:a,dealId:o,currency:"USD",ttl:300,tl_source:t.tl_source,meta:{}},x(c)&&"video"===t.media_type&&(r.vastXml=t.ad,r.mediaType="video",r.ttl=3600),t.advertiser_name&&(r.meta.advertiserName=t.advertiser_name),t.adomain&&t.adomain.length&&(r.meta.advertiserDomains=t.adomain),t.tl_source&&"hdx"==t.tl_source&&(x(c)&&"video"===t.media_type?r.meta.mediaType="video":r.meta.mediaType="banner"),t.tl_source&&"tlx"==t.tl_source&&(r.meta.mediaType="native"),a&&(r.meta.networkId=a.slice(0,a.indexOf("_"))));return r}(r,e)})),i.length>0){var o=i.map((function(e){return{bidId:r.bids[e.imp_id].bidId,config:e.auctionConfig}}));return(0,c.ji)("Response with FLEDGE:",{bids:n,fledgeAuctionConfigs:o}),{bids:n,fledgeAuctionConfigs:o}}return n},getUserSyncs:function(e,t,r,n,i){var o=function(e){if(!e)return;if(e.iframeEnabled)return"iframe";if(e.pixelEnabled)return"image"}(e);if(o){var a="https://eb2.3lift.com/sync?";return"image"===o&&(a=(0,l.t)(a,"px",1),a=(0,l.t)(a,"src","prebid")),(null!==v||g)&&(a=(0,l.t)(a,"gdpr",g),a=(0,l.t)(a,"cmp_cs",v)),n&&(a=(0,l.t)(a,"us_privacy",n)),i&&(i.gppString&&(a=(0,l.t)(a,"gpp",i.gppString)),i.applicableSections&&0!==i.applicableSections.length&&(a=(0,l.t)(a,"gpp_sid",i.applicableSections.filter((function(e){return Number.isInteger(e)})).join(",")))),[{type:o,url:a}]}}};function x(e){return I(e)&&(O(e)||function(e){return I(e)&&"outstream"===e.mediaTypes.video.context.toLowerCase()}(e))}function O(e){return I(e)&&"instream"===e.mediaTypes.video.context.toLowerCase()}function I(e){return e.mediaTypes.video&&e.mediaTypes.video.context}function j(e){var t=null;if("function"==typeof e.getFloor)try{var r=e.getFloor({currency:"USD",mediaType:x(e)?"video":"banner",size:"*"});"object"!==(0,n.Z)(r)||"USD"!==r.currency||isNaN(parseFloat(r.floor))||(t=parseFloat(r.floor))}catch(e){(0,c.H)("Triplelift: getFloor threw an error: ",e)}return null!==t?t:e.params.floor}function S(e,t){(0,c.xb)(t)||Object.keys(t).forEach((function(r){null!=t[r]&&(e[r]=t[r])}))}function _(e,t,r,n){return e.map(function(e){return function(t){return t&&t.userId&&t.userId[e]}}(t)).filter(w(t)).map(function(e,t){return function(r){return{source:e,uids:[{id:r.id?r.id:r,ext:{rtiPartner:t}}]}}}(r,n))}var w=function(e){return function(t,r,n){var i=!!t&&((0,c.d8)(t)?!!t:(0,c.PO)(t)&&!(0,c.kJ)(t)&&!(0,c.xb)(t)&&t.id&&(0,c.d8)(t.id)&&!!t.id);return i||void 0===n[0]||(0,c.yN)("Triplelift: invalid ".concat(e," userId format")),i}};function C(e){return e.filter(T).map((function(e){return{w:e[0],h:e[1]}}))}function T(e){return 2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}(0,d.dX)(h),(0,a.z)("tripleliftBidAdapter")}},function(e){e.O(0,[213],(function(){return t=789,e(e.s=t);var t}));e.O()}]);})(),pbjs.processQueue();
})();(function(){aps.cfg.bid.shouldRunBidder=function(a){if(!aps.cfg.bid.enabled){return false
}if(!aps.fn.shouldRunThirdParty(a)){return false
}if((aps.cfg.bid.disableMobile||aps.cfg.bid.disabledOnMobile.indexOf(a)>-1)&&(aps.cfg.bid.current_device==devices.MOBILE||aps.cfg.bid.current_device==devices.TABLET)){return false
}return true
};
aps.registerEvent(aps.event.on_before_request_ads,function(a){if(!aps.cfg.bid.enabled){return
}aps.cfg.bid.googletagSlots=googletag.pubads().getSlots();
var b=aps.cfg.bid.googletagSlots.filter(function(c){return a.ads.indexOf(c.getSlotElementId())>-1
});
b.forEach(function(d){try{aps.cfg.bid.pb.keys=aps.cfg.bid.pb.keys||[];
if(aps.cfg.bid.pb.keys.length==0){pbjs.bidderSettings.standard.adserverTargeting.map(function(e){aps.cfg.bid.pb.keys.push(e.key)
});
aps.cfg.bid.pb.keys=aps.cfg.bid.pb.keys.concat(["hb_size","hb_pb","hb_cache_path","hb_cache_host","hb_bidder"])
}var f=d.getTargetingMap();
Object.entries(f).forEach(function(e){if((aps.cfg.bid.pb.keys.indexOf(e[0])>-1&&aps.cfg.bid.pb.enableOptimization)){d.clearTargeting(e[0])
}if((e[0].startsWith("amzn")&&aps.cfg.bid.a9.enableOptimization)){d.clearTargeting(e[0])
}})
}catch(c){}});
pbjs.setTargetingForGPTAsync&&pbjs.setTargetingForGPTAsync(a.ads);
if(aps.cfg.bid.a9.enabled&&typeof apstag!="undefined"){apstag&&apstag.setDisplayBids()
}aps.fn.setPerformanceMetrics(null,"Bid targeting set")
});
aps.registerEvent(aps.event.on_get_bids,function(c){if(!aps.cfg.bid.enabled){return
}var b=[];
var a=aps.cfg.page.current.scrollDepth;
Object.entries(aps.cfg.ads).map(function(d){var d=d[1];
if(d.code=="Crown"){return
}if(d.scrollDepth<a){return
}var e=d.getPage();
e.adIds=e.adIds||[];
if(!e.adIds.includes(d.code)){e.adIds.push(d.code)
}if(aps.cfg.bid.a9.enabled){if(e.a9==null){e.a9={};
e.a9.config=JSON.parse(JSON.stringify(aps.cfg.bid.a9.config));
e.a9.config.params={};
e.a9.config.params.si_section=aps.cfg.bid.a9.getSection&&aps.cfg.bid.a9.getSection(e);
e.a9.config.params.us_privacy=(aps.cfg.doNotSell)?"1YYY":"1---";
e.a9.ads=[];
e.a9.adIds=[]
}if(d.a9!=null&&!e.a9.adIds.includes(d.code)){e.a9.ads.push(d.a9);
e.a9.adIds.push(d.code)
}}if(aps.cfg.bid.enabled){if(e.pb==null){e.pb={};
e.pb.ads=[];
e.pb.adIds=[]
}if(d.pb!=null&&!e.pb.adIds.includes(d.code)){e.pb.ads.push(d.pb);
e.pb.adIds.push(d.code)
}}if(aps.cfg.limitToOneBidOnSfGateIPhone&&e.pbBidsReceived&&e.a9BidsReceived&&e.domain=="sfgate.com"&&aps.cfg.iPhone){}else{if(!b.includes(e)){b.push(e)
}}});
if(b.length>0){if(!aps.cfg.bid.prefetch.lastFull||aps.fn.now()-aps.cfg.bid.prefetch.lastFull>4*60000){aps.cfg.bid.prefetch.lastFull=aps.fn.now();
c=null;
aps.logInfo("Requesting all bids")
}aps.fireEvent(aps.event.on_request_bid,{pages:b,slotIds:c})
}})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("appnexus")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.appnexus={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314287},},"728x90":{"atf":{"placementId":13150335},"btf":{"placementId":13150390},"stf":{"placementId":13150368},},"320x50":{"mad":{"placementId":13150719},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13150438,13150564)},"btf":{"placementId":aps.fn.desktopOrMobile(13150481,13150616)},"stf":{"placementId":aps.fn.desktopOrMobile(13150464,13150595)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692502,13692509)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692510,13692511)},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17044963},},"728x90":{"atf":{"placementId":17044965},"btf":{"placementId":17044966},"stf":{"placementId":17044967},},"320x50":{"mad":{"placementId":17044968},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(17044969,17044970)},"btf":{"placementId":aps.fn.desktopOrMobile(17044971,17044972)},"stf":{"placementId":aps.fn.desktopOrMobile(17044973,17044974)},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314293},},"728x90":{"atf":{"placementId":13205042},"btf":{"placementId":13205043},"stf":{"placementId":13205044},},"320x50":{"mad":{"placementId":13205045},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205052,13205053)},"btf":{"placementId":aps.fn.desktopOrMobile(13205054,13205055)},"stf":{"placementId":aps.fn.desktopOrMobile(13205056,13205057)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692512,13692513)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692514,13692515)},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314297},},"728x90":{"atf":{"placementId":13205113},"btf":{"placementId":13205114},"stf":{"placementId":13205115},},"320x50":{"mad":{"placementId":13205116},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205123,13205124)},"btf":{"placementId":aps.fn.desktopOrMobile(13205125,13205126)},"stf":{"placementId":aps.fn.desktopOrMobile(13205127,13205128)},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314302},},"728x90":{"atf":{"placementId":13205198},"btf":{"placementId":13205199},"stf":{"placementId":13205200},},"320x50":{"mad":{"placementId":13205201},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205208,13205209)},"btf":{"placementId":aps.fn.desktopOrMobile(13205210,13205211)},"stf":{"placementId":aps.fn.desktopOrMobile(13205212,13205213)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692516,13692517)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692518,13692519)},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314304},},"728x90":{"atf":{"placementId":13205215},"btf":{"placementId":13205216},"stf":{"placementId":13205217},},"320x50":{"mad":{"placementId":13205218},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205225,13205226)},"btf":{"placementId":aps.fn.desktopOrMobile(13205227,13205228)},"stf":{"placementId":aps.fn.desktopOrMobile(13205229,13205230)},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314313},},"728x90":{"atf":{"placementId":13205365},"btf":{"placementId":13205366},"stf":{"placementId":13205368},},"320x50":{"mad":{"placementId":13205369},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205376,13205377)},"btf":{"placementId":aps.fn.desktopOrMobile(13205379,13205380)},"stf":{"placementId":aps.fn.desktopOrMobile(13205381,13205382)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692529,13692530)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692531,13692532)},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314316},},"728x90":{"atf":{"placementId":13205424},"btf":{"placementId":13205425},"stf":{"placementId":13205426},},"320x50":{"mad":{"placementId":13205427},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205434,13205435)},"btf":{"placementId":aps.fn.desktopOrMobile(13205436,13205437)},"stf":{"placementId":aps.fn.desktopOrMobile(13205438,13205439)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692533,13692534)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692535,13692536)},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314317},},"728x90":{"atf":{"placementId":13205441},"btf":{"placementId":13205442},"stf":{"placementId":13205443},},"320x50":{"mad":{"placementId":13205444},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205452,13205453)},"btf":{"placementId":aps.fn.desktopOrMobile(13205454,13205455)},"stf":{"placementId":aps.fn.desktopOrMobile(13205456,13205457)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692537,13692538)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692539,13692540)},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":20996413},},"728x90":{"atf":{"placementId":20996436},"btf":{"placementId":20996448},"stf":{"placementId":20996458},},"320x50":{"mad":{"placementId":20996464},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(20996475,20996482)},"btf":{"placementId":aps.fn.desktopOrMobile(20996494,20996509)},"stf":{"placementId":aps.fn.desktopOrMobile(20996517,20996522)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692547,13692549)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692550,13692551)},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314323},},"728x90":{"atf":{"placementId":13205556},"btf":{"placementId":13205557},"stf":{"placementId":13205558},},"320x50":{"mad":{"placementId":13205559},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205569,13205570)},"btf":{"placementId":aps.fn.desktopOrMobile(13205571,13205572)},"stf":{"placementId":aps.fn.desktopOrMobile(13205573,13205574)},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314324},},"728x90":{"atf":{"placementId":13205576},"btf":{"placementId":13205577},"stf":{"placementId":13205578},},"320x50":{"mad":{"placementId":13205580},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205587,13205588)},"btf":{"placementId":aps.fn.desktopOrMobile(13205589,13205590)},"stf":{"placementId":aps.fn.desktopOrMobile(13205591,13205592)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692552,13692553)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692555,13692556)},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314328},},"728x90":{"atf":{"placementId":13205646},"btf":{"placementId":13205647},"stf":{"placementId":13205648},},"320x50":{"mad":{"placementId":13205649},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205656,13205657)},"btf":{"placementId":aps.fn.desktopOrMobile(13205658,13205659)},"stf":{"placementId":aps.fn.desktopOrMobile(13205660,13205661)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692557,13692558)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692560,13692562)},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314333},},"728x90":{"atf":{"placementId":13205715},"btf":{"placementId":13205716},"stf":{"placementId":13205717},},"320x50":{"mad":{"placementId":13205718},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205726,13205727)},"btf":{"placementId":aps.fn.desktopOrMobile(13205728,13205729)},"stf":{"placementId":aps.fn.desktopOrMobile(13205730,13205731)},},"640x480":{"apv":{"placementId":aps.fn.desktopOrMobile(13692572,13692573)},"ctp":{"placementId":aps.fn.desktopOrMobile(13692574,13692575)},}};
break;
case"weekand.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":30423081},},"728x90":{"atf":{"placementId":30423077},"btf":{"placementId":30423077},"stf":{"placementId":30423077},},"320x50":{"mad":{"placementId":30423103},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(30423071,30423131)},"btf":{"placementId":aps.fn.desktopOrMobile(30423071,30423131)},"stf":{"placementId":aps.fn.desktopOrMobile(30423071,30423131)},},};
break;
default:aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314308},},"728x90":{"atf":{"placementId":13205283},"btf":{"placementId":13205284},"stf":{"placementId":13205285},},"320x50":{"mad":{"placementId":13205286},},"300x250":{"atf":{"placementId":aps.fn.desktopOrMobile(13205294,13205296)},"btf":{"placementId":aps.fn.desktopOrMobile(13205297,13205298)},"stf":{"placementId":aps.fn.desktopOrMobile(13205299,13205300)},},};
break
}aps.cfg.bid.pb.data.appnexus.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.appnexus.extra.hasVideo=true;
aps.cfg.bid.pb.data.appnexus.extra.run=prebid_source.SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("concert")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.concert={};
switch(aps.cfg.current_domain){case"bigrapidsnews.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"bigrapidsnews"},},};
break;
case"chron.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"chron"},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"ctinsider"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"connecticut_post"},},};
break;
case"darientimes.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"darientimes"},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"san_antonio_express_news"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"greenwich_time"},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"houston_chronicle"},},};
break;
case"lakecountystar.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"lakecountystar"},},};
break;
case"milfordmirror.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"milfordmirror"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"my_san_antonio"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"news_times"},},};
break;
case"ncadvertiser.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"ncadvertiser"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"new_haven_register"},},};
break;
case"recordpatriot.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"recordpatriot"},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"seattle_pi"},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"sf_chronicle"},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"sf_gate"},},};
break;
case"sheltonherald.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"sheltonherald"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"the_advocate"},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"times_union"},}};
break;
case"theheraldreview.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"theheraldreview"},}};
break;
case"theridgefieldpress.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"theridgefieldpress"},}};
break;
case"trumbulltimes.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"trumbulltimes"},}};
break;
case"weekand.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"weekand"},}};
break;
case"wiltonbulletin.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"wiltonbulletin"},}};
break;
case"workand.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"workand"},}};
break;
default:aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"middletownpress"},},};
break
}aps.cfg.bid.pb.data.concert["620x366"]=aps.cfg.bid.pb.data.concert["501x501"];
aps.cfg.bid.pb.data.concert["325x204"]=aps.cfg.bid.pb.data.concert["501x501"];
aps.cfg.bid.pb.data.concert["325x508"]=aps.cfg.bid.pb.data.concert["501x501"];
pbjs.que.push(function(){pbjs.bidderSettings=pbjs.bidderSettings||{};
pbjs.bidderSettings.concert={storageAllowed:true}
});
aps.cfg.bid.pb.data.concert.extra=aps.fn.setPrebidDefault()
})();(function(){if(!aps.cfg.bid.shouldRunBidder("criteo")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.criteo={"params":{"networkId":2333},};
pbjs.que.push(function(){pbjs.setConfig({"criteo":{fastBidVersion:"latest",}})
});
aps.cfg.bid.pb.data.criteo.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.criteo.extra.uniqueId=true;
aps.cfg.bid.pb.data.criteo.extra.isSizeless=true
})();(function(){if(!aps.cfg.bid.shouldRunBidder("ix")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.ix={"728x90":{"atf":{"siteId":"208030"},"btf":{"siteId":"208034"},"stf":{"siteId":"507908"},},"336x280":{"atf":{"siteId":"507897"},"btf":{"siteId":"507898"},"stf":{"siteId":"507899"},},"320x50":{"mad":{"siteId":"208044"},},"320x100":{"atf":{"siteId":"507903"},"btf":{"siteId":"507904"},"stf":{"siteId":"507905"},},"300x600":{"atf":{"siteId":"208039"},"btf":{"siteId":"507906"},"stf":{"siteId":"507907"},},"300x250":{"atf":{"siteId":"208031"},"btf":{"siteId":"208033"},"stf":{"siteId":"208035"},},"160x600":{"atf":{"siteId":"507900"},"btf":{"siteId":"507901"},"stf":{"siteId":"507902"},},};
aps.cfg.bid.pb.data.ix.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.ix.extra.splitBySize=true;
aps.cfg.bid.pb.data.ix.extra.uniqueId=true
})();(function(){if(!aps.cfg.bid.shouldRunBidder("kargo")||aps.cfg.is.kfsWidget){return
}if(current_device!=devices.MOBILE){return
}aps.cfg.bid.pb.data.kargo={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_flGiZRK3cN"},},"300x250":{"atf":{"placementId":"_vBAW1QFeiu"},"btf":{"placementId":"_oHaM3Rzynf"},"stf":{"placementId":"_agLlfOvajP"},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_kraDkgJg1r"},},"300x250":{"atf":{"placementId":"_kwEPdHslnz"},"btf":{"placementId":"_oJIWhHMgmk"},"stf":{"placementId":"_sZ2mbOzb6J"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_qWwVIYkw0V"},},"300x250":{"atf":{"placementId":"_ibCN80mYke"},"btf":{"placementId":"_yXzuJeuBNf"},"stf":{"placementId":"_rSi6pZSN16"},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.kargo={"300x250":{"atf":{"placementId":"_gqZOyyXfzr"},"btf":{"placementId":"_wMALoG5ZlL"},"stf":{"placementId":"_ybqq4GQdbr"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_ioKbom1kHf"},},"300x250":{"atf":{"placementId":"_rZNtNZx8hM"},"btf":{"placementId":"_lCTWc3uC5X"},"stf":{"placementId":"_c2C6M0m99I"},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.kargo={"300x250":{"atf":{"placementId":"_hTrZgnz4jO"},"btf":{"placementId":"_cFb0KjYUJw"},"stf":{"placementId":"_gymUKVhxJU"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_lo84Y7M9N1"},},"300x250":{"atf":{"placementId":"_s4JNyM7QQu"},"btf":{"placementId":"_uTcpGXu3y3"},"stf":{"placementId":"_onUcYTFkew"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_pjFOHKDPm8"},},"300x250":{"atf":{"placementId":"_zMzS2qBgWN"},"btf":{"placementId":"_nAhL8Y5EX6"},"stf":{"placementId":"_gE5mwSwgwa"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_mu1aqVI37K"},},"300x250":{"atf":{"placementId":"_bo4gGKggRc"},"btf":{"placementId":"_hVYG8Mi0bg"},"stf":{"placementId":"_x4JCHZ1XPc"},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_jycOgNaiQr"},},"300x250":{"atf":{"placementId":"_fmLd3zb1Q3"},"btf":{"placementId":"_dDYDbbIwzh"},"stf":{"placementId":"_jB7tkrrsry"},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.kargo={"300x250":{"atf":{"placementId":"_cI53AI7yoI"},"btf":{"placementId":"_qRyvePzXsF"},"stf":{"placementId":"_oBo1TPTOoe"},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_nFjRNfQmNq"},},"300x250":{"atf":{"placementId":"_yo9o0NA9zM"},"btf":{"placementId":"_n1h12oiT70"},"stf":{"placementId":"_noATLH9Qo7"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_qL9m0BXOtz"},},"300x250":{"atf":{"placementId":"_j9kQwPz1EX"},"btf":{"placementId":"_y5YkGmNrgy"},"stf":{"placementId":"_aQSrfMcyGS"},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_fIpC6u7jwu"},},"300x250":{"atf":{"placementId":"_o06npuKIR3"},"btf":{"placementId":"_mg0IWT5oNO"},"stf":{"placementId":"_oNPTr5d6ui"},},};
break;
case"weekand.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_mnTm6VyIKb"},},"300x250":{"atf":{"placementId":"_r30warTt51"},"btf":{"placementId":"_r30warTt51"},"stf":{"placementId":"_r30warTt51"},},};
break
}aps.cfg.bid.pb.data.kargo.extra=aps.fn.setPrebidDefault()
})();(function(){if(!aps.cfg.bid.shouldRunBidder("openx")||aps.cfg.is.kfsWidget){return
}if(aps.cfg.page.current.domain=="greenstate.com"){return
}aps.cfg.bid.pb.data.openx={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210305,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210302,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210303,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210304,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210309,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210299,540210306),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210300,540210307),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210301,540210308),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539993311,539993318),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539993313,539993320),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210360,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210357,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210358,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210359,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210364,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210354,540210361),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210355,540210362),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210356,540210363),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539993372,539993376),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539993374,539993378),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210405,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210402,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210403,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210404,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210409,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210399,540210406),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210400,540210407),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210401,540210408),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210460,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210457,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210458,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210459,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210464,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210454,540210461),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210455,540210462),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210456,540210463),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(540237519,540237531),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(540237523,540237551),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210471,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210468,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210469,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210470,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210475,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210465,540210472),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210466,540210473),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210467,540210474),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210560,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210557,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210558,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210559,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210564,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210554,540210561),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210555,540210562),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210556,540210563),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539977983,539978039),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539976915,539977552),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210594,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210591,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210592,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210593,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210598,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210588,540210595),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210589,540210596),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210590,540210597),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(540237573,540238064),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(540237988,540238118),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210605,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210602,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210603,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210604,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210609,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210599,540210606),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210600,540210607),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210601,540210608),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(540237575,540238066),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(540237990,540238120),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":543886214,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":543886216,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":543886217,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":543886218,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210642,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(543886220,543886221),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(543886222,543886215),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(543886224,540210641),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539993329,539993337),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539993333,539993341),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210671,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210668,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210669,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210670,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210675,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210665,540210672),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210666,540210673),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210667,540210674),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210682,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210679,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210680,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210681,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210686,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210676,540210683),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210677,540210684),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210678,540210685),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539992256,539992305),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539992169,539992237),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210726,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210723,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210724,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210725,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210730,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210720,540210727),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210721,540210728),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210722,540210729),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(540237579,540238071),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(540237994,540238124),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210771,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210768,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210769,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210770,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210775,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210765,540210772),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210766,540210773),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210767,540210774),"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.fn.desktopOrMobile(539993355,539993359),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.fn.desktopOrMobile(539993357,539993361),"delDomain":"hearstnewspapers-d.openx.net"},}};
break;
case"weekand.com":aps.cfg.bid.pb.data.openx={"970x250":{"unit":559277395,"delDomain":"hearstnewspapers-d.openx.net"},"728x90":{"unit":559277394,"delDomain":"hearstnewspapers-d.openx.net"},"320x50":{"unit":559277391,"delDomain":"hearstnewspapers-d.openx.net"},"300x250":{"unit":aps.fn.desktopOrMobile(559277393,559277392),"delDomain":"hearstnewspapers-d.openx.net"},};
break;
default:aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210515,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210512,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210513,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210514,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210519,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.fn.desktopOrMobile(540210509,540210516),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.fn.desktopOrMobile(540210510,540210517),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.fn.desktopOrMobile(540210511,540210518),"delDomain":"hearstnewspapers-d.openx.net"},},};
break
}aps.cfg.bid.pb.data.openx.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.openx.extra.hasVideo=true;
aps.cfg.bid.pb.data.openx.extra.run=prebid_source.SERVER
})();(function(){if(!aps.cfg.bid.shouldRunBidder("optimeraRTD")){return
}aps.cfg.bid.pb.Optimera_above70=["A0","A1","A2","A3","A7","A8","A9","B0","B4","B5","B6","B7","C1","C2","C3","C4","C8","C9","D0","D1","D5","D6","D7","D8","E2","E3","E4","E5","E9","F0","F1","F2","F6","F7","F8","F9","G3","G4","G5","G6","H0","H1","H2","H3","H7","H8","H9","I0","I4","I5","I6","I7"];
aps.fn.logInfo("enabling optimera RTD provider for Prebid");
var c=document.createElement("script");
c.src="https://d15kdpgjg3unno.cloudfront.net/oPS.js?cid=31";
c.id="optimera-ops";
var b=document.getElementsByTagName("html")[0].children;
b[(b.length>1)?1:0].appendChild(c);
var a=["","de","mo","tb"];
aps.cfg.bid.pb.dataProviders.push({name:"optimeraRTD",waitForIt:true,params:{clientID:"31",optimeraKeyName:"hb_deal_optimera",device:a[current_device]}});
aps.registerEvent(aps.event.on_before_request_ads,function(e){if(!pbjs.getAdserverTargeting){return
}var d=pbjs.getAdserverTargeting();
Object.entries(d).forEach(function(f){var g=f[0];
var h=aps.cfg.dfp.googleSlots[g];
if(!h){return
}if(f[1]["hb_deal_optimera"]){aps.fn.logInfo("pb set targeting "+aps.fn.fixLen(g,10)+" hb_deal_optimera = "+f[1]["hb_deal_optimera"]);
h.setTargeting("hb_deal_optimera",f[1]["hb_deal_optimera"])
}})
})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("permutiveRTD")){return
}aps.fn.logInfo("enabling permutive RTD provider for Prebid");
aps.cfg.bid.pb.dataProviders.push({name:"permutive",waitForIt:true,params:{acBidders:["appnexus","rubicon","pubmatic","openx"],maxSegs:100,}})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("pubmatic")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.pubmatic={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"chron.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"chron.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"chron.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"chron.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"chron.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("chron.com_300x250_AD@300x250","chron.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("chron.com_300x250_BD@300x250","chron.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("chron.com_300x250_SD@300x250","chron.com_300x250_SM@300x250")},},};
break;
case"comicskingdom.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"comicskingdom.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"comicskingdom.com_728x90_AD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"comicskingdom.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("comicskingdom.com_300x250_AD@300x250","comicskingdom.com_300x250_AM@300x250")},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"ctinsider.com_970x250_AD@970x250"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"ctinsider.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"ctinsider.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"ctinsider.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"ctinsider.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctinsider.com_300x250_AD@300x250","ctinsider.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctinsider.com_300x250_BD@300x250","ctinsider.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctinsider.com_300x250_SD@300x250","ctinsider.com_300x250_SM@300x250")},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"ctpost.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"ctpost.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"ctpost.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"ctpost.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"ctpost.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctpost.com_300x250_AD@300x250","ctpost.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctpost.com_300x250_BD@300x250","ctpost.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("ctpost.com_300x250_SD@300x250","ctpost.com_300x250_SM@300x250")},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"expressnews.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"expressnews.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"expressnews.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"expressnews.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"expressnews.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("expressnews.com_300x250_AD@300x250","expressnews.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("expressnews.com_300x250_BD@300x250","expressnews.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("expressnews.com_300x250_SD@300x250","expressnews.com_300x250_SM@300x250")},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"greenwichtime.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"greenwichtime.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"greenwichtime.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"greenwichtime.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"greenwichtime.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("greenwichtime.com_300x250_AD@300x250","greenwichtime.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("greenwichtime.com_300x250_BD@300x250","greenwichtime.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("greenwichtime.com_300x250_SD@300x250","greenwichtime.com_300x250_SM@300x250")},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"houstonchronicle.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"houstonchronicle.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"houstonchronicle.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"houstonchronicle.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"houstonchronicle.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("houstonchronicle.com_300x250_AD@300x250","houstonchronicle.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("houstonchronicle.com_300x250_BD@300x250","houstonchronicle.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("houstonchronicle.com_300x250_SD@300x250","houstonchronicle.com_300x250_SM@300x250")},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"mysanantonio.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"mysanantonio.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"mysanantonio.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"mysanantonio.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"mysanantonio.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("mysanantonio.com_300x250_AD@300x250","mysanantonio.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("mysanantonio.com_300x250_BD@300x250","mysanantonio.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("mysanantonio.com_300x250_SD@300x250","mysanantonio.com_300x250_SM@300x250")},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"newstimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"newstimes.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"newstimes.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"newstimes.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"newstimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newstimes.com_300x250_AD@300x250","newstimes.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newstimes.com_300x250_BD@300x250","newstimes.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newstimes.com_300x250_SD@300x250","newstimes.com_300x250_SM@300x250")},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"nhregister.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"nhregister.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"nhregister.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"nhregister.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"nhregister.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("nhregister.com_300x250_AD@300x250","nhregister.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("nhregister.com_300x250_BD@300x250","nhregister.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("nhregister.com_300x250_SD@300x250","nhregister.com_300x250_SM@300x250")},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"newseattlepi.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"newseattlepi.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"newseattlepi.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"newseattlepi.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"newseattlepi.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newseattlepi.com_300x250_AD@300x250","newseattlepi.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newseattlepi.com_300x250_BD@300x250","newseattlepi.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("newseattlepi.com_300x250_SD@300x250","newseattlepi.com_300x250_SM@300x250")},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"sfchronicle.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"sfchronicle.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"sfchronicle.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"sfchronicle.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"sfchronicle.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfchronicle.com_300x250_AD@300x250","sfchronicle.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfchronicle.com_300x250_BD@300x250","sfchronicle.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfchronicle.com_300x250_SD@300x250","sfchronicle.com_300x250_SM@300x250")},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"sfgate.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"sfgate.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"sfgate.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"sfgate.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"sfgate.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfgate.com_300x250_AD@300x250","sfgate.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfgate.com_300x250_BD@300x250","sfgate.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("sfgate.com_300x250_SD@300x250","sfgate.com_300x250_SM@300x250")},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"stamfordadvocate.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"stamfordadvocate.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"stamfordadvocate.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"stamfordadvocate.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"stamfordadvocate.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("stamfordadvocate.com_300x250_AD@300x250","stamfordadvocate.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("stamfordadvocate.com_300x250_BD@300x250","stamfordadvocate.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("stamfordadvocate.com_300x250_SD@300x250","stamfordadvocate.com_300x250_SM@300x250")},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"timesunion.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"timesunion.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"timesunion.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"timesunion.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"timesunion.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("timesunion.com_300x250_AD@300x250","timesunion.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("timesunion.com_300x250_BD@300x250","timesunion.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("timesunion.com_300x250_SD@300x250","timesunion.com_300x250_SM@300x250")},}};
break;
case"weekand.com":aps.cfg.bid.pb.data.pubmatic={"params":{"publisherId":"157076","adSlot":"weekand_display"}};
aps.cfg.bid.pb.data.pubmatic.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.pubmatic.extra.uniqueId=true;
aps.cfg.bid.pb.data.pubmatic.extra.isSizeless=true;
break;
default:aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":"157076","adSlot":"middletownpress.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":"157076","adSlot":"middletownpress.com_728x90_AD@728x90"},"btf":{"publisherId":"157076","adSlot":"middletownpress.com_728x90_BD@728x90"},"stf":{"publisherId":"157076","adSlot":"middletownpress.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":"157076","adSlot":"middletownpress.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("middletownpress.com_300x250_AD@300x250","middletownpress.com_300x250_AM@300x250")},"btf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("middletownpress.com_300x250_BD@300x250","middletownpress.com_300x250_BM@300x250")},"stf":{"publisherId":"157076","adSlot":aps.fn.desktopOrMobile("middletownpress.com_300x250_SD@300x250","middletownpress.com_300x250_SM@300x250")},},};
break
}if(!aps.cfg.bid.pb.data.pubmatic.extra){aps.cfg.bid.pb.data.pubmatic.extra=aps.fn.setPrebidDefault()
}aps.cfg.bid.pb.data.pubmatic.extra.run=prebid_source.SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("rubicon")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.rubicon={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036492,"siteId":210788},},"728x90":{"atf":{"accountId":9095,"zoneId":1036492,"siteId":210788},"btf":{"accountId":9095,"zoneId":1036502,"siteId":210788},"stf":{"accountId":9095,"zoneId":1036504,"siteId":210788},},"320x50":{"mad":{"accountId":9095,"zoneId":1036520,"siteId":210794},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036492,1036512),"siteId":aps.fn.desktopOrMobile(210788,210794)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036502,1036516),"siteId":aps.fn.desktopOrMobile(210788,210794)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036504,1036524),"siteId":aps.fn.desktopOrMobile(210788,210794)},},};
break;
case"comicskingdom.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":2991974,"siteId":502542},},"728x90":{"atf":{"accountId":9095,"zoneId":2991974,"siteId":502542},"btf":{"accountId":9095,"zoneId":2991976,"siteId":502542},"stf":{"accountId":9095,"zoneId":2991976,"siteId":502542},},"320x50":{"mad":{"accountId":9095,"zoneId":2991978,"siteId":502544},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(2991974,2991978),"siteId":aps.fn.desktopOrMobile(502542,502544)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(2991974,2991978),"siteId":aps.fn.desktopOrMobile(502542,502544)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(2991974,2991978),"siteId":aps.fn.desktopOrMobile(502542,502544)},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1190206,"siteId":241246},},"728x90":{"atf":{"accountId":9095,"zoneId":1190206,"siteId":241246},"btf":{"accountId":9095,"zoneId":1190208,"siteId":241246},"stf":{"accountId":9095,"zoneId":1190212,"siteId":241246},},"320x50":{"mad":{"accountId":9095,"zoneId":1190214,"siteId":241248},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1190206,1190214),"siteId":aps.fn.desktopOrMobile(241246,241248)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1190208,1190216),"siteId":aps.fn.desktopOrMobile(241246,241248)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1190212,1190218),"siteId":aps.fn.desktopOrMobile(241246,241248)},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036624,"siteId":210828},},"728x90":{"atf":{"accountId":9095,"zoneId":1036624,"siteId":210828},"btf":{"accountId":9095,"zoneId":1036626,"siteId":210828},"stf":{"accountId":9095,"zoneId":1036628,"siteId":210828},},"320x50":{"mad":{"accountId":9095,"zoneId":1036634,"siteId":210832},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036624,1036630),"siteId":aps.fn.desktopOrMobile(210828,210832)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036626,1036632),"siteId":aps.fn.desktopOrMobile(210828,210832)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036628,1036636),"siteId":aps.fn.desktopOrMobile(210828,210832)},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036680,"siteId":210846},},"728x90":{"atf":{"accountId":9095,"zoneId":1036680,"siteId":210846},"btf":{"accountId":9095,"zoneId":1036682,"siteId":210846},"stf":{"accountId":9095,"zoneId":1036686,"siteId":210846},},"320x50":{"mad":{"accountId":9095,"zoneId":1036696,"siteId":210848},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036680,1036690),"siteId":aps.fn.desktopOrMobile(210846,210848)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036682,1036692),"siteId":aps.fn.desktopOrMobile(210846,210848)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036686,1036698),"siteId":aps.fn.desktopOrMobile(210846,210848)},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036780,"siteId":210872},},"728x90":{"atf":{"accountId":9095,"zoneId":1036780,"siteId":210872},"btf":{"accountId":9095,"zoneId":1036782,"siteId":210872},"stf":{"accountId":9095,"zoneId":1036784,"siteId":210872},},"320x50":{"mad":{"accountId":9095,"zoneId":1036790,"siteId":210874},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036780,1036786),"siteId":aps.fn.desktopOrMobile(210872,210874)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036782,1036788),"siteId":aps.fn.desktopOrMobile(210872,210874)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036784,1036792),"siteId":aps.fn.desktopOrMobile(210872,210874)},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036794,"siteId":210876},},"728x90":{"atf":{"accountId":9095,"zoneId":1036794,"siteId":210876},"btf":{"accountId":9095,"zoneId":1036796,"siteId":210876},"stf":{"accountId":9095,"zoneId":1036798,"siteId":210876},},"320x50":{"mad":{"accountId":9095,"zoneId":1036804,"siteId":210882},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036794,1036800),"siteId":aps.fn.desktopOrMobile(210876,210882)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036796,1036802),"siteId":aps.fn.desktopOrMobile(210876,210882)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036798,1036806),"siteId":aps.fn.desktopOrMobile(210876,210882)},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036966,"siteId":210934},},"728x90":{"atf":{"accountId":9095,"zoneId":1036966,"siteId":210934},"btf":{"accountId":9095,"zoneId":1036968,"siteId":210934},"stf":{"accountId":9095,"zoneId":1036970,"siteId":210934},},"320x50":{"mad":{"accountId":9095,"zoneId":1036976,"siteId":210938},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036966,1036972),"siteId":aps.fn.desktopOrMobile(210934,210938)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036968,1036974),"siteId":aps.fn.desktopOrMobile(210934,210938)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036970,1036978),"siteId":aps.fn.desktopOrMobile(210934,210938)},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037040,"siteId":210964},},"728x90":{"atf":{"accountId":9095,"zoneId":1037040,"siteId":210964},"btf":{"accountId":9095,"zoneId":1037044,"siteId":210964},"stf":{"accountId":9095,"zoneId":1037046,"siteId":210964},},"320x50":{"mad":{"accountId":9095,"zoneId":1037052,"siteId":210966},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037040,1037048),"siteId":aps.fn.desktopOrMobile(210964,210966)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037044,1037050),"siteId":aps.fn.desktopOrMobile(210964,210966)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037046,1037054),"siteId":aps.fn.desktopOrMobile(210964,210966)},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037056,"siteId":210960},},"728x90":{"atf":{"accountId":9095,"zoneId":1037056,"siteId":210960},"btf":{"accountId":9095,"zoneId":1037058,"siteId":210960},"stf":{"accountId":9095,"zoneId":1037060,"siteId":210960},},"320x50":{"mad":{"accountId":9095,"zoneId":1037066,"siteId":210970},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037056,1037062),"siteId":aps.fn.desktopOrMobile(210960,210970)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037058,1037064),"siteId":aps.fn.desktopOrMobile(210960,210970)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037060,1037068),"siteId":aps.fn.desktopOrMobile(210960,210970)},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1963214,"siteId":211012},},"728x90":{"atf":{"accountId":9095,"zoneId":1963216,"siteId":211012},"btf":{"accountId":9095,"zoneId":1963220,"siteId":211012},"stf":{"accountId":9095,"zoneId":1963222,"siteId":211012},},"320x50":{"mad":{"accountId":9095,"zoneId":1963230,"siteId":211014},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1963224,1963232),"siteId":aps.fn.desktopOrMobile(211012,211014)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1963226,1963234),"siteId":aps.fn.desktopOrMobile(211012,211014)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1963228,1963236),"siteId":aps.fn.desktopOrMobile(211012,211014)},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037228,"siteId":211024},},"728x90":{"atf":{"accountId":9095,"zoneId":1037228,"siteId":211024},"btf":{"accountId":9095,"zoneId":1037230,"siteId":211024},"stf":{"accountId":9095,"zoneId":1037232,"siteId":211024},},"320x50":{"mad":{"accountId":9095,"zoneId":1037238,"siteId":211026},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037228,1037234),"siteId":aps.fn.desktopOrMobile(211024,211026)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037230,1037236),"siteId":aps.fn.desktopOrMobile(211024,211026)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037232,1037240),"siteId":aps.fn.desktopOrMobile(211024,211026)},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037242,"siteId":211028},},"728x90":{"atf":{"accountId":9095,"zoneId":1037242,"siteId":211028},"btf":{"accountId":9095,"zoneId":1037244,"siteId":211028},"stf":{"accountId":9095,"zoneId":1037246,"siteId":211028},},"320x50":{"mad":{"accountId":9095,"zoneId":1037252,"siteId":211030},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037242,1037248),"siteId":aps.fn.desktopOrMobile(211028,211030)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037244,1037250),"siteId":aps.fn.desktopOrMobile(211028,211030)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037246,1037254),"siteId":aps.fn.desktopOrMobile(211028,211030)},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037298,"siteId":211044},},"728x90":{"atf":{"accountId":9095,"zoneId":1037298,"siteId":211044},"btf":{"accountId":9095,"zoneId":1037300,"siteId":211044},"stf":{"accountId":9095,"zoneId":1037302,"siteId":211044},},"320x50":{"mad":{"accountId":9095,"zoneId":1037308,"siteId":211046},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037298,1037304),"siteId":aps.fn.desktopOrMobile(211044,211046)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037300,1037306),"siteId":aps.fn.desktopOrMobile(211044,211046)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037302,1037310),"siteId":aps.fn.desktopOrMobile(211044,211046)},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037354,"siteId":211060},},"728x90":{"atf":{"accountId":9095,"zoneId":1037354,"siteId":211060},"btf":{"accountId":9095,"zoneId":1037356,"siteId":211060},"stf":{"accountId":9095,"zoneId":1037358,"siteId":211060},},"320x50":{"mad":{"accountId":9095,"zoneId":1037364,"siteId":211062},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037354,1037360),"siteId":aps.fn.desktopOrMobile(211060,211062)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037356,1037362),"siteId":aps.fn.desktopOrMobile(211060,211062)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1037358,1037366),"siteId":aps.fn.desktopOrMobile(211060,211062)},}};
break;
case"weekand.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"accountId":9095,"zoneId":2873388,"siteId":484602},"728x90":{"accountId":9095,"zoneId":2873386,"siteId":484602},"320x50":{"accountId":9095,"zoneId":2873390,"siteId":484604},"300x250":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(2873384,2873392),"siteId":aps.fn.desktopOrMobile(484602,484604)},};
break;
case"workand.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"accountId":9095,"zoneId":2957474,"siteId":497444},"728x90":{"accountId":9095,"zoneId":2957472,"siteId":497444},"320x50":{"accountId":9095,"zoneId":2957476,"siteId":497444},"300x250":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(2957478,2957470),"siteId":aps.fn.desktopOrMobile(484602,497444)},};
break;
default:aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036872,"siteId":210912},},"728x90":{"atf":{"accountId":9095,"zoneId":1036872,"siteId":210912},"btf":{"accountId":9095,"zoneId":1036874,"siteId":210912},"stf":{"accountId":9095,"zoneId":1036876,"siteId":210912},},"320x50":{"mad":{"accountId":9095,"zoneId":1036920,"siteId":210914},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036872,1036916),"siteId":aps.fn.desktopOrMobile(210912,210914)},"btf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036874,1036918),"siteId":aps.fn.desktopOrMobile(210912,210914)},"stf":{"accountId":9095,"zoneId":aps.fn.desktopOrMobile(1036876,1036922),"siteId":aps.fn.desktopOrMobile(210912,210914)},},};
break
}aps.cfg.bid.pb.data.rubicon.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.rubicon.extra.run=prebid_source.SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("triplelift")||aps.cfg.is.kfsWidget){return
}aps.cfg.bid.pb.data.triplelift={};
switch(aps.cfg.current_domain){case"chron.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"chron_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"chron_DT_728_HDX_pb"},"btf":{"inventoryCode":"chron_DT_b728_flex_pb"},"stf":{"inventoryCode":"chron_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"chron_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"chron_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("chron_DT_a300_flex_pb","chron_MO_a300_flex_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("chron_DT_b300_flex_pb","chron_MO_b300_flex_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("chron_DT_s300_flex_pb","chron_M_HDX_pb")},},};
break;
case"comicskingdom.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"comicskingdom_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"comicskingdom_DT_a728_pb"},"btf":{"inventoryCode":"comicskingdom_DT_b728_pb"},"stf":{"inventoryCode":"comicskingdom_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"comicskingdom_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"comicskingdom_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("comicskingdom_DT_a300_pb","comicskingdom_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("comicskingdom_DT_b300_pb","comicskingdom_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("comicskingdom_DT_s300_pb","comicskingdom_MO_s300_pb")},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"ctinsider_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"ctinsider_DT_a728_pb"},"btf":{"inventoryCode":"ctinsider_DT_b728_pb"},"stf":{"inventoryCode":"ctinsider_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"ctinsider_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"ctinsider_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("ctinsider_DT_a300_pb","ctinsider_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("ctinsider_DT_b300_pb","ctinsider_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("ctinsider_DT_s300_pb","ctinsider_MO_s300_pb")},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"ctpost_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},"btf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},"stf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"ctpost_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"ctpost_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("ctpost_DT_a300_flex_pb","ctpost_M_HDX_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("ctpost_DT_b300_flex_pb","ctpost_M_HDX_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("ctpost_DT_s300_flex_pb","ctpost_M_HDX_pb")},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"expressnews_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"expressnews_DT_a728_pb"},"btf":{"inventoryCode":"expressnews_DT_b728_pb"},"stf":{"inventoryCode":"expressnews_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"expressnews_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"expressnews_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("expressnews_DT_a300_pb","expressnews_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("expressnews_DT_b300_pb","expressnews_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("expressnews_DT_s300_pb","expressnews_MO_s300_pb")},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"greenwichtime_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"greenwichtime_DT_a728_pb"},"btf":{"inventoryCode":"greenwichtime_DT_b728_pb"},"stf":{"inventoryCode":"greenwichtime_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"greenwichtime_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"greenwichtime_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("greenwichtime_DT_a300_pb","greenwichtime_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("greenwichtime_DT_b300_pb","greenwichtime_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("greenwichtime_DT_s300_pb","greenwichtime_MO_s300_pb")},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"houstonchronicle_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"houstonchronicle_DT_a728_pb"},"btf":{"inventoryCode":"houstonchronicle_DT_b728_pb"},"stf":{"inventoryCode":"houstonchronicle_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"houstonchronicle_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"houstonchronicle_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("houstonchronicle_DT_a300_pb","houstonchronicle_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("houstonchronicle_DT_b300_pb","houstonchronicle_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("houstonchronicle_DT_s300_pb","houstonchronicle_MO_s300_pb")},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"mysanantonio_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},"btf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},"stf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"mysanantonio_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"mysanantonio_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("mysanantonio_DT_a300_flex_pb","mysanantonio_M_HDX_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("mysanantonio_DT_b300_flex_pb","mysanantonio_M_HDX_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("mysanantonio_DT_s300_flex_pb","mysanantonio_M_HDX_pb")},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"newstimes_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"newstimes_DT_a728_pb"},"btf":{"inventoryCode":"newstimes_DT_b728_pb"},"stf":{"inventoryCode":"newstimes_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"newstimes_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"newstimes_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("newstimes_DT_a300_pb","newstimes_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("newstimes_DT_b300_pb","newstimes_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("newstimes_DT_s300_pb","newstimes_MO_s300_pb")},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"nhregister_DT_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"nhregister_DT_HDX_pb"},"btf":{"inventoryCode":"nhregister_DT_HDX_pb"},"stf":{"inventoryCode":"nhregister_DT_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"nhregister_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"nhregister_MO_MAD_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("nhregister_DT_a300_pb","nhregister_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("nhregister_DT_b300_pb","nhregister_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("nhregister_DT_s300_pb","nhregister_MO_s300_pb")},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"newseattlepi_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},"btf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},"stf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"newseattlepi_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"newseattlepi_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("newseattlepi_DT_a300_flex_pb","newseattlepi_M_HDX_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("newseattlepi_DT_b300_flex_pb","newseattlepi_M_HDX_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("newseattlepi_DT_s300_flex_pb","newseattlepi_M_HDX_pb")},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"sfchronicle_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"sfchronicle_DT_a728_pb"},"btf":{"inventoryCode":"sfchronicle_DT_b728_pb"},"stf":{"inventoryCode":"sfchronicle_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"sfchronicle_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"sfchronicle_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("sfchronicle_DT_a300_pb","sfchronicle_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("sfchronicle_DT_b300_pb","sfchronicle_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("sfchronicle_DT_s300_pb","sfchronicle_MO_s300_pb")},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"sfgate_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"sfgate_DT_728_HDX_pb"},"btf":{"inventoryCode":"sfgate_DT_b728_flex_pb"},"stf":{"inventoryCode":"sfgate_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"sfgate_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"sfgate_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("sfgate_DT_a300_flex_pb","sfgate_M_HDX_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("sfgate_DT_b300_flex_pb","sfgate_M_HDX_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("sfgate_DT_s300_flex_pb","sfgate_M_HDX_pb")},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"stamfordadvocate_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"stamfordadvocate_DT_a728_pb"},"btf":{"inventoryCode":"stamfordadvocate_DT_b728_pb"},"stf":{"inventoryCode":"stamfordadvocate_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"stamfordadvocate_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"stamfordadvocate_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("stamfordadvocate_DT_a300_pb","stamfordadvocate_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("stamfordadvocate_DT_b300_pb","stamfordadvocate_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("stamfordadvocate_DT_s300_pb","stamfordadvocate_MO_s300_pb")},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"timesunion_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},"btf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},"stf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"timesunion_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"timesunion_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("timeunion_DT_a300_flex_pb","timesunion_M_HDX_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("timesunion_DT_b300_flex_pb","timesunion_M_HDX_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("timeunion_DT_s300_flex_pb","timesunion_M_HDX_pb")},},};
break;
case"weekand.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"Weekand_970x250_ATF_Desktop"},},"728x90":{"atf":{"inventoryCode":"Weekand_728x90_ATF_Desktop"},"btf":{"inventoryCode":"Weekand_728x90_ATF_Desktop"},"stf":{"inventoryCode":"Weekand_728x90_ATF_Desktop"},},"320x50":{"mad":{"inventoryCode":"Weekand_320x50_MAD_Mobile"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("Weekand_300x250_ATF_Desktop","Weekand_300x250_ATF_Mobile")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("Weekand_300x250_ATF_Desktop","Weekand_300x250_ATF_Mobile")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("Weekand_300x250_ATF_Desktop","Weekand_300x250_ATF_Mobile")},},};
break;
default:aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"hnp_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"hnp_DT_a728_pb"},"btf":{"inventoryCode":"hnp_DT_b728_pb"},"stf":{"inventoryCode":"hnp_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"hnp_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"hnp_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.fn.desktopOrMobile("hnp_DT_a300_pb","hnp_MO_a300_pb")},"btf":{"inventoryCode":aps.fn.desktopOrMobile("hnp_DT_b300_pb","hnp_MO_b300_pb")},"stf":{"inventoryCode":aps.fn.desktopOrMobile("hnp_DT_s300_pb","hnp_MO_s300_pb")},},};
break
}aps.cfg.bid.pb.data.triplelift.extra=aps.fn.setPrebidDefault();
aps.cfg.bid.pb.data.triplelift.extra.run=prebid_source.SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.enabled){aps.fn.logInfo("Prebid disabled");
return
}aps.cfg.bid.maxClientSideBidders=6;
if(current_device==devices.MOBILE){delete aps.cfg.bid.pb.data.criteo;
aps.cfg.bid.pb.biddersPriority=["kargo","rubicon","ix","concert","openx"]
}else{aps.cfg.bid.pb.biddersPriority=["rubicon","ix","criteo","concert","openx"]
}aps.cfg.bid.pb.biddersPriority.forEach(function(b){if(aps.cfg.bid.pb.data&&aps.cfg.bid.pb.data[b]&&aps.cfg.bid.pb.data[b].extra){aps.cfg.bid.pb.data[b].extra.run=prebid_source.CLIENT
}});
aps.cfg.bid.pb.moveToS2SOnMax=["appnexus","triplelift","pubmatic"];
aps.cfg.bid.pb.moveToS2SOnMax.forEach(function(b){if(aps.cfg.bid.pb.data&&aps.cfg.bid.pb.data[b]&&aps.cfg.bid.pb.data[b].extra){aps.cfg.bid.pb.data[b].extra.run=prebid_source.SERVER_COMPATIBLE
}});
if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}pbjs.que.push(function(){pbjs.onEvent("bidResponse",function(b){if(b.cpm<0.01){return
}if(!aps.cfg.is.qa&&b.cpm<0.05){return
}var c=aps.cfg.ads[b.adUnitCode];
var d=c.getPage();
d.pbBidsReceived=true;
aps.cfg.bid.pb.received=true;
aps.fn.logInfo("*BID* "+c.code+" pb/"+b.bidderCode+" "+b.cpm)
});
pbjs.onEvent("bidderDone",function(b){var c=aps.cfg.bid.prefetch.pb.biddersDone;
var d=aps.cfg.bid.prefetch.pb.calledBidders;
if(c.indexOf(b.bidderCode)==-1){c.push(b.bidderCode)
}if(c.length>=(d.length)){aps.fn.setPerformanceMetrics("PrebidAllBidsReceived","Prebid bids received");
aps.cfg.bid.pb.received=true
}});
var a={"buckets":[{"max":3,"increment":0.01},{"max":8,"increment":0.05},{"max":50,"increment":0.5}]};
pbjs.setConfig({enableSendAllBids:false,eventHistoryTTL:60,minBidCacheTTL:60,priceGranularity:a,publisherDomain:aps.cfg.host,sizeConfig:[{"mediaQuery":"(min-width: 0px)","sizesSupported":aps.cfg.bid.adSizes,"labels":["any"]}],targetingControls:{auctionKeyMaxChars:4000},useBidCache:true,userSync:{iframeEnabled:true,enabledBidders:aps.cfg.bid.pb.bidders,syncDelay:6000}});
if(!aps.cfg.is.qa){pbjs.setConfig({floors:{schema:{fields:["mediaType"],},values:{"banner":0.05,}}})
}if(aps.cfg.bid.enableGDPR||aps.cfg.doNotSell){pbjs.setConfig({consentManagement:{gdpr:{cmpApi:"iab",timeout:3000,allowAuctionWithoutConsent:false},usp:{cmpApi:"iab",timeout:100,}}})
}pbjs.bidderSettings.standard={adserverTargeting:[{key:"hnp_bidder",val:function(b){return b.bidderCode.toLowerCase()
}},{key:"hnp_adid",val:function(b){return b.adId
}},{key:"hnp_pb",val:function(b){return b.pbCg
}},{key:"hnp_deal",val:function(b){return b.dealId
}},{key:"hnp_uuid",val:function(b){return b.videoCacheKey
}},{key:"hb_format",val:function(b){return b.mediaType
}},{key:"hb_adid",val:function(b){return b.adId
}},{key:"hb_source",val:function(b){return b.source
}},],bidCpmAdjustment:function(c,b){var d=c;
if(b.bidderCode=="optimera"){return d
}if(b.source=="s2s"){d=d*0.98;
aps.fn.logInfo(b.bidderCode+" running server. CPM : "+c+" -> "+d)
}return d
},suppressEmptyKeys:true,storageAllowed:false,};
pbjs.setConfig({realTimeData:{auctionDelay:50,dataProviders:aps.cfg.bid.pb.dataProviders}})
});
aps.cfg.bid.pb.insertBids=function(d,n,a){var e=[];
if(n.supportsNative){if(aps.cfg.bid.pb.data[d]["native"]!=null){var b={bidder:d,params:aps.cfg.bid.pb.data[d]["native"]};
e.push(b)
}}if(n.video&&!aps.cfg.bid.pb.data[d].extra.hasVideo){return e
}if(!aps.fn.isValidBid(n,d,"pb")){return e
}var g=aps.cfg.bid.prefetch.pb.clientSideBidders;
var f=aps.cfg.bid.prefetch.pb.calledBidders;
var c=aps.cfg.bid.prefetch.pb.bidCount;
var h=(n.video)?[[n.width,n.height]]:a.mediaTypes.banner.sizes;
var l=(n.video)?aps.cfg.vid.mode:(n.width+"x"+n.height=="320x50")?"mad":n.position;
if(d=="rubicon"){l=(l=="atf"||l=="mad")?"atf":"btf"
}if(aps.cfg.bid.pb.data[d].extra.uniqueId&&aps.cfg.bid.pb.data[d].extra.isSizeless){if(aps.cfg.bid.pb.data[d].params){var b={bidder:d,params:aps.cfg.bid.pb.data[d].params};
e.push(b)
}}else{for(var j=0;
j<h.length;
j++){var m=h[j][0]+"x"+h[j][1];
if(m=="320x50"){l="mad"
}if(aps.cfg.bid.pb.data[d][m]!=null){if(aps.cfg.bid.pb.data[d].extra.isPositionless||!aps.cfg.bid.pb.data[d][m][l]){if(aps.cfg.bid.pb.data[d][m]!=null){var b={bidder:d,params:aps.cfg.bid.pb.data[d][m]};
e.push(b)
}}else{if(aps.cfg.bid.pb.data[d][m][l]!=null){var b={bidder:d,params:aps.cfg.bid.pb.data[d][m][l]};
if(n.video){b.params.video={skippable:true};
b.params.video.playback_methods=(aps.cfg.vid.mode=="apv")?["auto_play_sound_off"]:["click_to_play"]
}if(aps.cfg.bid.pb.data[d].extra.splitBySize){if(d=="ix"){if(aps.cfg.bid.pb.data[d].extra.count+a.mediaTypes.banner.sizes.length>20){if(!aps.cfg.bid.pb.data[d].extra.countOverLogged){aps.fn.logInfo("Limiting ix to 20 bids");
aps.cfg.bid.pb.data[d].extra.countOverLogged=true
}return e
}}aps.cfg.bid.pb.data[d].extra.count+=a.mediaTypes.banner.sizes.length;
b.params.size=h[j];
e.push(b)
}else{if(e.length==0){aps.cfg.bid.pb.data[d].extra.count++;
e.push(b)
}}if(aps.cfg.bid.pb.data[d].extra.singleUse){aps.cfg.bid.pb.data[d][m][l]=null
}}}}}}if(e.length>0){var k=c;
if(f.indexOf(d)==-1){f.push(d)
}if(aps.cfg.bid.pb.s2sBidders.indexOf(d)==-1){if(g.indexOf(d)==-1){g.push(d)
}}k=k||[];
k[d]=k[d]||0;
k[d]++
}return e
};
aps.cfg.bid.pb.configSlot=function(a){var c=a.getPage().adUnit+"/"+a.code;
var b={bids:[],code:a.code,mediaTypes:{},ortb2Imp:{ext:{gpid:c,data:{adserver:{name:"gam",adslot:a.getPage().adUnit},pbadslot:c}}}};
if(a.exclude){return b
}if(!aps.fn.isValidBid(a,"","pb")){return b
}if(aps.cfg.bid.excludedDomains.includes(aps.cfg.page.current.domain)){aps.fn.logInfo("*Disabling bidders - excluded domains");
aps.cfg.bid.enabled=false
}if(a.mediaType=="banner"){if(a.sizes.length==0){aps.fn.logSkip(a.code,"no size available to bidders (pb)");
return b
}b.mediaTypes.banner={sizes:a.sizes,w:a.width,h:a.height,}
}if(a.supportsNative&&!aps.cfg.bid.disableNative){b.mediaTypes["native"]={sendTargetingKeys:false,image:{required:true,aspect_ratios:[{min_width:300,min_height:225,ratio_width:4,ratio_height:3,}]},title:{required:true,len:800},body:{required:true,},cta:{required:false,},clickUrl:{required:true,},sponsoredBy:{required:false,},icon:{required:false,sizes:[240,240],}}
}if(a.video){if(!aps.cfg.vid.enabled){return b
}b.mediaTypes={video:{context:"instream",playerSize:[640,480],mimes:["video/mp4"],protocols:[1,2,3,4,5,6,7,8],playbackmethod:[2]},}
}aps.cfg.bid.pb.bidders.forEach(function(d){var e=aps.cfg.bid.pb.insertBids(d,a,b);
e.forEach(function(f){b.bids.push(f)
})
});
return b
};
aps.cfg.bid.pb.forceS2S=function(){return false
};
aps.cfg.bid.pb.setAvailableBidders=function(){aps.cfg.bid.pb.biddersCount=0;
aps.cfg.forceS2S=aps.cfg.bid.pb.forceS2S();
for(var a in aps.cfg.bid.pb.data){if(aps.cfg.forceS2S){if(!(aps.cfg.bid.pb.data[a].extra.run==prebid_source.CLIENT)){aps.cfg.bid.pb.biddersCount++;
aps.cfg.bid.pb.bidders.push(a);
aps.cfg.bid.pb.s2sBidders.push(a)
}}else{aps.cfg.bid.pb.biddersCount++;
aps.cfg.bid.pb.bidders.push(a);
if(aps.cfg.bid.pb.data[a].extra.run==prebid_source.SERVER){aps.cfg.bid.pb.s2sBidders.push(a)
}}}var c=[];
for(var b in aps.cfg.bid.pb.biddersPriority){var d=aps.cfg.bid.pb.bidders.filter(function(f){return f==aps.cfg.bid.pb.biddersPriority[b]
});
if(d.length>0){c.push(d[0])
}}d=aps.cfg.bid.pb.bidders.filter(function(f){return aps.cfg.bid.pb.biddersPriority.indexOf(f)==-1
});
aps.cfg.bid.pb.bidders=c.concat(d);
if(aps.cfg.doNotSell&&aps.cfg.bid.pb.notSupportingGDPR.length>0){aps.cfg.bid.pb.bidders=aps.cfg.bid.pb.bidders.filter(function(e){return aps.cfg.bid.pb.notSupportingGDPR.indexOf(e)==-1
});
aps.fn.logInfo("Bidders removed because not supporting GDPR: "+aps.cfg.bid.pb.notSupportingGDPR)
}aps.fn.logInfo("Bidders order: "+aps.cfg.bid.pb.bidders.join(","))
};
aps.cfg.bid.pb.runBeforeBidRequest=function(p){var o=aps.cfg.bid.maxClientSideBidders;
var k,f,h,d,j;
d=aps.cfg.bid.prefetch.pb.adUnits;
f=aps.cfg.bid.prefetch.pb.bidCount;
h=aps.cfg.bid.prefetch.timeout;
j=aps.cfg.bid.prefetch.pb.calledBidders;
k=aps.cfg.bid.prefetch.pb.clientSideBidders;
if(k.length>=o){var s=k.length-o;
if(aps.cfg.bid.pb.moveToS2SOnMax.length>0){if(aps.cfg.bid.pb.shuffleMoveToS2SOnMax){aps.cfg.bid.pb.moveToS2SOnMax=aps.cfg.bid.pb.moveToS2SOnMax.map(function(a){return{value:a,sort:Math.random()}
}).sort(function(e,i){return e.sort-i.sort
}).map(function(a){return a.value
});
aps.fn.logInfo("Bidders to be moved to S2S: "+aps.cfg.bid.pb.moveToS2SOnMax)
}for(var m=0;
m<aps.cfg.bid.pb.moveToS2SOnMax.length;
m++){var g=aps.cfg.bid.pb.moveToS2SOnMax[m];
if(k.indexOf(g)>-1&&s>0){aps.fn.logInfo("Bidder "+g+" has been moved to Server Side request to maintain client-side limit of "+o);
k=k.filter(function(a){return a!=g
});
aps.cfg.bid.pb.s2sBidders.push(g);
s--;
if(s==0){break
}}}}if(s>0){var u=k.sort(function(e,i){return(f[e]==f[i])?0:(f[e]<f[i])?-1:1
});
u=u.filter(function(a){return aps.cfg.bid.pb.biddersPriority.indexOf(a)==-1
});
u=u.concat(aps.cfg.bid.pb.biddersPriority.reverse());
for(var m=0;
m<u.length;
m++){var g=u[m];
for(var b in aps.cfg.bid.pb.adUnits[aps.cfg.stp.at]){aps.cfg.bid.pb.adUnits[aps.cfg.stp.at][b].bids=aps.cfg.bid.pb.adUnits[aps.cfg.stp.at][b].bids.filter(function(a){return a.bidder!=g
})
}aps.fn.logInfo("Bidder "+g+" has been removed to maintain client-side limit of "+o);
k=k.filter(function(a){return a!=g
});
j=j.filter(function(a){return a!=g
});
s--;
if(s==0){break
}}}}var q="prebid-server.rubiconproject.com";
pbjs.setConfig&&pbjs.setConfig({cache:{url:"https://"+q+"/cache",ignoreBidderCacheKey:true,},cookieSyncDelay:100,s2sConfig:{accountId:"9095",adapter:"prebidServer",bidders:aps.cfg.bid.pb.s2sBidders,cookieSet:true,defaultVendor:"rubicon",enabled:true,coopSync:true,userSyncLimit:8,allowUnknownBidderCodes:true,timeout:aps.cfg.bid.prefetch.timeout,endpoint:"https://"+q+"/openrtb2/auction",syncEndpoint:"https://"+q+"/cookie_sync",},bidderTimeout:aps.cfg.bid.prefetch.timeout,});
aps.cfg.bid.pb.allIds=aps.cfg.bid.pb.allIds||[];
var r=[];
for(var c=0;
c<d.length;
c++){var n=d[c].code;
if(aps.cfg.bid.pb.allIds.indexOf(n)==-1){aps.cfg.bid.pb.allIds.push(n);
r.push(d[c])
}}if(typeof PWT!="undefined"&&typeof PWT.getUserIds=="function"){var t="";
try{t=owpbjs.getUserIdsAsEids()
}catch(l){}pbjs.setConfig&&pbjs.setConfig({ortb2:{user:{ext:{userId:PWT.getUserIds(),userIdAsEids:t,}}}});
r.forEach(function(a){a.bids.forEach(function(i){i["userId"]=PWT.getUserIds();
try{i["userIdAsEids"]=owpbjs.getUserIdsAsEids()
}catch(v){}})
})
}return r
};
aps.cfg.bid.pb.setAvailableBidders();
aps.registerEvent(aps.event.on_define_bid_data,function(a){if(a.code=="Crown"){return
}var b=aps.cfg.bid.pb.configSlot(a);
if(b.bids.length>0){if(!aps.cfg.bid.prefetch.pb.adUnits.includes(a.code)){aps.cfg.bid.prefetch.pb.adUnits.push(b);
a.pb=b
}}});
aps.registerEvent(aps.event.on_request_bid,function(a){a.pages.forEach(function(d){var c=d.pb.ads;
var b=d.pb.adIds;
if(!aps.cfg.bid.prefetch.allBidsOnRefresh&&a.slotIds){c=c.filter(function(f){return a.slotIds.includes(f.code)
});
b=b.filter(function(f){return a.slotIds.includes(f)
})
}if(c.length==0){aps.fn.logInfo("Prebid: no bid to request");
d.pbBidsReceived=true
}else{aps.cfg.bid.pb.bidders.forEach(function(f){aps.cfg.bid.pb.data[f].extra.count=0;
aps.cfg.bid.pb.data[f].extra.countOverLogged=false
});
aps.fn.setPerformanceMetrics("PbBidsRequested","calling pb for page "+d.scrollDepth+" ads: "+b);
pbjs.setConfig&&pbjs.setConfig({pageUrl:"https://"+d.href});
var e=aps.cfg.bid.pb.runBeforeBidRequest(a);
pbjs.que.push(function(){if(e.length>0){pbjs.addAdUnits(e)
}setTimeout(function(){d.pbBidsReceived=true;
aps.cfg.bid.pb.received=true
},aps.cfg.bid.prefetch.timeout);
aps.cfg.bid.prefetch.pb.biddersDone=[];
pbjs.requestBids({adUnits:c,auctionId:"A"+Math.round(Math.random()*500000000)+"_"+d.scrollDepth})
})
}})
});
aps.registerEvent(aps.event.on_request_new_video_ads,function(a){if(!aps.cfg.bid.enabled||!aps.cfg.vid.enabled){return
}aps.fn.logInfo("calling prebid video");
var b=[];
for(var c=0;
c<aps.cfg.bid.pb.videoAdUnits.length;
c++){b.push(aps.cfg.bid.pb.videoAdUnits[c].code)
}pbjs.requestBids({adUnitCodes:b})
})
})();(function(){aps.registerEvent(aps.event.on_new_page,function(a){if(a.datalayer.presentation){a.addPageKvp("has",(a.datalayer.presentation.hasSlideshow)?"GalleryY":"GalleryN")
}})
})();(function(){try{if(HDN.dataLayer.content.objectType=="post"||HDN.dataLayer.content.objectType=="blog post"){if(HDN.dataLayer.content.keywords.length>0){aps.fn.addPageKvp("kw",HDN.dataLayer.content.keywords.join(","))
}}}catch(a){}})();(function(){var a=window.XMLHttpRequest.prototype.open;
function b(h,m,c,o,j){if(m.indexOf("https://securepubads.g.doubleclick.net/gampad/ads?")==0&&m.indexOf("trunc=1")>-1&&m.indexOf("exco_video")==-1){aps.fn.logInfo("google request truncated "+m);
var d={};
d.url=document.location.href;
d.permutive=aps.cfg.permutive.ids;
d.gam=m;
arguments[1]=arguments[1].replace("&trunc=1","").replace("cust_params=","cust_params=trunc%3D1%26")
}var l="&url=richienews%3A%2F%2F%2F";
if(m.indexOf("https://securepubads.g.doubleclick.net/gampad/ads?")==0&&m.indexOf(l)>-1){try{var n=arguments[1].indexOf(l);
var g=arguments[1].indexOf("&",n+1);
var k=arguments[1].substring(n,g);
var i="&url="+encodeURIComponent("https://"+JuicePageUrl.replace("staging.","").replace("richie","www"));
aps.fn.logInfo("google request updated: "+k+" was replaced");
aps.fn.logInfo("        by "+i);
arguments[1]=arguments[1].replace(k,i)
}catch(f){}}return a.apply(this,arguments)
}window.XMLHttpRequest.prototype.open=b
})();(function(){if(aps.cfg.is.eedition){aps.cfg.ivm.autoRefresh.enabled=true;
aps.registerEvent(aps.event.on_new_div,function(a){aps.cfg.queuedAds.push(a.id);
aps.fn.requestAds()
});
aps.registerEvent(aps.event.on_before_request_ads,function(d){aps.cfg.dfp.eedate="";
try{var f=top.document.querySelectorAll(".recent")[0].innerText;
var c=/(.* 202.?)/g;
var b=f.match(c)[0].substring(4).replace(",","").split(" ");
if(b[1].length==1){b[1]="0"+b[1]
}aps.cfg.dfp.eedate=b.join("")
}catch(a){}if(aps.cfg.dfp.eedate!=""){aps.fn.addPageKvp("eedate",aps.cfg.dfp.eedate,true)
}});
aps.page_kvps={push:function(a){aps.fn.addPageKvp(a.key,a.value,true)
}};
aps.registerEvent(aps.event.on_render_ad,function(c){if(c.ad.code=="EE300_3"){var a=document.getElementById(c.ad.code);
var b=a.querySelectorAll("div[id^='google']")[0];
if(!b.style){b.style={cssText:"height:250px!important"}
}else{b.style.cssText+=";height:250px!important"
}}})
}})();(function(){aps.cfg.tregReady=false;
aps.cfg.waitForTreg=true;
aps.cfg.tregSites=["beaumontenterprise.com","bigrapidsnews.com","chron.com","ctinsider.com","ctpost.com","darientimes.com","expressnews.com","greenwichtime.com","houstonchronicle.com","lakecountystar.com","lmtonline.com","manisteenews.com","michigansthumb.com","middletownpress.com","milfordmirror.com","mrt.com","myjournalcourier.com","myplainview.com","mysanantonio.com","ncadvertiser.com","newstimes.com","nhregister.com","ourmidland.com","recordpatriot.com","registercitizen.com","sfchronicle.com","sfgate.com","sheltonherald.com","stamfordadvocate.com","theheraldreview.com","thehour.com","theintelligencer.com","theridgefieldpress.com","thetelegraph.com","timesunion.com","trumbulltimes.com","wiltonbulletin.com","yourconroenews.com"];
aps.cfg.tregLoginStatus="";
aps.registerEvent(aps.event.on_before_request_ads,function(b){if(aps.cfg.tregLoginStatus!=""){return
}var a="0";
if(window.treg&&window.treg.identity){if(treg.identity.id!=null){a="1";
if(treg.identity.isEntitled){a="2"
}}}if(a!=aps.cfg.tregLoginStatus){var c=aps.cfg.page.kvps.filter(function(d){return d.key=="treg"
})[0];
if(c){c.value=[]
}aps.cfg.page.addBaseKvp("treg",a)
}aps.cfg.tregLoginStatus=a
});
if(aps.cfg.is.platypus||typeof window.treg=="undefined"||!aps.cfg.tregSites.includes(aps.cfg.page.current.domain)){aps.cfg.waitForTreg=false
}else{aps.fn.logInfo("Waiting for treg");
window.treg.cmd.push(function(){window.treg.realm.events.registerReplayLast("realm.Oidc.refreshLogicComplete",function(a){aps.fn.logInfo("Treg ready");
aps.cfg.tregReady=true
})
})
}})();(function(){aps.registerEvent(aps.event.on_first_load,function(a){var b="false";
if(typeof HDN.dataLayer.paywall!=="undefined"&&typeof HDN.dataLayer.paywall.premiumStatus!=="undefined"&&HDN.dataLayer.paywall.premiumStatus==="isPremium"){b="true"
}a.addBaseKvp("is_premium",b)
})
})();(function(){var b=["hnp-debug","hnp_debug","juiceconsole"];
var c=null;
for(var a=0;
a<b.length&&c==null;
a++){c=aps.fn.getQueryParameterByName(b[a])
}if(c!=null){aps.cfg.logToConsole=true;
aps.registerEvent(aps.event.on_dom_loaded,function(d){setTimeout(function(){var e=document.createElement("script");
e.src="//mis.hearstnp.com/juice/Bookmarklets/hnp-debug.js"+"?bustcache="+new Date().getTime();
document.body.appendChild(e)
},parseInt(c,10))
})
}})();(function(){if(typeof window.juice=="object"){try{if(!juice.definedTags.adUnit){aps.fn.logError("adUnit not provided in juice.definedTags");
return
}juice.definedTags.kvps=juice.definedTags.kvps||[];
if(juice.definedTags.kvps.length>0){if(!aps.fn.checkKvps(juice.definedTags.kvps)){aps.fn.logError("page kvps not properly defined in juice.definedTags");
return
}}if(!juice.definedTags.ads){aps.fn.logError("ads not provided in juice.definedTags");
return
}juice.definedTags.ads.forEach(function(b){if(!b.code){aps.fn.logInfo("ad not properly defined in juice.definedTags");
return
}if((!b.width||!b.height)&&!aps.cfg.allAds[b.code]){aps.fn.logInfo("ad "+b.code+" not properly defined in juice.definedTags");
return
}if(!Array.isArray(b.sizeMappings)&&!aps.cfg.allAds[b.code]){aps.fn.logInfo("ad sizeMappings not properly defined in juice.definedTags for ad "+b.code);
return
}if(b.kvps){if(!aps.fn.checkKvps(b.kvps)){aps.fn.logInfo("ad kvps not properly defined in juice.definedTags for ad "+b.code);
return
}}});
aps.cfg.juiceCustom=true;
aps.juiceMatchedUrl="Using Juice Custom";
window.APSpageID=0;
window.definedTags={"networkCode":aps.cfg.networkCode,"adUnit":juice.definedTags.adUnit,"kvps":[],"ads":[],"responsiveMappings":277,"singleRequestMode":false};
aps.cfg.adMap=[];
juice.definedTags.kvps.forEach(function(b){aps.cfg.page.current.addPageKvp(b.key,b.value)
});
juice.definedTags.ads.forEach(function(b){aps.cfg.adMap.push(b.code);
var c=b.code;
if(b.code.indexOf("-")>-1){c=b.code.split("-")[0]
}var d=aps.cfg.allAds[c]||{code:b.code};
d.code=b.code;
if(b.width){d.width=b.width
}if(b.height){d.height=b.height
}if(b.sizeMappings){d.sizeMappings=b.sizeMappings
}if(b.kvps){d.kvps=b.kvps
}new aps.o.baseAd(d.code,d.width,d.height,d.sizeMappings,d.kvps)
});
aps.sitesWithoutCallback.push(aps.cfg.host)
}catch(a){}}})();(function(){aps.registerEvent(aps.event.on_ad_definition_loaded,function(d){if(!aps.cfg.serveAds){return
}aps.cfg.networkCode=definedTags.networkCode;
aps.fireEvent(aps.event.on_get_bids);
aps.fn.waitToCallGAM()
});
aps.fn.defineDefaultAds=function(){aps.juiceMatchedUrl=aps.juiceMatchedUrl||"Using Juice Direct";
aps.cfg.juiceDirect=true;
window.juiceservice=("https:"==document.location.protocol?"https:":"http:")+"//aps.hearstnp.com/";
window.APSpageID=window.APSpageID||66623;
window.APSGenerationID="";
window.APSResponsiveDesign=true;
window.definedTags=window.definedTags||{"networkCode":aps.cfg.networkCode,"adUnit":"hnp-hearstdemosite/hearstdemozone","kvps":[],"ads":[],"responsiveMappings":277,"singleRequestMode":false};
if(!aps.cfg.juiceCustom){if(!aps.cfg.serveAds){aps.cfg.adMap=[]
}else{if(aps.cfg.is.platypus){aps.cfg.adMap=[];
aps.cfg.ivm.observed.forEach(function(e){var d=e;
if(d.indexOf("-")>-1){d=d.substring(0,d.indexOf("-"))
}if(!aps.cfg.adMap.includes(d)&&aps.cfg.allAds[d]){aps.cfg.adMap.push(d)
}})
}else{if(aps.cfg.is.wcm){if(aps.cfg.is.authorPage){aps.cfg.adMap=["Flex1","A728","A951","A300","A300x600","S300"]
}else{switch(aps.cfg.page.current.datalayer.content.designTemplate){case"design/article/dynamic_two_column.tpl":aps.cfg.adMap=["Crown","Flex1","A300","S300","Inline","RB"];
break;
case"design/article/dynamic_one_column.tpl":aps.cfg.adMap=["Flex1","Inline","A300","S300","Box"];
break;
case"design/slideshow/dynamic_two_column.tpl":aps.cfg.adMap=["Flex1","A300","LIST"];
break;
case"design/channel/dynamic_one_column.tpl":aps.cfg.adMap=["Crown","Flex1","APflex","BPflex","CPflex","DPflex","EPflex","FPflex"];
break;
case"design/channel/dynamic_two_column.tpl":if(document.location.pathname=="/"){aps.cfg.adMap=["Crown","Flex1","AP300","APflex","BPflex","CPflex","DPflex","EPflex","FPflex","LNlogo"]
}else{aps.cfg.adMap=["Crown","Flex1","AP300","APflex","BPflex","CPflex","DPflex","EPflex","FPflex"]
}break;
default:if(aps.cfg.page.current.datalayer.content.designTemplate.indexOf("article")>-1){aps.cfg.adMap=["Crown","Flex1","A300","B300","S300","CONCERT1","CONCERT2","TMP300_3","Inline","RB"]
}else{aps.cfg.adMap=["A951","A728","A300","SP150","B300","S300","LA300","MW728_1","MW728_2","B728"]
}break
}}}else{if(aps.cfg.is.eedition){aps.cfg.adMap=["EE728","EE300","EE300_2","EE300_3","EEinsert"]
}else{if(aps.cfg.is.richie){aps.cfg.adMap=["AP300","BP300","CP300","A300","B300","S300","C300"]
}else{if(aps.cfg.is.projectPage){aps.cfg.adMap=["AP300","APflex","BPflex","CPflex","DPflex","EPflex","FPflex"]
}else{if(aps.cfg.is.datebookSF||aps.cfg.is.previewHC){aps.cfg.adMap=["DTBK_AP951","DTBK_AP300","DTBK_BP300"];
if(["movie-search","movie-theater-info"].includes(aps.cfg.page.current.path[0])){aps.cfg.adMap=aps.cfg.adMap.concat(["DTBK_AP728","DTBK_BP728"])
}if(current_device==devices.MOBILE){aps.cfg.adMap=aps.cfg.adMap.concat(["DTBK_AP300_M","DTBK_BP300_M"])
}}else{if(aps.cfg.is.leafsSite){aps.cfg.adMap=["Crown","A728","A300","B300","S300","Leaf1","Leaf2","Leaf3","Leaf4"]
}else{if(aps.cfg.is.greenstate){if(aps.cfg.page.current.path.length<2){aps.cfg.adMap=["Crown","Flex1","AP300","APflex","BPflex","CPflex","DPflex","EPflex","FPflex"]
}else{aps.cfg.adMap=["Crown","Flex1","AP300","A300","Inline","RB"]
}}}}}}}}}}if(aps.cfg.adMap.length>0&&!aps.cfg.adMap.includes("MAD")&&current_device==devices.MOBILE&&!aps.cfg.is.richie){aps.cfg.adMap.push("MAD")
}if(aps.cfg.adMap.length>0&&aps.cfg.is.premiumSite&&!aps.cfg.is.projectPage){["B300","CONCERT1","CONCERT2"].forEach(function(d){if(!aps.cfg.adMap.includes(d)){aps.cfg.adMap.push(d)
}});
aps.cfg.adMap=aps.cfg.adMap.sort()
}if(aps.cfg.adMap.length==0){Object.entries(aps.cfg.allAds).forEach(function(d){if(!aps.cfg.is.kfsWidget||document.getElementById(d[0])!=null){aps.cfg.adMap.push(d[1].code)
}})
}}if(aps.cfg.useExit){aps.cfg.adMap.push("exit")
}aps.cfg.adMap.forEach(function(d){var e=aps.cfg.allAds[d];
if(e){definedTags.ads.push(new aps.o.gamAd(e.code,e.width,e.height,e.sizeMappings))
}});
delete aps.cfg.allAds;
aps.scriptHash="0xA69253206A2E81275D0F45F0799689A0D936139C";
aps.fn.logInfo("Direct ad definition loaded: "+aps.cfg.adMap,true)
};
aps.fn.processGetJSvalue=function(){var d=[];
definedTags.kvps.forEach(function(e){if(e.key!="WcmID"){aps.cfg.page.current.addPageKvp(e.key,e.value)
}});
definedTags.ads.forEach(function(e){aps.cfg.adMap.push(e.code);
d.push(new aps.o.gamAd(e.code,e.width,e.height,e.sizeMappings,e.kvps))
});
definedTags.ads=d;
aps.page=definedTags;
aps.cfg.page.current.adUnit=definedTags.adUnit;
aps.cfg.adDefinitionLoaded=true;
aps.fireEvent(aps.event.on_ad_definition_loaded,{})
};
if(aps.sitesWithoutCallback.includes(aps.cfg.host)||aps.cfg.is.richie||aps.cfg.is.kfs||aps.cfg.is.platypus){aps.fn.logInfo((aps.cfg.juiceCustom)?"Juice Custom":"Juice Direct");
aps.fn.defineDefaultAds();
aps.page=definedTags;
aps.cfg.adDefinitionLoaded=true;
aps.fireEvent(aps.event.on_ad_definition_loaded,{})
}if(typeof loadAd_UrlLocation=="undefined"){loadAd_UrlLocation=juiceservice
}if(typeof definedTags=="undefined"){var c=loadAd_UrlLocation+((debugSGA)?getsource:"SRO/GetJS?url=")+escape(JuicePageUrl.toLowerCase());
if(!JuicePageUrl.toLowerCase().startsWith(aps.cfg.host)){aps.fn.sendLog("url="+c+"&href="+window.location.href)
}var b=document.createElement("script");
b.src=c;
b.onerror=aps.fn.defineDefaultAds;
b.id="AdsConfigJavaScript";
onload=aps.fn.processGetJSvalue;
var a=document.getElementsByTagName("html")[0].children;
a[(a.length>1)?1:0].appendChild(b)
}})();(function(){aps.registerEvent(aps.event.on_before_request_ads,function(b){var c=b.ads;
googletag.pubads().getTargetingKeys().forEach(function(d){googletag.pubads().clearTargeting(d)
});
if(b.page.datalayer&&b.page.datalayer.content&&b.page.datalayer.content.objectId){var a=b.page.kvps.filter(function(d){return d.key=="WcmID"
});
if(!a[0]||a[0].value[0]!=""+b.page.datalayer.content.objectId){b.page.addPageKvp("WcmID",""+b.page.datalayer.content.objectId,true)
}}b.page.addPageKvp("juice_id",APSpageID.toString(),true);
aps.cfg.page.kvps.forEach(function(d){googletag.pubads().setTargeting(d.key,d.value)
});
b.page.kvps.forEach(function(d){googletag.pubads().setTargeting(d.key,d.value)
})
})
})();(function(){aps.fn.logInfo("end of juice script loading. Version "+aps.cfg.version);
aps.fn.sendLog("")
})();