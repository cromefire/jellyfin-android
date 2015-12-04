!function(){function e(e){return ConnectionManager.getRegistrationInfo(e,ApiClient)}function a(a,n){var r=IapManager.getProductInfo(a)||{};if(r.owned)return void n.resolve();var t=IapManager.isPurchaseAvailable(a)?{enableAppUnlock:!0,id:r.id,price:r.price,feature:a}:null,i=browserInfo.android?"android":"ios";IapManager.isUnlockedOverride(a).then(function(r){function o(e){return e.IsRegistered?void n.resolve():void IapManager.getSubscriptionOptions().then(function(e){if(e.filter(function(e){return e.owned}).length>0)return void n.resolve();var r={title:Globalize.translate("HeaderUnlockApp"),enablePlayMinute:"playback"==a,feature:a};c(e,t,r,n)})}return r?void n.resolve():void e(i+"appunlock").then(o,function(){o({})})})}function n(){var e=document.querySelector(".inAppPurchaseOverlay");e&&PaperDialogHelper.close(e)}function r(){v=[],h=null}function t(e,a,r,t){n(),v=e.slice(0),a&&v.push(a);var c=PaperDialogHelper.createDialog(),s="";s+='<h2 class="dialogHeader">',s+='<paper-fab icon="arrow-back" mini class="btnCloseDialog"></paper-fab>',s+='<div style="display:inline-block;margin-left:.6em;vertical-align:middle;">'+r.title+"</div>",s+="</h2>",s+='<div class="editorContent">',s+='<form style="max-width: 800px;margin:auto;">',s+='<p style="margin:2em 0;">',s+=Globalize.translate(a?"MessageUnlockAppWithPurchaseOrSupporter":"MessageUnlockAppWithSupporter"),s+="</p>",s+='<p style="margin:2em 0;">',s+=Globalize.translate("MessageToValidateSupporter"),s+="</p>";var p=!1;if(a){p=!0;var u=Globalize.translate("ButtonUnlockWithPurchase");a.price&&(u=Globalize.translate("ButtonUnlockPrice",a.price)),s+="<p>",s+='<paper-button raised class="secondary block btnPurchase" data-feature="'+a.feature+'"><iron-icon icon="check"></iron-icon><span>'+u+"</span></paper-button>",s+="</p>"}for(var d=0,b=e.length;b>d;d++)p=!0,s+="<p>",s+='<paper-button raised class="submit block btnPurchase" data-email="true" data-feature="'+e[d].feature+'"><iron-icon icon="check"></iron-icon><span>',s+=e[d].buttonText,s+="</span></paper-button>",s+="</p>";p&&IapManager.restorePurchase&&(s+="<p>",s+='<paper-button raised class="secondary block btnRestorePurchase" style="background-color: #673AB7;"><iron-icon icon="check"></iron-icon><span>'+Globalize.translate("ButtonRestorePreviousPurchase")+"</span></paper-button>",s+="</p>"),e.length&&(s+="<br/>",s+="<h1>"+Globalize.translate("HeaderBenefitsEmbyPremiere")+"</h1>",s+='<div class="paperList" style="margin-bottom:1em;">',s+=i().map(o).join(""),s+="</div>"),r.enablePlayMinute&&(s+="<p>",s+='<paper-button raised class="secondary block btnCloseDialog subdued"><iron-icon icon="play-arrow"></iron-icon><span>'+Globalize.translate("ButtonPlayOneMinute")+"</span></paper-button>",s+="</p>"),s+="</form>",s+="</div>",c.innerHTML=s,document.body.appendChild(c),l(c,r.feature,t),PaperDialogHelper.openWithHash(c,"iap"),$(".btnCloseDialog",c).on("click",function(){PaperDialogHelper.close(c)}),$(c).on("iron-overlay-closed",function(){window.TabBar&&TabBar.show()}),c.classList.add("inAppPurchaseOverlay")}function i(){var e=[];return e.push({name:Globalize.translate("CoverArt"),icon:"photo",text:Globalize.translate("CoverArtFeatureDescription")}),e.push({name:Globalize.translate("HeaderFreeApps"),icon:"check",text:Globalize.translate("FreeAppsFeatureDescription")}),e.push(Dashboard.capabilities().SupportsSync?{name:Globalize.translate("HeaderMobileSync"),icon:"sync",text:Globalize.translate("MobileSyncFeatureDescription")}:AppInfo.isNativeApp?{name:Globalize.translate("HeaderCloudSync"),icon:"sync",text:Globalize.translate("CloudSyncFeatureDescription")}:{name:Globalize.translate("HeaderCinemaMode"),icon:"movie",text:Globalize.translate("CinemaModeFeatureDescription")}),e}function o(e){var a="";return a+="<paper-icon-item>",a+='<paper-fab mini style="background-color:#52B54B;" icon="'+e.icon+'" item-icon></paper-fab>',a+="<paper-item-body three-line>",a+='<a class="clearLink" href="https://emby.media/premiere" target="_blank">',a+="<div>",a+=e.name,a+="</div>",a+='<div secondary style="white-space:normal;">',a+=e.text,a+="</div>",a+="</a>",a+="</paper-item-body>",a+="</paper-icon-item>"}function l(e,a,n){f=!0,$(".btnPurchase",e).on("click",function(){f=!1,"true"==this.getAttribute("data-email")?s(this.getAttribute("data-feature")):IapManager.beginPurchase(this.getAttribute("data-feature"))}),$(".btnRestorePurchase",e).on("click",function(){f=!1,IapManager.restorePurchase()}),$(e).on("iron-overlay-closed",function(){r();var e=this;f?"playback"==a?Dashboard.alert({message:Globalize.translate("ThankYouForTryingEnjoyOneMinute"),title:Globalize.translate("HeaderTryPlayback"),callback:function(){n.reject(),$(e).remove()}}):(n.reject(),$(e).remove()):$(this).remove()})}function c(e,a,n,r){require(["components/paperdialoghelper"],function(){window.TabBar&&TabBar.hide(),t(e,a,n,r),h=r})}function s(e){if(ConnectionManager.isLoggedIntoConnect()){var a=ConnectionManager.connectUser();if(a&&a.Email)return void IapManager.beginPurchase(e,a.Email)}p(e)}function p(e){require(["prompt"],function(a){a({text:Globalize.translate("TextPleaseEnterYourEmailAddressForSubscription"),title:Globalize.translate("HeaderEmailAddress"),callback:function(a){a&&IapManager.beginPurchase(e,a)}})})}function u(e,a){if(a.owned){var r=h;r&&v.filter(function(e){return a.id==e.id}).length&&(f=!1,n(),r.resolve())}}function d(a){Dashboard.getPluginSecurityInfo().then(function(n){function r(e){return e.IsRegistered?void a.resolve():void IapManager.getSubscriptionOptions().then(function(e){var n={title:Globalize.translate("HeaderUnlockSync"),feature:"sync"};c(e,null,n,a)})}return n.IsMBSupporter?void a.resolve():void e("Sync").then(r,function(){r({})})})}function b(){Events.on(IapManager,"productupdated",u)}var f=!0,v=[],h=null;window.RegistrationServices={renderPluginInfo:function(){},validateFeature:function(e){var n=DeferredBuilder.Deferred();return"playback"==e?a(e,n):"livetv"==e?a(e,n):"sync"==e?d(n):n.resolve(),n.promise()}},browserInfo.android?requirejs(["cordova/android/iap"],b):requirejs(["cordova/iap"],b)}();