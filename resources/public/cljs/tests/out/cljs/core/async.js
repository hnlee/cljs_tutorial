// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26968 = [];
var len__25826__auto___26974 = arguments.length;
var i__25827__auto___26975 = (0);
while(true){
if((i__25827__auto___26975 < len__25826__auto___26974)){
args26968.push((arguments[i__25827__auto___26975]));

var G__26976 = (i__25827__auto___26975 + (1));
i__25827__auto___26975 = G__26976;
continue;
} else {
}
break;
}

var G__26970 = args26968.length;
switch (G__26970) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26968.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26971 = (function (f,blockable,meta26972){
this.f = f;
this.blockable = blockable;
this.meta26972 = meta26972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26973,meta26972__$1){
var self__ = this;
var _26973__$1 = this;
return (new cljs.core.async.t_cljs$core$async26971(self__.f,self__.blockable,meta26972__$1));
});

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26973){
var self__ = this;
var _26973__$1 = this;
return self__.meta26972;
});

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26972","meta26972",-736896792,null)], null);
});

cljs.core.async.t_cljs$core$async26971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26971";

cljs.core.async.t_cljs$core$async26971.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async26971");
});

cljs.core.async.__GT_t_cljs$core$async26971 = (function cljs$core$async$__GT_t_cljs$core$async26971(f__$1,blockable__$1,meta26972){
return (new cljs.core.async.t_cljs$core$async26971(f__$1,blockable__$1,meta26972));
});

}

return (new cljs.core.async.t_cljs$core$async26971(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26980 = [];
var len__25826__auto___26983 = arguments.length;
var i__25827__auto___26984 = (0);
while(true){
if((i__25827__auto___26984 < len__25826__auto___26983)){
args26980.push((arguments[i__25827__auto___26984]));

var G__26985 = (i__25827__auto___26984 + (1));
i__25827__auto___26984 = G__26985;
continue;
} else {
}
break;
}

var G__26982 = args26980.length;
switch (G__26982) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26980.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args26987 = [];
var len__25826__auto___26990 = arguments.length;
var i__25827__auto___26991 = (0);
while(true){
if((i__25827__auto___26991 < len__25826__auto___26990)){
args26987.push((arguments[i__25827__auto___26991]));

var G__26992 = (i__25827__auto___26991 + (1));
i__25827__auto___26991 = G__26992;
continue;
} else {
}
break;
}

var G__26989 = args26987.length;
switch (G__26989) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26987.length)].join('')));

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
var args26994 = [];
var len__25826__auto___26997 = arguments.length;
var i__25827__auto___26998 = (0);
while(true){
if((i__25827__auto___26998 < len__25826__auto___26997)){
args26994.push((arguments[i__25827__auto___26998]));

var G__26999 = (i__25827__auto___26998 + (1));
i__25827__auto___26998 = G__26999;
continue;
} else {
}
break;
}

var G__26996 = args26994.length;
switch (G__26996) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26994.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27001 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27001);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27001,ret){
return (function (){
return fn1.call(null,val_27001);
});})(val_27001,ret))
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
var args27002 = [];
var len__25826__auto___27005 = arguments.length;
var i__25827__auto___27006 = (0);
while(true){
if((i__25827__auto___27006 < len__25826__auto___27005)){
args27002.push((arguments[i__25827__auto___27006]));

var G__27007 = (i__25827__auto___27006 + (1));
i__25827__auto___27006 = G__27007;
continue;
} else {
}
break;
}

var G__27004 = args27002.length;
switch (G__27004) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27002.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25666__auto___27009 = n;
var x_27010 = (0);
while(true){
if((x_27010 < n__25666__auto___27009)){
(a[x_27010] = (0));

var G__27011 = (x_27010 + (1));
x_27010 = G__27011;
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

var G__27012 = (i + (1));
i = G__27012;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27016 = (function (alt_flag,flag,meta27017){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27017 = meta27017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27018,meta27017__$1){
var self__ = this;
var _27018__$1 = this;
return (new cljs.core.async.t_cljs$core$async27016(self__.alt_flag,self__.flag,meta27017__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27018){
var self__ = this;
var _27018__$1 = this;
return self__.meta27017;
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27017","meta27017",-1769366896,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27016";

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async27016");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27016 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27016(alt_flag__$1,flag__$1,meta27017){
return (new cljs.core.async.t_cljs$core$async27016(alt_flag__$1,flag__$1,meta27017));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27016(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27022 = (function (alt_handler,flag,cb,meta27023){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27023 = meta27023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27024,meta27023__$1){
var self__ = this;
var _27024__$1 = this;
return (new cljs.core.async.t_cljs$core$async27022(self__.alt_handler,self__.flag,self__.cb,meta27023__$1));
});

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27024){
var self__ = this;
var _27024__$1 = this;
return self__.meta27023;
});

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27023","meta27023",731465533,null)], null);
});

cljs.core.async.t_cljs$core$async27022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27022";

cljs.core.async.t_cljs$core$async27022.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async27022");
});

cljs.core.async.__GT_t_cljs$core$async27022 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27022(alt_handler__$1,flag__$1,cb__$1,meta27023){
return (new cljs.core.async.t_cljs$core$async27022(alt_handler__$1,flag__$1,cb__$1,meta27023));
});

}

