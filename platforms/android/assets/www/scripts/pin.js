define([],function(){function e(e){var a=e.target;return Dashboard.showLoadingMsg(),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("Auth/Pin/Validate"),data:JSON.stringify({Pin:a.querySelector("#txtPin").value}),contentType:"application/json",dataType:"json"}).then(function(e){Dashboard.hideLoadingMsg(),Dashboard.alert({message:Globalize.translate("PinCodeConfirmedMessage",e.AppName),title:Globalize.translate("HeaderThankYou"),callback:function(){Dashboard.navigate("index.html")}})},function(){Dashboard.hideLoadingMsg(),Dashboard.alert({message:Globalize.translate("PinCodeInvalidMessage"),title:Globalize.translate("PinCodeInvalid")})}),e.preventDefault(),!1}pageIdOn("pageinit","pinEntryPage",function(){var a=this;a.querySelector("form").addEventListener("submit",e),a.querySelector(".btnCancel").addEventListener("click",function(){Dashboard.navigate("mypreferencesmenu.html?userId="+ApiClient.getCurrentUserId())})}),pageIdOn("pageshow","pinEntryPage",function(){var e=this,a=e.querySelector("#txtPin");a.focus(),a.value=""})});