!function(t,e,n,i){"use strict";function r(t,e,n){return setTimeout(h(t,n),e)}function s(t,e,n){return Array.isArray(t)?(o(t,n[e],n),!0):!1}function o(t,e,n){var r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==i)for(r=0;r<t.length;)e.call(n,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)}function a(e,n,i){var r="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,i),e.apply(this,arguments)}}function u(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&le(i,n)}function h(t,e){return function(){return t.apply(e,arguments)}}function c(t,e){return typeof t==de?t.apply(e?e[0]||i:i,e):t}function l(t,e){return t===i?e:t}function p(t,e,n){o(m(e),function(e){t.addEventListener(e,n,!1)})}function f(t,e,n){o(m(e),function(e){t.removeEventListener(e,n,!1)})}function d(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function v(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function g(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function T(t){return Array.prototype.slice.call(t,0)}function y(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];g(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function E(t,e){for(var n,r,s=e[0].toUpperCase()+e.slice(1),o=0;o<pe.length;){if(n=pe[o],r=n?n+s:e,r in t)return r;o++}return i}function I(){return Ee++}function A(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow||t}function _(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){c(t.options.enable,[t])&&n.handler(e)},this.init()}function C(t){var e,n=t.options.inputClass;return new(e=n?n:_e?F:Ce?k:Ae?L:Y)(t,S)}function S(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&we&&i-r===0,o=e&(Re|Me)&&i-r===0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,b(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function b(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=x(e)),r>1&&!n.firstMultiple?n.firstMultiple=x(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,u=e.center=w(i);e.timeStamp=ge(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=z(a,u),e.distance=M(a,u),P(n,e),e.offsetDirection=R(e.deltaX,e.deltaY);var h=O(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=me(h.x)>me(h.y)?h.x:h.y,e.scale=o?X(o.pointers,i):1,e.rotation=o?N(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,D(n,e);var c=t.element;d(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function P(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};(e.eventType===we||s.eventType===Re)&&(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function D(t,e){var n,r,s,o,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=Me&&(u>xe||a.velocity===i)){var h=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,l=O(u,h,c);r=l.x,s=l.y,n=me(l.x)>me(l.y)?l.x:l.y,o=R(h,c),t.lastInterval=e}else n=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=n,e.velocityX=r,e.velocityY=s,e.direction=o}function x(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:ve(t.pointers[n].clientX),clientY:ve(t.pointers[n].clientY)},n++;return{timeStamp:ge(),pointers:e,center:w(e),deltaX:t.deltaX,deltaY:t.deltaY}}function w(t){var e=t.length;if(1===e)return{x:ve(t[0].clientX),y:ve(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:ve(n/e),y:ve(i/e)}}function O(t,e,n){return{x:e/t||0,y:n/t||0}}function R(t,e){return t===e?ze:me(t)>=me(e)?0>t?Ne:Xe:0>e?Ye:Fe}function M(t,e,n){n||(n=He);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function z(t,e,n){n||(n=He);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function N(t,e){return z(e[1],e[0],Le)+z(t[1],t[0],Le)}function X(t,e){return M(e[0],e[1],Le)/M(t[0],t[1],Le)}function Y(){this.evEl=Ve,this.evWin=je,this.pressed=!1,_.apply(this,arguments)}function F(){this.evEl=Be,this.evWin=$e,_.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=Ke,this.evWin=Qe,this.started=!1,_.apply(this,arguments)}function q(t,e){var n=T(t.touches),i=T(t.changedTouches);return e&(Re|Me)&&(n=y(n.concat(i),"identifier",!0)),[n,i]}function k(){this.evTarget=en,this.targetIds={},_.apply(this,arguments)}function H(t,e){var n=T(t.touches),i=this.targetIds;if(e&(we|Oe)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=T(t.changedTouches),a=[],u=this.target;if(s=n.filter(function(t){return d(t.target,u)}),e===we)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(Re|Me)&&delete i[o[r].identifier],r++;return a.length?[y(s.concat(a),"identifier",!0),a]:void 0}function L(){_.apply(this,arguments);var t=h(this.handler,this);this.touch=new k(this.manager,t),this.mouse=new Y(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function U(t,e){t&we?(this.primaryTouch=e.changedPointers[0].identifier,V.call(this,e)):t&(Re|Me)&&V.call(this,e)}function V(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,nn)}}function j(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(rn>=s&&rn>=o)return!0}return!1}function G(t,e){this.manager=t,this.set(e)}function Z(t){if(v(t,cn))return cn;var e=v(t,ln),n=v(t,pn);return e&&n?cn:e||n?e?ln:pn:v(t,hn)?hn:un}function B(){if(!on)return!1;var e={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=n?t.CSS.supports("touch-action",i):!0}),e}function $(t){this.options=le({},this.defaults,t||{}),this.id=I(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=dn,this.simultaneous={},this.requireFail=[]}function J(t){return t&yn?"cancel":t&gn?"end":t&mn?"move":t&vn?"start":""}function K(t){return t==Fe?"down":t==Ye?"up":t==Ne?"left":t==Xe?"right":""}function Q(t,e){var n=e.manager;return n?n.get(t):t}function te(){$.apply(this,arguments)}function ee(){te.apply(this,arguments),this.pX=null,this.pY=null}function ne(){te.apply(this,arguments)}function ie(){$.apply(this,arguments),this._timer=null,this._input=null}function re(){te.apply(this,arguments)}function se(){te.apply(this,arguments)}function oe(){$.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ae(t,e){return e=e||{},e.recognizers=l(e.recognizers,ae.defaults.preset),new ue(t,e)}function ue(t,e){this.options=le({},ae.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new G(this,this.options.touchAction),he(this,!0),o(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function he(t,e){var n=t.element;if(n.style){var i;o(t.options.cssProps,function(r,s){i=E(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ce(t,n){var i=e.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n,n.target.dispatchEvent(i)}var le,pe=["","webkit","Moz","MS","ms","o"],fe=e.createElement("div"),de="function",ve=Math.round,me=Math.abs,ge=Date.now;le="function"!=typeof Object.assign?function(t){if(t===i||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==i&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var Te=a(function(t,e,n){for(var r=Object.keys(e),s=0;s<r.length;)(!n||n&&t[r[s]]===i)&&(t[r[s]]=e[r[s]]),s++;return t},"extend","Use `assign`."),ye=a(function(t,e){return Te(t,e,!0)},"merge","Use `assign`."),Ee=1,Ie=/mobile|tablet|ip(ad|hone|od)|android/i,Ae="ontouchstart"in t,_e=E(t,"PointerEvent")!==i,Ce=Ae&&Ie.test(navigator.userAgent),Se="touch",be="pen",Pe="mouse",De="kinect",xe=25,we=1,Oe=2,Re=4,Me=8,ze=1,Ne=2,Xe=4,Ye=8,Fe=16,We=Ne|Xe,qe=Ye|Fe,ke=We|qe,He=["x","y"],Le=["clientX","clientY"];_.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(A(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(A(this.element),this.evWin,this.domHandler)}};var Ue={mousedown:we,mousemove:Oe,mouseup:Re},Ve="mousedown",je="mousemove mouseup";u(Y,_,{handler:function(t){var e=Ue[t.type];e&we&&0===t.button&&(this.pressed=!0),e&Oe&&1!==t.which&&(e=Re),this.pressed&&(e&Re&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Pe,srcEvent:t}))}});var Ge={pointerdown:we,pointermove:Oe,pointerup:Re,pointercancel:Me,pointerout:Me},Ze={2:Se,3:be,4:Pe,5:De},Be="pointerdown",$e="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(Be="MSPointerDown",$e="MSPointerMove MSPointerUp MSPointerCancel"),u(F,_,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Ge[i],s=Ze[t.pointerType]||t.pointerType,o=s==Se,a=g(e,t.pointerId,"pointerId");r&we&&(0===t.button||o)?0>a&&(e.push(t),a=e.length-1):r&(Re|Me)&&(n=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var Je={touchstart:we,touchmove:Oe,touchend:Re,touchcancel:Me},Ke="touchstart",Qe="touchstart touchmove touchend touchcancel";u(W,_,{handler:function(t){var e=Je[t.type];if(e===we&&(this.started=!0),this.started){var n=q.call(this,t,e);e&(Re|Me)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Se,srcEvent:t})}}});var tn={touchstart:we,touchmove:Oe,touchend:Re,touchcancel:Me},en="touchstart touchmove touchend touchcancel";u(k,_,{handler:function(t){var e=tn[t.type],n=H.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Se,srcEvent:t})}});var nn=2500,rn=25;u(L,_,{handler:function(t,e,n){var i=n.pointerType==Se,r=n.pointerType==Pe;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)U.call(this,e,n);else if(r&&j.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var sn=E(fe.style,"touchAction"),on=sn!==i,an="compute",un="auto",hn="manipulation",cn="none",ln="pan-x",pn="pan-y",fn=B();G.prototype={set:function(t){t==an&&(t=this.compute()),on&&this.manager.element.style&&fn[t]&&(this.manager.element.style[sn]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){c(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Z(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=v(i,cn)&&!fn[cn],s=v(i,pn)&&!fn[pn],o=v(i,ln)&&!fn[ln];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return o&&s?void 0:r||s&&n&We||o&&n&qe?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var dn=1,vn=2,mn=4,gn=8,Tn=gn,yn=16,En=32;$.prototype={defaults:{},set:function(t){return le(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Q(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=Q(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return t=Q(t,this),-1===g(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=Q(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;gn>i&&e(n.options.event+J(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=gn&&e(n.options.event+J(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=En)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(En|dn)))return!1;t++}return!0},recognize:function(t){var e=le({},t);return c(this.options.enable,[this,e])?(this.state&(Tn|yn|En)&&(this.state=dn),this.state=this.process(e),void(this.state&(vn|mn|gn|yn)&&this.tryEmit(e))):(this.reset(),void(this.state=En))},process:function(){},getTouchAction:function(){},reset:function(){}},u(te,$,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(vn|mn),r=this.attrTest(t);return i&&(n&Me||!r)?e|yn:i||r?n&Re?e|gn:e&vn?e|mn:vn:En}}),u(ee,te,{defaults:{event:"pan",threshold:10,pointers:1,direction:ke},getTouchAction:function(){var t=this.options.direction,e=[];return t&We&&e.push(pn),t&qe&&e.push(ln),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&We?(r=0===s?ze:0>s?Ne:Xe,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?ze:0>o?Ye:Fe,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return te.prototype.attrTest.call(this,t)&&(this.state&vn||!(this.state&vn)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=K(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),u(ne,te,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[cn]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&vn)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),u(ie,$,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[un]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Re|Me)&&!s)this.reset();else if(t.eventType&we)this.reset(),this._timer=r(function(){this.state=Tn,this.tryEmit()},e.time,this);else if(t.eventType&Re)return Tn;return En},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Tn&&(t&&t.eventType&Re?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ge(),this.manager.emit(this.options.event,this._input)))}}),u(re,te,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[cn]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&vn)}}),u(se,te,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:We|qe,pointers:1},getTouchAction:function(){return ee.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(We|qe)?e=t.overallVelocity:n&We?e=t.overallVelocityX:n&qe&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&me(e)>this.options.velocity&&t.eventType&Re},emit:function(t){var e=K(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),u(oe,$,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[hn]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&we&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=Re)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,a=!this.pCenter||M(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;var u=this.count%e.taps;if(0===u)return this.hasRequireFailures()?(this._timer=r(function(){this.state=Tn,this.tryEmit()},e.interval,this),vn):Tn}return En},failTimeout:function(){return this._timer=r(function(){this.state=En},this.options.interval,this),En},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Tn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ae.VERSION="2.0.7",ae.defaults={domEvents:!1,touchAction:an,enable:!0,inputTarget:null,inputClass:null,preset:[[re,{enable:!1}],[ne,{enable:!1},["rotate"]],[se,{direction:We}],[ee,{direction:We},["swipe"]],[oe],[oe,{event:"doubletap",taps:2},["tap"]],[ie]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var In=1,An=2;ue.prototype={set:function(t){return le(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?An:In},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Tn)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],e.stopped===An||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(vn|mn|gn)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof $)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=g(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==i&&e!==i){var n=this.handlers;return o(m(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==i){var n=this.handlers;return o(m(t),function(t){e?n[t]&&n[t].splice(g(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ce(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&he(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},le(ae,{INPUT_START:we,INPUT_MOVE:Oe,INPUT_END:Re,INPUT_CANCEL:Me,STATE_POSSIBLE:dn,STATE_BEGAN:vn,STATE_CHANGED:mn,STATE_ENDED:gn,STATE_RECOGNIZED:Tn,STATE_CANCELLED:yn,STATE_FAILED:En,DIRECTION_NONE:ze,DIRECTION_LEFT:Ne,DIRECTION_RIGHT:Xe,DIRECTION_UP:Ye,DIRECTION_DOWN:Fe,DIRECTION_HORIZONTAL:We,DIRECTION_VERTICAL:qe,DIRECTION_ALL:ke,Manager:ue,Input:_,TouchAction:G,TouchInput:k,MouseInput:Y,PointerEventInput:F,TouchMouseInput:L,SingleTouchInput:W,Recognizer:$,AttrRecognizer:te,Tap:oe,Pan:ee,Swipe:se,Pinch:ne,Rotate:re,Press:ie,on:p,off:f,each:o,merge:ye,extend:Te,assign:le,inherit:u,bindFn:h,prefixed:E});var _n="undefined"!=typeof t?t:"undefined"!=typeof self?self:{};_n.Hammer=ae,"function"==typeof define&&define.amd?define(function(){return ae}):"undefined"!=typeof module&&module.exports?module.exports=ae:t[n]=ae}(window,document,"Hammer");