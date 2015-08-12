// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26552 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26552 = (function (f,fn_handler,meta26553){
this.f = f;
this.fn_handler = fn_handler;
this.meta26553 = meta26553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26552.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26554){
var self__ = this;
var _26554__$1 = this;
return self__.meta26553;
});

cljs.core.async.t26552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26554,meta26553__$1){
var self__ = this;
var _26554__$1 = this;
return (new cljs.core.async.t26552(self__.f,self__.fn_handler,meta26553__$1));
});

cljs.core.async.t26552.cljs$lang$type = true;

cljs.core.async.t26552.cljs$lang$ctorStr = "cljs.core.async/t26552";

cljs.core.async.t26552.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26552");
});

cljs.core.async.__GT_t26552 = (function cljs$core$async$fn_handler_$___GT_t26552(f__$1,fn_handler__$1,meta26553){
return (new cljs.core.async.t26552(f__$1,fn_handler__$1,meta26553));
});

}

return (new cljs.core.async.t26552(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26556 = buff;
if(G__26556){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__26556.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26556.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26556);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26556);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26558 = arguments.length;
switch (G__26558) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26561 = arguments.length;
switch (G__26561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26563 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26563);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26563,ret){
return (function (){
return fn1.call(null,val_26563);
});})(val_26563,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26565 = arguments.length;
switch (G__26565) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19006__auto___26567 = n;
var x_26568 = (0);
while(true){
if((x_26568 < n__19006__auto___26567)){
(a[x_26568] = (0));

var G__26569 = (x_26568 + (1));
x_26568 = G__26569;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26570 = (i + (1));
i = G__26570;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26574 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26574 = (function (flag,alt_flag,meta26575){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26575 = meta26575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26576){
var self__ = this;
var _26576__$1 = this;
return self__.meta26575;
});})(flag))
;

cljs.core.async.t26574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26576,meta26575__$1){
var self__ = this;
var _26576__$1 = this;
return (new cljs.core.async.t26574(self__.flag,self__.alt_flag,meta26575__$1));
});})(flag))
;

cljs.core.async.t26574.cljs$lang$type = true;

cljs.core.async.t26574.cljs$lang$ctorStr = "cljs.core.async/t26574";

cljs.core.async.t26574.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26574");
});})(flag))
;

cljs.core.async.__GT_t26574 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26574(flag__$1,alt_flag__$1,meta26575){
return (new cljs.core.async.t26574(flag__$1,alt_flag__$1,meta26575));
});})(flag))
;

}

return (new cljs.core.async.t26574(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26580 = (function (cb,flag,alt_handler,meta26581){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26581 = meta26581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26582){
var self__ = this;
var _26582__$1 = this;
return self__.meta26581;
});

cljs.core.async.t26580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26582,meta26581__$1){
var self__ = this;
var _26582__$1 = this;
return (new cljs.core.async.t26580(self__.cb,self__.flag,self__.alt_handler,meta26581__$1));
});

cljs.core.async.t26580.cljs$lang$type = true;

cljs.core.async.t26580.cljs$lang$ctorStr = "cljs.core.async/t26580";

cljs.core.async.t26580.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26580");
});

cljs.core.async.__GT_t26580 = (function cljs$core$async$alt_handler_$___GT_t26580(cb__$1,flag__$1,alt_handler__$1,meta26581){
return (new cljs.core.async.t26580(cb__$1,flag__$1,alt_handler__$1,meta26581));
});

}

