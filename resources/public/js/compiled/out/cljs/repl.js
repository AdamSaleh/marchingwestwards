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
var seq__32808_32820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32809_32821 = null;
var count__32810_32822 = (0);
var i__32811_32823 = (0);
while(true){
if((i__32811_32823 < count__32810_32822)){
var f_32824 = cljs.core._nth.call(null,chunk__32809_32821,i__32811_32823);
cljs.core.println.call(null,"  ",f_32824);

var G__32825 = seq__32808_32820;
var G__32826 = chunk__32809_32821;
var G__32827 = count__32810_32822;
var G__32828 = (i__32811_32823 + (1));
seq__32808_32820 = G__32825;
chunk__32809_32821 = G__32826;
count__32810_32822 = G__32827;
i__32811_32823 = G__32828;
continue;
} else {
var temp__4126__auto___32829 = cljs.core.seq.call(null,seq__32808_32820);
if(temp__4126__auto___32829){
var seq__32808_32830__$1 = temp__4126__auto___32829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32808_32830__$1)){
var c__18699__auto___32831 = cljs.core.chunk_first.call(null,seq__32808_32830__$1);
var G__32832 = cljs.core.chunk_rest.call(null,seq__32808_32830__$1);
var G__32833 = c__18699__auto___32831;
var G__32834 = cljs.core.count.call(null,c__18699__auto___32831);
var G__32835 = (0);
seq__32808_32820 = G__32832;
chunk__32809_32821 = G__32833;
count__32810_32822 = G__32834;
i__32811_32823 = G__32835;
continue;
} else {
var f_32836 = cljs.core.first.call(null,seq__32808_32830__$1);
cljs.core.println.call(null,"  ",f_32836);

var G__32837 = cljs.core.next.call(null,seq__32808_32830__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__32808_32820 = G__32837;
chunk__32809_32821 = G__32838;
count__32810_32822 = G__32839;
i__32811_32823 = G__32840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17914__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
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
var seq__32812 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32813 = null;
var count__32814 = (0);
var i__32815 = (0);
while(true){
if((i__32815 < count__32814)){
var vec__32816 = cljs.core._nth.call(null,chunk__32813,i__32815);
var name = cljs.core.nth.call(null,vec__32816,(0),null);
var map__32817 = cljs.core.nth.call(null,vec__32816,(1),null);
var map__32817__$1 = ((cljs.core.seq_QMARK_.call(null,map__32817))?cljs.core.apply.call(null,cljs.core.hash_map,map__32817):map__32817);
var arglists = cljs.core.get.call(null,map__32817__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__32817__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32841 = seq__32812;
var G__32842 = chunk__32813;
var G__32843 = count__32814;
var G__32844 = (i__32815 + (1));
seq__32812 = G__32841;
chunk__32813 = G__32842;
count__32814 = G__32843;
i__32815 = G__32844;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32812);
if(temp__4126__auto__){
var seq__32812__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32812__$1)){
var c__18699__auto__ = cljs.core.chunk_first.call(null,seq__32812__$1);
var G__32845 = cljs.core.chunk_rest.call(null,seq__32812__$1);
var G__32846 = c__18699__auto__;
var G__32847 = cljs.core.count.call(null,c__18699__auto__);
var G__32848 = (0);
seq__32812 = G__32845;
chunk__32813 = G__32846;
count__32814 = G__32847;
i__32815 = G__32848;
continue;
} else {
var vec__32818 = cljs.core.first.call(null,seq__32812__$1);
var name = cljs.core.nth.call(null,vec__32818,(0),null);
var map__32819 = cljs.core.nth.call(null,vec__32818,(1),null);
var map__32819__$1 = ((cljs.core.seq_QMARK_.call(null,map__32819))?cljs.core.apply.call(null,cljs.core.hash_map,map__32819):map__32819);
var arglists = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32849 = cljs.core.next.call(null,seq__32812__$1);
var G__32850 = null;
var G__32851 = (0);
var G__32852 = (0);
seq__32812 = G__32849;
chunk__32813 = G__32850;
count__32814 = G__32851;
i__32815 = G__32852;
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

//# sourceMappingURL=repl.js.map?rel=1443334748413