return (new cljs.core.async.t_cljs$core$async27022(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27025_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27026_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24751__auto__ = wport;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27027 = (i + (1));
i = G__27027;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24751__auto__ = ret;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25833__auto__ = [];
var len__25826__auto___27033 = arguments.length;
var i__25827__auto___27034 = (0);
while(true){
if((i__25827__auto___27034 < len__25826__auto___27033)){
args__25833__auto__.push((arguments[i__25827__auto___27034]));

var G__27035 = (i__25827__auto___27034 + (1));
i__25827__auto___27034 = G__27035;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27030){
var map__27031 = p__27030;
var map__27031__$1 = ((((!((map__27031 == null)))?((((map__27031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27031):map__27031);
var opts = map__27031__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27028){
var G__27029 = cljs.core.first.call(null,seq27028);
var seq27028__$1 = cljs.core.next.call(null,seq27028);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27029,seq27028__$1);
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
var args27036 = [];
var len__25826__auto___27086 = arguments.length;
var i__25827__auto___27087 = (0);
while(true){
if((i__25827__auto___27087 < len__25826__auto___27086)){
args27036.push((arguments[i__25827__auto___27087]));

var G__27088 = (i__25827__auto___27087 + (1));
i__25827__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var G__27038 = args27036.length;
switch (G__27038) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27036.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26923__auto___27090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___27090){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___27090){
return (function (state_27062){
var state_val_27063 = (state_27062[(1)]);
if((state_val_27063 === (7))){
var inst_27058 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
var statearr_27064_27091 = state_27062__$1;
(statearr_27064_27091[(2)] = inst_27058);

(statearr_27064_27091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (1))){
var state_27062__$1 = state_27062;
var statearr_27065_27092 = state_27062__$1;
(statearr_27065_27092[(2)] = null);

(statearr_27065_27092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (4))){
var inst_27041 = (state_27062[(7)]);
var inst_27041__$1 = (state_27062[(2)]);
var inst_27042 = (inst_27041__$1 == null);
var state_27062__$1 = (function (){var statearr_27066 = state_27062;
(statearr_27066[(7)] = inst_27041__$1);

return statearr_27066;
})();
if(cljs.core.truth_(inst_27042)){
var statearr_27067_27093 = state_27062__$1;
(statearr_27067_27093[(1)] = (5));

} else {
var statearr_27068_27094 = state_27062__$1;
(statearr_27068_27094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (13))){
var state_27062__$1 = state_27062;
var statearr_27069_27095 = state_27062__$1;
(statearr_27069_27095[(2)] = null);

(statearr_27069_27095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (6))){
var inst_27041 = (state_27062[(7)]);
var state_27062__$1 = state_27062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27062__$1,(11),to,inst_27041);
} else {
if((state_val_27063 === (3))){
var inst_27060 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27062__$1,inst_27060);
} else {
if((state_val_27063 === (12))){
var state_27062__$1 = state_27062;
var statearr_27070_27096 = state_27062__$1;
(statearr_27070_27096[(2)] = null);

(statearr_27070_27096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (2))){
var state_27062__$1 = state_27062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27062__$1,(4),from);
} else {
if((state_val_27063 === (11))){
var inst_27051 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
if(cljs.core.truth_(inst_27051)){
var statearr_27071_27097 = state_27062__$1;
(statearr_27071_27097[(1)] = (12));

} else {
var statearr_27072_27098 = state_27062__$1;
(statearr_27072_27098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (9))){
var state_27062__$1 = state_27062;
var statearr_27073_27099 = state_27062__$1;
(statearr_27073_27099[(2)] = null);

(statearr_27073_27099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (5))){
var state_27062__$1 = state_27062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27074_27100 = state_27062__$1;
(statearr_27074_27100[(1)] = (8));

} else {
var statearr_27075_27101 = state_27062__$1;
(statearr_27075_27101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (14))){
var inst_27056 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
var statearr_27076_27102 = state_27062__$1;
(statearr_27076_27102[(2)] = inst_27056);

(statearr_27076_27102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (10))){
var inst_27048 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
var statearr_27077_27103 = state_27062__$1;
(statearr_27077_27103[(2)] = inst_27048);

(statearr_27077_27103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (8))){
var inst_27045 = cljs.core.async.close_BANG_.call(null,to);
var state_27062__$1 = state_27062;
var statearr_27078_27104 = state_27062__$1;
(statearr_27078_27104[(2)] = inst_27045);

(statearr_27078_27104[(1)] = (10));


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
});})(c__26923__auto___27090))
;
return ((function (switch__26811__auto__,c__26923__auto___27090){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_27082 = [null,null,null,null,null,null,null,null];
(statearr_27082[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_27082[(1)] = (1));

return statearr_27082;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_27062){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27083){if((e27083 instanceof Object)){
var ex__26815__auto__ = e27083;
var statearr_27084_27105 = state_27062;
(statearr_27084_27105[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27106 = state_27062;
state_27062 = G__27106;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_27062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_27062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___27090))
})();
var state__26925__auto__ = (function (){var statearr_27085 = f__26924__auto__.call(null);
(statearr_27085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27090);

return statearr_27085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___27090))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27294){
var vec__27295 = p__27294;
var v = cljs.core.nth.call(null,vec__27295,(0),null);
var p = cljs.core.nth.call(null,vec__27295,(1),null);
var job = vec__27295;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26923__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results){
return (function (state_27302){
var state_val_27303 = (state_27302[(1)]);
if((state_val_27303 === (1))){
var state_27302__$1 = state_27302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27302__$1,(2),res,v);
} else {
if((state_val_27303 === (2))){
var inst_27299 = (state_27302[(2)]);
var inst_27300 = cljs.core.async.close_BANG_.call(null,res);
var state_27302__$1 = (function (){var statearr_27304 = state_27302;
(statearr_27304[(7)] = inst_27299);

return statearr_27304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27302__$1,inst_27300);
} else {
return null;
}
}
});})(c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results))
;
return ((function (switch__26811__auto__,c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_27308 = [null,null,null,null,null,null,null,null];
(statearr_27308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__);

(statearr_27308[(1)] = (1));

return statearr_27308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1 = (function (state_27302){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27309){if((e27309 instanceof Object)){
var ex__26815__auto__ = e27309;
var statearr_27310_27482 = state_27302;
(statearr_27310_27482[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27483 = state_27302;
state_27302 = G__27483;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = function(state_27302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1.call(this,state_27302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results))
})();
var state__26925__auto__ = (function (){var statearr_27311 = f__26924__auto__.call(null);
(statearr_27311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27481);

return statearr_27311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___27481,res,vec__27295,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27312){
var vec__27313 = p__27312;
var v = cljs.core.nth.call(null,vec__27313,(0),null);
var p = cljs.core.nth.call(null,vec__27313,(1),null);
var job = vec__27313;
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
var n__25666__auto___27484 = n;
var __27485 = (0);
while(true){
if((__27485 < n__25666__auto___27484)){
var G__27316_27486 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27316_27486) {
case "compute":
var c__26923__auto___27488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27485,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (__27485,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function (state_27329){
var state_val_27330 = (state_27329[(1)]);
if((state_val_27330 === (1))){
var state_27329__$1 = state_27329;
var statearr_27331_27489 = state_27329__$1;
(statearr_27331_27489[(2)] = null);

(statearr_27331_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (2))){
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27329__$1,(4),jobs);
} else {
if((state_val_27330 === (3))){
var inst_27327 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27329__$1,inst_27327);
} else {
if((state_val_27330 === (4))){
var inst_27319 = (state_27329[(2)]);
var inst_27320 = process.call(null,inst_27319);
var state_27329__$1 = state_27329;
if(cljs.core.truth_(inst_27320)){
var statearr_27332_27490 = state_27329__$1;
(statearr_27332_27490[(1)] = (5));

} else {
var statearr_27333_27491 = state_27329__$1;
(statearr_27333_27491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (5))){
var state_27329__$1 = state_27329;
var statearr_27334_27492 = state_27329__$1;
(statearr_27334_27492[(2)] = null);

(statearr_27334_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (6))){
var state_27329__$1 = state_27329;
var statearr_27335_27493 = state_27329__$1;
(statearr_27335_27493[(2)] = null);

(statearr_27335_27493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (7))){
var inst_27325 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27336_27494 = state_27329__$1;
(statearr_27336_27494[(2)] = inst_27325);

(statearr_27336_27494[(1)] = (3));


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
});})(__27485,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
;
return ((function (__27485,switch__26811__auto__,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_27340 = [null,null,null,null,null,null,null];
(statearr_27340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__);

(statearr_27340[(1)] = (1));

return statearr_27340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1 = (function (state_27329){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27341){if((e27341 instanceof Object)){
var ex__26815__auto__ = e27341;
var statearr_27342_27495 = state_27329;
(statearr_27342_27495[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27496 = state_27329;
state_27329 = G__27496;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = function(state_27329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1.call(this,state_27329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__;
})()
;})(__27485,switch__26811__auto__,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
})();
var state__26925__auto__ = (function (){var statearr_27343 = f__26924__auto__.call(null);
(statearr_27343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27488);

return statearr_27343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(__27485,c__26923__auto___27488,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
);


break;
case "async":
var c__26923__auto___27497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27485,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (__27485,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function (state_27356){
var state_val_27357 = (state_27356[(1)]);
if((state_val_27357 === (1))){
var state_27356__$1 = state_27356;
var statearr_27358_27498 = state_27356__$1;
(statearr_27358_27498[(2)] = null);

(statearr_27358_27498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (2))){
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(4),jobs);
} else {
if((state_val_27357 === (3))){
var inst_27354 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else {
if((state_val_27357 === (4))){
var inst_27346 = (state_27356[(2)]);
var inst_27347 = async.call(null,inst_27346);
var state_27356__$1 = state_27356;
if(cljs.core.truth_(inst_27347)){
var statearr_27359_27499 = state_27356__$1;
(statearr_27359_27499[(1)] = (5));

} else {
var statearr_27360_27500 = state_27356__$1;
(statearr_27360_27500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (5))){
var state_27356__$1 = state_27356;
var statearr_27361_27501 = state_27356__$1;
(statearr_27361_27501[(2)] = null);

(statearr_27361_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (6))){
var state_27356__$1 = state_27356;
var statearr_27362_27502 = state_27356__$1;
(statearr_27362_27502[(2)] = null);

(statearr_27362_27502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (7))){
var inst_27352 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27363_27503 = state_27356__$1;
(statearr_27363_27503[(2)] = inst_27352);

(statearr_27363_27503[(1)] = (3));


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
});})(__27485,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
;
return ((function (__27485,switch__26811__auto__,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_27367 = [null,null,null,null,null,null,null];
(statearr_27367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__);

(statearr_27367[(1)] = (1));

return statearr_27367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1 = (function (state_27356){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27368){if((e27368 instanceof Object)){
var ex__26815__auto__ = e27368;
var statearr_27369_27504 = state_27356;
(statearr_27369_27504[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27505 = state_27356;
state_27356 = G__27505;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__;
})()
;})(__27485,switch__26811__auto__,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
})();
var state__26925__auto__ = (function (){var statearr_27370 = f__26924__auto__.call(null);
(statearr_27370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27497);

return statearr_27370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(__27485,c__26923__auto___27497,G__27316_27486,n__25666__auto___27484,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27506 = (__27485 + (1));
__27485 = G__27506;
continue;
} else {
}
break;
}

var c__26923__auto___27507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___27507,jobs,results,process,async){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___27507,jobs,results,process,async){
return (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (1))){
var state_27392__$1 = state_27392;
var statearr_27394_27508 = state_27392__$1;
(statearr_27394_27508[(2)] = null);

(statearr_27394_27508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (2))){
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(4),from);
} else {
if((state_val_27393 === (3))){
var inst_27390 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
if((state_val_27393 === (4))){
var inst_27373 = (state_27392[(7)]);
var inst_27373__$1 = (state_27392[(2)]);
var inst_27374 = (inst_27373__$1 == null);
var state_27392__$1 = (function (){var statearr_27395 = state_27392;
(statearr_27395[(7)] = inst_27373__$1);

return statearr_27395;
})();
if(cljs.core.truth_(inst_27374)){
var statearr_27396_27509 = state_27392__$1;
(statearr_27396_27509[(1)] = (5));

} else {
var statearr_27397_27510 = state_27392__$1;
(statearr_27397_27510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (5))){
var inst_27376 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27392__$1 = state_27392;
var statearr_27398_27511 = state_27392__$1;
(statearr_27398_27511[(2)] = inst_27376);

(statearr_27398_27511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (6))){
var inst_27373 = (state_27392[(7)]);
var inst_27378 = (state_27392[(8)]);
var inst_27378__$1 = cljs.core.async.chan.call(null,(1));
var inst_27379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27380 = [inst_27373,inst_27378__$1];
var inst_27381 = (new cljs.core.PersistentVector(null,2,(5),inst_27379,inst_27380,null));
var state_27392__$1 = (function (){var statearr_27399 = state_27392;
(statearr_27399[(8)] = inst_27378__$1);

return statearr_27399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27392__$1,(8),jobs,inst_27381);
} else {
if((state_val_27393 === (7))){
var inst_27388 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27400_27512 = state_27392__$1;
(statearr_27400_27512[(2)] = inst_27388);

(statearr_27400_27512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (8))){
var inst_27378 = (state_27392[(8)]);
var inst_27383 = (state_27392[(2)]);
var state_27392__$1 = (function (){var statearr_27401 = state_27392;
(statearr_27401[(9)] = inst_27383);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27392__$1,(9),results,inst_27378);
} else {
if((state_val_27393 === (9))){
var inst_27385 = (state_27392[(2)]);
var state_27392__$1 = (function (){var statearr_27402 = state_27392;
(statearr_27402[(10)] = inst_27385);

return statearr_27402;
})();
var statearr_27403_27513 = state_27392__$1;
(statearr_27403_27513[(2)] = null);

(statearr_27403_27513[(1)] = (2));


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
});})(c__26923__auto___27507,jobs,results,process,async))
;
return ((function (switch__26811__auto__,c__26923__auto___27507,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1 = (function (state_27392){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__26815__auto__ = e27408;
var statearr_27409_27514 = state_27392;
(statearr_27409_27514[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27515 = state_27392;
state_27392 = G__27515;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___27507,jobs,results,process,async))
})();
var state__26925__auto__ = (function (){var statearr_27410 = f__26924__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27507);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___27507,jobs,results,process,async))
);


var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__,jobs,results,process,async){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__,jobs,results,process,async){
return (function (state_27448){
var state_val_27449 = (state_27448[(1)]);
if((state_val_27449 === (7))){
var inst_27444 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27450_27516 = state_27448__$1;
(statearr_27450_27516[(2)] = inst_27444);

(statearr_27450_27516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (20))){
var state_27448__$1 = state_27448;
var statearr_27451_27517 = state_27448__$1;
(statearr_27451_27517[(2)] = null);

(statearr_27451_27517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (1))){
var state_27448__$1 = state_27448;
var statearr_27452_27518 = state_27448__$1;
(statearr_27452_27518[(2)] = null);

(statearr_27452_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (4))){
var inst_27413 = (state_27448[(7)]);
var inst_27413__$1 = (state_27448[(2)]);
var inst_27414 = (inst_27413__$1 == null);
var state_27448__$1 = (function (){var statearr_27453 = state_27448;
(statearr_27453[(7)] = inst_27413__$1);

return statearr_27453;
})();
if(cljs.core.truth_(inst_27414)){
var statearr_27454_27519 = state_27448__$1;
(statearr_27454_27519[(1)] = (5));

} else {
var statearr_27455_27520 = state_27448__$1;
(statearr_27455_27520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (15))){
var inst_27426 = (state_27448[(8)]);
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27448__$1,(18),to,inst_27426);
} else {
if((state_val_27449 === (21))){
var inst_27439 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27456_27521 = state_27448__$1;
(statearr_27456_27521[(2)] = inst_27439);

(statearr_27456_27521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (13))){
var inst_27441 = (state_27448[(2)]);
var state_27448__$1 = (function (){var statearr_27457 = state_27448;
(statearr_27457[(9)] = inst_27441);

return statearr_27457;
})();
var statearr_27458_27522 = state_27448__$1;
(statearr_27458_27522[(2)] = null);

(statearr_27458_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (6))){
var inst_27413 = (state_27448[(7)]);
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27448__$1,(11),inst_27413);
} else {
if((state_val_27449 === (17))){
var inst_27434 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
if(cljs.core.truth_(inst_27434)){
var statearr_27459_27523 = state_27448__$1;
(statearr_27459_27523[(1)] = (19));

} else {
var statearr_27460_27524 = state_27448__$1;
(statearr_27460_27524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (3))){
var inst_27446 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27448__$1,inst_27446);
} else {
if((state_val_27449 === (12))){
var inst_27423 = (state_27448[(10)]);
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27448__$1,(14),inst_27423);
} else {
if((state_val_27449 === (2))){
var state_27448__$1 = state_27448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27448__$1,(4),results);
} else {
if((state_val_27449 === (19))){
var state_27448__$1 = state_27448;
var statearr_27461_27525 = state_27448__$1;
(statearr_27461_27525[(2)] = null);

(statearr_27461_27525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (11))){
var inst_27423 = (state_27448[(2)]);
var state_27448__$1 = (function (){var statearr_27462 = state_27448;
(statearr_27462[(10)] = inst_27423);

return statearr_27462;
})();
var statearr_27463_27526 = state_27448__$1;
(statearr_27463_27526[(2)] = null);

(statearr_27463_27526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (9))){
var state_27448__$1 = state_27448;
var statearr_27464_27527 = state_27448__$1;
(statearr_27464_27527[(2)] = null);

(statearr_27464_27527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (5))){
var state_27448__$1 = state_27448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27465_27528 = state_27448__$1;
(statearr_27465_27528[(1)] = (8));

} else {
var statearr_27466_27529 = state_27448__$1;
(statearr_27466_27529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (14))){
var inst_27428 = (state_27448[(11)]);
var inst_27426 = (state_27448[(8)]);
var inst_27426__$1 = (state_27448[(2)]);
var inst_27427 = (inst_27426__$1 == null);
var inst_27428__$1 = cljs.core.not.call(null,inst_27427);
var state_27448__$1 = (function (){var statearr_27467 = state_27448;
(statearr_27467[(11)] = inst_27428__$1);

(statearr_27467[(8)] = inst_27426__$1);

return statearr_27467;
})();
if(inst_27428__$1){
var statearr_27468_27530 = state_27448__$1;
(statearr_27468_27530[(1)] = (15));

} else {
var statearr_27469_27531 = state_27448__$1;
(statearr_27469_27531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (16))){
var inst_27428 = (state_27448[(11)]);
var state_27448__$1 = state_27448;
var statearr_27470_27532 = state_27448__$1;
(statearr_27470_27532[(2)] = inst_27428);

(statearr_27470_27532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (10))){
var inst_27420 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27471_27533 = state_27448__$1;
(statearr_27471_27533[(2)] = inst_27420);

(statearr_27471_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (18))){
var inst_27431 = (state_27448[(2)]);
var state_27448__$1 = state_27448;
var statearr_27472_27534 = state_27448__$1;
(statearr_27472_27534[(2)] = inst_27431);

(statearr_27472_27534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27449 === (8))){
var inst_27417 = cljs.core.async.close_BANG_.call(null,to);
var state_27448__$1 = state_27448;
var statearr_27473_27535 = state_27448__$1;
(statearr_27473_27535[(2)] = inst_27417);

(statearr_27473_27535[(1)] = (10));


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
});})(c__26923__auto__,jobs,results,process,async))
;
return ((function (switch__26811__auto__,c__26923__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_27477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__);

(statearr_27477[(1)] = (1));

return statearr_27477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1 = (function (state_27448){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27478){if((e27478 instanceof Object)){
var ex__26815__auto__ = e27478;
var statearr_27479_27536 = state_27448;
(statearr_27479_27536[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27448;
state_27448 = G__27537;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__ = function(state_27448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1.call(this,state_27448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__,jobs,results,process,async))
})();
var state__26925__auto__ = (function (){var statearr_27480 = f__26924__auto__.call(null);
(statearr_27480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__,jobs,results,process,async))
);

return c__26923__auto__;
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
var args27538 = [];
var len__25826__auto___27541 = arguments.length;
var i__25827__auto___27542 = (0);
while(true){
if((i__25827__auto___27542 < len__25826__auto___27541)){
args27538.push((arguments[i__25827__auto___27542]));

var G__27543 = (i__25827__auto___27542 + (1));
i__25827__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27540 = args27538.length;
switch (G__27540) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27538.length)].join('')));

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
var args27545 = [];
var len__25826__auto___27548 = arguments.length;
var i__25827__auto___27549 = (0);
while(true){
if((i__25827__auto___27549 < len__25826__auto___27548)){
args27545.push((arguments[i__25827__auto___27549]));

var G__27550 = (i__25827__auto___27549 + (1));
i__25827__auto___27549 = G__27550;
continue;
} else {
}
break;
}

var G__27547 = args27545.length;
switch (G__27547) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27545.length)].join('')));

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
var args27552 = [];
var len__25826__auto___27605 = arguments.length;
var i__25827__auto___27606 = (0);
while(true){
if((i__25827__auto___27606 < len__25826__auto___27605)){
args27552.push((arguments[i__25827__auto___27606]));

var G__27607 = (i__25827__auto___27606 + (1));
i__25827__auto___27606 = G__27607;
continue;
} else {
}
break;
}

var G__27554 = args27552.length;
switch (G__27554) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27552.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26923__auto___27609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___27609,tc,fc){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___27609,tc,fc){
return (function (state_27580){
var state_val_27581 = (state_27580[(1)]);
if((state_val_27581 === (7))){
var inst_27576 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27582_27610 = state_27580__$1;
(statearr_27582_27610[(2)] = inst_27576);

(statearr_27582_27610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (1))){
var state_27580__$1 = state_27580;
var statearr_27583_27611 = state_27580__$1;
(statearr_27583_27611[(2)] = null);

(statearr_27583_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (4))){
var inst_27557 = (state_27580[(7)]);
var inst_27557__$1 = (state_27580[(2)]);
var inst_27558 = (inst_27557__$1 == null);
var state_27580__$1 = (function (){var statearr_27584 = state_27580;
(statearr_27584[(7)] = inst_27557__$1);

return statearr_27584;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27585_27612 = state_27580__$1;
(statearr_27585_27612[(1)] = (5));

} else {
var statearr_27586_27613 = state_27580__$1;
(statearr_27586_27613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (13))){
var state_27580__$1 = state_27580;
var statearr_27587_27614 = state_27580__$1;
(statearr_27587_27614[(2)] = null);

(statearr_27587_27614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (6))){
var inst_27557 = (state_27580[(7)]);
var inst_27563 = p.call(null,inst_27557);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27563)){
var statearr_27588_27615 = state_27580__$1;
(statearr_27588_27615[(1)] = (9));

} else {
var statearr_27589_27616 = state_27580__$1;
(statearr_27589_27616[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (3))){
var inst_27578 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27580__$1,inst_27578);
} else {
if((state_val_27581 === (12))){
var state_27580__$1 = state_27580;
var statearr_27590_27617 = state_27580__$1;
(statearr_27590_27617[(2)] = null);

(statearr_27590_27617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (2))){
var state_27580__$1 = state_27580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27580__$1,(4),ch);
} else {
if((state_val_27581 === (11))){
var inst_27557 = (state_27580[(7)]);
var inst_27567 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27580__$1,(8),inst_27567,inst_27557);
} else {
if((state_val_27581 === (9))){
var state_27580__$1 = state_27580;
var statearr_27591_27618 = state_27580__$1;
(statearr_27591_27618[(2)] = tc);

(statearr_27591_27618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (5))){
var inst_27560 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27561 = cljs.core.async.close_BANG_.call(null,fc);
var state_27580__$1 = (function (){var statearr_27592 = state_27580;
(statearr_27592[(8)] = inst_27560);

return statearr_27592;
})();
var statearr_27593_27619 = state_27580__$1;
(statearr_27593_27619[(2)] = inst_27561);

(statearr_27593_27619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (14))){
var inst_27574 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27594_27620 = state_27580__$1;
(statearr_27594_27620[(2)] = inst_27574);

(statearr_27594_27620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (10))){
var state_27580__$1 = state_27580;
var statearr_27595_27621 = state_27580__$1;
(statearr_27595_27621[(2)] = fc);

(statearr_27595_27621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (8))){
var inst_27569 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27569)){
var statearr_27596_27622 = state_27580__$1;
(statearr_27596_27622[(1)] = (12));

} else {
var statearr_27597_27623 = state_27580__$1;
(statearr_27597_27623[(1)] = (13));

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
});})(c__26923__auto___27609,tc,fc))
;
return ((function (switch__26811__auto__,c__26923__auto___27609,tc,fc){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_27601 = [null,null,null,null,null,null,null,null,null];
(statearr_27601[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_27601[(1)] = (1));

return statearr_27601;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_27580){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27602){if((e27602 instanceof Object)){
var ex__26815__auto__ = e27602;
var statearr_27603_27624 = state_27580;
(statearr_27603_27624[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27625 = state_27580;
state_27580 = G__27625;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_27580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_27580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___27609,tc,fc))
})();
var state__26925__auto__ = (function (){var statearr_27604 = f__26924__auto__.call(null);
(statearr_27604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___27609);

return statearr_27604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___27609,tc,fc))
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
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27691_27712 = state_27689__$1;
(statearr_27691_27712[(2)] = inst_27685);

(statearr_27691_27712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var inst_27669 = init;
var state_27689__$1 = (function (){var statearr_27692 = state_27689;
(statearr_27692[(7)] = inst_27669);

return statearr_27692;
})();
var statearr_27693_27713 = state_27689__$1;
(statearr_27693_27713[(2)] = null);

(statearr_27693_27713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27672 = (state_27689[(8)]);
var inst_27672__$1 = (state_27689[(2)]);
var inst_27673 = (inst_27672__$1 == null);
var state_27689__$1 = (function (){var statearr_27694 = state_27689;
(statearr_27694[(8)] = inst_27672__$1);

return statearr_27694;
})();
if(cljs.core.truth_(inst_27673)){
var statearr_27695_27714 = state_27689__$1;
(statearr_27695_27714[(1)] = (5));

} else {
var statearr_27696_27715 = state_27689__$1;
(statearr_27696_27715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (6))){
var inst_27669 = (state_27689[(7)]);
var inst_27676 = (state_27689[(9)]);
var inst_27672 = (state_27689[(8)]);
var inst_27676__$1 = f.call(null,inst_27669,inst_27672);
var inst_27677 = cljs.core.reduced_QMARK_.call(null,inst_27676__$1);
var state_27689__$1 = (function (){var statearr_27697 = state_27689;
(statearr_27697[(9)] = inst_27676__$1);

return statearr_27697;
})();
if(inst_27677){
var statearr_27698_27716 = state_27689__$1;
(statearr_27698_27716[(1)] = (8));

} else {
var statearr_27699_27717 = state_27689__$1;
(statearr_27699_27717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (2))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(4),ch);
} else {
if((state_val_27690 === (9))){
var inst_27676 = (state_27689[(9)]);
var inst_27669 = inst_27676;
var state_27689__$1 = (function (){var statearr_27700 = state_27689;
(statearr_27700[(7)] = inst_27669);

return statearr_27700;
})();
var statearr_27701_27718 = state_27689__$1;
(statearr_27701_27718[(2)] = null);

(statearr_27701_27718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (5))){
var inst_27669 = (state_27689[(7)]);
var state_27689__$1 = state_27689;
var statearr_27702_27719 = state_27689__$1;
(statearr_27702_27719[(2)] = inst_27669);

(statearr_27702_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var inst_27683 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27703_27720 = state_27689__$1;
(statearr_27703_27720[(2)] = inst_27683);

(statearr_27703_27720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27676 = (state_27689[(9)]);
var inst_27679 = cljs.core.deref.call(null,inst_27676);
var state_27689__$1 = state_27689;
var statearr_27704_27721 = state_27689__$1;
(statearr_27704_27721[(2)] = inst_27679);

(statearr_27704_27721[(1)] = (10));


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
});})(c__26923__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26812__auto____0 = (function (){
var statearr_27708 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27708[(0)] = cljs$core$async$reduce_$_state_machine__26812__auto__);

(statearr_27708[(1)] = (1));

return statearr_27708;
});
var cljs$core$async$reduce_$_state_machine__26812__auto____1 = (function (state_27689){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object)){
var ex__26815__auto__ = e27709;
var statearr_27710_27722 = state_27689;
(statearr_27710_27722[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27723 = state_27689;
state_27689 = G__27723;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26812__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26812__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26812__auto____0;
cljs$core$async$reduce_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26812__auto____1;
return cljs$core$async$reduce_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__))
})();
var state__26925__auto__ = (function (){var statearr_27711 = f__26924__auto__.call(null);
(statearr_27711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__))
);

return c__26923__auto__;
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
var args27724 = [];
var len__25826__auto___27776 = arguments.length;
var i__25827__auto___27777 = (0);
while(true){
if((i__25827__auto___27777 < len__25826__auto___27776)){
args27724.push((arguments[i__25827__auto___27777]));

var G__27778 = (i__25827__auto___27777 + (1));
i__25827__auto___27777 = G__27778;
continue;
} else {
}
break;
}

var G__27726 = args27724.length;
switch (G__27726) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27724.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__){
return (function (state_27751){
var state_val_27752 = (state_27751[(1)]);
if((state_val_27752 === (7))){
var inst_27733 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27753_27780 = state_27751__$1;
(statearr_27753_27780[(2)] = inst_27733);

(statearr_27753_27780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (1))){
var inst_27727 = cljs.core.seq.call(null,coll);
var inst_27728 = inst_27727;
var state_27751__$1 = (function (){var statearr_27754 = state_27751;
(statearr_27754[(7)] = inst_27728);

return statearr_27754;
})();
var statearr_27755_27781 = state_27751__$1;
(statearr_27755_27781[(2)] = null);

(statearr_27755_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (4))){
var inst_27728 = (state_27751[(7)]);
var inst_27731 = cljs.core.first.call(null,inst_27728);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27751__$1,(7),ch,inst_27731);
} else {
if((state_val_27752 === (13))){
var inst_27745 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27756_27782 = state_27751__$1;
(statearr_27756_27782[(2)] = inst_27745);

(statearr_27756_27782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (6))){
var inst_27736 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
if(cljs.core.truth_(inst_27736)){
var statearr_27757_27783 = state_27751__$1;
(statearr_27757_27783[(1)] = (8));

} else {
var statearr_27758_27784 = state_27751__$1;
(statearr_27758_27784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (3))){
var inst_27749 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27751__$1,inst_27749);
} else {
if((state_val_27752 === (12))){
var state_27751__$1 = state_27751;
var statearr_27759_27785 = state_27751__$1;
(statearr_27759_27785[(2)] = null);

(statearr_27759_27785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (2))){
var inst_27728 = (state_27751[(7)]);
var state_27751__$1 = state_27751;
if(cljs.core.truth_(inst_27728)){
var statearr_27760_27786 = state_27751__$1;
(statearr_27760_27786[(1)] = (4));

} else {
var statearr_27761_27787 = state_27751__$1;
(statearr_27761_27787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (11))){
var inst_27742 = cljs.core.async.close_BANG_.call(null,ch);
var state_27751__$1 = state_27751;
var statearr_27762_27788 = state_27751__$1;
(statearr_27762_27788[(2)] = inst_27742);

(statearr_27762_27788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (9))){
var state_27751__$1 = state_27751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27763_27789 = state_27751__$1;
(statearr_27763_27789[(1)] = (11));

} else {
var statearr_27764_27790 = state_27751__$1;
(statearr_27764_27790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (5))){
var inst_27728 = (state_27751[(7)]);
var state_27751__$1 = state_27751;
var statearr_27765_27791 = state_27751__$1;
(statearr_27765_27791[(2)] = inst_27728);

(statearr_27765_27791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (10))){
var inst_27747 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27766_27792 = state_27751__$1;
(statearr_27766_27792[(2)] = inst_27747);

(statearr_27766_27792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (8))){
var inst_27728 = (state_27751[(7)]);
var inst_27738 = cljs.core.next.call(null,inst_27728);
var inst_27728__$1 = inst_27738;
var state_27751__$1 = (function (){var statearr_27767 = state_27751;
(statearr_27767[(7)] = inst_27728__$1);

return statearr_27767;
})();
var statearr_27768_27793 = state_27751__$1;
(statearr_27768_27793[(2)] = null);

(statearr_27768_27793[(1)] = (2));


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
});})(c__26923__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_27772 = [null,null,null,null,null,null,null,null];
(statearr_27772[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_27772[(1)] = (1));

return statearr_27772;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_27751){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_27751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e27773){if((e27773 instanceof Object)){
var ex__26815__auto__ = e27773;
var statearr_27774_27794 = state_27751;
(statearr_27774_27794[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27751;
state_27751 = G__27795;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_27751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_27751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__))
})();
var state__26925__auto__ = (function (){var statearr_27775 = f__26924__auto__.call(null);
(statearr_27775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_27775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__))
);

return c__26923__auto__;
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
var x__25414__auto__ = (((_ == null))?null:_);
var m__25415__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,_);
} else {
var m__25415__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,_);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25415__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m);
} else {
var m__25415__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28021 = (function (mult,ch,cs,meta28022){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28022 = meta28022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28023,meta28022__$1){
var self__ = this;
var _28023__$1 = this;
return (new cljs.core.async.t_cljs$core$async28021(self__.mult,self__.ch,self__.cs,meta28022__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28023){
var self__ = this;
var _28023__$1 = this;
return self__.meta28022;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28022","meta28022",1277356855,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28021";

cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28021");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28021(mult__$1,ch__$1,cs__$1,meta28022){
return (new cljs.core.async.t_cljs$core$async28021(mult__$1,ch__$1,cs__$1,meta28022));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28021(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26923__auto___28246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___28246,cs,m,dchan,dctr,done){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___28246,cs,m,dchan,dctr,done){
return (function (state_28158){
var state_val_28159 = (state_28158[(1)]);
if((state_val_28159 === (7))){
var inst_28154 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28160_28247 = state_28158__$1;
(statearr_28160_28247[(2)] = inst_28154);

(statearr_28160_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (20))){
var inst_28057 = (state_28158[(7)]);
var inst_28069 = cljs.core.first.call(null,inst_28057);
var inst_28070 = cljs.core.nth.call(null,inst_28069,(0),null);
var inst_28071 = cljs.core.nth.call(null,inst_28069,(1),null);
var state_28158__$1 = (function (){var statearr_28161 = state_28158;
(statearr_28161[(8)] = inst_28070);

return statearr_28161;
})();
if(cljs.core.truth_(inst_28071)){
var statearr_28162_28248 = state_28158__$1;
(statearr_28162_28248[(1)] = (22));

} else {
var statearr_28163_28249 = state_28158__$1;
(statearr_28163_28249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (27))){
var inst_28099 = (state_28158[(9)]);
var inst_28101 = (state_28158[(10)]);
var inst_28026 = (state_28158[(11)]);
var inst_28106 = (state_28158[(12)]);
var inst_28106__$1 = cljs.core._nth.call(null,inst_28099,inst_28101);
var inst_28107 = cljs.core.async.put_BANG_.call(null,inst_28106__$1,inst_28026,done);
var state_28158__$1 = (function (){var statearr_28164 = state_28158;
(statearr_28164[(12)] = inst_28106__$1);

return statearr_28164;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28165_28250 = state_28158__$1;
(statearr_28165_28250[(1)] = (30));

} else {
var statearr_28166_28251 = state_28158__$1;
(statearr_28166_28251[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (1))){
var state_28158__$1 = state_28158;
var statearr_28167_28252 = state_28158__$1;
(statearr_28167_28252[(2)] = null);

(statearr_28167_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (24))){
var inst_28057 = (state_28158[(7)]);
var inst_28076 = (state_28158[(2)]);
var inst_28077 = cljs.core.next.call(null,inst_28057);
var inst_28035 = inst_28077;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28158__$1 = (function (){var statearr_28168 = state_28158;
(statearr_28168[(13)] = inst_28038);

(statearr_28168[(14)] = inst_28037);

(statearr_28168[(15)] = inst_28076);

(statearr_28168[(16)] = inst_28036);

(statearr_28168[(17)] = inst_28035);

return statearr_28168;
})();
var statearr_28169_28253 = state_28158__$1;
(statearr_28169_28253[(2)] = null);

(statearr_28169_28253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (39))){
var state_28158__$1 = state_28158;
var statearr_28173_28254 = state_28158__$1;
(statearr_28173_28254[(2)] = null);

(statearr_28173_28254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (4))){
var inst_28026 = (state_28158[(11)]);
var inst_28026__$1 = (state_28158[(2)]);
var inst_28027 = (inst_28026__$1 == null);
var state_28158__$1 = (function (){var statearr_28174 = state_28158;
(statearr_28174[(11)] = inst_28026__$1);

return statearr_28174;
})();
if(cljs.core.truth_(inst_28027)){
var statearr_28175_28255 = state_28158__$1;
(statearr_28175_28255[(1)] = (5));

} else {
var statearr_28176_28256 = state_28158__$1;
(statearr_28176_28256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (15))){
var inst_28038 = (state_28158[(13)]);
var inst_28037 = (state_28158[(14)]);
var inst_28036 = (state_28158[(16)]);
var inst_28035 = (state_28158[(17)]);
var inst_28053 = (state_28158[(2)]);
var inst_28054 = (inst_28038 + (1));
var tmp28170 = inst_28037;
var tmp28171 = inst_28036;
var tmp28172 = inst_28035;
var inst_28035__$1 = tmp28172;
var inst_28036__$1 = tmp28171;
var inst_28037__$1 = tmp28170;
var inst_28038__$1 = inst_28054;
var state_28158__$1 = (function (){var statearr_28177 = state_28158;
(statearr_28177[(18)] = inst_28053);

(statearr_28177[(13)] = inst_28038__$1);

(statearr_28177[(14)] = inst_28037__$1);

(statearr_28177[(16)] = inst_28036__$1);

(statearr_28177[(17)] = inst_28035__$1);

return statearr_28177;
})();
var statearr_28178_28257 = state_28158__$1;
(statearr_28178_28257[(2)] = null);

(statearr_28178_28257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (21))){
var inst_28080 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28182_28258 = state_28158__$1;
(statearr_28182_28258[(2)] = inst_28080);

(statearr_28182_28258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (31))){
var inst_28106 = (state_28158[(12)]);
var inst_28110 = done.call(null,null);
var inst_28111 = cljs.core.async.untap_STAR_.call(null,m,inst_28106);
var state_28158__$1 = (function (){var statearr_28183 = state_28158;
(statearr_28183[(19)] = inst_28110);

return statearr_28183;
})();
var statearr_28184_28259 = state_28158__$1;
(statearr_28184_28259[(2)] = inst_28111);

(statearr_28184_28259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (32))){
var inst_28099 = (state_28158[(9)]);
var inst_28101 = (state_28158[(10)]);
var inst_28098 = (state_28158[(20)]);
var inst_28100 = (state_28158[(21)]);
var inst_28113 = (state_28158[(2)]);
var inst_28114 = (inst_28101 + (1));
var tmp28179 = inst_28099;
var tmp28180 = inst_28098;
var tmp28181 = inst_28100;
var inst_28098__$1 = tmp28180;
var inst_28099__$1 = tmp28179;
var inst_28100__$1 = tmp28181;
var inst_28101__$1 = inst_28114;
var state_28158__$1 = (function (){var statearr_28185 = state_28158;
(statearr_28185[(9)] = inst_28099__$1);

(statearr_28185[(10)] = inst_28101__$1);

(statearr_28185[(22)] = inst_28113);

(statearr_28185[(20)] = inst_28098__$1);

(statearr_28185[(21)] = inst_28100__$1);

return statearr_28185;
})();
var statearr_28186_28260 = state_28158__$1;
(statearr_28186_28260[(2)] = null);

(statearr_28186_28260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (40))){
var inst_28126 = (state_28158[(23)]);
var inst_28130 = done.call(null,null);
var inst_28131 = cljs.core.async.untap_STAR_.call(null,m,inst_28126);
var state_28158__$1 = (function (){var statearr_28187 = state_28158;
(statearr_28187[(24)] = inst_28130);

return statearr_28187;
})();
var statearr_28188_28261 = state_28158__$1;
(statearr_28188_28261[(2)] = inst_28131);

(statearr_28188_28261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (33))){
var inst_28117 = (state_28158[(25)]);
var inst_28119 = cljs.core.chunked_seq_QMARK_.call(null,inst_28117);
var state_28158__$1 = state_28158;
if(inst_28119){
var statearr_28189_28262 = state_28158__$1;
(statearr_28189_28262[(1)] = (36));

} else {
var statearr_28190_28263 = state_28158__$1;
(statearr_28190_28263[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (13))){
var inst_28047 = (state_28158[(26)]);
var inst_28050 = cljs.core.async.close_BANG_.call(null,inst_28047);
var state_28158__$1 = state_28158;
var statearr_28191_28264 = state_28158__$1;
(statearr_28191_28264[(2)] = inst_28050);

(statearr_28191_28264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (22))){
var inst_28070 = (state_28158[(8)]);
var inst_28073 = cljs.core.async.close_BANG_.call(null,inst_28070);
var state_28158__$1 = state_28158;
var statearr_28192_28265 = state_28158__$1;
(statearr_28192_28265[(2)] = inst_28073);

(statearr_28192_28265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (36))){
var inst_28117 = (state_28158[(25)]);
var inst_28121 = cljs.core.chunk_first.call(null,inst_28117);
var inst_28122 = cljs.core.chunk_rest.call(null,inst_28117);
var inst_28123 = cljs.core.count.call(null,inst_28121);
var inst_28098 = inst_28122;
var inst_28099 = inst_28121;
var inst_28100 = inst_28123;
var inst_28101 = (0);
var state_28158__$1 = (function (){var statearr_28193 = state_28158;
(statearr_28193[(9)] = inst_28099);

(statearr_28193[(10)] = inst_28101);

(statearr_28193[(20)] = inst_28098);

(statearr_28193[(21)] = inst_28100);

return statearr_28193;
})();
var statearr_28194_28266 = state_28158__$1;
(statearr_28194_28266[(2)] = null);

(statearr_28194_28266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (41))){
var inst_28117 = (state_28158[(25)]);
var inst_28133 = (state_28158[(2)]);
var inst_28134 = cljs.core.next.call(null,inst_28117);
var inst_28098 = inst_28134;
var inst_28099 = null;
var inst_28100 = (0);
var inst_28101 = (0);
var state_28158__$1 = (function (){var statearr_28195 = state_28158;
(statearr_28195[(9)] = inst_28099);

(statearr_28195[(10)] = inst_28101);

(statearr_28195[(27)] = inst_28133);

(statearr_28195[(20)] = inst_28098);

(statearr_28195[(21)] = inst_28100);

return statearr_28195;
})();
var statearr_28196_28267 = state_28158__$1;
(statearr_28196_28267[(2)] = null);

(statearr_28196_28267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (43))){
var state_28158__$1 = state_28158;
var statearr_28197_28268 = state_28158__$1;
(statearr_28197_28268[(2)] = null);

(statearr_28197_28268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (29))){
var inst_28142 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28198_28269 = state_28158__$1;
(statearr_28198_28269[(2)] = inst_28142);

(statearr_28198_28269[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (44))){
var inst_28151 = (state_28158[(2)]);
var state_28158__$1 = (function (){var statearr_28199 = state_28158;
(statearr_28199[(28)] = inst_28151);

return statearr_28199;
})();
var statearr_28200_28270 = state_28158__$1;
(statearr_28200_28270[(2)] = null);

(statearr_28200_28270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (6))){
var inst_28090 = (state_28158[(29)]);
var inst_28089 = cljs.core.deref.call(null,cs);
var inst_28090__$1 = cljs.core.keys.call(null,inst_28089);
var inst_28091 = cljs.core.count.call(null,inst_28090__$1);
var inst_28092 = cljs.core.reset_BANG_.call(null,dctr,inst_28091);
var inst_28097 = cljs.core.seq.call(null,inst_28090__$1);
var inst_28098 = inst_28097;
var inst_28099 = null;
var inst_28100 = (0);
var inst_28101 = (0);
var state_28158__$1 = (function (){var statearr_28201 = state_28158;
(statearr_28201[(9)] = inst_28099);

(statearr_28201[(10)] = inst_28101);

(statearr_28201[(29)] = inst_28090__$1);

(statearr_28201[(30)] = inst_28092);

(statearr_28201[(20)] = inst_28098);

(statearr_28201[(21)] = inst_28100);

return statearr_28201;
})();
var statearr_28202_28271 = state_28158__$1;
(statearr_28202_28271[(2)] = null);

(statearr_28202_28271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (28))){
var inst_28117 = (state_28158[(25)]);
var inst_28098 = (state_28158[(20)]);
var inst_28117__$1 = cljs.core.seq.call(null,inst_28098);
var state_28158__$1 = (function (){var statearr_28203 = state_28158;
(statearr_28203[(25)] = inst_28117__$1);

return statearr_28203;
})();
if(inst_28117__$1){
var statearr_28204_28272 = state_28158__$1;
(statearr_28204_28272[(1)] = (33));

} else {
var statearr_28205_28273 = state_28158__$1;
(statearr_28205_28273[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (25))){
var inst_28101 = (state_28158[(10)]);
var inst_28100 = (state_28158[(21)]);
var inst_28103 = (inst_28101 < inst_28100);
var inst_28104 = inst_28103;
var state_28158__$1 = state_28158;
if(cljs.core.truth_(inst_28104)){
var statearr_28206_28274 = state_28158__$1;
(statearr_28206_28274[(1)] = (27));

} else {
var statearr_28207_28275 = state_28158__$1;
(statearr_28207_28275[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (34))){
var state_28158__$1 = state_28158;
var statearr_28208_28276 = state_28158__$1;
(statearr_28208_28276[(2)] = null);

(statearr_28208_28276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (17))){
var state_28158__$1 = state_28158;
var statearr_28209_28277 = state_28158__$1;
(statearr_28209_28277[(2)] = null);

(statearr_28209_28277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (3))){
var inst_28156 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28158__$1,inst_28156);
} else {
if((state_val_28159 === (12))){
var inst_28085 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28210_28278 = state_28158__$1;
(statearr_28210_28278[(2)] = inst_28085);

(statearr_28210_28278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (2))){
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(4),ch);
} else {
if((state_val_28159 === (23))){
var state_28158__$1 = state_28158;
var statearr_28211_28279 = state_28158__$1;
(statearr_28211_28279[(2)] = null);

(statearr_28211_28279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (35))){
var inst_28140 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28212_28280 = state_28158__$1;
(statearr_28212_28280[(2)] = inst_28140);

(statearr_28212_28280[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (19))){
var inst_28057 = (state_28158[(7)]);
var inst_28061 = cljs.core.chunk_first.call(null,inst_28057);
var inst_28062 = cljs.core.chunk_rest.call(null,inst_28057);
var inst_28063 = cljs.core.count.call(null,inst_28061);
var inst_28035 = inst_28062;
var inst_28036 = inst_28061;
var inst_28037 = inst_28063;
var inst_28038 = (0);
var state_28158__$1 = (function (){var statearr_28213 = state_28158;
(statearr_28213[(13)] = inst_28038);

(statearr_28213[(14)] = inst_28037);

(statearr_28213[(16)] = inst_28036);

(statearr_28213[(17)] = inst_28035);

return statearr_28213;
})();
var statearr_28214_28281 = state_28158__$1;
(statearr_28214_28281[(2)] = null);

(statearr_28214_28281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (11))){
var inst_28057 = (state_28158[(7)]);
var inst_28035 = (state_28158[(17)]);
var inst_28057__$1 = cljs.core.seq.call(null,inst_28035);
var state_28158__$1 = (function (){var statearr_28215 = state_28158;
(statearr_28215[(7)] = inst_28057__$1);

return statearr_28215;
})();
if(inst_28057__$1){
var statearr_28216_28282 = state_28158__$1;
(statearr_28216_28282[(1)] = (16));

} else {
var statearr_28217_28283 = state_28158__$1;
(statearr_28217_28283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (9))){
var inst_28087 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28218_28284 = state_28158__$1;
(statearr_28218_28284[(2)] = inst_28087);

(statearr_28218_28284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (5))){
var inst_28033 = cljs.core.deref.call(null,cs);
var inst_28034 = cljs.core.seq.call(null,inst_28033);
var inst_28035 = inst_28034;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28158__$1 = (function (){var statearr_28219 = state_28158;
(statearr_28219[(13)] = inst_28038);

(statearr_28219[(14)] = inst_28037);

(statearr_28219[(16)] = inst_28036);

(statearr_28219[(17)] = inst_28035);

return statearr_28219;
})();
var statearr_28220_28285 = state_28158__$1;
(statearr_28220_28285[(2)] = null);

(statearr_28220_28285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (14))){
var state_28158__$1 = state_28158;
var statearr_28221_28286 = state_28158__$1;
(statearr_28221_28286[(2)] = null);

(statearr_28221_28286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (45))){
var inst_28148 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28222_28287 = state_28158__$1;
(statearr_28222_28287[(2)] = inst_28148);

(statearr_28222_28287[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (26))){
var inst_28090 = (state_28158[(29)]);
var inst_28144 = (state_28158[(2)]);
var inst_28145 = cljs.core.seq.call(null,inst_28090);
var state_28158__$1 = (function (){var statearr_28223 = state_28158;
(statearr_28223[(31)] = inst_28144);

return statearr_28223;
})();
if(inst_28145){
var statearr_28224_28288 = state_28158__$1;
(statearr_28224_28288[(1)] = (42));

} else {
var statearr_28225_28289 = state_28158__$1;
(statearr_28225_28289[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (16))){
var inst_28057 = (state_28158[(7)]);
var inst_28059 = cljs.core.chunked_seq_QMARK_.call(null,inst_28057);
var state_28158__$1 = state_28158;
if(inst_28059){
var statearr_28226_28290 = state_28158__$1;
(statearr_28226_28290[(1)] = (19));

} else {
var statearr_28227_28291 = state_28158__$1;
(statearr_28227_28291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (38))){
var inst_28137 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28228_28292 = state_28158__$1;
(statearr_28228_28292[(2)] = inst_28137);

(statearr_28228_28292[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (30))){
var state_28158__$1 = state_28158;
var statearr_28229_28293 = state_28158__$1;
(statearr_28229_28293[(2)] = null);

(statearr_28229_28293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (10))){
var inst_28038 = (state_28158[(13)]);
var inst_28036 = (state_28158[(16)]);
var inst_28046 = cljs.core._nth.call(null,inst_28036,inst_28038);
var inst_28047 = cljs.core.nth.call(null,inst_28046,(0),null);
var inst_28048 = cljs.core.nth.call(null,inst_28046,(1),null);
var state_28158__$1 = (function (){var statearr_28230 = state_28158;
(statearr_28230[(26)] = inst_28047);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28048)){
var statearr_28231_28294 = state_28158__$1;
(statearr_28231_28294[(1)] = (13));

} else {
var statearr_28232_28295 = state_28158__$1;
(statearr_28232_28295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (18))){
var inst_28083 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28233_28296 = state_28158__$1;
(statearr_28233_28296[(2)] = inst_28083);

(statearr_28233_28296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (42))){
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(45),dchan);
} else {
if((state_val_28159 === (37))){
var inst_28126 = (state_28158[(23)]);
var inst_28026 = (state_28158[(11)]);
var inst_28117 = (state_28158[(25)]);
var inst_28126__$1 = cljs.core.first.call(null,inst_28117);
var inst_28127 = cljs.core.async.put_BANG_.call(null,inst_28126__$1,inst_28026,done);
var state_28158__$1 = (function (){var statearr_28234 = state_28158;
(statearr_28234[(23)] = inst_28126__$1);

return statearr_28234;
})();
if(cljs.core.truth_(inst_28127)){
var statearr_28235_28297 = state_28158__$1;
(statearr_28235_28297[(1)] = (39));

} else {
var statearr_28236_28298 = state_28158__$1;
(statearr_28236_28298[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (8))){
var inst_28038 = (state_28158[(13)]);
var inst_28037 = (state_28158[(14)]);
var inst_28040 = (inst_28038 < inst_28037);
var inst_28041 = inst_28040;
var state_28158__$1 = state_28158;
if(cljs.core.truth_(inst_28041)){
var statearr_28237_28299 = state_28158__$1;
(statearr_28237_28299[(1)] = (10));

} else {
var statearr_28238_28300 = state_28158__$1;
(statearr_28238_28300[(1)] = (11));

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
});})(c__26923__auto___28246,cs,m,dchan,dctr,done))
;
return ((function (switch__26811__auto__,c__26923__auto___28246,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26812__auto__ = null;
var cljs$core$async$mult_$_state_machine__26812__auto____0 = (function (){
var statearr_28242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28242[(0)] = cljs$core$async$mult_$_state_machine__26812__auto__);

(statearr_28242[(1)] = (1));

return statearr_28242;
});
var cljs$core$async$mult_$_state_machine__26812__auto____1 = (function (state_28158){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_28158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e28243){if((e28243 instanceof Object)){
var ex__26815__auto__ = e28243;
var statearr_28244_28301 = state_28158;
(statearr_28244_28301[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28302 = state_28158;
state_28158 = G__28302;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26812__auto__ = function(state_28158){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26812__auto____1.call(this,state_28158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26812__auto____0;
cljs$core$async$mult_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26812__auto____1;
return cljs$core$async$mult_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___28246,cs,m,dchan,dctr,done))
})();
var state__26925__auto__ = (function (){var statearr_28245 = f__26924__auto__.call(null);
(statearr_28245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___28246);

return statearr_28245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___28246,cs,m,dchan,dctr,done))
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
var args28303 = [];
var len__25826__auto___28306 = arguments.length;
var i__25827__auto___28307 = (0);
while(true){
if((i__25827__auto___28307 < len__25826__auto___28306)){
args28303.push((arguments[i__25827__auto___28307]));

var G__28308 = (i__25827__auto___28307 + (1));
i__25827__auto___28307 = G__28308;
continue;
} else {
}
break;
}

var G__28305 = args28303.length;
switch (G__28305) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28303.length)].join('')));

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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m);
} else {
var m__25415__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,state_map);
} else {
var m__25415__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,state_map);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,mode);
} else {
var m__25415__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___28320 = arguments.length;
var i__25827__auto___28321 = (0);
while(true){
if((i__25827__auto___28321 < len__25826__auto___28320)){
args__25833__auto__.push((arguments[i__25827__auto___28321]));

var G__28322 = (i__25827__auto___28321 + (1));
i__25827__auto___28321 = G__28322;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28314){
var map__28315 = p__28314;
var map__28315__$1 = ((((!((map__28315 == null)))?((((map__28315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28315):map__28315);
var opts = map__28315__$1;
var statearr_28317_28323 = state;
(statearr_28317_28323[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28315,map__28315__$1,opts){
return (function (val){
var statearr_28318_28324 = state;
(statearr_28318_28324[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28315,map__28315__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28319_28325 = state;
(statearr_28319_28325[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28310){
var G__28311 = cljs.core.first.call(null,seq28310);
var seq28310__$1 = cljs.core.next.call(null,seq28310);
var G__28312 = cljs.core.first.call(null,seq28310__$1);
var seq28310__$2 = cljs.core.next.call(null,seq28310__$1);
var G__28313 = cljs.core.first.call(null,seq28310__$2);
var seq28310__$3 = cljs.core.next.call(null,seq28310__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28311,G__28312,G__28313,seq28310__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28491 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28492){
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
this.meta28492 = meta28492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28493,meta28492__$1){
var self__ = this;
var _28493__$1 = this;
return (new cljs.core.async.t_cljs$core$async28491(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28492__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28493){
var self__ = this;
var _28493__$1 = this;
return self__.meta28492;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28492","meta28492",1158830919,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28491";

cljs.core.async.t_cljs$core$async28491.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28491");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28491 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28492){
return (new cljs.core.async.t_cljs$core$async28491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28492));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28491(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26923__auto___28656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28593){
var state_val_28594 = (state_28593[(1)]);
if((state_val_28594 === (7))){
var inst_28509 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28595_28657 = state_28593__$1;
(statearr_28595_28657[(2)] = inst_28509);

(statearr_28595_28657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (20))){
var inst_28521 = (state_28593[(7)]);
var state_28593__$1 = state_28593;
var statearr_28596_28658 = state_28593__$1;
(statearr_28596_28658[(2)] = inst_28521);

(statearr_28596_28658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (27))){
var state_28593__$1 = state_28593;
var statearr_28597_28659 = state_28593__$1;
(statearr_28597_28659[(2)] = null);

(statearr_28597_28659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (1))){
var inst_28497 = (state_28593[(8)]);
var inst_28497__$1 = calc_state.call(null);
var inst_28499 = (inst_28497__$1 == null);
var inst_28500 = cljs.core.not.call(null,inst_28499);
var state_28593__$1 = (function (){var statearr_28598 = state_28593;
(statearr_28598[(8)] = inst_28497__$1);

return statearr_28598;
})();
if(inst_28500){
var statearr_28599_28660 = state_28593__$1;
(statearr_28599_28660[(1)] = (2));

} else {
var statearr_28600_28661 = state_28593__$1;
(statearr_28600_28661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (24))){
var inst_28544 = (state_28593[(9)]);
var inst_28567 = (state_28593[(10)]);
var inst_28553 = (state_28593[(11)]);
var inst_28567__$1 = inst_28544.call(null,inst_28553);
var state_28593__$1 = (function (){var statearr_28601 = state_28593;
(statearr_28601[(10)] = inst_28567__$1);

return statearr_28601;
})();
if(cljs.core.truth_(inst_28567__$1)){
var statearr_28602_28662 = state_28593__$1;
(statearr_28602_28662[(1)] = (29));

} else {
var statearr_28603_28663 = state_28593__$1;
(statearr_28603_28663[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (4))){
var inst_28512 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28512)){
var statearr_28604_28664 = state_28593__$1;
(statearr_28604_28664[(1)] = (8));

} else {
var statearr_28605_28665 = state_28593__$1;
(statearr_28605_28665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (15))){
var inst_28538 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28538)){
var statearr_28606_28666 = state_28593__$1;
(statearr_28606_28666[(1)] = (19));

} else {
var statearr_28607_28667 = state_28593__$1;
(statearr_28607_28667[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (21))){
var inst_28543 = (state_28593[(12)]);
var inst_28543__$1 = (state_28593[(2)]);
var inst_28544 = cljs.core.get.call(null,inst_28543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28545 = cljs.core.get.call(null,inst_28543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28546 = cljs.core.get.call(null,inst_28543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28593__$1 = (function (){var statearr_28608 = state_28593;
(statearr_28608[(9)] = inst_28544);

(statearr_28608[(13)] = inst_28545);

(statearr_28608[(12)] = inst_28543__$1);

return statearr_28608;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28593__$1,(22),inst_28546);
} else {
if((state_val_28594 === (31))){
var inst_28575 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28575)){
var statearr_28609_28668 = state_28593__$1;
(statearr_28609_28668[(1)] = (32));

} else {
var statearr_28610_28669 = state_28593__$1;
(statearr_28610_28669[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (32))){
var inst_28552 = (state_28593[(14)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28593__$1,(35),out,inst_28552);
} else {
if((state_val_28594 === (33))){
var inst_28543 = (state_28593[(12)]);
var inst_28521 = inst_28543;
var state_28593__$1 = (function (){var statearr_28611 = state_28593;
(statearr_28611[(7)] = inst_28521);

return statearr_28611;
})();
var statearr_28612_28670 = state_28593__$1;
(statearr_28612_28670[(2)] = null);

(statearr_28612_28670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (13))){
var inst_28521 = (state_28593[(7)]);
var inst_28528 = inst_28521.cljs$lang$protocol_mask$partition0$;
var inst_28529 = (inst_28528 & (64));
var inst_28530 = inst_28521.cljs$core$ISeq$;
var inst_28531 = (inst_28529) || (inst_28530);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28531)){
var statearr_28613_28671 = state_28593__$1;
(statearr_28613_28671[(1)] = (16));

} else {
var statearr_28614_28672 = state_28593__$1;
(statearr_28614_28672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (22))){
var inst_28552 = (state_28593[(14)]);
var inst_28553 = (state_28593[(11)]);
var inst_28551 = (state_28593[(2)]);
var inst_28552__$1 = cljs.core.nth.call(null,inst_28551,(0),null);
var inst_28553__$1 = cljs.core.nth.call(null,inst_28551,(1),null);
var inst_28554 = (inst_28552__$1 == null);
var inst_28555 = cljs.core._EQ_.call(null,inst_28553__$1,change);
var inst_28556 = (inst_28554) || (inst_28555);
var state_28593__$1 = (function (){var statearr_28615 = state_28593;
(statearr_28615[(14)] = inst_28552__$1);

(statearr_28615[(11)] = inst_28553__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28556)){
var statearr_28616_28673 = state_28593__$1;
(statearr_28616_28673[(1)] = (23));

} else {
var statearr_28617_28674 = state_28593__$1;
(statearr_28617_28674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (36))){
var inst_28543 = (state_28593[(12)]);
var inst_28521 = inst_28543;
var state_28593__$1 = (function (){var statearr_28618 = state_28593;
(statearr_28618[(7)] = inst_28521);

return statearr_28618;
})();
var statearr_28619_28675 = state_28593__$1;
(statearr_28619_28675[(2)] = null);

(statearr_28619_28675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (29))){
var inst_28567 = (state_28593[(10)]);
var state_28593__$1 = state_28593;
var statearr_28620_28676 = state_28593__$1;
(statearr_28620_28676[(2)] = inst_28567);

(statearr_28620_28676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (6))){
var state_28593__$1 = state_28593;
var statearr_28621_28677 = state_28593__$1;
(statearr_28621_28677[(2)] = false);

(statearr_28621_28677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (28))){
var inst_28563 = (state_28593[(2)]);
var inst_28564 = calc_state.call(null);
var inst_28521 = inst_28564;
var state_28593__$1 = (function (){var statearr_28622 = state_28593;
(statearr_28622[(7)] = inst_28521);

(statearr_28622[(15)] = inst_28563);

return statearr_28622;
})();
var statearr_28623_28678 = state_28593__$1;
(statearr_28623_28678[(2)] = null);

(statearr_28623_28678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (25))){
var inst_28589 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28624_28679 = state_28593__$1;
(statearr_28624_28679[(2)] = inst_28589);

(statearr_28624_28679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (34))){
var inst_28587 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28625_28680 = state_28593__$1;
(statearr_28625_28680[(2)] = inst_28587);

(statearr_28625_28680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (17))){
var state_28593__$1 = state_28593;
var statearr_28626_28681 = state_28593__$1;
(statearr_28626_28681[(2)] = false);

(statearr_28626_28681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (3))){
var state_28593__$1 = state_28593;
var statearr_28627_28682 = state_28593__$1;
(statearr_28627_28682[(2)] = false);

(statearr_28627_28682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (12))){
var inst_28591 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28593__$1,inst_28591);
} else {
if((state_val_28594 === (2))){
var inst_28497 = (state_28593[(8)]);
var inst_28502 = inst_28497.cljs$lang$protocol_mask$partition0$;
var inst_28503 = (inst_28502 & (64));
var inst_28504 = inst_28497.cljs$core$ISeq$;
var inst_28505 = (inst_28503) || (inst_28504);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28505)){
var statearr_28628_28683 = state_28593__$1;
(statearr_28628_28683[(1)] = (5));

} else {
var statearr_28629_28684 = state_28593__$1;
(statearr_28629_28684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (23))){
var inst_28552 = (state_28593[(14)]);
var inst_28558 = (inst_28552 == null);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28558)){
var statearr_28630_28685 = state_28593__$1;
(statearr_28630_28685[(1)] = (26));

} else {
var statearr_28631_28686 = state_28593__$1;
(statearr_28631_28686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (35))){
var inst_28578 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28578)){
var statearr_28632_28687 = state_28593__$1;
(statearr_28632_28687[(1)] = (36));

} else {
var statearr_28633_28688 = state_28593__$1;
(statearr_28633_28688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (19))){
var inst_28521 = (state_28593[(7)]);
var inst_28540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28521);
var state_28593__$1 = state_28593;
var statearr_28634_28689 = state_28593__$1;
(statearr_28634_28689[(2)] = inst_28540);

(statearr_28634_28689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (11))){
var inst_28521 = (state_28593[(7)]);
var inst_28525 = (inst_28521 == null);
var inst_28526 = cljs.core.not.call(null,inst_28525);
var state_28593__$1 = state_28593;
if(inst_28526){
var statearr_28635_28690 = state_28593__$1;
(statearr_28635_28690[(1)] = (13));

} else {
var statearr_28636_28691 = state_28593__$1;
(statearr_28636_28691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (9))){
var inst_28497 = (state_28593[(8)]);
var state_28593__$1 = state_28593;
var statearr_28637_28692 = state_28593__$1;
(statearr_28637_28692[(2)] = inst_28497);

(statearr_28637_28692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (5))){
var state_28593__$1 = state_28593;
var statearr_28638_28693 = state_28593__$1;
(statearr_28638_28693[(2)] = true);

(statearr_28638_28693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (14))){
var state_28593__$1 = state_28593;
var statearr_28639_28694 = state_28593__$1;
(statearr_28639_28694[(2)] = false);

(statearr_28639_28694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (26))){
var inst_28553 = (state_28593[(11)]);
var inst_28560 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28553);
var state_28593__$1 = state_28593;
var statearr_28640_28695 = state_28593__$1;
(statearr_28640_28695[(2)] = inst_28560);

(statearr_28640_28695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (16))){
var state_28593__$1 = state_28593;
var statearr_28641_28696 = state_28593__$1;
(statearr_28641_28696[(2)] = true);

(statearr_28641_28696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (38))){
var inst_28583 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28642_28697 = state_28593__$1;
(statearr_28642_28697[(2)] = inst_28583);

(statearr_28642_28697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (30))){
var inst_28544 = (state_28593[(9)]);
var inst_28545 = (state_28593[(13)]);
var inst_28553 = (state_28593[(11)]);
var inst_28570 = cljs.core.empty_QMARK_.call(null,inst_28544);
var inst_28571 = inst_28545.call(null,inst_28553);
var inst_28572 = cljs.core.not.call(null,inst_28571);
var inst_28573 = (inst_28570) && (inst_28572);
var state_28593__$1 = state_28593;
var statearr_28643_28698 = state_28593__$1;
(statearr_28643_28698[(2)] = inst_28573);

(statearr_28643_28698[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (10))){
var inst_28497 = (state_28593[(8)]);
var inst_28517 = (state_28593[(2)]);
var inst_28518 = cljs.core.get.call(null,inst_28517,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28519 = cljs.core.get.call(null,inst_28517,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28520 = cljs.core.get.call(null,inst_28517,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28521 = inst_28497;
var state_28593__$1 = (function (){var statearr_28644 = state_28593;
(statearr_28644[(7)] = inst_28521);

(statearr_28644[(16)] = inst_28520);

(statearr_28644[(17)] = inst_28518);

(statearr_28644[(18)] = inst_28519);

return statearr_28644;
})();
var statearr_28645_28699 = state_28593__$1;
(statearr_28645_28699[(2)] = null);

(statearr_28645_28699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (18))){
var inst_28535 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28646_28700 = state_28593__$1;
(statearr_28646_28700[(2)] = inst_28535);

(statearr_28646_28700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (37))){
var state_28593__$1 = state_28593;
var statearr_28647_28701 = state_28593__$1;
(statearr_28647_28701[(2)] = null);

(statearr_28647_28701[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (8))){
var inst_28497 = (state_28593[(8)]);
var inst_28514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28497);
var state_28593__$1 = state_28593;
var statearr_28648_28702 = state_28593__$1;
(statearr_28648_28702[(2)] = inst_28514);

(statearr_28648_28702[(1)] = (10));


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
});})(c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26811__auto__,c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26812__auto__ = null;
var cljs$core$async$mix_$_state_machine__26812__auto____0 = (function (){
var statearr_28652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28652[(0)] = cljs$core$async$mix_$_state_machine__26812__auto__);

(statearr_28652[(1)] = (1));

return statearr_28652;
});
var cljs$core$async$mix_$_state_machine__26812__auto____1 = (function (state_28593){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_28593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e28653){if((e28653 instanceof Object)){
var ex__26815__auto__ = e28653;
var statearr_28654_28703 = state_28593;
(statearr_28654_28703[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28704 = state_28593;
state_28593 = G__28704;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26812__auto__ = function(state_28593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26812__auto____1.call(this,state_28593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26812__auto____0;
cljs$core$async$mix_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26812__auto____1;
return cljs$core$async$mix_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26925__auto__ = (function (){var statearr_28655 = f__26924__auto__.call(null);
(statearr_28655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___28656);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___28656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25415__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28705 = [];
var len__25826__auto___28708 = arguments.length;
var i__25827__auto___28709 = (0);
while(true){
if((i__25827__auto___28709 < len__25826__auto___28708)){
args28705.push((arguments[i__25827__auto___28709]));

var G__28710 = (i__25827__auto___28709 + (1));
i__25827__auto___28709 = G__28710;
continue;
} else {
}
break;
}

var G__28707 = args28705.length;
switch (G__28707) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28705.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p);
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v);
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
var args28713 = [];
var len__25826__auto___28838 = arguments.length;
var i__25827__auto___28839 = (0);
while(true){
if((i__25827__auto___28839 < len__25826__auto___28838)){
args28713.push((arguments[i__25827__auto___28839]));

var G__28840 = (i__25827__auto___28839 + (1));
i__25827__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var G__28715 = args28713.length;
switch (G__28715) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28713.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24751__auto__,mults){
return (function (p1__28712_SHARP_){
if(cljs.core.truth_(p1__28712_SHARP_.call(null,topic))){
return p1__28712_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28712_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28716 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28717){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28717 = meta28717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28718,meta28717__$1){
var self__ = this;
var _28718__$1 = this;
return (new cljs.core.async.t_cljs$core$async28716(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28717__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28718){
var self__ = this;
var _28718__$1 = this;
return self__.meta28717;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28717","meta28717",-1415455929,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28716";

cljs.core.async.t_cljs$core$async28716.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28716");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28716 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28716(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28717){
return (new cljs.core.async.t_cljs$core$async28716(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28717));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28716(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26923__auto___28842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___28842,mults,ensure_mult,p){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___28842,mults,ensure_mult,p){
return (function (state_28790){
var state_val_28791 = (state_28790[(1)]);
if((state_val_28791 === (7))){
var inst_28786 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28792_28843 = state_28790__$1;
(statearr_28792_28843[(2)] = inst_28786);

(statearr_28792_28843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (20))){
var state_28790__$1 = state_28790;
var statearr_28793_28844 = state_28790__$1;
(statearr_28793_28844[(2)] = null);

(statearr_28793_28844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (1))){
var state_28790__$1 = state_28790;
var statearr_28794_28845 = state_28790__$1;
(statearr_28794_28845[(2)] = null);

(statearr_28794_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (24))){
var inst_28769 = (state_28790[(7)]);
var inst_28778 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28769);
var state_28790__$1 = state_28790;
var statearr_28795_28846 = state_28790__$1;
(statearr_28795_28846[(2)] = inst_28778);

(statearr_28795_28846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (4))){
var inst_28721 = (state_28790[(8)]);
var inst_28721__$1 = (state_28790[(2)]);
var inst_28722 = (inst_28721__$1 == null);
var state_28790__$1 = (function (){var statearr_28796 = state_28790;
(statearr_28796[(8)] = inst_28721__$1);

return statearr_28796;
})();
if(cljs.core.truth_(inst_28722)){
var statearr_28797_28847 = state_28790__$1;
(statearr_28797_28847[(1)] = (5));

} else {
var statearr_28798_28848 = state_28790__$1;
(statearr_28798_28848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (15))){
var inst_28763 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28799_28849 = state_28790__$1;
(statearr_28799_28849[(2)] = inst_28763);

(statearr_28799_28849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (21))){
var inst_28783 = (state_28790[(2)]);
var state_28790__$1 = (function (){var statearr_28800 = state_28790;
(statearr_28800[(9)] = inst_28783);

return statearr_28800;
})();
var statearr_28801_28850 = state_28790__$1;
(statearr_28801_28850[(2)] = null);

(statearr_28801_28850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (13))){
var inst_28745 = (state_28790[(10)]);
var inst_28747 = cljs.core.chunked_seq_QMARK_.call(null,inst_28745);
var state_28790__$1 = state_28790;
if(inst_28747){
var statearr_28802_28851 = state_28790__$1;
(statearr_28802_28851[(1)] = (16));

} else {
var statearr_28803_28852 = state_28790__$1;
(statearr_28803_28852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (22))){
var inst_28775 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
if(cljs.core.truth_(inst_28775)){
var statearr_28804_28853 = state_28790__$1;
(statearr_28804_28853[(1)] = (23));

} else {
var statearr_28805_28854 = state_28790__$1;
(statearr_28805_28854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (6))){
var inst_28721 = (state_28790[(8)]);
var inst_28769 = (state_28790[(7)]);
var inst_28771 = (state_28790[(11)]);
var inst_28769__$1 = topic_fn.call(null,inst_28721);
var inst_28770 = cljs.core.deref.call(null,mults);
var inst_28771__$1 = cljs.core.get.call(null,inst_28770,inst_28769__$1);
var state_28790__$1 = (function (){var statearr_28806 = state_28790;
(statearr_28806[(7)] = inst_28769__$1);

(statearr_28806[(11)] = inst_28771__$1);

return statearr_28806;
})();
if(cljs.core.truth_(inst_28771__$1)){
var statearr_28807_28855 = state_28790__$1;
(statearr_28807_28855[(1)] = (19));

} else {
var statearr_28808_28856 = state_28790__$1;
(statearr_28808_28856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (25))){
var inst_28780 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28809_28857 = state_28790__$1;
(statearr_28809_28857[(2)] = inst_28780);

(statearr_28809_28857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (17))){
var inst_28745 = (state_28790[(10)]);
var inst_28754 = cljs.core.first.call(null,inst_28745);
var inst_28755 = cljs.core.async.muxch_STAR_.call(null,inst_28754);
var inst_28756 = cljs.core.async.close_BANG_.call(null,inst_28755);
var inst_28757 = cljs.core.next.call(null,inst_28745);
var inst_28731 = inst_28757;
var inst_28732 = null;
var inst_28733 = (0);
var inst_28734 = (0);
var state_28790__$1 = (function (){var statearr_28810 = state_28790;
(statearr_28810[(12)] = inst_28733);

(statearr_28810[(13)] = inst_28731);

(statearr_28810[(14)] = inst_28756);

(statearr_28810[(15)] = inst_28732);

(statearr_28810[(16)] = inst_28734);

return statearr_28810;
})();
var statearr_28811_28858 = state_28790__$1;
(statearr_28811_28858[(2)] = null);

(statearr_28811_28858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (3))){
var inst_28788 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28790__$1,inst_28788);
} else {
if((state_val_28791 === (12))){
var inst_28765 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28812_28859 = state_28790__$1;
(statearr_28812_28859[(2)] = inst_28765);

(statearr_28812_28859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (2))){
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28790__$1,(4),ch);
} else {
if((state_val_28791 === (23))){
var state_28790__$1 = state_28790;
var statearr_28813_28860 = state_28790__$1;
(statearr_28813_28860[(2)] = null);

(statearr_28813_28860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (19))){
var inst_28721 = (state_28790[(8)]);
var inst_28771 = (state_28790[(11)]);
var inst_28773 = cljs.core.async.muxch_STAR_.call(null,inst_28771);
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28790__$1,(22),inst_28773,inst_28721);
} else {
if((state_val_28791 === (11))){
var inst_28731 = (state_28790[(13)]);
var inst_28745 = (state_28790[(10)]);
var inst_28745__$1 = cljs.core.seq.call(null,inst_28731);
var state_28790__$1 = (function (){var statearr_28814 = state_28790;
(statearr_28814[(10)] = inst_28745__$1);

return statearr_28814;
})();
if(inst_28745__$1){
var statearr_28815_28861 = state_28790__$1;
(statearr_28815_28861[(1)] = (13));

} else {
var statearr_28816_28862 = state_28790__$1;
(statearr_28816_28862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (9))){
var inst_28767 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28817_28863 = state_28790__$1;
(statearr_28817_28863[(2)] = inst_28767);

(statearr_28817_28863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (5))){
var inst_28728 = cljs.core.deref.call(null,mults);
var inst_28729 = cljs.core.vals.call(null,inst_28728);
var inst_28730 = cljs.core.seq.call(null,inst_28729);
var inst_28731 = inst_28730;
var inst_28732 = null;
var inst_28733 = (0);
var inst_28734 = (0);
var state_28790__$1 = (function (){var statearr_28818 = state_28790;
(statearr_28818[(12)] = inst_28733);

(statearr_28818[(13)] = inst_28731);

(statearr_28818[(15)] = inst_28732);

(statearr_28818[(16)] = inst_28734);

return statearr_28818;
})();
var statearr_28819_28864 = state_28790__$1;
(statearr_28819_28864[(2)] = null);

(statearr_28819_28864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (14))){
var state_28790__$1 = state_28790;
var statearr_28823_28865 = state_28790__$1;
(statearr_28823_28865[(2)] = null);

(statearr_28823_28865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (16))){
var inst_28745 = (state_28790[(10)]);
var inst_28749 = cljs.core.chunk_first.call(null,inst_28745);
var inst_28750 = cljs.core.chunk_rest.call(null,inst_28745);
var inst_28751 = cljs.core.count.call(null,inst_28749);
var inst_28731 = inst_28750;
var inst_28732 = inst_28749;
var inst_28733 = inst_28751;
var inst_28734 = (0);
var state_28790__$1 = (function (){var statearr_28824 = state_28790;
(statearr_28824[(12)] = inst_28733);

(statearr_28824[(13)] = inst_28731);

(statearr_28824[(15)] = inst_28732);

(statearr_28824[(16)] = inst_28734);

return statearr_28824;
})();
var statearr_28825_28866 = state_28790__$1;
(statearr_28825_28866[(2)] = null);

(statearr_28825_28866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (10))){
var inst_28733 = (state_28790[(12)]);
var inst_28731 = (state_28790[(13)]);
var inst_28732 = (state_28790[(15)]);
var inst_28734 = (state_28790[(16)]);
var inst_28739 = cljs.core._nth.call(null,inst_28732,inst_28734);
var inst_28740 = cljs.core.async.muxch_STAR_.call(null,inst_28739);
var inst_28741 = cljs.core.async.close_BANG_.call(null,inst_28740);
var inst_28742 = (inst_28734 + (1));
var tmp28820 = inst_28733;
var tmp28821 = inst_28731;
var tmp28822 = inst_28732;
var inst_28731__$1 = tmp28821;
var inst_28732__$1 = tmp28822;
var inst_28733__$1 = tmp28820;
var inst_28734__$1 = inst_28742;
var state_28790__$1 = (function (){var statearr_28826 = state_28790;
(statearr_28826[(12)] = inst_28733__$1);

(statearr_28826[(17)] = inst_28741);

(statearr_28826[(13)] = inst_28731__$1);

(statearr_28826[(15)] = inst_28732__$1);

(statearr_28826[(16)] = inst_28734__$1);

return statearr_28826;
})();
var statearr_28827_28867 = state_28790__$1;
(statearr_28827_28867[(2)] = null);

(statearr_28827_28867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (18))){
var inst_28760 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28828_28868 = state_28790__$1;
(statearr_28828_28868[(2)] = inst_28760);

(statearr_28828_28868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (8))){
var inst_28733 = (state_28790[(12)]);
var inst_28734 = (state_28790[(16)]);
var inst_28736 = (inst_28734 < inst_28733);
var inst_28737 = inst_28736;
var state_28790__$1 = state_28790;
if(cljs.core.truth_(inst_28737)){
var statearr_28829_28869 = state_28790__$1;
(statearr_28829_28869[(1)] = (10));

} else {
var statearr_28830_28870 = state_28790__$1;
(statearr_28830_28870[(1)] = (11));

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
});})(c__26923__auto___28842,mults,ensure_mult,p))
;
return ((function (switch__26811__auto__,c__26923__auto___28842,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_28834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28834[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_28834[(1)] = (1));

return statearr_28834;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_28790){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_28790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e28835){if((e28835 instanceof Object)){
var ex__26815__auto__ = e28835;
var statearr_28836_28871 = state_28790;
(statearr_28836_28871[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28872 = state_28790;
state_28790 = G__28872;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_28790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_28790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___28842,mults,ensure_mult,p))
})();
var state__26925__auto__ = (function (){var statearr_28837 = f__26924__auto__.call(null);
(statearr_28837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___28842);

return statearr_28837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___28842,mults,ensure_mult,p))
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
var args28873 = [];
var len__25826__auto___28876 = arguments.length;
var i__25827__auto___28877 = (0);
while(true){
if((i__25827__auto___28877 < len__25826__auto___28876)){
args28873.push((arguments[i__25827__auto___28877]));

var G__28878 = (i__25827__auto___28877 + (1));
i__25827__auto___28877 = G__28878;
continue;
} else {
}
break;
}

var G__28875 = args28873.length;
switch (G__28875) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28873.length)].join('')));

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
var args28880 = [];
var len__25826__auto___28883 = arguments.length;
var i__25827__auto___28884 = (0);
while(true){
if((i__25827__auto___28884 < len__25826__auto___28883)){
args28880.push((arguments[i__25827__auto___28884]));

var G__28885 = (i__25827__auto___28884 + (1));
i__25827__auto___28884 = G__28885;
continue;
} else {
}
break;
}

var G__28882 = args28880.length;
switch (G__28882) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28880.length)].join('')));

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
var args28887 = [];
var len__25826__auto___28958 = arguments.length;
var i__25827__auto___28959 = (0);
while(true){
if((i__25827__auto___28959 < len__25826__auto___28958)){
args28887.push((arguments[i__25827__auto___28959]));

var G__28960 = (i__25827__auto___28959 + (1));
i__25827__auto___28959 = G__28960;
continue;
} else {
}
break;
}

var G__28889 = args28887.length;
switch (G__28889) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28887.length)].join('')));

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
var c__26923__auto___28962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28928){
var state_val_28929 = (state_28928[(1)]);
if((state_val_28929 === (7))){
var state_28928__$1 = state_28928;
var statearr_28930_28963 = state_28928__$1;
(statearr_28930_28963[(2)] = null);

(statearr_28930_28963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (1))){
var state_28928__$1 = state_28928;
var statearr_28931_28964 = state_28928__$1;
(statearr_28931_28964[(2)] = null);

(statearr_28931_28964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (4))){
var inst_28892 = (state_28928[(7)]);
var inst_28894 = (inst_28892 < cnt);
var state_28928__$1 = state_28928;
if(cljs.core.truth_(inst_28894)){
var statearr_28932_28965 = state_28928__$1;
(statearr_28932_28965[(1)] = (6));

} else {
var statearr_28933_28966 = state_28928__$1;
(statearr_28933_28966[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (15))){
var inst_28924 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28934_28967 = state_28928__$1;
(statearr_28934_28967[(2)] = inst_28924);

(statearr_28934_28967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (13))){
var inst_28917 = cljs.core.async.close_BANG_.call(null,out);
var state_28928__$1 = state_28928;
var statearr_28935_28968 = state_28928__$1;
(statearr_28935_28968[(2)] = inst_28917);

(statearr_28935_28968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (6))){
var state_28928__$1 = state_28928;
var statearr_28936_28969 = state_28928__$1;
(statearr_28936_28969[(2)] = null);

(statearr_28936_28969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (3))){
var inst_28926 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28928__$1,inst_28926);
} else {
if((state_val_28929 === (12))){
var inst_28914 = (state_28928[(8)]);
var inst_28914__$1 = (state_28928[(2)]);
var inst_28915 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28914__$1);
var state_28928__$1 = (function (){var statearr_28937 = state_28928;
(statearr_28937[(8)] = inst_28914__$1);

return statearr_28937;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28938_28970 = state_28928__$1;
(statearr_28938_28970[(1)] = (13));

} else {
var statearr_28939_28971 = state_28928__$1;
(statearr_28939_28971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (2))){
var inst_28891 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28892 = (0);
var state_28928__$1 = (function (){var statearr_28940 = state_28928;
(statearr_28940[(9)] = inst_28891);

(statearr_28940[(7)] = inst_28892);

return statearr_28940;
})();
var statearr_28941_28972 = state_28928__$1;
(statearr_28941_28972[(2)] = null);

(statearr_28941_28972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (11))){
var inst_28892 = (state_28928[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28928,(10),Object,null,(9));
var inst_28901 = chs__$1.call(null,inst_28892);
var inst_28902 = done.call(null,inst_28892);
var inst_28903 = cljs.core.async.take_BANG_.call(null,inst_28901,inst_28902);
var state_28928__$1 = state_28928;
var statearr_28942_28973 = state_28928__$1;
(statearr_28942_28973[(2)] = inst_28903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (9))){
var inst_28892 = (state_28928[(7)]);
var inst_28905 = (state_28928[(2)]);
var inst_28906 = (inst_28892 + (1));
var inst_28892__$1 = inst_28906;
var state_28928__$1 = (function (){var statearr_28943 = state_28928;
(statearr_28943[(10)] = inst_28905);

(statearr_28943[(7)] = inst_28892__$1);

return statearr_28943;
})();
var statearr_28944_28974 = state_28928__$1;
(statearr_28944_28974[(2)] = null);

(statearr_28944_28974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (5))){
var inst_28912 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28945 = state_28928;
(statearr_28945[(11)] = inst_28912);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(12),dchan);
} else {
if((state_val_28929 === (14))){
var inst_28914 = (state_28928[(8)]);
var inst_28919 = cljs.core.apply.call(null,f,inst_28914);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28928__$1,(16),out,inst_28919);
} else {
if((state_val_28929 === (16))){
var inst_28921 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28946 = state_28928;
(statearr_28946[(12)] = inst_28921);

return statearr_28946;
})();
var statearr_28947_28975 = state_28928__$1;
(statearr_28947_28975[(2)] = null);

(statearr_28947_28975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (10))){
var inst_28896 = (state_28928[(2)]);
var inst_28897 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28928__$1 = (function (){var statearr_28948 = state_28928;
(statearr_28948[(13)] = inst_28896);

return statearr_28948;
})();
var statearr_28949_28976 = state_28928__$1;
(statearr_28949_28976[(2)] = inst_28897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (8))){
var inst_28910 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28950_28977 = state_28928__$1;
(statearr_28950_28977[(2)] = inst_28910);

(statearr_28950_28977[(1)] = (5));


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
});})(c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26811__auto__,c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_28954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28954[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_28954[(1)] = (1));

return statearr_28954;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_28928){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_28928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object)){
var ex__26815__auto__ = e28955;
var statearr_28956_28978 = state_28928;
(statearr_28956_28978[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28979 = state_28928;
state_28928 = G__28979;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_28928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_28928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26925__auto__ = (function (){var statearr_28957 = f__26924__auto__.call(null);
(statearr_28957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___28962);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___28962,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28981 = [];
var len__25826__auto___29039 = arguments.length;
var i__25827__auto___29040 = (0);
while(true){
if((i__25827__auto___29040 < len__25826__auto___29039)){
args28981.push((arguments[i__25827__auto___29040]));

var G__29041 = (i__25827__auto___29040 + (1));
i__25827__auto___29040 = G__29041;
continue;
} else {
}
break;
}

var G__28983 = args28981.length;
switch (G__28983) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28981.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29043,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29043,out){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (7))){
var inst_28994 = (state_29015[(7)]);
var inst_28995 = (state_29015[(8)]);
var inst_28994__$1 = (state_29015[(2)]);
var inst_28995__$1 = cljs.core.nth.call(null,inst_28994__$1,(0),null);
var inst_28996 = cljs.core.nth.call(null,inst_28994__$1,(1),null);
var inst_28997 = (inst_28995__$1 == null);
var state_29015__$1 = (function (){var statearr_29017 = state_29015;
(statearr_29017[(9)] = inst_28996);

(statearr_29017[(7)] = inst_28994__$1);

(statearr_29017[(8)] = inst_28995__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28997)){
var statearr_29018_29044 = state_29015__$1;
(statearr_29018_29044[(1)] = (8));

} else {
var statearr_29019_29045 = state_29015__$1;
(statearr_29019_29045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (1))){
var inst_28984 = cljs.core.vec.call(null,chs);
var inst_28985 = inst_28984;
var state_29015__$1 = (function (){var statearr_29020 = state_29015;
(statearr_29020[(10)] = inst_28985);

return statearr_29020;
})();
var statearr_29021_29046 = state_29015__$1;
(statearr_29021_29046[(2)] = null);

(statearr_29021_29046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (4))){
var inst_28985 = (state_29015[(10)]);
var state_29015__$1 = state_29015;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29015__$1,(7),inst_28985);
} else {
if((state_val_29016 === (6))){
var inst_29011 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29022_29047 = state_29015__$1;
(statearr_29022_29047[(2)] = inst_29011);

(statearr_29022_29047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (3))){
var inst_29013 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (2))){
var inst_28985 = (state_29015[(10)]);
var inst_28987 = cljs.core.count.call(null,inst_28985);
var inst_28988 = (inst_28987 > (0));
var state_29015__$1 = state_29015;
if(cljs.core.truth_(inst_28988)){
var statearr_29024_29048 = state_29015__$1;
(statearr_29024_29048[(1)] = (4));

} else {
var statearr_29025_29049 = state_29015__$1;
(statearr_29025_29049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (11))){
var inst_28985 = (state_29015[(10)]);
var inst_29004 = (state_29015[(2)]);
var tmp29023 = inst_28985;
var inst_28985__$1 = tmp29023;
var state_29015__$1 = (function (){var statearr_29026 = state_29015;
(statearr_29026[(11)] = inst_29004);

(statearr_29026[(10)] = inst_28985__$1);

return statearr_29026;
})();
var statearr_29027_29050 = state_29015__$1;
(statearr_29027_29050[(2)] = null);

(statearr_29027_29050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (9))){
var inst_28995 = (state_29015[(8)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29015__$1,(11),out,inst_28995);
} else {
if((state_val_29016 === (5))){
var inst_29009 = cljs.core.async.close_BANG_.call(null,out);
var state_29015__$1 = state_29015;
var statearr_29028_29051 = state_29015__$1;
(statearr_29028_29051[(2)] = inst_29009);

(statearr_29028_29051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (10))){
var inst_29007 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29029_29052 = state_29015__$1;
(statearr_29029_29052[(2)] = inst_29007);

(statearr_29029_29052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (8))){
var inst_28996 = (state_29015[(9)]);
var inst_28994 = (state_29015[(7)]);
var inst_28995 = (state_29015[(8)]);
var inst_28985 = (state_29015[(10)]);
var inst_28999 = (function (){var cs = inst_28985;
var vec__28990 = inst_28994;
var v = inst_28995;
var c = inst_28996;
return ((function (cs,vec__28990,v,c,inst_28996,inst_28994,inst_28995,inst_28985,state_val_29016,c__26923__auto___29043,out){
return (function (p1__28980_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28980_SHARP_);
});
;})(cs,vec__28990,v,c,inst_28996,inst_28994,inst_28995,inst_28985,state_val_29016,c__26923__auto___29043,out))
})();
var inst_29000 = cljs.core.filterv.call(null,inst_28999,inst_28985);
var inst_28985__$1 = inst_29000;
var state_29015__$1 = (function (){var statearr_29030 = state_29015;
(statearr_29030[(10)] = inst_28985__$1);

return statearr_29030;
})();
var statearr_29031_29053 = state_29015__$1;
(statearr_29031_29053[(2)] = null);

(statearr_29031_29053[(1)] = (2));


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
});})(c__26923__auto___29043,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29043,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29015){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__26815__auto__ = e29036;
var statearr_29037_29054 = state_29015;
(statearr_29037_29054[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29055 = state_29015;
state_29015 = G__29055;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29043,out))
})();
var state__26925__auto__ = (function (){var statearr_29038 = f__26924__auto__.call(null);
(statearr_29038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29043);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29043,out))
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
var args29056 = [];
var len__25826__auto___29105 = arguments.length;
var i__25827__auto___29106 = (0);
while(true){
if((i__25827__auto___29106 < len__25826__auto___29105)){
args29056.push((arguments[i__25827__auto___29106]));

var G__29107 = (i__25827__auto___29106 + (1));
i__25827__auto___29106 = G__29107;
continue;
} else {
}
break;
}

var G__29058 = args29056.length;
switch (G__29058) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29056.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29109,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29109,out){
return (function (state_29082){
var state_val_29083 = (state_29082[(1)]);
if((state_val_29083 === (7))){
var inst_29064 = (state_29082[(7)]);
var inst_29064__$1 = (state_29082[(2)]);
var inst_29065 = (inst_29064__$1 == null);
var inst_29066 = cljs.core.not.call(null,inst_29065);
var state_29082__$1 = (function (){var statearr_29084 = state_29082;
(statearr_29084[(7)] = inst_29064__$1);

return statearr_29084;
})();
if(inst_29066){
var statearr_29085_29110 = state_29082__$1;
(statearr_29085_29110[(1)] = (8));

} else {
var statearr_29086_29111 = state_29082__$1;
(statearr_29086_29111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (1))){
var inst_29059 = (0);
var state_29082__$1 = (function (){var statearr_29087 = state_29082;
(statearr_29087[(8)] = inst_29059);

return statearr_29087;
})();
var statearr_29088_29112 = state_29082__$1;
(statearr_29088_29112[(2)] = null);

(statearr_29088_29112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (4))){
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29082__$1,(7),ch);
} else {
if((state_val_29083 === (6))){
var inst_29077 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29089_29113 = state_29082__$1;
(statearr_29089_29113[(2)] = inst_29077);

(statearr_29089_29113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (3))){
var inst_29079 = (state_29082[(2)]);
var inst_29080 = cljs.core.async.close_BANG_.call(null,out);
var state_29082__$1 = (function (){var statearr_29090 = state_29082;
(statearr_29090[(9)] = inst_29079);

return statearr_29090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29082__$1,inst_29080);
} else {
if((state_val_29083 === (2))){
var inst_29059 = (state_29082[(8)]);
var inst_29061 = (inst_29059 < n);
var state_29082__$1 = state_29082;
if(cljs.core.truth_(inst_29061)){
var statearr_29091_29114 = state_29082__$1;
(statearr_29091_29114[(1)] = (4));

} else {
var statearr_29092_29115 = state_29082__$1;
(statearr_29092_29115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (11))){
var inst_29059 = (state_29082[(8)]);
var inst_29069 = (state_29082[(2)]);
var inst_29070 = (inst_29059 + (1));
var inst_29059__$1 = inst_29070;
var state_29082__$1 = (function (){var statearr_29093 = state_29082;
(statearr_29093[(10)] = inst_29069);

(statearr_29093[(8)] = inst_29059__$1);

return statearr_29093;
})();
var statearr_29094_29116 = state_29082__$1;
(statearr_29094_29116[(2)] = null);

(statearr_29094_29116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (9))){
var state_29082__$1 = state_29082;
var statearr_29095_29117 = state_29082__$1;
(statearr_29095_29117[(2)] = null);

(statearr_29095_29117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (5))){
var state_29082__$1 = state_29082;
var statearr_29096_29118 = state_29082__$1;
(statearr_29096_29118[(2)] = null);

(statearr_29096_29118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (10))){
var inst_29074 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29097_29119 = state_29082__$1;
(statearr_29097_29119[(2)] = inst_29074);

(statearr_29097_29119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (8))){
var inst_29064 = (state_29082[(7)]);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29082__$1,(11),out,inst_29064);
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
});})(c__26923__auto___29109,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29109,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29101[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29101[(1)] = (1));

return statearr_29101;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29082){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29102){if((e29102 instanceof Object)){
var ex__26815__auto__ = e29102;
var statearr_29103_29120 = state_29082;
(statearr_29103_29120[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29121 = state_29082;
state_29082 = G__29121;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29109,out))
})();
var state__26925__auto__ = (function (){var statearr_29104 = f__26924__auto__.call(null);
(statearr_29104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29109);

return statearr_29104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29109,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29129 = (function (map_LT_,f,ch,meta29130){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29130 = meta29130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29131,meta29130__$1){
var self__ = this;
var _29131__$1 = this;
return (new cljs.core.async.t_cljs$core$async29129(self__.map_LT_,self__.f,self__.ch,meta29130__$1));
});

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29131){
var self__ = this;
var _29131__$1 = this;
return self__.meta29130;
});

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29132 = (function (map_LT_,f,ch,meta29130,_,fn1,meta29133){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29130 = meta29130;
this._ = _;
this.fn1 = fn1;
this.meta29133 = meta29133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29134,meta29133__$1){
var self__ = this;
var _29134__$1 = this;
return (new cljs.core.async.t_cljs$core$async29132(self__.map_LT_,self__.f,self__.ch,self__.meta29130,self__._,self__.fn1,meta29133__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29134){
var self__ = this;
var _29134__$1 = this;
return self__.meta29133;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29122_SHARP_){
return f1.call(null,(((p1__29122_SHARP_ == null))?null:self__.f.call(null,p1__29122_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29130","meta29130",-1478926889,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29129","cljs.core.async/t_cljs$core$async29129",-22085491,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29133","meta29133",-349939453,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29132";

cljs.core.async.t_cljs$core$async29132.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29132");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29132 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29132(map_LT___$1,f__$1,ch__$1,meta29130__$1,___$2,fn1__$1,meta29133){
return (new cljs.core.async.t_cljs$core$async29132(map_LT___$1,f__$1,ch__$1,meta29130__$1,___$2,fn1__$1,meta29133));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29132(self__.map_LT_,self__.f,self__.ch,self__.meta29130,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24739__auto__ = ret;
if(cljs.core.truth_(and__24739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29130","meta29130",-1478926889,null)], null);
});

cljs.core.async.t_cljs$core$async29129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29129";

cljs.core.async.t_cljs$core$async29129.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29129");
});

cljs.core.async.__GT_t_cljs$core$async29129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29129(map_LT___$1,f__$1,ch__$1,meta29130){
return (new cljs.core.async.t_cljs$core$async29129(map_LT___$1,f__$1,ch__$1,meta29130));
});

}

return (new cljs.core.async.t_cljs$core$async29129(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29138 = (function (map_GT_,f,ch,meta29139){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29139 = meta29139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29140,meta29139__$1){
var self__ = this;
var _29140__$1 = this;
return (new cljs.core.async.t_cljs$core$async29138(self__.map_GT_,self__.f,self__.ch,meta29139__$1));
});

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29140){
var self__ = this;
var _29140__$1 = this;
return self__.meta29139;
});

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29139","meta29139",-366965484,null)], null);
});

cljs.core.async.t_cljs$core$async29138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29138";

cljs.core.async.t_cljs$core$async29138.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29138");
});

cljs.core.async.__GT_t_cljs$core$async29138 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29138(map_GT___$1,f__$1,ch__$1,meta29139){
return (new cljs.core.async.t_cljs$core$async29138(map_GT___$1,f__$1,ch__$1,meta29139));
});

}

return (new cljs.core.async.t_cljs$core$async29138(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29144 = (function (filter_GT_,p,ch,meta29145){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29145 = meta29145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29146,meta29145__$1){
var self__ = this;
var _29146__$1 = this;
return (new cljs.core.async.t_cljs$core$async29144(self__.filter_GT_,self__.p,self__.ch,meta29145__$1));
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29146){
var self__ = this;
var _29146__$1 = this;
return self__.meta29145;
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29145","meta29145",-1152565117,null)], null);
});

cljs.core.async.t_cljs$core$async29144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29144";

cljs.core.async.t_cljs$core$async29144.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29144");
});

cljs.core.async.__GT_t_cljs$core$async29144 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29144(filter_GT___$1,p__$1,ch__$1,meta29145){
return (new cljs.core.async.t_cljs$core$async29144(filter_GT___$1,p__$1,ch__$1,meta29145));
});

}

return (new cljs.core.async.t_cljs$core$async29144(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29147 = [];
var len__25826__auto___29191 = arguments.length;
var i__25827__auto___29192 = (0);
while(true){
if((i__25827__auto___29192 < len__25826__auto___29191)){
args29147.push((arguments[i__25827__auto___29192]));

var G__29193 = (i__25827__auto___29192 + (1));
i__25827__auto___29192 = G__29193;
continue;
} else {
}
break;
}

var G__29149 = args29147.length;
switch (G__29149) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29147.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29195,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29195,out){
return (function (state_29170){
var state_val_29171 = (state_29170[(1)]);
if((state_val_29171 === (7))){
var inst_29166 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29172_29196 = state_29170__$1;
(statearr_29172_29196[(2)] = inst_29166);

(statearr_29172_29196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (1))){
var state_29170__$1 = state_29170;
var statearr_29173_29197 = state_29170__$1;
(statearr_29173_29197[(2)] = null);

(statearr_29173_29197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (4))){
var inst_29152 = (state_29170[(7)]);
var inst_29152__$1 = (state_29170[(2)]);
var inst_29153 = (inst_29152__$1 == null);
var state_29170__$1 = (function (){var statearr_29174 = state_29170;
(statearr_29174[(7)] = inst_29152__$1);

return statearr_29174;
})();
if(cljs.core.truth_(inst_29153)){
var statearr_29175_29198 = state_29170__$1;
(statearr_29175_29198[(1)] = (5));

} else {
var statearr_29176_29199 = state_29170__$1;
(statearr_29176_29199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (6))){
var inst_29152 = (state_29170[(7)]);
var inst_29157 = p.call(null,inst_29152);
var state_29170__$1 = state_29170;
if(cljs.core.truth_(inst_29157)){
var statearr_29177_29200 = state_29170__$1;
(statearr_29177_29200[(1)] = (8));

} else {
var statearr_29178_29201 = state_29170__$1;
(statearr_29178_29201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (3))){
var inst_29168 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29170__$1,inst_29168);
} else {
if((state_val_29171 === (2))){
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29170__$1,(4),ch);
} else {
if((state_val_29171 === (11))){
var inst_29160 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29179_29202 = state_29170__$1;
(statearr_29179_29202[(2)] = inst_29160);

(statearr_29179_29202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (9))){
var state_29170__$1 = state_29170;
var statearr_29180_29203 = state_29170__$1;
(statearr_29180_29203[(2)] = null);

(statearr_29180_29203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (5))){
var inst_29155 = cljs.core.async.close_BANG_.call(null,out);
var state_29170__$1 = state_29170;
var statearr_29181_29204 = state_29170__$1;
(statearr_29181_29204[(2)] = inst_29155);

(statearr_29181_29204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (10))){
var inst_29163 = (state_29170[(2)]);
var state_29170__$1 = (function (){var statearr_29182 = state_29170;
(statearr_29182[(8)] = inst_29163);

return statearr_29182;
})();
var statearr_29183_29205 = state_29170__$1;
(statearr_29183_29205[(2)] = null);

(statearr_29183_29205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (8))){
var inst_29152 = (state_29170[(7)]);
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29170__$1,(11),out,inst_29152);
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
});})(c__26923__auto___29195,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29195,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29187 = [null,null,null,null,null,null,null,null,null];
(statearr_29187[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29187[(1)] = (1));

return statearr_29187;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29170){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29188){if((e29188 instanceof Object)){
var ex__26815__auto__ = e29188;
var statearr_29189_29206 = state_29170;
(statearr_29189_29206[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29207 = state_29170;
state_29170 = G__29207;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29195,out))
})();
var state__26925__auto__ = (function (){var statearr_29190 = f__26924__auto__.call(null);
(statearr_29190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29195);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29195,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29208 = [];
var len__25826__auto___29211 = arguments.length;
var i__25827__auto___29212 = (0);
while(true){
if((i__25827__auto___29212 < len__25826__auto___29211)){
args29208.push((arguments[i__25827__auto___29212]));

var G__29213 = (i__25827__auto___29212 + (1));
i__25827__auto___29212 = G__29213;
continue;
} else {
}
break;
}

var G__29210 = args29208.length;
switch (G__29210) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29208.length)].join('')));

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
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__){
return (function (state_29380){
var state_val_29381 = (state_29380[(1)]);
if((state_val_29381 === (7))){
var inst_29376 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29382_29423 = state_29380__$1;
(statearr_29382_29423[(2)] = inst_29376);

(statearr_29382_29423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (20))){
var inst_29346 = (state_29380[(7)]);
var inst_29357 = (state_29380[(2)]);
var inst_29358 = cljs.core.next.call(null,inst_29346);
var inst_29332 = inst_29358;
var inst_29333 = null;
var inst_29334 = (0);
var inst_29335 = (0);
var state_29380__$1 = (function (){var statearr_29383 = state_29380;
(statearr_29383[(8)] = inst_29357);

(statearr_29383[(9)] = inst_29334);

(statearr_29383[(10)] = inst_29333);

(statearr_29383[(11)] = inst_29332);

(statearr_29383[(12)] = inst_29335);

return statearr_29383;
})();
var statearr_29384_29424 = state_29380__$1;
(statearr_29384_29424[(2)] = null);

(statearr_29384_29424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (1))){
var state_29380__$1 = state_29380;
var statearr_29385_29425 = state_29380__$1;
(statearr_29385_29425[(2)] = null);

(statearr_29385_29425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (4))){
var inst_29321 = (state_29380[(13)]);
var inst_29321__$1 = (state_29380[(2)]);
var inst_29322 = (inst_29321__$1 == null);
var state_29380__$1 = (function (){var statearr_29386 = state_29380;
(statearr_29386[(13)] = inst_29321__$1);

return statearr_29386;
})();
if(cljs.core.truth_(inst_29322)){
var statearr_29387_29426 = state_29380__$1;
(statearr_29387_29426[(1)] = (5));

} else {
var statearr_29388_29427 = state_29380__$1;
(statearr_29388_29427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (15))){
var state_29380__$1 = state_29380;
var statearr_29392_29428 = state_29380__$1;
(statearr_29392_29428[(2)] = null);

(statearr_29392_29428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (21))){
var state_29380__$1 = state_29380;
var statearr_29393_29429 = state_29380__$1;
(statearr_29393_29429[(2)] = null);

(statearr_29393_29429[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (13))){
var inst_29334 = (state_29380[(9)]);
var inst_29333 = (state_29380[(10)]);
var inst_29332 = (state_29380[(11)]);
var inst_29335 = (state_29380[(12)]);
var inst_29342 = (state_29380[(2)]);
var inst_29343 = (inst_29335 + (1));
var tmp29389 = inst_29334;
var tmp29390 = inst_29333;
var tmp29391 = inst_29332;
var inst_29332__$1 = tmp29391;
var inst_29333__$1 = tmp29390;
var inst_29334__$1 = tmp29389;
var inst_29335__$1 = inst_29343;
var state_29380__$1 = (function (){var statearr_29394 = state_29380;
(statearr_29394[(9)] = inst_29334__$1);

(statearr_29394[(10)] = inst_29333__$1);

(statearr_29394[(11)] = inst_29332__$1);

(statearr_29394[(12)] = inst_29335__$1);

(statearr_29394[(14)] = inst_29342);

return statearr_29394;
})();
var statearr_29395_29430 = state_29380__$1;
(statearr_29395_29430[(2)] = null);

(statearr_29395_29430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (22))){
var state_29380__$1 = state_29380;
var statearr_29396_29431 = state_29380__$1;
(statearr_29396_29431[(2)] = null);

(statearr_29396_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (6))){
var inst_29321 = (state_29380[(13)]);
var inst_29330 = f.call(null,inst_29321);
var inst_29331 = cljs.core.seq.call(null,inst_29330);
var inst_29332 = inst_29331;
var inst_29333 = null;
var inst_29334 = (0);
var inst_29335 = (0);
var state_29380__$1 = (function (){var statearr_29397 = state_29380;
(statearr_29397[(9)] = inst_29334);

(statearr_29397[(10)] = inst_29333);

(statearr_29397[(11)] = inst_29332);

(statearr_29397[(12)] = inst_29335);

return statearr_29397;
})();
var statearr_29398_29432 = state_29380__$1;
(statearr_29398_29432[(2)] = null);

(statearr_29398_29432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (17))){
var inst_29346 = (state_29380[(7)]);
var inst_29350 = cljs.core.chunk_first.call(null,inst_29346);
var inst_29351 = cljs.core.chunk_rest.call(null,inst_29346);
var inst_29352 = cljs.core.count.call(null,inst_29350);
var inst_29332 = inst_29351;
var inst_29333 = inst_29350;
var inst_29334 = inst_29352;
var inst_29335 = (0);
var state_29380__$1 = (function (){var statearr_29399 = state_29380;
(statearr_29399[(9)] = inst_29334);

(statearr_29399[(10)] = inst_29333);

(statearr_29399[(11)] = inst_29332);

(statearr_29399[(12)] = inst_29335);

return statearr_29399;
})();
var statearr_29400_29433 = state_29380__$1;
(statearr_29400_29433[(2)] = null);

(statearr_29400_29433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (3))){
var inst_29378 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29380__$1,inst_29378);
} else {
if((state_val_29381 === (12))){
var inst_29366 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29401_29434 = state_29380__$1;
(statearr_29401_29434[(2)] = inst_29366);

(statearr_29401_29434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (2))){
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29380__$1,(4),in$);
} else {
if((state_val_29381 === (23))){
var inst_29374 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29402_29435 = state_29380__$1;
(statearr_29402_29435[(2)] = inst_29374);

(statearr_29402_29435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (19))){
var inst_29361 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29403_29436 = state_29380__$1;
(statearr_29403_29436[(2)] = inst_29361);

(statearr_29403_29436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (11))){
var inst_29332 = (state_29380[(11)]);
var inst_29346 = (state_29380[(7)]);
var inst_29346__$1 = cljs.core.seq.call(null,inst_29332);
var state_29380__$1 = (function (){var statearr_29404 = state_29380;
(statearr_29404[(7)] = inst_29346__$1);

return statearr_29404;
})();
if(inst_29346__$1){
var statearr_29405_29437 = state_29380__$1;
(statearr_29405_29437[(1)] = (14));

} else {
var statearr_29406_29438 = state_29380__$1;
(statearr_29406_29438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (9))){
var inst_29368 = (state_29380[(2)]);
var inst_29369 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29380__$1 = (function (){var statearr_29407 = state_29380;
(statearr_29407[(15)] = inst_29368);

return statearr_29407;
})();
if(cljs.core.truth_(inst_29369)){
var statearr_29408_29439 = state_29380__$1;
(statearr_29408_29439[(1)] = (21));

} else {
var statearr_29409_29440 = state_29380__$1;
(statearr_29409_29440[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (5))){
var inst_29324 = cljs.core.async.close_BANG_.call(null,out);
var state_29380__$1 = state_29380;
var statearr_29410_29441 = state_29380__$1;
(statearr_29410_29441[(2)] = inst_29324);

(statearr_29410_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (14))){
var inst_29346 = (state_29380[(7)]);
var inst_29348 = cljs.core.chunked_seq_QMARK_.call(null,inst_29346);
var state_29380__$1 = state_29380;
if(inst_29348){
var statearr_29411_29442 = state_29380__$1;
(statearr_29411_29442[(1)] = (17));

} else {
var statearr_29412_29443 = state_29380__$1;
(statearr_29412_29443[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (16))){
var inst_29364 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29413_29444 = state_29380__$1;
(statearr_29413_29444[(2)] = inst_29364);

(statearr_29413_29444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (10))){
var inst_29333 = (state_29380[(10)]);
var inst_29335 = (state_29380[(12)]);
var inst_29340 = cljs.core._nth.call(null,inst_29333,inst_29335);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29380__$1,(13),out,inst_29340);
} else {
if((state_val_29381 === (18))){
var inst_29346 = (state_29380[(7)]);
var inst_29355 = cljs.core.first.call(null,inst_29346);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29380__$1,(20),out,inst_29355);
} else {
if((state_val_29381 === (8))){
var inst_29334 = (state_29380[(9)]);
var inst_29335 = (state_29380[(12)]);
var inst_29337 = (inst_29335 < inst_29334);
var inst_29338 = inst_29337;
var state_29380__$1 = state_29380;
if(cljs.core.truth_(inst_29338)){
var statearr_29414_29445 = state_29380__$1;
(statearr_29414_29445[(1)] = (10));

} else {
var statearr_29415_29446 = state_29380__$1;
(statearr_29415_29446[(1)] = (11));

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
});})(c__26923__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____0 = (function (){
var statearr_29419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29419[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__);

(statearr_29419[(1)] = (1));

return statearr_29419;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____1 = (function (state_29380){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29420){if((e29420 instanceof Object)){
var ex__26815__auto__ = e29420;
var statearr_29421_29447 = state_29380;
(statearr_29421_29447[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29448 = state_29380;
state_29380 = G__29448;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__ = function(state_29380){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____1.call(this,state_29380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__))
})();
var state__26925__auto__ = (function (){var statearr_29422 = f__26924__auto__.call(null);
(statearr_29422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_29422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__))
);

return c__26923__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29449 = [];
var len__25826__auto___29452 = arguments.length;
var i__25827__auto___29453 = (0);
while(true){
if((i__25827__auto___29453 < len__25826__auto___29452)){
args29449.push((arguments[i__25827__auto___29453]));

var G__29454 = (i__25827__auto___29453 + (1));
i__25827__auto___29453 = G__29454;
continue;
} else {
}
break;
}

var G__29451 = args29449.length;
switch (G__29451) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29449.length)].join('')));

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
var args29456 = [];
var len__25826__auto___29459 = arguments.length;
var i__25827__auto___29460 = (0);
while(true){
if((i__25827__auto___29460 < len__25826__auto___29459)){
args29456.push((arguments[i__25827__auto___29460]));

var G__29461 = (i__25827__auto___29460 + (1));
i__25827__auto___29460 = G__29461;
continue;
} else {
}
break;
}

var G__29458 = args29456.length;
switch (G__29458) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29456.length)].join('')));

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
var args29463 = [];
var len__25826__auto___29514 = arguments.length;
var i__25827__auto___29515 = (0);
while(true){
if((i__25827__auto___29515 < len__25826__auto___29514)){
args29463.push((arguments[i__25827__auto___29515]));

var G__29516 = (i__25827__auto___29515 + (1));
i__25827__auto___29515 = G__29516;
continue;
} else {
}
break;
}

var G__29465 = args29463.length;
switch (G__29465) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29463.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29518,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29518,out){
return (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (7))){
var inst_29484 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29491_29519 = state_29489__$1;
(statearr_29491_29519[(2)] = inst_29484);

(statearr_29491_29519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (1))){
var inst_29466 = null;
var state_29489__$1 = (function (){var statearr_29492 = state_29489;
(statearr_29492[(7)] = inst_29466);

return statearr_29492;
})();
var statearr_29493_29520 = state_29489__$1;
(statearr_29493_29520[(2)] = null);

(statearr_29493_29520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (4))){
var inst_29469 = (state_29489[(8)]);
var inst_29469__$1 = (state_29489[(2)]);
var inst_29470 = (inst_29469__$1 == null);
var inst_29471 = cljs.core.not.call(null,inst_29470);
var state_29489__$1 = (function (){var statearr_29494 = state_29489;
(statearr_29494[(8)] = inst_29469__$1);

return statearr_29494;
})();
if(inst_29471){
var statearr_29495_29521 = state_29489__$1;
(statearr_29495_29521[(1)] = (5));

} else {
var statearr_29496_29522 = state_29489__$1;
(statearr_29496_29522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (6))){
var state_29489__$1 = state_29489;
var statearr_29497_29523 = state_29489__$1;
(statearr_29497_29523[(2)] = null);

(statearr_29497_29523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (3))){
var inst_29486 = (state_29489[(2)]);
var inst_29487 = cljs.core.async.close_BANG_.call(null,out);
var state_29489__$1 = (function (){var statearr_29498 = state_29489;
(statearr_29498[(9)] = inst_29486);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29489__$1,inst_29487);
} else {
if((state_val_29490 === (2))){
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(4),ch);
} else {
if((state_val_29490 === (11))){
var inst_29469 = (state_29489[(8)]);
var inst_29478 = (state_29489[(2)]);
var inst_29466 = inst_29469;
var state_29489__$1 = (function (){var statearr_29499 = state_29489;
(statearr_29499[(10)] = inst_29478);

(statearr_29499[(7)] = inst_29466);

return statearr_29499;
})();
var statearr_29500_29524 = state_29489__$1;
(statearr_29500_29524[(2)] = null);

(statearr_29500_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (9))){
var inst_29469 = (state_29489[(8)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29489__$1,(11),out,inst_29469);
} else {
if((state_val_29490 === (5))){
var inst_29469 = (state_29489[(8)]);
var inst_29466 = (state_29489[(7)]);
var inst_29473 = cljs.core._EQ_.call(null,inst_29469,inst_29466);
var state_29489__$1 = state_29489;
if(inst_29473){
var statearr_29502_29525 = state_29489__$1;
(statearr_29502_29525[(1)] = (8));

} else {
var statearr_29503_29526 = state_29489__$1;
(statearr_29503_29526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (10))){
var inst_29481 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29504_29527 = state_29489__$1;
(statearr_29504_29527[(2)] = inst_29481);

(statearr_29504_29527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (8))){
var inst_29466 = (state_29489[(7)]);
var tmp29501 = inst_29466;
var inst_29466__$1 = tmp29501;
var state_29489__$1 = (function (){var statearr_29505 = state_29489;
(statearr_29505[(7)] = inst_29466__$1);

return statearr_29505;
})();
var statearr_29506_29528 = state_29489__$1;
(statearr_29506_29528[(2)] = null);

(statearr_29506_29528[(1)] = (2));


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
});})(c__26923__auto___29518,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29518,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29510[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29510[(1)] = (1));

return statearr_29510;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29489){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29511){if((e29511 instanceof Object)){
var ex__26815__auto__ = e29511;
var statearr_29512_29529 = state_29489;
(statearr_29512_29529[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29530 = state_29489;
state_29489 = G__29530;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29518,out))
})();
var state__26925__auto__ = (function (){var statearr_29513 = f__26924__auto__.call(null);
(statearr_29513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29518);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29518,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29531 = [];
var len__25826__auto___29601 = arguments.length;
var i__25827__auto___29602 = (0);
while(true){
if((i__25827__auto___29602 < len__25826__auto___29601)){
args29531.push((arguments[i__25827__auto___29602]));

var G__29603 = (i__25827__auto___29602 + (1));
i__25827__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var G__29533 = args29531.length;
switch (G__29533) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29531.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29605,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29605,out){
return (function (state_29571){
var state_val_29572 = (state_29571[(1)]);
if((state_val_29572 === (7))){
var inst_29567 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29573_29606 = state_29571__$1;
(statearr_29573_29606[(2)] = inst_29567);

(statearr_29573_29606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (1))){
var inst_29534 = (new Array(n));
var inst_29535 = inst_29534;
var inst_29536 = (0);
var state_29571__$1 = (function (){var statearr_29574 = state_29571;
(statearr_29574[(7)] = inst_29536);

(statearr_29574[(8)] = inst_29535);

return statearr_29574;
})();
var statearr_29575_29607 = state_29571__$1;
(statearr_29575_29607[(2)] = null);

(statearr_29575_29607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (4))){
var inst_29539 = (state_29571[(9)]);
var inst_29539__$1 = (state_29571[(2)]);
var inst_29540 = (inst_29539__$1 == null);
var inst_29541 = cljs.core.not.call(null,inst_29540);
var state_29571__$1 = (function (){var statearr_29576 = state_29571;
(statearr_29576[(9)] = inst_29539__$1);

return statearr_29576;
})();
if(inst_29541){
var statearr_29577_29608 = state_29571__$1;
(statearr_29577_29608[(1)] = (5));

} else {
var statearr_29578_29609 = state_29571__$1;
(statearr_29578_29609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (15))){
var inst_29561 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29579_29610 = state_29571__$1;
(statearr_29579_29610[(2)] = inst_29561);

(statearr_29579_29610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (13))){
var state_29571__$1 = state_29571;
var statearr_29580_29611 = state_29571__$1;
(statearr_29580_29611[(2)] = null);

(statearr_29580_29611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (6))){
var inst_29536 = (state_29571[(7)]);
var inst_29557 = (inst_29536 > (0));
var state_29571__$1 = state_29571;
if(cljs.core.truth_(inst_29557)){
var statearr_29581_29612 = state_29571__$1;
(statearr_29581_29612[(1)] = (12));

} else {
var statearr_29582_29613 = state_29571__$1;
(statearr_29582_29613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (3))){
var inst_29569 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29571__$1,inst_29569);
} else {
if((state_val_29572 === (12))){
var inst_29535 = (state_29571[(8)]);
var inst_29559 = cljs.core.vec.call(null,inst_29535);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29571__$1,(15),out,inst_29559);
} else {
if((state_val_29572 === (2))){
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29571__$1,(4),ch);
} else {
if((state_val_29572 === (11))){
var inst_29551 = (state_29571[(2)]);
var inst_29552 = (new Array(n));
var inst_29535 = inst_29552;
var inst_29536 = (0);
var state_29571__$1 = (function (){var statearr_29583 = state_29571;
(statearr_29583[(10)] = inst_29551);

(statearr_29583[(7)] = inst_29536);

(statearr_29583[(8)] = inst_29535);

return statearr_29583;
})();
var statearr_29584_29614 = state_29571__$1;
(statearr_29584_29614[(2)] = null);

(statearr_29584_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (9))){
var inst_29535 = (state_29571[(8)]);
var inst_29549 = cljs.core.vec.call(null,inst_29535);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29571__$1,(11),out,inst_29549);
} else {
if((state_val_29572 === (5))){
var inst_29544 = (state_29571[(11)]);
var inst_29539 = (state_29571[(9)]);
var inst_29536 = (state_29571[(7)]);
var inst_29535 = (state_29571[(8)]);
var inst_29543 = (inst_29535[inst_29536] = inst_29539);
var inst_29544__$1 = (inst_29536 + (1));
var inst_29545 = (inst_29544__$1 < n);
var state_29571__$1 = (function (){var statearr_29585 = state_29571;
(statearr_29585[(11)] = inst_29544__$1);

(statearr_29585[(12)] = inst_29543);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29545)){
var statearr_29586_29615 = state_29571__$1;
(statearr_29586_29615[(1)] = (8));

} else {
var statearr_29587_29616 = state_29571__$1;
(statearr_29587_29616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (14))){
var inst_29564 = (state_29571[(2)]);
var inst_29565 = cljs.core.async.close_BANG_.call(null,out);
var state_29571__$1 = (function (){var statearr_29589 = state_29571;
(statearr_29589[(13)] = inst_29564);

return statearr_29589;
})();
var statearr_29590_29617 = state_29571__$1;
(statearr_29590_29617[(2)] = inst_29565);

(statearr_29590_29617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (10))){
var inst_29555 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29591_29618 = state_29571__$1;
(statearr_29591_29618[(2)] = inst_29555);

(statearr_29591_29618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (8))){
var inst_29544 = (state_29571[(11)]);
var inst_29535 = (state_29571[(8)]);
var tmp29588 = inst_29535;
var inst_29535__$1 = tmp29588;
var inst_29536 = inst_29544;
var state_29571__$1 = (function (){var statearr_29592 = state_29571;
(statearr_29592[(7)] = inst_29536);

(statearr_29592[(8)] = inst_29535__$1);

return statearr_29592;
})();
var statearr_29593_29619 = state_29571__$1;
(statearr_29593_29619[(2)] = null);

(statearr_29593_29619[(1)] = (2));


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
});})(c__26923__auto___29605,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29605,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29597[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29597[(1)] = (1));

return statearr_29597;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29571){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29598){if((e29598 instanceof Object)){
var ex__26815__auto__ = e29598;
var statearr_29599_29620 = state_29571;
(statearr_29599_29620[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29621 = state_29571;
state_29571 = G__29621;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29605,out))
})();
var state__26925__auto__ = (function (){var statearr_29600 = f__26924__auto__.call(null);
(statearr_29600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29605);

return statearr_29600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29622 = [];
var len__25826__auto___29696 = arguments.length;
var i__25827__auto___29697 = (0);
while(true){
if((i__25827__auto___29697 < len__25826__auto___29696)){
args29622.push((arguments[i__25827__auto___29697]));

var G__29698 = (i__25827__auto___29697 + (1));
i__25827__auto___29697 = G__29698;
continue;
} else {
}
break;
}

var G__29624 = args29622.length;
switch (G__29624) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29622.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26923__auto___29700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___29700,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___29700,out){
return (function (state_29666){
var state_val_29667 = (state_29666[(1)]);
if((state_val_29667 === (7))){
var inst_29662 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29668_29701 = state_29666__$1;
(statearr_29668_29701[(2)] = inst_29662);

(statearr_29668_29701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (1))){
var inst_29625 = [];
var inst_29626 = inst_29625;
var inst_29627 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29666__$1 = (function (){var statearr_29669 = state_29666;
(statearr_29669[(7)] = inst_29627);

(statearr_29669[(8)] = inst_29626);

return statearr_29669;
})();
var statearr_29670_29702 = state_29666__$1;
(statearr_29670_29702[(2)] = null);

(statearr_29670_29702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (4))){
var inst_29630 = (state_29666[(9)]);
var inst_29630__$1 = (state_29666[(2)]);
var inst_29631 = (inst_29630__$1 == null);
var inst_29632 = cljs.core.not.call(null,inst_29631);
var state_29666__$1 = (function (){var statearr_29671 = state_29666;
(statearr_29671[(9)] = inst_29630__$1);

return statearr_29671;
})();
if(inst_29632){
var statearr_29672_29703 = state_29666__$1;
(statearr_29672_29703[(1)] = (5));

} else {
var statearr_29673_29704 = state_29666__$1;
(statearr_29673_29704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (15))){
var inst_29656 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29674_29705 = state_29666__$1;
(statearr_29674_29705[(2)] = inst_29656);

(statearr_29674_29705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (13))){
var state_29666__$1 = state_29666;
var statearr_29675_29706 = state_29666__$1;
(statearr_29675_29706[(2)] = null);

(statearr_29675_29706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (6))){
var inst_29626 = (state_29666[(8)]);
var inst_29651 = inst_29626.length;
var inst_29652 = (inst_29651 > (0));
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29652)){
var statearr_29676_29707 = state_29666__$1;
(statearr_29676_29707[(1)] = (12));

} else {
var statearr_29677_29708 = state_29666__$1;
(statearr_29677_29708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (3))){
var inst_29664 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29666__$1,inst_29664);
} else {
if((state_val_29667 === (12))){
var inst_29626 = (state_29666[(8)]);
var inst_29654 = cljs.core.vec.call(null,inst_29626);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29666__$1,(15),out,inst_29654);
} else {
if((state_val_29667 === (2))){
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29666__$1,(4),ch);
} else {
if((state_val_29667 === (11))){
var inst_29630 = (state_29666[(9)]);
var inst_29634 = (state_29666[(10)]);
var inst_29644 = (state_29666[(2)]);
var inst_29645 = [];
var inst_29646 = inst_29645.push(inst_29630);
var inst_29626 = inst_29645;
var inst_29627 = inst_29634;
var state_29666__$1 = (function (){var statearr_29678 = state_29666;
(statearr_29678[(11)] = inst_29646);

(statearr_29678[(7)] = inst_29627);

(statearr_29678[(12)] = inst_29644);

(statearr_29678[(8)] = inst_29626);

return statearr_29678;
})();
var statearr_29679_29709 = state_29666__$1;
(statearr_29679_29709[(2)] = null);

(statearr_29679_29709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (9))){
var inst_29626 = (state_29666[(8)]);
var inst_29642 = cljs.core.vec.call(null,inst_29626);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29666__$1,(11),out,inst_29642);
} else {
if((state_val_29667 === (5))){
var inst_29630 = (state_29666[(9)]);
var inst_29627 = (state_29666[(7)]);
var inst_29634 = (state_29666[(10)]);
var inst_29634__$1 = f.call(null,inst_29630);
var inst_29635 = cljs.core._EQ_.call(null,inst_29634__$1,inst_29627);
var inst_29636 = cljs.core.keyword_identical_QMARK_.call(null,inst_29627,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29637 = (inst_29635) || (inst_29636);
var state_29666__$1 = (function (){var statearr_29680 = state_29666;
(statearr_29680[(10)] = inst_29634__$1);

return statearr_29680;
})();
if(cljs.core.truth_(inst_29637)){
var statearr_29681_29710 = state_29666__$1;
(statearr_29681_29710[(1)] = (8));

} else {
var statearr_29682_29711 = state_29666__$1;
(statearr_29682_29711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (14))){
var inst_29659 = (state_29666[(2)]);
var inst_29660 = cljs.core.async.close_BANG_.call(null,out);
var state_29666__$1 = (function (){var statearr_29684 = state_29666;
(statearr_29684[(13)] = inst_29659);

return statearr_29684;
})();
var statearr_29685_29712 = state_29666__$1;
(statearr_29685_29712[(2)] = inst_29660);

(statearr_29685_29712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (10))){
var inst_29649 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29686_29713 = state_29666__$1;
(statearr_29686_29713[(2)] = inst_29649);

(statearr_29686_29713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (8))){
var inst_29630 = (state_29666[(9)]);
var inst_29634 = (state_29666[(10)]);
var inst_29626 = (state_29666[(8)]);
var inst_29639 = inst_29626.push(inst_29630);
var tmp29683 = inst_29626;
var inst_29626__$1 = tmp29683;
var inst_29627 = inst_29634;
var state_29666__$1 = (function (){var statearr_29687 = state_29666;
(statearr_29687[(14)] = inst_29639);

(statearr_29687[(7)] = inst_29627);

(statearr_29687[(8)] = inst_29626__$1);

return statearr_29687;
})();
var statearr_29688_29714 = state_29666__$1;
(statearr_29688_29714[(2)] = null);

(statearr_29688_29714[(1)] = (2));


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
});})(c__26923__auto___29700,out))
;
return ((function (switch__26811__auto__,c__26923__auto___29700,out){
return (function() {
var cljs$core$async$state_machine__26812__auto__ = null;
var cljs$core$async$state_machine__26812__auto____0 = (function (){
var statearr_29692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29692[(0)] = cljs$core$async$state_machine__26812__auto__);

(statearr_29692[(1)] = (1));

return statearr_29692;
});
var cljs$core$async$state_machine__26812__auto____1 = (function (state_29666){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_29666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e29693){if((e29693 instanceof Object)){
var ex__26815__auto__ = e29693;
var statearr_29694_29715 = state_29666;
(statearr_29694_29715[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29716 = state_29666;
state_29666 = G__29716;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
cljs$core$async$state_machine__26812__auto__ = function(state_29666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26812__auto____1.call(this,state_29666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26812__auto____0;
cljs$core$async$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26812__auto____1;
return cljs$core$async$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___29700,out))
})();
var state__26925__auto__ = (function (){var statearr_29695 = f__26924__auto__.call(null);
(statearr_29695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___29700);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___29700,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1475000608919