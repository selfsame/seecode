// Compiled by ClojureScript 1.7.170 {}
goog.provide('dollar.bill');
goog.require('cljs.core');
dollar.bill.el_QMARK_ = (function dollar$bill$el_QMARK_(o){
return (o instanceof Element);
});
dollar.bill.doc_QMARK_ = (function dollar$bill$doc_QMARK_(o){
return o.querySelectorAll;
});
dollar.bill.ar_QMARK_ = (function dollar$bill$ar_QMARK_(o){
return (o instanceof Array);
});
dollar.bill.aseq = (function dollar$bill$aseq(b){
if(cljs.core.truth_((function (){var or__16840__auto__ = cljs.core.sequential_QMARK_.call(null,b);
if(or__16840__auto__){
return or__16840__auto__;
} else {
return dollar.bill.ar_QMARK_.call(null,b);
}
})())){
return b;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,b);
}
});
dollar.bill.as_array = (function dollar$bill$as_array(a){
return Array.prototype.slice.call(a);
});
dollar.bill._GT_dom = (function dollar$bill$_GT_dom(s){
var d = document.createElement("div");
d.innerHTML = s;

return dollar.bill.as_array.call(null,d.children);
});
dollar.bill.$ = (function dollar$bill$$(q){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^\W*</,q))){
return dollar.bill._GT_dom.call(null,q);
} else {
return dollar.bill.as_array.call(null,document.querySelectorAll(q));
}
});
dollar.bill.op = (function dollar$bill$op(var_args){
var args18119 = [];
var len__17898__auto___18122 = arguments.length;
var i__17899__auto___18123 = (0);
while(true){
if((i__17899__auto___18123 < len__17898__auto___18122)){
args18119.push((arguments[i__17899__auto___18123]));

var G__18124 = (i__17899__auto___18123 + (1));
i__17899__auto___18123 = G__18124;
continue;
} else {
}
break;
}

var G__18121 = args18119.length;
switch (G__18121) {
case 3:
return dollar.bill.op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dollar.bill.op.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18119.length)].join('')));

}
});

dollar.bill.op.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,a){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,a))){
return f2.call(null,a);
} else {
if(cljs.core.seq_QMARK_.call(null,a)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18110_SHARP_){
return f.call(null,p1__18110_SHARP_);
}),a));
} else {
if(cljs.core.vector_QMARK_.call(null,a)){
return cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18111_SHARP_){
return f.call(null,p1__18111_SHARP_);
}),a)));
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,a))){
return a.map((function (p1__18112_SHARP_){
return f.call(null,p1__18112_SHARP_);
}));
} else {
return null;
}
}
}
}
});

dollar.bill.op.cljs$core$IFn$_invoke$arity$4 = (function (f,f2,a,b){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,a))){
if(cljs.core.seq_QMARK_.call(null,b)){
return cljs.core.map.call(null,(function (p1__18113_SHARP_){
return f2.call(null,a,p1__18113_SHARP_);
}),b);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return cljs.core.mapv.call(null,(function (p1__18114_SHARP_){
return f2.call(null,a,p1__18114_SHARP_);
}),b);
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,b))){
return [].concat.apply([],b.map((function (p1__18115_SHARP_){
return f2.call(null,a,p1__18115_SHARP_);
})));
} else {
return f2.call(null,a,b);

}
}
}
} else {
if(cljs.core.seq_QMARK_.call(null,a)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18116_SHARP_){
return f.call(null,p1__18116_SHARP_,b);
}),a));
} else {
if(cljs.core.vector_QMARK_.call(null,a)){
return cljs.core.mapv.call(null,cljs.core.flatten.call(null,(function (p1__18117_SHARP_){
return f.call(null,p1__18117_SHARP_,b);
})),a);
} else {
if(cljs.core.truth_(dollar.bill.ar_QMARK_.call(null,a))){
return [].concat.apply([],a.map((function (p1__18118_SHARP_){
return f2.call(null,p1__18118_SHARP_,b);
})));
} else {
return null;
}
}
}
}
});

dollar.bill.op.cljs$lang$maxFixedArity = 4;
dollar.bill.html = (function dollar$bill$html(var_args){
var args18129 = [];
var len__17898__auto___18132 = arguments.length;
var i__17899__auto___18133 = (0);
while(true){
if((i__17899__auto___18133 < len__17898__auto___18132)){
args18129.push((arguments[i__17899__auto___18133]));

var G__18134 = (i__17899__auto___18133 + (1));
i__17899__auto___18133 = G__18134;
continue;
} else {
}
break;
}

var G__18131 = args18129.length;
switch (G__18131) {
case 1:
return dollar.bill.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dollar.bill.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18129.length)].join('')));

}
});

