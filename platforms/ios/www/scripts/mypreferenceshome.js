!function(e,t,i){function n(t,i,n){var o="";o+='<div class="paperCheckboxList">',o+=n.map(function(e){var t="",n="chkGroupFolder"+e.Id,o=null!=i.Configuration.ExcludeFoldersFromGrouping&&-1==i.Configuration.ExcludeFoldersFromGrouping.indexOf(e.Id)||-1!=i.Configuration.GroupedFolders.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkGroupFolder" data-folderid="'+e.Id+'" id="'+n+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".folderGroupList",t).html(o)}function o(t,i,n){var o="";o+='<div class="paperCheckboxList">',o+=n.map(function(e){var t="",n="chkPlainFolder"+e.Id,o=-1==i.Configuration.PlainFolderViews.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkPlainFolder" data-folderid="'+e.Id+'" id="'+n+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".viewStylesList",t).html(o),n.length?e(".viewStylesSection",t).show():e(".viewStylesSection",t).hide()}function r(t,i,n){var o="";o+='<div class="paperCheckboxList">',o+=n.Items.map(function(e){var t="",n="chkIncludeInLatest"+e.Id,o=-1==i.Configuration.LatestItemsExcludes.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkIncludeInLatest" data-folderid="'+e.Id+'" id="'+n+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".latestItemsList",t).html(o)}function a(t,i,n){var o="",r=0;o+=n.Items.map(function(e){var t="";return t+='<paper-icon-item class="viewItem" data-viewid="'+e.Id+'">',t+='<paper-fab mini style="background-color:#444;" icon="folder-open" item-icon></paper-fab>',t+="<paper-item-body>",t+="<div>",t+=e.Name,t+="</div>",t+="</paper-item-body>",r>0?t+='<paper-icon-button icon="keyboard-arrow-up" class="btnViewItemUp btnViewItemMove" title="'+Globalize.translate("ButtonUp")+'"></paper-icon-button>':n.Items.length>1&&(t+='<paper-icon-button icon="keyboard-arrow-down" class="btnViewItemDown btnViewItemMove" title="'+Globalize.translate("ButtonDown")+'"></paper-icon-button>'),t+="</paper-icon-item>",r++,t}).join(""),e(".viewOrderList",t).html(o)}function s(t,i,s){t.querySelector(".chkDisplayCollectionView").checked=i.Configuration.DisplayCollectionsView||!1,t.querySelector(".chkHidePlayedFromLatest").checked=i.Configuration.HidePlayedInLatest||!1,t.querySelector(".chkDisplayChannelsInline").checked=i.Configuration.DisplayChannelsInline||!1,e("#selectHomeSection1",t).val(s.CustomPrefs.home0||""),e("#selectHomeSection2",t).val(s.CustomPrefs.home1||""),e("#selectHomeSection3",t).val(s.CustomPrefs.home2||""),e("#selectHomeSection4",t).val(s.CustomPrefs.home3||"");var c=ApiClient.getItems(i.Id,{sortBy:"SortName"}),l=ApiClient.getUserViews({},i.Id),d=ApiClient.getJSON(ApiClient.getUrl("Users/"+i.Id+"/SpecialViewOptions")),u=ApiClient.getJSON(ApiClient.getUrl("Users/"+i.Id+"/GroupingOptions"));Promise.all([c,l,d,u]).then(function(e){n(t,i,e[3]),r(t,i,e[0]),a(t,i,e[1]),o(t,i,e[2]),Dashboard.hideLoadingMsg()})}function c(t,i,n){i.Configuration.DisplayCollectionsView=t.querySelector(".chkDisplayCollectionView").checked,i.Configuration.HidePlayedInLatest=t.querySelector(".chkHidePlayedFromLatest").checked,i.Configuration.DisplayChannelsInline=t.querySelector(".chkDisplayChannelsInline").checked,i.Configuration.LatestItemsExcludes=e(".chkIncludeInLatest",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-folderid")}),i.Configuration.ExcludeFoldersFromGrouping=null,i.Configuration.GroupedFolders=e(".chkGroupFolder",t).get().filter(function(e){return e.checked}).map(function(e){return e.getAttribute("data-folderid")}),i.Configuration.PlainFolderViews=e(".chkPlainFolder",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-folderid")}),i.Configuration.OrderedViews=e(".viewItem",t).get().map(function(e){return e.getAttribute("data-viewid")}),n.CustomPrefs.home0=e("#selectHomeSection1",t).val(),n.CustomPrefs.home1=e("#selectHomeSection2",t).val(),n.CustomPrefs.home2=e("#selectHomeSection3",t).val(),n.CustomPrefs.home3=e("#selectHomeSection4",t).val(),ApiClient.updateDisplayPreferences("home",n,i.Id,AppSettings.displayPreferencesKey()).then(function(){ApiClient.updateUserConfiguration(i.Id,i.Configuration).then(function(){Dashboard.alert(Globalize.translate("SettingsSaved")),s(t,i,n)})})}function l(){var t=e(this).parents(".page")[0];Dashboard.showLoadingMsg();var i=getParameterByName("userId")||Dashboard.getCurrentUserId();return ApiClient.getUser(i).then(function(e){ApiClient.getDisplayPreferences("home",e.Id,AppSettings.displayPreferencesKey()).then(function(i){c(t,e,i)})}),!1}e(i).on("pageinit","#homeScreenPreferencesPage",function(){var t=this;e(".viewOrderList",t).on("click",".btnViewItemMove",function(){var t=e(this).parents(".viewItem"),i=t.parents(".paperList");if(e(this).hasClass("btnViewItemDown")){var n=t.next();t.remove().insertAfter(n)}else{var o=t.prev();t.remove().insertBefore(o)}e(".viewItem",i).each(function(){var t=e(".btnViewItemMove",this)[0];e(this).prev(".viewItem").length?(t.classList.add("btnViewItemUp"),t.classList.remove("btnViewItemDown"),t.icon="keyboard-arrow-up"):(t.classList.remove("btnViewItemUp"),t.classList.add("btnViewItemDown"),t.icon="keyboard-arrow-down")})}),e(".homeScreenPreferencesForm").off("submit",l).on("submit",l)}).on("pageshow","#homeScreenPreferencesPage",function(){var e=this;Dashboard.showLoadingMsg();var t=getParameterByName("userId")||Dashboard.getCurrentUserId();ApiClient.getUser(t).then(function(t){ApiClient.getDisplayPreferences("home",t.Id,AppSettings.displayPreferencesKey()).then(function(i){s(e,t,i)})})})}(jQuery,window,document);