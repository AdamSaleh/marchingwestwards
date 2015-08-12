// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t29083 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t29083 = (function (f,fn_handler,meta29084){
this.f = f;
this.fn_handler = fn_handler;
this.meta29084 = meta29084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t29083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t29083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t29083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t29083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29085){
var self__ = this;
var _29085__$1 = this;
return self__.meta29084;
});

cljs.core.async.impl.ioc_helpers.t29083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29085,meta29084__$1){
var self__ = this;
var _29085__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t29083(self__.f,self__.fn_handler,meta29084__$1));
});

cljs.core.async.impl.ioc_helpers.t29083.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t29083.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t29083";

cljs.core.async.impl.ioc_helpers.t29083.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async.impl.ioc-helpers/t29083");
});

cljs.core.async.impl.ioc_helpers.__GT_t29083 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t29083(f__$1,fn_handler__$1,meta29084){
return (new cljs.core.async.impl.ioc_helpers.t29083(f__$1,fn_handler__$1,meta29084));
});

}

return (new cljs.core.async.impl.ioc_helpers.t29083(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29087){if((e29087 instanceof Object)){
var ex = e29087;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));

throw ex;
} else {
throw e29087;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_29090_29092 = state;
(statearr_29090_29092[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_29090_29092[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_29091_29093 = state;
(statearr_29091_29093[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29091_29093[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_29096_29098 = state;
(statearr_29096_29098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_29096_29098[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_29097_29099 = state;
(statearr_29097_29099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29097_29099[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){
return null;
});})(c))
));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18716__auto__,k__18717__auto__){
var self__ = this;
var this__18716__auto____$1 = this;
return cljs.core._lookup.call(null,this__18716__auto____$1,k__18717__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18718__auto__,k29101,else__18719__auto__){
var self__ = this;
var this__18718__auto____$1 = this;
var G__29103 = (((k29101 instanceof cljs.core.Keyword))?k29101.fqn:null);
switch (G__29103) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29101,else__18719__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18730__auto__,writer__18731__auto__,opts__18732__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
var pr_pair__18733__auto__ = ((function (this__18730__auto____$1){
return (function (keyval__18734__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,cljs.core.pr_writer,""," ","",opts__18732__auto__,keyval__18734__auto__);
});})(this__18730__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,pr_pair__18733__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__18732__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18714__auto__){
var self__ = this;
var this__18714__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18710__auto__){
var self__ = this;
var this__18710__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18720__auto__){
var self__ = this;
var this__18720__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18711__auto__){
var self__ = this;
var this__18711__auto____$1 = this;
var h__18537__auto__ = self__.__hash;
if(!((h__18537__auto__ == null))){
return h__18537__auto__;
} else {
var h__18537__auto____$1 = cljs.core.hash_imap.call(null,this__18711__auto____$1);
self__.__hash = h__18537__auto____$1;

return h__18537__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18712__auto__,other__18713__auto__){
var self__ = this;
var this__18712__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18109__auto__ = other__18713__auto__;
if(cljs.core.truth_(and__18109__auto__)){
var and__18109__auto____$1 = (this__18712__auto____$1.constructor === other__18713__auto__.constructor);
if(and__18109__auto____$1){
return cljs.core.equiv_map.call(null,this__18712__auto____$1,other__18713__auto__);
} else {
return and__18109__auto____$1;
}
} else {
return and__18109__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18725__auto__,k__18726__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__18726__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18725__auto____$1),self__.__meta),k__18726__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18726__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18723__auto__,k__18724__auto__,G__29100){
var self__ = this;
var this__18723__auto____$1 = this;
var pred__29104 = cljs.core.keyword_identical_QMARK_;
var expr__29105 = k__18724__auto__;
if(cljs.core.truth_(pred__29104.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__29105))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29100,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29104.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__29105))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29100,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29104.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__29105))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29100,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29104.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__29105))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29100,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29104.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__29105))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29100,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18724__auto__,G__29100),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18728__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18715__auto__,G__29100){
var self__ = this;
var this__18715__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29100,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18721__auto__,entry__18722__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18722__auto__)){
return cljs.core._assoc.call(null,this__18721__auto____$1,cljs.core._nth.call(null,entry__18722__auto__,(0)),cljs.core._nth.call(null,entry__18722__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18721__auto____$1,entry__18722__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__18750__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__18750__auto__,writer__18751__auto__){
return cljs.core._write.call(null,writer__18751__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__29102){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__29102),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__29102),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__29102),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__29102),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__29102),null,cljs.core.dissoc.call(null,G__29102,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_29109 = state;
(statearr_29109[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_29109;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__18109__auto__ = exception;
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,exception_frame);
} else {
return and__18109__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__18109__auto__ = exception;
if(cljs.core.truth_(and__18109__auto__)){
var and__18109__auto____$1 = catch_block;
if(cljs.core.truth_(and__18109__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__18109__auto____$1;
}
} else {
return and__18109__auto__;
}
})())){
var statearr_29115 = state;
(statearr_29115[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_29115[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_29115[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_29115[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));

return statearr_29115;
} else {
if(cljs.core.truth_((function (){var and__18109__auto__ = exception;
if(cljs.core.truth_(and__18109__auto__)){
return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__18109__auto__;
}
})())){
var statearr_29116_29120 = state;
(statearr_29116_29120[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__29121 = state;
state = G__29121;
continue;
} else {
if(cljs.core.truth_((function (){var and__18109__auto__ = exception;
if(cljs.core.truth_(and__18109__auto__)){
var and__18109__auto____$1 = cljs.core.not.call(null,catch_block);
if(and__18109__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__18109__auto____$1;
}
} else {
return and__18109__auto__;
}
})())){
var statearr_29117 = state;
(statearr_29117[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29117[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29117;
} else {
if(cljs.core.truth_((function (){var and__18109__auto__ = cljs.core.not.call(null,exception);
if(and__18109__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__18109__auto__;
}
})())){
var statearr_29118 = state;
(statearr_29118[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29118[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29118;
} else {
if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_29119 = state;
(statearr_29119[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29119[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_29119;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map?rel=1439021440718