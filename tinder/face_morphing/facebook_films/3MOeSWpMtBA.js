if (self.CavalryLogger) { CavalryLogger.start_js(["RhKKa"]); }

__d("XAdPreferencesNUXController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/preferences/nux/",{type:{type:"String",required:!0}})}),null);
__d("XAdsPreferencesFeedbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/preferences/feeedback/",{ad_id:{type:"Int"},id:{type:"Int"},favorite:{type:"Enum",required:!0,enumType:1}})}),null);
__d("AdsPrefs",["AsyncRequest","BanzaiODS","CSS","DOM","Event","XAdPreferencesNUXController","XAdsPreferencesFeedbackController","tidyEvent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){b("CSS").toggleClass(a,"hidden_elem");a=b("CSS").hasClass(a,"hidden_elem")?"ad_useful":"ad_neutral";c=b("XAdsPreferencesFeedbackController").getURIBuilder().setInt("id",c).setEnum("favorite",a).getURI();a=new(b("AsyncRequest"))(c);a.send()}a={initRHCFeedback:function(a,c,d){b("tidyEvent")(b("Event").listen(c,"click",function(b){g(d,a),b.kill()}))},toggleFavorite:function(a){var c=b("DOM").find(a.getRoot(),".img");g(c,a.getLabel())},registerView:function(a){a=b("XAdPreferencesNUXController").getURIBuilder().setString("type",a).getURI();new(b("AsyncRequest"))(a).send()},logSurveyClick:function(a){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("BanzaiODS").bumpEntityKey(2966,"ads_www","ad_prefs_new_user_ad_about_survey_click")}))}};e.exports=a}),null);
__d("DesktopHscrollUnit",["csx","cx","Arbiter","BanzaiLogger","BanzaiODS","CSS","DataAttributeUtils","DesktopHscrollUnitEventConstants","DOM","DOMQuery","Locale","Parent","PixelNumConverter","Style","getStyleProperty","queryThenMutateDOM"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_2_tg",j=300,k="_2_th",l="_2_ti",m="_2_tj",n="_hy9",o="_1kf5",p="_20yh",q="_i6m",r="_1mrv",s="_5pat",t="div._3938",u="._nxj",v="div._20yh",w;a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i,j,l){this.$1=a,this.$2=c,this.$3=d,this.$4=e,this.$5=g,this.$6=0,this.$7=1+g.length,this.$8=[f],this.$9=h,this.$10=new(b("Arbiter"))(),this.$11=0,this.$12=j,this.$13=[],this.$14=-1,this.$15=l,w=l,this.$16=b("DOMQuery").find(a,"^div._5jmm"),this.$17=b("DataAttributeUtils").getDataFt(this.$16),this.$3.initPager(this,this.$4),i.forEach(function(a){a.init(this)},this),b("CSS").addClass(f.ad,k),b("CSS").addClass(f.ad,p),f.subheader&&this.$18(f.subheader),this.$19(this.$6),b("CSS").addClass(this.$16,"_sf6"),b("CSS").conditionClass(this.$16,"_2_tl",this.$9),this.$20(),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_HIDE_EVENT,this.hideItem.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,this.scrollItemBeforeXout.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_UNHIDE_EVENT,this.unhideItem.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,this.logLastAdXoutEvent.bind(this))}a.getFirstAdsHscrollElement=function(a){a=b("DOMQuery").scry(a,t);return a[0]};a.hideAdsHscroll=function(c){var d=a.getFirstAdsHscrollElement(c);c=b("CSS").hasClass(c,q);if(d&&!c){b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_HIDE_EVENT,d.id);return!0}return!1};a.removeHeaderMargin=function(a){a=b("DOMQuery").find(a,u);b("CSS").removeClass(a,r)};a.handleOptimisticHideInUnit=function(c){c=a.getFirstAdsHscrollElement(c);if(c&&w){b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,c.id);var d=b("DOM").scry(c,v);if(d.length!=1)return!0;b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:c.id,action:"Hide"})}return!1};a.handleOptimisticUnhideInUnit=function(c){c=b("Parent").byClass(c,s);var d=a.getFirstAdsHscrollElement(c);c=b("CSS").matchesSelector(c,"._i6m");d&&c&&b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:d.id,action:"Unhide"});return d&&!c};var c=a.prototype;c.scrollItemBeforeXout=function(a,b){if(this.$1.id!=b||!this.$15)return;this.$14=this.$6;this.$6+1==this.getNumVisibleAds()?this.scrollPrevious():this.scrollNext()};c.hideItem=function(a,c){if(this.$1.id!=c||!this.$15)return;a={item:this.$8.splice(this.$14,1)[0],index:this.$14};this.$13.push(a);b("CSS").removeClass(a.item.ad,p);this.$14!=this.getNumVisibleAds()&&(this.$6=this.$14);this.$10.inform(b("DesktopHscrollUnitEventConstants").HSCROLL_PAGER_ITEM_HIDE_EVENT,this.$6,"event");this.logIndividualXout(c,"Hide")};c.unhideItem=function(a,c){if(this.$1.id!=c||!this.$15)return;a=this.$13.pop();this.$8.splice(a.index,0,a.item);b("CSS").addClass(a.item.ad,p);this.$21(a.index);this.logIndividualXout(c,"Unhide")};c.logLastAdXoutEvent=function(a,b){if(this.$1.id!=b.id)return;this.logIndividualXout(b.id,b.action)};c.logIndividualXout=function(a,c){a=document.getElementById(a);a=b("Parent").byClass(a,s).getAttribute("id");var d;c=="Hide"?d=1:d=-1;b("BanzaiLogger").log("FeedAdsHscrollIndividualXoutLoggerConfig",{ads_hscroll_unit_id:a,number_of_total_ads:this.$7,number_of_hidden_ads:d,action:c})};c.getArbiter=function(){return this.$10};c.getAdContainer=function(){return this.$1};c.getPager=function(){return this.$3};c.getSelectedItem=function(){return this.$8[this.$6]};c.getSelectedIndex=function(){return this.$6};c.getNumItems=function(){return this.$7};c.getID=function(){return this.$16.id};c.getNumOfHiddenItems=function(){return this.$13.length};c.getNumVisibleAds=function(){return this.$7-this.$13.length};c.scrollNext=function(){this.$6+1<this.getNumVisibleAds()&&(this.$21(this.$6+1),this.$6===1&&b("BanzaiODS").bumpEntityKey(2966,"feed_ads",this.$22()))};c.scrollPrevious=function(){this.$6-1>=0&&this.$21(this.$6-1)};c.addOffscreenItems=function(a){this.$5.push.apply(this.$5,a),this.$7+=a.length,this.$10.inform("onAdditionalItemsAdded",{})};c.$19=function(a){var c=this.$8[a];this.$9&&c.subheader&&(b("DOM").remove(c.subheader),b("DOM").appendContent(this.$2,c.subheader),this.$2.offsetHeight);this.$8.forEach(function(c,d){d=d==a;b("CSS").conditionClass(c.ad,m,d);b("CSS").conditionClass(c.ad,n,!d);c.subheader&&b("CSS").conditionClass(c.subheader,m,d)});this.$10.inform("onShow",{item:c,index:a},"event");b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT)};c.$21=function(a){__p&&__p();this.$10.inform("onBeforeTransition",{item:this.$8[this.$6]},"event");while(this.$5.length>0&&a>=this.$8.length)this.$23(this.$5.shift());this.$19(a);if(this.$9){this.$11++;b("CSS").addClass(this.$1,i);setTimeout(function(){--this.$11===0&&b("CSS").removeClass(this.$1,i)}.bind(this),j);this.$10.inform("onAnimate",{item:this.$8[a]},"event");var c,d;b("queryThenMutateDOM")(function(){c=b("PixelNumConverter").numValue(b("getStyleProperty")(this.$1,"padding-bottom")),d=this.$1.offsetHeight}.bind(this),function(){b("Style").set(this.$1,"min-height",b("CSS").hasClass(this.$8[a].ad,o)?"0px":b("PixelNumConverter").pixelValue(d-c)),b("Style").set(this.$8[0].ad,b("Locale").isRTL()?"margin-right":"margin-left",a*-100+"%")}.bind(this))}this.$6=a;this.$20()};c.$23=function(a){b("CSS").addClass(a.ad,k),b("CSS").addClass(a.ad,p),b("DOM").appendContent(this.$1,a.ad),b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT),a.subheader&&(this.$18(a.subheader),b("DOM").appendContent(this.$2,a.subheader)),this.$8.push(a)};c.$20=function(){var a=JSON.parse(b("DataAttributeUtils").getDataFt(this.$8[this.$6].ad)),c=JSON.parse(this.$17);for(var d in a)c[d]=a[d];b("DataAttributeUtils").setDataFt(this.$16,JSON.stringify(c));b("Arbiter").inform("FeedAdsClickLogger/refreshTrackingData",{})};c.$18=function(a){b("CSS").addClass(a,l);if(this.$9){var c=b("DOM").create("div");b("CSS").addClass(c,"_2_tm");b("DOM").appendContent(a,c)}};c.$22=function(){var a="old_desktop_hscroll_first_next_pos_";return a.concat(this.$12)};return a}();e.exports=a;e.exports.getFirstAdsHscrollElement=a.getFirstAdsHscrollElement;e.exports.hideAdsHscroll=a.hideAdsHscroll;e.exports.removeHeaderMargin=a.removeHeaderMargin;e.exports.handleOptimisticHideInUnit=a.handleOptimisticHideInUnit;e.exports.handleOptimisticUnhideInUnit=a.handleOptimisticUnhideInUnit}),null);
__d("EntstreamFeedObjectHide",["cx","CSS","DesktopHscrollUnit","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","Focus","TabbableElements","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={hide:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=b("EntstreamFeedObject").getHscrollOuterRootIfAvailable(a);b("EntstreamFeedObjectFollowup").addFollowup(a,c);c=b("DesktopHscrollUnit").hideAdsHscroll(a);c||b("CSS").addClass(a,"_i6m");h.setFocus(a)},registerUnhide:function(a,c){b("Event").listen(a,"click",function(){c&&c.send();var d=b("EntstreamFeedObject").getRoot(a);d=b("EntstreamFeedObject").getHscrollOuterRootIfAvailable(d);h.unhide(d)})},setFocus:function(a){a=b("TabbableElements").find(a);a&&a[0]&&b("Focus").setWithoutOutline(a[0])},unhide:function(a){b("EntstreamFeedObjectFollowup").removeFollowup(a),b("CSS").removeClass(a,"_i6m"),h.setFocus(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectHideProfileForTopicUndoTombstone.react",["cx","fbt","React","ShimButton.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:"_4glo"},this.props.feedbackText," ",b("React").createElement(b("ShimButton.react"),{className:"_4glp",form:"link",onClick:this.props.onUndoButtonClick},h._("\u5143\u306b\u623b\u3059")))};return c}(b("React").Component);e.exports=a}),null);
__d("FeedHideProfileForTopicControlAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HIDE_PROFILE:"hide_profile",UNHIDE_PROFILE:"unhide_profile"})}),null);
__d("XFeedHideProfileForTopicController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/hide_profile_for_topic/",{topic:{type:"Int"},actor:{type:"Int"},action:{type:"Enum",enumType:1}})}),null);
__d("EntstreamFeedObjectHideProfileForTopic",["cx","AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHideProfileForTopicUndoTombstone.react","FeedHideProfileForTopicControlAction","React","ReactDOM","XFeedHideProfileForTopicController","ge"],(function(a,b,c,d,e,f,g){__p&&__p();a={hideProfile:function(a,c){c=b("EntstreamFeedObject").getRoot(b("ge")(c));if(!c)return;var d=a.getRoot().getAttribute("data-topic-id"),e=a.getRoot().getAttribute("data-actor-id"),f=a.getRoot().getAttribute("data-feedback-text");b("CSS").hide(a.getRoot());var g=b("DOM").create("div",{className:"_553t"});b("DOM").replace(c,g);b("ReactDOM").render(b("React").createElement(b("EntstreamFeedObjectHideProfileForTopicUndoTombstone.react"),{onUndoButtonClick:this._handleUndoButtonClick.bind(this,d,e,c,g,a),feedbackText:f}),g)},_handleUndoButtonClick:function(a,c,d,e,f){c=b("XFeedHideProfileForTopicController").getURIBuilder().setInt("actor",c).setInt("topic",a).setEnum("action",b("FeedHideProfileForTopicControlAction").UNHIDE_PROFILE).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").send();b("DOM").replace(e,d);b("CSS").show(f.getRoot())}};e.exports=a}),null);
__d("EntstreamFeedObjectSeeFirstOffUndoTombstone.react",["cx","fbt","React","ShimButton.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:"_4i1z",tabIndex:"0"},this.props.feedbackText," ",b("React").createElement(b("ShimButton.react"),{className:"_4ub0",form:"link",onClick:this.props.onUndoButtonClick},h._("\u5143\u306b\u623b\u3059")))};return c}(b("React").Component);e.exports=a}),null);
__d("XFeedSubFollowController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/profile/sub_follow/",{id:{type:"Int"},action:{type:"Enum",enumType:1},location:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);
__d("EntstreamFeedObjectSeeFirstOff",["csx","cx","AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectSeeFirstOffUndoTombstone.react","Parent","ProfileSubFollowStatus","React","ReactDOM","XFeedSubFollowController","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();a={turnOffSeeFirst:function(a,c){c=b("EntstreamFeedObject").getRoot(b("ge")(c));if(!c)return;var d=a.getRoot().getAttribute("data-see-first-off-id"),e=a.getRoot().getAttribute("data-feedback-text");b("CSS").hide(a.getRoot());var f=b("DOM").create("div",{className:"_4ua_"});b("DOM").prependContent(c,f);b("ReactDOM").render(b("React").createElement(b("EntstreamFeedObjectSeeFirstOffUndoTombstone.react"),{onUndoButtonClick:this._handleUndoButtonClick.bind(this,d,c,f,a),feedbackText:e}),f);this.adjustIndicator(c,a)},_handleUndoButtonClick:function(a,c,d,e){a=b("XFeedSubFollowController").getURIBuilder().setInt("id",a).setEnum("action",b("ProfileSubFollowStatus").SEE_FIRST).setInt("location",73).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").send();b("DOM").remove(d);b("CSS").show(e.getRoot());this.adjustIndicator(c,e)},adjustIndicator:function(a,c){__p&&__p();a=b("DOM").scry(a,"._zwz");if(!a||a.length===0)return;a=a[0];c=b("Parent").bySelector(c.getRoot(),"._5pbk");c=b("DOM").scry(c,"._3bb4");var d=!0;c.forEach(function(a){d=d&&!b("CSS").shown(a)});d?b("CSS").hide(a):b("CSS").show(a)}};e.exports=a}),null);
__d("YouTube",["cx","CSS","DOM","DOMQuery","Event","Focus","Keys","LitestandStoryInsertionStatus","SubscriptionsHandler","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d,e){var f=new(b("SubscriptionsHandler"))();f.addSubscriptions(b("Event").listen(c,"load",this.listening.bind(this)),b("LitestandStoryInsertionStatus").registerBlocker(function(){return this.playerState===a.STATE_PLAYING}.bind(this)));Object.assign(this,{iframe:c,autofocus:d,autoplay:e,playerState:a.STATE_UNSTARTED,muted:!1,volume:100,currentTime:0,timer:null,handler:f});d&&b("Focus").set(c)}var c=a.prototype;c.id=function(){return this.iframe.id};c.post=function(a){a.id=this.id(),this.iframe.contentWindow.postMessage(JSON.stringify(a),"*")};c.listening=function(){this.post({event:"listening"}),clearTimeout(this.timer),this.timer=setTimeout(this.listening.bind(this),100)};c.update=function(a){a.event=="initialDelivery"&&(clearTimeout(this.timer),(b("UserAgent_DEPRECATED").webkit()||b("UserAgent_DEPRECATED").firefox())&&a.info&&a.info.debugText.match(/flashVersion/)&&(this.addAccessibleButtons(),b("UserAgent_DEPRECATED").firefox()&&(this.iframe.tabIndex=-1))),a.info&&["playerState","muted","volume","currentTime"].forEach(function(b){Object.prototype.hasOwnProperty.call(a.info,b)&&(this[b]=a.info[b])}.bind(this))};c.togglePlay=function(){this.post({event:"command",func:this.playerState==a.STATE_PLAYING?"pauseVideo":"playVideo"})};c.toggleMute=function(){this.post({event:"command",func:this.muted?"unMute":"mute"})};c.addAccessibleButtons=function(){this.addAccessibleButton("Mute","_505m",this.toggleMute.bind(this)),this.addAccessibleButton("Play","_505n",this.togglePlay.bind(this))};c.addAccessibleButton=function(c,d,e){__p&&__p();d=b("DOM").create("button",{"class":d,tabindex:0},c);b("DOM").insertAfter(this.iframe,d);this.handler.addSubscriptions(b("Event").listen(d,"click",e),b("Event").listen(d,"mouseover",b("CSS").hide.bind(null,d)),b("Event").listen(this.iframe,"mouseout",b("CSS").show.bind(null,d)),b("Event").listen(d,"focus",function(){!this.autoplay&&this.playerState==a.STATE_UNSTARTED&&(this.post({event:"command",func:"playVideo"}),this.post({event:"command",func:"pauseVideo"}))}.bind(this)),b("Event").listen(d,"keydown",function(a){switch(a.keyCode){case b("Keys").UP:case b("Keys").DOWN:this.post({event:"command",func:"setVolume",args:[this.volume+(a.keyCode==b("Keys").UP?10:-10)]});a.prevent();break;case b("Keys").RIGHT:case b("Keys").LEFT:this.post({event:"command",func:"seekTo",args:[this.currentTime+(a.keyCode==b("Keys").RIGHT?10:-10)]});a.prevent();break}}.bind(this)));return d};c.destroy=function(){this.handler.release(),delete a.instances[this.id()],Object.keys(a.instances).length||a.handler.remove()};a.register=function(c,d,e){if(!window.postMessage)return;Object.keys(a.instances).length||(a.handler=b("Event").listen(window,"message",function(b){try{b=JSON.parse(b.data);a.instances[b.id]&&a.instances[b.id].update(b)}catch(a){}}));c=new a(b("DOMQuery").find(c,"iframe"),d,e);a.instances[c.id()]=c};return a}();Object.assign(a,{STATE_UNSTARTED:-1,STATE_PLAYING:1,instances:{},handler:null});e.exports=a}),null);
__d("EntstreamHomeFeedObjectHide",["csx","cx","fbt","AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHide","Event","TrackingNodes","YouTube","$","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j={stopVideo:function(a){__p&&__p();a=b("$")(a);a=b("DOM").find(a,"^._5jmm");var c=b("DOM").scry(a,"iframe");for(var d=0;d<c.length;d++){var e=b("YouTube").instances[b("getOrCreateDOMID")(c[d])];e&&e.playerState===b("YouTube").STATE_PLAYING&&e.togglePlay()}e=b("DOM").scry(a,"video");for(var d=0;d<e.length;d++)"paused"in e[d]&&!e[d].paused&&(typeof e[d].pause==="function"&&e[d].pause())},hide:function(a,c,d,e){__p&&__p();j.stopVideo(a);var f=b("EntstreamFeedObject").getRoot(b("ge")(a));f=b("CSS").matchesSelector(f,"._5pat");if(f&&d=="afrostart")f="";else{var g=d=="hide"||d=="afrostart"?i._("\u3053\u306e\u8a18\u4e8b\u306f\u30cb\u30e5\u30fc\u30b9\u30d5\u30a3\u30fc\u30c9\u306b\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002"):i._("\u3053\u306e\u8a18\u4e8b\u306f\u30b9\u30d1\u30e0\u3068\u3057\u3066\u5831\u544a\u3055\u308c\u307e\u3057\u305f\u3002");d=d=="hide"||d=="afrostart"?i._("\u8868\u793a\u3059\u308b"):i._("\u5143\u306b\u623b\u3059");var h=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.UNHIDE_LINK);h=b("DOM").create("a",{href:"#","data-ft":h},d);d={};c&&(d.token=c);e&&(d.hideable_token=e);c=new(b("AsyncRequest"))().setURI("/ajax/entstream/home/story/unhide").setMethod("POST").setData(d).setRelativeTo(h);b("EntstreamFeedObjectHide").registerUnhide(h,c);f=b("DOM").create("div",{"class":"_1f86"},[g," ",h])}b("EntstreamFeedObjectHide").hide(a,f)},registerHide:function(a,c,d,e){b("Event").listen(a,"click",function(){j.hide(a.getAttribute("id"),c,d,e)})}};e.exports=j}),null);
__d("CommercialBreakVideoHide",["StoryComponentVideoPlayerControllerRegistry","$"],(function(a,b,c,d,e,f){__p&&__p();a={hide:function(a,c){__p&&__p();if(!a||!c)return;a=b("$")(a);a=b("StoryComponentVideoPlayerControllerRegistry").findVideoPlayerControllerForElement(a,c);if(!a)return;c=a.getOption("VideoWithCommercialBreak","controller");if(!c)return;c.onPauseAdFromNFX()}};e.exports=a}),null);
__d("DynamicAdsXOutOptionName",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REMOVE_ITEM_FROM_AD:"NFXRemoveItemFromAdAction"})}),null);
__d("EntstreamHomeFeedObjectOptionsMenuUtils",["csx","CSS","DOM"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={findMenuItemPosition:function(a,c){var d=0,e=!1;a.forEachItem(function(a){if(!b("CSS").matchesSelector(a.getRoot(),"._54ni"))return;(c===a||c===a.getRoot())&&(e=!0);e||d++});return e?d:null},calculateMenuSize:function(a){var c=b("DOM").scry(a.getRoot(),'li[role="presentation"].__MenuItem').length,d;b("CSS").matchesSelector(a.getRoot(),"._50n_")?d=b("DOM").scry(a.getRoot(),'li[role="presentation"]._50o0').length:d=0;b("CSS").matchesSelector(a.getRoot(),"._50o1")?a=b("DOM").scry(a.getRoot(),'li[role="presentation"]._50o2').length:a=0;return c-d-a}};e.exports=a}),null);
__d("FeedStoryOptionMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FeedStoryOptionMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedStoryOptionMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedStoryOptionMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setEventType=function(a){this.$1.event_type=a;return this};c.setFeedLocation=function(a){this.$1.feed_location=a;return this};c.setIsSecondary=function(a){this.$1.is_secondary=a;return this};c.setIsSelfStory=function(a){this.$1.is_self_story=a;return this};c.setIsSponsored=function(a){this.$1.is_sponsored=a;return this};c.setMTouchFeedLocation=function(a){this.$1.m_touch_feed_location=a;return this};c.setMenuOpenedDuration=function(a){this.$1.menu_opened_duration=a;return this};c.setMenuSize=function(a){this.$1.menu_size=a;return this};c.setOptionName=function(a){this.$1.option_name=a;return this};c.setOptionPos=function(a){this.$1.option_pos=a;return this};c.setQeIosWaistCauExperimentsUniverse=function(a){this.$1.qe_ios_waist_cau_experiments_universe=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={client_userid:!0,event_type:!0,feed_location:!0,is_secondary:!0,is_self_story:!0,is_sponsored:!0,m_touch_feed_location:!0,menu_opened_duration:!0,menu_size:!0,option_name:!0,option_pos:!0,qe_ios_waist_cau_experiments_universe:!0,session_id:!0,time:!0,weight:!0};e.exports=a}),null);
__d("MenuTogglingItem",["DOM","MenuItem"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleClick=function(){this.toggleMenuItem();return a.prototype.handleClick.call(this)};d.toggleMenuItem=function(){this._data=babelHelpers["extends"]({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup}),this._rerender()};d.setValue=function(a){this._data=babelHelpers["extends"]({},this._data,{value:a})};d._rerender=function(){var a=this._anchor;b("DOM").replace(a,this._renderItemContent())};return c}(b("MenuItem"));e.exports=a}),null);
__d("getEventTarget",[],(function(a,b,c,d,e,f){"use strict";var g=3;function a(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===g?a.parentNode:a}e.exports=a}),null);
__d("EntstreamHomeFeedObjectOptionsMenu",["csx","cx","AdsPrefs","AdsTransparencyReportAdTypedLogger","AdsTransparencyTypedLogger","AsyncRequest","Clipboard","CommercialBreakVideoHide","CSS","DesktopHscrollUnit","DOM","DynamicAdsXOutOptionName","EducationPromotionTriggerInfo","EntstreamFeedObject","EntstreamFeedObjectFollow","EntstreamFeedObjectFollowup","EntstreamFeedObjectHideProfileForTopic","EntstreamFeedObjectSeeFirstOff","EntstreamHomeFeedObjectHide","EntstreamHomeFeedObjectOptionsMenuUtils","Event","FBFeedLocations","FeedAdXoutEventTracker","FeedObjectCapstone","FeedStoryOptionMenuTypedLogger","FunnelLogger","MenuTogglingItem","SubscriptionsHandler","Tooltip","TooltipData","UFICentralUpdates","UFIConstants","WebFunnelLogger","XEducationPromotionTriggerRecordController","emptyFunction","ge","getEventTarget","onEnclosingPageletDestroy"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c,d,e){__p&&__p();d=c.node_id;var f=c.story_token,g=c.hideable_token,h=c.identifier,i=c.location,k=c.session_id,l=c.is_sponsored,m=c.is_self_story;c=c.host_video_id;var n=e.item,o=n.getRoot(),p=o.getAttribute("data-feed-option-name"),q=b("CSS").matchesSelector(o,"._50o2")||b("CSS").matchesSelector(o,"._50o0"),r=b("CSS").matchesSelector(o,"._2ofr");if(p&&!r){new(b("FeedStoryOptionMenuTypedLogger"))().setOptionName(p).setOptionPos(b("EntstreamHomeFeedObjectOptionsMenuUtils").findMenuItemPosition(a,n)).setMenuSize(b("EntstreamHomeFeedObjectOptionsMenuUtils").calculateMenuSize(a)).setIsSecondary(q?1:0).setEventType("clk").setFeedLocation(i).setSessionID(k).setIsSponsored(l?1:0).setIsSelfStory(m?1:0).log();var s=i?"loc:"+i:"loc:null";b("FunnelLogger").appendActionWithTag("WWW_CHEVRON_FUNNEL","clk:"+p,"loc:"+s)}if(typeof n.getValue!=="function")return;switch(n.getValue()){case"hide":case"markspam":case"afrostart":b("EntstreamHomeFeedObjectHide").hide(d,f,n.getValue(),g);break;case"afro_direct_action":if(i===b("FBFeedLocations").INSTREAM_VIDEO_IN_LIVE||i===b("FBFeedLocations").INSTREAM_VIDEO_IN_WASLIVE||i===b("FBFeedLocations").INSTREAM_VIDEO_IN_NONLIVE){b("CommercialBreakVideoHide").hide(d,c);break}s=b("EntstreamFeedObject").getHscrollOuterRootIfAvailable(b("EntstreamFeedObject").getRoot(b("ge")(d)));(p==="HIDE_AD"||p==="REPORT_AD")&&b("FeedAdXoutEventTracker").markHidden(s);b("FeedObjectCapstone").removeCapstone(s);f=n.getRoot().getAttribute("data-optimistic-hide");if(f){b("EntstreamFeedObjectFollowup").getFollowup(s)&&b("EntstreamFeedObjectFollowup").removeFollowup(s);g=b("DOM").create("div",{className:"_5lum"});b("DOM").appendContent(g,n.getRoot().getAttribute("data-action-in-progress-string"));b("DOM").insertBefore(s.firstChild,g);c=b("DesktopHscrollUnit").handleOptimisticHideInUnit(s);!c&&p!==b("DynamicAdsXOutOptionName").REMOVE_ITEM_FROM_AD&&b("CSS").addClass(s,"_i6m")}break;case"follow_post":case"unfollow_post":b("EntstreamFeedObjectFollow").toggleFollow(n,d,h);break;case"ad_useful":case"ad_neutral":b("AdsPrefs").toggleFavorite(n);e.event.preventDefault();return;case"see_first_off":b("EntstreamFeedObjectSeeFirstOff").turnOffSeeFirst(n,d);break;case"hide_profile_for_topic":b("EntstreamFeedObjectHideProfileForTopic").hideProfile(n,d);break;case"has_nested_option":e.item.hasAction=b("emptyFunction").thatReturnsFalse;var t=b("DOM").scry(o,"._2ofs");if(r){b("CSS").removeClass(o,"_2ofr");e.item.hasAction=function(){this.hasAction=b("emptyFunction").thatReturnsTrue;return!1};for(var f=0;f<t.length;f++){g=t[f];if(g.hasAttribute("clicked")){e.item.hasAction=b("emptyFunction").thatReturnsTrue;g.removeAttribute("clicked");break}}}else{b("CSS").addClass(o,"_2ofr");e.item._nestedItemListeners||(e.item._nestedItemListeners=[]);c=function(c){var d=t[c];e.item._nestedItemListeners.push(b("Event").listen(d,"click",function(e){var f=d.getAttribute("data-feed-option-name");f&&new(b("FeedStoryOptionMenuTypedLogger"))().setOptionName(f).setOptionPos(c).setMenuSize(b("EntstreamHomeFeedObjectOptionsMenuUtils").calculateMenuSize(a)).setIsSecondary(q?1:0).setEventType("clk").setFeedLocation(i).setSessionID(k).setIsSponsored(l?1:0).setIsSelfStory(m?1:0).log();b("getEventTarget")(e).setAttribute("clicked",!0)}))};for(var p=0;p<t.length;p++)c(p)}break;case"copy_demo_link":b("Clipboard").copy(e.item.getLink());var u=e.item.getRoot();b("TooltipData").set(u,"Copied to Clipboard");b("Tooltip").show(u);window.setTimeout(function(){u.removeAttribute("data-tooltip-content"),b("Tooltip").hide(u)},2e3);e.event.preventDefault();break;case"inject_ad_option":case"clear_ads_option":break}j(a,n)()}function j(a,c){return function(){var d=b("DOM").scry(a.getRoot(),"._2ofr"),e=c&&c.getRoot();for(var f=0;f<d.length;f++){var g=d[f];g!==e&&b("CSS").removeClass(g,"_2ofr")}a.forEachItem(function(a){a!==c&&b("CSS").matchesSelector(a.getRoot(),"._1hqk")&&(k(a),a.hasAction=b("emptyFunction").thatReturnsTrue)})}}function k(a){__p&&__p();if(Array.isArray(a._nestedItemListeners))for(var b=a._nestedItemListeners,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;e.remove()}a._nestedItemListeners=void 0}function l(a,c){__p&&__p();var d=c.location,e=c.session_id,f=c.is_sponsored,g=c.is_self_story,h=c.ad_logging_data;return function(){__p&&__p();new(b("FeedStoryOptionMenuTypedLogger"))().setOptionName("root").setEventType("clk").setMenuSize(b("EntstreamHomeFeedObjectOptionsMenuUtils").calculateMenuSize(a)).setFeedLocation(d).setSessionID(e).setIsSponsored(f?1:0).setIsSelfStory(g?1:0).log();b("FunnelLogger").startFunnel("WWW_CHEVRON_FUNNEL");var c=d?"loc:"+d:"loc:null";b("FunnelLogger").addFunnelTag("WWW_CHEVRON_FUNNEL","loc:"+c);!!h&&Object.getOwnPropertyNames(h).length&&(new(b("AdsTransparencyTypedLogger"))().setAdID(h.ad_id).setEvent(h.transparency_event).setIsDpa(h.is_dpa).setProduct(h.product).addToExtraData("session_id",h.impression_session_id).log(),new(b("AdsTransparencyReportAdTypedLogger"))().setAdID(h.ad_id).setEntity(h.report_entity).setEvent(h.report_event).setProductLocation(h.report_location).setSessionID(h.impression_session_id).setAdsPageType(h.ads_page_type).log(),new(b("WebFunnelLogger"))("AdsReportingFunnelDefinition").setAction("impression").setActionTag("xout_menu").addFunnelPayload("flowtype",h.flow_type).setSessionKey(h.ad_id).log(),new(b("AsyncRequest"))().setURI(b("XEducationPromotionTriggerRecordController").getURIBuilder().getURI()).setMethod("POST").setData({timestamps:[b("EducationPromotionTriggerInfo").LAST_OPEN_AD_CONTEXTUAL_MENU_TIMESTAMP]}).send());var i=b("CSS").matchesSelector(a.getRoot(),"._50o1"),j=b("CSS").matchesSelector(a.getRoot(),"._50n_");a.forEachItem(function(c){__p&&__p();var h=c.getRoot(),k=h.getAttribute("data-feed-option-name"),l=b("CSS").matchesSelector(h,"._50o2"),m=b("CSS").matchesSelector(h,"._50o0"),n=b("CSS").matchesSelector(h,"._50nd");h=b("CSS").matchesSelector(h,"._50ne");n=i&&l||j&&m||!i&&n||!j&&h;h=l||m;if(k&&!n){new(b("FeedStoryOptionMenuTypedLogger"))().setOptionName(k).setOptionPos(b("EntstreamHomeFeedObjectOptionsMenuUtils").findMenuItemPosition(a,c)).setMenuSize(b("EntstreamHomeFeedObjectOptionsMenuUtils").calculateMenuSize(a)).setIsSecondary(h?1:0).setEventType("imp").setFeedLocation(d).setSessionID(e).setIsSponsored(f?1:0).setIsSelfStory(g?1:0).log();l=d?"loc:"+d:"loc:null";b("FunnelLogger").appendActionWithTag("WWW_CHEVRON_FUNNEL","imp:"+k,"loc:"+l)}c.onShow()})}}function m(a,c,d){__p&&__p();c=c.identifier;if(d.payloadsource===b("UFIConstants").UFIPayloadSourceType.USER_ACTION){d=d.actions||[];for(var e=0;e<d.length;e++){var f=d[e];if(f.actiontype===b("UFIConstants").UFIActionType.ADD_COMMENT_ACTION){if(f.feedbackfbid!=c)return;a.getRoot();a.forEachItem(function(a){a instanceof b("MenuTogglingItem")&&a.getValue()==="unfollow_post"&&a.handleClick()})}}}}function a(a,c){var d=c.node_id,e=a.subscribe("itemclick",function(b,d){return i(a,c,b,d)}),f=a.subscribe("show",l(a,c).bind(this)),g=a.subscribe("hide",j(a,null)),h=b("UFICentralUpdates").subscribe("update-actions",function(b,d){m(a,c,d)});d=b("ge")(d);if(d){var k=new(b("SubscriptionsHandler"))();k.addSubscriptions(e,f,g,h,b("onEnclosingPageletDestroy")(d,function(){a.done(),a.destroy(),k.release()}))}}e.exports=a}),null);
__d("FriendRequestsFeedUnit",["Arbiter","AsyncRequest","DOM","Event","FriendStatus"],(function(a,b,c,d,e,f){a={init:function(a,c,d,e,f,g,h,i,j,k){b("Event").listen(c,"click",function(a){b("DOM").remove(c),b("DOM").replace(d,e),this._send("confirm",g,h,i,j,k)}.bind(this)),b("Event").listen(d,"click",function(a){b("DOM").remove(c),b("DOM").replace(d,f),this._send("reject",g,h,i,j,k)}.bind(this)),b("Arbiter").subscribe("FriendRequest/change",function(a,f){f.status==b("FriendStatus").ARE_FRIENDS&&f.uid==h&&(b("DOM").remove(c),b("DOM").replace(d,e))}),b("Arbiter").subscribe("FriendRequest/delete",function(a,e){e.uid==h&&(b("DOM").remove(c),b("DOM").replace(d,f))})},_send:function(a,c,d,e,f,g){a=new(b("AsyncRequest"))().setURI("/requests/friends/ajax/").setData({action:a,id:d,viewer_id:c,ref:e,floc:f,frefs:g,nresp:!0});a.send()}};e.exports=a}),null);
__d("TimelineCommentsLoader",["CommentPrelude","CSS","DOM","Event","Parent","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g={init:function(){__p&&__p();g.init=b("emptyFunction"),b("Event").listen(document.body,"click",function(a){__p&&__p();var c=b("Parent").byClass(a.getTarget(),"fbTimelineFeedbackCommentLoader");if(c){a.kill();b("CommentPrelude").click(c,!1,"timeline_comments_loader");a=b("Parent").byTag(c,"form");var d=b("DOM").scry(a,"li.uiUfiViewAll input");d.length||(d=b("DOM").scry(a,"li.fbUfiViewPrevious input"));d.length||(d=b("DOM").scry(a,"a.UFIPagerLink"));d[0].click();b("CSS").show(b("DOM").find(a,"li.uiUfiComments"));b("CSS").removeClass(c,"fbTimelineFeedbackCommentLoader")}})}};e.exports=g}),null);