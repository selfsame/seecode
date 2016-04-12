// Compiled by ClojureScript 1.7.170 {}
goog.provide('deck.core');
goog.require('cljs.core');
goog.require('hyper.tools');
goog.require('cljs.pprint');
goog.require('goog.events.EventType');
goog.require('dollar.bill');
goog.require('hyper.js');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('pdfn.core');
cljs.core.enable_console_print_BANG_.call(null);
deck.core.__GT_edn = (function deck$core$__GT_edn(o){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),o);
});
deck.core.edn__GT_ = (function deck$core$edn__GT_(s){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});
deck.core.raw_edn__GT_ = (function deck$core$raw_edn__GT_(s){
return cljs.reader.read_string.call(null,s);
});
deck.core.element_dimensions = (function deck$core$element_dimensions(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.offsetWidth,el.offsetHeight], null);
});
deck.core.bounding_client_rect = (function deck$core$bounding_client_rect(el){
return cljs.core.js__GT_clj.call(null,el.getBoundingClientRect());
});
if(typeof deck.core.screen !== 'undefined'){
} else {
deck.core.screen = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
deck.core.get_screen = (function deck$core$get_screen(){
return cljs.core.reset_BANG_.call(null,deck.core.screen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
});
if(typeof deck.core.state !== 'undefined'){
} else {
deck.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deck","deck",1145325705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.PersistentVector.EMPTY], null));
}
deck.core._grid = (function deck$core$_grid(var_args){
var args28213 = [];
var len__17898__auto___28216 = arguments.length;
var i__17899__auto___28217 = (0);
while(true){
if((i__17899__auto___28217 < len__17898__auto___28216)){
args28213.push((arguments[i__17899__auto___28217]));

var G__28218 = (i__17899__auto___28217 + (1));
i__17899__auto___28217 = G__28218;
continue;
} else {
}
break;
}

var G__28215 = args28213.length;
switch (G__28215) {
case 1:
return deck.core._grid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return deck.core._grid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28213.length)].join('')));

}
});

deck.core._grid.cljs$core$IFn$_invoke$arity$1 = (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,deck.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),x], null)),cljs.core.first.call(null,dollar.bill.$.call(null,[cljs.core.str("#col"),cljs.core.str(x)].join('')))], null);
});

deck.core._grid.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,deck.core.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),x,y], null)),cljs.core.first.call(null,dollar.bill.find.call(null,dollar.bill.$.call(null,[cljs.core.str("#col"),cljs.core.str(x)].join('')),[cljs.core.str("#row"),cljs.core.str(y)].join('')))], null);
});

deck.core._grid.cljs$lang$maxFixedArity = 2;
deck.core.inject_css = (function deck$core$inject_css(id,s){
var el = (function (){var or__16840__auto__ = cljs.core.first.call(null,dollar.bill.$.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.first.call(null,dollar.bill.$.call(null,[cljs.core.str("<style id='"),cljs.core.str(id),cljs.core.str("'></style>")].join('')));
}
})();
(el["innerHTML"] = s);

return cljs.core.first.call(null,dollar.bill.$.call(null,"head")).appendChild(el);
});
deck.core.mount_row = (function deck$core$mount_row(root,x,y){
var vec__28223 = deck.core._grid.call(null,x,y);
var data = cljs.core.nth.call(null,vec__28223,(0),null);
var _ = cljs.core.nth.call(null,vec__28223,(1),null);
var vec__28224 = deck.core._grid.call(null,x);
var ___$1 = cljs.core.nth.call(null,vec__28224,(0),null);
var column = cljs.core.nth.call(null,vec__28224,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"iframe","iframe",884422026).cljs$core$IFn$_invoke$arity$1(data))){
return dollar.bill.append.call(null,cljs.core.first.call(null,root),dollar.bill.$.call(null,[cljs.core.str("<slide class='code' id='row"),cljs.core.str(y),cljs.core.str("'><iframe src='"),cljs.core.str(new cljs.core.Keyword(null,"iframe","iframe",884422026).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str("'></iframe></slide>")].join('')));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data))){
return request(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(data),((function (vec__28223,data,_,vec__28224,___$1,column){
return (function (p1__28220_SHARP_){
var slide = dollar.bill.$.call(null,[cljs.core.str("<slide id='row"),cljs.core.str(y),cljs.core.str("'><pre></pre></slide>")].join(''));
mount(p1__28220_SHARP_,cljs.core.first.call(null,dollar.bill.find.call(null,cljs.core.first.call(null,slide),"pre")));

return cljs.core.first.call(null,dollar.bill.$.call(null,[cljs.core.str("#col"),cljs.core.str(x)].join(''))).appendChild(cljs.core.first.call(null,slide));
});})(vec__28223,data,_,vec__28224,___$1,column))
);
} else {
var frame = dollar.bill.$.call(null,[cljs.core.str("<slide class='frame' id='row"),cljs.core.str(y),cljs.core.str("'></slide>")].join(''));
if(cljs.core.truth_(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(data))){
dollar.bill.append.call(null,cljs.core.first.call(null,frame),cljs.core.first.call(null,dollar.bill.$.call(null,[cljs.core.str("<h1>"),cljs.core.str(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str("</h1>")].join(''))));
} else {
}

return dollar.bill.append.call(null,cljs.core.first.call(null,root),cljs.core.first.call(null,frame));

}
}
});
deck.core.mount_column = (function deck$core$mount_column(x){
var id = [cljs.core.str("col"),cljs.core.str(x)].join('');
var vec__28227 = deck.core._grid.call(null,x);
var data = cljs.core.nth.call(null,vec__28227,(0),null);
var _ = cljs.core.nth.call(null,vec__28227,(1),null);
var gradient = (function (){var or__16840__auto__ = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,data));
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","black"], null);
}
})();
var root = dollar.bill.$.call(null,[cljs.core.str("<background id='"),cljs.core.str(id),cljs.core.str("'></background>")].join(''));
cljs.core.mapv.call(null,((function (id,vec__28227,data,_,gradient,root){
return (function (p1__28225_SHARP_){
return deck.core.mount_row.call(null,root,x,p1__28225_SHARP_);
});})(id,vec__28227,data,_,gradient,root))
,cljs.core.range.call(null,cljs.core.count.call(null,data)));

