// Compiled by ClojureScript 1.7.170 {}
goog.provide('pdfn.core');
goog.require('cljs.core');
goog.require('clojure.walk');
pdfn.core.DISPATCHMAP = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
pdfn.core.METAMAP = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
pdfn.core.argsyms = cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.str),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOZ");
pdfn.core.and_STAR_ = cljs.core.every_pred;
/**
 * @param {...*} var_args
 */
pdfn.core.not_STAR_ = (function() { 
var pdfn$core$not_STAR___delegate = function (args){
return cljs.core.complement.call(null,cljs.core.apply.call(null,pdfn.core.and_STAR_,args));
};
var pdfn$core$not_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25616__i = 0, G__25616__a = new Array(arguments.length -  0);
while (G__25616__i < G__25616__a.length) {G__25616__a[G__25616__i] = arguments[G__25616__i + 0]; ++G__25616__i;}
  args = new cljs.core.IndexedSeq(G__25616__a,0);
} 
return pdfn$core$not_STAR___delegate.call(this,args);};
pdfn$core$not_STAR_.cljs$lang$maxFixedArity = 0;
pdfn$core$not_STAR_.cljs$lang$applyTo = (function (arglist__25617){
var args = cljs.core.seq(arglist__25617);
return pdfn$core$not_STAR___delegate(args);
});
pdfn$core$not_STAR_.cljs$core$IFn$_invoke$arity$variadic = pdfn$core$not_STAR___delegate;
return pdfn$core$not_STAR_;
})()
;
/**
 * @param {...*} var_args
 */
