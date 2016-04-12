// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19206 = [];
var len__17898__auto___19212 = arguments.length;
var i__17899__auto___19213 = (0);
while(true){
if((i__17899__auto___19213 < len__17898__auto___19212)){
args19206.push((arguments[i__17899__auto___19213]));

var G__19214 = (i__17899__auto___19213 + (1));
i__17899__auto___19213 = G__19214;
continue;
} else {
}
break;
}

var G__19208 = args19206.length;
switch (G__19208) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19206.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19209 = (function (f,blockable,meta19210){
this.f = f;
this.blockable = blockable;
this.meta19210 = meta19210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19211,meta19210__$1){
var self__ = this;
var _19211__$1 = this;
return (new cljs.core.async.t_cljs$core$async19209(self__.f,self__.blockable,meta19210__$1));
});

cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19211){
var self__ = this;
var _19211__$1 = this;
return self__.meta19210;
});

cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19210","meta19210",-1016633408,null)], null);
});

cljs.core.async.t_cljs$core$async19209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19209";

cljs.core.async.t_cljs$core$async19209.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19209");
});

cljs.core.async.__GT_t_cljs$core$async19209 = (function cljs$core$async$__GT_t_cljs$core$async19209(f__$1,blockable__$1,meta19210){
return (new cljs.core.async.t_cljs$core$async19209(f__$1,blockable__$1,meta19210));
});

}

