// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;

cljs.core.logic.IUnifyTerms = (function (){var obj26576 = {};
return obj26576;
})();

cljs.core.logic._unify_terms = (function cljs$core$logic$_unify_terms(u,v,s){
if((function (){var and__17902__auto__ = u;
if(and__17902__auto__){
return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3;
} else {
return and__17902__auto__;
}
})()){
return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else {
var x__18550__auto__ = (((u == null))?null:u);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_terms["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyTerms.-unify-terms",u);
}
}
})().call(null,u,v,s);
}
});


cljs.core.logic.IUnifyWithNil = (function (){var obj26578 = {};
return obj26578;
})();

cljs.core.logic._unify_with_nil = (function cljs$core$logic$_unify_with_nil(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_nil["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithNil.-unify-with-nil",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IUnifyWithObject = (function (){var obj26580 = {};
return obj26580;
})();

cljs.core.logic._unify_with_object = (function cljs$core$logic$_unify_with_object(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_object["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithObject.-unify-with-object",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IUnifyWithLVar = (function (){var obj26582 = {};
return obj26582;
})();

cljs.core.logic._unify_with_lvar = (function cljs$core$logic$_unify_with_lvar(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_lvar["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithLVar.-unify-with-lvar",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IUnifyWithLSeq = (function (){var obj26584 = {};
return obj26584;
})();

cljs.core.logic._unify_with_lseq = (function cljs$core$logic$_unify_with_lseq(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_lseq["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithLSeq.-unify-with-lseq",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IUnifyWithSequential = (function (){var obj26586 = {};
return obj26586;
})();

cljs.core.logic._unify_with_seq = (function cljs$core$logic$_unify_with_seq(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_seq["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithSequential.-unify-with-seq",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IUnifyWithMap = (function (){var obj26588 = {};
return obj26588;
})();

cljs.core.logic._unify_with_map = (function cljs$core$logic$_unify_with_map(v,u,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify_with_map["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithMap.-unify-with-map",v);
}
}
})().call(null,v,u,s);
}
});


cljs.core.logic.IReifyTerm = (function (){var obj26590 = {};
return obj26590;
})();

cljs.core.logic._reify_term = (function cljs$core$logic$_reify_term(v,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._reify_term["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReifyTerm.-reify-term",v);
}
}
})().call(null,v,s);
}
});


cljs.core.logic.IWalkTerm = (function (){var obj26592 = {};
return obj26592;
})();

cljs.core.logic._walk_term = (function cljs$core$logic$_walk_term(v,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._walk_term["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWalkTerm.-walk-term",v);
}
}
})().call(null,v,s);
}
});


cljs.core.logic.IOccursCheckTerm = (function (){var obj26594 = {};
return obj26594;
})();

cljs.core.logic._occurs_check_term = (function cljs$core$logic$_occurs_check_term(v,x,s){
if((function (){var and__17902__auto__ = v;
if(and__17902__auto__){
return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3;
} else {
return and__17902__auto__;
}
})()){
return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,x,s);
} else {
var x__18550__auto__ = (((v == null))?null:v);
return (function (){var or__17914__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._occurs_check_term["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.-occurs-check-term",v);
}
}
})().call(null,v,x,s);
}
});


cljs.core.logic.IBuildTerm = (function (){var obj26596 = {};
return obj26596;
})();

cljs.core.logic._build_term = (function cljs$core$logic$_build_term(u,s){
if((function (){var and__17902__auto__ = u;
if(and__17902__auto__){
return u.cljs$core$logic$IBuildTerm$_build_term$arity$2;
} else {
return and__17902__auto__;
}
})()){
return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else {
var x__18550__auto__ = (((u == null))?null:u);
return (function (){var or__17914__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._build_term["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBuildTerm.-build-term",u);
}
}
})().call(null,u,s);
}
});


cljs.core.logic.IBind = (function (){var obj26598 = {};
return obj26598;
})();

cljs.core.logic._bind = (function cljs$core$logic$_bind(this$,g){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$IBind$_bind$arity$2;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._bind[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._bind["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBind.-bind",this$);
}
}
})().call(null,this$,g);
}
});


cljs.core.logic.IMPlus = (function (){var obj26600 = {};
return obj26600;
})();

cljs.core.logic._mplus = (function cljs$core$logic$_mplus(a,f){
if((function (){var and__17902__auto__ = a;
if(and__17902__auto__){
return a.cljs$core$logic$IMPlus$_mplus$arity$2;
} else {
return and__17902__auto__;
}
})()){
return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else {
var x__18550__auto__ = (((a == null))?null:a);
return (function (){var or__17914__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._mplus["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMPlus.-mplus",a);
}
}
})().call(null,a,f);
}
});


cljs.core.logic.ITake = (function (){var obj26602 = {};
return obj26602;
})();

cljs.core.logic._take_STAR_ = (function cljs$core$logic$_take_STAR_(a){
if((function (){var and__17902__auto__ = a;
if(and__17902__auto__){
return a.cljs$core$logic$ITake$_take_STAR_$arity$1;
} else {
return and__17902__auto__;
}
})()){
return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else {
var x__18550__auto__ = (((a == null))?null:a);
return (function (){var or__17914__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._take_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITake.-take*",a);
}
}
})().call(null,a);
}
});