return (new cljs.core.async.t26580(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26583_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26583_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26584_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26584_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18121__auto__ = wport;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26585 = (i + (1));
i = G__26585;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18121__auto__ = ret;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18109__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26588){
var map__26589 = p__26588;
var map__26589__$1 = ((cljs.core.seq_QMARK_.call(null,map__26589))?cljs.core.apply.call(null,cljs.core.hash_map,map__26589):map__26589);
var opts = map__26589__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26586){
var G__26587 = cljs.core.first.call(null,seq26586);
var seq26586__$1 = cljs.core.next.call(null,seq26586);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26587,seq26586__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26591 = arguments.length;
switch (G__26591) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22016__auto___26640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___26640){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___26640){
return (function (state_26615){
var state_val_26616 = (state_26615[(1)]);
if((state_val_26616 === (7))){
var inst_26611 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
var statearr_26617_26641 = state_26615__$1;
(statearr_26617_26641[(2)] = inst_26611);

(statearr_26617_26641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (1))){
var state_26615__$1 = state_26615;
var statearr_26618_26642 = state_26615__$1;
(statearr_26618_26642[(2)] = null);

(statearr_26618_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (4))){
var inst_26594 = (state_26615[(7)]);
var inst_26594__$1 = (state_26615[(2)]);
var inst_26595 = (inst_26594__$1 == null);
var state_26615__$1 = (function (){var statearr_26619 = state_26615;
(statearr_26619[(7)] = inst_26594__$1);

return statearr_26619;
})();
if(cljs.core.truth_(inst_26595)){
var statearr_26620_26643 = state_26615__$1;
(statearr_26620_26643[(1)] = (5));

} else {
var statearr_26621_26644 = state_26615__$1;
(statearr_26621_26644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (13))){
var state_26615__$1 = state_26615;
var statearr_26622_26645 = state_26615__$1;
(statearr_26622_26645[(2)] = null);

(statearr_26622_26645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (6))){
var inst_26594 = (state_26615[(7)]);
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26615__$1,(11),to,inst_26594);
} else {
if((state_val_26616 === (3))){
var inst_26613 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26615__$1,inst_26613);
} else {
if((state_val_26616 === (12))){
var state_26615__$1 = state_26615;
var statearr_26623_26646 = state_26615__$1;
(statearr_26623_26646[(2)] = null);

(statearr_26623_26646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (2))){
var state_26615__$1 = state_26615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26615__$1,(4),from);
} else {
if((state_val_26616 === (11))){
var inst_26604 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
if(cljs.core.truth_(inst_26604)){
var statearr_26624_26647 = state_26615__$1;
(statearr_26624_26647[(1)] = (12));

} else {
var statearr_26625_26648 = state_26615__$1;
(statearr_26625_26648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (9))){
var state_26615__$1 = state_26615;
var statearr_26626_26649 = state_26615__$1;
(statearr_26626_26649[(2)] = null);

(statearr_26626_26649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (5))){
var state_26615__$1 = state_26615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26627_26650 = state_26615__$1;
(statearr_26627_26650[(1)] = (8));

} else {
var statearr_26628_26651 = state_26615__$1;
(statearr_26628_26651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (14))){
var inst_26609 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
var statearr_26629_26652 = state_26615__$1;
(statearr_26629_26652[(2)] = inst_26609);

(statearr_26629_26652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (10))){
var inst_26601 = (state_26615[(2)]);
var state_26615__$1 = state_26615;
var statearr_26630_26653 = state_26615__$1;
(statearr_26630_26653[(2)] = inst_26601);

(statearr_26630_26653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26616 === (8))){
var inst_26598 = cljs.core.async.close_BANG_.call(null,to);
var state_26615__$1 = state_26615;
var statearr_26631_26654 = state_26615__$1;
(statearr_26631_26654[(2)] = inst_26598);

(statearr_26631_26654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___26640))
;
return ((function (switch__21954__auto__,c__22016__auto___26640){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_26635 = [null,null,null,null,null,null,null,null];
(statearr_26635[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_26635[(1)] = (1));

return statearr_26635;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_26615){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object)){
var ex__21958__auto__ = e26636;
var statearr_26637_26655 = state_26615;
(statearr_26637_26655[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26615;
state_26615 = G__26656;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_26615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_26615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___26640))
})();
var state__22018__auto__ = (function (){var statearr_26638 = f__22017__auto__.call(null);
(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___26640);

return statearr_26638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___26640))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26840){
var vec__26841 = p__26840;
var v = cljs.core.nth.call(null,vec__26841,(0),null);
var p = cljs.core.nth.call(null,vec__26841,(1),null);
var job = vec__26841;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22016__auto___27023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results){
return (function (state_26846){
var state_val_26847 = (state_26846[(1)]);
if((state_val_26847 === (2))){
var inst_26843 = (state_26846[(2)]);
var inst_26844 = cljs.core.async.close_BANG_.call(null,res);
var state_26846__$1 = (function (){var statearr_26848 = state_26846;
(statearr_26848[(7)] = inst_26843);

return statearr_26848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26846__$1,inst_26844);
} else {
if((state_val_26847 === (1))){
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26846__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results))
;
return ((function (switch__21954__auto__,c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_26852 = [null,null,null,null,null,null,null,null];
(statearr_26852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__);

(statearr_26852[(1)] = (1));

return statearr_26852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1 = (function (state_26846){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26853){if((e26853 instanceof Object)){
var ex__21958__auto__ = e26853;
var statearr_26854_27024 = state_26846;
(statearr_26854_27024[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27025 = state_26846;
state_26846 = G__27025;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = function(state_26846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1.call(this,state_26846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results))
})();
var state__22018__auto__ = (function (){var statearr_26855 = f__22017__auto__.call(null);
(statearr_26855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27023);

return statearr_26855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___27023,res,vec__26841,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26856){
var vec__26857 = p__26856;
var v = cljs.core.nth.call(null,vec__26857,(0),null);
var p = cljs.core.nth.call(null,vec__26857,(1),null);
var job = vec__26857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19006__auto___27026 = n;
var __27027 = (0);
while(true){
if((__27027 < n__19006__auto___27026)){
var G__26858_27028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26858_27028) {
case "async":
var c__22016__auto___27030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27027,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (__27027,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function (state_26871){
var state_val_26872 = (state_26871[(1)]);
if((state_val_26872 === (7))){
var inst_26867 = (state_26871[(2)]);
var state_26871__$1 = state_26871;
var statearr_26873_27031 = state_26871__$1;
(statearr_26873_27031[(2)] = inst_26867);

(statearr_26873_27031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (6))){
var state_26871__$1 = state_26871;
var statearr_26874_27032 = state_26871__$1;
(statearr_26874_27032[(2)] = null);

(statearr_26874_27032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (5))){
var state_26871__$1 = state_26871;
var statearr_26875_27033 = state_26871__$1;
(statearr_26875_27033[(2)] = null);

(statearr_26875_27033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (4))){
var inst_26861 = (state_26871[(2)]);
var inst_26862 = async.call(null,inst_26861);
var state_26871__$1 = state_26871;
if(cljs.core.truth_(inst_26862)){
var statearr_26876_27034 = state_26871__$1;
(statearr_26876_27034[(1)] = (5));

} else {
var statearr_26877_27035 = state_26871__$1;
(statearr_26877_27035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (3))){
var inst_26869 = (state_26871[(2)]);
var state_26871__$1 = state_26871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26871__$1,inst_26869);
} else {
if((state_val_26872 === (2))){
var state_26871__$1 = state_26871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26871__$1,(4),jobs);
} else {
if((state_val_26872 === (1))){
var state_26871__$1 = state_26871;
var statearr_26878_27036 = state_26871__$1;
(statearr_26878_27036[(2)] = null);

(statearr_26878_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27027,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
;
return ((function (__27027,switch__21954__auto__,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_26882 = [null,null,null,null,null,null,null];
(statearr_26882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__);

(statearr_26882[(1)] = (1));

return statearr_26882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1 = (function (state_26871){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26883){if((e26883 instanceof Object)){
var ex__21958__auto__ = e26883;
var statearr_26884_27037 = state_26871;
(statearr_26884_27037[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27038 = state_26871;
state_26871 = G__27038;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = function(state_26871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1.call(this,state_26871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__;
})()
;})(__27027,switch__21954__auto__,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
})();
var state__22018__auto__ = (function (){var statearr_26885 = f__22017__auto__.call(null);
(statearr_26885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27030);

return statearr_26885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(__27027,c__22016__auto___27030,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
);


break;
case "compute":
var c__22016__auto___27039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27027,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (__27027,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26894 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26900_27040 = state_26898__$1;
(statearr_26900_27040[(2)] = inst_26894);

(statearr_26900_27040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (6))){
var state_26898__$1 = state_26898;
var statearr_26901_27041 = state_26898__$1;
(statearr_26901_27041[(2)] = null);

(statearr_26901_27041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (5))){
var state_26898__$1 = state_26898;
var statearr_26902_27042 = state_26898__$1;
(statearr_26902_27042[(2)] = null);

(statearr_26902_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var inst_26888 = (state_26898[(2)]);
var inst_26889 = process.call(null,inst_26888);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26889)){
var statearr_26903_27043 = state_26898__$1;
(statearr_26903_27043[(1)] = (5));

} else {
var statearr_26904_27044 = state_26898__$1;
(statearr_26904_27044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26896 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (2))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(4),jobs);
} else {
if((state_val_26899 === (1))){
var state_26898__$1 = state_26898;
var statearr_26905_27045 = state_26898__$1;
(statearr_26905_27045[(2)] = null);

(statearr_26905_27045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27027,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
;
return ((function (__27027,switch__21954__auto__,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1 = (function (state_26898){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__21958__auto__ = e26910;
var statearr_26911_27046 = state_26898;
(statearr_26911_27046[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_26898;
state_26898 = G__27047;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__;
})()
;})(__27027,switch__21954__auto__,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
})();
var state__22018__auto__ = (function (){var statearr_26912 = f__22017__auto__.call(null);
(statearr_26912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27039);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(__27027,c__22016__auto___27039,G__26858_27028,n__19006__auto___27026,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27048 = (__27027 + (1));
__27027 = G__27048;
continue;
} else {
}
break;
}

var c__22016__auto___27049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___27049,jobs,results,process,async){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___27049,jobs,results,process,async){
return (function (state_26934){
var state_val_26935 = (state_26934[(1)]);
if((state_val_26935 === (9))){
var inst_26927 = (state_26934[(2)]);
var state_26934__$1 = (function (){var statearr_26936 = state_26934;
(statearr_26936[(7)] = inst_26927);

return statearr_26936;
})();
var statearr_26937_27050 = state_26934__$1;
(statearr_26937_27050[(2)] = null);

(statearr_26937_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (8))){
var inst_26920 = (state_26934[(8)]);
var inst_26925 = (state_26934[(2)]);
var state_26934__$1 = (function (){var statearr_26938 = state_26934;
(statearr_26938[(9)] = inst_26925);

return statearr_26938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26934__$1,(9),results,inst_26920);
} else {
if((state_val_26935 === (7))){
var inst_26930 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
var statearr_26939_27051 = state_26934__$1;
(statearr_26939_27051[(2)] = inst_26930);

(statearr_26939_27051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (6))){
var inst_26920 = (state_26934[(8)]);
var inst_26915 = (state_26934[(10)]);
var inst_26920__$1 = cljs.core.async.chan.call(null,(1));
var inst_26921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26922 = [inst_26915,inst_26920__$1];
var inst_26923 = (new cljs.core.PersistentVector(null,2,(5),inst_26921,inst_26922,null));
var state_26934__$1 = (function (){var statearr_26940 = state_26934;
(statearr_26940[(8)] = inst_26920__$1);

return statearr_26940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26934__$1,(8),jobs,inst_26923);
} else {
if((state_val_26935 === (5))){
var inst_26918 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26934__$1 = state_26934;
var statearr_26941_27052 = state_26934__$1;
(statearr_26941_27052[(2)] = inst_26918);

(statearr_26941_27052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (4))){
var inst_26915 = (state_26934[(10)]);
var inst_26915__$1 = (state_26934[(2)]);
var inst_26916 = (inst_26915__$1 == null);
var state_26934__$1 = (function (){var statearr_26942 = state_26934;
(statearr_26942[(10)] = inst_26915__$1);

return statearr_26942;
})();
if(cljs.core.truth_(inst_26916)){
var statearr_26943_27053 = state_26934__$1;
(statearr_26943_27053[(1)] = (5));

} else {
var statearr_26944_27054 = state_26934__$1;
(statearr_26944_27054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (3))){
var inst_26932 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26934__$1,inst_26932);
} else {
if((state_val_26935 === (2))){
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26934__$1,(4),from);
} else {
if((state_val_26935 === (1))){
var state_26934__$1 = state_26934;
var statearr_26945_27055 = state_26934__$1;
(statearr_26945_27055[(2)] = null);

(statearr_26945_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___27049,jobs,results,process,async))
;
return ((function (switch__21954__auto__,c__22016__auto___27049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_26949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__);

(statearr_26949[(1)] = (1));

return statearr_26949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1 = (function (state_26934){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e26950){if((e26950 instanceof Object)){
var ex__21958__auto__ = e26950;
var statearr_26951_27056 = state_26934;
(statearr_26951_27056[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27057 = state_26934;
state_26934 = G__27057;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = function(state_26934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1.call(this,state_26934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___27049,jobs,results,process,async))
})();
var state__22018__auto__ = (function (){var statearr_26952 = f__22017__auto__.call(null);
(statearr_26952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27049);

return statearr_26952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___27049,jobs,results,process,async))
);


var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__,jobs,results,process,async){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__,jobs,results,process,async){
return (function (state_26990){
var state_val_26991 = (state_26990[(1)]);
if((state_val_26991 === (7))){
var inst_26986 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26992_27058 = state_26990__$1;
(statearr_26992_27058[(2)] = inst_26986);

(statearr_26992_27058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (20))){
var state_26990__$1 = state_26990;
var statearr_26993_27059 = state_26990__$1;
(statearr_26993_27059[(2)] = null);

(statearr_26993_27059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (1))){
var state_26990__$1 = state_26990;
var statearr_26994_27060 = state_26990__$1;
(statearr_26994_27060[(2)] = null);

(statearr_26994_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (4))){
var inst_26955 = (state_26990[(7)]);
var inst_26955__$1 = (state_26990[(2)]);
var inst_26956 = (inst_26955__$1 == null);
var state_26990__$1 = (function (){var statearr_26995 = state_26990;
(statearr_26995[(7)] = inst_26955__$1);

return statearr_26995;
})();
if(cljs.core.truth_(inst_26956)){
var statearr_26996_27061 = state_26990__$1;
(statearr_26996_27061[(1)] = (5));

} else {
var statearr_26997_27062 = state_26990__$1;
(statearr_26997_27062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (15))){
var inst_26968 = (state_26990[(8)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26990__$1,(18),to,inst_26968);
} else {
if((state_val_26991 === (21))){
var inst_26981 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26998_27063 = state_26990__$1;
(statearr_26998_27063[(2)] = inst_26981);

(statearr_26998_27063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (13))){
var inst_26983 = (state_26990[(2)]);
var state_26990__$1 = (function (){var statearr_26999 = state_26990;
(statearr_26999[(9)] = inst_26983);

return statearr_26999;
})();
var statearr_27000_27064 = state_26990__$1;
(statearr_27000_27064[(2)] = null);

(statearr_27000_27064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (6))){
var inst_26955 = (state_26990[(7)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(11),inst_26955);
} else {
if((state_val_26991 === (17))){
var inst_26976 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
if(cljs.core.truth_(inst_26976)){
var statearr_27001_27065 = state_26990__$1;
(statearr_27001_27065[(1)] = (19));

} else {
var statearr_27002_27066 = state_26990__$1;
(statearr_27002_27066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (3))){
var inst_26988 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26990__$1,inst_26988);
} else {
if((state_val_26991 === (12))){
var inst_26965 = (state_26990[(10)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(14),inst_26965);
} else {
if((state_val_26991 === (2))){
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(4),results);
} else {
if((state_val_26991 === (19))){
var state_26990__$1 = state_26990;
var statearr_27003_27067 = state_26990__$1;
(statearr_27003_27067[(2)] = null);

(statearr_27003_27067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (11))){
var inst_26965 = (state_26990[(2)]);
var state_26990__$1 = (function (){var statearr_27004 = state_26990;
(statearr_27004[(10)] = inst_26965);

return statearr_27004;
})();
var statearr_27005_27068 = state_26990__$1;
(statearr_27005_27068[(2)] = null);

(statearr_27005_27068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (9))){
var state_26990__$1 = state_26990;
var statearr_27006_27069 = state_26990__$1;
(statearr_27006_27069[(2)] = null);

(statearr_27006_27069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (5))){
var state_26990__$1 = state_26990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27007_27070 = state_26990__$1;
(statearr_27007_27070[(1)] = (8));

} else {
var statearr_27008_27071 = state_26990__$1;
(statearr_27008_27071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (14))){
var inst_26968 = (state_26990[(8)]);
var inst_26970 = (state_26990[(11)]);
var inst_26968__$1 = (state_26990[(2)]);
var inst_26969 = (inst_26968__$1 == null);
var inst_26970__$1 = cljs.core.not.call(null,inst_26969);
var state_26990__$1 = (function (){var statearr_27009 = state_26990;
(statearr_27009[(8)] = inst_26968__$1);

(statearr_27009[(11)] = inst_26970__$1);

return statearr_27009;
})();
if(inst_26970__$1){
var statearr_27010_27072 = state_26990__$1;
(statearr_27010_27072[(1)] = (15));

} else {
var statearr_27011_27073 = state_26990__$1;
(statearr_27011_27073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (16))){
var inst_26970 = (state_26990[(11)]);
var state_26990__$1 = state_26990;
var statearr_27012_27074 = state_26990__$1;
(statearr_27012_27074[(2)] = inst_26970);

(statearr_27012_27074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (10))){
var inst_26962 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_27013_27075 = state_26990__$1;
(statearr_27013_27075[(2)] = inst_26962);

(statearr_27013_27075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (18))){
var inst_26973 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_27014_27076 = state_26990__$1;
(statearr_27014_27076[(2)] = inst_26973);

(statearr_27014_27076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (8))){
var inst_26959 = cljs.core.async.close_BANG_.call(null,to);
var state_26990__$1 = state_26990;
var statearr_27015_27077 = state_26990__$1;
(statearr_27015_27077[(2)] = inst_26959);

(statearr_27015_27077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto__,jobs,results,process,async))
;
return ((function (switch__21954__auto__,c__22016__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_27019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__);

(statearr_27019[(1)] = (1));

return statearr_27019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1 = (function (state_26990){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_26990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e27020){if((e27020 instanceof Object)){
var ex__21958__auto__ = e27020;
var statearr_27021_27078 = state_26990;
(statearr_27021_27078[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27079 = state_26990;
state_26990 = G__27079;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__ = function(state_26990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1.call(this,state_26990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__,jobs,results,process,async))
})();
var state__22018__auto__ = (function (){var statearr_27022 = f__22017__auto__.call(null);
(statearr_27022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_27022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__,jobs,results,process,async))
);

return c__22016__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27081 = arguments.length;
switch (G__27081) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27084 = arguments.length;
switch (G__27084) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27087 = arguments.length;
switch (G__27087) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22016__auto___27139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___27139,tc,fc){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___27139,tc,fc){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (7))){
var inst_27109 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27115_27140 = state_27113__$1;
(statearr_27115_27140[(2)] = inst_27109);

(statearr_27115_27140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (1))){
var state_27113__$1 = state_27113;
var statearr_27116_27141 = state_27113__$1;
(statearr_27116_27141[(2)] = null);

(statearr_27116_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (4))){
var inst_27090 = (state_27113[(7)]);
var inst_27090__$1 = (state_27113[(2)]);
var inst_27091 = (inst_27090__$1 == null);
var state_27113__$1 = (function (){var statearr_27117 = state_27113;
(statearr_27117[(7)] = inst_27090__$1);

return statearr_27117;
})();
if(cljs.core.truth_(inst_27091)){
var statearr_27118_27142 = state_27113__$1;
(statearr_27118_27142[(1)] = (5));

} else {
var statearr_27119_27143 = state_27113__$1;
(statearr_27119_27143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (13))){
var state_27113__$1 = state_27113;
var statearr_27120_27144 = state_27113__$1;
(statearr_27120_27144[(2)] = null);

(statearr_27120_27144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (6))){
var inst_27090 = (state_27113[(7)]);
var inst_27096 = p.call(null,inst_27090);
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27096)){
var statearr_27121_27145 = state_27113__$1;
(statearr_27121_27145[(1)] = (9));

} else {
var statearr_27122_27146 = state_27113__$1;
(statearr_27122_27146[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (3))){
var inst_27111 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
if((state_val_27114 === (12))){
var state_27113__$1 = state_27113;
var statearr_27123_27147 = state_27113__$1;
(statearr_27123_27147[(2)] = null);

(statearr_27123_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (2))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(4),ch);
} else {
if((state_val_27114 === (11))){
var inst_27090 = (state_27113[(7)]);
var inst_27100 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(8),inst_27100,inst_27090);
} else {
if((state_val_27114 === (9))){
var state_27113__$1 = state_27113;
var statearr_27124_27148 = state_27113__$1;
(statearr_27124_27148[(2)] = tc);

(statearr_27124_27148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (5))){
var inst_27093 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27094 = cljs.core.async.close_BANG_.call(null,fc);
var state_27113__$1 = (function (){var statearr_27125 = state_27113;
(statearr_27125[(8)] = inst_27093);

return statearr_27125;
})();
var statearr_27126_27149 = state_27113__$1;
(statearr_27126_27149[(2)] = inst_27094);

(statearr_27126_27149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (14))){
var inst_27107 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27127_27150 = state_27113__$1;
(statearr_27127_27150[(2)] = inst_27107);

(statearr_27127_27150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (10))){
var state_27113__$1 = state_27113;
var statearr_27128_27151 = state_27113__$1;
(statearr_27128_27151[(2)] = fc);

(statearr_27128_27151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (8))){
var inst_27102 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27102)){
var statearr_27129_27152 = state_27113__$1;
(statearr_27129_27152[(1)] = (12));

} else {
var statearr_27130_27153 = state_27113__$1;
(statearr_27130_27153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___27139,tc,fc))
;
return ((function (switch__21954__auto__,c__22016__auto___27139,tc,fc){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_27134 = [null,null,null,null,null,null,null,null,null];
(statearr_27134[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_27134[(1)] = (1));

return statearr_27134;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_27113){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e27135){if((e27135 instanceof Object)){
var ex__21958__auto__ = e27135;
var statearr_27136_27154 = state_27113;
(statearr_27136_27154[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_27113;
state_27113 = G__27155;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___27139,tc,fc))
})();
var state__22018__auto__ = (function (){var statearr_27137 = f__22017__auto__.call(null);
(statearr_27137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27139);

return statearr_27137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___27139,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__){
return (function (state_27202){
var state_val_27203 = (state_27202[(1)]);
if((state_val_27203 === (7))){
var inst_27198 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
var statearr_27204_27220 = state_27202__$1;
(statearr_27204_27220[(2)] = inst_27198);

(statearr_27204_27220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (6))){
var inst_27191 = (state_27202[(7)]);
var inst_27188 = (state_27202[(8)]);
var inst_27195 = f.call(null,inst_27188,inst_27191);
var inst_27188__$1 = inst_27195;
var state_27202__$1 = (function (){var statearr_27205 = state_27202;
(statearr_27205[(8)] = inst_27188__$1);

return statearr_27205;
})();
var statearr_27206_27221 = state_27202__$1;
(statearr_27206_27221[(2)] = null);

(statearr_27206_27221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (5))){
var inst_27188 = (state_27202[(8)]);
var state_27202__$1 = state_27202;
var statearr_27207_27222 = state_27202__$1;
(statearr_27207_27222[(2)] = inst_27188);

(statearr_27207_27222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (4))){
var inst_27191 = (state_27202[(7)]);
var inst_27191__$1 = (state_27202[(2)]);
var inst_27192 = (inst_27191__$1 == null);
var state_27202__$1 = (function (){var statearr_27208 = state_27202;
(statearr_27208[(7)] = inst_27191__$1);

return statearr_27208;
})();
if(cljs.core.truth_(inst_27192)){
var statearr_27209_27223 = state_27202__$1;
(statearr_27209_27223[(1)] = (5));

} else {
var statearr_27210_27224 = state_27202__$1;
(statearr_27210_27224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (3))){
var inst_27200 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27202__$1,inst_27200);
} else {
if((state_val_27203 === (2))){
var state_27202__$1 = state_27202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27202__$1,(4),ch);
} else {
if((state_val_27203 === (1))){
var inst_27188 = init;
var state_27202__$1 = (function (){var statearr_27211 = state_27202;
(statearr_27211[(8)] = inst_27188);

return statearr_27211;
})();
var statearr_27212_27225 = state_27202__$1;
(statearr_27212_27225[(2)] = null);

(statearr_27212_27225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22016__auto__))
;
return ((function (switch__21954__auto__,c__22016__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21955__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21955__auto____0 = (function (){
var statearr_27216 = [null,null,null,null,null,null,null,null,null];
(statearr_27216[(0)] = cljs$core$async$reduce_$_state_machine__21955__auto__);

(statearr_27216[(1)] = (1));

return statearr_27216;
});
var cljs$core$async$reduce_$_state_machine__21955__auto____1 = (function (state_27202){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_27202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e27217){if((e27217 instanceof Object)){
var ex__21958__auto__ = e27217;
var statearr_27218_27226 = state_27202;
(statearr_27218_27226[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27202;
state_27202 = G__27227;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21955__auto__ = function(state_27202){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21955__auto____1.call(this,state_27202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21955__auto____0;
cljs$core$async$reduce_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21955__auto____1;
return cljs$core$async$reduce_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__))
})();
var state__22018__auto__ = (function (){var statearr_27219 = f__22017__auto__.call(null);
(statearr_27219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_27219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__))
);

return c__22016__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27229 = arguments.length;
switch (G__27229) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__){
return (function (state_27254){
var state_val_27255 = (state_27254[(1)]);
if((state_val_27255 === (7))){
var inst_27236 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27256_27280 = state_27254__$1;
(statearr_27256_27280[(2)] = inst_27236);

(statearr_27256_27280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (1))){
var inst_27230 = cljs.core.seq.call(null,coll);
var inst_27231 = inst_27230;
var state_27254__$1 = (function (){var statearr_27257 = state_27254;
(statearr_27257[(7)] = inst_27231);

return statearr_27257;
})();
var statearr_27258_27281 = state_27254__$1;
(statearr_27258_27281[(2)] = null);

(statearr_27258_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (4))){
var inst_27231 = (state_27254[(7)]);
var inst_27234 = cljs.core.first.call(null,inst_27231);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27254__$1,(7),ch,inst_27234);
} else {
if((state_val_27255 === (13))){
var inst_27248 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27259_27282 = state_27254__$1;
(statearr_27259_27282[(2)] = inst_27248);

(statearr_27259_27282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (6))){
var inst_27239 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27239)){
var statearr_27260_27283 = state_27254__$1;
(statearr_27260_27283[(1)] = (8));

} else {
var statearr_27261_27284 = state_27254__$1;
(statearr_27261_27284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (3))){
var inst_27252 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27254__$1,inst_27252);
} else {
if((state_val_27255 === (12))){
var state_27254__$1 = state_27254;
var statearr_27262_27285 = state_27254__$1;
(statearr_27262_27285[(2)] = null);

(statearr_27262_27285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (2))){
var inst_27231 = (state_27254[(7)]);
var state_27254__$1 = state_27254;
if(cljs.core.truth_(inst_27231)){
var statearr_27263_27286 = state_27254__$1;
(statearr_27263_27286[(1)] = (4));

} else {
var statearr_27264_27287 = state_27254__$1;
(statearr_27264_27287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (11))){
var inst_27245 = cljs.core.async.close_BANG_.call(null,ch);
var state_27254__$1 = state_27254;
var statearr_27265_27288 = state_27254__$1;
(statearr_27265_27288[(2)] = inst_27245);

(statearr_27265_27288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (9))){
var state_27254__$1 = state_27254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27266_27289 = state_27254__$1;
(statearr_27266_27289[(1)] = (11));

} else {
var statearr_27267_27290 = state_27254__$1;
(statearr_27267_27290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (5))){
var inst_27231 = (state_27254[(7)]);
var state_27254__$1 = state_27254;
var statearr_27268_27291 = state_27254__$1;
(statearr_27268_27291[(2)] = inst_27231);

(statearr_27268_27291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (10))){
var inst_27250 = (state_27254[(2)]);
var state_27254__$1 = state_27254;
var statearr_27269_27292 = state_27254__$1;
(statearr_27269_27292[(2)] = inst_27250);

(statearr_27269_27292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27255 === (8))){
var inst_27231 = (state_27254[(7)]);
var inst_27241 = cljs.core.next.call(null,inst_27231);
var inst_27231__$1 = inst_27241;
var state_27254__$1 = (function (){var statearr_27270 = state_27254;
(statearr_27270[(7)] = inst_27231__$1);

return statearr_27270;
})();
var statearr_27271_27293 = state_27254__$1;
(statearr_27271_27293[(2)] = null);

(statearr_27271_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto__))
;
return ((function (switch__21954__auto__,c__22016__auto__){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_27254){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_27254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__21958__auto__ = e27276;
var statearr_27277_27294 = state_27254;
(statearr_27277_27294[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27254;
state_27254 = G__27295;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_27254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_27254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__))
})();
var state__22018__auto__ = (function (){var statearr_27278 = f__22017__auto__.call(null);
(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__))
);

return c__22016__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27297 = {};
return obj27297;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18109__auto__ = _;
if(and__18109__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18757__auto__ = (((_ == null))?null:_);
return (function (){var or__18121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27299 = {};
return obj27299;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27521 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27521 = (function (cs,ch,mult,meta27522){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27522 = meta27522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27521.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27521.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27521.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27521.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27521.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27523){
var self__ = this;
var _27523__$1 = this;
return self__.meta27522;
});})(cs))
;

cljs.core.async.t27521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27523,meta27522__$1){
var self__ = this;
var _27523__$1 = this;
return (new cljs.core.async.t27521(self__.cs,self__.ch,self__.mult,meta27522__$1));
});})(cs))
;

cljs.core.async.t27521.cljs$lang$type = true;

cljs.core.async.t27521.cljs$lang$ctorStr = "cljs.core.async/t27521";

cljs.core.async.t27521.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27521");
});})(cs))
;

cljs.core.async.__GT_t27521 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27521(cs__$1,ch__$1,mult__$1,meta27522){
return (new cljs.core.async.t27521(cs__$1,ch__$1,mult__$1,meta27522));
});})(cs))
;

}

return (new cljs.core.async.t27521(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22016__auto___27742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___27742,cs,m,dchan,dctr,done){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___27742,cs,m,dchan,dctr,done){
return (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (7))){
var inst_27650 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27656_27743 = state_27654__$1;
(statearr_27656_27743[(2)] = inst_27650);

(statearr_27656_27743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (20))){
var inst_27555 = (state_27654[(7)]);
var inst_27565 = cljs.core.first.call(null,inst_27555);
var inst_27566 = cljs.core.nth.call(null,inst_27565,(0),null);
var inst_27567 = cljs.core.nth.call(null,inst_27565,(1),null);
var state_27654__$1 = (function (){var statearr_27657 = state_27654;
(statearr_27657[(8)] = inst_27566);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27567)){
var statearr_27658_27744 = state_27654__$1;
(statearr_27658_27744[(1)] = (22));

} else {
var statearr_27659_27745 = state_27654__$1;
(statearr_27659_27745[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (27))){
var inst_27526 = (state_27654[(9)]);
var inst_27602 = (state_27654[(10)]);
var inst_27597 = (state_27654[(11)]);
var inst_27595 = (state_27654[(12)]);
var inst_27602__$1 = cljs.core._nth.call(null,inst_27595,inst_27597);
var inst_27603 = cljs.core.async.put_BANG_.call(null,inst_27602__$1,inst_27526,done);
var state_27654__$1 = (function (){var statearr_27660 = state_27654;
(statearr_27660[(10)] = inst_27602__$1);

return statearr_27660;
})();
if(cljs.core.truth_(inst_27603)){
var statearr_27661_27746 = state_27654__$1;
(statearr_27661_27746[(1)] = (30));

} else {
var statearr_27662_27747 = state_27654__$1;
(statearr_27662_27747[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (1))){
var state_27654__$1 = state_27654;
var statearr_27663_27748 = state_27654__$1;
(statearr_27663_27748[(2)] = null);

(statearr_27663_27748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (24))){
var inst_27555 = (state_27654[(7)]);
var inst_27572 = (state_27654[(2)]);
var inst_27573 = cljs.core.next.call(null,inst_27555);
var inst_27535 = inst_27573;
var inst_27536 = null;
var inst_27537 = (0);
var inst_27538 = (0);
var state_27654__$1 = (function (){var statearr_27664 = state_27654;
(statearr_27664[(13)] = inst_27572);

(statearr_27664[(14)] = inst_27537);

(statearr_27664[(15)] = inst_27535);

(statearr_27664[(16)] = inst_27538);

(statearr_27664[(17)] = inst_27536);

return statearr_27664;
})();
var statearr_27665_27749 = state_27654__$1;
(statearr_27665_27749[(2)] = null);

(statearr_27665_27749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (39))){
var state_27654__$1 = state_27654;
var statearr_27669_27750 = state_27654__$1;
(statearr_27669_27750[(2)] = null);

(statearr_27669_27750[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (4))){
var inst_27526 = (state_27654[(9)]);
var inst_27526__$1 = (state_27654[(2)]);
var inst_27527 = (inst_27526__$1 == null);
var state_27654__$1 = (function (){var statearr_27670 = state_27654;
(statearr_27670[(9)] = inst_27526__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27527)){
var statearr_27671_27751 = state_27654__$1;
(statearr_27671_27751[(1)] = (5));

} else {
var statearr_27672_27752 = state_27654__$1;
(statearr_27672_27752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (15))){
var inst_27537 = (state_27654[(14)]);
var inst_27535 = (state_27654[(15)]);
var inst_27538 = (state_27654[(16)]);
var inst_27536 = (state_27654[(17)]);
var inst_27551 = (state_27654[(2)]);
var inst_27552 = (inst_27538 + (1));
var tmp27666 = inst_27537;
var tmp27667 = inst_27535;
var tmp27668 = inst_27536;
var inst_27535__$1 = tmp27667;
var inst_27536__$1 = tmp27668;
var inst_27537__$1 = tmp27666;
var inst_27538__$1 = inst_27552;
var state_27654__$1 = (function (){var statearr_27673 = state_27654;
(statearr_27673[(18)] = inst_27551);

(statearr_27673[(14)] = inst_27537__$1);

(statearr_27673[(15)] = inst_27535__$1);

(statearr_27673[(16)] = inst_27538__$1);

(statearr_27673[(17)] = inst_27536__$1);

return statearr_27673;
})();
var statearr_27674_27753 = state_27654__$1;
(statearr_27674_27753[(2)] = null);

(statearr_27674_27753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (21))){
var inst_27576 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27678_27754 = state_27654__$1;
(statearr_27678_27754[(2)] = inst_27576);

(statearr_27678_27754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (31))){
var inst_27602 = (state_27654[(10)]);
var inst_27606 = done.call(null,null);
var inst_27607 = cljs.core.async.untap_STAR_.call(null,m,inst_27602);
var state_27654__$1 = (function (){var statearr_27679 = state_27654;
(statearr_27679[(19)] = inst_27606);

return statearr_27679;
})();
var statearr_27680_27755 = state_27654__$1;
(statearr_27680_27755[(2)] = inst_27607);

(statearr_27680_27755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (32))){
var inst_27597 = (state_27654[(11)]);
var inst_27594 = (state_27654[(20)]);
var inst_27596 = (state_27654[(21)]);
var inst_27595 = (state_27654[(12)]);
var inst_27609 = (state_27654[(2)]);
var inst_27610 = (inst_27597 + (1));
var tmp27675 = inst_27594;
var tmp27676 = inst_27596;
var tmp27677 = inst_27595;
var inst_27594__$1 = tmp27675;
var inst_27595__$1 = tmp27677;
var inst_27596__$1 = tmp27676;
var inst_27597__$1 = inst_27610;
var state_27654__$1 = (function (){var statearr_27681 = state_27654;
(statearr_27681[(22)] = inst_27609);

(statearr_27681[(11)] = inst_27597__$1);

(statearr_27681[(20)] = inst_27594__$1);

(statearr_27681[(21)] = inst_27596__$1);

(statearr_27681[(12)] = inst_27595__$1);

return statearr_27681;
})();
var statearr_27682_27756 = state_27654__$1;
(statearr_27682_27756[(2)] = null);

(statearr_27682_27756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (40))){
var inst_27622 = (state_27654[(23)]);
var inst_27626 = done.call(null,null);
var inst_27627 = cljs.core.async.untap_STAR_.call(null,m,inst_27622);
var state_27654__$1 = (function (){var statearr_27683 = state_27654;
(statearr_27683[(24)] = inst_27626);

return statearr_27683;
})();
var statearr_27684_27757 = state_27654__$1;
(statearr_27684_27757[(2)] = inst_27627);

(statearr_27684_27757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (33))){
var inst_27613 = (state_27654[(25)]);
var inst_27615 = cljs.core.chunked_seq_QMARK_.call(null,inst_27613);
var state_27654__$1 = state_27654;
if(inst_27615){
var statearr_27685_27758 = state_27654__$1;
(statearr_27685_27758[(1)] = (36));

} else {
var statearr_27686_27759 = state_27654__$1;
(statearr_27686_27759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (13))){
var inst_27545 = (state_27654[(26)]);
var inst_27548 = cljs.core.async.close_BANG_.call(null,inst_27545);
var state_27654__$1 = state_27654;
var statearr_27687_27760 = state_27654__$1;
(statearr_27687_27760[(2)] = inst_27548);

(statearr_27687_27760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (22))){
var inst_27566 = (state_27654[(8)]);
var inst_27569 = cljs.core.async.close_BANG_.call(null,inst_27566);
var state_27654__$1 = state_27654;
var statearr_27688_27761 = state_27654__$1;
(statearr_27688_27761[(2)] = inst_27569);

(statearr_27688_27761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (36))){
var inst_27613 = (state_27654[(25)]);
var inst_27617 = cljs.core.chunk_first.call(null,inst_27613);
var inst_27618 = cljs.core.chunk_rest.call(null,inst_27613);
var inst_27619 = cljs.core.count.call(null,inst_27617);
var inst_27594 = inst_27618;
var inst_27595 = inst_27617;
var inst_27596 = inst_27619;
var inst_27597 = (0);
var state_27654__$1 = (function (){var statearr_27689 = state_27654;
(statearr_27689[(11)] = inst_27597);

(statearr_27689[(20)] = inst_27594);

(statearr_27689[(21)] = inst_27596);

(statearr_27689[(12)] = inst_27595);

return statearr_27689;
})();
var statearr_27690_27762 = state_27654__$1;
(statearr_27690_27762[(2)] = null);

(statearr_27690_27762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (41))){
var inst_27613 = (state_27654[(25)]);
var inst_27629 = (state_27654[(2)]);
var inst_27630 = cljs.core.next.call(null,inst_27613);
var inst_27594 = inst_27630;
var inst_27595 = null;
var inst_27596 = (0);
var inst_27597 = (0);
var state_27654__$1 = (function (){var statearr_27691 = state_27654;
(statearr_27691[(11)] = inst_27597);

(statearr_27691[(20)] = inst_27594);

(statearr_27691[(21)] = inst_27596);

(statearr_27691[(12)] = inst_27595);

(statearr_27691[(27)] = inst_27629);

return statearr_27691;
})();
var statearr_27692_27763 = state_27654__$1;
(statearr_27692_27763[(2)] = null);

(statearr_27692_27763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (43))){
var state_27654__$1 = state_27654;
var statearr_27693_27764 = state_27654__$1;
(statearr_27693_27764[(2)] = null);

(statearr_27693_27764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (29))){
var inst_27638 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27694_27765 = state_27654__$1;
(statearr_27694_27765[(2)] = inst_27638);

(statearr_27694_27765[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (44))){
var inst_27647 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27695 = state_27654;
(statearr_27695[(28)] = inst_27647);

return statearr_27695;
})();
var statearr_27696_27766 = state_27654__$1;
(statearr_27696_27766[(2)] = null);

(statearr_27696_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (6))){
var inst_27586 = (state_27654[(29)]);
var inst_27585 = cljs.core.deref.call(null,cs);
var inst_27586__$1 = cljs.core.keys.call(null,inst_27585);
var inst_27587 = cljs.core.count.call(null,inst_27586__$1);
var inst_27588 = cljs.core.reset_BANG_.call(null,dctr,inst_27587);
var inst_27593 = cljs.core.seq.call(null,inst_27586__$1);
var inst_27594 = inst_27593;
var inst_27595 = null;
var inst_27596 = (0);
var inst_27597 = (0);
var state_27654__$1 = (function (){var statearr_27697 = state_27654;
(statearr_27697[(30)] = inst_27588);

(statearr_27697[(29)] = inst_27586__$1);

(statearr_27697[(11)] = inst_27597);

(statearr_27697[(20)] = inst_27594);

(statearr_27697[(21)] = inst_27596);

(statearr_27697[(12)] = inst_27595);

return statearr_27697;
})();
var statearr_27698_27767 = state_27654__$1;
(statearr_27698_27767[(2)] = null);

(statearr_27698_27767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (28))){
var inst_27613 = (state_27654[(25)]);
var inst_27594 = (state_27654[(20)]);
var inst_27613__$1 = cljs.core.seq.call(null,inst_27594);
var state_27654__$1 = (function (){var statearr_27699 = state_27654;
(statearr_27699[(25)] = inst_27613__$1);

return statearr_27699;
})();
if(inst_27613__$1){
var statearr_27700_27768 = state_27654__$1;
(statearr_27700_27768[(1)] = (33));

} else {
var statearr_27701_27769 = state_27654__$1;
(statearr_27701_27769[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (25))){
var inst_27597 = (state_27654[(11)]);
var inst_27596 = (state_27654[(21)]);
var inst_27599 = (inst_27597 < inst_27596);
var inst_27600 = inst_27599;
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27600)){
var statearr_27702_27770 = state_27654__$1;
(statearr_27702_27770[(1)] = (27));

} else {
var statearr_27703_27771 = state_27654__$1;
(statearr_27703_27771[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (34))){
var state_27654__$1 = state_27654;
var statearr_27704_27772 = state_27654__$1;
(statearr_27704_27772[(2)] = null);

(statearr_27704_27772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (17))){
var state_27654__$1 = state_27654;
var statearr_27705_27773 = state_27654__$1;
(statearr_27705_27773[(2)] = null);

(statearr_27705_27773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (3))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (12))){
var inst_27581 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27706_27774 = state_27654__$1;
(statearr_27706_27774[(2)] = inst_27581);

(statearr_27706_27774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (2))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(4),ch);
} else {
if((state_val_27655 === (23))){
var state_27654__$1 = state_27654;
var statearr_27707_27775 = state_27654__$1;
(statearr_27707_27775[(2)] = null);

(statearr_27707_27775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (35))){
var inst_27636 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27708_27776 = state_27654__$1;
(statearr_27708_27776[(2)] = inst_27636);

(statearr_27708_27776[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (19))){
var inst_27555 = (state_27654[(7)]);
var inst_27559 = cljs.core.chunk_first.call(null,inst_27555);
var inst_27560 = cljs.core.chunk_rest.call(null,inst_27555);
var inst_27561 = cljs.core.count.call(null,inst_27559);
var inst_27535 = inst_27560;
var inst_27536 = inst_27559;
var inst_27537 = inst_27561;
var inst_27538 = (0);
var state_27654__$1 = (function (){var statearr_27709 = state_27654;
(statearr_27709[(14)] = inst_27537);

(statearr_27709[(15)] = inst_27535);

(statearr_27709[(16)] = inst_27538);

(statearr_27709[(17)] = inst_27536);

return statearr_27709;
})();
var statearr_27710_27777 = state_27654__$1;
(statearr_27710_27777[(2)] = null);

(statearr_27710_27777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (11))){
var inst_27555 = (state_27654[(7)]);
var inst_27535 = (state_27654[(15)]);
var inst_27555__$1 = cljs.core.seq.call(null,inst_27535);
var state_27654__$1 = (function (){var statearr_27711 = state_27654;
(statearr_27711[(7)] = inst_27555__$1);

return statearr_27711;
})();
if(inst_27555__$1){
var statearr_27712_27778 = state_27654__$1;
(statearr_27712_27778[(1)] = (16));

} else {
var statearr_27713_27779 = state_27654__$1;
(statearr_27713_27779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (9))){
var inst_27583 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27714_27780 = state_27654__$1;
(statearr_27714_27780[(2)] = inst_27583);

(statearr_27714_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (5))){
var inst_27533 = cljs.core.deref.call(null,cs);
var inst_27534 = cljs.core.seq.call(null,inst_27533);
var inst_27535 = inst_27534;
var inst_27536 = null;
var inst_27537 = (0);
var inst_27538 = (0);
var state_27654__$1 = (function (){var statearr_27715 = state_27654;
(statearr_27715[(14)] = inst_27537);

(statearr_27715[(15)] = inst_27535);

(statearr_27715[(16)] = inst_27538);

(statearr_27715[(17)] = inst_27536);

return statearr_27715;
})();
var statearr_27716_27781 = state_27654__$1;
(statearr_27716_27781[(2)] = null);

(statearr_27716_27781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (14))){
var state_27654__$1 = state_27654;
var statearr_27717_27782 = state_27654__$1;
(statearr_27717_27782[(2)] = null);

(statearr_27717_27782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (45))){
var inst_27644 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27718_27783 = state_27654__$1;
(statearr_27718_27783[(2)] = inst_27644);

(statearr_27718_27783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (26))){
var inst_27586 = (state_27654[(29)]);
var inst_27640 = (state_27654[(2)]);
var inst_27641 = cljs.core.seq.call(null,inst_27586);
var state_27654__$1 = (function (){var statearr_27719 = state_27654;
(statearr_27719[(31)] = inst_27640);

return statearr_27719;
})();
if(inst_27641){
var statearr_27720_27784 = state_27654__$1;
(statearr_27720_27784[(1)] = (42));

} else {
var statearr_27721_27785 = state_27654__$1;
(statearr_27721_27785[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (16))){
var inst_27555 = (state_27654[(7)]);
var inst_27557 = cljs.core.chunked_seq_QMARK_.call(null,inst_27555);
var state_27654__$1 = state_27654;
if(inst_27557){
var statearr_27722_27786 = state_27654__$1;
(statearr_27722_27786[(1)] = (19));

} else {
var statearr_27723_27787 = state_27654__$1;
(statearr_27723_27787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (38))){
var inst_27633 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27724_27788 = state_27654__$1;
(statearr_27724_27788[(2)] = inst_27633);

(statearr_27724_27788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (30))){
var state_27654__$1 = state_27654;
var statearr_27725_27789 = state_27654__$1;
(statearr_27725_27789[(2)] = null);

(statearr_27725_27789[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (10))){
var inst_27538 = (state_27654[(16)]);
var inst_27536 = (state_27654[(17)]);
var inst_27544 = cljs.core._nth.call(null,inst_27536,inst_27538);
var inst_27545 = cljs.core.nth.call(null,inst_27544,(0),null);
var inst_27546 = cljs.core.nth.call(null,inst_27544,(1),null);
var state_27654__$1 = (function (){var statearr_27726 = state_27654;
(statearr_27726[(26)] = inst_27545);

return statearr_27726;
})();
if(cljs.core.truth_(inst_27546)){
var statearr_27727_27790 = state_27654__$1;
(statearr_27727_27790[(1)] = (13));

} else {
var statearr_27728_27791 = state_27654__$1;
(statearr_27728_27791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (18))){
var inst_27579 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27729_27792 = state_27654__$1;
(statearr_27729_27792[(2)] = inst_27579);

(statearr_27729_27792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (42))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27654__$1,(45),dchan);
} else {
if((state_val_27655 === (37))){
var inst_27622 = (state_27654[(23)]);
var inst_27613 = (state_27654[(25)]);
var inst_27526 = (state_27654[(9)]);
var inst_27622__$1 = cljs.core.first.call(null,inst_27613);
var inst_27623 = cljs.core.async.put_BANG_.call(null,inst_27622__$1,inst_27526,done);
var state_27654__$1 = (function (){var statearr_27730 = state_27654;
(statearr_27730[(23)] = inst_27622__$1);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27623)){
var statearr_27731_27793 = state_27654__$1;
(statearr_27731_27793[(1)] = (39));

} else {
var statearr_27732_27794 = state_27654__$1;
(statearr_27732_27794[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27655 === (8))){
var inst_27537 = (state_27654[(14)]);
var inst_27538 = (state_27654[(16)]);
var inst_27540 = (inst_27538 < inst_27537);
var inst_27541 = inst_27540;
var state_27654__$1 = state_27654;
if(cljs.core.truth_(inst_27541)){
var statearr_27733_27795 = state_27654__$1;
(statearr_27733_27795[(1)] = (10));

} else {
var statearr_27734_27796 = state_27654__$1;
(statearr_27734_27796[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___27742,cs,m,dchan,dctr,done))
;
return ((function (switch__21954__auto__,c__22016__auto___27742,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21955__auto__ = null;
var cljs$core$async$mult_$_state_machine__21955__auto____0 = (function (){
var statearr_27738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27738[(0)] = cljs$core$async$mult_$_state_machine__21955__auto__);

(statearr_27738[(1)] = (1));

return statearr_27738;
});
var cljs$core$async$mult_$_state_machine__21955__auto____1 = (function (state_27654){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_27654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e27739){if((e27739 instanceof Object)){
var ex__21958__auto__ = e27739;
var statearr_27740_27797 = state_27654;
(statearr_27740_27797[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27798 = state_27654;
state_27654 = G__27798;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21955__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21955__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21955__auto____0;
cljs$core$async$mult_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21955__auto____1;
return cljs$core$async$mult_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___27742,cs,m,dchan,dctr,done))
})();
var state__22018__auto__ = (function (){var statearr_27741 = f__22017__auto__.call(null);
(statearr_27741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___27742);

return statearr_27741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___27742,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27800 = arguments.length;
switch (G__27800) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27803 = {};
return obj27803;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27808){
var map__27809 = p__27808;
var map__27809__$1 = ((cljs.core.seq_QMARK_.call(null,map__27809))?cljs.core.apply.call(null,cljs.core.hash_map,map__27809):map__27809);
var opts = map__27809__$1;
var statearr_27810_27813 = state;
(statearr_27810_27813[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27809,map__27809__$1,opts){
return (function (val){
var statearr_27811_27814 = state;
(statearr_27811_27814[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27809,map__27809__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27812_27815 = state;
(statearr_27812_27815[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27804){
var G__27805 = cljs.core.first.call(null,seq27804);
var seq27804__$1 = cljs.core.next.call(null,seq27804);
var G__27806 = cljs.core.first.call(null,seq27804__$1);
var seq27804__$2 = cljs.core.next.call(null,seq27804__$1);
var G__27807 = cljs.core.first.call(null,seq27804__$2);
var seq27804__$3 = cljs.core.next.call(null,seq27804__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27805,G__27806,G__27807,seq27804__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27935 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27936){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27936 = meta27936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27935.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27935.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27937){
var self__ = this;
var _27937__$1 = this;
return self__.meta27936;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27937,meta27936__$1){
var self__ = this;
var _27937__$1 = this;
return (new cljs.core.async.t27935(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27936__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27935.cljs$lang$type = true;

cljs.core.async.t27935.cljs$lang$ctorStr = "cljs.core.async/t27935";

cljs.core.async.t27935.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27935");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27935 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27935(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27936){
return (new cljs.core.async.t27935(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27936));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27935(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22016__auto___28054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28007){
var state_val_28008 = (state_28007[(1)]);
if((state_val_28008 === (7))){
var inst_27951 = (state_28007[(7)]);
var inst_27956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27951);
var state_28007__$1 = state_28007;
var statearr_28009_28055 = state_28007__$1;
(statearr_28009_28055[(2)] = inst_27956);

(statearr_28009_28055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (20))){
var inst_27966 = (state_28007[(8)]);
var state_28007__$1 = state_28007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28007__$1,(23),out,inst_27966);
} else {
if((state_val_28008 === (1))){
var inst_27941 = (state_28007[(9)]);
var inst_27941__$1 = calc_state.call(null);
var inst_27942 = cljs.core.seq_QMARK_.call(null,inst_27941__$1);
var state_28007__$1 = (function (){var statearr_28010 = state_28007;
(statearr_28010[(9)] = inst_27941__$1);

return statearr_28010;
})();
if(inst_27942){
var statearr_28011_28056 = state_28007__$1;
(statearr_28011_28056[(1)] = (2));

} else {
var statearr_28012_28057 = state_28007__$1;
(statearr_28012_28057[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (24))){
var inst_27959 = (state_28007[(10)]);
var inst_27951 = inst_27959;
var state_28007__$1 = (function (){var statearr_28013 = state_28007;
(statearr_28013[(7)] = inst_27951);

return statearr_28013;
})();
var statearr_28014_28058 = state_28007__$1;
(statearr_28014_28058[(2)] = null);

(statearr_28014_28058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (4))){
var inst_27941 = (state_28007[(9)]);
var inst_27947 = (state_28007[(2)]);
var inst_27948 = cljs.core.get.call(null,inst_27947,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27949 = cljs.core.get.call(null,inst_27947,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27950 = cljs.core.get.call(null,inst_27947,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27951 = inst_27941;
var state_28007__$1 = (function (){var statearr_28015 = state_28007;
(statearr_28015[(11)] = inst_27949);

(statearr_28015[(7)] = inst_27951);

(statearr_28015[(12)] = inst_27950);

(statearr_28015[(13)] = inst_27948);

return statearr_28015;
})();
var statearr_28016_28059 = state_28007__$1;
(statearr_28016_28059[(2)] = null);

(statearr_28016_28059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (15))){
var state_28007__$1 = state_28007;
var statearr_28017_28060 = state_28007__$1;
(statearr_28017_28060[(2)] = null);

(statearr_28017_28060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (21))){
var inst_27959 = (state_28007[(10)]);
var inst_27951 = inst_27959;
var state_28007__$1 = (function (){var statearr_28018 = state_28007;
(statearr_28018[(7)] = inst_27951);

return statearr_28018;
})();
var statearr_28019_28061 = state_28007__$1;
(statearr_28019_28061[(2)] = null);

(statearr_28019_28061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (13))){
var inst_28003 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
var statearr_28020_28062 = state_28007__$1;
(statearr_28020_28062[(2)] = inst_28003);

(statearr_28020_28062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (22))){
var inst_28001 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
var statearr_28021_28063 = state_28007__$1;
(statearr_28021_28063[(2)] = inst_28001);

(statearr_28021_28063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (6))){
var inst_28005 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28007__$1,inst_28005);
} else {
if((state_val_28008 === (25))){
var state_28007__$1 = state_28007;
var statearr_28022_28064 = state_28007__$1;
(statearr_28022_28064[(2)] = null);

(statearr_28022_28064[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (17))){
var inst_27981 = (state_28007[(14)]);
var state_28007__$1 = state_28007;
var statearr_28023_28065 = state_28007__$1;
(statearr_28023_28065[(2)] = inst_27981);

(statearr_28023_28065[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (3))){
var inst_27941 = (state_28007[(9)]);
var state_28007__$1 = state_28007;
var statearr_28024_28066 = state_28007__$1;
(statearr_28024_28066[(2)] = inst_27941);

(statearr_28024_28066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (12))){
var inst_27967 = (state_28007[(15)]);
var inst_27962 = (state_28007[(16)]);
var inst_27981 = (state_28007[(14)]);
var inst_27981__$1 = inst_27962.call(null,inst_27967);
var state_28007__$1 = (function (){var statearr_28025 = state_28007;
(statearr_28025[(14)] = inst_27981__$1);

return statearr_28025;
})();
if(cljs.core.truth_(inst_27981__$1)){
var statearr_28026_28067 = state_28007__$1;
(statearr_28026_28067[(1)] = (17));

} else {
var statearr_28027_28068 = state_28007__$1;
(statearr_28027_28068[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (2))){
var inst_27941 = (state_28007[(9)]);
var inst_27944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27941);
var state_28007__$1 = state_28007;
var statearr_28028_28069 = state_28007__$1;
(statearr_28028_28069[(2)] = inst_27944);

(statearr_28028_28069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (23))){
var inst_27992 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
if(cljs.core.truth_(inst_27992)){
var statearr_28029_28070 = state_28007__$1;
(statearr_28029_28070[(1)] = (24));

} else {
var statearr_28030_28071 = state_28007__$1;
(statearr_28030_28071[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (19))){
var inst_27989 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
if(cljs.core.truth_(inst_27989)){
var statearr_28031_28072 = state_28007__$1;
(statearr_28031_28072[(1)] = (20));

} else {
var statearr_28032_28073 = state_28007__$1;
(statearr_28032_28073[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (11))){
var inst_27966 = (state_28007[(8)]);
var inst_27972 = (inst_27966 == null);
var state_28007__$1 = state_28007;
if(cljs.core.truth_(inst_27972)){
var statearr_28033_28074 = state_28007__$1;
(statearr_28033_28074[(1)] = (14));

} else {
var statearr_28034_28075 = state_28007__$1;
(statearr_28034_28075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (9))){
var inst_27959 = (state_28007[(10)]);
var inst_27959__$1 = (state_28007[(2)]);
var inst_27960 = cljs.core.get.call(null,inst_27959__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27961 = cljs.core.get.call(null,inst_27959__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27962 = cljs.core.get.call(null,inst_27959__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28007__$1 = (function (){var statearr_28035 = state_28007;
(statearr_28035[(17)] = inst_27961);

(statearr_28035[(10)] = inst_27959__$1);

(statearr_28035[(16)] = inst_27962);

return statearr_28035;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28007__$1,(10),inst_27960);
} else {
if((state_val_28008 === (5))){
var inst_27951 = (state_28007[(7)]);
var inst_27954 = cljs.core.seq_QMARK_.call(null,inst_27951);
var state_28007__$1 = state_28007;
if(inst_27954){
var statearr_28036_28076 = state_28007__$1;
(statearr_28036_28076[(1)] = (7));

} else {
var statearr_28037_28077 = state_28007__$1;
(statearr_28037_28077[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (14))){
var inst_27967 = (state_28007[(15)]);
var inst_27974 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27967);
var state_28007__$1 = state_28007;
var statearr_28038_28078 = state_28007__$1;
(statearr_28038_28078[(2)] = inst_27974);

(statearr_28038_28078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (26))){
var inst_27997 = (state_28007[(2)]);
var state_28007__$1 = state_28007;
var statearr_28039_28079 = state_28007__$1;
(statearr_28039_28079[(2)] = inst_27997);

(statearr_28039_28079[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (16))){
var inst_27977 = (state_28007[(2)]);
var inst_27978 = calc_state.call(null);
var inst_27951 = inst_27978;
var state_28007__$1 = (function (){var statearr_28040 = state_28007;
(statearr_28040[(7)] = inst_27951);

(statearr_28040[(18)] = inst_27977);

return statearr_28040;
})();
var statearr_28041_28080 = state_28007__$1;
(statearr_28041_28080[(2)] = null);

(statearr_28041_28080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (10))){
var inst_27966 = (state_28007[(8)]);
var inst_27967 = (state_28007[(15)]);
var inst_27965 = (state_28007[(2)]);
var inst_27966__$1 = cljs.core.nth.call(null,inst_27965,(0),null);
var inst_27967__$1 = cljs.core.nth.call(null,inst_27965,(1),null);
var inst_27968 = (inst_27966__$1 == null);
var inst_27969 = cljs.core._EQ_.call(null,inst_27967__$1,change);
var inst_27970 = (inst_27968) || (inst_27969);
var state_28007__$1 = (function (){var statearr_28042 = state_28007;
(statearr_28042[(8)] = inst_27966__$1);

(statearr_28042[(15)] = inst_27967__$1);

return statearr_28042;
})();
if(cljs.core.truth_(inst_27970)){
var statearr_28043_28081 = state_28007__$1;
(statearr_28043_28081[(1)] = (11));

} else {
var statearr_28044_28082 = state_28007__$1;
(statearr_28044_28082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (18))){
var inst_27961 = (state_28007[(17)]);
var inst_27967 = (state_28007[(15)]);
var inst_27962 = (state_28007[(16)]);
var inst_27984 = cljs.core.empty_QMARK_.call(null,inst_27962);
var inst_27985 = inst_27961.call(null,inst_27967);
var inst_27986 = cljs.core.not.call(null,inst_27985);
var inst_27987 = (inst_27984) && (inst_27986);
var state_28007__$1 = state_28007;
var statearr_28045_28083 = state_28007__$1;
(statearr_28045_28083[(2)] = inst_27987);

(statearr_28045_28083[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28008 === (8))){
var inst_27951 = (state_28007[(7)]);
var state_28007__$1 = state_28007;
var statearr_28046_28084 = state_28007__$1;
(statearr_28046_28084[(2)] = inst_27951);

(statearr_28046_28084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21954__auto__,c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21955__auto__ = null;
var cljs$core$async$mix_$_state_machine__21955__auto____0 = (function (){
var statearr_28050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28050[(0)] = cljs$core$async$mix_$_state_machine__21955__auto__);

(statearr_28050[(1)] = (1));

return statearr_28050;
});
var cljs$core$async$mix_$_state_machine__21955__auto____1 = (function (state_28007){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28051){if((e28051 instanceof Object)){
var ex__21958__auto__ = e28051;
var statearr_28052_28085 = state_28007;
(statearr_28052_28085[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28086 = state_28007;
state_28007 = G__28086;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21955__auto__ = function(state_28007){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21955__auto____1.call(this,state_28007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21955__auto____0;
cljs$core$async$mix_$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21955__auto____1;
return cljs$core$async$mix_$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22018__auto__ = (function (){var statearr_28053 = f__22017__auto__.call(null);
(statearr_28053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28054);

return statearr_28053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28088 = {};
return obj28088;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28090 = arguments.length;
switch (G__28090) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28094 = arguments.length;
switch (G__28094) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18121__auto__,mults){
return (function (p1__28092_SHARP_){
if(cljs.core.truth_(p1__28092_SHARP_.call(null,topic))){
return p1__28092_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28092_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28095 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28095 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28096){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28096 = meta28096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28095.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28095.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28097){
var self__ = this;
var _28097__$1 = this;
return self__.meta28096;
});})(mults,ensure_mult))
;

cljs.core.async.t28095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28097,meta28096__$1){
var self__ = this;
var _28097__$1 = this;
return (new cljs.core.async.t28095(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28096__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28095.cljs$lang$type = true;

cljs.core.async.t28095.cljs$lang$ctorStr = "cljs.core.async/t28095";

cljs.core.async.t28095.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28095");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28095 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28095(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28096){
return (new cljs.core.async.t28095(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28096));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28095(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22016__auto___28218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28218,mults,ensure_mult,p){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28218,mults,ensure_mult,p){
return (function (state_28169){
var state_val_28170 = (state_28169[(1)]);
if((state_val_28170 === (7))){
var inst_28165 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28171_28219 = state_28169__$1;
(statearr_28171_28219[(2)] = inst_28165);

(statearr_28171_28219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (20))){
var state_28169__$1 = state_28169;
var statearr_28172_28220 = state_28169__$1;
(statearr_28172_28220[(2)] = null);

(statearr_28172_28220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (1))){
var state_28169__$1 = state_28169;
var statearr_28173_28221 = state_28169__$1;
(statearr_28173_28221[(2)] = null);

(statearr_28173_28221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (24))){
var inst_28148 = (state_28169[(7)]);
var inst_28157 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28148);
var state_28169__$1 = state_28169;
var statearr_28174_28222 = state_28169__$1;
(statearr_28174_28222[(2)] = inst_28157);

(statearr_28174_28222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (4))){
var inst_28100 = (state_28169[(8)]);
var inst_28100__$1 = (state_28169[(2)]);
var inst_28101 = (inst_28100__$1 == null);
var state_28169__$1 = (function (){var statearr_28175 = state_28169;
(statearr_28175[(8)] = inst_28100__$1);

return statearr_28175;
})();
if(cljs.core.truth_(inst_28101)){
var statearr_28176_28223 = state_28169__$1;
(statearr_28176_28223[(1)] = (5));

} else {
var statearr_28177_28224 = state_28169__$1;
(statearr_28177_28224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (15))){
var inst_28142 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28178_28225 = state_28169__$1;
(statearr_28178_28225[(2)] = inst_28142);

(statearr_28178_28225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (21))){
var inst_28162 = (state_28169[(2)]);
var state_28169__$1 = (function (){var statearr_28179 = state_28169;
(statearr_28179[(9)] = inst_28162);

return statearr_28179;
})();
var statearr_28180_28226 = state_28169__$1;
(statearr_28180_28226[(2)] = null);

(statearr_28180_28226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (13))){
var inst_28124 = (state_28169[(10)]);
var inst_28126 = cljs.core.chunked_seq_QMARK_.call(null,inst_28124);
var state_28169__$1 = state_28169;
if(inst_28126){
var statearr_28181_28227 = state_28169__$1;
(statearr_28181_28227[(1)] = (16));

} else {
var statearr_28182_28228 = state_28169__$1;
(statearr_28182_28228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (22))){
var inst_28154 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
if(cljs.core.truth_(inst_28154)){
var statearr_28183_28229 = state_28169__$1;
(statearr_28183_28229[(1)] = (23));

} else {
var statearr_28184_28230 = state_28169__$1;
(statearr_28184_28230[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (6))){
var inst_28150 = (state_28169[(11)]);
var inst_28148 = (state_28169[(7)]);
var inst_28100 = (state_28169[(8)]);
var inst_28148__$1 = topic_fn.call(null,inst_28100);
var inst_28149 = cljs.core.deref.call(null,mults);
var inst_28150__$1 = cljs.core.get.call(null,inst_28149,inst_28148__$1);
var state_28169__$1 = (function (){var statearr_28185 = state_28169;
(statearr_28185[(11)] = inst_28150__$1);

(statearr_28185[(7)] = inst_28148__$1);

return statearr_28185;
})();
if(cljs.core.truth_(inst_28150__$1)){
var statearr_28186_28231 = state_28169__$1;
(statearr_28186_28231[(1)] = (19));

} else {
var statearr_28187_28232 = state_28169__$1;
(statearr_28187_28232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (25))){
var inst_28159 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28188_28233 = state_28169__$1;
(statearr_28188_28233[(2)] = inst_28159);

(statearr_28188_28233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (17))){
var inst_28124 = (state_28169[(10)]);
var inst_28133 = cljs.core.first.call(null,inst_28124);
var inst_28134 = cljs.core.async.muxch_STAR_.call(null,inst_28133);
var inst_28135 = cljs.core.async.close_BANG_.call(null,inst_28134);
var inst_28136 = cljs.core.next.call(null,inst_28124);
var inst_28110 = inst_28136;
var inst_28111 = null;
var inst_28112 = (0);
var inst_28113 = (0);
var state_28169__$1 = (function (){var statearr_28189 = state_28169;
(statearr_28189[(12)] = inst_28111);

(statearr_28189[(13)] = inst_28112);

(statearr_28189[(14)] = inst_28135);

(statearr_28189[(15)] = inst_28110);

(statearr_28189[(16)] = inst_28113);

return statearr_28189;
})();
var statearr_28190_28234 = state_28169__$1;
(statearr_28190_28234[(2)] = null);

(statearr_28190_28234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (3))){
var inst_28167 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28169__$1,inst_28167);
} else {
if((state_val_28170 === (12))){
var inst_28144 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28191_28235 = state_28169__$1;
(statearr_28191_28235[(2)] = inst_28144);

(statearr_28191_28235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (2))){
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28169__$1,(4),ch);
} else {
if((state_val_28170 === (23))){
var state_28169__$1 = state_28169;
var statearr_28192_28236 = state_28169__$1;
(statearr_28192_28236[(2)] = null);

(statearr_28192_28236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (19))){
var inst_28150 = (state_28169[(11)]);
var inst_28100 = (state_28169[(8)]);
var inst_28152 = cljs.core.async.muxch_STAR_.call(null,inst_28150);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28169__$1,(22),inst_28152,inst_28100);
} else {
if((state_val_28170 === (11))){
var inst_28110 = (state_28169[(15)]);
var inst_28124 = (state_28169[(10)]);
var inst_28124__$1 = cljs.core.seq.call(null,inst_28110);
var state_28169__$1 = (function (){var statearr_28193 = state_28169;
(statearr_28193[(10)] = inst_28124__$1);

return statearr_28193;
})();
if(inst_28124__$1){
var statearr_28194_28237 = state_28169__$1;
(statearr_28194_28237[(1)] = (13));

} else {
var statearr_28195_28238 = state_28169__$1;
(statearr_28195_28238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (9))){
var inst_28146 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28196_28239 = state_28169__$1;
(statearr_28196_28239[(2)] = inst_28146);

(statearr_28196_28239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (5))){
var inst_28107 = cljs.core.deref.call(null,mults);
var inst_28108 = cljs.core.vals.call(null,inst_28107);
var inst_28109 = cljs.core.seq.call(null,inst_28108);
var inst_28110 = inst_28109;
var inst_28111 = null;
var inst_28112 = (0);
var inst_28113 = (0);
var state_28169__$1 = (function (){var statearr_28197 = state_28169;
(statearr_28197[(12)] = inst_28111);

(statearr_28197[(13)] = inst_28112);

(statearr_28197[(15)] = inst_28110);

(statearr_28197[(16)] = inst_28113);

return statearr_28197;
})();
var statearr_28198_28240 = state_28169__$1;
(statearr_28198_28240[(2)] = null);

(statearr_28198_28240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (14))){
var state_28169__$1 = state_28169;
var statearr_28202_28241 = state_28169__$1;
(statearr_28202_28241[(2)] = null);

(statearr_28202_28241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (16))){
var inst_28124 = (state_28169[(10)]);
var inst_28128 = cljs.core.chunk_first.call(null,inst_28124);
var inst_28129 = cljs.core.chunk_rest.call(null,inst_28124);
var inst_28130 = cljs.core.count.call(null,inst_28128);
var inst_28110 = inst_28129;
var inst_28111 = inst_28128;
var inst_28112 = inst_28130;
var inst_28113 = (0);
var state_28169__$1 = (function (){var statearr_28203 = state_28169;
(statearr_28203[(12)] = inst_28111);

(statearr_28203[(13)] = inst_28112);

(statearr_28203[(15)] = inst_28110);

(statearr_28203[(16)] = inst_28113);

return statearr_28203;
})();
var statearr_28204_28242 = state_28169__$1;
(statearr_28204_28242[(2)] = null);

(statearr_28204_28242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (10))){
var inst_28111 = (state_28169[(12)]);
var inst_28112 = (state_28169[(13)]);
var inst_28110 = (state_28169[(15)]);
var inst_28113 = (state_28169[(16)]);
var inst_28118 = cljs.core._nth.call(null,inst_28111,inst_28113);
var inst_28119 = cljs.core.async.muxch_STAR_.call(null,inst_28118);
var inst_28120 = cljs.core.async.close_BANG_.call(null,inst_28119);
var inst_28121 = (inst_28113 + (1));
var tmp28199 = inst_28111;
var tmp28200 = inst_28112;
var tmp28201 = inst_28110;
var inst_28110__$1 = tmp28201;
var inst_28111__$1 = tmp28199;
var inst_28112__$1 = tmp28200;
var inst_28113__$1 = inst_28121;
var state_28169__$1 = (function (){var statearr_28205 = state_28169;
(statearr_28205[(12)] = inst_28111__$1);

(statearr_28205[(13)] = inst_28112__$1);

(statearr_28205[(17)] = inst_28120);

(statearr_28205[(15)] = inst_28110__$1);

(statearr_28205[(16)] = inst_28113__$1);

return statearr_28205;
})();
var statearr_28206_28243 = state_28169__$1;
(statearr_28206_28243[(2)] = null);

(statearr_28206_28243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (18))){
var inst_28139 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28207_28244 = state_28169__$1;
(statearr_28207_28244[(2)] = inst_28139);

(statearr_28207_28244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (8))){
var inst_28112 = (state_28169[(13)]);
var inst_28113 = (state_28169[(16)]);
var inst_28115 = (inst_28113 < inst_28112);
var inst_28116 = inst_28115;
var state_28169__$1 = state_28169;
if(cljs.core.truth_(inst_28116)){
var statearr_28208_28245 = state_28169__$1;
(statearr_28208_28245[(1)] = (10));

} else {
var statearr_28209_28246 = state_28169__$1;
(statearr_28209_28246[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28218,mults,ensure_mult,p))
;
return ((function (switch__21954__auto__,c__22016__auto___28218,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28213[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28213[(1)] = (1));

return statearr_28213;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28169){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28214){if((e28214 instanceof Object)){
var ex__21958__auto__ = e28214;
var statearr_28215_28247 = state_28169;
(statearr_28215_28247[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28248 = state_28169;
state_28169 = G__28248;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28218,mults,ensure_mult,p))
})();
var state__22018__auto__ = (function (){var statearr_28216 = f__22017__auto__.call(null);
(statearr_28216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28218);

return statearr_28216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28218,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28250 = arguments.length;
switch (G__28250) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28253 = arguments.length;
switch (G__28253) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28256 = arguments.length;
switch (G__28256) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22016__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28295){
var state_val_28296 = (state_28295[(1)]);
if((state_val_28296 === (7))){
var state_28295__$1 = state_28295;
var statearr_28297_28327 = state_28295__$1;
(statearr_28297_28327[(2)] = null);

(statearr_28297_28327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (1))){
var state_28295__$1 = state_28295;
var statearr_28298_28328 = state_28295__$1;
(statearr_28298_28328[(2)] = null);

(statearr_28298_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (4))){
var inst_28259 = (state_28295[(7)]);
var inst_28261 = (inst_28259 < cnt);
var state_28295__$1 = state_28295;
if(cljs.core.truth_(inst_28261)){
var statearr_28299_28329 = state_28295__$1;
(statearr_28299_28329[(1)] = (6));

} else {
var statearr_28300_28330 = state_28295__$1;
(statearr_28300_28330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (15))){
var inst_28291 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
var statearr_28301_28331 = state_28295__$1;
(statearr_28301_28331[(2)] = inst_28291);

(statearr_28301_28331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (13))){
var inst_28284 = cljs.core.async.close_BANG_.call(null,out);
var state_28295__$1 = state_28295;
var statearr_28302_28332 = state_28295__$1;
(statearr_28302_28332[(2)] = inst_28284);

(statearr_28302_28332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (6))){
var state_28295__$1 = state_28295;
var statearr_28303_28333 = state_28295__$1;
(statearr_28303_28333[(2)] = null);

(statearr_28303_28333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (3))){
var inst_28293 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28295__$1,inst_28293);
} else {
if((state_val_28296 === (12))){
var inst_28281 = (state_28295[(8)]);
var inst_28281__$1 = (state_28295[(2)]);
var inst_28282 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28281__$1);
var state_28295__$1 = (function (){var statearr_28304 = state_28295;
(statearr_28304[(8)] = inst_28281__$1);

return statearr_28304;
})();
if(cljs.core.truth_(inst_28282)){
var statearr_28305_28334 = state_28295__$1;
(statearr_28305_28334[(1)] = (13));

} else {
var statearr_28306_28335 = state_28295__$1;
(statearr_28306_28335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (2))){
var inst_28258 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28259 = (0);
var state_28295__$1 = (function (){var statearr_28307 = state_28295;
(statearr_28307[(9)] = inst_28258);

(statearr_28307[(7)] = inst_28259);

return statearr_28307;
})();
var statearr_28308_28336 = state_28295__$1;
(statearr_28308_28336[(2)] = null);

(statearr_28308_28336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (11))){
var inst_28259 = (state_28295[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28295,(10),Object,null,(9));
var inst_28268 = chs__$1.call(null,inst_28259);
var inst_28269 = done.call(null,inst_28259);
var inst_28270 = cljs.core.async.take_BANG_.call(null,inst_28268,inst_28269);
var state_28295__$1 = state_28295;
var statearr_28309_28337 = state_28295__$1;
(statearr_28309_28337[(2)] = inst_28270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28295__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (9))){
var inst_28259 = (state_28295[(7)]);
var inst_28272 = (state_28295[(2)]);
var inst_28273 = (inst_28259 + (1));
var inst_28259__$1 = inst_28273;
var state_28295__$1 = (function (){var statearr_28310 = state_28295;
(statearr_28310[(7)] = inst_28259__$1);

(statearr_28310[(10)] = inst_28272);

return statearr_28310;
})();
var statearr_28311_28338 = state_28295__$1;
(statearr_28311_28338[(2)] = null);

(statearr_28311_28338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (5))){
var inst_28279 = (state_28295[(2)]);
var state_28295__$1 = (function (){var statearr_28312 = state_28295;
(statearr_28312[(11)] = inst_28279);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28295__$1,(12),dchan);
} else {
if((state_val_28296 === (14))){
var inst_28281 = (state_28295[(8)]);
var inst_28286 = cljs.core.apply.call(null,f,inst_28281);
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28295__$1,(16),out,inst_28286);
} else {
if((state_val_28296 === (16))){
var inst_28288 = (state_28295[(2)]);
var state_28295__$1 = (function (){var statearr_28313 = state_28295;
(statearr_28313[(12)] = inst_28288);

return statearr_28313;
})();
var statearr_28314_28339 = state_28295__$1;
(statearr_28314_28339[(2)] = null);

(statearr_28314_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (10))){
var inst_28263 = (state_28295[(2)]);
var inst_28264 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28295__$1 = (function (){var statearr_28315 = state_28295;
(statearr_28315[(13)] = inst_28263);

return statearr_28315;
})();
var statearr_28316_28340 = state_28295__$1;
(statearr_28316_28340[(2)] = inst_28264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28295__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (8))){
var inst_28277 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
var statearr_28317_28341 = state_28295__$1;
(statearr_28317_28341[(2)] = inst_28277);

(statearr_28317_28341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21954__auto__,c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28321[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28321[(1)] = (1));

return statearr_28321;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28295){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28322){if((e28322 instanceof Object)){
var ex__21958__auto__ = e28322;
var statearr_28323_28342 = state_28295;
(statearr_28323_28342[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28295;
state_28295 = G__28343;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22018__auto__ = (function (){var statearr_28324 = f__22017__auto__.call(null);
(statearr_28324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28326);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28326,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28346 = arguments.length;
switch (G__28346) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___28401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28401,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28401,out){
return (function (state_28376){
var state_val_28377 = (state_28376[(1)]);
if((state_val_28377 === (7))){
var inst_28356 = (state_28376[(7)]);
var inst_28355 = (state_28376[(8)]);
var inst_28355__$1 = (state_28376[(2)]);
var inst_28356__$1 = cljs.core.nth.call(null,inst_28355__$1,(0),null);
var inst_28357 = cljs.core.nth.call(null,inst_28355__$1,(1),null);
var inst_28358 = (inst_28356__$1 == null);
var state_28376__$1 = (function (){var statearr_28378 = state_28376;
(statearr_28378[(7)] = inst_28356__$1);

(statearr_28378[(8)] = inst_28355__$1);

(statearr_28378[(9)] = inst_28357);

return statearr_28378;
})();
if(cljs.core.truth_(inst_28358)){
var statearr_28379_28402 = state_28376__$1;
(statearr_28379_28402[(1)] = (8));

} else {
var statearr_28380_28403 = state_28376__$1;
(statearr_28380_28403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (1))){
var inst_28347 = cljs.core.vec.call(null,chs);
var inst_28348 = inst_28347;
var state_28376__$1 = (function (){var statearr_28381 = state_28376;
(statearr_28381[(10)] = inst_28348);

return statearr_28381;
})();
var statearr_28382_28404 = state_28376__$1;
(statearr_28382_28404[(2)] = null);

(statearr_28382_28404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (4))){
var inst_28348 = (state_28376[(10)]);
var state_28376__$1 = state_28376;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28376__$1,(7),inst_28348);
} else {
if((state_val_28377 === (6))){
var inst_28372 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28383_28405 = state_28376__$1;
(statearr_28383_28405[(2)] = inst_28372);

(statearr_28383_28405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (3))){
var inst_28374 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28376__$1,inst_28374);
} else {
if((state_val_28377 === (2))){
var inst_28348 = (state_28376[(10)]);
var inst_28350 = cljs.core.count.call(null,inst_28348);
var inst_28351 = (inst_28350 > (0));
var state_28376__$1 = state_28376;
if(cljs.core.truth_(inst_28351)){
var statearr_28385_28406 = state_28376__$1;
(statearr_28385_28406[(1)] = (4));

} else {
var statearr_28386_28407 = state_28376__$1;
(statearr_28386_28407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (11))){
var inst_28348 = (state_28376[(10)]);
var inst_28365 = (state_28376[(2)]);
var tmp28384 = inst_28348;
var inst_28348__$1 = tmp28384;
var state_28376__$1 = (function (){var statearr_28387 = state_28376;
(statearr_28387[(10)] = inst_28348__$1);

(statearr_28387[(11)] = inst_28365);

return statearr_28387;
})();
var statearr_28388_28408 = state_28376__$1;
(statearr_28388_28408[(2)] = null);

(statearr_28388_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (9))){
var inst_28356 = (state_28376[(7)]);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28376__$1,(11),out,inst_28356);
} else {
if((state_val_28377 === (5))){
var inst_28370 = cljs.core.async.close_BANG_.call(null,out);
var state_28376__$1 = state_28376;
var statearr_28389_28409 = state_28376__$1;
(statearr_28389_28409[(2)] = inst_28370);

(statearr_28389_28409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (10))){
var inst_28368 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28390_28410 = state_28376__$1;
(statearr_28390_28410[(2)] = inst_28368);

(statearr_28390_28410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (8))){
var inst_28356 = (state_28376[(7)]);
var inst_28348 = (state_28376[(10)]);
var inst_28355 = (state_28376[(8)]);
var inst_28357 = (state_28376[(9)]);
var inst_28360 = (function (){var c = inst_28357;
var v = inst_28356;
var vec__28353 = inst_28355;
var cs = inst_28348;
return ((function (c,v,vec__28353,cs,inst_28356,inst_28348,inst_28355,inst_28357,state_val_28377,c__22016__auto___28401,out){
return (function (p1__28344_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28344_SHARP_);
});
;})(c,v,vec__28353,cs,inst_28356,inst_28348,inst_28355,inst_28357,state_val_28377,c__22016__auto___28401,out))
})();
var inst_28361 = cljs.core.filterv.call(null,inst_28360,inst_28348);
var inst_28348__$1 = inst_28361;
var state_28376__$1 = (function (){var statearr_28391 = state_28376;
(statearr_28391[(10)] = inst_28348__$1);

return statearr_28391;
})();
var statearr_28392_28411 = state_28376__$1;
(statearr_28392_28411[(2)] = null);

(statearr_28392_28411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28401,out))
;
return ((function (switch__21954__auto__,c__22016__auto___28401,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28376){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__21958__auto__ = e28397;
var statearr_28398_28412 = state_28376;
(statearr_28398_28412[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28413 = state_28376;
state_28376 = G__28413;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28401,out))
})();
var state__22018__auto__ = (function (){var statearr_28399 = f__22017__auto__.call(null);
(statearr_28399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28401);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28401,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28415 = arguments.length;
switch (G__28415) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___28463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28463,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28463,out){
return (function (state_28439){
var state_val_28440 = (state_28439[(1)]);
if((state_val_28440 === (7))){
var inst_28421 = (state_28439[(7)]);
var inst_28421__$1 = (state_28439[(2)]);
var inst_28422 = (inst_28421__$1 == null);
var inst_28423 = cljs.core.not.call(null,inst_28422);
var state_28439__$1 = (function (){var statearr_28441 = state_28439;
(statearr_28441[(7)] = inst_28421__$1);

return statearr_28441;
})();
if(inst_28423){
var statearr_28442_28464 = state_28439__$1;
(statearr_28442_28464[(1)] = (8));

} else {
var statearr_28443_28465 = state_28439__$1;
(statearr_28443_28465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (1))){
var inst_28416 = (0);
var state_28439__$1 = (function (){var statearr_28444 = state_28439;
(statearr_28444[(8)] = inst_28416);

return statearr_28444;
})();
var statearr_28445_28466 = state_28439__$1;
(statearr_28445_28466[(2)] = null);

(statearr_28445_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (4))){
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28439__$1,(7),ch);
} else {
if((state_val_28440 === (6))){
var inst_28434 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28446_28467 = state_28439__$1;
(statearr_28446_28467[(2)] = inst_28434);

(statearr_28446_28467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (3))){
var inst_28436 = (state_28439[(2)]);
var inst_28437 = cljs.core.async.close_BANG_.call(null,out);
var state_28439__$1 = (function (){var statearr_28447 = state_28439;
(statearr_28447[(9)] = inst_28436);

return statearr_28447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28439__$1,inst_28437);
} else {
if((state_val_28440 === (2))){
var inst_28416 = (state_28439[(8)]);
var inst_28418 = (inst_28416 < n);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28418)){
var statearr_28448_28468 = state_28439__$1;
(statearr_28448_28468[(1)] = (4));

} else {
var statearr_28449_28469 = state_28439__$1;
(statearr_28449_28469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (11))){
var inst_28416 = (state_28439[(8)]);
var inst_28426 = (state_28439[(2)]);
var inst_28427 = (inst_28416 + (1));
var inst_28416__$1 = inst_28427;
var state_28439__$1 = (function (){var statearr_28450 = state_28439;
(statearr_28450[(10)] = inst_28426);

(statearr_28450[(8)] = inst_28416__$1);

return statearr_28450;
})();
var statearr_28451_28470 = state_28439__$1;
(statearr_28451_28470[(2)] = null);

(statearr_28451_28470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (9))){
var state_28439__$1 = state_28439;
var statearr_28452_28471 = state_28439__$1;
(statearr_28452_28471[(2)] = null);

(statearr_28452_28471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (5))){
var state_28439__$1 = state_28439;
var statearr_28453_28472 = state_28439__$1;
(statearr_28453_28472[(2)] = null);

(statearr_28453_28472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (10))){
var inst_28431 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28454_28473 = state_28439__$1;
(statearr_28454_28473[(2)] = inst_28431);

(statearr_28454_28473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (8))){
var inst_28421 = (state_28439[(7)]);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28439__$1,(11),out,inst_28421);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28463,out))
;
return ((function (switch__21954__auto__,c__22016__auto___28463,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28458[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28458[(1)] = (1));

return statearr_28458;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28439){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28459){if((e28459 instanceof Object)){
var ex__21958__auto__ = e28459;
var statearr_28460_28474 = state_28439;
(statearr_28460_28474[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28475 = state_28439;
state_28439 = G__28475;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28463,out))
})();
var state__22018__auto__ = (function (){var statearr_28461 = f__22017__auto__.call(null);
(statearr_28461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28463);

return statearr_28461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28463,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28483 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28483 = (function (ch,f,map_LT_,meta28484){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28484 = meta28484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28486 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28486 = (function (fn1,_,meta28484,map_LT_,f,ch,meta28487){
this.fn1 = fn1;
this._ = _;
this.meta28484 = meta28484;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28487 = meta28487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28486.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28476_SHARP_){
return f1.call(null,(((p1__28476_SHARP_ == null))?null:self__.f.call(null,p1__28476_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28488){
var self__ = this;
var _28488__$1 = this;
return self__.meta28487;
});})(___$1))
;

cljs.core.async.t28486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28488,meta28487__$1){
var self__ = this;
var _28488__$1 = this;
return (new cljs.core.async.t28486(self__.fn1,self__._,self__.meta28484,self__.map_LT_,self__.f,self__.ch,meta28487__$1));
});})(___$1))
;

cljs.core.async.t28486.cljs$lang$type = true;

cljs.core.async.t28486.cljs$lang$ctorStr = "cljs.core.async/t28486";

cljs.core.async.t28486.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28486");
});})(___$1))
;

cljs.core.async.__GT_t28486 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28486(fn1__$1,___$2,meta28484__$1,map_LT___$1,f__$1,ch__$1,meta28487){
return (new cljs.core.async.t28486(fn1__$1,___$2,meta28484__$1,map_LT___$1,f__$1,ch__$1,meta28487));
});})(___$1))
;

}

return (new cljs.core.async.t28486(fn1,___$1,self__.meta28484,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18109__auto__ = ret;
if(cljs.core.truth_(and__18109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28483.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28485){
var self__ = this;
var _28485__$1 = this;
return self__.meta28484;
});

cljs.core.async.t28483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28485,meta28484__$1){
var self__ = this;
var _28485__$1 = this;
return (new cljs.core.async.t28483(self__.ch,self__.f,self__.map_LT_,meta28484__$1));
});

cljs.core.async.t28483.cljs$lang$type = true;

cljs.core.async.t28483.cljs$lang$ctorStr = "cljs.core.async/t28483";

cljs.core.async.t28483.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28483");
});

cljs.core.async.__GT_t28483 = (function cljs$core$async$map_LT__$___GT_t28483(ch__$1,f__$1,map_LT___$1,meta28484){
return (new cljs.core.async.t28483(ch__$1,f__$1,map_LT___$1,meta28484));
});

}

return (new cljs.core.async.t28483(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28492 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28492 = (function (ch,f,map_GT_,meta28493){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28493 = meta28493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28494){
var self__ = this;
var _28494__$1 = this;
return self__.meta28493;
});

cljs.core.async.t28492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28494,meta28493__$1){
var self__ = this;
var _28494__$1 = this;
return (new cljs.core.async.t28492(self__.ch,self__.f,self__.map_GT_,meta28493__$1));
});

cljs.core.async.t28492.cljs$lang$type = true;

cljs.core.async.t28492.cljs$lang$ctorStr = "cljs.core.async/t28492";

cljs.core.async.t28492.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28492");
});

cljs.core.async.__GT_t28492 = (function cljs$core$async$map_GT__$___GT_t28492(ch__$1,f__$1,map_GT___$1,meta28493){
return (new cljs.core.async.t28492(ch__$1,f__$1,map_GT___$1,meta28493));
});

}

return (new cljs.core.async.t28492(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28498 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28498 = (function (ch,p,filter_GT_,meta28499){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28499 = meta28499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28500){
var self__ = this;
var _28500__$1 = this;
return self__.meta28499;
});

cljs.core.async.t28498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28500,meta28499__$1){
var self__ = this;
var _28500__$1 = this;
return (new cljs.core.async.t28498(self__.ch,self__.p,self__.filter_GT_,meta28499__$1));
});

cljs.core.async.t28498.cljs$lang$type = true;

cljs.core.async.t28498.cljs$lang$ctorStr = "cljs.core.async/t28498";

cljs.core.async.t28498.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28498");
});

cljs.core.async.__GT_t28498 = (function cljs$core$async$filter_GT__$___GT_t28498(ch__$1,p__$1,filter_GT___$1,meta28499){
return (new cljs.core.async.t28498(ch__$1,p__$1,filter_GT___$1,meta28499));
});

}

return (new cljs.core.async.t28498(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28502 = arguments.length;
switch (G__28502) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___28545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28545,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28545,out){
return (function (state_28523){
var state_val_28524 = (state_28523[(1)]);
if((state_val_28524 === (7))){
var inst_28519 = (state_28523[(2)]);
var state_28523__$1 = state_28523;
var statearr_28525_28546 = state_28523__$1;
(statearr_28525_28546[(2)] = inst_28519);

(statearr_28525_28546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (1))){
var state_28523__$1 = state_28523;
var statearr_28526_28547 = state_28523__$1;
(statearr_28526_28547[(2)] = null);

(statearr_28526_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (4))){
var inst_28505 = (state_28523[(7)]);
var inst_28505__$1 = (state_28523[(2)]);
var inst_28506 = (inst_28505__$1 == null);
var state_28523__$1 = (function (){var statearr_28527 = state_28523;
(statearr_28527[(7)] = inst_28505__$1);

return statearr_28527;
})();
if(cljs.core.truth_(inst_28506)){
var statearr_28528_28548 = state_28523__$1;
(statearr_28528_28548[(1)] = (5));

} else {
var statearr_28529_28549 = state_28523__$1;
(statearr_28529_28549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (6))){
var inst_28505 = (state_28523[(7)]);
var inst_28510 = p.call(null,inst_28505);
var state_28523__$1 = state_28523;
if(cljs.core.truth_(inst_28510)){
var statearr_28530_28550 = state_28523__$1;
(statearr_28530_28550[(1)] = (8));

} else {
var statearr_28531_28551 = state_28523__$1;
(statearr_28531_28551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (3))){
var inst_28521 = (state_28523[(2)]);
var state_28523__$1 = state_28523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28523__$1,inst_28521);
} else {
if((state_val_28524 === (2))){
var state_28523__$1 = state_28523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28523__$1,(4),ch);
} else {
if((state_val_28524 === (11))){
var inst_28513 = (state_28523[(2)]);
var state_28523__$1 = state_28523;
var statearr_28532_28552 = state_28523__$1;
(statearr_28532_28552[(2)] = inst_28513);

(statearr_28532_28552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (9))){
var state_28523__$1 = state_28523;
var statearr_28533_28553 = state_28523__$1;
(statearr_28533_28553[(2)] = null);

(statearr_28533_28553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (5))){
var inst_28508 = cljs.core.async.close_BANG_.call(null,out);
var state_28523__$1 = state_28523;
var statearr_28534_28554 = state_28523__$1;
(statearr_28534_28554[(2)] = inst_28508);

(statearr_28534_28554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (10))){
var inst_28516 = (state_28523[(2)]);
var state_28523__$1 = (function (){var statearr_28535 = state_28523;
(statearr_28535[(8)] = inst_28516);

return statearr_28535;
})();
var statearr_28536_28555 = state_28523__$1;
(statearr_28536_28555[(2)] = null);

(statearr_28536_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28524 === (8))){
var inst_28505 = (state_28523[(7)]);
var state_28523__$1 = state_28523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28523__$1,(11),out,inst_28505);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28545,out))
;
return ((function (switch__21954__auto__,c__22016__auto___28545,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28540 = [null,null,null,null,null,null,null,null,null];
(statearr_28540[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28540[(1)] = (1));

return statearr_28540;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28523){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28541){if((e28541 instanceof Object)){
var ex__21958__auto__ = e28541;
var statearr_28542_28556 = state_28523;
(statearr_28542_28556[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28557 = state_28523;
state_28523 = G__28557;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28545,out))
})();
var state__22018__auto__ = (function (){var statearr_28543 = f__22017__auto__.call(null);
(statearr_28543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28545);

return statearr_28543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28545,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28559 = arguments.length;
switch (G__28559) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto__){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto__){
return (function (state_28726){
var state_val_28727 = (state_28726[(1)]);
if((state_val_28727 === (7))){
var inst_28722 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28728_28769 = state_28726__$1;
(statearr_28728_28769[(2)] = inst_28722);

(statearr_28728_28769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (20))){
var inst_28692 = (state_28726[(7)]);
var inst_28703 = (state_28726[(2)]);
var inst_28704 = cljs.core.next.call(null,inst_28692);
var inst_28678 = inst_28704;
var inst_28679 = null;
var inst_28680 = (0);
var inst_28681 = (0);
var state_28726__$1 = (function (){var statearr_28729 = state_28726;
(statearr_28729[(8)] = inst_28680);

(statearr_28729[(9)] = inst_28679);

(statearr_28729[(10)] = inst_28678);

(statearr_28729[(11)] = inst_28681);

(statearr_28729[(12)] = inst_28703);

return statearr_28729;
})();
var statearr_28730_28770 = state_28726__$1;
(statearr_28730_28770[(2)] = null);

(statearr_28730_28770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (1))){
var state_28726__$1 = state_28726;
var statearr_28731_28771 = state_28726__$1;
(statearr_28731_28771[(2)] = null);

(statearr_28731_28771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (4))){
var inst_28667 = (state_28726[(13)]);
var inst_28667__$1 = (state_28726[(2)]);
var inst_28668 = (inst_28667__$1 == null);
var state_28726__$1 = (function (){var statearr_28732 = state_28726;
(statearr_28732[(13)] = inst_28667__$1);

return statearr_28732;
})();
if(cljs.core.truth_(inst_28668)){
var statearr_28733_28772 = state_28726__$1;
(statearr_28733_28772[(1)] = (5));

} else {
var statearr_28734_28773 = state_28726__$1;
(statearr_28734_28773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (15))){
var state_28726__$1 = state_28726;
var statearr_28738_28774 = state_28726__$1;
(statearr_28738_28774[(2)] = null);

(statearr_28738_28774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (21))){
var state_28726__$1 = state_28726;
var statearr_28739_28775 = state_28726__$1;
(statearr_28739_28775[(2)] = null);

(statearr_28739_28775[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (13))){
var inst_28680 = (state_28726[(8)]);
var inst_28679 = (state_28726[(9)]);
var inst_28678 = (state_28726[(10)]);
var inst_28681 = (state_28726[(11)]);
var inst_28688 = (state_28726[(2)]);
var inst_28689 = (inst_28681 + (1));
var tmp28735 = inst_28680;
var tmp28736 = inst_28679;
var tmp28737 = inst_28678;
var inst_28678__$1 = tmp28737;
var inst_28679__$1 = tmp28736;
var inst_28680__$1 = tmp28735;
var inst_28681__$1 = inst_28689;
var state_28726__$1 = (function (){var statearr_28740 = state_28726;
(statearr_28740[(8)] = inst_28680__$1);

(statearr_28740[(9)] = inst_28679__$1);

(statearr_28740[(10)] = inst_28678__$1);

(statearr_28740[(11)] = inst_28681__$1);

(statearr_28740[(14)] = inst_28688);

return statearr_28740;
})();
var statearr_28741_28776 = state_28726__$1;
(statearr_28741_28776[(2)] = null);

(statearr_28741_28776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (22))){
var state_28726__$1 = state_28726;
var statearr_28742_28777 = state_28726__$1;
(statearr_28742_28777[(2)] = null);

(statearr_28742_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (6))){
var inst_28667 = (state_28726[(13)]);
var inst_28676 = f.call(null,inst_28667);
var inst_28677 = cljs.core.seq.call(null,inst_28676);
var inst_28678 = inst_28677;
var inst_28679 = null;
var inst_28680 = (0);
var inst_28681 = (0);
var state_28726__$1 = (function (){var statearr_28743 = state_28726;
(statearr_28743[(8)] = inst_28680);

(statearr_28743[(9)] = inst_28679);

(statearr_28743[(10)] = inst_28678);

(statearr_28743[(11)] = inst_28681);

return statearr_28743;
})();
var statearr_28744_28778 = state_28726__$1;
(statearr_28744_28778[(2)] = null);

(statearr_28744_28778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (17))){
var inst_28692 = (state_28726[(7)]);
var inst_28696 = cljs.core.chunk_first.call(null,inst_28692);
var inst_28697 = cljs.core.chunk_rest.call(null,inst_28692);
var inst_28698 = cljs.core.count.call(null,inst_28696);
var inst_28678 = inst_28697;
var inst_28679 = inst_28696;
var inst_28680 = inst_28698;
var inst_28681 = (0);
var state_28726__$1 = (function (){var statearr_28745 = state_28726;
(statearr_28745[(8)] = inst_28680);

(statearr_28745[(9)] = inst_28679);

(statearr_28745[(10)] = inst_28678);

(statearr_28745[(11)] = inst_28681);

return statearr_28745;
})();
var statearr_28746_28779 = state_28726__$1;
(statearr_28746_28779[(2)] = null);

(statearr_28746_28779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (3))){
var inst_28724 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28726__$1,inst_28724);
} else {
if((state_val_28727 === (12))){
var inst_28712 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28747_28780 = state_28726__$1;
(statearr_28747_28780[(2)] = inst_28712);

(statearr_28747_28780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (2))){
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28726__$1,(4),in$);
} else {
if((state_val_28727 === (23))){
var inst_28720 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28748_28781 = state_28726__$1;
(statearr_28748_28781[(2)] = inst_28720);

(statearr_28748_28781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (19))){
var inst_28707 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28749_28782 = state_28726__$1;
(statearr_28749_28782[(2)] = inst_28707);

(statearr_28749_28782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (11))){
var inst_28678 = (state_28726[(10)]);
var inst_28692 = (state_28726[(7)]);
var inst_28692__$1 = cljs.core.seq.call(null,inst_28678);
var state_28726__$1 = (function (){var statearr_28750 = state_28726;
(statearr_28750[(7)] = inst_28692__$1);

return statearr_28750;
})();
if(inst_28692__$1){
var statearr_28751_28783 = state_28726__$1;
(statearr_28751_28783[(1)] = (14));

} else {
var statearr_28752_28784 = state_28726__$1;
(statearr_28752_28784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (9))){
var inst_28714 = (state_28726[(2)]);
var inst_28715 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28726__$1 = (function (){var statearr_28753 = state_28726;
(statearr_28753[(15)] = inst_28714);

return statearr_28753;
})();
if(cljs.core.truth_(inst_28715)){
var statearr_28754_28785 = state_28726__$1;
(statearr_28754_28785[(1)] = (21));

} else {
var statearr_28755_28786 = state_28726__$1;
(statearr_28755_28786[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (5))){
var inst_28670 = cljs.core.async.close_BANG_.call(null,out);
var state_28726__$1 = state_28726;
var statearr_28756_28787 = state_28726__$1;
(statearr_28756_28787[(2)] = inst_28670);

(statearr_28756_28787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (14))){
var inst_28692 = (state_28726[(7)]);
var inst_28694 = cljs.core.chunked_seq_QMARK_.call(null,inst_28692);
var state_28726__$1 = state_28726;
if(inst_28694){
var statearr_28757_28788 = state_28726__$1;
(statearr_28757_28788[(1)] = (17));

} else {
var statearr_28758_28789 = state_28726__$1;
(statearr_28758_28789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (16))){
var inst_28710 = (state_28726[(2)]);
var state_28726__$1 = state_28726;
var statearr_28759_28790 = state_28726__$1;
(statearr_28759_28790[(2)] = inst_28710);

(statearr_28759_28790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28727 === (10))){
var inst_28679 = (state_28726[(9)]);
var inst_28681 = (state_28726[(11)]);
var inst_28686 = cljs.core._nth.call(null,inst_28679,inst_28681);
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28726__$1,(13),out,inst_28686);
} else {
if((state_val_28727 === (18))){
var inst_28692 = (state_28726[(7)]);
var inst_28701 = cljs.core.first.call(null,inst_28692);
var state_28726__$1 = state_28726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28726__$1,(20),out,inst_28701);
} else {
if((state_val_28727 === (8))){
var inst_28680 = (state_28726[(8)]);
var inst_28681 = (state_28726[(11)]);
var inst_28683 = (inst_28681 < inst_28680);
var inst_28684 = inst_28683;
var state_28726__$1 = state_28726;
if(cljs.core.truth_(inst_28684)){
var statearr_28760_28791 = state_28726__$1;
(statearr_28760_28791[(1)] = (10));

} else {
var statearr_28761_28792 = state_28726__$1;
(statearr_28761_28792[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto__))
;
return ((function (switch__21954__auto__,c__22016__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____0 = (function (){
var statearr_28765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28765[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__);

(statearr_28765[(1)] = (1));

return statearr_28765;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____1 = (function (state_28726){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28766){if((e28766 instanceof Object)){
var ex__21958__auto__ = e28766;
var statearr_28767_28793 = state_28726;
(statearr_28767_28793[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28726;
state_28726 = G__28794;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__ = function(state_28726){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____1.call(this,state_28726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21955__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto__))
})();
var state__22018__auto__ = (function (){var statearr_28768 = f__22017__auto__.call(null);
(statearr_28768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto__);

return statearr_28768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto__))
);

return c__22016__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28796 = arguments.length;
switch (G__28796) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28799 = arguments.length;
switch (G__28799) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28802 = arguments.length;
switch (G__28802) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___28852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28852,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28852,out){
return (function (state_28826){
var state_val_28827 = (state_28826[(1)]);
if((state_val_28827 === (7))){
var inst_28821 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28828_28853 = state_28826__$1;
(statearr_28828_28853[(2)] = inst_28821);

(statearr_28828_28853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (1))){
var inst_28803 = null;
var state_28826__$1 = (function (){var statearr_28829 = state_28826;
(statearr_28829[(7)] = inst_28803);

return statearr_28829;
})();
var statearr_28830_28854 = state_28826__$1;
(statearr_28830_28854[(2)] = null);

(statearr_28830_28854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (4))){
var inst_28806 = (state_28826[(8)]);
var inst_28806__$1 = (state_28826[(2)]);
var inst_28807 = (inst_28806__$1 == null);
var inst_28808 = cljs.core.not.call(null,inst_28807);
var state_28826__$1 = (function (){var statearr_28831 = state_28826;
(statearr_28831[(8)] = inst_28806__$1);

return statearr_28831;
})();
if(inst_28808){
var statearr_28832_28855 = state_28826__$1;
(statearr_28832_28855[(1)] = (5));

} else {
var statearr_28833_28856 = state_28826__$1;
(statearr_28833_28856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (6))){
var state_28826__$1 = state_28826;
var statearr_28834_28857 = state_28826__$1;
(statearr_28834_28857[(2)] = null);

(statearr_28834_28857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (3))){
var inst_28823 = (state_28826[(2)]);
var inst_28824 = cljs.core.async.close_BANG_.call(null,out);
var state_28826__$1 = (function (){var statearr_28835 = state_28826;
(statearr_28835[(9)] = inst_28823);

return statearr_28835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28826__$1,inst_28824);
} else {
if((state_val_28827 === (2))){
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(4),ch);
} else {
if((state_val_28827 === (11))){
var inst_28806 = (state_28826[(8)]);
var inst_28815 = (state_28826[(2)]);
var inst_28803 = inst_28806;
var state_28826__$1 = (function (){var statearr_28836 = state_28826;
(statearr_28836[(10)] = inst_28815);

(statearr_28836[(7)] = inst_28803);

return statearr_28836;
})();
var statearr_28837_28858 = state_28826__$1;
(statearr_28837_28858[(2)] = null);

(statearr_28837_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (9))){
var inst_28806 = (state_28826[(8)]);
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28826__$1,(11),out,inst_28806);
} else {
if((state_val_28827 === (5))){
var inst_28803 = (state_28826[(7)]);
var inst_28806 = (state_28826[(8)]);
var inst_28810 = cljs.core._EQ_.call(null,inst_28806,inst_28803);
var state_28826__$1 = state_28826;
if(inst_28810){
var statearr_28839_28859 = state_28826__$1;
(statearr_28839_28859[(1)] = (8));

} else {
var statearr_28840_28860 = state_28826__$1;
(statearr_28840_28860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (10))){
var inst_28818 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28841_28861 = state_28826__$1;
(statearr_28841_28861[(2)] = inst_28818);

(statearr_28841_28861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (8))){
var inst_28803 = (state_28826[(7)]);
var tmp28838 = inst_28803;
var inst_28803__$1 = tmp28838;
var state_28826__$1 = (function (){var statearr_28842 = state_28826;
(statearr_28842[(7)] = inst_28803__$1);

return statearr_28842;
})();
var statearr_28843_28862 = state_28826__$1;
(statearr_28843_28862[(2)] = null);

(statearr_28843_28862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28852,out))
;
return ((function (switch__21954__auto__,c__22016__auto___28852,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28847[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28847[(1)] = (1));

return statearr_28847;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28826){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28848){if((e28848 instanceof Object)){
var ex__21958__auto__ = e28848;
var statearr_28849_28863 = state_28826;
(statearr_28849_28863[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28864 = state_28826;
state_28826 = G__28864;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28852,out))
})();
var state__22018__auto__ = (function (){var statearr_28850 = f__22017__auto__.call(null);
(statearr_28850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28852);

return statearr_28850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28852,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28866 = arguments.length;
switch (G__28866) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___28935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___28935,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___28935,out){
return (function (state_28904){
var state_val_28905 = (state_28904[(1)]);
if((state_val_28905 === (7))){
var inst_28900 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28906_28936 = state_28904__$1;
(statearr_28906_28936[(2)] = inst_28900);

(statearr_28906_28936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (1))){
var inst_28867 = (new Array(n));
var inst_28868 = inst_28867;
var inst_28869 = (0);
var state_28904__$1 = (function (){var statearr_28907 = state_28904;
(statearr_28907[(7)] = inst_28869);

(statearr_28907[(8)] = inst_28868);

return statearr_28907;
})();
var statearr_28908_28937 = state_28904__$1;
(statearr_28908_28937[(2)] = null);

(statearr_28908_28937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (4))){
var inst_28872 = (state_28904[(9)]);
var inst_28872__$1 = (state_28904[(2)]);
var inst_28873 = (inst_28872__$1 == null);
var inst_28874 = cljs.core.not.call(null,inst_28873);
var state_28904__$1 = (function (){var statearr_28909 = state_28904;
(statearr_28909[(9)] = inst_28872__$1);

return statearr_28909;
})();
if(inst_28874){
var statearr_28910_28938 = state_28904__$1;
(statearr_28910_28938[(1)] = (5));

} else {
var statearr_28911_28939 = state_28904__$1;
(statearr_28911_28939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (15))){
var inst_28894 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28912_28940 = state_28904__$1;
(statearr_28912_28940[(2)] = inst_28894);

(statearr_28912_28940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (13))){
var state_28904__$1 = state_28904;
var statearr_28913_28941 = state_28904__$1;
(statearr_28913_28941[(2)] = null);

(statearr_28913_28941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (6))){
var inst_28869 = (state_28904[(7)]);
var inst_28890 = (inst_28869 > (0));
var state_28904__$1 = state_28904;
if(cljs.core.truth_(inst_28890)){
var statearr_28914_28942 = state_28904__$1;
(statearr_28914_28942[(1)] = (12));

} else {
var statearr_28915_28943 = state_28904__$1;
(statearr_28915_28943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (3))){
var inst_28902 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28904__$1,inst_28902);
} else {
if((state_val_28905 === (12))){
var inst_28868 = (state_28904[(8)]);
var inst_28892 = cljs.core.vec.call(null,inst_28868);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28904__$1,(15),out,inst_28892);
} else {
if((state_val_28905 === (2))){
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28904__$1,(4),ch);
} else {
if((state_val_28905 === (11))){
var inst_28884 = (state_28904[(2)]);
var inst_28885 = (new Array(n));
var inst_28868 = inst_28885;
var inst_28869 = (0);
var state_28904__$1 = (function (){var statearr_28916 = state_28904;
(statearr_28916[(7)] = inst_28869);

(statearr_28916[(10)] = inst_28884);

(statearr_28916[(8)] = inst_28868);

return statearr_28916;
})();
var statearr_28917_28944 = state_28904__$1;
(statearr_28917_28944[(2)] = null);

(statearr_28917_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (9))){
var inst_28868 = (state_28904[(8)]);
var inst_28882 = cljs.core.vec.call(null,inst_28868);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28904__$1,(11),out,inst_28882);
} else {
if((state_val_28905 === (5))){
var inst_28872 = (state_28904[(9)]);
var inst_28869 = (state_28904[(7)]);
var inst_28877 = (state_28904[(11)]);
var inst_28868 = (state_28904[(8)]);
var inst_28876 = (inst_28868[inst_28869] = inst_28872);
var inst_28877__$1 = (inst_28869 + (1));
var inst_28878 = (inst_28877__$1 < n);
var state_28904__$1 = (function (){var statearr_28918 = state_28904;
(statearr_28918[(11)] = inst_28877__$1);

(statearr_28918[(12)] = inst_28876);

return statearr_28918;
})();
if(cljs.core.truth_(inst_28878)){
var statearr_28919_28945 = state_28904__$1;
(statearr_28919_28945[(1)] = (8));

} else {
var statearr_28920_28946 = state_28904__$1;
(statearr_28920_28946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (14))){
var inst_28897 = (state_28904[(2)]);
var inst_28898 = cljs.core.async.close_BANG_.call(null,out);
var state_28904__$1 = (function (){var statearr_28922 = state_28904;
(statearr_28922[(13)] = inst_28897);

return statearr_28922;
})();
var statearr_28923_28947 = state_28904__$1;
(statearr_28923_28947[(2)] = inst_28898);

(statearr_28923_28947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (10))){
var inst_28888 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28924_28948 = state_28904__$1;
(statearr_28924_28948[(2)] = inst_28888);

(statearr_28924_28948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (8))){
var inst_28877 = (state_28904[(11)]);
var inst_28868 = (state_28904[(8)]);
var tmp28921 = inst_28868;
var inst_28868__$1 = tmp28921;
var inst_28869 = inst_28877;
var state_28904__$1 = (function (){var statearr_28925 = state_28904;
(statearr_28925[(7)] = inst_28869);

(statearr_28925[(8)] = inst_28868__$1);

return statearr_28925;
})();
var statearr_28926_28949 = state_28904__$1;
(statearr_28926_28949[(2)] = null);

(statearr_28926_28949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___28935,out))
;
return ((function (switch__21954__auto__,c__22016__auto___28935,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_28930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28930[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_28930[(1)] = (1));

return statearr_28930;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28904){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e28931){if((e28931 instanceof Object)){
var ex__21958__auto__ = e28931;
var statearr_28932_28950 = state_28904;
(statearr_28932_28950[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28904;
state_28904 = G__28951;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___28935,out))
})();
var state__22018__auto__ = (function (){var statearr_28933 = f__22017__auto__.call(null);
(statearr_28933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___28935);

return statearr_28933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___28935,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28953 = arguments.length;
switch (G__28953) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22016__auto___29026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22016__auto___29026,out){
return (function (){
var f__22017__auto__ = (function (){var switch__21954__auto__ = ((function (c__22016__auto___29026,out){
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_28997_29027 = state_28995__$1;
(statearr_28997_29027[(2)] = inst_28991);

(statearr_28997_29027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (1))){
var inst_28954 = [];
var inst_28955 = inst_28954;
var inst_28956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28995__$1 = (function (){var statearr_28998 = state_28995;
(statearr_28998[(7)] = inst_28955);

(statearr_28998[(8)] = inst_28956);

return statearr_28998;
})();
var statearr_28999_29028 = state_28995__$1;
(statearr_28999_29028[(2)] = null);

(statearr_28999_29028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var inst_28959 = (state_28995[(9)]);
var inst_28959__$1 = (state_28995[(2)]);
var inst_28960 = (inst_28959__$1 == null);
var inst_28961 = cljs.core.not.call(null,inst_28960);
var state_28995__$1 = (function (){var statearr_29000 = state_28995;
(statearr_29000[(9)] = inst_28959__$1);

return statearr_29000;
})();
if(inst_28961){
var statearr_29001_29029 = state_28995__$1;
(statearr_29001_29029[(1)] = (5));

} else {
var statearr_29002_29030 = state_28995__$1;
(statearr_29002_29030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (15))){
var inst_28985 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29003_29031 = state_28995__$1;
(statearr_29003_29031[(2)] = inst_28985);

(statearr_29003_29031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (13))){
var state_28995__$1 = state_28995;
var statearr_29004_29032 = state_28995__$1;
(statearr_29004_29032[(2)] = null);

(statearr_29004_29032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var inst_28955 = (state_28995[(7)]);
var inst_28980 = inst_28955.length;
var inst_28981 = (inst_28980 > (0));
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28981)){
var statearr_29005_29033 = state_28995__$1;
(statearr_29005_29033[(1)] = (12));

} else {
var statearr_29006_29034 = state_28995__$1;
(statearr_29006_29034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (3))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (12))){
var inst_28955 = (state_28995[(7)]);
var inst_28983 = cljs.core.vec.call(null,inst_28955);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(15),out,inst_28983);
} else {
if((state_val_28996 === (2))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(4),ch);
} else {
if((state_val_28996 === (11))){
var inst_28963 = (state_28995[(10)]);
var inst_28959 = (state_28995[(9)]);
var inst_28973 = (state_28995[(2)]);
var inst_28974 = [];
var inst_28975 = inst_28974.push(inst_28959);
var inst_28955 = inst_28974;
var inst_28956 = inst_28963;
var state_28995__$1 = (function (){var statearr_29007 = state_28995;
(statearr_29007[(11)] = inst_28973);

(statearr_29007[(7)] = inst_28955);

(statearr_29007[(12)] = inst_28975);

(statearr_29007[(8)] = inst_28956);

return statearr_29007;
})();
var statearr_29008_29035 = state_28995__$1;
(statearr_29008_29035[(2)] = null);

(statearr_29008_29035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (9))){
var inst_28955 = (state_28995[(7)]);
var inst_28971 = cljs.core.vec.call(null,inst_28955);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(11),out,inst_28971);
} else {
if((state_val_28996 === (5))){
var inst_28963 = (state_28995[(10)]);
var inst_28959 = (state_28995[(9)]);
var inst_28956 = (state_28995[(8)]);
var inst_28963__$1 = f.call(null,inst_28959);
var inst_28964 = cljs.core._EQ_.call(null,inst_28963__$1,inst_28956);
var inst_28965 = cljs.core.keyword_identical_QMARK_.call(null,inst_28956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28966 = (inst_28964) || (inst_28965);
var state_28995__$1 = (function (){var statearr_29009 = state_28995;
(statearr_29009[(10)] = inst_28963__$1);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28966)){
var statearr_29010_29036 = state_28995__$1;
(statearr_29010_29036[(1)] = (8));

} else {
var statearr_29011_29037 = state_28995__$1;
(statearr_29011_29037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (14))){
var inst_28988 = (state_28995[(2)]);
var inst_28989 = cljs.core.async.close_BANG_.call(null,out);
var state_28995__$1 = (function (){var statearr_29013 = state_28995;
(statearr_29013[(13)] = inst_28988);

return statearr_29013;
})();
var statearr_29014_29038 = state_28995__$1;
(statearr_29014_29038[(2)] = inst_28989);

(statearr_29014_29038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (10))){
var inst_28978 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29015_29039 = state_28995__$1;
(statearr_29015_29039[(2)] = inst_28978);

(statearr_29015_29039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28955 = (state_28995[(7)]);
var inst_28963 = (state_28995[(10)]);
var inst_28959 = (state_28995[(9)]);
var inst_28968 = inst_28955.push(inst_28959);
var tmp29012 = inst_28955;
var inst_28955__$1 = tmp29012;
var inst_28956 = inst_28963;
var state_28995__$1 = (function (){var statearr_29016 = state_28995;
(statearr_29016[(7)] = inst_28955__$1);

(statearr_29016[(14)] = inst_28968);

(statearr_29016[(8)] = inst_28956);

return statearr_29016;
})();
var statearr_29017_29040 = state_28995__$1;
(statearr_29017_29040[(2)] = null);

(statearr_29017_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22016__auto___29026,out))
;
return ((function (switch__21954__auto__,c__22016__auto___29026,out){
return (function() {
var cljs$core$async$state_machine__21955__auto__ = null;
var cljs$core$async$state_machine__21955__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$state_machine__21955__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$state_machine__21955__auto____1 = (function (state_28995){
while(true){
var ret_value__21956__auto__ = (function (){try{while(true){
var result__21957__auto__ = switch__21954__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21957__auto__;
}
break;
}
}catch (e29022){if((e29022 instanceof Object)){
var ex__21958__auto__ = e29022;
var statearr_29023_29041 = state_28995;
(statearr_29023_29041[(5)] = ex__21958__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29042 = state_28995;
state_28995 = G__29042;
continue;
} else {
return ret_value__21956__auto__;
}
break;
}
});
cljs$core$async$state_machine__21955__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21955__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21955__auto____0;
cljs$core$async$state_machine__21955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21955__auto____1;
return cljs$core$async$state_machine__21955__auto__;
})()
;})(switch__21954__auto__,c__22016__auto___29026,out))
})();
var state__22018__auto__ = (function (){var statearr_29024 = f__22017__auto__.call(null);
(statearr_29024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22016__auto___29026);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22018__auto__);
});})(c__22016__auto___29026,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1439021440288