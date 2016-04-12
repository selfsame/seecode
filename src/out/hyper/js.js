// Compiled by ClojureScript 1.7.170 {}
goog.provide('hyper.js');
goog.require('cljs.core');
goog.require('goog.style');
hyper.js.element_QMARK_ = (function hyper$js$element_QMARK_(el){
if(cljs.core.truth_(el)){
return cljs.core._EQ_.call(null,el.nodeType,(1));
} else {
return false;
}
});
hyper.js.abs = (function hyper$js$abs(n){
return Math.abs(n);
});
hyper.js.log = (function hyper$js$log(var_args){
var args21968 = [];
var len__17898__auto___21971 = arguments.length;
var i__17899__auto___21972 = (0);
while(true){
if((i__17899__auto___21972 < len__17898__auto___21971)){
args21968.push((arguments[i__17899__auto___21972]));

var G__21973 = (i__17899__auto___21972 + (1));
i__17899__auto___21972 = G__21973;
continue;
} else {
}
break;
}

var G__21970 = args21968.length;
switch (G__21970) {
case 1:
return hyper.js.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyper.js.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyper.js.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyper.js.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyper.js.log.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyper.js.log.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21968.length)].join('')));

}
});

hyper.js.log.cljs$core$IFn$_invoke$arity$1 = (function (a){
return console.log(a);
});

hyper.js.log.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return console.log(a,b);
});

hyper.js.log.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return console.log(a,b,c);
});

hyper.js.log.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return console.log(a,b,c,d);
});

hyper.js.log.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
return console.log(a,b,c,d,e);
});

hyper.js.log.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
return console.log(a,b,c,d,e,f);
});

hyper.js.log.cljs$lang$maxFixedArity = 6;
hyper.js.put_local = (function hyper$js$put_local(k,v){
return (window["localStorage"]).setItem(k,v);
});
hyper.js.get_local = (function hyper$js$get_local(k){
return (window["localStorage"]).getItem(k);
});
hyper.js.kw__GT_str = (function hyper$js$kw__GT_str(k){
if(cljs.core.truth_(k)){
var or__16840__auto__ = k.name;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return [cljs.core.str(k)].join('');
}
} else {
return null;
}
});
hyper.js.js_PLUS_2 = function(a, b){return a + b;};
hyper.js.js_PLUS_ = (function hyper$js$js_PLUS_(var_args){
var args21975 = [];
var len__17898__auto___21981 = arguments.length;
var i__17899__auto___21982 = (0);
while(true){
if((i__17899__auto___21982 < len__17898__auto___21981)){
args21975.push((arguments[i__17899__auto___21982]));

var G__21983 = (i__17899__auto___21982 + (1));
i__17899__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21980 = args21975.length;
switch (G__21980) {
case 1:
return hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17917__auto__ = (new cljs.core.IndexedSeq(args21975.slice((2)),(0)));
return hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17917__auto__);

}
});

hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return hyper.js.js_PLUS_2.call(null,a,b);
});

hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,hyper.js.js_PLUS_2,a,cljs.core.cons.call(null,b,more));
});

hyper.js.js_PLUS_.cljs$lang$applyTo = (function (seq21976){
var G__21977 = cljs.core.first.call(null,seq21976);
var seq21976__$1 = cljs.core.next.call(null,seq21976);
var G__21978 = cljs.core.first.call(null,seq21976__$1);
var seq21976__$2 = cljs.core.next.call(null,seq21976__$1);
return hyper.js.js_PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__21977,G__21978,seq21976__$2);
});

hyper.js.js_PLUS_.cljs$lang$maxFixedArity = (2);
hyper.js.js_EQ_ = function(a, b){return a == b;};
hyper.js.active_input = (function hyper$js$active_input(){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null).call(null,document.activeElement.tagName))){
return document.activeElement;
} else {
return null;
}
});
hyper.js.html_encode = function htmlEncode( html ) {
    return document.createElement( 'a' ).appendChild( 
        document.createTextNode( html ) ).parentNode.innerHTML;};
hyper.js.html_decode = function htmlDecode( html ) {
    var a = document.createElement( 'a' ); a.innerHTML = html;
    return a.textContent;};
