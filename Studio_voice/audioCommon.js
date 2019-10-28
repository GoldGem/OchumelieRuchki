define("audioCommon",["lodash","coreUtils","santa-components"],function(i,t,o){return function(i){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=i,o.c=t,o.d=function(i,t,e){o.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,t){if(1&t&&(i=o(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var n in i)o.d(e,n,function(t){return i[t]}.bind(null,n));return e},o.n=function(i){var t=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(t,"a",t),t},o.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},o.p="",o(o.s=390)}({0:function(t,o){t.exports=i},1:function(i,o){i.exports=t},170:function(i,t,o){var e;void 0===(e=function(){"use strict";return{WAITING:"waiting",PAUSING:"pausing",PLAYING:"playing",REPEAT:"repeat"}}.apply(t,[]))||(i.exports=e)},2:function(i,t){i.exports=o},390:function(i,t,o){var e,n;e=[o(391),o(170)],void 0===(n=function(i,t){"use strict";return{audioMixin:i,audioPlayerStates:t}}.apply(t,e))||(i.exports=n)},391:function(i,t,o){var e,n;e=[o(2),o(0),o(1),o(170)],void 0===(n=function(i,t,o,e){"use strict";var n=i.santaTypesDefinitions;return{propTypes:{isPlaying:n.Audio.isPlaying,isSoundManagerOnResetup:n.Audio.isSoundManagerOnResetup,soundManagerReady:n.Audio.soundManagerReady,createAudioObj:n.Audio.createAudioObj,updatePlayingComp:n.Audio.updatePlayingComp,updatePausingComp:n.Audio.updatePausingComp,onHTML5ErrorTryToReloadWithFlash:n.Audio.onHTML5ErrorTryToReloadWithFlash,isPlayingAllowed:n.RenderFlags.isPlayingAllowed,compData:n.Component.compData.isRequired,id:n.Component.id.isRequired,serviceTopology:n.ServiceTopology.serviceTopology,isMobileView:n.isMobileView},getInitialState:function(){return this.audioObj=null,this.isAudioPlaying=!1,this.trackPosition=0,this.isPlayingAllowed=this.props.isPlayingAllowed,{}},componentWillReceiveProps:function(i){this.props.compData.uri!==i.compData.uri&&this.clearAudioObject(),i.isPlaying?this.setState({$playerState:e.PLAYING}):this.props.isPlaying&&this.setState({$playerState:e.PAUSING})},componentDidUpdate:function(){"mobile"!==this.getDeviceState()&&this.props.isPlayingAllowed?this.props.isPlayingAllowed!==this.isPlayingAllowed&&(this.isPlayingAllowed=this.props.isPlayingAllowed,this.autoPlay&&this.initiatePlay()):(this.isPlayingAllowed=this.props.isPlayingAllowed,!this.isPlayingAllowed&&this.props.isPlaying&&this.initiatePause())},componentDidMount:function(){"mobile"!==this.getDeviceState()&&this.autoPlay&&this.isPlayingAllowed&&this.initiatePlay()},componentWillUnmount:function(){this.isAudioPlaying&&this.state.$playerState===e.PLAYING&&this.initiatePause(),this.clearAudioObject(),this.initiatePause()},getOrCreateAudioObject:function(){return this.audioObj||this.createAudioObject()},createAudioObject:function(){var i=this;if(!i.props.compData.uri)return!1;var t={id:i.props.id,url:i.props.serviceTopology.staticAudioUrl+"/"+i.props.compData.uri,autoPlay:!1,stream:!0,multiShot:!0,multiShotEvents:!0,autoLoad:!i.props.isMobileView||!i.props.isPlayingAllowed,usePolicyFile:!1,whileloading:function(){"function"==typeof i.whileLoadingHandler&&i.whileLoadingHandler(this.duration)},onfailure:function(){i.failedToLoadAudioFile()},onfinish:function(){i.finishedPlayingAudio(this.id)},onsuspend:function(){i.audioLoadingSuspended(this.id)},onload:function(t){t||i.props.onHTML5ErrorTryToReloadWithFlash()}};return i.props.createAudioObj(t)},clearAudioObject:function(){this.audioObj&&(t.isFunction(this.audioObj.pause)&&this.audioObj.pause(),this.audioObj=null,this.trackPosition=0,this.resetTrackPosition&&this.resetTrackPosition())},failedToLoadAudioFile:function(i){var t="Failed to load audio file "+i;o.log.verbose("%c"+t,"color: #ff9494; font-size: 24px;"),o.log.error(t)},audioLoadingSuspended:function(i){var t="Browser has chosen to stop downloading audio file "+i;o.log.verbose("%c"+t,"color: #ff9494; font-size: 24px;")},playAudio:function(){var i=this,t={volume:i.audioVolume,position:i.trackPosition,whileplaying:function(){i.trackPosition=this.position,"function"==typeof i.whilePlayingHandler&&i.whilePlayingHandler(this.position)}};this.setVolume(this.audioVolume),this.audioObj.play(t)},updateAudioObject:function(){this.audioObj=this.getOrCreateAudioObject(),this.props.isSoundManagerOnResetup&&(this.audioObj=null),this.audioObj&&(this.isAudioPlaying||this.state.$playerState!==e.PLAYING?this.isAudioPlaying&&this.state.$playerState===e.PAUSING?(this.isAudioPlaying=!1,this.audioObj.pause()):this.state.$playerState===e.REPEAT&&(this.isAudioPlaying=!1):(this.isAudioPlaying=!0,this.playAudio()))},getDeviceState:function(){return this.props.isMobileView?"mobile":"desktop"},initiatePlay:function(){t.isEmpty(this.props.compData.uri)||""===this.props.compData.uri||this.props.updatePlayingComp(this)},initiatePause:function(){this.props.updatePausingComp()},getAudioDuration:function(){return this.audioObj.duration},seekAudio:function(i){this.trackPosition=i,this.isAudioPlaying?this.audioObj.setPosition(i):this.initiatePlay()},setVolume:function(i){this.audioVolume=i,this.isAudioPlaying&&this.audioObj.setVolume(i)},muteAudio:function(){this.audioObj.mute()},unmuteAudio:function(){this.audioObj.unmute()}}}.apply(t,e))||(i.exports=n)}})});
//# sourceMappingURL=audioCommon.min.js.map