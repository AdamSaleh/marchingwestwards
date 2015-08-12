// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__31011_31023 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31012_31024 = null;
var count__31013_31025 = (0);
var i__31014_31026 = (0);
while(true){
if((i__31014_31026 < count__31013_31025)){
var f_31027 = cljs.core._nth.call(null,chunk__31012_31024,i__31014_31026);
cljs.core.println.call(null,"  ",f_31027);

var G__31028 = seq__31011_31023;
var G__31029 = chunk__31012_31024;
var G__31030 = count__31013_31025;
var G__31031 = (i__31014_31026 + (1));
seq__31011_31023 = G__31028;
chunk__31012_31024 = G__31029;
count__31013_31025 = G__31030;
i__31014_31026 = G__31031;
continue;
} else {
var temp__4126__auto___31032 = cljs.core.seq.call(null,seq__31011_31023);
if(temp__4126__auto___31032){
var seq__31011_31033__$1 = temp__4126__auto___31032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31011_31033__$1)){
var c__18906__auto___31034 = cljs.core.chunk_first.call(null,seq__31011_31033__$1);
var G__31035 = cljs.core.chunk_rest.call(null,seq__31011_31033__$1);
var G__31036 = c__18906__auto___31034;
var G__31037 = cljs.core.count.call(null,c__18906__auto___31034);
var G__31038 = (0);
seq__31011_31023 = G__31035;
chunk__31012_31024 = G__31036;
count__31013_31025 = G__31037;
i__31014_31026 = G__31038;
continue;
} else {
var f_31039 = cljs.core.first.call(null,seq__31011_31033__$1);
cljs.core.println.call(null,"  ",f_31039);

var G__31040 = cljs.core.next.call(null,seq__31011_31033__$1);
var G__31041 = null;
var G__31042 = (0);
var G__31043 = (0);
seq__31011_31023 = G__31040;
chunk__31012_31024 = G__31041;
count__31013_31025 = G__31042;
i__31014_31026 = G__31043;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__31015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31016 = null;
var count__31017 = (0);
var i__31018 = (0);
while(true){
if((i__31018 < count__31017)){
var vec__31019 = cljs.core._nth.call(null,chunk__31016,i__31018);
var name = cljs.core.nth.call(null,vec__31019,(0),null);
var map__31020 = cljs.core.nth.call(null,vec__31019,(1),null);
var map__31020__$1 = ((cljs.core.seq_QMARK_.call(null,map__31020))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);
var arglists = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31044 = seq__31015;
var G__31045 = chunk__31016;
var G__31046 = count__31017;
var G__31047 = (i__31018 + (1));
seq__31015 = G__31044;
chunk__31016 = G__31045;
count__31017 = G__31046;
i__31018 = G__31047;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31015);
if(temp__4126__auto__){
var seq__31015__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31015__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__31015__$1);
var G__31048 = cljs.core.chunk_rest.call(null,seq__31015__$1);
var G__31049 = c__18906__auto__;
var G__31050 = cljs.core.count.call(null,c__18906__auto__);
var G__31051 = (0);
seq__31015 = G__31048;
chunk__31016 = G__31049;
count__31017 = G__31050;
i__31018 = G__31051;
continue;
} else {
var vec__31021 = cljs.core.first.call(null,seq__31015__$1);
var name = cljs.core.nth.call(null,vec__31021,(0),null);
var map__31022 = cljs.core.nth.call(null,vec__31021,(1),null);
var map__31022__$1 = ((cljs.core.seq_QMARK_.call(null,map__31022))?cljs.core.apply.call(null,cljs.core.hash_map,map__31022):map__31022);
var arglists = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31052 = cljs.core.next.call(null,seq__31015__$1);
var G__31053 = null;
var G__31054 = (0);
var G__31055 = (0);
seq__31015 = G__31052;
chunk__31016 = G__31053;
count__31017 = G__31054;
i__31018 = G__31055;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1439021446841