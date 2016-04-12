// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23319_23333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23320_23334 = null;
var count__23321_23335 = (0);
var i__23322_23336 = (0);
while(true){
if((i__23322_23336 < count__23321_23335)){
var f_23337 = cljs.core._nth.call(null,chunk__23320_23334,i__23322_23336);
cljs.core.println.call(null,"  ",f_23337);

var G__23338 = seq__23319_23333;
var G__23339 = chunk__23320_23334;
var G__23340 = count__23321_23335;
var G__23341 = (i__23322_23336 + (1));
seq__23319_23333 = G__23338;
chunk__23320_23334 = G__23339;
count__23321_23335 = G__23340;
i__23322_23336 = G__23341;
continue;
} else {
var temp__4425__auto___23342 = cljs.core.seq.call(null,seq__23319_23333);
if(temp__4425__auto___23342){
var seq__23319_23343__$1 = temp__4425__auto___23342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23319_23343__$1)){
var c__17643__auto___23344 = cljs.core.chunk_first.call(null,seq__23319_23343__$1);
var G__23345 = cljs.core.chunk_rest.call(null,seq__23319_23343__$1);
var G__23346 = c__17643__auto___23344;
var G__23347 = cljs.core.count.call(null,c__17643__auto___23344);
var G__23348 = (0);
seq__23319_23333 = G__23345;
chunk__23320_23334 = G__23346;
count__23321_23335 = G__23347;
i__23322_23336 = G__23348;
continue;
} else {
var f_23349 = cljs.core.first.call(null,seq__23319_23343__$1);
cljs.core.println.call(null,"  ",f_23349);

var G__23350 = cljs.core.next.call(null,seq__23319_23343__$1);
var G__23351 = null;
var G__23352 = (0);
var G__23353 = (0);
seq__23319_23333 = G__23350;
chunk__23320_23334 = G__23351;
count__23321_23335 = G__23352;
i__23322_23336 = G__23353;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16840__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23354);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23354)))?cljs.core.second.call(null,arglists_23354):arglists_23354));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23323 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23324 = null;
var count__23325 = (0);
var i__23326 = (0);
while(true){
if((i__23326 < count__23325)){
var vec__23327 = cljs.core._nth.call(null,chunk__23324,i__23326);
var name = cljs.core.nth.call(null,vec__23327,(0),null);
var map__23328 = cljs.core.nth.call(null,vec__23327,(1),null);
var map__23328__$1 = ((((!((map__23328 == null)))?((((map__23328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23328):map__23328);
var doc = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23355 = seq__23323;
var G__23356 = chunk__23324;
var G__23357 = count__23325;
var G__23358 = (i__23326 + (1));
seq__23323 = G__23355;
chunk__23324 = G__23356;
count__23325 = G__23357;
i__23326 = G__23358;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23323);
if(temp__4425__auto__){
var seq__23323__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23323__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__23323__$1);
var G__23359 = cljs.core.chunk_rest.call(null,seq__23323__$1);
var G__23360 = c__17643__auto__;
var G__23361 = cljs.core.count.call(null,c__17643__auto__);
var G__23362 = (0);
seq__23323 = G__23359;
chunk__23324 = G__23360;
count__23325 = G__23361;
i__23326 = G__23362;
continue;
} else {
var vec__23330 = cljs.core.first.call(null,seq__23323__$1);
var name = cljs.core.nth.call(null,vec__23330,(0),null);
var map__23331 = cljs.core.nth.call(null,vec__23330,(1),null);
var map__23331__$1 = ((((!((map__23331 == null)))?((((map__23331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23331):map__23331);
var doc = cljs.core.get.call(null,map__23331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23363 = cljs.core.next.call(null,seq__23323__$1);
var G__23364 = null;
var G__23365 = (0);
var G__23366 = (0);
seq__23323 = G__23363;
chunk__23324 = G__23364;
count__23325 = G__23365;
i__23326 = G__23366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map