/**
* @constructor
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580818;
})
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(self__.lhs),cljs.core.str(" . "),cljs.core.str(self__.rhs),cljs.core.str(")")].join(''));
});

cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var G__26603 = i;
switch (G__26603) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
throw (new Error("Index out of bounds"));

}
});

cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){
var self__ = this;
var ___$1 = this;
var G__26604 = i;
switch (G__26604) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
return not_found;

}
});

cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.call(null,self__.lhs,other.lhs)) && (cljs.core._EQ_.call(null,self__.rhs,other.rhs));
});

cljs.core.logic.Pair.cljs$lang$type = true;

cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair";

cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/Pair");
});

cljs.core.logic.__GT_Pair = (function cljs$core$logic$__GT_Pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});

cljs.core.logic.pair = (function cljs$core$logic$pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.lvar_QMARK_ = (function cljs$core$logic$lvar_QMARK_(x){
return (x instanceof cljs.core.logic.LVar);
});

cljs.core.logic.ISubstitutions = (function (){var obj26608 = {};
return obj26608;
})();

cljs.core.logic._occurs_check = (function cljs$core$logic$_occurs_check(this$,u,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._occurs_check["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-occurs-check",this$);
}
}
})().call(null,this$,u,v);
}
});

cljs.core.logic._ext = (function cljs$core$logic$_ext(this$,u,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_ext$arity$3;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._ext[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._ext["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext",this$);
}
}
})().call(null,this$,u,v);
}
});

cljs.core.logic._ext_no_check = (function cljs$core$logic$_ext_no_check(this$,u,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._ext_no_check["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext-no-check",this$);
}
}
})().call(null,this$,u,v);
}
});

cljs.core.logic._walk = (function cljs$core$logic$_walk(this$,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_walk$arity$2;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._walk[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._walk["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk",this$);
}
}
})().call(null,this$,v);
}
});

cljs.core.logic._walk_STAR_ = (function cljs$core$logic$_walk_STAR_(this$,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._walk_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk*",this$);
}
}
})().call(null,this$,v);
}
});

cljs.core.logic._unify = (function cljs$core$logic$_unify(this$,u,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_unify$arity$3;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._unify[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._unify["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-unify",this$);
}
}
})().call(null,this$,u,v);
}
});

cljs.core.logic._reify_lvar_name = (function cljs$core$logic$_reify_lvar_name(_){
if((function (){var and__17902__auto__ = _;
if(and__17902__auto__){
return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1;
} else {
return and__17902__auto__;
}
})()){
return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else {
var x__18550__auto__ = (((_ == null))?null:_);
return (function (){var or__17914__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._reify_lvar_name["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify-lvar-name",_);
}
}
})().call(null,_);
}
});

cljs.core.logic._reify_STAR_ = (function cljs$core$logic$_reify_STAR_(this$,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._reify_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify*",this$);
}
}
})().call(null,this$,v);
}
});

cljs.core.logic._reify = (function cljs$core$logic$_reify(this$,v){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$ISubstitutions$_reify$arity$2;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$ISubstitutions$_reify$arity$2(this$,v);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._reify[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._reify["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",this$);
}
}
})().call(null,this$,v);
}
});






cljs.core.logic.not_found = (function (){var obj26610 = {};
return obj26610;
})();
/**
 * Similar to Scheme assq, xs must be a List of Pairs
 */
cljs.core.logic.assq = (function cljs$core$logic$assq(k,xs){
var xs__$1 = cljs.core._seq.call(null,xs);
while(true){
if((xs__$1 == null)){
return cljs.core.logic.not_found;
} else {
var x = cljs.core._first.call(null,xs__$1);
var lhs = x.lhs;
if((k === lhs)){
return x.rhs;
} else {
var G__26611 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__26611;
continue;
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s,c,_meta){
this.s = s;
this.c = c;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
})
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.logic.choice.call(null,this$__$1,f);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return g.call(null,this$__$1);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._reify_term.call(null,v__$1,this$__$1);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Substitutions(cljs.core.conj.call(null,self__.s,(new cljs.core.logic.Pair(u,v))),self__.c,self__._meta));
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if((new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695).cljs$core$IFn$_invoke$arity$1(self__._meta)) && (cljs.core.logic._occurs_check.call(null,this$__$1,u,v))){
return cljs.core.logic.fail.call(null,this$__$1);
} else {
return cljs.core.logic._ext_no_check.call(null,this$__$1,u,v);
}
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))){
var rhs = cljs.core.logic.assq.call(null,v,self__.s);
var vp = cljs.core.logic._walk.call(null,this$__$1,rhs);
if((cljs.core.logic.not_found === vp)){
return v;
} else {
return vp;
}
} else {
return v;

}
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if((u === v)){
return this$__$1;
} else {
var u__$1 = cljs.core.logic._walk.call(null,this$__$1,u);
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
if((u__$1 === v__$1)){
return this$__$1;
} else {
return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,this$__$1);
}
}
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._walk_term.call(null,v__$1,this$__$1);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);
return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._occurs_check_term.call(null,v__$1,u,this$__$1);
});

cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("_."),cljs.core.str(cljs.core.count.call(null,self__.s))].join(''));
});

cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,self__.s,writer,opts);
});

cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});

cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.logic.Substitutions(self__.s,self__.c,new_meta));
});

cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.logic.Substitutions.cljs$lang$type = true;

cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";

cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/Substitutions");
});

cljs.core.logic.__GT_Substitutions = (function cljs$core$logic$__GT_Substitutions(s,c,_meta){
return (new cljs.core.logic.Substitutions(s,c,_meta));
});

cljs.core.logic.make_s = (function cljs$core$logic$make_s(){
var G__26613 = arguments.length;
switch (G__26613) {
case 1:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new cljs.core.logic.Substitutions(s,cljs.core.List.EMPTY,null));
});

cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2 = (function (s,c){
return (new cljs.core.logic.Substitutions(s,c,null));
});

cljs.core.logic.make_s.cljs$lang$maxFixedArity = 2;
cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null,cljs.core.List.EMPTY,null);
cljs.core.logic.subst_QMARK_ = (function cljs$core$logic$subst_QMARK_(x){
return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function cljs$core$logic$to_s(v){
var s = cljs.core.reduce.call(null,(function (l,p__26617){
var vec__26618 = p__26617;
var k = cljs.core.nth.call(null,vec__26618,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__26618,(1),null);
return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
}),cljs.core.List.EMPTY,v);
return cljs.core.logic.make_s.call(null,s);
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LVar.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});

cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join(''));
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
});

cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
return cljs.core._EQ_.call(null,cljs.core.logic._walk.call(null,s,v__$1),x);
});

cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._hash.call(null,self__.name);
});

cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var and__17902__auto__ = (o instanceof cljs.core.logic.LVar);
if(and__17902__auto__){
var o__$1 = o;
return (self__.name === o__$1.name);
} else {
return and__17902__auto__;
}
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lvar.call(null,v,u__$1,s);
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return v__$1;
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
});

cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LVar(self__.name,self__.meta));
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.logic._reify_lvar_name.call(null,s));
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,v__$1,u);
});

cljs.core.logic.LVar.cljs$lang$type = true;

cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";

cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/LVar");
});

cljs.core.logic.__GT_LVar = (function cljs$core$logic$__GT_LVar(name,meta){
return (new cljs.core.logic.LVar(name,meta));
});

cljs.core.logic.lvar_sym_counter = cljs.core.atom.call(null,(0));
cljs.core.logic.lvar = (function cljs$core$logic$lvar(){
var G__26620 = arguments.length;
switch (G__26620) {
case 0:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"gen","gen",1783106829,null));
});

cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 = (function (name){
var name__$1 = [cljs.core.str(name),cljs.core.str("_"),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.logic.lvar_sym_counter,cljs.core.inc))].join('');
return (new cljs.core.logic.LVar(name__$1,null));
});

cljs.core.logic.lvar.cljs$lang$maxFixedArity = 1;

cljs.core.logic.LConsSeq = (function (){var obj26623 = {};
return obj26623;
})();

cljs.core.logic._lfirst = (function cljs$core$logic$_lfirst(this$){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._lfirst["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"LConsSeq.-lfirst",this$);
}
}
})().call(null,this$);
}
});

cljs.core.logic._lnext = (function cljs$core$logic$_lnext(this$){
if((function (){var and__17902__auto__ = this$;
if(and__17902__auto__){
return this$.cljs$core$logic$LConsSeq$_lnext$arity$1;
} else {
return and__17902__auto__;
}
})()){
return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else {
var x__18550__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17914__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._lnext["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"LConsSeq.-lnext",this$);
}
}
})().call(null,this$);
}
});


cljs.core.logic.failed_QMARK_ = (function cljs$core$logic$failed_QMARK_(x){
return (x instanceof cljs.core.logic.Fail);
});
cljs.core.logic.lcons_QMARK_ = (function cljs$core$logic$lcons_QMARK_(x){
return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.lcons_pr_seq = (function cljs$core$logic$lcons_pr_seq(x){
if(cljs.core.logic.lcons_QMARK_.call(null,x)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,cljs.core.logic._lfirst.call(null,x),cljs$core$logic$lcons_pr_seq.call(null,cljs.core.logic._lnext.call(null,x)));
}),null,null));
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x),new cljs.core.Symbol(null,".",".",1975675962,null));

}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,meta){
this.a = a;
this.d = d;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
})
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.d;
});

cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq.call(null,this$__$1));
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
});

cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var x__$1 = x;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2)){
var or__17914__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.logic._lfirst.call(null,v__$2));
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
var G__26624 = cljs.core.logic._lnext.call(null,v__$2);
var G__26625 = x__$1;
var G__26626 = s__$1;
v__$2 = G__26624;
x__$1 = G__26625;
s__$1 = G__26626;
continue;
}
} else {
return cljs.core.logic._occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});

cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var or__17914__auto__ = (this$__$1 === o);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var and__17902__auto__ = (o instanceof cljs.core.logic.LCons);
if(and__17902__auto__){
var me = this$__$1;
var you = o;
while(true){
if((me == null)){
return (you == null);
} else {
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,me))){
return true;
} else {
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,you))){
return true;
} else {
if((cljs.core.logic.lcons_QMARK_.call(null,me)) && (cljs.core.logic.lcons_QMARK_.call(null,you))){
var mef = cljs.core.logic._lfirst.call(null,me);
var youf = cljs.core.logic._lfirst.call(null,you);
var and__17902__auto____$1 = (function (){var or__17914__auto____$1 = cljs.core._EQ_.call(null,mef,youf);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
var or__17914__auto____$2 = cljs.core.logic.lvar_QMARK_.call(null,mef);
if(cljs.core.truth_(or__17914__auto____$2)){
return or__17914__auto____$2;
} else {
return cljs.core.logic.lvar_QMARK_.call(null,youf);
}
}
})();
if(cljs.core.truth_(and__17902__auto____$1)){
var G__26627 = cljs.core.logic._lnext.call(null,me);
var G__26628 = cljs.core.logic._lnext.call(null,you);
me = G__26627;
you = G__26628;
continue;
} else {
return and__17902__auto____$1;
}
} else {
return cljs.core._EQ_.call(null,me,you);

}
}
}
}
break;
}
} else {
return and__17902__auto__;
}
}
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._unify_with_lseq.call(null,u,v__$1,s);
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lseq.call(null,v,u__$1,s);
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.lcons.call(null,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lfirst.call(null,v__$1)),cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lnext.call(null,v__$1)));
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var u__$1 = u;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1))){
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else {
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v__$2))){
return cljs.core.logic._unify.call(null,s__$1,v__$2,u__$1);
} else {
if((cljs.core.logic.lcons_QMARK_.call(null,u__$1)) && (cljs.core.logic.lcons_QMARK_.call(null,v__$2))){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.logic._lfirst.call(null,v__$2));
if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2))){
var G__26629 = cljs.core.logic._lnext.call(null,u__$1);
var G__26630 = cljs.core.logic._lnext.call(null,v__$2);
var G__26631 = s__$2;
u__$1 = G__26629;
v__$2 = G__26630;
s__$1 = G__26631;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);

}
}
}
break;
}
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
});

cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LCons(self__.a,self__.d,new_meta));
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2)){
var G__26632 = cljs.core.logic._lnext.call(null,v__$2);
var G__26633 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__26632;
s__$1 = G__26633;
continue;
} else {
return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = true;

cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
});

cljs.core.logic.LCons.cljs$lang$type = true;

cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";

cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/LCons");
});

cljs.core.logic.__GT_LCons = (function cljs$core$logic$__GT_LCons(a,d,meta){
return (new cljs.core.logic.LCons(a,d,meta));
});

/**
 * Constructs a sequence a with an improper tail d if d is a logic variable.
 */
cljs.core.logic.lcons = (function cljs$core$logic$lcons(a,d){
if((cljs.core.coll_QMARK_.call(null,d)) || ((d == null))){
return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else {
return (new cljs.core.logic.LCons(a,d,null));
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});

(cljs.core.logic.IUnifyTerms["_"] = true);

(cljs.core.logic._unify_terms["_"] = (function (u,v,s){
if(cljs.core.sequential_QMARK_.call(null,u)){
return cljs.core.logic._unify_with_seq.call(null,v,u,s);
} else {
return cljs.core.logic._unify_with_object.call(null,v,u,s);
}
}));

(cljs.core.logic.IUnifyTerms["null"] = true);

(cljs.core.logic._unify_terms["null"] = (function (u,v,s){
return cljs.core.logic._unify_with_nil.call(null,v,u,s);
}));
(cljs.core.logic.IUnifyWithNil["_"] = true);

(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithNil["null"] = true);

(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){
return s;
}));
(cljs.core.logic.IUnifyWithObject["_"] = true);

