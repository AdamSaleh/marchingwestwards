// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__){
return (function (state_26513){
var state_val_26514 = (state_26513[(1)]);
if((state_val_26514 === (7))){
var inst_26498 = (state_26513[(2)]);
var state_26513__$1 = (function (){var statearr_26515 = state_26513;
(statearr_26515[(7)] = inst_26498);

return statearr_26515;
})();
var statearr_26516_26536 = state_26513__$1;
(statearr_26516_26536[(2)] = null);

(statearr_26516_26536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (1))){
var state_26513__$1 = state_26513;
var statearr_26517_26537 = state_26513__$1;
(statearr_26517_26537[(2)] = null);

(statearr_26517_26537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (4))){
var inst_26485 = (state_26513[(8)]);
var inst_26485__$1 = (state_26513[(2)]);
var inst_26486 = cljs.core.meta.call(null,inst_26485__$1);
var inst_26487 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26486);
var state_26513__$1 = (function (){var statearr_26518 = state_26513;
(statearr_26518[(8)] = inst_26485__$1);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26487)){
var statearr_26519_26538 = state_26513__$1;
(statearr_26519_26538[(1)] = (5));

} else {
var statearr_26520_26539 = state_26513__$1;
(statearr_26520_26539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (6))){
var inst_26494 = cljs.core.async.timeout.call(null,(0));
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(9),inst_26494);
} else {
if((state_val_26514 === (3))){
var inst_26511 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26513__$1,inst_26511);
} else {
if((state_val_26514 === (12))){
var inst_26485 = (state_26513[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26513,(11),Object,null,(10));
var inst_26506 = re_frame.handlers.handle.call(null,inst_26485);
var state_26513__$1 = state_26513;
var statearr_26521_26540 = state_26513__$1;
(statearr_26521_26540[(2)] = inst_26506);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (2))){
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26514 === (11))){
var inst_26499 = (state_26513[(2)]);
var inst_26500 = re_frame.router.purge_chan.call(null);
var inst_26501 = re_frame$router$router_loop.call(null);
var inst_26502 = (function(){throw inst_26499})();
var state_26513__$1 = (function (){var statearr_26522 = state_26513;
(statearr_26522[(9)] = inst_26501);

(statearr_26522[(10)] = inst_26500);

return statearr_26522;
})();
var statearr_26523_26541 = state_26513__$1;
(statearr_26523_26541[(2)] = inst_26502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (9))){
var inst_26496 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26524_26542 = state_26513__$1;
(statearr_26524_26542[(2)] = inst_26496);

(statearr_26524_26542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (5))){
var inst_26489 = reagent.core.flush.call(null);
var inst_26490 = cljs.core.async.timeout.call(null,(20));
var state_26513__$1 = (function (){var statearr_26525 = state_26513;
(statearr_26525[(11)] = inst_26489);

return statearr_26525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(8),inst_26490);
} else {
if((state_val_26514 === (10))){
var inst_26508 = (state_26513[(2)]);
var state_26513__$1 = (function (){var statearr_26526 = state_26513;
(statearr_26526[(12)] = inst_26508);

return statearr_26526;
})();
var statearr_26527_26543 = state_26513__$1;
(statearr_26527_26543[(2)] = null);

(statearr_26527_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (8))){
var inst_26492 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26528_26544 = state_26513__$1;
(statearr_26528_26544[(2)] = inst_26492);

(statearr_26528_26544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto__))
;
return ((function (switch__21954__auto__,c__22016__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21955__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21955__auto____0 = (function (){
var statearr_26532 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26532[(0)] = re_frame$router$router_loop_$_state_machine__21955__auto__);

(statearr_26532[(1)] = (1));

return statearr_26532;
});
var re_frame$router$router_loop_$_state_machine__21955__auto____1 = (function (state_26513){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26533){if((e26533 instanceof Object)){
var ex__21958__auto__ = e26533;
var statearr_26534_26545 = state_26513;
(statearr_26534_26545[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26546 = state_26513;
state_26513 = G__26546;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21955__auto__ = function(state_26513){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21955__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21955__auto____1.call(this,state_26513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21955__auto____0;
re_frame$router$router_loop_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21955__auto____1;
return re_frame$router$router_loop_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__))
})();
var state__22018__auto__ = (function (){var statearr_26535 = f__22017__auto__.call(null);
(statearr_26535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_26535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__))
);

return c__22016__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1439021438646