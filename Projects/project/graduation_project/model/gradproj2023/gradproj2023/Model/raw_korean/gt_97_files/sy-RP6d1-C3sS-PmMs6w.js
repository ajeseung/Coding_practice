(function(){
  var i = new Image();
  var engineKey = "sy-RP6d1-C3sS-PmMs6w";

  var params = '?url=' + encodeURIComponent(window.location.href);
  params += '&engine_key=' + engineKey;

  if (document.referrer != "") { params += "&r=" + encodeURIComponent(document.referrer); }

  i.src = "//cc.swiftype.com/cc" + params;
})();
