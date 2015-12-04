!function(e,l,n){function a(l,n,a){var i="";i+='<fieldset data-role="controlgroup">',i+="<legend>"+Globalize.translate("HeaderLibraries")+"</legend>";for(var c=0,t=a.length;t>c;c++){var r=a[c],s="mediaFolder"+c,o=n.Policy.EnableAllFolders||-1!=n.Policy.EnabledFolders.indexOf(r.Id),d=o?' checked="checked"':"";i+='<input class="chkFolder" data-id="'+r.Id+'" type="checkbox" id="'+s+'"'+d+" />",i+='<label for="'+s+'">'+r.Name+"</label>"}i+="</fieldset>",e(".folderAccess",l).html(i).trigger("create"),e("#chkEnableAllFolders",l).checked(n.Policy.EnableAllFolders).checkboxradio("refresh").trigger("change")}function i(l,n,a){var i="";i+='<fieldset data-role="controlgroup">',i+="<legend>"+Globalize.translate("HeaderChannels")+"</legend>";for(var c=0,t=a.length;t>c;c++){var r=a[c],s="channels"+c,o=n.Policy.EnableAllChannels||-1!=n.Policy.EnabledChannels.indexOf(r.Id),d=o?' checked="checked"':"";i+='<input class="chkChannel" data-id="'+r.Id+'" type="checkbox" id="'+s+'"'+d+" />",i+='<label for="'+s+'">'+r.Name+"</label>"}i+="</fieldset>",e(".channelAccess",l).show().html(i).trigger("create"),a.length?e(".channelAccessContainer",l).show():e(".channelAccessContainer",l).hide(),e("#chkEnableAllChannels",l).checked(n.Policy.EnableAllChannels).checkboxradio("refresh").trigger("change")}function c(l,n,a){var i="";i+='<fieldset data-role="controlgroup">',i+="<legend>"+Globalize.translate("HeaderDevices")+"</legend>";for(var c=0,t=a.length;t>c;c++){var r=a[c],s="device"+c,o=n.Policy.EnableAllDevices||-1!=n.Policy.EnabledDevices.indexOf(r.Id)?' checked="checked"':"";i+='<input class="chkDevice" data-id="'+r.Id+'" type="checkbox" id="'+s+'"'+o+" />",i+='<label for="'+s+'">'+r.Name,i+='<br/><span style="font-weight:normal;font-size: 90%;">'+r.AppName+"</span>",i+="</label>"}i+="</fieldset>",e(".deviceAccess",l).show().html(i).trigger("create"),e("#chkEnableAllDevices",l).checked(n.Policy.EnableAllDevices).checkboxradio("refresh").trigger("change"),n.Policy.IsAdministrator?l.querySelector(".deviceAccessContainer").classList.add("hide"):l.querySelector(".deviceAccessContainer").classList.remove("hide")}function t(l,n,t,r,s,o){e(l).trigger("userloaded",[n]),Dashboard.setPageTitle(n.Name),i(l,n,s),a(l,n,r),c(l,n,o),Dashboard.hideLoadingMsg()}function r(){Dashboard.hideLoadingMsg(),Dashboard.alert(Globalize.translate("SettingsSaved"))}function s(l,n){l.Policy.EnableAllFolders=e("#chkEnableAllFolders",n).checked(),l.Policy.EnabledFolders=l.Policy.EnableAllFolders?[]:e(".chkFolder:checked",n).map(function(){return this.getAttribute("data-id")}).get(),l.Policy.EnableAllChannels=e("#chkEnableAllChannels",n).checked(),l.Policy.EnabledChannels=l.Policy.EnableAllChannels?[]:e(".chkChannel:checked",n).map(function(){return this.getAttribute("data-id")}).get(),l.Policy.EnableAllDevices=e("#chkEnableAllDevices",n).checked(),l.Policy.EnabledDevices=l.Policy.EnableAllDevices?[]:e(".chkDevice:checked",n).map(function(){return this.getAttribute("data-id")}).get(),l.Policy.BlockedChannels=null,l.Policy.BlockedMediaFolders=null,ApiClient.updateUserPolicy(l.Id,l.Policy).then(function(){r(n)})}function o(){var l=e(this).parents(".page");Dashboard.showLoadingMsg();var n=getParameterByName("userId");return ApiClient.getUser(n).then(function(e){s(e,l)}),!1}e(n).on("pageinit","#userLibraryAccessPage",function(){var l=this;e("#chkEnableAllDevices",l).on("change",function(){this.checked?e(".deviceAccessListContainer",l).hide():e(".deviceAccessListContainer",l).show()}),e("#chkEnableAllChannels",l).on("change",function(){this.checked?e(".channelAccessListContainer",l).hide():e(".channelAccessListContainer",l).show()}),e("#chkEnableAllFolders",l).on("change",function(){this.checked?e(".folderAccessListContainer",l).hide():e(".folderAccessListContainer",l).show()}),e(".userLibraryAccessForm").off("submit",o).on("submit",o)}).on("pageshow","#userLibraryAccessPage",function(){var l=this;Dashboard.showLoadingMsg();var n,a=getParameterByName("userId");if(a)n=ApiClient.getUser(a);else{var i=e.Deferred();i.resolveWith(null,[{Configuration:{}}]),n=i.promise()}var c=Dashboard.getCurrentUser(),r=ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),s=ApiClient.getJSON(ApiClient.getUrl("Channels")),o=ApiClient.getJSON(ApiClient.getUrl("Devices",{SupportsPersistentIdentifier:!0}));Promise.all([n,c,r,s,o]).then(function(e){t(l,e[0],e[1],e[2].Items,e[3].Items,e[4].Items)})})}(jQuery,window,document);