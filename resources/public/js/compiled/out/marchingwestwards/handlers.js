// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.handlers');
goog.require('cljs.core');
goog.require('marchingwestwards.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return marchingwestwards.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__48047){
var vec__48048 = p__48047;
var _ = cljs.core.nth.call(null,vec__48048,(0),null);
var active_panel = cljs.core.nth.call(null,vec__48048,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-default-icon","set-default-icon",-757835967),(function (db,p__48049){
var vec__48050 = p__48049;
var _ = cljs.core.nth.call(null,vec__48050,(0),null);
var d_icon = cljs.core.nth.call(null,vec__48050,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"default-icon","default-icon",491415788),d_icon);
}));

//# sourceMappingURL=handlers.js.map?rel=1441533979467