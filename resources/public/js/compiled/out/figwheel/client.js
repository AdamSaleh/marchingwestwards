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
var G__30004__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30005__i = 0, G__30005__a = new Array(arguments.length -  0);
while (G__30005__i < G__30005__a.length) {G__30005__a[G__30005__i] = arguments[G__30005__i + 0]; ++G__30005__i;}
  args = new cljs.core.IndexedSeq(G__30005__a,0);
} 
return G__30004__delegate.call(this,args);};
G__30004.cljs$lang$maxFixedArity = 0;
G__30004.cljs$lang$applyTo = (function (arglist__30006){
var args = cljs.core.seq(arglist__30006);
return G__30004__delegate(args);
});
G__30004.cljs$core$IFn$_invoke$arity$variadic = G__30004__delegate;
return G__30004;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30007){
var map__30009 = p__30007;
var map__30009__$1 = ((cljs.core.seq_QMARK_.call(null,map__30009))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);
var class$ = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18109__auto__;
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
var c__22016__auto___30138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___30138,ch){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___30138,ch){
return (function (state_30112){
var state_val_30113 = (state_30112[(1)]);
if((state_val_30113 === (7))){
var inst_30108 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30114_30139 = state_30112__$1;
(statearr_30114_30139[(2)] = inst_30108);

(statearr_30114_30139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (1))){
var state_30112__$1 = state_30112;
var statearr_30115_30140 = state_30112__$1;
(statearr_30115_30140[(2)] = null);

(statearr_30115_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (4))){
var inst_30076 = (state_30112[(7)]);
var inst_30076__$1 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30116 = state_30112;
(statearr_30116[(7)] = inst_30076__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30076__$1)){
var statearr_30117_30141 = state_30112__$1;
(statearr_30117_30141[(1)] = (5));

} else {
var statearr_30118_30142 = state_30112__$1;
(statearr_30118_30142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (13))){
var state_30112__$1 = state_30112;
var statearr_30119_30143 = state_30112__$1;
(statearr_30119_30143[(2)] = null);

(statearr_30119_30143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (6))){
var state_30112__$1 = state_30112;
var statearr_30120_30144 = state_30112__$1;
(statearr_30120_30144[(2)] = null);

(statearr_30120_30144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (3))){
var inst_30110 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else {
if((state_val_30113 === (12))){
var inst_30083 = (state_30112[(8)]);
var inst_30096 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30083);
var inst_30097 = cljs.core.first.call(null,inst_30096);
var inst_30098 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30097);
var inst_30099 = console.warn("Figwheel: Not loading code with warnings - ",inst_30098);
var state_30112__$1 = state_30112;
var statearr_30121_30145 = state_30112__$1;
(statearr_30121_30145[(2)] = inst_30099);

(statearr_30121_30145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (2))){
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(4),ch);
} else {
if((state_val_30113 === (11))){
var inst_30092 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30122_30146 = state_30112__$1;
(statearr_30122_30146[(2)] = inst_30092);

(statearr_30122_30146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (9))){
var inst_30082 = (state_30112[(9)]);
var inst_30094 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30082,opts);
var state_30112__$1 = state_30112;
if(cljs.core.truth_(inst_30094)){
var statearr_30123_30147 = state_30112__$1;
(statearr_30123_30147[(1)] = (12));

} else {
var statearr_30124_30148 = state_30112__$1;
(statearr_30124_30148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (5))){
var inst_30082 = (state_30112[(9)]);
var inst_30076 = (state_30112[(7)]);
var inst_30078 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30079 = (new cljs.core.PersistentArrayMap(null,2,inst_30078,null));
var inst_30080 = (new cljs.core.PersistentHashSet(null,inst_30079,null));
var inst_30081 = figwheel.client.focus_msgs.call(null,inst_30080,inst_30076);
var inst_30082__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30081);
var inst_30083 = cljs.core.first.call(null,inst_30081);
var inst_30084 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30082__$1,opts);
var state_30112__$1 = (function (){var statearr_30125 = state_30112;
(statearr_30125[(8)] = inst_30083);

(statearr_30125[(9)] = inst_30082__$1);

return statearr_30125;
})();
if(cljs.core.truth_(inst_30084)){
var statearr_30126_30149 = state_30112__$1;
(statearr_30126_30149[(1)] = (8));

} else {
var statearr_30127_30150 = state_30112__$1;
(statearr_30127_30150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (14))){
var inst_30102 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30128_30151 = state_30112__$1;
(statearr_30128_30151[(2)] = inst_30102);

(statearr_30128_30151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (10))){
var inst_30104 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30129 = state_30112;
(statearr_30129[(10)] = inst_30104);

return statearr_30129;
})();
var statearr_30130_30152 = state_30112__$1;
(statearr_30130_30152[(2)] = null);

(statearr_30130_30152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (8))){
var inst_30083 = (state_30112[(8)]);
var inst_30086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30087 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30083);
var inst_30088 = cljs.core.async.timeout.call(null,(1000));
var inst_30089 = [inst_30087,inst_30088];
var inst_30090 = (new cljs.core.PersistentVector(null,2,(5),inst_30086,inst_30089,null));
var state_30112__$1 = state_30112;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30112__$1,(11),inst_30090);
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
});})(c__22016__auto___30138,ch))
;
return ((function (switch__21954__auto__,c__22016__auto___30138,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____0 = (function (){
var statearr_30134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30134[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__);

(statearr_30134[(1)] = (1));

return statearr_30134;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____1 = (function (state_30112){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_30112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e30135){if((e30135 instanceof Object)){
var ex__21958__auto__ = e30135;
var statearr_30136_30153 = state_30112;
(statearr_30136_30153[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30112;
state_30112 = G__30154;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21955__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___30138,ch))
})();
var state__22018__auto__ = (function (){var statearr_30137 = f__22017__auto__.call(null);
(statearr_30137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___30138);

return statearr_30137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___30138,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30155_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30155_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30162 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30162){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30161 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30160,_STAR_print_newline_STAR_30161,base_path_30162){
return (function() { 
var G__30163__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30164__i = 0, G__30164__a = new Array(arguments.length -  0);
while (G__30164__i < G__30164__a.length) {G__30164__a[G__30164__i] = arguments[G__30164__i + 0]; ++G__30164__i;}
  args = new cljs.core.IndexedSeq(G__30164__a,0);
} 
return G__30163__delegate.call(this,args);};
G__30163.cljs$lang$maxFixedArity = 0;
G__30163.cljs$lang$applyTo = (function (arglist__30165){
var args = cljs.core.seq(arglist__30165);
return G__30163__delegate(args);
});
G__30163.cljs$core$IFn$_invoke$arity$variadic = G__30163__delegate;
return G__30163;
})()
;})(_STAR_print_fn_STAR_30160,_STAR_print_newline_STAR_30161,base_path_30162))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30161;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30160;
}}catch (e30159){if((e30159 instanceof Error)){
var e = e30159;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30162], null));
} else {
var e = e30159;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30162))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30166){
var map__30171 = p__30166;
var map__30171__$1 = ((cljs.core.seq_QMARK_.call(null,map__30171))?cljs.core.apply.call(null,cljs.core.hash_map,map__30171):map__30171);
var opts = map__30171__$1;
var build_id = cljs.core.get.call(null,map__30171__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30171,map__30171__$1,opts,build_id){
return (function (p__30172){
var vec__30173 = p__30172;
var map__30174 = cljs.core.nth.call(null,vec__30173,(0),null);
var map__30174__$1 = ((cljs.core.seq_QMARK_.call(null,map__30174))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);
var msg = map__30174__$1;
var msg_name = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30173,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30173,map__30174,map__30174__$1,msg,msg_name,_,map__30171,map__30171__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30173,map__30174,map__30174__$1,msg,msg_name,_,map__30171,map__30171__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30171,map__30171__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30178){
var vec__30179 = p__30178;
var map__30180 = cljs.core.nth.call(null,vec__30179,(0),null);
var map__30180__$1 = ((cljs.core.seq_QMARK_.call(null,map__30180))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);
var msg = map__30180__$1;
var msg_name = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30179,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30181){
var map__30189 = p__30181;
var map__30189__$1 = ((cljs.core.seq_QMARK_.call(null,map__30189))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);
var on_compile_fail = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30189,map__30189__$1,on_compile_fail,on_compile_warning){
return (function (p__30190){
var vec__30191 = p__30190;
var map__30192 = cljs.core.nth.call(null,vec__30191,(0),null);
var map__30192__$1 = ((cljs.core.seq_QMARK_.call(null,map__30192))?cljs.core.apply.call(null,cljs.core.hash_map,map__30192):map__30192);
var msg = map__30192__$1;
var msg_name = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30191,(1));
var pred__30193 = cljs.core._EQ_;
var expr__30194 = msg_name;
if(cljs.core.truth_(pred__30193.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30194))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30193.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30194))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30189,map__30189__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__,msg_hist,msg_names,msg){
return (function (state_30395){
var state_val_30396 = (state_30395[(1)]);
if((state_val_30396 === (7))){
var inst_30329 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30397_30438 = state_30395__$1;
(statearr_30397_30438[(2)] = inst_30329);

(statearr_30397_30438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (20))){
var inst_30357 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30357)){
var statearr_30398_30439 = state_30395__$1;
(statearr_30398_30439[(1)] = (22));

} else {
var statearr_30399_30440 = state_30395__$1;
(statearr_30399_30440[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (27))){
var inst_30369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30370 = figwheel.client.heads_up.display_warning.call(null,inst_30369);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(30),inst_30370);
} else {
if((state_val_30396 === (1))){
var inst_30317 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30317)){
var statearr_30400_30441 = state_30395__$1;
(statearr_30400_30441[(1)] = (2));

} else {
var statearr_30401_30442 = state_30395__$1;
(statearr_30401_30442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (24))){
var inst_30385 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30402_30443 = state_30395__$1;
(statearr_30402_30443[(2)] = inst_30385);

(statearr_30402_30443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (4))){
var inst_30393 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30395__$1,inst_30393);
} else {
if((state_val_30396 === (15))){
var inst_30345 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30346 = figwheel.client.format_messages.call(null,inst_30345);
var inst_30347 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30348 = figwheel.client.heads_up.display_error.call(null,inst_30346,inst_30347);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(18),inst_30348);
} else {
if((state_val_30396 === (21))){
var inst_30387 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30403_30444 = state_30395__$1;
(statearr_30403_30444[(2)] = inst_30387);

(statearr_30403_30444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (31))){
var inst_30376 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(34),inst_30376);
} else {
if((state_val_30396 === (32))){
var state_30395__$1 = state_30395;
var statearr_30404_30445 = state_30395__$1;
(statearr_30404_30445[(2)] = null);

(statearr_30404_30445[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (33))){
var inst_30381 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30405_30446 = state_30395__$1;
(statearr_30405_30446[(2)] = inst_30381);

(statearr_30405_30446[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (13))){
var inst_30335 = (state_30395[(2)]);
var inst_30336 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30337 = figwheel.client.format_messages.call(null,inst_30336);
var inst_30338 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30339 = figwheel.client.heads_up.display_error.call(null,inst_30337,inst_30338);
var state_30395__$1 = (function (){var statearr_30406 = state_30395;
(statearr_30406[(7)] = inst_30335);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(14),inst_30339);
} else {
if((state_val_30396 === (22))){
var inst_30359 = figwheel.client.heads_up.clear.call(null);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(25),inst_30359);
} else {
if((state_val_30396 === (29))){
var inst_30383 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30407_30447 = state_30395__$1;
(statearr_30407_30447[(2)] = inst_30383);

(statearr_30407_30447[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (6))){
var inst_30325 = figwheel.client.heads_up.clear.call(null);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(9),inst_30325);
} else {
if((state_val_30396 === (28))){
var inst_30374 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30374)){
var statearr_30408_30448 = state_30395__$1;
(statearr_30408_30448[(1)] = (31));

} else {
var statearr_30409_30449 = state_30395__$1;
(statearr_30409_30449[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (25))){
var inst_30361 = (state_30395[(2)]);
var inst_30362 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30363 = figwheel.client.heads_up.display_warning.call(null,inst_30362);
var state_30395__$1 = (function (){var statearr_30410 = state_30395;
(statearr_30410[(8)] = inst_30361);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(26),inst_30363);
} else {
if((state_val_30396 === (34))){
var inst_30378 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30411_30450 = state_30395__$1;
(statearr_30411_30450[(2)] = inst_30378);

(statearr_30411_30450[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (17))){
var inst_30389 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30412_30451 = state_30395__$1;
(statearr_30412_30451[(2)] = inst_30389);

(statearr_30412_30451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (3))){
var inst_30331 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30331)){
var statearr_30413_30452 = state_30395__$1;
(statearr_30413_30452[(1)] = (10));

} else {
var statearr_30414_30453 = state_30395__$1;
(statearr_30414_30453[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (12))){
var inst_30391 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30415_30454 = state_30395__$1;
(statearr_30415_30454[(2)] = inst_30391);

(statearr_30415_30454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (2))){
var inst_30319 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30319)){
var statearr_30416_30455 = state_30395__$1;
(statearr_30416_30455[(1)] = (5));

} else {
var statearr_30417_30456 = state_30395__$1;
(statearr_30417_30456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (23))){
var inst_30367 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30367)){
var statearr_30418_30457 = state_30395__$1;
(statearr_30418_30457[(1)] = (27));

} else {
var statearr_30419_30458 = state_30395__$1;
(statearr_30419_30458[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (19))){
var inst_30354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30355 = figwheel.client.heads_up.append_message.call(null,inst_30354);
var state_30395__$1 = state_30395;
var statearr_30420_30459 = state_30395__$1;
(statearr_30420_30459[(2)] = inst_30355);

(statearr_30420_30459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (11))){
var inst_30343 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30343)){
var statearr_30421_30460 = state_30395__$1;
(statearr_30421_30460[(1)] = (15));

} else {
var statearr_30422_30461 = state_30395__$1;
(statearr_30422_30461[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (9))){
var inst_30327 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30423_30462 = state_30395__$1;
(statearr_30423_30462[(2)] = inst_30327);

(statearr_30423_30462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (5))){
var inst_30321 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(8),inst_30321);
} else {
if((state_val_30396 === (14))){
var inst_30341 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30424_30463 = state_30395__$1;
(statearr_30424_30463[(2)] = inst_30341);

(statearr_30424_30463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (26))){
var inst_30365 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30425_30464 = state_30395__$1;
(statearr_30425_30464[(2)] = inst_30365);

(statearr_30425_30464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (16))){
var inst_30352 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30395__$1 = state_30395;
if(cljs.core.truth_(inst_30352)){
var statearr_30426_30465 = state_30395__$1;
(statearr_30426_30465[(1)] = (19));

} else {
var statearr_30427_30466 = state_30395__$1;
(statearr_30427_30466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (30))){
var inst_30372 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30428_30467 = state_30395__$1;
(statearr_30428_30467[(2)] = inst_30372);

(statearr_30428_30467[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (10))){
var inst_30333 = figwheel.client.heads_up.clear.call(null);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(13),inst_30333);
} else {
if((state_val_30396 === (18))){
var inst_30350 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30429_30468 = state_30395__$1;
(statearr_30429_30468[(2)] = inst_30350);

(statearr_30429_30468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30396 === (8))){
var inst_30323 = (state_30395[(2)]);
var state_30395__$1 = state_30395;
var statearr_30430_30469 = state_30395__$1;
(statearr_30430_30469[(2)] = inst_30323);

(statearr_30430_30469[(1)] = (7));


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
});})(c__22016__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21954__auto__,c__22016__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____0 = (function (){
var statearr_30434 = [null,null,null,null,null,null,null,null,null];
(statearr_30434[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__);

(statearr_30434[(1)] = (1));

return statearr_30434;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____1 = (function (state_30395){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_30395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e30435){if((e30435 instanceof Object)){
var ex__21958__auto__ = e30435;
var statearr_30436_30470 = state_30395;
(statearr_30436_30470[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30471 = state_30395;
state_30395 = G__30471;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__ = function(state_30395){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____1.call(this,state_30395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__,msg_hist,msg_names,msg))
})();
var state__22018__auto__ = (function (){var statearr_30437 = f__22017__auto__.call(null);
(statearr_30437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_30437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__,msg_hist,msg_names,msg))
);

return c__22016__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22016__auto___30534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___30534,ch){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___30534,ch){
return (function (state_30517){
var state_val_30518 = (state_30517[(1)]);
if((state_val_30518 === (8))){
var inst_30509 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30519 = state_30517;
(statearr_30519[(7)] = inst_30509);

return statearr_30519;
})();
var statearr_30520_30535 = state_30517__$1;
(statearr_30520_30535[(2)] = null);

(statearr_30520_30535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (7))){
var inst_30513 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
var statearr_30521_30536 = state_30517__$1;
(statearr_30521_30536[(2)] = inst_30513);

(statearr_30521_30536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (6))){
var state_30517__$1 = state_30517;
var statearr_30522_30537 = state_30517__$1;
(statearr_30522_30537[(2)] = null);

(statearr_30522_30537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (5))){
var inst_30505 = (state_30517[(8)]);
var inst_30507 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30505);
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30517__$1,(8),inst_30507);
} else {
if((state_val_30518 === (4))){
var inst_30505 = (state_30517[(8)]);
var inst_30505__$1 = (state_30517[(2)]);
var state_30517__$1 = (function (){var statearr_30523 = state_30517;
(statearr_30523[(8)] = inst_30505__$1);

return statearr_30523;
})();
if(cljs.core.truth_(inst_30505__$1)){
var statearr_30524_30538 = state_30517__$1;
(statearr_30524_30538[(1)] = (5));

} else {
var statearr_30525_30539 = state_30517__$1;
(statearr_30525_30539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30518 === (3))){
var inst_30515 = (state_30517[(2)]);
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30517__$1,inst_30515);
} else {
if((state_val_30518 === (2))){
var state_30517__$1 = state_30517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30517__$1,(4),ch);
} else {
if((state_val_30518 === (1))){
var state_30517__$1 = state_30517;
var statearr_30526_30540 = state_30517__$1;
(statearr_30526_30540[(2)] = null);

(statearr_30526_30540[(1)] = (2));


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
});})(c__22016__auto___30534,ch))
;
return ((function (switch__21954__auto__,c__22016__auto___30534,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21955__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21955__auto____0 = (function (){
var statearr_30530 = [null,null,null,null,null,null,null,null,null];
(statearr_30530[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21955__auto__);

(statearr_30530[(1)] = (1));

return statearr_30530;
});
var figwheel$client$heads_up_plugin_$_state_machine__21955__auto____1 = (function (state_30517){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_30517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e30531){if((e30531 instanceof Object)){
var ex__21958__auto__ = e30531;
var statearr_30532_30541 = state_30517;
(statearr_30532_30541[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30542 = state_30517;
state_30517 = G__30542;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21955__auto__ = function(state_30517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21955__auto____1.call(this,state_30517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21955__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21955__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___30534,ch))
})();
var state__22018__auto__ = (function (){var statearr_30533 = f__22017__auto__.call(null);
(statearr_30533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___30534);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___30534,ch))
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
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__){
return (function (state_30563){
var state_val_30564 = (state_30563[(1)]);
if((state_val_30564 === (2))){
var inst_30560 = (state_30563[(2)]);
var inst_30561 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30563__$1 = (function (){var statearr_30565 = state_30563;
(statearr_30565[(7)] = inst_30560);

return statearr_30565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30563__$1,inst_30561);
} else {
if((state_val_30564 === (1))){
var inst_30558 = cljs.core.async.timeout.call(null,(3000));
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30563__$1,(2),inst_30558);
} else {
return null;
}
}
});})(c__22016__auto__))
;
return ((function (switch__21954__auto__,c__22016__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null,null];
(statearr_30569[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____1 = (function (state_30563){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_30563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e30570){if((e30570 instanceof Object)){
var ex__21958__auto__ = e30570;
var statearr_30571_30573 = state_30563;
(statearr_30571_30573[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30574 = state_30563;
state_30563 = G__30574;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__ = function(state_30563){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____1.call(this,state_30563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21955__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__))
})();
var state__22018__auto__ = (function (){var statearr_30572 = f__22017__auto__.call(null);
(statearr_30572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__))
);

return c__22016__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30575){
var map__30581 = p__30575;
var map__30581__$1 = ((cljs.core.seq_QMARK_.call(null,map__30581))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var ed = map__30581__$1;
var cause = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30582_30586 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30583_30587 = null;
var count__30584_30588 = (0);
var i__30585_30589 = (0);
while(true){
if((i__30585_30589 < count__30584_30588)){
var msg_30590 = cljs.core._nth.call(null,chunk__30583_30587,i__30585_30589);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30590);

var G__30591 = seq__30582_30586;
var G__30592 = chunk__30583_30587;
var G__30593 = count__30584_30588;
var G__30594 = (i__30585_30589 + (1));
seq__30582_30586 = G__30591;
chunk__30583_30587 = G__30592;
count__30584_30588 = G__30593;
i__30585_30589 = G__30594;
continue;
} else {
var temp__4126__auto___30595 = cljs.core.seq.call(null,seq__30582_30586);
if(temp__4126__auto___30595){
var seq__30582_30596__$1 = temp__4126__auto___30595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30582_30596__$1)){
var c__18906__auto___30597 = cljs.core.chunk_first.call(null,seq__30582_30596__$1);
var G__30598 = cljs.core.chunk_rest.call(null,seq__30582_30596__$1);
var G__30599 = c__18906__auto___30597;
var G__30600 = cljs.core.count.call(null,c__18906__auto___30597);
var G__30601 = (0);
seq__30582_30586 = G__30598;
chunk__30583_30587 = G__30599;
count__30584_30588 = G__30600;
i__30585_30589 = G__30601;
continue;
} else {
var msg_30602 = cljs.core.first.call(null,seq__30582_30596__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30602);

var G__30603 = cljs.core.next.call(null,seq__30582_30596__$1);
var G__30604 = null;
var G__30605 = (0);
var G__30606 = (0);
seq__30582_30586 = G__30603;
chunk__30583_30587 = G__30604;
count__30584_30588 = G__30605;
i__30585_30589 = G__30606;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30607){
var map__30609 = p__30607;
var map__30609__$1 = ((cljs.core.seq_QMARK_.call(null,map__30609))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var w = map__30609__$1;
var message = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30616 = cljs.core.seq.call(null,plugins);
var chunk__30617 = null;
var count__30618 = (0);
var i__30619 = (0);
while(true){
if((i__30619 < count__30618)){
var vec__30620 = cljs.core._nth.call(null,chunk__30617,i__30619);
var k = cljs.core.nth.call(null,vec__30620,(0),null);
var plugin = cljs.core.nth.call(null,vec__30620,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30622 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30616,chunk__30617,count__30618,i__30619,pl_30622,vec__30620,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30622.call(null,msg_hist);
});})(seq__30616,chunk__30617,count__30618,i__30619,pl_30622,vec__30620,k,plugin))
);
} else {
}

var G__30623 = seq__30616;
var G__30624 = chunk__30617;
var G__30625 = count__30618;
var G__30626 = (i__30619 + (1));
seq__30616 = G__30623;
chunk__30617 = G__30624;
count__30618 = G__30625;
i__30619 = G__30626;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30616);
if(temp__4126__auto__){
var seq__30616__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30616__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__30616__$1);
var G__30627 = cljs.core.chunk_rest.call(null,seq__30616__$1);
var G__30628 = c__18906__auto__;
var G__30629 = cljs.core.count.call(null,c__18906__auto__);
var G__30630 = (0);
seq__30616 = G__30627;
chunk__30617 = G__30628;
count__30618 = G__30629;
i__30619 = G__30630;
continue;
} else {
var vec__30621 = cljs.core.first.call(null,seq__30616__$1);
var k = cljs.core.nth.call(null,vec__30621,(0),null);
var plugin = cljs.core.nth.call(null,vec__30621,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30631 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30616,chunk__30617,count__30618,i__30619,pl_30631,vec__30621,k,plugin,seq__30616__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30631.call(null,msg_hist);
});})(seq__30616,chunk__30617,count__30618,i__30619,pl_30631,vec__30621,k,plugin,seq__30616__$1,temp__4126__auto__))
);
} else {
}

var G__30632 = cljs.core.next.call(null,seq__30616__$1);
var G__30633 = null;
var G__30634 = (0);
var G__30635 = (0);
seq__30616 = G__30632;
chunk__30617 = G__30633;
count__30618 = G__30634;
i__30619 = G__30635;
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
var G__30637 = arguments.length;
switch (G__30637) {
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
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30640){
var map__30641 = p__30640;
var map__30641__$1 = ((cljs.core.seq_QMARK_.call(null,map__30641))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var opts = map__30641__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30639){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30639));
});

//# sourceMappingURL=client.js.map?rel=1439021446060