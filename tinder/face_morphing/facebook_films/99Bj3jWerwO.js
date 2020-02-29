if (self.CavalryLogger) { CavalryLogger.start_js(["jS1cN"]); }

__d("TagEventSproutConsts",[],(function(a,b,c,d,e,f){e.exports={composer_action_id:"668012816568345"}}),null);
__d("TagEventSproutEventPickerRelaySearchSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"query",type:"String",defaultValue:null},{kind:"LocalArgument",name:"limit",type:"Int",defaultValue:null},{kind:"LocalArgument",name:"verb",type:"ID",defaultValue:null}],b=[{kind:"Variable",name:"first",variableName:"limit"},{kind:"Literal",name:"object_type",value:["ENTITY"]},{kind:"Variable",name:"query_string",variableName:"query"},{kind:"Literal",name:"query_type",value:"OBJECT_PER_VERB"},{kind:"Variable",name:"verb",variableName:"verb"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"profile_picture",storageKey:"profile_picture(height:32,width:32)",args:[{kind:"Literal",name:"height",value:32},{kind:"Literal",name:"width",value:32}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},f={kind:"ScalarField",alias:null,name:"capitalized_day_time_sentence",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"TagEventSproutEventPickerRelaySearchSourceQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"minutiae_suggestions",storageKey:null,args:b,concreteType:"MinutiaeSuggestionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MinutiaeSuggestionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"MinutiaeSuggestion",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"object",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Event",selections:[c,d,e,{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d]},f]}]}]}]}]}]}]},operation:{kind:"Operation",name:"TagEventSproutEventPickerRelaySearchSourceQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"minutiae_suggestions",storageKey:null,args:b,concreteType:"MinutiaeSuggestionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MinutiaeSuggestionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"MinutiaeSuggestion",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"object",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,c,{kind:"InlineFragment",type:"Event",selections:[d,e,{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,d,c]},f]}]}]}]}]}]}]},params:{operationKind:"query",name:"TagEventSproutEventPickerRelaySearchSourceQuery",id:"1649096801872944",text:null,metadata:{}}}}();e.exports=a}),null);
__d("ReactComposerFunFactAskPromptTaggerContainer.react",["cx","Arbiter","ComposerEntryPointRef","CurrentUser","FacebookAppIDs","FluxContainer","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","React","ReactComposerAttachmentStore","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFormattedTextActions","ReactComposerLoggingName","ReactComposerScrapedAttachmentActions","ReactComposerTaggerActions","ReactComposerTaggerStore","ReactComposerTaggerType","XUICloseButton.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$4=function(){b("ReactComposerTaggerActions").setTaggerData(d.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,null)},c)||babelHelpers.assertThisInitialized(d)}c.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){a=d.composerID;c=b("ReactComposerTaggerStore").getTaggerData(a,b("ReactComposerTaggerType").FUN_FACT);return{isAttached:c&&c.isAskPost,isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").FUN_FACT),taggerData:c}};var d=c.prototype;d.componentDidMount=function(){b("Arbiter").inform("ReactComposerDialogLauncher/expandcomposer/"+this.context.composerID),this.state.isAttached&&b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,0)};d.componentDidUpdate=function(a,c){__p&&__p();var d=this;if(!this.state.isAttached){this.$1&&this.$1.unsubscribe();return}if(c.isAttached)return;this.$2("enter",this.state.taggerData.entryPoint||this.props.entryPoint);this.$1&&this.$1.unsubscribe();this.$1=b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_STARTED+this.context.composerID,function(){if(d.state.isAttached){var a=d.state.taggerData;d.$2("create",a.entryPoint||d.props.entryPoint)}});this.$3()};d.$3=function(){b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,0),b("ReactComposerTaggerActions").setTaggerDataWithoutLogging(this.context.composerID,b("ReactComposerTaggerType").GIF,{gifData:null}),b("ReactComposerScrapedAttachmentActions").clearScrapedAttachment(this.context.composerID)};d.$2=function(a,c){var d=this.context.composerType===b("ComposerEntryPointRef").GROUP?"group":"unknown";d=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(d).setEngagementType(a).setEventMetadata({entry_point:c}).setAppID(b("FacebookAppIDs").WWW);a==="create"?d.setItemType("ask_post").log():a==="enter"&&d.setItemType("composer_page").setItemSubtype("ask_post").log()};d.render=function(){return!this.state.isAttached||this.state.isDisabled?null:b("React").createElement("div",{className:"_3nnr _3-8j"},b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_NOTICE,b("React").createElement(b("XUICloseButton.react"),{className:"_3nnv",onClick:this.$4,shade:"light"}))};return c}(b("React").Component);a.defaultProps={entryPoint:b("ProfileFunFactsEntryPoint").UNKNOWN};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerFunFactSinglePromptTaggerContainer.react",["cx","Arbiter","AsyncRequest","ComposerEntryPointRef","CurrentUser","FacebookAppIDs","FlexLayout.react","FluxContainer","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","React","ReactComposerAttachmentStore","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFormattedTextActions","ReactComposerFormattedTextStore","ReactComposerFunFactTaggerComponent.react","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerStore","ReactComposerTaggerType","XProfileFunFactsSinglePromptFetchController","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=-1,i=0;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$5=function(){b("ReactComposerTaggerActions").setTaggerData(d.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,null)},c)||babelHelpers.assertThisInitialized(d)}c.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){d=d.composerID;c=!!c.pinnedPromptID;var e=b("ReactComposerTaggerStore").getTaggerData(d,b("ReactComposerTaggerType").FUN_FACT);return{isAttached:e&&e.promptID,isDisabled:b("ReactComposerTaggerStore").isDisabled(d,b("ReactComposerTaggerType").FUN_FACT),isLoading:a?a.isLoading:c,taggerData:e}};var d=c.prototype;d.componentDidMount=function(){b("Arbiter").inform("ReactComposerDialogLauncher/expandcomposer/"+this.context.composerID),this.props.pinnedPromptID&&this.$2()};d.componentDidUpdate=function(a,c){__p&&__p();var d=this;if(!this.state.isAttached){this.$1&&this.$1.unsubscribe();return}a=this.state.taggerData.promptID;if(c.isAttached&&c.taggerData.promptID===a)return;this.$3("enter",a,this.state.taggerData.entryPoint||this.props.entryPoint,this.state.taggerData.tapTarget);this.$1&&this.$1.unsubscribe();this.$1=b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_STARTED+this.context.composerID,function(){if(d.state.isAttached){var a=d.state.taggerData;d.$3("create",a.promptID,a.entryPoint||d.props.entryPoint)}});this.$4()};d.$4=function(){if(b("ReactComposerTaggerStore").isDisabled(this.context.composerID,b("ReactComposerTaggerType").FORMATTED_TEXT))return;var a=b("ReactComposerFormattedTextStore").getSelectedIndex(this.context.composerID);a===h&&b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,i)};d.$3=function(a,c,d,e){var f=this.context.composerType===b("ComposerEntryPointRef").GROUP?"group":"unknown";f=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(f).setEngagementType(a).setAppID(b("FacebookAppIDs").WWW);a==="create"?f.setItemType("answer_post").setEventMetadata({entry_point:d,prompt_id:c}).log():a==="enter"&&f.setItemType("composer_page").setItemSubtype("answer_post").setEventMetadata({entry_point:d,prompt_id:c,tap_target:e||""}).log()};d.$2=function(){var a=this;b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,{promptID:this.props.pinnedPromptID});var c=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setInt("fetch_amount",1).setFBID("pinned_prompt_id",this.props.pinnedPromptID).setEnumVector("fun_fact_prompt_types",this.props.promptTypes).getURI();new(b("AsyncRequest"))(c).setHandler(function(c){var d=a.state.taggerData;d.prompt=c.getPayload().prompts[0];b("ReactComposerTaggerActions").setTaggerData(a.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,d);a.setState({isLoading:!1});a.$4()}).send()};d.render=function(){if(!this.state.isAttached||this.state.isDisabled)return null;if(this.state.isLoading)return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_2ph_",direction:"vertical"},b("React").createElement(b("XUISpinner.react"),null));var a=this.state.taggerData.prompt;return b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),null,b("React").createElement(b("ReactComposerFunFactTaggerComponent.react"),{attribution:a.isCrowdsourced?a.attribution:null,emoji:a.emoji,onClose:this.$5,showCloseButton:!0,title:a.title}))};return c}(b("React").Component);a.defaultProps={entryPoint:b("ProfileFunFactsEntryPoint").UNKNOWN,promptTypes:[]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerPlayWithFriendsTaggerComponent.react",["cx","fbt","GamesTypeahead.react","Grid.react","InstantGamesFeedEvent","InstantGamesFeedEventSection","InstantGamesFeedTypedLogger","React","ReactComposerContextTypes","ReactComposerStore"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Grid.react").GridItem;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=b("ReactComposerStore").getTargetType(this.context.composerID);new(b("InstantGamesFeedTypedLogger"))().setEvent(b("InstantGamesFeedEvent").PLAY_WITH_FRIENDS_COMPOSER_TAGGER_OPENED).setUISurface(b("InstantGamesFeedEventSection").PLAY_WITH_FRIENDS_ATTACHMENT).setGroupID(a=="group"?this.context.targetID:null).log()};d.render=function(){return b("React").createElement(b("Grid.react"),{className:"_5esl",cols:2},b("React").createElement(i,{className:"_5esm",key:"label"},h._("\u30d7\u30ec\u30a4\u4e2d")),b("React").createElement(i,{className:"_5esw",key:"tokenizer"},b("React").createElement(b("GamesTypeahead.react"),{className:"_5esx",clearOnSelect:!0,filterVideoTags:!1,focusOnMount:!0,includeSeries:!1,onGameSelect:this.props.onSelect,queryInstantGames:!0,showEntriesOnFocus:!0})))};return c}(b("React").Component);a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("ReactComposerPlayWithFriendsTaggerContainer.react",["Arbiter","InstantGamesFeedEvent","InstantGamesFeedEventSection","InstantGamesFeedTypedLogger","React","ReactComposerLoggingName","ReactComposerPlayWithFriendsTaggerComponent.react","ReactComposerStore","ReactComposerTaggerActions","ReactComposerTaggerContainerStateMixin","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"ReactComposerPlayWithFriendsTaggerContainer",mixins:[b("ReactComposerTaggerContainerStateMixin")()],statics:{taggerID:b("ReactComposerTaggerType").PLAY_WITH_FRIENDS},_onSelect:function(a){a&&(a.gameID=a.getUniqueID(),a.gameName=a.getTitle(),a.gameImage=a.getPhoto()),new(b("InstantGamesFeedTypedLogger"))().setEvent(b("InstantGamesFeedEvent").PLAY_WITH_FRIENDS_COMPOSER_TAGGER_GAME_SELECTED).setUISurface(b("InstantGamesFeedEventSection").PLAY_WITH_FRIENDS_ATTACHMENT).setGameID(a.gameID).setGroupID(b("ReactComposerStore").getTargetType(this.context.composerID)=="group"?this.context.targetID:null).log(),b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").PLAY_WITH_FRIENDS_SPROUT,b("ReactComposerTaggerType").PLAY_WITH_FRIENDS,a),b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,b("ReactComposerLoggingName").PLAY_WITH_FRIENDS_SPROUT),b("Arbiter").inform("playWithFriendsAttached"+this.context.composerID)},render:function(){return!this.state.isSelected?null:b("React").createElement("div",null,b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),{shouldHideOnEscape:this.state.isSelected},b("React").createElement(b("ReactComposerPlayWithFriendsTaggerComponent.react"),{onSelect:this._onSelect})))}});e.exports=a}),null);
__d("ComposerTagEventTypeahead.react",["cx","fbt","React","ReactComposerTaggerPresenter","ReactComposerTaggerViewStyles","SearchableEntry","WebAsyncSearchSource","XUITypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){__p&&__p();var c;c=a.call(this,b)||this;c.$1=function(a){c.setState({query:a.target.value})};c.$2=function(a){var b=c.$7();b.event=a;c.setState({query:a.getTitle()});c.props.onSelect(b)};c.$4=function(){c.$8(),c.setState({query:""})};c.$3=function(a){c.state.query===a.target.value&&c.$8()};c.state={query:b.taggerData.event?b.taggerData.event.getTitle():""};return c}var d=c.prototype;d.componentDidMount=function(){this.refs.typeahead&&this.refs.typeahead.focusInput()};d.render=function(){return b("React").createElement(b("XUITypeahead.react"),{autoHighlight:!0,className:"_5esx _4zdz",clearable:!0,focusedOnInit:this.props.autoFocus,highlightOnSelect:!0,onChange:this.$1,onSelectAttempt:this.$2,showEntriesOnFocus:!0,placeholder:h._("\u30bf\u30b0\u4ed8\u3051\u3059\u308b\u30a4\u30d9\u30f3\u30c8"),onBackspace:this.$3,onClear:this.$4,queryString:this.state.query,ref:"typeahead",searchSource:this.$5(),tallInput:!1,selectedEntry:this.props.taggerData.event,initialEntry:this.props.taggerData.event,presenter:this.$6()})};d.$7=function(){return Object.assign({},this.props.taggerData)};d.$5=function(){return this.state.query?this.props.userInputEventsSearchSource:this.props.nearByEventsSearchSource};d.$6=function(){var a={taggerViewStyle:b("ReactComposerTaggerViewStyles").SCROLLABLE};return Object.assign({},b("ReactComposerTaggerPresenter"),{layerPosition:this.props.layerPosition||void 0,extraRendererProps:a,maxEntries:15})};d.$8=function(){var a=this.$7();a.event=null;a.eventID=null;this.props.onSelect(a)};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerTagEventTaggerComponent.react",["cx","fbt","Grid.react","React","WebAsyncSearchSource","ComposerTagEventTypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Grid.react").GridItem;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("Grid.react"),{className:"_5esl",cols:2},b("React").createElement(i,{className:"_5esm",key:"label"},h._("\u53c2\u52a0\u4e88\u5b9a...")),b("React").createElement(i,{className:"_5esw",key:"tokenizer"},b("React").createElement(b("ComposerTagEventTypeahead.react"),{autoFocus:this.props.autoFocus,onSelect:this.props.onSelect,nearByEventsSearchSource:this.props.nearByEventsSearchSource,taggerData:this.props.taggerData,userInputEventsSearchSource:this.props.userInputEventsSearchSource})))};return c}(b("React").Component);e.exports=a}),null);
__d("TagEventSproutEventPickerRelaySearchSource",["AbstractRelaySearchSource","RelayFBEnvironment","RelayModern","SearchableEntry","TagEventSproutEventPickerRelaySearchSourceQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();b("RelayModern").graphql;var g=20,h=668012816568345,i=function(){return b("TagEventSproutEventPickerRelaySearchSourceQuery.graphql")};function j(a){return{query:i,variables:{query:a,limit:g,verb:h}}}function k(a){a=(a=a)!=null?(a=a.viewer)!=null?(a=a.minutiae_suggestions)!=null?a.edges:a:a:a;return!a?[]:a.map(function(a,c){a=a.node.object;var d=c(a,function(a){return a.capitalized_day_time_sentence}),e=c(a,function(a){return a.event_place.name}),f="";e===null?f=d:d===null?f=e:f=[d,"\xb7",e].join(" ");return new(b("SearchableEntry"))({uniqueID:a.id,title:a.name,subtitle:f,photo:c(a,function(a){return a.profile_picture.uri})})})}var l=function(a,b){return b(a)};a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c={bootstrapRequests:[{gen:function(a){return j(a)}}],queryRequests:[{gen:function(a){return j(a)}}],packageFn:k,getAllForEmptyQuery:!0};return a.call(this,b("RelayFBEnvironment"),c,l)||this}return c}(b("AbstractRelaySearchSource"));e.exports=a}),null);
__d("XEventsTagEventTypeaheadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/tag_event_sprout/typeahead/",{media_latitude:{type:"Float"},media_longitude:{type:"Float"},media_taken_time:{type:"Int"},target_id:{type:"FBID"}})}),null);
__d("ReactComposerTagEventTaggerContainer.react",["React","ReactComposerLoggingName","ReactComposerMinutiaeAttachmentActions","ReactComposerTagEventTaggerComponent.react","ReactComposerTaggerActions","ReactComposerTaggerContainerStateMixin","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerType","TagEventSproutConsts","TagEventSproutEventPickerRelaySearchSource","WebAsyncSearchSource","XEventsTagEventTypeaheadController","areEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerTagEventTaggerContainer",mixins:[b("ReactComposerTaggerContainerStateMixin")()],statics:{taggerID:b("ReactComposerTaggerType").TAG_EVENT,loggingName:b("ReactComposerLoggingName").TAG_EVENT,taggerComponent:b("ReactComposerTagEventTaggerComponent.react")},propTypes:{mediaLocation:a.shape({latitude:a.number.isRequired,longitude:a.number.isRequired}),mediaTakenTime:a.number,isPersonalTimeline:a.bool},_nearByEventsSearchSource:null,_userInputEventsSearchSource:b("TagEventSproutEventPickerRelaySearchSource"),UNSAFE_componentWillMount:function(){this._initNearByEventsSearchSource(this.props),this._initUserInputEventsSearchSource()},UNSAFE_componentWillReceiveProps:function(a){(!b("areEqual")(a.mediaLocation,this.props.mediaLocation)||!b("areEqual")(a.mediaTakenTime,this.props.mediaTakenTime))&&this._initNearByEventsSearchSource(a)},render:function(){return!this.state.isSelected?null:b("React").createElement("div",{"data-testid":"tag-event-tagger-component"},b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),{shouldHideOnEscape:this.state.isSelected},b("React").createElement(b("ReactComposerTagEventTaggerComponent.react"),{autoFocus:this.state.focusedOnInit,nearByEventsSearchSource:this._nearByEventsSearchSource,onSelect:this._onSelect,taggerData:this.state.taggerData,userInputEventsSearchSource:this._userInputEventsSearchSource})))},_initNearByEventsSearchSource:function(a){a=b("XEventsTagEventTypeaheadController").getURIBuilder().setFloat("media_latitude",(a.mediaLocation||{}).latitude).setFloat("media_longitude",(a.mediaLocation||{}).longitude).setInt("media_taken_time",a.mediaTakenTime?a.mediaTakenTime:null).setFBID("target_id",this.context.targetID).getURI();this._nearByEventsSearchSource=new(b("WebAsyncSearchSource"))({bootstrapRequests:[{uri:a}],getAllForEmptyQuery:!0,queryRequests:[{uri:a}]})},_initUserInputEventsSearchSource:function(){this._userInputEventsSearchSource=new(b("TagEventSproutEventPickerRelaySearchSource"))()},_onSelect:function(a){var c=this._getCopyOfData();a&&a.mediaTakenTime&&(c.mediaTakenTime=a.mediaTakenTime);a&&a.event?(c.eventID=a.event.getUniqueID(),c.event=a.event,b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,b("ReactComposerLoggingName").TAG_EVENT),b("ReactComposerMinutiaeAttachmentActions").fetchMinutiaeAttachment(this.context.composerID,b("TagEventSproutConsts").composer_action_id,c.eventID,this.context.targetID,this.context.actorID,!!this.props.isPersonalTimeline)):(c.eventID=null,c.event=null,b("ReactComposerMinutiaeAttachmentActions").setMarkup(this.context.composerID,null));b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").TAG_EVENT,b("ReactComposerTaggerType").TAG_EVENT,c)},_getCopyOfData:function(){return Object.assign({},this.state.taggerdata)}});e.exports=c}),null);