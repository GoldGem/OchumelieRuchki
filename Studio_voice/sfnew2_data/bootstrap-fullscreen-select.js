"use strict";
/*!
 * Bootstrap-fullscreen-select v1.5.1 (http://craftpip.github.io/bootstrap-fullscreen-select/)
 * Author: boniface pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/craftpip/bootstrap-fullscreen-select/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Mobileselect's JavaScript requires jQuery");!function(t){t.fn.mobileSelect=function(i){var n=t(this);return n.length?(i||(i={}),"string"==typeof i?("destroy"===i&&n.each(function(e,i){var n=t(i).attr("data-msid");t.mobileSelect.elements[n].destroy(),delete t.mobileSelect.elements[n]}),"sync"!==i&&"refresh"!==i||n.each(function(e,i){var n=t(i).attr("data-msid");t.mobileSelect.elements[n].refresh()}),"hide"===i&&n.each(function(e,i){var n=t(i).attr("data-msid");t.mobileSelect.elements[n].hide()}),void("show"===i&&n.each(function(e,i){var n=t(i).attr("data-msid");t.mobileSelect.elements[n].show()}))):(t.mobileSelect.defaults&&t.extend(t.fn.mobileSelect.defaults,t.mobileSelect.defaults),i=t.extend({},t.fn.mobileSelect.defaults,i),void n.each(function(n,a){var s=t(a);if("SELECT"!==s[0].tagName)return console.warn("Sorry, cannot initialized a "+s[0].tagName+" element"),!0;if(void 0!==s.attr("data-msid"))return console.error("This element is already Initialized"),!0;var l=Math.floor(999999*Math.random());s.attr("data-msid",l);var o=new e(a,i);t.mobileSelect.elements[l]=o}))):"no elements to process"};var e=function(e,i){this.$e=t(e),t.extend(this,i),this.init()};e.prototype={init:function(){this._setUserOptions(),this._extractOptions(),this._buildHTML(),this._bindEvents()},_buildHTML:function(){if(void 0===this.$e.attr("data-triggerOn")){void 0!==this.$e.attr("data-style")&&(this.style=this.$e.attr("data-style"));var e=this.$e.attr("disabled")||"";this.$e.before('<button class="btn '+this.style+' btn-mobileSelect-gen" '+e+'><span class="text"></span> <span class="caret"></span></button>'),this.$triggerElement=this.$e.prev(),this.$e.hide()}else this.$triggerElement=t(this.$e.attr("data-triggerOn"));this.$c=t('<div class="mobileSelect-container"></div>').addClass(this.theme).appendTo("body"),this.$c.html(t.fn.mobileSelect.defaults.template),this.$c.children("div").css({"-webkit-transition":"all "+this.animationSpeed/1e3+"s",transition:"all "+this.animationSpeed/1e3+"s"}).css(this.padding).addClass("anim-"+this.animation),this.$c.find(".mobileSelect-title").html(this.title).end().find(".mobileSelect-savebtn").html(this.buttonSave).end().find(".mobileSelect-clearbtn").html(this.buttonClear).end().find(".mobileSelect-cancelbtn").html(this.buttonCancel).end(),this.$listcontainer=this.$c.find(".list-container"),this.isMultiple?this.$listcontainer.data("multiple","true"):this.$c.find(".mobileSelect-clearbtn").remove(),this._appendOptionsList()},_appendOptionsList:function(){this.$listcontainer.html("");var e=this,i="";t.each(this.options,function(t,n){if(n.group&&n.group!==i){if(n.groupDisabled)var a="disabled";e.$listcontainer.append('<span class="mobileSelect-group" '+a+">"+n.group+"</span>"),i=n.group}if(n.groupDisabled||n.disabled)a="disabled";e.$listcontainer.append('<a href="#" class="mobileSelect-control" '+a+' data-value="'+n.value+'">'+n.text+"</a>")}),this.sync(),this._updateBtnCount()},_updateBtnCount:function(){if(this.$triggerElement.is("button")&&this.$triggerElement.hasClass("btn-mobileSelect-gen")){var t=this.$triggerElement.find(".text"),e=this.$e.val();if(null===e)return t.html(this.noValueSelected),!1;this.isMultiple?1===e.length?t.html(e):t.html(e.length+" items selected"):t.html(e)}},_bindEvents:function(){var e=this;this.$triggerElement.on("click",function(){e.show()}),this.$c.find(".mobileSelect-savebtn").on("click",function(t){t.preventDefault(),e.syncR(),e.hide()}),this.$c.find(".mobileSelect-clearbtn").on("click",function(t){t.preventDefault(),e.$listcontainer.find(".selected").removeClass("selected"),e.syncR(),e.hide()}),this.$c.find(".mobileSelect-cancelbtn").on("click",function(t){t.preventDefault(),e.hide()}),this.$c.find(".mobileSelect-control").on("click",function(i){i.preventDefault();var n=t(this);if("disabled"==n.attr("disabled"))return!1;e.isMultiple?n.toggleClass("selected"):n.siblings().removeClass("selected").end().addClass("selected")})},_unbindEvents:function(){this.$triggerElement.unbind("click"),this.$c.find(".mobileSelect-clearbtn").unbind("click"),this.$c.find(".mobileSelect-cancelbtn").unbind("click"),this.$c.find(".mobileSelect-control").unbind("click")},sync:function(){var t=this.$e.val();for(var e in this.isMultiple||(t=[t]),this.$c.find("a").removeClass("selected"),t)this.$c.find('a[data-value="'+t[e]+'"]').addClass("selected")},syncR:function(){var e=[];this.$c.find(".selected").each(function(){e.push(t(this).data("value"))}),this.$e.val(e)},hide:function(){this.$c.children("div").addClass("anim-"+this.animation);var e=this;this._updateBtnCount(),setTimeout(function(){e.$c.hide(),t("body").removeClass("mobileSelect-noscroll"),e.onClose.apply(e.$e)},this.animationSpeed)},show:function(){this.$c.show(),this.sync(),t("body").addClass("mobileSelect-noscroll");var e=this;setTimeout(function(){e.$c.children("div").removeClass(t.mobileSelect.animations.join(" "))},10),this.onOpen.apply(this.$e)},_setUserOptions:function(){this.isMultiple=!!this.$e.attr("multiple"),void 0!==this.$e.data("title")&&(this.title=this.$e.data("title")),void 0!==this.$e.data("noValueSelected")&&(this.noValueSelected=this.$e.data("noValueSelected")),void 0!==this.$e.data("animation")&&(this.animation=this.$e.data("animation")),void 0!==this.$e.data("animation-speed")&&(this.animationSpeed=this.$e.data("animation-speed")),void 0!==this.$e.data("padding")&&(this.padding=this.$e.data("padding")),void 0!==this.$e.data("btntext-save")&&(this.buttonSave=this.$e.data("btntext-save")),void 0!==this.$e.data("btntext-clear")&&(this.buttonClear=this.$e.data("btntext-clear")),void 0!==this.$e.data("btntext-cancel")&&(this.buttonCancel=this.$e.data("btntext-cancel")),void 0!==this.$e.data("theme")&&(this.theme=this.$e.data("theme")),"none"===this.animation&&(this.animationSpeed=0)},_extractOptions:function(){var e=[];t.each(this.$e.find("option"),function(i,n){var a=t(n);if(a.text()){if(a.parent().is("optgroup"))var s=a.parent().attr("label"),l=a.parent().prop("disabled");else s=!1,l=!1;e.push({value:a.val(),text:t.trim(a.text()),disabled:a.prop("disabled"),group:s,groupDisabled:l})}}),this.options=e},destroy:function(){this.$e.removeAttr("data-msid"),this._unbindEvents(),this.$triggerElement.remove(),this.$c.remove(),this.$e.show(),console.log("done ")},refresh:function(){this._extractOptions(),this._appendOptionsList(),this._unbindEvents(),this._bindEvents()}},t.mobileSelect={elements:{},animations:["anim-top","anim-bottom","anim-left","anim-right","anim-opacity","anim-scale","anim-zoom","anim-none"]},t.fn.mobileSelect.defaults={template:'<div><div class="mobileSelect-title"></div><div class="list-container"></div><div class="mobileSelect-buttons"><a href="#" class="mobileSelect-savebtn"></a><a href="#" class="mobileSelect-clearbtn"></a><a href="#" class="mobileSelect-cancelbtn"></a></div></div>',title:"Select an option",noValueSelected:"Nothing selected",buttonSave:"Save",buttonClear:"Clear",buttonCancel:"Cancel",padding:{top:"20px",left:"20px",right:"20px",bottom:"20px"},animation:"scale",animationSpeed:400,theme:"white",onOpen:function(){},onClose:function(){},style:"btn-default"}}(jQuery);