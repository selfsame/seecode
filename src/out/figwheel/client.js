// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23738 = cljs.core._EQ_;
var expr__23739 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23738.call(null,"true",expr__23739))){
return true;
} else {
if(cljs.core.truth_(pred__23738.call(null,"false",expr__23739))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23739)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17905__auto__ = [];
var len__17898__auto___23742 = arguments.length;
var i__17899__auto___23743 = (0);
while(true){
if((i__17899__auto___23743 < len__17898__auto___23742)){
args__17905__auto__.push((arguments[i__17899__auto___23743]));

var G__23744 = (i__17899__auto___23743 + (1));
i__17899__auto___23743 = G__23744;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23741){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23741));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23745){
var map__23748 = p__23745;
var map__23748__$1 = ((((!((map__23748 == null)))?((((map__23748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23748):map__23748);
var message = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16828__auto__;
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
var c__19161__auto___23910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___23910,ch){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___23910,ch){
return (function (state_23879){
var state_val_23880 = (state_23879[(1)]);
if((state_val_23880 === (7))){
var inst_23875 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23881_23911 = state_23879__$1;
(statearr_23881_23911[(2)] = inst_23875);

(statearr_23881_23911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (1))){
var state_23879__$1 = state_23879;
var statearr_23882_23912 = state_23879__$1;
(statearr_23882_23912[(2)] = null);

(statearr_23882_23912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (4))){
var inst_23832 = (state_23879[(7)]);
var inst_23832__$1 = (state_23879[(2)]);
var state_23879__$1 = (function (){var statearr_23883 = state_23879;
(statearr_23883[(7)] = inst_23832__$1);

return statearr_23883;
})();
if(cljs.core.truth_(inst_23832__$1)){
var statearr_23884_23913 = state_23879__$1;
(statearr_23884_23913[(1)] = (5));

} else {
var statearr_23885_23914 = state_23879__$1;
(statearr_23885_23914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (15))){
var inst_23839 = (state_23879[(8)]);
var inst_23854 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23839);
var inst_23855 = cljs.core.first.call(null,inst_23854);
var inst_23856 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23855);
var inst_23857 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23856)].join('');
var inst_23858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23857);
var state_23879__$1 = state_23879;
var statearr_23886_23915 = state_23879__$1;
(statearr_23886_23915[(2)] = inst_23858);

(statearr_23886_23915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (13))){
var inst_23863 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23887_23916 = state_23879__$1;
(statearr_23887_23916[(2)] = inst_23863);

(statearr_23887_23916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (6))){
var state_23879__$1 = state_23879;
var statearr_23888_23917 = state_23879__$1;
(statearr_23888_23917[(2)] = null);

(statearr_23888_23917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (17))){
var inst_23861 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23889_23918 = state_23879__$1;
(statearr_23889_23918[(2)] = inst_23861);

(statearr_23889_23918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (3))){
var inst_23877 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23879__$1,inst_23877);
} else {
if((state_val_23880 === (12))){
var inst_23838 = (state_23879[(9)]);
var inst_23852 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23838,opts);
var state_23879__$1 = state_23879;
if(cljs.core.truth_(inst_23852)){
var statearr_23890_23919 = state_23879__$1;
(statearr_23890_23919[(1)] = (15));

} else {
var statearr_23891_23920 = state_23879__$1;
(statearr_23891_23920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (2))){
var state_23879__$1 = state_23879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23879__$1,(4),ch);
} else {
if((state_val_23880 === (11))){
var inst_23839 = (state_23879[(8)]);
var inst_23844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23845 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23839);
var inst_23846 = cljs.core.async.timeout.call(null,(1000));
var inst_23847 = [inst_23845,inst_23846];
var inst_23848 = (new cljs.core.PersistentVector(null,2,(5),inst_23844,inst_23847,null));
var state_23879__$1 = state_23879;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23879__$1,(14),inst_23848);
} else {
if((state_val_23880 === (9))){
var inst_23839 = (state_23879[(8)]);
var inst_23865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23866 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23839);
var inst_23867 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23866);
var inst_23868 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23867)].join('');
var inst_23869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23868);
var state_23879__$1 = (function (){var statearr_23892 = state_23879;
(statearr_23892[(10)] = inst_23865);

return statearr_23892;
})();
var statearr_23893_23921 = state_23879__$1;
(statearr_23893_23921[(2)] = inst_23869);

