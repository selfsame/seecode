// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17905__auto__ = [];
var len__17898__auto___23504 = arguments.length;
var i__17899__auto___23505 = (0);
while(true){
if((i__17899__auto___23505 < len__17898__auto___23504)){
args__17905__auto__.push((arguments[i__17899__auto___23505]));

var G__23506 = (i__17899__auto___23505 + (1));
i__17899__auto___23505 = G__23506;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((2) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17906__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23496_23507 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23497_23508 = null;
var count__23498_23509 = (0);
var i__23499_23510 = (0);
while(true){
if((i__23499_23510 < count__23498_23509)){
var k_23511 = cljs.core._nth.call(null,chunk__23497_23508,i__23499_23510);
e.setAttribute(cljs.core.name.call(null,k_23511),cljs.core.get.call(null,attrs,k_23511));

var G__23512 = seq__23496_23507;
var G__23513 = chunk__23497_23508;
var G__23514 = count__23498_23509;
var G__23515 = (i__23499_23510 + (1));
seq__23496_23507 = G__23512;
chunk__23497_23508 = G__23513;
count__23498_23509 = G__23514;
i__23499_23510 = G__23515;
continue;
} else {
var temp__4425__auto___23516 = cljs.core.seq.call(null,seq__23496_23507);
if(temp__4425__auto___23516){
var seq__23496_23517__$1 = temp__4425__auto___23516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23496_23517__$1)){
var c__17643__auto___23518 = cljs.core.chunk_first.call(null,seq__23496_23517__$1);
var G__23519 = cljs.core.chunk_rest.call(null,seq__23496_23517__$1);
var G__23520 = c__17643__auto___23518;
var G__23521 = cljs.core.count.call(null,c__17643__auto___23518);
var G__23522 = (0);
seq__23496_23507 = G__23519;
chunk__23497_23508 = G__23520;
count__23498_23509 = G__23521;
i__23499_23510 = G__23522;
continue;
} else {
var k_23523 = cljs.core.first.call(null,seq__23496_23517__$1);
e.setAttribute(cljs.core.name.call(null,k_23523),cljs.core.get.call(null,attrs,k_23523));

var G__23524 = cljs.core.next.call(null,seq__23496_23517__$1);
var G__23525 = null;
var G__23526 = (0);
var G__23527 = (0);
seq__23496_23507 = G__23524;
chunk__23497_23508 = G__23525;
count__23498_23509 = G__23526;
i__23499_23510 = G__23527;
continue;
}
} else {
}
}
break;
}

var seq__23500_23528 = cljs.core.seq.call(null,children);
var chunk__23501_23529 = null;
var count__23502_23530 = (0);
var i__23503_23531 = (0);
while(true){
if((i__23503_23531 < count__23502_23530)){
var ch_23532 = cljs.core._nth.call(null,chunk__23501_23529,i__23503_23531);
e.appendChild(ch_23532);

var G__23533 = seq__23500_23528;
var G__23534 = chunk__23501_23529;
var G__23535 = count__23502_23530;
var G__23536 = (i__23503_23531 + (1));
seq__23500_23528 = G__23533;
chunk__23501_23529 = G__23534;
count__23502_23530 = G__23535;
i__23503_23531 = G__23536;
continue;
} else {
var temp__4425__auto___23537 = cljs.core.seq.call(null,seq__23500_23528);
if(temp__4425__auto___23537){
var seq__23500_23538__$1 = temp__4425__auto___23537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23500_23538__$1)){
var c__17643__auto___23539 = cljs.core.chunk_first.call(null,seq__23500_23538__$1);
var G__23540 = cljs.core.chunk_rest.call(null,seq__23500_23538__$1);
var G__23541 = c__17643__auto___23539;
var G__23542 = cljs.core.count.call(null,c__17643__auto___23539);
var G__23543 = (0);
seq__23500_23528 = G__23540;
chunk__23501_23529 = G__23541;
count__23502_23530 = G__23542;
i__23503_23531 = G__23543;
continue;
} else {
var ch_23544 = cljs.core.first.call(null,seq__23500_23538__$1);
e.appendChild(ch_23544);

var G__23545 = cljs.core.next.call(null,seq__23500_23538__$1);
var G__23546 = null;
var G__23547 = (0);
var G__23548 = (0);
seq__23500_23528 = G__23545;
chunk__23501_23529 = G__23546;
count__23502_23530 = G__23547;
i__23503_23531 = G__23548;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23493){
var G__23494 = cljs.core.first.call(null,seq23493);
var seq23493__$1 = cljs.core.next.call(null,seq23493);
var G__23495 = cljs.core.first.call(null,seq23493__$1);
var seq23493__$2 = cljs.core.next.call(null,seq23493__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23494,G__23495,seq23493__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17757__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__,hierarchy__17757__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__,hierarchy__17757__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17757__auto__,method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23549 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23549.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23549.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23549.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23549);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23550,st_map){
var map__23555 = p__23550;
var map__23555__$1 = ((((!((map__23555 == null)))?((((map__23555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23555):map__23555);
var container_el = cljs.core.get.call(null,map__23555__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23555,map__23555__$1,container_el){
return (function (p__23557){
var vec__23558 = p__23557;
var k = cljs.core.nth.call(null,vec__23558,(0),null);
var v = cljs.core.nth.call(null,vec__23558,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23555,map__23555__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23559,dom_str){
var map__23562 = p__23559;
var map__23562__$1 = ((((!((map__23562 == null)))?((((map__23562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23562):map__23562);
var c = map__23562__$1;
var content_area_el = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23564){
var map__23567 = p__23564;
var map__23567__$1 = ((((!((map__23567 == null)))?((((map__23567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23567):map__23567);
var content_area_el = cljs.core.get.call(null,map__23567__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_23610){
var state_val_23611 = (state_23610[(1)]);
if((state_val_23611 === (1))){
var inst_23595 = (state_23610[(7)]);
var inst_23595__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23596 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23597 = ["10px","10px","100%","68px","1.0"];
var inst_23598 = cljs.core.PersistentHashMap.fromArrays(inst_23596,inst_23597);
var inst_23599 = cljs.core.merge.call(null,inst_23598,style);
var inst_23600 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23595__$1,inst_23599);
var inst_23601 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23595__$1,msg);
var inst_23602 = cljs.core.async.timeout.call(null,(300));
var state_23610__$1 = (function (){var statearr_23612 = state_23610;
(statearr_23612[(7)] = inst_23595__$1);

(statearr_23612[(8)] = inst_23601);

(statearr_23612[(9)] = inst_23600);

return statearr_23612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23610__$1,(2),inst_23602);
} else {
if((state_val_23611 === (2))){
var inst_23595 = (state_23610[(7)]);
var inst_23604 = (state_23610[(2)]);
var inst_23605 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23606 = ["auto"];
var inst_23607 = cljs.core.PersistentHashMap.fromArrays(inst_23605,inst_23606);
var inst_23608 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23595,inst_23607);
var state_23610__$1 = (function (){var statearr_23613 = state_23610;
(statearr_23613[(10)] = inst_23604);

return statearr_23613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23610__$1,inst_23608);
} else {
return null;
}
}
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____0 = (function (){
var statearr_23617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23617[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__);

(statearr_23617[(1)] = (1));

return statearr_23617;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____1 = (function (state_23610){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_23610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e23618){if((e23618 instanceof Object)){
var ex__19053__auto__ = e23618;
var statearr_23619_23621 = state_23610;
(statearr_23619_23621[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23622 = state_23610;
state_23610 = G__23622;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__ = function(state_23610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____1.call(this,state_23610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_23620 = f__19162__auto__.call(null);
(statearr_23620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_23620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23624 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23624,(0),null);
var ln = cljs.core.nth.call(null,vec__23624,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23627 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23627,(0),null);
var file_line = cljs.core.nth.call(null,vec__23627,(1),null);
var file_column = cljs.core.nth.call(null,vec__23627,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23627,file_name,file_line,file_column){
return (function (p1__23625_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23625_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23627,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16840__auto__ = file_line;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var and__16828__auto__ = cause;
if(cljs.core.truth_(and__16828__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16828__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23630 = figwheel.client.heads_up.ensure_container.call(null);
var map__23630__$1 = ((((!((map__23630 == null)))?((((map__23630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23630):map__23630);
var content_area_el = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_23678){
var state_val_23679 = (state_23678[(1)]);
if((state_val_23679 === (1))){
var inst_23661 = (state_23678[(7)]);
var inst_23661__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23662 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23663 = ["0.0"];
var inst_23664 = cljs.core.PersistentHashMap.fromArrays(inst_23662,inst_23663);
var inst_23665 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23661__$1,inst_23664);
var inst_23666 = cljs.core.async.timeout.call(null,(300));
var state_23678__$1 = (function (){var statearr_23680 = state_23678;
(statearr_23680[(7)] = inst_23661__$1);

(statearr_23680[(8)] = inst_23665);

return statearr_23680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23678__$1,(2),inst_23666);
} else {
if((state_val_23679 === (2))){
var inst_23661 = (state_23678[(7)]);
var inst_23668 = (state_23678[(2)]);
var inst_23669 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23670 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23671 = cljs.core.PersistentHashMap.fromArrays(inst_23669,inst_23670);
var inst_23672 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23661,inst_23671);
var inst_23673 = cljs.core.async.timeout.call(null,(200));
var state_23678__$1 = (function (){var statearr_23681 = state_23678;
(statearr_23681[(9)] = inst_23668);

(statearr_23681[(10)] = inst_23672);

return statearr_23681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23678__$1,(3),inst_23673);
} else {
if((state_val_23679 === (3))){
var inst_23661 = (state_23678[(7)]);
var inst_23675 = (state_23678[(2)]);
var inst_23676 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23661,"");
var state_23678__$1 = (function (){var statearr_23682 = state_23678;
(statearr_23682[(11)] = inst_23675);

return statearr_23682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23678__$1,inst_23676);
} else {
return null;
}
}
}
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19050__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19050__auto____0 = (function (){
var statearr_23686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23686[(0)] = figwheel$client$heads_up$clear_$_state_machine__19050__auto__);

(statearr_23686[(1)] = (1));

return statearr_23686;
});
var figwheel$client$heads_up$clear_$_state_machine__19050__auto____1 = (function (state_23678){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_23678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e23687){if((e23687 instanceof Object)){
var ex__19053__auto__ = e23687;
var statearr_23688_23690 = state_23678;
(statearr_23688_23690[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23691 = state_23678;
state_23678 = G__23691;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19050__auto__ = function(state_23678){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19050__auto____1.call(this,state_23678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19050__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19050__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_23689 = f__19162__auto__.call(null);
(statearr_23689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_23689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_23723){
var state_val_23724 = (state_23723[(1)]);
if((state_val_23724 === (1))){
var inst_23713 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23723__$1,(2),inst_23713);
} else {
if((state_val_23724 === (2))){
var inst_23715 = (state_23723[(2)]);
var inst_23716 = cljs.core.async.timeout.call(null,(400));
var state_23723__$1 = (function (){var statearr_23725 = state_23723;
(statearr_23725[(7)] = inst_23715);

return statearr_23725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23723__$1,(3),inst_23716);
} else {
if((state_val_23724 === (3))){
var inst_23718 = (state_23723[(2)]);
var inst_23719 = figwheel.client.heads_up.clear.call(null);
var state_23723__$1 = (function (){var statearr_23726 = state_23723;
(statearr_23726[(8)] = inst_23718);

return statearr_23726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23723__$1,(4),inst_23719);
} else {
if((state_val_23724 === (4))){
var inst_23721 = (state_23723[(2)]);
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23723__$1,inst_23721);
} else {
return null;
}
}
}
}
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____0 = (function (){
var statearr_23730 = [null,null,null,null,null,null,null,null,null];
(statearr_23730[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__);

(statearr_23730[(1)] = (1));

return statearr_23730;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____1 = (function (state_23723){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_23723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e23731){if((e23731 instanceof Object)){
var ex__19053__auto__ = e23731;
var statearr_23732_23734 = state_23723;
(statearr_23732_23734[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23735 = state_23723;
state_23723 = G__23735;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__ = function(state_23723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____1.call(this,state_23723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_23733 = f__19162__auto__.call(null);
(statearr_23733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_23733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map