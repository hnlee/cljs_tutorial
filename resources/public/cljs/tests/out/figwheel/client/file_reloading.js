// Compiled by ClojureScript 1.9.227 {}
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
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24751__auto__){
return or__24751__auto__;
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
var or__24751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29900_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29900_SHARP_));
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
var seq__29905 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29906 = null;
var count__29907 = (0);
var i__29908 = (0);
while(true){
if((i__29908 < count__29907)){
var n = cljs.core._nth.call(null,chunk__29906,i__29908);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29909 = seq__29905;
var G__29910 = chunk__29906;
var G__29911 = count__29907;
var G__29912 = (i__29908 + (1));
seq__29905 = G__29909;
chunk__29906 = G__29910;
count__29907 = G__29911;
i__29908 = G__29912;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29905);
if(temp__4657__auto__){
var seq__29905__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29905__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__29905__$1);
var G__29913 = cljs.core.chunk_rest.call(null,seq__29905__$1);
var G__29914 = c__25562__auto__;
var G__29915 = cljs.core.count.call(null,c__25562__auto__);
var G__29916 = (0);
seq__29905 = G__29913;
chunk__29906 = G__29914;
count__29907 = G__29915;
i__29908 = G__29916;
continue;
} else {
var n = cljs.core.first.call(null,seq__29905__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29917 = cljs.core.next.call(null,seq__29905__$1);
var G__29918 = null;
var G__29919 = (0);
var G__29920 = (0);
seq__29905 = G__29917;
chunk__29906 = G__29918;
count__29907 = G__29919;
i__29908 = G__29920;
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

var seq__29971_29982 = cljs.core.seq.call(null,deps);
var chunk__29972_29983 = null;
var count__29973_29984 = (0);
var i__29974_29985 = (0);
while(true){
if((i__29974_29985 < count__29973_29984)){
var dep_29986 = cljs.core._nth.call(null,chunk__29972_29983,i__29974_29985);
topo_sort_helper_STAR_.call(null,dep_29986,(depth + (1)),state);

var G__29987 = seq__29971_29982;
var G__29988 = chunk__29972_29983;
var G__29989 = count__29973_29984;
var G__29990 = (i__29974_29985 + (1));
seq__29971_29982 = G__29987;
chunk__29972_29983 = G__29988;
count__29973_29984 = G__29989;
i__29974_29985 = G__29990;
continue;
} else {
var temp__4657__auto___29991 = cljs.core.seq.call(null,seq__29971_29982);
if(temp__4657__auto___29991){
var seq__29971_29992__$1 = temp__4657__auto___29991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_29992__$1)){
var c__25562__auto___29993 = cljs.core.chunk_first.call(null,seq__29971_29992__$1);
var G__29994 = cljs.core.chunk_rest.call(null,seq__29971_29992__$1);
var G__29995 = c__25562__auto___29993;
var G__29996 = cljs.core.count.call(null,c__25562__auto___29993);
var G__29997 = (0);
seq__29971_29982 = G__29994;
chunk__29972_29983 = G__29995;
count__29973_29984 = G__29996;
i__29974_29985 = G__29997;
continue;
} else {
var dep_29998 = cljs.core.first.call(null,seq__29971_29992__$1);
topo_sort_helper_STAR_.call(null,dep_29998,(depth + (1)),state);

var G__29999 = cljs.core.next.call(null,seq__29971_29992__$1);
var G__30000 = null;
var G__30001 = (0);
var G__30002 = (0);
seq__29971_29982 = G__29999;
chunk__29972_29983 = G__30000;
count__29973_29984 = G__30001;
i__29974_29985 = G__30002;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29975){
var vec__29979 = p__29975;
var seq__29980 = cljs.core.seq.call(null,vec__29979);
var first__29981 = cljs.core.first.call(null,seq__29980);
var seq__29980__$1 = cljs.core.next.call(null,seq__29980);
var x = first__29981;
var xs = seq__29980__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29979,seq__29980,first__29981,seq__29980__$1,x,xs,get_deps__$1){
return (function (p1__29921_SHARP_){
return clojure.set.difference.call(null,p1__29921_SHARP_,x);
});})(vec__29979,seq__29980,first__29981,seq__29980__$1,x,xs,get_deps__$1))
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
var seq__30015 = cljs.core.seq.call(null,provides);
var chunk__30016 = null;
var count__30017 = (0);
var i__30018 = (0);
while(true){
if((i__30018 < count__30017)){
var prov = cljs.core._nth.call(null,chunk__30016,i__30018);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30019_30027 = cljs.core.seq.call(null,requires);
var chunk__30020_30028 = null;
var count__30021_30029 = (0);
var i__30022_30030 = (0);
while(true){
if((i__30022_30030 < count__30021_30029)){
var req_30031 = cljs.core._nth.call(null,chunk__30020_30028,i__30022_30030);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30031,prov);

var G__30032 = seq__30019_30027;
var G__30033 = chunk__30020_30028;
var G__30034 = count__30021_30029;
var G__30035 = (i__30022_30030 + (1));
seq__30019_30027 = G__30032;
chunk__30020_30028 = G__30033;
count__30021_30029 = G__30034;
i__30022_30030 = G__30035;
continue;
} else {
var temp__4657__auto___30036 = cljs.core.seq.call(null,seq__30019_30027);
if(temp__4657__auto___30036){
var seq__30019_30037__$1 = temp__4657__auto___30036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30019_30037__$1)){
var c__25562__auto___30038 = cljs.core.chunk_first.call(null,seq__30019_30037__$1);
var G__30039 = cljs.core.chunk_rest.call(null,seq__30019_30037__$1);
var G__30040 = c__25562__auto___30038;
var G__30041 = cljs.core.count.call(null,c__25562__auto___30038);
var G__30042 = (0);
seq__30019_30027 = G__30039;
chunk__30020_30028 = G__30040;
count__30021_30029 = G__30041;
i__30022_30030 = G__30042;
continue;
} else {
var req_30043 = cljs.core.first.call(null,seq__30019_30037__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30043,prov);

var G__30044 = cljs.core.next.call(null,seq__30019_30037__$1);
var G__30045 = null;
var G__30046 = (0);
var G__30047 = (0);
seq__30019_30027 = G__30044;
chunk__30020_30028 = G__30045;
count__30021_30029 = G__30046;
i__30022_30030 = G__30047;
continue;
}
} else {
}
}
break;
}

