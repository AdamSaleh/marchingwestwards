// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.handlers');
goog.require('cljs.core');
goog.require('marchingwestwards.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return marchingwestwards.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__24114){
var vec__24115 = p__24114;
var _ = cljs.core.nth.call(null,vec__24115,(0),null);
var active_panel = cljs.core.nth.call(null,vec__24115,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-default-icon","set-default-icon",-757835967),(function (db,p__24116){
var vec__24117 = p__24116;
var _ = cljs.core.nth.call(null,vec__24117,(0),null);
var d_icon = cljs.core.nth.call(null,vec__24117,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"default-icon","default-icon",491415788),d_icon);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-tile","set-tile",1527302597),(function (db,p__24118){
var vec__24119 = p__24118;
var _ = cljs.core.nth.call(null,vec__24119,(0),null);
var x = cljs.core.nth.call(null,vec__24119,(1),null);
var y = cljs.core.nth.call(null,vec__24119,(2),null);
var m = db.call(null,new cljs.core.Keyword(null,"map","map",1371690461));
var d_icon = db.call(null,new cljs.core.Keyword(null,"default-icon","default-icon",491415788));
var updated = cljs.core.assoc.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),d_icon);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"map","map",1371690461),updated);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-mouse-xy","set-mouse-xy",-125254198),(function (db,p__24120){
var vec__24121 = p__24120;
var _ = cljs.core.nth.call(null,vec__24121,(0),null);
var x = cljs.core.nth.call(null,vec__24121,(1),null);
var y = cljs.core.nth.call(null,vec__24121,(2),null);
console.log(x,y);

var m = db.call(null,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var nmouse = cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mouse","mouse",478628972),nmouse);
}));

//# sourceMappingURL=handlers.js.map?rel=1444073293853