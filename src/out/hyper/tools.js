// Compiled by ClojureScript 1.7.170 {}
goog.provide('hyper.tools');
goog.require('cljs.core');
cljs.core.list(new cljs.core.Symbol(null,"predicates","predicates",-2034033057,null));
hyper.tools._count = (function hyper$tools$_count(v){
if(cljs.core.array_QMARK_.call(null,v)){
return v.length;
} else {
try{return cljs.core.count.call(null,v);
}catch (e18063){if((e18063 instanceof Error)){
var e = e18063;
return (0);
} else {
throw e18063;

}
}}
});
hyper.tools.solo_QMARK_ = (function hyper$tools$solo_QMARK_(col){
return cljs.core._EQ_.call(null,(1),hyper.tools._count.call(null,col));
});
hyper.tools.duo_QMARK_ = (function hyper$tools$duo_QMARK_(col){
return cljs.core._EQ_.call(null,(2),hyper.tools._count.call(null,col));
});
hyper.tools.triplet_QMARK_ = (function hyper$tools$triplet_QMARK_(col){
return cljs.core._EQ_.call(null,(3),hyper.tools._count.call(null,col));
});
hyper.tools.quartet_QMARK_ = (function hyper$tools$quartet_QMARK_(col){
return cljs.core._EQ_.call(null,(4),hyper.tools._count.call(null,col));
});
hyper.tools.quintet_QMARK_ = (function hyper$tools$quintet_QMARK_(col){
return cljs.core._EQ_.call(null,(5),hyper.tools._count.call(null,col));
});
hyper.tools.multiple_QMARK_ = (function hyper$tools$multiple_QMARK_(col){
return ((1) < hyper.tools._count.call(null,col));
});
cljs.core.list(new cljs.core.Symbol(null,"composition","composition",-820237152,null));
hyper.tools._LT__STAR_ = cljs.core.comp;
hyper.tools.into_STAR_ = (function hyper$tools$into_STAR_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___18066 = arguments.length;
var i__17899__auto___18067 = (0);
while(true){
if((i__17899__auto___18067 < len__17898__auto___18066)){
args__17905__auto__.push((arguments[i__17899__auto___18067]));

var G__18068 = (i__17899__auto___18067 + (1));
i__17899__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (col,more){
return cljs.core.into.call(null,col,cljs.core.apply.call(null,cljs.core.juxt,more));
});

hyper.tools.into_STAR_.cljs$lang$maxFixedArity = (1);

hyper.tools.into_STAR_.cljs$lang$applyTo = (function (seq18064){
var G__18065 = cljs.core.first.call(null,seq18064);
var seq18064__$1 = cljs.core.next.call(null,seq18064);
return hyper.tools.into_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__18065,seq18064__$1);
});
hyper.tools.and_STAR_ = cljs.core.every_pred;
/**
 * @param {...*} var_args
 */
hyper.tools.not_STAR_ = (function() { 
var hyper$tools$not_STAR___delegate = function (args){
return cljs.core.complement.call(null,cljs.core.apply.call(null,hyper.tools.and_STAR_,args));
};
var hyper$tools$not_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18069__i = 0, G__18069__a = new Array(arguments.length -  0);
while (G__18069__i < G__18069__a.length) {G__18069__a[G__18069__i] = arguments[G__18069__i + 0]; ++G__18069__i;}
  args = new cljs.core.IndexedSeq(G__18069__a,0);
} 
return hyper$tools$not_STAR___delegate.call(this,args);};
hyper$tools$not_STAR_.cljs$lang$maxFixedArity = 0;
hyper$tools$not_STAR_.cljs$lang$applyTo = (function (arglist__18070){
var args = cljs.core.seq(arglist__18070);
return hyper$tools$not_STAR___delegate(args);
});
hyper$tools$not_STAR_.cljs$core$IFn$_invoke$arity$variadic = hyper$tools$not_STAR___delegate;
return hyper$tools$not_STAR_;
})()
;
/**
 * @param {...*} var_args
 */
