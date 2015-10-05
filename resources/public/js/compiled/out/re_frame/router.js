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
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var inst_28285 = (state_28300[(2)]);
var state_28300__$1 = (function (){var statearr_28302 = state_28300;
(statearr_28302[(7)] = inst_28285);

return statearr_28302;
})();
var statearr_28303_28323 = state_28300__$1;
(statearr_28303_28323[(2)] = null);

(statearr_28303_28323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var state_28300__$1 = state_28300;
var statearr_28304_28324 = state_28300__$1;
(statearr_28304_28324[(2)] = null);

(statearr_28304_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28272 = (state_28300[(8)]);
var inst_28272__$1 = (state_28300[(2)]);
var inst_28273 = cljs.core.meta.call(null,inst_28272__$1);
var inst_28274 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_28273);
var state_28300__$1 = (function (){var statearr_28305 = state_28300;
(statearr_28305[(8)] = inst_28272__$1);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28274)){
var statearr_28306_28325 = state_28300__$1;
(statearr_28306_28325[(1)] = (5));

} else {
var statearr_28307_28326 = state_28300__$1;
(statearr_28307_28326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (6))){
var inst_28281 = cljs.core.async.timeout.call(null,(0));
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(9),inst_28281);
} else {
if((state_val_28301 === (3))){
var inst_28298 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (12))){
var inst_28272 = (state_28300[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28300,(11),Object,null,(10));
var inst_28293 = re_frame.handlers.handle.call(null,inst_28272);
var state_28300__$1 = state_28300;
var statearr_28308_28327 = state_28300__$1;
(statearr_28308_28327[(2)] = inst_28293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (2))){
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_28301 === (11))){
var inst_28286 = (state_28300[(2)]);
var inst_28287 = re_frame.router.purge_chan.call(null);
var inst_28288 = re_frame$router$router_loop.call(null);
var inst_28289 = (function(){throw inst_28286})();
var state_28300__$1 = (function (){var statearr_28309 = state_28300;
(statearr_28309[(9)] = inst_28287);

(statearr_28309[(10)] = inst_28288);

return statearr_28309;
})();
var statearr_28310_28328 = state_28300__$1;
(statearr_28310_28328[(2)] = inst_28289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28283 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28311_28329 = state_28300__$1;
(statearr_28311_28329[(2)] = inst_28283);

(statearr_28311_28329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var inst_28276 = reagent.core.flush.call(null);
var inst_28277 = cljs.core.async.timeout.call(null,(20));
var state_28300__$1 = (function (){var statearr_28312 = state_28300;
(statearr_28312[(11)] = inst_28276);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(8),inst_28277);
} else {
if((state_val_28301 === (10))){
var inst_28295 = (state_28300[(2)]);
var state_28300__$1 = (function (){var statearr_28313 = state_28300;
(statearr_28313[(12)] = inst_28295);

return statearr_28313;
})();
var statearr_28314_28330 = state_28300__$1;
(statearr_28314_28330[(2)] = null);

(statearr_28314_28330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28279 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28315_28331 = state_28300__$1;
(statearr_28315_28331[(2)] = inst_28279);

(statearr_28315_28331[(1)] = (7));


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
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21794__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21794__auto____0 = (function (){
var statearr_28319 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28319[(0)] = re_frame$router$router_loop_$_state_machine__21794__auto__);

(statearr_28319[(1)] = (1));

return statearr_28319;
});
var re_frame$router$router_loop_$_state_machine__21794__auto____1 = (function (state_28300){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28320){if((e28320 instanceof Object)){
var ex__21797__auto__ = e28320;
var statearr_28321_28332 = state_28300;
(statearr_28321_28332[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28300;
state_28300 = G__28333;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21794__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21794__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21794__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21794__auto____0;
re_frame$router$router_loop_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21794__auto____1;
return re_frame$router$router_loop_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_28322 = f__21856__auto__.call(null);
(statearr_28322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_28322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
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

//# sourceMappingURL=router.js.map?rel=1443334739447