// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__18954__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18954__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32565_32573 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32566_32574 = null;
var count__32567_32575 = (0);
var i__32568_32576 = (0);
while(true){
if((i__32568_32576 < count__32567_32575)){
var k_32577 = cljs.core._nth.call(null,chunk__32566_32574,i__32568_32576);
e.setAttribute(cljs.core.name.call(null,k_32577),cljs.core.get.call(null,attrs,k_32577));

var G__32578 = seq__32565_32573;
var G__32579 = chunk__32566_32574;
var G__32580 = count__32567_32575;
var G__32581 = (i__32568_32576 + (1));
seq__32565_32573 = G__32578;
chunk__32566_32574 = G__32579;
count__32567_32575 = G__32580;
i__32568_32576 = G__32581;
continue;
} else {
var temp__4126__auto___32582 = cljs.core.seq.call(null,seq__32565_32573);
if(temp__4126__auto___32582){
var seq__32565_32583__$1 = temp__4126__auto___32582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32565_32583__$1)){
var c__18699__auto___32584 = cljs.core.chunk_first.call(null,seq__32565_32583__$1);
var G__32585 = cljs.core.chunk_rest.call(null,seq__32565_32583__$1);
var G__32586 = c__18699__auto___32584;
var G__32587 = cljs.core.count.call(null,c__18699__auto___32584);
var G__32588 = (0);
seq__32565_32573 = G__32585;
chunk__32566_32574 = G__32586;
count__32567_32575 = G__32587;
i__32568_32576 = G__32588;
continue;
} else {
var k_32589 = cljs.core.first.call(null,seq__32565_32583__$1);
e.setAttribute(cljs.core.name.call(null,k_32589),cljs.core.get.call(null,attrs,k_32589));

var G__32590 = cljs.core.next.call(null,seq__32565_32583__$1);
var G__32591 = null;
var G__32592 = (0);
var G__32593 = (0);
seq__32565_32573 = G__32590;
chunk__32566_32574 = G__32591;
count__32567_32575 = G__32592;
i__32568_32576 = G__32593;
continue;
}
} else {
}
}
break;
}

