!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.multiDownload=e()}}(function(){return function e(n,t,o){function r(u,f){if(!t[u]){if(!n[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var d=t[u]={exports:{}};n[u][0].call(d.exports,function(e){var t=n[u][1][e];return r(t?t:e)},d,d.exports,e,n,t,o)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(e,n){"use strict";function t(e){var n=0;!function t(){var o=document.createElement("iframe");o.style.display="none",o.src=e[n++],document.documentElement.appendChild(o);var r=setInterval(function(){"complete"===o.contentWindow.document.readyState&&(clearInterval(r),setTimeout(function(){o.parentNode.removeChild(o)},1e3),n<e.length&&t())},100)}()}function o(){return/Firefox\//i.test(navigator.userAgent)}function r(e){var n=document.createElement("a");return n.href=e,location.hostname===n.hostname&&location.protocol===n.protocol}function i(e){var n=document.createElement("a");n.download="",n.href=e,n.dispatchEvent(new MouseEvent("click"))}n.exports=function(e){if(!e)throw new Error("`urls` required");if("undefined"==typeof document.createElement("a").download)return t(e);var n=0;e.forEach(function(e){return o()&&!r(e)?setTimeout(i.bind(null,e),100*++n):void i(e)})}},{}]},{},[1])(1)});