var G__30048 = seq__30015;
var G__30049 = chunk__30016;
var G__30050 = count__30017;
var G__30051 = (i__30018 + (1));
seq__30015 = G__30048;
chunk__30016 = G__30049;
count__30017 = G__30050;
i__30018 = G__30051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30015);
if(temp__4657__auto__){
var seq__30015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30015__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__30015__$1);
var G__30052 = cljs.core.chunk_rest.call(null,seq__30015__$1);
var G__30053 = c__25562__auto__;
var G__30054 = cljs.core.count.call(null,c__25562__auto__);
var G__30055 = (0);
seq__30015 = G__30052;
chunk__30016 = G__30053;
count__30017 = G__30054;
i__30018 = G__30055;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30015__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30023_30056 = cljs.core.seq.call(null,requires);
var chunk__30024_30057 = null;
var count__30025_30058 = (0);
var i__30026_30059 = (0);
while(true){
if((i__30026_30059 < count__30025_30058)){
var req_30060 = cljs.core._nth.call(null,chunk__30024_30057,i__30026_30059);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30060,prov);

var G__30061 = seq__30023_30056;
var G__30062 = chunk__30024_30057;
var G__30063 = count__30025_30058;
var G__30064 = (i__30026_30059 + (1));
seq__30023_30056 = G__30061;
chunk__30024_30057 = G__30062;
count__30025_30058 = G__30063;
i__30026_30059 = G__30064;
continue;
} else {
var temp__4657__auto___30065__$1 = cljs.core.seq.call(null,seq__30023_30056);
if(temp__4657__auto___30065__$1){
var seq__30023_30066__$1 = temp__4657__auto___30065__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30023_30066__$1)){
var c__25562__auto___30067 = cljs.core.chunk_first.call(null,seq__30023_30066__$1);
var G__30068 = cljs.core.chunk_rest.call(null,seq__30023_30066__$1);
var G__30069 = c__25562__auto___30067;
var G__30070 = cljs.core.count.call(null,c__25562__auto___30067);
var G__30071 = (0);
seq__30023_30056 = G__30068;
chunk__30024_30057 = G__30069;
count__30025_30058 = G__30070;
i__30026_30059 = G__30071;
continue;
} else {
var req_30072 = cljs.core.first.call(null,seq__30023_30066__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30072,prov);

var G__30073 = cljs.core.next.call(null,seq__30023_30066__$1);
var G__30074 = null;
var G__30075 = (0);
var G__30076 = (0);
seq__30023_30056 = G__30073;
chunk__30024_30057 = G__30074;
count__30025_30058 = G__30075;
i__30026_30059 = G__30076;
continue;
}
} else {
}
}
break;
}

