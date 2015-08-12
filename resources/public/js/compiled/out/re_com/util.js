// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18875__auto__ = (function re_com$util$fmap_$_iter__29227(s__29228){
return (new cljs.core.LazySeq(null,(function (){
var s__29228__$1 = s__29228;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29228__$1);
if(temp__4126__auto__){
var s__29228__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29228__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__29228__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__29230 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__29229 = (0);
while(true){
if((i__29229 < size__18874__auto__)){
var vec__29233 = cljs.core._nth.call(null,c__18873__auto__,i__29229);
var k = cljs.core.nth.call(null,vec__29233,(0),null);
var val = cljs.core.nth.call(null,vec__29233,(1),null);
cljs.core.chunk_append.call(null,b__29230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__29235 = (i__29229 + (1));
i__29229 = G__29235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29230),re_com$util$fmap_$_iter__29227.call(null,cljs.core.chunk_rest.call(null,s__29228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29230),null);
}
} else {
var vec__29234 = cljs.core.first.call(null,s__29228__$2);
var k = cljs.core.nth.call(null,vec__29234,(0),null);
var val = cljs.core.nth.call(null,vec__29234,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__29227.call(null,cljs.core.rest.call(null,s__29228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18875__auto__.call(null,m);
})());
});
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((function (){var G__29237 = val_or_atom;
if(G__29237){
var bit__18795__auto__ = (G__29237.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18795__auto__) || (G__29237.cljs$core$IDeref$)){
return true;
} else {
if((!G__29237.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__29237);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__29237);
}
})()){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?((0) - val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq29238){
var G__29239 = cljs.core.first.call(null,seq29238);
var seq29238__$1 = cljs.core.next.call(null,seq29238);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__29239,seq29238__$1);
});
/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__29243){
var map__29244 = p__29243;
var map__29244__$1 = ((cljs.core.seq_QMARK_.call(null,map__29244))?cljs.core.apply.call(null,cljs.core.hash_map,map__29244):map__29244);
var id_fn = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__29244,map__29244__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__29244,map__29244__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq29240){
var G__29241 = cljs.core.first.call(null,seq29240);
var seq29240__$1 = cljs.core.next.call(null,seq29240);
var G__29242 = cljs.core.first.call(null,seq29240__$1);
var seq29240__$2 = cljs.core.next.call(null,seq29240__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__29241,G__29242,seq29240__$2);
});
/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__29249){
var map__29250 = p__29249;
var map__29250__$1 = ((cljs.core.seq_QMARK_.call(null,map__29250))?cljs.core.apply.call(null,cljs.core.hash_map,map__29250):map__29250);
var id_fn = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29250,map__29250__$1,id_fn){
return (function (p1__29245_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__29245_SHARP_),id);
});})(map__29250,map__29250__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq29246){
var G__29247 = cljs.core.first.call(null,seq29246);
var seq29246__$1 = cljs.core.next.call(null,seq29246);
var G__29248 = cljs.core.first.call(null,seq29246__$1);
var seq29246__$2 = cljs.core.next.call(null,seq29246__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__29247,G__29248,seq29246__$2);
});
/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 * Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__29255){
var map__29256 = p__29255;
var map__29256__$1 = ((cljs.core.seq_QMARK_.call(null,map__29256))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var id_fn = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__29256,map__29256__$1,id_fn){
return (function (p1__29251_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__29251_SHARP_),id);
});})(map__29256,map__29256__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq29252){
var G__29253 = cljs.core.first.call(null,seq29252);
var seq29252__$1 = cljs.core.next.call(null,seq29252);
var G__29254 = cljs.core.first.call(null,seq29252__$1);
var seq29252__$2 = cljs.core.next.call(null,seq29252__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__29253,G__29254,seq29252__$2);
});
/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__29257 = current_node.parentNode;
var G__29258 = (sum_scroll_left + current_node.scrollLeft);
var G__29259 = (sum_scroll_top + current_node.scrollTop);
current_node = G__29257;
sum_scroll_left = G__29258;
sum_scroll_top = G__29259;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});

//# sourceMappingURL=util.js.map?rel=1439021442060