// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
marchingwestwards.routes.hook_browser_navigation_BANG_ = (function marchingwestwards$routes$hook_browser_navigation_BANG_(){
var G__24994 = (new goog.History());
goog.events.listen(G__24994,goog.history.EventType.NAVIGATE,((function (G__24994){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__24994))
);

G__24994.setEnabled(true);

return G__24994;
});
marchingwestwards.routes.app_routes = (function marchingwestwards$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23722__auto___25003 = (function (params__23723__auto__){
if(cljs.core.map_QMARK_.call(null,params__23723__auto__)){
var map__24999 = params__23723__auto__;
var map__24999__$1 = ((cljs.core.seq_QMARK_.call(null,map__24999))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23723__auto__)){
var vec__25000 = params__23723__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23722__auto___25003);


var action__23722__auto___25004 = (function (params__23723__auto__){
if(cljs.core.map_QMARK_.call(null,params__23723__auto__)){
var map__25001 = params__23723__auto__;
var map__25001__$1 = ((cljs.core.seq_QMARK_.call(null,map__25001))?cljs.core.apply.call(null,cljs.core.hash_map,map__25001):map__25001);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23723__auto__)){
var vec__25002 = params__23723__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__23722__auto___25004);


return marchingwestwards.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1440261997793