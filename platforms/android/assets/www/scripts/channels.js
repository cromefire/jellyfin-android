!function(){function e(e){Dashboard.showLoadingMsg(),a.UserId=Dashboard.getCurrentUserId(),ApiClient.getJSON(ApiClient.getUrl("Channels",a)).then(function(r){window.scrollTo(0,0);var n="",t="Thumb";"Thumb"==t?n=LibraryBrowser.getPosterViewHtml({items:r.Items,shape:"backdrop",context:"channels",showTitle:!0,lazy:!0,centerText:!0,preferThumb:!0}):"ThumbCard"==t&&(n=LibraryBrowser.getPosterViewHtml({items:r.Items,shape:"backdrop",preferThumb:!0,context:"channels",lazy:!0,cardLayout:!0,showTitle:!0}));var s=e.querySelector("#items");s.innerHTML=n,ImageLoader.lazyChildren(s),LibraryBrowser.saveQueryValues("channels",a),Dashboard.hideLoadingMsg()})}function r(r,n){switch(n){case 1:LibraryBrowser.loadSavedQueryValues("channels",a),e(r)}}var a={StartIndex:0};pageIdOn.on("pageinit","channelsPage",function(){var e=this,a=e.querySelector("paper-tabs"),n=e.querySelector("neon-animated-pages");LibraryBrowser.configurePaperLibraryTabs(e,a,n,"channels.html"),n.addEventListener("tabchange",function(a){r(e,parseInt(a.target.selected))})})}(jQuery,document);