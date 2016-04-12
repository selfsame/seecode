// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16840__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16840__auto__){
return or__16840__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16840__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22141_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22141_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22146 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22147 = null;
var count__22148 = (0);
var i__22149 = (0);
while(true){
if((i__22149 < count__22148)){
var n = cljs.core._nth.call(null,chunk__22147,i__22149);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22150 = seq__22146;
var G__22151 = chunk__22147;
var G__22152 = count__22148;
var G__22153 = (i__22149 + (1));
seq__22146 = G__22150;
chunk__22147 = G__22151;
count__22148 = G__22152;
i__22149 = G__22153;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22146);
if(temp__4425__auto__){
var seq__22146__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22146__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22146__$1);
var G__22154 = cljs.core.chunk_rest.call(null,seq__22146__$1);
var G__22155 = c__17643__auto__;
var G__22156 = cljs.core.count.call(null,c__17643__auto__);
var G__22157 = (0);
seq__22146 = G__22154;
chunk__22147 = G__22155;
count__22148 = G__22156;
i__22149 = G__22157;
continue;
} else {
var n = cljs.core.first.call(null,seq__22146__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22158 = cljs.core.next.call(null,seq__22146__$1);
var G__22159 = null;
var G__22160 = (0);
var G__22161 = (0);
seq__22146 = G__22158;
chunk__22147 = G__22159;
count__22148 = G__22160;
i__22149 = G__22161;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22200_22207 = cljs.core.seq.call(null,deps);
var chunk__22201_22208 = null;
var count__22202_22209 = (0);
var i__22203_22210 = (0);
while(true){
if((i__22203_22210 < count__22202_22209)){
var dep_22211 = cljs.core._nth.call(null,chunk__22201_22208,i__22203_22210);
topo_sort_helper_STAR_.call(null,dep_22211,(depth + (1)),state);

var G__22212 = seq__22200_22207;
var G__22213 = chunk__22201_22208;
var G__22214 = count__22202_22209;
var G__22215 = (i__22203_22210 + (1));
seq__22200_22207 = G__22212;
chunk__22201_22208 = G__22213;
count__22202_22209 = G__22214;
i__22203_22210 = G__22215;
continue;
} else {
var temp__4425__auto___22216 = cljs.core.seq.call(null,seq__22200_22207);
if(temp__4425__auto___22216){
var seq__22200_22217__$1 = temp__4425__auto___22216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22200_22217__$1)){
var c__17643__auto___22218 = cljs.core.chunk_first.call(null,seq__22200_22217__$1);
var G__22219 = cljs.core.chunk_rest.call(null,seq__22200_22217__$1);
var G__22220 = c__17643__auto___22218;
var G__22221 = cljs.core.count.call(null,c__17643__auto___22218);
var G__22222 = (0);
seq__22200_22207 = G__22219;
chunk__22201_22208 = G__22220;
count__22202_22209 = G__22221;
i__22203_22210 = G__22222;
continue;
} else {
var dep_22223 = cljs.core.first.call(null,seq__22200_22217__$1);
topo_sort_helper_STAR_.call(null,dep_22223,(depth + (1)),state);

var G__22224 = cljs.core.next.call(null,seq__22200_22217__$1);
var G__22225 = null;
var G__22226 = (0);
var G__22227 = (0);
seq__22200_22207 = G__22224;
chunk__22201_22208 = G__22225;
count__22202_22209 = G__22226;
i__22203_22210 = G__22227;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22204){
var vec__22206 = p__22204;
var x = cljs.core.nth.call(null,vec__22206,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22206,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22206,x,xs,get_deps__$1){
return (function (p1__22162_SHARP_){
return clojure.set.difference.call(null,p1__22162_SHARP_,x);
});})(vec__22206,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22240 = cljs.core.seq.call(null,provides);
var chunk__22241 = null;
var count__22242 = (0);
var i__22243 = (0);
while(true){
if((i__22243 < count__22242)){
var prov = cljs.core._nth.call(null,chunk__22241,i__22243);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22244_22252 = cljs.core.seq.call(null,requires);
var chunk__22245_22253 = null;
var count__22246_22254 = (0);
var i__22247_22255 = (0);
while(true){
if((i__22247_22255 < count__22246_22254)){
var req_22256 = cljs.core._nth.call(null,chunk__22245_22253,i__22247_22255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22256,prov);

var G__22257 = seq__22244_22252;
var G__22258 = chunk__22245_22253;
var G__22259 = count__22246_22254;
var G__22260 = (i__22247_22255 + (1));
seq__22244_22252 = G__22257;
chunk__22245_22253 = G__22258;
count__22246_22254 = G__22259;
i__22247_22255 = G__22260;
continue;
} else {
var temp__4425__auto___22261 = cljs.core.seq.call(null,seq__22244_22252);
if(temp__4425__auto___22261){
var seq__22244_22262__$1 = temp__4425__auto___22261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22244_22262__$1)){
var c__17643__auto___22263 = cljs.core.chunk_first.call(null,seq__22244_22262__$1);
var G__22264 = cljs.core.chunk_rest.call(null,seq__22244_22262__$1);
var G__22265 = c__17643__auto___22263;
var G__22266 = cljs.core.count.call(null,c__17643__auto___22263);
var G__22267 = (0);
seq__22244_22252 = G__22264;
chunk__22245_22253 = G__22265;
count__22246_22254 = G__22266;
i__22247_22255 = G__22267;
continue;
} else {
var req_22268 = cljs.core.first.call(null,seq__22244_22262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22268,prov);

var G__22269 = cljs.core.next.call(null,seq__22244_22262__$1);
var G__22270 = null;
var G__22271 = (0);
var G__22272 = (0);
seq__22244_22252 = G__22269;
chunk__22245_22253 = G__22270;
count__22246_22254 = G__22271;
i__22247_22255 = G__22272;
continue;
}
} else {
}
}
break;
}

var G__22273 = seq__22240;
var G__22274 = chunk__22241;
var G__22275 = count__22242;
var G__22276 = (i__22243 + (1));
seq__22240 = G__22273;
chunk__22241 = G__22274;
count__22242 = G__22275;
i__22243 = G__22276;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22240);
if(temp__4425__auto__){
var seq__22240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22240__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22240__$1);
var G__22277 = cljs.core.chunk_rest.call(null,seq__22240__$1);
var G__22278 = c__17643__auto__;
var G__22279 = cljs.core.count.call(null,c__17643__auto__);
var G__22280 = (0);
seq__22240 = G__22277;
chunk__22241 = G__22278;
count__22242 = G__22279;
i__22243 = G__22280;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22240__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22248_22281 = cljs.core.seq.call(null,requires);
var chunk__22249_22282 = null;
var count__22250_22283 = (0);
var i__22251_22284 = (0);
while(true){
if((i__22251_22284 < count__22250_22283)){
var req_22285 = cljs.core._nth.call(null,chunk__22249_22282,i__22251_22284);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22285,prov);

var G__22286 = seq__22248_22281;
var G__22287 = chunk__22249_22282;
var G__22288 = count__22250_22283;
var G__22289 = (i__22251_22284 + (1));
seq__22248_22281 = G__22286;
chunk__22249_22282 = G__22287;
count__22250_22283 = G__22288;
i__22251_22284 = G__22289;
continue;
} else {
var temp__4425__auto___22290__$1 = cljs.core.seq.call(null,seq__22248_22281);
if(temp__4425__auto___22290__$1){
var seq__22248_22291__$1 = temp__4425__auto___22290__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22248_22291__$1)){
var c__17643__auto___22292 = cljs.core.chunk_first.call(null,seq__22248_22291__$1);
var G__22293 = cljs.core.chunk_rest.call(null,seq__22248_22291__$1);
var G__22294 = c__17643__auto___22292;
var G__22295 = cljs.core.count.call(null,c__17643__auto___22292);
var G__22296 = (0);
seq__22248_22281 = G__22293;
chunk__22249_22282 = G__22294;
count__22250_22283 = G__22295;
i__22251_22284 = G__22296;
continue;
} else {
var req_22297 = cljs.core.first.call(null,seq__22248_22291__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22297,prov);

var G__22298 = cljs.core.next.call(null,seq__22248_22291__$1);
var G__22299 = null;
var G__22300 = (0);
var G__22301 = (0);
seq__22248_22281 = G__22298;
chunk__22249_22282 = G__22299;
count__22250_22283 = G__22300;
i__22251_22284 = G__22301;
continue;
}
} else {
}
}
break;
}

