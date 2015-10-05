// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('marchingwestwards.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__22878__delegate = function (x){
if(cljs.core.truth_(marchingwestwards.core.mount_root)){
return cljs.core.apply.call(null,marchingwestwards.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'marchingwestwards.core/mount-root' is missing");
}
};
var G__22878 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__22879__i = 0, G__22879__a = new Array(arguments.length -  0);
while (G__22879__i < G__22879__a.length) {G__22879__a[G__22879__i] = arguments[G__22879__i + 0]; ++G__22879__i;}
  x = new cljs.core.IndexedSeq(G__22879__a,0);
} 
return G__22878__delegate.call(this,x);};
G__22878.cljs$lang$maxFixedArity = 0;
G__22878.cljs$lang$applyTo = (function (arglist__22880){
var x = cljs.core.seq(arglist__22880);
return G__22878__delegate(x);
});
G__22878.cljs$core$IFn$_invoke$arity$variadic = G__22878__delegate;
return G__22878;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1443966463122