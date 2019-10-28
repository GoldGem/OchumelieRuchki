define("textCommon",["lodash","santa-components","componentsCore","prop-types","skins","experiment"],function(e,t,n,i,a,o){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1151)}({0:function(t,n){t.exports=e},1151:function(e,t,n){var i,a;i=[n(1152),n(1153),n(1154)],void 0===(a=function(e,t,n){"use strict";return{textScaleMixin:e,baseTextInput:t,labelUtils:n}}.apply(t,i))||(e.exports=a)},1152:function(e,t,n){var i,a;i=[n(5),n(2)],void 0===(a=function(e,t){"use strict";return t.mixins.textScaleMixin(e.skinsMap)}.apply(t,i))||(e.exports=a)},1153:function(e,t,n){var i,a;i=[n(0),n(4),n(2),n(3)],void 0===(a=function(e,t,n,i){"use strict";var a={style:{display:"none"}},o=function(t,n){"number"===t.type&&e.assign(t,{min:n.min,max:n.max}),n.maxLength&&e.assign(t,{maxLength:n.maxLength})};function s(){var t=this.props.compProp,n=this.props.compData,i={type:n.textType,name:n.name||this.props.structure.nickname,value:this.state.value,onChange:this._handleChange,onBlur:this._handleBlur,onFocus:this._handleFocus,onClick:this._handleClick,onKeyDown:this._handleKeyDown,disabled:t.isDisabled,required:t.required,readOnly:t.readOnly,placeholder:n.placeholder||t.placeholder,tabIndex:t.tabIndex};return n.pattern&&e.assign(i,{pattern:n.pattern}),o(i,n),t.autoComplete&&"password"!==i.type&&(i.autoComplete="on"),i}var r=function(e){return n.mixins.validatableMixin.getPublicState(e)};return{mixins:[i.mixins.skinBasedComp,n.mixins.runTimeCompData,n.mixins.validatableMixin.validatable,n.mixins.compStateMixin(r)],propTypes:{compData:n.santaTypesDefinitions.Component.compData.isRequired,compProp:n.santaTypesDefinitions.Component.compProp.isRequired,structure:n.santaTypesDefinitions.Component.structure.isRequired,shouldResetComponent:n.santaTypesDefinitions.RenderFlags.shouldResetComponent,isPreset:t.bool,onChange:t.func,message:t.string},BASE_TEXT_BEHAVIORS:e.assign({},n.mixins.validatableMixin.VALIDATABLE_BEHAVIORS),getInitialState:function(){return e.assign(r(),{value:this.props.compData.value})},componentWillReceiveProps:function(t){t.shouldResetComponent&&t.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var n={};e.has(t.compData,"value")&&t.compData.value!==this.state.value&&(n.value=t.compData.value),this.setState(n)},_handleClick:function(e){this.props.isPreset&&e.target.select()},setCustomValidity:function(e){this.refs.input.setCustomValidity(e)},_handleChange:function(e){var t=e.target.value;t!==this.state.value&&(this.setState({value:t},function(){this.updateData({value:t})}.bind(this)),this.hideValidityIndication(),this.latestChangeEvent=e)},_handleBlur:function(e){this.props.onChange&&this.props.onChange(e),this.handleAction("blur",e),this.latestChangeEvent&&(this.handleAction("change",this.latestChangeEvent),this.latestChangeEvent=null),this.showValidityIndication()},_handleFocus:function(e){this.handleAction("focus",e)},_handleKeyDown:function(e){this.handleAction("keyPress",e)},getBaseTextInputSkinProperties:function(){return{input:s.call(this),message:this.props.message?{children:this.props.message,style:{whiteSpace:"normal",display:"table"}}:a}}}}.apply(t,i))||(e.exports=a)},1154:function(e,t,n){var i,a;i=[n(0),n(8)],void 0===(a=function(e,t){"use strict";return{minInputHeight:25,defaultInputHeight:42,measureComponentWithLabel:function(n,i,a,o){var s=n.inputHeight,r=n.inputHeightMobile,l=n.labelMargin,u=function(e){return e&&t.isOpen("sv_inputElementsLabelMobileHooks")}(o)&&r?r:s,p=void 0;if(this.hasLabel(a)){var c=(e.isNumber(l)?l:14)+i.offsetHeight,h=(u||42)+c;p=Math.max(25+c,h)}else u&&(p=Math.max(25,u));return p},getLabelPadding:function(e){var t=e.textAlignment,n=e.labelPadding,i=e.filesAlignment;switch(t||i){case"left":return{paddingLeft:n,paddingRight:"20px"};case"right":return{paddingRight:n,paddingLeft:"20px"};default:return{}}},getLabelFntStyle:function(t,n){if(n){var i=t.fontSize?Number(t.fontSize.replace("px","")):0,a=e.max([16,i]);t.fontSize=a+"px"}return t},getLabelStyle:function(t,n,i,a){var o=t.textAlignment,s=t.labelMargin,r=t.filesAlignment,l=this.getLabelPadding(t),u=this.getLabelFntStyle(n,i),p=o||r;return e.merge(l,u,{display:this.hasLabel(a)?"inline-block":"none",marginBottom:e.isNumber(s)?s:14,textAlign:p,direction:"right"===p?"rtl":"ltr"})},hasLabel:function(e){return!!e.label},showRequired:function(t,n,i){var a=e.get(i,"style.properties.txtlblrq"),o=a&&"transparent"!==a;return this.hasLabel(t)&&n.required&&o},getBaseInputWithLabelSkinProperties:function(e){var t=e.compProp,n=e.rawFontSyle,i=e.isMobileView,a=e.compData,o=e.id,s=o.compId,r=o.inputId;return{label:{children:a.label,style:this.getLabelStyle(t,n,i,a),htmlFor:""+s+r}}}}}.apply(t,i))||(e.exports=a)},2:function(e,n){e.exports=t},3:function(e,t){e.exports=n},4:function(e,t){e.exports=i},5:function(e,t){e.exports=a},8:function(e,t){e.exports=o}})});
//# sourceMappingURL=textCommon.min.js.map