// Compiled by ClojureScript 0.0-3211 {}
goog.provide('marchingwestwards.views');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
marchingwestwards.views.home_title = (function marchingwestwards$views$home_title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("SWN")].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
;})(name))
});
marchingwestwards.views.link_to_about_page = (function marchingwestwards$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null);
});
marchingwestwards.views.hex_points = (function marchingwestwards$views$hex_points(x,y,radius){
var thetas = cljs.core.map.call(null,(function (p1__36264_SHARP_){
return ((Math.PI / (6)) + p1__36264_SHARP_);
}),cljs.core.map.call(null,(function (p1__36263_SHARP_){
return ((Math.PI / (3)) * p1__36263_SHARP_);
}),cljs.core.range.call(null,(0),(6))));
var iter__18875__auto__ = ((function (thetas){
return (function marchingwestwards$views$hex_points_$_iter__36269(s__36270){
return (new cljs.core.LazySeq(null,((function (thetas){
return (function (){
var s__36270__$1 = s__36270;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36270__$1);
if(temp__4126__auto__){
var s__36270__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36270__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__36270__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__36272 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__36271 = (0);
while(true){
if((i__36271 < size__18874__auto__)){
var theta = cljs.core._nth.call(null,c__18873__auto__,i__36271);
cljs.core.chunk_append.call(null,b__36272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (radius * Math.sin.call(null,theta))),(y + (radius * Math.cos.call(null,theta)))], null));

var G__36273 = (i__36271 + (1));
i__36271 = G__36273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36272),marchingwestwards$views$hex_points_$_iter__36269.call(null,cljs.core.chunk_rest.call(null,s__36270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36272),null);
}
} else {
var theta = cljs.core.first.call(null,s__36270__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (radius * Math.sin.call(null,theta))),(y + (radius * Math.cos.call(null,theta)))], null),marchingwestwards$views$hex_points_$_iter__36269.call(null,cljs.core.rest.call(null,s__36270__$2)));
}
} else {
return null;
}
break;
}
});})(thetas))
,null,null));
});})(thetas))
;
return iter__18875__auto__.call(null,thetas);
});
marchingwestwards.views.hex_point_string = (function marchingwestwards$views$hex_point_string(x,y,radius){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__36274_SHARP_){
return clojure.string.join.call(null,",",p1__36274_SHARP_);
}),marchingwestwards.views.hex_points.call(null,x,y,radius)));
});
marchingwestwards.views.hexagon_radius = (40);
marchingwestwards.views.axial_to_orthogonal = (function marchingwestwards$views$axial_to_orthogonal(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + Math.floor.call(null,(x / (2))))], null);
});
marchingwestwards.views.hexagon = (function marchingwestwards$views$hexagon(x,y){
var pixel_x = ((50) + ((x * marchingwestwards.views.hexagon_radius) * 1.5));
var pixel_y = (((50) + (x * (marchingwestwards.views.hexagon_radius * ((25) / (30))))) + ((y * (2)) * (marchingwestwards.views.hexagon_radius * ((25) / (30)))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),pixel_x,new cljs.core.Keyword(null,"y","y",-1757859776),pixel_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),marchingwestwards.views.hex_point_string.call(null,pixel_x,pixel_y,marchingwestwards.views.hexagon_radius),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgb(255, 255, 255)",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(0, 0, 0)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),pixel_x,new cljs.core.Keyword(null,"y","y",-1757859776),pixel_y,new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"http://127.0.0.1:3449/assets/hexbg/bw-forest.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),pixel_x,new cljs.core.Keyword(null,"y","y",-1757859776),pixel_y,new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null),clojure.string.join.call(null," ",marchingwestwards.views.axial_to_orthogonal.call(null,x,y))], null)], null);
});
marchingwestwards.views.home_panel = (function marchingwestwards$views$home_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.home_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.link_to_about_page], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"s",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"width","width",-384071477),(((8) * 1.8) * marchingwestwards.views.hexagon_radius),new cljs.core.Keyword(null,"height","height",1025178622),(((10) * 1.8) * marchingwestwards.views.hexagon_radius)], null),(function (){var iter__18875__auto__ = (function marchingwestwards$views$home_panel_$_iter__36281(s__36282){
return (new cljs.core.LazySeq(null,(function (){
var s__36282__$1 = s__36282;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36282__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var x = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18871__auto__ = ((function (s__36282__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function marchingwestwards$views$home_panel_$_iter__36281_$_iter__36283(s__36284){
return (new cljs.core.LazySeq(null,((function (s__36282__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__36284__$1 = s__36284;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__36284__$1);
if(temp__4126__auto____$1){
var s__36284__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36284__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__36284__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__36286 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__36285 = (0);
while(true){
if((i__36285 < size__18874__auto__)){
var y = cljs.core._nth.call(null,c__18873__auto__,i__36285);
if(((((0) - (x / (2))) <= y)) && ((((9) - Math.floor.call(null,(x / (2)))) >= y))){
cljs.core.chunk_append.call(null,b__36286,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.hexagon,x,y], null));

var G__36287 = (i__36285 + (1));
i__36285 = G__36287;
continue;
} else {
var G__36288 = (i__36285 + (1));
i__36285 = G__36288;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36286),marchingwestwards$views$home_panel_$_iter__36281_$_iter__36283.call(null,cljs.core.chunk_rest.call(null,s__36284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36286),null);
}
} else {
var y = cljs.core.first.call(null,s__36284__$2);
if(((((0) - (x / (2))) <= y)) && ((((9) - Math.floor.call(null,(x / (2)))) >= y))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.hexagon,x,y], null),marchingwestwards$views$home_panel_$_iter__36281_$_iter__36283.call(null,cljs.core.rest.call(null,s__36284__$2)));
} else {
var G__36289 = cljs.core.rest.call(null,s__36284__$2);
s__36284__$1 = G__36289;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36282__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__36282__$1,x,xs__4624__auto__,temp__4126__auto__))
;
var fs__18872__auto__ = cljs.core.seq.call(null,iterys__18871__auto__.call(null,cljs.core.range.call(null,(-5),(10))));
if(fs__18872__auto__){
return cljs.core.concat.call(null,fs__18872__auto__,marchingwestwards$views$home_panel_$_iter__36281.call(null,cljs.core.rest.call(null,s__36282__$1)));
} else {
var G__36290 = cljs.core.rest.call(null,s__36282__$1);
s__36282__$1 = G__36290;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18875__auto__.call(null,cljs.core.range.call(null,(0),(8)));
})()], null)], null)], null);
});
marchingwestwards.views.about_title = (function marchingwestwards$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
marchingwestwards.views.link_to_home_page = (function marchingwestwards$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
marchingwestwards.views.about_panel = (function marchingwestwards$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.link_to_home_page], null)], null)], null);
});
if(typeof marchingwestwards.views.panels !== 'undefined'){
} else {
marchingwestwards.views.panels = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"marchingwestwards.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,marchingwestwards.views.panels,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.home_panel], null);
}));
cljs.core._add_method.call(null,marchingwestwards.views.panels,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.about_panel], null);
}));
cljs.core._add_method.call(null,marchingwestwards.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
marchingwestwards.views.main_panel = (function marchingwestwards$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marchingwestwards.views.panels.call(null,cljs.core.deref.call(null,active_panel))], null)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1439208274580