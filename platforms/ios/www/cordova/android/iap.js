define(["appStorage"],function(e){function n(e,n,t){var r=m.filter(function(n){return n.id==e})[0];r||(r={id:e,owned:n,price:t},m.push(r)),r.price=t,r.owned=r.owned||n,r.id=e,Events.trigger(IapManager,"productupdated",[r])}function t(e){var n;n="embypremieremonthly"==e?NativeIapManager.getPremiereMonthlySku():NativeIapManager.getUnlockProductSku();var t=m.filter(function(e){return e.id==n});return t.length?t[0]:null}function r(){o()}function i(e,n){return"embypremieremonthly"==e?MainActivity.purchasePremiereMonthly(n):MainActivity.purchaseUnlock()}function a(e){e===!0?o():e&&ApiClient.ajax({type:"POST",url:ApiClient.getUrl("Appstore/Register"),data:{Parameters:JSON.stringify(e)}}).then(function(){o()},function(){o()})}function o(){NativeIapManager.getPurchaseInfos("window.IapManager.updateProduct")}function u(){return new Promise(function(e){var n=[];n.push({feature:"embypremieremonthly",buttonText:"EmbyPremiereMonthly"}),n=n.filter(function(e){return null!=t(e.feature)}).map(function(e){var n=t(e.feature);return e.buttonText=Globalize.translate(e.buttonText,n.price),e.owned=n.owned,e}),e(n)})}function c(e){return"playback"==e||"livetv"==e?d():new Promise(function(e){e(!1)})}function d(){return l(ConnectionManager.deviceId()).then(function(e){return e?!0:l(device.uuid).then(function(e){return e?!0:l(MainActivity.getAndroidDeviceId())})})}function l(n,t){var r="oldapp5-"+n,i=e.getItem(r);if(i)return new Promise(function(e){e("true"==i)});var a="http://mb3admin.com/admin/service/statistics/appAccess?application=AndroidV1&deviceId="+n;return t&&(a+="&alias="+t),fetch(a,{method:"GET"}).then(function(n){return n.status<400?(e.setItem(r,"true"),!0):!1},function(){return!1})}function p(e){return"playback"==e||"livetv"==e}function f(){var e=Globalize.translate("AlreadyPaidHelp1","apps@emby.media");e+="<br/><br/>"+Globalize.translate("AlreadyPaidHelp2"),require(["confirm"],function(n){n(e,Globalize.translate("AlreadyPaid")).then(s)})}function s(){var e=ApiClient.serverInfo()||{},n=e.Id||"Unknown",t="Order number: ";t+="\n\nPlease enter order number above or attach screenshot of order information.",t+="\n\n"+n+"|"+ConnectionManager.deviceId(),MainActivity.sendEmail("apps@emby.media","Android Activation",t)}var m=[];window.IapManager={getProductInfo:t,updateProduct:n,beginPurchase:i,onPurchaseComplete:a,getSubscriptionOptions:u,onStoreReady:r,isUnlockedOverride:c,restorePurchase:f,enableRestore:p},NativeIapManager.initStore()});