!function(){function t(t){var e,o="",n=$(window).height();t.positionTo&&n>=540&&(e=$(t.positionTo).offset(),e.top+=$(t.positionTo).innerHeight()/2,e.left+=$(t.positionTo).innerWidth()/2,e.top-=24,e.left-=24,e.top-=55*t.items.length/2,e.left-=80,e.top-=$(window).scrollTop(),e.left-=$(window).scrollLeft(),e.top=Math.min(e.top,$(window).height()-300),e.left=Math.min(e.left,$(window).width()-300),e.top=Math.max(e.top,0),e.left=Math.max(e.left,0)),t.title&&(o+="<h2>",o+=t.title,o+="</h2>");var i=!browserInfo.safari;i&&(o+="<paper-dialog-scrollable>");var a=t.items.filter(function(t){return t.ironIcon}).length;o+="<paper-menu>";for(var r=0,l=t.items.length;l>r;r++){var s=t.items[r];o+='<paper-menu-item class="actionSheetMenuItem" data-id="'+s.id+'" style="display:block;">',s.ironIcon?o+='<iron-icon icon="'+s.ironIcon+'"></iron-icon>':a&&(o+="<iron-icon></iron-icon>"),o+="<span>"+s.name+"</span>",o+="</paper-menu-item>"}o+="</paper-menu>",i&&(o+="</paper-dialog-scrollable>"),t.showCancel&&(o+='<div class="buttons">',o+="<paper-button dialog-dismiss>"+Globalize.translate("ButtonCancel")+"</paper-button>",o+="</div>");var p=document.createElement("paper-dialog");p.setAttribute("with-backdrop","with-backdrop"),p.innerHTML=o,e&&(p.style.position="fixed",p.style.left=e.left+"px",p.style.top=e.top+"px"),document.body.appendChild(p),browserInfo.animate&&(p.animationConfig={entry:{name:"scale-up-animation",node:p,timing:{duration:160,easing:"ease-out"}},exit:{name:"fade-out-animation",node:p,timing:{duration:200,easing:"ease-in"}}}),setTimeout(function(){p.open()},50),p.addEventListener("iron-overlay-closed",function(){p.parentNode.removeChild(p)});var c=browserInfo.chrome||browserInfo.safari?"click":"mousedown";$(".actionSheetMenuItem",p).on(c,function(){var e=this.getAttribute("data-id");setTimeout(function(){p.close(),t.callback&&t.callback(e)},100)})}window.ActionSheetElement={show:t}}();