var seq__32569_32594 = cljs.core.seq.call(null,children);
var chunk__32570_32595 = null;
var count__32571_32596 = (0);
var i__32572_32597 = (0);
while(true){
if((i__32572_32597 < count__32571_32596)){
var ch_32598 = cljs.core._nth.call(null,chunk__32570_32595,i__32572_32597);
e.appendChild(ch_32598);

var G__32599 = seq__32569_32594;
var G__32600 = chunk__32570_32595;
var G__32601 = count__32571_32596;
var G__32602 = (i__32572_32597 + (1));
seq__32569_32594 = G__32599;
chunk__32570_32595 = G__32600;
count__32571_32596 = G__32601;
i__32572_32597 = G__32602;
continue;
} else {
var temp__4126__auto___32603 = cljs.core.seq.call(null,seq__32569_32594);
if(temp__4126__auto___32603){
var seq__32569_32604__$1 = temp__4126__auto___32603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32569_32604__$1)){
var c__18699__auto___32605 = cljs.core.chunk_first.call(null,seq__32569_32604__$1);
var G__32606 = cljs.core.chunk_rest.call(null,seq__32569_32604__$1);
var G__32607 = c__18699__auto___32605;
var G__32608 = cljs.core.count.call(null,c__18699__auto___32605);
var G__32609 = (0);
seq__32569_32594 = G__32606;
chunk__32570_32595 = G__32607;
count__32571_32596 = G__32608;
i__32572_32597 = G__32609;
continue;
} else {
var ch_32610 = cljs.core.first.call(null,seq__32569_32604__$1);
e.appendChild(ch_32610);

var G__32611 = cljs.core.next.call(null,seq__32569_32604__$1);
var G__32612 = null;
var G__32613 = (0);
var G__32614 = (0);
seq__32569_32594 = G__32611;
chunk__32570_32595 = G__32612;
count__32571_32596 = G__32613;
i__32572_32597 = G__32614;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32562){
var G__32563 = cljs.core.first.call(null,seq32562);
var seq32562__$1 = cljs.core.next.call(null,seq32562);
var G__32564 = cljs.core.first.call(null,seq32562__$1);
var seq32562__$2 = cljs.core.next.call(null,seq32562__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32563,G__32564,seq32562__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18809__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18810__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18813__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18809__auto__,prefer_table__18810__auto__,method_cache__18811__auto__,cached_hierarchy__18812__auto__,hierarchy__18813__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18809__auto__,prefer_table__18810__auto__,method_cache__18811__auto__,cached_hierarchy__18812__auto__,hierarchy__18813__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18813__auto__,method_table__18809__auto__,prefer_table__18810__auto__,method_cache__18811__auto__,cached_hierarchy__18812__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32615 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32615.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32615.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_32615.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32615);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32616,st_map){
var map__32620 = p__32616;
var map__32620__$1 = ((cljs.core.seq_QMARK_.call(null,map__32620))?cljs.core.apply.call(null,cljs.core.hash_map,map__32620):map__32620);
var container_el = cljs.core.get.call(null,map__32620__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32620,map__32620__$1,container_el){
return (function (p__32621){
var vec__32622 = p__32621;
var k = cljs.core.nth.call(null,vec__32622,(0),null);
var v = cljs.core.nth.call(null,vec__32622,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32620,map__32620__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32623,dom_str){
var map__32625 = p__32623;
var map__32625__$1 = ((cljs.core.seq_QMARK_.call(null,map__32625))?cljs.core.apply.call(null,cljs.core.hash_map,map__32625):map__32625);
var c = map__32625__$1;
var content_area_el = cljs.core.get.call(null,map__32625__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32626){
var map__32628 = p__32626;
var map__32628__$1 = ((cljs.core.seq_QMARK_.call(null,map__32628))?cljs.core.apply.call(null,cljs.core.hash_map,map__32628):map__32628);
var content_area_el = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_32670){
var state_val_32671 = (state_32670[(1)]);
if((state_val_32671 === (2))){
var inst_32655 = (state_32670[(7)]);
var inst_32664 = (state_32670[(2)]);
var inst_32665 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32666 = ["auto"];
var inst_32667 = cljs.core.PersistentHashMap.fromArrays(inst_32665,inst_32666);
var inst_32668 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32655,inst_32667);
var state_32670__$1 = (function (){var statearr_32672 = state_32670;
(statearr_32672[(8)] = inst_32664);

return statearr_32672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32670__$1,inst_32668);
} else {
if((state_val_32671 === (1))){
var inst_32655 = (state_32670[(7)]);
var inst_32655__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32656 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32657 = ["10px","10px","100%","68px","1.0"];
var inst_32658 = cljs.core.PersistentHashMap.fromArrays(inst_32656,inst_32657);
var inst_32659 = cljs.core.merge.call(null,inst_32658,style);
var inst_32660 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32655__$1,inst_32659);
var inst_32661 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32655__$1,msg);
var inst_32662 = cljs.core.async.timeout.call(null,(300));
var state_32670__$1 = (function (){var statearr_32673 = state_32670;
(statearr_32673[(7)] = inst_32655__$1);

(statearr_32673[(9)] = inst_32661);

(statearr_32673[(10)] = inst_32660);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32670__$1,(2),inst_32662);
} else {
return null;
}
}
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____0 = (function (){
var statearr_32677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32677[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__);

(statearr_32677[(1)] = (1));

return statearr_32677;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____1 = (function (state_32670){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32678){if((e32678 instanceof Object)){
var ex__21797__auto__ = e32678;
var statearr_32679_32681 = state_32670;
(statearr_32679_32681[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32670;
state_32670 = G__32682;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__ = function(state_32670){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____1.call(this,state_32670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_32680 = f__21856__auto__.call(null);
(statearr_32680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__32684 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__32684,(0),null);
var ln = cljs.core.nth.call(null,vec__32684,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32687 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32687,(0),null);
var file_line = cljs.core.nth.call(null,vec__32687,(1),null);
var file_column = cljs.core.nth.call(null,vec__32687,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32687,file_name,file_line,file_column){
return (function (p1__32685_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32685_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32687,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17914__auto__ = file_line;
if(cljs.core.truth_(or__17914__auto__)){
return or__17914__auto__;
} else {
var and__17902__auto__ = cause;
if(cljs.core.truth_(and__17902__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17902__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32689 = figwheel.client.heads_up.ensure_container.call(null);
var map__32689__$1 = ((cljs.core.seq_QMARK_.call(null,map__32689))?cljs.core.apply.call(null,cljs.core.hash_map,map__32689):map__32689);
var content_area_el = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_32736){
var state_val_32737 = (state_32736[(1)]);
if((state_val_32737 === (3))){
var inst_32719 = (state_32736[(7)]);
var inst_32733 = (state_32736[(2)]);
var inst_32734 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32719,"");
var state_32736__$1 = (function (){var statearr_32738 = state_32736;
(statearr_32738[(8)] = inst_32733);

return statearr_32738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32736__$1,inst_32734);
} else {
if((state_val_32737 === (2))){
var inst_32719 = (state_32736[(7)]);
var inst_32726 = (state_32736[(2)]);
var inst_32727 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32728 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32729 = cljs.core.PersistentHashMap.fromArrays(inst_32727,inst_32728);
var inst_32730 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32719,inst_32729);
var inst_32731 = cljs.core.async.timeout.call(null,(200));
var state_32736__$1 = (function (){var statearr_32739 = state_32736;
(statearr_32739[(9)] = inst_32730);

(statearr_32739[(10)] = inst_32726);

return statearr_32739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32736__$1,(3),inst_32731);
} else {
if((state_val_32737 === (1))){
var inst_32719 = (state_32736[(7)]);
var inst_32719__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32720 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32721 = ["0.0"];
var inst_32722 = cljs.core.PersistentHashMap.fromArrays(inst_32720,inst_32721);
var inst_32723 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32719__$1,inst_32722);
var inst_32724 = cljs.core.async.timeout.call(null,(300));
var state_32736__$1 = (function (){var statearr_32740 = state_32736;
(statearr_32740[(7)] = inst_32719__$1);

(statearr_32740[(11)] = inst_32723);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32736__$1,(2),inst_32724);
} else {
return null;
}
}
}
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21794__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21794__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = figwheel$client$heads_up$clear_$_state_machine__21794__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var figwheel$client$heads_up$clear_$_state_machine__21794__auto____1 = (function (state_32736){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32745){if((e32745 instanceof Object)){
var ex__21797__auto__ = e32745;
var statearr_32746_32748 = state_32736;
(statearr_32746_32748[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32749 = state_32736;
state_32736 = G__32749;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21794__auto__ = function(state_32736){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21794__auto____1.call(this,state_32736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21794__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21794__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_32747 = f__21856__auto__.call(null);
(statearr_32747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_32747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21855__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21793__auto__ = ((function (c__21855__auto__){
return (function (state_32781){
var state_val_32782 = (state_32781[(1)]);
if((state_val_32782 === (4))){
var inst_32779 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32781__$1,inst_32779);
} else {
if((state_val_32782 === (3))){
var inst_32776 = (state_32781[(2)]);
var inst_32777 = figwheel.client.heads_up.clear.call(null);
var state_32781__$1 = (function (){var statearr_32783 = state_32781;
(statearr_32783[(7)] = inst_32776);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(4),inst_32777);
} else {
if((state_val_32782 === (2))){
var inst_32773 = (state_32781[(2)]);
var inst_32774 = cljs.core.async.timeout.call(null,(400));
var state_32781__$1 = (function (){var statearr_32784 = state_32781;
(statearr_32784[(8)] = inst_32773);

return statearr_32784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(3),inst_32774);
} else {
if((state_val_32782 === (1))){
var inst_32771 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32781__$1,(2),inst_32771);
} else {
return null;
}
}
}
}
});})(c__21855__auto__))
;
return ((function (switch__21793__auto__,c__21855__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____0 = (function (){
var statearr_32788 = [null,null,null,null,null,null,null,null,null];
(statearr_32788[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__);

(statearr_32788[(1)] = (1));

return statearr_32788;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____1 = (function (state_32781){
while(true){
var ret_value__21795__auto__ = (function (){try{while(true){
var result__21796__auto__ = switch__21793__auto__.call(null,state_32781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21796__auto__;
}
break;
}
}catch (e32789){if((e32789 instanceof Object)){
var ex__21797__auto__ = e32789;
var statearr_32790_32792 = state_32781;
(statearr_32790_32792[(5)] = ex__21797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32793 = state_32781;
state_32781 = G__32793;
continue;
} else {
return ret_value__21795__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__ = function(state_32781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____1.call(this,state_32781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21794__auto__;
})()
;})(switch__21793__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_32791 = f__21856__auto__.call(null);
(statearr_32791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21855__auto__);

return statearr_32791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1443334748315