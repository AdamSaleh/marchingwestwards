// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
marchingwestwards.routes.hook_browser_navigation_BANG_ = (function marchingwestwards$routes$hook_browser_navigation_BANG_(){
var G__24451 = (new goog.History());
goog.events.listen(G__24451,goog.history.EventType.NAVIGATE,((function (G__24451){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__24451))
);

G__24451.setEnabled(true);

return G__24451;
});
marchingwestwards.routes.app_routes = (function marchingwestwards$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__24360__auto___24460 = (function (params__24361__auto__){
if(cljs.core.map_QMARK_.call(null,params__24361__auto__)){
var map__24456 = params__24361__auto__;
var map__24456__$1 = ((cljs.core.seq_QMARK_.call(null,map__24456))?cljs.core.apply.call(null,cljs.core.hash_map,map__24456):map__24456);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24361__auto__)){
var vec__24457 = params__24361__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24360__auto___24460);


var action__24360__auto___24461 = (function (params__24361__auto__){
if(cljs.core.map_QMARK_.call(null,params__24361__auto__)){
var map__24458 = params__24361__auto__;
var map__24458__$1 = ((cljs.core.seq_QMARK_.call(null,map__24458))?cljs.core.apply.call(null,cljs.core.hash_map,map__24458):map__24458);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24361__auto__)){
var vec__24459 = params__24361__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__24360__auto___24461);


return marchingwestwards.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1439021434646