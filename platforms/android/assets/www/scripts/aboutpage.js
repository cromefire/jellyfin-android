!function(n,e){n(e).on("pageshow","#aboutPage",function(){var e=this,o=n("#appVersionNumber",e);o.html(o.html().replace("{0}",ConnectionManager.appVersion()))})}(jQuery,document);