pdfn.core.or_STAR_ = (function() { 
var pdfn$core$or_STAR___delegate = function (args){
return (function (v){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p1__25618_SHARP_){
return p1__25618_SHARP_.call(null,v);
}),args)));
});
};
var pdfn$core$or_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25619__i = 0, G__25619__a = new Array(arguments.length -  0);
while (G__25619__i < G__25619__a.length) {G__25619__a[G__25619__i] = arguments[G__25619__i + 0]; ++G__25619__i;}
  args = new cljs.core.IndexedSeq(G__25619__a,0);
} 
return pdfn$core$or_STAR___delegate.call(this,args);};
pdfn$core$or_STAR_.cljs$lang$maxFixedArity = 0;
pdfn$core$or_STAR_.cljs$lang$applyTo = (function (arglist__25620){
var args = cljs.core.seq(arglist__25620);
return pdfn$core$or_STAR___delegate(args);
});
pdfn$core$or_STAR_.cljs$core$IFn$_invoke$arity$variadic = pdfn$core$or_STAR___delegate;
return pdfn$core$or_STAR_;
})()
;
pdfn.core.is_STAR_ = (function pdfn$core$is_STAR_(v){
return (function (p1__25621_SHARP_){
return cljs.core._EQ_.call(null,v,p1__25621_SHARP_);
});
});
pdfn.core.opt = (function pdfn$core$opt(sym,kw){
return cljs.core.get.call(null,cljs.core.meta.call(null,sym),kw,cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.METAMAP),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,kw], null)));
});
pdfn.core.HOST = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Keyword(null,"qualify-here","qualify-here",1615368416),(function (usym,env){
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_.name()),cljs.core.str(new cljs.core.Symbol(null,"/","/",-1371932971,null)),cljs.core.str(usym)].join(''));
})], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Keyword(null,"qualify-here","qualify-here",1615368416),(function (usym,env){
return cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str(new cljs.core.Symbol(null,"/","/",-1371932971,null)),cljs.core.str(usym)].join(''));
})], null)], null));
pdfn.core.hosted = (function pdfn$core$hosted(kw,env){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.HOST),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)))?new cljs.core.Keyword(null,"cljs","cljs",1492417629):new cljs.core.Keyword(null,"clj","clj",-660495428)),kw], null));
});
pdfn.core.grid_get = (function pdfn$core$grid_get(var_args){
var args__17905__auto__ = [];
var len__17898__auto___25624 = arguments.length;
var i__17899__auto___25625 = (0);
while(true){
if((i__17899__auto___25625 < len__17898__auto___25624)){
args__17905__auto__.push((arguments[i__17899__auto___25625]));

var G__25626 = (i__17899__auto___25625 + (1));
i__17899__auto___25625 = G__25626;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic = (function (col,more){
return cljs.core.get_in.call(null,col,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295),more)));
});

pdfn.core.grid_get.cljs$lang$maxFixedArity = (1);

pdfn.core.grid_get.cljs$lang$applyTo = (function (seq25622){
var G__25623 = cljs.core.first.call(null,seq25622);
var seq25622__$1 = cljs.core.next.call(null,seq25622);
return pdfn.core.grid_get.cljs$core$IFn$_invoke$arity$variadic(G__25623,seq25622__$1);
});
pdfn.core.make_grid = (function pdfn$core$make_grid(data){
var vec__25629 = cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals,cljs.core.comp.call(null,cljs.core.count,cljs.core.ffirst)).call(null,cljs.core.reverse.call(null,data));
var ks = cljs.core.nth.call(null,vec__25629,(0),null);
var vs = cljs.core.nth.call(null,vec__25629,(1),null);
var cnt = cljs.core.nth.call(null,vec__25629,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leafs","leafs",-1793817466),cljs.core.vec.call(null,vs),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.take.call(null,cnt,pdfn.core.argsyms),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.mapv.call(null,((function (vec__25629,ks,vs,cnt){
return (function (p1__25627_SHARP_){
return cljs.core.conj.call(null,cljs.core.mapv.call(null,((function (vec__25629,ks,vs,cnt){
return (function (c){
return cljs.core.get.call(null,c,p1__25627_SHARP_);
});})(vec__25629,ks,vs,cnt))
,ks),cljs.core.get.call(null,pdfn.core.argsyms,p1__25627_SHARP_));
});})(vec__25629,ks,vs,cnt))
,cljs.core.range.call(null,cnt))], null);
});
pdfn.core.score = (function pdfn$core$score(col){
var head = cljs.core.first.call(null,col);
var colp = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.butlast.call(null,col));
if(cljs.core.not.call(null,head)){
return (0);
} else {
return (((10) * ((cljs.core.get.call(null,cljs.core.frequencies.call(null,colp),head) - (1)) - cljs.core.count.call(null,colp))) - cljs.core.count.call(null,cljs.core.take_while.call(null,pdfn.core.not_STAR_.call(null,cljs.core.nil_QMARK_),col)));
}
});
pdfn.core.sort_grid = (function pdfn$core$sort_grid(grid,f){
return cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.vec.call(null,cljs.core.sort_by.call(null,f,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(grid))));
});
pdfn.core.update_idxs = (function pdfn$core$update_idxs(col,idxs,f){
return cljs.core.reduce.call(null,(function (p1__25630_SHARP_,p2__25631_SHARP_){
return cljs.core.update_in.call(null,p1__25630_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__25631_SHARP_], null),f);
}),col,idxs);
});
pdfn.core.duplicate_idxs = (function pdfn$core$duplicate_idxs(col){
var res = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (p1__25633_SHARP_,p2__25632_SHARP_){
if(cljs.core._EQ_.call(null,p2__25632_SHARP_,cljs.core.first.call(null,col))){
return p1__25633_SHARP_;
} else {
return null;
}
}),col));
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
pdfn.core.drop_idxs = (function pdfn$core$drop_idxs(col,idxs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","drop","pdfn.core/drop",1373068254),null], null), null),cljs.core.map_indexed.call(null,(function (p1__25634_SHARP_,p2__25635_SHARP_){
if(cljs.core.truth_(cljs.core.set.call(null,idxs).call(null,p1__25634_SHARP_))){
return new cljs.core.Keyword("pdfn.core","drop","pdfn.core/drop",1373068254);
} else {
return p2__25635_SHARP_;
}
}),col)));
});
pdfn.core.grid_drop_idxs = (function pdfn$core$grid_drop_idxs(g,idxs){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,g,new cljs.core.Keyword(null,"leafs","leafs",-1793817466),pdfn.core.drop_idxs.call(null,new cljs.core.Keyword(null,"leafs","leafs",-1793817466).cljs$core$IFn$_invoke$arity$1(g),idxs)),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.mapv.call(null,(function (p1__25636_SHARP_){
return pdfn.core.drop_idxs.call(null,p1__25636_SHARP_,idxs);
}),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g)));
});
pdfn.core.grid__GT_ast = (function pdfn$core$grid__GT_ast(_g){
if(cljs.core.empty_QMARK_.call(null,cljs.core.butlast.call(null,pdfn.core.grid_get.call(null,_g,(0))))){
return new cljs.core.Keyword("pdfn.core","nf","pdfn.core/nf",-929237202);
} else {
var g = pdfn.core.sort_grid.call(null,_g,pdfn.core.score);
var _leaf = cljs.core.get.call(null,new cljs.core.Keyword(null,"leafs","leafs",-1793817466).cljs$core$IFn$_invoke$arity$1(g),(0));
var leaf = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","body","pdfn.core/body",971925996),null], null), null).call(null,cljs.core.first.call(null,_leaf)))?cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.last.call(null,_leaf),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(g))):((cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,_leaf)))?cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,_leaf)):cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),_leaf)));
var dups = pdfn.core.duplicate_idxs.call(null,pdfn.core.grid_get.call(null,g,(0)));
if((pdfn.core.grid_get.call(null,g,(0),(0)) == null)){
return leaf;
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,dups))){
var conds = cljs.core.take_while.call(null,((function (g,_leaf,leaf,dups){
return (function (p1__25637_SHARP_){
return !((cljs.core.first.call(null,p1__25637_SHARP_) == null));
});})(g,_leaf,leaf,dups))
,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last)),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g)));
var fconds = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,conds)))?cljs.core.first.call(null,conds):cljs.core.cons.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),conds));
if(cljs.core.empty_QMARK_.call(null,conds)){
return leaf;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null),fconds,leaf,pdfn$core$grid__GT_ast.call(null,pdfn.core.grid_drop_idxs.call(null,g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))], null);
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.list,cljs.core.first),cljs.core.last).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(g))),pdfn$core$grid__GT_ast.call(null,cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(0)], null),((function (g,_leaf,leaf,dups){
return (function (p1__25638_SHARP_){
return pdfn.core.update_idxs.call(null,p1__25638_SHARP_,dups,((function (g,_leaf,leaf,dups){
return (function (_){
return null;
});})(g,_leaf,leaf,dups))
);
});})(g,_leaf,leaf,dups))
)),pdfn$core$grid__GT_ast.call(null,pdfn.core.grid_drop_idxs.call(null,g,dups))], null);

}
}
}
});
pdfn.core.ast__GT_code = (function pdfn$core$ast__GT_code(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return cljs.core.seq.call(null,clojure.walk.walk.call(null,pdfn$core$ast__GT_code,cljs.core.identity,cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pdfn.core","nf","pdfn.core/nf",-929237202),null], null), null),form))));
} else {
if(cljs.core.list_QMARK_.call(null,form)){
return cljs.core.first.call(null,form);
} else {
return form;

}
}
});
pdfn.core.datatype_QMARK_ = (function pdfn$core$datatype_QMARK_(v){
return (cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)) || (cljs.core.map_QMARK_.call(null,v));
});
pdfn.core.symbol_walk = (function pdfn$core$symbol_walk(form,xform){
if((form instanceof cljs.core.Symbol)){
return cljs.core.get.call(null,xform,form,form);
} else {
if(cljs.core.truth_(pdfn.core.datatype_QMARK_.call(null,form))){
return clojure.walk.walk.call(null,(function (p1__25639_SHARP_){
return pdfn$core$symbol_walk.call(null,p1__25639_SHARP_,xform);
}),cljs.core.identity,form);
} else {
return form;

}
}
});
pdfn.core.user_meta = (function pdfn$core$user_meta(v,env){
var or__16840__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var res = cljs.core.apply.call(null,cljs.core.dissoc,v,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"source","source",-433931539)], null));
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null),cljs.core.ffirst.call(null,res)], true, false),cljs.core.mapv.call(null,cljs.core.last,res),res);
}
});
pdfn.core.before_last = (function pdfn$core$before_last(col,v){
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.rest.call(null,col)))){
return cljs.core.flatten.call(null,cljs.core.juxt.call(null,cljs.core.butlast,(function (_){
return v;
}),cljs.core.last).call(null,col));
} else {
return cljs.core.cons.call(null,v,col);
}
});
pdfn.core.pdfn_sort = (function pdfn$core$pdfn_sort(m){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.meta,cljs.core.first),m);
});
pdfn.core.defpdfn = (function pdfn$core$defpdfn(var_args){
var args__17905__auto__ = [];
var len__17898__auto___25644 = arguments.length;
var i__17899__auto___25645 = (0);
while(true){
if((i__17899__auto___25645 < len__17898__auto___25644)){
args__17905__auto__.push((arguments[i__17899__auto___25645]));

var G__25646 = (i__17899__auto___25645 + (1));
i__17899__auto___25645 = G__25646;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,more){
cljs.core.swap_BANG_.call(null,pdfn.core.DISPATCHMAP,cljs.core.dissoc,cljs.core.symbol.call(null,sym));

cljs.core.swap_BANG_.call(null,pdfn.core.METAMAP,cljs.core.assoc,cljs.core.symbol.call(null,sym),cljs.core.meta.call(null,sym));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

pdfn.core.defpdfn.cljs$lang$maxFixedArity = (3);

pdfn.core.defpdfn.cljs$lang$applyTo = (function (seq25640){
var G__25641 = cljs.core.first.call(null,seq25640);
var seq25640__$1 = cljs.core.next.call(null,seq25640);
var G__25642 = cljs.core.first.call(null,seq25640__$1);
var seq25640__$2 = cljs.core.next.call(null,seq25640__$1);
var G__25643 = cljs.core.first.call(null,seq25640__$2);
var seq25640__$3 = cljs.core.next.call(null,seq25640__$2);
return pdfn.core.defpdfn.cljs$core$IFn$_invoke$arity$variadic(G__25641,G__25642,G__25643,seq25640__$3);
});

pdfn.core.defpdfn.cljs$lang$macro = true;
pdfn.core.pdfn = (function pdfn$core$pdfn(var_args){
var args__17905__auto__ = [];
var len__17898__auto___25661 = arguments.length;
var i__17899__auto___25662 = (0);
while(true){
if((i__17899__auto___25662 < len__17898__auto___25661)){
args__17905__auto__.push((arguments[i__17899__auto___25662]));

var G__25663 = (i__17899__auto___25662 + (1));
i__17899__auto___25662 = G__25663;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,more){
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.mapcat.call(null,(function (p__25656){
var vec__25657 = p__25656;
var args = cljs.core.nth.call(null,vec__25657,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__25657,(1));
var vec__25658 = cljs.core.mapv.call(null,cljs.core.vec,cljs.core.juxt.call(null,cljs.core.remove,cljs.core.filter).call(null,pdfn.core.is_STAR_.call(null,new cljs.core.Symbol(null,"&","&",-2144855648,null)),args));
var args__$1 = cljs.core.nth.call(null,vec__25658,(0),null);
var variadic = cljs.core.nth.call(null,vec__25658,(1),null);
var inline = pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"inline","inline",1399884222));
var build_code = (cljs.core.truth_(pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"defer-compile","defer-compile",862529118)))?true:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,sym),new cljs.core.Symbol("pdfn.core","compile!","pdfn.core/compile!",571095998,null)));
var vec__25659 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,more__$1))) && (cljs.core.rest.call(null,more__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,more__$1),cljs.core.rest.call(null,more__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,more__$1], null));
var spec = cljs.core.nth.call(null,vec__25659,(0),null);
var code = cljs.core.nth.call(null,vec__25659,(1),null);
var _preds = cljs.core.mapv.call(null,((function (vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,vec__25657,args,more__$1){
return (function (p1__25647_SHARP_){
return pdfn.core.user_meta.call(null,cljs.core.meta.call(null,p1__25647_SHARP_),_AMPERSAND_env);
});})(vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,vec__25657,args,more__$1))
,args__$1);
var unmeta_args = cljs.core.mapv.call(null,((function (vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,vec__25657,args,more__$1){
return (function (p1__25648_SHARP_){
return cljs.core.with_meta.call(null,p1__25648_SHARP_,null);
});})(vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,vec__25657,args,more__$1))
,args__$1);
var preds = cljs.core.mapv.call(null,((function (vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,unmeta_args,vec__25657,args,more__$1){
return (function (p1__25649_SHARP_,p2__25650_SHARP_){
var or__16840__auto__ = p1__25649_SHARP_;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return p2__25650_SHARP_;
}
});})(vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,unmeta_args,vec__25657,args,more__$1))
,cljs.core.map.call(null,((function (vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,unmeta_args,vec__25657,args,more__$1){
return (function (p1__25651_SHARP_){
return cljs.core.get.call(null,spec,p1__25651_SHARP_,null);
});})(vec__25658,args__$1,variadic,inline,build_code,vec__25659,spec,code,_preds,unmeta_args,vec__25657,args,more__$1))
,args__$1),_preds);
var usym = cljs.core.symbol.call(null,[cljs.core.str(sym),cljs.core.str(cljs.core.count.call(null,args__$1)),cljs.core.str(new cljs.core.Symbol(null,"_","_",-1201019570,null)),cljs.core.str(cljs.core.hash.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,preds))))))].join(''));
var stack = (function (){var or__16840__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.count.call(null,args__$1)], null));
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var method_idx = (function (){var G__25660 = cljs.core.count.call(null,stack);
var G__25660__$1 = ((cljs.core.contains_QMARK_.call(null,stack,preds))?(G__25660 + (1)):G__25660);
return G__25660__$1;
})();
cljs.core.swap_BANG_.call(null,pdfn.core.DISPATCHMAP,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.count.call(null,args__$1)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta.call(null,preds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),method_idx,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.first.call(null,variadic)], null)),((cljs.core.not.call(null,inline))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdfn.core","body","pdfn.core/body",971925996),usym], null):pdfn.core.symbol_walk.call(null,code,cljs.core.zipmap.call(null,unmeta_args,pdfn.core.argsyms)))], true, false));

if(cljs.core.truth_(inline)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,build_code))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"declare","declare",654042991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,usym))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pdfn.core.before_last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.Keyword(null,"&","&",509580121)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pdfn.core.hosted.call(null,new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),_AMPERSAND_env)),cljs.core._conj.call(null,cljs.core.List.EMPTY,usym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn","fn",465265323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,unmeta_args),code)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,build_code))));
}
}),((cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,more)))?more:cljs.core._conj.call(null,cljs.core.List.EMPTY,more))));
});