hyper.tools.or_STAR_ = (function() { 
var hyper$tools$or_STAR___delegate = function (args){
return (function (v){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__18071_SHARP_){
return p1__18071_SHARP_.call(null,v);
}),args)));
});
};
var hyper$tools$or_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18072__i = 0, G__18072__a = new Array(arguments.length -  0);
while (G__18072__i < G__18072__a.length) {G__18072__a[G__18072__i] = arguments[G__18072__i + 0]; ++G__18072__i;}
  args = new cljs.core.IndexedSeq(G__18072__a,0);
} 
return hyper$tools$or_STAR___delegate.call(this,args);};
hyper$tools$or_STAR_.cljs$lang$maxFixedArity = 0;
hyper$tools$or_STAR_.cljs$lang$applyTo = (function (arglist__18073){
var args = cljs.core.seq(arglist__18073);
return hyper$tools$or_STAR___delegate(args);
});
hyper$tools$or_STAR_.cljs$core$IFn$_invoke$arity$variadic = hyper$tools$or_STAR___delegate;
return hyper$tools$or_STAR_;
})()
;
hyper.tools.is_STAR_ = (function hyper$tools$is_STAR_(v){
return (function (p1__18074_SHARP_){
return cljs.core._EQ_.call(null,v,p1__18074_SHARP_);
});
});
cljs.core.list(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tricks","tricks",1037623216,null));
hyper.tools.combine = (function hyper$tools$combine(var_args){
var args__17905__auto__ = [];
var len__17898__auto___18076 = arguments.length;
var i__17899__auto___18077 = (0);
while(true){
if((i__17899__auto___18077 < len__17898__auto___18076)){
args__17905__auto__.push((arguments[i__17899__auto___18077]));

var G__18078 = (i__17899__auto___18077 + (1));
i__17899__auto___18077 = G__18078;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.call(null,cljs.core.merge_with,hyper.tools.combine,maps);
});

hyper.tools.combine.cljs$lang$maxFixedArity = (0);

hyper.tools.combine.cljs$lang$applyTo = (function (seq18075){
return hyper.tools.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18075));
});
hyper.tools.map_by = (function hyper$tools$map_by(k,col){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,k,cljs.core.identity),col));
});
hyper.tools.dissoc_in = (function hyper$tools$dissoc_in(m,p__18079){
var vec__18081 = p__18079;
var k = cljs.core.nth.call(null,vec__18081,(0),null);
var ks = cljs.core.nthnext.call(null,vec__18081,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__16828__auto__ = ks;
if(cljs.core.truth_(and__16828__auto__)){
return hyper$tools$dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
hyper.tools.dissoc_all = (function hyper$tools$dissoc_all(d,col_ks){
return cljs.core.reduce.call(null,hyper.tools.dissoc_in,d,col_ks);
});
hyper.tools.dissoc_keys = (function hyper$tools$dissoc_keys(d,ks){
return cljs.core.reduce.call(null,cljs.core.dissoc,d,ks);
});
hyper.tools.insert = (function hyper$tools$insert(var_args){
var args__17905__auto__ = [];
var len__17898__auto___18085 = arguments.length;
var i__17899__auto___18086 = (0);
while(true){
if((i__17899__auto___18086 < len__17898__auto___18085)){
args__17905__auto__.push((arguments[i__17899__auto___18086]));

var G__18087 = (i__17899__auto___18086 + (1));
i__17899__auto___18086 = G__18087;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((2) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((2)),(0))):null);
return hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17906__auto__);
});

hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic = (function (vc,idx,more){
var p = cljs.core.subvec.call(null,vc,(0),idx);
var n = cljs.core.subvec.call(null,vc,idx,cljs.core.count.call(null,vc));
return cljs.core.vec.call(null,cljs.core.concat.call(null,p,more,n));
});

hyper.tools.insert.cljs$lang$maxFixedArity = (2);

hyper.tools.insert.cljs$lang$applyTo = (function (seq18082){
var G__18083 = cljs.core.first.call(null,seq18082);
var seq18082__$1 = cljs.core.next.call(null,seq18082);
var G__18084 = cljs.core.first.call(null,seq18082__$1);
var seq18082__$2 = cljs.core.next.call(null,seq18082__$1);
return hyper.tools.insert.cljs$core$IFn$_invoke$arity$variadic(G__18083,G__18084,seq18082__$2);
});
hyper.tools.slice = (function hyper$tools$slice(var_args){
var args18088 = [];
var len__17898__auto___18091 = arguments.length;
var i__17899__auto___18092 = (0);
while(true){
if((i__17899__auto___18092 < len__17898__auto___18091)){
args18088.push((arguments[i__17899__auto___18092]));

var G__18093 = (i__17899__auto___18092 + (1));
i__17899__auto___18092 = G__18093;
continue;
} else {
}
break;
}

var G__18090 = args18088.length;
switch (G__18090) {
case 2:
return hyper.tools.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyper.tools.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18088.length)].join('')));

}
});

hyper.tools.slice.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.subvec.call(null,a,(0),b);
});

hyper.tools.slice.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,a,(0),b),cljs.core.subvec.call(null,a,c,cljs.core.count.call(null,a))));
});