(statearr_23893_23921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (5))){
var inst_23832 = (state_23879[(7)]);
var inst_23834 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23835 = (new cljs.core.PersistentArrayMap(null,2,inst_23834,null));
var inst_23836 = (new cljs.core.PersistentHashSet(null,inst_23835,null));
var inst_23837 = figwheel.client.focus_msgs.call(null,inst_23836,inst_23832);
var inst_23838 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23837);
var inst_23839 = cljs.core.first.call(null,inst_23837);
var inst_23840 = figwheel.client.autoload_QMARK_.call(null);
var state_23879__$1 = (function (){var statearr_23894 = state_23879;
(statearr_23894[(8)] = inst_23839);

(statearr_23894[(9)] = inst_23838);

return statearr_23894;
})();
if(cljs.core.truth_(inst_23840)){
var statearr_23895_23922 = state_23879__$1;
(statearr_23895_23922[(1)] = (8));

} else {
var statearr_23896_23923 = state_23879__$1;
(statearr_23896_23923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (14))){
var inst_23850 = (state_23879[(2)]);
var state_23879__$1 = state_23879;
var statearr_23897_23924 = state_23879__$1;
(statearr_23897_23924[(2)] = inst_23850);

(statearr_23897_23924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (16))){
var state_23879__$1 = state_23879;
var statearr_23898_23925 = state_23879__$1;
(statearr_23898_23925[(2)] = null);

(statearr_23898_23925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (10))){
var inst_23871 = (state_23879[(2)]);
var state_23879__$1 = (function (){var statearr_23899 = state_23879;
(statearr_23899[(11)] = inst_23871);

return statearr_23899;
})();
var statearr_23900_23926 = state_23879__$1;
(statearr_23900_23926[(2)] = null);

(statearr_23900_23926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23880 === (8))){
var inst_23838 = (state_23879[(9)]);
var inst_23842 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23838,opts);
var state_23879__$1 = state_23879;
if(cljs.core.truth_(inst_23842)){
var statearr_23901_23927 = state_23879__$1;
(statearr_23901_23927[(1)] = (11));

} else {
var statearr_23902_23928 = state_23879__$1;
(statearr_23902_23928[(1)] = (12));

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
});})(c__19161__auto___23910,ch))
;
return ((function (switch__19049__auto__,c__19161__auto___23910,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____0 = (function (){
var statearr_23906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23906[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__);

(statearr_23906[(1)] = (1));

return statearr_23906;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____1 = (function (state_23879){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_23879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e23907){if((e23907 instanceof Object)){
var ex__19053__auto__ = e23907;
var statearr_23908_23929 = state_23879;
(statearr_23908_23929[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23930 = state_23879;
state_23879 = G__23930;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__ = function(state_23879){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____1.call(this,state_23879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19050__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___23910,ch))
})();
var state__19163__auto__ = (function (){var statearr_23909 = f__19162__auto__.call(null);
(statearr_23909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___23910);

return statearr_23909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___23910,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23931_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23931_SHARP_));
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
var base_path_23938 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23938){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23936 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23937 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23937;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23936;
}}catch (e23935){if((e23935 instanceof Error)){
var e = e23935;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23938], null));
} else {
var e = e23935;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23938))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23939){
var map__23946 = p__23939;
var map__23946__$1 = ((((!((map__23946 == null)))?((((map__23946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23946):map__23946);
var opts = map__23946__$1;
var build_id = cljs.core.get.call(null,map__23946__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23946,map__23946__$1,opts,build_id){
return (function (p__23948){
var vec__23949 = p__23948;
var map__23950 = cljs.core.nth.call(null,vec__23949,(0),null);
var map__23950__$1 = ((((!((map__23950 == null)))?((((map__23950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23950):map__23950);
var msg = map__23950__$1;
var msg_name = cljs.core.get.call(null,map__23950__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23949,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23949,map__23950,map__23950__$1,msg,msg_name,_,map__23946,map__23946__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23949,map__23950,map__23950__$1,msg,msg_name,_,map__23946,map__23946__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23946,map__23946__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23956){
var vec__23957 = p__23956;
var map__23958 = cljs.core.nth.call(null,vec__23957,(0),null);
var map__23958__$1 = ((((!((map__23958 == null)))?((((map__23958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23958):map__23958);
var msg = map__23958__$1;
var msg_name = cljs.core.get.call(null,map__23958__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23957,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23960){
var map__23970 = p__23960;
var map__23970__$1 = ((((!((map__23970 == null)))?((((map__23970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);
var on_compile_warning = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23970,map__23970__$1,on_compile_warning,on_compile_fail){
return (function (p__23972){
var vec__23973 = p__23972;
var map__23974 = cljs.core.nth.call(null,vec__23973,(0),null);
var map__23974__$1 = ((((!((map__23974 == null)))?((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var msg = map__23974__$1;
var msg_name = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23973,(1));
var pred__23976 = cljs.core._EQ_;
var expr__23977 = msg_name;
if(cljs.core.truth_(pred__23976.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23977))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23976.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23977))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23970,map__23970__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__,msg_hist,msg_names,msg){
return (function (state_24193){
var state_val_24194 = (state_24193[(1)]);
if((state_val_24194 === (7))){
var inst_24117 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24117)){
var statearr_24195_24241 = state_24193__$1;
(statearr_24195_24241[(1)] = (8));

} else {
var statearr_24196_24242 = state_24193__$1;
(statearr_24196_24242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (20))){
var inst_24187 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24197_24243 = state_24193__$1;
(statearr_24197_24243[(2)] = inst_24187);

(statearr_24197_24243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (27))){
var inst_24183 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24198_24244 = state_24193__$1;
(statearr_24198_24244[(2)] = inst_24183);

(statearr_24198_24244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (1))){
var inst_24110 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24110)){
var statearr_24199_24245 = state_24193__$1;
(statearr_24199_24245[(1)] = (2));

} else {
var statearr_24200_24246 = state_24193__$1;
(statearr_24200_24246[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (24))){
var inst_24185 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24201_24247 = state_24193__$1;
(statearr_24201_24247[(2)] = inst_24185);

(statearr_24201_24247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (4))){
var inst_24191 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24193__$1,inst_24191);
} else {
if((state_val_24194 === (15))){
var inst_24189 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24202_24248 = state_24193__$1;
(statearr_24202_24248[(2)] = inst_24189);

(statearr_24202_24248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (21))){
var inst_24148 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24203_24249 = state_24193__$1;
(statearr_24203_24249[(2)] = inst_24148);

(statearr_24203_24249[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (31))){
var inst_24172 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24172)){
var statearr_24204_24250 = state_24193__$1;
(statearr_24204_24250[(1)] = (34));

} else {
var statearr_24205_24251 = state_24193__$1;
(statearr_24205_24251[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (32))){
var inst_24181 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24206_24252 = state_24193__$1;
(statearr_24206_24252[(2)] = inst_24181);

(statearr_24206_24252[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (33))){
var inst_24170 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24207_24253 = state_24193__$1;
(statearr_24207_24253[(2)] = inst_24170);

(statearr_24207_24253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (13))){
var inst_24131 = figwheel.client.heads_up.clear.call(null);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(16),inst_24131);
} else {
if((state_val_24194 === (22))){
var inst_24152 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24153 = figwheel.client.heads_up.append_message.call(null,inst_24152);
var state_24193__$1 = state_24193;
var statearr_24208_24254 = state_24193__$1;
(statearr_24208_24254[(2)] = inst_24153);

(statearr_24208_24254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (36))){
var inst_24179 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24209_24255 = state_24193__$1;
(statearr_24209_24255[(2)] = inst_24179);

(statearr_24209_24255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (29))){
var inst_24163 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24210_24256 = state_24193__$1;
(statearr_24210_24256[(2)] = inst_24163);

(statearr_24210_24256[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (6))){
var inst_24112 = (state_24193[(7)]);
var state_24193__$1 = state_24193;
var statearr_24211_24257 = state_24193__$1;
(statearr_24211_24257[(2)] = inst_24112);

(statearr_24211_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (28))){
var inst_24159 = (state_24193[(2)]);
var inst_24160 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24161 = figwheel.client.heads_up.display_warning.call(null,inst_24160);
var state_24193__$1 = (function (){var statearr_24212 = state_24193;
(statearr_24212[(8)] = inst_24159);

return statearr_24212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(29),inst_24161);
} else {
if((state_val_24194 === (25))){
var inst_24157 = figwheel.client.heads_up.clear.call(null);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(28),inst_24157);
} else {
if((state_val_24194 === (34))){
var inst_24174 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(37),inst_24174);
} else {
if((state_val_24194 === (17))){
var inst_24139 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24213_24258 = state_24193__$1;
(statearr_24213_24258[(2)] = inst_24139);

(statearr_24213_24258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (3))){
var inst_24129 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24129)){
var statearr_24214_24259 = state_24193__$1;
(statearr_24214_24259[(1)] = (13));

} else {
var statearr_24215_24260 = state_24193__$1;
(statearr_24215_24260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (12))){
var inst_24125 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24216_24261 = state_24193__$1;
(statearr_24216_24261[(2)] = inst_24125);

(statearr_24216_24261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (2))){
var inst_24112 = (state_24193[(7)]);
var inst_24112__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24193__$1 = (function (){var statearr_24217 = state_24193;
(statearr_24217[(7)] = inst_24112__$1);

return statearr_24217;
})();
if(cljs.core.truth_(inst_24112__$1)){
var statearr_24218_24262 = state_24193__$1;
(statearr_24218_24262[(1)] = (5));

} else {
var statearr_24219_24263 = state_24193__$1;
(statearr_24219_24263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (23))){
var inst_24155 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24155)){
var statearr_24220_24264 = state_24193__$1;
(statearr_24220_24264[(1)] = (25));

} else {
var statearr_24221_24265 = state_24193__$1;
(statearr_24221_24265[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (35))){
var state_24193__$1 = state_24193;
var statearr_24222_24266 = state_24193__$1;
(statearr_24222_24266[(2)] = null);

(statearr_24222_24266[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (19))){
var inst_24150 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24150)){
var statearr_24223_24267 = state_24193__$1;
(statearr_24223_24267[(1)] = (22));

} else {
var statearr_24224_24268 = state_24193__$1;
(statearr_24224_24268[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (11))){
var inst_24121 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24225_24269 = state_24193__$1;
(statearr_24225_24269[(2)] = inst_24121);

(statearr_24225_24269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (9))){
var inst_24123 = figwheel.client.heads_up.clear.call(null);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(12),inst_24123);
} else {
if((state_val_24194 === (5))){
var inst_24114 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24193__$1 = state_24193;
var statearr_24226_24270 = state_24193__$1;
(statearr_24226_24270[(2)] = inst_24114);

(statearr_24226_24270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (14))){
var inst_24141 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24141)){
var statearr_24227_24271 = state_24193__$1;
(statearr_24227_24271[(1)] = (18));

} else {
var statearr_24228_24272 = state_24193__$1;
(statearr_24228_24272[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (26))){
var inst_24165 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24165)){
var statearr_24229_24273 = state_24193__$1;
(statearr_24229_24273[(1)] = (30));

} else {
var statearr_24230_24274 = state_24193__$1;
(statearr_24230_24274[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (16))){
var inst_24133 = (state_24193[(2)]);
var inst_24134 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24135 = figwheel.client.format_messages.call(null,inst_24134);
var inst_24136 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24137 = figwheel.client.heads_up.display_error.call(null,inst_24135,inst_24136);
var state_24193__$1 = (function (){var statearr_24231 = state_24193;
(statearr_24231[(9)] = inst_24133);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(17),inst_24137);
} else {
if((state_val_24194 === (30))){
var inst_24167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24168 = figwheel.client.heads_up.display_warning.call(null,inst_24167);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(33),inst_24168);
} else {
if((state_val_24194 === (10))){
var inst_24127 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24232_24275 = state_24193__$1;
(statearr_24232_24275[(2)] = inst_24127);

(statearr_24232_24275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (18))){
var inst_24143 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24144 = figwheel.client.format_messages.call(null,inst_24143);
var inst_24145 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24146 = figwheel.client.heads_up.display_error.call(null,inst_24144,inst_24145);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(21),inst_24146);
} else {
if((state_val_24194 === (37))){
var inst_24176 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24233_24276 = state_24193__$1;
(statearr_24233_24276[(2)] = inst_24176);

(statearr_24233_24276[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (8))){
var inst_24119 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(11),inst_24119);
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
});})(c__19161__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19049__auto__,c__19161__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____0 = (function (){
var statearr_24237 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24237[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__);

(statearr_24237[(1)] = (1));

return statearr_24237;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____1 = (function (state_24193){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_24193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e24238){if((e24238 instanceof Object)){
var ex__19053__auto__ = e24238;
var statearr_24239_24277 = state_24193;
(statearr_24239_24277[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24278 = state_24193;
state_24193 = G__24278;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__ = function(state_24193){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____1.call(this,state_24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__,msg_hist,msg_names,msg))
})();
var state__19163__auto__ = (function (){var statearr_24240 = f__19162__auto__.call(null);
(statearr_24240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_24240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__,msg_hist,msg_names,msg))
);

return c__19161__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19161__auto___24341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto___24341,ch){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto___24341,ch){
return (function (state_24324){
var state_val_24325 = (state_24324[(1)]);
if((state_val_24325 === (1))){
var state_24324__$1 = state_24324;
var statearr_24326_24342 = state_24324__$1;
(statearr_24326_24342[(2)] = null);

(statearr_24326_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24325 === (2))){
var state_24324__$1 = state_24324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24324__$1,(4),ch);
} else {
if((state_val_24325 === (3))){
var inst_24322 = (state_24324[(2)]);
var state_24324__$1 = state_24324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24324__$1,inst_24322);
} else {
if((state_val_24325 === (4))){
var inst_24312 = (state_24324[(7)]);
var inst_24312__$1 = (state_24324[(2)]);
var state_24324__$1 = (function (){var statearr_24327 = state_24324;
(statearr_24327[(7)] = inst_24312__$1);

return statearr_24327;
})();
if(cljs.core.truth_(inst_24312__$1)){
var statearr_24328_24343 = state_24324__$1;
(statearr_24328_24343[(1)] = (5));

} else {
var statearr_24329_24344 = state_24324__$1;
(statearr_24329_24344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24325 === (5))){
var inst_24312 = (state_24324[(7)]);
var inst_24314 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24312);
var state_24324__$1 = state_24324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24324__$1,(8),inst_24314);
} else {
if((state_val_24325 === (6))){
var state_24324__$1 = state_24324;
var statearr_24330_24345 = state_24324__$1;
(statearr_24330_24345[(2)] = null);

(statearr_24330_24345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24325 === (7))){
var inst_24320 = (state_24324[(2)]);
var state_24324__$1 = state_24324;
var statearr_24331_24346 = state_24324__$1;
(statearr_24331_24346[(2)] = inst_24320);

(statearr_24331_24346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24325 === (8))){
var inst_24316 = (state_24324[(2)]);
var state_24324__$1 = (function (){var statearr_24332 = state_24324;
(statearr_24332[(8)] = inst_24316);

return statearr_24332;
})();
var statearr_24333_24347 = state_24324__$1;
(statearr_24333_24347[(2)] = null);

(statearr_24333_24347[(1)] = (2));


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
});})(c__19161__auto___24341,ch))
;
return ((function (switch__19049__auto__,c__19161__auto___24341,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19050__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19050__auto____0 = (function (){
var statearr_24337 = [null,null,null,null,null,null,null,null,null];
(statearr_24337[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19050__auto__);

(statearr_24337[(1)] = (1));

return statearr_24337;
});
var figwheel$client$heads_up_plugin_$_state_machine__19050__auto____1 = (function (state_24324){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_24324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e24338){if((e24338 instanceof Object)){
var ex__19053__auto__ = e24338;
var statearr_24339_24348 = state_24324;
(statearr_24339_24348[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24349 = state_24324;
state_24324 = G__24349;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19050__auto__ = function(state_24324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19050__auto____1.call(this,state_24324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19050__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19050__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto___24341,ch))
})();
var state__19163__auto__ = (function (){var statearr_24340 = f__19162__auto__.call(null);
(statearr_24340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto___24341);

return statearr_24340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto___24341,ch))
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
var c__19161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19161__auto__){
return (function (){
var f__19162__auto__ = (function (){var switch__19049__auto__ = ((function (c__19161__auto__){
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (1))){
var inst_24365 = cljs.core.async.timeout.call(null,(3000));
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(2),inst_24365);
} else {
if((state_val_24371 === (2))){
var inst_24367 = (state_24370[(2)]);
var inst_24368 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24370__$1 = (function (){var statearr_24372 = state_24370;
(statearr_24372[(7)] = inst_24367);

return statearr_24372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
return null;
}
}
});})(c__19161__auto__))
;
return ((function (switch__19049__auto__,c__19161__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____0 = (function (){
var statearr_24376 = [null,null,null,null,null,null,null,null];
(statearr_24376[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__);

(statearr_24376[(1)] = (1));

return statearr_24376;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____1 = (function (state_24370){
while(true){
var ret_value__19051__auto__ = (function (){try{while(true){
var result__19052__auto__ = switch__19049__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19052__auto__;
}
break;
}
}catch (e24377){if((e24377 instanceof Object)){
var ex__19053__auto__ = e24377;
var statearr_24378_24380 = state_24370;
(statearr_24378_24380[(5)] = ex__19053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24381 = state_24370;
state_24370 = G__24381;
continue;
} else {
return ret_value__19051__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19050__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19050__auto__;
})()
;})(switch__19049__auto__,c__19161__auto__))
})();
var state__19163__auto__ = (function (){var statearr_24379 = f__19162__auto__.call(null);
(statearr_24379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19161__auto__);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19163__auto__);
});})(c__19161__auto__))
);

return c__19161__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24382){
var map__24389 = p__24382;
var map__24389__$1 = ((((!((map__24389 == null)))?((((map__24389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24389):map__24389);
var ed = map__24389__$1;
var formatted_exception = cljs.core.get.call(null,map__24389__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24389__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24389__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24391_24395 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24392_24396 = null;
var count__24393_24397 = (0);
var i__24394_24398 = (0);
while(true){
if((i__24394_24398 < count__24393_24397)){
var msg_24399 = cljs.core._nth.call(null,chunk__24392_24396,i__24394_24398);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24399);

var G__24400 = seq__24391_24395;
var G__24401 = chunk__24392_24396;
var G__24402 = count__24393_24397;
var G__24403 = (i__24394_24398 + (1));
seq__24391_24395 = G__24400;
chunk__24392_24396 = G__24401;
count__24393_24397 = G__24402;
i__24394_24398 = G__24403;
continue;
} else {
var temp__4425__auto___24404 = cljs.core.seq.call(null,seq__24391_24395);
if(temp__4425__auto___24404){
var seq__24391_24405__$1 = temp__4425__auto___24404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24391_24405__$1)){
var c__17643__auto___24406 = cljs.core.chunk_first.call(null,seq__24391_24405__$1);
var G__24407 = cljs.core.chunk_rest.call(null,seq__24391_24405__$1);
var G__24408 = c__17643__auto___24406;
var G__24409 = cljs.core.count.call(null,c__17643__auto___24406);
var G__24410 = (0);
seq__24391_24395 = G__24407;
chunk__24392_24396 = G__24408;
count__24393_24397 = G__24409;
i__24394_24398 = G__24410;
continue;
} else {
var msg_24411 = cljs.core.first.call(null,seq__24391_24405__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24411);

var G__24412 = cljs.core.next.call(null,seq__24391_24405__$1);
var G__24413 = null;
var G__24414 = (0);
var G__24415 = (0);
seq__24391_24395 = G__24412;
chunk__24392_24396 = G__24413;
count__24393_24397 = G__24414;
i__24394_24398 = G__24415;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24416){
var map__24419 = p__24416;
var map__24419__$1 = ((((!((map__24419 == null)))?((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var w = map__24419__$1;
var message = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16828__auto__;
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
var seq__24427 = cljs.core.seq.call(null,plugins);
var chunk__24428 = null;
var count__24429 = (0);
var i__24430 = (0);
while(true){
if((i__24430 < count__24429)){
var vec__24431 = cljs.core._nth.call(null,chunk__24428,i__24430);
var k = cljs.core.nth.call(null,vec__24431,(0),null);
var plugin = cljs.core.nth.call(null,vec__24431,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24433 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24427,chunk__24428,count__24429,i__24430,pl_24433,vec__24431,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24433.call(null,msg_hist);
});})(seq__24427,chunk__24428,count__24429,i__24430,pl_24433,vec__24431,k,plugin))
);
} else {
}

var G__24434 = seq__24427;
var G__24435 = chunk__24428;
var G__24436 = count__24429;
var G__24437 = (i__24430 + (1));
seq__24427 = G__24434;
chunk__24428 = G__24435;
count__24429 = G__24436;
i__24430 = G__24437;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24427);
if(temp__4425__auto__){
var seq__24427__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24427__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__24427__$1);
var G__24438 = cljs.core.chunk_rest.call(null,seq__24427__$1);
var G__24439 = c__17643__auto__;
var G__24440 = cljs.core.count.call(null,c__17643__auto__);
var G__24441 = (0);
seq__24427 = G__24438;
chunk__24428 = G__24439;
count__24429 = G__24440;
i__24430 = G__24441;
continue;
} else {
var vec__24432 = cljs.core.first.call(null,seq__24427__$1);
var k = cljs.core.nth.call(null,vec__24432,(0),null);
var plugin = cljs.core.nth.call(null,vec__24432,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24442 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24427,chunk__24428,count__24429,i__24430,pl_24442,vec__24432,k,plugin,seq__24427__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24442.call(null,msg_hist);
});})(seq__24427,chunk__24428,count__24429,i__24430,pl_24442,vec__24432,k,plugin,seq__24427__$1,temp__4425__auto__))
);
} else {
}

var G__24443 = cljs.core.next.call(null,seq__24427__$1);
var G__24444 = null;
var G__24445 = (0);
var G__24446 = (0);
seq__24427 = G__24443;
chunk__24428 = G__24444;
count__24429 = G__24445;
i__24430 = G__24446;
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
var args24447 = [];
var len__17898__auto___24450 = arguments.length;
var i__17899__auto___24451 = (0);
while(true){
if((i__17899__auto___24451 < len__17898__auto___24450)){
args24447.push((arguments[i__17899__auto___24451]));

var G__24452 = (i__17899__auto___24451 + (1));
i__17899__auto___24451 = G__24452;
continue;
} else {
}
break;
}

var G__24449 = args24447.length;
switch (G__24449) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24447.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__17905__auto__ = [];
var len__17898__auto___24458 = arguments.length;
var i__17899__auto___24459 = (0);
while(true){
if((i__17899__auto___24459 < len__17898__auto___24458)){
args__17905__auto__.push((arguments[i__17899__auto___24459]));

var G__24460 = (i__17899__auto___24459 + (1));
i__17899__auto___24459 = G__24460;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24455){
var map__24456 = p__24455;
var map__24456__$1 = ((((!((map__24456 == null)))?((((map__24456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24456):map__24456);
var opts = map__24456__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24454){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24454));
});

//# sourceMappingURL=client.js.map