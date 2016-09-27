// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34423 = [];
var len__25826__auto___34426 = arguments.length;
var i__25827__auto___34427 = (0);
while(true){
if((i__25827__auto___34427 < len__25826__auto___34426)){
args34423.push((arguments[i__25827__auto___34427]));

var G__34428 = (i__25827__auto___34427 + (1));
i__25827__auto___34427 = G__34428;
continue;
} else {
}
break;
}

var G__34425 = args34423.length;
switch (G__34425) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34423.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___34431 = arguments.length;
var i__25827__auto___34432 = (0);
while(true){
if((i__25827__auto___34432 < len__25826__auto___34431)){
args__25833__auto__.push((arguments[i__25827__auto___34432]));

var G__34433 = (i__25827__auto___34432 + (1));
i__25827__auto___34432 = G__34433;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34430){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34430));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___34435 = arguments.length;
var i__25827__auto___34436 = (0);
while(true){
if((i__25827__auto___34436 < len__25826__auto___34435)){
args__25833__auto__.push((arguments[i__25827__auto___34436]));

var G__34437 = (i__25827__auto___34436 + (1));
i__25827__auto___34436 = G__34437;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34434){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34434));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34438 = cljs.core._EQ_;
var expr__34439 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34442){if((e34442 instanceof Error)){
var e = e34442;
return false;
} else {
throw e34442;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34438.call(null,"true",expr__34439))){
return true;
} else {
if(cljs.core.truth_(pred__34438.call(null,"false",expr__34439))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34439)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34444){if((e34444 instanceof Error)){
var e = e34444;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34444;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34445){
var map__34448 = p__34445;
var map__34448__$1 = ((((!((map__34448 == null)))?((((map__34448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34448):map__34448);
var message = cljs.core.get.call(null,map__34448__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24739__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26923__auto___34610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___34610,ch){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___34610,ch){
return (function (state_34579){
var state_val_34580 = (state_34579[(1)]);
if((state_val_34580 === (7))){
var inst_34575 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34581_34611 = state_34579__$1;
(statearr_34581_34611[(2)] = inst_34575);

(statearr_34581_34611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (1))){
var state_34579__$1 = state_34579;
var statearr_34582_34612 = state_34579__$1;
(statearr_34582_34612[(2)] = null);

(statearr_34582_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (4))){
var inst_34532 = (state_34579[(7)]);
var inst_34532__$1 = (state_34579[(2)]);
var state_34579__$1 = (function (){var statearr_34583 = state_34579;
(statearr_34583[(7)] = inst_34532__$1);

return statearr_34583;
})();
if(cljs.core.truth_(inst_34532__$1)){
var statearr_34584_34613 = state_34579__$1;
(statearr_34584_34613[(1)] = (5));

} else {
var statearr_34585_34614 = state_34579__$1;
(statearr_34585_34614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (15))){
var inst_34539 = (state_34579[(8)]);
var inst_34554 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34539);
var inst_34555 = cljs.core.first.call(null,inst_34554);
var inst_34556 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34555);
var inst_34557 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34556)].join('');
var inst_34558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34557);
var state_34579__$1 = state_34579;
var statearr_34586_34615 = state_34579__$1;
(statearr_34586_34615[(2)] = inst_34558);

(statearr_34586_34615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (13))){
var inst_34563 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34587_34616 = state_34579__$1;
(statearr_34587_34616[(2)] = inst_34563);

(statearr_34587_34616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (6))){
var state_34579__$1 = state_34579;
var statearr_34588_34617 = state_34579__$1;
(statearr_34588_34617[(2)] = null);

(statearr_34588_34617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (17))){
var inst_34561 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34589_34618 = state_34579__$1;
(statearr_34589_34618[(2)] = inst_34561);

(statearr_34589_34618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (3))){
var inst_34577 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34579__$1,inst_34577);
} else {
if((state_val_34580 === (12))){
var inst_34538 = (state_34579[(9)]);
var inst_34552 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34538,opts);
var state_34579__$1 = state_34579;
if(cljs.core.truth_(inst_34552)){
var statearr_34590_34619 = state_34579__$1;
(statearr_34590_34619[(1)] = (15));

} else {
var statearr_34591_34620 = state_34579__$1;
(statearr_34591_34620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (2))){
var state_34579__$1 = state_34579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34579__$1,(4),ch);
} else {
if((state_val_34580 === (11))){
var inst_34539 = (state_34579[(8)]);
var inst_34544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34545 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34539);
var inst_34546 = cljs.core.async.timeout.call(null,(1000));
var inst_34547 = [inst_34545,inst_34546];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34544,inst_34547,null));
var state_34579__$1 = state_34579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34579__$1,(14),inst_34548);
} else {
if((state_val_34580 === (9))){
var inst_34539 = (state_34579[(8)]);
var inst_34565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34566 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34539);
var inst_34567 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34566);
var inst_34568 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34567)].join('');
var inst_34569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34568);
var state_34579__$1 = (function (){var statearr_34592 = state_34579;
(statearr_34592[(10)] = inst_34565);

return statearr_34592;
})();
var statearr_34593_34621 = state_34579__$1;
(statearr_34593_34621[(2)] = inst_34569);

