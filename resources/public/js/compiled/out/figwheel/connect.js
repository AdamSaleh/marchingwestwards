// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('marchingwestwards.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__26122__delegate = function (x){
if(cljs.core.truth_(marchingwestwards.core.mount_root)){
return cljs.core.apply.call(null,marchingwestwards.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'marchingwestwards.core/mount-root' is missing");
}
};
var G__26122 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__26123__i = 0, G__26123__a = new Array(arguments.length -  0);
while (G__26123__i < G__26123__a.length) {G__26123__a[G__26123__i] = arguments[G__26123__i + 0]; ++G__26123__i;}
  x = new cljs.core.IndexedSeq(G__26123__a,0);
} 
return G__26122__delegate.call(this,x);};
G__26122.cljs$lang$maxFixedArity = 0;
G__26122.cljs$lang$applyTo = (function (arglist__26124){
var x = cljs.core.seq(arglist__26124);
return G__26122__delegate(x);
});
G__26122.cljs$core$IFn$_invoke$arity$variadic = G__26122__delegate;
return G__26122;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440323815472