// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31915__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31916__i = 0, G__31916__a = new Array(arguments.length -  0);
while (G__31916__i < G__31916__a.length) {G__31916__a[G__31916__i] = arguments[G__31916__i + 0]; ++G__31916__i;}
  args = new cljs.core.IndexedSeq(G__31916__a,0);
} 
return G__31915__delegate.call(this,args);};
G__31915.cljs$lang$maxFixedArity = 0;
G__31915.cljs$lang$applyTo = (function (arglist__31917){
var args = cljs.core.seq(arglist__31917);
return G__31915__delegate(args);
});
G__31915.cljs$core$IFn$_invoke$arity$variadic = G__31915__delegate;
return G__31915;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31918){
var map__31920 = p__31918;
var map__31920__$1 = ((cljs.core.seq_QMARK_.call(null,map__31920))?cljs.core.apply.call(null,cljs.core.hash_map,map__31920):map__31920);
var class$ = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__31920__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17914__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17902__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17902__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17902__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21855__auto___32049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___32049,ch){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___32049,ch){
return (function (state_32023){
var state_val_32024 = (state_32023[(1)]);
if((state_val_32024 === (7))){
var inst_32019 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32025_32050 = state_32023__$1;
(statearr_32025_32050[(2)] = inst_32019);

(statearr_32025_32050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (1))){
var state_32023__$1 = state_32023;
var statearr_32026_32051 = state_32023__$1;
(statearr_32026_32051[(2)] = null);

(statearr_32026_32051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (4))){
var inst_31987 = (state_32023[(7)]);
var inst_31987__$1 = (state_32023[(2)]);
var state_32023__$1 = (function (){var statearr_32027 = state_32023;
(statearr_32027[(7)] = inst_31987__$1);

return statearr_32027;
})();
if(cljs.core.truth_(inst_31987__$1)){
var statearr_32028_32052 = state_32023__$1;
(statearr_32028_32052[(1)] = (5));

} else {
var statearr_32029_32053 = state_32023__$1;
(statearr_32029_32053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (13))){
var state_32023__$1 = state_32023;
var statearr_32030_32054 = state_32023__$1;
(statearr_32030_32054[(2)] = null);

(statearr_32030_32054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (6))){
var state_32023__$1 = state_32023;
var statearr_32031_32055 = state_32023__$1;
(statearr_32031_32055[(2)] = null);

(statearr_32031_32055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (3))){
var inst_32021 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32023__$1,inst_32021);
} else {
if((state_val_32024 === (12))){
var inst_31994 = (state_32023[(8)]);
var inst_32007 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31994);
var inst_32008 = cljs.core.first.call(null,inst_32007);
var inst_32009 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32008);
var inst_32010 = console.warn("Figwheel: Not loading code with warnings - ",inst_32009);
var state_32023__$1 = state_32023;
var statearr_32032_32056 = state_32023__$1;
(statearr_32032_32056[(2)] = inst_32010);

(statearr_32032_32056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (2))){
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32023__$1,(4),ch);
} else {
if((state_val_32024 === (11))){
var inst_32003 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32033_32057 = state_32023__$1;
(statearr_32033_32057[(2)] = inst_32003);

(statearr_32033_32057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (9))){
var inst_31993 = (state_32023[(9)]);
var inst_32005 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31993,opts);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_32005)){
var statearr_32034_32058 = state_32023__$1;
(statearr_32034_32058[(1)] = (12));

} else {
var statearr_32035_32059 = state_32023__$1;
(statearr_32035_32059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (5))){
var inst_31987 = (state_32023[(7)]);
var inst_31993 = (state_32023[(9)]);
var inst_31989 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31990 = (new cljs.core.PersistentArrayMap(null,2,inst_31989,null));
var inst_31991 = (new cljs.core.PersistentHashSet(null,inst_31990,null));
var inst_31992 = figwheel.client.focus_msgs.call(null,inst_31991,inst_31987);
var inst_31993__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31992);
var inst_31994 = cljs.core.first.call(null,inst_31992);
var inst_31995 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31993__$1,opts);
var state_32023__$1 = (function (){var statearr_32036 = state_32023;
(statearr_32036[(9)] = inst_31993__$1);

(statearr_32036[(8)] = inst_31994);

return statearr_32036;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32037_32060 = state_32023__$1;
(statearr_32037_32060[(1)] = (8));

} else {
var statearr_32038_32061 = state_32023__$1;
(statearr_32038_32061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (14))){
var inst_32013 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32039_32062 = state_32023__$1;
(statearr_32039_32062[(2)] = inst_32013);

(statearr_32039_32062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (10))){
var inst_32015 = (state_32023[(2)]);
var state_32023__$1 = (function (){var statearr_32040 = state_32023;
(statearr_32040[(10)] = inst_32015);

return statearr_32040;
})();
var statearr_32041_32063 = state_32023__$1;
(statearr_32041_32063[(2)] = null);

(statearr_32041_32063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (8))){
var inst_31994 = (state_32023[(8)]);
var inst_31997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31998 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31994);
var inst_31999 = cljs.core.async.timeout.call(null,(1000));
var inst_32000 = [inst_31998,inst_31999];
var inst_32001 = (new cljs.core.PersistentVector(null,2,(5),inst_31997,inst_32000,null));
var state_32023__$1 = state_32023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32023__$1,(11),inst_32001);
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
}
}
});})(c__21855__auto___32049,ch))
;
return ((function (switch__21793__auto__,c__21855__auto___32049,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____0 = (function (){
var statearr_32045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32045[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__);

(statearr_32045[(1)] = (1));

return statearr_32045;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____1 = (function (state_32023){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32046){if((e32046 instanceof Object)){
var ex__21797__auto__ = e32046;
var statearr_32047_32064 = state_32023;
(statearr_32047_32064[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32065 = state_32023;
state_32023 = G__32065;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__ = function(state_32023){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____1.call(this,state_32023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21794__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___32049,ch))
})();
var state__21857__auto__ = (function (){var statearr_32048 = f__21856__auto__.call(null);
(statearr_32048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___32049);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___32049,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32066_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32066_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32073 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32073){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32071 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32072 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32071,_STAR_print_newline_STAR_32072,base_path_32073){
return (function() { 
var G__32074__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32075__i = 0, G__32075__a = new Array(arguments.length -  0);
while (G__32075__i < G__32075__a.length) {G__32075__a[G__32075__i] = arguments[G__32075__i + 0]; ++G__32075__i;}
  args = new cljs.core.IndexedSeq(G__32075__a,0);
} 
return G__32074__delegate.call(this,args);};
G__32074.cljs$lang$maxFixedArity = 0;
G__32074.cljs$lang$applyTo = (function (arglist__32076){
var args = cljs.core.seq(arglist__32076);
return G__32074__delegate(args);
});
G__32074.cljs$core$IFn$_invoke$arity$variadic = G__32074__delegate;
return G__32074;
})()
;})(_STAR_print_fn_STAR_32071,_STAR_print_newline_STAR_32072,base_path_32073))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32072;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32071;
}}catch (e32070){if((e32070 instanceof Error)){
var e = e32070;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32073], null));
} else {
var e = e32070;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32073))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32077){
var map__32082 = p__32077;
var map__32082__$1 = ((cljs.core.seq_QMARK_.call(null,map__32082))?cljs.core.apply.call(null,cljs.core.hash_map,map__32082):map__32082);
var opts = map__32082__$1;
var build_id = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32082,map__32082__$1,opts,build_id){
return (function (p__32083){
var vec__32084 = p__32083;
var map__32085 = cljs.core.nth.call(null,vec__32084,(0),null);
var map__32085__$1 = ((cljs.core.seq_QMARK_.call(null,map__32085))?cljs.core.apply.call(null,cljs.core.hash_map,map__32085):map__32085);
var msg = map__32085__$1;
var msg_name = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32084,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32084,map__32085,map__32085__$1,msg,msg_name,_,map__32082,map__32082__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32084,map__32085,map__32085__$1,msg,msg_name,_,map__32082,map__32082__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32082,map__32082__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32089){
var vec__32090 = p__32089;
var map__32091 = cljs.core.nth.call(null,vec__32090,(0),null);
var map__32091__$1 = ((cljs.core.seq_QMARK_.call(null,map__32091))?cljs.core.apply.call(null,cljs.core.hash_map,map__32091):map__32091);
var msg = map__32091__$1;
var msg_name = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32090,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32092){
var map__32100 = p__32092;
var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);
var on_compile_fail = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__32100,map__32100__$1,on_compile_fail,on_compile_warning){
return (function (p__32101){
var vec__32102 = p__32101;
var map__32103 = cljs.core.nth.call(null,vec__32102,(0),null);
var map__32103__$1 = ((cljs.core.seq_QMARK_.call(null,map__32103))?cljs.core.apply.call(null,cljs.core.hash_map,map__32103):map__32103);
var msg = map__32103__$1;
var msg_name = cljs.core.get.call(null,map__32103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32102,(1));
var pred__32104 = cljs.core._EQ_;
var expr__32105 = msg_name;
if(cljs.core.truth_(pred__32104.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32105))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32104.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32105))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32100,map__32100__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__,msg_hist,msg_names,msg){
return (function (state_32306){
var state_val_32307 = (state_32306[(1)]);
if((state_val_32307 === (7))){
var inst_32240 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32308_32349 = state_32306__$1;
(statearr_32308_32349[(2)] = inst_32240);

(statearr_32308_32349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (20))){
var inst_32268 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32268)){
var statearr_32309_32350 = state_32306__$1;
(statearr_32309_32350[(1)] = (22));

} else {
var statearr_32310_32351 = state_32306__$1;
(statearr_32310_32351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (27))){
var inst_32280 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32281 = figwheel.client.heads_up.display_warning.call(null,inst_32280);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(30),inst_32281);
} else {
if((state_val_32307 === (1))){
var inst_32228 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32228)){
var statearr_32311_32352 = state_32306__$1;
(statearr_32311_32352[(1)] = (2));

} else {
var statearr_32312_32353 = state_32306__$1;
(statearr_32312_32353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (24))){
var inst_32296 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32313_32354 = state_32306__$1;
(statearr_32313_32354[(2)] = inst_32296);

(statearr_32313_32354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (4))){
var inst_32304 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32306__$1,inst_32304);
} else {
if((state_val_32307 === (15))){
var inst_32256 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32257 = figwheel.client.format_messages.call(null,inst_32256);
var inst_32258 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32259 = figwheel.client.heads_up.display_error.call(null,inst_32257,inst_32258);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(18),inst_32259);
} else {
if((state_val_32307 === (21))){
var inst_32298 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32314_32355 = state_32306__$1;
(statearr_32314_32355[(2)] = inst_32298);

(statearr_32314_32355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (31))){
var inst_32287 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(34),inst_32287);
} else {
if((state_val_32307 === (32))){
var state_32306__$1 = state_32306;
var statearr_32315_32356 = state_32306__$1;
(statearr_32315_32356[(2)] = null);

(statearr_32315_32356[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (33))){
var inst_32292 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32316_32357 = state_32306__$1;
(statearr_32316_32357[(2)] = inst_32292);

(statearr_32316_32357[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (13))){
var inst_32246 = (state_32306[(2)]);
var inst_32247 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32248 = figwheel.client.format_messages.call(null,inst_32247);
var inst_32249 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32250 = figwheel.client.heads_up.display_error.call(null,inst_32248,inst_32249);
var state_32306__$1 = (function (){var statearr_32317 = state_32306;
(statearr_32317[(7)] = inst_32246);

return statearr_32317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(14),inst_32250);
} else {
if((state_val_32307 === (22))){
var inst_32270 = figwheel.client.heads_up.clear.call(null);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(25),inst_32270);
} else {
if((state_val_32307 === (29))){
var inst_32294 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32318_32358 = state_32306__$1;
(statearr_32318_32358[(2)] = inst_32294);

(statearr_32318_32358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (6))){
var inst_32236 = figwheel.client.heads_up.clear.call(null);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(9),inst_32236);
} else {
if((state_val_32307 === (28))){
var inst_32285 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32285)){
var statearr_32319_32359 = state_32306__$1;
(statearr_32319_32359[(1)] = (31));

} else {
var statearr_32320_32360 = state_32306__$1;
(statearr_32320_32360[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (25))){
var inst_32272 = (state_32306[(2)]);
var inst_32273 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32274 = figwheel.client.heads_up.display_warning.call(null,inst_32273);
var state_32306__$1 = (function (){var statearr_32321 = state_32306;
(statearr_32321[(8)] = inst_32272);

return statearr_32321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(26),inst_32274);
} else {
if((state_val_32307 === (34))){
var inst_32289 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32322_32361 = state_32306__$1;
(statearr_32322_32361[(2)] = inst_32289);

(statearr_32322_32361[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (17))){
var inst_32300 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32323_32362 = state_32306__$1;
(statearr_32323_32362[(2)] = inst_32300);

(statearr_32323_32362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (3))){
var inst_32242 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32242)){
var statearr_32324_32363 = state_32306__$1;
(statearr_32324_32363[(1)] = (10));

} else {
var statearr_32325_32364 = state_32306__$1;
(statearr_32325_32364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (12))){
var inst_32302 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32326_32365 = state_32306__$1;
(statearr_32326_32365[(2)] = inst_32302);

(statearr_32326_32365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (2))){
var inst_32230 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32230)){
var statearr_32327_32366 = state_32306__$1;
(statearr_32327_32366[(1)] = (5));

} else {
var statearr_32328_32367 = state_32306__$1;
(statearr_32328_32367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (23))){
var inst_32278 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32278)){
var statearr_32329_32368 = state_32306__$1;
(statearr_32329_32368[(1)] = (27));

} else {
var statearr_32330_32369 = state_32306__$1;
(statearr_32330_32369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (19))){
var inst_32265 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32266 = figwheel.client.heads_up.append_message.call(null,inst_32265);
var state_32306__$1 = state_32306;
var statearr_32331_32370 = state_32306__$1;
(statearr_32331_32370[(2)] = inst_32266);

(statearr_32331_32370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (11))){
var inst_32254 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32254)){
var statearr_32332_32371 = state_32306__$1;
(statearr_32332_32371[(1)] = (15));

} else {
var statearr_32333_32372 = state_32306__$1;
(statearr_32333_32372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (9))){
var inst_32238 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32334_32373 = state_32306__$1;
(statearr_32334_32373[(2)] = inst_32238);

(statearr_32334_32373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (5))){
var inst_32232 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(8),inst_32232);
} else {
if((state_val_32307 === (14))){
var inst_32252 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32335_32374 = state_32306__$1;
(statearr_32335_32374[(2)] = inst_32252);

(statearr_32335_32374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (26))){
var inst_32276 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32336_32375 = state_32306__$1;
(statearr_32336_32375[(2)] = inst_32276);

(statearr_32336_32375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (16))){
var inst_32263 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32263)){
var statearr_32337_32376 = state_32306__$1;
(statearr_32337_32376[(1)] = (19));

} else {
var statearr_32338_32377 = state_32306__$1;
(statearr_32338_32377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (30))){
var inst_32283 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32339_32378 = state_32306__$1;
(statearr_32339_32378[(2)] = inst_32283);

(statearr_32339_32378[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (10))){
var inst_32244 = figwheel.client.heads_up.clear.call(null);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(13),inst_32244);
} else {
if((state_val_32307 === (18))){
var inst_32261 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32340_32379 = state_32306__$1;
(statearr_32340_32379[(2)] = inst_32261);

(statearr_32340_32379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (8))){
var inst_32234 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32341_32380 = state_32306__$1;
(statearr_32341_32380[(2)] = inst_32234);

(statearr_32341_32380[(1)] = (7));


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
});})(c__21855__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21793__auto__,c__21855__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____0 = (function (){
var statearr_32345 = [null,null,null,null,null,null,null,null,null];
(statearr_32345[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__);

(statearr_32345[(1)] = (1));

return statearr_32345;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____1 = (function (state_32306){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32346){if((e32346 instanceof Object)){
var ex__21797__auto__ = e32346;
var statearr_32347_32381 = state_32306;
(statearr_32347_32381[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32382 = state_32306;
state_32306 = G__32382;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__ = function(state_32306){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____1.call(this,state_32306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__,msg_hist,msg_names,msg))
})();
var state__21857__auto__ = (function (){var statearr_32348 = f__21856__auto__.call(null);
(statearr_32348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_32348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__,msg_hist,msg_names,msg))
);

return c__21855__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21855__auto___32445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___32445,ch){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___32445,ch){
return (function (state_32428){
var state_val_32429 = (state_32428[(1)]);
if((state_val_32429 === (8))){
var inst_32420 = (state_32428[(2)]);
var state_32428__$1 = (function (){var statearr_32430 = state_32428;
(statearr_32430[(7)] = inst_32420);

return statearr_32430;
})();
var statearr_32431_32446 = state_32428__$1;
(statearr_32431_32446[(2)] = null);

(statearr_32431_32446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (7))){
var inst_32424 = (state_32428[(2)]);
var state_32428__$1 = state_32428;
var statearr_32432_32447 = state_32428__$1;
(statearr_32432_32447[(2)] = inst_32424);

(statearr_32432_32447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (6))){
var state_32428__$1 = state_32428;
var statearr_32433_32448 = state_32428__$1;
(statearr_32433_32448[(2)] = null);

(statearr_32433_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (5))){
var inst_32416 = (state_32428[(8)]);
var inst_32418 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32416);
var state_32428__$1 = state_32428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32428__$1,(8),inst_32418);
} else {
if((state_val_32429 === (4))){
var inst_32416 = (state_32428[(8)]);
var inst_32416__$1 = (state_32428[(2)]);
var state_32428__$1 = (function (){var statearr_32434 = state_32428;
(statearr_32434[(8)] = inst_32416__$1);

return statearr_32434;
})();
if(cljs.core.truth_(inst_32416__$1)){
var statearr_32435_32449 = state_32428__$1;
(statearr_32435_32449[(1)] = (5));

} else {
var statearr_32436_32450 = state_32428__$1;
(statearr_32436_32450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32429 === (3))){
var inst_32426 = (state_32428[(2)]);
var state_32428__$1 = state_32428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32428__$1,inst_32426);
} else {
if((state_val_32429 === (2))){
var state_32428__$1 = state_32428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32428__$1,(4),ch);
} else {
if((state_val_32429 === (1))){
var state_32428__$1 = state_32428;
var statearr_32437_32451 = state_32428__$1;
(statearr_32437_32451[(2)] = null);

(statearr_32437_32451[(1)] = (2));


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
});})(c__21855__auto___32445,ch))
;
return ((function (switch__21793__auto__,c__21855__auto___32445,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21794__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21794__auto____0 = (function (){
var statearr_32441 = [null,null,null,null,null,null,null,null,null];
(statearr_32441[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21794__auto__);

(statearr_32441[(1)] = (1));

return statearr_32441;
});
var figwheel$client$heads_up_plugin_$_state_machine__21794__auto____1 = (function (state_32428){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32442){if((e32442 instanceof Object)){
var ex__21797__auto__ = e32442;
var statearr_32443_32452 = state_32428;
(statearr_32443_32452[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32453 = state_32428;
state_32428 = G__32453;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21794__auto__ = function(state_32428){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21794__auto____1.call(this,state_32428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21794__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21794__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___32445,ch))
})();
var state__21857__auto__ = (function (){var statearr_32444 = f__21856__auto__.call(null);
(statearr_32444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___32445);

return statearr_32444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___32445,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (2))){
var inst_32471 = (state_32474[(2)]);
var inst_32472 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32474__$1 = (function (){var statearr_32476 = state_32474;
(statearr_32476[(7)] = inst_32471);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32474__$1,inst_32472);
} else {
if((state_val_32475 === (1))){
var inst_32469 = cljs.core.async.timeout.call(null,(3000));
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32474__$1,(2),inst_32469);
} else {
return null;
}
}
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____0 = (function (){
var statearr_32480 = [null,null,null,null,null,null,null,null];
(statearr_32480[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__);

(statearr_32480[(1)] = (1));

return statearr_32480;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____1 = (function (state_32474){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object)){
var ex__21797__auto__ = e32481;
var statearr_32482_32484 = state_32474;
(statearr_32482_32484[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32485 = state_32474;
state_32474 = G__32485;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21794__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_32483 = f__21856__auto__.call(null);
(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32486){
var map__32492 = p__32486;
var map__32492__$1 = ((cljs.core.seq_QMARK_.call(null,map__32492))?cljs.core.apply.call(null,cljs.core.hash_map,map__32492):map__32492);
var ed = map__32492__$1;
var cause = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32493_32497 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32494_32498 = null;
var count__32495_32499 = (0);
var i__32496_32500 = (0);
while(true){
if((i__32496_32500 < count__32495_32499)){
var msg_32501 = cljs.core._nth.call(null,chunk__32494_32498,i__32496_32500);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32501);

var G__32502 = seq__32493_32497;
var G__32503 = chunk__32494_32498;
var G__32504 = count__32495_32499;
var G__32505 = (i__32496_32500 + (1));
seq__32493_32497 = G__32502;
chunk__32494_32498 = G__32503;
count__32495_32499 = G__32504;
i__32496_32500 = G__32505;
continue;
} else {
var temp__4126__auto___32506 = cljs.core.seq.call(null,seq__32493_32497);
if(temp__4126__auto___32506){
var seq__32493_32507__$1 = temp__4126__auto___32506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32493_32507__$1)){
var c__18699__auto___32508 = cljs.core.chunk_first.call(null,seq__32493_32507__$1);
var G__32509 = cljs.core.chunk_rest.call(null,seq__32493_32507__$1);
var G__32510 = c__18699__auto___32508;
var G__32511 = cljs.core.count.call(null,c__18699__auto___32508);
var G__32512 = (0);
seq__32493_32497 = G__32509;
chunk__32494_32498 = G__32510;
count__32495_32499 = G__32511;
i__32496_32500 = G__32512;
continue;
} else {
var msg_32513 = cljs.core.first.call(null,seq__32493_32507__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32513);

var G__32514 = cljs.core.next.call(null,seq__32493_32507__$1);
var G__32515 = null;
var G__32516 = (0);
var G__32517 = (0);
seq__32493_32497 = G__32514;
chunk__32494_32498 = G__32515;
count__32495_32499 = G__32516;
i__32496_32500 = G__32517;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32518){
var map__32520 = p__32518;
var map__32520__$1 = ((cljs.core.seq_QMARK_.call(null,map__32520))?cljs.core.apply.call(null,cljs.core.hash_map,map__32520):map__32520);
var w = map__32520__$1;
var message = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17902__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17902__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17902__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32527 = cljs.core.seq.call(null,plugins);
var chunk__32528 = null;
var count__32529 = (0);
var i__32530 = (0);
while(true){
if((i__32530 < count__32529)){
var vec__32531 = cljs.core._nth.call(null,chunk__32528,i__32530);
var k = cljs.core.nth.call(null,vec__32531,(0),null);
var plugin = cljs.core.nth.call(null,vec__32531,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32527,chunk__32528,count__32529,i__32530,pl_32533,vec__32531,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32533.call(null,msg_hist);
});})(seq__32527,chunk__32528,count__32529,i__32530,pl_32533,vec__32531,k,plugin))
);
} else {
}

var G__32534 = seq__32527;
var G__32535 = chunk__32528;
var G__32536 = count__32529;
var G__32537 = (i__32530 + (1));
seq__32527 = G__32534;
chunk__32528 = G__32535;
count__32529 = G__32536;
i__32530 = G__32537;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32527);
if(temp__4126__auto__){
var seq__32527__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32527__$1)){
var c__18699__auto__ = cljs.core.chunk_first.call(null,seq__32527__$1);
var G__32538 = cljs.core.chunk_rest.call(null,seq__32527__$1);
var G__32539 = c__18699__auto__;
var G__32540 = cljs.core.count.call(null,c__18699__auto__);
var G__32541 = (0);
seq__32527 = G__32538;
chunk__32528 = G__32539;
count__32529 = G__32540;
i__32530 = G__32541;
continue;
} else {
var vec__32532 = cljs.core.first.call(null,seq__32527__$1);
var k = cljs.core.nth.call(null,vec__32532,(0),null);
var plugin = cljs.core.nth.call(null,vec__32532,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32527,chunk__32528,count__32529,i__32530,pl_32542,vec__32532,k,plugin,seq__32527__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32542.call(null,msg_hist);
});})(seq__32527,chunk__32528,count__32529,i__32530,pl_32542,vec__32532,k,plugin,seq__32527__$1,temp__4126__auto__))
);
} else {
}

var G__32543 = cljs.core.next.call(null,seq__32527__$1);
var G__32544 = null;
var G__32545 = (0);
var G__32546 = (0);
seq__32527 = G__32543;
chunk__32528 = G__32544;
count__32529 = G__32545;
i__32530 = G__32546;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__32548 = arguments.length;
switch (G__32548) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__18954__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18954__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32551){
var map__32552 = p__32551;
var map__32552__$1 = ((cljs.core.seq_QMARK_.call(null,map__32552))?cljs.core.apply.call(null,cljs.core.hash_map,map__32552):map__32552);
var opts = map__32552__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32550){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32550));
});

//# sourceMappingURL=client.js.map?rel=1443334747990