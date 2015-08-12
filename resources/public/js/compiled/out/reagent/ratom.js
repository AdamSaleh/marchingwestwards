// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_26027 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_26027;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj26029 = {};
return obj26029;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__26033 = arguments.length;
switch (G__26033) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19172__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19172__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__26034){
var map__26035 = p__26034;
var map__26035__$1 = ((cljs.core.seq_QMARK_.call(null,map__26035))?cljs.core.apply.call(null,cljs.core.hash_map,map__26035):map__26035);
var validator = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq26030){
var G__26031 = cljs.core.first.call(null,seq26030);
var seq26030__$1 = cljs.core.next.call(null,seq26030);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__26031,seq26030__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__26043 = self__.ratom;
if(G__26043){
var bit__18795__auto__ = (G__26043.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18795__auto__) || (G__26043.cljs$core$IDeref$)){
return true;
} else {
if((!G__26043.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26043);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26043);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__26038_SHARP_,p2__26037_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__26037_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__26040_SHARP_,p2__26039_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__26039_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__26042_SHARP_,p2__26041_SHARP_){
return self__.ratom.call(null,self__.path,p2__26041_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_26044 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_26044;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__26049 = path;
if(G__26049){
var bit__18795__auto__ = (G__26049.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18795__auto__) || (G__26049.cljs$core$IDeref$)){
return true;
} else {
if((!G__26049.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26049);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26049);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__26050 = path;
if(G__26050){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__26050.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__26050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__26050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__26050);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__18121__auto__ = (function (){var G__26052 = src;
if(G__26052){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__26052.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__26052.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__26052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__26052);
}
})();
if(or__18121__auto__){
return or__18121__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj26054 = {};
return obj26054;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__18109__auto__ = this$;
if(and__18109__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__18757__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18121__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj26056 = {};
return obj26056;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__18109__auto__ = this$;
if(and__18109__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__18109__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__18757__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18121__auto__ = (reagent.ratom.run[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (reagent.ratom.run["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj26058 = {};
return obj26058;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__18109__auto__ = this$;
if(and__18109__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__18109__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__18757__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18121__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__18109__auto__ = k;
if(and__18109__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__18109__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__18757__auto__ = (((k == null))?null:k);
return (function (){var or__18121__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__18109__auto__ = this$;
if(and__18109__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__18109__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__18757__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18121__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__18109__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__18109__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__18109__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__18121__auto__ = self__.auto_run;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__26059_26072 = cljs.core.seq.call(null,derefed);
var chunk__26060_26073 = null;
var count__26061_26074 = (0);
var i__26062_26075 = (0);
while(true){
if((i__26062_26075 < count__26061_26074)){
var w_26076 = cljs.core._nth.call(null,chunk__26060_26073,i__26062_26075);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_26076)){
} else {
cljs.core.add_watch.call(null,w_26076,this$__$1,reagent.ratom._handle_change);
}

var G__26077 = seq__26059_26072;
var G__26078 = chunk__26060_26073;
var G__26079 = count__26061_26074;
var G__26080 = (i__26062_26075 + (1));
seq__26059_26072 = G__26077;
chunk__26060_26073 = G__26078;
count__26061_26074 = G__26079;
i__26062_26075 = G__26080;
continue;
} else {
var temp__4126__auto___26081 = cljs.core.seq.call(null,seq__26059_26072);
if(temp__4126__auto___26081){
var seq__26059_26082__$1 = temp__4126__auto___26081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26059_26082__$1)){
var c__18906__auto___26083 = cljs.core.chunk_first.call(null,seq__26059_26082__$1);
var G__26084 = cljs.core.chunk_rest.call(null,seq__26059_26082__$1);
var G__26085 = c__18906__auto___26083;
var G__26086 = cljs.core.count.call(null,c__18906__auto___26083);
var G__26087 = (0);
seq__26059_26072 = G__26084;
chunk__26060_26073 = G__26085;
count__26061_26074 = G__26086;
i__26062_26075 = G__26087;
continue;
} else {
var w_26088 = cljs.core.first.call(null,seq__26059_26082__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_26088)){
} else {
cljs.core.add_watch.call(null,w_26088,this$__$1,reagent.ratom._handle_change);
}

var G__26089 = cljs.core.next.call(null,seq__26059_26082__$1);
var G__26090 = null;
var G__26091 = (0);
var G__26092 = (0);
seq__26059_26072 = G__26089;
chunk__26060_26073 = G__26090;
count__26061_26074 = G__26091;
i__26062_26075 = G__26092;
continue;
}
} else {
}
}
break;
}

var seq__26063_26093 = cljs.core.seq.call(null,self__.watching);
var chunk__26064_26094 = null;
var count__26065_26095 = (0);
var i__26066_26096 = (0);
while(true){
if((i__26066_26096 < count__26065_26095)){
var w_26097 = cljs.core._nth.call(null,chunk__26064_26094,i__26066_26096);
if(cljs.core.contains_QMARK_.call(null,derefed,w_26097)){
} else {
cljs.core.remove_watch.call(null,w_26097,this$__$1);
}

var G__26098 = seq__26063_26093;
var G__26099 = chunk__26064_26094;
var G__26100 = count__26065_26095;
var G__26101 = (i__26066_26096 + (1));
seq__26063_26093 = G__26098;
chunk__26064_26094 = G__26099;
count__26065_26095 = G__26100;
i__26066_26096 = G__26101;
continue;
} else {
var temp__4126__auto___26102 = cljs.core.seq.call(null,seq__26063_26093);
if(temp__4126__auto___26102){
var seq__26063_26103__$1 = temp__4126__auto___26102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26063_26103__$1)){
var c__18906__auto___26104 = cljs.core.chunk_first.call(null,seq__26063_26103__$1);
var G__26105 = cljs.core.chunk_rest.call(null,seq__26063_26103__$1);
var G__26106 = c__18906__auto___26104;
var G__26107 = cljs.core.count.call(null,c__18906__auto___26104);
var G__26108 = (0);
seq__26063_26093 = G__26105;
chunk__26064_26094 = G__26106;
count__26065_26095 = G__26107;
i__26066_26096 = G__26108;
continue;
} else {
var w_26109 = cljs.core.first.call(null,seq__26063_26103__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_26109)){
} else {
cljs.core.remove_watch.call(null,w_26109,this$__$1);
}

var G__26110 = cljs.core.next.call(null,seq__26063_26103__$1);
var G__26111 = null;
var G__26112 = (0);
var G__26113 = (0);
seq__26063_26093 = G__26110;
chunk__26064_26094 = G__26111;
count__26065_26095 = G__26112;
i__26066_26096 = G__26113;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_26067 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_26067;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__26068_26114 = cljs.core.seq.call(null,self__.watching);
var chunk__26069_26115 = null;
var count__26070_26116 = (0);
var i__26071_26117 = (0);
while(true){
if((i__26071_26117 < count__26070_26116)){
var w_26118 = cljs.core._nth.call(null,chunk__26069_26115,i__26071_26117);
cljs.core.remove_watch.call(null,w_26118,this$__$1);

var G__26119 = seq__26068_26114;
var G__26120 = chunk__26069_26115;
var G__26121 = count__26070_26116;
var G__26122 = (i__26071_26117 + (1));
seq__26068_26114 = G__26119;
chunk__26069_26115 = G__26120;
count__26070_26116 = G__26121;
i__26071_26117 = G__26122;
continue;
} else {
var temp__4126__auto___26123 = cljs.core.seq.call(null,seq__26068_26114);
if(temp__4126__auto___26123){
var seq__26068_26124__$1 = temp__4126__auto___26123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26068_26124__$1)){
var c__18906__auto___26125 = cljs.core.chunk_first.call(null,seq__26068_26124__$1);
var G__26126 = cljs.core.chunk_rest.call(null,seq__26068_26124__$1);
var G__26127 = c__18906__auto___26125;
var G__26128 = cljs.core.count.call(null,c__18906__auto___26125);
var G__26129 = (0);
seq__26068_26114 = G__26126;
chunk__26069_26115 = G__26127;
count__26070_26116 = G__26128;
i__26071_26117 = G__26129;
continue;
} else {
var w_26130 = cljs.core.first.call(null,seq__26068_26124__$1);
cljs.core.remove_watch.call(null,w_26130,this$__$1);

var G__26131 = cljs.core.next.call(null,seq__26068_26124__$1);
var G__26132 = null;
var G__26133 = (0);
var G__26134 = (0);
seq__26068_26114 = G__26131;
chunk__26069_26115 = G__26132;
count__26070_26116 = G__26133;
i__26071_26117 = G__26134;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__18121__auto__ = self__.auto_run;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_26135 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_26135 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_26135,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__26138){
var map__26139 = p__26138;
var map__26139__$1 = ((cljs.core.seq_QMARK_.call(null,map__26139))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var derefed = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq26136){
var G__26137 = cljs.core.first.call(null,seq26136);
var seq26136__$1 = cljs.core.next.call(null,seq26136);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__26137,seq26136__$1);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__18109__auto__ = self__.changed;
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__18109__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map?rel=1439021437126