deck.core.inject_css.call(null,[cljs.core.str("skin-"),cljs.core.str(id)].join(''),[cljs.core.str("#"),cljs.core.str(id),cljs.core.str(" {left: "),cljs.core.str((x * (100))),cljs.core.str("% ;"),cljs.core.str("background-image:\n        linear-gradient("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",gradient))),cljs.core.str(");}")].join(''));

return dollar.bill.append.call(null,cljs.core.first.call(null,dollar.bill.$.call(null,"#main")),cljs.core.first.call(null,root));
});
deck.core.mount = (function deck$core$mount(idx){
dollar.bill.detach.call(null,dollar.bill.$.call(null,"background"));

return cljs.core.mapv.call(null,(function (p1__28228_SHARP_){
return deck.core.mount_column.call(null,p1__28228_SHARP_);
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deck.core.state)))));
});
deck.core.on_resize = (function deck$core$on_resize(e){
return deck.core.get_screen.call(null);
});
deck.core.dirmap = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
deck.core.navigate_BANG_ = (function deck$core$navigate_BANG_(k){
cljs.core.swap_BANG_.call(null,deck.core.state,cljs.core.update,new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (p1__28229_SHARP_){
return cljs.core.mapv.call(null,cljs.core._,p1__28229_SHARP_,deck.core.dirmap.call(null,k));
}));

return cljs.core.first.call(null,dollar.bill.$.call(null,"#main")).style.transform = cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["translate(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,(function (p1__28230_SHARP_){
return [cljs.core.str((p1__28230_SHARP_ * (100))),cljs.core.str("%")].join('');
}),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deck.core.state)))),")"], null)));
});
deck.core.keymap = new cljs.core.PersistentArrayMap(null, 4, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(39),new cljs.core.Keyword(null,"right","right",-452581833),(38),new cljs.core.Keyword(null,"up","up",-269712113),(40),new cljs.core.Keyword(null,"down","down",1565245570)], null);
deck.core.on_keydown = (function deck$core$on_keydown(e){
hyper.js.log.call(null,e.keyCode);

var temp__4425__auto__ = deck.core.keymap.call(null,e.keyCode);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return deck.core.navigate_BANG_.call(null,k);
} else {
return null;
}
});
if(typeof deck.core._init !== 'undefined'){
} else {
deck.core._init = (function (){
deck.core.get_screen.call(null);

goog.events.listen(window,goog.events.EventType.RESIZE,deck.core.on_resize);

return goog.events.listen(window,goog.events.EventType.KEYDOWN,deck.core.on_keydown);
})()
;
}
deck.core.on_js_reload = (function deck$core$on_js_reload(){
cljs.core.print.call(null,(function (){var sb__17814__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28233_28235 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28234_28236 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28233_28235,_STAR_print_fn_STAR_28234_28236,sb__17814__auto__){
return (function (x__17815__auto__){
return sb__17814__auto__.append(x__17815__auto__);
});})(_STAR_print_newline_STAR_28233_28235,_STAR_print_fn_STAR_28234_28236,sb__17814__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,deck.core.state));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28234_28236;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28233_28235;
}
return [cljs.core.str(sb__17814__auto__)].join('');
})());

if(cljs.core.truth_(hyper.tools.multiple_QMARK_.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deck.core.state))))){
return deck.core.mount.call(null,(0));
} else {
return null;
}
});
hyper.js.ajax.call(null,"data/deck.edn",(function (s){
cljs.core.swap_BANG_.call(null,deck.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"deck","deck",1145325705),deck.core.raw_edn__GT_.call(null,s));

cljs.core.swap_BANG_.call(null,deck.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

return deck.core.mount.call(null,(0));
}),(function (p1__28237_SHARP_){
return console.error(p1__28237_SHARP_);
}));

//# sourceMappingURL=core.js.map