hyper.js.remove_BANG_ = (function hyper$js$remove_BANG_(o,k){
return goog.object.remove(o,k);
});
hyper.js.locals = function(o){_o = new Array();for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}return _o;};
hyper.js.new_constructor = function(o, v){return new o['constructor'](v);};
hyper.js.new_prototype_constructor = function(o, v){return new o['prototype']['constructor'](v);};
hyper.js.array_remove = (function hyper$js$array_remove(o,v){
var i = o.indexOf(v);
if(cljs.core.not_EQ_.call(null,(-1),i)){
o.splice(i,(1));

return true;
} else {
return null;
}
});
hyper.js.array_unique_add = (function hyper$js$array_unique_add(o,v){
var i = o.indexOf(v);
if(cljs.core._EQ_.call(null,(-1),i)){
return o.push(v);
} else {
return null;
}
});
hyper.js.array_concat = (function hyper$js$array_concat(v,o){
return Array.prototype.concat.apply(v,o);
});
hyper.js.camel_style = (function hyper$js$camel_style(var_args){
var args21985 = [];
var len__17898__auto___21988 = arguments.length;
var i__17899__auto___21989 = (0);
while(true){
if((i__17899__auto___21989 < len__17898__auto___21988)){
args21985.push((arguments[i__17899__auto___21989]));

var G__21990 = (i__17899__auto___21989 + (1));
i__17899__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var G__21987 = args21985.length;
switch (G__21987) {
case 1:
return hyper.js.camel_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyper.js.camel_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21985.length)].join('')));

}
});

hyper.js.camel_style.cljs$core$IFn$_invoke$arity$1 = (function (s){
return hyper.js.camel_style.call(null,document.createElement("div"),s);
});

hyper.js.camel_style.cljs$core$IFn$_invoke$arity$2 = (function (el,s){
return goog.style.getVendorJsStyleName_(el,s);
});

hyper.js.camel_style.cljs$lang$maxFixedArity = 2;
hyper.js.__GT_style_sheet = (function hyper$js$__GT_style_sheet(var_args){
var args21992 = [];
var len__17898__auto___21999 = arguments.length;
var i__17899__auto___22000 = (0);
while(true){
if((i__17899__auto___22000 < len__17898__auto___21999)){
args21992.push((arguments[i__17899__auto___22000]));

var G__22001 = (i__17899__auto___22000 + (1));
i__17899__auto___22000 = G__22001;
continue;
} else {
}
break;
}

var G__21994 = args21992.length;
switch (G__21994) {
case 1:
return hyper.js.__GT_style_sheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyper.js.__GT_style_sheet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21992.length)].join('')));

}
});

hyper.js.__GT_style_sheet.cljs$core$IFn$_invoke$arity$1 = (function (el){
return hyper.js.__GT_style_sheet.call(null,document,el);
});

hyper.js.__GT_style_sheet.cljs$core$IFn$_invoke$arity$2 = (function (document,el){
var sheets = document.styleSheets;
var res = (function (){var iter__17612__auto__ = ((function (sheets){
return (function hyper$js$iter__21995(s__21996){
return (new cljs.core.LazySeq(null,((function (sheets){
return (function (){
var s__21996__$1 = s__21996;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21996__$1);
if(temp__4425__auto__){
var s__21996__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21996__$2)){
var c__17610__auto__ = cljs.core.chunk_first.call(null,s__21996__$2);
var size__17611__auto__ = cljs.core.count.call(null,c__17610__auto__);
var b__21998 = cljs.core.chunk_buffer.call(null,size__17611__auto__);
if((function (){var i__21997 = (0);
while(true){
if((i__21997 < size__17611__auto__)){
var idx__21960__auto__ = cljs.core._nth.call(null,c__17610__auto__,i__21997);
var sheet = (sheets[idx__21960__auto__]);
if(cljs.core.truth_(sheet)){
cljs.core.chunk_append.call(null,b__21998,((cljs.core._EQ_.call(null,sheet.ownerNode,el))?sheet:null));

var G__22003 = (i__21997 + (1));
i__21997 = G__22003;
continue;
} else {
var G__22004 = (i__21997 + (1));
i__21997 = G__22004;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21998),hyper$js$iter__21995.call(null,cljs.core.chunk_rest.call(null,s__21996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21998),null);
}
} else {
var idx__21960__auto__ = cljs.core.first.call(null,s__21996__$2);
var sheet = (sheets[idx__21960__auto__]);
if(cljs.core.truth_(sheet)){
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,sheet.ownerNode,el))?sheet:null),hyper$js$iter__21995.call(null,cljs.core.rest.call(null,s__21996__$2)));
} else {
var G__22005 = cljs.core.rest.call(null,s__21996__$2);
s__21996__$1 = G__22005;
continue;
}
}
} else {
return null;
}
break;
}
});})(sheets))
,null,null));
});})(sheets))
;
return iter__17612__auto__.call(null,cljs.core.range.call(null,(sheets["length"])));
})();
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,res));
});