var G__22302 = cljs.core.next.call(null,seq__22240__$1);
var G__22303 = null;
var G__22304 = (0);
var G__22305 = (0);
seq__22240 = G__22302;
chunk__22241 = G__22303;
count__22242 = G__22304;
i__22243 = G__22305;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22310_22314 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22311_22315 = null;
var count__22312_22316 = (0);
var i__22313_22317 = (0);
while(true){
if((i__22313_22317 < count__22312_22316)){
var ns_22318 = cljs.core._nth.call(null,chunk__22311_22315,i__22313_22317);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22318);

var G__22319 = seq__22310_22314;
var G__22320 = chunk__22311_22315;
var G__22321 = count__22312_22316;
var G__22322 = (i__22313_22317 + (1));
seq__22310_22314 = G__22319;
chunk__22311_22315 = G__22320;
count__22312_22316 = G__22321;
i__22313_22317 = G__22322;
continue;
} else {
var temp__4425__auto___22323 = cljs.core.seq.call(null,seq__22310_22314);
if(temp__4425__auto___22323){
var seq__22310_22324__$1 = temp__4425__auto___22323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22310_22324__$1)){
var c__17643__auto___22325 = cljs.core.chunk_first.call(null,seq__22310_22324__$1);
var G__22326 = cljs.core.chunk_rest.call(null,seq__22310_22324__$1);
var G__22327 = c__17643__auto___22325;
var G__22328 = cljs.core.count.call(null,c__17643__auto___22325);
var G__22329 = (0);
seq__22310_22314 = G__22326;
chunk__22311_22315 = G__22327;
count__22312_22316 = G__22328;
i__22313_22317 = G__22329;
continue;
} else {
var ns_22330 = cljs.core.first.call(null,seq__22310_22324__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22330);

var G__22331 = cljs.core.next.call(null,seq__22310_22324__$1);
var G__22332 = null;
var G__22333 = (0);
var G__22334 = (0);
seq__22310_22314 = G__22331;
chunk__22311_22315 = G__22332;
count__22312_22316 = G__22333;
i__22313_22317 = G__22334;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16840__auto__ = goog.require__;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22335__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22336__i = 0, G__22336__a = new Array(arguments.length -  0);
while (G__22336__i < G__22336__a.length) {G__22336__a[G__22336__i] = arguments[G__22336__i + 0]; ++G__22336__i;}
  args = new cljs.core.IndexedSeq(G__22336__a,0);
} 
return G__22335__delegate.call(this,args);};
G__22335.cljs$lang$maxFixedArity = 0;
G__22335.cljs$lang$applyTo = (function (arglist__22337){
var args = cljs.core.seq(arglist__22337);
return G__22335__delegate(args);
});
G__22335.cljs$core$IFn$_invoke$arity$variadic = G__22335__delegate;
return G__22335;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22339 = cljs.core._EQ_;
var expr__22340 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22339.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22340))){
var path_parts = ((function (pred__22339,expr__22340){
return (function (p1__22338_SHARP_){
return clojure.string.split.call(null,p1__22338_SHARP_,/[\/\\]/);
});})(pred__22339,expr__22340))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22339,expr__22340){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22342){if((e22342 instanceof Error)){
var e = e22342;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22342;

}
}})());
});
;})(path_parts,sep,root,pred__22339,expr__22340))
} else {
if(cljs.core.truth_(pred__22339.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22340))){
return ((function (pred__22339,expr__22340){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22339,expr__22340){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22339,expr__22340))
);

return deferred.addErrback(((function (deferred,pred__22339,expr__22340){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22339,expr__22340))
);
});
;})(pred__22339,expr__22340))
} else {
return ((function (pred__22339,expr__22340){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22339,expr__22340))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22343,callback){
var map__22346 = p__22343;
var map__22346__$1 = ((((!((map__22346 == null)))?((((map__22346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22346):map__22346);
var file_msg = map__22346__$1;
var request_url = cljs.core.get.call(null,map__22346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22346,map__22346__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22346,map__22346__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_22370){
var state_val_22371 = (state_22370[(1)]);
if((state_val_22371 === (7))){
var inst_22366 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22372_22392 = state_22370__$1;
(statearr_22372_22392[(2)] = inst_22366);

(statearr_22372_22392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (1))){
var state_22370__$1 = state_22370;
var statearr_22373_22393 = state_22370__$1;
(statearr_22373_22393[(2)] = null);

(statearr_22373_22393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (4))){
var inst_22350 = (state_22370[(7)]);
var inst_22350__$1 = (state_22370[(2)]);
var state_22370__$1 = (function (){var statearr_22374 = state_22370;
(statearr_22374[(7)] = inst_22350__$1);

return statearr_22374;
})();
if(cljs.core.truth_(inst_22350__$1)){
var statearr_22375_22394 = state_22370__$1;
(statearr_22375_22394[(1)] = (5));

} else {
var statearr_22376_22395 = state_22370__$1;
(statearr_22376_22395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (6))){
var state_22370__$1 = state_22370;
var statearr_22377_22396 = state_22370__$1;
(statearr_22377_22396[(2)] = null);

(statearr_22377_22396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (3))){
var inst_22368 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22370__$1,inst_22368);
} else {
if((state_val_22371 === (2))){
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22370__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22371 === (11))){
var inst_22362 = (state_22370[(2)]);
var state_22370__$1 = (function (){var statearr_22378 = state_22370;
(statearr_22378[(8)] = inst_22362);

return statearr_22378;
})();
var statearr_22379_22397 = state_22370__$1;
(statearr_22379_22397[(2)] = null);

(statearr_22379_22397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (9))){
var inst_22356 = (state_22370[(9)]);
var inst_22354 = (state_22370[(10)]);
var inst_22358 = inst_22356.call(null,inst_22354);
var state_22370__$1 = state_22370;
var statearr_22380_22398 = state_22370__$1;
(statearr_22380_22398[(2)] = inst_22358);

(statearr_22380_22398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (5))){
var inst_22350 = (state_22370[(7)]);
var inst_22352 = figwheel.client.file_reloading.blocking_load.call(null,inst_22350);
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22370__$1,(8),inst_22352);
} else {
if((state_val_22371 === (10))){
var inst_22354 = (state_22370[(10)]);
var inst_22360 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22354);
var state_22370__$1 = state_22370;
var statearr_22381_22399 = state_22370__$1;
(statearr_22381_22399[(2)] = inst_22360);

(statearr_22381_22399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (8))){
var inst_22350 = (state_22370[(7)]);
var inst_22356 = (state_22370[(9)]);
var inst_22354 = (state_22370[(2)]);
var inst_22355 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22356__$1 = cljs.core.get.call(null,inst_22355,inst_22350);
var state_22370__$1 = (function (){var statearr_22382 = state_22370;
(statearr_22382[(9)] = inst_22356__$1);

(statearr_22382[(10)] = inst_22354);

return statearr_22382;
})();
if(cljs.core.truth_(inst_22356__$1)){
var statearr_22383_22400 = state_22370__$1;
(statearr_22383_22400[(1)] = (9));

} else {
var statearr_22384_22401 = state_22370__$1;
(statearr_22384_22401[(1)] = (10));

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
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19050__auto__ = null;
var figwheel$client$file_reloading$state_machine__19050__auto____0 = (function (){
var statearr_22388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22388[(0)] = figwheel$client$file_reloading$state_machine__19050__auto__);

(statearr_22388[(1)] = (1));

return statearr_22388;
});
var figwheel$client$file_reloading$state_machine__19050__auto____1 = (function (state_22370){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_22370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e22389){if((e22389 instanceof Object)){
var ex__19053__auto__ = e22389;
var statearr_22390_22402 = state_22370;
(statearr_22390_22402[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22403 = state_22370;
state_22370 = G__22403;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19050__auto__ = function(state_22370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19050__auto____1.call(this,state_22370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19050__auto____0;
figwheel$client$file_reloading$state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19050__auto____1;
return figwheel$client$file_reloading$state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_22391 = f__19162__auto__.call(null);
(statearr_22391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22404,callback){
var map__22407 = p__22404;
var map__22407__$1 = ((((!((map__22407 == null)))?((((map__22407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22407):map__22407);
var file_msg = map__22407__$1;
var namespace = cljs.core.get.call(null,map__22407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22407,map__22407__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22407,map__22407__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22409){
var map__22412 = p__22409;
var map__22412__$1 = ((((!((map__22412 == null)))?((((map__22412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22412):map__22412);
var file_msg = map__22412__$1;
var namespace = cljs.core.get.call(null,map__22412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16828__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16828__auto__){
var or__16840__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var or__16840__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto____$1)){
return or__16840__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16828__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22414,callback){
var map__22417 = p__22414;
var map__22417__$1 = ((((!((map__22417 == null)))?((((map__22417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22417):map__22417);
var file_msg = map__22417__$1;
var request_url = cljs.core.get.call(null,map__22417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19161__auto___22505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___22505,out){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___22505,out){
return (function (state_22487){
var state_val_22488 = (state_22487[(1)]);
if((state_val_22488 === (1))){
var inst_22465 = cljs.core.nth.call(null,files,(0),null);
var inst_22466 = cljs.core.nthnext.call(null,files,(1));
var inst_22467 = files;
var state_22487__$1 = (function (){var statearr_22489 = state_22487;
(statearr_22489[(7)] = inst_22465);

(statearr_22489[(8)] = inst_22467);

(statearr_22489[(9)] = inst_22466);

return statearr_22489;
})();
var statearr_22490_22506 = state_22487__$1;
(statearr_22490_22506[(2)] = null);

(statearr_22490_22506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (2))){
var inst_22467 = (state_22487[(8)]);
var inst_22470 = (state_22487[(10)]);
var inst_22470__$1 = cljs.core.nth.call(null,inst_22467,(0),null);
var inst_22471 = cljs.core.nthnext.call(null,inst_22467,(1));
var inst_22472 = (inst_22470__$1 == null);
var inst_22473 = cljs.core.not.call(null,inst_22472);
var state_22487__$1 = (function (){var statearr_22491 = state_22487;
(statearr_22491[(11)] = inst_22471);

(statearr_22491[(10)] = inst_22470__$1);

return statearr_22491;
})();
if(inst_22473){
var statearr_22492_22507 = state_22487__$1;
(statearr_22492_22507[(1)] = (4));

} else {
var statearr_22493_22508 = state_22487__$1;
(statearr_22493_22508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (3))){
var inst_22485 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22487__$1,inst_22485);
} else {
if((state_val_22488 === (4))){
var inst_22470 = (state_22487[(10)]);
var inst_22475 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22470);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(7),inst_22475);
} else {
if((state_val_22488 === (5))){
var inst_22481 = cljs.core.async.close_BANG_.call(null,out);
var state_22487__$1 = state_22487;
var statearr_22494_22509 = state_22487__$1;
(statearr_22494_22509[(2)] = inst_22481);

(statearr_22494_22509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (6))){
var inst_22483 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22495_22510 = state_22487__$1;
(statearr_22495_22510[(2)] = inst_22483);

(statearr_22495_22510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (7))){
var inst_22471 = (state_22487[(11)]);
var inst_22477 = (state_22487[(2)]);
var inst_22478 = cljs.core.async.put_BANG_.call(null,out,inst_22477);
var inst_22467 = inst_22471;
var state_22487__$1 = (function (){var statearr_22496 = state_22487;
(statearr_22496[(8)] = inst_22467);

(statearr_22496[(12)] = inst_22478);

return statearr_22496;
})();
var statearr_22497_22511 = state_22487__$1;
(statearr_22497_22511[(2)] = null);

(statearr_22497_22511[(1)] = (2));


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
});})(c__19161__auto___22505,out))
;
return ((function (switch__19049__auto__,c__19161__auto___22505,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____0 = (function (){
var statearr_22501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22501[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__);

(statearr_22501[(1)] = (1));

return statearr_22501;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____1 = (function (state_22487){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_22487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e22502){if((e22502 instanceof Object)){
var ex__19053__auto__ = e22502;
var statearr_22503_22512 = state_22487;
(statearr_22503_22512[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22513 = state_22487;
state_22487 = G__22513;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___22505,out))
})();
var state__19163__auto__ = (function (){var statearr_22504 = f__19162__auto__.call(null);
(statearr_22504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___22505);

return statearr_22504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___22505,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22514,opts){
var map__22518 = p__22514;
var map__22518__$1 = ((((!((map__22518 == null)))?((((map__22518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22518):map__22518);
var eval_body__$1 = cljs.core.get.call(null,map__22518__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16828__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16828__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16828__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22520){var e = e22520;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22521_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22521_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22526){
var vec__22527 = p__22526;
var k = cljs.core.nth.call(null,vec__22527,(0),null);
var v = cljs.core.nth.call(null,vec__22527,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22528){
var vec__22529 = p__22528;
var k = cljs.core.nth.call(null,vec__22529,(0),null);
var v = cljs.core.nth.call(null,vec__22529,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22533,p__22534){
var map__22781 = p__22533;
var map__22781__$1 = ((((!((map__22781 == null)))?((((map__22781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22781):map__22781);
var opts = map__22781__$1;
var before_jsload = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22782 = p__22534;
var map__22782__$1 = ((((!((map__22782 == null)))?((((map__22782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22782):map__22782);
var msg = map__22782__$1;
var files = cljs.core.get.call(null,map__22782__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22782__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22782__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22935){
var state_val_22936 = (state_22935[(1)]);
if((state_val_22936 === (7))){
var inst_22799 = (state_22935[(7)]);
var inst_22797 = (state_22935[(8)]);
var inst_22798 = (state_22935[(9)]);
var inst_22796 = (state_22935[(10)]);
var inst_22804 = cljs.core._nth.call(null,inst_22797,inst_22799);
var inst_22805 = figwheel.client.file_reloading.eval_body.call(null,inst_22804,opts);
var inst_22806 = (inst_22799 + (1));
var tmp22937 = inst_22797;
var tmp22938 = inst_22798;
var tmp22939 = inst_22796;
var inst_22796__$1 = tmp22939;
var inst_22797__$1 = tmp22937;
var inst_22798__$1 = tmp22938;
var inst_22799__$1 = inst_22806;
var state_22935__$1 = (function (){var statearr_22940 = state_22935;
(statearr_22940[(11)] = inst_22805);

(statearr_22940[(7)] = inst_22799__$1);

(statearr_22940[(8)] = inst_22797__$1);

(statearr_22940[(9)] = inst_22798__$1);

(statearr_22940[(10)] = inst_22796__$1);

return statearr_22940;
})();
var statearr_22941_23027 = state_22935__$1;
(statearr_22941_23027[(2)] = null);

(statearr_22941_23027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (20))){
var inst_22839 = (state_22935[(12)]);
var inst_22847 = figwheel.client.file_reloading.sort_files.call(null,inst_22839);
var state_22935__$1 = state_22935;
var statearr_22942_23028 = state_22935__$1;
(statearr_22942_23028[(2)] = inst_22847);

(statearr_22942_23028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (27))){
var state_22935__$1 = state_22935;
var statearr_22943_23029 = state_22935__$1;
(statearr_22943_23029[(2)] = null);

(statearr_22943_23029[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (1))){
var inst_22788 = (state_22935[(13)]);
var inst_22785 = before_jsload.call(null,files);
var inst_22786 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22787 = (function (){return ((function (inst_22788,inst_22785,inst_22786,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22530_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22530_SHARP_);
});
;})(inst_22788,inst_22785,inst_22786,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22788__$1 = cljs.core.filter.call(null,inst_22787,files);
var inst_22789 = cljs.core.not_empty.call(null,inst_22788__$1);
var state_22935__$1 = (function (){var statearr_22944 = state_22935;
(statearr_22944[(14)] = inst_22786);

(statearr_22944[(13)] = inst_22788__$1);

(statearr_22944[(15)] = inst_22785);

return statearr_22944;
})();
if(cljs.core.truth_(inst_22789)){
var statearr_22945_23030 = state_22935__$1;
(statearr_22945_23030[(1)] = (2));

} else {
var statearr_22946_23031 = state_22935__$1;
(statearr_22946_23031[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (24))){
var state_22935__$1 = state_22935;
var statearr_22947_23032 = state_22935__$1;
(statearr_22947_23032[(2)] = null);

(statearr_22947_23032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (39))){
var inst_22889 = (state_22935[(16)]);
var state_22935__$1 = state_22935;
var statearr_22948_23033 = state_22935__$1;
(statearr_22948_23033[(2)] = inst_22889);

(statearr_22948_23033[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (46))){
var inst_22930 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22949_23034 = state_22935__$1;
(statearr_22949_23034[(2)] = inst_22930);

(statearr_22949_23034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (4))){
var inst_22833 = (state_22935[(2)]);
var inst_22834 = cljs.core.List.EMPTY;
var inst_22835 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22834);
var inst_22836 = (function (){return ((function (inst_22833,inst_22834,inst_22835,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22531_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22531_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22531_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_22833,inst_22834,inst_22835,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22837 = cljs.core.filter.call(null,inst_22836,files);
var inst_22838 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22839 = cljs.core.concat.call(null,inst_22837,inst_22838);
var state_22935__$1 = (function (){var statearr_22950 = state_22935;
(statearr_22950[(17)] = inst_22835);

(statearr_22950[(12)] = inst_22839);

(statearr_22950[(18)] = inst_22833);

return statearr_22950;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22951_23035 = state_22935__$1;
(statearr_22951_23035[(1)] = (16));

} else {
var statearr_22952_23036 = state_22935__$1;
(statearr_22952_23036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (15))){
var inst_22823 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22953_23037 = state_22935__$1;
(statearr_22953_23037[(2)] = inst_22823);

(statearr_22953_23037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (21))){
var inst_22849 = (state_22935[(19)]);
var inst_22849__$1 = (state_22935[(2)]);
var inst_22850 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22849__$1);
var state_22935__$1 = (function (){var statearr_22954 = state_22935;
(statearr_22954[(19)] = inst_22849__$1);

return statearr_22954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(22),inst_22850);
} else {
if((state_val_22936 === (31))){
var inst_22933 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22935__$1,inst_22933);
} else {
if((state_val_22936 === (32))){
var inst_22889 = (state_22935[(16)]);
var inst_22894 = inst_22889.cljs$lang$protocol_mask$partition0$;
var inst_22895 = (inst_22894 & (64));
var inst_22896 = inst_22889.cljs$core$ISeq$;
var inst_22897 = (inst_22895) || (inst_22896);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22897)){
var statearr_22955_23038 = state_22935__$1;
(statearr_22955_23038[(1)] = (35));

} else {
var statearr_22956_23039 = state_22935__$1;
(statearr_22956_23039[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (40))){
var inst_22910 = (state_22935[(20)]);
var inst_22909 = (state_22935[(2)]);
var inst_22910__$1 = cljs.core.get.call(null,inst_22909,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22911 = cljs.core.get.call(null,inst_22909,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22912 = cljs.core.not_empty.call(null,inst_22910__$1);
var state_22935__$1 = (function (){var statearr_22957 = state_22935;
(statearr_22957[(20)] = inst_22910__$1);

(statearr_22957[(21)] = inst_22911);

return statearr_22957;
})();
if(cljs.core.truth_(inst_22912)){
var statearr_22958_23040 = state_22935__$1;
(statearr_22958_23040[(1)] = (41));

} else {
var statearr_22959_23041 = state_22935__$1;
(statearr_22959_23041[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (33))){
var state_22935__$1 = state_22935;
var statearr_22960_23042 = state_22935__$1;
(statearr_22960_23042[(2)] = false);

(statearr_22960_23042[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (13))){
var inst_22809 = (state_22935[(22)]);
var inst_22813 = cljs.core.chunk_first.call(null,inst_22809);
var inst_22814 = cljs.core.chunk_rest.call(null,inst_22809);
var inst_22815 = cljs.core.count.call(null,inst_22813);
var inst_22796 = inst_22814;
var inst_22797 = inst_22813;
var inst_22798 = inst_22815;
var inst_22799 = (0);
var state_22935__$1 = (function (){var statearr_22961 = state_22935;
(statearr_22961[(7)] = inst_22799);

(statearr_22961[(8)] = inst_22797);

(statearr_22961[(9)] = inst_22798);

(statearr_22961[(10)] = inst_22796);

return statearr_22961;
})();
var statearr_22962_23043 = state_22935__$1;
(statearr_22962_23043[(2)] = null);

(statearr_22962_23043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (22))){
var inst_22853 = (state_22935[(23)]);
var inst_22857 = (state_22935[(24)]);
var inst_22852 = (state_22935[(25)]);
var inst_22849 = (state_22935[(19)]);
var inst_22852__$1 = (state_22935[(2)]);
var inst_22853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22852__$1);
var inst_22854 = (function (){var all_files = inst_22849;
var res_SINGLEQUOTE_ = inst_22852__$1;
var res = inst_22853__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22853,inst_22857,inst_22852,inst_22849,inst_22852__$1,inst_22853__$1,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22532_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22532_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22853,inst_22857,inst_22852,inst_22849,inst_22852__$1,inst_22853__$1,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22855 = cljs.core.filter.call(null,inst_22854,inst_22852__$1);
var inst_22856 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22856);
var inst_22858 = cljs.core.not_empty.call(null,inst_22857__$1);
var state_22935__$1 = (function (){var statearr_22963 = state_22935;
(statearr_22963[(23)] = inst_22853__$1);

(statearr_22963[(24)] = inst_22857__$1);

(statearr_22963[(25)] = inst_22852__$1);

(statearr_22963[(26)] = inst_22855);

return statearr_22963;
})();
if(cljs.core.truth_(inst_22858)){
var statearr_22964_23044 = state_22935__$1;
(statearr_22964_23044[(1)] = (23));

} else {
var statearr_22965_23045 = state_22935__$1;
(statearr_22965_23045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (36))){
var state_22935__$1 = state_22935;
var statearr_22966_23046 = state_22935__$1;
(statearr_22966_23046[(2)] = false);

(statearr_22966_23046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (41))){
var inst_22910 = (state_22935[(20)]);
var inst_22914 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22915 = cljs.core.map.call(null,inst_22914,inst_22910);
var inst_22916 = cljs.core.pr_str.call(null,inst_22915);
var inst_22917 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22916)].join('');
var inst_22918 = figwheel.client.utils.log.call(null,inst_22917);
var state_22935__$1 = state_22935;
var statearr_22967_23047 = state_22935__$1;
(statearr_22967_23047[(2)] = inst_22918);

(statearr_22967_23047[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (43))){
var inst_22911 = (state_22935[(21)]);
var inst_22921 = (state_22935[(2)]);
var inst_22922 = cljs.core.not_empty.call(null,inst_22911);
var state_22935__$1 = (function (){var statearr_22968 = state_22935;
(statearr_22968[(27)] = inst_22921);

return statearr_22968;
})();
if(cljs.core.truth_(inst_22922)){
var statearr_22969_23048 = state_22935__$1;
(statearr_22969_23048[(1)] = (44));

} else {
var statearr_22970_23049 = state_22935__$1;
(statearr_22970_23049[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (29))){
var inst_22853 = (state_22935[(23)]);
var inst_22889 = (state_22935[(16)]);
var inst_22857 = (state_22935[(24)]);
var inst_22852 = (state_22935[(25)]);
var inst_22855 = (state_22935[(26)]);
var inst_22849 = (state_22935[(19)]);
var inst_22885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22888 = (function (){var all_files = inst_22849;
var res_SINGLEQUOTE_ = inst_22852;
var res = inst_22853;
var files_not_loaded = inst_22855;
var dependencies_that_loaded = inst_22857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22889,inst_22857,inst_22852,inst_22855,inst_22849,inst_22885,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22887){
var map__22971 = p__22887;
var map__22971__$1 = ((((!((map__22971 == null)))?((((map__22971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);
var namespace = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22889,inst_22857,inst_22852,inst_22855,inst_22849,inst_22885,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22889__$1 = cljs.core.group_by.call(null,inst_22888,inst_22855);
var inst_22891 = (inst_22889__$1 == null);
var inst_22892 = cljs.core.not.call(null,inst_22891);
var state_22935__$1 = (function (){var statearr_22973 = state_22935;
(statearr_22973[(28)] = inst_22885);

(statearr_22973[(16)] = inst_22889__$1);

return statearr_22973;
})();
if(inst_22892){
var statearr_22974_23050 = state_22935__$1;
(statearr_22974_23050[(1)] = (32));

} else {
var statearr_22975_23051 = state_22935__$1;
(statearr_22975_23051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (44))){
var inst_22911 = (state_22935[(21)]);
var inst_22924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22911);
var inst_22925 = cljs.core.pr_str.call(null,inst_22924);
var inst_22926 = [cljs.core.str("not required: "),cljs.core.str(inst_22925)].join('');
var inst_22927 = figwheel.client.utils.log.call(null,inst_22926);
var state_22935__$1 = state_22935;
var statearr_22976_23052 = state_22935__$1;
(statearr_22976_23052[(2)] = inst_22927);

(statearr_22976_23052[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (6))){
var inst_22830 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22977_23053 = state_22935__$1;
(statearr_22977_23053[(2)] = inst_22830);

(statearr_22977_23053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (28))){
var inst_22855 = (state_22935[(26)]);
var inst_22882 = (state_22935[(2)]);
var inst_22883 = cljs.core.not_empty.call(null,inst_22855);
var state_22935__$1 = (function (){var statearr_22978 = state_22935;
(statearr_22978[(29)] = inst_22882);

return statearr_22978;
})();
if(cljs.core.truth_(inst_22883)){
var statearr_22979_23054 = state_22935__$1;
(statearr_22979_23054[(1)] = (29));

} else {
var statearr_22980_23055 = state_22935__$1;
(statearr_22980_23055[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (25))){
var inst_22853 = (state_22935[(23)]);
var inst_22869 = (state_22935[(2)]);
var inst_22870 = cljs.core.not_empty.call(null,inst_22853);
var state_22935__$1 = (function (){var statearr_22981 = state_22935;
(statearr_22981[(30)] = inst_22869);

return statearr_22981;
})();
if(cljs.core.truth_(inst_22870)){
var statearr_22982_23056 = state_22935__$1;
(statearr_22982_23056[(1)] = (26));

} else {
var statearr_22983_23057 = state_22935__$1;
(statearr_22983_23057[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (34))){
var inst_22904 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22904)){
var statearr_22984_23058 = state_22935__$1;
(statearr_22984_23058[(1)] = (38));

} else {
var statearr_22985_23059 = state_22935__$1;
(statearr_22985_23059[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (17))){
var state_22935__$1 = state_22935;
var statearr_22986_23060 = state_22935__$1;
(statearr_22986_23060[(2)] = recompile_dependents);

(statearr_22986_23060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (3))){
var state_22935__$1 = state_22935;
var statearr_22987_23061 = state_22935__$1;
(statearr_22987_23061[(2)] = null);

(statearr_22987_23061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (12))){
var inst_22826 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22988_23062 = state_22935__$1;
(statearr_22988_23062[(2)] = inst_22826);

(statearr_22988_23062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (2))){
var inst_22788 = (state_22935[(13)]);
var inst_22795 = cljs.core.seq.call(null,inst_22788);
var inst_22796 = inst_22795;
var inst_22797 = null;
var inst_22798 = (0);
var inst_22799 = (0);
var state_22935__$1 = (function (){var statearr_22989 = state_22935;
(statearr_22989[(7)] = inst_22799);

(statearr_22989[(8)] = inst_22797);

(statearr_22989[(9)] = inst_22798);

(statearr_22989[(10)] = inst_22796);

return statearr_22989;
})();
var statearr_22990_23063 = state_22935__$1;
(statearr_22990_23063[(2)] = null);

(statearr_22990_23063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (23))){
var inst_22853 = (state_22935[(23)]);
var inst_22857 = (state_22935[(24)]);
var inst_22852 = (state_22935[(25)]);
var inst_22855 = (state_22935[(26)]);
var inst_22849 = (state_22935[(19)]);
var inst_22860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22862 = (function (){var all_files = inst_22849;
var res_SINGLEQUOTE_ = inst_22852;
var res = inst_22853;
var files_not_loaded = inst_22855;
var dependencies_that_loaded = inst_22857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22860,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22861){
var map__22991 = p__22861;
var map__22991__$1 = ((((!((map__22991 == null)))?((((map__22991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22991):map__22991);
var request_url = cljs.core.get.call(null,map__22991__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22860,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22863 = cljs.core.reverse.call(null,inst_22857);
var inst_22864 = cljs.core.map.call(null,inst_22862,inst_22863);
var inst_22865 = cljs.core.pr_str.call(null,inst_22864);
var inst_22866 = figwheel.client.utils.log.call(null,inst_22865);
var state_22935__$1 = (function (){var statearr_22993 = state_22935;
(statearr_22993[(31)] = inst_22860);

return statearr_22993;
})();
var statearr_22994_23064 = state_22935__$1;
(statearr_22994_23064[(2)] = inst_22866);

(statearr_22994_23064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (35))){
var state_22935__$1 = state_22935;
var statearr_22995_23065 = state_22935__$1;
(statearr_22995_23065[(2)] = true);

(statearr_22995_23065[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (19))){
var inst_22839 = (state_22935[(12)]);
var inst_22845 = figwheel.client.file_reloading.expand_files.call(null,inst_22839);
var state_22935__$1 = state_22935;
var statearr_22996_23066 = state_22935__$1;
(statearr_22996_23066[(2)] = inst_22845);

(statearr_22996_23066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (11))){
var state_22935__$1 = state_22935;
var statearr_22997_23067 = state_22935__$1;
(statearr_22997_23067[(2)] = null);

(statearr_22997_23067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (9))){
var inst_22828 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22998_23068 = state_22935__$1;
(statearr_22998_23068[(2)] = inst_22828);

(statearr_22998_23068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (5))){
var inst_22799 = (state_22935[(7)]);
var inst_22798 = (state_22935[(9)]);
var inst_22801 = (inst_22799 < inst_22798);
var inst_22802 = inst_22801;
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22802)){
var statearr_22999_23069 = state_22935__$1;
(statearr_22999_23069[(1)] = (7));

} else {
var statearr_23000_23070 = state_22935__$1;
(statearr_23000_23070[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (14))){
var inst_22809 = (state_22935[(22)]);
var inst_22818 = cljs.core.first.call(null,inst_22809);
var inst_22819 = figwheel.client.file_reloading.eval_body.call(null,inst_22818,opts);
var inst_22820 = cljs.core.next.call(null,inst_22809);
var inst_22796 = inst_22820;
var inst_22797 = null;
var inst_22798 = (0);
var inst_22799 = (0);
var state_22935__$1 = (function (){var statearr_23001 = state_22935;
(statearr_23001[(7)] = inst_22799);

(statearr_23001[(32)] = inst_22819);

(statearr_23001[(8)] = inst_22797);

(statearr_23001[(9)] = inst_22798);

(statearr_23001[(10)] = inst_22796);

return statearr_23001;
})();
var statearr_23002_23071 = state_22935__$1;
(statearr_23002_23071[(2)] = null);

(statearr_23002_23071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (45))){
var state_22935__$1 = state_22935;
var statearr_23003_23072 = state_22935__$1;
(statearr_23003_23072[(2)] = null);

(statearr_23003_23072[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (26))){
var inst_22853 = (state_22935[(23)]);
var inst_22857 = (state_22935[(24)]);
var inst_22852 = (state_22935[(25)]);
var inst_22855 = (state_22935[(26)]);
var inst_22849 = (state_22935[(19)]);
var inst_22872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22874 = (function (){var all_files = inst_22849;
var res_SINGLEQUOTE_ = inst_22852;
var res = inst_22853;
var files_not_loaded = inst_22855;
var dependencies_that_loaded = inst_22857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22872,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22873){
var map__23004 = p__22873;
var map__23004__$1 = ((((!((map__23004 == null)))?((((map__23004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23004):map__23004);
var namespace = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22872,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22875 = cljs.core.map.call(null,inst_22874,inst_22853);
var inst_22876 = cljs.core.pr_str.call(null,inst_22875);
var inst_22877 = figwheel.client.utils.log.call(null,inst_22876);
var inst_22878 = (function (){var all_files = inst_22849;
var res_SINGLEQUOTE_ = inst_22852;
var res = inst_22853;
var files_not_loaded = inst_22855;
var dependencies_that_loaded = inst_22857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22872,inst_22874,inst_22875,inst_22876,inst_22877,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22853,inst_22857,inst_22852,inst_22855,inst_22849,inst_22872,inst_22874,inst_22875,inst_22876,inst_22877,state_val_22936,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22879 = setTimeout(inst_22878,(10));
var state_22935__$1 = (function (){var statearr_23006 = state_22935;
(statearr_23006[(33)] = inst_22877);

(statearr_23006[(34)] = inst_22872);

return statearr_23006;
})();
var statearr_23007_23073 = state_22935__$1;
(statearr_23007_23073[(2)] = inst_22879);

(statearr_23007_23073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (16))){
var state_22935__$1 = state_22935;
var statearr_23008_23074 = state_22935__$1;
(statearr_23008_23074[(2)] = reload_dependents);

(statearr_23008_23074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (38))){
var inst_22889 = (state_22935[(16)]);
var inst_22906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22889);
var state_22935__$1 = state_22935;
var statearr_23009_23075 = state_22935__$1;
(statearr_23009_23075[(2)] = inst_22906);

(statearr_23009_23075[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (30))){
var state_22935__$1 = state_22935;
var statearr_23010_23076 = state_22935__$1;
(statearr_23010_23076[(2)] = null);

(statearr_23010_23076[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (10))){
var inst_22809 = (state_22935[(22)]);
var inst_22811 = cljs.core.chunked_seq_QMARK_.call(null,inst_22809);
var state_22935__$1 = state_22935;
if(inst_22811){
var statearr_23011_23077 = state_22935__$1;
(statearr_23011_23077[(1)] = (13));

} else {
var statearr_23012_23078 = state_22935__$1;
(statearr_23012_23078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (18))){
var inst_22843 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22843)){
var statearr_23013_23079 = state_22935__$1;
(statearr_23013_23079[(1)] = (19));

} else {
var statearr_23014_23080 = state_22935__$1;
(statearr_23014_23080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (42))){
var state_22935__$1 = state_22935;
var statearr_23015_23081 = state_22935__$1;
(statearr_23015_23081[(2)] = null);

(statearr_23015_23081[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (37))){
var inst_22901 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_23016_23082 = state_22935__$1;
(statearr_23016_23082[(2)] = inst_22901);

(statearr_23016_23082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (8))){
var inst_22809 = (state_22935[(22)]);
var inst_22796 = (state_22935[(10)]);
var inst_22809__$1 = cljs.core.seq.call(null,inst_22796);
var state_22935__$1 = (function (){var statearr_23017 = state_22935;
(statearr_23017[(22)] = inst_22809__$1);

return statearr_23017;
})();
if(inst_22809__$1){
var statearr_23018_23083 = state_22935__$1;
(statearr_23018_23083[(1)] = (10));

} else {
var statearr_23019_23084 = state_22935__$1;
(statearr_23019_23084[(1)] = (11));

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
}
});})(c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19049__auto__,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____1 = (function (state_22935){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_22935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__19053__auto__ = e23024;
var statearr_23025_23085 = state_22935;
(statearr_23025_23085[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23086 = state_22935;
state_22935 = G__23086;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__ = function(state_22935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____1.call(this,state_22935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19163__auto__ = (function (){var statearr_23026 = f__19162__auto__.call(null);
(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__,map__22781,map__22781__$1,opts,before_jsload,on_jsload,reload_dependents,map__22782,map__22782__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19161__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23089,link){
var map__23092 = p__23089;
var map__23092__$1 = ((((!((map__23092 == null)))?((((map__23092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23092):map__23092);
var file = cljs.core.get.call(null,map__23092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23092,map__23092__$1,file){
return (function (p1__23087_SHARP_,p2__23088_SHARP_){
if(cljs.core._EQ_.call(null,p1__23087_SHARP_,p2__23088_SHARP_)){
return p1__23087_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23092,map__23092__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23098){
var map__23099 = p__23098;
var map__23099__$1 = ((((!((map__23099 == null)))?((((map__23099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23099):map__23099);
var match_length = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23094_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23094_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23101 = [];
var len__17898__auto___23104 = arguments.length;
var i__17899__auto___23105 = (0);
while(true){
if((i__17899__auto___23105 < len__17898__auto___23104)){
args23101.push((arguments[i__17899__auto___23105]));

var G__23106 = (i__17899__auto___23105 + (1));
i__17899__auto___23105 = G__23106;
continue;
} else {
}
break;
}

var G__23103 = args23101.length;
switch (G__23103) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23101.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23108_SHARP_,p2__23109_SHARP_){
return cljs.core.assoc.call(null,p1__23108_SHARP_,cljs.core.get.call(null,p2__23109_SHARP_,key),p2__23109_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23110){
var map__23113 = p__23110;
var map__23113__$1 = ((((!((map__23113 == null)))?((((map__23113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23113):map__23113);
var f_data = map__23113__$1;
var file = cljs.core.get.call(null,map__23113__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23115,files_msg){
var map__23122 = p__23115;
var map__23122__$1 = ((((!((map__23122 == null)))?((((map__23122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23122):map__23122);
var opts = map__23122__$1;
var on_cssload = cljs.core.get.call(null,map__23122__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23124_23128 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23125_23129 = null;
var count__23126_23130 = (0);
var i__23127_23131 = (0);
while(true){
if((i__23127_23131 < count__23126_23130)){
var f_23132 = cljs.core._nth.call(null,chunk__23125_23129,i__23127_23131);
figwheel.client.file_reloading.reload_css_file.call(null,f_23132);

var G__23133 = seq__23124_23128;
var G__23134 = chunk__23125_23129;
var G__23135 = count__23126_23130;
var G__23136 = (i__23127_23131 + (1));
seq__23124_23128 = G__23133;
chunk__23125_23129 = G__23134;
count__23126_23130 = G__23135;
i__23127_23131 = G__23136;
continue;
} else {
var temp__4425__auto___23137 = cljs.core.seq.call(null,seq__23124_23128);
if(temp__4425__auto___23137){
var seq__23124_23138__$1 = temp__4425__auto___23137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23124_23138__$1)){
var c__17643__auto___23139 = cljs.core.chunk_first.call(null,seq__23124_23138__$1);
var G__23140 = cljs.core.chunk_rest.call(null,seq__23124_23138__$1);
var G__23141 = c__17643__auto___23139;
var G__23142 = cljs.core.count.call(null,c__17643__auto___23139);
var G__23143 = (0);
seq__23124_23128 = G__23140;
chunk__23125_23129 = G__23141;
count__23126_23130 = G__23142;
i__23127_23131 = G__23143;
continue;
} else {
var f_23144 = cljs.core.first.call(null,seq__23124_23138__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23144);

var G__23145 = cljs.core.next.call(null,seq__23124_23138__$1);
var G__23146 = null;
var G__23147 = (0);
var G__23148 = (0);
seq__23124_23128 = G__23145;
chunk__23125_23129 = G__23146;
count__23126_23130 = G__23147;
i__23127_23131 = G__23148;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23122,map__23122__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23122,map__23122__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map