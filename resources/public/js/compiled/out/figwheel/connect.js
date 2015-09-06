// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('marchingwestwards.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__23158__delegate = function (x){
if(cljs.core.truth_(marchingwestwards.core.mount_root)){
return cljs.core.apply.call(null,marchingwestwards.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'marchingwestwards.core/mount-root' is missing");
}
};
var G__23158 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23159__i = 0, G__23159__a = new Array(arguments.length -  0);
while (G__23159__i < G__23159__a.length) {G__23159__a[G__23159__i] = arguments[G__23159__i + 0]; ++G__23159__i;}
  x = new cljs.core.IndexedSeq(G__23159__a,0);
} 
return G__23158__delegate.call(this,x);};
G__23158.cljs$lang$maxFixedArity = 0;
G__23158.cljs$lang$applyTo = (function (arglist__23160){
var x = cljs.core.seq(arglist__23160);
return G__23158__delegate(x);
});
G__23158.cljs$core$IFn$_invoke$arity$variadic = G__23158__delegate;
return G__23158;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1441558949707