var G__30077 = cljs.core.next.call(null,seq__30015__$1);
var G__30078 = null;
var G__30079 = (0);
var G__30080 = (0);
seq__30015 = G__30077;
chunk__30016 = G__30078;
count__30017 = G__30079;
i__30018 = G__30080;
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
var seq__30085_30089 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30086_30090 = null;
var count__30087_30091 = (0);
var i__30088_30092 = (0);
while(true){
if((i__30088_30092 < count__30087_30091)){
var ns_30093 = cljs.core._nth.call(null,chunk__30086_30090,i__30088_30092);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30093);

var G__30094 = seq__30085_30089;
var G__30095 = chunk__30086_30090;
var G__30096 = count__30087_30091;
var G__30097 = (i__30088_30092 + (1));
seq__30085_30089 = G__30094;
chunk__30086_30090 = G__30095;
count__30087_30091 = G__30096;
i__30088_30092 = G__30097;
continue;
} else {
var temp__4657__auto___30098 = cljs.core.seq.call(null,seq__30085_30089);
if(temp__4657__auto___30098){
var seq__30085_30099__$1 = temp__4657__auto___30098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30085_30099__$1)){
var c__25562__auto___30100 = cljs.core.chunk_first.call(null,seq__30085_30099__$1);
var G__30101 = cljs.core.chunk_rest.call(null,seq__30085_30099__$1);
var G__30102 = c__25562__auto___30100;
var G__30103 = cljs.core.count.call(null,c__25562__auto___30100);
var G__30104 = (0);
seq__30085_30089 = G__30101;
chunk__30086_30090 = G__30102;
count__30087_30091 = G__30103;
i__30088_30092 = G__30104;
continue;
} else {
var ns_30105 = cljs.core.first.call(null,seq__30085_30099__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30105);

var G__30106 = cljs.core.next.call(null,seq__30085_30099__$1);
var G__30107 = null;
var G__30108 = (0);
var G__30109 = (0);
seq__30085_30089 = G__30106;
chunk__30086_30090 = G__30107;
count__30087_30091 = G__30108;
i__30088_30092 = G__30109;
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
goog.require_figwheel_backup_ = (function (){var or__24751__auto__ = goog.require__;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var G__30110__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30111__i = 0, G__30111__a = new Array(arguments.length -  0);
while (G__30111__i < G__30111__a.length) {G__30111__a[G__30111__i] = arguments[G__30111__i + 0]; ++G__30111__i;}
  args = new cljs.core.IndexedSeq(G__30111__a,0);
} 
return G__30110__delegate.call(this,args);};
G__30110.cljs$lang$maxFixedArity = 0;
G__30110.cljs$lang$applyTo = (function (arglist__30112){
var args = cljs.core.seq(arglist__30112);
return G__30110__delegate(args);
});
G__30110.cljs$core$IFn$_invoke$arity$variadic = G__30110__delegate;
return G__30110;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30114 = cljs.core._EQ_;
var expr__30115 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30114.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30115))){
var path_parts = ((function (pred__30114,expr__30115){
return (function (p1__30113_SHARP_){
return clojure.string.split.call(null,p1__30113_SHARP_,/[\/\\]/);
});})(pred__30114,expr__30115))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30114,expr__30115){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30117){if((e30117 instanceof Error)){
var e = e30117;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30117;

}
}})());
});
;})(path_parts,sep,root,pred__30114,expr__30115))
} else {
if(cljs.core.truth_(pred__30114.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30115))){
return ((function (pred__30114,expr__30115){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30114,expr__30115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30114,expr__30115))
);

return deferred.addErrback(((function (deferred,pred__30114,expr__30115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30114,expr__30115))
);
});
;})(pred__30114,expr__30115))
} else {
return ((function (pred__30114,expr__30115){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30114,expr__30115))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30118,callback){
var map__30121 = p__30118;
var map__30121__$1 = ((((!((map__30121 == null)))?((((map__30121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30121):map__30121);
var file_msg = map__30121__$1;
var request_url = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30121,map__30121__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30121,map__30121__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__){
return (function (state_30145){
var state_val_30146 = (state_30145[(1)]);
if((state_val_30146 === (7))){
var inst_30141 = (state_30145[(2)]);
var state_30145__$1 = state_30145;
var statearr_30147_30167 = state_30145__$1;
(statearr_30147_30167[(2)] = inst_30141);

(statearr_30147_30167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (1))){
var state_30145__$1 = state_30145;
var statearr_30148_30168 = state_30145__$1;
(statearr_30148_30168[(2)] = null);

(statearr_30148_30168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (4))){
var inst_30125 = (state_30145[(7)]);
var inst_30125__$1 = (state_30145[(2)]);
var state_30145__$1 = (function (){var statearr_30149 = state_30145;
(statearr_30149[(7)] = inst_30125__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30125__$1)){
var statearr_30150_30169 = state_30145__$1;
(statearr_30150_30169[(1)] = (5));

} else {
var statearr_30151_30170 = state_30145__$1;
(statearr_30151_30170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (6))){
var state_30145__$1 = state_30145;
var statearr_30152_30171 = state_30145__$1;
(statearr_30152_30171[(2)] = null);

(statearr_30152_30171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (3))){
var inst_30143 = (state_30145[(2)]);
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30145__$1,inst_30143);
} else {
if((state_val_30146 === (2))){
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30145__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30146 === (11))){
var inst_30137 = (state_30145[(2)]);
var state_30145__$1 = (function (){var statearr_30153 = state_30145;
(statearr_30153[(8)] = inst_30137);

return statearr_30153;
})();
var statearr_30154_30172 = state_30145__$1;
(statearr_30154_30172[(2)] = null);

(statearr_30154_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (9))){
var inst_30129 = (state_30145[(9)]);
var inst_30131 = (state_30145[(10)]);
var inst_30133 = inst_30131.call(null,inst_30129);
var state_30145__$1 = state_30145;
var statearr_30155_30173 = state_30145__$1;
(statearr_30155_30173[(2)] = inst_30133);

(statearr_30155_30173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (5))){
var inst_30125 = (state_30145[(7)]);
var inst_30127 = figwheel.client.file_reloading.blocking_load.call(null,inst_30125);
var state_30145__$1 = state_30145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30145__$1,(8),inst_30127);
} else {
if((state_val_30146 === (10))){
var inst_30129 = (state_30145[(9)]);
var inst_30135 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30129);
var state_30145__$1 = state_30145;
var statearr_30156_30174 = state_30145__$1;
(statearr_30156_30174[(2)] = inst_30135);

(statearr_30156_30174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30146 === (8))){
var inst_30131 = (state_30145[(10)]);
var inst_30125 = (state_30145[(7)]);
var inst_30129 = (state_30145[(2)]);
var inst_30130 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30131__$1 = cljs.core.get.call(null,inst_30130,inst_30125);
var state_30145__$1 = (function (){var statearr_30157 = state_30145;
(statearr_30157[(9)] = inst_30129);

(statearr_30157[(10)] = inst_30131__$1);

return statearr_30157;
})();
if(cljs.core.truth_(inst_30131__$1)){
var statearr_30158_30175 = state_30145__$1;
(statearr_30158_30175[(1)] = (9));

} else {
var statearr_30159_30176 = state_30145__$1;
(statearr_30159_30176[(1)] = (10));

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
});})(c__26923__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26812__auto__ = null;
var figwheel$client$file_reloading$state_machine__26812__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = figwheel$client$file_reloading$state_machine__26812__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var figwheel$client$file_reloading$state_machine__26812__auto____1 = (function (state_30145){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_30145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object)){
var ex__26815__auto__ = e30164;
var statearr_30165_30177 = state_30145;
(statearr_30165_30177[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30178 = state_30145;
state_30145 = G__30178;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26812__auto__ = function(state_30145){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26812__auto____1.call(this,state_30145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26812__auto____0;
figwheel$client$file_reloading$state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26812__auto____1;
return figwheel$client$file_reloading$state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__))
})();
var state__26925__auto__ = (function (){var statearr_30166 = f__26924__auto__.call(null);
(statearr_30166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__))
);

return c__26923__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30179,callback){
var map__30182 = p__30179;
var map__30182__$1 = ((((!((map__30182 == null)))?((((map__30182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182):map__30182);
var file_msg = map__30182__$1;
var namespace = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30182,map__30182__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30182,map__30182__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30184){
var map__30187 = p__30184;
var map__30187__$1 = ((((!((map__30187 == null)))?((((map__30187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30187):map__30187);
var file_msg = map__30187__$1;
var namespace = cljs.core.get.call(null,map__30187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24739__auto__){
var or__24751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30189,callback){
var map__30192 = p__30189;
var map__30192__$1 = ((((!((map__30192 == null)))?((((map__30192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30192):map__30192);
var file_msg = map__30192__$1;
var request_url = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26923__auto___30296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___30296,out){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___30296,out){
return (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (1))){
var inst_30252 = cljs.core.seq.call(null,files);
var inst_30253 = cljs.core.first.call(null,inst_30252);
var inst_30254 = cljs.core.next.call(null,inst_30252);
var inst_30255 = files;
var state_30278__$1 = (function (){var statearr_30280 = state_30278;
(statearr_30280[(7)] = inst_30253);

(statearr_30280[(8)] = inst_30255);

(statearr_30280[(9)] = inst_30254);

return statearr_30280;
})();
var statearr_30281_30297 = state_30278__$1;
(statearr_30281_30297[(2)] = null);

(statearr_30281_30297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (2))){
var inst_30255 = (state_30278[(8)]);
var inst_30261 = (state_30278[(10)]);
var inst_30260 = cljs.core.seq.call(null,inst_30255);
var inst_30261__$1 = cljs.core.first.call(null,inst_30260);
var inst_30262 = cljs.core.next.call(null,inst_30260);
var inst_30263 = (inst_30261__$1 == null);
var inst_30264 = cljs.core.not.call(null,inst_30263);
var state_30278__$1 = (function (){var statearr_30282 = state_30278;
(statearr_30282[(11)] = inst_30262);

(statearr_30282[(10)] = inst_30261__$1);

return statearr_30282;
})();
if(inst_30264){
var statearr_30283_30298 = state_30278__$1;
(statearr_30283_30298[(1)] = (4));

} else {
var statearr_30284_30299 = state_30278__$1;
(statearr_30284_30299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var inst_30276 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (4))){
var inst_30261 = (state_30278[(10)]);
var inst_30266 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30261);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(7),inst_30266);
} else {
if((state_val_30279 === (5))){
var inst_30272 = cljs.core.async.close_BANG_.call(null,out);
var state_30278__$1 = state_30278;
var statearr_30285_30300 = state_30278__$1;
(statearr_30285_30300[(2)] = inst_30272);

(statearr_30285_30300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var inst_30274 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30286_30301 = state_30278__$1;
(statearr_30286_30301[(2)] = inst_30274);

(statearr_30286_30301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (7))){
var inst_30262 = (state_30278[(11)]);
var inst_30268 = (state_30278[(2)]);
var inst_30269 = cljs.core.async.put_BANG_.call(null,out,inst_30268);
var inst_30255 = inst_30262;
var state_30278__$1 = (function (){var statearr_30287 = state_30278;
(statearr_30287[(12)] = inst_30269);

(statearr_30287[(8)] = inst_30255);

return statearr_30287;
})();
var statearr_30288_30302 = state_30278__$1;
(statearr_30288_30302[(2)] = null);

(statearr_30288_30302[(1)] = (2));


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
});})(c__26923__auto___30296,out))
;
return ((function (switch__26811__auto__,c__26923__auto___30296,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____0 = (function (){
var statearr_30292 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30292[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__);

(statearr_30292[(1)] = (1));

return statearr_30292;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____1 = (function (state_30278){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_30278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e30293){if((e30293 instanceof Object)){
var ex__26815__auto__ = e30293;
var statearr_30294_30303 = state_30278;
(statearr_30294_30303[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30304 = state_30278;
state_30278 = G__30304;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___30296,out))
})();
var state__26925__auto__ = (function (){var statearr_30295 = f__26924__auto__.call(null);
(statearr_30295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___30296);

return statearr_30295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___30296,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30305,opts){
var map__30309 = p__30305;
var map__30309__$1 = ((((!((map__30309 == null)))?((((map__30309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30309):map__30309);
var eval_body__$1 = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30311){var e = e30311;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30312_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30312_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__30321){
var vec__30322 = p__30321;
var k = cljs.core.nth.call(null,vec__30322,(0),null);
var v = cljs.core.nth.call(null,vec__30322,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30325){
var vec__30326 = p__30325;
var k = cljs.core.nth.call(null,vec__30326,(0),null);
var v = cljs.core.nth.call(null,vec__30326,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30332,p__30333){
var map__30580 = p__30332;
var map__30580__$1 = ((((!((map__30580 == null)))?((((map__30580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30580):map__30580);
var opts = map__30580__$1;
var before_jsload = cljs.core.get.call(null,map__30580__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30580__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30580__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30581 = p__30333;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var msg = map__30581__$1;
var files = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (7))){
var inst_30598 = (state_30734[(7)]);
var inst_30596 = (state_30734[(8)]);
var inst_30597 = (state_30734[(9)]);
var inst_30595 = (state_30734[(10)]);
var inst_30603 = cljs.core._nth.call(null,inst_30596,inst_30598);
var inst_30604 = figwheel.client.file_reloading.eval_body.call(null,inst_30603,opts);
var inst_30605 = (inst_30598 + (1));
var tmp30736 = inst_30596;
var tmp30737 = inst_30597;
var tmp30738 = inst_30595;
var inst_30595__$1 = tmp30738;
var inst_30596__$1 = tmp30736;
var inst_30597__$1 = tmp30737;
var inst_30598__$1 = inst_30605;
var state_30734__$1 = (function (){var statearr_30739 = state_30734;
(statearr_30739[(7)] = inst_30598__$1);

(statearr_30739[(8)] = inst_30596__$1);

(statearr_30739[(9)] = inst_30597__$1);

(statearr_30739[(11)] = inst_30604);

(statearr_30739[(10)] = inst_30595__$1);

return statearr_30739;
})();
var statearr_30740_30826 = state_30734__$1;
(statearr_30740_30826[(2)] = null);

(statearr_30740_30826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (20))){
var inst_30638 = (state_30734[(12)]);
var inst_30646 = figwheel.client.file_reloading.sort_files.call(null,inst_30638);
var state_30734__$1 = state_30734;
var statearr_30741_30827 = state_30734__$1;
(statearr_30741_30827[(2)] = inst_30646);

(statearr_30741_30827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (27))){
var state_30734__$1 = state_30734;
var statearr_30742_30828 = state_30734__$1;
(statearr_30742_30828[(2)] = null);

(statearr_30742_30828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (1))){
var inst_30587 = (state_30734[(13)]);
var inst_30584 = before_jsload.call(null,files);
var inst_30585 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30586 = (function (){return ((function (inst_30587,inst_30584,inst_30585,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30329_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30329_SHARP_);
});
;})(inst_30587,inst_30584,inst_30585,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30587__$1 = cljs.core.filter.call(null,inst_30586,files);
var inst_30588 = cljs.core.not_empty.call(null,inst_30587__$1);
var state_30734__$1 = (function (){var statearr_30743 = state_30734;
(statearr_30743[(13)] = inst_30587__$1);

(statearr_30743[(14)] = inst_30584);

(statearr_30743[(15)] = inst_30585);

return statearr_30743;
})();
if(cljs.core.truth_(inst_30588)){
var statearr_30744_30829 = state_30734__$1;
(statearr_30744_30829[(1)] = (2));

} else {
var statearr_30745_30830 = state_30734__$1;
(statearr_30745_30830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (24))){
var state_30734__$1 = state_30734;
var statearr_30746_30831 = state_30734__$1;
(statearr_30746_30831[(2)] = null);

(statearr_30746_30831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (39))){
var inst_30688 = (state_30734[(16)]);
var state_30734__$1 = state_30734;
var statearr_30747_30832 = state_30734__$1;
(statearr_30747_30832[(2)] = inst_30688);

(statearr_30747_30832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (46))){
var inst_30729 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30748_30833 = state_30734__$1;
(statearr_30748_30833[(2)] = inst_30729);

(statearr_30748_30833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (4))){
var inst_30632 = (state_30734[(2)]);
var inst_30633 = cljs.core.List.EMPTY;
var inst_30634 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30633);
var inst_30635 = (function (){return ((function (inst_30632,inst_30633,inst_30634,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30330_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30330_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30330_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_30632,inst_30633,inst_30634,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30636 = cljs.core.filter.call(null,inst_30635,files);
var inst_30637 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30638 = cljs.core.concat.call(null,inst_30636,inst_30637);
var state_30734__$1 = (function (){var statearr_30749 = state_30734;
(statearr_30749[(17)] = inst_30632);

(statearr_30749[(12)] = inst_30638);

(statearr_30749[(18)] = inst_30634);

return statearr_30749;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30750_30834 = state_30734__$1;
(statearr_30750_30834[(1)] = (16));

} else {
var statearr_30751_30835 = state_30734__$1;
(statearr_30751_30835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (15))){
var inst_30622 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30752_30836 = state_30734__$1;
(statearr_30752_30836[(2)] = inst_30622);

(statearr_30752_30836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (21))){
var inst_30648 = (state_30734[(19)]);
var inst_30648__$1 = (state_30734[(2)]);
var inst_30649 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30648__$1);
var state_30734__$1 = (function (){var statearr_30753 = state_30734;
(statearr_30753[(19)] = inst_30648__$1);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30734__$1,(22),inst_30649);
} else {
if((state_val_30735 === (31))){
var inst_30732 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30734__$1,inst_30732);
} else {
if((state_val_30735 === (32))){
var inst_30688 = (state_30734[(16)]);
var inst_30693 = inst_30688.cljs$lang$protocol_mask$partition0$;
var inst_30694 = (inst_30693 & (64));
var inst_30695 = inst_30688.cljs$core$ISeq$;
var inst_30696 = (inst_30694) || (inst_30695);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30696)){
var statearr_30754_30837 = state_30734__$1;
(statearr_30754_30837[(1)] = (35));

} else {
var statearr_30755_30838 = state_30734__$1;
(statearr_30755_30838[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (40))){
var inst_30709 = (state_30734[(20)]);
var inst_30708 = (state_30734[(2)]);
var inst_30709__$1 = cljs.core.get.call(null,inst_30708,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30710 = cljs.core.get.call(null,inst_30708,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30711 = cljs.core.not_empty.call(null,inst_30709__$1);
var state_30734__$1 = (function (){var statearr_30756 = state_30734;
(statearr_30756[(20)] = inst_30709__$1);

(statearr_30756[(21)] = inst_30710);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30711)){
var statearr_30757_30839 = state_30734__$1;
(statearr_30757_30839[(1)] = (41));

} else {
var statearr_30758_30840 = state_30734__$1;
(statearr_30758_30840[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (33))){
var state_30734__$1 = state_30734;
var statearr_30759_30841 = state_30734__$1;
(statearr_30759_30841[(2)] = false);

(statearr_30759_30841[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (13))){
var inst_30608 = (state_30734[(22)]);
var inst_30612 = cljs.core.chunk_first.call(null,inst_30608);
var inst_30613 = cljs.core.chunk_rest.call(null,inst_30608);
var inst_30614 = cljs.core.count.call(null,inst_30612);
var inst_30595 = inst_30613;
var inst_30596 = inst_30612;
var inst_30597 = inst_30614;
var inst_30598 = (0);
var state_30734__$1 = (function (){var statearr_30760 = state_30734;
(statearr_30760[(7)] = inst_30598);

(statearr_30760[(8)] = inst_30596);

(statearr_30760[(9)] = inst_30597);

(statearr_30760[(10)] = inst_30595);

return statearr_30760;
})();
var statearr_30761_30842 = state_30734__$1;
(statearr_30761_30842[(2)] = null);

(statearr_30761_30842[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (22))){
var inst_30651 = (state_30734[(23)]);
var inst_30652 = (state_30734[(24)]);
var inst_30648 = (state_30734[(19)]);
var inst_30656 = (state_30734[(25)]);
var inst_30651__$1 = (state_30734[(2)]);
var inst_30652__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30651__$1);
var inst_30653 = (function (){var all_files = inst_30648;
var res_SINGLEQUOTE_ = inst_30651__$1;
var res = inst_30652__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30651,inst_30652,inst_30648,inst_30656,inst_30651__$1,inst_30652__$1,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30331_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30331_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30651,inst_30652,inst_30648,inst_30656,inst_30651__$1,inst_30652__$1,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30654 = cljs.core.filter.call(null,inst_30653,inst_30651__$1);
var inst_30655 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30656__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30655);
var inst_30657 = cljs.core.not_empty.call(null,inst_30656__$1);
var state_30734__$1 = (function (){var statearr_30762 = state_30734;
(statearr_30762[(23)] = inst_30651__$1);

(statearr_30762[(24)] = inst_30652__$1);

(statearr_30762[(26)] = inst_30654);

(statearr_30762[(25)] = inst_30656__$1);

return statearr_30762;
})();
if(cljs.core.truth_(inst_30657)){
var statearr_30763_30843 = state_30734__$1;
(statearr_30763_30843[(1)] = (23));

} else {
var statearr_30764_30844 = state_30734__$1;
(statearr_30764_30844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (36))){
var state_30734__$1 = state_30734;
var statearr_30765_30845 = state_30734__$1;
(statearr_30765_30845[(2)] = false);

(statearr_30765_30845[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (41))){
var inst_30709 = (state_30734[(20)]);
var inst_30713 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30714 = cljs.core.map.call(null,inst_30713,inst_30709);
var inst_30715 = cljs.core.pr_str.call(null,inst_30714);
var inst_30716 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30715)].join('');
var inst_30717 = figwheel.client.utils.log.call(null,inst_30716);
var state_30734__$1 = state_30734;
var statearr_30766_30846 = state_30734__$1;
(statearr_30766_30846[(2)] = inst_30717);

(statearr_30766_30846[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (43))){
var inst_30710 = (state_30734[(21)]);
var inst_30720 = (state_30734[(2)]);
var inst_30721 = cljs.core.not_empty.call(null,inst_30710);
var state_30734__$1 = (function (){var statearr_30767 = state_30734;
(statearr_30767[(27)] = inst_30720);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30721)){
var statearr_30768_30847 = state_30734__$1;
(statearr_30768_30847[(1)] = (44));

} else {
var statearr_30769_30848 = state_30734__$1;
(statearr_30769_30848[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (29))){
var inst_30651 = (state_30734[(23)]);
var inst_30652 = (state_30734[(24)]);
var inst_30688 = (state_30734[(16)]);
var inst_30654 = (state_30734[(26)]);
var inst_30648 = (state_30734[(19)]);
var inst_30656 = (state_30734[(25)]);
var inst_30684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30687 = (function (){var all_files = inst_30648;
var res_SINGLEQUOTE_ = inst_30651;
var res = inst_30652;
var files_not_loaded = inst_30654;
var dependencies_that_loaded = inst_30656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30688,inst_30654,inst_30648,inst_30656,inst_30684,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30686){
var map__30770 = p__30686;
var map__30770__$1 = ((((!((map__30770 == null)))?((((map__30770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770):map__30770);
var namespace = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30688,inst_30654,inst_30648,inst_30656,inst_30684,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30688__$1 = cljs.core.group_by.call(null,inst_30687,inst_30654);
var inst_30690 = (inst_30688__$1 == null);
var inst_30691 = cljs.core.not.call(null,inst_30690);
var state_30734__$1 = (function (){var statearr_30772 = state_30734;
(statearr_30772[(28)] = inst_30684);

(statearr_30772[(16)] = inst_30688__$1);

return statearr_30772;
})();
if(inst_30691){
var statearr_30773_30849 = state_30734__$1;
(statearr_30773_30849[(1)] = (32));

} else {
var statearr_30774_30850 = state_30734__$1;
(statearr_30774_30850[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (44))){
var inst_30710 = (state_30734[(21)]);
var inst_30723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30710);
var inst_30724 = cljs.core.pr_str.call(null,inst_30723);
var inst_30725 = [cljs.core.str("not required: "),cljs.core.str(inst_30724)].join('');
var inst_30726 = figwheel.client.utils.log.call(null,inst_30725);
var state_30734__$1 = state_30734;
var statearr_30775_30851 = state_30734__$1;
(statearr_30775_30851[(2)] = inst_30726);

(statearr_30775_30851[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (6))){
var inst_30629 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30776_30852 = state_30734__$1;
(statearr_30776_30852[(2)] = inst_30629);

(statearr_30776_30852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (28))){
var inst_30654 = (state_30734[(26)]);
var inst_30681 = (state_30734[(2)]);
var inst_30682 = cljs.core.not_empty.call(null,inst_30654);
var state_30734__$1 = (function (){var statearr_30777 = state_30734;
(statearr_30777[(29)] = inst_30681);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30682)){
var statearr_30778_30853 = state_30734__$1;
(statearr_30778_30853[(1)] = (29));

} else {
var statearr_30779_30854 = state_30734__$1;
(statearr_30779_30854[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (25))){
var inst_30652 = (state_30734[(24)]);
var inst_30668 = (state_30734[(2)]);
var inst_30669 = cljs.core.not_empty.call(null,inst_30652);
var state_30734__$1 = (function (){var statearr_30780 = state_30734;
(statearr_30780[(30)] = inst_30668);

return statearr_30780;
})();
if(cljs.core.truth_(inst_30669)){
var statearr_30781_30855 = state_30734__$1;
(statearr_30781_30855[(1)] = (26));

} else {
var statearr_30782_30856 = state_30734__$1;
(statearr_30782_30856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (34))){
var inst_30703 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30703)){
var statearr_30783_30857 = state_30734__$1;
(statearr_30783_30857[(1)] = (38));

} else {
var statearr_30784_30858 = state_30734__$1;
(statearr_30784_30858[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (17))){
var state_30734__$1 = state_30734;
var statearr_30785_30859 = state_30734__$1;
(statearr_30785_30859[(2)] = recompile_dependents);

(statearr_30785_30859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (3))){
var state_30734__$1 = state_30734;
var statearr_30786_30860 = state_30734__$1;
(statearr_30786_30860[(2)] = null);

(statearr_30786_30860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (12))){
var inst_30625 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30787_30861 = state_30734__$1;
(statearr_30787_30861[(2)] = inst_30625);

(statearr_30787_30861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (2))){
var inst_30587 = (state_30734[(13)]);
var inst_30594 = cljs.core.seq.call(null,inst_30587);
var inst_30595 = inst_30594;
var inst_30596 = null;
var inst_30597 = (0);
var inst_30598 = (0);
var state_30734__$1 = (function (){var statearr_30788 = state_30734;
(statearr_30788[(7)] = inst_30598);

(statearr_30788[(8)] = inst_30596);

(statearr_30788[(9)] = inst_30597);

(statearr_30788[(10)] = inst_30595);

return statearr_30788;
})();
var statearr_30789_30862 = state_30734__$1;
(statearr_30789_30862[(2)] = null);

(statearr_30789_30862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (23))){
var inst_30651 = (state_30734[(23)]);
var inst_30652 = (state_30734[(24)]);
var inst_30654 = (state_30734[(26)]);
var inst_30648 = (state_30734[(19)]);
var inst_30656 = (state_30734[(25)]);
var inst_30659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30661 = (function (){var all_files = inst_30648;
var res_SINGLEQUOTE_ = inst_30651;
var res = inst_30652;
var files_not_loaded = inst_30654;
var dependencies_that_loaded = inst_30656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30659,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30660){
var map__30790 = p__30660;
var map__30790__$1 = ((((!((map__30790 == null)))?((((map__30790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30790):map__30790);
var request_url = cljs.core.get.call(null,map__30790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30659,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30662 = cljs.core.reverse.call(null,inst_30656);
var inst_30663 = cljs.core.map.call(null,inst_30661,inst_30662);
var inst_30664 = cljs.core.pr_str.call(null,inst_30663);
var inst_30665 = figwheel.client.utils.log.call(null,inst_30664);
var state_30734__$1 = (function (){var statearr_30792 = state_30734;
(statearr_30792[(31)] = inst_30659);

return statearr_30792;
})();
var statearr_30793_30863 = state_30734__$1;
(statearr_30793_30863[(2)] = inst_30665);

(statearr_30793_30863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (35))){
var state_30734__$1 = state_30734;
var statearr_30794_30864 = state_30734__$1;
(statearr_30794_30864[(2)] = true);

(statearr_30794_30864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (19))){
var inst_30638 = (state_30734[(12)]);
var inst_30644 = figwheel.client.file_reloading.expand_files.call(null,inst_30638);
var state_30734__$1 = state_30734;
var statearr_30795_30865 = state_30734__$1;
(statearr_30795_30865[(2)] = inst_30644);

(statearr_30795_30865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (11))){
var state_30734__$1 = state_30734;
var statearr_30796_30866 = state_30734__$1;
(statearr_30796_30866[(2)] = null);

(statearr_30796_30866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (9))){
var inst_30627 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30797_30867 = state_30734__$1;
(statearr_30797_30867[(2)] = inst_30627);

(statearr_30797_30867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (5))){
var inst_30598 = (state_30734[(7)]);
var inst_30597 = (state_30734[(9)]);
var inst_30600 = (inst_30598 < inst_30597);
var inst_30601 = inst_30600;
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30601)){
var statearr_30798_30868 = state_30734__$1;
(statearr_30798_30868[(1)] = (7));

} else {
var statearr_30799_30869 = state_30734__$1;
(statearr_30799_30869[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (14))){
var inst_30608 = (state_30734[(22)]);
var inst_30617 = cljs.core.first.call(null,inst_30608);
var inst_30618 = figwheel.client.file_reloading.eval_body.call(null,inst_30617,opts);
var inst_30619 = cljs.core.next.call(null,inst_30608);
var inst_30595 = inst_30619;
var inst_30596 = null;
var inst_30597 = (0);
var inst_30598 = (0);
var state_30734__$1 = (function (){var statearr_30800 = state_30734;
(statearr_30800[(7)] = inst_30598);

(statearr_30800[(8)] = inst_30596);

(statearr_30800[(9)] = inst_30597);

(statearr_30800[(10)] = inst_30595);

(statearr_30800[(32)] = inst_30618);

return statearr_30800;
})();
var statearr_30801_30870 = state_30734__$1;
(statearr_30801_30870[(2)] = null);

(statearr_30801_30870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (45))){
var state_30734__$1 = state_30734;
var statearr_30802_30871 = state_30734__$1;
(statearr_30802_30871[(2)] = null);

(statearr_30802_30871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (26))){
var inst_30651 = (state_30734[(23)]);
var inst_30652 = (state_30734[(24)]);
var inst_30654 = (state_30734[(26)]);
var inst_30648 = (state_30734[(19)]);
var inst_30656 = (state_30734[(25)]);
var inst_30671 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30673 = (function (){var all_files = inst_30648;
var res_SINGLEQUOTE_ = inst_30651;
var res = inst_30652;
var files_not_loaded = inst_30654;
var dependencies_that_loaded = inst_30656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30671,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30672){
var map__30803 = p__30672;
var map__30803__$1 = ((((!((map__30803 == null)))?((((map__30803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);
var namespace = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30671,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30674 = cljs.core.map.call(null,inst_30673,inst_30652);
var inst_30675 = cljs.core.pr_str.call(null,inst_30674);
var inst_30676 = figwheel.client.utils.log.call(null,inst_30675);
var inst_30677 = (function (){var all_files = inst_30648;
var res_SINGLEQUOTE_ = inst_30651;
var res = inst_30652;
var files_not_loaded = inst_30654;
var dependencies_that_loaded = inst_30656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30671,inst_30673,inst_30674,inst_30675,inst_30676,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30651,inst_30652,inst_30654,inst_30648,inst_30656,inst_30671,inst_30673,inst_30674,inst_30675,inst_30676,state_val_30735,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30678 = setTimeout(inst_30677,(10));
var state_30734__$1 = (function (){var statearr_30805 = state_30734;
(statearr_30805[(33)] = inst_30671);

(statearr_30805[(34)] = inst_30676);

return statearr_30805;
})();
var statearr_30806_30872 = state_30734__$1;
(statearr_30806_30872[(2)] = inst_30678);

(statearr_30806_30872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (16))){
var state_30734__$1 = state_30734;
var statearr_30807_30873 = state_30734__$1;
(statearr_30807_30873[(2)] = reload_dependents);

(statearr_30807_30873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (38))){
var inst_30688 = (state_30734[(16)]);
var inst_30705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30688);
var state_30734__$1 = state_30734;
var statearr_30808_30874 = state_30734__$1;
(statearr_30808_30874[(2)] = inst_30705);

(statearr_30808_30874[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (30))){
var state_30734__$1 = state_30734;
var statearr_30809_30875 = state_30734__$1;
(statearr_30809_30875[(2)] = null);

(statearr_30809_30875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (10))){
var inst_30608 = (state_30734[(22)]);
var inst_30610 = cljs.core.chunked_seq_QMARK_.call(null,inst_30608);
var state_30734__$1 = state_30734;
if(inst_30610){
var statearr_30810_30876 = state_30734__$1;
(statearr_30810_30876[(1)] = (13));

} else {
var statearr_30811_30877 = state_30734__$1;
(statearr_30811_30877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (18))){
var inst_30642 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30642)){
var statearr_30812_30878 = state_30734__$1;
(statearr_30812_30878[(1)] = (19));

} else {
var statearr_30813_30879 = state_30734__$1;
(statearr_30813_30879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (42))){
var state_30734__$1 = state_30734;
var statearr_30814_30880 = state_30734__$1;
(statearr_30814_30880[(2)] = null);

(statearr_30814_30880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (37))){
var inst_30700 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30815_30881 = state_30734__$1;
(statearr_30815_30881[(2)] = inst_30700);

(statearr_30815_30881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (8))){
var inst_30608 = (state_30734[(22)]);
var inst_30595 = (state_30734[(10)]);
var inst_30608__$1 = cljs.core.seq.call(null,inst_30595);
var state_30734__$1 = (function (){var statearr_30816 = state_30734;
(statearr_30816[(22)] = inst_30608__$1);

return statearr_30816;
})();
if(inst_30608__$1){
var statearr_30817_30882 = state_30734__$1;
(statearr_30817_30882[(1)] = (10));

} else {
var statearr_30818_30883 = state_30734__$1;
(statearr_30818_30883[(1)] = (11));

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
});})(c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26811__auto__,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____0 = (function (){
var statearr_30822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30822[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__);

(statearr_30822[(1)] = (1));

return statearr_30822;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____1 = (function (state_30734){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_30734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object)){
var ex__26815__auto__ = e30823;
var statearr_30824_30884 = state_30734;
(statearr_30824_30884[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30885 = state_30734;
state_30734 = G__30885;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26925__auto__ = (function (){var statearr_30825 = f__26924__auto__.call(null);
(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__,map__30580,map__30580__$1,opts,before_jsload,on_jsload,reload_dependents,map__30581,map__30581__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26923__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30888,link){
var map__30891 = p__30888;
var map__30891__$1 = ((((!((map__30891 == null)))?((((map__30891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30891):map__30891);
var file = cljs.core.get.call(null,map__30891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30891,map__30891__$1,file){
return (function (p1__30886_SHARP_,p2__30887_SHARP_){
if(cljs.core._EQ_.call(null,p1__30886_SHARP_,p2__30887_SHARP_)){
return p1__30886_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30891,map__30891__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30897){
var map__30898 = p__30897;
var map__30898__$1 = ((((!((map__30898 == null)))?((((map__30898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30898):map__30898);
var match_length = cljs.core.get.call(null,map__30898__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30898__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30893_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30893_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args30900 = [];
var len__25826__auto___30903 = arguments.length;
var i__25827__auto___30904 = (0);
while(true){
if((i__25827__auto___30904 < len__25826__auto___30903)){
args30900.push((arguments[i__25827__auto___30904]));

var G__30905 = (i__25827__auto___30904 + (1));
i__25827__auto___30904 = G__30905;
continue;
} else {
}
break;
}

var G__30902 = args30900.length;
switch (G__30902) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30900.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30907_SHARP_,p2__30908_SHARP_){
return cljs.core.assoc.call(null,p1__30907_SHARP_,cljs.core.get.call(null,p2__30908_SHARP_,key),p2__30908_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30909){
var map__30912 = p__30909;
var map__30912__$1 = ((((!((map__30912 == null)))?((((map__30912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30912):map__30912);
var f_data = map__30912__$1;
var file = cljs.core.get.call(null,map__30912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30914,p__30915){
var map__30924 = p__30914;
var map__30924__$1 = ((((!((map__30924 == null)))?((((map__30924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30924):map__30924);
var opts = map__30924__$1;
var on_cssload = cljs.core.get.call(null,map__30924__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30925 = p__30915;
var map__30925__$1 = ((((!((map__30925 == null)))?((((map__30925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30925):map__30925);
var files_msg = map__30925__$1;
var files = cljs.core.get.call(null,map__30925__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30928_30932 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30929_30933 = null;
var count__30930_30934 = (0);
var i__30931_30935 = (0);
while(true){
if((i__30931_30935 < count__30930_30934)){
var f_30936 = cljs.core._nth.call(null,chunk__30929_30933,i__30931_30935);
figwheel.client.file_reloading.reload_css_file.call(null,f_30936);

var G__30937 = seq__30928_30932;
var G__30938 = chunk__30929_30933;
var G__30939 = count__30930_30934;
var G__30940 = (i__30931_30935 + (1));
seq__30928_30932 = G__30937;
chunk__30929_30933 = G__30938;
count__30930_30934 = G__30939;
i__30931_30935 = G__30940;
continue;
} else {
var temp__4657__auto___30941 = cljs.core.seq.call(null,seq__30928_30932);
if(temp__4657__auto___30941){
var seq__30928_30942__$1 = temp__4657__auto___30941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30928_30942__$1)){
var c__25562__auto___30943 = cljs.core.chunk_first.call(null,seq__30928_30942__$1);
var G__30944 = cljs.core.chunk_rest.call(null,seq__30928_30942__$1);
var G__30945 = c__25562__auto___30943;
var G__30946 = cljs.core.count.call(null,c__25562__auto___30943);
var G__30947 = (0);
seq__30928_30932 = G__30944;
chunk__30929_30933 = G__30945;
count__30930_30934 = G__30946;
i__30931_30935 = G__30947;
continue;
} else {
var f_30948 = cljs.core.first.call(null,seq__30928_30942__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30948);

var G__30949 = cljs.core.next.call(null,seq__30928_30942__$1);
var G__30950 = null;
var G__30951 = (0);
var G__30952 = (0);
seq__30928_30932 = G__30949;
chunk__30929_30933 = G__30950;
count__30930_30934 = G__30951;
i__30931_30935 = G__30952;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30924,map__30924__$1,opts,on_cssload,map__30925,map__30925__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30924,map__30924__$1,opts,on_cssload,map__30925,map__30925__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1475000609694