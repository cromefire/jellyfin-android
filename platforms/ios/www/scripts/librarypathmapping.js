define(["jQuery"],function(t){function e(t,e){require(["confirm"],function(i){i(Globalize.translate("MessageConfirmPathSubstitutionDeletion"),Globalize.translate("HeaderConfirmDeletion")).then(function(){ApiClient.getServerConfiguration().then(function(i){i.PathSubstitutions.splice(e,1),ApiClient.updateServerConfiguration(i).then(function(){r(t)})})})})}function i(e,i){i.PathSubstitutions.push({From:t("#txtFrom",e).val(),To:t("#txtTo",e).val()})}function n(i,n){var a=0,r=n.PathSubstitutions.map(function(t){var e="";return e+="<paper-icon-item>",e+='<paper-fab mini icon="folder" class="blue" item-icon></paper-fab>',e+="<paper-item-body three-line>",e+="<div>"+t.From+"</div>",e+="<div secondary><b>"+Globalize.translate("HeaderTo")+"</b></div>",e+="<div secondary>"+t.To+"</div>",e+="</paper-item-body>",e+='<paper-icon-button data-index="'+a+'" icon="delete" class="btnDeletePath"></paper-icon-button>',e+="</paper-icon-item>",a++,e}).join("");n.PathSubstitutions.length&&(r='<div class="paperList">'+r+"</div>");var o=t(".pathSubstitutions",i).html(r);t(".btnDeletePath",o).on("click",function(){e(i,parseInt(this.getAttribute("data-index")))})}function a(t,e){u=e,require(["paper-fab","paper-item-body","paper-icon-item"],function(){n(t,e),Dashboard.hideLoadingMsg()})}function r(e){t("#txtFrom",e).val(""),t("#txtTo",e).val(""),ApiClient.getServerConfiguration().then(function(t){a(e,t)})}function o(){Dashboard.showLoadingMsg();var e=this,n=t(e).parents(".page");return ApiClient.getServerConfiguration().then(function(t){i(n,t),ApiClient.updateServerConfiguration(t).then(function(){r(n)})}),!1}function l(){return[{href:"library.html",name:Globalize.translate("TabFolders")},{href:"librarypathmapping.html",name:Globalize.translate("TabPathSubstitution")},{href:"librarysettings.html",name:Globalize.translate("TabAdvanced")}]}var u;t(document).on("pageinit","#libraryPathMappingPage",function(){var e=this;t(".libraryPathMappingForm").off("submit",o).on("submit",o),e.querySelector(".labelFromHelp").innerHTML=Globalize.translate("LabelFromHelp","D:\\Movies")}).on("pageshow","#libraryPathMappingPage",function(){LibraryMenu.setTabs("librarysetup",1,l),Dashboard.showLoadingMsg();var t=this;ApiClient.getServerConfiguration().then(function(e){a(t,e)})}).on("pagebeforehide","#libraryPathMappingPage",function(){u=null})});