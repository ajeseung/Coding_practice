function searchAutoComplete(cname) {if(typeof(cname) !== 'undefined') {var c_name = '.' + cname; }else{ var c_name = '.autoload_list'; } var topic_url = base_url + 'topic/';var lookup = [];var js_data = [];var json = {};var encode = [];$.getJSON(base_url + "widget/get-search-json?site=classic", function(data) {json = data;var i=0;$.each(data, function (key, val) {lookup[key] = val.title ;js_data[key] = val.slug ;});/*console.log(js_data);*/a2 = $(c_name).autocomplete({width: 200,minChars: 3,delimiter: /(,|;)\s*/,lookup: lookup,data: js_data,onSelect: function(value, js_data){ if(js_data!='undefined')window.location = topic_url+js_data; }});});}