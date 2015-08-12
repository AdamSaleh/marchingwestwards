// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('marchingwestwards.views');
goog.require('marchingwestwards.subs');
goog.require('marchingwestwards.routes');
goog.require('marchingwestwards.handlers');
goog.require('re_frame.core');
marchingwestwards.core.mount_root = (function marchingwestwards$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.main_panel], null),document.getElementById("app"));
});
marchingwestwards.core.init = (function marchingwestwards$core$init(){
marchingwestwards.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return marchingwestwards.core.mount_root.call(null);
});
goog.exportSymbol('marchingwestwards.core.init', marchingwestwards.core.init);

//# sourceMappingURL=core.js.map?rel=1439021434836