// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31058_SHARP_,p2__31059_SHARP_){
var and__18109__auto__ = p1__31058_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__31059_SHARP_;
} else {
return and__18109__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18121__auto__){
return or__18121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18121__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18121__auto__){
return or__18121__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18121__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31060){
var map__31061 = p__31060;
var map__31061__$1 = ((cljs.core.seq_QMARK_.call(null,map__31061))?cljs.core.apply.call(null,cljs.core.hash_map,map__31061):map__31061);
var file = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31062){
var map__31063 = p__31062;
var map__31063__$1 = ((cljs.core.seq_QMARK_.call(null,map__31063))?cljs.core.apply.call(null,cljs.core.hash_map,map__31063):map__31063);
var namespace = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31064){if((e31064 instanceof Error)){
var e = e31064;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31064;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31066 = arguments.length;
switch (G__31066) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31068,callback){
var map__31070 = p__31068;
var map__31070__$1 = ((cljs.core.seq_QMARK_.call(null,map__31070))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);
var file_msg = map__31070__$1;
var request_url = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31070,map__31070__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31070,map__31070__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31071){
var map__31073 = p__31071;
var map__31073__$1 = ((cljs.core.seq_QMARK_.call(null,map__31073))?cljs.core.apply.call(null,cljs.core.hash_map,map__31073):map__31073);
var file_msg = map__31073__$1;
var meta_data = cljs.core.get.call(null,map__31073__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31073__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18121__auto__ = meta_data;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18109__auto__){
var or__18121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto____$1)){
return or__18121__auto____$1;
} else {
var and__18109__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18109__auto____$1){
var or__18121__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18121__auto____$2){
return or__18121__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18109__auto____$1;
}
}
}
} else {
return and__18109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31074,callback){
var map__31076 = p__31074;
var map__31076__$1 = ((cljs.core.seq_QMARK_.call(null,map__31076))?cljs.core.apply.call(null,cljs.core.hash_map,map__31076):map__31076);
var file_msg = map__31076__$1;
var namespace = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22016__auto___31163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___31163,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___31163,out){
return (function (state_31145){
var state_val_31146 = (state_31145[(1)]);
if((state_val_31146 === (7))){
var inst_31129 = (state_31145[(7)]);
var inst_31135 = (state_31145[(2)]);
var inst_31136 = cljs.core.async.put_BANG_.call(null,out,inst_31135);
var inst_31125 = inst_31129;
var state_31145__$1 = (function (){var statearr_31147 = state_31145;
(statearr_31147[(8)] = inst_31136);

(statearr_31147[(9)] = inst_31125);

return statearr_31147;
})();
var statearr_31148_31164 = state_31145__$1;
(statearr_31148_31164[(2)] = null);

(statearr_31148_31164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31146 === (6))){
var inst_31141 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
var statearr_31149_31165 = state_31145__$1;
(statearr_31149_31165[(2)] = inst_31141);

(statearr_31149_31165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31146 === (5))){
var inst_31139 = cljs.core.async.close_BANG_.call(null,out);
var state_31145__$1 = state_31145;
var statearr_31150_31166 = state_31145__$1;
(statearr_31150_31166[(2)] = inst_31139);

(statearr_31150_31166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31146 === (4))){
var inst_31128 = (state_31145[(10)]);
var inst_31133 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31128);
var state_31145__$1 = state_31145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31145__$1,(7),inst_31133);
} else {
if((state_val_31146 === (3))){
var inst_31143 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31145__$1,inst_31143);
} else {
if((state_val_31146 === (2))){
var inst_31128 = (state_31145[(10)]);
var inst_31125 = (state_31145[(9)]);
var inst_31128__$1 = cljs.core.nth.call(null,inst_31125,(0),null);
var inst_31129 = cljs.core.nthnext.call(null,inst_31125,(1));
var inst_31130 = (inst_31128__$1 == null);
var inst_31131 = cljs.core.not.call(null,inst_31130);
var state_31145__$1 = (function (){var statearr_31151 = state_31145;
(statearr_31151[(7)] = inst_31129);

(statearr_31151[(10)] = inst_31128__$1);

return statearr_31151;
})();
if(inst_31131){
var statearr_31152_31167 = state_31145__$1;
(statearr_31152_31167[(1)] = (4));

} else {
var statearr_31153_31168 = state_31145__$1;
(statearr_31153_31168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31146 === (1))){
var inst_31123 = cljs.core.nth.call(null,files,(0),null);
var inst_31124 = cljs.core.nthnext.call(null,files,(1));
var inst_31125 = files;
var state_31145__$1 = (function (){var statearr_31154 = state_31145;
(statearr_31154[(11)] = inst_31124);

(statearr_31154[(12)] = inst_31123);

(statearr_31154[(9)] = inst_31125);

return statearr_31154;
})();
var statearr_31155_31169 = state_31145__$1;
(statearr_31155_31169[(2)] = null);

(statearr_31155_31169[(1)] = (2));


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
});})(c__22016__auto___31163,out))
;
return ((function (switch__21954__auto__,c__22016__auto___31163,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____1 = (function (state_31145){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_31145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__21958__auto__ = e31160;
var statearr_31161_31170 = state_31145;
(statearr_31161_31170[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_31145;
state_31145 = G__31171;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__ = function(state_31145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____1.call(this,state_31145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___31163,out))
})();
var state__22018__auto__ = (function (){var statearr_31162 = f__22017__auto__.call(null);
(statearr_31162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___31163);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___31163,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31172,p__31173){
var map__31176 = p__31172;
var map__31176__$1 = ((cljs.core.seq_QMARK_.call(null,map__31176))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var opts = map__31176__$1;
var url_rewriter = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31177 = p__31173;
var map__31177__$1 = ((cljs.core.seq_QMARK_.call(null,map__31177))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);
var file_msg = map__31177__$1;
var file = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31178){
var map__31181 = p__31178;
var map__31181__$1 = ((cljs.core.seq_QMARK_.call(null,map__31181))?cljs.core.apply.call(null,cljs.core.hash_map,map__31181):map__31181);
var file = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18109__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18109__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18109__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31182){var e = e31182;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31187,p__31188){
var map__31390 = p__31187;
var map__31390__$1 = ((cljs.core.seq_QMARK_.call(null,map__31390))?cljs.core.apply.call(null,cljs.core.hash_map,map__31390):map__31390);
var opts = map__31390__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31390__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31390__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31390__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31391 = p__31188;
var map__31391__$1 = ((cljs.core.seq_QMARK_.call(null,map__31391))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);
var msg = map__31391__$1;
var files = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (7))){
var inst_31406 = (state_31516[(7)]);
var inst_31404 = (state_31516[(8)]);
var inst_31405 = (state_31516[(9)]);
var inst_31403 = (state_31516[(10)]);
var inst_31411 = cljs.core._nth.call(null,inst_31404,inst_31406);
var inst_31412 = figwheel.client.file_reloading.eval_body.call(null,inst_31411);
var inst_31413 = (inst_31406 + (1));
var tmp31518 = inst_31404;
var tmp31519 = inst_31405;
var tmp31520 = inst_31403;
var inst_31403__$1 = tmp31520;
var inst_31404__$1 = tmp31518;
var inst_31405__$1 = tmp31519;
var inst_31406__$1 = inst_31413;
var state_31516__$1 = (function (){var statearr_31521 = state_31516;
(statearr_31521[(7)] = inst_31406__$1);

(statearr_31521[(8)] = inst_31404__$1);

(statearr_31521[(9)] = inst_31405__$1);

(statearr_31521[(10)] = inst_31403__$1);

(statearr_31521[(11)] = inst_31412);

return statearr_31521;
})();
var statearr_31522_31591 = state_31516__$1;
(statearr_31522_31591[(2)] = null);

(statearr_31522_31591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (20))){
var inst_31453 = (state_31516[(12)]);
var inst_31448 = (state_31516[(13)]);
var inst_31449 = (state_31516[(14)]);
var inst_31455 = (state_31516[(15)]);
var inst_31452 = (state_31516[(16)]);
var inst_31458 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31460 = (function (){var files_not_loaded = inst_31455;
var res = inst_31453;
var res_SINGLEQUOTE_ = inst_31452;
var files_SINGLEQUOTE_ = inst_31449;
var all_files = inst_31448;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31455,inst_31452,inst_31458,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p__31459){
var map__31523 = p__31459;
var map__31523__$1 = ((cljs.core.seq_QMARK_.call(null,map__31523))?cljs.core.apply.call(null,cljs.core.hash_map,map__31523):map__31523);
var file = cljs.core.get.call(null,map__31523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31455,inst_31452,inst_31458,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31461 = cljs.core.map.call(null,inst_31460,inst_31453);
var inst_31462 = cljs.core.pr_str.call(null,inst_31461);
var inst_31463 = figwheel.client.utils.log.call(null,inst_31462);
var inst_31464 = (function (){var files_not_loaded = inst_31455;
var res = inst_31453;
var res_SINGLEQUOTE_ = inst_31452;
var files_SINGLEQUOTE_ = inst_31449;
var all_files = inst_31448;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31455,inst_31452,inst_31458,inst_31460,inst_31461,inst_31462,inst_31463,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31455,inst_31452,inst_31458,inst_31460,inst_31461,inst_31462,inst_31463,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31465 = setTimeout(inst_31464,(10));
var state_31516__$1 = (function (){var statearr_31524 = state_31516;
(statearr_31524[(17)] = inst_31458);

(statearr_31524[(18)] = inst_31463);

return statearr_31524;
})();
var statearr_31525_31592 = state_31516__$1;
(statearr_31525_31592[(2)] = inst_31465);

(statearr_31525_31592[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (27))){
var inst_31475 = (state_31516[(19)]);
var state_31516__$1 = state_31516;
var statearr_31526_31593 = state_31516__$1;
(statearr_31526_31593[(2)] = inst_31475);

(statearr_31526_31593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (1))){
var inst_31395 = (state_31516[(20)]);
var inst_31392 = before_jsload.call(null,files);
var inst_31393 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31394 = (function (){return ((function (inst_31395,inst_31392,inst_31393,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p1__31183_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31183_SHARP_);
});
;})(inst_31395,inst_31392,inst_31393,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31395__$1 = cljs.core.filter.call(null,inst_31394,files);
var inst_31396 = cljs.core.not_empty.call(null,inst_31395__$1);
var state_31516__$1 = (function (){var statearr_31527 = state_31516;
(statearr_31527[(21)] = inst_31392);

(statearr_31527[(22)] = inst_31393);

(statearr_31527[(20)] = inst_31395__$1);

return statearr_31527;
})();
if(cljs.core.truth_(inst_31396)){
var statearr_31528_31594 = state_31516__$1;
(statearr_31528_31594[(1)] = (2));

} else {
var statearr_31529_31595 = state_31516__$1;
(statearr_31529_31595[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (24))){
var state_31516__$1 = state_31516;
var statearr_31530_31596 = state_31516__$1;
(statearr_31530_31596[(2)] = null);

(statearr_31530_31596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (4))){
var inst_31440 = (state_31516[(2)]);
var inst_31441 = (function (){return ((function (inst_31440,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p1__31184_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31184_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31184_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_31440,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31442 = cljs.core.filter.call(null,inst_31441,files);
var state_31516__$1 = (function (){var statearr_31531 = state_31516;
(statearr_31531[(23)] = inst_31440);

(statearr_31531[(24)] = inst_31442);

return statearr_31531;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31532_31597 = state_31516__$1;
(statearr_31532_31597[(1)] = (16));

} else {
var statearr_31533_31598 = state_31516__$1;
(statearr_31533_31598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (15))){
var inst_31430 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31534_31599 = state_31516__$1;
(statearr_31534_31599[(2)] = inst_31430);

(statearr_31534_31599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (21))){
var state_31516__$1 = state_31516;
var statearr_31535_31600 = state_31516__$1;
(statearr_31535_31600[(2)] = null);

(statearr_31535_31600[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (31))){
var inst_31483 = (state_31516[(25)]);
var inst_31493 = (state_31516[(2)]);
var inst_31494 = cljs.core.not_empty.call(null,inst_31483);
var state_31516__$1 = (function (){var statearr_31536 = state_31516;
(statearr_31536[(26)] = inst_31493);

return statearr_31536;
})();
if(cljs.core.truth_(inst_31494)){
var statearr_31537_31601 = state_31516__$1;
(statearr_31537_31601[(1)] = (32));

} else {
var statearr_31538_31602 = state_31516__$1;
(statearr_31538_31602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (32))){
var inst_31483 = (state_31516[(25)]);
var inst_31496 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31483);
var inst_31497 = cljs.core.pr_str.call(null,inst_31496);
var inst_31498 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31497)].join('');
var inst_31499 = figwheel.client.utils.log.call(null,inst_31498);
var state_31516__$1 = state_31516;
var statearr_31539_31603 = state_31516__$1;
(statearr_31539_31603[(2)] = inst_31499);

(statearr_31539_31603[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (33))){
var state_31516__$1 = state_31516;
var statearr_31540_31604 = state_31516__$1;
(statearr_31540_31604[(2)] = null);

(statearr_31540_31604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (13))){
var inst_31416 = (state_31516[(27)]);
var inst_31420 = cljs.core.chunk_first.call(null,inst_31416);
var inst_31421 = cljs.core.chunk_rest.call(null,inst_31416);
var inst_31422 = cljs.core.count.call(null,inst_31420);
var inst_31403 = inst_31421;
var inst_31404 = inst_31420;
var inst_31405 = inst_31422;
var inst_31406 = (0);
var state_31516__$1 = (function (){var statearr_31541 = state_31516;
(statearr_31541[(7)] = inst_31406);

(statearr_31541[(8)] = inst_31404);

(statearr_31541[(9)] = inst_31405);

(statearr_31541[(10)] = inst_31403);

return statearr_31541;
})();
var statearr_31542_31605 = state_31516__$1;
(statearr_31542_31605[(2)] = null);

(statearr_31542_31605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (22))){
var inst_31455 = (state_31516[(15)]);
var inst_31468 = (state_31516[(2)]);
var inst_31469 = cljs.core.not_empty.call(null,inst_31455);
var state_31516__$1 = (function (){var statearr_31543 = state_31516;
(statearr_31543[(28)] = inst_31468);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31544_31606 = state_31516__$1;
(statearr_31544_31606[(1)] = (23));

} else {
var statearr_31545_31607 = state_31516__$1;
(statearr_31545_31607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (36))){
var state_31516__$1 = state_31516;
var statearr_31546_31608 = state_31516__$1;
(statearr_31546_31608[(2)] = null);

(statearr_31546_31608[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (29))){
var inst_31484 = (state_31516[(29)]);
var inst_31487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31484);
var inst_31488 = cljs.core.pr_str.call(null,inst_31487);
var inst_31489 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31488)].join('');
var inst_31490 = figwheel.client.utils.log.call(null,inst_31489);
var state_31516__$1 = state_31516;
var statearr_31547_31609 = state_31516__$1;
(statearr_31547_31609[(2)] = inst_31490);

(statearr_31547_31609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (6))){
var inst_31437 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31548_31610 = state_31516__$1;
(statearr_31548_31610[(2)] = inst_31437);

(statearr_31548_31610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (28))){
var inst_31484 = (state_31516[(29)]);
var inst_31481 = (state_31516[(2)]);
var inst_31482 = cljs.core.get.call(null,inst_31481,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31483 = cljs.core.get.call(null,inst_31481,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31484__$1 = cljs.core.get.call(null,inst_31481,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31485 = cljs.core.not_empty.call(null,inst_31484__$1);
var state_31516__$1 = (function (){var statearr_31549 = state_31516;
(statearr_31549[(29)] = inst_31484__$1);

(statearr_31549[(25)] = inst_31483);

(statearr_31549[(30)] = inst_31482);

return statearr_31549;
})();
if(cljs.core.truth_(inst_31485)){
var statearr_31550_31611 = state_31516__$1;
(statearr_31550_31611[(1)] = (29));

} else {
var statearr_31551_31612 = state_31516__$1;
(statearr_31551_31612[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (25))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (34))){
var inst_31482 = (state_31516[(30)]);
var inst_31502 = (state_31516[(2)]);
var inst_31503 = cljs.core.not_empty.call(null,inst_31482);
var state_31516__$1 = (function (){var statearr_31552 = state_31516;
(statearr_31552[(31)] = inst_31502);

return statearr_31552;
})();
if(cljs.core.truth_(inst_31503)){
var statearr_31553_31613 = state_31516__$1;
(statearr_31553_31613[(1)] = (35));

} else {
var statearr_31554_31614 = state_31516__$1;
(statearr_31554_31614[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (17))){
var inst_31442 = (state_31516[(24)]);
var state_31516__$1 = state_31516;
var statearr_31555_31615 = state_31516__$1;
(statearr_31555_31615[(2)] = inst_31442);

(statearr_31555_31615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (3))){
var state_31516__$1 = state_31516;
var statearr_31556_31616 = state_31516__$1;
(statearr_31556_31616[(2)] = null);

(statearr_31556_31616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (12))){
var inst_31433 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31557_31617 = state_31516__$1;
(statearr_31557_31617[(2)] = inst_31433);

(statearr_31557_31617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (2))){
var inst_31395 = (state_31516[(20)]);
var inst_31402 = cljs.core.seq.call(null,inst_31395);
var inst_31403 = inst_31402;
var inst_31404 = null;
var inst_31405 = (0);
var inst_31406 = (0);
var state_31516__$1 = (function (){var statearr_31558 = state_31516;
(statearr_31558[(7)] = inst_31406);

(statearr_31558[(8)] = inst_31404);

(statearr_31558[(9)] = inst_31405);

(statearr_31558[(10)] = inst_31403);

return statearr_31558;
})();
var statearr_31559_31618 = state_31516__$1;
(statearr_31559_31618[(2)] = null);

(statearr_31559_31618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (23))){
var inst_31453 = (state_31516[(12)]);
var inst_31448 = (state_31516[(13)]);
var inst_31475 = (state_31516[(19)]);
var inst_31449 = (state_31516[(14)]);
var inst_31455 = (state_31516[(15)]);
var inst_31452 = (state_31516[(16)]);
var inst_31471 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31474 = (function (){var files_not_loaded = inst_31455;
var res = inst_31453;
var res_SINGLEQUOTE_ = inst_31452;
var files_SINGLEQUOTE_ = inst_31449;
var all_files = inst_31448;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31475,inst_31449,inst_31455,inst_31452,inst_31471,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p__31473){
var map__31560 = p__31473;
var map__31560__$1 = ((cljs.core.seq_QMARK_.call(null,map__31560))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);
var meta_data = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31475,inst_31449,inst_31455,inst_31452,inst_31471,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31475__$1 = cljs.core.group_by.call(null,inst_31474,inst_31455);
var inst_31476 = cljs.core.seq_QMARK_.call(null,inst_31475__$1);
var state_31516__$1 = (function (){var statearr_31561 = state_31516;
(statearr_31561[(19)] = inst_31475__$1);

(statearr_31561[(32)] = inst_31471);

return statearr_31561;
})();
if(inst_31476){
var statearr_31562_31619 = state_31516__$1;
(statearr_31562_31619[(1)] = (26));

} else {
var statearr_31563_31620 = state_31516__$1;
(statearr_31563_31620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (35))){
var inst_31482 = (state_31516[(30)]);
var inst_31505 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31482);
var inst_31506 = cljs.core.pr_str.call(null,inst_31505);
var inst_31507 = [cljs.core.str("not required: "),cljs.core.str(inst_31506)].join('');
var inst_31508 = figwheel.client.utils.log.call(null,inst_31507);
var state_31516__$1 = state_31516;
var statearr_31564_31621 = state_31516__$1;
(statearr_31564_31621[(2)] = inst_31508);

(statearr_31564_31621[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (19))){
var inst_31453 = (state_31516[(12)]);
var inst_31448 = (state_31516[(13)]);
var inst_31449 = (state_31516[(14)]);
var inst_31452 = (state_31516[(16)]);
var inst_31452__$1 = (state_31516[(2)]);
var inst_31453__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31452__$1);
var inst_31454 = (function (){var res = inst_31453__$1;
var res_SINGLEQUOTE_ = inst_31452__$1;
var files_SINGLEQUOTE_ = inst_31449;
var all_files = inst_31448;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31452,inst_31452__$1,inst_31453__$1,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p1__31186_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31186_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31453,inst_31448,inst_31449,inst_31452,inst_31452__$1,inst_31453__$1,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31455 = cljs.core.filter.call(null,inst_31454,inst_31452__$1);
var inst_31456 = cljs.core.not_empty.call(null,inst_31453__$1);
var state_31516__$1 = (function (){var statearr_31565 = state_31516;
(statearr_31565[(12)] = inst_31453__$1);

(statearr_31565[(15)] = inst_31455);

(statearr_31565[(16)] = inst_31452__$1);

return statearr_31565;
})();
if(cljs.core.truth_(inst_31456)){
var statearr_31566_31622 = state_31516__$1;
(statearr_31566_31622[(1)] = (20));

} else {
var statearr_31567_31623 = state_31516__$1;
(statearr_31567_31623[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (11))){
var state_31516__$1 = state_31516;
var statearr_31568_31624 = state_31516__$1;
(statearr_31568_31624[(2)] = null);

(statearr_31568_31624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (9))){
var inst_31435 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31569_31625 = state_31516__$1;
(statearr_31569_31625[(2)] = inst_31435);

(statearr_31569_31625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var inst_31406 = (state_31516[(7)]);
var inst_31405 = (state_31516[(9)]);
var inst_31408 = (inst_31406 < inst_31405);
var inst_31409 = inst_31408;
var state_31516__$1 = state_31516;
if(cljs.core.truth_(inst_31409)){
var statearr_31570_31626 = state_31516__$1;
(statearr_31570_31626[(1)] = (7));

} else {
var statearr_31571_31627 = state_31516__$1;
(statearr_31571_31627[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (14))){
var inst_31416 = (state_31516[(27)]);
var inst_31425 = cljs.core.first.call(null,inst_31416);
var inst_31426 = figwheel.client.file_reloading.eval_body.call(null,inst_31425);
var inst_31427 = cljs.core.next.call(null,inst_31416);
var inst_31403 = inst_31427;
var inst_31404 = null;
var inst_31405 = (0);
var inst_31406 = (0);
var state_31516__$1 = (function (){var statearr_31572 = state_31516;
(statearr_31572[(7)] = inst_31406);

(statearr_31572[(8)] = inst_31404);

(statearr_31572[(9)] = inst_31405);

(statearr_31572[(10)] = inst_31403);

(statearr_31572[(33)] = inst_31426);

return statearr_31572;
})();
var statearr_31573_31628 = state_31516__$1;
(statearr_31573_31628[(2)] = null);

(statearr_31573_31628[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (26))){
var inst_31475 = (state_31516[(19)]);
var inst_31478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31475);
var state_31516__$1 = state_31516;
var statearr_31574_31629 = state_31516__$1;
(statearr_31574_31629[(2)] = inst_31478);

(statearr_31574_31629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (16))){
var inst_31442 = (state_31516[(24)]);
var inst_31444 = (function (){var all_files = inst_31442;
return ((function (all_files,inst_31442,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function (p1__31185_SHARP_){
return cljs.core.update_in.call(null,p1__31185_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31442,state_val_31517,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var inst_31445 = cljs.core.map.call(null,inst_31444,inst_31442);
var state_31516__$1 = state_31516;
var statearr_31575_31630 = state_31516__$1;
(statearr_31575_31630[(2)] = inst_31445);

(statearr_31575_31630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (30))){
var state_31516__$1 = state_31516;
var statearr_31576_31631 = state_31516__$1;
(statearr_31576_31631[(2)] = null);

(statearr_31576_31631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (10))){
var inst_31416 = (state_31516[(27)]);
var inst_31418 = cljs.core.chunked_seq_QMARK_.call(null,inst_31416);
var state_31516__$1 = state_31516;
if(inst_31418){
var statearr_31577_31632 = state_31516__$1;
(statearr_31577_31632[(1)] = (13));

} else {
var statearr_31578_31633 = state_31516__$1;
(statearr_31578_31633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (18))){
var inst_31448 = (state_31516[(13)]);
var inst_31449 = (state_31516[(14)]);
var inst_31448__$1 = (state_31516[(2)]);
var inst_31449__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31448__$1);
var inst_31450 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31449__$1);
var state_31516__$1 = (function (){var statearr_31579 = state_31516;
(statearr_31579[(13)] = inst_31448__$1);

(statearr_31579[(14)] = inst_31449__$1);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(19),inst_31450);
} else {
if((state_val_31517 === (37))){
var inst_31511 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31580_31634 = state_31516__$1;
(statearr_31580_31634[(2)] = inst_31511);

(statearr_31580_31634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (8))){
var inst_31416 = (state_31516[(27)]);
var inst_31403 = (state_31516[(10)]);
var inst_31416__$1 = cljs.core.seq.call(null,inst_31403);
var state_31516__$1 = (function (){var statearr_31581 = state_31516;
(statearr_31581[(27)] = inst_31416__$1);

return statearr_31581;
})();
if(inst_31416__$1){
var statearr_31582_31635 = state_31516__$1;
(statearr_31582_31635[(1)] = (10));

} else {
var statearr_31583_31636 = state_31516__$1;
(statearr_31583_31636[(1)] = (11));

}

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
}
}
}
});})(c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
;
return ((function (switch__21954__auto__,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____0 = (function (){
var statearr_31587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31587[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__);

(statearr_31587[(1)] = (1));

return statearr_31587;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____1 = (function (state_31516){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e31588){if((e31588 instanceof Object)){
var ex__21958__auto__ = e31588;
var statearr_31589_31637 = state_31516;
(statearr_31589_31637[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31638 = state_31516;
state_31516 = G__31638;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
})();
var state__22018__auto__ = (function (){var statearr_31590 = f__22017__auto__.call(null);
(statearr_31590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_31590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__,map__31390,map__31390__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31391,map__31391__$1,msg,files))
);

return c__22016__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31641,link){
var map__31643 = p__31641;
var map__31643__$1 = ((cljs.core.seq_QMARK_.call(null,map__31643))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);
var file = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31643,map__31643__$1,file){
return (function (p1__31639_SHARP_,p2__31640_SHARP_){
if(cljs.core._EQ_.call(null,p1__31639_SHARP_,p2__31640_SHARP_)){
return p1__31639_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31643,map__31643__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31647){
var map__31648 = p__31647;
var map__31648__$1 = ((cljs.core.seq_QMARK_.call(null,map__31648))?cljs.core.apply.call(null,cljs.core.hash_map,map__31648):map__31648);
var current_url_length = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31648__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31644_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31644_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__31650 = arguments.length;
switch (G__31650) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31652){
var map__31654 = p__31652;
var map__31654__$1 = ((cljs.core.seq_QMARK_.call(null,map__31654))?cljs.core.apply.call(null,cljs.core.hash_map,map__31654):map__31654);
var f_data = map__31654__$1;
var request_url = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18121__auto__ = request_url;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31655,files_msg){
var map__31677 = p__31655;
var map__31677__$1 = ((cljs.core.seq_QMARK_.call(null,map__31677))?cljs.core.apply.call(null,cljs.core.hash_map,map__31677):map__31677);
var opts = map__31677__$1;
var on_cssload = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31678_31698 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31679_31699 = null;
var count__31680_31700 = (0);
var i__31681_31701 = (0);
while(true){
if((i__31681_31701 < count__31680_31700)){
var f_31702 = cljs.core._nth.call(null,chunk__31679_31699,i__31681_31701);
figwheel.client.file_reloading.reload_css_file.call(null,f_31702);

var G__31703 = seq__31678_31698;
var G__31704 = chunk__31679_31699;
var G__31705 = count__31680_31700;
var G__31706 = (i__31681_31701 + (1));
seq__31678_31698 = G__31703;
chunk__31679_31699 = G__31704;
count__31680_31700 = G__31705;
i__31681_31701 = G__31706;
continue;
} else {
var temp__4126__auto___31707 = cljs.core.seq.call(null,seq__31678_31698);
if(temp__4126__auto___31707){
var seq__31678_31708__$1 = temp__4126__auto___31707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31678_31708__$1)){
var c__18906__auto___31709 = cljs.core.chunk_first.call(null,seq__31678_31708__$1);
var G__31710 = cljs.core.chunk_rest.call(null,seq__31678_31708__$1);
var G__31711 = c__18906__auto___31709;
var G__31712 = cljs.core.count.call(null,c__18906__auto___31709);
var G__31713 = (0);
seq__31678_31698 = G__31710;
chunk__31679_31699 = G__31711;
count__31680_31700 = G__31712;
i__31681_31701 = G__31713;
continue;
} else {
var f_31714 = cljs.core.first.call(null,seq__31678_31708__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31714);

var G__31715 = cljs.core.next.call(null,seq__31678_31708__$1);
var G__31716 = null;
var G__31717 = (0);
var G__31718 = (0);
seq__31678_31698 = G__31715;
chunk__31679_31699 = G__31716;
count__31680_31700 = G__31717;
i__31681_31701 = G__31718;
continue;
}
} else {
}
}
break;
}

var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload){
return (function (state_31688){
var state_val_31689 = (state_31688[(1)]);
if((state_val_31689 === (2))){
var inst_31684 = (state_31688[(2)]);
var inst_31685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31686 = on_cssload.call(null,inst_31685);
var state_31688__$1 = (function (){var statearr_31690 = state_31688;
(statearr_31690[(7)] = inst_31684);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31688__$1,inst_31686);
} else {
if((state_val_31689 === (1))){
var inst_31682 = cljs.core.async.timeout.call(null,(100));
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31688__$1,(2),inst_31682);
} else {
return null;
}
}
});})(c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload))
;
return ((function (switch__21954__auto__,c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____0 = (function (){
var statearr_31694 = [null,null,null,null,null,null,null,null];
(statearr_31694[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__);

(statearr_31694[(1)] = (1));

return statearr_31694;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____1 = (function (state_31688){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_31688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e31695){if((e31695 instanceof Object)){
var ex__21958__auto__ = e31695;
var statearr_31696_31719 = state_31688;
(statearr_31696_31719[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31720 = state_31688;
state_31688 = G__31720;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__ = function(state_31688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____1.call(this,state_31688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload))
})();
var state__22018__auto__ = (function (){var statearr_31697 = f__22017__auto__.call(null);
(statearr_31697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_31697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__,map__31677,map__31677__$1,opts,on_cssload))
);

return c__22016__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1439021447251