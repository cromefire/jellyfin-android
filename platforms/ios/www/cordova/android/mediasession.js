!function(){function e(){return!1}function a(a,t){if(!a.NowPlayingItem)return void l();var n=MediaController.getPlayerInfo().isLocalPlayer||!1;if(!n||e()){"init"==t&&(t="positionchange");var i=a.PlayState||{},o=MediaController.getNowPlayingNameHtml(a.NowPlayingItem)||"",g=o.split("<br/>"),r=1==g.length?"":g[0],c=g[g.length-1];if("Video"==a.NowPlayingItem.MediaType&&g.length>1){var m=r;r=c,c=m}var p=a.NowPlayingItem.Album||"",s=a.NowPlayingItem.Id,d=a.NowPlayingItem.RunTimeTicks?a.NowPlayingItem.RunTimeTicks/1e4:0,I=i.PositionTicks?i.PositionTicks/1e4:0,P=i.IsPaused||!1,u=i.CanSeek||!1,h="",f=400,T=a.NowPlayingItem;T.PrimaryImageTag?h=ApiClient.getScaledImageUrl(T.PrimaryImageItemId,{type:"Primary",height:f,tag:T.PrimaryImageTag}):T.ThumbImageTag?h=ApiClient.getScaledImageUrl(T.ThumbImageItemId,{type:"Thumb",height:f,tag:T.ThumbImageTag}):T.BackdropImageTag&&(h=ApiClient.getScaledImageUrl(T.BackdropItemId,{type:"Backdrop",height:f,tag:T.BackdropImageTag,index:0})),"positionchange"==t&&y||(MainActivity.updateMediaSession(t,n,s,c,r,p,parseInt(d),parseInt(I),h,u,P),y=(new Date).getTime())}}function t(e,t){a(t,e.type)}function n(e,a){Logger.log("nowplaying event: "+e.type);var n=this;n.beginPlayerUpdates(),t.call(n,e,a)}function i(e){Logger.log("nowplaying event: "+e.type);var a=this;a.endPlayerUpdates(),l()}function o(){r&&($(r).off("playbackstart",n).off("playbackstop",i).off("playstatechange",t).off("positionchange",t),r.endPlayerUpdates(),r=null,l())}function l(){MainActivity.hideMediaSession(),y=0}function g(a){o(),(!a.isLocalPlayer||e())&&(r=a,Logger.log("binding remotecontrols to "+a.name),a.getPlayerState().then(function(e){e.NowPlayingItem&&a.beginPlayerUpdates(),t.call(a,{type:"init"},e)}),$(a).on("playbackstart",n).on("playbackstop",i).on("playstatechange",t).on("positionchange",t))}var r,y=0;Logger.log("binding remotecontrols to MediaController"),$(MediaController).on("playerchange",function(){g(MediaController.getCurrentPlayer())}),g(MediaController.getCurrentPlayer())}();