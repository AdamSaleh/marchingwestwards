// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.handlers');
goog.require('cljs.core');
goog.require('marchingwestwards.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return marchingwestwards.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__24466){
var vec__24467 = p__24466;
var _ = cljs.core.nth.call(null,vec__24467,(0),null);
var active_panel = cljs.core.nth.call(null,vec__24467,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=handlers.js.map?rel=1439021434696