hyper.js.__GT_style_sheet.cljs$lang$maxFixedArity = 2;
hyper.js.ajax = (function hyper$js$ajax(var_args){
var args__17905__auto__ = [];
var len__17898__auto___22009 = arguments.length;
var i__17899__auto___22010 = (0);
while(true){
if((i__17899__auto___22010 < len__17898__auto___22009)){
args__17905__auto__.push((arguments[i__17899__auto___22010]));

var G__22011 = (i__17899__auto___22010 + (1));
i__17899__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((2) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((2)),(0))):null);
return hyper.js.ajax.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17906__auto__);
});

hyper.js.ajax.cljs$core$IFn$_invoke$arity$variadic = (function (url,f,fail){
var temp__4425__auto__ = (new XMLHttpRequest());
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
req.onreadystatechange = ((function (req,temp__4425__auto__){
return (function (e){
if(cljs.core._EQ_.call(null,(4),req.readyState)){
if(cljs.core._EQ_.call(null,(200),req.status)){
return f.call(null,e.target.response);
} else {
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,fail))){
return cljs.core.first.call(null,fail).call(null,e);
} else {
return null;
}
}
} else {
return null;
}
});})(req,temp__4425__auto__))
;

req.open("GET",url,false);

req.overrideMimeType("text/xml; charset=iso-8859-1");

return req.send();
} else {
return null;
}
});

hyper.js.ajax.cljs$lang$maxFixedArity = (2);

hyper.js.ajax.cljs$lang$applyTo = (function (seq22006){
var G__22007 = cljs.core.first.call(null,seq22006);
var seq22006__$1 = cljs.core.next.call(null,seq22006);
var G__22008 = cljs.core.first.call(null,seq22006__$1);
var seq22006__$2 = cljs.core.next.call(null,seq22006__$1);
return hyper.js.ajax.cljs$core$IFn$_invoke$arity$variadic(G__22007,G__22008,seq22006__$2);
});
hyper.js.download_file = (function hyper$js$download_file(s,file_name,file_type){
var a = document.createElement("a");
a.href = URL.createObjectURL((new Blob([s],{"type": file_type})));

a.download = file_name;

return a.click();
});
hyper.js.resize_dataurl = (function hyper$js$resize_dataurl(data,width,height){
var img = document.createElement("img");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
img.data = data;

canvas.width = width;

canvas.height = height;

ctx.drawImage(img,(0),(0),width,height);

return canvas.toDataURL("image/png");
});
hyper.js.file_drop_event = (function hyper$js$file_drop_event(e,read_k,f){
var files = cljs.core.js__GT_clj.call(null,e.dataTransfer.files);
var length = files.length;
return cljs.core.dorun.call(null,(function (){var iter__17612__auto__ = ((function (files,length){
return (function hyper$js$file_drop_event_$_iter__22020(s__22021){
return (new cljs.core.LazySeq(null,((function (files,length){
return (function (){
var s__22021__$1 = s__22021;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22021__$1);
if(temp__4425__auto__){
var s__22021__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22021__$2)){
var c__17610__auto__ = cljs.core.chunk_first.call(null,s__22021__$2);
var size__17611__auto__ = cljs.core.count.call(null,c__17610__auto__);
var b__22023 = cljs.core.chunk_buffer.call(null,size__17611__auto__);
if((function (){var i__22022 = (0);
while(true){
if((i__22022 < size__17611__auto__)){
var i = cljs.core._nth.call(null,c__17610__auto__,i__22022);
var file = (files[i]);
cljs.core.chunk_append.call(null,b__22023,(function (){var reader = (new FileReader());
(reader["onload"] = f);

var G__22026 = (((read_k instanceof cljs.core.Keyword))?read_k.fqn:null);
switch (G__22026) {
case "data-url":
return reader.readAsDataUrl(file);

break;
default:
return reader.readAsArrayBuffer(file);

}
})());

var G__22029 = (i__22022 + (1));
i__22022 = G__22029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22023),hyper$js$file_drop_event_$_iter__22020.call(null,cljs.core.chunk_rest.call(null,s__22021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22023),null);
}
} else {
var i = cljs.core.first.call(null,s__22021__$2);
var file = (files[i]);
return cljs.core.cons.call(null,(function (){var reader = (new FileReader());
(reader["onload"] = f);

var G__22027 = (((read_k instanceof cljs.core.Keyword))?read_k.fqn:null);
switch (G__22027) {
case "data-url":
return reader.readAsDataUrl(file);

break;
default:
return reader.readAsArrayBuffer(file);

}
})(),hyper$js$file_drop_event_$_iter__22020.call(null,cljs.core.rest.call(null,s__22021__$2)));
}
} else {
return null;
}
break;
}
});})(files,length))
,null,null));
});})(files,length))
;
return iter__17612__auto__.call(null,cljs.core.range.call(null,(0),length));
})());
});

//# sourceMappingURL=js.js.map