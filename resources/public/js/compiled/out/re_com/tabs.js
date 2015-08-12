// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns the unique identifier for this tab"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns what should be displayed in the tab"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29846){
var map__29847 = p__29846;
var map__29847__$1 = ((cljs.core.seq_QMARK_.call(null,map__29847))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847):map__29847);
var args = map__29847__$1;
var style = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29847__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29844_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29844_SHARP_));
});})(current,tabs__$1,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29844#","p1__29844#",1057735134,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29844#","p1__29844#",1057735134,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__18875__auto__ = ((function (current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29848(s__29849){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29849__$1 = s__29849;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29849__$1);
if(temp__4126__auto__){
var s__29849__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29849__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__29849__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__29851 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__29850 = (0);
while(true){
if((i__29850 < size__18874__auto__)){
var t = cljs.core._nth.call(null,c__18873__auto__,i__29850);
cljs.core.chunk_append.call(null,b__29851,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29850,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29851,s__29849__$2,temp__4126__auto__,current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29850,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29851,s__29849__$2,temp__4126__auto__,current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__29852 = (i__29850 + (1));
i__29850 = G__29852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29851),re_com$tabs$iter__29848.call(null,cljs.core.chunk_rest.call(null,s__29849__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29851),null);
}
} else {
var t = cljs.core.first.call(null,s__29849__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29849__$2,temp__4126__auto__,current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29849__$2,temp__4126__auto__,current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29848.call(null,cljs.core.rest.call(null,s__29849__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29847,map__29847__$1,args,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18875__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq29845){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29845));
});
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29855){
var map__29856 = p__29855;
var map__29856__$1 = ((cljs.core.seq_QMARK_.call(null,map__29856))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);
var vertical_QMARK_ = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29853_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29853_SHARP_));
});})(current,tabs__$1,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29853#","p1__29853#",-761245264,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29853#","p1__29853#",-761245264,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__18875__auto__ = ((function (current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29857(s__29858){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29858__$1 = s__29858;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29858__$1);
if(temp__4126__auto__){
var s__29858__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29858__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__29858__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__29860 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__29859 = (0);
while(true){
if((i__29859 < size__18874__auto__)){
var t = cljs.core._nth.call(null,c__18873__auto__,i__29859);
cljs.core.chunk_append.call(null,b__29860,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29859,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29860,s__29858__$2,temp__4126__auto__,current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29859,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29860,s__29858__$2,temp__4126__auto__,current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})());

var G__29861 = (i__29859 + (1));
i__29859 = G__29861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29860),re_com$tabs$iter__29857.call(null,cljs.core.chunk_rest.call(null,s__29858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29860),null);
}
} else {
var t = cljs.core.first.call(null,s__29858__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29858__$2,temp__4126__auto__,current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29858__$2,temp__4126__auto__,current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null);
})(),re_com$tabs$iter__29857.call(null,cljs.core.rest.call(null,s__29858__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29856,map__29856__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18875__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq29854){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29854));
});
re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29863){
var map__29864 = p__29863;
var map__29864__$1 = ((cljs.core.seq_QMARK_.call(null,map__29864))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);
var args = map__29864__$1;
var style = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq29862){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29862));
});
re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29866){
var map__29867 = p__29866;
var map__29867__$1 = ((cljs.core.seq_QMARK_.call(null,map__29867))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var args = map__29867__$1;
var style = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var id_fn = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq29865){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29865));
});
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29870){
var map__29871 = p__29870;
var map__29871__$1 = ((cljs.core.seq_QMARK_.call(null,map__29871))?cljs.core.apply.call(null,cljs.core.hash_map,map__29871):map__29871);
var vertical_QMARK_ = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var style = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var id_fn = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var on_change = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"model","model",331153215));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (p1__29868_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29868_SHARP_));
});})(current,tabs__$1,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29868#","p1__29868#",-50447017,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol(null,"id-fn","id-fn",1956754325,null),new cljs.core.Symbol(null,"p1__29868#","p1__29868#",-50447017,null)))),new cljs.core.Symbol(null,"tabs","tabs",860676173,null)))))].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__18875__auto__ = ((function (current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function re_com$tabs$iter__29872(s__29873){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (){
var s__29873__$1 = s__29873;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29873__$1);
if(temp__4126__auto__){
var s__29873__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29873__$2)){
var c__18873__auto__ = cljs.core.chunk_first.call(null,s__29873__$2);
var size__18874__auto__ = cljs.core.count.call(null,c__18873__auto__);
var b__29875 = cljs.core.chunk_buffer.call(null,size__18874__auto__);
if((function (){var i__29874 = (0);
while(true){
if((i__29874 < size__18874__auto__)){
var t = cljs.core._nth.call(null,c__18873__auto__,i__29874);
cljs.core.chunk_append.call(null,b__29875,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29874,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29875,s__29873__$2,temp__4126__auto__,current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29874,id,label,selected_QMARK_,t,c__18873__auto__,size__18874__auto__,b__29875,s__29873__$2,temp__4126__auto__,current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})());

var G__29876 = (i__29874 + (1));
i__29874 = G__29876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29875),re_com$tabs$iter__29872.call(null,cljs.core.chunk_rest.call(null,s__29873__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29875),null);
}
} else {
var t = cljs.core.first.call(null,s__29873__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29873__$2,temp__4126__auto__,current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29873__$2,temp__4126__auto__,current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29872.call(null,cljs.core.rest.call(null,s__29873__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
,null,null));
});})(current,tabs__$1,_,map__29871,map__29871__$1,vertical_QMARK_,style,label_fn,id_fn,on_change,tabs,model))
;
return iter__18875__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq29869){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29869));
});
re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29878){
var map__29879 = p__29878;
var map__29879__$1 = ((cljs.core.seq_QMARK_.call(null,map__29879))?cljs.core.apply.call(null,cljs.core.hash_map,map__29879):map__29879);
var args = map__29879__$1;
var label_fn = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq29877){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29877));
});
re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29881){
var map__29882 = p__29881;
var map__29882__$1 = ((cljs.core.seq_QMARK_.call(null,map__29882))?cljs.core.apply.call(null,cljs.core.hash_map,map__29882):map__29882);
var args = map__29882__$1;
var label_fn = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id_fn = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var tabs = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var model = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate-args-macro","validate-args-macro",-1576181756,null),new cljs.core.Symbol(null,"tabs-args-desc","tabs-args-desc",1399990446,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),"tabs")))].join('')));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq29880){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29880));
});

//# sourceMappingURL=tabs.js.map?rel=1439021444970