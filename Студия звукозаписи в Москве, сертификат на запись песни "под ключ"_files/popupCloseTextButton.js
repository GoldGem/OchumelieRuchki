define("popupCloseTextButton",["lodash","santa-components","componentsCore","react","components"],function(e,t,n,o,r){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=950)}({0:function(t,n){t.exports=e},15:function(e,t){e.exports=o},18:function(e,t){e.exports=r},2:function(e,n){e.exports=t},3:function(e,t){e.exports=n},950:function(e,t,n){var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();o=[n(2),n(15),n(0),n(18),n(3)],void 0===(r=function(e,t,n,o,r){"use strict";var p=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(p,o.siteButton),i(p,[{key:"render",value:function(){var e,o,i,u,c=this,a=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var p=r.get;return void 0!==p?p.call(o):void 0}(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"render",this).call(this),l=(e=this.props.compData,o=e.link,i=n.get(o,"type"),u=n.get(o,"target"),n.includes(["PageLink","DynamicPageLink","AnchorLink"],i)||"ExternalLink"===i&&"_self"===u?a.props.onClick:function(){var e,t;if((e=c.props).closePopupPage.apply(e,arguments),"function"==typeof a.props.onClick)return(t=a.props).onClick.apply(t,arguments)});return t.cloneElement(a,{role:"button",tabIndex:"0",onClick:l,onKeyDown:function(){var e,t;((e=r.utils.accessibility.keyboardInteractions).activateBySpaceOrEnterButton.apply(e,arguments),"function"==typeof a.props.onKeyDown)&&(t=a.props).onKeyDown.apply(t,arguments)}})}}]),p}();return p.propTypes=n.defaults({closePopupPage:e.santaTypesDefinitions.popupPage.close},o.siteButton.propTypes),r.compRegistrar.register("wysiwyg.viewer.components.PopupCloseTextButton",p),p}.apply(t,o))||(e.exports=r)}})});
//# sourceMappingURL=popupCloseTextButton.min.js.map