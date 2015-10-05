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
return cljs.core.reduce.call(null,(function (p1__32855_SHARP_,p2__32856_SHARP_){
var and__17902__auto__ = p1__32855_SHARP_;
if(cljs.core.truth_(and__17902__auto__)){
return p2__32856_SHARP_;
} else {
return and__17902__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17914__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17914__auto__){
return or__17914__auto__;
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
if(cljs.core.truth_((function (){var or__17914__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17914__auto__){
return or__17914__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17914__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18809__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18810__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18813__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18813__auto__,method_table__18809__auto__,prefer_table__18810__auto__,method_cache__18811__auto__,cached_hierarchy__18812__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__32857){
var map__32858 = p__32857;
var map__32858__$1 = ((cljs.core.seq_QMARK_.call(null,map__32858))?cljs.core.apply.call(null,cljs.core.hash_map,map__32858):map__32858);
var file = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__32859){
var map__32860 = p__32859;
var map__32860__$1 = ((cljs.core.seq_QMARK_.call(null,map__32860))?cljs.core.apply.call(null,cljs.core.hash_map,map__32860):map__32860);
var namespace = cljs.core.get.call(null,map__32860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18809__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18810__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18813__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18813__auto__,method_table__18809__auto__,prefer_table__18810__auto__,method_cache__18811__auto__,cached_hierarchy__18812__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32861){if((e32861 instanceof Error)){
var e = e32861;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32861;

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
var G__32863 = arguments.length;
switch (G__32863) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32865,callback){
var map__32867 = p__32865;
var map__32867__$1 = ((cljs.core.seq_QMARK_.call(null,map__32867))?cljs.core.apply.call(null,cljs.core.hash_map,map__32867):map__32867);
var file_msg = map__32867__$1;
var request_url = cljs.core.get.call(null,map__32867__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32867,map__32867__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32867,map__32867__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32868){
var map__32870 = p__32868;
var map__32870__$1 = ((cljs.core.seq_QMARK_.call(null,map__32870))?cljs.core.apply.call(null,cljs.core.hash_map,map__32870):map__32870);
var file_msg = map__32870__$1;
var meta_data = cljs.core.get.call(null,map__32870__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__32870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17914__auto__ = meta_data;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17902__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17902__auto__){
var or__17914__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17914__auto____$1)){
return or__17914__auto____$1;
} else {
var and__17902__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17902__auto____$1){
var or__17914__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17914__auto____$2){
return or__17914__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17902__auto____$1;
}
}
}
} else {
return and__17902__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32871,callback){
var map__32873 = p__32871;
var map__32873__$1 = ((cljs.core.seq_QMARK_.call(null,map__32873))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);
var file_msg = map__32873__$1;
var namespace = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21855__auto___32960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___32960,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___32960,out){
return (function (state_32942){
var state_val_32943 = (state_32942[(1)]);
if((state_val_32943 === (7))){
var inst_32926 = (state_32942[(7)]);
var inst_32932 = (state_32942[(2)]);
var inst_32933 = cljs.core.async.put_BANG_.call(null,out,inst_32932);
var inst_32922 = inst_32926;
var state_32942__$1 = (function (){var statearr_32944 = state_32942;
(statearr_32944[(8)] = inst_32922);

(statearr_32944[(9)] = inst_32933);

return statearr_32944;
})();
var statearr_32945_32961 = state_32942__$1;
(statearr_32945_32961[(2)] = null);

(statearr_32945_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (6))){
var inst_32938 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
var statearr_32946_32962 = state_32942__$1;
(statearr_32946_32962[(2)] = inst_32938);

(statearr_32946_32962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (5))){
var inst_32936 = cljs.core.async.close_BANG_.call(null,out);
var state_32942__$1 = state_32942;
var statearr_32947_32963 = state_32942__$1;
(statearr_32947_32963[(2)] = inst_32936);

(statearr_32947_32963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (4))){
var inst_32925 = (state_32942[(10)]);
var inst_32930 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32925);
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32942__$1,(7),inst_32930);
} else {
if((state_val_32943 === (3))){
var inst_32940 = (state_32942[(2)]);
var state_32942__$1 = state_32942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32942__$1,inst_32940);
} else {
if((state_val_32943 === (2))){
var inst_32922 = (state_32942[(8)]);
var inst_32925 = (state_32942[(10)]);
var inst_32925__$1 = cljs.core.nth.call(null,inst_32922,(0),null);
var inst_32926 = cljs.core.nthnext.call(null,inst_32922,(1));
var inst_32927 = (inst_32925__$1 == null);
var inst_32928 = cljs.core.not.call(null,inst_32927);
var state_32942__$1 = (function (){var statearr_32948 = state_32942;
(statearr_32948[(10)] = inst_32925__$1);

(statearr_32948[(7)] = inst_32926);

return statearr_32948;
})();
if(inst_32928){
var statearr_32949_32964 = state_32942__$1;
(statearr_32949_32964[(1)] = (4));

} else {
var statearr_32950_32965 = state_32942__$1;
(statearr_32950_32965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32943 === (1))){
var inst_32920 = cljs.core.nth.call(null,files,(0),null);
var inst_32921 = cljs.core.nthnext.call(null,files,(1));
var inst_32922 = files;
var state_32942__$1 = (function (){var statearr_32951 = state_32942;
(statearr_32951[(11)] = inst_32921);

(statearr_32951[(8)] = inst_32922);

(statearr_32951[(12)] = inst_32920);

return statearr_32951;
})();
var statearr_32952_32966 = state_32942__$1;
(statearr_32952_32966[(2)] = null);

(statearr_32952_32966[(1)] = (2));


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
});})(c__21855__auto___32960,out))
;
return ((function (switch__21793__auto__,c__21855__auto___32960,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____0 = (function (){
var statearr_32956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32956[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__);

(statearr_32956[(1)] = (1));

return statearr_32956;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____1 = (function (state_32942){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32957){if((e32957 instanceof Object)){
var ex__21797__auto__ = e32957;
var statearr_32958_32967 = state_32942;
(statearr_32958_32967[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32968 = state_32942;
state_32942 = G__32968;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__ = function(state_32942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____1.call(this,state_32942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___32960,out))
})();
var state__21857__auto__ = (function (){var statearr_32959 = f__21856__auto__.call(null);
(statearr_32959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___32960);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___32960,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__32969,p__32970){
var map__32973 = p__32969;
var map__32973__$1 = ((cljs.core.seq_QMARK_.call(null,map__32973))?cljs.core.apply.call(null,cljs.core.hash_map,map__32973):map__32973);
var opts = map__32973__$1;
var url_rewriter = cljs.core.get.call(null,map__32973__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32974 = p__32970;
var map__32974__$1 = ((cljs.core.seq_QMARK_.call(null,map__32974))?cljs.core.apply.call(null,cljs.core.hash_map,map__32974):map__32974);
var file_msg = map__32974__$1;
var file = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32975){
var map__32978 = p__32975;
var map__32978__$1 = ((cljs.core.seq_QMARK_.call(null,map__32978))?cljs.core.apply.call(null,cljs.core.hash_map,map__32978):map__32978);
var file = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__32978__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17902__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17902__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17902__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e32979){var e = e32979;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32984,p__32985){
var map__33187 = p__32984;
var map__33187__$1 = ((cljs.core.seq_QMARK_.call(null,map__33187))?cljs.core.apply.call(null,cljs.core.hash_map,map__33187):map__33187);
var opts = map__33187__$1;
var load_unchanged_files = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__33188 = p__32985;
var map__33188__$1 = ((cljs.core.seq_QMARK_.call(null,map__33188))?cljs.core.apply.call(null,cljs.core.hash_map,map__33188):map__33188);
var msg = map__33188__$1;
var files = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (state_33313){
var state_val_33314 = (state_33313[(1)]);
if((state_val_33314 === (7))){
var inst_33201 = (state_33313[(7)]);
var inst_33203 = (state_33313[(8)]);
var inst_33202 = (state_33313[(9)]);
var inst_33200 = (state_33313[(10)]);
var inst_33208 = cljs.core._nth.call(null,inst_33201,inst_33203);
var inst_33209 = figwheel.client.file_reloading.eval_body.call(null,inst_33208);
var inst_33210 = (inst_33203 + (1));
var tmp33315 = inst_33201;
var tmp33316 = inst_33202;
var tmp33317 = inst_33200;
var inst_33200__$1 = tmp33317;
var inst_33201__$1 = tmp33315;
var inst_33202__$1 = tmp33316;
var inst_33203__$1 = inst_33210;
var state_33313__$1 = (function (){var statearr_33318 = state_33313;
(statearr_33318[(7)] = inst_33201__$1);

(statearr_33318[(8)] = inst_33203__$1);

(statearr_33318[(9)] = inst_33202__$1);

(statearr_33318[(10)] = inst_33200__$1);

(statearr_33318[(11)] = inst_33209);

return statearr_33318;
})();
var statearr_33319_33388 = state_33313__$1;
(statearr_33319_33388[(2)] = null);

(statearr_33319_33388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (20))){
var inst_33249 = (state_33313[(12)]);
var inst_33246 = (state_33313[(13)]);
var inst_33250 = (state_33313[(14)]);
var inst_33245 = (state_33313[(15)]);
var inst_33252 = (state_33313[(16)]);
var inst_33255 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33257 = (function (){var files_not_loaded = inst_33252;
var res = inst_33250;
var res_SINGLEQUOTE_ = inst_33249;
var files_SINGLEQUOTE_ = inst_33246;
var all_files = inst_33245;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33252,inst_33255,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p__33256){
var map__33320 = p__33256;
var map__33320__$1 = ((cljs.core.seq_QMARK_.call(null,map__33320))?cljs.core.apply.call(null,cljs.core.hash_map,map__33320):map__33320);
var file = cljs.core.get.call(null,map__33320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__33320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33252,inst_33255,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33258 = cljs.core.map.call(null,inst_33257,inst_33250);
var inst_33259 = cljs.core.pr_str.call(null,inst_33258);
var inst_33260 = figwheel.client.utils.log.call(null,inst_33259);
var inst_33261 = (function (){var files_not_loaded = inst_33252;
var res = inst_33250;
var res_SINGLEQUOTE_ = inst_33249;
var files_SINGLEQUOTE_ = inst_33246;
var all_files = inst_33245;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33252,inst_33255,inst_33257,inst_33258,inst_33259,inst_33260,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33252,inst_33255,inst_33257,inst_33258,inst_33259,inst_33260,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33262 = setTimeout(inst_33261,(10));
var state_33313__$1 = (function (){var statearr_33321 = state_33313;
(statearr_33321[(17)] = inst_33255);

(statearr_33321[(18)] = inst_33260);

return statearr_33321;
})();
var statearr_33322_33389 = state_33313__$1;
(statearr_33322_33389[(2)] = inst_33262);

(statearr_33322_33389[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (27))){
var inst_33272 = (state_33313[(19)]);
var state_33313__$1 = state_33313;
var statearr_33323_33390 = state_33313__$1;
(statearr_33323_33390[(2)] = inst_33272);

(statearr_33323_33390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (1))){
var inst_33192 = (state_33313[(20)]);
var inst_33189 = before_jsload.call(null,files);
var inst_33190 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33191 = (function (){return ((function (inst_33192,inst_33189,inst_33190,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p1__32980_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32980_SHARP_);
});
;})(inst_33192,inst_33189,inst_33190,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33192__$1 = cljs.core.filter.call(null,inst_33191,files);
var inst_33193 = cljs.core.not_empty.call(null,inst_33192__$1);
var state_33313__$1 = (function (){var statearr_33324 = state_33313;
(statearr_33324[(20)] = inst_33192__$1);

(statearr_33324[(21)] = inst_33189);

(statearr_33324[(22)] = inst_33190);

return statearr_33324;
})();
if(cljs.core.truth_(inst_33193)){
var statearr_33325_33391 = state_33313__$1;
(statearr_33325_33391[(1)] = (2));

} else {
var statearr_33326_33392 = state_33313__$1;
(statearr_33326_33392[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (24))){
var state_33313__$1 = state_33313;
var statearr_33327_33393 = state_33313__$1;
(statearr_33327_33393[(2)] = null);

(statearr_33327_33393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (4))){
var inst_33237 = (state_33313[(2)]);
var inst_33238 = (function (){return ((function (inst_33237,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p1__32981_SHARP_){
var and__17902__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32981_SHARP_);
if(cljs.core.truth_(and__17902__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32981_SHARP_));
} else {
return and__17902__auto__;
}
});
;})(inst_33237,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33239 = cljs.core.filter.call(null,inst_33238,files);
var state_33313__$1 = (function (){var statearr_33328 = state_33313;
(statearr_33328[(23)] = inst_33237);

(statearr_33328[(24)] = inst_33239);

return statearr_33328;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33329_33394 = state_33313__$1;
(statearr_33329_33394[(1)] = (16));

} else {
var statearr_33330_33395 = state_33313__$1;
(statearr_33330_33395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (15))){
var inst_33227 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33331_33396 = state_33313__$1;
(statearr_33331_33396[(2)] = inst_33227);

(statearr_33331_33396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (21))){
var state_33313__$1 = state_33313;
var statearr_33332_33397 = state_33313__$1;
(statearr_33332_33397[(2)] = null);

(statearr_33332_33397[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (31))){
var inst_33280 = (state_33313[(25)]);
var inst_33290 = (state_33313[(2)]);
var inst_33291 = cljs.core.not_empty.call(null,inst_33280);
var state_33313__$1 = (function (){var statearr_33333 = state_33313;
(statearr_33333[(26)] = inst_33290);

return statearr_33333;
})();
if(cljs.core.truth_(inst_33291)){
var statearr_33334_33398 = state_33313__$1;
(statearr_33334_33398[(1)] = (32));

} else {
var statearr_33335_33399 = state_33313__$1;
(statearr_33335_33399[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (32))){
var inst_33280 = (state_33313[(25)]);
var inst_33293 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33280);
var inst_33294 = cljs.core.pr_str.call(null,inst_33293);
var inst_33295 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33294)].join('');
var inst_33296 = figwheel.client.utils.log.call(null,inst_33295);
var state_33313__$1 = state_33313;
var statearr_33336_33400 = state_33313__$1;
(statearr_33336_33400[(2)] = inst_33296);

(statearr_33336_33400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (33))){
var state_33313__$1 = state_33313;
var statearr_33337_33401 = state_33313__$1;
(statearr_33337_33401[(2)] = null);

(statearr_33337_33401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (13))){
var inst_33213 = (state_33313[(27)]);
var inst_33217 = cljs.core.chunk_first.call(null,inst_33213);
var inst_33218 = cljs.core.chunk_rest.call(null,inst_33213);
var inst_33219 = cljs.core.count.call(null,inst_33217);
var inst_33200 = inst_33218;
var inst_33201 = inst_33217;
var inst_33202 = inst_33219;
var inst_33203 = (0);
var state_33313__$1 = (function (){var statearr_33338 = state_33313;
(statearr_33338[(7)] = inst_33201);

(statearr_33338[(8)] = inst_33203);

(statearr_33338[(9)] = inst_33202);

(statearr_33338[(10)] = inst_33200);

return statearr_33338;
})();
var statearr_33339_33402 = state_33313__$1;
(statearr_33339_33402[(2)] = null);

(statearr_33339_33402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (22))){
var inst_33252 = (state_33313[(16)]);
var inst_33265 = (state_33313[(2)]);
var inst_33266 = cljs.core.not_empty.call(null,inst_33252);
var state_33313__$1 = (function (){var statearr_33340 = state_33313;
(statearr_33340[(28)] = inst_33265);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33266)){
var statearr_33341_33403 = state_33313__$1;
(statearr_33341_33403[(1)] = (23));

} else {
var statearr_33342_33404 = state_33313__$1;
(statearr_33342_33404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (36))){
var state_33313__$1 = state_33313;
var statearr_33343_33405 = state_33313__$1;
(statearr_33343_33405[(2)] = null);

(statearr_33343_33405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (29))){
var inst_33281 = (state_33313[(29)]);
var inst_33284 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33281);
var inst_33285 = cljs.core.pr_str.call(null,inst_33284);
var inst_33286 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33285)].join('');
var inst_33287 = figwheel.client.utils.log.call(null,inst_33286);
var state_33313__$1 = state_33313;
var statearr_33344_33406 = state_33313__$1;
(statearr_33344_33406[(2)] = inst_33287);

(statearr_33344_33406[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (6))){
var inst_33234 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33345_33407 = state_33313__$1;
(statearr_33345_33407[(2)] = inst_33234);

(statearr_33345_33407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (28))){
var inst_33281 = (state_33313[(29)]);
var inst_33278 = (state_33313[(2)]);
var inst_33279 = cljs.core.get.call(null,inst_33278,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33280 = cljs.core.get.call(null,inst_33278,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33281__$1 = cljs.core.get.call(null,inst_33278,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33282 = cljs.core.not_empty.call(null,inst_33281__$1);
var state_33313__$1 = (function (){var statearr_33346 = state_33313;
(statearr_33346[(25)] = inst_33280);

(statearr_33346[(29)] = inst_33281__$1);

(statearr_33346[(30)] = inst_33279);

return statearr_33346;
})();
if(cljs.core.truth_(inst_33282)){
var statearr_33347_33408 = state_33313__$1;
(statearr_33347_33408[(1)] = (29));

} else {
var statearr_33348_33409 = state_33313__$1;
(statearr_33348_33409[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (25))){
var inst_33311 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33313__$1,inst_33311);
} else {
if((state_val_33314 === (34))){
var inst_33279 = (state_33313[(30)]);
var inst_33299 = (state_33313[(2)]);
var inst_33300 = cljs.core.not_empty.call(null,inst_33279);
var state_33313__$1 = (function (){var statearr_33349 = state_33313;
(statearr_33349[(31)] = inst_33299);

return statearr_33349;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33350_33410 = state_33313__$1;
(statearr_33350_33410[(1)] = (35));

} else {
var statearr_33351_33411 = state_33313__$1;
(statearr_33351_33411[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (17))){
var inst_33239 = (state_33313[(24)]);
var state_33313__$1 = state_33313;
var statearr_33352_33412 = state_33313__$1;
(statearr_33352_33412[(2)] = inst_33239);

(statearr_33352_33412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (3))){
var state_33313__$1 = state_33313;
var statearr_33353_33413 = state_33313__$1;
(statearr_33353_33413[(2)] = null);

(statearr_33353_33413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (12))){
var inst_33230 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33354_33414 = state_33313__$1;
(statearr_33354_33414[(2)] = inst_33230);

(statearr_33354_33414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (2))){
var inst_33192 = (state_33313[(20)]);
var inst_33199 = cljs.core.seq.call(null,inst_33192);
var inst_33200 = inst_33199;
var inst_33201 = null;
var inst_33202 = (0);
var inst_33203 = (0);
var state_33313__$1 = (function (){var statearr_33355 = state_33313;
(statearr_33355[(7)] = inst_33201);

(statearr_33355[(8)] = inst_33203);

(statearr_33355[(9)] = inst_33202);

(statearr_33355[(10)] = inst_33200);

return statearr_33355;
})();
var statearr_33356_33415 = state_33313__$1;
(statearr_33356_33415[(2)] = null);

(statearr_33356_33415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (23))){
var inst_33249 = (state_33313[(12)]);
var inst_33272 = (state_33313[(19)]);
var inst_33246 = (state_33313[(13)]);
var inst_33250 = (state_33313[(14)]);
var inst_33245 = (state_33313[(15)]);
var inst_33252 = (state_33313[(16)]);
var inst_33268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33271 = (function (){var files_not_loaded = inst_33252;
var res = inst_33250;
var res_SINGLEQUOTE_ = inst_33249;
var files_SINGLEQUOTE_ = inst_33246;
var all_files = inst_33245;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33272,inst_33246,inst_33250,inst_33245,inst_33252,inst_33268,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p__33270){
var map__33357 = p__33270;
var map__33357__$1 = ((cljs.core.seq_QMARK_.call(null,map__33357))?cljs.core.apply.call(null,cljs.core.hash_map,map__33357):map__33357);
var meta_data = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33272,inst_33246,inst_33250,inst_33245,inst_33252,inst_33268,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33272__$1 = cljs.core.group_by.call(null,inst_33271,inst_33252);
var inst_33273 = cljs.core.seq_QMARK_.call(null,inst_33272__$1);
var state_33313__$1 = (function (){var statearr_33358 = state_33313;
(statearr_33358[(19)] = inst_33272__$1);

(statearr_33358[(32)] = inst_33268);

return statearr_33358;
})();
if(inst_33273){
var statearr_33359_33416 = state_33313__$1;
(statearr_33359_33416[(1)] = (26));

} else {
var statearr_33360_33417 = state_33313__$1;
(statearr_33360_33417[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (35))){
var inst_33279 = (state_33313[(30)]);
var inst_33302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33279);
var inst_33303 = cljs.core.pr_str.call(null,inst_33302);
var inst_33304 = [cljs.core.str("not required: "),cljs.core.str(inst_33303)].join('');
var inst_33305 = figwheel.client.utils.log.call(null,inst_33304);
var state_33313__$1 = state_33313;
var statearr_33361_33418 = state_33313__$1;
(statearr_33361_33418[(2)] = inst_33305);

(statearr_33361_33418[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (19))){
var inst_33249 = (state_33313[(12)]);
var inst_33246 = (state_33313[(13)]);
var inst_33250 = (state_33313[(14)]);
var inst_33245 = (state_33313[(15)]);
var inst_33249__$1 = (state_33313[(2)]);
var inst_33250__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33249__$1);
var inst_33251 = (function (){var res = inst_33250__$1;
var res_SINGLEQUOTE_ = inst_33249__$1;
var files_SINGLEQUOTE_ = inst_33246;
var all_files = inst_33245;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33249__$1,inst_33250__$1,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p1__32983_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32983_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33249,inst_33246,inst_33250,inst_33245,inst_33249__$1,inst_33250__$1,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33252 = cljs.core.filter.call(null,inst_33251,inst_33249__$1);
var inst_33253 = cljs.core.not_empty.call(null,inst_33250__$1);
var state_33313__$1 = (function (){var statearr_33362 = state_33313;
(statearr_33362[(12)] = inst_33249__$1);

(statearr_33362[(14)] = inst_33250__$1);

(statearr_33362[(16)] = inst_33252);

return statearr_33362;
})();
if(cljs.core.truth_(inst_33253)){
var statearr_33363_33419 = state_33313__$1;
(statearr_33363_33419[(1)] = (20));

} else {
var statearr_33364_33420 = state_33313__$1;
(statearr_33364_33420[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (11))){
var state_33313__$1 = state_33313;
var statearr_33365_33421 = state_33313__$1;
(statearr_33365_33421[(2)] = null);

(statearr_33365_33421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (9))){
var inst_33232 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33366_33422 = state_33313__$1;
(statearr_33366_33422[(2)] = inst_33232);

(statearr_33366_33422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (5))){
var inst_33203 = (state_33313[(8)]);
var inst_33202 = (state_33313[(9)]);
var inst_33205 = (inst_33203 < inst_33202);
var inst_33206 = inst_33205;
var state_33313__$1 = state_33313;
if(cljs.core.truth_(inst_33206)){
var statearr_33367_33423 = state_33313__$1;
(statearr_33367_33423[(1)] = (7));

} else {
var statearr_33368_33424 = state_33313__$1;
(statearr_33368_33424[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (14))){
var inst_33213 = (state_33313[(27)]);
var inst_33222 = cljs.core.first.call(null,inst_33213);
var inst_33223 = figwheel.client.file_reloading.eval_body.call(null,inst_33222);
var inst_33224 = cljs.core.next.call(null,inst_33213);
var inst_33200 = inst_33224;
var inst_33201 = null;
var inst_33202 = (0);
var inst_33203 = (0);
var state_33313__$1 = (function (){var statearr_33369 = state_33313;
(statearr_33369[(7)] = inst_33201);

(statearr_33369[(8)] = inst_33203);

(statearr_33369[(33)] = inst_33223);

(statearr_33369[(9)] = inst_33202);

(statearr_33369[(10)] = inst_33200);

return statearr_33369;
})();
var statearr_33370_33425 = state_33313__$1;
(statearr_33370_33425[(2)] = null);

(statearr_33370_33425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (26))){
var inst_33272 = (state_33313[(19)]);
var inst_33275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33272);
var state_33313__$1 = state_33313;
var statearr_33371_33426 = state_33313__$1;
(statearr_33371_33426[(2)] = inst_33275);

(statearr_33371_33426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (16))){
var inst_33239 = (state_33313[(24)]);
var inst_33241 = (function (){var all_files = inst_33239;
return ((function (all_files,inst_33239,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function (p1__32982_SHARP_){
return cljs.core.update_in.call(null,p1__32982_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33239,state_val_33314,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var inst_33242 = cljs.core.map.call(null,inst_33241,inst_33239);
var state_33313__$1 = state_33313;
var statearr_33372_33427 = state_33313__$1;
(statearr_33372_33427[(2)] = inst_33242);

(statearr_33372_33427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (30))){
var state_33313__$1 = state_33313;
var statearr_33373_33428 = state_33313__$1;
(statearr_33373_33428[(2)] = null);

(statearr_33373_33428[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (10))){
var inst_33213 = (state_33313[(27)]);
var inst_33215 = cljs.core.chunked_seq_QMARK_.call(null,inst_33213);
var state_33313__$1 = state_33313;
if(inst_33215){
var statearr_33374_33429 = state_33313__$1;
(statearr_33374_33429[(1)] = (13));

} else {
var statearr_33375_33430 = state_33313__$1;
(statearr_33375_33430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (18))){
var inst_33246 = (state_33313[(13)]);
var inst_33245 = (state_33313[(15)]);
var inst_33245__$1 = (state_33313[(2)]);
var inst_33246__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33245__$1);
var inst_33247 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33246__$1);
var state_33313__$1 = (function (){var statearr_33376 = state_33313;
(statearr_33376[(13)] = inst_33246__$1);

(statearr_33376[(15)] = inst_33245__$1);

return statearr_33376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33313__$1,(19),inst_33247);
} else {
if((state_val_33314 === (37))){
var inst_33308 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33377_33431 = state_33313__$1;
(statearr_33377_33431[(2)] = inst_33308);

(statearr_33377_33431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (8))){
var inst_33213 = (state_33313[(27)]);
var inst_33200 = (state_33313[(10)]);
var inst_33213__$1 = cljs.core.seq.call(null,inst_33200);
var state_33313__$1 = (function (){var statearr_33378 = state_33313;
(statearr_33378[(27)] = inst_33213__$1);

return statearr_33378;
})();
if(inst_33213__$1){
var statearr_33379_33432 = state_33313__$1;
(statearr_33379_33432[(1)] = (10));

} else {
var statearr_33380_33433 = state_33313__$1;
(statearr_33380_33433[(1)] = (11));

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
});})(c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
;
return ((function (switch__21793__auto__,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____0 = (function (){
var statearr_33384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33384[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__);

(statearr_33384[(1)] = (1));

return statearr_33384;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____1 = (function (state_33313){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_33313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e33385){if((e33385 instanceof Object)){
var ex__21797__auto__ = e33385;
var statearr_33386_33434 = state_33313;
(statearr_33386_33434[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33435 = state_33313;
state_33313 = G__33435;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__ = function(state_33313){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____1.call(this,state_33313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
})();
var state__21857__auto__ = (function (){var statearr_33387 = f__21856__auto__.call(null);
(statearr_33387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__,map__33187,map__33187__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33188,map__33188__$1,msg,files))
);

return c__21855__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33438,link){
var map__33440 = p__33438;
var map__33440__$1 = ((cljs.core.seq_QMARK_.call(null,map__33440))?cljs.core.apply.call(null,cljs.core.hash_map,map__33440):map__33440);
var file = cljs.core.get.call(null,map__33440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__33440,map__33440__$1,file){
return (function (p1__33436_SHARP_,p2__33437_SHARP_){
if(cljs.core._EQ_.call(null,p1__33436_SHARP_,p2__33437_SHARP_)){
return p1__33436_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__33440,map__33440__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33444){
var map__33445 = p__33444;
var map__33445__$1 = ((cljs.core.seq_QMARK_.call(null,map__33445))?cljs.core.apply.call(null,cljs.core.hash_map,map__33445):map__33445);
var current_url_length = cljs.core.get.call(null,map__33445__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__33445__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33441_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33441_SHARP_);
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
var G__33447 = arguments.length;
switch (G__33447) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33449){
var map__33451 = p__33449;
var map__33451__$1 = ((cljs.core.seq_QMARK_.call(null,map__33451))?cljs.core.apply.call(null,cljs.core.hash_map,map__33451):map__33451);
var f_data = map__33451__$1;
var request_url = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17914__auto__ = request_url;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33452,files_msg){
var map__33474 = p__33452;
var map__33474__$1 = ((cljs.core.seq_QMARK_.call(null,map__33474))?cljs.core.apply.call(null,cljs.core.hash_map,map__33474):map__33474);
var opts = map__33474__$1;
var on_cssload = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33475_33495 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33476_33496 = null;
var count__33477_33497 = (0);
var i__33478_33498 = (0);
while(true){
if((i__33478_33498 < count__33477_33497)){
var f_33499 = cljs.core._nth.call(null,chunk__33476_33496,i__33478_33498);
figwheel.client.file_reloading.reload_css_file.call(null,f_33499);

var G__33500 = seq__33475_33495;
var G__33501 = chunk__33476_33496;
var G__33502 = count__33477_33497;
var G__33503 = (i__33478_33498 + (1));
seq__33475_33495 = G__33500;
chunk__33476_33496 = G__33501;
count__33477_33497 = G__33502;
i__33478_33498 = G__33503;
continue;
} else {
var temp__4126__auto___33504 = cljs.core.seq.call(null,seq__33475_33495);
if(temp__4126__auto___33504){
var seq__33475_33505__$1 = temp__4126__auto___33504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33475_33505__$1)){
var c__18699__auto___33506 = cljs.core.chunk_first.call(null,seq__33475_33505__$1);
var G__33507 = cljs.core.chunk_rest.call(null,seq__33475_33505__$1);
var G__33508 = c__18699__auto___33506;
var G__33509 = cljs.core.count.call(null,c__18699__auto___33506);
var G__33510 = (0);
seq__33475_33495 = G__33507;
chunk__33476_33496 = G__33508;
count__33477_33497 = G__33509;
i__33478_33498 = G__33510;
continue;
} else {
var f_33511 = cljs.core.first.call(null,seq__33475_33505__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33511);

var G__33512 = cljs.core.next.call(null,seq__33475_33505__$1);
var G__33513 = null;
var G__33514 = (0);
var G__33515 = (0);
seq__33475_33495 = G__33512;
chunk__33476_33496 = G__33513;
count__33477_33497 = G__33514;
i__33478_33498 = G__33515;
continue;
}
} else {
}
}
break;
}

var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload){
return (function (state_33485){
var state_val_33486 = (state_33485[(1)]);
if((state_val_33486 === (2))){
var inst_33481 = (state_33485[(2)]);
var inst_33482 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33483 = on_cssload.call(null,inst_33482);
var state_33485__$1 = (function (){var statearr_33487 = state_33485;
(statearr_33487[(7)] = inst_33481);

return statearr_33487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33485__$1,inst_33483);
} else {
if((state_val_33486 === (1))){
var inst_33479 = cljs.core.async.timeout.call(null,(100));
var state_33485__$1 = state_33485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33485__$1,(2),inst_33479);
} else {
return null;
}
}
});})(c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload))
;
return ((function (switch__21793__auto__,c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____0 = (function (){
var statearr_33491 = [null,null,null,null,null,null,null,null];
(statearr_33491[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__);

(statearr_33491[(1)] = (1));

return statearr_33491;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____1 = (function (state_33485){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_33485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e33492){if((e33492 instanceof Object)){
var ex__21797__auto__ = e33492;
var statearr_33493_33516 = state_33485;
(statearr_33493_33516[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_33485;
state_33485 = G__33517;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__ = function(state_33485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____1.call(this,state_33485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload))
})();
var state__21857__auto__ = (function (){var statearr_33494 = f__21856__auto__.call(null);
(statearr_33494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_33494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__,map__33474,map__33474__$1,opts,on_cssload))
);

return c__21855__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1443334748878