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
if(typeof cljs.core.async.t28339 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28339 = (function (f,fn_handler,meta28340){
this.f = f;
this.fn_handler = fn_handler;
this.meta28340 = meta28340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28339.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28341){
var self__ = this;
var _28341__$1 = this;
return self__.meta28340;
});

cljs.core.async.t28339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28341,meta28340__$1){
var self__ = this;
var _28341__$1 = this;
return (new cljs.core.async.t28339(self__.f,self__.fn_handler,meta28340__$1));
});

cljs.core.async.t28339.cljs$lang$type = true;

cljs.core.async.t28339.cljs$lang$ctorStr = "cljs.core.async/t28339";

cljs.core.async.t28339.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t28339");
});

cljs.core.async.__GT_t28339 = (function cljs$core$async$fn_handler_$___GT_t28339(f__$1,fn_handler__$1,meta28340){
return (new cljs.core.async.t28339(f__$1,fn_handler__$1,meta28340));
});

}

return (new cljs.core.async.t28339(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28343 = buff;
if(G__28343){
var bit__18588__auto__ = null;
if(cljs.core.truth_((function (){var or__17914__auto__ = bit__18588__auto__;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return G__28343.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28343);
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
var G__28345 = arguments.length;
switch (G__28345) {
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
var G__28348 = arguments.length;
switch (G__28348) {
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
var val_28350 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28350);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28350,ret){
return (function (){
return fn1.call(null,val_28350);
});})(val_28350,ret))
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
var G__28352 = arguments.length;
switch (G__28352) {
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
var n__18799__auto___28354 = n;
var x_28355 = (0);
while(true){
if((x_28355 < n__18799__auto___28354)){
(a[x_28355] = (0));

var G__28356 = (x_28355 + (1));
x_28355 = G__28356;
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

var G__28357 = (i + (1));
i = G__28357;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28361 = (function (flag,alt_flag,meta28362){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28362 = meta28362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28363){
var self__ = this;
var _28363__$1 = this;
return self__.meta28362;
});})(flag))
;

cljs.core.async.t28361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28363,meta28362__$1){
var self__ = this;
var _28363__$1 = this;
return (new cljs.core.async.t28361(self__.flag,self__.alt_flag,meta28362__$1));
});})(flag))
;

cljs.core.async.t28361.cljs$lang$type = true;

cljs.core.async.t28361.cljs$lang$ctorStr = "cljs.core.async/t28361";

cljs.core.async.t28361.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t28361");
});})(flag))
;

cljs.core.async.__GT_t28361 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28361(flag__$1,alt_flag__$1,meta28362){
return (new cljs.core.async.t28361(flag__$1,alt_flag__$1,meta28362));
});})(flag))
;

}

return (new cljs.core.async.t28361(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28367 = (function (cb,flag,alt_handler,meta28368){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28368 = meta28368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28369){
var self__ = this;
var _28369__$1 = this;
return self__.meta28368;
});

cljs.core.async.t28367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28369,meta28368__$1){
var self__ = this;
var _28369__$1 = this;
return (new cljs.core.async.t28367(self__.cb,self__.flag,self__.alt_handler,meta28368__$1));
});

cljs.core.async.t28367.cljs$lang$type = true;

cljs.core.async.t28367.cljs$lang$ctorStr = "cljs.core.async/t28367";

cljs.core.async.t28367.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t28367");
});

cljs.core.async.__GT_t28367 = (function cljs$core$async$alt_handler_$___GT_t28367(cb__$1,flag__$1,alt_handler__$1,meta28368){
return (new cljs.core.async.t28367(cb__$1,flag__$1,alt_handler__$1,meta28368));
});

}

