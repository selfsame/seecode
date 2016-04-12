// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('deck.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28240__delegate = function (x){
if(cljs.core.truth_(deck.core.on_js_reload)){
return cljs.core.apply.call(null,deck.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'deck.core/on-js-reload' is missing");
}
};
var G__28240 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28241__i = 0, G__28241__a = new Array(arguments.length -  0);
while (G__28241__i < G__28241__a.length) {G__28241__a[G__28241__i] = arguments[G__28241__i + 0]; ++G__28241__i;}
  x = new cljs.core.IndexedSeq(G__28241__a,0);
} 
return G__28240__delegate.call(this,x);};
G__28240.cljs$lang$maxFixedArity = 0;
G__28240.cljs$lang$applyTo = (function (arglist__28242){
var x = cljs.core.seq(arglist__28242);
return G__28240__delegate(x);
});
G__28240.cljs$core$IFn$_invoke$arity$variadic = G__28240__delegate;
return G__28240;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map