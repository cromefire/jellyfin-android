function androidExec(e,s,i,o,a){if(0>bridgeSecret)throw new Error("exec() called without bridgeSecret");void 0===jsToNativeBridgeMode&&androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT);for(var r=0;r<a.length;r++)"ArrayBuffer"==utils.typeName(a[r])&&(a[r]=base64.fromArrayBuffer(a[r]));var n=i+cordova.callbackId++,d=JSON.stringify(a);(e||s)&&(cordova.callbacks[n]={success:e,fail:s});var t=nativeApiProvider.get().exec(bridgeSecret,i,o,n,d);jsToNativeBridgeMode==jsToNativeModes.JS_OBJECT&&"@Null arguments."===t?(androidExec.setJsToNativeBridgeMode(jsToNativeModes.PROMPT),androidExec(e,s,i,o,a),androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT)):t&&(messagesFromNative.push(t),nextTick(processMessages))}function pollOnceFromOnlineEvent(){pollOnce(!0)}function pollOnce(e){if(!(0>bridgeSecret)){var s=nativeApiProvider.get().retrieveJsMessages(bridgeSecret,!!e);s&&(messagesFromNative.push(s),processMessages())}}function pollingTimerFunc(){pollEnabled&&(pollOnce(),setTimeout(pollingTimerFunc,50))}function hookOnlineApis(){function e(e){cordova.fireWindowEvent(e.type)}window.addEventListener("online",pollOnceFromOnlineEvent,!1),window.addEventListener("offline",pollOnceFromOnlineEvent,!1),cordova.addWindowEventHandler("online"),cordova.addWindowEventHandler("offline"),document.addEventListener("online",e,!1),document.addEventListener("offline",e,!1)}function buildPayload(e,s){var i=s.charAt(0);if("s"==i)e.push(s.slice(1));else if("t"==i)e.push(!0);else if("f"==i)e.push(!1);else if("N"==i)e.push(null);else if("n"==i)e.push(+s.slice(1));else if("A"==i){var o=s.slice(1);e.push(base64.toArrayBuffer(o))}else if("S"==i)e.push(window.atob(s.slice(1)));else if("M"==i)for(var a=s.slice(1);""!==a;){var r=a.indexOf(" "),n=+a.slice(0,r),d=a.substr(r+1,n);a=a.slice(r+n+1),buildPayload(e,d)}else e.push(JSON.parse(s))}function processMessage(message){var firstChar=message.charAt(0);if("J"==firstChar)eval(message.slice(1));else if("S"==firstChar||"F"==firstChar){var success="S"==firstChar,keepCallback="1"==message.charAt(1),spaceIdx=message.indexOf(" ",2),status=+message.slice(2,spaceIdx),nextSpaceIdx=message.indexOf(" ",spaceIdx+1),callbackId=message.slice(spaceIdx+1,nextSpaceIdx),payloadMessage=message.slice(nextSpaceIdx+1),payload=[];buildPayload(payload,payloadMessage),cordova.callbackFromNative(callbackId,success,status,payload,keepCallback)}}function processMessages(){if(!isProcessing&&0!==messagesFromNative.length){isProcessing=!0;try{var e=popMessageFromQueue();if("*"==e&&0===messagesFromNative.length)return void nextTick(pollOnce);processMessage(e)}finally{isProcessing=!1,messagesFromNative.length>0&&nextTick(processMessages)}}}function popMessageFromQueue(){var e=messagesFromNative.shift();if("*"==e)return"*";var s=e.indexOf(" "),i=+e.slice(0,s),o=e.substr(s+1,i);return e=e.slice(s+i+1),e&&messagesFromNative.unshift(e),o}var cordova=require("cordova"),nativeApiProvider=require("cordova/android/nativeapiprovider"),utils=require("cordova/utils"),base64=require("cordova/base64"),channel=require("cordova/channel"),jsToNativeModes={PROMPT:0,JS_OBJECT:1},nativeToJsModes={POLLING:0,LOAD_URL:1,ONLINE_EVENT:2},jsToNativeBridgeMode,nativeToJsBridgeMode=nativeToJsModes.ONLINE_EVENT,pollEnabled=!1,bridgeSecret=-1,messagesFromNative=[],isProcessing=!1,resolvedPromise="undefined"==typeof Promise?null:Promise.resolve(),nextTick=resolvedPromise?function(e){resolvedPromise.then(e)}:function(e){setTimeout(e)};androidExec.init=function(){bridgeSecret=+prompt("","gap_init:"+nativeToJsBridgeMode),channel.onNativeReady.fire()},hookOnlineApis(),androidExec.jsToNativeModes=jsToNativeModes,androidExec.nativeToJsModes=nativeToJsModes,androidExec.setJsToNativeBridgeMode=function(e){e!=jsToNativeModes.JS_OBJECT||window._cordovaNative||(e=jsToNativeModes.PROMPT),nativeApiProvider.setPreferPrompt(e==jsToNativeModes.PROMPT),jsToNativeBridgeMode=e},androidExec.setNativeToJsBridgeMode=function(e){e!=nativeToJsBridgeMode&&(nativeToJsBridgeMode==nativeToJsModes.POLLING&&(pollEnabled=!1),nativeToJsBridgeMode=e,bridgeSecret>=0&&nativeApiProvider.get().setNativeToJsBridgeMode(bridgeSecret,e),e==nativeToJsModes.POLLING&&(pollEnabled=!0,setTimeout(pollingTimerFunc,1)))},module.exports=androidExec;