return (new cljs.core.async.t28367(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28370_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28371_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28371_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17914__auto__ = wport;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28372 = (i + (1));
i = G__28372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17914__auto__ = ret;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17902__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17902__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17902__auto__;
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
var argseq__18954__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18954__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28375){
var map__28376 = p__28375;
var map__28376__$1 = ((cljs.core.seq_QMARK_.call(null,map__28376))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var opts = map__28376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28373){
var G__28374 = cljs.core.first.call(null,seq28373);
var seq28373__$1 = cljs.core.next.call(null,seq28373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28374,seq28373__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28378 = arguments.length;
switch (G__28378) {
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
var c__21855__auto___28427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___28427){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___28427){
return (function (state_28402){
var state_val_28403 = (state_28402[(1)]);
if((state_val_28403 === (7))){
var inst_28398 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
var statearr_28404_28428 = state_28402__$1;
(statearr_28404_28428[(2)] = inst_28398);

(statearr_28404_28428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (1))){
var state_28402__$1 = state_28402;
var statearr_28405_28429 = state_28402__$1;
(statearr_28405_28429[(2)] = null);

(statearr_28405_28429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (4))){
var inst_28381 = (state_28402[(7)]);
var inst_28381__$1 = (state_28402[(2)]);
var inst_28382 = (inst_28381__$1 == null);
var state_28402__$1 = (function (){var statearr_28406 = state_28402;
(statearr_28406[(7)] = inst_28381__$1);

return statearr_28406;
})();
if(cljs.core.truth_(inst_28382)){
var statearr_28407_28430 = state_28402__$1;
(statearr_28407_28430[(1)] = (5));

} else {
var statearr_28408_28431 = state_28402__$1;
(statearr_28408_28431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (13))){
var state_28402__$1 = state_28402;
var statearr_28409_28432 = state_28402__$1;
(statearr_28409_28432[(2)] = null);

(statearr_28409_28432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (6))){
var inst_28381 = (state_28402[(7)]);
var state_28402__$1 = state_28402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28402__$1,(11),to,inst_28381);
} else {
if((state_val_28403 === (3))){
var inst_28400 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28402__$1,inst_28400);
} else {
if((state_val_28403 === (12))){
var state_28402__$1 = state_28402;
var statearr_28410_28433 = state_28402__$1;
(statearr_28410_28433[(2)] = null);

(statearr_28410_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (2))){
var state_28402__$1 = state_28402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28402__$1,(4),from);
} else {
if((state_val_28403 === (11))){
var inst_28391 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
if(cljs.core.truth_(inst_28391)){
var statearr_28411_28434 = state_28402__$1;
(statearr_28411_28434[(1)] = (12));

} else {
var statearr_28412_28435 = state_28402__$1;
(statearr_28412_28435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (9))){
var state_28402__$1 = state_28402;
var statearr_28413_28436 = state_28402__$1;
(statearr_28413_28436[(2)] = null);

(statearr_28413_28436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (5))){
var state_28402__$1 = state_28402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28414_28437 = state_28402__$1;
(statearr_28414_28437[(1)] = (8));

} else {
var statearr_28415_28438 = state_28402__$1;
(statearr_28415_28438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (14))){
var inst_28396 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
var statearr_28416_28439 = state_28402__$1;
(statearr_28416_28439[(2)] = inst_28396);

(statearr_28416_28439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (10))){
var inst_28388 = (state_28402[(2)]);
var state_28402__$1 = state_28402;
var statearr_28417_28440 = state_28402__$1;
(statearr_28417_28440[(2)] = inst_28388);

(statearr_28417_28440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28403 === (8))){
var inst_28385 = cljs.core.async.close_BANG_.call(null,to);
var state_28402__$1 = state_28402;
var statearr_28418_28441 = state_28402__$1;
(statearr_28418_28441[(2)] = inst_28385);

(statearr_28418_28441[(1)] = (10));


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
});})(c__21855__auto___28427))
;
return ((function (switch__21793__auto__,c__21855__auto___28427){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_28422 = [null,null,null,null,null,null,null,null];
(statearr_28422[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_28422[(1)] = (1));

return statearr_28422;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_28402){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28423){if((e28423 instanceof Object)){
var ex__21797__auto__ = e28423;
var statearr_28424_28442 = state_28402;
(statearr_28424_28442[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28443 = state_28402;
state_28402 = G__28443;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_28402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_28402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___28427))
})();
var state__21857__auto__ = (function (){var statearr_28425 = f__21856__auto__.call(null);
(statearr_28425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28427);

return statearr_28425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___28427))
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
return (function (p__28627){
var vec__28628 = p__28627;
var v = cljs.core.nth.call(null,vec__28628,(0),null);
var p = cljs.core.nth.call(null,vec__28628,(1),null);
var job = vec__28628;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21855__auto___28810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (2))){
var inst_28630 = (state_28633[(2)]);
var inst_28631 = cljs.core.async.close_BANG_.call(null,res);
var state_28633__$1 = (function (){var statearr_28635 = state_28633;
(statearr_28635[(7)] = inst_28630);

return statearr_28635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
if((state_val_28634 === (1))){
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28633__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results))
;
return ((function (switch__21793__auto__,c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_28639 = [null,null,null,null,null,null,null,null];
(statearr_28639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__);

(statearr_28639[(1)] = (1));

return statearr_28639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1 = (function (state_28633){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28640){if((e28640 instanceof Object)){
var ex__21797__auto__ = e28640;
var statearr_28641_28811 = state_28633;
(statearr_28641_28811[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28812 = state_28633;
state_28633 = G__28812;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results))
})();
var state__21857__auto__ = (function (){var statearr_28642 = f__21856__auto__.call(null);
(statearr_28642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28810);

return statearr_28642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___28810,res,vec__28628,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28643){
var vec__28644 = p__28643;
var v = cljs.core.nth.call(null,vec__28644,(0),null);
var p = cljs.core.nth.call(null,vec__28644,(1),null);
var job = vec__28644;
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
var n__18799__auto___28813 = n;
var __28814 = (0);
while(true){
if((__28814 < n__18799__auto___28813)){
var G__28645_28815 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28645_28815) {
case "async":
var c__21855__auto___28817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28814,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (__28814,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function (state_28658){
var state_val_28659 = (state_28658[(1)]);
if((state_val_28659 === (7))){
var inst_28654 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28660_28818 = state_28658__$1;
(statearr_28660_28818[(2)] = inst_28654);

(statearr_28660_28818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (6))){
var state_28658__$1 = state_28658;
var statearr_28661_28819 = state_28658__$1;
(statearr_28661_28819[(2)] = null);

(statearr_28661_28819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (5))){
var state_28658__$1 = state_28658;
var statearr_28662_28820 = state_28658__$1;
(statearr_28662_28820[(2)] = null);

(statearr_28662_28820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (4))){
var inst_28648 = (state_28658[(2)]);
var inst_28649 = async.call(null,inst_28648);
var state_28658__$1 = state_28658;
if(cljs.core.truth_(inst_28649)){
var statearr_28663_28821 = state_28658__$1;
(statearr_28663_28821[(1)] = (5));

} else {
var statearr_28664_28822 = state_28658__$1;
(statearr_28664_28822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (3))){
var inst_28656 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28658__$1,inst_28656);
} else {
if((state_val_28659 === (2))){
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28658__$1,(4),jobs);
} else {
if((state_val_28659 === (1))){
var state_28658__$1 = state_28658;
var statearr_28665_28823 = state_28658__$1;
(statearr_28665_28823[(2)] = null);

(statearr_28665_28823[(1)] = (2));


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
});})(__28814,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
;
return ((function (__28814,switch__21793__auto__,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_28669 = [null,null,null,null,null,null,null];
(statearr_28669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__);

(statearr_28669[(1)] = (1));

return statearr_28669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1 = (function (state_28658){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28670){if((e28670 instanceof Object)){
var ex__21797__auto__ = e28670;
var statearr_28671_28824 = state_28658;
(statearr_28671_28824[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28825 = state_28658;
state_28658 = G__28825;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = function(state_28658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1.call(this,state_28658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__;
})()
;})(__28814,switch__21793__auto__,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_28672 = f__21856__auto__.call(null);
(statearr_28672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28817);

return statearr_28672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(__28814,c__21855__auto___28817,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
);


break;
case "compute":
var c__21855__auto___28826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28814,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (__28814,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function (state_28685){
var state_val_28686 = (state_28685[(1)]);
if((state_val_28686 === (7))){
var inst_28681 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28687_28827 = state_28685__$1;
(statearr_28687_28827[(2)] = inst_28681);

(statearr_28687_28827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (6))){
var state_28685__$1 = state_28685;
var statearr_28688_28828 = state_28685__$1;
(statearr_28688_28828[(2)] = null);

(statearr_28688_28828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (5))){
var state_28685__$1 = state_28685;
var statearr_28689_28829 = state_28685__$1;
(statearr_28689_28829[(2)] = null);

(statearr_28689_28829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (4))){
var inst_28675 = (state_28685[(2)]);
var inst_28676 = process.call(null,inst_28675);
var state_28685__$1 = state_28685;
if(cljs.core.truth_(inst_28676)){
var statearr_28690_28830 = state_28685__$1;
(statearr_28690_28830[(1)] = (5));

} else {
var statearr_28691_28831 = state_28685__$1;
(statearr_28691_28831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (3))){
var inst_28683 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28685__$1,inst_28683);
} else {
if((state_val_28686 === (2))){
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28685__$1,(4),jobs);
} else {
if((state_val_28686 === (1))){
var state_28685__$1 = state_28685;
var statearr_28692_28832 = state_28685__$1;
(statearr_28692_28832[(2)] = null);

(statearr_28692_28832[(1)] = (2));


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
});})(__28814,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
;
return ((function (__28814,switch__21793__auto__,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_28696 = [null,null,null,null,null,null,null];
(statearr_28696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__);

(statearr_28696[(1)] = (1));

return statearr_28696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1 = (function (state_28685){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28697){if((e28697 instanceof Object)){
var ex__21797__auto__ = e28697;
var statearr_28698_28833 = state_28685;
(statearr_28698_28833[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28834 = state_28685;
state_28685 = G__28834;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = function(state_28685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1.call(this,state_28685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__;
})()
;})(__28814,switch__21793__auto__,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_28699 = f__21856__auto__.call(null);
(statearr_28699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28826);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(__28814,c__21855__auto___28826,G__28645_28815,n__18799__auto___28813,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28835 = (__28814 + (1));
__28814 = G__28835;
continue;
} else {
}
break;
}

var c__21855__auto___28836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___28836,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___28836,jobs,results,process,async){
return (function (state_28721){
var state_val_28722 = (state_28721[(1)]);
if((state_val_28722 === (9))){
var inst_28714 = (state_28721[(2)]);
var state_28721__$1 = (function (){var statearr_28723 = state_28721;
(statearr_28723[(7)] = inst_28714);

return statearr_28723;
})();
var statearr_28724_28837 = state_28721__$1;
(statearr_28724_28837[(2)] = null);

(statearr_28724_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (8))){
var inst_28707 = (state_28721[(8)]);
var inst_28712 = (state_28721[(2)]);
var state_28721__$1 = (function (){var statearr_28725 = state_28721;
(statearr_28725[(9)] = inst_28712);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28721__$1,(9),results,inst_28707);
} else {
if((state_val_28722 === (7))){
var inst_28717 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28726_28838 = state_28721__$1;
(statearr_28726_28838[(2)] = inst_28717);

(statearr_28726_28838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (6))){
var inst_28707 = (state_28721[(8)]);
var inst_28702 = (state_28721[(10)]);
var inst_28707__$1 = cljs.core.async.chan.call(null,(1));
var inst_28708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28709 = [inst_28702,inst_28707__$1];
var inst_28710 = (new cljs.core.PersistentVector(null,2,(5),inst_28708,inst_28709,null));
var state_28721__$1 = (function (){var statearr_28727 = state_28721;
(statearr_28727[(8)] = inst_28707__$1);

return statearr_28727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28721__$1,(8),jobs,inst_28710);
} else {
if((state_val_28722 === (5))){
var inst_28705 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28721__$1 = state_28721;
var statearr_28728_28839 = state_28721__$1;
(statearr_28728_28839[(2)] = inst_28705);

(statearr_28728_28839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (4))){
var inst_28702 = (state_28721[(10)]);
var inst_28702__$1 = (state_28721[(2)]);
var inst_28703 = (inst_28702__$1 == null);
var state_28721__$1 = (function (){var statearr_28729 = state_28721;
(statearr_28729[(10)] = inst_28702__$1);

return statearr_28729;
})();
if(cljs.core.truth_(inst_28703)){
var statearr_28730_28840 = state_28721__$1;
(statearr_28730_28840[(1)] = (5));

} else {
var statearr_28731_28841 = state_28721__$1;
(statearr_28731_28841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (3))){
var inst_28719 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28721__$1,inst_28719);
} else {
if((state_val_28722 === (2))){
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(4),from);
} else {
if((state_val_28722 === (1))){
var state_28721__$1 = state_28721;
var statearr_28732_28842 = state_28721__$1;
(statearr_28732_28842[(2)] = null);

(statearr_28732_28842[(1)] = (2));


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
});})(c__21855__auto___28836,jobs,results,process,async))
;
return ((function (switch__21793__auto__,c__21855__auto___28836,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1 = (function (state_28721){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28737){if((e28737 instanceof Object)){
var ex__21797__auto__ = e28737;
var statearr_28738_28843 = state_28721;
(statearr_28738_28843[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28844 = state_28721;
state_28721 = G__28844;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___28836,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_28739 = f__21856__auto__.call(null);
(statearr_28739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28836);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___28836,jobs,results,process,async))
);


var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__,jobs,results,process,async){
return (function (state_28777){
var state_val_28778 = (state_28777[(1)]);
if((state_val_28778 === (7))){
var inst_28773 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28779_28845 = state_28777__$1;
(statearr_28779_28845[(2)] = inst_28773);

(statearr_28779_28845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (20))){
var state_28777__$1 = state_28777;
var statearr_28780_28846 = state_28777__$1;
(statearr_28780_28846[(2)] = null);

(statearr_28780_28846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (1))){
var state_28777__$1 = state_28777;
var statearr_28781_28847 = state_28777__$1;
(statearr_28781_28847[(2)] = null);

(statearr_28781_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (4))){
var inst_28742 = (state_28777[(7)]);
var inst_28742__$1 = (state_28777[(2)]);
var inst_28743 = (inst_28742__$1 == null);
var state_28777__$1 = (function (){var statearr_28782 = state_28777;
(statearr_28782[(7)] = inst_28742__$1);

return statearr_28782;
})();
if(cljs.core.truth_(inst_28743)){
var statearr_28783_28848 = state_28777__$1;
(statearr_28783_28848[(1)] = (5));

} else {
var statearr_28784_28849 = state_28777__$1;
(statearr_28784_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (15))){
var inst_28755 = (state_28777[(8)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28777__$1,(18),to,inst_28755);
} else {
if((state_val_28778 === (21))){
var inst_28768 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28785_28850 = state_28777__$1;
(statearr_28785_28850[(2)] = inst_28768);

(statearr_28785_28850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (13))){
var inst_28770 = (state_28777[(2)]);
var state_28777__$1 = (function (){var statearr_28786 = state_28777;
(statearr_28786[(9)] = inst_28770);

return statearr_28786;
})();
var statearr_28787_28851 = state_28777__$1;
(statearr_28787_28851[(2)] = null);

(statearr_28787_28851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (6))){
var inst_28742 = (state_28777[(7)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28777__$1,(11),inst_28742);
} else {
if((state_val_28778 === (17))){
var inst_28763 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28763)){
var statearr_28788_28852 = state_28777__$1;
(statearr_28788_28852[(1)] = (19));

} else {
var statearr_28789_28853 = state_28777__$1;
(statearr_28789_28853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (3))){
var inst_28775 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28777__$1,inst_28775);
} else {
if((state_val_28778 === (12))){
var inst_28752 = (state_28777[(10)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28777__$1,(14),inst_28752);
} else {
if((state_val_28778 === (2))){
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28777__$1,(4),results);
} else {
if((state_val_28778 === (19))){
var state_28777__$1 = state_28777;
var statearr_28790_28854 = state_28777__$1;
(statearr_28790_28854[(2)] = null);

(statearr_28790_28854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (11))){
var inst_28752 = (state_28777[(2)]);
var state_28777__$1 = (function (){var statearr_28791 = state_28777;
(statearr_28791[(10)] = inst_28752);

return statearr_28791;
})();
var statearr_28792_28855 = state_28777__$1;
(statearr_28792_28855[(2)] = null);

(statearr_28792_28855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (9))){
var state_28777__$1 = state_28777;
var statearr_28793_28856 = state_28777__$1;
(statearr_28793_28856[(2)] = null);

(statearr_28793_28856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (5))){
var state_28777__$1 = state_28777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28794_28857 = state_28777__$1;
(statearr_28794_28857[(1)] = (8));

} else {
var statearr_28795_28858 = state_28777__$1;
(statearr_28795_28858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (14))){
var inst_28757 = (state_28777[(11)]);
var inst_28755 = (state_28777[(8)]);
var inst_28755__$1 = (state_28777[(2)]);
var inst_28756 = (inst_28755__$1 == null);
var inst_28757__$1 = cljs.core.not.call(null,inst_28756);
var state_28777__$1 = (function (){var statearr_28796 = state_28777;
(statearr_28796[(11)] = inst_28757__$1);

(statearr_28796[(8)] = inst_28755__$1);

return statearr_28796;
})();
if(inst_28757__$1){
var statearr_28797_28859 = state_28777__$1;
(statearr_28797_28859[(1)] = (15));

} else {
var statearr_28798_28860 = state_28777__$1;
(statearr_28798_28860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (16))){
var inst_28757 = (state_28777[(11)]);
var state_28777__$1 = state_28777;
var statearr_28799_28861 = state_28777__$1;
(statearr_28799_28861[(2)] = inst_28757);

(statearr_28799_28861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (10))){
var inst_28749 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28800_28862 = state_28777__$1;
(statearr_28800_28862[(2)] = inst_28749);

(statearr_28800_28862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (18))){
var inst_28760 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28801_28863 = state_28777__$1;
(statearr_28801_28863[(2)] = inst_28760);

(statearr_28801_28863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (8))){
var inst_28746 = cljs.core.async.close_BANG_.call(null,to);
var state_28777__$1 = state_28777;
var statearr_28802_28864 = state_28777__$1;
(statearr_28802_28864[(2)] = inst_28746);

(statearr_28802_28864[(1)] = (10));


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
});})(c__21855__auto__,jobs,results,process,async))
;
return ((function (switch__21793__auto__,c__21855__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_28806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__);

(statearr_28806[(1)] = (1));

return statearr_28806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1 = (function (state_28777){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28807){if((e28807 instanceof Object)){
var ex__21797__auto__ = e28807;
var statearr_28808_28865 = state_28777;
(statearr_28808_28865[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28866 = state_28777;
state_28777 = G__28866;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__ = function(state_28777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1.call(this,state_28777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_28809 = f__21856__auto__.call(null);
(statearr_28809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_28809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__,jobs,results,process,async))
);

return c__21855__auto__;
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
var G__28868 = arguments.length;
switch (G__28868) {
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
var G__28871 = arguments.length;
switch (G__28871) {
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
var G__28874 = arguments.length;
switch (G__28874) {
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
var c__21855__auto___28926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___28926,tc,fc){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___28926,tc,fc){
return (function (state_28900){
var state_val_28901 = (state_28900[(1)]);
if((state_val_28901 === (7))){
var inst_28896 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
var statearr_28902_28927 = state_28900__$1;
(statearr_28902_28927[(2)] = inst_28896);

(statearr_28902_28927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (1))){
var state_28900__$1 = state_28900;
var statearr_28903_28928 = state_28900__$1;
(statearr_28903_28928[(2)] = null);

(statearr_28903_28928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (4))){
var inst_28877 = (state_28900[(7)]);
var inst_28877__$1 = (state_28900[(2)]);
var inst_28878 = (inst_28877__$1 == null);
var state_28900__$1 = (function (){var statearr_28904 = state_28900;
(statearr_28904[(7)] = inst_28877__$1);

return statearr_28904;
})();
if(cljs.core.truth_(inst_28878)){
var statearr_28905_28929 = state_28900__$1;
(statearr_28905_28929[(1)] = (5));

} else {
var statearr_28906_28930 = state_28900__$1;
(statearr_28906_28930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (13))){
var state_28900__$1 = state_28900;
var statearr_28907_28931 = state_28900__$1;
(statearr_28907_28931[(2)] = null);

(statearr_28907_28931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (6))){
var inst_28877 = (state_28900[(7)]);
var inst_28883 = p.call(null,inst_28877);
var state_28900__$1 = state_28900;
if(cljs.core.truth_(inst_28883)){
var statearr_28908_28932 = state_28900__$1;
(statearr_28908_28932[(1)] = (9));

} else {
var statearr_28909_28933 = state_28900__$1;
(statearr_28909_28933[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (3))){
var inst_28898 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28900__$1,inst_28898);
} else {
if((state_val_28901 === (12))){
var state_28900__$1 = state_28900;
var statearr_28910_28934 = state_28900__$1;
(statearr_28910_28934[(2)] = null);

(statearr_28910_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (2))){
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(4),ch);
} else {
if((state_val_28901 === (11))){
var inst_28877 = (state_28900[(7)]);
var inst_28887 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28900__$1,(8),inst_28887,inst_28877);
} else {
if((state_val_28901 === (9))){
var state_28900__$1 = state_28900;
var statearr_28911_28935 = state_28900__$1;
(statearr_28911_28935[(2)] = tc);

(statearr_28911_28935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (5))){
var inst_28880 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28881 = cljs.core.async.close_BANG_.call(null,fc);
var state_28900__$1 = (function (){var statearr_28912 = state_28900;
(statearr_28912[(8)] = inst_28880);

return statearr_28912;
})();
var statearr_28913_28936 = state_28900__$1;
(statearr_28913_28936[(2)] = inst_28881);

(statearr_28913_28936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (14))){
var inst_28894 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
var statearr_28914_28937 = state_28900__$1;
(statearr_28914_28937[(2)] = inst_28894);

(statearr_28914_28937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (10))){
var state_28900__$1 = state_28900;
var statearr_28915_28938 = state_28900__$1;
(statearr_28915_28938[(2)] = fc);

(statearr_28915_28938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (8))){
var inst_28889 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
if(cljs.core.truth_(inst_28889)){
var statearr_28916_28939 = state_28900__$1;
(statearr_28916_28939[(1)] = (12));

} else {
var statearr_28917_28940 = state_28900__$1;
(statearr_28917_28940[(1)] = (13));

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
});})(c__21855__auto___28926,tc,fc))
;
return ((function (switch__21793__auto__,c__21855__auto___28926,tc,fc){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_28921 = [null,null,null,null,null,null,null,null,null];
(statearr_28921[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_28921[(1)] = (1));

return statearr_28921;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_28900){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e28922){if((e28922 instanceof Object)){
var ex__21797__auto__ = e28922;
var statearr_28923_28941 = state_28900;
(statearr_28923_28941[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28942 = state_28900;
state_28900 = G__28942;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_28900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___28926,tc,fc))
})();
var state__21857__auto__ = (function (){var statearr_28924 = f__21856__auto__.call(null);
(statearr_28924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___28926);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___28926,tc,fc))
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
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_28989){
var state_val_28990 = (state_28989[(1)]);
if((state_val_28990 === (7))){
var inst_28985 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
var statearr_28991_29007 = state_28989__$1;
(statearr_28991_29007[(2)] = inst_28985);

(statearr_28991_29007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (6))){
var inst_28978 = (state_28989[(7)]);
var inst_28975 = (state_28989[(8)]);
var inst_28982 = f.call(null,inst_28975,inst_28978);
var inst_28975__$1 = inst_28982;
var state_28989__$1 = (function (){var statearr_28992 = state_28989;
(statearr_28992[(8)] = inst_28975__$1);

return statearr_28992;
})();
var statearr_28993_29008 = state_28989__$1;
(statearr_28993_29008[(2)] = null);

(statearr_28993_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (5))){
var inst_28975 = (state_28989[(8)]);
var state_28989__$1 = state_28989;
var statearr_28994_29009 = state_28989__$1;
(statearr_28994_29009[(2)] = inst_28975);

(statearr_28994_29009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (4))){
var inst_28978 = (state_28989[(7)]);
var inst_28978__$1 = (state_28989[(2)]);
var inst_28979 = (inst_28978__$1 == null);
var state_28989__$1 = (function (){var statearr_28995 = state_28989;
(statearr_28995[(7)] = inst_28978__$1);

return statearr_28995;
})();
if(cljs.core.truth_(inst_28979)){
var statearr_28996_29010 = state_28989__$1;
(statearr_28996_29010[(1)] = (5));

} else {
var statearr_28997_29011 = state_28989__$1;
(statearr_28997_29011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28990 === (3))){
var inst_28987 = (state_28989[(2)]);
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28989__$1,inst_28987);
} else {
if((state_val_28990 === (2))){
var state_28989__$1 = state_28989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28989__$1,(4),ch);
} else {
if((state_val_28990 === (1))){
var inst_28975 = init;
var state_28989__$1 = (function (){var statearr_28998 = state_28989;
(statearr_28998[(8)] = inst_28975);

return statearr_28998;
})();
var statearr_28999_29012 = state_28989__$1;
(statearr_28999_29012[(2)] = null);

(statearr_28999_29012[(1)] = (2));


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
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21794__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21794__auto____0 = (function (){
var statearr_29003 = [null,null,null,null,null,null,null,null,null];
(statearr_29003[(0)] = cljs$core$async$reduce_$_state_machine__21794__auto__);

(statearr_29003[(1)] = (1));

return statearr_29003;
});
var cljs$core$async$reduce_$_state_machine__21794__auto____1 = (function (state_28989){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_28989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e29004){if((e29004 instanceof Object)){
var ex__21797__auto__ = e29004;
var statearr_29005_29013 = state_28989;
(statearr_29005_29013[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29014 = state_28989;
state_28989 = G__29014;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21794__auto__ = function(state_28989){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21794__auto____1.call(this,state_28989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21794__auto____0;
cljs$core$async$reduce_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21794__auto____1;
return cljs$core$async$reduce_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_29006 = f__21856__auto__.call(null);
(statearr_29006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
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
var G__29016 = arguments.length;
switch (G__29016) {
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
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (7))){
var inst_29023 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29043_29067 = state_29041__$1;
(statearr_29043_29067[(2)] = inst_29023);

(statearr_29043_29067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (1))){
var inst_29017 = cljs.core.seq.call(null,coll);
var inst_29018 = inst_29017;
var state_29041__$1 = (function (){var statearr_29044 = state_29041;
(statearr_29044[(7)] = inst_29018);

return statearr_29044;
})();
var statearr_29045_29068 = state_29041__$1;
(statearr_29045_29068[(2)] = null);

(statearr_29045_29068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (4))){
var inst_29018 = (state_29041[(7)]);
var inst_29021 = cljs.core.first.call(null,inst_29018);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29041__$1,(7),ch,inst_29021);
} else {
if((state_val_29042 === (13))){
var inst_29035 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29046_29069 = state_29041__$1;
(statearr_29046_29069[(2)] = inst_29035);

(statearr_29046_29069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var inst_29026 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_29026)){
var statearr_29047_29070 = state_29041__$1;
(statearr_29047_29070[(1)] = (8));

} else {
var statearr_29048_29071 = state_29041__$1;
(statearr_29048_29071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (12))){
var state_29041__$1 = state_29041;
var statearr_29049_29072 = state_29041__$1;
(statearr_29049_29072[(2)] = null);

(statearr_29049_29072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var inst_29018 = (state_29041[(7)]);
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_29018)){
var statearr_29050_29073 = state_29041__$1;
(statearr_29050_29073[(1)] = (4));

} else {
var statearr_29051_29074 = state_29041__$1;
(statearr_29051_29074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (11))){
var inst_29032 = cljs.core.async.close_BANG_.call(null,ch);
var state_29041__$1 = state_29041;
var statearr_29052_29075 = state_29041__$1;
(statearr_29052_29075[(2)] = inst_29032);

(statearr_29052_29075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (9))){
var state_29041__$1 = state_29041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29053_29076 = state_29041__$1;
(statearr_29053_29076[(1)] = (11));

} else {
var statearr_29054_29077 = state_29041__$1;
(statearr_29054_29077[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var inst_29018 = (state_29041[(7)]);
var state_29041__$1 = state_29041;
var statearr_29055_29078 = state_29041__$1;
(statearr_29055_29078[(2)] = inst_29018);

(statearr_29055_29078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (10))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29056_29079 = state_29041__$1;
(statearr_29056_29079[(2)] = inst_29037);

(statearr_29056_29079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (8))){
var inst_29018 = (state_29041[(7)]);
var inst_29028 = cljs.core.next.call(null,inst_29018);
var inst_29018__$1 = inst_29028;
var state_29041__$1 = (function (){var statearr_29057 = state_29041;
(statearr_29057[(7)] = inst_29018__$1);

return statearr_29057;
})();
var statearr_29058_29080 = state_29041__$1;
(statearr_29058_29080[(2)] = null);

(statearr_29058_29080[(1)] = (2));


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
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_29041){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object)){
var ex__21797__auto__ = e29063;
var statearr_29064_29081 = state_29041;
(statearr_29064_29081[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29082 = state_29041;
state_29041 = G__29082;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_29065 = f__21856__auto__.call(null);
(statearr_29065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_29065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
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

cljs.core.async.Mux = (function (){var obj29084 = {};
return obj29084;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17902__auto__ = _;
if(and__17902__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17902__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18550__auto__ = (((_ == null))?null:_);
return (function (){var or__17914__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29086 = {};
return obj29086;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
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
if(typeof cljs.core.async.t29308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29308 = (function (cs,ch,mult,meta29309){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29309 = meta29309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29308.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29308.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29308.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29308.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29310){
var self__ = this;
var _29310__$1 = this;
return self__.meta29309;
});})(cs))
;

cljs.core.async.t29308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29310,meta29309__$1){
var self__ = this;
var _29310__$1 = this;
return (new cljs.core.async.t29308(self__.cs,self__.ch,self__.mult,meta29309__$1));
});})(cs))
;

cljs.core.async.t29308.cljs$lang$type = true;

cljs.core.async.t29308.cljs$lang$ctorStr = "cljs.core.async/t29308";

cljs.core.async.t29308.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t29308");
});})(cs))
;

cljs.core.async.__GT_t29308 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29308(cs__$1,ch__$1,mult__$1,meta29309){
return (new cljs.core.async.t29308(cs__$1,ch__$1,mult__$1,meta29309));
});})(cs))
;

}

return (new cljs.core.async.t29308(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21855__auto___29529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___29529,cs,m,dchan,dctr,done){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___29529,cs,m,dchan,dctr,done){
return (function (state_29441){
var state_val_29442 = (state_29441[(1)]);
if((state_val_29442 === (7))){
var inst_29437 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29443_29530 = state_29441__$1;
(statearr_29443_29530[(2)] = inst_29437);

(statearr_29443_29530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (20))){
var inst_29342 = (state_29441[(7)]);
var inst_29352 = cljs.core.first.call(null,inst_29342);
var inst_29353 = cljs.core.nth.call(null,inst_29352,(0),null);
var inst_29354 = cljs.core.nth.call(null,inst_29352,(1),null);
var state_29441__$1 = (function (){var statearr_29444 = state_29441;
(statearr_29444[(8)] = inst_29353);

return statearr_29444;
})();
if(cljs.core.truth_(inst_29354)){
var statearr_29445_29531 = state_29441__$1;
(statearr_29445_29531[(1)] = (22));

} else {
var statearr_29446_29532 = state_29441__$1;
(statearr_29446_29532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (27))){
var inst_29313 = (state_29441[(9)]);
var inst_29382 = (state_29441[(10)]);
var inst_29384 = (state_29441[(11)]);
var inst_29389 = (state_29441[(12)]);
var inst_29389__$1 = cljs.core._nth.call(null,inst_29382,inst_29384);
var inst_29390 = cljs.core.async.put_BANG_.call(null,inst_29389__$1,inst_29313,done);
var state_29441__$1 = (function (){var statearr_29447 = state_29441;
(statearr_29447[(12)] = inst_29389__$1);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29390)){
var statearr_29448_29533 = state_29441__$1;
(statearr_29448_29533[(1)] = (30));

} else {
var statearr_29449_29534 = state_29441__$1;
(statearr_29449_29534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (1))){
var state_29441__$1 = state_29441;
var statearr_29450_29535 = state_29441__$1;
(statearr_29450_29535[(2)] = null);

(statearr_29450_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (24))){
var inst_29342 = (state_29441[(7)]);
var inst_29359 = (state_29441[(2)]);
var inst_29360 = cljs.core.next.call(null,inst_29342);
var inst_29322 = inst_29360;
var inst_29323 = null;
var inst_29324 = (0);
var inst_29325 = (0);
var state_29441__$1 = (function (){var statearr_29451 = state_29441;
(statearr_29451[(13)] = inst_29325);

(statearr_29451[(14)] = inst_29324);

(statearr_29451[(15)] = inst_29323);

(statearr_29451[(16)] = inst_29359);

(statearr_29451[(17)] = inst_29322);

return statearr_29451;
})();
var statearr_29452_29536 = state_29441__$1;
(statearr_29452_29536[(2)] = null);

(statearr_29452_29536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (39))){
var state_29441__$1 = state_29441;
var statearr_29456_29537 = state_29441__$1;
(statearr_29456_29537[(2)] = null);

(statearr_29456_29537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (4))){
var inst_29313 = (state_29441[(9)]);
var inst_29313__$1 = (state_29441[(2)]);
var inst_29314 = (inst_29313__$1 == null);
var state_29441__$1 = (function (){var statearr_29457 = state_29441;
(statearr_29457[(9)] = inst_29313__$1);

return statearr_29457;
})();
if(cljs.core.truth_(inst_29314)){
var statearr_29458_29538 = state_29441__$1;
(statearr_29458_29538[(1)] = (5));

} else {
var statearr_29459_29539 = state_29441__$1;
(statearr_29459_29539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (15))){
var inst_29325 = (state_29441[(13)]);
var inst_29324 = (state_29441[(14)]);
var inst_29323 = (state_29441[(15)]);
var inst_29322 = (state_29441[(17)]);
var inst_29338 = (state_29441[(2)]);
var inst_29339 = (inst_29325 + (1));
var tmp29453 = inst_29324;
var tmp29454 = inst_29323;
var tmp29455 = inst_29322;
var inst_29322__$1 = tmp29455;
var inst_29323__$1 = tmp29454;
var inst_29324__$1 = tmp29453;
var inst_29325__$1 = inst_29339;
var state_29441__$1 = (function (){var statearr_29460 = state_29441;
(statearr_29460[(13)] = inst_29325__$1);

(statearr_29460[(14)] = inst_29324__$1);

(statearr_29460[(15)] = inst_29323__$1);

(statearr_29460[(18)] = inst_29338);

(statearr_29460[(17)] = inst_29322__$1);

return statearr_29460;
})();
var statearr_29461_29540 = state_29441__$1;
(statearr_29461_29540[(2)] = null);

(statearr_29461_29540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (21))){
var inst_29363 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29465_29541 = state_29441__$1;
(statearr_29465_29541[(2)] = inst_29363);

(statearr_29465_29541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (31))){
var inst_29389 = (state_29441[(12)]);
var inst_29393 = done.call(null,null);
var inst_29394 = cljs.core.async.untap_STAR_.call(null,m,inst_29389);
var state_29441__$1 = (function (){var statearr_29466 = state_29441;
(statearr_29466[(19)] = inst_29393);

return statearr_29466;
})();
var statearr_29467_29542 = state_29441__$1;
(statearr_29467_29542[(2)] = inst_29394);

(statearr_29467_29542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (32))){
var inst_29381 = (state_29441[(20)]);
var inst_29383 = (state_29441[(21)]);
var inst_29382 = (state_29441[(10)]);
var inst_29384 = (state_29441[(11)]);
var inst_29396 = (state_29441[(2)]);
var inst_29397 = (inst_29384 + (1));
var tmp29462 = inst_29381;
var tmp29463 = inst_29383;
var tmp29464 = inst_29382;
var inst_29381__$1 = tmp29462;
var inst_29382__$1 = tmp29464;
var inst_29383__$1 = tmp29463;
var inst_29384__$1 = inst_29397;
var state_29441__$1 = (function (){var statearr_29468 = state_29441;
(statearr_29468[(20)] = inst_29381__$1);

(statearr_29468[(21)] = inst_29383__$1);

(statearr_29468[(10)] = inst_29382__$1);

(statearr_29468[(22)] = inst_29396);

(statearr_29468[(11)] = inst_29384__$1);

return statearr_29468;
})();
var statearr_29469_29543 = state_29441__$1;
(statearr_29469_29543[(2)] = null);

(statearr_29469_29543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (40))){
var inst_29409 = (state_29441[(23)]);
var inst_29413 = done.call(null,null);
var inst_29414 = cljs.core.async.untap_STAR_.call(null,m,inst_29409);
var state_29441__$1 = (function (){var statearr_29470 = state_29441;
(statearr_29470[(24)] = inst_29413);

return statearr_29470;
})();
var statearr_29471_29544 = state_29441__$1;
(statearr_29471_29544[(2)] = inst_29414);

(statearr_29471_29544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (33))){
var inst_29400 = (state_29441[(25)]);
var inst_29402 = cljs.core.chunked_seq_QMARK_.call(null,inst_29400);
var state_29441__$1 = state_29441;
if(inst_29402){
var statearr_29472_29545 = state_29441__$1;
(statearr_29472_29545[(1)] = (36));

} else {
var statearr_29473_29546 = state_29441__$1;
(statearr_29473_29546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (13))){
var inst_29332 = (state_29441[(26)]);
var inst_29335 = cljs.core.async.close_BANG_.call(null,inst_29332);
var state_29441__$1 = state_29441;
var statearr_29474_29547 = state_29441__$1;
(statearr_29474_29547[(2)] = inst_29335);

(statearr_29474_29547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (22))){
var inst_29353 = (state_29441[(8)]);
var inst_29356 = cljs.core.async.close_BANG_.call(null,inst_29353);
var state_29441__$1 = state_29441;
var statearr_29475_29548 = state_29441__$1;
(statearr_29475_29548[(2)] = inst_29356);

(statearr_29475_29548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (36))){
var inst_29400 = (state_29441[(25)]);
var inst_29404 = cljs.core.chunk_first.call(null,inst_29400);
var inst_29405 = cljs.core.chunk_rest.call(null,inst_29400);
var inst_29406 = cljs.core.count.call(null,inst_29404);
var inst_29381 = inst_29405;
var inst_29382 = inst_29404;
var inst_29383 = inst_29406;
var inst_29384 = (0);
var state_29441__$1 = (function (){var statearr_29476 = state_29441;
(statearr_29476[(20)] = inst_29381);

(statearr_29476[(21)] = inst_29383);

(statearr_29476[(10)] = inst_29382);

(statearr_29476[(11)] = inst_29384);

return statearr_29476;
})();
var statearr_29477_29549 = state_29441__$1;
(statearr_29477_29549[(2)] = null);

(statearr_29477_29549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (41))){
var inst_29400 = (state_29441[(25)]);
var inst_29416 = (state_29441[(2)]);
var inst_29417 = cljs.core.next.call(null,inst_29400);
var inst_29381 = inst_29417;
var inst_29382 = null;
var inst_29383 = (0);
var inst_29384 = (0);
var state_29441__$1 = (function (){var statearr_29478 = state_29441;
(statearr_29478[(20)] = inst_29381);

(statearr_29478[(21)] = inst_29383);

(statearr_29478[(27)] = inst_29416);

(statearr_29478[(10)] = inst_29382);

(statearr_29478[(11)] = inst_29384);

return statearr_29478;
})();
var statearr_29479_29550 = state_29441__$1;
(statearr_29479_29550[(2)] = null);

(statearr_29479_29550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (43))){
var state_29441__$1 = state_29441;
var statearr_29480_29551 = state_29441__$1;
(statearr_29480_29551[(2)] = null);

(statearr_29480_29551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (29))){
var inst_29425 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29481_29552 = state_29441__$1;
(statearr_29481_29552[(2)] = inst_29425);

(statearr_29481_29552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (44))){
var inst_29434 = (state_29441[(2)]);
var state_29441__$1 = (function (){var statearr_29482 = state_29441;
(statearr_29482[(28)] = inst_29434);

return statearr_29482;
})();
var statearr_29483_29553 = state_29441__$1;
(statearr_29483_29553[(2)] = null);

(statearr_29483_29553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (6))){
var inst_29373 = (state_29441[(29)]);
var inst_29372 = cljs.core.deref.call(null,cs);
var inst_29373__$1 = cljs.core.keys.call(null,inst_29372);
var inst_29374 = cljs.core.count.call(null,inst_29373__$1);
var inst_29375 = cljs.core.reset_BANG_.call(null,dctr,inst_29374);
var inst_29380 = cljs.core.seq.call(null,inst_29373__$1);
var inst_29381 = inst_29380;
var inst_29382 = null;
var inst_29383 = (0);
var inst_29384 = (0);
var state_29441__$1 = (function (){var statearr_29484 = state_29441;
(statearr_29484[(30)] = inst_29375);

(statearr_29484[(20)] = inst_29381);

(statearr_29484[(21)] = inst_29383);

(statearr_29484[(10)] = inst_29382);

(statearr_29484[(29)] = inst_29373__$1);

(statearr_29484[(11)] = inst_29384);

return statearr_29484;
})();
var statearr_29485_29554 = state_29441__$1;
(statearr_29485_29554[(2)] = null);

(statearr_29485_29554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (28))){
var inst_29381 = (state_29441[(20)]);
var inst_29400 = (state_29441[(25)]);
var inst_29400__$1 = cljs.core.seq.call(null,inst_29381);
var state_29441__$1 = (function (){var statearr_29486 = state_29441;
(statearr_29486[(25)] = inst_29400__$1);

return statearr_29486;
})();
if(inst_29400__$1){
var statearr_29487_29555 = state_29441__$1;
(statearr_29487_29555[(1)] = (33));

} else {
var statearr_29488_29556 = state_29441__$1;
(statearr_29488_29556[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (25))){
var inst_29383 = (state_29441[(21)]);
var inst_29384 = (state_29441[(11)]);
var inst_29386 = (inst_29384 < inst_29383);
var inst_29387 = inst_29386;
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29387)){
var statearr_29489_29557 = state_29441__$1;
(statearr_29489_29557[(1)] = (27));

} else {
var statearr_29490_29558 = state_29441__$1;
(statearr_29490_29558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (34))){
var state_29441__$1 = state_29441;
var statearr_29491_29559 = state_29441__$1;
(statearr_29491_29559[(2)] = null);

(statearr_29491_29559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (17))){
var state_29441__$1 = state_29441;
var statearr_29492_29560 = state_29441__$1;
(statearr_29492_29560[(2)] = null);

(statearr_29492_29560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (3))){
var inst_29439 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29441__$1,inst_29439);
} else {
if((state_val_29442 === (12))){
var inst_29368 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29493_29561 = state_29441__$1;
(statearr_29493_29561[(2)] = inst_29368);

(statearr_29493_29561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (2))){
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29441__$1,(4),ch);
} else {
if((state_val_29442 === (23))){
var state_29441__$1 = state_29441;
var statearr_29494_29562 = state_29441__$1;
(statearr_29494_29562[(2)] = null);

(statearr_29494_29562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (35))){
var inst_29423 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29495_29563 = state_29441__$1;
(statearr_29495_29563[(2)] = inst_29423);

(statearr_29495_29563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (19))){
var inst_29342 = (state_29441[(7)]);
var inst_29346 = cljs.core.chunk_first.call(null,inst_29342);
var inst_29347 = cljs.core.chunk_rest.call(null,inst_29342);
var inst_29348 = cljs.core.count.call(null,inst_29346);
var inst_29322 = inst_29347;
var inst_29323 = inst_29346;
var inst_29324 = inst_29348;
var inst_29325 = (0);
var state_29441__$1 = (function (){var statearr_29496 = state_29441;
(statearr_29496[(13)] = inst_29325);

(statearr_29496[(14)] = inst_29324);

(statearr_29496[(15)] = inst_29323);

(statearr_29496[(17)] = inst_29322);

return statearr_29496;
})();
var statearr_29497_29564 = state_29441__$1;
(statearr_29497_29564[(2)] = null);

(statearr_29497_29564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (11))){
var inst_29342 = (state_29441[(7)]);
var inst_29322 = (state_29441[(17)]);
var inst_29342__$1 = cljs.core.seq.call(null,inst_29322);
var state_29441__$1 = (function (){var statearr_29498 = state_29441;
(statearr_29498[(7)] = inst_29342__$1);

return statearr_29498;
})();
if(inst_29342__$1){
var statearr_29499_29565 = state_29441__$1;
(statearr_29499_29565[(1)] = (16));

} else {
var statearr_29500_29566 = state_29441__$1;
(statearr_29500_29566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (9))){
var inst_29370 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29501_29567 = state_29441__$1;
(statearr_29501_29567[(2)] = inst_29370);

(statearr_29501_29567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (5))){
var inst_29320 = cljs.core.deref.call(null,cs);
var inst_29321 = cljs.core.seq.call(null,inst_29320);
var inst_29322 = inst_29321;
var inst_29323 = null;
var inst_29324 = (0);
var inst_29325 = (0);
var state_29441__$1 = (function (){var statearr_29502 = state_29441;
(statearr_29502[(13)] = inst_29325);

(statearr_29502[(14)] = inst_29324);

(statearr_29502[(15)] = inst_29323);

(statearr_29502[(17)] = inst_29322);

return statearr_29502;
})();
var statearr_29503_29568 = state_29441__$1;
(statearr_29503_29568[(2)] = null);

(statearr_29503_29568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (14))){
var state_29441__$1 = state_29441;
var statearr_29504_29569 = state_29441__$1;
(statearr_29504_29569[(2)] = null);

(statearr_29504_29569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (45))){
var inst_29431 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29505_29570 = state_29441__$1;
(statearr_29505_29570[(2)] = inst_29431);

(statearr_29505_29570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (26))){
var inst_29373 = (state_29441[(29)]);
var inst_29427 = (state_29441[(2)]);
var inst_29428 = cljs.core.seq.call(null,inst_29373);
var state_29441__$1 = (function (){var statearr_29506 = state_29441;
(statearr_29506[(31)] = inst_29427);

return statearr_29506;
})();
if(inst_29428){
var statearr_29507_29571 = state_29441__$1;
(statearr_29507_29571[(1)] = (42));

} else {
var statearr_29508_29572 = state_29441__$1;
(statearr_29508_29572[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (16))){
var inst_29342 = (state_29441[(7)]);
var inst_29344 = cljs.core.chunked_seq_QMARK_.call(null,inst_29342);
var state_29441__$1 = state_29441;
if(inst_29344){
var statearr_29509_29573 = state_29441__$1;
(statearr_29509_29573[(1)] = (19));

} else {
var statearr_29510_29574 = state_29441__$1;
(statearr_29510_29574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (38))){
var inst_29420 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29511_29575 = state_29441__$1;
(statearr_29511_29575[(2)] = inst_29420);

(statearr_29511_29575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (30))){
var state_29441__$1 = state_29441;
var statearr_29512_29576 = state_29441__$1;
(statearr_29512_29576[(2)] = null);

(statearr_29512_29576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (10))){
var inst_29325 = (state_29441[(13)]);
var inst_29323 = (state_29441[(15)]);
var inst_29331 = cljs.core._nth.call(null,inst_29323,inst_29325);
var inst_29332 = cljs.core.nth.call(null,inst_29331,(0),null);
var inst_29333 = cljs.core.nth.call(null,inst_29331,(1),null);
var state_29441__$1 = (function (){var statearr_29513 = state_29441;
(statearr_29513[(26)] = inst_29332);

return statearr_29513;
})();
if(cljs.core.truth_(inst_29333)){
var statearr_29514_29577 = state_29441__$1;
(statearr_29514_29577[(1)] = (13));

} else {
var statearr_29515_29578 = state_29441__$1;
(statearr_29515_29578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (18))){
var inst_29366 = (state_29441[(2)]);
var state_29441__$1 = state_29441;
var statearr_29516_29579 = state_29441__$1;
(statearr_29516_29579[(2)] = inst_29366);

(statearr_29516_29579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (42))){
var state_29441__$1 = state_29441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29441__$1,(45),dchan);
} else {
if((state_val_29442 === (37))){
var inst_29313 = (state_29441[(9)]);
var inst_29400 = (state_29441[(25)]);
var inst_29409 = (state_29441[(23)]);
var inst_29409__$1 = cljs.core.first.call(null,inst_29400);
var inst_29410 = cljs.core.async.put_BANG_.call(null,inst_29409__$1,inst_29313,done);
var state_29441__$1 = (function (){var statearr_29517 = state_29441;
(statearr_29517[(23)] = inst_29409__$1);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29410)){
var statearr_29518_29580 = state_29441__$1;
(statearr_29518_29580[(1)] = (39));

} else {
var statearr_29519_29581 = state_29441__$1;
(statearr_29519_29581[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29442 === (8))){
var inst_29325 = (state_29441[(13)]);
var inst_29324 = (state_29441[(14)]);
var inst_29327 = (inst_29325 < inst_29324);
var inst_29328 = inst_29327;
var state_29441__$1 = state_29441;
if(cljs.core.truth_(inst_29328)){
var statearr_29520_29582 = state_29441__$1;
(statearr_29520_29582[(1)] = (10));

} else {
var statearr_29521_29583 = state_29441__$1;
(statearr_29521_29583[(1)] = (11));

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
});})(c__21855__auto___29529,cs,m,dchan,dctr,done))
;
return ((function (switch__21793__auto__,c__21855__auto___29529,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21794__auto__ = null;
var cljs$core$async$mult_$_state_machine__21794__auto____0 = (function (){
var statearr_29525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29525[(0)] = cljs$core$async$mult_$_state_machine__21794__auto__);

(statearr_29525[(1)] = (1));

return statearr_29525;
});
var cljs$core$async$mult_$_state_machine__21794__auto____1 = (function (state_29441){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_29441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e29526){if((e29526 instanceof Object)){
var ex__21797__auto__ = e29526;
var statearr_29527_29584 = state_29441;
(statearr_29527_29584[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29585 = state_29441;
state_29441 = G__29585;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21794__auto__ = function(state_29441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21794__auto____1.call(this,state_29441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21794__auto____0;
cljs$core$async$mult_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21794__auto____1;
return cljs$core$async$mult_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___29529,cs,m,dchan,dctr,done))
})();
var state__21857__auto__ = (function (){var statearr_29528 = f__21856__auto__.call(null);
(statearr_29528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___29529);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___29529,cs,m,dchan,dctr,done))
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
var G__29587 = arguments.length;
switch (G__29587) {
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

cljs.core.async.Mix = (function (){var obj29590 = {};
return obj29590;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17902__auto__ = m;
if(and__17902__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18550__auto__ = (((m == null))?null:m);
return (function (){var or__17914__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__18954__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18954__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29595){
var map__29596 = p__29595;
var map__29596__$1 = ((cljs.core.seq_QMARK_.call(null,map__29596))?cljs.core.apply.call(null,cljs.core.hash_map,map__29596):map__29596);
var opts = map__29596__$1;
var statearr_29597_29600 = state;
(statearr_29597_29600[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29596,map__29596__$1,opts){
return (function (val){
var statearr_29598_29601 = state;
(statearr_29598_29601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29596,map__29596__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29599_29602 = state;
(statearr_29599_29602[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29591){
var G__29592 = cljs.core.first.call(null,seq29591);
var seq29591__$1 = cljs.core.next.call(null,seq29591);
var G__29593 = cljs.core.first.call(null,seq29591__$1);
var seq29591__$2 = cljs.core.next.call(null,seq29591__$1);
var G__29594 = cljs.core.first.call(null,seq29591__$2);
var seq29591__$3 = cljs.core.next.call(null,seq29591__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29592,G__29593,G__29594,seq29591__$3);
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
if(typeof cljs.core.async.t29722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29722 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29723){
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
this.meta29723 = meta29723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29722.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29722.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29722.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29724){
var self__ = this;
var _29724__$1 = this;
return self__.meta29723;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29724,meta29723__$1){
var self__ = this;
var _29724__$1 = this;
return (new cljs.core.async.t29722(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29723__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29722.cljs$lang$type = true;

cljs.core.async.t29722.cljs$lang$ctorStr = "cljs.core.async/t29722";

cljs.core.async.t29722.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t29722");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29722 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29723){
return (new cljs.core.async.t29722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29723));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29722(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21855__auto___29841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29794){
var state_val_29795 = (state_29794[(1)]);
if((state_val_29795 === (7))){
var inst_29738 = (state_29794[(7)]);
var inst_29743 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29738);
var state_29794__$1 = state_29794;
var statearr_29796_29842 = state_29794__$1;
(statearr_29796_29842[(2)] = inst_29743);

(statearr_29796_29842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (20))){
var inst_29753 = (state_29794[(8)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29794__$1,(23),out,inst_29753);
} else {
if((state_val_29795 === (1))){
var inst_29728 = (state_29794[(9)]);
var inst_29728__$1 = calc_state.call(null);
var inst_29729 = cljs.core.seq_QMARK_.call(null,inst_29728__$1);
var state_29794__$1 = (function (){var statearr_29797 = state_29794;
(statearr_29797[(9)] = inst_29728__$1);

return statearr_29797;
})();
if(inst_29729){
var statearr_29798_29843 = state_29794__$1;
(statearr_29798_29843[(1)] = (2));

} else {
var statearr_29799_29844 = state_29794__$1;
(statearr_29799_29844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (24))){
var inst_29746 = (state_29794[(10)]);
var inst_29738 = inst_29746;
var state_29794__$1 = (function (){var statearr_29800 = state_29794;
(statearr_29800[(7)] = inst_29738);

return statearr_29800;
})();
var statearr_29801_29845 = state_29794__$1;
(statearr_29801_29845[(2)] = null);

(statearr_29801_29845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (4))){
var inst_29728 = (state_29794[(9)]);
var inst_29734 = (state_29794[(2)]);
var inst_29735 = cljs.core.get.call(null,inst_29734,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29736 = cljs.core.get.call(null,inst_29734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29737 = cljs.core.get.call(null,inst_29734,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29738 = inst_29728;
var state_29794__$1 = (function (){var statearr_29802 = state_29794;
(statearr_29802[(11)] = inst_29736);

(statearr_29802[(12)] = inst_29737);

(statearr_29802[(7)] = inst_29738);

(statearr_29802[(13)] = inst_29735);

return statearr_29802;
})();
var statearr_29803_29846 = state_29794__$1;
(statearr_29803_29846[(2)] = null);

(statearr_29803_29846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (15))){
var state_29794__$1 = state_29794;
var statearr_29804_29847 = state_29794__$1;
(statearr_29804_29847[(2)] = null);

(statearr_29804_29847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (21))){
var inst_29746 = (state_29794[(10)]);
var inst_29738 = inst_29746;
var state_29794__$1 = (function (){var statearr_29805 = state_29794;
(statearr_29805[(7)] = inst_29738);

return statearr_29805;
})();
var statearr_29806_29848 = state_29794__$1;
(statearr_29806_29848[(2)] = null);

(statearr_29806_29848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (13))){
var inst_29790 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29807_29849 = state_29794__$1;
(statearr_29807_29849[(2)] = inst_29790);

(statearr_29807_29849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (22))){
var inst_29788 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29808_29850 = state_29794__$1;
(statearr_29808_29850[(2)] = inst_29788);

(statearr_29808_29850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (6))){
var inst_29792 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29794__$1,inst_29792);
} else {
if((state_val_29795 === (25))){
var state_29794__$1 = state_29794;
var statearr_29809_29851 = state_29794__$1;
(statearr_29809_29851[(2)] = null);

(statearr_29809_29851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (17))){
var inst_29768 = (state_29794[(14)]);
var state_29794__$1 = state_29794;
var statearr_29810_29852 = state_29794__$1;
(statearr_29810_29852[(2)] = inst_29768);

(statearr_29810_29852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (3))){
var inst_29728 = (state_29794[(9)]);
var state_29794__$1 = state_29794;
var statearr_29811_29853 = state_29794__$1;
(statearr_29811_29853[(2)] = inst_29728);

(statearr_29811_29853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (12))){
var inst_29768 = (state_29794[(14)]);
var inst_29749 = (state_29794[(15)]);
var inst_29754 = (state_29794[(16)]);
var inst_29768__$1 = inst_29749.call(null,inst_29754);
var state_29794__$1 = (function (){var statearr_29812 = state_29794;
(statearr_29812[(14)] = inst_29768__$1);

return statearr_29812;
})();
if(cljs.core.truth_(inst_29768__$1)){
var statearr_29813_29854 = state_29794__$1;
(statearr_29813_29854[(1)] = (17));

} else {
var statearr_29814_29855 = state_29794__$1;
(statearr_29814_29855[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (2))){
var inst_29728 = (state_29794[(9)]);
var inst_29731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29728);
var state_29794__$1 = state_29794;
var statearr_29815_29856 = state_29794__$1;
(statearr_29815_29856[(2)] = inst_29731);

(statearr_29815_29856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (23))){
var inst_29779 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29779)){
var statearr_29816_29857 = state_29794__$1;
(statearr_29816_29857[(1)] = (24));

} else {
var statearr_29817_29858 = state_29794__$1;
(statearr_29817_29858[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (19))){
var inst_29776 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29776)){
var statearr_29818_29859 = state_29794__$1;
(statearr_29818_29859[(1)] = (20));

} else {
var statearr_29819_29860 = state_29794__$1;
(statearr_29819_29860[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (11))){
var inst_29753 = (state_29794[(8)]);
var inst_29759 = (inst_29753 == null);
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29759)){
var statearr_29820_29861 = state_29794__$1;
(statearr_29820_29861[(1)] = (14));

} else {
var statearr_29821_29862 = state_29794__$1;
(statearr_29821_29862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (9))){
var inst_29746 = (state_29794[(10)]);
var inst_29746__$1 = (state_29794[(2)]);
var inst_29747 = cljs.core.get.call(null,inst_29746__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29748 = cljs.core.get.call(null,inst_29746__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29749 = cljs.core.get.call(null,inst_29746__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29794__$1 = (function (){var statearr_29822 = state_29794;
(statearr_29822[(10)] = inst_29746__$1);

(statearr_29822[(15)] = inst_29749);

(statearr_29822[(17)] = inst_29748);

return statearr_29822;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29794__$1,(10),inst_29747);
} else {
if((state_val_29795 === (5))){
var inst_29738 = (state_29794[(7)]);
var inst_29741 = cljs.core.seq_QMARK_.call(null,inst_29738);
var state_29794__$1 = state_29794;
if(inst_29741){
var statearr_29823_29863 = state_29794__$1;
(statearr_29823_29863[(1)] = (7));

} else {
var statearr_29824_29864 = state_29794__$1;
(statearr_29824_29864[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (14))){
var inst_29754 = (state_29794[(16)]);
var inst_29761 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29754);
var state_29794__$1 = state_29794;
var statearr_29825_29865 = state_29794__$1;
(statearr_29825_29865[(2)] = inst_29761);

(statearr_29825_29865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (26))){
var inst_29784 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29826_29866 = state_29794__$1;
(statearr_29826_29866[(2)] = inst_29784);

(statearr_29826_29866[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (16))){
var inst_29764 = (state_29794[(2)]);
var inst_29765 = calc_state.call(null);
var inst_29738 = inst_29765;
var state_29794__$1 = (function (){var statearr_29827 = state_29794;
(statearr_29827[(18)] = inst_29764);

(statearr_29827[(7)] = inst_29738);

return statearr_29827;
})();
var statearr_29828_29867 = state_29794__$1;
(statearr_29828_29867[(2)] = null);

(statearr_29828_29867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (10))){
var inst_29754 = (state_29794[(16)]);
var inst_29753 = (state_29794[(8)]);
var inst_29752 = (state_29794[(2)]);
var inst_29753__$1 = cljs.core.nth.call(null,inst_29752,(0),null);
var inst_29754__$1 = cljs.core.nth.call(null,inst_29752,(1),null);
var inst_29755 = (inst_29753__$1 == null);
var inst_29756 = cljs.core._EQ_.call(null,inst_29754__$1,change);
var inst_29757 = (inst_29755) || (inst_29756);
var state_29794__$1 = (function (){var statearr_29829 = state_29794;
(statearr_29829[(16)] = inst_29754__$1);

(statearr_29829[(8)] = inst_29753__$1);

return statearr_29829;
})();
if(cljs.core.truth_(inst_29757)){
var statearr_29830_29868 = state_29794__$1;
(statearr_29830_29868[(1)] = (11));

} else {
var statearr_29831_29869 = state_29794__$1;
(statearr_29831_29869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (18))){
var inst_29749 = (state_29794[(15)]);
var inst_29748 = (state_29794[(17)]);
var inst_29754 = (state_29794[(16)]);
var inst_29771 = cljs.core.empty_QMARK_.call(null,inst_29749);
var inst_29772 = inst_29748.call(null,inst_29754);
var inst_29773 = cljs.core.not.call(null,inst_29772);
var inst_29774 = (inst_29771) && (inst_29773);
var state_29794__$1 = state_29794;
var statearr_29832_29870 = state_29794__$1;
(statearr_29832_29870[(2)] = inst_29774);

(statearr_29832_29870[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (8))){
var inst_29738 = (state_29794[(7)]);
var state_29794__$1 = state_29794;
var statearr_29833_29871 = state_29794__$1;
(statearr_29833_29871[(2)] = inst_29738);

(statearr_29833_29871[(1)] = (9));


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
});})(c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21793__auto__,c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21794__auto__ = null;
var cljs$core$async$mix_$_state_machine__21794__auto____0 = (function (){
var statearr_29837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29837[(0)] = cljs$core$async$mix_$_state_machine__21794__auto__);

(statearr_29837[(1)] = (1));

return statearr_29837;
});
var cljs$core$async$mix_$_state_machine__21794__auto____1 = (function (state_29794){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_29794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e29838){if((e29838 instanceof Object)){
var ex__21797__auto__ = e29838;
var statearr_29839_29872 = state_29794;
(statearr_29839_29872[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29873 = state_29794;
state_29794 = G__29873;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21794__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21794__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21794__auto____0;
cljs$core$async$mix_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21794__auto____1;
return cljs$core$async$mix_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21857__auto__ = (function (){var statearr_29840 = f__21856__auto__.call(null);
(statearr_29840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___29841);

return statearr_29840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___29841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj29875 = {};
return obj29875;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17902__auto__ = p;
if(and__17902__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17902__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18550__auto__ = (((p == null))?null:p);
return (function (){var or__17914__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17902__auto__ = p;
if(and__17902__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17902__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18550__auto__ = (((p == null))?null:p);
return (function (){var or__17914__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__29877 = arguments.length;
switch (G__29877) {
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
if((function (){var and__17902__auto__ = p;
if(and__17902__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17902__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18550__auto__ = (((p == null))?null:p);
return (function (){var or__17914__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__17902__auto__ = p;
if(and__17902__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17902__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18550__auto__ = (((p == null))?null:p);
return (function (){var or__17914__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18550__auto__)]);
if(or__17914__auto__){
return or__17914__auto__;
} else {
var or__17914__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17914__auto____$1){
return or__17914__auto____$1;
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
var G__29881 = arguments.length;
switch (G__29881) {
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
var or__17914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17914__auto__,mults){
return (function (p1__29879_SHARP_){
if(cljs.core.truth_(p1__29879_SHARP_.call(null,topic))){
return p1__29879_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29879_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17914__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29882 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29882 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta29883){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta29883 = meta29883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29882.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29882.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29882.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t29882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29882.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29882.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29884){
var self__ = this;
var _29884__$1 = this;
return self__.meta29883;
});})(mults,ensure_mult))
;

cljs.core.async.t29882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29884,meta29883__$1){
var self__ = this;
var _29884__$1 = this;
return (new cljs.core.async.t29882(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta29883__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29882.cljs$lang$type = true;

cljs.core.async.t29882.cljs$lang$ctorStr = "cljs.core.async/t29882";

cljs.core.async.t29882.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t29882");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29882 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29882(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta29883){
return (new cljs.core.async.t29882(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta29883));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29882(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21855__auto___30005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30005,mults,ensure_mult,p){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30005,mults,ensure_mult,p){
return (function (state_29956){
var state_val_29957 = (state_29956[(1)]);
if((state_val_29957 === (7))){
var inst_29952 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29958_30006 = state_29956__$1;
(statearr_29958_30006[(2)] = inst_29952);

(statearr_29958_30006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (20))){
var state_29956__$1 = state_29956;
var statearr_29959_30007 = state_29956__$1;
(statearr_29959_30007[(2)] = null);

(statearr_29959_30007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (1))){
var state_29956__$1 = state_29956;
var statearr_29960_30008 = state_29956__$1;
(statearr_29960_30008[(2)] = null);

(statearr_29960_30008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (24))){
var inst_29935 = (state_29956[(7)]);
var inst_29944 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29935);
var state_29956__$1 = state_29956;
var statearr_29961_30009 = state_29956__$1;
(statearr_29961_30009[(2)] = inst_29944);

(statearr_29961_30009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (4))){
var inst_29887 = (state_29956[(8)]);
var inst_29887__$1 = (state_29956[(2)]);
var inst_29888 = (inst_29887__$1 == null);
var state_29956__$1 = (function (){var statearr_29962 = state_29956;
(statearr_29962[(8)] = inst_29887__$1);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29888)){
var statearr_29963_30010 = state_29956__$1;
(statearr_29963_30010[(1)] = (5));

} else {
var statearr_29964_30011 = state_29956__$1;
(statearr_29964_30011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (15))){
var inst_29929 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29965_30012 = state_29956__$1;
(statearr_29965_30012[(2)] = inst_29929);

(statearr_29965_30012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (21))){
var inst_29949 = (state_29956[(2)]);
var state_29956__$1 = (function (){var statearr_29966 = state_29956;
(statearr_29966[(9)] = inst_29949);

return statearr_29966;
})();
var statearr_29967_30013 = state_29956__$1;
(statearr_29967_30013[(2)] = null);

(statearr_29967_30013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (13))){
var inst_29911 = (state_29956[(10)]);
var inst_29913 = cljs.core.chunked_seq_QMARK_.call(null,inst_29911);
var state_29956__$1 = state_29956;
if(inst_29913){
var statearr_29968_30014 = state_29956__$1;
(statearr_29968_30014[(1)] = (16));

} else {
var statearr_29969_30015 = state_29956__$1;
(statearr_29969_30015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (22))){
var inst_29941 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
if(cljs.core.truth_(inst_29941)){
var statearr_29970_30016 = state_29956__$1;
(statearr_29970_30016[(1)] = (23));

} else {
var statearr_29971_30017 = state_29956__$1;
(statearr_29971_30017[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (6))){
var inst_29887 = (state_29956[(8)]);
var inst_29935 = (state_29956[(7)]);
var inst_29937 = (state_29956[(11)]);
var inst_29935__$1 = topic_fn.call(null,inst_29887);
var inst_29936 = cljs.core.deref.call(null,mults);
var inst_29937__$1 = cljs.core.get.call(null,inst_29936,inst_29935__$1);
var state_29956__$1 = (function (){var statearr_29972 = state_29956;
(statearr_29972[(7)] = inst_29935__$1);

(statearr_29972[(11)] = inst_29937__$1);

return statearr_29972;
})();
if(cljs.core.truth_(inst_29937__$1)){
var statearr_29973_30018 = state_29956__$1;
(statearr_29973_30018[(1)] = (19));

} else {
var statearr_29974_30019 = state_29956__$1;
(statearr_29974_30019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (25))){
var inst_29946 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29975_30020 = state_29956__$1;
(statearr_29975_30020[(2)] = inst_29946);

(statearr_29975_30020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (17))){
var inst_29911 = (state_29956[(10)]);
var inst_29920 = cljs.core.first.call(null,inst_29911);
var inst_29921 = cljs.core.async.muxch_STAR_.call(null,inst_29920);
var inst_29922 = cljs.core.async.close_BANG_.call(null,inst_29921);
var inst_29923 = cljs.core.next.call(null,inst_29911);
var inst_29897 = inst_29923;
var inst_29898 = null;
var inst_29899 = (0);
var inst_29900 = (0);
var state_29956__$1 = (function (){var statearr_29976 = state_29956;
(statearr_29976[(12)] = inst_29922);

(statearr_29976[(13)] = inst_29900);

(statearr_29976[(14)] = inst_29897);

(statearr_29976[(15)] = inst_29899);

(statearr_29976[(16)] = inst_29898);

return statearr_29976;
})();
var statearr_29977_30021 = state_29956__$1;
(statearr_29977_30021[(2)] = null);

(statearr_29977_30021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (3))){
var inst_29954 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29956__$1,inst_29954);
} else {
if((state_val_29957 === (12))){
var inst_29931 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29978_30022 = state_29956__$1;
(statearr_29978_30022[(2)] = inst_29931);

(statearr_29978_30022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (2))){
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29956__$1,(4),ch);
} else {
if((state_val_29957 === (23))){
var state_29956__$1 = state_29956;
var statearr_29979_30023 = state_29956__$1;
(statearr_29979_30023[(2)] = null);

(statearr_29979_30023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (19))){
var inst_29887 = (state_29956[(8)]);
var inst_29937 = (state_29956[(11)]);
var inst_29939 = cljs.core.async.muxch_STAR_.call(null,inst_29937);
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29956__$1,(22),inst_29939,inst_29887);
} else {
if((state_val_29957 === (11))){
var inst_29897 = (state_29956[(14)]);
var inst_29911 = (state_29956[(10)]);
var inst_29911__$1 = cljs.core.seq.call(null,inst_29897);
var state_29956__$1 = (function (){var statearr_29980 = state_29956;
(statearr_29980[(10)] = inst_29911__$1);

return statearr_29980;
})();
if(inst_29911__$1){
var statearr_29981_30024 = state_29956__$1;
(statearr_29981_30024[(1)] = (13));

} else {
var statearr_29982_30025 = state_29956__$1;
(statearr_29982_30025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (9))){
var inst_29933 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29983_30026 = state_29956__$1;
(statearr_29983_30026[(2)] = inst_29933);

(statearr_29983_30026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (5))){
var inst_29894 = cljs.core.deref.call(null,mults);
var inst_29895 = cljs.core.vals.call(null,inst_29894);
var inst_29896 = cljs.core.seq.call(null,inst_29895);
var inst_29897 = inst_29896;
var inst_29898 = null;
var inst_29899 = (0);
var inst_29900 = (0);
var state_29956__$1 = (function (){var statearr_29984 = state_29956;
(statearr_29984[(13)] = inst_29900);

(statearr_29984[(14)] = inst_29897);

(statearr_29984[(15)] = inst_29899);

(statearr_29984[(16)] = inst_29898);

return statearr_29984;
})();
var statearr_29985_30027 = state_29956__$1;
(statearr_29985_30027[(2)] = null);

(statearr_29985_30027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (14))){
var state_29956__$1 = state_29956;
var statearr_29989_30028 = state_29956__$1;
(statearr_29989_30028[(2)] = null);

(statearr_29989_30028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (16))){
var inst_29911 = (state_29956[(10)]);
var inst_29915 = cljs.core.chunk_first.call(null,inst_29911);
var inst_29916 = cljs.core.chunk_rest.call(null,inst_29911);
var inst_29917 = cljs.core.count.call(null,inst_29915);
var inst_29897 = inst_29916;
var inst_29898 = inst_29915;
var inst_29899 = inst_29917;
var inst_29900 = (0);
var state_29956__$1 = (function (){var statearr_29990 = state_29956;
(statearr_29990[(13)] = inst_29900);

(statearr_29990[(14)] = inst_29897);

(statearr_29990[(15)] = inst_29899);

(statearr_29990[(16)] = inst_29898);

return statearr_29990;
})();
var statearr_29991_30029 = state_29956__$1;
(statearr_29991_30029[(2)] = null);

(statearr_29991_30029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (10))){
var inst_29900 = (state_29956[(13)]);
var inst_29897 = (state_29956[(14)]);
var inst_29899 = (state_29956[(15)]);
var inst_29898 = (state_29956[(16)]);
var inst_29905 = cljs.core._nth.call(null,inst_29898,inst_29900);
var inst_29906 = cljs.core.async.muxch_STAR_.call(null,inst_29905);
var inst_29907 = cljs.core.async.close_BANG_.call(null,inst_29906);
var inst_29908 = (inst_29900 + (1));
var tmp29986 = inst_29897;
var tmp29987 = inst_29899;
var tmp29988 = inst_29898;
var inst_29897__$1 = tmp29986;
var inst_29898__$1 = tmp29988;
var inst_29899__$1 = tmp29987;
var inst_29900__$1 = inst_29908;
var state_29956__$1 = (function (){var statearr_29992 = state_29956;
(statearr_29992[(13)] = inst_29900__$1);

(statearr_29992[(14)] = inst_29897__$1);

(statearr_29992[(15)] = inst_29899__$1);

(statearr_29992[(17)] = inst_29907);

(statearr_29992[(16)] = inst_29898__$1);

return statearr_29992;
})();
var statearr_29993_30030 = state_29956__$1;
(statearr_29993_30030[(2)] = null);

(statearr_29993_30030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (18))){
var inst_29926 = (state_29956[(2)]);
var state_29956__$1 = state_29956;
var statearr_29994_30031 = state_29956__$1;
(statearr_29994_30031[(2)] = inst_29926);

(statearr_29994_30031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29957 === (8))){
var inst_29900 = (state_29956[(13)]);
var inst_29899 = (state_29956[(15)]);
var inst_29902 = (inst_29900 < inst_29899);
var inst_29903 = inst_29902;
var state_29956__$1 = state_29956;
if(cljs.core.truth_(inst_29903)){
var statearr_29995_30032 = state_29956__$1;
(statearr_29995_30032[(1)] = (10));

} else {
var statearr_29996_30033 = state_29956__$1;
(statearr_29996_30033[(1)] = (11));

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
});})(c__21855__auto___30005,mults,ensure_mult,p))
;
return ((function (switch__21793__auto__,c__21855__auto___30005,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30000[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30000[(1)] = (1));

return statearr_30000;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_29956){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_29956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30001){if((e30001 instanceof Object)){
var ex__21797__auto__ = e30001;
var statearr_30002_30034 = state_29956;
(statearr_30002_30034[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_29956;
state_29956 = G__30035;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_29956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_29956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30005,mults,ensure_mult,p))
})();
var state__21857__auto__ = (function (){var statearr_30003 = f__21856__auto__.call(null);
(statearr_30003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30005);

return statearr_30003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30005,mults,ensure_mult,p))
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
var G__30037 = arguments.length;
switch (G__30037) {
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
var G__30040 = arguments.length;
switch (G__30040) {
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
var G__30043 = arguments.length;
switch (G__30043) {
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
var c__21855__auto___30113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30082){
var state_val_30083 = (state_30082[(1)]);
if((state_val_30083 === (7))){
var state_30082__$1 = state_30082;
var statearr_30084_30114 = state_30082__$1;
(statearr_30084_30114[(2)] = null);

(statearr_30084_30114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (1))){
var state_30082__$1 = state_30082;
var statearr_30085_30115 = state_30082__$1;
(statearr_30085_30115[(2)] = null);

(statearr_30085_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (4))){
var inst_30046 = (state_30082[(7)]);
var inst_30048 = (inst_30046 < cnt);
var state_30082__$1 = state_30082;
if(cljs.core.truth_(inst_30048)){
var statearr_30086_30116 = state_30082__$1;
(statearr_30086_30116[(1)] = (6));

} else {
var statearr_30087_30117 = state_30082__$1;
(statearr_30087_30117[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (15))){
var inst_30078 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30088_30118 = state_30082__$1;
(statearr_30088_30118[(2)] = inst_30078);

(statearr_30088_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (13))){
var inst_30071 = cljs.core.async.close_BANG_.call(null,out);
var state_30082__$1 = state_30082;
var statearr_30089_30119 = state_30082__$1;
(statearr_30089_30119[(2)] = inst_30071);

(statearr_30089_30119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (6))){
var state_30082__$1 = state_30082;
var statearr_30090_30120 = state_30082__$1;
(statearr_30090_30120[(2)] = null);

(statearr_30090_30120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (3))){
var inst_30080 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30082__$1,inst_30080);
} else {
if((state_val_30083 === (12))){
var inst_30068 = (state_30082[(8)]);
var inst_30068__$1 = (state_30082[(2)]);
var inst_30069 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30068__$1);
var state_30082__$1 = (function (){var statearr_30091 = state_30082;
(statearr_30091[(8)] = inst_30068__$1);

return statearr_30091;
})();
if(cljs.core.truth_(inst_30069)){
var statearr_30092_30121 = state_30082__$1;
(statearr_30092_30121[(1)] = (13));

} else {
var statearr_30093_30122 = state_30082__$1;
(statearr_30093_30122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (2))){
var inst_30045 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30046 = (0);
var state_30082__$1 = (function (){var statearr_30094 = state_30082;
(statearr_30094[(9)] = inst_30045);

(statearr_30094[(7)] = inst_30046);

return statearr_30094;
})();
var statearr_30095_30123 = state_30082__$1;
(statearr_30095_30123[(2)] = null);

(statearr_30095_30123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (11))){
var inst_30046 = (state_30082[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30082,(10),Object,null,(9));
var inst_30055 = chs__$1.call(null,inst_30046);
var inst_30056 = done.call(null,inst_30046);
var inst_30057 = cljs.core.async.take_BANG_.call(null,inst_30055,inst_30056);
var state_30082__$1 = state_30082;
var statearr_30096_30124 = state_30082__$1;
(statearr_30096_30124[(2)] = inst_30057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (9))){
var inst_30046 = (state_30082[(7)]);
var inst_30059 = (state_30082[(2)]);
var inst_30060 = (inst_30046 + (1));
var inst_30046__$1 = inst_30060;
var state_30082__$1 = (function (){var statearr_30097 = state_30082;
(statearr_30097[(7)] = inst_30046__$1);

(statearr_30097[(10)] = inst_30059);

return statearr_30097;
})();
var statearr_30098_30125 = state_30082__$1;
(statearr_30098_30125[(2)] = null);

(statearr_30098_30125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (5))){
var inst_30066 = (state_30082[(2)]);
var state_30082__$1 = (function (){var statearr_30099 = state_30082;
(statearr_30099[(11)] = inst_30066);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30082__$1,(12),dchan);
} else {
if((state_val_30083 === (14))){
var inst_30068 = (state_30082[(8)]);
var inst_30073 = cljs.core.apply.call(null,f,inst_30068);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30082__$1,(16),out,inst_30073);
} else {
if((state_val_30083 === (16))){
var inst_30075 = (state_30082[(2)]);
var state_30082__$1 = (function (){var statearr_30100 = state_30082;
(statearr_30100[(12)] = inst_30075);

return statearr_30100;
})();
var statearr_30101_30126 = state_30082__$1;
(statearr_30101_30126[(2)] = null);

(statearr_30101_30126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (10))){
var inst_30050 = (state_30082[(2)]);
var inst_30051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30082__$1 = (function (){var statearr_30102 = state_30082;
(statearr_30102[(13)] = inst_30050);

return statearr_30102;
})();
var statearr_30103_30127 = state_30082__$1;
(statearr_30103_30127[(2)] = inst_30051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (8))){
var inst_30064 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30104_30128 = state_30082__$1;
(statearr_30104_30128[(2)] = inst_30064);

(statearr_30104_30128[(1)] = (5));


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
});})(c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21793__auto__,c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30082){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__21797__auto__ = e30109;
var statearr_30110_30129 = state_30082;
(statearr_30110_30129[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30082;
state_30082 = G__30130;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21857__auto__ = (function (){var statearr_30111 = f__21856__auto__.call(null);
(statearr_30111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30113);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30113,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30133 = arguments.length;
switch (G__30133) {
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
var c__21855__auto___30188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30188,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30188,out){
return (function (state_30163){
var state_val_30164 = (state_30163[(1)]);
if((state_val_30164 === (7))){
var inst_30142 = (state_30163[(7)]);
var inst_30143 = (state_30163[(8)]);
var inst_30142__$1 = (state_30163[(2)]);
var inst_30143__$1 = cljs.core.nth.call(null,inst_30142__$1,(0),null);
var inst_30144 = cljs.core.nth.call(null,inst_30142__$1,(1),null);
var inst_30145 = (inst_30143__$1 == null);
var state_30163__$1 = (function (){var statearr_30165 = state_30163;
(statearr_30165[(7)] = inst_30142__$1);

(statearr_30165[(9)] = inst_30144);

(statearr_30165[(8)] = inst_30143__$1);

return statearr_30165;
})();
if(cljs.core.truth_(inst_30145)){
var statearr_30166_30189 = state_30163__$1;
(statearr_30166_30189[(1)] = (8));

} else {
var statearr_30167_30190 = state_30163__$1;
(statearr_30167_30190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (1))){
var inst_30134 = cljs.core.vec.call(null,chs);
var inst_30135 = inst_30134;
var state_30163__$1 = (function (){var statearr_30168 = state_30163;
(statearr_30168[(10)] = inst_30135);

return statearr_30168;
})();
var statearr_30169_30191 = state_30163__$1;
(statearr_30169_30191[(2)] = null);

(statearr_30169_30191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (4))){
var inst_30135 = (state_30163[(10)]);
var state_30163__$1 = state_30163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30163__$1,(7),inst_30135);
} else {
if((state_val_30164 === (6))){
var inst_30159 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
var statearr_30170_30192 = state_30163__$1;
(statearr_30170_30192[(2)] = inst_30159);

(statearr_30170_30192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (3))){
var inst_30161 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30163__$1,inst_30161);
} else {
if((state_val_30164 === (2))){
var inst_30135 = (state_30163[(10)]);
var inst_30137 = cljs.core.count.call(null,inst_30135);
var inst_30138 = (inst_30137 > (0));
var state_30163__$1 = state_30163;
if(cljs.core.truth_(inst_30138)){
var statearr_30172_30193 = state_30163__$1;
(statearr_30172_30193[(1)] = (4));

} else {
var statearr_30173_30194 = state_30163__$1;
(statearr_30173_30194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (11))){
var inst_30135 = (state_30163[(10)]);
var inst_30152 = (state_30163[(2)]);
var tmp30171 = inst_30135;
var inst_30135__$1 = tmp30171;
var state_30163__$1 = (function (){var statearr_30174 = state_30163;
(statearr_30174[(11)] = inst_30152);

(statearr_30174[(10)] = inst_30135__$1);

return statearr_30174;
})();
var statearr_30175_30195 = state_30163__$1;
(statearr_30175_30195[(2)] = null);

(statearr_30175_30195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (9))){
var inst_30143 = (state_30163[(8)]);
var state_30163__$1 = state_30163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30163__$1,(11),out,inst_30143);
} else {
if((state_val_30164 === (5))){
var inst_30157 = cljs.core.async.close_BANG_.call(null,out);
var state_30163__$1 = state_30163;
var statearr_30176_30196 = state_30163__$1;
(statearr_30176_30196[(2)] = inst_30157);

(statearr_30176_30196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (10))){
var inst_30155 = (state_30163[(2)]);
var state_30163__$1 = state_30163;
var statearr_30177_30197 = state_30163__$1;
(statearr_30177_30197[(2)] = inst_30155);

(statearr_30177_30197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30164 === (8))){
var inst_30142 = (state_30163[(7)]);
var inst_30144 = (state_30163[(9)]);
var inst_30143 = (state_30163[(8)]);
var inst_30135 = (state_30163[(10)]);
var inst_30147 = (function (){var c = inst_30144;
var v = inst_30143;
var vec__30140 = inst_30142;
var cs = inst_30135;
return ((function (c,v,vec__30140,cs,inst_30142,inst_30144,inst_30143,inst_30135,state_val_30164,c__21855__auto___30188,out){
return (function (p1__30131_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30131_SHARP_);
});
;})(c,v,vec__30140,cs,inst_30142,inst_30144,inst_30143,inst_30135,state_val_30164,c__21855__auto___30188,out))
})();
var inst_30148 = cljs.core.filterv.call(null,inst_30147,inst_30135);
var inst_30135__$1 = inst_30148;
var state_30163__$1 = (function (){var statearr_30178 = state_30163;
(statearr_30178[(10)] = inst_30135__$1);

return statearr_30178;
})();
var statearr_30179_30198 = state_30163__$1;
(statearr_30179_30198[(2)] = null);

(statearr_30179_30198[(1)] = (2));


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
});})(c__21855__auto___30188,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30188,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30163){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30184){if((e30184 instanceof Object)){
var ex__21797__auto__ = e30184;
var statearr_30185_30199 = state_30163;
(statearr_30185_30199[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30200 = state_30163;
state_30163 = G__30200;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30188,out))
})();
var state__21857__auto__ = (function (){var statearr_30186 = f__21856__auto__.call(null);
(statearr_30186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30188);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30188,out))
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
var G__30202 = arguments.length;
switch (G__30202) {
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
var c__21855__auto___30250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30250,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30250,out){
return (function (state_30226){
var state_val_30227 = (state_30226[(1)]);
if((state_val_30227 === (7))){
var inst_30208 = (state_30226[(7)]);
var inst_30208__$1 = (state_30226[(2)]);
var inst_30209 = (inst_30208__$1 == null);
var inst_30210 = cljs.core.not.call(null,inst_30209);
var state_30226__$1 = (function (){var statearr_30228 = state_30226;
(statearr_30228[(7)] = inst_30208__$1);

return statearr_30228;
})();
if(inst_30210){
var statearr_30229_30251 = state_30226__$1;
(statearr_30229_30251[(1)] = (8));

} else {
var statearr_30230_30252 = state_30226__$1;
(statearr_30230_30252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (1))){
var inst_30203 = (0);
var state_30226__$1 = (function (){var statearr_30231 = state_30226;
(statearr_30231[(8)] = inst_30203);

return statearr_30231;
})();
var statearr_30232_30253 = state_30226__$1;
(statearr_30232_30253[(2)] = null);

(statearr_30232_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (4))){
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30226__$1,(7),ch);
} else {
if((state_val_30227 === (6))){
var inst_30221 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30233_30254 = state_30226__$1;
(statearr_30233_30254[(2)] = inst_30221);

(statearr_30233_30254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (3))){
var inst_30223 = (state_30226[(2)]);
var inst_30224 = cljs.core.async.close_BANG_.call(null,out);
var state_30226__$1 = (function (){var statearr_30234 = state_30226;
(statearr_30234[(9)] = inst_30223);

return statearr_30234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30226__$1,inst_30224);
} else {
if((state_val_30227 === (2))){
var inst_30203 = (state_30226[(8)]);
var inst_30205 = (inst_30203 < n);
var state_30226__$1 = state_30226;
if(cljs.core.truth_(inst_30205)){
var statearr_30235_30255 = state_30226__$1;
(statearr_30235_30255[(1)] = (4));

} else {
var statearr_30236_30256 = state_30226__$1;
(statearr_30236_30256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (11))){
var inst_30203 = (state_30226[(8)]);
var inst_30213 = (state_30226[(2)]);
var inst_30214 = (inst_30203 + (1));
var inst_30203__$1 = inst_30214;
var state_30226__$1 = (function (){var statearr_30237 = state_30226;
(statearr_30237[(8)] = inst_30203__$1);

(statearr_30237[(10)] = inst_30213);

return statearr_30237;
})();
var statearr_30238_30257 = state_30226__$1;
(statearr_30238_30257[(2)] = null);

(statearr_30238_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (9))){
var state_30226__$1 = state_30226;
var statearr_30239_30258 = state_30226__$1;
(statearr_30239_30258[(2)] = null);

(statearr_30239_30258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (5))){
var state_30226__$1 = state_30226;
var statearr_30240_30259 = state_30226__$1;
(statearr_30240_30259[(2)] = null);

(statearr_30240_30259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (10))){
var inst_30218 = (state_30226[(2)]);
var state_30226__$1 = state_30226;
var statearr_30241_30260 = state_30226__$1;
(statearr_30241_30260[(2)] = inst_30218);

(statearr_30241_30260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30227 === (8))){
var inst_30208 = (state_30226[(7)]);
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30226__$1,(11),out,inst_30208);
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
});})(c__21855__auto___30250,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30250,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30245[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30245[(1)] = (1));

return statearr_30245;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30226){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30246){if((e30246 instanceof Object)){
var ex__21797__auto__ = e30246;
var statearr_30247_30261 = state_30226;
(statearr_30247_30261[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30262 = state_30226;
state_30226 = G__30262;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30250,out))
})();
var state__21857__auto__ = (function (){var statearr_30248 = f__21856__auto__.call(null);
(statearr_30248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30250);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30250,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30270 = (function (ch,f,map_LT_,meta30271){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30271 = meta30271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30273 = (function (fn1,_,meta30271,map_LT_,f,ch,meta30274){
this.fn1 = fn1;
this._ = _;
this.meta30271 = meta30271;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30274 = meta30274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30263_SHARP_){
return f1.call(null,(((p1__30263_SHARP_ == null))?null:self__.f.call(null,p1__30263_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30275){
var self__ = this;
var _30275__$1 = this;
return self__.meta30274;
});})(___$1))
;

cljs.core.async.t30273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30275,meta30274__$1){
var self__ = this;
var _30275__$1 = this;
return (new cljs.core.async.t30273(self__.fn1,self__._,self__.meta30271,self__.map_LT_,self__.f,self__.ch,meta30274__$1));
});})(___$1))
;

cljs.core.async.t30273.cljs$lang$type = true;

cljs.core.async.t30273.cljs$lang$ctorStr = "cljs.core.async/t30273";

cljs.core.async.t30273.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t30273");
});})(___$1))
;

cljs.core.async.__GT_t30273 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30273(fn1__$1,___$2,meta30271__$1,map_LT___$1,f__$1,ch__$1,meta30274){
return (new cljs.core.async.t30273(fn1__$1,___$2,meta30271__$1,map_LT___$1,f__$1,ch__$1,meta30274));
});})(___$1))
;

}

return (new cljs.core.async.t30273(fn1,___$1,self__.meta30271,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17902__auto__ = ret;
if(cljs.core.truth_(and__17902__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17902__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30272){
var self__ = this;
var _30272__$1 = this;
return self__.meta30271;
});

cljs.core.async.t30270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30272,meta30271__$1){
var self__ = this;
var _30272__$1 = this;
return (new cljs.core.async.t30270(self__.ch,self__.f,self__.map_LT_,meta30271__$1));
});

cljs.core.async.t30270.cljs$lang$type = true;

cljs.core.async.t30270.cljs$lang$ctorStr = "cljs.core.async/t30270";

cljs.core.async.t30270.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t30270");
});

cljs.core.async.__GT_t30270 = (function cljs$core$async$map_LT__$___GT_t30270(ch__$1,f__$1,map_LT___$1,meta30271){
return (new cljs.core.async.t30270(ch__$1,f__$1,map_LT___$1,meta30271));
});

}

return (new cljs.core.async.t30270(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30279 = (function (ch,f,map_GT_,meta30280){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30280 = meta30280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30281){
var self__ = this;
var _30281__$1 = this;
return self__.meta30280;
});

cljs.core.async.t30279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30281,meta30280__$1){
var self__ = this;
var _30281__$1 = this;
return (new cljs.core.async.t30279(self__.ch,self__.f,self__.map_GT_,meta30280__$1));
});

cljs.core.async.t30279.cljs$lang$type = true;

cljs.core.async.t30279.cljs$lang$ctorStr = "cljs.core.async/t30279";

cljs.core.async.t30279.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t30279");
});

cljs.core.async.__GT_t30279 = (function cljs$core$async$map_GT__$___GT_t30279(ch__$1,f__$1,map_GT___$1,meta30280){
return (new cljs.core.async.t30279(ch__$1,f__$1,map_GT___$1,meta30280));
});

}

return (new cljs.core.async.t30279(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30285 = (function (ch,p,filter_GT_,meta30286){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30286 = meta30286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30285.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30287){
var self__ = this;
var _30287__$1 = this;
return self__.meta30286;
});

cljs.core.async.t30285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30287,meta30286__$1){
var self__ = this;
var _30287__$1 = this;
return (new cljs.core.async.t30285(self__.ch,self__.p,self__.filter_GT_,meta30286__$1));
});

cljs.core.async.t30285.cljs$lang$type = true;

cljs.core.async.t30285.cljs$lang$ctorStr = "cljs.core.async/t30285";

cljs.core.async.t30285.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t30285");
});

cljs.core.async.__GT_t30285 = (function cljs$core$async$filter_GT__$___GT_t30285(ch__$1,p__$1,filter_GT___$1,meta30286){
return (new cljs.core.async.t30285(ch__$1,p__$1,filter_GT___$1,meta30286));
});

}

return (new cljs.core.async.t30285(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30289 = arguments.length;
switch (G__30289) {
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
var c__21855__auto___30332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30332,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30332,out){
return (function (state_30310){
var state_val_30311 = (state_30310[(1)]);
if((state_val_30311 === (7))){
var inst_30306 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30312_30333 = state_30310__$1;
(statearr_30312_30333[(2)] = inst_30306);

(statearr_30312_30333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (1))){
var state_30310__$1 = state_30310;
var statearr_30313_30334 = state_30310__$1;
(statearr_30313_30334[(2)] = null);

(statearr_30313_30334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (4))){
var inst_30292 = (state_30310[(7)]);
var inst_30292__$1 = (state_30310[(2)]);
var inst_30293 = (inst_30292__$1 == null);
var state_30310__$1 = (function (){var statearr_30314 = state_30310;
(statearr_30314[(7)] = inst_30292__$1);

return statearr_30314;
})();
if(cljs.core.truth_(inst_30293)){
var statearr_30315_30335 = state_30310__$1;
(statearr_30315_30335[(1)] = (5));

} else {
var statearr_30316_30336 = state_30310__$1;
(statearr_30316_30336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (6))){
var inst_30292 = (state_30310[(7)]);
var inst_30297 = p.call(null,inst_30292);
var state_30310__$1 = state_30310;
if(cljs.core.truth_(inst_30297)){
var statearr_30317_30337 = state_30310__$1;
(statearr_30317_30337[(1)] = (8));

} else {
var statearr_30318_30338 = state_30310__$1;
(statearr_30318_30338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (3))){
var inst_30308 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30310__$1,inst_30308);
} else {
if((state_val_30311 === (2))){
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30310__$1,(4),ch);
} else {
if((state_val_30311 === (11))){
var inst_30300 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30319_30339 = state_30310__$1;
(statearr_30319_30339[(2)] = inst_30300);

(statearr_30319_30339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (9))){
var state_30310__$1 = state_30310;
var statearr_30320_30340 = state_30310__$1;
(statearr_30320_30340[(2)] = null);

(statearr_30320_30340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (5))){
var inst_30295 = cljs.core.async.close_BANG_.call(null,out);
var state_30310__$1 = state_30310;
var statearr_30321_30341 = state_30310__$1;
(statearr_30321_30341[(2)] = inst_30295);

(statearr_30321_30341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (10))){
var inst_30303 = (state_30310[(2)]);
var state_30310__$1 = (function (){var statearr_30322 = state_30310;
(statearr_30322[(8)] = inst_30303);

return statearr_30322;
})();
var statearr_30323_30342 = state_30310__$1;
(statearr_30323_30342[(2)] = null);

(statearr_30323_30342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (8))){
var inst_30292 = (state_30310[(7)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30310__$1,(11),out,inst_30292);
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
});})(c__21855__auto___30332,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30332,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30310){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30328){if((e30328 instanceof Object)){
var ex__21797__auto__ = e30328;
var statearr_30329_30343 = state_30310;
(statearr_30329_30343[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30344 = state_30310;
state_30310 = G__30344;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30332,out))
})();
var state__21857__auto__ = (function (){var statearr_30330 = f__21856__auto__.call(null);
(statearr_30330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30332);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30332,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30346 = arguments.length;
switch (G__30346) {
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
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_30513){
var state_val_30514 = (state_30513[(1)]);
if((state_val_30514 === (7))){
var inst_30509 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30515_30556 = state_30513__$1;
(statearr_30515_30556[(2)] = inst_30509);

(statearr_30515_30556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (20))){
var inst_30479 = (state_30513[(7)]);
var inst_30490 = (state_30513[(2)]);
var inst_30491 = cljs.core.next.call(null,inst_30479);
var inst_30465 = inst_30491;
var inst_30466 = null;
var inst_30467 = (0);
var inst_30468 = (0);
var state_30513__$1 = (function (){var statearr_30516 = state_30513;
(statearr_30516[(8)] = inst_30467);

(statearr_30516[(9)] = inst_30490);

(statearr_30516[(10)] = inst_30465);

(statearr_30516[(11)] = inst_30466);

(statearr_30516[(12)] = inst_30468);

return statearr_30516;
})();
var statearr_30517_30557 = state_30513__$1;
(statearr_30517_30557[(2)] = null);

(statearr_30517_30557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (1))){
var state_30513__$1 = state_30513;
var statearr_30518_30558 = state_30513__$1;
(statearr_30518_30558[(2)] = null);

(statearr_30518_30558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (4))){
var inst_30454 = (state_30513[(13)]);
var inst_30454__$1 = (state_30513[(2)]);
var inst_30455 = (inst_30454__$1 == null);
var state_30513__$1 = (function (){var statearr_30519 = state_30513;
(statearr_30519[(13)] = inst_30454__$1);

return statearr_30519;
})();
if(cljs.core.truth_(inst_30455)){
var statearr_30520_30559 = state_30513__$1;
(statearr_30520_30559[(1)] = (5));

} else {
var statearr_30521_30560 = state_30513__$1;
(statearr_30521_30560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (15))){
var state_30513__$1 = state_30513;
var statearr_30525_30561 = state_30513__$1;
(statearr_30525_30561[(2)] = null);

(statearr_30525_30561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (21))){
var state_30513__$1 = state_30513;
var statearr_30526_30562 = state_30513__$1;
(statearr_30526_30562[(2)] = null);

(statearr_30526_30562[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (13))){
var inst_30467 = (state_30513[(8)]);
var inst_30465 = (state_30513[(10)]);
var inst_30466 = (state_30513[(11)]);
var inst_30468 = (state_30513[(12)]);
var inst_30475 = (state_30513[(2)]);
var inst_30476 = (inst_30468 + (1));
var tmp30522 = inst_30467;
var tmp30523 = inst_30465;
var tmp30524 = inst_30466;
var inst_30465__$1 = tmp30523;
var inst_30466__$1 = tmp30524;
var inst_30467__$1 = tmp30522;
var inst_30468__$1 = inst_30476;
var state_30513__$1 = (function (){var statearr_30527 = state_30513;
(statearr_30527[(8)] = inst_30467__$1);

(statearr_30527[(14)] = inst_30475);

(statearr_30527[(10)] = inst_30465__$1);

(statearr_30527[(11)] = inst_30466__$1);

(statearr_30527[(12)] = inst_30468__$1);

return statearr_30527;
})();
var statearr_30528_30563 = state_30513__$1;
(statearr_30528_30563[(2)] = null);

(statearr_30528_30563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (22))){
var state_30513__$1 = state_30513;
var statearr_30529_30564 = state_30513__$1;
(statearr_30529_30564[(2)] = null);

(statearr_30529_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (6))){
var inst_30454 = (state_30513[(13)]);
var inst_30463 = f.call(null,inst_30454);
var inst_30464 = cljs.core.seq.call(null,inst_30463);
var inst_30465 = inst_30464;
var inst_30466 = null;
var inst_30467 = (0);
var inst_30468 = (0);
var state_30513__$1 = (function (){var statearr_30530 = state_30513;
(statearr_30530[(8)] = inst_30467);

(statearr_30530[(10)] = inst_30465);

(statearr_30530[(11)] = inst_30466);

(statearr_30530[(12)] = inst_30468);

return statearr_30530;
})();
var statearr_30531_30565 = state_30513__$1;
(statearr_30531_30565[(2)] = null);

(statearr_30531_30565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (17))){
var inst_30479 = (state_30513[(7)]);
var inst_30483 = cljs.core.chunk_first.call(null,inst_30479);
var inst_30484 = cljs.core.chunk_rest.call(null,inst_30479);
var inst_30485 = cljs.core.count.call(null,inst_30483);
var inst_30465 = inst_30484;
var inst_30466 = inst_30483;
var inst_30467 = inst_30485;
var inst_30468 = (0);
var state_30513__$1 = (function (){var statearr_30532 = state_30513;
(statearr_30532[(8)] = inst_30467);

(statearr_30532[(10)] = inst_30465);

(statearr_30532[(11)] = inst_30466);

(statearr_30532[(12)] = inst_30468);

return statearr_30532;
})();
var statearr_30533_30566 = state_30513__$1;
(statearr_30533_30566[(2)] = null);

(statearr_30533_30566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (3))){
var inst_30511 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30513__$1,inst_30511);
} else {
if((state_val_30514 === (12))){
var inst_30499 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30534_30567 = state_30513__$1;
(statearr_30534_30567[(2)] = inst_30499);

(statearr_30534_30567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (2))){
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30513__$1,(4),in$);
} else {
if((state_val_30514 === (23))){
var inst_30507 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30535_30568 = state_30513__$1;
(statearr_30535_30568[(2)] = inst_30507);

(statearr_30535_30568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (19))){
var inst_30494 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30536_30569 = state_30513__$1;
(statearr_30536_30569[(2)] = inst_30494);

(statearr_30536_30569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (11))){
var inst_30479 = (state_30513[(7)]);
var inst_30465 = (state_30513[(10)]);
var inst_30479__$1 = cljs.core.seq.call(null,inst_30465);
var state_30513__$1 = (function (){var statearr_30537 = state_30513;
(statearr_30537[(7)] = inst_30479__$1);

return statearr_30537;
})();
if(inst_30479__$1){
var statearr_30538_30570 = state_30513__$1;
(statearr_30538_30570[(1)] = (14));

} else {
var statearr_30539_30571 = state_30513__$1;
(statearr_30539_30571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (9))){
var inst_30501 = (state_30513[(2)]);
var inst_30502 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30513__$1 = (function (){var statearr_30540 = state_30513;
(statearr_30540[(15)] = inst_30501);

return statearr_30540;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30541_30572 = state_30513__$1;
(statearr_30541_30572[(1)] = (21));

} else {
var statearr_30542_30573 = state_30513__$1;
(statearr_30542_30573[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (5))){
var inst_30457 = cljs.core.async.close_BANG_.call(null,out);
var state_30513__$1 = state_30513;
var statearr_30543_30574 = state_30513__$1;
(statearr_30543_30574[(2)] = inst_30457);

(statearr_30543_30574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (14))){
var inst_30479 = (state_30513[(7)]);
var inst_30481 = cljs.core.chunked_seq_QMARK_.call(null,inst_30479);
var state_30513__$1 = state_30513;
if(inst_30481){
var statearr_30544_30575 = state_30513__$1;
(statearr_30544_30575[(1)] = (17));

} else {
var statearr_30545_30576 = state_30513__$1;
(statearr_30545_30576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (16))){
var inst_30497 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30546_30577 = state_30513__$1;
(statearr_30546_30577[(2)] = inst_30497);

(statearr_30546_30577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (10))){
var inst_30466 = (state_30513[(11)]);
var inst_30468 = (state_30513[(12)]);
var inst_30473 = cljs.core._nth.call(null,inst_30466,inst_30468);
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30513__$1,(13),out,inst_30473);
} else {
if((state_val_30514 === (18))){
var inst_30479 = (state_30513[(7)]);
var inst_30488 = cljs.core.first.call(null,inst_30479);
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30513__$1,(20),out,inst_30488);
} else {
if((state_val_30514 === (8))){
var inst_30467 = (state_30513[(8)]);
var inst_30468 = (state_30513[(12)]);
var inst_30470 = (inst_30468 < inst_30467);
var inst_30471 = inst_30470;
var state_30513__$1 = state_30513;
if(cljs.core.truth_(inst_30471)){
var statearr_30547_30578 = state_30513__$1;
(statearr_30547_30578[(1)] = (10));

} else {
var statearr_30548_30579 = state_30513__$1;
(statearr_30548_30579[(1)] = (11));

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
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____0 = (function (){
var statearr_30552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__);

(statearr_30552[(1)] = (1));

return statearr_30552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____1 = (function (state_30513){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30553){if((e30553 instanceof Object)){
var ex__21797__auto__ = e30553;
var statearr_30554_30580 = state_30513;
(statearr_30554_30580[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30581 = state_30513;
state_30513 = G__30581;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__ = function(state_30513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____1.call(this,state_30513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21794__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_30555 = f__21856__auto__.call(null);
(statearr_30555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30583 = arguments.length;
switch (G__30583) {
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
var G__30586 = arguments.length;
switch (G__30586) {
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
var G__30589 = arguments.length;
switch (G__30589) {
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
var c__21855__auto___30639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30639,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30639,out){
return (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (7))){
var inst_30608 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30615_30640 = state_30613__$1;
(statearr_30615_30640[(2)] = inst_30608);

(statearr_30615_30640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (1))){
var inst_30590 = null;
var state_30613__$1 = (function (){var statearr_30616 = state_30613;
(statearr_30616[(7)] = inst_30590);

return statearr_30616;
})();
var statearr_30617_30641 = state_30613__$1;
(statearr_30617_30641[(2)] = null);

(statearr_30617_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (4))){
var inst_30593 = (state_30613[(8)]);
var inst_30593__$1 = (state_30613[(2)]);
var inst_30594 = (inst_30593__$1 == null);
var inst_30595 = cljs.core.not.call(null,inst_30594);
var state_30613__$1 = (function (){var statearr_30618 = state_30613;
(statearr_30618[(8)] = inst_30593__$1);

return statearr_30618;
})();
if(inst_30595){
var statearr_30619_30642 = state_30613__$1;
(statearr_30619_30642[(1)] = (5));

} else {
var statearr_30620_30643 = state_30613__$1;
(statearr_30620_30643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (6))){
var state_30613__$1 = state_30613;
var statearr_30621_30644 = state_30613__$1;
(statearr_30621_30644[(2)] = null);

(statearr_30621_30644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (3))){
var inst_30610 = (state_30613[(2)]);
var inst_30611 = cljs.core.async.close_BANG_.call(null,out);
var state_30613__$1 = (function (){var statearr_30622 = state_30613;
(statearr_30622[(9)] = inst_30610);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (2))){
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(4),ch);
} else {
if((state_val_30614 === (11))){
var inst_30593 = (state_30613[(8)]);
var inst_30602 = (state_30613[(2)]);
var inst_30590 = inst_30593;
var state_30613__$1 = (function (){var statearr_30623 = state_30613;
(statearr_30623[(10)] = inst_30602);

(statearr_30623[(7)] = inst_30590);

return statearr_30623;
})();
var statearr_30624_30645 = state_30613__$1;
(statearr_30624_30645[(2)] = null);

(statearr_30624_30645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (9))){
var inst_30593 = (state_30613[(8)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30613__$1,(11),out,inst_30593);
} else {
if((state_val_30614 === (5))){
var inst_30590 = (state_30613[(7)]);
var inst_30593 = (state_30613[(8)]);
var inst_30597 = cljs.core._EQ_.call(null,inst_30593,inst_30590);
var state_30613__$1 = state_30613;
if(inst_30597){
var statearr_30626_30646 = state_30613__$1;
(statearr_30626_30646[(1)] = (8));

} else {
var statearr_30627_30647 = state_30613__$1;
(statearr_30627_30647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (10))){
var inst_30605 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30628_30648 = state_30613__$1;
(statearr_30628_30648[(2)] = inst_30605);

(statearr_30628_30648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (8))){
var inst_30590 = (state_30613[(7)]);
var tmp30625 = inst_30590;
var inst_30590__$1 = tmp30625;
var state_30613__$1 = (function (){var statearr_30629 = state_30613;
(statearr_30629[(7)] = inst_30590__$1);

return statearr_30629;
})();
var statearr_30630_30649 = state_30613__$1;
(statearr_30630_30649[(2)] = null);

(statearr_30630_30649[(1)] = (2));


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
});})(c__21855__auto___30639,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30639,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30634[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30634[(1)] = (1));

return statearr_30634;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30613){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30635){if((e30635 instanceof Object)){
var ex__21797__auto__ = e30635;
var statearr_30636_30650 = state_30613;
(statearr_30636_30650[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_30613;
state_30613 = G__30651;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30639,out))
})();
var state__21857__auto__ = (function (){var statearr_30637 = f__21856__auto__.call(null);
(statearr_30637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30639);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30639,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30653 = arguments.length;
switch (G__30653) {
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
var c__21855__auto___30722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30722,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30722,out){
return (function (state_30691){
var state_val_30692 = (state_30691[(1)]);
if((state_val_30692 === (7))){
var inst_30687 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30693_30723 = state_30691__$1;
(statearr_30693_30723[(2)] = inst_30687);

(statearr_30693_30723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (1))){
var inst_30654 = (new Array(n));
var inst_30655 = inst_30654;
var inst_30656 = (0);
var state_30691__$1 = (function (){var statearr_30694 = state_30691;
(statearr_30694[(7)] = inst_30656);

(statearr_30694[(8)] = inst_30655);

return statearr_30694;
})();
var statearr_30695_30724 = state_30691__$1;
(statearr_30695_30724[(2)] = null);

(statearr_30695_30724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (4))){
var inst_30659 = (state_30691[(9)]);
var inst_30659__$1 = (state_30691[(2)]);
var inst_30660 = (inst_30659__$1 == null);
var inst_30661 = cljs.core.not.call(null,inst_30660);
var state_30691__$1 = (function (){var statearr_30696 = state_30691;
(statearr_30696[(9)] = inst_30659__$1);

return statearr_30696;
})();
if(inst_30661){
var statearr_30697_30725 = state_30691__$1;
(statearr_30697_30725[(1)] = (5));

} else {
var statearr_30698_30726 = state_30691__$1;
(statearr_30698_30726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (15))){
var inst_30681 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30699_30727 = state_30691__$1;
(statearr_30699_30727[(2)] = inst_30681);

(statearr_30699_30727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (13))){
var state_30691__$1 = state_30691;
var statearr_30700_30728 = state_30691__$1;
(statearr_30700_30728[(2)] = null);

(statearr_30700_30728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (6))){
var inst_30656 = (state_30691[(7)]);
var inst_30677 = (inst_30656 > (0));
var state_30691__$1 = state_30691;
if(cljs.core.truth_(inst_30677)){
var statearr_30701_30729 = state_30691__$1;
(statearr_30701_30729[(1)] = (12));

} else {
var statearr_30702_30730 = state_30691__$1;
(statearr_30702_30730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (3))){
var inst_30689 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30691__$1,inst_30689);
} else {
if((state_val_30692 === (12))){
var inst_30655 = (state_30691[(8)]);
var inst_30679 = cljs.core.vec.call(null,inst_30655);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30691__$1,(15),out,inst_30679);
} else {
if((state_val_30692 === (2))){
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30691__$1,(4),ch);
} else {
if((state_val_30692 === (11))){
var inst_30671 = (state_30691[(2)]);
var inst_30672 = (new Array(n));
var inst_30655 = inst_30672;
var inst_30656 = (0);
var state_30691__$1 = (function (){var statearr_30703 = state_30691;
(statearr_30703[(10)] = inst_30671);

(statearr_30703[(7)] = inst_30656);

(statearr_30703[(8)] = inst_30655);

return statearr_30703;
})();
var statearr_30704_30731 = state_30691__$1;
(statearr_30704_30731[(2)] = null);

(statearr_30704_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (9))){
var inst_30655 = (state_30691[(8)]);
var inst_30669 = cljs.core.vec.call(null,inst_30655);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30691__$1,(11),out,inst_30669);
} else {
if((state_val_30692 === (5))){
var inst_30664 = (state_30691[(11)]);
var inst_30659 = (state_30691[(9)]);
var inst_30656 = (state_30691[(7)]);
var inst_30655 = (state_30691[(8)]);
var inst_30663 = (inst_30655[inst_30656] = inst_30659);
var inst_30664__$1 = (inst_30656 + (1));
var inst_30665 = (inst_30664__$1 < n);
var state_30691__$1 = (function (){var statearr_30705 = state_30691;
(statearr_30705[(12)] = inst_30663);

(statearr_30705[(11)] = inst_30664__$1);

return statearr_30705;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30706_30732 = state_30691__$1;
(statearr_30706_30732[(1)] = (8));

} else {
var statearr_30707_30733 = state_30691__$1;
(statearr_30707_30733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (14))){
var inst_30684 = (state_30691[(2)]);
var inst_30685 = cljs.core.async.close_BANG_.call(null,out);
var state_30691__$1 = (function (){var statearr_30709 = state_30691;
(statearr_30709[(13)] = inst_30684);

return statearr_30709;
})();
var statearr_30710_30734 = state_30691__$1;
(statearr_30710_30734[(2)] = inst_30685);

(statearr_30710_30734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (10))){
var inst_30675 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30711_30735 = state_30691__$1;
(statearr_30711_30735[(2)] = inst_30675);

(statearr_30711_30735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (8))){
var inst_30664 = (state_30691[(11)]);
var inst_30655 = (state_30691[(8)]);
var tmp30708 = inst_30655;
var inst_30655__$1 = tmp30708;
var inst_30656 = inst_30664;
var state_30691__$1 = (function (){var statearr_30712 = state_30691;
(statearr_30712[(7)] = inst_30656);

(statearr_30712[(8)] = inst_30655__$1);

return statearr_30712;
})();
var statearr_30713_30736 = state_30691__$1;
(statearr_30713_30736[(2)] = null);

(statearr_30713_30736[(1)] = (2));


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
});})(c__21855__auto___30722,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30722,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30717[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30717[(1)] = (1));

return statearr_30717;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30691){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30718){if((e30718 instanceof Object)){
var ex__21797__auto__ = e30718;
var statearr_30719_30737 = state_30691;
(statearr_30719_30737[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30738 = state_30691;
state_30691 = G__30738;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30722,out))
})();
var state__21857__auto__ = (function (){var statearr_30720 = f__21856__auto__.call(null);
(statearr_30720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30722);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30722,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30740 = arguments.length;
switch (G__30740) {
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
var c__21855__auto___30813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto___30813,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto___30813,out){
return (function (state_30782){
var state_val_30783 = (state_30782[(1)]);
if((state_val_30783 === (7))){
var inst_30778 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30784_30814 = state_30782__$1;
(statearr_30784_30814[(2)] = inst_30778);

(statearr_30784_30814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (1))){
var inst_30741 = [];
var inst_30742 = inst_30741;
var inst_30743 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30782__$1 = (function (){var statearr_30785 = state_30782;
(statearr_30785[(7)] = inst_30742);

(statearr_30785[(8)] = inst_30743);

return statearr_30785;
})();
var statearr_30786_30815 = state_30782__$1;
(statearr_30786_30815[(2)] = null);

(statearr_30786_30815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (4))){
var inst_30746 = (state_30782[(9)]);
var inst_30746__$1 = (state_30782[(2)]);
var inst_30747 = (inst_30746__$1 == null);
var inst_30748 = cljs.core.not.call(null,inst_30747);
var state_30782__$1 = (function (){var statearr_30787 = state_30782;
(statearr_30787[(9)] = inst_30746__$1);

return statearr_30787;
})();
if(inst_30748){
var statearr_30788_30816 = state_30782__$1;
(statearr_30788_30816[(1)] = (5));

} else {
var statearr_30789_30817 = state_30782__$1;
(statearr_30789_30817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (15))){
var inst_30772 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30790_30818 = state_30782__$1;
(statearr_30790_30818[(2)] = inst_30772);

(statearr_30790_30818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (13))){
var state_30782__$1 = state_30782;
var statearr_30791_30819 = state_30782__$1;
(statearr_30791_30819[(2)] = null);

(statearr_30791_30819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (6))){
var inst_30742 = (state_30782[(7)]);
var inst_30767 = inst_30742.length;
var inst_30768 = (inst_30767 > (0));
var state_30782__$1 = state_30782;
if(cljs.core.truth_(inst_30768)){
var statearr_30792_30820 = state_30782__$1;
(statearr_30792_30820[(1)] = (12));

} else {
var statearr_30793_30821 = state_30782__$1;
(statearr_30793_30821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (3))){
var inst_30780 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30782__$1,inst_30780);
} else {
if((state_val_30783 === (12))){
var inst_30742 = (state_30782[(7)]);
var inst_30770 = cljs.core.vec.call(null,inst_30742);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30782__$1,(15),out,inst_30770);
} else {
if((state_val_30783 === (2))){
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30782__$1,(4),ch);
} else {
if((state_val_30783 === (11))){
var inst_30746 = (state_30782[(9)]);
var inst_30750 = (state_30782[(10)]);
var inst_30760 = (state_30782[(2)]);
var inst_30761 = [];
var inst_30762 = inst_30761.push(inst_30746);
var inst_30742 = inst_30761;
var inst_30743 = inst_30750;
var state_30782__$1 = (function (){var statearr_30794 = state_30782;
(statearr_30794[(7)] = inst_30742);

(statearr_30794[(11)] = inst_30762);

(statearr_30794[(8)] = inst_30743);

(statearr_30794[(12)] = inst_30760);

return statearr_30794;
})();
var statearr_30795_30822 = state_30782__$1;
(statearr_30795_30822[(2)] = null);

(statearr_30795_30822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (9))){
var inst_30742 = (state_30782[(7)]);
var inst_30758 = cljs.core.vec.call(null,inst_30742);
var state_30782__$1 = state_30782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30782__$1,(11),out,inst_30758);
} else {
if((state_val_30783 === (5))){
var inst_30746 = (state_30782[(9)]);
var inst_30743 = (state_30782[(8)]);
var inst_30750 = (state_30782[(10)]);
var inst_30750__$1 = f.call(null,inst_30746);
var inst_30751 = cljs.core._EQ_.call(null,inst_30750__$1,inst_30743);
var inst_30752 = cljs.core.keyword_identical_QMARK_.call(null,inst_30743,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30753 = (inst_30751) || (inst_30752);
var state_30782__$1 = (function (){var statearr_30796 = state_30782;
(statearr_30796[(10)] = inst_30750__$1);

return statearr_30796;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30797_30823 = state_30782__$1;
(statearr_30797_30823[(1)] = (8));

} else {
var statearr_30798_30824 = state_30782__$1;
(statearr_30798_30824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (14))){
var inst_30775 = (state_30782[(2)]);
var inst_30776 = cljs.core.async.close_BANG_.call(null,out);
var state_30782__$1 = (function (){var statearr_30800 = state_30782;
(statearr_30800[(13)] = inst_30775);

return statearr_30800;
})();
var statearr_30801_30825 = state_30782__$1;
(statearr_30801_30825[(2)] = inst_30776);

(statearr_30801_30825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (10))){
var inst_30765 = (state_30782[(2)]);
var state_30782__$1 = state_30782;
var statearr_30802_30826 = state_30782__$1;
(statearr_30802_30826[(2)] = inst_30765);

(statearr_30802_30826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30783 === (8))){
var inst_30746 = (state_30782[(9)]);
var inst_30742 = (state_30782[(7)]);
var inst_30750 = (state_30782[(10)]);
var inst_30755 = inst_30742.push(inst_30746);
var tmp30799 = inst_30742;
var inst_30742__$1 = tmp30799;
var inst_30743 = inst_30750;
var state_30782__$1 = (function (){var statearr_30803 = state_30782;
(statearr_30803[(7)] = inst_30742__$1);

(statearr_30803[(14)] = inst_30755);

(statearr_30803[(8)] = inst_30743);

return statearr_30803;
})();
var statearr_30804_30827 = state_30782__$1;
(statearr_30804_30827[(2)] = null);

(statearr_30804_30827[(1)] = (2));


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
});})(c__21855__auto___30813,out))
;
return ((function (switch__21793__auto__,c__21855__auto___30813,out){
return (function() {
var cljs$core$async$state_machine__21794__auto__ = null;
var cljs$core$async$state_machine__21794__auto____0 = (function (){
var statearr_30808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30808[(0)] = cljs$core$async$state_machine__21794__auto__);

(statearr_30808[(1)] = (1));

return statearr_30808;
});
var cljs$core$async$state_machine__21794__auto____1 = (function (state_30782){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_30782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e30809){if((e30809 instanceof Object)){
var ex__21797__auto__ = e30809;
var statearr_30810_30828 = state_30782;
(statearr_30810_30828[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30829 = state_30782;
state_30782 = G__30829;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
cljs$core$async$state_machine__21794__auto__ = function(state_30782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21794__auto____1.call(this,state_30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21794__auto____0;
cljs$core$async$state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21794__auto____1;
return cljs$core$async$state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto___30813,out))
})();
var state__21857__auto__ = (function (){var statearr_30811 = f__21856__auto__.call(null);
(statearr_30811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto___30813);

return statearr_30811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto___30813,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1443334741384