(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){
if(cljs.core._EQ_.call(null,u,v)){
return s;
} else {
return cljs.core.logic.fail.call(null,s);
}
}));

(cljs.core.logic.IUnifyWithObject["null"] = true);

(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithLVar["_"] = true);

(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){
return cljs.core.logic._ext.call(null,s,u,v);
}));

(cljs.core.logic.IUnifyWithLVar["null"] = true);

(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){
return cljs.core.logic._ext_no_check.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["_"] = true);

(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){
if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null)))){
var u__$1 = u;
var v__$1 = cljs.core._seq.call(null,v);
var s__$1 = s;
while(true){
if(!((v__$1 == null))){
if(cljs.core.logic.lcons_QMARK_.call(null,u__$1)){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core._first.call(null,v__$1));
if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2))){
var G__26634 = cljs.core.logic._lnext.call(null,u__$1);
var G__26635 = cljs.core._next.call(null,v__$1);
var G__26636 = s__$2;
u__$1 = G__26634;
v__$1 = G__26635;
s__$1 = G__26636;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$1);
}
} else {
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1))){
return cljs.core.logic._unify.call(null,s__$1,u__$1,cljs.core.List.EMPTY);
} else {
return cljs.core.logic.fail.call(null,s__$1);
}
}
break;
}
} else {
return cljs.core.logic.fail.call(null,s);
}
}));

(cljs.core.logic.IUnifyWithLSeq["null"] = true);

(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithSequential["_"] = true);

(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){
if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null)))){
var u__$1 = cljs.core._seq.call(null,u);
var v__$1 = cljs.core._seq.call(null,v);
var s__$1 = s;
while(true){
if(!((u__$1 == null))){
if(!((v__$1 == null))){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core._first.call(null,u__$1),cljs.core._first.call(null,v__$1));
if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2))){
var G__26637 = cljs.core._next.call(null,u__$1);
var G__26638 = cljs.core._next.call(null,v__$1);
var G__26639 = s__$2;
u__$1 = G__26637;
v__$1 = G__26638;
s__$1 = G__26639;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic.fail.call(null,s__$1);
}
} else {
if(!((v__$1 == null))){
return cljs.core.logic.fail.call(null,s__$1);
} else {
return s__$1;
}
}
break;
}
} else {
return cljs.core.logic.fail.call(null,s);
}
}));

(cljs.core.logic.IUnifyWithSequential["null"] = true);

(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
cljs.core.logic.not_found = (function (){var obj26641 = {};
return obj26641;
})();
cljs.core.logic.unify_with_map_STAR_ = (function cljs$core$logic$unify_with_map_STAR_(v,u,s){
if(!((cljs.core.count.call(null,v) === cljs.core.count.call(null,u)))){
return cljs.core.logic.fail.call(null,s);
} else {
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));
var s__$1 = s;
while(true){
if(ks){
var kf = cljs.core.first.call(null,ks);
var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);
if((vf === cljs.core.logic.not_found)){
return cljs.core.logic.fail.call(null,s__$1);
} else {
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);
if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2))){
var G__26642 = cljs.core.next.call(null,ks);
var G__26643 = s__$2;
ks = G__26642;
s__$1 = G__26643;
continue;
} else {
return cljs.core.logic.fail.call(null,s__$2);
}
}
} else {
return s__$1;
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});

(cljs.core.logic.IUnifyWithMap["_"] = true);

(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithMap["null"] = true);

(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IReifyTerm["_"] = true);

(cljs.core.logic._reify_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
var v__$1 = v;
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,v__$1)){
var G__26644 = cljs.core.next.call(null,v__$1);
var G__26645 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__26644;
s__$1 = G__26645;
continue;
} else {
return s__$1;
}
break;
}
} else {
return s;
}
}));

(cljs.core.logic.IReifyTerm["null"] = true);

(cljs.core.logic._reify_term["null"] = (function (v,s){
return s;
}));
cljs.core.logic.walk_term_map_STAR_ = (function cljs$core$logic$walk_term_map_STAR_(v,s){
var v__$1 = cljs.core._seq.call(null,v);
var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(!((v__$1 == null))){
var vec__26647 = cljs.core._first.call(null,v__$1);
var vfk = cljs.core.nth.call(null,vec__26647,(0),null);
var vfv = cljs.core.nth.call(null,vec__26647,(1),null);
var G__26648 = cljs.core._next.call(null,v__$1);
var G__26649 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__26648;
r = G__26649;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});

cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = true;

cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
var v__$2 = cljs.core._seq.call(null,v__$1);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(!((v__$2 == null))){
var G__26651 = cljs.core._next.call(null,v__$2);
var G__26652 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__26651;
r = G__26652;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});

(cljs.core.logic.IWalkTerm["_"] = true);

(cljs.core.logic._walk_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.map.call(null,(function (p1__26650_SHARP_){
return cljs.core.logic._walk_STAR_.call(null,s,p1__26650_SHARP_);
}),v);
} else {
return v;
}
}));

(cljs.core.logic.IWalkTerm["null"] = true);

(cljs.core.logic._walk_term["null"] = (function (v,s){
return null;
}));
(cljs.core.logic.IOccursCheckTerm["_"] = true);

(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
var v__$1 = cljs.core.seq.call(null,v);
var x__$1 = x;
var s__$1 = s;
while(true){
if(!((v__$1 == null))){
var or__17914__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core._first.call(null,v__$1));
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
var G__26653 = cljs.core._next.call(null,v__$1);
var G__26654 = x__$1;
var G__26655 = s__$1;
v__$1 = G__26653;
x__$1 = G__26654;
s__$1 = G__26655;
continue;
}
} else {
return false;
}
break;
}
} else {
return false;
}
}));

(cljs.core.logic.IOccursCheckTerm["null"] = true);

(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){
return false;
}));
cljs.core.logic.mplus = (function cljs$core$logic$mplus(a,f){
if((function (){var G__26657 = a;
if(G__26657){
var bit__18581__auto__ = null;
if(cljs.core.truth_((function (){var or__17914__auto__ = bit__18581__auto__;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return G__26657.cljs$core$logic$IMPlus$;
}
})())){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.logic._mplus.call(null,a,f);
} else {
return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function cljs$core$logic$take_STAR_(x){
if((function (){var G__26659 = x;
if(G__26659){
var bit__18581__auto__ = null;
if(cljs.core.truth_((function (){var or__17914__auto__ = bit__18581__auto__;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return G__26659.cljs$core$logic$ITake$;
}
})())){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.logic._take_STAR_.call(null,x);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
})
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = true;

cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return cljs.core.logic.take_STAR_.call(null,self__.f);
});})(this$__$1))
,null,null)));
});})(this$__$1))
,null,null));
});

cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = true;

cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){
return cljs.core.logic.mplus.call(null,fp.call(null),self__.f);
});})(this$__$1))
))));
});

cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = true;

cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return cljs.core.logic.mplus.call(null,g.call(null,self__.a),(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){
return cljs.core.logic._bind.call(null,self__.f,g);
});})(this$__$1))
)));
});

cljs.core.logic.Choice.cljs$lang$type = true;

cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";

cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/Choice");
});

cljs.core.logic.__GT_Choice = (function cljs$core$logic$__GT_Choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

cljs.core.logic.choice = (function cljs$core$logic$choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = true;

cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return cljs.core.logic.take_STAR_.call(null,self__.f.call(null));
});})(this$__$1))
,null,null));
});

cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = true;

cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){
return cljs.core.logic.mplus.call(null,fp.call(null),this$__$1);
});})(this$__$1))
));
});

cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = true;

cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){
var a = self__.f.call(null);
return cljs.core.logic._bind.call(null,a,g);
});})(this$__$1))
));
});

cljs.core.logic.Inc.prototype.call = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.f.call(null);
});

cljs.core.logic.Inc.prototype.apply = (function (self__,args26660){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26660)));
});

cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.f.call(null);
});

cljs.core.logic.Inc.cljs$lang$type = true;

cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc";

cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/Inc");
});

cljs.core.logic.__GT_Inc = (function cljs$core$logic$__GT_Inc(f){
return (new cljs.core.logic.Inc(f));
});


/**
* @constructor
*/
cljs.core.logic.Fail = (function (a){
this.a = a;
})
cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$ = true;

cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$ = true;

cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return fp;
});

cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$ = true;

cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.logic.Fail.cljs$lang$type = true;

cljs.core.logic.Fail.cljs$lang$ctorStr = "cljs.core.logic/Fail";

cljs.core.logic.Fail.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.logic/Fail");
});

cljs.core.logic.__GT_Fail = (function cljs$core$logic$__GT_Fail(a){
return (new cljs.core.logic.Fail(a));
});

/**
 * A goal that always succeeds.
 */
cljs.core.logic.succeed = (function cljs$core$logic$succeed(a){
return a;
});
/**
 * A goal that always fails.
 */
cljs.core.logic.fail = (function cljs$core$logic$fail(a){
return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;

cljs.core.logic.IIfA = (function (){var obj26662 = {};
return obj26662;
})();

cljs.core.logic._ifa = (function cljs$core$logic$_ifa(b,gs,c){
if((function (){var and__17902__auto__ = b;
if(and__17902__auto__){
return b.cljs$core$logic$IIfA$_ifa$arity$3;
} else {
return and__17902__auto__;
}
})()){
return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else {
var x__18550__auto__ = (((b == null))?null:b);
return (function (){var or__17914__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._ifa["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIfA.-ifa",b);
}
}
})().call(null,b,gs,c);
}
});


cljs.core.logic.IIfU = (function (){var obj26664 = {};
return obj26664;
})();

cljs.core.logic._ifu = (function cljs$core$logic$_ifu(b,gs,c){
if((function (){var and__17902__auto__ = b;
if(and__17902__auto__){
return b.cljs$core$logic$IIfU$_ifu$arity$3;
} else {
return and__17902__auto__;
}
})()){
return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else {
var x__18550__auto__ = (((b == null))?null:b);
return (function (){var or__17914__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic._ifu["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIfU.-ifu",b);
}
}
})().call(null,b,gs,c);
}
});

cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$ = true;

cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force.call(null,c);
} else {
return null;
}
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$ = true;

cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force.call(null,c);
} else {
return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__26666 = gs;
var vec__26667 = G__26666;
var g0 = cljs.core.nth.call(null,vec__26667,(0),null);
var gr = cljs.core.nthnext.call(null,vec__26667,(1));
var b__$3 = b__$2;
var G__26666__$1 = G__26666;
while(true){
var b__$4 = b__$3;
var vec__26668 = G__26666__$1;
var g0__$1 = cljs.core.nth.call(null,vec__26668,(0),null);
var gr__$1 = cljs.core.nthnext.call(null,vec__26668,(1));
if(cljs.core.truth_(g0__$1)){
var temp__4126__auto__ = g0__$1.call(null,b__$4);
if(cljs.core.truth_(temp__4126__auto__)){
var b__$5 = temp__4126__auto__;
var G__26669 = b__$5;
var G__26670 = gr__$1;
b__$3 = G__26669;
G__26666__$1 = G__26670;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = true;

cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__26672 = gs;
var vec__26673 = G__26672;
var g0 = cljs.core.nth.call(null,vec__26673,(0),null);
var gr = cljs.core.nthnext.call(null,vec__26673,(1));
var b__$3 = b__$2;
var G__26672__$1 = G__26672;
while(true){
var b__$4 = b__$3;
var vec__26674 = G__26672__$1;
var g0__$1 = cljs.core.nth.call(null,vec__26674,(0),null);
var gr__$1 = cljs.core.nthnext.call(null,vec__26674,(1));
if(cljs.core.truth_(g0__$1)){
var temp__4126__auto__ = g0__$1.call(null,b__$4);
if(cljs.core.truth_(temp__4126__auto__)){
var b__$5 = temp__4126__auto__;
var G__26675 = b__$5;
var G__26676 = gr__$1;
b__$3 = G__26675;
G__26672__$1 = G__26676;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = true;

cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){
return cljs.core.logic._ifu.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});

cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = true;

cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){
return cljs.core.logic._ifa.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = true;

cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1,gs);
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = true;

cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1.a,gs);
});
/**
 * A relation where a is nil
 */
cljs.core.logic.nilo = (function cljs$core$logic$nilo(a){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,null,a);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});
});
/**
 * A relation where a is the empty list
 */
cljs.core.logic.emptyo = (function cljs$core$logic$emptyo(a){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.List.EMPTY,a);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l
 * and d is the rest of l
 */
cljs.core.logic.conso = (function cljs$core$logic$conso(a,d,l){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,a,d),l);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l
 */
cljs.core.logic.firsto = (function cljs$core$logic$firsto(l,a){
return (function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind.call(null,a__26205__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
 * A relation where l is a collection, such that d is the rest of l
 */
cljs.core.logic.resto = (function cljs$core$logic$resto(l,d){
return (function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-482876059,null));
return cljs.core.logic._bind.call(null,a__26205__auto__,((function (a){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,a,d),l);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(a))
);
})));
});
});
/**
 * A relation where l is a collection, such that l contains x
 */