dollar.bill.html.cljs$core$IFn$_invoke$arity$1 = (function (a){
return dollar.bill.op.call(null,dollar.bill.html,(function (p1__18126_SHARP_){
return p1__18126_SHARP_.innerHTML;
}),a);
});

dollar.bill.html.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return dollar.bill.op.call(null,dollar.bill.html,(function (p1__18127_SHARP_,p2__18128_SHARP_){
if(cljs.core.truth_(dollar.bill.el_QMARK_.call(null,p1__18127_SHARP_))){
return p1__18127_SHARP_.innerHTML = p2__18128_SHARP_;
} else {
return null;
}
}),a,b);
});

dollar.bill.html.cljs$lang$maxFixedArity = 2;
dollar.bill.contents = (function dollar$bill$contents(a){
return dollar.bill.op.call(null,dollar$bill$contents,(function (p1__18136_SHARP_){
return p1__18136_SHARP_.contentDocument;
}),a);
});
dollar.bill.find = (function dollar$bill$find(a,b){
return dollar.bill.op.call(null,dollar.bill.contents,(function (p1__18137_SHARP_,p2__18138_SHARP_){
if(cljs.core.truth_(p1__18137_SHARP_.querySelectorAll)){
return dollar.bill.as_array.call(null,p1__18137_SHARP_.querySelectorAll([cljs.core.str(p2__18138_SHARP_)].join('')));
} else {
return null;
}
}),(cljs.core.truth_(dollar.bill.doc_QMARK_.call(null,a))?[a]:a),b);
});
dollar.bill.copy = (function dollar$bill$copy(a){
return cljs.core.first.call(null,dollar.bill.op.call(null,dollar$bill$copy,(function (){
return dollar.bill.$.call(null,a.outerHTML);
}),a));
});
dollar.bill.parent = (function dollar$bill$parent(a){
return dollar.bill.op.call(null,dollar$bill$parent,(function (p1__18139_SHARP_){
return p1__18139_SHARP_.parentElement;
}),a);
});
dollar.bill.append = (function dollar$bill$append(a,b){
return dollar.bill.op.call(null,dollar$bill$append,(function (p1__18140_SHARP_,p2__18141_SHARP_){
return p1__18140_SHARP_.appendChild(dollar.bill.copy.call(null,p2__18141_SHARP_));
}),a,b);
});
dollar.bill.before = (function dollar$bill$before(a,b){
return dollar.bill.op.call(null,dollar$bill$before,(function (p1__18142_SHARP_,p2__18143_SHARP_){
return dollar.bill.parent.call(null,p1__18142_SHARP_).insertBefore(dollar.bill.copy.call(null,p2__18143_SHARP_),p1__18142_SHARP_);
}),a,b);
});
dollar.bill.nxt = (function dollar$bill$nxt(a){
return dollar.bill.op.call(null,dollar$bill$nxt,(function (p1__18144_SHARP_){
return p1__18144_SHARP_.nextSibling;
}),a);
});
dollar.bill.prv = (function dollar$bill$prv(a){
return dollar.bill.op.call(null,dollar$bill$prv,(function (p1__18145_SHARP_){
return p1__18145_SHARP_.previousSibling;
}),a);
});
dollar.bill.after = (function dollar$bill$after(a,b){
return dollar.bill.op.call(null,dollar$bill$after,(function (p1__18146_SHARP_,p2__18147_SHARP_){
var temp__4423__auto__ = dollar.bill.nxt.call(null,p1__18146_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
return dollar.bill.before.call(null,n,p2__18147_SHARP_);
} else {
return dollar.bill.append.call(null,dollar.bill.parent.call(null,p1__18146_SHARP_),p2__18147_SHARP_);
}
}),a,b);
});
dollar.bill.prepend = (function dollar$bill$prepend(a,b){
return dollar.bill.op.call(null,dollar$bill$prepend,(function (p1__18148_SHARP_,p2__18149_SHARP_){
return p1__18148_SHARP_.insertBefore(dollar.bill.copy.call(null,p2__18149_SHARP_),p1__18148_SHARP_.firstChild);
}),a,b);
});
dollar.bill.detach = (function dollar$bill$detach(a){
return dollar.bill.op.call(null,dollar$bill$detach,(function (p1__18150_SHARP_){
return dollar.bill.parent.call(null,p1__18150_SHARP_).removeChild(p1__18150_SHARP_);
}),a);
});
dollar.bill.wrap = (function dollar$bill$wrap(a,b){
return dollar.bill.op.call(null,dollar$bill$wrap,(function (p1__18151_SHARP_,p2__18152_SHARP_){
return dollar.bill.parent.call(null,p1__18151_SHARP_).replaceChild(dollar.bill.parent.call(null,dollar.bill.append.call(null,dollar.bill.copy.call(null,p2__18152_SHARP_),p1__18151_SHARP_)),p1__18151_SHARP_);
}),a,b);
});

//# sourceMappingURL=bill.js.map