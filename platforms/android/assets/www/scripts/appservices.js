!function(e,t){function i(e){Dashboard.showLoadingMsg();var t=ApiClient.getAvailablePlugins({TargetSystems:"Server"}),i=ApiClient.getInstalledPlugins();Promise.all([t,i]).then(function(t){n(e,t[0],t[1]),s(e,t[0],t[1])})}function a(){var e=getParameterByName("context"),t=[];return"sync"==e?t.push("Sync"):"livetv"==e?t.push("Live TV"):"notifications"==e&&t.push("Notifications"),t}function n(e,t,i){requirejs(["scripts/pluginspage"],function(){var n=a()[0];i=i.filter(function(e){var i=t.filter(function(t){return t.guid==e.Id})[0];return i&&i.category==n}),PluginsPage.renderPlugins(e,i)})}function s(t,i,n){requirejs(["scripts/plugincatalogpage"],function(){var s=a();PluginCatalog.renderCatalog({catalogElement:e(".catalog",t),availablePlugins:i,installedPlugins:n,categories:s,showCategory:!1,context:getParameterByName("context"),targetSystem:"Server"})})}e(t).on("pagebeforeshow pageshow","#appServicesPage",function(){var t=this,i=getParameterByName("context");e(".sectionTabs",t).hide(),"sync"==i?(Dashboard.setPageTitle(Globalize.translate("TitleSync")),t.setAttribute("data-helpurl","https://github.com/MediaBrowser/Wiki/wiki/Sync")):"livetv"==i?(Dashboard.setPageTitle(Globalize.translate("TitleLiveTV")),t.setAttribute("data-helpurl","https://github.com/MediaBrowser/Wiki/wiki/Live%20TV")):"notifications"==i&&(Dashboard.setPageTitle(Globalize.translate("TitleNotifications")),t.setAttribute("data-helpurl","https://github.com/MediaBrowser/Wiki/wiki/Notifications")),e(".sectionTabs",t).hide(),e("."+i+"SectionTabs",t).show()}).on("pageshow","#appServicesPage",function(){var e=this;i(e)})}(jQuery,document);