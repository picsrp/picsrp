/** * Twitter - http://www.twitter.com
 * Copyright (C) 2009 Twitter
 * Author: Dustin Diaz (dustin@twitter.com)
 * V 2.1.1 Twitter search/profile/faves/list widget
 * http://twitter.com/widgets */

if(!"console" in window){
window.console={log:function(){
}}}TWTR=window.TWTR||{};

if(!Array.forEach){
Array.prototype.forEach=function(D,E){
var C=E||window;for(var B=0,A=this.length;B<A;++B){
D.call(C,
this[B],B,
this)}};

Array.prototype.filter=function(E,F){
var D=F||window;
var A=[];for(var C=0,B=this.length;C<B;++C){
if(!E.call(D,
this[C],C,
this)){
continue}A.push(this[C])}return A};

Array.prototype.indexOf=function(B,C){
var C=C||0;for(var A=0;A<this.length;++A){
if(this[A]===B){
return A}}return -1}}(function(){
if(TWTR&&TWTR.Widget){
return }function A(B,D,C){
this.el=B;
this.prop=D;
this.from=C.from;
this.to=C.to;
this.time=C.time;
this.callback=C.callback;
this.animDiff=this.to-this.from}A.canTransition=function(){
var B=document.createElement("twitter");
B.style.cssText="-webkit-transition: all .5s linear;";
return !!B.style.webkitTransitionProperty}();
A.prototype._setStyle=function(B){
switch(this.prop){
case"opacity":this.el.style[this.prop]=B;
this.el.style.filter="alpha(opacity="+B*100+")";break;default:this.el.style[this.prop]=B+"px";break}};

A.prototype._animate=function(){
var B=this;
this.now=new Date();
this.diff=this.now-this.startTime;
if(this.diff>this.time){
this._setStyle(this.to);
if(this.callback){
this.callback.call(this)}clearInterval(this.timer);
return }this.percentage=(Math.floor((this.diff/this.time)*100)/100);
this.val=(this.animDiff*this.percentage)+this.from;
this._setStyle(this.val)};

A.prototype.start=function(){
var B=this;
this.startTime=new Date();
this.timer=setInterval(function(){
B._animate.call(B)}
,15)};

TWTR.Widget=function(B){
this.init(B)};

(function(){
var N={};

var a={};

var Y=function(d){
var b=a[d];
if(!b){
	b=new RegExp("(?:^|\\s+)"+d+"(?:\\s+|$)");
	a[d]=b}return b};

var C=function(g,l,h,j){
var l=l||"*";
var h=h||document;
var d=[],b=h.getElementsByTagName(l),k=Y(g);
for(var e=0,f=b.length;e<f;++e){
if(k.test(b[e].className)){
d[d.length]=b[e];
if(j){
j.call(b[e],b[e])}}}return d};

var Z=function(){
var b=navigator.userAgent;
return{ie:b.match(/MSIE\s([^;]*)/)}}();
var G=function(b){
if(typeof b=="string"){
	return document.getElementById(b)}
return b};

var S=function(b){
return b.replace(/^\s+|\s+$/g,"")};

var R=function(){
var b=self.innerHeight;
var c=document.compatMode;
if((c||Z.ie)){
b=(c=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight}
return b};

var X=function(d,b){
var c=d.target||d.srcElement;
return b(c)};
var P=function(c){
try{	if(c&&3==c.nodeType){
return c.parentNode
	}else{return c}}
catch(b){
}};
var Q=function(c){
var b=c.relatedTarget;
if(!b){
	if(c.type=="mouseout"){
b=c.toElement
	}else{
	if(c.type=="mouseover"){
b=c.fromElement}
	}}return P(b)};
var U=function(c,b){
b.parentNode.insertBefore(c,b.nextSibling)};
var V=function(c){
try{c.parentNode.removeChild(c)}catch(b){
}};
var T=function(b){
return b.firstChild};
var B=function(d){
var c=Q(d);
while(c&&c!=this){
		try{c=c.parentNode}
	catch(b){
		c=this}
		}
if(c!=this){
			return true}
		return false};
var F=function(){
if(document.defaultView&&document.defaultView.getComputedStyle){
return function(c,f){
var e=null;
var d=document.defaultView.getComputedStyle(c,"");
if(d){
e=d[f]}var b=c.style[f]||e;
return b}
	}else{if(document.documentElement.currentStyle&&Z.ie){
return function(b,d){
var c=b.currentStyle?b.currentStyle[d]:null;
return(b.style[d]||c)}}}}();
var W={has:function(b,d){
return new RegExp("(^|\\s)"+d+"(\\s|$)").test(G(b).className)}
,add:function(b,d){
if(!this.has(b,d)){
G(b).className=S(G(b).className)+" "+d}}
,remove:function(b,d){
if(this.has(b,d)){
G(b).className=G(b).className.replace(new RegExp("(^|\\s)"+d+"(\\s|$)","g"),"")}}};

var D={add:function(d,c,b){
if(d.addEventListener){
d.addEventListener(c,b,false)
	}else{d.attachEvent("on"+c,function(){
b.call(d,window.event)})}}
,remove:function(d,c,b){
if(d.removeEventListener){
d.removeEventListener(c,b,false)
	}else{d.detachEvent("on"+c,b)}}};

var H={bool:function(c){
return typeof c==="boolean"}
,def:function(b){
return !(typeof b==="undefined")}
,number:function(b){
return typeof b==="number"&&isFinite(b)}
,string:function(b){
return typeof b==="string"}
,fn:function(b){
return typeof b==="function"}
,array:function(b){
if(b){
return H.number(b.length)&&H.fn(b.splice)}return false}};

var L=["January","February","March","April","May","June","July","August","September","October","November","December"];
var O=function(f){
var i=new Date(f);
if(Z.ie){
i=Date.parse(f.replace(/( \+)/," UTC$1"))}
var c="";
var b=function(){
	var d=i.getHours();
	if(d>0&&d<13){
		c="am";
		return d
	}else{if(d<1){
		c="am";
		return 12
	}else{c="pm";
return d-12}}}();
var e=i.getMinutes();
var h=i.getSeconds();
function g(){
	var d=new Date();
	if(  d.getDate() !=i.getDate()
		||d.getYear() !=i.getYear()
		||d.getMonth()!=i.getMonth())
		{return" - "+L[i.getMonth()]+" "+i.getDate()+", "+i.getFullYear()
		}else{return""}}
return b+":"+e+c+g()};

var J=function(h){
var j=new Date();
var f=new Date(h);
if(Z.ie){
	f=Date.parse(h.replace(/( \+)/," UTC$1"))}
var i=j-f;
var c=1000,d=c*60,e=d*60,g=e*24,b=g*7;
if(isNaN(i)||i<0){return""}
if(i<c*7){return"right now"}
if(i<d){return Math.floor(i/c)+" seconds ago"}
if(i<d*2){return"~ minute ago"}
if(i<e){return Math.floor(i/d)+" minutes ago"}
if(i<e*2){return"~ hour ago"}
if(i<g){return Math.floor(i/e)+" hours ago"}
if(i>g&&i<g*2){return"yesterday"}
if(i<g*365){return Math.floor(i/g)+" days ago"
	}else{	return" years ago"}};

var E={link:function(b){
	return b.replace(/\b(((https*\:\/\/)|www\.).+?)(([!?,.\)]+)?(\s|$))/g
,function(h,g,e,d,c){
	var f=e.match(/w/)?"http://":"";
	return '<a class="twtr-hyperlink" target="_blank" href="'
		+f+g+'">'
		+((g.length>25)?g.substr(0,24)+"...":g)	+"</a>"+c})}
,at:function(b){
	return b.replace(/\B\@([a-zA-Z0-9_]{1,20})/g
,function(c,d){
	return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+d+'">'+d+"</a>"})}
,list:function(b){
	return b.replace(/\B\@([a-zA-Z0-9_]{1,20}\/\w+)/g
,function(c,d){
	return'@<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+d+'">'+d+"</a>"})}
,hash:function(b){
	return b.replace(/\B\#(\w+)/gi
,function(c,d){
	return'<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23'+d+'">#'+d+"</a>"})}
,clean:function(b){
	return this.hash(this.at(this.list(this.link(b))))}};

function M(c,d,b){
	this.job=c;
	this.decayFn=d;
	this.interval=b;
	this.decayRate=1;
	this.decayMultiplier=1.25;
	this.maxDecayTime=3*60*1000}M.prototype={start:function(){
	this.stop().run();
return this}
,stop:function(){
	if(this.worker){
		window.clearTimeout(this.worker)}return this}
,run:function(){
var b=this;
this.job(function(){
b.decayRate=b.decayFn()?Math.max(1,b.decayRate/b.decayMultiplier):b.decayRate*b.decayMultiplier;
var c=b.interval*b.decayRate;
c=(c>=b.maxDecayTime)?b.maxDecayTime:c;
c=Math.floor(c);
b.worker=window.setTimeout(function(){
b.run.call(b)}
,c)})}
,destroy:function(){
	this.stop();
	this.decayRate=1;
return this}};

function I(c,d,b,e){
	this.time=d||6000;
	this.loop=b||false;
	this.repeated=0;
	this.total=c.length;
	this.callback=e;
	this.haystack=c}
I.prototype={start:function(b){
	var c=this;
	if(b){
		this.repeated=0}this.stop()._job();
		this.timer=window.setInterval(function(){
		c._job.call(c)}
,
	this.time);
	return this}
,stop:function(){
		if(this.timer){
			window.clearInterval(this.timer)}return this}
	,_job:function(){
if(this.repeated===this.total){
if(this.loop){
this.repeated=0
	}else{this.stop();
return }}this.callback(this.haystack[this.repeated]);
this.repeated++;
return this}};

/*
	+c.avatar+"%"
	+c.timestamp+"%"
	+c.user+"%"
	+c.id+"%"
*/

function K(c){
var b=	'<div class="twtr-tweet-wrap">         <div class="twtr-avatar">           <div class="twtr-img"><a target="_blank" href="http://twitter.com/'
	+c.user+'"><img alt="'
	+c.user+' profile" src="'
	+c.avatar+'"></a></div>         </div>         <div class="twtr-tweet-text">           <p>             <a target="_blank" href="http://twitter.com/'
	+c.user+'" class="twtr-user">'

	+c.user+"</a> "

/*
TweitKu http://a1.twimg.com/profile_images/215202978/real_normal.jpg%+c.avatar
Wed Jan 20 21:55:21 +0000 2010	%+c.timestamp
TweitKu	%+c.user
8001344337	%+c.id

http://twitter.com/search?q=%3Cbr/%3E23joke
*/

/* ghh 10/1/21:*/
+((0<=c.tweet.indexOf('%')) ? c.tweet.replace(/\%/g,"<br/>"):((1<c.tweet.indexOf('\\'))? c.tweet.replace(/\\/g,"<br/>") : ( (0>c.tweet.indexOf('http')) ? c.tweet.replace(/\//g,"<br/>") : c.tweet ) ))

	
	+'             <i>            <a target="_blank" class="twtr-timestamp" time="'
	
	+c.timestamp+'" href="http://twitter.com/'
	+c.user+"/status/"
	+c.id+'">'

	+c.created_at+'</a>             <a target="_blank" class="twtr-reply" href="http://twitter.com/?status=@'
	+c.user+"%20&in_reply_to_status_id="
	+c.id+"&in_reply_to="
	+c.user+'">reply</a>             </i>           </p>         </div>       </div>';

var d=document.createElement("div");
d.id="tweet-id-"+ ++K._tweetCount;
d.className="twtr-tweet";d.innerHTML=b;
this.element=d}K._tweetCount=0;
N.loadStyleSheet=function(d,c){
if(!TWTR.Widget.loadingStyleSheet){
	TWTR.Widget.loadingStyleSheet=true;
	var b=document.createElement("link");
	b.href=d;b.rel="stylesheet";
	b.type="text/css";
	document.getElementsByTagName("head")[0].appendChild(b);
	var e=setInterval(function(){
		var f=F(c,"position");
	if(f=="relative"){
		clearInterval(e);
		TWTR.Widget.hasLoadedStyleSheet=true}}
,50)}};
(function(){
	var b=false;N.css=function(e){
	var d=document.createElement("style");
	d.type="text/css";
	if(Z.ie){
		d.styleSheet.cssText=e
	}else{	var f=document.createDocumentFragment();
		f.appendChild(document.createTextNode(e));
		d.appendChild(f)}function c(){
			document.getElementsByTagName("head")[0].appendChild(d)}
			if(!Z.ie||b){
				c()
			}else{	window.attachEvent("onload",function(){
b=true;c()})}}})();

TWTR.Widget.isLoaded=false;
TWTR.Widget.loadingStyleSheet=false;
TWTR.Widget.hasLoadedStyleSheet=false;
TWTR.Widget.WIDGET_NUMBER=0;
TWTR.Widget.matches={mentions:/^@[a-zA-Z0-9_]{1,20}\b/,any_mentions:/\b@[a-zA-Z0-9_]{1,20}\b/};

TWTR.Widget.jsonP=function(c,d){
	var b=document.createElement("script");
	b.type="text/javascript";
	b.src=c;document.getElementsByTagName("head")[0].appendChild(b);
	d(b);
return b};

TWTR.Widget.prototype=function(){
	var f="http://search.twitter.com/search.";
	var g="http://twitter.com/statuses/user_timeline.";
	var d="http://twitter.com/favorites/";
	var e="http://twitter.com/";
	var c=20000;
	var b="http://widgets.twimg.com/j/1/default.gif";
return{init:function(i){
	var h=this;
	this._widgetNumber=++TWTR.Widget.WIDGET_NUMBER;
	TWTR.Widget["receiveCallback_"
	+this._widgetNumber]=function(j){
h._prePlay.call(h,j)};

this._cb="TWTR.Widget.receiveCallback_"+this._widgetNumber;
this.opts=i;
this._base=f;
this._isRunning=false;
this._hasOfficiallyStarted=false;
this._rendered=false;
this._profileImage=false;
this._isCreator=!!i.creator;
this._setWidgetType(i.type);
this.timesRequested=0;
this.runOnce=false;
this.newResults=false;
this.results=[];
this.jsonMaxRequestTimeOut=19000;
this.showedResults=[];
this.sinceId=1;
this.source="TWITTERINC_WIDGET";
this.id=i.id||"twtr-widget-"+this._widgetNumber;
this.tweets=0;
this.setDimensions(i.width,i.height);
this.interval=i.interval||6000;
this.format="json";
this.rpp=i.rpp||50;
this.subject=i.subject||"";
this.title=i.title||"";
this.setFooterText(i.footer);
this.setSearch(i.search);
this._setUrl();
this.theme=i.theme?i.theme:this._getDefaultTheme();
if(!i.id){
	document.write('<div class="twtr-widget" id="'
	+this.id
	+'"></div>')}
	this.widgetEl=G(this.id);
if(i.id){
	W.add(this.widgetEl,"twtr-widget")}
if(i.version>=2&&!TWTR.Widget.hasLoadedStyleSheet){
	N.loadStyleSheet("http://widgets.twimg.com/j/2/widget.css",
	this.widgetEl)}
this.occasionalJob=new M(function(j){
	h.decay=j;
	h._getResults.call(h)}
,function(){
	return h._decayDecider.call(h)}
,c);
	this._ready=H.fn(i.ready)?i.ready:function(){
};

this._isRelativeTime=true;
this._tweetFilter=false;
this._avatars=true;
this._isFullScreen=false;
this._isLive=true;
this._isScroll=false;
this._loop=true;
this._behavior="default";
this.setFeatures(this.opts.features);
return this}
,

setDimensions:function(i,j){
	this.wh=(i&&j)?[i,j]:[250,300];
	if(i=="auto"||i=="100%"){
		this.wh[0]="100%"
	}else{
		this.wh[0]=((this.wh[0]<150)?150:this.wh[0])+"px"}
this.wh[1]=((this.wh[1]<100)?100:this.wh[1])+"px";
return this}
,
setRpp:function(h){
var h=parseInt(h);
this.rpp=(H.number(h)&&(h>0&&h<=100))?h:30;
return this}
,

_setWidgetType:function(h){
	this._isSearchWidget=false,
	this._isProfileWidget=false,
	this._isFavsWidget=false,
	this._isListWidget=false;
	switch(h){
	case"profile":this._isProfileWidget=true;
	break;
	case"search":this._isSearchWidget=true
		,this.search=this.opts.search;
	break;
	case"faves":
	case"favs":this._isFavsWidget=true;
	break;
	case"list":
	case"lists":this._isListWidget=true;
	break}
return this}

,setFeatures:function(h){
if(h){
	if(H.def(h.filters)){
		this._tweetFilter=h.filters}
	if(H.def(h.dateformat)){
		this._isRelativeTime=!!(h.dateformat!=="absolute")}
	if(H.def(h.fullscreen)&&H.bool(h.fullscreen)){
		if(h.fullscreen){
			this._isFullScreen=true;
			this.wh[0]="100%";
			this.wh[1]=(R()-90)+"px";
			var i=this;
			D.add(window,"resize",function(l){
				i.wh[1]=R();
				i._fullScreenResize()})}}
	if(H.def(h.loop)&&H.bool(h.loop)){
		this._loop=h.loop}
	if(H.def(h.behavior)&&H.string(h.behavior)){
		switch(h.behavior){
		case"all":this._behavior="all";
		break;default:this._behavior="default";
		break}}
	if(H.def(h.avatars)&&H.bool(h.avatars)){
		if(!h.avatars){
			N.css(	"#"
+this.id
			+" .twtr-avatar, #"
+this.id
			+" .twtr-user { display: none; } #"
+this.id
			+" .twtr-tweet-text { margin-left: 0; }");
this._avatars=false
	}else{
	var j=(this._isFullScreen)?"90px":"40px";
	N.css("#"
		+this.id+" .twtr-avatar { display: block; } #"
		+this.id+" .twtr-user { display: inline; } #"
		+this.id+" .twtr-tweet-text { margin-left: "+j+"; }");
this._avatars=true}
	}else{
		if(this._isProfileWidget){
			this.setFeatures({avatars:false});
			this._avatars=false
		}else{this.setFeatures({avatars:true});
			this._avatars=true}}
if(H.def(h.hashtags)&&H.bool(h.hashtags)){
	(!h.hashtags)?N.css("#"
		+this.id+" a.twtr-hashtag { display: none; }"):""}
if(H.def(h.timestamp)&&H.bool(h.timestamp)){
	var k=h.timestamp?"block":"none";N.css("#"
		+this.id+" i { display: "+k+"; }")}
if(H.def(h.live)&&H.bool(h.live)){
	this._isLive=h.live}
if(H.def(h.scrollbar)&&H.bool(h.scrollbar)){
	this._isScroll=h.scrollbar}
}else{if(this._isProfileWidget){
	this.setFeatures({avatars:false});
	this._avatars=false}
if(this._isProfileWidget||this._isFavsWidget){
	this.setFeatures({behavior:"all"})}}
return this}

,_fullScreenResize:function(){
	var h=C("twtr-timeline","div",document.body,function(i){
		i.style.height=(R()-90)+"px"})}

,setTweetInterval:function(h){
this.interval=h;
return this}

,setBase:function(h){
this._base=h;
return this}

,setUser:function(i,h){
	this.username=i;
	this.realname=h||" ";
	if(this._isFavsWidget){
		this.setBase(d+i+".")
	}else{if(this._isProfileWidget){
		this.setBase(g+this.format+"?screen_name="+i)}}

this.setSearch(" ");
return this}
,setList:function(i,h){
	this.listslug=h.replace(/ /g,"-").toLowerCase();
	this.username=i;
	this.setBase(e+i+"/lists/"+this.listslug+"/statuses.");
	this.setSearch(" ");
return this}

,setProfileImage:function(h){
	this._profileImage=h;
	this.byClass("twtr-profile-img","img").src=h;
	this.byClass("twtr-profile-img-anchor","a").href="http://twitter.com/"+this.username;
return this}

,setTitle:function(h){
	this.title=h;
	this.widgetEl.getElementsByTagName("h3")[0].innerHTML=this.title;
return this}

,setCaption:function(h){
	this.subject=h;
	this.widgetEl.getElementsByTagName("h4")[0].innerHTML=this.subject;
return this}

,setFooterText:function(h){
	this.footerText=(H.def(h)&&H.string(h))?h:"Join the conversation";
	if(this._rendered){
		this.byClass("twtr-join-conv","a").innerHTML=this.footerText}return this}

,setSearch:function(i){
	this.searchString=i||"";
	this.s=this.searchString.replace(" ","+");
	this.search=escape("-RT "+this.s);
	this._setUrl();
	if(this._rendered){
		var h=this.byClass("twtr-join-conv","a");
		h.href="http://twitter.com/"+this._getWidgetPath()}return this}

,_getWidgetPath:function(){
	if(this._isProfileWidget){
		return this.username
	}else{if(this._isFavsWidget){
		return this.username+"/favorites"
	}else{if(this._isListWidget){
		return this.username+"/lists/"+this.listslug
	}else{return"#search?q="+this.search}}}}

,_setUrl:function(){
	var h=this;function i(){
	return(h.sinceId==1)?"":"&since_id="+h.sinceId+"&refresh=true"}
if(this._isProfileWidget){
		this.url=
			this._base+"&callback="
			+this._cb+"&count="
			+this.rpp+i()+"&clientsource="
			+this.source
	}else{if(this._isFavsWidget||this._isListWidget){
		this.url=this._base
		+this.format+"?callback="
		+this._cb+i()+"&clientsource="
		+this.source
	}else{this.url=this._base
		+this.format+"?q="
		+this.search+"&callback="
		+this._cb+"&rpp="
		+this.rpp+i()+"&clientsource="
		+this.source}}
return this}

,setTheme:function(m,h){
	var k=this;
	var i=" !important";
	var l=((window.location.hostname.match(/twitter\.com/))&&(window.location.pathname.match(/goodies/)));
	if(h||l){i=""}
	this.theme={shell:{background:function(){
	return m.shell.background||k._getDefaultTheme().shell.background}(),color:function(){
	return m.shell.color||k._getDefaultTheme().shell.color}()}

,tweets:{background:function(){
	return m.tweets.background
	||k._getDefaultTheme().tweets.background}(),color:function(){
	return m.tweets.color
	||k._getDefaultTheme().tweets.color}()
,links:function(){
	return m.tweets.links
	||k._getDefaultTheme().tweets.links}()}};

var j="#"
	+this.id+" .twtr-doc,                      #"
	+this.id+" .twtr-hd a,                      #"
	+this.id+" h3,                      #"
	+this.id+" h4 {            background: "+this.theme.shell.background+i+";            color: "+this.theme.shell.color+i+";          }          #"
	+this.id+" .twtr-tweet a {            color: "+this.theme.tweets.links+i+";          }          #"
	+this.id+" .twtr-bd, #"
	+this.id+" .twtr-timeline i a,           #"
	+this.id+" .twtr-bd p {            color: "+this.theme.tweets.color+i+";          }          #"
	+this.id+" .twtr-new-results,           #"
	+this.id+" .twtr-results-inner,           #"
	+this.id+" .twtr-timeline {            background: "+this.theme.tweets.background+i+";          }";

if(Z.ie){
	j+="#"
		+this.id+" .twtr-tweet { background: "+this.theme.tweets.background+i+"; }"}
	N.css(j);
return this}

,byClass:function(k,h,i){
	var j=C(k,h,G(this.id));
	return(i)?j:j[0]}

,render:function(){
	var j=this;
	if(!TWTR.Widget.hasLoadedStyleSheet){
		window.setTimeout(function(){
			j.render.call(j)}
			,50);
return this}

this.setTheme(this.theme,
	this._isCreator);

if(this._isProfileWidget){
	W.add(this.widgetEl,"twtr-widget-profile")}
if(this._isScroll){
	W.add(this.widgetEl,"twtr-scroll")}
if(!this._isLive&&!this._isScroll){
	this.wh[1]="auto"}
if(this._isSearchWidget&&this._isFullScreen){
	document.title="Twitter search: "+escape(this.searchString)}

this.widgetEl.innerHTML=this._getWidgetHtml();
this.spinner=this.byClass("twtr-spinner","div");
var i=this.byClass("twtr-timeline","div");
if(this._isLive&&!this._isFullScreen){
	var k=function(l){
		if(B.call(this,l)){
			j.pause.call(j)}};

var h=function(l){
	if(B.call(this,l)){
		j.resume.call(j)}};

this.removeEvents=function(){
	D.remove(i,"mouseover",k);
	D.remove(i,"mouseout",h)};

D.add(i,"mouseover",k);
D.add(i,"mouseout",h)}

this._rendered=true;
this._ready();
return this}
,removeEvents:function(){
}

,_getDefaultTheme:function(){
	return{shell:{background:"#8ec1da",color:"#ffffff"}

,tweets:{background:"#ffffff",color:"#444444",links:"#1985b5"}}}

,_getWidgetHtml:function(){
	var k=this;function l(){
		if(k._isProfileWidget){
			return'<a target="_blank" href="http://twitter.com/" class="twtr-profile-img-anchor"><img alt="profile" class="twtr-profile-img" src="'
			+b+'"></a>                      <h3></h3>                      <h4></h4>'
		}else{return"<h3>"+k.title+"</h3><h4>"+k.subject+"</h4>"}}

function j(){
	if(!k._isFullScreen){
		return' height="15"'}
return""}

function i(){
return k._isFullScreen?" twtr-fullscreen":""}
	var h='<div class="twtr-doc'
		+i()+'" style="width: '
		+this.wh[0]+';">            <div class="twtr-hd">'+l()+'               <div class="twtr-spinner twtr-inactive"></div>            </div>            <div class="twtr-bd">              <div class="twtr-timeline" style="height: '
		+this.wh[1]+';">                <div class="twtr-tweets">                  <div class="twtr-reference-tweet"></div>                  <!-- tweets show here -->                </div>              </div>            </div>            <div class="twtr-ft">              <div><a target="_blank" href="http://twitter.com"><img alt="" src="http://widgets.twimg.com/j/1/twitter_logo_s.'+(Z.ie?"gif":"png")+'"'+j()+'></a>                <span><a target="_blank" class="twtr-join-conv" style="color:'
		+this.theme.shell.color+'" href="http://twitter.com/'
		+this._getWidgetPath()+'">'
		+this.footerText+"</a></span>              </div>            </div>          </div>";
return h}

,_appendTweet:function(h){
	U(h,
	this.byClass("twtr-reference-tweet","div"));
return this}

,_slide:function(i){
	var j=this;
	var h=T(i).offsetHeight;
	if(this.runOnce){
		new A(i,"height",{from:0,to:h,time:500,callback:function(){
			j._fade.call(j,i)}}).start()}
return this}

,_fade:function(h){
	var i=this;
	if(A.canTransition){
		h.style.webkitTransition="opacity 0.5s ease-out";h.style.opacity=1;
return this}

new A(h,"opacity",{from:0,to:1,time:500}).start();
return this}

,_chop:function(){
	if(this._isScroll){
		return this}var n=this.byClass("twtr-tweet","div",true);
	var o=this.byClass("twtr-new-results","div",true);
	if(n.length){
		for(var k=n.length-1;k>=0;k--){
			var m=n[k];
			var l=parseInt(m.offsetTop);
			if(l>parseInt(this.wh[1])){
				V(m)
			}else{break}}
	if(o.length>0){
		var h=o[o.length-1];
		var j=parseInt(h.offsetTop);
		if(j>parseInt(this.wh[1])){
			V(h)}}}
return this}

,_appendSlideFade:function(i){
	var h=i||this.tweet.element;
	this._chop()._appendTweet(h)._slide(h);
	return this}

,_createTweet:function(h){
	h.timestamp=h.created_at;h.created_at=this._isRelativeTime?J(h.created_at):O(h.created_at);
	this.tweet=new K(h);
	if(this._isLive&&this.runOnce){
		this.tweet.element.style.opacity=0;
		this.tweet.element.style.filter="alpha(opacity:0)";
		this.tweet.element.style.height="0"}return this}

,_getResults:function(){
	var h=this;
	this.timesRequested++;
	this.jsonRequestRunning=true;
	this.jsonRequestTimer=window.setTimeout(function(){
		if(h.jsonRequestRunning){
			clearTimeout(h.jsonRequestTimer);
			W.add(h.spinner,"twtr-inactive")}h.jsonRequestRunning=false;V(h.scriptElement);
			h.newResults=false;h.decay()}

,this.jsonMaxRequestTimeOut);
	W.remove(this.spinner,"twtr-inactive");
	TWTR.Widget.jsonP(h.url,function(i){
		h.scriptElement=i})}

,clear:function(){
	var i=this.byClass("twtr-tweet","div",true);
	var h=this.byClass("twtr-new-results","div",true);
	i=i.concat(h);
	i.forEach(function(j){
		V(j)});
return this}

,_sortByLatest:function(h){
	this.results=h;
	this.results=this.results.slice(0,this.rpp);
	this.results.reverse();
return this}

,_sortByMagic:function(h){
	var h=h;
	var i=this;
	if(this._tweetFilter){
		if(this._tweetFilter.negatives){
			h=h.filter(function(j){
				if(!i._tweetFilter.negatives.test(j.text)){
return j}})}

if(this._tweetFilter.positives){
	h=h.filter(function(j){
		if(i._tweetFilter.positives.test(j.text)){
return j}})}}
switch(this._behavior){
	case"all":this._sortByLatest(h);
	break;
	default:this._sortByDefault(h);
	break}
return this}

,_sortByDefault:function(i){
	var j=this;
	var h=function(){
		if(Z.ie){
		return function(k){
			return Date.parse(k.replace(/( \+)/," UTC$1"))}
	}else{return function(k){
		return new Date(k)}}}();
		this.results.unshift.apply(this.results,i);
		this.results.forEach(function(k){
			if(!k.views){
				k.views=0}});
				this.results.sort(function(l,k){
					if(h(l.created_at)<h(k.created_at)){
						return 1
					}else{if(h(l.created_at)>h(k.created_at)){
						return -1
					}else{return 0}}});
this.results=this.results.slice(0,this.rpp);
if(!this._isLive){
	this.results.reverse()}

this.results.sort(function(l,k){
	if(l.views>k.views){
		return 1
	}else{if(l.views<k.views){
		return -1}}return 0})}

,_prePlay:function(i){
	if(this.jsonRequestTimer){
		clearTimeout(this.jsonRequestTimer)}
	if(!Z.ie){
		V(this.scriptElement)}
	if(i.error){
		this.newResults=false
	}else{if(i.results&&i.results.length>0){
		this.response=i;
		if(this.intervalJob){
			this.intervalJob.stop()}
		this.newResults=true;
		this.sinceId=i.max_id;
		this._sortByMagic(i.results);
if(this.isRunning()){
	this._play()}
}else{if((this._isProfileWidget
	||this._isFavsWidget
	||this._isListWidget)&&H.array(i)&&i.length>0){
	if(this.intervalJob){
		this.intervalJob.stop()}this.newResults=true;
		if(!this._profileImage&&this._isProfileWidget){
			var h=i[0].user.screen_name;
			this.setProfileImage(i[0].user.profile_image_url);
			this.setTitle(i[0].user.name);
			this.setCaption('<a target="_blank" href="http://twitter.com/'+h+'">'
			+h+"</a>")}this.sinceId=i[0].id;
this._sortByMagic(i);
if(this.isRunning()){
	this._play()}
	}else{this.newResults=false}}}
this._setUrl();
if(this._isLive){
	this.decay()}
	W.add(this.spinner,"twtr-inactive")}

,_play:function(){
	var h=this;
	if(this._avatars){
		this._preloadImages(this.results)}
	if(this._isRelativeTime&&this._behavior=="all"){
		this.byClass("twtr-timestamp","a",true).forEach(function(i){
			i.innerHTML=J(i.getAttribute("time"))})}
if(!this._isLive||this._behavior=="all"){
	this.results.forEach(function(j){
		if(h._isProfileWidget){
			j.from_user=h.username;j.profile_image_url=j.user.profile_image_url}
		if(h._isFavsWidget||h._isListWidget){
			j.from_user=j.user.screen_name;
			j.profile_image_url=j.user.profile_image_url}
			
h._createTweet({id:j.id,user:j.from_user,tweet:E.clean(j.text),avatar:j.profile_image_url,created_at:j.created_at});
	var i=h.tweet.element;(h._behavior=="all")?h._appendSlideFade(i):h._appendTweet(i)});
return this}

this._insertNewResultsNumber();
this.intervalJob=new I(this.results,
this.interval,
this._loop,function(i){
	i.views++;
	if(h._isProfileWidget){
		i.from_user=h.username;i.profile_image_url=i.user.profile_image_url}
if(h._isFavsWidget||h._isListWidget){
	i.from_user=i.user.screen_name;i.profile_image_url=i.user.profile_image_url}
if(h._isFullScreen){
	i.profile_image_url=i.profile_image_url.replace(/_normal\./,"_bigger.")}h._createTweet({id:i.id,user:i.from_user,tweet:E.clean(i.text),avatar:i.profile_image_url,created_at:i.created_at})._appendSlideFade()}).start(true);
return this}

,_insertNewResultsNumber:function(){
	if(this.runOnce&&this._isSearchWidget){
		var k=this.response.total>this.rpp?this.response.total:this.response.results.length;
		var h=k>1?"s":"";
		var j=(this.response.warning&&this.response.warning.match(/adjusted since_id/))?"more than":"";
		var i=document.createElement("div");
		W.add(i,"twtr-new-results");
		i.innerHTML='<div class="twtr-results-inner"> &nbsp; </div><div class="twtr-results-hr"> &nbsp; </div><span>'
		+j+" <strong>"
		+k+"</strong> new tweet"
		+h+"</span>";U(i,this.byClass("twtr-reference-tweet","div"))}}

,_preloadImages:function(h){
	if(this._isProfileWidget||this._isFavsWidget||this._isListWidget){
		h.forEach(function(j){
			var i=new Image();
			i.src=j.user.profile_image_url})
	}else{h.forEach(function(i){
		(new Image()).src=i.profile_image_url})}}

,_decayDecider:function(){
	var h=false;
	if(!this.runOnce){
		this.runOnce=true;h=true
	}else{if(this.newResults){
		h=true}}return h}

,start:function(){
	var h=this;
	if(!this._rendered){
		setTimeout(function(){h.start.call(h)}
	,50);
return this}

if(!this._isLive){
	this._getResults()
}else{this.occasionalJob.start()}
this._isRunning=true;
this._hasOfficiallyStarted=true;
return this}

,stop:function(){
	this.occasionalJob.stop();
	if(this.intervalJob){
		this.intervalJob.stop()}

this._isRunning=false;
return this}

,pause:function(){
	if(this.isRunning()&&this.intervalJob){
		this.intervalJob.stop();
		W.add(this.widgetEl,"twtr-paused");
		this._isRunning=false}
	if(this._resumeTimer){
		clearTimeout(this._resumeTimer)}
return this}

,resume:function(){
	var h=this;
	if(!this.isRunning()&&this._hasOfficiallyStarted&&this.intervalJob){
		this._resumeTimer=window.setTimeout(function(){
		h.intervalJob.start();
		h._isRunning=true;W.remove(h.widgetEl,"twtr-paused")}

,2000)}
return this}

,isRunning:function(){
	return this._isRunning}

,destroy:function(){
	this.stop();
	this.clear();
	this.runOnce=false;
	this._hasOfficiallyStarted=false;
	this.intervalJob=false;
	this._profileImage=false;
	this._isLive=true;
	this._tweetFilter=false;
	this._isScroll=false;
	this.newResults=false;
	this._isRunning=false;
	this.sinceId=1;
	this.results=[];
	this.showedResults=[];
	this.occasionalJob.destroy();
	if(this.jsonRequestRunning){
		clearTimeout(this.jsonRequestTimer);
		W.add(this.spinner,"twtr-inactive")}
	W.remove(this.widgetEl,"twtr-scroll");
		this.removeEvents();
return this}}}()})()})();