pdfn.core.pdfn.cljs$lang$maxFixedArity = (3);

pdfn.core.pdfn.cljs$lang$applyTo = (function (seq25652){
var G__25653 = cljs.core.first.call(null,seq25652);
var seq25652__$1 = cljs.core.next.call(null,seq25652);
var G__25654 = cljs.core.first.call(null,seq25652__$1);
var seq25652__$2 = cljs.core.next.call(null,seq25652__$1);
var G__25655 = cljs.core.first.call(null,seq25652__$2);
var seq25652__$3 = cljs.core.next.call(null,seq25652__$2);
return pdfn.core.pdfn.cljs$core$IFn$_invoke$arity$variadic(G__25653,G__25654,G__25655,seq25652__$3);
});

pdfn.core.pdfn.cljs$lang$macro = true;
pdfn.core.compile_BANG_ = (function pdfn$core$compile_BANG_(_AMPERSAND_form,_AMPERSAND_env,sym){
var variants = cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym);
var stub_arity = (cljs.core.truth_(pdfn.core.opt.call(null,sym,new cljs.core.Keyword(null,"stub-arity","stub-arity",-1053044116)))?(cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,variants)) + (1)):(0));
var variants__$1 = cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,stub_arity),cljs.core.repeat.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406))),variants));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,pdfn.core.hosted.call(null,new cljs.core.Keyword(null,"re-def-sym","re-def-sym",271822191),_AMPERSAND_env)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.map_indexed.call(null,((function (variants,stub_arity,variants__$1){
return (function (idx,p__25667){
var vec__25668 = p__25667;
var cnt = cljs.core.nth.call(null,vec__25668,(0),null);
var data = cljs.core.nth.call(null,vec__25668,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,(function (){var G__25669 = cljs.core.take.call(null,cnt,pdfn.core.argsyms);
var G__25669__$1 = (cljs.core.truth_((function (){var or__16840__auto__ = cljs.core._EQ_.call(null,(idx + (1)),stub_arity);
if(or__16840__auto__){
return or__16840__auto__;
} else {
var and__16828__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406),data);
if(and__16828__auto__){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.meta,cljs.core.ffirst).call(null,data);
} else {
return and__16828__auto__;
}
}
})())?pdfn.core.before_last.call(null,G__25669,new cljs.core.Symbol(null,"&","&",-2144855648,null)):G__25669);
return G__25669__$1;
})())], null),((!(cljs.core._EQ_.call(null,new cljs.core.Keyword("pdfn.core","stub","pdfn.core/stub",333737406),data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdfn.core.ast__GT_code.call(null,pdfn.core.grid__GT_ast.call(null,pdfn.core.make_grid.call(null,pdfn.core.pdfn_sort.call(null,data))))], null):null));
});})(variants,stub_arity,variants__$1))
,variants__$1))))));
});

