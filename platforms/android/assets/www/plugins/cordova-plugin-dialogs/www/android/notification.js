cordova.define("cordova-plugin-dialogs.notification_android",function(t,i,o){var n=t("cordova/exec");o.exports={activityStart:function(t,i){"undefined"==typeof t&&"undefined"==typeof i&&(t="Busy",i="Please wait..."),n(null,null,"Notification","activityStart",[t,i])},activityStop:function(){n(null,null,"Notification","activityStop",[])},progressStart:function(t,i){n(null,null,"Notification","progressStart",[t,i])},progressStop:function(){n(null,null,"Notification","progressStop",[])},progressValue:function(t){n(null,null,"Notification","progressValue",[t])}}});