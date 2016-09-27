// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32270){
var map__32295 = p__32270;
var map__32295__$1 = ((((!((map__32295 == null)))?((((map__32295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32295):map__32295);
var m = map__32295__$1;
var n = cljs.core.get.call(null,map__32295__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__32297_32319 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32298_32320 = null;
var count__32299_32321 = (0);
var i__32300_32322 = (0);
while(true){
if((i__32300_32322 < count__32299_32321)){
var f_32323 = cljs.core._nth.call(null,chunk__32298_32320,i__32300_32322);
cljs.core.println.call(null,"  ",f_32323);

var G__32324 = seq__32297_32319;
var G__32325 = chunk__32298_32320;
var G__32326 = count__32299_32321;
var G__32327 = (i__32300_32322 + (1));
seq__32297_32319 = G__32324;
chunk__32298_32320 = G__32325;
count__32299_32321 = G__32326;
i__32300_32322 = G__32327;
continue;
} else {
var temp__4657__auto___32328 = cljs.core.seq.call(null,seq__32297_32319);
if(temp__4657__auto___32328){
var seq__32297_32329__$1 = temp__4657__auto___32328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32297_32329__$1)){
var c__25562__auto___32330 = cljs.core.chunk_first.call(null,seq__32297_32329__$1);
var G__32331 = cljs.core.chunk_rest.call(null,seq__32297_32329__$1);
var G__32332 = c__25562__auto___32330;
var G__32333 = cljs.core.count.call(null,c__25562__auto___32330);
var G__32334 = (0);
seq__32297_32319 = G__32331;
chunk__32298_32320 = G__32332;
count__32299_32321 = G__32333;
i__32300_32322 = G__32334;
continue;
} else {
var f_32335 = cljs.core.first.call(null,seq__32297_32329__$1);
cljs.core.println.call(null,"  ",f_32335);

var G__32336 = cljs.core.next.call(null,seq__32297_32329__$1);
var G__32337 = null;
var G__32338 = (0);
var G__32339 = (0);
seq__32297_32319 = G__32336;
chunk__32298_32320 = G__32337;
count__32299_32321 = G__32338;
i__32300_32322 = G__32339;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32340 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32340);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32340)))?cljs.core.second.call(null,arglists_32340):arglists_32340));
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
var seq__32301_32341 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32302_32342 = null;
var count__32303_32343 = (0);
var i__32304_32344 = (0);
while(true){
if((i__32304_32344 < count__32303_32343)){
var vec__32305_32345 = cljs.core._nth.call(null,chunk__32302_32342,i__32304_32344);
var name_32346 = cljs.core.nth.call(null,vec__32305_32345,(0),null);
var map__32308_32347 = cljs.core.nth.call(null,vec__32305_32345,(1),null);
var map__32308_32348__$1 = ((((!((map__32308_32347 == null)))?((((map__32308_32347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32308_32347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308_32347):map__32308_32347);
var doc_32349 = cljs.core.get.call(null,map__32308_32348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32350 = cljs.core.get.call(null,map__32308_32348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32346);

cljs.core.println.call(null," ",arglists_32350);

if(cljs.core.truth_(doc_32349)){
cljs.core.println.call(null," ",doc_32349);
} else {
}

var G__32351 = seq__32301_32341;
var G__32352 = chunk__32302_32342;
var G__32353 = count__32303_32343;
var G__32354 = (i__32304_32344 + (1));
seq__32301_32341 = G__32351;
chunk__32302_32342 = G__32352;
count__32303_32343 = G__32353;
i__32304_32344 = G__32354;
continue;
} else {
var temp__4657__auto___32355 = cljs.core.seq.call(null,seq__32301_32341);
if(temp__4657__auto___32355){
var seq__32301_32356__$1 = temp__4657__auto___32355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32301_32356__$1)){
var c__25562__auto___32357 = cljs.core.chunk_first.call(null,seq__32301_32356__$1);
var G__32358 = cljs.core.chunk_rest.call(null,seq__32301_32356__$1);
var G__32359 = c__25562__auto___32357;
var G__32360 = cljs.core.count.call(null,c__25562__auto___32357);
var G__32361 = (0);
seq__32301_32341 = G__32358;
chunk__32302_32342 = G__32359;
count__32303_32343 = G__32360;
i__32304_32344 = G__32361;
continue;
} else {
var vec__32310_32362 = cljs.core.first.call(null,seq__32301_32356__$1);
var name_32363 = cljs.core.nth.call(null,vec__32310_32362,(0),null);
var map__32313_32364 = cljs.core.nth.call(null,vec__32310_32362,(1),null);
var map__32313_32365__$1 = ((((!((map__32313_32364 == null)))?((((map__32313_32364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32313_32364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32313_32364):map__32313_32364);
var doc_32366 = cljs.core.get.call(null,map__32313_32365__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32367 = cljs.core.get.call(null,map__32313_32365__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32363);

cljs.core.println.call(null," ",arglists_32367);

if(cljs.core.truth_(doc_32366)){
cljs.core.println.call(null," ",doc_32366);
} else {
}

var G__32368 = cljs.core.next.call(null,seq__32301_32356__$1);
var G__32369 = null;
var G__32370 = (0);
var G__32371 = (0);
seq__32301_32341 = G__32368;
chunk__32302_32342 = G__32369;
count__32303_32343 = G__32370;
i__32304_32344 = G__32371;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32315 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32316 = null;
var count__32317 = (0);
var i__32318 = (0);
while(true){
if((i__32318 < count__32317)){
var role = cljs.core._nth.call(null,chunk__32316,i__32318);
var temp__4657__auto___32372__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32372__$1)){
var spec_32373 = temp__4657__auto___32372__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32373));
} else {
}

var G__32374 = seq__32315;
var G__32375 = chunk__32316;
var G__32376 = count__32317;
var G__32377 = (i__32318 + (1));
seq__32315 = G__32374;
chunk__32316 = G__32375;
count__32317 = G__32376;
i__32318 = G__32377;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32315);
if(temp__4657__auto____$1){
var seq__32315__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32315__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__32315__$1);
var G__32378 = cljs.core.chunk_rest.call(null,seq__32315__$1);
var G__32379 = c__25562__auto__;
var G__32380 = cljs.core.count.call(null,c__25562__auto__);
var G__32381 = (0);
seq__32315 = G__32378;
chunk__32316 = G__32379;
count__32317 = G__32380;
i__32318 = G__32381;
continue;
} else {
var role = cljs.core.first.call(null,seq__32315__$1);
var temp__4657__auto___32382__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32382__$2)){
var spec_32383 = temp__4657__auto___32382__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32383));
} else {
}

var G__32384 = cljs.core.next.call(null,seq__32315__$1);
var G__32385 = null;
var G__32386 = (0);
var G__32387 = (0);
seq__32315 = G__32384;
chunk__32316 = G__32385;
count__32317 = G__32386;
i__32318 = G__32387;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1475000611282