pdfn.core.compile_BANG_.cljs$lang$macro = true;
pdfn.core.benchmark = (function pdfn$core$benchmark(var_args){
var args__17905__auto__ = [];
var len__17898__auto___25675 = arguments.length;
var i__17899__auto___25676 = (0);
while(true){
if((i__17899__auto___25676 < len__17898__auto___25675)){
args__17905__auto__.push((arguments[i__17899__auto___25676]));

var G__25677 = (i__17899__auto___25676 + (1));
i__17899__auto___25676 = G__25677;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,code){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","time","cljs.core/time",-333131220,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25670__auto__","i__25670__auto__",-2139068024,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,n)))))),code)))))));
});

pdfn.core.benchmark.cljs$lang$maxFixedArity = (3);

pdfn.core.benchmark.cljs$lang$applyTo = (function (seq25671){
var G__25672 = cljs.core.first.call(null,seq25671);
var seq25671__$1 = cljs.core.next.call(null,seq25671);
var G__25673 = cljs.core.first.call(null,seq25671__$1);
var seq25671__$2 = cljs.core.next.call(null,seq25671__$1);
var G__25674 = cljs.core.first.call(null,seq25671__$2);
var seq25671__$3 = cljs.core.next.call(null,seq25671__$2);
return pdfn.core.benchmark.cljs$core$IFn$_invoke$arity$variadic(G__25672,G__25673,G__25674,seq25671__$3);
});

