// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
marchingwestwards.routes.hook_browser_navigation_BANG_ = (function marchingwestwards$routes$hook_browser_navigation_BANG_(){
var G__26280 = (new goog.History());
goog.events.listen(G__26280,goog.history.EventType.NAVIGATE,((function (G__26280){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26280))
);

G__26280.setEnabled(true);

return G__26280;
});
marchingwestwards.routes.app_routes = (function marchingwestwards$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26189__auto___26289 = (function (params__26190__auto__){
if(cljs.core.map_QMARK_.call(null,params__26190__auto__)){
var map__26285 = params__26190__auto__;
var map__26285__$1 = ((cljs.core.seq_QMARK_.call(null,map__26285))?cljs.core.apply.call(null,cljs.core.hash_map,map__26285):map__26285);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26190__auto__)){
var vec__26286 = params__26190__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26189__auto___26289);


var action__26189__auto___26290 = (function (params__26190__auto__){
if(cljs.core.map_QMARK_.call(null,params__26190__auto__)){
var map__26287 = params__26190__auto__;
var map__26287__$1 = ((cljs.core.seq_QMARK_.call(null,map__26287))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26190__auto__)){
var vec__26288 = params__26190__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__26189__auto___26290);


return marchingwestwards.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1443334735788