return (new cljs.core.async.t_cljs$core$async19209(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19218 = [];
var len__17898__auto___19221 = arguments.length;
var i__17899__auto___19222 = (0);
while(true){
if((i__17899__auto___19222 < len__17898__auto___19221)){
args19218.push((arguments[i__17899__auto___19222]));

var G__19223 = (i__17899__auto___19222 + (1));
i__17899__auto___19222 = G__19223;
continue;
} else {
}
break;
}

var G__19220 = args19218.length;
switch (G__19220) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19218.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19225 = [];
var len__17898__auto___19228 = arguments.length;
var i__17899__auto___19229 = (0);
while(true){
if((i__17899__auto___19229 < len__17898__auto___19228)){
args19225.push((arguments[i__17899__auto___19229]));

var G__19230 = (i__17899__auto___19229 + (1));
i__17899__auto___19229 = G__19230;
continue;
} else {
}
break;
}

var G__19227 = args19225.length;
switch (G__19227) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19225.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19232 = [];
var len__17898__auto___19235 = arguments.length;
var i__17899__auto___19236 = (0);
while(true){
if((i__17899__auto___19236 < len__17898__auto___19235)){
args19232.push((arguments[i__17899__auto___19236]));

var G__19237 = (i__17899__auto___19236 + (1));
i__17899__auto___19236 = G__19237;
continue;
} else {
}
break;
}

var G__19234 = args19232.length;
switch (G__19234) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19232.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19239 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19239);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19239,ret){
return (function (){
return fn1.call(null,val_19239);
});})(val_19239,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19240 = [];
var len__17898__auto___19243 = arguments.length;
var i__17899__auto___19244 = (0);
while(true){
if((i__17899__auto___19244 < len__17898__auto___19243)){
args19240.push((arguments[i__17899__auto___19244]));

var G__19245 = (i__17899__auto___19244 + (1));
i__17899__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var G__19242 = args19240.length;
switch (G__19242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19240.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17743__auto___19247 = n;
var x_19248 = (0);
while(true){
if((x_19248 < n__17743__auto___19247)){
(a[x_19248] = (0));

var G__19249 = (x_19248 + (1));
x_19248 = G__19249;
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

var G__19250 = (i + (1));
i = G__19250;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19254 = (function (alt_flag,flag,meta19255){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19255 = meta19255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19256,meta19255__$1){
var self__ = this;
var _19256__$1 = this;
return (new cljs.core.async.t_cljs$core$async19254(self__.alt_flag,self__.flag,meta19255__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19256){
var self__ = this;
var _19256__$1 = this;
return self__.meta19255;
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19255","meta19255",-282238204,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19254";

cljs.core.async.t_cljs$core$async19254.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19254");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19254 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19254(alt_flag__$1,flag__$1,meta19255){
return (new cljs.core.async.t_cljs$core$async19254(alt_flag__$1,flag__$1,meta19255));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19254(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19260 = (function (alt_handler,flag,cb,meta19261){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19261 = meta19261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19262,meta19261__$1){
var self__ = this;
var _19262__$1 = this;
return (new cljs.core.async.t_cljs$core$async19260(self__.alt_handler,self__.flag,self__.cb,meta19261__$1));
});

cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19262){
var self__ = this;
var _19262__$1 = this;
return self__.meta19261;
});

cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19261","meta19261",-182041716,null)], null);
});

cljs.core.async.t_cljs$core$async19260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19260";

cljs.core.async.t_cljs$core$async19260.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19260");
});

cljs.core.async.__GT_t_cljs$core$async19260 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19260(alt_handler__$1,flag__$1,cb__$1,meta19261){
return (new cljs.core.async.t_cljs$core$async19260(alt_handler__$1,flag__$1,cb__$1,meta19261));
});

}

return (new cljs.core.async.t_cljs$core$async19260(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19263_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19263_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19264_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19264_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16840__auto__ = wport;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19265 = (i + (1));
i = G__19265;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16840__auto__ = ret;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16828__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___19271 = arguments.length;
var i__17899__auto___19272 = (0);
while(true){
if((i__17899__auto___19272 < len__17898__auto___19271)){
args__17905__auto__.push((arguments[i__17899__auto___19272]));

var G__19273 = (i__17899__auto___19272 + (1));
i__17899__auto___19272 = G__19273;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19268){
var map__19269 = p__19268;
var map__19269__$1 = ((((!((map__19269 == null)))?((((map__19269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19269):map__19269);
var opts = map__19269__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19266){
var G__19267 = cljs.core.first.call(null,seq19266);
var seq19266__$1 = cljs.core.next.call(null,seq19266);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19267,seq19266__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19274 = [];
var len__17898__auto___19324 = arguments.length;
var i__17899__auto___19325 = (0);
while(true){
if((i__17899__auto___19325 < len__17898__auto___19324)){
args19274.push((arguments[i__17899__auto___19325]));

var G__19326 = (i__17899__auto___19325 + (1));
i__17899__auto___19325 = G__19326;
continue;
} else {
}
break;
}

var G__19276 = args19274.length;
switch (G__19276) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19274.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19161__auto___19328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___19328){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___19328){
return (function (state_19300){
var state_val_19301 = (state_19300[(1)]);
if((state_val_19301 === (7))){
var inst_19296 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19302_19329 = state_19300__$1;
(statearr_19302_19329[(2)] = inst_19296);

(statearr_19302_19329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (1))){
var state_19300__$1 = state_19300;
var statearr_19303_19330 = state_19300__$1;
(statearr_19303_19330[(2)] = null);

(statearr_19303_19330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (4))){
var inst_19279 = (state_19300[(7)]);
var inst_19279__$1 = (state_19300[(2)]);
var inst_19280 = (inst_19279__$1 == null);
var state_19300__$1 = (function (){var statearr_19304 = state_19300;
(statearr_19304[(7)] = inst_19279__$1);

return statearr_19304;
})();
if(cljs.core.truth_(inst_19280)){
var statearr_19305_19331 = state_19300__$1;
(statearr_19305_19331[(1)] = (5));

} else {
var statearr_19306_19332 = state_19300__$1;
(statearr_19306_19332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (13))){
var state_19300__$1 = state_19300;
var statearr_19307_19333 = state_19300__$1;
(statearr_19307_19333[(2)] = null);

(statearr_19307_19333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (6))){
var inst_19279 = (state_19300[(7)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19300__$1,(11),to,inst_19279);
} else {
if((state_val_19301 === (3))){
var inst_19298 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19300__$1,inst_19298);
} else {
if((state_val_19301 === (12))){
var state_19300__$1 = state_19300;
var statearr_19308_19334 = state_19300__$1;
(statearr_19308_19334[(2)] = null);

(statearr_19308_19334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (2))){
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19300__$1,(4),from);
} else {
if((state_val_19301 === (11))){
var inst_19289 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
if(cljs.core.truth_(inst_19289)){
var statearr_19309_19335 = state_19300__$1;
(statearr_19309_19335[(1)] = (12));

} else {
var statearr_19310_19336 = state_19300__$1;
(statearr_19310_19336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (9))){
var state_19300__$1 = state_19300;
var statearr_19311_19337 = state_19300__$1;
(statearr_19311_19337[(2)] = null);

(statearr_19311_19337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (5))){
var state_19300__$1 = state_19300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19312_19338 = state_19300__$1;
(statearr_19312_19338[(1)] = (8));

} else {
var statearr_19313_19339 = state_19300__$1;
(statearr_19313_19339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (14))){
var inst_19294 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19314_19340 = state_19300__$1;
(statearr_19314_19340[(2)] = inst_19294);

(statearr_19314_19340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (10))){
var inst_19286 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19315_19341 = state_19300__$1;
(statearr_19315_19341[(2)] = inst_19286);

(statearr_19315_19341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19301 === (8))){
var inst_19283 = cljs.core.async.close_BANG_.call(null,to);
var state_19300__$1 = state_19300;
var statearr_19316_19342 = state_19300__$1;
(statearr_19316_19342[(2)] = inst_19283);

(statearr_19316_19342[(1)] = (10));


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
});})(c__19161__auto___19328))
;
return ((function (switch__19049__auto__,c__19161__auto___19328){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_19320 = [null,null,null,null,null,null,null,null];
(statearr_19320[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_19320[(1)] = (1));

return statearr_19320;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_19300){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19321){if((e19321 instanceof Object)){
var ex__19053__auto__ = e19321;
var statearr_19322_19343 = state_19300;
(statearr_19322_19343[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19344 = state_19300;
state_19300 = G__19344;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_19300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_19300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___19328))
})();
var state__19163__auto__ = (function (){var statearr_19323 = f__19162__auto__.call(null);
(statearr_19323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19328);

return statearr_19323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___19328))
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
return (function (p__19528){
var vec__19529 = p__19528;
var v = cljs.core.nth.call(null,vec__19529,(0),null);
var p = cljs.core.nth.call(null,vec__19529,(1),null);
var job = vec__19529;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19161__auto___19711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results){
return (function (state_19534){
var state_val_19535 = (state_19534[(1)]);
if((state_val_19535 === (1))){
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19534__$1,(2),res,v);
} else {
if((state_val_19535 === (2))){
var inst_19531 = (state_19534[(2)]);
var inst_19532 = cljs.core.async.close_BANG_.call(null,res);
var state_19534__$1 = (function (){var statearr_19536 = state_19534;
(statearr_19536[(7)] = inst_19531);

return statearr_19536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19534__$1,inst_19532);
} else {
return null;
}
}
});})(c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results))
;
return ((function (switch__19049__auto__,c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_19540 = [null,null,null,null,null,null,null,null];
(statearr_19540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__);

(statearr_19540[(1)] = (1));

return statearr_19540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1 = (function (state_19534){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19541){if((e19541 instanceof Object)){
var ex__19053__auto__ = e19541;
var statearr_19542_19712 = state_19534;
(statearr_19542_19712[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19713 = state_19534;
state_19534 = G__19713;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = function(state_19534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1.call(this,state_19534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results))
})();
var state__19163__auto__ = (function (){var statearr_19543 = f__19162__auto__.call(null);
(statearr_19543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19711);

return statearr_19543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___19711,res,vec__19529,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19544){
var vec__19545 = p__19544;
var v = cljs.core.nth.call(null,vec__19545,(0),null);
var p = cljs.core.nth.call(null,vec__19545,(1),null);
var job = vec__19545;
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
var n__17743__auto___19714 = n;
var __19715 = (0);
while(true){
if((__19715 < n__17743__auto___19714)){
var G__19546_19716 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19546_19716) {
case "compute":
var c__19161__auto___19718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19715,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (__19715,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function (state_19559){
var state_val_19560 = (state_19559[(1)]);
if((state_val_19560 === (1))){
var state_19559__$1 = state_19559;
var statearr_19561_19719 = state_19559__$1;
(statearr_19561_19719[(2)] = null);

(statearr_19561_19719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19560 === (2))){
var state_19559__$1 = state_19559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19559__$1,(4),jobs);
} else {
if((state_val_19560 === (3))){
var inst_19557 = (state_19559[(2)]);
var state_19559__$1 = state_19559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19559__$1,inst_19557);
} else {
if((state_val_19560 === (4))){
var inst_19549 = (state_19559[(2)]);
var inst_19550 = process.call(null,inst_19549);
var state_19559__$1 = state_19559;
if(cljs.core.truth_(inst_19550)){
var statearr_19562_19720 = state_19559__$1;
(statearr_19562_19720[(1)] = (5));

} else {
var statearr_19563_19721 = state_19559__$1;
(statearr_19563_19721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19560 === (5))){
var state_19559__$1 = state_19559;
var statearr_19564_19722 = state_19559__$1;
(statearr_19564_19722[(2)] = null);

(statearr_19564_19722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19560 === (6))){
var state_19559__$1 = state_19559;
var statearr_19565_19723 = state_19559__$1;
(statearr_19565_19723[(2)] = null);

(statearr_19565_19723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19560 === (7))){
var inst_19555 = (state_19559[(2)]);
var state_19559__$1 = state_19559;
var statearr_19566_19724 = state_19559__$1;
(statearr_19566_19724[(2)] = inst_19555);

(statearr_19566_19724[(1)] = (3));


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
});})(__19715,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
;
return ((function (__19715,switch__19049__auto__,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_19570 = [null,null,null,null,null,null,null];
(statearr_19570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__);

(statearr_19570[(1)] = (1));

return statearr_19570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1 = (function (state_19559){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19571){if((e19571 instanceof Object)){
var ex__19053__auto__ = e19571;
var statearr_19572_19725 = state_19559;
(statearr_19572_19725[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19726 = state_19559;
state_19559 = G__19726;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = function(state_19559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1.call(this,state_19559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__;
})()
;})(__19715,switch__19049__auto__,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
})();
var state__19163__auto__ = (function (){var statearr_19573 = f__19162__auto__.call(null);
(statearr_19573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19718);

return statearr_19573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(__19715,c__19161__auto___19718,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
);


break;
case "async":
var c__19161__auto___19727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19715,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (__19715,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function (state_19586){
var state_val_19587 = (state_19586[(1)]);
if((state_val_19587 === (1))){
var state_19586__$1 = state_19586;
var statearr_19588_19728 = state_19586__$1;
(statearr_19588_19728[(2)] = null);

(statearr_19588_19728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (2))){
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19586__$1,(4),jobs);
} else {
if((state_val_19587 === (3))){
var inst_19584 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19586__$1,inst_19584);
} else {
if((state_val_19587 === (4))){
var inst_19576 = (state_19586[(2)]);
var inst_19577 = async.call(null,inst_19576);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19577)){
var statearr_19589_19729 = state_19586__$1;
(statearr_19589_19729[(1)] = (5));

} else {
var statearr_19590_19730 = state_19586__$1;
(statearr_19590_19730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (5))){
var state_19586__$1 = state_19586;
var statearr_19591_19731 = state_19586__$1;
(statearr_19591_19731[(2)] = null);

(statearr_19591_19731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (6))){
var state_19586__$1 = state_19586;
var statearr_19592_19732 = state_19586__$1;
(statearr_19592_19732[(2)] = null);

(statearr_19592_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19587 === (7))){
var inst_19582 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
var statearr_19593_19733 = state_19586__$1;
(statearr_19593_19733[(2)] = inst_19582);

(statearr_19593_19733[(1)] = (3));


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
});})(__19715,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
;
return ((function (__19715,switch__19049__auto__,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_19597 = [null,null,null,null,null,null,null];
(statearr_19597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__);

(statearr_19597[(1)] = (1));

return statearr_19597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1 = (function (state_19586){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19598){if((e19598 instanceof Object)){
var ex__19053__auto__ = e19598;
var statearr_19599_19734 = state_19586;
(statearr_19599_19734[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19735 = state_19586;
state_19586 = G__19735;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = function(state_19586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1.call(this,state_19586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__;
})()
;})(__19715,switch__19049__auto__,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
})();
var state__19163__auto__ = (function (){var statearr_19600 = f__19162__auto__.call(null);
(statearr_19600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19727);

return statearr_19600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(__19715,c__19161__auto___19727,G__19546_19716,n__17743__auto___19714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19736 = (__19715 + (1));
__19715 = G__19736;
continue;
} else {
}
break;
}

var c__19161__auto___19737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___19737,jobs,results,process,async){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___19737,jobs,results,process,async){
return (function (state_19622){
var state_val_19623 = (state_19622[(1)]);
if((state_val_19623 === (1))){
var state_19622__$1 = state_19622;
var statearr_19624_19738 = state_19622__$1;
(statearr_19624_19738[(2)] = null);

(statearr_19624_19738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19623 === (2))){
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19622__$1,(4),from);
} else {
if((state_val_19623 === (3))){
var inst_19620 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19622__$1,inst_19620);
} else {
if((state_val_19623 === (4))){
var inst_19603 = (state_19622[(7)]);
var inst_19603__$1 = (state_19622[(2)]);
var inst_19604 = (inst_19603__$1 == null);
var state_19622__$1 = (function (){var statearr_19625 = state_19622;
(statearr_19625[(7)] = inst_19603__$1);

return statearr_19625;
})();
if(cljs.core.truth_(inst_19604)){
var statearr_19626_19739 = state_19622__$1;
(statearr_19626_19739[(1)] = (5));

} else {
var statearr_19627_19740 = state_19622__$1;
(statearr_19627_19740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19623 === (5))){
var inst_19606 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19622__$1 = state_19622;
var statearr_19628_19741 = state_19622__$1;
(statearr_19628_19741[(2)] = inst_19606);

(statearr_19628_19741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19623 === (6))){
var inst_19603 = (state_19622[(7)]);
var inst_19608 = (state_19622[(8)]);
var inst_19608__$1 = cljs.core.async.chan.call(null,(1));
var inst_19609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19610 = [inst_19603,inst_19608__$1];
var inst_19611 = (new cljs.core.PersistentVector(null,2,(5),inst_19609,inst_19610,null));
var state_19622__$1 = (function (){var statearr_19629 = state_19622;
(statearr_19629[(8)] = inst_19608__$1);

return statearr_19629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19622__$1,(8),jobs,inst_19611);
} else {
if((state_val_19623 === (7))){
var inst_19618 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19630_19742 = state_19622__$1;
(statearr_19630_19742[(2)] = inst_19618);

(statearr_19630_19742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19623 === (8))){
var inst_19608 = (state_19622[(8)]);
var inst_19613 = (state_19622[(2)]);
var state_19622__$1 = (function (){var statearr_19631 = state_19622;
(statearr_19631[(9)] = inst_19613);

return statearr_19631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19622__$1,(9),results,inst_19608);
} else {
if((state_val_19623 === (9))){
var inst_19615 = (state_19622[(2)]);
var state_19622__$1 = (function (){var statearr_19632 = state_19622;
(statearr_19632[(10)] = inst_19615);

return statearr_19632;
})();
var statearr_19633_19743 = state_19622__$1;
(statearr_19633_19743[(2)] = null);

(statearr_19633_19743[(1)] = (2));


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
});})(c__19161__auto___19737,jobs,results,process,async))
;
return ((function (switch__19049__auto__,c__19161__auto___19737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_19637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__);

(statearr_19637[(1)] = (1));

return statearr_19637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1 = (function (state_19622){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19638){if((e19638 instanceof Object)){
var ex__19053__auto__ = e19638;
var statearr_19639_19744 = state_19622;
(statearr_19639_19744[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19745 = state_19622;
state_19622 = G__19745;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = function(state_19622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1.call(this,state_19622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___19737,jobs,results,process,async))
})();
var state__19163__auto__ = (function (){var statearr_19640 = f__19162__auto__.call(null);
(statearr_19640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19737);

return statearr_19640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___19737,jobs,results,process,async))
);


var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__,jobs,results,process,async){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__,jobs,results,process,async){
return (function (state_19678){
var state_val_19679 = (state_19678[(1)]);
if((state_val_19679 === (7))){
var inst_19674 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
var statearr_19680_19746 = state_19678__$1;
(statearr_19680_19746[(2)] = inst_19674);

(statearr_19680_19746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (20))){
var state_19678__$1 = state_19678;
var statearr_19681_19747 = state_19678__$1;
(statearr_19681_19747[(2)] = null);

(statearr_19681_19747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (1))){
var state_19678__$1 = state_19678;
var statearr_19682_19748 = state_19678__$1;
(statearr_19682_19748[(2)] = null);

(statearr_19682_19748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (4))){
var inst_19643 = (state_19678[(7)]);
var inst_19643__$1 = (state_19678[(2)]);
var inst_19644 = (inst_19643__$1 == null);
var state_19678__$1 = (function (){var statearr_19683 = state_19678;
(statearr_19683[(7)] = inst_19643__$1);

return statearr_19683;
})();
if(cljs.core.truth_(inst_19644)){
var statearr_19684_19749 = state_19678__$1;
(statearr_19684_19749[(1)] = (5));

} else {
var statearr_19685_19750 = state_19678__$1;
(statearr_19685_19750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (15))){
var inst_19656 = (state_19678[(8)]);
var state_19678__$1 = state_19678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19678__$1,(18),to,inst_19656);
} else {
if((state_val_19679 === (21))){
var inst_19669 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
var statearr_19686_19751 = state_19678__$1;
(statearr_19686_19751[(2)] = inst_19669);

(statearr_19686_19751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (13))){
var inst_19671 = (state_19678[(2)]);
var state_19678__$1 = (function (){var statearr_19687 = state_19678;
(statearr_19687[(9)] = inst_19671);

return statearr_19687;
})();
var statearr_19688_19752 = state_19678__$1;
(statearr_19688_19752[(2)] = null);

(statearr_19688_19752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (6))){
var inst_19643 = (state_19678[(7)]);
var state_19678__$1 = state_19678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19678__$1,(11),inst_19643);
} else {
if((state_val_19679 === (17))){
var inst_19664 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
if(cljs.core.truth_(inst_19664)){
var statearr_19689_19753 = state_19678__$1;
(statearr_19689_19753[(1)] = (19));

} else {
var statearr_19690_19754 = state_19678__$1;
(statearr_19690_19754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (3))){
var inst_19676 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19678__$1,inst_19676);
} else {
if((state_val_19679 === (12))){
var inst_19653 = (state_19678[(10)]);
var state_19678__$1 = state_19678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19678__$1,(14),inst_19653);
} else {
if((state_val_19679 === (2))){
var state_19678__$1 = state_19678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19678__$1,(4),results);
} else {
if((state_val_19679 === (19))){
var state_19678__$1 = state_19678;
var statearr_19691_19755 = state_19678__$1;
(statearr_19691_19755[(2)] = null);

(statearr_19691_19755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (11))){
var inst_19653 = (state_19678[(2)]);
var state_19678__$1 = (function (){var statearr_19692 = state_19678;
(statearr_19692[(10)] = inst_19653);

return statearr_19692;
})();
var statearr_19693_19756 = state_19678__$1;
(statearr_19693_19756[(2)] = null);

(statearr_19693_19756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (9))){
var state_19678__$1 = state_19678;
var statearr_19694_19757 = state_19678__$1;
(statearr_19694_19757[(2)] = null);

(statearr_19694_19757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (5))){
var state_19678__$1 = state_19678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19695_19758 = state_19678__$1;
(statearr_19695_19758[(1)] = (8));

} else {
var statearr_19696_19759 = state_19678__$1;
(statearr_19696_19759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (14))){
var inst_19656 = (state_19678[(8)]);
var inst_19658 = (state_19678[(11)]);
var inst_19656__$1 = (state_19678[(2)]);
var inst_19657 = (inst_19656__$1 == null);
var inst_19658__$1 = cljs.core.not.call(null,inst_19657);
var state_19678__$1 = (function (){var statearr_19697 = state_19678;
(statearr_19697[(8)] = inst_19656__$1);

(statearr_19697[(11)] = inst_19658__$1);

return statearr_19697;
})();
if(inst_19658__$1){
var statearr_19698_19760 = state_19678__$1;
(statearr_19698_19760[(1)] = (15));

} else {
var statearr_19699_19761 = state_19678__$1;
(statearr_19699_19761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (16))){
var inst_19658 = (state_19678[(11)]);
var state_19678__$1 = state_19678;
var statearr_19700_19762 = state_19678__$1;
(statearr_19700_19762[(2)] = inst_19658);

(statearr_19700_19762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (10))){
var inst_19650 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
var statearr_19701_19763 = state_19678__$1;
(statearr_19701_19763[(2)] = inst_19650);

(statearr_19701_19763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (18))){
var inst_19661 = (state_19678[(2)]);
var state_19678__$1 = state_19678;
var statearr_19702_19764 = state_19678__$1;
(statearr_19702_19764[(2)] = inst_19661);

(statearr_19702_19764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19679 === (8))){
var inst_19647 = cljs.core.async.close_BANG_.call(null,to);
var state_19678__$1 = state_19678;
var statearr_19703_19765 = state_19678__$1;
(statearr_19703_19765[(2)] = inst_19647);

(statearr_19703_19765[(1)] = (10));


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
});})(c__19161__auto__,jobs,results,process,async))
;
return ((function (switch__19049__auto__,c__19161__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_19707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__);

(statearr_19707[(1)] = (1));

return statearr_19707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1 = (function (state_19678){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19708){if((e19708 instanceof Object)){
var ex__19053__auto__ = e19708;
var statearr_19709_19766 = state_19678;
(statearr_19709_19766[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19767 = state_19678;
state_19678 = G__19767;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__ = function(state_19678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1.call(this,state_19678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__,jobs,results,process,async))
})();
var state__19163__auto__ = (function (){var statearr_19710 = f__19162__auto__.call(null);
(statearr_19710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__,jobs,results,process,async))
);

return c__19161__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19768 = [];
var len__17898__auto___19771 = arguments.length;
var i__17899__auto___19772 = (0);
while(true){
if((i__17899__auto___19772 < len__17898__auto___19771)){
args19768.push((arguments[i__17899__auto___19772]));

var G__19773 = (i__17899__auto___19772 + (1));
i__17899__auto___19772 = G__19773;
continue;
} else {
}
break;
}

var G__19770 = args19768.length;
switch (G__19770) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19768.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19775 = [];
var len__17898__auto___19778 = arguments.length;
var i__17899__auto___19779 = (0);
while(true){
if((i__17899__auto___19779 < len__17898__auto___19778)){
args19775.push((arguments[i__17899__auto___19779]));

var G__19780 = (i__17899__auto___19779 + (1));
i__17899__auto___19779 = G__19780;
continue;
} else {
}
break;
}

var G__19777 = args19775.length;
switch (G__19777) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19775.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19782 = [];
var len__17898__auto___19835 = arguments.length;
var i__17899__auto___19836 = (0);
while(true){
if((i__17899__auto___19836 < len__17898__auto___19835)){
args19782.push((arguments[i__17899__auto___19836]));

var G__19837 = (i__17899__auto___19836 + (1));
i__17899__auto___19836 = G__19837;
continue;
} else {
}
break;
}

var G__19784 = args19782.length;
switch (G__19784) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19782.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19161__auto___19839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___19839,tc,fc){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___19839,tc,fc){
return (function (state_19810){
var state_val_19811 = (state_19810[(1)]);
if((state_val_19811 === (7))){
var inst_19806 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19812_19840 = state_19810__$1;
(statearr_19812_19840[(2)] = inst_19806);

(statearr_19812_19840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (1))){
var state_19810__$1 = state_19810;
var statearr_19813_19841 = state_19810__$1;
(statearr_19813_19841[(2)] = null);

(statearr_19813_19841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (4))){
var inst_19787 = (state_19810[(7)]);
var inst_19787__$1 = (state_19810[(2)]);
var inst_19788 = (inst_19787__$1 == null);
var state_19810__$1 = (function (){var statearr_19814 = state_19810;
(statearr_19814[(7)] = inst_19787__$1);

return statearr_19814;
})();
if(cljs.core.truth_(inst_19788)){
var statearr_19815_19842 = state_19810__$1;
(statearr_19815_19842[(1)] = (5));

} else {
var statearr_19816_19843 = state_19810__$1;
(statearr_19816_19843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (13))){
var state_19810__$1 = state_19810;
var statearr_19817_19844 = state_19810__$1;
(statearr_19817_19844[(2)] = null);

(statearr_19817_19844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (6))){
var inst_19787 = (state_19810[(7)]);
var inst_19793 = p.call(null,inst_19787);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19793)){
var statearr_19818_19845 = state_19810__$1;
(statearr_19818_19845[(1)] = (9));

} else {
var statearr_19819_19846 = state_19810__$1;
(statearr_19819_19846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (3))){
var inst_19808 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19810__$1,inst_19808);
} else {
if((state_val_19811 === (12))){
var state_19810__$1 = state_19810;
var statearr_19820_19847 = state_19810__$1;
(statearr_19820_19847[(2)] = null);

(statearr_19820_19847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (2))){
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(4),ch);
} else {
if((state_val_19811 === (11))){
var inst_19787 = (state_19810[(7)]);
var inst_19797 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(8),inst_19797,inst_19787);
} else {
if((state_val_19811 === (9))){
var state_19810__$1 = state_19810;
var statearr_19821_19848 = state_19810__$1;
(statearr_19821_19848[(2)] = tc);

(statearr_19821_19848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (5))){
var inst_19790 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19791 = cljs.core.async.close_BANG_.call(null,fc);
var state_19810__$1 = (function (){var statearr_19822 = state_19810;
(statearr_19822[(8)] = inst_19790);

return statearr_19822;
})();
var statearr_19823_19849 = state_19810__$1;
(statearr_19823_19849[(2)] = inst_19791);

(statearr_19823_19849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (14))){
var inst_19804 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19824_19850 = state_19810__$1;
(statearr_19824_19850[(2)] = inst_19804);

(statearr_19824_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (10))){
var state_19810__$1 = state_19810;
var statearr_19825_19851 = state_19810__$1;
(statearr_19825_19851[(2)] = fc);

(statearr_19825_19851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (8))){
var inst_19799 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19799)){
var statearr_19826_19852 = state_19810__$1;
(statearr_19826_19852[(1)] = (12));

} else {
var statearr_19827_19853 = state_19810__$1;
(statearr_19827_19853[(1)] = (13));

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
});})(c__19161__auto___19839,tc,fc))
;
return ((function (switch__19049__auto__,c__19161__auto___19839,tc,fc){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_19831 = [null,null,null,null,null,null,null,null,null];
(statearr_19831[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_19831[(1)] = (1));

return statearr_19831;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_19810){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19832){if((e19832 instanceof Object)){
var ex__19053__auto__ = e19832;
var statearr_19833_19854 = state_19810;
(statearr_19833_19854[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19855 = state_19810;
state_19810 = G__19855;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_19810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_19810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___19839,tc,fc))
})();
var state__19163__auto__ = (function (){var statearr_19834 = f__19162__auto__.call(null);
(statearr_19834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___19839);

return statearr_19834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___19839,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_19919){
var state_val_19920 = (state_19919[(1)]);
if((state_val_19920 === (7))){
var inst_19915 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
var statearr_19921_19942 = state_19919__$1;
(statearr_19921_19942[(2)] = inst_19915);

(statearr_19921_19942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (1))){
var inst_19899 = init;
var state_19919__$1 = (function (){var statearr_19922 = state_19919;
(statearr_19922[(7)] = inst_19899);

return statearr_19922;
})();
var statearr_19923_19943 = state_19919__$1;
(statearr_19923_19943[(2)] = null);

(statearr_19923_19943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (4))){
var inst_19902 = (state_19919[(8)]);
var inst_19902__$1 = (state_19919[(2)]);
var inst_19903 = (inst_19902__$1 == null);
var state_19919__$1 = (function (){var statearr_19924 = state_19919;
(statearr_19924[(8)] = inst_19902__$1);

return statearr_19924;
})();
if(cljs.core.truth_(inst_19903)){
var statearr_19925_19944 = state_19919__$1;
(statearr_19925_19944[(1)] = (5));

} else {
var statearr_19926_19945 = state_19919__$1;
(statearr_19926_19945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (6))){
var inst_19906 = (state_19919[(9)]);
var inst_19899 = (state_19919[(7)]);
var inst_19902 = (state_19919[(8)]);
var inst_19906__$1 = f.call(null,inst_19899,inst_19902);
var inst_19907 = cljs.core.reduced_QMARK_.call(null,inst_19906__$1);
var state_19919__$1 = (function (){var statearr_19927 = state_19919;
(statearr_19927[(9)] = inst_19906__$1);

return statearr_19927;
})();
if(inst_19907){
var statearr_19928_19946 = state_19919__$1;
(statearr_19928_19946[(1)] = (8));

} else {
var statearr_19929_19947 = state_19919__$1;
(statearr_19929_19947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (3))){
var inst_19917 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19919__$1,inst_19917);
} else {
if((state_val_19920 === (2))){
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19919__$1,(4),ch);
} else {
if((state_val_19920 === (9))){
var inst_19906 = (state_19919[(9)]);
var inst_19899 = inst_19906;
var state_19919__$1 = (function (){var statearr_19930 = state_19919;
(statearr_19930[(7)] = inst_19899);

return statearr_19930;
})();
var statearr_19931_19948 = state_19919__$1;
(statearr_19931_19948[(2)] = null);

(statearr_19931_19948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (5))){
var inst_19899 = (state_19919[(7)]);
var state_19919__$1 = state_19919;
var statearr_19932_19949 = state_19919__$1;
(statearr_19932_19949[(2)] = inst_19899);

(statearr_19932_19949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (10))){
var inst_19913 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
var statearr_19933_19950 = state_19919__$1;
(statearr_19933_19950[(2)] = inst_19913);

(statearr_19933_19950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (8))){
var inst_19906 = (state_19919[(9)]);
var inst_19909 = cljs.core.deref.call(null,inst_19906);
var state_19919__$1 = state_19919;
var statearr_19934_19951 = state_19919__$1;
(statearr_19934_19951[(2)] = inst_19909);

(statearr_19934_19951[(1)] = (10));


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
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19050__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19050__auto____0 = (function (){
var statearr_19938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19938[(0)] = cljs$core$async$reduce_$_state_machine__19050__auto__);

(statearr_19938[(1)] = (1));

return statearr_19938;
});
var cljs$core$async$reduce_$_state_machine__19050__auto____1 = (function (state_19919){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e19939){if((e19939 instanceof Object)){
var ex__19053__auto__ = e19939;
var statearr_19940_19952 = state_19919;
(statearr_19940_19952[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_19919;
state_19919 = G__19953;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19050__auto__ = function(state_19919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19050__auto____1.call(this,state_19919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19050__auto____0;
cljs$core$async$reduce_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19050__auto____1;
return cljs$core$async$reduce_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_19941 = f__19162__auto__.call(null);
(statearr_19941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_19941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19954 = [];
var len__17898__auto___20006 = arguments.length;
var i__17899__auto___20007 = (0);
while(true){
if((i__17899__auto___20007 < len__17898__auto___20006)){
args19954.push((arguments[i__17899__auto___20007]));

var G__20008 = (i__17899__auto___20007 + (1));
i__17899__auto___20007 = G__20008;
continue;
} else {
}
break;
}

var G__19956 = args19954.length;
switch (G__19956) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19954.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_19981){
var state_val_19982 = (state_19981[(1)]);
if((state_val_19982 === (7))){
var inst_19963 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
var statearr_19983_20010 = state_19981__$1;
(statearr_19983_20010[(2)] = inst_19963);

(statearr_19983_20010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (1))){
var inst_19957 = cljs.core.seq.call(null,coll);
var inst_19958 = inst_19957;
var state_19981__$1 = (function (){var statearr_19984 = state_19981;
(statearr_19984[(7)] = inst_19958);

return statearr_19984;
})();
var statearr_19985_20011 = state_19981__$1;
(statearr_19985_20011[(2)] = null);

(statearr_19985_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (4))){
var inst_19958 = (state_19981[(7)]);
var inst_19961 = cljs.core.first.call(null,inst_19958);
var state_19981__$1 = state_19981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19981__$1,(7),ch,inst_19961);
} else {
if((state_val_19982 === (13))){
var inst_19975 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
var statearr_19986_20012 = state_19981__$1;
(statearr_19986_20012[(2)] = inst_19975);

(statearr_19986_20012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (6))){
var inst_19966 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
if(cljs.core.truth_(inst_19966)){
var statearr_19987_20013 = state_19981__$1;
(statearr_19987_20013[(1)] = (8));

} else {
var statearr_19988_20014 = state_19981__$1;
(statearr_19988_20014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (3))){
var inst_19979 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19981__$1,inst_19979);
} else {
if((state_val_19982 === (12))){
var state_19981__$1 = state_19981;
var statearr_19989_20015 = state_19981__$1;
(statearr_19989_20015[(2)] = null);

(statearr_19989_20015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (2))){
var inst_19958 = (state_19981[(7)]);
var state_19981__$1 = state_19981;
if(cljs.core.truth_(inst_19958)){
var statearr_19990_20016 = state_19981__$1;
(statearr_19990_20016[(1)] = (4));

} else {
var statearr_19991_20017 = state_19981__$1;
(statearr_19991_20017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (11))){
var inst_19972 = cljs.core.async.close_BANG_.call(null,ch);
var state_19981__$1 = state_19981;
var statearr_19992_20018 = state_19981__$1;
(statearr_19992_20018[(2)] = inst_19972);

(statearr_19992_20018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (9))){
var state_19981__$1 = state_19981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19993_20019 = state_19981__$1;
(statearr_19993_20019[(1)] = (11));

} else {
var statearr_19994_20020 = state_19981__$1;
(statearr_19994_20020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (5))){
var inst_19958 = (state_19981[(7)]);
var state_19981__$1 = state_19981;
var statearr_19995_20021 = state_19981__$1;
(statearr_19995_20021[(2)] = inst_19958);

(statearr_19995_20021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (10))){
var inst_19977 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
var statearr_19996_20022 = state_19981__$1;
(statearr_19996_20022[(2)] = inst_19977);

(statearr_19996_20022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19982 === (8))){
var inst_19958 = (state_19981[(7)]);
var inst_19968 = cljs.core.next.call(null,inst_19958);
var inst_19958__$1 = inst_19968;
var state_19981__$1 = (function (){var statearr_19997 = state_19981;
(statearr_19997[(7)] = inst_19958__$1);

return statearr_19997;
})();
var statearr_19998_20023 = state_19981__$1;
(statearr_19998_20023[(2)] = null);

(statearr_19998_20023[(1)] = (2));


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
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_20002 = [null,null,null,null,null,null,null,null];
(statearr_20002[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_20002[(1)] = (1));

return statearr_20002;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_19981){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_19981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e20003){if((e20003 instanceof Object)){
var ex__19053__auto__ = e20003;
var statearr_20004_20024 = state_19981;
(statearr_20004_20024[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20025 = state_19981;
state_19981 = G__20025;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_19981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_19981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_20005 = f__19162__auto__.call(null);
(statearr_20005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_20005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17495__auto__ = (((_ == null))?null:_);
var m__17496__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,_);
} else {
var m__17496__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20247 = (function (mult,ch,cs,meta20248){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20248 = meta20248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20249,meta20248__$1){
var self__ = this;
var _20249__$1 = this;
return (new cljs.core.async.t_cljs$core$async20247(self__.mult,self__.ch,self__.cs,meta20248__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20249){
var self__ = this;
var _20249__$1 = this;
return self__.meta20248;
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20248","meta20248",-78409313,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20247";

cljs.core.async.t_cljs$core$async20247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20247");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20247 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20247(mult__$1,ch__$1,cs__$1,meta20248){
return (new cljs.core.async.t_cljs$core$async20247(mult__$1,ch__$1,cs__$1,meta20248));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20247(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19161__auto___20468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___20468,cs,m,dchan,dctr,done){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___20468,cs,m,dchan,dctr,done){
return (function (state_20380){
var state_val_20381 = (state_20380[(1)]);
if((state_val_20381 === (7))){
var inst_20376 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20382_20469 = state_20380__$1;
(statearr_20382_20469[(2)] = inst_20376);

(statearr_20382_20469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (20))){
var inst_20281 = (state_20380[(7)]);
var inst_20291 = cljs.core.first.call(null,inst_20281);
var inst_20292 = cljs.core.nth.call(null,inst_20291,(0),null);
var inst_20293 = cljs.core.nth.call(null,inst_20291,(1),null);
var state_20380__$1 = (function (){var statearr_20383 = state_20380;
(statearr_20383[(8)] = inst_20292);

return statearr_20383;
})();
if(cljs.core.truth_(inst_20293)){
var statearr_20384_20470 = state_20380__$1;
(statearr_20384_20470[(1)] = (22));

} else {
var statearr_20385_20471 = state_20380__$1;
(statearr_20385_20471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (27))){
var inst_20321 = (state_20380[(9)]);
var inst_20252 = (state_20380[(10)]);
var inst_20328 = (state_20380[(11)]);
var inst_20323 = (state_20380[(12)]);
var inst_20328__$1 = cljs.core._nth.call(null,inst_20321,inst_20323);
var inst_20329 = cljs.core.async.put_BANG_.call(null,inst_20328__$1,inst_20252,done);
var state_20380__$1 = (function (){var statearr_20386 = state_20380;
(statearr_20386[(11)] = inst_20328__$1);

return statearr_20386;
})();
if(cljs.core.truth_(inst_20329)){
var statearr_20387_20472 = state_20380__$1;
(statearr_20387_20472[(1)] = (30));

} else {
var statearr_20388_20473 = state_20380__$1;
(statearr_20388_20473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (1))){
var state_20380__$1 = state_20380;
var statearr_20389_20474 = state_20380__$1;
(statearr_20389_20474[(2)] = null);

(statearr_20389_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (24))){
var inst_20281 = (state_20380[(7)]);
var inst_20298 = (state_20380[(2)]);
var inst_20299 = cljs.core.next.call(null,inst_20281);
var inst_20261 = inst_20299;
var inst_20262 = null;
var inst_20263 = (0);
var inst_20264 = (0);
var state_20380__$1 = (function (){var statearr_20390 = state_20380;
(statearr_20390[(13)] = inst_20263);

(statearr_20390[(14)] = inst_20262);

(statearr_20390[(15)] = inst_20261);

(statearr_20390[(16)] = inst_20264);

(statearr_20390[(17)] = inst_20298);

return statearr_20390;
})();
var statearr_20391_20475 = state_20380__$1;
(statearr_20391_20475[(2)] = null);

(statearr_20391_20475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (39))){
var state_20380__$1 = state_20380;
var statearr_20395_20476 = state_20380__$1;
(statearr_20395_20476[(2)] = null);

(statearr_20395_20476[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (4))){
var inst_20252 = (state_20380[(10)]);
var inst_20252__$1 = (state_20380[(2)]);
var inst_20253 = (inst_20252__$1 == null);
var state_20380__$1 = (function (){var statearr_20396 = state_20380;
(statearr_20396[(10)] = inst_20252__$1);

return statearr_20396;
})();
if(cljs.core.truth_(inst_20253)){
var statearr_20397_20477 = state_20380__$1;
(statearr_20397_20477[(1)] = (5));

} else {
var statearr_20398_20478 = state_20380__$1;
(statearr_20398_20478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (15))){
var inst_20263 = (state_20380[(13)]);
var inst_20262 = (state_20380[(14)]);
var inst_20261 = (state_20380[(15)]);
var inst_20264 = (state_20380[(16)]);
var inst_20277 = (state_20380[(2)]);
var inst_20278 = (inst_20264 + (1));
var tmp20392 = inst_20263;
var tmp20393 = inst_20262;
var tmp20394 = inst_20261;
var inst_20261__$1 = tmp20394;
var inst_20262__$1 = tmp20393;
var inst_20263__$1 = tmp20392;
var inst_20264__$1 = inst_20278;
var state_20380__$1 = (function (){var statearr_20399 = state_20380;
(statearr_20399[(13)] = inst_20263__$1);

(statearr_20399[(14)] = inst_20262__$1);

(statearr_20399[(15)] = inst_20261__$1);

(statearr_20399[(16)] = inst_20264__$1);

(statearr_20399[(18)] = inst_20277);

return statearr_20399;
})();
var statearr_20400_20479 = state_20380__$1;
(statearr_20400_20479[(2)] = null);

(statearr_20400_20479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (21))){
var inst_20302 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20404_20480 = state_20380__$1;
(statearr_20404_20480[(2)] = inst_20302);

(statearr_20404_20480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (31))){
var inst_20328 = (state_20380[(11)]);
var inst_20332 = done.call(null,null);
var inst_20333 = cljs.core.async.untap_STAR_.call(null,m,inst_20328);
var state_20380__$1 = (function (){var statearr_20405 = state_20380;
(statearr_20405[(19)] = inst_20332);

return statearr_20405;
})();
var statearr_20406_20481 = state_20380__$1;
(statearr_20406_20481[(2)] = inst_20333);

(statearr_20406_20481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (32))){
var inst_20321 = (state_20380[(9)]);
var inst_20320 = (state_20380[(20)]);
var inst_20322 = (state_20380[(21)]);
var inst_20323 = (state_20380[(12)]);
var inst_20335 = (state_20380[(2)]);
var inst_20336 = (inst_20323 + (1));
var tmp20401 = inst_20321;
var tmp20402 = inst_20320;
var tmp20403 = inst_20322;
var inst_20320__$1 = tmp20402;
var inst_20321__$1 = tmp20401;
var inst_20322__$1 = tmp20403;
var inst_20323__$1 = inst_20336;
var state_20380__$1 = (function (){var statearr_20407 = state_20380;
(statearr_20407[(9)] = inst_20321__$1);

(statearr_20407[(22)] = inst_20335);

(statearr_20407[(20)] = inst_20320__$1);

(statearr_20407[(21)] = inst_20322__$1);

(statearr_20407[(12)] = inst_20323__$1);

return statearr_20407;
})();
var statearr_20408_20482 = state_20380__$1;
(statearr_20408_20482[(2)] = null);

(statearr_20408_20482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (40))){
var inst_20348 = (state_20380[(23)]);
var inst_20352 = done.call(null,null);
var inst_20353 = cljs.core.async.untap_STAR_.call(null,m,inst_20348);
var state_20380__$1 = (function (){var statearr_20409 = state_20380;
(statearr_20409[(24)] = inst_20352);

return statearr_20409;
})();
var statearr_20410_20483 = state_20380__$1;
(statearr_20410_20483[(2)] = inst_20353);

(statearr_20410_20483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (33))){
var inst_20339 = (state_20380[(25)]);
var inst_20341 = cljs.core.chunked_seq_QMARK_.call(null,inst_20339);
var state_20380__$1 = state_20380;
if(inst_20341){
var statearr_20411_20484 = state_20380__$1;
(statearr_20411_20484[(1)] = (36));

} else {
var statearr_20412_20485 = state_20380__$1;
(statearr_20412_20485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (13))){
var inst_20271 = (state_20380[(26)]);
var inst_20274 = cljs.core.async.close_BANG_.call(null,inst_20271);
var state_20380__$1 = state_20380;
var statearr_20413_20486 = state_20380__$1;
(statearr_20413_20486[(2)] = inst_20274);

(statearr_20413_20486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (22))){
var inst_20292 = (state_20380[(8)]);
var inst_20295 = cljs.core.async.close_BANG_.call(null,inst_20292);
var state_20380__$1 = state_20380;
var statearr_20414_20487 = state_20380__$1;
(statearr_20414_20487[(2)] = inst_20295);

(statearr_20414_20487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (36))){
var inst_20339 = (state_20380[(25)]);
var inst_20343 = cljs.core.chunk_first.call(null,inst_20339);
var inst_20344 = cljs.core.chunk_rest.call(null,inst_20339);
var inst_20345 = cljs.core.count.call(null,inst_20343);
var inst_20320 = inst_20344;
var inst_20321 = inst_20343;
var inst_20322 = inst_20345;
var inst_20323 = (0);
var state_20380__$1 = (function (){var statearr_20415 = state_20380;
(statearr_20415[(9)] = inst_20321);

(statearr_20415[(20)] = inst_20320);

(statearr_20415[(21)] = inst_20322);

(statearr_20415[(12)] = inst_20323);

return statearr_20415;
})();
var statearr_20416_20488 = state_20380__$1;
(statearr_20416_20488[(2)] = null);

(statearr_20416_20488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (41))){
var inst_20339 = (state_20380[(25)]);
var inst_20355 = (state_20380[(2)]);
var inst_20356 = cljs.core.next.call(null,inst_20339);
var inst_20320 = inst_20356;
var inst_20321 = null;
var inst_20322 = (0);
var inst_20323 = (0);
var state_20380__$1 = (function (){var statearr_20417 = state_20380;
(statearr_20417[(9)] = inst_20321);

(statearr_20417[(20)] = inst_20320);

(statearr_20417[(21)] = inst_20322);

(statearr_20417[(12)] = inst_20323);

(statearr_20417[(27)] = inst_20355);

return statearr_20417;
})();
var statearr_20418_20489 = state_20380__$1;
(statearr_20418_20489[(2)] = null);

(statearr_20418_20489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (43))){
var state_20380__$1 = state_20380;
var statearr_20419_20490 = state_20380__$1;
(statearr_20419_20490[(2)] = null);

(statearr_20419_20490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (29))){
var inst_20364 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20420_20491 = state_20380__$1;
(statearr_20420_20491[(2)] = inst_20364);

(statearr_20420_20491[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (44))){
var inst_20373 = (state_20380[(2)]);
var state_20380__$1 = (function (){var statearr_20421 = state_20380;
(statearr_20421[(28)] = inst_20373);

return statearr_20421;
})();
var statearr_20422_20492 = state_20380__$1;
(statearr_20422_20492[(2)] = null);

(statearr_20422_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (6))){
var inst_20312 = (state_20380[(29)]);
var inst_20311 = cljs.core.deref.call(null,cs);
var inst_20312__$1 = cljs.core.keys.call(null,inst_20311);
var inst_20313 = cljs.core.count.call(null,inst_20312__$1);
var inst_20314 = cljs.core.reset_BANG_.call(null,dctr,inst_20313);
var inst_20319 = cljs.core.seq.call(null,inst_20312__$1);
var inst_20320 = inst_20319;
var inst_20321 = null;
var inst_20322 = (0);
var inst_20323 = (0);
var state_20380__$1 = (function (){var statearr_20423 = state_20380;
(statearr_20423[(9)] = inst_20321);

(statearr_20423[(20)] = inst_20320);

(statearr_20423[(29)] = inst_20312__$1);

(statearr_20423[(21)] = inst_20322);

(statearr_20423[(12)] = inst_20323);

(statearr_20423[(30)] = inst_20314);

return statearr_20423;
})();
var statearr_20424_20493 = state_20380__$1;
(statearr_20424_20493[(2)] = null);

(statearr_20424_20493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (28))){
var inst_20320 = (state_20380[(20)]);
var inst_20339 = (state_20380[(25)]);
var inst_20339__$1 = cljs.core.seq.call(null,inst_20320);
var state_20380__$1 = (function (){var statearr_20425 = state_20380;
(statearr_20425[(25)] = inst_20339__$1);

return statearr_20425;
})();
if(inst_20339__$1){
var statearr_20426_20494 = state_20380__$1;
(statearr_20426_20494[(1)] = (33));

} else {
var statearr_20427_20495 = state_20380__$1;
(statearr_20427_20495[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (25))){
var inst_20322 = (state_20380[(21)]);
var inst_20323 = (state_20380[(12)]);
var inst_20325 = (inst_20323 < inst_20322);
var inst_20326 = inst_20325;
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20326)){
var statearr_20428_20496 = state_20380__$1;
(statearr_20428_20496[(1)] = (27));

} else {
var statearr_20429_20497 = state_20380__$1;
(statearr_20429_20497[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (34))){
var state_20380__$1 = state_20380;
var statearr_20430_20498 = state_20380__$1;
(statearr_20430_20498[(2)] = null);

(statearr_20430_20498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (17))){
var state_20380__$1 = state_20380;
var statearr_20431_20499 = state_20380__$1;
(statearr_20431_20499[(2)] = null);

(statearr_20431_20499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (3))){
var inst_20378 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20380__$1,inst_20378);
} else {
if((state_val_20381 === (12))){
var inst_20307 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20432_20500 = state_20380__$1;
(statearr_20432_20500[(2)] = inst_20307);

(statearr_20432_20500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (2))){
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20380__$1,(4),ch);
} else {
if((state_val_20381 === (23))){
var state_20380__$1 = state_20380;
var statearr_20433_20501 = state_20380__$1;
(statearr_20433_20501[(2)] = null);

(statearr_20433_20501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (35))){
var inst_20362 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20434_20502 = state_20380__$1;
(statearr_20434_20502[(2)] = inst_20362);

(statearr_20434_20502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (19))){
var inst_20281 = (state_20380[(7)]);
var inst_20285 = cljs.core.chunk_first.call(null,inst_20281);
var inst_20286 = cljs.core.chunk_rest.call(null,inst_20281);
var inst_20287 = cljs.core.count.call(null,inst_20285);
var inst_20261 = inst_20286;
var inst_20262 = inst_20285;
var inst_20263 = inst_20287;
var inst_20264 = (0);
var state_20380__$1 = (function (){var statearr_20435 = state_20380;
(statearr_20435[(13)] = inst_20263);

(statearr_20435[(14)] = inst_20262);

(statearr_20435[(15)] = inst_20261);

(statearr_20435[(16)] = inst_20264);

return statearr_20435;
})();
var statearr_20436_20503 = state_20380__$1;
(statearr_20436_20503[(2)] = null);

(statearr_20436_20503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (11))){
var inst_20261 = (state_20380[(15)]);
var inst_20281 = (state_20380[(7)]);
var inst_20281__$1 = cljs.core.seq.call(null,inst_20261);
var state_20380__$1 = (function (){var statearr_20437 = state_20380;
(statearr_20437[(7)] = inst_20281__$1);

return statearr_20437;
})();
if(inst_20281__$1){
var statearr_20438_20504 = state_20380__$1;
(statearr_20438_20504[(1)] = (16));

} else {
var statearr_20439_20505 = state_20380__$1;
(statearr_20439_20505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (9))){
var inst_20309 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20440_20506 = state_20380__$1;
(statearr_20440_20506[(2)] = inst_20309);

(statearr_20440_20506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (5))){
var inst_20259 = cljs.core.deref.call(null,cs);
var inst_20260 = cljs.core.seq.call(null,inst_20259);
var inst_20261 = inst_20260;
var inst_20262 = null;
var inst_20263 = (0);
var inst_20264 = (0);
var state_20380__$1 = (function (){var statearr_20441 = state_20380;
(statearr_20441[(13)] = inst_20263);

(statearr_20441[(14)] = inst_20262);

(statearr_20441[(15)] = inst_20261);

(statearr_20441[(16)] = inst_20264);

return statearr_20441;
})();
var statearr_20442_20507 = state_20380__$1;
(statearr_20442_20507[(2)] = null);

(statearr_20442_20507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (14))){
var state_20380__$1 = state_20380;
var statearr_20443_20508 = state_20380__$1;
(statearr_20443_20508[(2)] = null);

(statearr_20443_20508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (45))){
var inst_20370 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20444_20509 = state_20380__$1;
(statearr_20444_20509[(2)] = inst_20370);

(statearr_20444_20509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (26))){
var inst_20312 = (state_20380[(29)]);
var inst_20366 = (state_20380[(2)]);
var inst_20367 = cljs.core.seq.call(null,inst_20312);
var state_20380__$1 = (function (){var statearr_20445 = state_20380;
(statearr_20445[(31)] = inst_20366);

return statearr_20445;
})();
if(inst_20367){
var statearr_20446_20510 = state_20380__$1;
(statearr_20446_20510[(1)] = (42));

} else {
var statearr_20447_20511 = state_20380__$1;
(statearr_20447_20511[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (16))){
var inst_20281 = (state_20380[(7)]);
var inst_20283 = cljs.core.chunked_seq_QMARK_.call(null,inst_20281);
var state_20380__$1 = state_20380;
if(inst_20283){
var statearr_20448_20512 = state_20380__$1;
(statearr_20448_20512[(1)] = (19));

} else {
var statearr_20449_20513 = state_20380__$1;
(statearr_20449_20513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (38))){
var inst_20359 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20450_20514 = state_20380__$1;
(statearr_20450_20514[(2)] = inst_20359);

(statearr_20450_20514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (30))){
var state_20380__$1 = state_20380;
var statearr_20451_20515 = state_20380__$1;
(statearr_20451_20515[(2)] = null);

(statearr_20451_20515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (10))){
var inst_20262 = (state_20380[(14)]);
var inst_20264 = (state_20380[(16)]);
var inst_20270 = cljs.core._nth.call(null,inst_20262,inst_20264);
var inst_20271 = cljs.core.nth.call(null,inst_20270,(0),null);
var inst_20272 = cljs.core.nth.call(null,inst_20270,(1),null);
var state_20380__$1 = (function (){var statearr_20452 = state_20380;
(statearr_20452[(26)] = inst_20271);

return statearr_20452;
})();
if(cljs.core.truth_(inst_20272)){
var statearr_20453_20516 = state_20380__$1;
(statearr_20453_20516[(1)] = (13));

} else {
var statearr_20454_20517 = state_20380__$1;
(statearr_20454_20517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (18))){
var inst_20305 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20455_20518 = state_20380__$1;
(statearr_20455_20518[(2)] = inst_20305);

(statearr_20455_20518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (42))){
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20380__$1,(45),dchan);
} else {
if((state_val_20381 === (37))){
var inst_20252 = (state_20380[(10)]);
var inst_20348 = (state_20380[(23)]);
var inst_20339 = (state_20380[(25)]);
var inst_20348__$1 = cljs.core.first.call(null,inst_20339);
var inst_20349 = cljs.core.async.put_BANG_.call(null,inst_20348__$1,inst_20252,done);
var state_20380__$1 = (function (){var statearr_20456 = state_20380;
(statearr_20456[(23)] = inst_20348__$1);

return statearr_20456;
})();
if(cljs.core.truth_(inst_20349)){
var statearr_20457_20519 = state_20380__$1;
(statearr_20457_20519[(1)] = (39));

} else {
var statearr_20458_20520 = state_20380__$1;
(statearr_20458_20520[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (8))){
var inst_20263 = (state_20380[(13)]);
var inst_20264 = (state_20380[(16)]);
var inst_20266 = (inst_20264 < inst_20263);
var inst_20267 = inst_20266;
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20267)){
var statearr_20459_20521 = state_20380__$1;
(statearr_20459_20521[(1)] = (10));

} else {
var statearr_20460_20522 = state_20380__$1;
(statearr_20460_20522[(1)] = (11));

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
});})(c__19161__auto___20468,cs,m,dchan,dctr,done))
;
return ((function (switch__19049__auto__,c__19161__auto___20468,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19050__auto__ = null;
var cljs$core$async$mult_$_state_machine__19050__auto____0 = (function (){
var statearr_20464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20464[(0)] = cljs$core$async$mult_$_state_machine__19050__auto__);

(statearr_20464[(1)] = (1));

return statearr_20464;
});
var cljs$core$async$mult_$_state_machine__19050__auto____1 = (function (state_20380){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_20380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e20465){if((e20465 instanceof Object)){
var ex__19053__auto__ = e20465;
var statearr_20466_20523 = state_20380;
(statearr_20466_20523[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20524 = state_20380;
state_20380 = G__20524;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19050__auto__ = function(state_20380){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19050__auto____1.call(this,state_20380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19050__auto____0;
cljs$core$async$mult_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19050__auto____1;
return cljs$core$async$mult_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___20468,cs,m,dchan,dctr,done))
})();
var state__19163__auto__ = (function (){var statearr_20467 = f__19162__auto__.call(null);
(statearr_20467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___20468);

return statearr_20467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___20468,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20525 = [];
var len__17898__auto___20528 = arguments.length;
var i__17899__auto___20529 = (0);
while(true){
if((i__17899__auto___20529 < len__17898__auto___20528)){
args20525.push((arguments[i__17899__auto___20529]));

var G__20530 = (i__17899__auto___20529 + (1));
i__17899__auto___20529 = G__20530;
continue;
} else {
}
break;
}

var G__20527 = args20525.length;
switch (G__20527) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20525.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,state_map);
} else {
var m__17496__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,mode);
} else {
var m__17496__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___20542 = arguments.length;
var i__17899__auto___20543 = (0);
while(true){
if((i__17899__auto___20543 < len__17898__auto___20542)){
args__17905__auto__.push((arguments[i__17899__auto___20543]));

var G__20544 = (i__17899__auto___20543 + (1));
i__17899__auto___20543 = G__20544;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20536){
var map__20537 = p__20536;
var map__20537__$1 = ((((!((map__20537 == null)))?((((map__20537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20537):map__20537);
var opts = map__20537__$1;
var statearr_20539_20545 = state;
(statearr_20539_20545[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20537,map__20537__$1,opts){
return (function (val){
var statearr_20540_20546 = state;
(statearr_20540_20546[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20537,map__20537__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20541_20547 = state;
(statearr_20541_20547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20532){
var G__20533 = cljs.core.first.call(null,seq20532);
var seq20532__$1 = cljs.core.next.call(null,seq20532);
var G__20534 = cljs.core.first.call(null,seq20532__$1);
var seq20532__$2 = cljs.core.next.call(null,seq20532__$1);
var G__20535 = cljs.core.first.call(null,seq20532__$2);
var seq20532__$3 = cljs.core.next.call(null,seq20532__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20533,G__20534,G__20535,seq20532__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async20711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20711 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20712){
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
this.meta20712 = meta20712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20713,meta20712__$1){
var self__ = this;
var _20713__$1 = this;
return (new cljs.core.async.t_cljs$core$async20711(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20712__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20713){
var self__ = this;
var _20713__$1 = this;
return self__.meta20712;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20711.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20712","meta20712",1633348715,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20711";

cljs.core.async.t_cljs$core$async20711.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20711");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20711 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20711(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20712){
return (new cljs.core.async.t_cljs$core$async20711(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20712));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20711(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19161__auto___20874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20811){
var state_val_20812 = (state_20811[(1)]);
if((state_val_20812 === (7))){
var inst_20729 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20813_20875 = state_20811__$1;
(statearr_20813_20875[(2)] = inst_20729);

(statearr_20813_20875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (20))){
var inst_20741 = (state_20811[(7)]);
var state_20811__$1 = state_20811;
var statearr_20814_20876 = state_20811__$1;
(statearr_20814_20876[(2)] = inst_20741);

(statearr_20814_20876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (27))){
var state_20811__$1 = state_20811;
var statearr_20815_20877 = state_20811__$1;
(statearr_20815_20877[(2)] = null);

(statearr_20815_20877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (1))){
var inst_20717 = (state_20811[(8)]);
var inst_20717__$1 = calc_state.call(null);
var inst_20719 = (inst_20717__$1 == null);
var inst_20720 = cljs.core.not.call(null,inst_20719);
var state_20811__$1 = (function (){var statearr_20816 = state_20811;
(statearr_20816[(8)] = inst_20717__$1);

return statearr_20816;
})();
if(inst_20720){
var statearr_20817_20878 = state_20811__$1;
(statearr_20817_20878[(1)] = (2));

} else {
var statearr_20818_20879 = state_20811__$1;
(statearr_20818_20879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (24))){
var inst_20771 = (state_20811[(9)]);
var inst_20785 = (state_20811[(10)]);
var inst_20764 = (state_20811[(11)]);
var inst_20785__$1 = inst_20764.call(null,inst_20771);
var state_20811__$1 = (function (){var statearr_20819 = state_20811;
(statearr_20819[(10)] = inst_20785__$1);

return statearr_20819;
})();
if(cljs.core.truth_(inst_20785__$1)){
var statearr_20820_20880 = state_20811__$1;
(statearr_20820_20880[(1)] = (29));

} else {
var statearr_20821_20881 = state_20811__$1;
(statearr_20821_20881[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (4))){
var inst_20732 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20732)){
var statearr_20822_20882 = state_20811__$1;
(statearr_20822_20882[(1)] = (8));

} else {
var statearr_20823_20883 = state_20811__$1;
(statearr_20823_20883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (15))){
var inst_20758 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20758)){
var statearr_20824_20884 = state_20811__$1;
(statearr_20824_20884[(1)] = (19));

} else {
var statearr_20825_20885 = state_20811__$1;
(statearr_20825_20885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (21))){
var inst_20763 = (state_20811[(12)]);
var inst_20763__$1 = (state_20811[(2)]);
var inst_20764 = cljs.core.get.call(null,inst_20763__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20765 = cljs.core.get.call(null,inst_20763__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20766 = cljs.core.get.call(null,inst_20763__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20811__$1 = (function (){var statearr_20826 = state_20811;
(statearr_20826[(13)] = inst_20765);

(statearr_20826[(11)] = inst_20764);

(statearr_20826[(12)] = inst_20763__$1);

return statearr_20826;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20811__$1,(22),inst_20766);
} else {
if((state_val_20812 === (31))){
var inst_20793 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20793)){
var statearr_20827_20886 = state_20811__$1;
(statearr_20827_20886[(1)] = (32));

} else {
var statearr_20828_20887 = state_20811__$1;
(statearr_20828_20887[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (32))){
var inst_20770 = (state_20811[(14)]);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20811__$1,(35),out,inst_20770);
} else {
if((state_val_20812 === (33))){
var inst_20763 = (state_20811[(12)]);
var inst_20741 = inst_20763;
var state_20811__$1 = (function (){var statearr_20829 = state_20811;
(statearr_20829[(7)] = inst_20741);

return statearr_20829;
})();
var statearr_20830_20888 = state_20811__$1;
(statearr_20830_20888[(2)] = null);

(statearr_20830_20888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (13))){
var inst_20741 = (state_20811[(7)]);
var inst_20748 = inst_20741.cljs$lang$protocol_mask$partition0$;
var inst_20749 = (inst_20748 & (64));
var inst_20750 = inst_20741.cljs$core$ISeq$;
var inst_20751 = (inst_20749) || (inst_20750);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20751)){
var statearr_20831_20889 = state_20811__$1;
(statearr_20831_20889[(1)] = (16));

} else {
var statearr_20832_20890 = state_20811__$1;
(statearr_20832_20890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (22))){
var inst_20771 = (state_20811[(9)]);
var inst_20770 = (state_20811[(14)]);
var inst_20769 = (state_20811[(2)]);
var inst_20770__$1 = cljs.core.nth.call(null,inst_20769,(0),null);
var inst_20771__$1 = cljs.core.nth.call(null,inst_20769,(1),null);
var inst_20772 = (inst_20770__$1 == null);
var inst_20773 = cljs.core._EQ_.call(null,inst_20771__$1,change);
var inst_20774 = (inst_20772) || (inst_20773);
var state_20811__$1 = (function (){var statearr_20833 = state_20811;
(statearr_20833[(9)] = inst_20771__$1);

(statearr_20833[(14)] = inst_20770__$1);

return statearr_20833;
})();
if(cljs.core.truth_(inst_20774)){
var statearr_20834_20891 = state_20811__$1;
(statearr_20834_20891[(1)] = (23));

} else {
var statearr_20835_20892 = state_20811__$1;
(statearr_20835_20892[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (36))){
var inst_20763 = (state_20811[(12)]);
var inst_20741 = inst_20763;
var state_20811__$1 = (function (){var statearr_20836 = state_20811;
(statearr_20836[(7)] = inst_20741);

return statearr_20836;
})();
var statearr_20837_20893 = state_20811__$1;
(statearr_20837_20893[(2)] = null);

(statearr_20837_20893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (29))){
var inst_20785 = (state_20811[(10)]);
var state_20811__$1 = state_20811;
var statearr_20838_20894 = state_20811__$1;
(statearr_20838_20894[(2)] = inst_20785);

(statearr_20838_20894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (6))){
var state_20811__$1 = state_20811;
var statearr_20839_20895 = state_20811__$1;
(statearr_20839_20895[(2)] = false);

(statearr_20839_20895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (28))){
var inst_20781 = (state_20811[(2)]);
var inst_20782 = calc_state.call(null);
var inst_20741 = inst_20782;
var state_20811__$1 = (function (){var statearr_20840 = state_20811;
(statearr_20840[(15)] = inst_20781);

(statearr_20840[(7)] = inst_20741);

return statearr_20840;
})();
var statearr_20841_20896 = state_20811__$1;
(statearr_20841_20896[(2)] = null);

(statearr_20841_20896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (25))){
var inst_20807 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20842_20897 = state_20811__$1;
(statearr_20842_20897[(2)] = inst_20807);

(statearr_20842_20897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (34))){
var inst_20805 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20843_20898 = state_20811__$1;
(statearr_20843_20898[(2)] = inst_20805);

(statearr_20843_20898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (17))){
var state_20811__$1 = state_20811;
var statearr_20844_20899 = state_20811__$1;
(statearr_20844_20899[(2)] = false);

(statearr_20844_20899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (3))){
var state_20811__$1 = state_20811;
var statearr_20845_20900 = state_20811__$1;
(statearr_20845_20900[(2)] = false);

(statearr_20845_20900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (12))){
var inst_20809 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20811__$1,inst_20809);
} else {
if((state_val_20812 === (2))){
var inst_20717 = (state_20811[(8)]);
var inst_20722 = inst_20717.cljs$lang$protocol_mask$partition0$;
var inst_20723 = (inst_20722 & (64));
var inst_20724 = inst_20717.cljs$core$ISeq$;
var inst_20725 = (inst_20723) || (inst_20724);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20725)){
var statearr_20846_20901 = state_20811__$1;
(statearr_20846_20901[(1)] = (5));

} else {
var statearr_20847_20902 = state_20811__$1;
(statearr_20847_20902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (23))){
var inst_20770 = (state_20811[(14)]);
var inst_20776 = (inst_20770 == null);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20776)){
var statearr_20848_20903 = state_20811__$1;
(statearr_20848_20903[(1)] = (26));

} else {
var statearr_20849_20904 = state_20811__$1;
(statearr_20849_20904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (35))){
var inst_20796 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20796)){
var statearr_20850_20905 = state_20811__$1;
(statearr_20850_20905[(1)] = (36));

} else {
var statearr_20851_20906 = state_20811__$1;
(statearr_20851_20906[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (19))){
var inst_20741 = (state_20811[(7)]);
var inst_20760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20741);
var state_20811__$1 = state_20811;
var statearr_20852_20907 = state_20811__$1;
(statearr_20852_20907[(2)] = inst_20760);

(statearr_20852_20907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (11))){
var inst_20741 = (state_20811[(7)]);
var inst_20745 = (inst_20741 == null);
var inst_20746 = cljs.core.not.call(null,inst_20745);
var state_20811__$1 = state_20811;
if(inst_20746){
var statearr_20853_20908 = state_20811__$1;
(statearr_20853_20908[(1)] = (13));

} else {
var statearr_20854_20909 = state_20811__$1;
(statearr_20854_20909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (9))){
var inst_20717 = (state_20811[(8)]);
var state_20811__$1 = state_20811;
var statearr_20855_20910 = state_20811__$1;
(statearr_20855_20910[(2)] = inst_20717);

(statearr_20855_20910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (5))){
var state_20811__$1 = state_20811;
var statearr_20856_20911 = state_20811__$1;
(statearr_20856_20911[(2)] = true);

(statearr_20856_20911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (14))){
var state_20811__$1 = state_20811;
var statearr_20857_20912 = state_20811__$1;
(statearr_20857_20912[(2)] = false);

(statearr_20857_20912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (26))){
var inst_20771 = (state_20811[(9)]);
var inst_20778 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20771);
var state_20811__$1 = state_20811;
var statearr_20858_20913 = state_20811__$1;
(statearr_20858_20913[(2)] = inst_20778);

(statearr_20858_20913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (16))){
var state_20811__$1 = state_20811;
var statearr_20859_20914 = state_20811__$1;
(statearr_20859_20914[(2)] = true);

(statearr_20859_20914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (38))){
var inst_20801 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20860_20915 = state_20811__$1;
(statearr_20860_20915[(2)] = inst_20801);

(statearr_20860_20915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (30))){
var inst_20765 = (state_20811[(13)]);
var inst_20771 = (state_20811[(9)]);
var inst_20764 = (state_20811[(11)]);
var inst_20788 = cljs.core.empty_QMARK_.call(null,inst_20764);
var inst_20789 = inst_20765.call(null,inst_20771);
var inst_20790 = cljs.core.not.call(null,inst_20789);
var inst_20791 = (inst_20788) && (inst_20790);
var state_20811__$1 = state_20811;
var statearr_20861_20916 = state_20811__$1;
(statearr_20861_20916[(2)] = inst_20791);

(statearr_20861_20916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (10))){
var inst_20717 = (state_20811[(8)]);
var inst_20737 = (state_20811[(2)]);
var inst_20738 = cljs.core.get.call(null,inst_20737,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20739 = cljs.core.get.call(null,inst_20737,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20740 = cljs.core.get.call(null,inst_20737,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20741 = inst_20717;
var state_20811__$1 = (function (){var statearr_20862 = state_20811;
(statearr_20862[(16)] = inst_20740);

(statearr_20862[(17)] = inst_20739);

(statearr_20862[(18)] = inst_20738);

(statearr_20862[(7)] = inst_20741);

return statearr_20862;
})();
var statearr_20863_20917 = state_20811__$1;
(statearr_20863_20917[(2)] = null);

(statearr_20863_20917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (18))){
var inst_20755 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20864_20918 = state_20811__$1;
(statearr_20864_20918[(2)] = inst_20755);

(statearr_20864_20918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (37))){
var state_20811__$1 = state_20811;
var statearr_20865_20919 = state_20811__$1;
(statearr_20865_20919[(2)] = null);

(statearr_20865_20919[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (8))){
var inst_20717 = (state_20811[(8)]);
var inst_20734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20717);
var state_20811__$1 = state_20811;
var statearr_20866_20920 = state_20811__$1;
(statearr_20866_20920[(2)] = inst_20734);

(statearr_20866_20920[(1)] = (10));


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
});})(c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19049__auto__,c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19050__auto__ = null;
var cljs$core$async$mix_$_state_machine__19050__auto____0 = (function (){
var statearr_20870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20870[(0)] = cljs$core$async$mix_$_state_machine__19050__auto__);

(statearr_20870[(1)] = (1));

return statearr_20870;
});
var cljs$core$async$mix_$_state_machine__19050__auto____1 = (function (state_20811){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_20811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e20871){if((e20871 instanceof Object)){
var ex__19053__auto__ = e20871;
var statearr_20872_20921 = state_20811;
(statearr_20872_20921[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20922 = state_20811;
state_20811 = G__20922;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19050__auto__ = function(state_20811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19050__auto____1.call(this,state_20811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19050__auto____0;
cljs$core$async$mix_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19050__auto____1;
return cljs$core$async$mix_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19163__auto__ = (function (){var statearr_20873 = f__19162__auto__.call(null);
(statearr_20873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___20874);

return statearr_20873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___20874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20923 = [];
var len__17898__auto___20926 = arguments.length;
var i__17899__auto___20927 = (0);
while(true){
if((i__17899__auto___20927 < len__17898__auto___20926)){
args20923.push((arguments[i__17899__auto___20927]));

var G__20928 = (i__17899__auto___20927 + (1));
i__17899__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var G__20925 = args20923.length;
switch (G__20925) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20923.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20931 = [];
var len__17898__auto___21056 = arguments.length;
var i__17899__auto___21057 = (0);
while(true){
if((i__17899__auto___21057 < len__17898__auto___21056)){
args20931.push((arguments[i__17899__auto___21057]));

var G__21058 = (i__17899__auto___21057 + (1));
i__17899__auto___21057 = G__21058;
continue;
} else {
}
break;
}

var G__20933 = args20931.length;
switch (G__20933) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20931.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16840__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16840__auto__,mults){
return (function (p1__20930_SHARP_){
if(cljs.core.truth_(p1__20930_SHARP_.call(null,topic))){
return p1__20930_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20930_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16840__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20934 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20935){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20935 = meta20935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20936,meta20935__$1){
var self__ = this;
var _20936__$1 = this;
return (new cljs.core.async.t_cljs$core$async20934(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20935__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20936){
var self__ = this;
var _20936__$1 = this;
return self__.meta20935;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20935","meta20935",672331365,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20934";

cljs.core.async.t_cljs$core$async20934.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20934");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20934 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20935){
return (new cljs.core.async.t_cljs$core$async20934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20935));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20934(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19161__auto___21060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21060,mults,ensure_mult,p){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21060,mults,ensure_mult,p){
return (function (state_21008){
var state_val_21009 = (state_21008[(1)]);
if((state_val_21009 === (7))){
var inst_21004 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21010_21061 = state_21008__$1;
(statearr_21010_21061[(2)] = inst_21004);

(statearr_21010_21061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (20))){
var state_21008__$1 = state_21008;
var statearr_21011_21062 = state_21008__$1;
(statearr_21011_21062[(2)] = null);

(statearr_21011_21062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (1))){
var state_21008__$1 = state_21008;
var statearr_21012_21063 = state_21008__$1;
(statearr_21012_21063[(2)] = null);

(statearr_21012_21063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (24))){
var inst_20987 = (state_21008[(7)]);
var inst_20996 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20987);
var state_21008__$1 = state_21008;
var statearr_21013_21064 = state_21008__$1;
(statearr_21013_21064[(2)] = inst_20996);

(statearr_21013_21064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (4))){
var inst_20939 = (state_21008[(8)]);
var inst_20939__$1 = (state_21008[(2)]);
var inst_20940 = (inst_20939__$1 == null);
var state_21008__$1 = (function (){var statearr_21014 = state_21008;
(statearr_21014[(8)] = inst_20939__$1);

return statearr_21014;
})();
if(cljs.core.truth_(inst_20940)){
var statearr_21015_21065 = state_21008__$1;
(statearr_21015_21065[(1)] = (5));

} else {
var statearr_21016_21066 = state_21008__$1;
(statearr_21016_21066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (15))){
var inst_20981 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21017_21067 = state_21008__$1;
(statearr_21017_21067[(2)] = inst_20981);

(statearr_21017_21067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (21))){
var inst_21001 = (state_21008[(2)]);
var state_21008__$1 = (function (){var statearr_21018 = state_21008;
(statearr_21018[(9)] = inst_21001);

return statearr_21018;
})();
var statearr_21019_21068 = state_21008__$1;
(statearr_21019_21068[(2)] = null);

(statearr_21019_21068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (13))){
var inst_20963 = (state_21008[(10)]);
var inst_20965 = cljs.core.chunked_seq_QMARK_.call(null,inst_20963);
var state_21008__$1 = state_21008;
if(inst_20965){
var statearr_21020_21069 = state_21008__$1;
(statearr_21020_21069[(1)] = (16));

} else {
var statearr_21021_21070 = state_21008__$1;
(statearr_21021_21070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (22))){
var inst_20993 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
if(cljs.core.truth_(inst_20993)){
var statearr_21022_21071 = state_21008__$1;
(statearr_21022_21071[(1)] = (23));

} else {
var statearr_21023_21072 = state_21008__$1;
(statearr_21023_21072[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (6))){
var inst_20989 = (state_21008[(11)]);
var inst_20939 = (state_21008[(8)]);
var inst_20987 = (state_21008[(7)]);
var inst_20987__$1 = topic_fn.call(null,inst_20939);
var inst_20988 = cljs.core.deref.call(null,mults);
var inst_20989__$1 = cljs.core.get.call(null,inst_20988,inst_20987__$1);
var state_21008__$1 = (function (){var statearr_21024 = state_21008;
(statearr_21024[(11)] = inst_20989__$1);

(statearr_21024[(7)] = inst_20987__$1);

return statearr_21024;
})();
if(cljs.core.truth_(inst_20989__$1)){
var statearr_21025_21073 = state_21008__$1;
(statearr_21025_21073[(1)] = (19));

} else {
var statearr_21026_21074 = state_21008__$1;
(statearr_21026_21074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (25))){
var inst_20998 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21027_21075 = state_21008__$1;
(statearr_21027_21075[(2)] = inst_20998);

(statearr_21027_21075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (17))){
var inst_20963 = (state_21008[(10)]);
var inst_20972 = cljs.core.first.call(null,inst_20963);
var inst_20973 = cljs.core.async.muxch_STAR_.call(null,inst_20972);
var inst_20974 = cljs.core.async.close_BANG_.call(null,inst_20973);
var inst_20975 = cljs.core.next.call(null,inst_20963);
var inst_20949 = inst_20975;
var inst_20950 = null;
var inst_20951 = (0);
var inst_20952 = (0);
var state_21008__$1 = (function (){var statearr_21028 = state_21008;
(statearr_21028[(12)] = inst_20951);

(statearr_21028[(13)] = inst_20974);

(statearr_21028[(14)] = inst_20952);

(statearr_21028[(15)] = inst_20950);

(statearr_21028[(16)] = inst_20949);

return statearr_21028;
})();
var statearr_21029_21076 = state_21008__$1;
(statearr_21029_21076[(2)] = null);

(statearr_21029_21076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (3))){
var inst_21006 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21008__$1,inst_21006);
} else {
if((state_val_21009 === (12))){
var inst_20983 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21030_21077 = state_21008__$1;
(statearr_21030_21077[(2)] = inst_20983);

(statearr_21030_21077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (2))){
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21008__$1,(4),ch);
} else {
if((state_val_21009 === (23))){
var state_21008__$1 = state_21008;
var statearr_21031_21078 = state_21008__$1;
(statearr_21031_21078[(2)] = null);

(statearr_21031_21078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (19))){
var inst_20989 = (state_21008[(11)]);
var inst_20939 = (state_21008[(8)]);
var inst_20991 = cljs.core.async.muxch_STAR_.call(null,inst_20989);
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21008__$1,(22),inst_20991,inst_20939);
} else {
if((state_val_21009 === (11))){
var inst_20963 = (state_21008[(10)]);
var inst_20949 = (state_21008[(16)]);
var inst_20963__$1 = cljs.core.seq.call(null,inst_20949);
var state_21008__$1 = (function (){var statearr_21032 = state_21008;
(statearr_21032[(10)] = inst_20963__$1);

return statearr_21032;
})();
if(inst_20963__$1){
var statearr_21033_21079 = state_21008__$1;
(statearr_21033_21079[(1)] = (13));

} else {
var statearr_21034_21080 = state_21008__$1;
(statearr_21034_21080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (9))){
var inst_20985 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21035_21081 = state_21008__$1;
(statearr_21035_21081[(2)] = inst_20985);

(statearr_21035_21081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (5))){
var inst_20946 = cljs.core.deref.call(null,mults);
var inst_20947 = cljs.core.vals.call(null,inst_20946);
var inst_20948 = cljs.core.seq.call(null,inst_20947);
var inst_20949 = inst_20948;
var inst_20950 = null;
var inst_20951 = (0);
var inst_20952 = (0);
var state_21008__$1 = (function (){var statearr_21036 = state_21008;
(statearr_21036[(12)] = inst_20951);

(statearr_21036[(14)] = inst_20952);

(statearr_21036[(15)] = inst_20950);

(statearr_21036[(16)] = inst_20949);

return statearr_21036;
})();
var statearr_21037_21082 = state_21008__$1;
(statearr_21037_21082[(2)] = null);

(statearr_21037_21082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (14))){
var state_21008__$1 = state_21008;
var statearr_21041_21083 = state_21008__$1;
(statearr_21041_21083[(2)] = null);

(statearr_21041_21083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (16))){
var inst_20963 = (state_21008[(10)]);
var inst_20967 = cljs.core.chunk_first.call(null,inst_20963);
var inst_20968 = cljs.core.chunk_rest.call(null,inst_20963);
var inst_20969 = cljs.core.count.call(null,inst_20967);
var inst_20949 = inst_20968;
var inst_20950 = inst_20967;
var inst_20951 = inst_20969;
var inst_20952 = (0);
var state_21008__$1 = (function (){var statearr_21042 = state_21008;
(statearr_21042[(12)] = inst_20951);

(statearr_21042[(14)] = inst_20952);

(statearr_21042[(15)] = inst_20950);

(statearr_21042[(16)] = inst_20949);

return statearr_21042;
})();
var statearr_21043_21084 = state_21008__$1;
(statearr_21043_21084[(2)] = null);

(statearr_21043_21084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (10))){
var inst_20951 = (state_21008[(12)]);
var inst_20952 = (state_21008[(14)]);
var inst_20950 = (state_21008[(15)]);
var inst_20949 = (state_21008[(16)]);
var inst_20957 = cljs.core._nth.call(null,inst_20950,inst_20952);
var inst_20958 = cljs.core.async.muxch_STAR_.call(null,inst_20957);
var inst_20959 = cljs.core.async.close_BANG_.call(null,inst_20958);
var inst_20960 = (inst_20952 + (1));
var tmp21038 = inst_20951;
var tmp21039 = inst_20950;
var tmp21040 = inst_20949;
var inst_20949__$1 = tmp21040;
var inst_20950__$1 = tmp21039;
var inst_20951__$1 = tmp21038;
var inst_20952__$1 = inst_20960;
var state_21008__$1 = (function (){var statearr_21044 = state_21008;
(statearr_21044[(12)] = inst_20951__$1);

(statearr_21044[(14)] = inst_20952__$1);

(statearr_21044[(15)] = inst_20950__$1);

(statearr_21044[(16)] = inst_20949__$1);

(statearr_21044[(17)] = inst_20959);

return statearr_21044;
})();
var statearr_21045_21085 = state_21008__$1;
(statearr_21045_21085[(2)] = null);

(statearr_21045_21085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (18))){
var inst_20978 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21046_21086 = state_21008__$1;
(statearr_21046_21086[(2)] = inst_20978);

(statearr_21046_21086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (8))){
var inst_20951 = (state_21008[(12)]);
var inst_20952 = (state_21008[(14)]);
var inst_20954 = (inst_20952 < inst_20951);
var inst_20955 = inst_20954;
var state_21008__$1 = state_21008;
if(cljs.core.truth_(inst_20955)){
var statearr_21047_21087 = state_21008__$1;
(statearr_21047_21087[(1)] = (10));

} else {
var statearr_21048_21088 = state_21008__$1;
(statearr_21048_21088[(1)] = (11));

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
});})(c__19161__auto___21060,mults,ensure_mult,p))
;
return ((function (switch__19049__auto__,c__19161__auto___21060,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21052[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21052[(1)] = (1));

return statearr_21052;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21008){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21053){if((e21053 instanceof Object)){
var ex__19053__auto__ = e21053;
var statearr_21054_21089 = state_21008;
(statearr_21054_21089[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21090 = state_21008;
state_21008 = G__21090;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21060,mults,ensure_mult,p))
})();
var state__19163__auto__ = (function (){var statearr_21055 = f__19162__auto__.call(null);
(statearr_21055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21060);

return statearr_21055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21060,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21091 = [];
var len__17898__auto___21094 = arguments.length;
var i__17899__auto___21095 = (0);
while(true){
if((i__17899__auto___21095 < len__17898__auto___21094)){
args21091.push((arguments[i__17899__auto___21095]));

var G__21096 = (i__17899__auto___21095 + (1));
i__17899__auto___21095 = G__21096;
continue;
} else {
}
break;
}

var G__21093 = args21091.length;
switch (G__21093) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21091.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21098 = [];
var len__17898__auto___21101 = arguments.length;
var i__17899__auto___21102 = (0);
while(true){
if((i__17899__auto___21102 < len__17898__auto___21101)){
args21098.push((arguments[i__17899__auto___21102]));

var G__21103 = (i__17899__auto___21102 + (1));
i__17899__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var G__21100 = args21098.length;
switch (G__21100) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21098.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21105 = [];
var len__17898__auto___21176 = arguments.length;
var i__17899__auto___21177 = (0);
while(true){
if((i__17899__auto___21177 < len__17898__auto___21176)){
args21105.push((arguments[i__17899__auto___21177]));

var G__21178 = (i__17899__auto___21177 + (1));
i__17899__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var G__21107 = args21105.length;
switch (G__21107) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21105.length)].join('')));

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
var c__19161__auto___21180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21146){
var state_val_21147 = (state_21146[(1)]);
if((state_val_21147 === (7))){
var state_21146__$1 = state_21146;
var statearr_21148_21181 = state_21146__$1;
(statearr_21148_21181[(2)] = null);

(statearr_21148_21181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (1))){
var state_21146__$1 = state_21146;
var statearr_21149_21182 = state_21146__$1;
(statearr_21149_21182[(2)] = null);

(statearr_21149_21182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (4))){
var inst_21110 = (state_21146[(7)]);
var inst_21112 = (inst_21110 < cnt);
var state_21146__$1 = state_21146;
if(cljs.core.truth_(inst_21112)){
var statearr_21150_21183 = state_21146__$1;
(statearr_21150_21183[(1)] = (6));

} else {
var statearr_21151_21184 = state_21146__$1;
(statearr_21151_21184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (15))){
var inst_21142 = (state_21146[(2)]);
var state_21146__$1 = state_21146;
var statearr_21152_21185 = state_21146__$1;
(statearr_21152_21185[(2)] = inst_21142);

(statearr_21152_21185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (13))){
var inst_21135 = cljs.core.async.close_BANG_.call(null,out);
var state_21146__$1 = state_21146;
var statearr_21153_21186 = state_21146__$1;
(statearr_21153_21186[(2)] = inst_21135);

(statearr_21153_21186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (6))){
var state_21146__$1 = state_21146;
var statearr_21154_21187 = state_21146__$1;
(statearr_21154_21187[(2)] = null);

(statearr_21154_21187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (3))){
var inst_21144 = (state_21146[(2)]);
var state_21146__$1 = state_21146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21146__$1,inst_21144);
} else {
if((state_val_21147 === (12))){
var inst_21132 = (state_21146[(8)]);
var inst_21132__$1 = (state_21146[(2)]);
var inst_21133 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21132__$1);
var state_21146__$1 = (function (){var statearr_21155 = state_21146;
(statearr_21155[(8)] = inst_21132__$1);

return statearr_21155;
})();
if(cljs.core.truth_(inst_21133)){
var statearr_21156_21188 = state_21146__$1;
(statearr_21156_21188[(1)] = (13));

} else {
var statearr_21157_21189 = state_21146__$1;
(statearr_21157_21189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (2))){
var inst_21109 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21110 = (0);
var state_21146__$1 = (function (){var statearr_21158 = state_21146;
(statearr_21158[(9)] = inst_21109);

(statearr_21158[(7)] = inst_21110);

return statearr_21158;
})();
var statearr_21159_21190 = state_21146__$1;
(statearr_21159_21190[(2)] = null);

(statearr_21159_21190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (11))){
var inst_21110 = (state_21146[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21146,(10),Object,null,(9));
var inst_21119 = chs__$1.call(null,inst_21110);
var inst_21120 = done.call(null,inst_21110);
var inst_21121 = cljs.core.async.take_BANG_.call(null,inst_21119,inst_21120);
var state_21146__$1 = state_21146;
var statearr_21160_21191 = state_21146__$1;
(statearr_21160_21191[(2)] = inst_21121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (9))){
var inst_21110 = (state_21146[(7)]);
var inst_21123 = (state_21146[(2)]);
var inst_21124 = (inst_21110 + (1));
var inst_21110__$1 = inst_21124;
var state_21146__$1 = (function (){var statearr_21161 = state_21146;
(statearr_21161[(10)] = inst_21123);

(statearr_21161[(7)] = inst_21110__$1);

return statearr_21161;
})();
var statearr_21162_21192 = state_21146__$1;
(statearr_21162_21192[(2)] = null);

(statearr_21162_21192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (5))){
var inst_21130 = (state_21146[(2)]);
var state_21146__$1 = (function (){var statearr_21163 = state_21146;
(statearr_21163[(11)] = inst_21130);

return statearr_21163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21146__$1,(12),dchan);
} else {
if((state_val_21147 === (14))){
var inst_21132 = (state_21146[(8)]);
var inst_21137 = cljs.core.apply.call(null,f,inst_21132);
var state_21146__$1 = state_21146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21146__$1,(16),out,inst_21137);
} else {
if((state_val_21147 === (16))){
var inst_21139 = (state_21146[(2)]);
var state_21146__$1 = (function (){var statearr_21164 = state_21146;
(statearr_21164[(12)] = inst_21139);

return statearr_21164;
})();
var statearr_21165_21193 = state_21146__$1;
(statearr_21165_21193[(2)] = null);

(statearr_21165_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (10))){
var inst_21114 = (state_21146[(2)]);
var inst_21115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21146__$1 = (function (){var statearr_21166 = state_21146;
(statearr_21166[(13)] = inst_21114);

return statearr_21166;
})();
var statearr_21167_21194 = state_21146__$1;
(statearr_21167_21194[(2)] = inst_21115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21147 === (8))){
var inst_21128 = (state_21146[(2)]);
var state_21146__$1 = state_21146;
var statearr_21168_21195 = state_21146__$1;
(statearr_21168_21195[(2)] = inst_21128);

(statearr_21168_21195[(1)] = (5));


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
});})(c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19049__auto__,c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21172[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21172[(1)] = (1));

return statearr_21172;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21146){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21173){if((e21173 instanceof Object)){
var ex__19053__auto__ = e21173;
var statearr_21174_21196 = state_21146;
(statearr_21174_21196[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21197 = state_21146;
state_21146 = G__21197;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19163__auto__ = (function (){var statearr_21175 = f__19162__auto__.call(null);
(statearr_21175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21180);

return statearr_21175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21180,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21199 = [];
var len__17898__auto___21255 = arguments.length;
var i__17899__auto___21256 = (0);
while(true){
if((i__17899__auto___21256 < len__17898__auto___21255)){
args21199.push((arguments[i__17899__auto___21256]));

var G__21257 = (i__17899__auto___21256 + (1));
i__17899__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var G__21201 = args21199.length;
switch (G__21201) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21199.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21259,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21259,out){
return (function (state_21231){
var state_val_21232 = (state_21231[(1)]);
if((state_val_21232 === (7))){
var inst_21211 = (state_21231[(7)]);
var inst_21210 = (state_21231[(8)]);
var inst_21210__$1 = (state_21231[(2)]);
var inst_21211__$1 = cljs.core.nth.call(null,inst_21210__$1,(0),null);
var inst_21212 = cljs.core.nth.call(null,inst_21210__$1,(1),null);
var inst_21213 = (inst_21211__$1 == null);
var state_21231__$1 = (function (){var statearr_21233 = state_21231;
(statearr_21233[(7)] = inst_21211__$1);

(statearr_21233[(9)] = inst_21212);

(statearr_21233[(8)] = inst_21210__$1);

return statearr_21233;
})();
if(cljs.core.truth_(inst_21213)){
var statearr_21234_21260 = state_21231__$1;
(statearr_21234_21260[(1)] = (8));

} else {
var statearr_21235_21261 = state_21231__$1;
(statearr_21235_21261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (1))){
var inst_21202 = cljs.core.vec.call(null,chs);
var inst_21203 = inst_21202;
var state_21231__$1 = (function (){var statearr_21236 = state_21231;
(statearr_21236[(10)] = inst_21203);

return statearr_21236;
})();
var statearr_21237_21262 = state_21231__$1;
(statearr_21237_21262[(2)] = null);

(statearr_21237_21262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (4))){
var inst_21203 = (state_21231[(10)]);
var state_21231__$1 = state_21231;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21231__$1,(7),inst_21203);
} else {
if((state_val_21232 === (6))){
var inst_21227 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
var statearr_21238_21263 = state_21231__$1;
(statearr_21238_21263[(2)] = inst_21227);

(statearr_21238_21263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (3))){
var inst_21229 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21231__$1,inst_21229);
} else {
if((state_val_21232 === (2))){
var inst_21203 = (state_21231[(10)]);
var inst_21205 = cljs.core.count.call(null,inst_21203);
var inst_21206 = (inst_21205 > (0));
var state_21231__$1 = state_21231;
if(cljs.core.truth_(inst_21206)){
var statearr_21240_21264 = state_21231__$1;
(statearr_21240_21264[(1)] = (4));

} else {
var statearr_21241_21265 = state_21231__$1;
(statearr_21241_21265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (11))){
var inst_21203 = (state_21231[(10)]);
var inst_21220 = (state_21231[(2)]);
var tmp21239 = inst_21203;
var inst_21203__$1 = tmp21239;
var state_21231__$1 = (function (){var statearr_21242 = state_21231;
(statearr_21242[(10)] = inst_21203__$1);

(statearr_21242[(11)] = inst_21220);

return statearr_21242;
})();
var statearr_21243_21266 = state_21231__$1;
(statearr_21243_21266[(2)] = null);

(statearr_21243_21266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (9))){
var inst_21211 = (state_21231[(7)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21231__$1,(11),out,inst_21211);
} else {
if((state_val_21232 === (5))){
var inst_21225 = cljs.core.async.close_BANG_.call(null,out);
var state_21231__$1 = state_21231;
var statearr_21244_21267 = state_21231__$1;
(statearr_21244_21267[(2)] = inst_21225);

(statearr_21244_21267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (10))){
var inst_21223 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
var statearr_21245_21268 = state_21231__$1;
(statearr_21245_21268[(2)] = inst_21223);

(statearr_21245_21268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (8))){
var inst_21203 = (state_21231[(10)]);
var inst_21211 = (state_21231[(7)]);
var inst_21212 = (state_21231[(9)]);
var inst_21210 = (state_21231[(8)]);
var inst_21215 = (function (){var cs = inst_21203;
var vec__21208 = inst_21210;
var v = inst_21211;
var c = inst_21212;
return ((function (cs,vec__21208,v,c,inst_21203,inst_21211,inst_21212,inst_21210,state_val_21232,c__19161__auto___21259,out){
return (function (p1__21198_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21198_SHARP_);
});
;})(cs,vec__21208,v,c,inst_21203,inst_21211,inst_21212,inst_21210,state_val_21232,c__19161__auto___21259,out))
})();
var inst_21216 = cljs.core.filterv.call(null,inst_21215,inst_21203);
var inst_21203__$1 = inst_21216;
var state_21231__$1 = (function (){var statearr_21246 = state_21231;
(statearr_21246[(10)] = inst_21203__$1);

return statearr_21246;
})();
var statearr_21247_21269 = state_21231__$1;
(statearr_21247_21269[(2)] = null);

(statearr_21247_21269[(1)] = (2));


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
});})(c__19161__auto___21259,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21259,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21251[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21251[(1)] = (1));

return statearr_21251;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21231){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21252){if((e21252 instanceof Object)){
var ex__19053__auto__ = e21252;
var statearr_21253_21270 = state_21231;
(statearr_21253_21270[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21271 = state_21231;
state_21231 = G__21271;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21259,out))
})();
var state__19163__auto__ = (function (){var statearr_21254 = f__19162__auto__.call(null);
(statearr_21254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21259);

return statearr_21254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21259,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21272 = [];
var len__17898__auto___21321 = arguments.length;
var i__17899__auto___21322 = (0);
while(true){
if((i__17899__auto___21322 < len__17898__auto___21321)){
args21272.push((arguments[i__17899__auto___21322]));

var G__21323 = (i__17899__auto___21322 + (1));
i__17899__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var G__21274 = args21272.length;
switch (G__21274) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21272.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21325,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21325,out){
return (function (state_21298){
var state_val_21299 = (state_21298[(1)]);
if((state_val_21299 === (7))){
var inst_21280 = (state_21298[(7)]);
var inst_21280__$1 = (state_21298[(2)]);
var inst_21281 = (inst_21280__$1 == null);
var inst_21282 = cljs.core.not.call(null,inst_21281);
var state_21298__$1 = (function (){var statearr_21300 = state_21298;
(statearr_21300[(7)] = inst_21280__$1);

return statearr_21300;
})();
if(inst_21282){
var statearr_21301_21326 = state_21298__$1;
(statearr_21301_21326[(1)] = (8));

} else {
var statearr_21302_21327 = state_21298__$1;
(statearr_21302_21327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (1))){
var inst_21275 = (0);
var state_21298__$1 = (function (){var statearr_21303 = state_21298;
(statearr_21303[(8)] = inst_21275);

return statearr_21303;
})();
var statearr_21304_21328 = state_21298__$1;
(statearr_21304_21328[(2)] = null);

(statearr_21304_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (4))){
var state_21298__$1 = state_21298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21298__$1,(7),ch);
} else {
if((state_val_21299 === (6))){
var inst_21293 = (state_21298[(2)]);
var state_21298__$1 = state_21298;
var statearr_21305_21329 = state_21298__$1;
(statearr_21305_21329[(2)] = inst_21293);

(statearr_21305_21329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (3))){
var inst_21295 = (state_21298[(2)]);
var inst_21296 = cljs.core.async.close_BANG_.call(null,out);
var state_21298__$1 = (function (){var statearr_21306 = state_21298;
(statearr_21306[(9)] = inst_21295);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21298__$1,inst_21296);
} else {
if((state_val_21299 === (2))){
var inst_21275 = (state_21298[(8)]);
var inst_21277 = (inst_21275 < n);
var state_21298__$1 = state_21298;
if(cljs.core.truth_(inst_21277)){
var statearr_21307_21330 = state_21298__$1;
(statearr_21307_21330[(1)] = (4));

} else {
var statearr_21308_21331 = state_21298__$1;
(statearr_21308_21331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (11))){
var inst_21275 = (state_21298[(8)]);
var inst_21285 = (state_21298[(2)]);
var inst_21286 = (inst_21275 + (1));
var inst_21275__$1 = inst_21286;
var state_21298__$1 = (function (){var statearr_21309 = state_21298;
(statearr_21309[(8)] = inst_21275__$1);

(statearr_21309[(10)] = inst_21285);

return statearr_21309;
})();
var statearr_21310_21332 = state_21298__$1;
(statearr_21310_21332[(2)] = null);

(statearr_21310_21332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (9))){
var state_21298__$1 = state_21298;
var statearr_21311_21333 = state_21298__$1;
(statearr_21311_21333[(2)] = null);

(statearr_21311_21333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (5))){
var state_21298__$1 = state_21298;
var statearr_21312_21334 = state_21298__$1;
(statearr_21312_21334[(2)] = null);

(statearr_21312_21334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (10))){
var inst_21290 = (state_21298[(2)]);
var state_21298__$1 = state_21298;
var statearr_21313_21335 = state_21298__$1;
(statearr_21313_21335[(2)] = inst_21290);

(statearr_21313_21335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21299 === (8))){
var inst_21280 = (state_21298[(7)]);
var state_21298__$1 = state_21298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21298__$1,(11),out,inst_21280);
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
});})(c__19161__auto___21325,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21325,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21317[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21317[(1)] = (1));

return statearr_21317;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21298){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21318){if((e21318 instanceof Object)){
var ex__19053__auto__ = e21318;
var statearr_21319_21336 = state_21298;
(statearr_21319_21336[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21337 = state_21298;
state_21298 = G__21337;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21325,out))
})();
var state__19163__auto__ = (function (){var statearr_21320 = f__19162__auto__.call(null);
(statearr_21320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21325);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21325,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21345 = (function (map_LT_,f,ch,meta21346){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21346 = meta21346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21347,meta21346__$1){
var self__ = this;
var _21347__$1 = this;
return (new cljs.core.async.t_cljs$core$async21345(self__.map_LT_,self__.f,self__.ch,meta21346__$1));
});

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21347){
var self__ = this;
var _21347__$1 = this;
return self__.meta21346;
});

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21348 = (function (map_LT_,f,ch,meta21346,_,fn1,meta21349){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21346 = meta21346;
this._ = _;
this.fn1 = fn1;
this.meta21349 = meta21349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21350,meta21349__$1){
var self__ = this;
var _21350__$1 = this;
return (new cljs.core.async.t_cljs$core$async21348(self__.map_LT_,self__.f,self__.ch,self__.meta21346,self__._,self__.fn1,meta21349__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21350){
var self__ = this;
var _21350__$1 = this;
return self__.meta21349;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21338_SHARP_){
return f1.call(null,(((p1__21338_SHARP_ == null))?null:self__.f.call(null,p1__21338_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21346","meta21346",1671840281,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21345","cljs.core.async/t_cljs$core$async21345",49605607,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21349","meta21349",642445498,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21348";

cljs.core.async.t_cljs$core$async21348.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21348");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21348 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21348(map_LT___$1,f__$1,ch__$1,meta21346__$1,___$2,fn1__$1,meta21349){
return (new cljs.core.async.t_cljs$core$async21348(map_LT___$1,f__$1,ch__$1,meta21346__$1,___$2,fn1__$1,meta21349));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21348(self__.map_LT_,self__.f,self__.ch,self__.meta21346,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16828__auto__ = ret;
if(cljs.core.truth_(and__16828__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16828__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21346","meta21346",1671840281,null)], null);
});

cljs.core.async.t_cljs$core$async21345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21345";

cljs.core.async.t_cljs$core$async21345.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21345");
});

cljs.core.async.__GT_t_cljs$core$async21345 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21345(map_LT___$1,f__$1,ch__$1,meta21346){
return (new cljs.core.async.t_cljs$core$async21345(map_LT___$1,f__$1,ch__$1,meta21346));
});

}

return (new cljs.core.async.t_cljs$core$async21345(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21354 = (function (map_GT_,f,ch,meta21355){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21355 = meta21355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21356,meta21355__$1){
var self__ = this;
var _21356__$1 = this;
return (new cljs.core.async.t_cljs$core$async21354(self__.map_GT_,self__.f,self__.ch,meta21355__$1));
});

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21356){
var self__ = this;
var _21356__$1 = this;
return self__.meta21355;
});

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21355","meta21355",106253380,null)], null);
});

cljs.core.async.t_cljs$core$async21354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21354";

cljs.core.async.t_cljs$core$async21354.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21354");
});

cljs.core.async.__GT_t_cljs$core$async21354 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21354(map_GT___$1,f__$1,ch__$1,meta21355){
return (new cljs.core.async.t_cljs$core$async21354(map_GT___$1,f__$1,ch__$1,meta21355));
});

}

return (new cljs.core.async.t_cljs$core$async21354(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21360 = (function (filter_GT_,p,ch,meta21361){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21361 = meta21361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21362,meta21361__$1){
var self__ = this;
var _21362__$1 = this;
return (new cljs.core.async.t_cljs$core$async21360(self__.filter_GT_,self__.p,self__.ch,meta21361__$1));
});

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21362){
var self__ = this;
var _21362__$1 = this;
return self__.meta21361;
});

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21361","meta21361",595551271,null)], null);
});

cljs.core.async.t_cljs$core$async21360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21360";

cljs.core.async.t_cljs$core$async21360.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21360");
});

cljs.core.async.__GT_t_cljs$core$async21360 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21360(filter_GT___$1,p__$1,ch__$1,meta21361){
return (new cljs.core.async.t_cljs$core$async21360(filter_GT___$1,p__$1,ch__$1,meta21361));
});

}

return (new cljs.core.async.t_cljs$core$async21360(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21363 = [];
var len__17898__auto___21407 = arguments.length;
var i__17899__auto___21408 = (0);
while(true){
if((i__17899__auto___21408 < len__17898__auto___21407)){
args21363.push((arguments[i__17899__auto___21408]));

var G__21409 = (i__17899__auto___21408 + (1));
i__17899__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var G__21365 = args21363.length;
switch (G__21365) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21363.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21411,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21411,out){
return (function (state_21386){
var state_val_21387 = (state_21386[(1)]);
if((state_val_21387 === (7))){
var inst_21382 = (state_21386[(2)]);
var state_21386__$1 = state_21386;
var statearr_21388_21412 = state_21386__$1;
(statearr_21388_21412[(2)] = inst_21382);

(statearr_21388_21412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (1))){
var state_21386__$1 = state_21386;
var statearr_21389_21413 = state_21386__$1;
(statearr_21389_21413[(2)] = null);

(statearr_21389_21413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (4))){
var inst_21368 = (state_21386[(7)]);
var inst_21368__$1 = (state_21386[(2)]);
var inst_21369 = (inst_21368__$1 == null);
var state_21386__$1 = (function (){var statearr_21390 = state_21386;
(statearr_21390[(7)] = inst_21368__$1);

return statearr_21390;
})();
if(cljs.core.truth_(inst_21369)){
var statearr_21391_21414 = state_21386__$1;
(statearr_21391_21414[(1)] = (5));

} else {
var statearr_21392_21415 = state_21386__$1;
(statearr_21392_21415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (6))){
var inst_21368 = (state_21386[(7)]);
var inst_21373 = p.call(null,inst_21368);
var state_21386__$1 = state_21386;
if(cljs.core.truth_(inst_21373)){
var statearr_21393_21416 = state_21386__$1;
(statearr_21393_21416[(1)] = (8));

} else {
var statearr_21394_21417 = state_21386__$1;
(statearr_21394_21417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (3))){
var inst_21384 = (state_21386[(2)]);
var state_21386__$1 = state_21386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21386__$1,inst_21384);
} else {
if((state_val_21387 === (2))){
var state_21386__$1 = state_21386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21386__$1,(4),ch);
} else {
if((state_val_21387 === (11))){
var inst_21376 = (state_21386[(2)]);
var state_21386__$1 = state_21386;
var statearr_21395_21418 = state_21386__$1;
(statearr_21395_21418[(2)] = inst_21376);

(statearr_21395_21418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (9))){
var state_21386__$1 = state_21386;
var statearr_21396_21419 = state_21386__$1;
(statearr_21396_21419[(2)] = null);

(statearr_21396_21419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (5))){
var inst_21371 = cljs.core.async.close_BANG_.call(null,out);
var state_21386__$1 = state_21386;
var statearr_21397_21420 = state_21386__$1;
(statearr_21397_21420[(2)] = inst_21371);

(statearr_21397_21420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (10))){
var inst_21379 = (state_21386[(2)]);
var state_21386__$1 = (function (){var statearr_21398 = state_21386;
(statearr_21398[(8)] = inst_21379);

return statearr_21398;
})();
var statearr_21399_21421 = state_21386__$1;
(statearr_21399_21421[(2)] = null);

(statearr_21399_21421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21387 === (8))){
var inst_21368 = (state_21386[(7)]);
var state_21386__$1 = state_21386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21386__$1,(11),out,inst_21368);
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
});})(c__19161__auto___21411,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21411,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21386){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__19053__auto__ = e21404;
var statearr_21405_21422 = state_21386;
(statearr_21405_21422[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21423 = state_21386;
state_21386 = G__21423;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21411,out))
})();
var state__19163__auto__ = (function (){var statearr_21406 = f__19162__auto__.call(null);
(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21411);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21411,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21424 = [];
var len__17898__auto___21427 = arguments.length;
var i__17899__auto___21428 = (0);
while(true){
if((i__17899__auto___21428 < len__17898__auto___21427)){
args21424.push((arguments[i__17899__auto___21428]));

var G__21429 = (i__17899__auto___21428 + (1));
i__17899__auto___21428 = G__21429;
continue;
} else {
}
break;
}

var G__21426 = args21424.length;
switch (G__21426) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21424.length)].join('')));

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
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_21596){
var state_val_21597 = (state_21596[(1)]);
if((state_val_21597 === (7))){
var inst_21592 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21598_21639 = state_21596__$1;
(statearr_21598_21639[(2)] = inst_21592);

(statearr_21598_21639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (20))){
var inst_21562 = (state_21596[(7)]);
var inst_21573 = (state_21596[(2)]);
var inst_21574 = cljs.core.next.call(null,inst_21562);
var inst_21548 = inst_21574;
var inst_21549 = null;
var inst_21550 = (0);
var inst_21551 = (0);
var state_21596__$1 = (function (){var statearr_21599 = state_21596;
(statearr_21599[(8)] = inst_21548);

(statearr_21599[(9)] = inst_21550);

(statearr_21599[(10)] = inst_21573);

(statearr_21599[(11)] = inst_21551);

(statearr_21599[(12)] = inst_21549);

return statearr_21599;
})();
var statearr_21600_21640 = state_21596__$1;
(statearr_21600_21640[(2)] = null);

(statearr_21600_21640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (1))){
var state_21596__$1 = state_21596;
var statearr_21601_21641 = state_21596__$1;
(statearr_21601_21641[(2)] = null);

(statearr_21601_21641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (4))){
var inst_21537 = (state_21596[(13)]);
var inst_21537__$1 = (state_21596[(2)]);
var inst_21538 = (inst_21537__$1 == null);
var state_21596__$1 = (function (){var statearr_21602 = state_21596;
(statearr_21602[(13)] = inst_21537__$1);

return statearr_21602;
})();
if(cljs.core.truth_(inst_21538)){
var statearr_21603_21642 = state_21596__$1;
(statearr_21603_21642[(1)] = (5));

} else {
var statearr_21604_21643 = state_21596__$1;
(statearr_21604_21643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (15))){
var state_21596__$1 = state_21596;
var statearr_21608_21644 = state_21596__$1;
(statearr_21608_21644[(2)] = null);

(statearr_21608_21644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (21))){
var state_21596__$1 = state_21596;
var statearr_21609_21645 = state_21596__$1;
(statearr_21609_21645[(2)] = null);

(statearr_21609_21645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (13))){
var inst_21548 = (state_21596[(8)]);
var inst_21550 = (state_21596[(9)]);
var inst_21551 = (state_21596[(11)]);
var inst_21549 = (state_21596[(12)]);
var inst_21558 = (state_21596[(2)]);
var inst_21559 = (inst_21551 + (1));
var tmp21605 = inst_21548;
var tmp21606 = inst_21550;
var tmp21607 = inst_21549;
var inst_21548__$1 = tmp21605;
var inst_21549__$1 = tmp21607;
var inst_21550__$1 = tmp21606;
var inst_21551__$1 = inst_21559;
var state_21596__$1 = (function (){var statearr_21610 = state_21596;
(statearr_21610[(8)] = inst_21548__$1);

(statearr_21610[(9)] = inst_21550__$1);

(statearr_21610[(14)] = inst_21558);

(statearr_21610[(11)] = inst_21551__$1);

(statearr_21610[(12)] = inst_21549__$1);

return statearr_21610;
})();
var statearr_21611_21646 = state_21596__$1;
(statearr_21611_21646[(2)] = null);

(statearr_21611_21646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (22))){
var state_21596__$1 = state_21596;
var statearr_21612_21647 = state_21596__$1;
(statearr_21612_21647[(2)] = null);

(statearr_21612_21647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (6))){
var inst_21537 = (state_21596[(13)]);
var inst_21546 = f.call(null,inst_21537);
var inst_21547 = cljs.core.seq.call(null,inst_21546);
var inst_21548 = inst_21547;
var inst_21549 = null;
var inst_21550 = (0);
var inst_21551 = (0);
var state_21596__$1 = (function (){var statearr_21613 = state_21596;
(statearr_21613[(8)] = inst_21548);

(statearr_21613[(9)] = inst_21550);

(statearr_21613[(11)] = inst_21551);

(statearr_21613[(12)] = inst_21549);

return statearr_21613;
})();
var statearr_21614_21648 = state_21596__$1;
(statearr_21614_21648[(2)] = null);

(statearr_21614_21648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (17))){
var inst_21562 = (state_21596[(7)]);
var inst_21566 = cljs.core.chunk_first.call(null,inst_21562);
var inst_21567 = cljs.core.chunk_rest.call(null,inst_21562);
var inst_21568 = cljs.core.count.call(null,inst_21566);
var inst_21548 = inst_21567;
var inst_21549 = inst_21566;
var inst_21550 = inst_21568;
var inst_21551 = (0);
var state_21596__$1 = (function (){var statearr_21615 = state_21596;
(statearr_21615[(8)] = inst_21548);

(statearr_21615[(9)] = inst_21550);

(statearr_21615[(11)] = inst_21551);

(statearr_21615[(12)] = inst_21549);

return statearr_21615;
})();
var statearr_21616_21649 = state_21596__$1;
(statearr_21616_21649[(2)] = null);

(statearr_21616_21649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (3))){
var inst_21594 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21596__$1,inst_21594);
} else {
if((state_val_21597 === (12))){
var inst_21582 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21617_21650 = state_21596__$1;
(statearr_21617_21650[(2)] = inst_21582);

(statearr_21617_21650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (2))){
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(4),in$);
} else {
if((state_val_21597 === (23))){
var inst_21590 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21618_21651 = state_21596__$1;
(statearr_21618_21651[(2)] = inst_21590);

(statearr_21618_21651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (19))){
var inst_21577 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21619_21652 = state_21596__$1;
(statearr_21619_21652[(2)] = inst_21577);

(statearr_21619_21652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (11))){
var inst_21548 = (state_21596[(8)]);
var inst_21562 = (state_21596[(7)]);
var inst_21562__$1 = cljs.core.seq.call(null,inst_21548);
var state_21596__$1 = (function (){var statearr_21620 = state_21596;
(statearr_21620[(7)] = inst_21562__$1);

return statearr_21620;
})();
if(inst_21562__$1){
var statearr_21621_21653 = state_21596__$1;
(statearr_21621_21653[(1)] = (14));

} else {
var statearr_21622_21654 = state_21596__$1;
(statearr_21622_21654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (9))){
var inst_21584 = (state_21596[(2)]);
var inst_21585 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21596__$1 = (function (){var statearr_21623 = state_21596;
(statearr_21623[(15)] = inst_21584);

return statearr_21623;
})();
if(cljs.core.truth_(inst_21585)){
var statearr_21624_21655 = state_21596__$1;
(statearr_21624_21655[(1)] = (21));

} else {
var statearr_21625_21656 = state_21596__$1;
(statearr_21625_21656[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (5))){
var inst_21540 = cljs.core.async.close_BANG_.call(null,out);
var state_21596__$1 = state_21596;
var statearr_21626_21657 = state_21596__$1;
(statearr_21626_21657[(2)] = inst_21540);

(statearr_21626_21657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (14))){
var inst_21562 = (state_21596[(7)]);
var inst_21564 = cljs.core.chunked_seq_QMARK_.call(null,inst_21562);
var state_21596__$1 = state_21596;
if(inst_21564){
var statearr_21627_21658 = state_21596__$1;
(statearr_21627_21658[(1)] = (17));

} else {
var statearr_21628_21659 = state_21596__$1;
(statearr_21628_21659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (16))){
var inst_21580 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21629_21660 = state_21596__$1;
(statearr_21629_21660[(2)] = inst_21580);

(statearr_21629_21660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (10))){
var inst_21551 = (state_21596[(11)]);
var inst_21549 = (state_21596[(12)]);
var inst_21556 = cljs.core._nth.call(null,inst_21549,inst_21551);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21596__$1,(13),out,inst_21556);
} else {
if((state_val_21597 === (18))){
var inst_21562 = (state_21596[(7)]);
var inst_21571 = cljs.core.first.call(null,inst_21562);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21596__$1,(20),out,inst_21571);
} else {
if((state_val_21597 === (8))){
var inst_21550 = (state_21596[(9)]);
var inst_21551 = (state_21596[(11)]);
var inst_21553 = (inst_21551 < inst_21550);
var inst_21554 = inst_21553;
var state_21596__$1 = state_21596;
if(cljs.core.truth_(inst_21554)){
var statearr_21630_21661 = state_21596__$1;
(statearr_21630_21661[(1)] = (10));

} else {
var statearr_21631_21662 = state_21596__$1;
(statearr_21631_21662[(1)] = (11));

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
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____0 = (function (){
var statearr_21635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21635[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__);

(statearr_21635[(1)] = (1));

return statearr_21635;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____1 = (function (state_21596){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21636){if((e21636 instanceof Object)){
var ex__19053__auto__ = e21636;
var statearr_21637_21663 = state_21596;
(statearr_21637_21663[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21664 = state_21596;
state_21596 = G__21664;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__ = function(state_21596){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____1.call(this,state_21596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19050__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_21638 = f__19162__auto__.call(null);
(statearr_21638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_21638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21665 = [];
var len__17898__auto___21668 = arguments.length;
var i__17899__auto___21669 = (0);
while(true){
if((i__17899__auto___21669 < len__17898__auto___21668)){
args21665.push((arguments[i__17899__auto___21669]));

var G__21670 = (i__17899__auto___21669 + (1));
i__17899__auto___21669 = G__21670;
continue;
} else {
}
break;
}

var G__21667 = args21665.length;
switch (G__21667) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21665.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21672 = [];
var len__17898__auto___21675 = arguments.length;
var i__17899__auto___21676 = (0);
while(true){
if((i__17899__auto___21676 < len__17898__auto___21675)){
args21672.push((arguments[i__17899__auto___21676]));

var G__21677 = (i__17899__auto___21676 + (1));
i__17899__auto___21676 = G__21677;
continue;
} else {
}
break;
}

var G__21674 = args21672.length;
switch (G__21674) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21672.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21679 = [];
var len__17898__auto___21730 = arguments.length;
var i__17899__auto___21731 = (0);
while(true){
if((i__17899__auto___21731 < len__17898__auto___21730)){
args21679.push((arguments[i__17899__auto___21731]));

var G__21732 = (i__17899__auto___21731 + (1));
i__17899__auto___21731 = G__21732;
continue;
} else {
}
break;
}

var G__21681 = args21679.length;
switch (G__21681) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21679.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21734,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21734,out){
return (function (state_21705){
var state_val_21706 = (state_21705[(1)]);
if((state_val_21706 === (7))){
var inst_21700 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21707_21735 = state_21705__$1;
(statearr_21707_21735[(2)] = inst_21700);

(statearr_21707_21735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (1))){
var inst_21682 = null;
var state_21705__$1 = (function (){var statearr_21708 = state_21705;
(statearr_21708[(7)] = inst_21682);

return statearr_21708;
})();
var statearr_21709_21736 = state_21705__$1;
(statearr_21709_21736[(2)] = null);

(statearr_21709_21736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (4))){
var inst_21685 = (state_21705[(8)]);
var inst_21685__$1 = (state_21705[(2)]);
var inst_21686 = (inst_21685__$1 == null);
var inst_21687 = cljs.core.not.call(null,inst_21686);
var state_21705__$1 = (function (){var statearr_21710 = state_21705;
(statearr_21710[(8)] = inst_21685__$1);

return statearr_21710;
})();
if(inst_21687){
var statearr_21711_21737 = state_21705__$1;
(statearr_21711_21737[(1)] = (5));

} else {
var statearr_21712_21738 = state_21705__$1;
(statearr_21712_21738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (6))){
var state_21705__$1 = state_21705;
var statearr_21713_21739 = state_21705__$1;
(statearr_21713_21739[(2)] = null);

(statearr_21713_21739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (3))){
var inst_21702 = (state_21705[(2)]);
var inst_21703 = cljs.core.async.close_BANG_.call(null,out);
var state_21705__$1 = (function (){var statearr_21714 = state_21705;
(statearr_21714[(9)] = inst_21702);

return statearr_21714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21705__$1,inst_21703);
} else {
if((state_val_21706 === (2))){
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21705__$1,(4),ch);
} else {
if((state_val_21706 === (11))){
var inst_21685 = (state_21705[(8)]);
var inst_21694 = (state_21705[(2)]);
var inst_21682 = inst_21685;
var state_21705__$1 = (function (){var statearr_21715 = state_21705;
(statearr_21715[(10)] = inst_21694);

(statearr_21715[(7)] = inst_21682);

return statearr_21715;
})();
var statearr_21716_21740 = state_21705__$1;
(statearr_21716_21740[(2)] = null);

(statearr_21716_21740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (9))){
var inst_21685 = (state_21705[(8)]);
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21705__$1,(11),out,inst_21685);
} else {
if((state_val_21706 === (5))){
var inst_21685 = (state_21705[(8)]);
var inst_21682 = (state_21705[(7)]);
var inst_21689 = cljs.core._EQ_.call(null,inst_21685,inst_21682);
var state_21705__$1 = state_21705;
if(inst_21689){
var statearr_21718_21741 = state_21705__$1;
(statearr_21718_21741[(1)] = (8));

} else {
var statearr_21719_21742 = state_21705__$1;
(statearr_21719_21742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (10))){
var inst_21697 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21720_21743 = state_21705__$1;
(statearr_21720_21743[(2)] = inst_21697);

(statearr_21720_21743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (8))){
var inst_21682 = (state_21705[(7)]);
var tmp21717 = inst_21682;
var inst_21682__$1 = tmp21717;
var state_21705__$1 = (function (){var statearr_21721 = state_21705;
(statearr_21721[(7)] = inst_21682__$1);

return statearr_21721;
})();
var statearr_21722_21744 = state_21705__$1;
(statearr_21722_21744[(2)] = null);

(statearr_21722_21744[(1)] = (2));


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
});})(c__19161__auto___21734,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21734,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21726[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21726[(1)] = (1));

return statearr_21726;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21705){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21727){if((e21727 instanceof Object)){
var ex__19053__auto__ = e21727;
var statearr_21728_21745 = state_21705;
(statearr_21728_21745[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21746 = state_21705;
state_21705 = G__21746;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21734,out))
})();
var state__19163__auto__ = (function (){var statearr_21729 = f__19162__auto__.call(null);
(statearr_21729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21734);

return statearr_21729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21734,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21747 = [];
var len__17898__auto___21817 = arguments.length;
var i__17899__auto___21818 = (0);
while(true){
if((i__17899__auto___21818 < len__17898__auto___21817)){
args21747.push((arguments[i__17899__auto___21818]));

var G__21819 = (i__17899__auto___21818 + (1));
i__17899__auto___21818 = G__21819;
continue;
} else {
}
break;
}

var G__21749 = args21747.length;
switch (G__21749) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21747.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21821,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21821,out){
return (function (state_21787){
var state_val_21788 = (state_21787[(1)]);
if((state_val_21788 === (7))){
var inst_21783 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21789_21822 = state_21787__$1;
(statearr_21789_21822[(2)] = inst_21783);

(statearr_21789_21822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (1))){
var inst_21750 = (new Array(n));
var inst_21751 = inst_21750;
var inst_21752 = (0);
var state_21787__$1 = (function (){var statearr_21790 = state_21787;
(statearr_21790[(7)] = inst_21752);

(statearr_21790[(8)] = inst_21751);

return statearr_21790;
})();
var statearr_21791_21823 = state_21787__$1;
(statearr_21791_21823[(2)] = null);

(statearr_21791_21823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (4))){
var inst_21755 = (state_21787[(9)]);
var inst_21755__$1 = (state_21787[(2)]);
var inst_21756 = (inst_21755__$1 == null);
var inst_21757 = cljs.core.not.call(null,inst_21756);
var state_21787__$1 = (function (){var statearr_21792 = state_21787;
(statearr_21792[(9)] = inst_21755__$1);

return statearr_21792;
})();
if(inst_21757){
var statearr_21793_21824 = state_21787__$1;
(statearr_21793_21824[(1)] = (5));

} else {
var statearr_21794_21825 = state_21787__$1;
(statearr_21794_21825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (15))){
var inst_21777 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21795_21826 = state_21787__$1;
(statearr_21795_21826[(2)] = inst_21777);

(statearr_21795_21826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (13))){
var state_21787__$1 = state_21787;
var statearr_21796_21827 = state_21787__$1;
(statearr_21796_21827[(2)] = null);

(statearr_21796_21827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (6))){
var inst_21752 = (state_21787[(7)]);
var inst_21773 = (inst_21752 > (0));
var state_21787__$1 = state_21787;
if(cljs.core.truth_(inst_21773)){
var statearr_21797_21828 = state_21787__$1;
(statearr_21797_21828[(1)] = (12));

} else {
var statearr_21798_21829 = state_21787__$1;
(statearr_21798_21829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (3))){
var inst_21785 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21787__$1,inst_21785);
} else {
if((state_val_21788 === (12))){
var inst_21751 = (state_21787[(8)]);
var inst_21775 = cljs.core.vec.call(null,inst_21751);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21787__$1,(15),out,inst_21775);
} else {
if((state_val_21788 === (2))){
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21787__$1,(4),ch);
} else {
if((state_val_21788 === (11))){
var inst_21767 = (state_21787[(2)]);
var inst_21768 = (new Array(n));
var inst_21751 = inst_21768;
var inst_21752 = (0);
var state_21787__$1 = (function (){var statearr_21799 = state_21787;
(statearr_21799[(10)] = inst_21767);

(statearr_21799[(7)] = inst_21752);

(statearr_21799[(8)] = inst_21751);

return statearr_21799;
})();
var statearr_21800_21830 = state_21787__$1;
(statearr_21800_21830[(2)] = null);

(statearr_21800_21830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (9))){
var inst_21751 = (state_21787[(8)]);
var inst_21765 = cljs.core.vec.call(null,inst_21751);
var state_21787__$1 = state_21787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21787__$1,(11),out,inst_21765);
} else {
if((state_val_21788 === (5))){
var inst_21760 = (state_21787[(11)]);
var inst_21752 = (state_21787[(7)]);
var inst_21751 = (state_21787[(8)]);
var inst_21755 = (state_21787[(9)]);
var inst_21759 = (inst_21751[inst_21752] = inst_21755);
var inst_21760__$1 = (inst_21752 + (1));
var inst_21761 = (inst_21760__$1 < n);
var state_21787__$1 = (function (){var statearr_21801 = state_21787;
(statearr_21801[(11)] = inst_21760__$1);

(statearr_21801[(12)] = inst_21759);

return statearr_21801;
})();
if(cljs.core.truth_(inst_21761)){
var statearr_21802_21831 = state_21787__$1;
(statearr_21802_21831[(1)] = (8));

} else {
var statearr_21803_21832 = state_21787__$1;
(statearr_21803_21832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (14))){
var inst_21780 = (state_21787[(2)]);
var inst_21781 = cljs.core.async.close_BANG_.call(null,out);
var state_21787__$1 = (function (){var statearr_21805 = state_21787;
(statearr_21805[(13)] = inst_21780);

return statearr_21805;
})();
var statearr_21806_21833 = state_21787__$1;
(statearr_21806_21833[(2)] = inst_21781);

(statearr_21806_21833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (10))){
var inst_21771 = (state_21787[(2)]);
var state_21787__$1 = state_21787;
var statearr_21807_21834 = state_21787__$1;
(statearr_21807_21834[(2)] = inst_21771);

(statearr_21807_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21788 === (8))){
var inst_21760 = (state_21787[(11)]);
var inst_21751 = (state_21787[(8)]);
var tmp21804 = inst_21751;
var inst_21751__$1 = tmp21804;
var inst_21752 = inst_21760;
var state_21787__$1 = (function (){var statearr_21808 = state_21787;
(statearr_21808[(7)] = inst_21752);

(statearr_21808[(8)] = inst_21751__$1);

return statearr_21808;
})();
var statearr_21809_21835 = state_21787__$1;
(statearr_21809_21835[(2)] = null);

(statearr_21809_21835[(1)] = (2));


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
});})(c__19161__auto___21821,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21821,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21813[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21813[(1)] = (1));

return statearr_21813;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21787){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21814){if((e21814 instanceof Object)){
var ex__19053__auto__ = e21814;
var statearr_21815_21836 = state_21787;
(statearr_21815_21836[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21837 = state_21787;
state_21787 = G__21837;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21821,out))
})();
var state__19163__auto__ = (function (){var statearr_21816 = f__19162__auto__.call(null);
(statearr_21816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21821);

return statearr_21816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21821,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21838 = [];
var len__17898__auto___21912 = arguments.length;
var i__17899__auto___21913 = (0);
while(true){
if((i__17899__auto___21913 < len__17898__auto___21912)){
args21838.push((arguments[i__17899__auto___21913]));

var G__21914 = (i__17899__auto___21913 + (1));
i__17899__auto___21913 = G__21914;
continue;
} else {
}
break;
}

var G__21840 = args21838.length;
switch (G__21840) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21838.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19161__auto___21916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___21916,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___21916,out){
return (function (state_21882){
var state_val_21883 = (state_21882[(1)]);
if((state_val_21883 === (7))){
var inst_21878 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21884_21917 = state_21882__$1;
(statearr_21884_21917[(2)] = inst_21878);

(statearr_21884_21917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (1))){
var inst_21841 = [];
var inst_21842 = inst_21841;
var inst_21843 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21882__$1 = (function (){var statearr_21885 = state_21882;
(statearr_21885[(7)] = inst_21842);

(statearr_21885[(8)] = inst_21843);

return statearr_21885;
})();
var statearr_21886_21918 = state_21882__$1;
(statearr_21886_21918[(2)] = null);

(statearr_21886_21918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (4))){
var inst_21846 = (state_21882[(9)]);
var inst_21846__$1 = (state_21882[(2)]);
var inst_21847 = (inst_21846__$1 == null);
var inst_21848 = cljs.core.not.call(null,inst_21847);
var state_21882__$1 = (function (){var statearr_21887 = state_21882;
(statearr_21887[(9)] = inst_21846__$1);

return statearr_21887;
})();
if(inst_21848){
var statearr_21888_21919 = state_21882__$1;
(statearr_21888_21919[(1)] = (5));

} else {
var statearr_21889_21920 = state_21882__$1;
(statearr_21889_21920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (15))){
var inst_21872 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21890_21921 = state_21882__$1;
(statearr_21890_21921[(2)] = inst_21872);

(statearr_21890_21921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (13))){
var state_21882__$1 = state_21882;
var statearr_21891_21922 = state_21882__$1;
(statearr_21891_21922[(2)] = null);

(statearr_21891_21922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (6))){
var inst_21842 = (state_21882[(7)]);
var inst_21867 = inst_21842.length;
var inst_21868 = (inst_21867 > (0));
var state_21882__$1 = state_21882;
if(cljs.core.truth_(inst_21868)){
var statearr_21892_21923 = state_21882__$1;
(statearr_21892_21923[(1)] = (12));

} else {
var statearr_21893_21924 = state_21882__$1;
(statearr_21893_21924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (3))){
var inst_21880 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21882__$1,inst_21880);
} else {
if((state_val_21883 === (12))){
var inst_21842 = (state_21882[(7)]);
var inst_21870 = cljs.core.vec.call(null,inst_21842);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21882__$1,(15),out,inst_21870);
} else {
if((state_val_21883 === (2))){
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21882__$1,(4),ch);
} else {
if((state_val_21883 === (11))){
var inst_21846 = (state_21882[(9)]);
var inst_21850 = (state_21882[(10)]);
var inst_21860 = (state_21882[(2)]);
var inst_21861 = [];
var inst_21862 = inst_21861.push(inst_21846);
var inst_21842 = inst_21861;
var inst_21843 = inst_21850;
var state_21882__$1 = (function (){var statearr_21894 = state_21882;
(statearr_21894[(7)] = inst_21842);

(statearr_21894[(11)] = inst_21862);

(statearr_21894[(12)] = inst_21860);

(statearr_21894[(8)] = inst_21843);

return statearr_21894;
})();
var statearr_21895_21925 = state_21882__$1;
(statearr_21895_21925[(2)] = null);

(statearr_21895_21925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (9))){
var inst_21842 = (state_21882[(7)]);
var inst_21858 = cljs.core.vec.call(null,inst_21842);
var state_21882__$1 = state_21882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21882__$1,(11),out,inst_21858);
} else {
if((state_val_21883 === (5))){
var inst_21846 = (state_21882[(9)]);
var inst_21850 = (state_21882[(10)]);
var inst_21843 = (state_21882[(8)]);
var inst_21850__$1 = f.call(null,inst_21846);
var inst_21851 = cljs.core._EQ_.call(null,inst_21850__$1,inst_21843);
var inst_21852 = cljs.core.keyword_identical_QMARK_.call(null,inst_21843,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21853 = (inst_21851) || (inst_21852);
var state_21882__$1 = (function (){var statearr_21896 = state_21882;
(statearr_21896[(10)] = inst_21850__$1);

return statearr_21896;
})();
if(cljs.core.truth_(inst_21853)){
var statearr_21897_21926 = state_21882__$1;
(statearr_21897_21926[(1)] = (8));

} else {
var statearr_21898_21927 = state_21882__$1;
(statearr_21898_21927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (14))){
var inst_21875 = (state_21882[(2)]);
var inst_21876 = cljs.core.async.close_BANG_.call(null,out);
var state_21882__$1 = (function (){var statearr_21900 = state_21882;
(statearr_21900[(13)] = inst_21875);

return statearr_21900;
})();
var statearr_21901_21928 = state_21882__$1;
(statearr_21901_21928[(2)] = inst_21876);

(statearr_21901_21928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (10))){
var inst_21865 = (state_21882[(2)]);
var state_21882__$1 = state_21882;
var statearr_21902_21929 = state_21882__$1;
(statearr_21902_21929[(2)] = inst_21865);

(statearr_21902_21929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21883 === (8))){
var inst_21846 = (state_21882[(9)]);
var inst_21842 = (state_21882[(7)]);
var inst_21850 = (state_21882[(10)]);
var inst_21855 = inst_21842.push(inst_21846);
var tmp21899 = inst_21842;
var inst_21842__$1 = tmp21899;
var inst_21843 = inst_21850;
var state_21882__$1 = (function (){var statearr_21903 = state_21882;
(statearr_21903[(7)] = inst_21842__$1);

(statearr_21903[(14)] = inst_21855);

(statearr_21903[(8)] = inst_21843);

return statearr_21903;
})();
var statearr_21904_21930 = state_21882__$1;
(statearr_21904_21930[(2)] = null);

(statearr_21904_21930[(1)] = (2));


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
});})(c__19161__auto___21916,out))
;
return ((function (switch__19049__auto__,c__19161__auto___21916,out){
return (function() {
var cljs$core$async$state_machine__19050__auto__ = null;
var cljs$core$async$state_machine__19050__auto____0 = (function (){
var statearr_21908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21908[(0)] = cljs$core$async$state_machine__19050__auto__);

(statearr_21908[(1)] = (1));

return statearr_21908;
});
var cljs$core$async$state_machine__19050__auto____1 = (function (state_21882){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_21882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e21909){if((e21909 instanceof Object)){
var ex__19053__auto__ = e21909;
var statearr_21910_21931 = state_21882;
(statearr_21910_21931[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21932 = state_21882;
state_21882 = G__21932;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
cljs$core$async$state_machine__19050__auto__ = function(state_21882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19050__auto____1.call(this,state_21882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19050__auto____0;
cljs$core$async$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19050__auto____1;
return cljs$core$async$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___21916,out))
})();
var state__19163__auto__ = (function (){var statearr_21911 = f__19162__auto__.call(null);
(statearr_21911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___21916);

return statearr_21911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___21916,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map