hyper.tools.slice.cljs$lang$maxFixedArity = 3;
hyper.tools.vec_dissoc = (function hyper$tools$vec_dissoc(var_args){
var args__17905__auto__ = [];
var len__17898__auto___18101 = arguments.length;
var i__17899__auto___18102 = (0);
while(true){
if((i__17899__auto___18102 < len__17898__auto___18101)){
args__17905__auto__.push((arguments[i__17899__auto___18102]));

var G__18103 = (i__17899__auto___18102 + (1));
i__17899__auto___18102 = G__18103;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (col,idxs){
return cljs.core.vec.call(null,(function (){var iter__17612__auto__ = (function hyper$tools$iter__18097(s__18098){
return (new cljs.core.LazySeq(null,(function (){
var s__18098__$1 = s__18098;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18098__$1);
if(temp__4425__auto__){
var s__18098__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18098__$2)){
var c__17610__auto__ = cljs.core.chunk_first.call(null,s__18098__$2);
var size__17611__auto__ = cljs.core.count.call(null,c__17610__auto__);
var b__18100 = cljs.core.chunk_buffer.call(null,size__17611__auto__);
if((function (){var i__18099 = (0);
while(true){
if((i__18099 < size__17611__auto__)){
var i = cljs.core._nth.call(null,c__17610__auto__,i__18099);
if(cljs.core.not.call(null,cljs.core.set.call(null,idxs).call(null,i))){
cljs.core.chunk_append.call(null,b__18100,cljs.core.get.call(null,col,i));

var G__18104 = (i__18099 + (1));
i__18099 = G__18104;
continue;
} else {
var G__18105 = (i__18099 + (1));
i__18099 = G__18105;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18100),hyper$tools$iter__18097.call(null,cljs.core.chunk_rest.call(null,s__18098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18100),null);
}
} else {
var i = cljs.core.first.call(null,s__18098__$2);
if(cljs.core.not.call(null,cljs.core.set.call(null,idxs).call(null,i))){
return cljs.core.cons.call(null,cljs.core.get.call(null,col,i),hyper$tools$iter__18097.call(null,cljs.core.rest.call(null,s__18098__$2)));
} else {
var G__18106 = cljs.core.rest.call(null,s__18098__$2);
s__18098__$1 = G__18106;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17612__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,col)));
})());
});

hyper.tools.vec_dissoc.cljs$lang$maxFixedArity = (1);

hyper.tools.vec_dissoc.cljs$lang$applyTo = (function (seq18095){
var G__18096 = cljs.core.first.call(null,seq18095);
var seq18095__$1 = cljs.core.next.call(null,seq18095);
return hyper.tools.vec_dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18096,seq18095__$1);
});
hyper.tools.valid_idx = (function hyper$tools$valid_idx(col,n){
var x__17178__auto__ = (function (){var x__17171__auto__ = (0);
var y__17172__auto__ = n;
return ((x__17171__auto__ > y__17172__auto__) ? x__17171__auto__ : y__17172__auto__);
})();
var y__17179__auto__ = (cljs.core.count.call(null,col) - (1));
return ((x__17178__auto__ < y__17179__auto__) ? x__17178__auto__ : y__17179__auto__);
});
hyper.tools.vec_move = (function hyper$tools$vec_move(col,idx,offset){
var res = hyper.tools.vec_dissoc.call(null,col,idx);
var target = hyper.tools.valid_idx.call(null,col,(idx + offset));
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,res,(0),target),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,col,idx)], null),cljs.core.subvec.call(null,res,target,cljs.core.count.call(null,res))));
});
cljs.core.list(new cljs.core.Symbol(null,"iteration","iteration",551579478,null));
hyper.tools.indexed_iterate = (function hyper$tools$indexed_iterate(col,f){
var c = cljs.core.count.call(null,col);
var i = (0);
while(true){
if((i < c)){
f.call(null,i,(col[i]));

var G__18107 = (i + (1));
i = G__18107;
continue;
} else {
return null;
}
break;
}
});
cljs.core.list(new cljs.core.Symbol(null,"fancy","fancy",-1964044147,null));
hyper.tools.format_bytes = (function hyper$tools$format_bytes(n){
var ns = [cljs.core.str(n)].join('');
var ord = Math.ceil((cljs.core.count.call(null,ns) / (3)));
var res = (n * cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 5, [(1),(1),(2),.001,(3),.000001,(4),.000000001,(5),.000000000001], null),ord));
var suff = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 5, [(1),"b",(2),"Kb",(3),"Mb",(4),"gb",(5),"tb"], null),ord);
return [cljs.core.str((((res * (10)) | (0)) / (10))),cljs.core.str(""),cljs.core.str(suff)].join('');
});

//# sourceMappingURL=tools.js.map