(statearr_34593_34621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (5))){
var inst_34532 = (state_34579[(7)]);
var inst_34534 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34535 = (new cljs.core.PersistentArrayMap(null,2,inst_34534,null));
var inst_34536 = (new cljs.core.PersistentHashSet(null,inst_34535,null));
var inst_34537 = figwheel.client.focus_msgs.call(null,inst_34536,inst_34532);
var inst_34538 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34537);
var inst_34539 = cljs.core.first.call(null,inst_34537);
var inst_34540 = figwheel.client.autoload_QMARK_.call(null);
var state_34579__$1 = (function (){var statearr_34594 = state_34579;
(statearr_34594[(9)] = inst_34538);

(statearr_34594[(8)] = inst_34539);

return statearr_34594;
})();
if(cljs.core.truth_(inst_34540)){
var statearr_34595_34622 = state_34579__$1;
(statearr_34595_34622[(1)] = (8));

} else {
var statearr_34596_34623 = state_34579__$1;
(statearr_34596_34623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (14))){
var inst_34550 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34597_34624 = state_34579__$1;
(statearr_34597_34624[(2)] = inst_34550);

(statearr_34597_34624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (16))){
var state_34579__$1 = state_34579;
var statearr_34598_34625 = state_34579__$1;
(statearr_34598_34625[(2)] = null);

(statearr_34598_34625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (10))){
var inst_34571 = (state_34579[(2)]);
var state_34579__$1 = (function (){var statearr_34599 = state_34579;
(statearr_34599[(11)] = inst_34571);

return statearr_34599;
})();
var statearr_34600_34626 = state_34579__$1;
(statearr_34600_34626[(2)] = null);

(statearr_34600_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (8))){
var inst_34538 = (state_34579[(9)]);
var inst_34542 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34538,opts);
var state_34579__$1 = state_34579;
if(cljs.core.truth_(inst_34542)){
var statearr_34601_34627 = state_34579__$1;
(statearr_34601_34627[(1)] = (11));

} else {
var statearr_34602_34628 = state_34579__$1;
(statearr_34602_34628[(1)] = (12));

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
});})(c__26923__auto___34610,ch))
;
return ((function (switch__26811__auto__,c__26923__auto___34610,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____0 = (function (){
var statearr_34606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34606[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__);

(statearr_34606[(1)] = (1));

return statearr_34606;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____1 = (function (state_34579){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_34579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e34607){if((e34607 instanceof Object)){
var ex__26815__auto__ = e34607;
var statearr_34608_34629 = state_34579;
(statearr_34608_34629[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_34579;
state_34579 = G__34630;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__ = function(state_34579){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____1.call(this,state_34579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26812__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___34610,ch))
})();
var state__26925__auto__ = (function (){var statearr_34609 = f__26924__auto__.call(null);
(statearr_34609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___34610);

return statearr_34609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___34610,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34631_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34631_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34634 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34634){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34633){if((e34633 instanceof Error)){
var e = e34633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34634], null));
} else {
var e = e34633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34634))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34635){
var map__34644 = p__34635;
var map__34644__$1 = ((((!((map__34644 == null)))?((((map__34644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34644):map__34644);
var opts = map__34644__$1;
var build_id = cljs.core.get.call(null,map__34644__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34644,map__34644__$1,opts,build_id){
return (function (p__34646){
var vec__34647 = p__34646;
var seq__34648 = cljs.core.seq.call(null,vec__34647);
var first__34649 = cljs.core.first.call(null,seq__34648);
var seq__34648__$1 = cljs.core.next.call(null,seq__34648);
var map__34650 = first__34649;
var map__34650__$1 = ((((!((map__34650 == null)))?((((map__34650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34650):map__34650);
var msg = map__34650__$1;
var msg_name = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34648__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34647,seq__34648,first__34649,seq__34648__$1,map__34650,map__34650__$1,msg,msg_name,_,map__34644,map__34644__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34647,seq__34648,first__34649,seq__34648__$1,map__34650,map__34650__$1,msg,msg_name,_,map__34644,map__34644__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34644,map__34644__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34658){
var vec__34659 = p__34658;
var seq__34660 = cljs.core.seq.call(null,vec__34659);
var first__34661 = cljs.core.first.call(null,seq__34660);
var seq__34660__$1 = cljs.core.next.call(null,seq__34660);
var map__34662 = first__34661;
var map__34662__$1 = ((((!((map__34662 == null)))?((((map__34662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34662):map__34662);
var msg = map__34662__$1;
var msg_name = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34660__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34664){
var map__34676 = p__34664;
var map__34676__$1 = ((((!((map__34676 == null)))?((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34676):map__34676);
var on_compile_warning = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34676,map__34676__$1,on_compile_warning,on_compile_fail){
return (function (p__34678){
var vec__34679 = p__34678;
var seq__34680 = cljs.core.seq.call(null,vec__34679);
var first__34681 = cljs.core.first.call(null,seq__34680);
var seq__34680__$1 = cljs.core.next.call(null,seq__34680);
var map__34682 = first__34681;
var map__34682__$1 = ((((!((map__34682 == null)))?((((map__34682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34682):map__34682);
var msg = map__34682__$1;
var msg_name = cljs.core.get.call(null,map__34682__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34680__$1;
var pred__34684 = cljs.core._EQ_;
var expr__34685 = msg_name;
if(cljs.core.truth_(pred__34684.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34685))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34684.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34685))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34676,map__34676__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__,msg_hist,msg_names,msg){
return (function (state_34913){
var state_val_34914 = (state_34913[(1)]);
if((state_val_34914 === (7))){
var inst_34833 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34833)){
var statearr_34915_34965 = state_34913__$1;
(statearr_34915_34965[(1)] = (8));

} else {
var statearr_34916_34966 = state_34913__$1;
(statearr_34916_34966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (20))){
var inst_34907 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34917_34967 = state_34913__$1;
(statearr_34917_34967[(2)] = inst_34907);

(statearr_34917_34967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (27))){
var inst_34903 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34918_34968 = state_34913__$1;
(statearr_34918_34968[(2)] = inst_34903);

(statearr_34918_34968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (1))){
var inst_34826 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34826)){
var statearr_34919_34969 = state_34913__$1;
(statearr_34919_34969[(1)] = (2));

} else {
var statearr_34920_34970 = state_34913__$1;
(statearr_34920_34970[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (24))){
var inst_34905 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34921_34971 = state_34913__$1;
(statearr_34921_34971[(2)] = inst_34905);

(statearr_34921_34971[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (4))){
var inst_34911 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34913__$1,inst_34911);
} else {
if((state_val_34914 === (15))){
var inst_34909 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34922_34972 = state_34913__$1;
(statearr_34922_34972[(2)] = inst_34909);

(statearr_34922_34972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (21))){
var inst_34862 = (state_34913[(2)]);
var inst_34863 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34863);
var state_34913__$1 = (function (){var statearr_34923 = state_34913;
(statearr_34923[(7)] = inst_34862);

return statearr_34923;
})();
var statearr_34924_34973 = state_34913__$1;
(statearr_34924_34973[(2)] = inst_34864);

(statearr_34924_34973[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (31))){
var inst_34892 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34892)){
var statearr_34925_34974 = state_34913__$1;
(statearr_34925_34974[(1)] = (34));

} else {
var statearr_34926_34975 = state_34913__$1;
(statearr_34926_34975[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (32))){
var inst_34901 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34927_34976 = state_34913__$1;
(statearr_34927_34976[(2)] = inst_34901);

(statearr_34927_34976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (33))){
var inst_34888 = (state_34913[(2)]);
var inst_34889 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34890 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34889);
var state_34913__$1 = (function (){var statearr_34928 = state_34913;
(statearr_34928[(8)] = inst_34888);

return statearr_34928;
})();
var statearr_34929_34977 = state_34913__$1;
(statearr_34929_34977[(2)] = inst_34890);

(statearr_34929_34977[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (13))){
var inst_34847 = figwheel.client.heads_up.clear.call(null);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(16),inst_34847);
} else {
if((state_val_34914 === (22))){
var inst_34868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34869 = figwheel.client.heads_up.append_warning_message.call(null,inst_34868);
var state_34913__$1 = state_34913;
var statearr_34930_34978 = state_34913__$1;
(statearr_34930_34978[(2)] = inst_34869);

(statearr_34930_34978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (36))){
var inst_34899 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34931_34979 = state_34913__$1;
(statearr_34931_34979[(2)] = inst_34899);

(statearr_34931_34979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (29))){
var inst_34879 = (state_34913[(2)]);
var inst_34880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34881 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34880);
var state_34913__$1 = (function (){var statearr_34932 = state_34913;
(statearr_34932[(9)] = inst_34879);

return statearr_34932;
})();
var statearr_34933_34980 = state_34913__$1;
(statearr_34933_34980[(2)] = inst_34881);

(statearr_34933_34980[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (6))){
var inst_34828 = (state_34913[(10)]);
var state_34913__$1 = state_34913;
var statearr_34934_34981 = state_34913__$1;
(statearr_34934_34981[(2)] = inst_34828);

(statearr_34934_34981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (28))){
var inst_34875 = (state_34913[(2)]);
var inst_34876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34877 = figwheel.client.heads_up.display_warning.call(null,inst_34876);
var state_34913__$1 = (function (){var statearr_34935 = state_34913;
(statearr_34935[(11)] = inst_34875);

return statearr_34935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(29),inst_34877);
} else {
if((state_val_34914 === (25))){
var inst_34873 = figwheel.client.heads_up.clear.call(null);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(28),inst_34873);
} else {
if((state_val_34914 === (34))){
var inst_34894 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(37),inst_34894);
} else {
if((state_val_34914 === (17))){
var inst_34853 = (state_34913[(2)]);
var inst_34854 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34855 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34854);
var state_34913__$1 = (function (){var statearr_34936 = state_34913;
(statearr_34936[(12)] = inst_34853);

return statearr_34936;
})();
var statearr_34937_34982 = state_34913__$1;
(statearr_34937_34982[(2)] = inst_34855);

(statearr_34937_34982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (3))){
var inst_34845 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34845)){
var statearr_34938_34983 = state_34913__$1;
(statearr_34938_34983[(1)] = (13));

} else {
var statearr_34939_34984 = state_34913__$1;
(statearr_34939_34984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (12))){
var inst_34841 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34940_34985 = state_34913__$1;
(statearr_34940_34985[(2)] = inst_34841);

(statearr_34940_34985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (2))){
var inst_34828 = (state_34913[(10)]);
var inst_34828__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34913__$1 = (function (){var statearr_34941 = state_34913;
(statearr_34941[(10)] = inst_34828__$1);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34828__$1)){
var statearr_34942_34986 = state_34913__$1;
(statearr_34942_34986[(1)] = (5));

} else {
var statearr_34943_34987 = state_34913__$1;
(statearr_34943_34987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (23))){
var inst_34871 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34871)){
var statearr_34944_34988 = state_34913__$1;
(statearr_34944_34988[(1)] = (25));

} else {
var statearr_34945_34989 = state_34913__$1;
(statearr_34945_34989[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (35))){
var state_34913__$1 = state_34913;
var statearr_34946_34990 = state_34913__$1;
(statearr_34946_34990[(2)] = null);

(statearr_34946_34990[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (19))){
var inst_34866 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34866)){
var statearr_34947_34991 = state_34913__$1;
(statearr_34947_34991[(1)] = (22));

} else {
var statearr_34948_34992 = state_34913__$1;
(statearr_34948_34992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (11))){
var inst_34837 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34949_34993 = state_34913__$1;
(statearr_34949_34993[(2)] = inst_34837);

(statearr_34949_34993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (9))){
var inst_34839 = figwheel.client.heads_up.clear.call(null);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(12),inst_34839);
} else {
if((state_val_34914 === (5))){
var inst_34830 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34913__$1 = state_34913;
var statearr_34950_34994 = state_34913__$1;
(statearr_34950_34994[(2)] = inst_34830);

(statearr_34950_34994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (14))){
var inst_34857 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34857)){
var statearr_34951_34995 = state_34913__$1;
(statearr_34951_34995[(1)] = (18));

} else {
var statearr_34952_34996 = state_34913__$1;
(statearr_34952_34996[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (26))){
var inst_34883 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34913__$1 = state_34913;
if(cljs.core.truth_(inst_34883)){
var statearr_34953_34997 = state_34913__$1;
(statearr_34953_34997[(1)] = (30));

} else {
var statearr_34954_34998 = state_34913__$1;
(statearr_34954_34998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (16))){
var inst_34849 = (state_34913[(2)]);
var inst_34850 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34851 = figwheel.client.heads_up.display_exception.call(null,inst_34850);
var state_34913__$1 = (function (){var statearr_34955 = state_34913;
(statearr_34955[(13)] = inst_34849);

return statearr_34955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(17),inst_34851);
} else {
if((state_val_34914 === (30))){
var inst_34885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34886 = figwheel.client.heads_up.display_warning.call(null,inst_34885);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(33),inst_34886);
} else {
if((state_val_34914 === (10))){
var inst_34843 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34956_34999 = state_34913__$1;
(statearr_34956_34999[(2)] = inst_34843);

(statearr_34956_34999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (18))){
var inst_34859 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34860 = figwheel.client.heads_up.display_exception.call(null,inst_34859);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(21),inst_34860);
} else {
if((state_val_34914 === (37))){
var inst_34896 = (state_34913[(2)]);
var state_34913__$1 = state_34913;
var statearr_34957_35000 = state_34913__$1;
(statearr_34957_35000[(2)] = inst_34896);

(statearr_34957_35000[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34914 === (8))){
var inst_34835 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34913__$1 = state_34913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34913__$1,(11),inst_34835);
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
});})(c__26923__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26811__auto__,c__26923__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____0 = (function (){
var statearr_34961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34961[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__);

(statearr_34961[(1)] = (1));

return statearr_34961;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____1 = (function (state_34913){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_34913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e34962){if((e34962 instanceof Object)){
var ex__26815__auto__ = e34962;
var statearr_34963_35001 = state_34913;
(statearr_34963_35001[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35002 = state_34913;
state_34913 = G__35002;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__ = function(state_34913){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____1.call(this,state_34913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__,msg_hist,msg_names,msg))
})();
var state__26925__auto__ = (function (){var statearr_34964 = f__26924__auto__.call(null);
(statearr_34964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__,msg_hist,msg_names,msg))
);

return c__26923__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26923__auto___35065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto___35065,ch){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto___35065,ch){
return (function (state_35048){
var state_val_35049 = (state_35048[(1)]);
if((state_val_35049 === (1))){
var state_35048__$1 = state_35048;
var statearr_35050_35066 = state_35048__$1;
(statearr_35050_35066[(2)] = null);

(statearr_35050_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (2))){
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35048__$1,(4),ch);
} else {
if((state_val_35049 === (3))){
var inst_35046 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35048__$1,inst_35046);
} else {
if((state_val_35049 === (4))){
var inst_35036 = (state_35048[(7)]);
var inst_35036__$1 = (state_35048[(2)]);
var state_35048__$1 = (function (){var statearr_35051 = state_35048;
(statearr_35051[(7)] = inst_35036__$1);

return statearr_35051;
})();
if(cljs.core.truth_(inst_35036__$1)){
var statearr_35052_35067 = state_35048__$1;
(statearr_35052_35067[(1)] = (5));

} else {
var statearr_35053_35068 = state_35048__$1;
(statearr_35053_35068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (5))){
var inst_35036 = (state_35048[(7)]);
var inst_35038 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35036);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35048__$1,(8),inst_35038);
} else {
if((state_val_35049 === (6))){
var state_35048__$1 = state_35048;
var statearr_35054_35069 = state_35048__$1;
(statearr_35054_35069[(2)] = null);

(statearr_35054_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (7))){
var inst_35044 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35055_35070 = state_35048__$1;
(statearr_35055_35070[(2)] = inst_35044);

(statearr_35055_35070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (8))){
var inst_35040 = (state_35048[(2)]);
var state_35048__$1 = (function (){var statearr_35056 = state_35048;
(statearr_35056[(8)] = inst_35040);

return statearr_35056;
})();
var statearr_35057_35071 = state_35048__$1;
(statearr_35057_35071[(2)] = null);

(statearr_35057_35071[(1)] = (2));


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
});})(c__26923__auto___35065,ch))
;
return ((function (switch__26811__auto__,c__26923__auto___35065,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26812__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26812__auto____0 = (function (){
var statearr_35061 = [null,null,null,null,null,null,null,null,null];
(statearr_35061[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26812__auto__);

(statearr_35061[(1)] = (1));

return statearr_35061;
});
var figwheel$client$heads_up_plugin_$_state_machine__26812__auto____1 = (function (state_35048){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_35048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e35062){if((e35062 instanceof Object)){
var ex__26815__auto__ = e35062;
var statearr_35063_35072 = state_35048;
(statearr_35063_35072[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35073 = state_35048;
state_35048 = G__35073;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26812__auto__ = function(state_35048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26812__auto____1.call(this,state_35048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26812__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26812__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto___35065,ch))
})();
var state__26925__auto__ = (function (){var statearr_35064 = f__26924__auto__.call(null);
(statearr_35064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto___35065);

return statearr_35064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto___35065,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__){
return (function (state_35094){
var state_val_35095 = (state_35094[(1)]);
if((state_val_35095 === (1))){
var inst_35089 = cljs.core.async.timeout.call(null,(3000));
var state_35094__$1 = state_35094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35094__$1,(2),inst_35089);
} else {
if((state_val_35095 === (2))){
var inst_35091 = (state_35094[(2)]);
var inst_35092 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35094__$1 = (function (){var statearr_35096 = state_35094;
(statearr_35096[(7)] = inst_35091);

return statearr_35096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35094__$1,inst_35092);
} else {
return null;
}
}
});})(c__26923__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____0 = (function (){
var statearr_35100 = [null,null,null,null,null,null,null,null];
(statearr_35100[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__);

(statearr_35100[(1)] = (1));

return statearr_35100;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____1 = (function (state_35094){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_35094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e35101){if((e35101 instanceof Object)){
var ex__26815__auto__ = e35101;
var statearr_35102_35104 = state_35094;
(statearr_35102_35104[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35105 = state_35094;
state_35094 = G__35105;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__ = function(state_35094){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____1.call(this,state_35094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26812__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__))
})();
var state__26925__auto__ = (function (){var statearr_35103 = f__26924__auto__.call(null);
(statearr_35103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_35103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__))
);

return c__26923__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26923__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26923__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26924__auto__ = (function (){var switch__26811__auto__ = ((function (c__26923__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35128){
var state_val_35129 = (state_35128[(1)]);
if((state_val_35129 === (1))){
var inst_35122 = cljs.core.async.timeout.call(null,(2000));
var state_35128__$1 = state_35128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35128__$1,(2),inst_35122);
} else {
if((state_val_35129 === (2))){
var inst_35124 = (state_35128[(2)]);
var inst_35125 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35126 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35125);
var state_35128__$1 = (function (){var statearr_35130 = state_35128;
(statearr_35130[(7)] = inst_35124);

return statearr_35130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35128__$1,inst_35126);
} else {
return null;
}
}
});})(c__26923__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26811__auto__,c__26923__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____0 = (function (){
var statearr_35134 = [null,null,null,null,null,null,null,null];
(statearr_35134[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__);

(statearr_35134[(1)] = (1));

return statearr_35134;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____1 = (function (state_35128){
while(true){
var ret_value__26813__auto__ = (function (){try{while(true){
var result__26814__auto__ = switch__26811__auto__.call(null,state_35128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26814__auto__;
}
break;
}
}catch (e35135){if((e35135 instanceof Object)){
var ex__26815__auto__ = e35135;
var statearr_35136_35138 = state_35128;
(statearr_35136_35138[(5)] = ex__26815__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35139 = state_35128;
state_35128 = G__35139;
continue;
} else {
return ret_value__26813__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__ = function(state_35128){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____1.call(this,state_35128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26812__auto__;
})()
;})(switch__26811__auto__,c__26923__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26925__auto__ = (function (){var statearr_35137 = f__26924__auto__.call(null);
(statearr_35137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26923__auto__);

return statearr_35137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26925__auto__);
});})(c__26923__auto__,figwheel_version,temp__4657__auto__))
);

return c__26923__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35140){
var map__35144 = p__35140;
var map__35144__$1 = ((((!((map__35144 == null)))?((((map__35144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35144):map__35144);
var file = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35146 = "";
var G__35146__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35146),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35146);
var G__35146__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35146__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35146__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__35146__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35146__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35147){
var map__35154 = p__35147;
var map__35154__$1 = ((((!((map__35154 == null)))?((((map__35154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35154):map__35154);
var ed = map__35154__$1;
var formatted_exception = cljs.core.get.call(null,map__35154__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35154__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35154__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35156_35160 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35157_35161 = null;
var count__35158_35162 = (0);
var i__35159_35163 = (0);
while(true){
if((i__35159_35163 < count__35158_35162)){
var msg_35164 = cljs.core._nth.call(null,chunk__35157_35161,i__35159_35163);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35164);

var G__35165 = seq__35156_35160;
var G__35166 = chunk__35157_35161;
var G__35167 = count__35158_35162;
var G__35168 = (i__35159_35163 + (1));
seq__35156_35160 = G__35165;
chunk__35157_35161 = G__35166;
count__35158_35162 = G__35167;
i__35159_35163 = G__35168;
continue;
} else {
var temp__4657__auto___35169 = cljs.core.seq.call(null,seq__35156_35160);
if(temp__4657__auto___35169){
var seq__35156_35170__$1 = temp__4657__auto___35169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35156_35170__$1)){
var c__25562__auto___35171 = cljs.core.chunk_first.call(null,seq__35156_35170__$1);
var G__35172 = cljs.core.chunk_rest.call(null,seq__35156_35170__$1);
var G__35173 = c__25562__auto___35171;
var G__35174 = cljs.core.count.call(null,c__25562__auto___35171);
var G__35175 = (0);
seq__35156_35160 = G__35172;
chunk__35157_35161 = G__35173;
count__35158_35162 = G__35174;
i__35159_35163 = G__35175;
continue;
} else {
var msg_35176 = cljs.core.first.call(null,seq__35156_35170__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35176);

var G__35177 = cljs.core.next.call(null,seq__35156_35170__$1);
var G__35178 = null;
var G__35179 = (0);
var G__35180 = (0);
seq__35156_35160 = G__35177;
chunk__35157_35161 = G__35178;
count__35158_35162 = G__35179;
i__35159_35163 = G__35180;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35181){
var map__35184 = p__35181;
var map__35184__$1 = ((((!((map__35184 == null)))?((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var w = map__35184__$1;
var message = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/tests/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/tests/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24739__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35196 = cljs.core.seq.call(null,plugins);
var chunk__35197 = null;
var count__35198 = (0);
var i__35199 = (0);
while(true){
if((i__35199 < count__35198)){
var vec__35200 = cljs.core._nth.call(null,chunk__35197,i__35199);
var k = cljs.core.nth.call(null,vec__35200,(0),null);
var plugin = cljs.core.nth.call(null,vec__35200,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35206 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35196,chunk__35197,count__35198,i__35199,pl_35206,vec__35200,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35206.call(null,msg_hist);
});})(seq__35196,chunk__35197,count__35198,i__35199,pl_35206,vec__35200,k,plugin))
);
} else {
}

var G__35207 = seq__35196;
var G__35208 = chunk__35197;
var G__35209 = count__35198;
var G__35210 = (i__35199 + (1));
seq__35196 = G__35207;
chunk__35197 = G__35208;
count__35198 = G__35209;
i__35199 = G__35210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35196);
if(temp__4657__auto__){
var seq__35196__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35196__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__35196__$1);
var G__35211 = cljs.core.chunk_rest.call(null,seq__35196__$1);
var G__35212 = c__25562__auto__;
var G__35213 = cljs.core.count.call(null,c__25562__auto__);
var G__35214 = (0);
seq__35196 = G__35211;
chunk__35197 = G__35212;
count__35198 = G__35213;
i__35199 = G__35214;
continue;
} else {
var vec__35203 = cljs.core.first.call(null,seq__35196__$1);
var k = cljs.core.nth.call(null,vec__35203,(0),null);
var plugin = cljs.core.nth.call(null,vec__35203,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35215 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35196,chunk__35197,count__35198,i__35199,pl_35215,vec__35203,k,plugin,seq__35196__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35215.call(null,msg_hist);
});})(seq__35196,chunk__35197,count__35198,i__35199,pl_35215,vec__35203,k,plugin,seq__35196__$1,temp__4657__auto__))
);
} else {
}

var G__35216 = cljs.core.next.call(null,seq__35196__$1);
var G__35217 = null;
var G__35218 = (0);
var G__35219 = (0);
seq__35196 = G__35216;
chunk__35197 = G__35217;
count__35198 = G__35218;
i__35199 = G__35219;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35220 = [];
var len__25826__auto___35227 = arguments.length;
var i__25827__auto___35228 = (0);
while(true){
if((i__25827__auto___35228 < len__25826__auto___35227)){
args35220.push((arguments[i__25827__auto___35228]));

var G__35229 = (i__25827__auto___35228 + (1));
i__25827__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var G__35222 = args35220.length;
switch (G__35222) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35220.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35223_35231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35224_35232 = null;
var count__35225_35233 = (0);
var i__35226_35234 = (0);
while(true){
if((i__35226_35234 < count__35225_35233)){
var msg_35235 = cljs.core._nth.call(null,chunk__35224_35232,i__35226_35234);
figwheel.client.socket.handle_incoming_message.call(null,msg_35235);

var G__35236 = seq__35223_35231;
var G__35237 = chunk__35224_35232;
var G__35238 = count__35225_35233;
var G__35239 = (i__35226_35234 + (1));
seq__35223_35231 = G__35236;
chunk__35224_35232 = G__35237;
count__35225_35233 = G__35238;
i__35226_35234 = G__35239;
continue;
} else {
var temp__4657__auto___35240 = cljs.core.seq.call(null,seq__35223_35231);
if(temp__4657__auto___35240){
var seq__35223_35241__$1 = temp__4657__auto___35240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35223_35241__$1)){
var c__25562__auto___35242 = cljs.core.chunk_first.call(null,seq__35223_35241__$1);
var G__35243 = cljs.core.chunk_rest.call(null,seq__35223_35241__$1);
var G__35244 = c__25562__auto___35242;
var G__35245 = cljs.core.count.call(null,c__25562__auto___35242);
var G__35246 = (0);
seq__35223_35231 = G__35243;
chunk__35224_35232 = G__35244;
count__35225_35233 = G__35245;
i__35226_35234 = G__35246;
continue;
} else {
var msg_35247 = cljs.core.first.call(null,seq__35223_35241__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35247);

var G__35248 = cljs.core.next.call(null,seq__35223_35241__$1);
var G__35249 = null;
var G__35250 = (0);
var G__35251 = (0);
seq__35223_35231 = G__35248;
chunk__35224_35232 = G__35249;
count__35225_35233 = G__35250;
i__35226_35234 = G__35251;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25833__auto__ = [];
var len__25826__auto___35256 = arguments.length;
var i__25827__auto___35257 = (0);
while(true){
if((i__25827__auto___35257 < len__25826__auto___35256)){
args__25833__auto__.push((arguments[i__25827__auto___35257]));

var G__35258 = (i__25827__auto___35257 + (1));
i__25827__auto___35257 = G__35258;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35253){
var map__35254 = p__35253;
var map__35254__$1 = ((((!((map__35254 == null)))?((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35254):map__35254);
var opts = map__35254__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35252){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35252));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35260){if((e35260 instanceof Error)){
var e = e35260;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35260;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35264){
var map__35265 = p__35264;
var map__35265__$1 = ((((!((map__35265 == null)))?((((map__35265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35265):map__35265);
var msg_name = cljs.core.get.call(null,map__35265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1475000614041