pdfn.core.benchmark.cljs$lang$macro = true;
pdfn.core.ppexpand = (function pdfn$core$ppexpand(_AMPERSAND_form,_AMPERSAND_env,code){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pprint","write","pprint/write",-1987279760,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","macroexpand-1","cljs.core/macroexpand-1",1326097868,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,code))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pprint","code-dispatch","pprint/code-dispatch",-1442345029,null)))));
});

pdfn.core.ppexpand.cljs$lang$macro = true;
pdfn.core.inspect = (function pdfn$core$inspect(var_args){
var args__17905__auto__ = [];
var len__17898__auto___25684 = arguments.length;
var i__17899__auto___25685 = (0);
while(true){
if((i__17899__auto___25685 < len__17898__auto___25684)){
args__17905__auto__.push((arguments[i__17899__auto___25685]));

var G__25686 = (i__17899__auto___25685 + (1));
i__17899__auto___25685 = G__25686;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,k){
var G__25683 = (((cljs.core.first.call(null,k) instanceof cljs.core.Keyword))?cljs.core.first.call(null,k).fqn:null);
switch (G__25683) {
case "methods":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__25683){
return (function (v){
return cljs.core.update_in.call(null,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),((function (G__25683){
return (function (p1__25678_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,pdfn.core.pdfn_sort.call(null,p1__25678_SHARP_));
});})(G__25683))
);
});})(G__25683))
),cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym))))));

break;
case "ast":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,pdfn.core.grid__GT_ast,pdfn.core.make_grid),cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,pdfn.core.DISPATCHMAP),sym)))))));

break;
default:
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","ppexpand","pdfn.core/ppexpand",1556119939,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("pdfn.core","compile!","pdfn.core/compile!",571095998,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sym))))))));

}
});

pdfn.core.inspect.cljs$lang$maxFixedArity = (3);

pdfn.core.inspect.cljs$lang$applyTo = (function (seq25679){
var G__25680 = cljs.core.first.call(null,seq25679);
var seq25679__$1 = cljs.core.next.call(null,seq25679);
var G__25681 = cljs.core.first.call(null,seq25679__$1);
var seq25679__$2 = cljs.core.next.call(null,seq25679__$1);
var G__25682 = cljs.core.first.call(null,seq25679__$2);
var seq25679__$3 = cljs.core.next.call(null,seq25679__$2);
return pdfn.core.inspect.cljs$core$IFn$_invoke$arity$variadic(G__25680,G__25681,G__25682,seq25679__$3);
});

pdfn.core.inspect.cljs$lang$macro = true;

//# sourceMappingURL=core.js.map