cljs.core.logic.membero = (function cljs$core$logic$membero(x,l){
return (function (a26678){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a26678,(function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind.call(null,a__26205__auto__,((function (tail){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,x,tail),l);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(tail))
);
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a26678,(function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",869147608,null));
var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__26205__auto__,((function (head,tail){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,head,tail),l);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(head,tail))
),cljs$core$logic$membero.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
 * A relation where x, y, and z are proper collections,
 * such that z is x appended to y
 */
cljs.core.logic.appendo = (function cljs$core$logic$appendo(x,y,z){
return (function (a26680){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a26680,(function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__26205__auto__,(function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.List.EMPTY,x);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
})),(function (a__26205__auto____$1){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a__26205__auto____$1,(function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,y,z);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a26680,(function (a__26205__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__26205__auto__,((function (a,d){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,a,d),x);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(a,d))
),((function (a,d){
return (function (a__26205__auto____$1){
return (new cljs.core.logic.Inc(((function (a,d){
return (function (){
var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__26205__auto____$1,((function (r,a,d){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,cljs.core.logic.lcons.call(null,a,r),z);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(r,a,d))
),cljs$core$logic$appendo.call(null,d,y,r));
});})(a,d))
));
});})(a,d))
);
})));
}));
}))));
})));
});
});
cljs.core.logic.prefix = (function cljs$core$logic$prefix(s,_LT_s){
if(cljs.core._EQ_.call(null,s,_LT_s)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,cljs$core$logic$prefix.call(null,cljs.core.rest.call(null,s),_LT_s),cljs.core.first.call(null,s));
}
});

cljs.core.logic.IUnifyWithPMap = (function (){var obj26682 = {};
return obj26682;
})();

cljs.core.logic.unify_with_pmap = (function cljs$core$logic$unify_with_pmap(pmap,u,s){
if((function (){var and__17902__auto__ = pmap;
if(and__17902__auto__){
return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3;
} else {
return and__17902__auto__;
}
})()){
return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else {
var x__18550__auto__ = (((pmap == null))?null:pmap);
return (function (){var or__17914__auto__ = (cljs.core.logic.unify_with_pmap[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.logic.unify_with_pmap["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.unify-with-pmap",pmap);
}
}
})().call(null,pmap,u,s);
}
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.logic.PMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18509__auto__,k__18510__auto__){
var self__ = this;
var this__18509__auto____$1 = this;
return cljs.core._lookup.call(null,this__18509__auto____$1,k__18510__auto__,null);
});

cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18511__auto__,k26684,else__18512__auto__){
var self__ = this;
var this__18511__auto____$1 = this;
var G__26686 = k26684;
switch (G__26686) {
default:
return cljs.core.get.call(null,self__.__extmap,k26684,else__18512__auto__);

}
});

cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18523__auto__,writer__18524__auto__,opts__18525__auto__){
var self__ = this;
var this__18523__auto____$1 = this;
var pr_pair__18526__auto__ = ((function (this__18523__auto____$1){
return (function (keyval__18527__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18524__auto__,cljs.core.pr_writer,""," ","",opts__18525__auto__,keyval__18527__auto__);
});})(this__18523__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18524__auto__,pr_pair__18526__auto__,"#cljs.core.logic.PMap{",", ","}",opts__18525__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var ks = cljs.core.keys.call(null,v__$1);
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,ks)){
var kf = cljs.core.first.call(null,ks);
var uf = cljs.core.get.call(null,u,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791));
if(cljs.core._EQ_.call(null,uf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791))){
return cljs.core.logic.fail.call(null,s__$1);
} else {
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,v__$1,kf),uf);
if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2))){
var G__26691 = cljs.core.next.call(null,ks);
var G__26692 = s__$2;
ks = G__26691;
s__$1 = G__26692;
continue;
} else {
return s__$2;
}
}
} else {
return s__$1;
}
break;
}
});

cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18507__auto__){
var self__ = this;
var this__18507__auto____$1 = this;
return self__.__meta;
});

cljs.core.logic.PMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18503__auto__){
var self__ = this;
var this__18503__auto____$1 = this;
return (new cljs.core.logic.PMap(self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18513__auto__){
var self__ = this;
var this__18513__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18504__auto__){
var self__ = this;
var this__18504__auto____$1 = this;
var h__18330__auto__ = self__.__hash;
if(!((h__18330__auto__ == null))){
return h__18330__auto__;
} else {
var h__18330__auto____$1 = cljs.core.hash_imap.call(null,this__18504__auto____$1);
self__.__hash = h__18330__auto____$1;

return h__18330__auto____$1;
}
});

cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18505__auto__,other__18506__auto__){
var self__ = this;
var this__18505__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17902__auto__ = other__18506__auto__;
if(cljs.core.truth_(and__17902__auto__)){
var and__17902__auto____$1 = (this__18505__auto____$1.constructor === other__18506__auto__.constructor);
if(and__17902__auto____$1){
return cljs.core.equiv_map.call(null,this__18505__auto____$1,other__18506__auto__);
} else {
return and__17902__auto____$1;
}
} else {
return and__17902__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = true;

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = true;

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic.unify_with_pmap.call(null,v,u__$1,s);
});

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;

cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._unify_with_map.call(null,v__$1,u,s);
});

cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18518__auto__,k__18519__auto__){
var self__ = this;
var this__18518__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18519__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18518__auto____$1),self__.__meta),k__18519__auto__);
} else {
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18519__auto__)),null));
}
});

cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18516__auto__,k__18517__auto__,G__26683){
var self__ = this;
var this__18516__auto____$1 = this;
var pred__26687 = cljs.core.keyword_identical_QMARK_;
var expr__26688 = k__18517__auto__;
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18517__auto__,G__26683),null));
});

cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18521__auto__){
var self__ = this;
var this__18521__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = true;

cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});

cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18508__auto__,G__26683){
var self__ = this;
var this__18508__auto____$1 = this;
return (new cljs.core.logic.PMap(G__26683,self__.__extmap,self__.__hash));
});

cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18514__auto__,entry__18515__auto__){
var self__ = this;
var this__18514__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18515__auto__)){
return cljs.core._assoc.call(null,this__18514__auto____$1,cljs.core._nth.call(null,entry__18515__auto__,(0)),cljs.core._nth.call(null,entry__18515__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18514__auto____$1,entry__18515__auto__);
}
});

cljs.core.logic.PMap.cljs$lang$type = true;

cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__18543__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});

cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__18543__auto__,writer__18544__auto__){
return cljs.core._write.call(null,writer__18544__auto__,"cljs.core.logic/PMap");
});

cljs.core.logic.__GT_PMap = (function cljs$core$logic$__GT_PMap(){
return (new cljs.core.logic.PMap(null,null,null));
});

cljs.core.logic.map__GT_PMap = (function cljs$core$logic$map__GT_PMap(G__26685){
return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__26685),null));
});

cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = true;

cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
});

(cljs.core.logic.IUnifyWithPMap["_"] = true);

(cljs.core.logic.unify_with_pmap["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithPMap["null"] = true);

(cljs.core.logic.unify_with_pmap["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
/**
 * Given map m, returns partial map that unifies with maps even if it doesn't share all of the keys of that map.
 * Only the keys of the partial map will be unified:
 * 
 * (m/run* [q]
 * (m/fresh [pm x]
 * (m/== pm (partial-map {:a x}))
 * (m/== pm {:a 1 :b 2})
 * (m/== pm q)))
 * ;;=> ({:a 1})
 */
cljs.core.logic.partial_map = (function cljs$core$logic$partial_map(m){
return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.lvarq_sym_QMARK_ = (function cljs$core$logic$lvarq_sym_QMARK_(s){
return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
cljs.core.logic.proc_lvar = (function cljs$core$logic$proc_lvar(lvar_expr,store){
var v = (function (){var temp__4124__auto__ = cljs.core.deref.call(null,store).call(null,lvar_expr);
if(cljs.core.truth_(temp__4124__auto__)){
var u = temp__4124__auto__;
return u;
} else {
return cljs.core.logic.lvar.call(null,lvar_expr);
}
})();
cljs.core.swap_BANG_.call(null,store,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvar_expr,v], null));

return v;
});
cljs.core.logic.lcons_expr_QMARK_ = (function cljs$core$logic$lcons_expr_QMARK_(expr){
var and__17902__auto__ = cljs.core.seq_QMARK_.call(null,expr);
if(and__17902__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",1975675962,null),null], null), null),cljs.core.set.call(null,expr));
} else {
return and__17902__auto__;
}
});
cljs.core.logic.replace_lvar = (function cljs$core$logic$replace_lvar(store){
return (function (expr){
if(cljs.core.truth_(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr))){
return cljs.core.logic.proc_lvar.call(null,expr,store);
} else {
if(cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))){
return cljs.core.logic.prep_STAR_.call(null,expr,store);
} else {
return expr;
}
}
});
});
cljs.core.logic.prep_STAR_ = (function cljs$core$logic$prep_STAR_(){
var G__26694 = arguments.length;
switch (G__26694) {
case 2:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (expr,store){
return cljs.core.logic.prep_STAR_.call(null,expr,store,false,false);
});

cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (expr,store,lcons_QMARK_){
return cljs.core.logic.prep_STAR_.call(null,expr,store,lcons_QMARK_,false);
});

cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (expr,store,lcons_QMARK_,last_QMARK_){
var expr__$1 = (cljs.core.truth_((function (){var and__17902__auto__ = last_QMARK_;
if(cljs.core.truth_(and__17902__auto__)){
return cljs.core.seq.call(null,expr);
} else {
return and__17902__auto__;
}
})())?cljs.core.first.call(null,expr):expr);
if(cljs.core.truth_(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr__$1))){
return cljs.core.logic.proc_lvar.call(null,expr__$1,store);
} else {
if(cljs.core.seq_QMARK_.call(null,expr__$1)){
if(cljs.core.truth_((function (){var or__17914__auto__ = lcons_QMARK_;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return cljs.core.logic.lcons_expr_QMARK_.call(null,expr__$1);
}
})())){
var vec__26695 = expr__$1;
var f = cljs.core.nth.call(null,vec__26695,(0),null);
var n = cljs.core.nthnext.call(null,vec__26695,(1));
var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",1975675962,null));
var tail = cljs.core.logic.prep_STAR_.call(null,n,store,lcons_QMARK_,skip);
if(skip){
return tail;
} else {
return cljs.core.logic.lcons.call(null,cljs.core.logic.prep_STAR_.call(null,f,store),tail);
}
} else {
return clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,store),expr__$1);
}
} else {
return expr__$1;

}
}
});

cljs.core.logic.prep_STAR_.cljs$lang$maxFixedArity = 4;
/**
 * Prep a quoted expression. All symbols preceded by ? will
 * be replaced with logic vars.
 */
cljs.core.logic.prep = (function cljs$core$logic$prep(expr){
var lvars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prepped = (cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))?cljs.core.logic.prep_STAR_.call(null,expr,lvars,true):clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,lvars),expr));
return cljs.core.with_meta.call(null,prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lvars","lvars",2067253268),cljs.core.deref.call(null,lvars)], null));
});
cljs.core.logic.unify = (function cljs$core$logic$unify(s,u,v){
if((u === v)){
return s;
} else {
var u__$1 = cljs.core.logic._walk.call(null,s,u);
var v__$1 = cljs.core.logic._walk.call(null,s,v);
if((u__$1 === v__$1)){
return s;
} else {
return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,s);
}
}
});
/**
 * Unify the terms u and w.
 */
cljs.core.logic.unifier_STAR_ = (function cljs$core$logic$unifier_STAR_(){
var G__26701 = arguments.length;
switch (G__26701) {
case 2:
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18965__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18965__auto__);

}
});

cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
return cljs.core.first.call(null,(function (){var opts__26214__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__26215__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc(((function (opts__26214__auto__){
return (function (){
return ((function (opts__26214__auto__){
return (function (a__26205__auto__){
return (new cljs.core.logic.Inc(((function (opts__26214__auto__){
return (function (){
var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__26205__auto__,((function (q,opts__26214__auto__){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,u,w);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(q,opts__26214__auto__))
),((function (q,opts__26214__auto__){
return (function (a__26193__auto__){
var temp__4124__auto__ = cljs.core.logic._unify.call(null,a__26193__auto__,u,q);
if(cljs.core.truth_(temp__4124__auto__)){
var b__26194__auto__ = temp__4124__auto__;
return b__26194__auto__;
} else {
return cljs.core.logic.fail.call(null,a__26193__auto__);
}
});})(q,opts__26214__auto__))
),((function (q,opts__26214__auto__){
return (function (a__26216__auto__){
return cljs.core.logic._reify.call(null,a__26216__auto__,q);
});})(q,opts__26214__auto__))
);
});})(opts__26214__auto__))
));
});})(opts__26214__auto__))
.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__26214__auto__)));
});})(opts__26214__auto__))
)));
var temp__4124__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__26214__auto__);
if(cljs.core.truth_(temp__4124__auto__)){
var n__26217__auto__ = temp__4124__auto__;
return cljs.core.take.call(null,n__26217__auto__,xs__26215__auto__);
} else {
return xs__26215__auto__;
}
})());
});

cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.unifier_STAR_,cljs.core.logic.unifier_STAR_.call(null,u,w),ts);
});

cljs.core.logic.unifier_STAR_.cljs$lang$applyTo = (function (seq26697){
var G__26698 = cljs.core.first.call(null,seq26697);
var seq26697__$1 = cljs.core.next.call(null,seq26697);
var G__26699 = cljs.core.first.call(null,seq26697__$1);
var seq26697__$2 = cljs.core.next.call(null,seq26697__$1);
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26698,G__26699,seq26697__$2);
});

cljs.core.logic.unifier_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Return the binding map that unifies terms u and w.
 * u and w should prepped terms.
 */
cljs.core.logic.binding_map_STAR_ = (function cljs$core$logic$binding_map_STAR_(){
var G__26707 = arguments.length;
switch (G__26707) {
case 2:
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18965__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18965__auto__);

}
});

cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
var lvars = cljs.core.merge.call(null,new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u)),new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,w)));
var s = cljs.core.logic.unify.call(null,cljs.core.logic.empty_s,u,w);
if(cljs.core.logic.failed_QMARK_.call(null,s)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (lvars,s){
return (function (p__26708){
var vec__26709 = p__26708;
var k = cljs.core.nth.call(null,vec__26709,(0),null);
var v = cljs.core.nth.call(null,vec__26709,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
});})(lvars,s))
,lvars));
}
});

cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.binding_map_STAR_,cljs.core.logic.binding_map_STAR_.call(null,u,w),ts);
});

cljs.core.logic.binding_map_STAR_.cljs$lang$applyTo = (function (seq26703){
var G__26704 = cljs.core.first.call(null,seq26703);
var seq26703__$1 = cljs.core.next.call(null,seq26703);
var G__26705 = cljs.core.first.call(null,seq26703__$1);
var seq26703__$2 = cljs.core.next.call(null,seq26703__$1);
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26704,G__26705,seq26703__$2);
});

cljs.core.logic.binding_map_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Unify the terms u and w. Will prep the terms.
 */
cljs.core.logic.unifier = (function cljs$core$logic$unifier(){
var G__26715 = arguments.length;
switch (G__26715) {
case 2:
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18965__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18965__auto__);

}
});

cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if(!(cljs.core.logic.lcons_QMARK_.call(null,u))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",-1779821081,null),new cljs.core.Symbol(null,"u","u",483896742,null)))))].join('')));
}

if(!(cljs.core.logic.lcons_QMARK_.call(null,w))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",-1779821081,null),new cljs.core.Symbol(null,"w","w",1994700528,null)))))].join('')));
}

var up = cljs.core.logic.prep.call(null,u);
var wp = cljs.core.logic.prep.call(null,w);
return cljs.core.logic.unifier_STAR_.call(null,up,wp);
});

cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.unifier,cljs.core.logic.unifier.call(null,u,w),ts);
});

cljs.core.logic.unifier.cljs$lang$applyTo = (function (seq26711){
var G__26712 = cljs.core.first.call(null,seq26711);
var seq26711__$1 = cljs.core.next.call(null,seq26711);
var G__26713 = cljs.core.first.call(null,seq26711__$1);
var seq26711__$2 = cljs.core.next.call(null,seq26711__$1);
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic(G__26712,G__26713,seq26711__$2);
});

cljs.core.logic.unifier.cljs$lang$maxFixedArity = (2);
/**
 * Return the binding map that unifies terms u and w.
 * Will prep the terms.
 */
cljs.core.logic.binding_map = (function cljs$core$logic$binding_map(){
var G__26721 = arguments.length;
switch (G__26721) {
case 2:
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18965__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18965__auto__);

}
});

cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if(!(cljs.core.logic.lcons_QMARK_.call(null,u))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",-1779821081,null),new cljs.core.Symbol(null,"u","u",483896742,null)))))].join('')));
}

if(!(cljs.core.logic.lcons_QMARK_.call(null,w))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",-1779821081,null),new cljs.core.Symbol(null,"w","w",1994700528,null)))))].join('')));
}

var up = cljs.core.logic.prep.call(null,u);
var wp = cljs.core.logic.prep.call(null,w);
return cljs.core.logic.binding_map_STAR_.call(null,up,wp);
});

cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.binding_map,cljs.core.logic.binding_map.call(null,u,w),ts);
});

cljs.core.logic.binding_map.cljs$lang$applyTo = (function (seq26717){
var G__26718 = cljs.core.first.call(null,seq26717);
var seq26717__$1 = cljs.core.next.call(null,seq26717);
var G__26719 = cljs.core.first.call(null,seq26717__$1);
var seq26717__$2 = cljs.core.next.call(null,seq26717__$1);
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic(G__26718,G__26719,seq26717__$2);
});

cljs.core.logic.binding_map.cljs$lang$maxFixedArity = (2);
cljs.core.logic.to_stream = (function cljs$core$logic$to_stream(aseq){
var aseq__$1 = cljs.core.drop_while.call(null,cljs.core.nil_QMARK_,aseq);
if(cljs.core.seq.call(null,aseq__$1)){
return cljs.core.logic.choice.call(null,cljs.core.first.call(null,aseq__$1),(new cljs.core.logic.Inc(((function (aseq__$1){
return (function (){
return cljs$core$logic$to_stream.call(null,cljs.core.next.call(null,aseq__$1));
});})(aseq__$1))
)));
} else {
return cljs.core.logic.fail.call(null,cljs.core.logic.empty_s);
}
});

//# sourceMappingURL=logic.js.map?rel=1440437059227