if (self.CavalryLogger) { CavalryLogger.start_js(["N9SGC"]); }

__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("DeviceBasedLoginWWWQP",["CSS","Event","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={swapWithShadowMessageOnClick:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("CSS").hide(c),b("CSS").show(d)}))}};e.exports=a}),null);
__d("cxMargin",["cx"],(function(a,b,c,d,e,f,g){"use strict";function a(a){throw new Error("cxMargin: Unexpected margin transformation.")}e.exports=a}),null);
__d("LayerBounds",["Locale","Rect","ViewportBounds","containsNode","ge","getOverlayZIndex"],(function(a,b,c,d,e,f){a={getViewportRectForContext:function(a){var c=b("ge")("globalContainer");c=c&&b("containsNode")(c,a)||b("getOverlayZIndex")(a)<300;a=b("Rect").getViewportWithoutScrollbarsBounds();c&&(a.t+=b("ViewportBounds").getTop(),b("Locale").isRTL()?(a.r-=b("ViewportBounds").getLeft(),a.l+=b("ViewportBounds").getRight()):(a.r-=b("ViewportBounds").getRight(),a.l+=b("ViewportBounds").getLeft()));return a}};e.exports=a}),null);
__d("ContextualLayerDimensions",["LayerBounds","Locale","Rect","Vector"],(function(a,b,c,d,e,f){__p&&__p();a={getViewportRect:function(a){return b("LayerBounds").getViewportRectForContext(a.getContext())},getLayerRect:function(a,c){__p&&__p();var d=a.getContextBounds("viewport"),e=a.simulateOrientation(c,function(){return b("Vector").getElementDimensions(a.getContentRoot())}),f=d.t+c.getOffsetY();c.getPosition()==="above"?f-=e.y:c.getPosition()==="below"&&(f+=d.b-d.t);var g=d.l+c.getOffsetX();d=d.r-d.l;if(c.isVertical()){var h=c.getAlignment();h==="center"?g+=(d-e.x)/2:h==="right"!==b("Locale").isRTL()?g+=d-e.x+c.getArrowOffset():g-=c.getArrowOffset()}else c.getPosition()==="right"!==b("Locale").isRTL()?g+=d:g-=e.x;return new(b("Rect"))(f,g+e.x,f+e.y,g,"viewport")}};e.exports=a}),null);
__d("UFI2GIFNUX.react",["fbt","AsyncRequest","React","XFeedNUXSaveSeenStateController","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=b("XFeedNUXSaveSeenStateController").getURIBuilder().setString("key","gif_comments").setBool("seen",!0).getURI();new(b("AsyncRequest"))(a).send()};d.render=function(){var a=this.props,c=a.onClose;a=a.contextRef;return b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:a,onCloseButtonClick:c,position:"above",shown:!0},g._("GIF\u3092\u30b3\u30e1\u30f3\u30c8\u306b\u8ffd\u52a0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("concatArrays",[],(function(a,b,c,d,e,f){function a(a){var b;return(b=[]).concat.apply(b,a)}e.exports=a}),null);
__d("distinctArray",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();if(a==null)return[];if(Array.isArray(a)){var b=a.length;if(b<=200){var c=[];for(var d=0;d<b;d++){var e=a[d];c.indexOf(e)===-1&&c.push(e)}return c}}return Array.from(new Set(a).values())}e.exports=a}),null);
__d("ExplicitRegistrationDispatcherUtils",["emptyFunction","gkx","monitorCodeUse","setImmediate"],(function(a,b,c,d,e,f){"use strict";a=!1;c=b("emptyFunction");e.exports={warn:c,inlineRequiresEnabled:a}}),null);
__d("ExplicitRegistrationDispatcher",["Dispatcher_DEPRECATED","ExplicitRegistrationDispatcherUtils","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){var c;b=b.strict;c=a.call(this)||this;c.$ExplicitRegistrationDispatcher2=b;c.$ExplicitRegistrationDispatcher1={};return c}var c=b.prototype;c.explicitlyRegisterStore=function(a){a=a.getDispatchToken();this.$ExplicitRegistrationDispatcher1[a]=!0;return a};c.explicitlyRegisterStores=function(a){var b=this;return a.map(function(a){return b.explicitlyRegisterStore(a)})};c.register=function(b,c){var d=this;d=this.__genID(c);this.$ExplicitRegistrationDispatcher1[d]=!1;c=a.prototype.register.call(this,this.$ExplicitRegistrationDispatcher4.bind(this,d,b),d);return c};c.$ExplicitRegistrationDispatcher4=function(a,b,c){(this.$ExplicitRegistrationDispatcher1[a]||!this.$ExplicitRegistrationDispatcher2)&&this.__invokeCallback(a,b,c)};c.unregister=function(b){a.prototype.unregister.call(this,b),delete this.$ExplicitRegistrationDispatcher1[b]};c.__getMaps=function(){};return b}(b("Dispatcher_DEPRECATED"));e.exports=a}),null);
__d("FluxStoreInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h=null;a={inject:function(a){h==null||g(0,2260),h=a},onEmitChange:function(a){return h?h.emitChange(a):null}};e.exports=a}),null);
__d("FluxStore",["invariant","EventEmitter","FluxStoreInstrumentation","concatArrays","distinctArray"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.__className=this.constructor.name,this.__moduleID=this.constructor.__moduleID,this.__changed=!1,this.__changeEvent="change",this.__dispatcher=a,this.__emitter=new(b("EventEmitter"))(),this.$3=!1,this.__registerDispatcherCallback(a)}var c=a.prototype;c.__registerDispatcherCallback=function(a){var b=this;this.$2=a.register(function(a){return b.__invokeOnDispatch(a)},this.__getIDForDispatcher(),this,this.__moduleID)};c.addListener=function(a){return this.__emitter.addListener(this.__changeEvent,a)};c.getActionTypes=function(){__p&&__p();if(!this.$1){var a=this.__getActionTypes();if(a!=null){var c=this.getDependencyStores();if(c.length>0){var d=!1;c=b("concatArrays")(c.map(function(a){a=a.getActionTypes();a==null&&(d=!0);return a}).filter(Boolean));d?a=null:a=b("distinctArray")(a.concat(c))}}this.$1=a}return this.$1};c.getDispatcher=function(){return this.__dispatcher};c.getDispatchToken=function(){return this.$2};c.getDependencyDispatchTokens=function(){this.$5||(this.$5=this.getDependencyStores().map(function(a){return a.getDispatchToken()}));return this.$5};c.getDependencyStores=function(){this.$4||(this.$4=b("distinctArray")(this.__getDependencyStores()));return this.$4};c.addStoreDependency=function(a){var b=this.__dispatcher.registerDependency;b&&b(this.getDispatchToken(),a.getDispatchToken())};c.hasChanged=function(){this.__dispatcher.isDispatching()||g(0,1147,this.__className);return this.__changed};c.__setAsUnchanged=function(){this.__changed=!1};c.__emitChange=function(){this.__dispatcher.isDispatching()||g(0,1148,this.__className);if(this.__changed)return;b("FluxStoreInstrumentation").onEmitChange(this.__moduleID!=null?this.__moduleID:"unknown");this.__changed=!0};c.__invokeOnDispatch=function(a){this.__changed=!1,this.__onDispatch(a),this.__inform()};c.__inform=function(a){this.$3=this.__changed||this.$3;var b=this.__dispatcher.shouldAllowInforms==null||this.__dispatcher.shouldAllowInforms();b&&this.$3&&(this.$3=!1,this.__emitter.emit(a||this.__changeEvent))};c.__onDispatch=function(a){g(0,1149,this.__className)};c.__getActionTypes=function(){return null};c.__getDependencyStores=function(){return[]};c.__getIDForDispatcher=function(){return this.__className};return a}();a;e.exports=a}),null);
__d("TypedFluxStore",["FluxStore"],(function(a,b,c,d,e,f){"use strict";e.exports=b("FluxStore")}),null);
__d("FluxReduceStore",["invariant","TypedFluxStore","abstractMethod"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.$FluxReduceStore1=b.getInitialState();return b}var d=c.prototype;d.getState=function(){return this.$FluxReduceStore1};d.getInitialState=function(){return b("abstractMethod")("FluxReduceStore","getInitialState")};d.reduce=function(a,c){return b("abstractMethod")("FluxReduceStore","reduce")};d.areEqual=function(a,b){return a===b};d.__invokeOnDispatch=function(a,b){b===void 0&&(b=!0);this.__changed=!1;var c=this.$FluxReduceStore1;a=this.reduce(c,a);a!==void 0||g(0,2189,this.constructor.name);this.areEqual(c,a)||(this.$FluxReduceStore1=a,this.__emitChange());b&&this.__inform()};d.__setState=function(a){this.$FluxReduceStore1=a};return c}(b("TypedFluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("FalcoBanzaiPostFields",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SAMPLING_RATE:"r",EXTRA_DATA:"e"})}),null);
__d("MessengerWebDriverTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ANIMATED_IMAGE:"animated_image",ATTACHMENT_ROOT:"attachment_root",CHAT_SIDEBAR:"chat_sidebar",INFO_PANEL:"info_panel",SSO_LOGIN_BUTTON:"sso_login_button",INFO_PANEL_BUTTON:"info_panel_button",STICKER:"sticker",SIDEBAR_ITEM:"sidebar_item",DESKTOP_LOGIN_VIEW:"XMessengerDotComLoginViewPlaceholder",CHAT_INPUT:"chat_input:plaintext"})}),null);
__d("SidebarType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("WorkForeignEntityType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FOREIGN:"FOREIGN",NOT_FOREIGN:"NOT_FOREIGN"})}),null);
__d("WorkSyncedGroupCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NEW_GROUP_BUTTON_ON_MECURY_JEWEL:"new_group_button_on_mercury_jewel",GROUP_CREATION_ICON_ON_CHAT_SIDEBAR:"group_creation_icon_on_chat_sidebar",GROUP_CREATION_BUTTON_ON_CHAT_SIDEBAR:"group_creation_button_on_chat_sidebar",COMPOSE_BUTTON_ON_WORKCHAT:"compose_button_on_workchat"})}),null);
__d("FalcoLoggerInternal",["Banzai","FalcoBanzaiPostFields","FalcoJSLoggerSamplingPolicies"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="falco:";function h(a){return a!==0&&Math.random()*a<1}function i(a,c,d,e){if(h(c)){b("Banzai").post(g+a,(a={},a[b("FalcoBanzaiPostFields").EXTRA_DATA]=d(),a[b("FalcoBanzaiPostFields").SAMPLING_RATE]=c,a),e)}}e.exports={create:function(a){var c=b("FalcoJSLoggerSamplingPolicies").rates[a]||0;return{log:function(d){i(a,c,d,b("Banzai").BASIC)},logImmediately:function(d){i(a,c,d,b("Banzai").VITAL)}}}}}),null);
__d("LoadOnRender.react",["React","createCancelableFunction"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$1=!1;d.$2=null;d.$3=!0;d.$4=function(a){d.$2=a,d.$1&&d.forceUpdate()};d.state={cancelableOnComponentLoad:b("createCancelableFunction")(d.$4)};c.loader(d.state.cancelableOnComponentLoad);return d}var d=c.prototype;d.componentDidMount=function(){this.$1=!0,this.$3&&this.$2!=null&&this.forceUpdate()};d.componentWillUnmount=function(){this.$1=!1,this.state.cancelableOnComponentLoad.cancel()};d.render=function(){var a=this.$2;this.$3=a==null;return!a||this.props.forcePlaceholder?this.props.placeholder:b("React").cloneElement(this.props.component,{LazyLoadedComponent:a})};return c}(b("React").Component);a.defaultProps={forcePlaceholder:!1};e.exports=a}),null);
__d("BootloadOnRender.react",["JSResource","LoadOnRender.react","React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){b("JSResource").loadAll([d.props.loader],a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("LoadOnRender.react"),{placeholder:this.props.placeholder,loader:this.$1,component:this.props.component})};return c}(b("React").Component);e.exports=a}),null);
__d("LazyComponent.react",["React","isReactClassComponent"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getComponent=function(){return this.$1};d.render=function(){var a=this,c=this.props,d=c.LazyLoadedComponent;c=babelHelpers.objectWithoutPropertiesLoose(c,["LazyLoadedComponent"]);var e=b("isReactClassComponent")(d)?function(b){return a.$1=b}:null;return b("React").createElement(d,babelHelpers["extends"]({ref:e},c))};return c}(b("React").Component);a.defaultProps={LazyLoadedComponent:function(){return null}};e.exports=a}),null);
__d("MercuryIDs",["gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={isValid:function(a){return a==null||a===""||typeof a!=="string"?!1:/^\w{3,12}:.+/.test(a)},isValidThreadID:function(a){if(!g.isValid(a))return!1;a=g.tokenize(a);switch(a.type){case"user":case"support":case"thread":case"root":return!0;default:return(a.type==="pending"||a.type==="group")&&!b("gkx")("863760")?!0:!1}},tokenize:function(a){if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var b=a.indexOf(":");return{type:a.substr(0,b),value:a.substr(b+1)}},getUserIDFromParticipantID:function(a){if(!g.isValid(a))throw new Error("bad_id_format "+a);a=g.tokenize(a);var b=a.type;a=a.value;return b==="fbid"?a:null},getParticipantIDFromUserID:function(a){if(isNaN(a))throw new Error("Not a user ID: "+a);return"fbid:"+a},getUserIDFromThreadID:function(a){return!this.isCanonical(a)?null:this.tokenize(a).value},getThreadIDFromUserID:function(a){return"user:"+a},getThreadIDFromThreadFBID:function(a){return"thread:"+a},getThreadIDFromSupportInboxItemID:function(a){return"support:"+a},getThreadFBIDFromThreadID:function(a){return this.tokenize(a).value},getThreadKeyfromThreadIDUserID:function(a,b){__p&&__p();if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var c=this.tokenize(a).type;a=this.tokenize(a).value;if(c!=="user")return"g"+a;c="";var d="";if(a.length!==b.length)a.length>b.length?(c=a,d=b):(c=b,d=a);else if(b===a)return b+"u"+a;else{var e=0;while(e<a.length&&e<b.length)if(a[e]===b[e])e++;else{a[e]>b[e]?(c=a,d=b):(c=b,d=a);break}}return d+"u"+c},getThreadIDFromParticipantID:function(a){a=this.getUserIDFromParticipantID(a);return a?this.getThreadIDFromUserID(a):null},getParticipantIDFromFromThreadID:function(a){a=this.getUserIDFromThreadID(a);return a?this.getParticipantIDFromUserID(a):null},getSupportInboxItemIDFromThreadID:function(a){return this.tokenize(a).value},isCanonical:function(a){return this.isValid(a)&&this.tokenize(a).type==="user"},isGroupChat:function(a){return this.isValid(a)&&this.tokenize(a).type!=="user"},isLocalThread:function(a){return this.isValid(a)&&this.tokenize(a).type==="root"}};e.exports=g}),null);
__d("requestIdleCallback",["requireCond","cr:694370"],(function(a,b,c,d,e,f){e.exports=b("cr:694370")}),null);
__d("onAfterDisplay",["NavigationMetrics","TimeSlice","requestIdleCallback"],(function(a,b,c,d,e,f){"use strict";var g=[],h=!1;function a(a){a=b("TimeSlice").guard(a,"onAfterDisplay invocation",{propagationType:b("TimeSlice").PropagationType.ORPHAN});h?b("requestIdleCallback")(a):g.push(a)}b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,c){["all_pagelets_displayed","e2e"].indexOf(c.event)>-1&&!h&&(h=!0,g.forEach(function(a){b("requestIdleCallback")(a)}))});e.exports=a}),null);
__d("PresenceUtil",["CurrentUser","randomInt"],(function(a,b,c,d,e,f){var g=b("randomInt")(0,4294967295)+1;function a(){return g}function c(){return b("CurrentUser").isLoggedInNow()}e.exports={getSessionID:a,hasUserCookie:c}}),null);
__d("TokenizeUtil",["nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g=/[ ]+/g,h=/[^ ]+/g,i=new RegExp("[^ "+l()+"]+|"+a(),"g"),j=new RegExp(a(),"g"),k=1e3;function l(){return".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf"}function a(){return"["+l()+"]"}var m={},n={a:"\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",b:"\u0431",c:"\u0446 \xe7 \u010d",d:"\u0434 \xf0 \u010f \u0111",e:"\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",f:"\u0444",g:"\u0433 \u011f \u0123",h:"\u0445 \u0127",i:"\u0438 \xec \xed \xee \xef \u0131 \u012b",j:"\u0439",k:"\u043a \u0138 \u0137",l:"\u043b \u013e \u013a \u0140 \u0142 \u013c",m:"\u043c",n:"\u043d \xf1 \u0148 \u0149 \u014b \u0146",o:"\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",p:"\u043f",r:"\u0440 \u0159 \u0155",s:"\u0441 \u015f \u0161 \u017f",t:"\u0442 \u0165 \u0167 \xfe",u:"\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",v:"\u0432",y:"\u044b \xff \xfd",z:"\u0437 \u017e",ae:"\xe6",oe:"\u0153",ts:"\u0446",ch:"\u0447",ij:"\u0133",sh:"\u0448",ss:"\xdf",ya:"\u044f"};for(var o in n){var p=n[o].split(" ");for(var q=0;q<p.length;q++)m[p[q]]=o}function c(a){return a.replace(j," ")}function r(a){a=a.toLowerCase();var b="",c;for(var d=a.length;d--;)c=a.charAt(d),b=(m[c]||c)+b;return b.replace(g," ")}function s(a,b){b===void 0&&(b=h);var c=[],d=b.exec(a);while(d)d=d[0],c.push(d),d=b.exec(a);return c}function d(a,b){__p&&__p();b===void 0&&(b=h);var c={},d=0;return function(e,f){if(!Object.prototype.hasOwnProperty.call(c,e)){d>=k&&(c={},d=0);var g=r(e),h=a(g);c[e]={value:e,flatValue:g,tokens:s(h,b),isPrefixQuery:!!h&&h[h.length-1]!=" "};d++}f!=null&&f!==!1&&c[e].sortedTokens===void 0&&(c[e].sortedTokens=c[e].tokens.slice(),c[e].sortedTokens.sort(function(a,b){return b.length-a.length}));return c[e]}}var t=d(c),u=d(function(a){return a},i);function f(a,c,d){__p&&__p();var e=a=="query"||a=="query_punc",f=a=="aligned",g=a=="query_punc"?u:t;c=g(c,a=="prefix");var h=a=="prefix"?b("nullthrows")(c.sortedTokens):c.tokens,i=g(d).tokens,j={},k=c.isPrefixQuery&&(e||f)?h.length-1:null;g=function(b,c){for(var d=0;d<i.length;++d){var g=i[d];if(!j[d]&&(g==b||((e||f)&&c===k||a=="prefix")&&g.indexOf(b)===0))return j[d]=!0;if(f&&!j[d])return!1}return!1};return Boolean(h.length&&h.every(g))}p={flatten:r,parse:t,parseIncludingPunctuations:u,getPunctuation:a,makeParse:d,isExactMatch:f.bind(null,"exact"),isQueryMatch:f.bind(null,"query"),isQueryMatchIncludingPunctuations:f.bind(null,"query_punc"),isAlignedMatch:f.bind(null,"aligned"),isPrefixMatch:f.bind(null,"prefix"),tokenize:s};e.exports=p}),null);
__d("XChatUserInfoAllAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/user_info_all/",{viewer:{type:"Int",required:!0}})}),null);
__d("XChatUserInfoAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/user_info/",{ids:{type:"IntVector",defaultValue:[]}})}),null);
__d("XPagesBrowserController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/",{category:{type:"String"},ref:{type:"String"},cityid:{type:"Int"},similar:{type:"Int"},frompageid:{type:"Int"},actAsPageID:{type:"Int"},source:{type:"String"},pyml:{type:"Int"},viewallpywo:{type:"Bool",defaultValue:!1},notif_id:{type:"Int"}})}),null);
__d("XWorkSaveGroupPurposeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/group_creation/dialog/save_purpose/",{purpose:{type:"String",required:!0},ref:{type:"String",required:!0},name:{type:"String"},community:{type:"FBID"},coworkers_to_invite:{type:"IntVector",defaultValue:[]},back_disallowed:{type:"Bool",defaultValue:!1}})}),null);