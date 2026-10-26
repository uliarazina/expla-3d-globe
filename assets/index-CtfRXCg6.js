(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function sT(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hd={exports:{}},ue={};var eS;function oT(){if(eS)return ue;eS=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=E&&F[E]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function U(F,lt,W){this.props=F,this.context=lt,this.refs=y,this.updater=W||A}U.prototype.isReactComponent={},U.prototype.setState=function(F,lt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,lt,"setState")},U.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=U.prototype;function C(F,lt,W){this.props=F,this.context=lt,this.refs=y,this.updater=W||A}var B=C.prototype=new N;B.constructor=C,x(B,U.prototype),B.isPureReactComponent=!0;var z=Array.isArray;function O(){}var G={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function D(F,lt,W){var it=W.ref;return{$$typeof:o,type:F,key:lt,ref:it!==void 0?it:null,props:W}}function I(F,lt){return D(F.type,lt,F.props)}function tt(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function rt(F){var lt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(W){return lt[W]})}var ct=/\/+/g;function V(F,lt){return typeof F=="object"&&F!==null&&F.key!=null?rt(""+F.key):lt.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function(lt){F.status==="pending"&&(F.status="fulfilled",F.value=lt)},function(lt){F.status==="pending"&&(F.status="rejected",F.reason=lt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function $(F,lt,W,it,Et){var Dt=typeof F;(Dt==="undefined"||Dt==="boolean")&&(F=null);var Rt=!1;if(F===null)Rt=!0;else switch(Dt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(F.$$typeof){case o:case e:Rt=!0;break;case g:return Rt=F._init,$(Rt(F._payload),lt,W,it,Et)}}if(Rt)return Et=Et(F),Rt=it===""?"."+V(F,0):it,z(Et)?(W="",Rt!=null&&(W=Rt.replace(ct,"$&/")+"/"),$(Et,lt,W,"",function(H){return H})):Et!=null&&(tt(Et)&&(Et=I(Et,W+(Et.key==null||F&&F.key===Et.key?"":(""+Et.key).replace(ct,"$&/")+"/")+Rt)),lt.push(Et)),1;Rt=0;var xt=it===""?".":it+":";if(z(F))for(var Gt=0;Gt<F.length;Gt++)it=F[Gt],Dt=xt+V(it,Gt),Rt+=$(it,lt,W,Dt,Et);else if(Gt=M(F),typeof Gt=="function")for(F=Gt.call(F),Gt=0;!(it=F.next()).done;)it=it.value,Dt=xt+V(it,Gt++),Rt+=$(it,lt,W,Dt,Et);else if(Dt==="object"){if(typeof F.then=="function")return $(X(F),lt,W,it,Et);throw lt=String(F),Error("Objects are not valid as a React child (found: "+(lt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":lt)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function q(F,lt,W){if(F==null)return F;var it=[],Et=0;return $(F,it,"","",function(Dt){return lt.call(W,Dt,Et++)}),it}function vt(F){if(F._status===-1){var lt=F._result,W=lt();W.then(function(it){(F._status===0||F._status===-1)&&(F._status=1,F._result=it,W.status===void 0&&(W.status="fulfilled",W.value=it))},function(it){(F._status===0||F._status===-1)&&(F._status=2,F._result=it,W.status===void 0&&(W.status="rejected",W.reason=it))}),F._status===-1&&(F._status=0,F._result=W)}if(F._status===1)return F._result.default;throw F._result}var yt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var lt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(lt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function wt(F){var lt=G.T,W={};W.types=lt!==null?lt.types:null,G.T=W;try{var it=F(),Et=G.S;Et!==null&&Et(W,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(O,yt)}catch(Dt){yt(Dt)}finally{lt!==null&&W.types!==null&&(lt.types=W.types),G.T=lt}}function Qt(F){var lt=G.T;if(lt!==null){var W=lt.types;W===null?lt.types=[F]:W.indexOf(F)===-1&&W.push(F)}else wt(Qt.bind(null,F))}var le={map:q,forEach:function(F,lt,W){q(F,function(){lt.apply(this,arguments)},W)},count:function(F){var lt=0;return q(F,function(){lt++}),lt},toArray:function(F){return q(F,function(lt){return lt})||[]},only:function(F){if(!tt(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ue.Activity=p,ue.Children=le,ue.Component=U,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=C,ue.StrictMode=r,ue.Suspense=_,ue.ViewTransition=v,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(F){return G.H.useMemoCache(F)}},ue.addTransitionType=Qt,ue.cache=function(F){return function(){return F.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(F,lt,W){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var it=x({},F.props),Et=F.key;if(lt!=null)for(Dt in lt.key!==void 0&&(Et=""+lt.key),lt)!w.call(lt,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&lt.ref===void 0||(it[Dt]=lt[Dt]);var Dt=arguments.length-2;if(Dt===1)it.children=W;else if(1<Dt){for(var Rt=Array(Dt),xt=0;xt<Dt;xt++)Rt[xt]=arguments[xt+2];it.children=Rt}return D(F.type,Et,it)},ue.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ue.createElement=function(F,lt,W){var it,Et={},Dt=null;if(lt!=null)for(it in lt.key!==void 0&&(Dt=""+lt.key),lt)w.call(lt,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(Et[it]=lt[it]);var Rt=arguments.length-2;if(Rt===1)Et.children=W;else if(1<Rt){for(var xt=Array(Rt),Gt=0;Gt<Rt;Gt++)xt[Gt]=arguments[Gt+2];Et.children=xt}if(F&&F.defaultProps)for(it in Rt=F.defaultProps,Rt)Et[it]===void 0&&(Et[it]=Rt[it]);return D(F,Dt,Et)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(F){return{$$typeof:d,render:F}},ue.isValidElement=tt,ue.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:vt}},ue.memo=function(F,lt){return{$$typeof:m,type:F,compare:lt===void 0?null:lt}},ue.startTransition=wt,ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(F){return G.H.use(F)},ue.useActionState=function(F,lt,W){return G.H.useActionState(F,lt,W)},ue.useCallback=function(F,lt){return G.H.useCallback(F,lt)},ue.useContext=function(F){return G.H.useContext(F)},ue.useDebugValue=function(){},ue.useDeferredValue=function(F,lt){return G.H.useDeferredValue(F,lt)},ue.useEffect=function(F,lt){return G.H.useEffect(F,lt)},ue.useEffectEvent=function(F){return G.H.useEffectEvent(F)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(F,lt,W){return G.H.useImperativeHandle(F,lt,W)},ue.useInsertionEffect=function(F,lt){return G.H.useInsertionEffect(F,lt)},ue.useLayoutEffect=function(F,lt){return G.H.useLayoutEffect(F,lt)},ue.useMemo=function(F,lt){return G.H.useMemo(F,lt)},ue.useOptimistic=function(F,lt){return G.H.useOptimistic(F,lt)},ue.useReducer=function(F,lt,W){return G.H.useReducer(F,lt,W)},ue.useRef=function(F){return G.H.useRef(F)},ue.useState=function(F){return G.H.useState(F)},ue.useSyncExternalStore=function(F,lt,W){return G.H.useSyncExternalStore(F,lt,W)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.3.1",ue}var nS;function Pm(){return nS||(nS=1,Hd.exports=oT()),Hd.exports}var jn=Pm();const _t=sT(jn);var Gd={exports:{}},El={},Vd={exports:{}},Xd={};var iS;function lT(){return iS||(iS=1,(function(o){function e(X,$){var q=X.length;X.push($);t:for(;0<q;){var vt=q-1>>>1,yt=X[vt];if(0<l(yt,$))X[vt]=$,X[q]=yt,q=vt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var $=X[0],q=X.pop();if(q!==$){X[0]=q;t:for(var vt=0,yt=X.length,wt=yt>>>1;vt<wt;){var Qt=2*(vt+1)-1,le=X[Qt],F=Qt+1,lt=X[F];if(0>l(le,q))F<yt&&0>l(lt,le)?(X[vt]=lt,X[F]=q,vt=F):(X[vt]=le,X[Qt]=q,vt=Qt);else if(F<yt&&0>l(lt,q))X[vt]=lt,X[F]=q,vt=F;else break t}}return $}function l(X,$){var q=X.sortIndex-$.sortIndex;return q!==0?q:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],m=[],g=1,p=null,v=3,E=!1,M=!1,A=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var $=i(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=X)r(m),$.sortIndex=$.expirationTime,e(_,$);else break;$=i(m)}}function B(X){if(A=!1,C(X),!M)if(i(_)!==null)M=!0,z||(z=!0,tt());else{var $=i(m);$!==null&&V(B,$.startTime-X)}}var z=!1,O=-1,G=5,w=-1;function D(){return x?!0:!(o.unstable_now()-w<G)}function I(){if(x=!1,z){var X=o.unstable_now();w=X;var $=!0;try{t:{M=!1,A&&(A=!1,U(O),O=-1),E=!0;var q=v;try{e:{for(C(X),p=i(_);p!==null&&!(p.expirationTime>X&&D());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,v=p.priorityLevel;var yt=vt(p.expirationTime<=X);if(X=o.unstable_now(),typeof yt=="function"){p.callback=yt,C(X),$=!0;break e}p===i(_)&&r(_),C(X)}else r(_);p=i(_)}if(p!==null)$=!0;else{var wt=i(m);wt!==null&&V(B,wt.startTime-X),$=!1}}break t}finally{p=null,v=q,E=!1}$=void 0}}finally{$?tt():z=!1}}}var tt;if(typeof N=="function")tt=function(){N(I)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=I,tt=function(){ct.postMessage(null)}}else tt=function(){y(I,0)};function V(X,$){O=y(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var q=v;v=$;try{return X()}finally{v=q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var q=v;v=X;try{return $()}finally{v=q}},o.unstable_scheduleCallback=function(X,$,q){var vt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?vt+q:vt):q=vt,X){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=q+yt,X={id:g++,callback:$,priorityLevel:X,startTime:q,expirationTime:yt,sortIndex:-1},q>vt?(X.sortIndex=q,e(m,X),i(_)===null&&X===i(m)&&(A?(U(O),O=-1):A=!0,V(B,q-vt))):(X.sortIndex=yt,e(_,X),M||E||(M=!0,z||(z=!0,tt()))),X},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(X){var $=v;return function(){var q=v;v=$;try{return X.apply(this,arguments)}finally{v=q}}}})(Xd)),Xd}var aS;function uT(){return aS||(aS=1,Vd.exports=lT()),Vd.exports}var kd={exports:{}},On={};var rS;function cT(){if(rS)return On;rS=1;var o=Pm();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(g,p,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===h?h:""+E,children:g,containerInfo:p,implementation:v}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.browser=function(g){return{$$typeof:f,_reason:g}},On.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(g,p,null,v)},On.flushSync=function(g){var p=_.T,v=r.p;try{if(_.T=null,r.p=2,g)return g()}finally{_.T=p,r.p=v,r.d.f()}},On.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},On.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},On.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,E=m(v,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:M,fetchPriority:A}):v==="script"&&r.d.X(g,{crossOrigin:E,integrity:M,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(g)},On.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,E=m(v,p.crossOrigin);r.d.L(g,v,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(g)},On.requestFormReset=function(g){r.d.r(g)},On.unstable_batchedUpdates=function(g,p){return g(p)},On.useFormState=function(g,p,v){return _.H.useFormState(g,p,v)},On.useFormStatus=function(){return _.H.useHostTransitionStatus()},On.version="19.3.1",On}var sS;function fT(){if(sS)return kd.exports;sS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kd.exports=cT(),kd.exports}var oS;function hT(){if(oS)return El;oS=1;var o=uT(),e=Pm(),i=fT();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return _(u),t;if(c===s)return _(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=c;break}if(T===s){S=!0,s=u,a=c;break}T=T.sibling}if(!S){for(T=c.child;T;){if(T===a){S=!0,a=c,s=u;break}if(T===s){S=!0,s=c,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function M(t){var n=[null,null],a=v(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,U=null;function N(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function C(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(y=t),!0):!1}function B(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,G=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),V=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),le=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),lt=Symbol.for("react.recoverable"),W=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case rt:return"Profiler";case tt:return"StrictMode";case $:return"Suspense";case q:return"SuspenseList";case wt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case V:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Dt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Dt(t(n))}catch{}}return null}var Rt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},Ae=[],re=-1;function Yt(t){return{current:t}}function Ut(t){0>re||(t.current=Ae[re],Ae[re]=null,re--)}function ne(t,n){re++,Ae[re]=t.current,t.current=n}var Pt=Yt(null),se=Yt(null),Ce=Yt(null),De=Yt(null);function L(t,n){switch(ne(Ce,n),ne(se,t),ne(Pt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cv(n),t=fv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut(Pt),ne(Pt,t)}function b(){Ut(Pt),Ut(se),Ut(Ce)}function nt(t){var n=t.memoizedState;n!==null&&(Js._currentValue=n.memoizedState,ne(De,t)),n=Pt.current;var a=fv(n,t.type);n!==a&&(ne(se,t),ne(Pt,a))}function pt(t){se.current===t&&(Ut(Pt),Ut(se)),De.current===t&&(Ut(De),Js._currentValue=H)}var ut,ft;function zt(t){if(ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+ft}var Ct=!1;function qt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Ot){var Z=Ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Ot){Z=Ot}gt=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){Z=Ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Ot){if(Ot&&Z&&typeof Ot.stack=="string")return[Ot.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),S=c[0],T=c[1];if(S&&T){var P=S.split(`
`),K=T.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===K.length)for(s=P.length-1,u=K.length-1;1<=s&&0<=u&&P[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==K[u]){var st=`
`+P[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?zt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return zt(t.type);case 16:return zt("Lazy");case 13:return t.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var It=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,fe=o.unstable_requestPaint,Y=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,St=o.unstable_LowPriority,jt=o.unstable_IdlePriority,ce=o.log,Xe=o.unstable_setDisableYieldValue,Me=null,an=null;function vn(t){if(typeof ce=="function"&&Xe(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(Me,t)}catch{}}var zn=Math.clz32?Math.clz32:ql,fa=Math.log,Uo=Math.LN2;function ql(t){return t>>>=0,t===0?32:31-(fa(t)/Uo|0)|0}var Rr=256,ha=262144,Cr=4194304;function Si(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~c,s!==0?u=Si(s):(S&=T,S!==0?u=Si(S):a||(a=T&~t,a!==0&&(u=Si(a))))):(T=s&~c,T!==0?u=Si(T):S!==0?u=Si(S):a||(a=s&~t,a!==0&&(u=Si(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ga(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Wl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-zn(a),u=1<<s;n|=t[s],a&=~u}return n}function pf(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zl(){var t=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),t}function No(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function mf(t,n,a,s,u,c){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,K=t.hiddenUpdates;for(a=S&~a;0<a;){var st=31-zn(a),gt=1<<st;T[st]=0,P[st]=-1;var Z=K[st];if(Z!==null)for(K[st]=null,st=0;st<Z.length;st++){var at=Z[st];at!==null&&(at.lane&=-536870913)}a&=~gt}s!==0&&R(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(S&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Q(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ht(t,n){var a=n&-n;return a=(a&42)!==0?1:dt(a),(a&(t.suspendedLanes|n))!==0?0:a}function dt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:Zv(t.type))}function Ft(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Vt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Vt,Wt="__reactProps$"+Vt,ie="__reactContainer$"+Vt,te="__reactEvents$"+Vt,Se="__reactListeners$"+Vt,Be="__reactHandles$"+Vt,$e="__reactResources$"+Vt,Pe="__reactMarker$"+Vt,Ue="__reactLoad$"+Vt;function ee(t){delete t[Nt],delete t[Wt],delete t[Se],delete t[Be]}function ze(t){var n;if(n=t[Nt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Cv(t);t!==null;){if(a=t[Nt])return a;t=Cv(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Nt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ri(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(t){t[Pe]=!0}function Va(t){t[Ue]=void 0}var je=new Set,Xn={};function hn(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Xn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var In=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ms={},qi={};function bE(t){return It.call(qi,t)?!0:It.call(ms,t)?!1:In.test(t)?qi[t]=!0:(ms[t]=!0,!1)}var Le=!1;function Km(){var t=Le;return Le=!1,t}function jl(t,n,a){if(bE(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Kl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function da(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function si(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function AE(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,c.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function gf(t){if(!t._valueTracker){var n=Qm(t)?"checked":"value";t._valueTracker=AE(t,n,""+t[n])}}function Jm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Qm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var RE=/[\n"\\]/g;function yi(t){return t.replace(RE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _f(t,n,a,s,u,c,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+si(n)):t.value!==""+si(n)&&(t.value=""+si(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?S==="number"&&t.value==n?vf(t,si(t.value)):vf(t,si(n)):a!=null?vf(t,si(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+si(T):t.removeAttribute("name")}function $m(t,n,a,s,u,c,S,T){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){gf(t);return}a=a!=null?""+si(a):"",n=n!=null?""+si(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),gf(t)}function vf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function gs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+si(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function tg(t,n,a){if(n!=null&&(n=""+si(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+si(a):""}function eg(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=si(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),gf(t)}function _s(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var CE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ng(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||CE.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ig(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Le=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(ng(t,u,s),Le=!0)}else for(var c in n)n.hasOwnProperty(c)&&ng(t,c,n[c])}function Sf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return DE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var yf=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vs=null,Ss=null;function ag(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Wt]||null;t:switch(t=n.stateNode,n.type){case"input":if(_f(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Wt]||null;if(!u)throw Error(r(90));_f(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Jm(s)}break t;case"textarea":tg(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gs(t,!!a.multiple,n,!1)}}}var xf=!1;function rg(t,n,a){if(xf)return t(n,a);xf=!0;try{var s=t(n);return s}finally{if(xf=!1,(vs!==null||Ss!==null)&&(Qu(),vs&&(n=vs,t=Ss,Ss=vs=null,ag(n),t)))for(n=0;n<t.length;n++)ag(t[n])}}function Lo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Wt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=!1;if(pa)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Mf=!1}var Xa=null,Tf=null,Jl=null;function sg(){if(Jl)return Jl;var t,n=Tf,a=n.length,s,u="value"in Xa?Xa.value:Xa.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[c-s];s++);return Jl=u.slice(t,1<s?1-s:void 0)}function $l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function og(){return!1}function kn(t){function n(a,s,u,c,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(c):c[T]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tu:og,this.isPropagationStopped=og,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=kn(ka),Po=O({},ka,{view:0,detail:0}),UE=kn(Po),bf,Af,zo,nu=O({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(bf=t.screenX-zo.screenX,Af=t.screenY-zo.screenY):Af=bf=0,zo=t),bf)},movementY:function(t){return"movementY"in t?t.movementY:Af}}),lg=kn(nu),NE=O({},nu,{dataTransfer:0}),LE=kn(NE),OE=O({},Po,{relatedTarget:0}),Rf=kn(OE),PE=O({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=kn(PE),IE=O({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BE=kn(IE),FE=O({},ka,{data:0}),ug=kn(FE),HE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XE(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=VE[t])?!!n[t]:!1}function Cf(){return XE}var kE=O({},Po,{key:function(t){if(t.key){var n=HE[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YE=kn(kE),qE=O({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=kn(qE),WE=O({},ka,{submitter:0}),ZE=kn(WE),jE=O({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),KE=kn(jE),QE=O({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=kn(QE),$E=O({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=kn($E),ex=O({},ka,{newState:0,oldState:0,source:0}),nx=kn(ex),ix=[9,13,27,32],wf=pa&&"CompositionEvent"in window,Io=null;pa&&"documentMode"in document&&(Io=document.documentMode);var ax=pa&&"TextEvent"in window&&!Io,fg=pa&&(!wf||Io&&8<Io&&11>=Io),hg=" ",dg=!1;function pg(t,n){switch(t){case"keyup":return ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function rx(t,n){switch(t){case"compositionend":return mg(n);case"keypress":return n.which!==32?null:(dg=!0,hg);case"textInput":return t=n.data,t===hg&&dg?null:t;default:return null}}function sx(t,n){if(ys)return t==="compositionend"||!wf&&pg(t,n)?(t=sg(),Jl=Tf=Xa=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fg&&n.locale!=="ko"?null:n.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ox[t.type]:n==="textarea"}function _g(t,n,a,s){vs?Ss?Ss.push(s):Ss=[s]:vs=s,n=ic(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bo=null,Fo=null;function lx(t){av(t,0)}function iu(t){var n=Sn(t);if(Jm(n))return t}function vg(t,n){if(t==="change")return n}var Sg=!1;if(pa){var Df;if(pa){var Uf="oninput"in document;if(!Uf){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Uf=typeof yg.oninput=="function"}Df=Uf}else Df=!1;Sg=Df&&(!document.documentMode||9<document.documentMode)}function Eg(){Bo&&(Bo.detachEvent("onpropertychange",xg),Fo=Bo=null)}function xg(t){if(t.propertyName==="value"&&iu(Fo)){var n=[];_g(n,Fo,t,Ef(t)),rg(lx,n)}}function ux(t,n,a){t==="focusin"?(Eg(),Bo=n,Fo=a,Bo.attachEvent("onpropertychange",xg)):t==="focusout"&&Eg()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Fo)}function fx(t,n){if(t==="click")return iu(n)}function hx(t,n){if(t==="input"||t==="change")return iu(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:dx;function Ho(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!It.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function Nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tg(t,n){var a=Mg(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mg(a)}}function bg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ag(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Nf(t.document)}return n}function Lf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var px=pa&&"documentMode"in document&&11>=document.documentMode,Es=null,Of=null,Go=null,Pf=!1;function Rg(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pf||Es==null||Es!==Nf(s)||(s=Es,"selectionStart"in s&&Lf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Go&&Ho(Go,s)||(Go=s,s=ic(Of,"onSelect"),0<s.length&&(n=new eu("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Es)))}function Ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var xs={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionrun:Ur("Transition","TransitionRun"),transitionstart:Ur("Transition","TransitionStart"),transitioncancel:Ur("Transition","TransitionCancel"),transitionend:Ur("Transition","TransitionEnd")},zf={},Cg={};pa&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Nr(t){if(zf[t])return zf[t];if(!xs[t])return t;var n=xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cg)return zf[t]=n[a];return t}var wg=Nr("animationend"),Dg=Nr("animationiteration"),Ug=Nr("animationstart"),mx=Nr("transitionrun"),gx=Nr("transitionstart"),_x=Nr("transitioncancel"),Ng=Nr("transitionend"),Lg=new Map,If="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");If.push("scrollEnd");function Pi(t,n){Lg.set(t,n),hn(n,[t])}var vx=0;function ma(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Fi.identifierPrefix;var a=vx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Og(t){if(t==null||typeof t=="string")return t;var n=null,a=Vs;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ga(t,n){return t=Og(t),n=Og(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var au=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],Ms=0,Bf=0;function ru(){for(var t=Ms,n=Bf=Ms=0;n<t;){var a=Ei[n];Ei[n++]=null;var s=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var c=Ei[n];if(Ei[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}c!==0&&Pg(a,u,c)}}function su(t,n,a,s){Ei[Ms++]=t,Ei[Ms++]=n,Ei[Ms++]=a,Ei[Ms++]=s,Bf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ff(t,n,a,s){return su(t,n,a,s),ou(t)}function Lr(t,n){return su(t,null,null,n),ou(t)}function Pg(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-zn(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function ou(t){if(50<ul)throw ul=0,Ku=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ts={};function Sx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new Sx(t,n,a,s)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function lu(t,n,a,s,u,c){var S=0;if(s=t,typeof s=="function")Hf(s)&&(S=1);else if(typeof s=="string")S=WM(t,a,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case wt:return t=Kn(31,a,n,u),t.elementType=wt,t.lanes=c,t;case I:return Or(a.children,u,c,n);case tt:S=8,u|=24;break;case rt:return t=Kn(12,a,n,u|2),t.elementType=rt,t.lanes=c,t;case $:return t=Kn(13,a,n,u),t.elementType=$,t.lanes=c,t;case q:return t=Kn(19,a,n,u),t.elementType=q,t.lanes=c,t;case Qt:case F:return t=u|32,t=Kn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case V:S=10;break t;case ct:S=9;break t;case X:S=11;break t;case vt:S=14;break t;case yt:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Or(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function Gf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Ig(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Vf(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bg=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=Bg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},Bg.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var bs=[],As=0,uu=null,Vo=0,Mi=[],Ti=0,Ya=null,Zi=1,ji="";function va(t,n){bs[As++]=Vo,bs[As++]=uu,uu=t,Vo=n}function Fg(t,n,a){Mi[Ti++]=Zi,Mi[Ti++]=ji,Mi[Ti++]=Ya,Ya=t;var s=Zi;t=ji;var u=32-zn(s)-1;s&=~(1<<u),a+=1;var c=32-zn(n)+u;if(30<c){var S=u-u%5;c=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Zi=1<<32-zn(n)+u|a<<u|s,ji=c+t}else Zi=1<<c|a<<u|s,ji=t}function cu(t){t.return!==null&&(va(t,1),Fg(t,1,0))}function Xf(t){for(;t===uu;)uu=bs[--As],bs[As]=null,Vo=bs[--As],bs[As]=null;for(;t===Ya;)Ya=Mi[--Ti],Mi[Ti]=null,ji=Mi[--Ti],Mi[Ti]=null,Zi=Mi[--Ti],Mi[Ti]=null}function Hg(t,n){Mi[Ti++]=Zi,Mi[Ti++]=ji,Mi[Ti++]=Ya,Zi=n.id,ji=n.overflow,Ya=t}var bn=null,Ke=null,_e=!1,qa=null,bi=!1,kf=Error(r(519));function Wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(xi(n,t)),kf}function Gg(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Nt]=t,n[Wt]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<fl.length;a++)Ee(fl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),$m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),eg(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lv(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Wa(t,!0)}function fu(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:bn=bn.return}}function Rs(t){if(t!==bn)return!1;if(!_e)return fu(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yd(t.type,t.memoizedProps)),a=!a),a&&Ke&&Wa(t),fu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Rv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Rv(t)}else n===27?(n=Ke,ur(t.type)?(t=wd,wd=null,Ke=t):Ke=n):Ke=bn?Ri(t.stateNode.nextSibling):null;return!0}function Pr(){Ke=bn=null,_e=!1}function Yf(){var t=qa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),qa=null),t}function Xo(t){qa===null?qa=[t]:qa.push(t)}var qf=Yt(null),zr=null,Sa=null;function Za(t,n,a){ne(qf,n._currentValue),n._currentValue=a}function ya(t){t._currentValue=qf.current,Ut(qf)}function hu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Wf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var S=u.child;c=c.firstContext;t:for(;c!==null;){var T=c;c=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){c.lanes|=a,T=c.alternate,T!==null&&(T.lanes|=a),hu(c.return,a,t),s||(S=null);break t}c=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,c=S.alternate,c!==null&&(c.lanes|=a),hu(S,a,t),S=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,S=u.alternate,S!==null&&(S.lanes|=a),hu(u.return,a,t),S=u.child,S=S!==null?S.sibling:null):S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ir(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;oi(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===De.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Js):t=[Js])}u=u.return}return t!==null&&Wf(n,t,a,s),n.flags|=262144,t!==null}function du(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Br(t){zr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Vg(zr,t)}function pu(t,n){return zr===null&&Br(t),Vg(t,n)}function Vg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var yx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ex=o.unstable_scheduleCallback,xx=o.unstable_NormalPriority,dn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new yx,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&Ex(xx,function(){t.controller.abort()})}function Xg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Yo=null;function Mx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var qo=null,jf=0,Fr=0,Cs=null;function Tx(t,n){if(qo===null){var a=qo=[];jf=0,Fr=fd(),Cs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return jf++,n.then(kg,kg),n}function kg(){if(--jf===0&&(Yo=null,qo!==null)){Cs!==null&&(Cs.status="fulfilled");var t=qo;qo=null,Fr=0,Cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function bx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Yg=xt.S;xt.S=function(t,n){if(I0=Y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(t,n),Yo!==null)for(var a=qs;a!==null;)Xg(a,Yo),a=a.next;if(a=t.types,a!==null){for(var s=qs;s!==null;)Xg(s,a),s=s.next;if(Fr!==0){s=Yo,s===null&&(s=Yo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}Yg!==null&&Yg(t,n)};var Hr=Yt(null);function Kf(){var t=Hr.current;return t!==null?t:Ze.pooledCache}function mu(t,n){n===null?ne(Hr,Hr.current):ne(Hr,n.pool)}function qg(){var t=Kf();return t===null?null:{parent:dn._currentValue,pool:t}}var ws=Error(r(460)),Qf=Error(r(474)),gu=Error(r(542)),_u={then:function(){}};function Wg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kg(t),t}throw Vr=n,ws}}function Gr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Vr=a,ws):a}}var Vr=null;function jg(){if(Vr===null)throw Error(r(459));var t=Vr;return Vr=null,t}function Kg(t){if(t===ws||t===gu)throw Error(r(483))}var Ds=null,Wo=0;function vu(t){var n=Wo;return Wo+=1,Ds===null&&(Ds=[]),Zg(Ds,t,n)}function ja(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Su(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qg(t){function n(j,k){if(t){var et=j.deletions;et===null?(j.deletions=[k],j.flags|=16):et.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key===null?k.set(j.index,j):k.set(j.key,j),j=j.sibling;return k}function u(j,k){return j=_a(j,k),j.index=0,j.sibling=null,j}function c(j,k,et){return j.index=et,t?(et=j.alternate,et!==null?(et=et.index,et<k?(j.flags|=2,k):et):(j.flags|=134217730,k)):(j.flags|=1048576,k)}function S(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function T(j,k,et,mt){return k===null||k.tag!==6?(k=Gf(et,j.mode,mt),k.return=j,k):(k=u(k,et),k.return=j,k)}function P(j,k,et,mt){var Xt=et.type;return Xt===I?(j=st(j,k,et.props.children,mt,et.key),ja(j,et),j):k!==null&&(k.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Gr(Xt)===k.type)?(k=u(k,et.props),ja(k,et),k.return=j,k):(k=lu(et.type,et.key,et.props,null,j.mode,mt),ja(k,et),k.return=j,k)}function K(j,k,et,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Vf(et,j.mode,mt),k.return=j,k):(k=u(k,et.children||[]),k.return=j,k)}function st(j,k,et,mt,Xt){return k===null||k.tag!==7?(k=Or(et,j.mode,mt,Xt),k.return=j,k):(k=u(k,et),k.return=j,k)}function gt(j,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Gf(""+k,j.mode,et),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return et=lu(k.type,k.key,k.props,null,j.mode,et),ja(et,k),et.return=j,et;case D:return k=Vf(k,j.mode,et),k.return=j,k;case yt:return k=Gr(k),gt(j,k,et)}if(Rt(k)||it(k))return k=Or(k,j.mode,et,null),k.return=j,k;if(typeof k.then=="function")return gt(j,vu(k),et);if(k.$$typeof===V)return gt(j,pu(j,k),et);Su(j,k)}return null}function Z(j,k,et,mt){var Xt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Xt!==null?null:T(j,k,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case w:return et.key===Xt?P(j,k,et,mt):null;case D:return et.key===Xt?K(j,k,et,mt):null;case yt:return et=Gr(et),Z(j,k,et,mt)}if(Rt(et)||it(et))return Xt!==null?null:st(j,k,et,mt,null);if(typeof et.then=="function")return Z(j,k,vu(et),mt);if(et.$$typeof===V)return Z(j,k,pu(j,et),mt);Su(j,et)}return null}function at(j,k,et,mt,Xt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(et)||null,T(k,j,""+mt,Xt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case w:return j=j.get(mt.key===null?et:mt.key)||null,P(k,j,mt,Xt);case D:return j=j.get(mt.key===null?et:mt.key)||null,K(k,j,mt,Xt);case yt:return mt=Gr(mt),at(j,k,et,mt,Xt)}if(Rt(mt)||it(mt))return j=j.get(et)||null,st(k,j,mt,Xt,null);if(typeof mt.then=="function")return at(j,k,et,vu(mt),Xt);if(mt.$$typeof===V)return at(j,k,et,pu(k,mt),Xt);Su(k,mt)}return null}function Ot(j,k,et,mt){for(var Xt=null,be=null,$t=k,oe=k=0,gn=null;$t!==null&&oe<et.length;oe++){$t.index>oe?(gn=$t,$t=null):gn=$t.sibling;var Re=Z(j,$t,et[oe],mt);if(Re===null){$t===null&&($t=gn);break}t&&$t&&Re.alternate===null&&n(j,$t),k=c(Re,k,oe),be===null?Xt=Re:be.sibling=Re,be=Re,$t=gn}if(oe===et.length)return a(j,$t),_e&&va(j,oe),Xt;if($t===null){for(;oe<et.length;oe++)$t=gt(j,et[oe],mt),$t!==null&&(k=c($t,k,oe),be===null?Xt=$t:be.sibling=$t,be=$t);return _e&&va(j,oe),Xt}for($t=s($t);oe<et.length;oe++)gn=at($t,j,oe,et[oe],mt),gn!==null&&(t&&(Re=gn.alternate,Re!==null&&$t.delete(Re.key===null?oe:Re.key)),k=c(gn,k,oe),be===null?Xt=gn:be.sibling=gn,be=gn);return t&&$t.forEach(function(pr){return n(j,pr)}),_e&&va(j,oe),Xt}function Zt(j,k,et,mt){if(et==null)throw Error(r(151));for(var Xt=null,be=null,$t=k,oe=k=0,gn=null,Re=et.next();$t!==null&&!Re.done;oe++,Re=et.next()){$t.index>oe?(gn=$t,$t=null):gn=$t.sibling;var pr=Z(j,$t,Re.value,mt);if(pr===null){$t===null&&($t=gn);break}t&&$t&&pr.alternate===null&&n(j,$t),k=c(pr,k,oe),be===null?Xt=pr:be.sibling=pr,be=pr,$t=gn}if(Re.done)return a(j,$t),_e&&va(j,oe),Xt;if($t===null){for(;!Re.done;oe++,Re=et.next())Re=gt(j,Re.value,mt),Re!==null&&(k=c(Re,k,oe),be===null?Xt=Re:be.sibling=Re,be=Re);return _e&&va(j,oe),Xt}for($t=s($t);!Re.done;oe++,Re=et.next())Re=at($t,j,oe,Re.value,mt),Re!==null&&(t&&(gn=Re.alternate,gn!==null&&$t.delete(gn.key===null?oe:gn.key)),k=c(Re,k,oe),be===null?Xt=Re:be.sibling=Re,be=Re);return t&&$t.forEach(function(rT){return n(j,rT)}),_e&&va(j,oe),Xt}function de(j,k,et,mt){if(typeof et=="object"&&et!==null&&et.type===I&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case w:t:{for(var Xt=et.key;k!==null;){if(k.key===Xt){if(Xt=et.type,Xt===I){if(k.tag===7){a(j,k.sibling),mt=u(k,et.props.children),ja(mt,et),mt.return=j,j=mt;break t}}else if(k.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===yt&&Gr(Xt)===k.type){a(j,k.sibling),mt=u(k,et.props),ja(mt,et),mt.return=j,j=mt;break t}a(j,k);break}else n(j,k);k=k.sibling}et.type===I?(mt=Or(et.props.children,j.mode,mt,et.key),ja(mt,et),mt.return=j,j=mt):(mt=lu(et.type,et.key,et.props,null,j.mode,mt),ja(mt,et),mt.return=j,j=mt)}return S(j);case D:t:{for(Xt=et.key;k!==null;){if(k.key===Xt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(j,k.sibling),mt=u(k,et.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}mt=Vf(et,j.mode,mt),mt.return=j,j=mt}return S(j);case yt:return et=Gr(et),de(j,k,et,mt)}if(Rt(et))return Ot(j,k,et,mt);if(it(et)){if(Xt=it(et),typeof Xt!="function")throw Error(r(150));return et=Xt.call(et),Zt(j,k,et,mt)}if(typeof et.then=="function")return de(j,k,vu(et),mt);if(et.$$typeof===V)return de(j,k,pu(j,et),mt);Su(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(j,k.sibling),mt=u(k,et),mt.return=j,j=mt):(a(j,k),mt=Gf(et,j.mode,mt),mt.return=j,j=mt),S(j)):a(j,k)}return function(j,k,et,mt){try{Wo=0;var Xt=de(j,k,et,mt);return Ds=null,Xt}catch($t){if($t===ws||$t===gu)throw $t;var be=Kn(29,$t,null,j.mode);return be.lanes=mt,be.return=j,be}}}var Xr=Qg(!0),Jg=Qg(!1),Ka=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ie&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ou(t),Pg(t,null,a),n}return su(t,s,n,a),ou(t)}function Zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}function th(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=S:c=c.next=S,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var eh=!1;function jo(){if(eh){var t=Cs;if(t!==null)throw t}}function Ko(t,n,a,s){eh=!1;var u=t.updateQueue;Ka=!1;var c=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,K=P.next;P.next=null,S===null?c=K:S.next=K,S=P;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==S&&(T===null?st.firstBaseUpdate=K:T.next=K,st.lastBaseUpdate=P))}if(c!==null){var gt=u.baseState;S=0,st=K=P=null,T=c;do{var Z=T.lane&-536870913,at=Z!==T.lane;if(at?(Te&Z)===Z:(s&Z)===Z){Z!==0&&Z===Fr&&(eh=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ot=t,Zt=T;Z=n;var de=a;switch(Zt.tag){case 1:if(Ot=Zt.payload,typeof Ot=="function"){gt=Ot.call(de,gt,Z);break t}gt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Zt.payload,Z=typeof Ot=="function"?Ot.call(de,gt,Z):Ot,Z==null)break t;gt=O({},gt,Z);break t;case 2:Ka=!0}}Z=T.callback,Z!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[Z]:at.push(Z))}else at={lane:Z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(K=st=at,P=gt):st=st.next=at,S|=Z;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);st===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=K,u.lastBaseUpdate=st,c===null&&(u.shared.lanes=0),rr|=S,t.lanes=S,t.memoizedState=gt}}function $g(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function t_(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$g(a[t],n)}var $a=Yt(null),yu=Yt(0);function e_(t,n){t=ba,ne(yu,t),ne($a,n),ba=t|n.baseLanes}function nh(){ne(yu,ba),ne($a,$a.current)}function ih(){ba=yu.current,Ut($a),Ut(yu)}var Dn=Yt(null),Bn=null;function tr(t){var n=t.alternate;ne(Un,Un.current&1),ne(Dn,t),Bn===null&&(n===null||$a.current!==null||n.memoizedState!==null)&&(Bn=t)}function ah(t){ne(Un,Un.current),ne(Dn,t),Bn===null&&(Bn=t)}function n_(t){t.tag===22?(ne(Un,Un.current),ne(Dn,t),Bn===null&&(Bn=t)):er()}function er(){ne(Un,Un.current),ne(Dn,Dn.current)}function li(t){Ut(Dn),Bn===t&&(Bn=null),Ut(Un)}var Un=Yt(0);function Qo(t,n){ne(Dn,Dn.current),ne(Un,n)}function rh(t){Ut(Un),Ut(Dn),Bn===t&&(Bn=null)}function Eu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rd(a)||Cd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,he=null,ke=null,pn=null,xu=!1,Us=!1,kr=!1,Mu=0,Jo=0,Ns=null,Ax=0;function ln(){throw Error(r(321))}function sh(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function oh(t,n,a,s,u,c){return Ea=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?F_:H_,kr=!1,c=a(s,u),kr=!1,Us&&(c=a_(n,a,s,u)),i_(t),c}function i_(t){xt.H=Du;var n=ke!==null&&ke.next!==null;if(Ea=0,pn=ke=he=null,xu=!1,Jo=0,Ns=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&du(t)&&(mn=!0))}function a_(t,n,a,s){he=t;var u=0;do{if(Us&&(Ns=null),Jo=0,Us=!1,25<=u)throw Error(r(301));if(u+=1,pn=ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=Ox,c=n(a,s)}while(Us);return c}function Rx(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?$o(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(he.flags|=1024),n}function lh(){var t=Mu!==0;return Mu=0,t}function uh(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ch(t){if(xu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xu=!1}Ea=0,pn=ke=he=null,Us=!1,Jo=Mu=0,Ns=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?he.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(ke===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=pn===null?he.memoizedState:pn.next;if(n!==null)pn=n,ke=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},pn===null?he.memoizedState=pn=t:pn=pn.next=t}return pn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(t){var n=Jo;return Jo+=1,Ns===null&&(Ns=[]),t=Zg(Ns,t,n),n=he,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?F_:H_),t}function bu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $o(t);if(t.$$typeof===lt)return;if(t.$$typeof===V)return wn(t)}throw Error(r(438,String(t)))}function fh(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=le;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function Au(t){var n=cn();return hh(n,ke,t)}function hh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var S=u.next;u.next=c.next,c.next=S}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var T=S=null,P=null,K=n,st=!1;do{var gt=K.lane&-536870913;if(gt!==K.lane?(Te&gt)===gt:(Ea&gt)===gt){var Z=K.revertLane;if(Z===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),gt===Fr&&(st=!0);else if((Ea&Z)===Z){K=K.next,Z===Fr&&(st=!0);continue}else gt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},P===null?(T=P=gt,S=c):P=P.next=gt,he.lanes|=Z,rr|=Z;gt=K.action,kr&&a(c,gt),c=K.hasEagerState?K.eagerState:a(c,gt)}else Z={lane:gt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},P===null?(T=P=Z,S=c):P=P.next=Z,he.lanes|=gt,rr|=gt;K=K.next}while(K!==null&&K!==n);if(P===null?S=c:P.next=T,!oi(c,t.memoizedState)&&(mn=!0,st&&(a=Cs,a!==null)))throw a;t.memoizedState=c,t.baseState=S,t.baseQueue=P,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function dh(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do c=t(c,S.action),S=S.next;while(S!==u);oi(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function r_(t,n,a){var s=he,u=cn(),c=_e;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!oi((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,mn=!0),u=u.queue,gh(l_.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||S||pn!==null&&(pn.memoizedState.tag&1)!==0,Ls(t?9:8,{destroy:void 0},o_.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ze===null)throw Error(r(349));c||(Ea&127)!==0||s_(s,n,a)}return a}function s_(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Tu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function o_(t,n,a,s){n.value=a,n.getSnapshot=s,u_(n)&&c_(t)}function l_(t,n,a){return a(function(){u_(n)&&c_(t)})}function u_(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function c_(t){var n=Lr(t,2);n!==null&&ti(n,t,2)}function ph(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),kr){vn(!0);try{a()}finally{vn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function f_(t,n,a,s){return t.baseState=a,hh(t,ke,typeof s=="function"?s:xa)}function Cx(t,n,a,s,u){if(wu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){c.listeners.push(S)}};xt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,h_(n,c)):(c.next=a.next,n.pending=a.next=c)}}function h_(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=xt.T,S={};S.types=c!==null?c.types:null,xt.T=S;try{var T=a(u,s),P=xt.S;P!==null&&P(S,T),d_(t,n,T)}catch(K){mh(t,n,K)}finally{c!==null&&S.types!==null&&(c.types=S.types),xt.T=c}}else try{c=a(u,s),d_(t,n,c)}catch(K){mh(t,n,K)}}function d_(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){p_(t,n,s)},function(s){return mh(t,n,s)}):p_(t,n,a)}function p_(t,n,a){n.status="fulfilled",n.value=a,m_(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,h_(t,a)))}function mh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,m_(n),n=n.next;while(n!==s)}t.action=null}function m_(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function g_(t,n){return n}function __(t,n){if(_e){var a=Ze.formState;if(a!==null){t:{var s=he;if(_e){if(Ke){e:{for(var u=Ke,c=bi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ri(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ke=Ri(u.nextSibling),s=u.data==="F!";break t}}Wa(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g_,lastRenderedState:n},a.queue=s,a=z_.bind(null,he,s),s.dispatch=a,s=ph(!1),c=Eh.bind(null,he,!1,s.queue),s=Yn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Cx.bind(null,he,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function v_(t){var n=cn();return S_(n,ke,t)}function S_(t,n,a){if(n=hh(t,n,g_)[0],t=Au(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$o(n)}catch(S){throw S===ws?gu:S}else s=n;n=cn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Ls(9,{destroy:void 0},wx.bind(null,u,a),null)),[s,c,t]}function wx(t,n){t.action=n}function y_(t){var n=cn(),a=ke;if(a!==null)return S_(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ls(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Tu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function E_(){return cn().memoizedState}function Ru(t,n,a,s){var u=Yn();he.flags|=t,u.memoizedState=Ls(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cu(t,n,a,s){var u=cn();s=s===void 0?null:s;var c=u.memoizedState.inst;ke!==null&&s!==null&&sh(s,ke.memoizedState.deps)?u.memoizedState=Ls(n,c,a,s):(he.flags|=t,u.memoizedState=Ls(1|n,c,a,s))}function x_(t,n){Ru(8390656,8,t,n)}function gh(t,n){Cu(2048,8,t,n)}function Dx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Tu(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function M_(t){var n=cn().memoizedState;return Dx({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function T_(t,n){return Cu(4,2,t,n)}function b_(t,n){return Cu(4,4,t,n)}function A_(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function R_(t,n,a){a=a!=null?a.concat([t]):null,Cu(4,4,A_.bind(null,n,t),a)}function _h(){}function C_(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&sh(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function w_(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&sh(n,s[1]))return s[0];if(s=t(),kr){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[s,n],s}function vh(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=F0(),he.lanes|=t,rr|=t,a)}function D_(t,n,a,s){return oi(a,n)?a:$a.current!==null?(t=vh(t,a,s),oi(t,n)||(mn=!0),t):(Ea&106)===0||(Ea&1073741824)!==0&&(Te&261930)===0?(mn=!0,t.memoizedState=a):(t=F0(),he.lanes|=t,rr|=t,n)}function U_(t,n,a,s,u){var c=Gt.p;Gt.p=c!==0&&8>c?c:8;var S=xt.T,T={};T.types=S!==null?S.types:null,xt.T=T,Eh(t,!1,n,a);try{var P=u(),K=xt.S;if(K!==null&&K(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var st=bx(P,s);tl(t,n,st,hi(t))}else tl(t,n,s,hi(t))}catch(gt){tl(t,n,{then:function(){},status:"rejected",reason:gt},hi())}finally{Gt.p=c,S!==null&&T.types!==null&&(S.types=T.types),xt.T=S}}function Ux(){}function Sh(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=N_(t).queue;U_(t,u,n,H,a===null?Ux:function(){return L_(t),a(s)})}function N_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function L_(t){var n=N_(t);n.next===null&&(n=t.alternate.memoizedState),tl(t,n.next.queue,{},hi())}function yh(){return wn(Js)}function O_(){return cn().memoizedState}function P_(){return cn().memoizedState}function Nx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Qa(a);var s=Ja(n,t,a);s!==null&&(ti(s,n,a),Zo(s,n,a)),n={cache:Zf()},t.payload=n;return}n=n.return}}function Lx(t,n,a){var s=hi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wu(t)?I_(n,a):(a=Ff(t,n,a,s),a!==null&&(ti(a,t,s),B_(a,n,s)))}function z_(t,n,a){var s=hi();tl(t,n,a,s)}function tl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wu(t))I_(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var S=n.lastRenderedState,T=c(S,a);if(u.hasEagerState=!0,u.eagerState=T,oi(T,S))return su(t,n,u,0),Ze===null&&ru(),!1}catch{}if(a=Ff(t,n,u,s),a!==null)return ti(a,t,s),B_(a,n,s),!0}return!1}function Eh(t,n,a,s){if(s={lane:2,revertLane:fd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wu(t)){if(n)throw Error(r(479))}else n=Ff(t,a,s,2),n!==null&&ti(n,t,2)}function wu(t){var n=t.alternate;return t===he||n!==null&&n===he}function I_(t,n){Us=xu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function B_(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}var Du={readContext:wn,use:bu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},F_={readContext:wn,use:bu,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:x_,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ru(4194308,4,A_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ru(4194308,4,t,n)},useInsertionEffect:function(t,n){Ru(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(kr){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var u=a(n);if(kr){vn(!0);try{a(n)}finally{vn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Lx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=ph(t);var n=t.queue,a=z_.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_h,useDeferredValue:function(t,n){var a=Yn();return vh(a,t,n)},useTransition:function(){var t=ph(!1);return t=U_.bind(null,he,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Yn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Te&127)!==0||s_(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,x_(l_.bind(null,s,c,t),[t]),s.flags|=2048,Ls(9,{destroy:void 0},o_.bind(null,s,c,a,n),null),a},useId:function(){var t=Yn(),n=Ze.identifierPrefix;if(_e){var a=ji,s=Zi;a=(s&~(1<<32-zn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Mu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ax++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yh,useFormState:__,useActionState:__,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Eh.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:fh,useCacheRefresh:function(){return Yn().memoizedState=Nx.bind(null,he)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},H_={readContext:wn,use:bu,useCallback:C_,useContext:wn,useEffect:gh,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:b_,useMemo:w_,useReducer:Au,useRef:E_,useState:function(){return Au(xa)},useDebugValue:_h,useDeferredValue:function(t,n){var a=cn();return D_(a,ke.memoizedState,t,n)},useTransition:function(){var t=Au(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:r_,useId:O_,useHostTransitionStatus:yh,useFormState:v_,useActionState:v_,useOptimistic:function(t,n){var a=cn();return f_(a,ke,t,n)},useMemoCache:fh,useCacheRefresh:P_,useEffectEvent:M_},Ox={readContext:wn,use:bu,useCallback:C_,useContext:wn,useEffect:gh,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:b_,useMemo:w_,useReducer:dh,useRef:E_,useState:function(){return dh(xa)},useDebugValue:_h,useDeferredValue:function(t,n){var a=cn();return ke===null?vh(a,t,n):D_(a,ke.memoizedState,t,n)},useTransition:function(){var t=dh(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:r_,useId:O_,useHostTransitionStatus:yh,useFormState:y_,useActionState:y_,useOptimistic:function(t,n){var a=cn();return ke!==null?f_(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:fh,useCacheRefresh:P_,useEffectEvent:M_};function xh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=hi(),u=Qa(s);u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,s),n!==null&&(ti(n,t,s),Zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=hi(),u=Qa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,s),n!==null&&(ti(n,t,s),Zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),s=Qa(a);s.tag=2,n!=null&&(s.callback=n),n=Ja(t,s,a),n!==null&&(ti(n,t,a),Zo(n,t,a))}};function G_(t,n,a,s,u,c,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,S):n.prototype&&n.prototype.isPureReactComponent?!Ho(a,s)||!Ho(u,c):!0}function V_(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Mh.enqueueReplaceState(n,n.state,null)}function Yr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function X_(t){au(t)}function k_(t){console.error(t)}function Y_(t){au(t)}function Uu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function q_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Th(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(t,n)},a}function W_(t){return t=Qa(t),t.tag=3,t}function Z_(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){q_(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){q_(n,a,s),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Px(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?Ju():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ld(t,s,u)),!1;case 22:return a.flags|=65536,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ld(t,s,u)),!1}throw Error(r(435,a.tag))}return ld(t,s,u),Ju(),!1}if(_e)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==kf&&(t=Error(r(422),{cause:s}),Xo(xi(t,a)))):(s!==kf&&(n=Error(r(423),{cause:s}),Xo(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=xi(s,a),u=Th(t.stateNode,s,u),th(t,u),un!==4&&(un=2)),!1;var c=Error(r(520),{cause:s});if(c=xi(c,a),ll===null?ll=[c]:ll.push(c),un!==4&&(un=2),n===null)return!0;s=xi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Th(a.stateNode,s,t),th(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sr===null||!sr.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=W_(u),Z_(u,t,a,s),th(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var bh=Error(r(461)),mn=!1;function yn(t,n,a,s){n.child=t===null?Jg(n,null,a,s):Xr(n,t.child,a,s)}function j_(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Br(n),s=oh(t,n,a,S,c,u),T=lh(),t!==null&&!mn?(uh(t,n,u),Ma(t,n,u)):(_e&&T&&cu(n),n.flags|=1,yn(t,n,s,u),n.child)}function K_(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!Hf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Q_(t,n,c,s,u)):(t=lu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Lh(t,u)){var S=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(S,s)&&t.ref===n.ref)return Ma(t,n,u)}return n.flags|=1,t=_a(c,s),t.ref=n.ref,t.return=n,n.child=t}function Q_(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Ho(c,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=c,Lh(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ma(t,n,u)}return Ah(t,n,a,s,u)}function J_(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return $_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&mu(n,c!==null?c.cachePool:null),c!==null?e_(n,c):nh(),n_(n);else return s=n.lanes=536870912,$_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(mu(n,c.cachePool),e_(n,c),er(),n.memoizedState=null):(t!==null&&mu(n,null),nh(),er());return yn(t,n,u,a),n.child}function el(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $_(t,n,a,s,u){var c=Kf();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&mu(n,null),nh(),n_(n),t!==null&&Ir(t,n,s,!0),n.childLanes=u,null}function Nu(t,n){return n=Lu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function t0(t,n,a){return Xr(n,t.child,null,a),t=Nu(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function zx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=Nu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},el(null,t);if(ah(n),(t=Ke)?(t=Av(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Ig(t),a.return=n,n.child=a,bn=n,Ke=null)):t=null,t===null)throw Wa(n);return n.lanes=536870912,null}return Nu(n,s)}var c=t.memoizedState;if(c!==null){var S=c.dehydrated;if(ah(n),u)if(n.flags&256)n.flags&=-257,n=t0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Ir(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if($a.current===null){if(s=Ze,s!==null&&(S=ht(s,a),S!==0&&S!==c.retryLane))throw c.retryLane=S,Lr(t,S),ti(s,t,S),bh;Ju()}n=t0(t,n,a)}else t=c.treeContext,Ke=Ri(S.nextSibling),bn=n,_e=!0,qa=null,bi=!1,t!==null&&Hg(n,t),n=Nu(n,s),n.flags|=134221824;return n}return t=_a(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Os(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ah(t,n,a,s,u){return Br(n),a=oh(t,n,a,s,void 0,u),s=lh(),t!==null&&!mn?(uh(t,n,u),Ma(t,n,u)):(_e&&s&&cu(n),n.flags|=1,yn(t,n,a,u),n.child)}function e0(t,n,a,s,u,c){return Br(n),n.updateQueue=null,a=a_(n,s,a,u),i_(t),s=lh(),t!==null&&!mn?(uh(t,n,c),Ma(t,n,c)):(_e&&s&&cu(n),n.flags|=1,yn(t,n,a,c),n.child)}function n0(t,n,a,s,u){if(Br(n),n.stateNode===null){var c=Ts,S=a.contextType;typeof S=="object"&&S!==null&&(c=wn(S)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Mh,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Jf(n),S=a.contextType,c.context=typeof S=="object"&&S!==null?wn(S):Ts,c.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(xh(n,a,S,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(S=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),S!==c.state&&Mh.enqueueReplaceState(c,c.state,null),Ko(n,s,c,u),jo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var T=n.memoizedProps,P=Yr(a,T);c.props=P;var K=c.context,st=a.contextType;S=Ts,typeof st=="object"&&st!==null&&(S=wn(st));var gt=a.getDerivedStateFromProps;st=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(T||K!==S)&&V_(n,c,s,S),Ka=!1;var Z=n.memoizedState;c.state=Z,Ko(n,s,c,u),jo(),K=n.memoizedState,T||Z!==K||Ka?(typeof gt=="function"&&(xh(n,a,gt,s),K=n.memoizedState),(P=Ka||G_(n,a,P,s,Z,K,S))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),c.props=s,c.state=K,c.context=S,s=P):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,$f(t,n),S=n.memoizedProps,st=Yr(a,S),c.props=st,gt=n.pendingProps,Z=c.context,K=a.contextType,P=Ts,typeof K=="object"&&K!==null&&(P=wn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(S!==gt||Z!==P)&&V_(n,c,s,P),Ka=!1,Z=n.memoizedState,c.state=Z,Ko(n,s,c,u),jo();var at=n.memoizedState;S!==gt||Z!==at||Ka||t!==null&&t.dependencies!==null&&du(t.dependencies)?(typeof T=="function"&&(xh(n,a,T,s),at=n.memoizedState),(st=Ka||G_(n,a,st,s,Z,at,P)||t!==null&&t.dependencies!==null&&du(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,at,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,at,P)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||S===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),c.props=s,c.state=at,c.context=P,s=st):(typeof c.componentDidUpdate!="function"||S===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Os(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Xr(n,t.child,null,u),n.child=Xr(n,null,a,u)):yn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Ma(t,n,u),t}function i0(t,n,a,s){return Pr(),n.flags|=256,yn(t,n,a,s),n.child}var Rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ch(t){return{baseLanes:t,cachePool:qg()}}function wh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function a0(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,S;if((S=c)||(S=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?tr(n):er(),(t=Ke)?(t=Av(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Ig(t),a.return=n,n.child=a,bn=n,Ke=null)):t=null,t===null)throw Wa(n);return Cd(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(er(),u=n.mode,c=Lu({mode:"hidden",children:c},u),s=Or(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Ch(a),s.childLanes=wh(t,S,a),n.memoizedState=Rh,el(null,s)):(tr(n),Dh(n,c))}var T=t.memoizedState;if(T!==null){var P=T.dehydrated;if(P!==null)return Ix(t,n,c,S,s,P,T,a)}return u?(er(),u=s.fallback,c=n.mode,T=t.child,P=T.sibling,s=_a(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,P!==null?u=_a(P,u):(u=Or(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,el(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Ch(a):(c=u.cachePool,c!==null?(T=dn._currentValue,c=c.parent!==T?{parent:T,pool:T}:c):c=qg(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=wh(t,S,a),n.memoizedState=Rh,el(t.child,s)):(tr(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Dh(t,n){return n=Lu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Lu(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Ou(t,n,a){return Xr(n,t.child,null,a),t=Dh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ix(t,n,a,s,u,c,S,T){if(a)return n.flags&256?(tr(n),n.flags&=-257,Ou(t,n,T)):n.memoizedState!==null?(er(),n.child=t.child,n.flags|=128,null):(er(),c=u.fallback,S=n.mode,u=Lu({mode:"visible",children:u.children},S),c=Or(c,S,T,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Xr(n,t.child,null,T),u=n.child,u.memoizedState=Ch(T),u.childLanes=wh(t,s,T),n.memoizedState=Rh,el(null,u));if(tr(n),Cd(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var P=s.dgst;return s=P,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Xo({value:u,source:null,stack:null})),Ou(t,n,T)}if(mn||Ir(t,n,T,!1),s=(T&t.childLanes)!==0,mn||s){if($a.current!==null)return Ou(t,n,T);if(s=Ze,s!==null&&(u=ht(s,T),u!==0&&u!==S.retryLane))throw S.retryLane=u,Lr(t,u),ti(s,t,u),bh;return Rd(c)||Ju(),Ou(t,n,T)}return Rd(c)?(n.flags|=192,n.child=t.child,null):(t=S.treeContext,Ke=Ri(c.nextSibling),bn=n,_e=!0,qa=null,bi=!1,t!==null&&Hg(n,t),n=Dh(n,u.children),n.flags|=134221824,n)}function r0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),hu(t.return,n,a)}function s0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Eu(a)===null&&(n=t),t=t.sibling}return n}function Pu(t,n,a,s,u,c){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=c)}function Uh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Nh(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var S=Un.current;if(n.flags&128)return Qo(n,S),null;var T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Qo(n,S),u==="backwards"&&t!==null?(Uh(t),yn(t,n,s,a),Uh(t)):yn(t,n,s,a),s=_e?Vo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,a,n);else if(t.tag===19)r0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=s0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Uh(n)),Pu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Eu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pu(n,!0,a,null,c,s);break;case"together":Pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=s0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pu(n,!1,u,a,c,s)}return n.child}function o0(t,n,a){var s=n.pendingProps;return Za(n,n.type,s.value),yn(t,n,s.children,a),n.child}function Ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&du(t)))}function Bx(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),Za(n,dn,t.memoizedState.cache),Pr();break;case 27:case 5:nt(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ah(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return tr(n),n.flags|=128,null;s=Ir(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?a0(t,n,a):(tr(n),t=Ma(t,n,a),t!==null?t.sibling:null)}tr(n);break;case 19:if(n.flags&128)return Nh(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Nh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Qo(n,Un.current),s)break;return null;case 22:return n.lanes=0,J_(t,n,a,n.pendingProps);case 24:Za(n,dn,t.memoizedState.cache)}return Ma(t,n,a)}function l0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Lh(t,a)&&(n.flags&128)===0)return mn=!1,Bx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,_e&&(n.flags&1048576)!==0&&Fg(n,Vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Gr(n.elementType),n.type=t,typeof t=="function")Hf(t)?(s=Yr(t,s),n.tag=1,n=n0(null,n,t,s,a)):(n.tag=0,n=Ah(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===X){n.tag=11,n=j_(null,n,t,s,a);break t}else if(u===vt){n.tag=14,n=K_(null,n,t,s,a);break t}else if(u===V){n.tag=10,n.type=t,n=o0(null,n,a);break t}}throw n=Dt(t)||t,Error(r(306,n,""))}}return n;case 0:return Ah(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Yr(s,n.pendingProps),n0(t,n,s,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,$f(t,n),Ko(n,s,null,a);var S=n.memoizedState;if(s=S.cache,Za(n,dn,s),s!==c.cache&&Wf(n,[dn],a,!0),jo(),s=S.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=i0(t,n,s,a);break t}else if(s!==u){u=xi(Error(r(424)),n),Xo(u),n=i0(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Ri(t.firstChild),bn=n,_e=!0,qa=null,bi=!0,a=Jg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Pr(),s===u){n=Ma(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Os(t,n),t===null?(a=Lv(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=hv(n.type,n.pendingProps,Ce.current,n)):n.memoizedState=Lv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&_e&&(s=n.stateNode=wv(n.type,n.pendingProps,Ce.current),bn=n,bi=!0,u=Ke,ur(n.type)?(wd=u,Ke=Ri(s.firstChild)):Ke=u),yn(t,n,n.pendingProps.children,a),Os(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=s=Ke)&&(s=NM(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,bn=n,Ke=Ri(s.firstChild),bi=!1,u=!0):u=!1),u||Wa(n)),nt(n),u=n.type,c=n.pendingProps,S=t!==null?t.memoizedProps:null,s=c.children,yd(u,c)?s=null:S!==null&&yd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=oh(t,n,Rx,null,null,a),Js._currentValue=u),Os(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Ke)&&(a=LM(a,n.pendingProps,bi),a!==null?(n.stateNode=a,bn=n,Ke=null,t=!0):t=!1),t||Wa(n)),null;case 13:return a0(t,n,a);case 4:return L(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Xr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return j_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Os(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return o0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Br(n),u=wn(u),s=s(u),n.flags|=1,yn(t,n,s,a),n.child;case 14:return K_(t,n,n.type,n.pendingProps,a);case 15:return Q_(t,n,n.type,n.pendingProps,a);case 19:return Nh(t,n,a);case 31:return zx(t,n,a);case 22:return J_(t,n,a,n.pendingProps);case 24:return Br(n),s=wn(dn),t===null?(u=Kf(),u===null&&(u=Ze,c=Zf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},Jf(n),Za(n,dn,u)):((t.lanes&a)!==0&&($f(t,n),Ko(n,null,null,a),jo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,dn,s)):(s=c.cache,Za(n,dn,s),s!==u.cache&&Wf(n,[dn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&cu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Os(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ta(t){t.flags|=4}function Oh(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Iv(n,s):Iv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(X0())t.flags|=8192;else throw Vr=_u,Qf}else t.flags&=-16777217}function u0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bv(n))if(X0())t.flags|=8192;else throw Vr=_u,Qf}function zu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Zl():536870912,t.lanes|=n,Fs|=n)}function nl(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Fx(t,n,a){var s=n.pendingProps;switch(Xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ya(dn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Rs(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yf())),Qe(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(Ta(n),c!==null?(Qe(n),u0(n,c)):(Qe(n),Oh(n,u,null,s,a))):c?c!==t.memoizedState?(Ta(n),Qe(n),u0(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ta(n),Qe(n),Oh(n,u,t,s,a)),null;case 27:if(pt(n),a=Ce.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Pt.current,Rs(n)?Gg(n):(t=wv(u,s,a),n.stateNode=t,Ta(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=Pt.current,Rs(n))Gg(n);else{var S=dl(Ce.current);switch(c){case 1:c=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=S.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}c[Nt]=n,c[Wt]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)c.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=c;t:switch(Ln(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ta(n)}}return Qe(n),n.subtreeFlags&=-33554433,Oh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ce.current,Rs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Nt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lv(t.nodeValue,a)),t||Wa(n,!0)}else t=dl(t).createTextNode(s),t[Nt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Rs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Nt]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=Yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Rs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Nt]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),Qe(n),null);case 4:return b(),t===null&&md(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return ya(n.type),Qe(n),null;case 19:if(rh(n),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)nl(s,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Eu(t),c!==null){for(n.flags|=128,nl(s,!1),t=c.updateQueue,n.updateQueue=t,zu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zg(a,t),a=a.sibling;return Qo(n,Un.current&1|2),_e&&va(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Y()>Zu&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Eu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zu(n,t),nl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!_e)return Qe(n),null}else 2*Y()-s.renderingStartTime>Zu&&a!==536870912&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,c=Un.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||_e?Qo(n,c):(a=c,ne(Dn,n),ne(Un,a),Bn===null&&(Bn=n)),_e&&va(n,s.treeForkCount),t}return Qe(n),null;case 22:case 23:return li(n),ih(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ut(Hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(dn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function Hx(t,n){switch(Xf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ya(dn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(r(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return rh(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return ya(n.type),null;case 22:case 23:return li(n),ih(),t!==null&&Ut(Hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ya(dn),null;case 25:return null;default:return null}}function c0(t,n){switch(Xf(n),n.tag){case 3:ya(dn),b();break;case 26:case 27:case 5:pt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:rh(n);break;case 10:ya(n.type);break;case 22:case 23:li(n),ih(),t!==null&&Ut(Hr);break;case 24:ya(dn)}}function il(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,S=a.inst;s=c(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){Ge(n,n.return,T)}}function nr(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var P=a,K=T;try{K()}catch(st){Ge(u,P,st)}}}s=s.next}while(s!==c)}}catch(st){Ge(n,n.return,st)}}function f0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{t_(n,a)}catch(s){Ge(t,t.return,s)}}}function h0(t,n,a){a.props=Yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function Ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=ma(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=Sv(c)),s=u.ref;break;case 7:if(t.stateNode===null){var S=new di(t);p(t.child,!1,DM,S,void 0,void 0),t.stateNode=S}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Ge(t,n,T)}}function Nn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function Iu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)bv(t.stateNode,n[a])}function d0(t){for(var n=t.return;n!==null&&(zh(n)&&bv(t.stateNode,n.stateNode),!Ph(n));)n=n.return}function al(t){for(var n=t.return;n!==null&&(zh(n)&&UM(t.stateNode,n.stateNode),!Ph(n));)n=n.return}function Ph(t){return t.tag===5||t.tag===3||t.tag===27}function zh(t){return t&&t.tag===7&&t.stateNode!==null}function Ih(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function Bh(t,n,a){try{var s=t.stateNode;hM(s,t.type,a,n),s[Wt]=n}catch(u){Ge(t,t.return,u)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function Fh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Iu(t,s),Le=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,ur(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Hh(t,n,a,s),t=t.sibling;t!==null;)Hh(t,n,a,s),t=t.sibling}function Bu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Iu(t,s),Le=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,ur(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Bu(t,n,a,s),t=t.sibling;t!==null;)Bu(t,n,a,s),t=t.sibling}function m0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,s,a),n[Nt]=t,n[Wt]=a}catch(c){Ge(t,t.return,c)}}var Fu=!1,ui=null;function g0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Fu=!0)}var Qi=null;function _0(){var t=Qi;return Qi=null,t}var Qn=0;function Ps(t,n,a,s,u){return Qn=0,v0(t.child,n,a,s,u)}function v0(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var S=t.stateNode;if(s!==null){var T=Md(S);s.push(T),T.view&&(c=!0)}else c||Md(S).view&&(c=!0);Fu=!0,_v(S,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||v0(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Ji(t,n){for(;t!==null;)t.tag===5?vv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ji(t.child,n)),t=t.sibling}function Hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(Ps(t,a,n,null,!1)||Ji(t.child,!1))}t=t.sibling}}function Gh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ma(s,a),c=ga(s.default,a.paired?s.share:s.enter);c!=="none"?Ps(t,u,c,null,!1)?(Hu(t),a.paired||n||Xs(t,s.onEnter)):Ji(t.child,!1):Hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gh(t,n),t=t.sibling;else Hu(t)}function Vh(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=ga(a.default,a.share);if(c!=="none"&&(Ps(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Xs(t,a.onShare)):Ji(t.child,!1)),n.delete(s),n.size===0)break}}}Vh(t)}t=t.sibling}}}function Xh(t){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode),s=ui!==null?ui.get(a):void 0,u=ga(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Ps(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ui.delete(a),Xs(t,n.onShare)):Xs(t,n.onExit):Ji(t.child,!1)),ui!==null&&Vh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Xh(t),t=t.sibling;else ui!==null&&Vh(t)}function S0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode);n=ga(n.default,n.update),t.flags&=-5,n!=="none"&&Ps(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&S0(t);t=t.sibling}}function kh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ji(t.child,!1))}kh(t)}t=t.sibling}}function Gu(t){if(t.tag===30)t.stateNode.paired=null,Ji(t.child,!1),kh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gu(t),t=t.sibling;else kh(t)}function y0(t){for(t=t.child;t!==null;)t.tag===30?Ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&y0(t),t=t.sibling}function Yh(t,n,a,s,u,c,S){for(var T=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(c!==null&&Qn<c.length){var K=c[Qn],st=Md(P);(K.view||st.view)&&(T=!0);var gt;if(gt=(t.flags&4)===0)if(st.clip)gt=!0;else{gt=K.rect;var Z=st.rect;gt=gt.y!==Z.y||gt.x!==Z.x||gt.height!==Z.height||gt.width!==Z.width}gt&&(t.flags|=4),st.abs?st=!K.abs:(K=K.rect,st=st.rect,st=K.height!==st.height||K.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&_v(P,Qn===0?a:a+"_"+Qn,u),T&&(t.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(P,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?t.flags|=n.flags&32:Yh(t,n.child,a,s,u,c,S)&&(T=!0));n=n.sibling}return T}function E0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ma(a,s),c=ga(a.default,a.update),S;S=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;Qn=0,u=Yh(s,T,u,u,c,S,!1),(t.flags&4)!==0&&u&&Xs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&E0(t);t=t.sibling}}var An=!1,Fe=!1,$i=!1,qh=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,rl=!1,Vu=!1,Wh=!1;function Gx(t,n,a){if(t=t.containerInfo,vd=$s,t=Ag(t),Lf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,S=u.focusNode;u=u.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break t}var T=0,P=-1,K=-1,st=0,gt=0,Z=t,at=null;e:for(;;){for(var Ot;Z!==s||c!==0&&Z.nodeType!==3||(P=T+c),Z!==S||u!==0&&Z.nodeType!==3||(K=T+u),Z.nodeType===3&&(T+=Z.nodeValue.length),(Ot=Z.firstChild)!==null;)at=Z,Z=Ot;for(;;){if(Z===t)break e;if(at===s&&++st===c&&(P=T),at===S&&++gt===u&&(K=T),(Ot=Z.nextSibling)!==null)break;Z=at,at=Z.parentNode}Z=Ot}s=P===-1||K===-1?null:{start:P,end:K}}else s=null}s=s||{start:0,end:0}}else s=null;for(Sd={focusedElem:t,selectionRange:s},$s=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&Xh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&g0(t),Xu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Xh(s),Xu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&g0(t),Xu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&S0(t),Xu(a))}}ui=null}function Xu(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var S=Yr(n.type,u);a=c.getSnapshotBeforeUpdate(S,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ge(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Ad(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Ad(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ma(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ga(u.default,u.update),u!=="none"&&Ps(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function M0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&il(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&f0(a),s&512&&Ki(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{t_(t,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&m0(a);case 26:case 5:ea(t,a),n===null&&s&4&&Ih(a),s&512&&Ki(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&R0(t,a);break;case 13:ea(t,a),s&4&&C0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$x.bind(null,a),OM(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var c=n!==null&&n.memoizedState!==null||Fe;n=An,u=Fe,An=s,(Fe=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Bi(t,a,s)):ea(t,a),An=n,Fe=u}break;case 30:ea(t,a),s&512&&Ki(a,a.return);break;case 7:s&512&&Ki(a,a.return);default:ea(t,a)}}function Zh(t,n){for(t=t.child;t!==null;)T0(t,n),t=t.sibling}function T0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,S=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(P){Ge(t,t.return,P)}jh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Le=!0}catch(P){Ge(t,t.return,P)}break;case 18:try{var T=t.stateNode;n?gv(T,!0):gv(t.stateNode,!1)}catch(P){Ge(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Zh(t,n);break;default:Zh(t,n)}}function jh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:T0(a,s);break t;case 22:a.memoizedState===null&&jh(a,s);break t;default:jh(a,s)}}t=t.sibling}}function b0(t){var n=t.alternate;n!==null&&(t.alternate=null,b0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Jn=!1;function zi(t,n,a){for(a=a.child;a!==null;)A0(t,n,a),a=a.sibling}function A0(t,n,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:Fe||Nn(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Fe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Nn(a,n),al(a);var s=tn,u=Jn;ur(a.type)&&(tn=a.stateNode,Jn=!1),zi(t,n,a),Dv(a.stateNode,a.type,a.memoizedProps),tn=s,Jn=u;break;case 5:Fe||Nn(a,n),al(a);case 6:if(a.tag===6&&al(a),s=tn,u=Jn,tn=null,zi(t,n,a),tn=s,Jn=u,tn!==null)if(Jn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Le=!0}catch(c){Ge(a,n,c)}else try{tn.removeChild(a.stateNode),Le=!0}catch(c){Ge(a,n,c)}break;case 18:tn!==null&&(Jn?(t=tn,mv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),to(t)):mv(tn,a.stateNode));break;case 4:s=tn,u=Jn,tn=a.stateNode.containerInfo,Jn=!0,zi(t,n,a),tn=s,Jn=u;break;case 0:case 11:case 14:case 15:nr(2,a,n),Fe||nr(4,a,n),zi(t,n,a);break;case 1:Fe||(Nn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&h0(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:Fe=(s=Fe)||a.memoizedState!==null,zi(t,n,a),Fe=s;break;case 30:Nn(a,n),zi(t,n,a);break;case 7:Fe||Nn(a,n),zi(t,n,a);break;default:zi(t,n,a)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{to(t)}catch(a){Ge(n,n.return,a)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{to(t)}catch(a){Ge(n,n.return,a)}}function Vx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new x0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new x0),n;default:throw Error(r(435,t.tag))}}function ku(t,n){var a=Vx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=tM.bind(null,t,s);s.then(u,u)}})}function qn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],S=t,T=n,P=T;t:for(;P!==null;){switch(P.tag){case 27:if(ur(P.type)){tn=P.stateNode,Jn=!1;break t}break;case 5:tn=P.stateNode,Jn=!1;break t;case 3:case 4:tn=P.stateNode.containerInfo,Jn=!0;break t}P=P.return}if(tn===null)throw Error(r(160));A0(S,T,c),tn=null,Jn=!1,S=c.alternate,S!==null&&(S.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,t,a),n=n.sibling}var Ii=null;function w0(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var S=s[c];S.ref.impl=S.nextImpl}qn(n,t,a),Wn(t),u&4&&(nr(3,t,t.return),il(3,t),nr(5,t,t.return));break;case 1:qn(n,t,a),Wn(t),u&512&&(Fe||s===null||Nn(s,s.return)),u&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ii,qn(n,t,a),Wn(t),u&512&&(Fe||s===null||Nn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=hv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Pe]||s[Nt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Ln(s,n,a),s[Nt]=t,Ne(s),n=s;break t;case"link":if(c=zv("link","href",u).get(n+(a.href||""))){for(S=0;S<c.length;S++)if(s=c[S],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(S,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;case"meta":if(c=zv("meta","content",u).get(n+(a.content||""))){for(S=0;S<c.length;S++)if(s=c[S],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(S,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Nt]=t,Ne(s),n=s}t.stateNode=n}else An||Ld(c,t.type,t.stateNode);else t.stateNode=Pv(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Fe||n.parentNode.removeChild(n)):u.count--,a===null?An||Ld(c,t.type,t.stateNode):Pv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Bh(t,t.memoizedProps,s.memoizedProps);break;case 27:qn(n,t,a),Wn(t),u&512&&(Fe||s===null||Nn(s,s.return)),s!==null&&u&4&&Bh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=$i,$i=!1,qn(n,t,a),$i=c,Wn(t),u&512&&(Fe||s===null||Nn(s,s.return)),t.flags&32){n=t.stateNode;try{_s(n,""),Le=!0}catch(st){Ge(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Bh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(qh=!0);break;case 6:if(qn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Le=!0}catch(st){Ge(t,t.return,st)}}break;case 3:if(Le=!1,rc=null,c=Ii,Ii=pl(n.containerInfo),qn(n,t,a),Ii=c,Wn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{to(n.containerInfo)}catch(st){Ge(t,t.return,st)}qh&&(qh=!1,D0(t)),Le=!1;break;case 4:u=$i,$i=An,s=Km(),c=Ii,Ii=pl(t.stateNode.containerInfo),qn(n,t,a),Wn(t),Ii=c,Le&&rl&&(Vu=!0),Le=s,$i=u;break;case 12:qn(n,t,a),Wn(t);break;case 31:qn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 13:qn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wu=Y()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 22:c=t.memoizedState!==null,S=s!==null&&s.memoizedState!==null;var T=An,P=Fe,K=$i;An=T||c,$i=K||c,Fe=P||S,qn(n,t,a),Fe=P,$i=K,An=T,Wn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||S||An||Fe||(n=S||Fe,a=An,s=Fe,An=c||An,Fe=n,ir(t,2),An=a,Fe=s),!c&&$i||Zh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ku(t,a))));break;case 19:qn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 30:u&512&&(Fe||s===null||Nn(s,s.return)),u=Km(),c=rl,S=(a&335544064)===a,T=t.memoizedProps,rl=S&&ga(T.default,T.update)!=="none",qn(n,t,a),Wn(t),S&&s!==null&&Le&&(t.flags|=4),rl=c,Le=u;break;case 21:break;case 7:u&512&&(Fe||s===null||Nn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:qn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(p0(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(zh(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(Ph(u))break;u=u.return}var S=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,P=Fh(t);Bu(t,P,T,S);break;case 5:var K=a.stateNode;a.flags&32&&(_s(K,""),a.flags&=-33);var st=Fh(t);Bu(t,st,K,S);break;case 3:case 4:var gt=a.stateNode.containerInfo,Z=Fh(t);Hh(t,Z,gt,S);break;default:throw Error(r(161))}}catch(at){Ge(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,$s=!0,n.reset(),$s=!1),t=t.sibling}}function zs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)U0(n,t),n=n.sibling;else E0(n)}function U0(t,n){var a=t.alternate;if(a===null)Gh(t,!1);else switch(t.tag){case 3:if(Wh=ta=!1,_0(),zs(n,t),!ta&&!Vu){if(t=Qi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];vv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Wh=!0}Qi=null;break;case 5:zs(n,t);break;case 4:s=ta,ta=!1,zs(n,t),ta&&(Vu=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Gh(t,!1):zs(n,t));break;case 30:s=ta,u=_0(),ta=!1,zs(n,t),ta&&(t.flags|=4);var c=t.memoizedProps,S=t.stateNode;n=ma(c,S),S=ma(a.memoizedProps,S);var T=ga(c.default,c.update);T==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=Yh(t,a,n,S,T,c,!0),Qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Xs(t,t.memoizedProps.onUpdate),Qi=u):u!==null&&(u.push.apply(u,Qi),Qi=u),ta=(t.flags&32)!==0?!0:s;break;default:zs(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(t,n.alternate,n),n=n.sibling}function ir(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:nr(4,a,a.return),ir(a,s);break;case 1:Nn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&h0(a,a.return,u),ir(a,s);break;case 27:(s&2)!==0&&Dv(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||al(a),ir(a,s);break;case 6:al(a);break;case 26:Nn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Fe||u.parentNode.removeChild(u),ir(a,s);break;case 22:a.memoizedState===null&&ir(a,s);break;case 30:Nn(a,a.return),ir(a,s);break;case 7:Nn(a,a.return);default:ir(a,s)}t=t.sibling}}function Bi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,S=c.flags,T=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Bi(u,c,a),il(4,c);break;case 1:if(Bi(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(s,s.return,st)}if(s=c,u=s.updateQueue,u!==null){var P=s.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)$g(K[u],P)}catch(st){Ge(s,s.return,st)}}T&&S&64&&f0(c),Ki(c,c.return);break;case 27:(a&2)!==0&&m0(c);case 5:c.tag!==5&&c.tag!==27||d0(c),Bi(u,c,a),T&&s===null&&S&4&&Ih(c),Ki(c,c.return);break;case 6:d0(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||An||Ld(pl(P.ownerDocument),c.type,P),Bi(u,c,a),T&&s===null&&S&4&&Ih(c),Ki(c,c.return);break;case 12:Bi(u,c,a);break;case 31:Bi(u,c,a),T&&S&4&&R0(u,c);break;case 13:Bi(u,c,a),T&&S&4&&C0(u,c);break;case 22:c.memoizedState===null&&Bi(u,c,a),Ki(c,c.return);break;case 30:Bi(u,c,a),Ki(c,c.return);break;case 7:Ki(c,c.return);default:Bi(u,c,a)}n=n.sibling}}function Kh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ko(a))}function Qh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ko(t))}function Ai(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)N0(t,n,a,s),n=n.sibling;else u&&y0(n)}function N0(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Gu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,s),c&2048&&il(9,n);break;case 1:Ai(t,n,a,s);break;case 3:Ai(t,n,a,s),u&&Wh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&ko(c)));break;case 12:if(c&2048){Ai(t,n,a,s),c=n.stateNode;try{var S=n.memoizedProps,T=S.id,P=S.onPostCommit;typeof P=="function"&&P(T,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){Ge(n,n.return,K)}}else Ai(t,n,a,s);break;case 31:Ai(t,n,a,s);break;case 13:Ai(t,n,a,s);break;case 23:break;case 22:S=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Gu(T),S._visibility&2?Ai(t,n,a,s):sl(t,n)):(u&&T!==null&&T.memoizedState!==null&&Gu(n),S._visibility&2?Ai(t,n,a,s):(S._visibility|=2,Is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Kh(T,n);break;case 24:Ai(t,n,a,s),c&2048&&Qh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Ji(c.child,!0),Ji(n.child,!0))),Ai(t,n,a,s);break;default:Ai(t,n,a,s)}}function Is(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,S=n,T=a,P=s,K=S.flags;switch(S.tag){case 0:case 11:case 15:Is(c,S,T,P,u),il(8,S);break;case 23:break;case 22:var st=S.stateNode;S.memoizedState!==null?st._visibility&2?Is(c,S,T,P,u):sl(c,S):(st._visibility|=2,Is(c,S,T,P,u)),u&&K&2048&&Kh(S.alternate,S);break;case 24:Is(c,S,T,P,u),u&&K&2048&&Qh(S.alternate,S);break;default:Is(c,S,T,P,u)}n=n.sibling}}function sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:sl(a,s),u&2048&&Kh(s.alternate,s);break;case 24:sl(a,s),u&2048&&Qh(s.alternate,s);break;default:sl(a,s)}n=n.sibling}}var qr=8192;function Wr(t,n,a){if(t.subtreeFlags&qr)for(t=t.child;t!==null;)L0(t,n,a),t=t.sibling}function L0(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&qr&&(t.memoizedState!==null?ZM(a,Ii,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Hv(a,t)));break;case 5:Wr(t,n,a),t.flags&qr&&(t=t.stateNode,(n&335544128)===n&&Hv(a,t));break;case 3:case 4:var s=Ii;Ii=pl(t.stateNode.containerInfo),Wr(t,n,a),Ii=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=qr,qr=16777216,Wr(t,n,a),qr=s):Wr(t,n,a));break;case 30:if((t.flags&qr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ui===null&&(ui=new Map),ui.set(s,u)}Wr(t,n,a);break;default:Wr(t,n,a)}}function O0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,z0(s,t)}O0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(t),t=t.sibling}function P0(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&nr(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yu(t)):ol(t);break;default:ol(t)}}function Yu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,z0(s,t)}O0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nr(8,n,n.return),Yu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yu(n));break;default:Yu(n)}t=t.sibling}}function z0(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:nr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ko(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var u=s.sibling,c=s.return;if(b0(s),s===a){Rn=null;break t}if(u!==null){u.return=c,Rn=u;break t}Rn=c}}}var Xx={getCacheForType:function(t){var n=wn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(dn).controller.signal}},kx=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,ye=null,Te=0,He=0,ci=null,ar=!1,Bs=!1,Jh=!1,ba=0,un=0,rr=0,Zr=0,qu=0,fi=0,Fs=0,ll=null,$n=null,$h=!1,Wu=0,I0=0,Zu=1/0,ju=null,sr=null,rn=0,Fi=null,jr=null,na=0,td=0,ed=null,B0=null,Hs=null,Gs=null,Vs=null,ul=0,Ku=null;function hi(){return(Ie&2)!==0&&Te!==0?Te&-Te:xt.T!==null?fd():Tt()}function F0(){if(fi===0)if((Te&536870912)===0||_e){var t=ha;ha<<=1,(ha&3932160)===0&&(ha=262144),fi=t}else fi=536870912;return t=Dn.current,t!==null&&(t.flags|=32),fi}function Xs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Sv(ma(t.memoizedProps,a))),Gs===null&&(Gs=[]),Gs.push(n.bind(null,s))}}function ti(t,n,a){(t===Ze&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(ks(t,0),or(t,Te,fi,!1)),Dr(t,a),((Ie&2)===0||t!==Ze)&&(t===Ze&&((Ie&2)===0&&(Zr|=a),un===4&&or(t,Te,fi,!1)),ia(t))}function H0(t,n,a){if((Ie&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ga(t,n),u=s?Wx(t,n):id(t,n,!0),c=s;do{if(u===0){Bs&&!s&&or(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Yx(a)){u=id(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=ll;var P=T.current.memoizedState.isDehydrated;if(P&&(ks(T,S).flags|=256),S=id(T,S,!1),S!==2&&S!==6){if(Jh&&!P){T.errorRecoveryDisabledLanes|=c,Zr|=c,u=4;break t}c=$n,$n=u,c!==null&&($n===null?$n=c:$n.push.apply($n,c))}u=S}if(c=!1,u!==2)continue}}if(u===1){ks(t,0),or(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:or(s,n,fi,!ar);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wu+300-Y(),10<u)){if(or(s,n,fi,!ar),wr(s,0,!0)!==0)break t;na=n,s.timeoutHandle=xd(G0.bind(null,s,a,$n,ju,$h,n,fi,Zr,Fs,ar,c,"Throttled",-0,0),u);break t}G0(s,a,$n,ju,$h,n,fi,Zr,Fs,ar,c,null,-0,0)}}break}while(!0);ia(t)}function G0(t,n,a,s,u,c,S,T,P,K,st,gt,Z,at){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Zt=(c&335544064)===c;if(gt=null,(Zt||Ot&8192||(Ot&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ui=null,L0(n,c,gt),Zt&&(Ot=gt,Zt=t.containerInfo,Zt=(Zt.nodeType===9?Zt:Zt.ownerDocument).__reactViewTransition,Zt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=_l.bind(Ot),Zt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Wu-Y():(c&4194048)===c?I0-Y():0,Ot=jM(gt,Ot),Ot!==null)){na=c,t.cancelPendingCommit=Ot(j0.bind(null,t,n,c,a,s,u,S,T,P,K,st,gt,null,Z,at)),or(t,c,S,!K);return}j0(t,n,c,a,s,u,S,T,P,K,st,gt)}function Yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!oi(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(t,n,a,s){n=Wl(t,n),n&=~qu,n&=~Zr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-zn(u),S=1<<c;s[c]=-1,u&=~S}a!==0&&R(t,a,n)}function Qu(){return(Ie&6)===0?(cl(0),!1):!0}function nd(){if(ye!==null){if(He===0)var t=ye.return;else t=ye,Sa=zr=null,ch(t),Ds=null,Wo=0,t=ye;for(;t!==null;)c0(t.alternate,t),t=t.return;ye=null}}function ks(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,mM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,nd(),Ze=t,ye=a=_a(t.current,null),Te=n,He=0,ci=null,ar=!1,Bs=Ga(t,n),Jh=!1,Fs=fi=qu=Zr=rr=un=0,$n=ll=null,$h=!1,ba=Wl(t,n),ru(),a}function V0(t,n){he=null,xt.H=Du,n===ws||n===gu?(n=jg(),He=3):n===Qf?(n=jg(),He=4):He=n===bh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,ye===null&&(un=1,Uu(t,xi(n,t.current)))}function X0(){var t=Dn.current;return t===null?!0:(Te&4194048)===Te?Bn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Bn:!1}function k0(){var t=xt.H;return xt.H=Du,t===null?Du:t}function Y0(){var t=xt.A;return xt.A=Xx,t}function Ju(){un=4,ar||(Te&4194048)!==Te&&Dn.current!==null||(Bs=!0),(rr&134217727)===0&&(Zr&134217727)===0||Ze===null||or(Ze,Te,fi,!1)}function id(t,n,a){var s=Ie;Ie|=2;var u=k0(),c=Y0();(Ze!==t||Te!==n)&&(ju=null,ks(t,n)),n=!1;var S=un;t:do try{if(He!==0&&ye!==null){var T=ye,P=ci;switch(He){case 8:nd(),S=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var K=He;if(He=0,ci=null,Ys(t,T,P,K),a&&Bs){S=0;break t}break;default:K=He,He=0,ci=null,Ys(t,T,P,K)}}qx(),S=un;break}catch(st){V0(t,st)}while(!0);return n&&t.shellSuspendCounter++,Sa=zr=null,Ie=s,xt.H=u,xt.A=c,ye===null&&(Ze=null,Te=0,ru()),S}function qx(){for(;ye!==null;)q0(ye)}function Wx(t,n){var a=Ie;Ie|=2;var s=k0(),u=Y0();Ze!==t||Te!==n?(ju=null,Zu=Y()+500,ks(t,n)):Bs=Ga(t,n);t:do try{if(He!==0&&ye!==null){n=ye;var c=ci;e:switch(He){case 1:He=0,ci=null,Ys(t,n,c,1);break;case 2:case 9:if(Wg(c)){He=0,ci=null,W0(n);break}n=function(){He!==2&&He!==9||Ze!==t||(He=7),ia(t)},c.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Wg(c)?(He=0,ci=null,W0(n)):(He=0,ci=null,Ys(t,n,c,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var T=ye;if(S?Bv(S):T.stateNode.complete){He=0,ci=null;var P=T.sibling;if(P!==null)ye=P;else{var K=T.return;K!==null?(ye=K,$u(K)):ye=null}break e}}He=0,ci=null,Ys(t,n,c,5);break;case 6:He=0,ci=null,Ys(t,n,c,6);break;case 8:nd(),un=6;break t;default:throw Error(r(462))}}Zx();break}catch(st){V0(t,st)}while(!0);return Sa=zr=null,xt.H=s,xt.A=u,Ie=a,ye!==null?0:(Ze=null,Te=0,ru(),un)}function Zx(){for(;ye!==null&&!Bt();)q0(ye)}function q0(t){var n=l0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?$u(t):ye=n}function W0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:ch(n);var s=n;s===bn&&(_e?(fu(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(fu(s),_e=!0));default:c0(a,n),n=ye=zg(n,ba),n=l0(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?$u(t):ye=n}function Ys(t,n,a,s){Sa=zr=null,ch(n),Ds=null,Wo=0;var u=n.return;try{if(Px(t,u,n,a,Te)){un=1,Uu(t,xi(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;un=1,Uu(t,xi(a,t.current)),ye=null;return}n.flags&32768?(_e||s===1?t=!0:Bs||(Te&536870912)!==0?t=!1:(ar=t=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Z0(n,t)):$u(n)}function $u(t){var n=t;do{if((n.flags&32768)!==0){Z0(n,ar);return}t=n.return;var a=Fx(n.alternate,n,ba);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);un===0&&(un=5)}function Z0(t,n){do{var a=Hx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);un=6,ye=null}function j0(t,n,a,s,u,c,S,T,P,K,st,gt){t.cancelPendingCommit=null;do tc();while(rn!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ze&&(ye=Ze=null,Te=0),jr=n,Fi=t,na=a,ed=u,B0=s,jx(t,n,a,S,T,P,gt)}}function jx(t,n,a,s,u,c,S){var T=n.lanes|n.childLanes;if(td=T,T|=Bf,mf(t,a,T,s,u,c),Gs=null,(a&335544064)===a?(Vs=Mx(t),s=10262):(Vs=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,eM(Mt,function(){return od(),null})):(t.callbackNode=null,t.callbackPriority=0),Fu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,u=Gt.p,Gt.p=2,c=Ie,Ie|=4;try{Gx(t,n,a)}finally{Ie=c,Gt.p=u,xt.T=s}}rn=1,Fu?Hs=EM(S,t.containerInfo,Vs,ad,rd,Qx,sd,od,Kx):(ad(),rd(),sd())}function Kx(t){if(rn!==0){var n=Fi.onRecoverableError;n(t,{componentStack:null})}}function Qx(){rn===3&&(rn=0,U0(jr,Fi),rn=4)}function ad(){if(rn===1){rn=0;var t=Fi,n=jr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var u=Gt.p;Gt.p=2;var c=Ie;Ie|=4;try{rl=Vu=!1,w0(n,t,a),a=Sd;var S=Ag(t.containerInfo),T=a.focusedElem,P=a.selectionRange;if(S!==T&&T&&T.ownerDocument&&bg(T.ownerDocument.documentElement,T)){if(P!==null&&Lf(T)){var K=P.start,st=P.end;if(st===void 0&&(st=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(st,T.value.length);else{var gt=T.ownerDocument||document,Z=gt&&gt.defaultView||window;if(Z.getSelection){var at=Z.getSelection(),Ot=T.textContent.length,Zt=Math.min(P.start,Ot),de=P.end===void 0?Zt:Math.min(P.end,Ot);!at.extend&&Zt>de&&(S=de,de=Zt,Zt=S);var j=Tg(T,Zt),k=Tg(T,de);if(j&&k&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var et=gt.createRange();et.setStart(j.node,j.offset),at.removeAllRanges(),Zt>de?(at.addRange(et),at.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),at.addRange(et))}}}}for(gt=[],at=T;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}$s=!!vd,Sd=vd=null}finally{Ie=c,Gt.p=u,xt.T=s}}t.current=n,rn=2}}function rd(){if(rn===2){rn=0;var t=Fi,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=Gt.p;Gt.p=2;var u=Ie;Ie|=4;try{M0(t,n.alternate,n)}finally{Ie=u,Gt.p=s,xt.T=a}}rn=3}}function sd(){if(rn===4||rn===3){rn=0;var t=Hs;Hs=null,fe();var n=Fi,a=jr,s=na,u=B0,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,jr=Fi=null,K0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(sr=null),J(s),a=a.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,c=Gt.p,Gt.p=2,xt.T=null;try{for(var S=n.onRecoverableError,T=0;T<u.length;T++){var P=u[T];S(P.value,{componentStack:P.stack})}}finally{xt.T=a,Gt.p=c}}if(u=Gs,S=Vs,Vs=null,u!==null&&(Gs=null,S===null&&(S=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(S),a!==void 0&&t.finished.finally(a);(na&3)!==0&&tc(),ia(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Ku?ul++:(ul=0,Ku=n):(ul=0,Ku=null),cl(0)}}function K0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ko(n)))}function tc(){return Hs!==null&&(Hs.skipTransition(),Hs=null),ad(),rd(),sd(),od()}function od(){if(rn!==5)return!1;var t=Fi,n=td;td=0;var a=J(na),s=xt.T,u=Gt.p;try{Gt.p=32>a?32:a,xt.T=null,a=ed,ed=null;var c=Fi,S=na;if(rn=0,jr=Fi=null,na=0,(Ie&6)!==0)throw Error(r(331));var T=Ie;if(Ie|=4,P0(c.current),N0(c,c.current,S,a),Ie=T,cl(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{Gt.p=u,xt.T=s,K0(t,n)}}function Q0(t,n,a){n=xi(a,n),n=Th(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(Dr(t,2),ia(t))}function Ge(t,n,a){if(t.tag===3)Q0(t,t,a);else for(;n!==null;){if(n.tag===3){Q0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(sr===null||!sr.has(s))){t=xi(a,t),a=W_(2),s=Ja(n,a,2),s!==null&&(Z_(a,s,n,t),Dr(s,2),ia(s));break}}n=n.return}}function ld(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new kx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Jh=!0,u.add(a),t=Jx.bind(null,t,n,a),n.then(t,t))}function Jx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Te&a)===a&&((un===4||un===3&&(Te&62914560)===Te&&300>Y()-Wu)&&(Ie&2)===0?ks(t,0):qu|=a,Fs===Te&&(Fs=0)),ia(t)}function J0(t,n){n===0&&(n=Zl()),t=Lr(t,n),t!==null&&(Dr(t,n),ia(t))}function $x(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),J0(t,a)}function tM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),J0(t,a)}function eM(t,n){return ae(t,n)}var qs=null,Ws=null,ud=!1,ec=!1,cd=!1,lr=0;function ia(t){t!==Ws&&t.next===null&&(Ws===null?qs=Ws=t:Ws=Ws.next=t),ec=!0,ud||(ud=!0,iM())}function cl(t,n){if(!cd&&ec){cd=!0;do for(var a=!1,s=qs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var S=s.suspendedLanes,T=s.pingedLanes;c=(1<<31-zn(42|t)+1)-1,c&=u&~(S&~T),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,nv(s,c))}else c=Te,c=wr(s,s===Ze?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Ga(s,c)||(a=!0,nv(s,c));s=s.next}while(a);cd=!1}}function nM(){$0()}function $0(){ec=ud=!1;var t=0;lr!==0&&pM()&&(t=lr);for(var n=Y(),a=null,s=qs;s!==null;){var u=s.next,c=tv(s,n);c===0?(s.next=null,a===null?qs=u:a.next=u,u===null&&(Ws=a)):(a=s,(t!==0||(c&3)!==0)&&(ec=!0)),s=u}rn!==0&&rn!==5||cl(t),lr!==0&&(lr=0)}function tv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var S=31-zn(c),T=1<<S,P=u[S];P===-1?((T&a)===0||(T&s)!==0)&&(u[S]=pf(T,n)):P<=n&&(t.expiredLanes|=T),c&=~T}if(n=Ze,a=Te,a=wr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ga(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Jt(s),J(a)){case 2:case 8:a=kt;break;case 32:a=Mt;break;case 268435456:a=jt;break;default:a=Mt}return s=ev.bind(null,t),a=ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Jt(s),t.callbackPriority=2,t.callbackNode=null,2}function ev(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var s=Te;return s=wr(t,t===Ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(H0(t,s,n),tv(t,Y()),t.callbackNode!=null&&t.callbackNode===a?ev.bind(null,t):null)}function nv(t,n){if(tc())return null;H0(t,n,!0)}function iM(){gM(function(){(Ie&6)!==0?ae(Lt,nM):$0()})}function fd(){if(lr===0){var t=Fr;t===0&&(t=Rr,Rr<<=1,(Rr&261888)===0&&(Rr=256)),lr=t}return lr}function iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(t)}function aM(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=iv((u[Wt]||null).action),S=s.submitter;S&&(n=(n=S[Wt]||null)?iv(n.formAction):S.getAttribute("formAction"),n!==null&&(c=n,S=null));var T=new eu("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var P=new FormData(u,S);Sh(a,{pending:!0,data:P,method:u.method,action:c},null,P)}}else typeof c=="function"&&(T.preventDefault(),P=new FormData(u,S),Sh(a,{pending:!0,data:P,method:u.method,action:c},c,P))},currentTarget:u}]})}}for(var hd=0;hd<If.length;hd++){var dd=If[hd],rM=dd.toLowerCase(),sM=dd[0].toUpperCase()+dd.slice(1);Pi(rM,"on"+sM)}Pi(wg,"onAnimationEnd"),Pi(Dg,"onAnimationIteration"),Pi(Ug,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(mx,"onTransitionRun"),Pi(gx,"onTransitionStart"),Pi(_x,"onTransitionCancel"),Pi(Ng,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function av(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],P=T.instance,K=T.currentTarget;if(T=T.listener,P!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=K;try{c(u)}catch(st){au(st)}u.currentTarget=null,c=P}else for(S=0;S<s.length;S++){if(T=s[S],P=T.instance,K=T.currentTarget,T=T.listener,P!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=K;try{c(u)}catch(st){au(st)}u.currentTarget=null,c=P}}}}function Ee(t,n){var a=n[te];a===void 0&&(a=n[te]=new Set);var s=t+"__bubble";a.has(s)||(rv(n,t,2,!1),a.add(s))}function pd(t,n,a){var s=0;n&&(s|=4),rv(a,t,s,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function md(t){if(!t[nc]){t[nc]=!0,je.forEach(function(a){a!=="selectionchange"&&(oM.has(a)||pd(a,!1,t),pd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,pd("selectionchange",!1,n))}}function rv(t,n,a,s){switch(Zv(n)){case 2:var u=$M;break;case 8:u=tT;break;default:u=Pd}a=u.bind(null,n,a,t),u=void 0,!Mf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function gd(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=ze(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=c=S;continue t}T=T.parentNode}}s=s.return}rg(function(){var K=c,st=Ef(a),gt=[];t:{var Z=Lg.get(t);if(Z!==void 0){var at=eu,Ot=t;switch(t){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":at=YE;break;case"focusin":Ot="focus",at=Rf;break;case"focusout":Ot="blur",at=Rf;break;case"beforeblur":case"afterblur":at=Rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=KE;break;case wg:case Dg:case Ug:at=zE;break;case Ng:at=JE;break;case"scroll":case"scrollend":at=UE;break;case"wheel":at=tx;break;case"copy":case"cut":case"paste":at=BE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=cg;break;case"submit":at=ZE;break;case"toggle":case"beforetoggle":at=nx}var Zt=(n&4)!==0,de=!Zt&&(t==="scroll"||t==="scrollend"),j=Zt?Z!==null?Z+"Capture":null:Z;Zt=[];for(var k=K,et;k!==null;){var mt=k;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||j===null||(mt=Lo(k,j),mt!=null&&Zt.push(hl(k,mt,et))),de)break;k=k.return}0<Zt.length&&(Z=new at(Z,Ot,null,a,st),gt.push({event:Z,listeners:Zt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",at&&a!==yf&&(Ot=a.relatedTarget||a.fromElement)&&(ze(Ot)||Ot[ie]))break t;(Z||at)&&(Ot=st.window===st?st:(at=st.ownerDocument)?at.defaultView||at.parentWindow:window,Z?(at=a.relatedTarget||a.toElement,Z=K,at=at?ze(at):null,at!==null&&(de=f(at),Zt=at.tag,at!==de||Zt!==5&&Zt!==27&&Zt!==6)&&(at=null)):(Z=null,at=K),Z!==at&&(Zt=lg,mt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=cg,mt="onPointerLeave",j="onPointerEnter",k="pointer"),de=Z==null?Ot:Sn(Z),et=at==null?Ot:Sn(at),Ot=new Zt(mt,k+"leave",Z,a,st),Ot.target=de,Ot.relatedTarget=et,mt=null,ze(st)===K&&(Zt=new Zt(j,k+"enter",at,a,st),Zt.target=et,Zt.relatedTarget=de,mt=Zt),de=mt,Zt=Z&&at?z(Z,at,lM):null,Z!==null&&sv(gt,Ot,Z,Zt,!1),at!==null&&de!==null&&sv(gt,de,at,Zt,!0)))}t:{if(Z=K?Sn(K):window,at=Z.nodeName&&Z.nodeName.toLowerCase(),at==="select"||at==="input"&&Z.type==="file")var Xt=vg;else if(gg(Z))if(Sg)Xt=hx;else{Xt=cx;var be=ux}else at=Z.nodeName,!at||at.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?K&&Sf(K.elementType)&&(Xt=vg):Xt=fx;if(Xt&&(Xt=Xt(t,K))){_g(gt,Xt,a,st);break t}be&&be(t,Z,K)}switch(be=K?Sn(K):window,t){case"focusin":(gg(be)||be.contentEditable==="true")&&(Es=be,Of=K,Go=null);break;case"focusout":Go=Of=Es=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Rg(gt,a,st);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Rg(gt,a,st)}var $t;if(wf)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ys?pg(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(fg&&a.locale!=="ko"&&(ys||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ys&&($t=sg()):(Xa=st,Tf="value"in Xa?Xa.value:Xa.textContent,ys=!0)),be=ic(K,oe),0<be.length&&(oe=new ug(oe,t,null,a,st),gt.push({event:oe,listeners:be}),$t?oe.data=$t:($t=mg(a),$t!==null&&(oe.data=$t)))),($t=ax?rx(t,a):sx(t,a))&&(oe=ic(K,"onBeforeInput"),0<oe.length&&(be=new ug("onBeforeInput","beforeinput",null,a,st),gt.push({event:be,listeners:oe}),be.data=$t)),aM(gt,t,K,a,st)}av(gt,n)})}function hl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Lo(t,a),u!=null&&s.unshift(hl(t,u,c)),u=Lo(t,n),u!=null&&s.push(hl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function lM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sv(t,n,a,s,u){for(var c=n._reactName,S=[];a!==null&&a!==s;){var T=a,P=T.alternate,K=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||K===null||(P=K,u?(K=Lo(a,c),K!=null&&S.unshift(hl(a,K,P))):u||(K=Lo(a,c),K!=null&&S.push(hl(a,K,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var uM=/\r\n?/g,cM=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(uM,`
`).replace(cM,"")}function lv(t,n){return n=ov(n),ov(t)===n}function Ve(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||_s(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&_s(t,""+s);else return;break;case"className":Kl(t,"class",s);break;case"tabIndex":Kl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(t,a,s);break;case"style":ig(t,s,c);return;case"data":if(n!=="object"){Kl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ql(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),jl(t,"popover",s);break;case"xlinkActuate":da(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":da(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":da(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":da(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":da(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":da(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":da(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":da(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":da(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":jl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=wE.get(a)||a,jl(t,a,s);else return}Le=!0}function _d(t,n,a,s,u,c){switch(a){case"style":ig(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")_s(t,s);else if(typeof s=="number"||typeof s=="bigint")_s(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Wt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}Le=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):jl(t,a,s)}return}Le=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var S=a[c];if(S!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,c,S,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=c=S=u=null,P=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":u=st;break;case"type":S=st;break;case"checked":P=st;break;case"defaultChecked":K=st;break;case"value":c=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ve(t,n,s,st,a,null)}}$m(t,c,T,P,K,S,u,!1);return;case"select":Ee("invalid",t),s=S=c=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":c=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ve(t,n,u,T,a,null)}n=c,a=S,t.multiple=!!s,n!=null?gs(t,!!s,n,!1):a!=null&&gs(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),c=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":c=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(t,n,S,T,a,null)}eg(t,s,u,c);return;case"option":for(P in a)a.hasOwnProperty(P)&&(s=a[P],s!=null)&&(P==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ve(t,n,P,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<fl.length;s++)Ee(fl[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,K,s,a,null)}return;default:if(Sf(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&_d(t,n,st,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ve(t,n,T,s,a,null))}var fM={};function hM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,S=null,T=null,P=null,K=null,st=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(at)||Ve(t,n,at,null,s,gt)}}for(var Z in s){var at=s[Z];if(gt=a[Z],s.hasOwnProperty(Z)&&(at!=null||gt!=null))switch(Z){case"type":at!==gt&&(Le=!0),c=at;break;case"name":at!==gt&&(Le=!0),u=at;break;case"checked":at!==gt&&(Le=!0),K=at;break;case"defaultChecked":at!==gt&&(Le=!0),st=at;break;case"value":at!==gt&&(Le=!0),S=at;break;case"defaultValue":at!==gt&&(Le=!0),T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==gt&&Ve(t,n,Z,at,s,gt)}}_f(t,S,T,P,K,st,c,u);return;case"select":at=S=T=Z=null;for(c in a)if(P=a[c],a.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":at=P;default:s.hasOwnProperty(c)||Ve(t,n,c,null,s,P)}for(u in s)if(c=s[u],P=a[u],s.hasOwnProperty(u)&&(c!=null||P!=null))switch(u){case"value":c!==P&&(Le=!0),Z=c;break;case"defaultValue":c!==P&&(Le=!0),T=c;break;case"multiple":c!==P&&(Le=!0),S=c;default:c!==P&&Ve(t,n,u,c,s,P)}n=T,a=S,s=at,Z!=null?gs(t,!!a,Z,!1):!!s!=!!a&&(n!=null?gs(t,!!a,n,!0):gs(t,!!a,a?[]:"",!1));return;case"textarea":at=Z=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,s,u)}for(S in s)if(u=s[S],c=a[S],s.hasOwnProperty(S)&&(u!=null||c!=null))switch(S){case"value":u!==c&&(Le=!0),Z=u;break;case"defaultValue":u!==c&&(Le=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Ve(t,n,S,u,s,c)}tg(t,Z,at);return;case"option":for(var Ot in a)Z=a[Ot],a.hasOwnProperty(Ot)&&Z!=null&&!s.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:Ve(t,n,Ot,null,s,Z));for(P in s)Z=s[P],at=a[P],s.hasOwnProperty(P)&&Z!==at&&(Z!=null||at!=null)&&(P==="selected"?(Z!==at&&(Le=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):Ve(t,n,P,Z,s,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)Z=a[Zt],a.hasOwnProperty(Zt)&&Z!=null&&!s.hasOwnProperty(Zt)&&Ve(t,n,Zt,null,s,Z);for(K in s)if(Z=s[K],at=a[K],s.hasOwnProperty(K)&&Z!==at&&(Z!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:Ve(t,n,K,Z,s,at)}return;default:if(Sf(n)){for(var de in a)Z=a[de],a.hasOwnProperty(de)&&Z!==void 0&&!s.hasOwnProperty(de)&&_d(t,n,de,void 0,s,Z);for(st in s)Z=s[st],at=a[st],!s.hasOwnProperty(st)||Z===at||Z===void 0&&at===void 0||_d(t,n,st,Z,s,at);return}}for(var j in a)Z=a[j],a.hasOwnProperty(j)&&Z!=null&&!s.hasOwnProperty(j)&&Ve(t,n,j,null,s,Z);for(gt in s)Z=s[gt],at=a[gt],!s.hasOwnProperty(gt)||Z===at||Z==null&&at==null||Ve(t,n,gt,Z,s,at)}function uv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,S=u.initiatorType,T=u.duration;if(c&&T&&uv(S)){for(S=0,T=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],K=P.startTime;if(K>T)break;var st=P.transferSize,gt=P.initiatorType;st&&uv(gt)&&(P=P.responseEnd,S+=st*(P<T?1:(T-K)/(P-K)))}if(--s,n+=8*(c+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vd=null,Sd=null;function dl(t){return t.nodeType===9?t:t.ownerDocument}function cv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hv(t,n,a,s){return a=dl(a).createElement(t),a[Nt]=s,a[Wt]=n,Ln(a,t,n),Ne(a),a}function yd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ed=null;function pM(){var t=window.event;return t&&t.type==="popstate"?t===Ed?!1:(Ed=t,!0):(Ed=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,mM=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,pv=typeof requestAnimationFrame=="function"?requestAnimationFrame:xd,gM=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(t){return dv.resolve(null).then(t).catch(_M)}:xd;function _M(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function mv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),to(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Dd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Dd(a);for(var c=a.firstChild;c;){var S=c.nextSibling,T=c.nodeName;c[Pe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=S}}else a==="body"&&Dd(t.ownerDocument.body);a=u}while(a);to(n)}function gv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function _v(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function vv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function vM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Md(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return vM(n,a,t)}function SM(t){return t.documentElement.clientHeight}function yM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function EM(t,n,a,s,u,c,S,T,P){var K=n.nodeType===9?n:n.ownerDocument;try{var st=K.startViewTransition({update:function(){var Z=K.defaultView,at=Z.navigation&&Z.navigation.transition,Ot=K.fonts.status;s();var Zt=[];if(Ot==="loaded"&&(SM(K),K.fonts.status==="loading"&&Zt.push(K.fonts.ready)),Ot=Zt.length,t!==null)for(var de=t.suspenseyImages,j=0,k=0;k<de.length;k++){var et=de[k];if(!et.complete){var mt=et.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<Z.innerHeight&&mt.left<Z.innerWidth){if(j+=Fv(et),j>sc){Zt.length=Ot;break}et=new Promise(yM.bind(et)),Zt.push(et)}}}if(0<Zt.length)return Z=Promise.race([Promise.all(Zt),new Promise(function(Xt){return setTimeout(Xt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,Z]):Z).then(c,c);if(u(),at)return at.finished.then(c,c);c()},types:a});K.__reactViewTransition=st;var gt=[];return st.ready.then(function(){for(var Z=K.documentElement.getAnimations({subtree:!0}),at=0;at<Z.length;at++){var Ot=Z[at],Zt=Ot.effect,de=Zt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){gt.push(Ot),Ot=Zt.getKeyframes();for(var j=de=void 0,k=!0,et=0;et<Ot.length;et++){var mt=Ot[et],Xt=mt.width;if(de===void 0)de=Xt;else if(de!==Xt){k=!1;break}if(Xt=mt.height,j===void 0)j=Xt;else if(j!==Xt){k=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}k&&de!==void 0&&j!==void 0&&(Zt.setKeyframes(Ot),k=getComputedStyle(Zt.target,Zt.pseudoElement),k.width!==de||k.height!==j)&&(k=Ot[0],k.width=de,k.height=j,k=Ot[Ot.length-1],k.width=de,k.height=j,Zt.setKeyframes(Ot))}}S()},function(Z){K.__reactViewTransition===st&&(K.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&P(Z)}finally{s(),u(),S()}}),st.finished.finally(function(){for(var Z=0;Z<gt.length;Z++)gt[Z].cancel();K.__reactViewTransition===st&&(K.__reactViewTransition=null),T()}),st}catch{return s(),u(),S(),null}}function Kr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Kr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Kr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Kr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Sv(t){return{name:t,group:new Kr("group",t),imagePair:new Kr("image-pair",t),old:new Kr("old",t),new:new Kr("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Ev(c,t,n,a)===-1){var S=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(P){S.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),s!==null&&(u=S.removeEventListener.bind(S,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Zs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),p(this._fragmentFiber.child,!1,xM,t,T,s)}this._eventListeners=c}};function xM(t,n,a,s){return x(t).addEventListener(n,a,s),!1}di.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Ev(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Zs(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,MM,t,a,u),s.splice(n,1),c!==null&&c()}};function MM(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Zs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function yv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Ev(t,n,a,s){if(t.length===0)return-1;s=yv(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&yv(c.optionsOrUseCapture)===s)return u}return-1}di.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){p(this._fragmentFiber.child,!0,xv,t,void 0,void 0)};function xv(t,n){return t.tag===6?!1:(t=x(t),PM(t,n))}di.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Td,n,void 0,void 0);for(var a=n.length-1;0<=a&&!xv(n[a],t);a--);};function Td(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=x(t),t=dl(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,TM,t,void 0,void 0))};function TM(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,bM,t,void 0,void 0)};function bM(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,AM,t,void 0,void 0);for(var a=n=0;a<Hi.length;a++){var s=Hi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Hi[n++]=s}Hi.length=n}};function AM(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Hi=[],bd=!1;function RM(t,n,a){Hi.push({fragmentInstance:t,observer:n,instance:a}),bd||(bd=!0,zM(function(){bd=!1;var s=Hi;Hi=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}di.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,CM,t,void 0,void 0),t};function CM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Td,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=M(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),u=x(a[a.length-1]);var c=E(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),P=S&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&c&&S&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||P||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wM(t,n,a,s,u){var c=ze(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=z(a,c,B),n===null?n=!1:(p(n,!0,N,c,a),c=y,y=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=z(s,c,B),n===null?n=!1:(p(n,!0,C,c,s),c=y,U=y=null,n=c!==null)),n):!1}function Mv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,Td,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=M(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),Mv(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=x(u),Mv(u,a)):x(u).scrollIntoView(t),s+=a?-1:1}};function DM(t,n){return t=x(t),Tv(t,n),!1}function Tv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function bv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var S=0,T=0;T<Hi.length;T++){var P=Hi[T];(P.fragmentInstance!==n||P.observer!==c||P.instance!==t)&&(Hi[S++]=P)}Hi.length=S,c.observe(t)}),Tv(t,n))}function UM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?RM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ad(a),ee(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function LM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function Av(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function Rd(t){return t.data==="$?"||t.data==="$~"}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function OM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wd=null;function Rv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Cv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function PM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function zM(t){pv(function(){pv(function(n){return t(n)})})}function wv(t,n,a){switch(n=dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Dv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ve(t,n,s,null,fM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),ee(t)}function Dd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var Ci=new Map,Uv=new Set;function pl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Aa=Gt.d;Gt.d={f:IM,r:BM,D:FM,C:HM,L:GM,m:VM,X:kM,S:XM,M:YM};function IM(){var t=Aa.f(),n=Qu();return t||n}function BM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?L_(n):Aa.r(t)}var js=typeof document>"u"?null:document;function Nv(t,n,a){var s=js;if(s&&typeof n=="string"&&n){var u=yi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Uv.has(u)||(Uv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Ln(n,"link",t),Ne(n),s.head.appendChild(n)))}}function FM(t){Aa.D(t),Nv("dns-prefetch",t,null)}function HM(t,n){Aa.C(t,n),Nv("preconnect",t,n)}function GM(t,n,a){Aa.L(t,n,a);var s=js;if(s&&t&&n){var u='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yi(a.imageSizes)+'"]')):u+='[href="'+yi(t)+'"]';var c=u;switch(n){case"style":c=Ks(t);break;case"script":c=Qs(t)}if(!(Ci.has(c)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ml(c))||n==="script"&&s.querySelector(gl(c))))){var S=s.createElement("link");Ln(S,"link",t),n==="style"&&(S[Ue]=!0,S.onload=S.onerror=function(){Va(S)}),Ne(S),s.head.appendChild(S)}}}function VM(t,n){Aa.m(t,n);var a=js;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yi(s)+'"][href="'+yi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qs(t)}if(!Ci.has(c)&&(t=O({rel:"modulepreload",href:t},n),Ci.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(c)))return}s=a.createElement("link"),Ln(s,"link",t),Ne(s),a.head.appendChild(s)}}}function XM(t,n,a){Aa.S(t,n,a);var s=js;if(s&&t){var u=ri(s).hoistableStyles,c=Ks(t);n=n||"default";var S=u.get(c);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(ml(c)))T.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(c))&&Ud(t,a);var P=S=s.createElement("link");Ne(P),Ln(P,"link",t),P._p=new Promise(function(K,st){P.onload=K,P.onerror=st}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(c,S)}}}function kM(t,n){Aa.X(t,n);var a=js;if(a&&t){var s=ri(a).hoistableScripts,u=Qs(t),c=s.get(u);c||(c=a.querySelector(gl(u)),c||(t=O({src:t,async:!0},n),(n=Ci.get(u))&&Nd(t,n),c=a.createElement("script"),Ne(c),Ln(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function YM(t,n){Aa.M(t,n);var a=js;if(a&&t){var s=ri(a).hoistableScripts,u=Qs(t),c=s.get(u);c||(c=a.querySelector(gl(u)),c||(t=O({src:t,async:!0,type:"module"},n),(n=Ci.get(u))&&Nd(t,n),c=a.createElement("script"),Ne(c),Ln(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Lv(t,n,a,s){var u=(u=Ce.current)?pl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ks(a.href),n=ri(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ks(a.href);var c=ri(u).hoistableStyles,S=c.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,S),(c=u.querySelector(ml(t)))?c._p||(S.instance=c,S.state.loading=5):(c=Ci.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,c)),qM(u,t,c,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Qs(a),n=ri(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ks(t){return'href="'+yi(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function Ov(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function qM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ue]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ue]=!0,n.onload=n.onerror=Va.bind(null,n),Ln(n,"link",a),Ne(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Qs(t){return'[src="'+yi(t)+'"]'}function gl(t){return"script[async]"+t}function Pv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+yi(a.href)+'"]');if(s)return n.instance=s,Ne(s),s;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ne(s),Ln(s,"style",u),ac(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ks(a.href);var c=t.querySelector(ml(u));if(c)return n.state.loading|=4,n.instance=c,Ne(c),c;s=Ov(a),(u=Ci.get(u))&&Ud(s,u),c=(t.ownerDocument||t).createElement("link"),Ne(c);var S=c;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Ln(c,"link",s),n.state.loading|=4,ac(c,a.precedence,t),n.instance=c;case"script":return c=Qs(a.src),(u=t.querySelector(gl(c)))?(n.instance=u,Ne(u),u):(s=a,(u=Ci.get(c))&&(s=O({},a),Nd(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ne(u),Ln(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ac(s,a.precedence,t));return n.instance}function ac(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)c=T;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function zv(t,n,a){if(rc===null){var s=new Map,u=rc=new Map;u.set(a,s)}else u=rc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Pe]||c[Nt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var S=c.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(c):s.set(S,[c])}}return s}function Ld(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function WM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Iv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Bv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Fv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Hv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Fv(n),t.suspenseyImages.push(n)),t=KM.bind(t),n.decode().then(t,t))}function ZM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ks(s.href),c=n.querySelector(ml(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ne(c);return}c=n.ownerDocument||n,s=Ov(s),(u=Ci.get(u))&&Ud(s,u),c=c.createElement("link"),Ne(c);var S=c;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Ln(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sc=0;function jM(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&sc===0&&(sc=62500*dM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>sc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Gv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)lc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function _l(){this.count--,Gv(this)}function KM(){this.imgCount--,Gv(this)}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(QM,t),oc=null,_l.call(t))}function QM(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var s=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var S=u[c];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),c=a.get(S)||s,c===s&&a.set(null,u),a.set(S,u),this.count++,s=_l.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Js={$$typeof:V,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function JM(t,n,a,s,u,c,S,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=No(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.hiddenUpdates=No(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vv(t,n,a,s,u,c,S,T,P,K,st,gt){return t=new JM(t,n,a,S,P,K,st,gt,T),n=1,c===!0&&(n|=24),c=Kn(3,null,null,n),t.current=c,c.stateNode=t,n=Zf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Jf(c),t}function Xv(t){return t?(t=Ts,t):Ts}function kv(t,n,a,s,u,c){u=Xv(u),s.context===null?s.context=u:s.pendingContext=u,s=Qa(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ja(t,s,n),a!==null&&(ti(a,t,n),Zo(a,t,n))}function Yv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Od(t,n){Yv(t,n),(t=t.alternate)&&Yv(t,n)}function qv(t){if(t.tag===13||t.tag===31){var n=Lr(t,67108864);n!==null&&ti(n,t,67108864),Od(t,67108864)}}function Wv(t){if(t.tag===13||t.tag===31){var n=hi();n=dt(n);var a=Lr(t,n);a!==null&&ti(a,t,n),Od(t,n)}}var $s=!0;function $M(t,n,a,s){var u=xt.T;xt.T=null;var c=Gt.p;try{Gt.p=2,Pd(t,n,a,s)}finally{Gt.p=c,xt.T=u}}function tT(t,n,a,s){var u=xt.T;xt.T=null;var c=Gt.p;try{Gt.p=8,Pd(t,n,a,s)}finally{Gt.p=c,xt.T=u}}function Pd(t,n,a,s){if($s){var u=zd(s);if(u===null)gd(t,n,s,uc,a),jv(t,s);else if(nT(u,t,n,a,s))s.stopPropagation();else if(jv(t,s),n&4&&-1<eT.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var S=Si(c.pendingLanes);if(S!==0){var T=c;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-zn(S);T.entanglements[1]|=P,S&=~P}ia(c),(Ie&6)===0&&(Zu=Y()+500,cl(0))}}break;case 31:case 13:T=Lr(c,2),T!==null&&ti(T,c,2),Qu(),Od(c,2)}if(c=zd(s),c===null&&gd(t,n,s,uc,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else gd(t,n,s,null,a)}}function zd(t){return t=Ef(t),Id(t)}var uc=null;function Id(t){if(uc=null,t=ze(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function Zv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Lt:return 2;case kt:return 8;case Mt:case St:return 32;case jt:return 268435456;default:return 32}default:return 32}}var Bd=!1,cr=null,fr=null,hr=null,vl=new Map,Sl=new Map,dr=[],eT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jv(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function yl(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&qv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function nT(t,n,a,s,u){switch(n){case"focusin":return cr=yl(cr,t,n,a,s,u),!0;case"dragenter":return fr=yl(fr,t,n,a,s,u),!0;case"mouseover":return hr=yl(hr,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return vl.set(c,yl(vl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,Sl.set(c,yl(Sl.get(c)||null,t,n,a,s,u)),!0}return!1}function Kv(t){var n=ze(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ft(t.priority,function(){Wv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ft(t.priority,function(){Wv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=zd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);yf=s,a.target.dispatchEvent(s),yf=null}else return n=ge(a),n!==null&&qv(n),t.blockedOn=a,!1;n.shift()}return!0}function Qv(t,n,a){cc(t)&&a.delete(n)}function iT(){Bd=!1,cr!==null&&cc(cr)&&(cr=null),fr!==null&&cc(fr)&&(fr=null),hr!==null&&cc(hr)&&(hr=null),vl.forEach(Qv),Sl.forEach(Qv)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,Bd||(Bd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,iT)))}var hc=null;function Jv(t){hc!==t&&(hc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Id(s||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,Sh(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function to(t){function n(P){return fc(P,t)}cr!==null&&fc(cr,t),fr!==null&&fc(fr,t),hr!==null&&fc(hr,t),vl.forEach(n),Sl.forEach(n);for(var a=0;a<dr.length;a++){var s=dr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)Kv(a),a.blockedOn===null&&dr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],S=u[Wt]||null;if(typeof c=="function")S||Jv(a);else if(S){var T=null;if(c&&c.hasAttribute("formAction")){if(u=c,S=c[Wt]||null)T=S.formAction;else if(Id(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Jv(a)}}}function $v(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Fd(t){this._internalRoot=t}dc.prototype.render=Fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=hi();kv(a,s,t,n,null,null)},dc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;kv(t.current,2,null,t,null,null),Qu(),n[ie]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<dr.length&&n!==0&&n<dr[a].priority;a++);dr.splice(a,0,t),a===0&&Kv(t)}};var tS=e.version;if(tS!=="19.3.1")throw Error(r(527,tS,"19.3.1"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var aT={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Me=pc.inject(aT),an=pc}catch{}}return El.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=X_,c=k_,S=Y_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Vv(t,1,!1,null,null,a,s,null,u,c,S,$v),t[ie]=n.current,md(t),new Fd(n)},El.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=X_,S=k_,T=Y_,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Vv(t,1,!0,n,a??null,s,u,P,c,S,T,$v),n.context=Xv(null),a=n.current,s=hi(),s=dt(s),u=Qa(s),u.callback=null,Ja(a,u,s),a=s,n.current.lanes=a,Dr(n,a),ia(n),t[ie]=n.current,md(t),new dc(n)},El.version="19.3.1",El}var lS;function dT(){if(lS)return Gd.exports;lS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gd.exports=hT(),Gd.exports}var pT=dT();const zm="180",So={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mT=0,uS=1,gT=2,Ry=1,_T=2,La=3,br=0,ii=1,Oa=2,Mr=0,yo=1,cS=2,fS=3,hS=4,vT=5,as=100,ST=101,yT=102,ET=103,xT=104,MT=200,TT=201,bT=202,AT=203,Ap=204,Rp=205,RT=206,CT=207,wT=208,DT=209,UT=210,NT=211,LT=212,OT=213,PT=214,Cp=0,wp=1,Dp=2,xo=3,Up=4,Np=5,Lp=6,Op=7,Cy=0,zT=1,IT=2,Tr=0,BT=1,FT=2,HT=3,GT=4,VT=5,XT=6,kT=7,wy=300,Mo=301,To=302,Pp=303,zp=304,cf=306,Ip=1e3,os=1001,Bp=1002,_i=1003,YT=1004,mc=1005,Ni=1006,Yd=1007,ls=1008,Ba=1009,Dy=1010,Uy=1011,Ll=1012,Im=1013,us=1014,za=1015,Vl=1016,Bm=1017,Fm=1018,Ol=1020,Ny=35902,Ly=35899,Oy=1021,Py=1022,Li=1023,Pl=1026,zl=1027,zy=1028,Hm=1029,Iy=1030,Gm=1031,Vm=1033,Vc=33776,Xc=33777,kc=33778,Yc=33779,Fp=35840,Hp=35841,Gp=35842,Vp=35843,Xp=36196,kp=37492,Yp=37496,qp=37808,Wp=37809,Zp=37810,jp=37811,Kp=37812,Qp=37813,Jp=37814,$p=37815,tm=37816,em=37817,nm=37818,im=37819,am=37820,rm=37821,sm=36492,om=36494,lm=36495,um=36283,cm=36284,fm=36285,hm=36286,qT=3200,WT=3201,ZT=0,jT=1,xr="",gi="srgb",bo="srgb-linear",Kc="linear",Ye="srgb",eo=7680,dS=519,KT=512,QT=513,JT=514,By=515,$T=516,tb=517,eb=518,nb=519,pS=35044,mS="300 es",oa=2e3,Qc=2001;class ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,dm=180/Math.PI;function Xl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function ib(o,e){return(o%e+e)%e}function qd(o,e,i){return(1-i)*o+i*e}function xl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ab={DEG2RAD:qc};class ve{constructor(e=0,i=0){ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let _=r[l+0],m=r[l+1],g=r[l+2],p=r[l+3];const v=f[h+0],E=f[h+1],M=f[h+2],A=f[h+3];if(d===0){e[i+0]=_,e[i+1]=m,e[i+2]=g,e[i+3]=p;return}if(d===1){e[i+0]=v,e[i+1]=E,e[i+2]=M,e[i+3]=A;return}if(p!==A||_!==v||m!==E||g!==M){let x=1-d;const y=_*v+m*E+g*M+p*A,U=y>=0?1:-1,N=1-y*y;if(N>Number.EPSILON){const B=Math.sqrt(N),z=Math.atan2(B,y*U);x=Math.sin(x*z)/B,d=Math.sin(d*z)/B}const C=d*U;if(_=_*x+v*C,m=m*x+E*C,g=g*x+M*C,p=p*x+A*C,x===1-d){const B=1/Math.sqrt(_*_+m*m+g*g+p*p);_*=B,m*=B,g*=B,p*=B}}e[i]=_,e[i+1]=m,e[i+2]=g,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],_=r[l+1],m=r[l+2],g=r[l+3],p=f[h],v=f[h+1],E=f[h+2],M=f[h+3];return e[i]=d*M+g*p+_*E-m*v,e[i+1]=_*M+g*v+m*p-d*E,e[i+2]=m*M+g*E+d*v-_*p,e[i+3]=g*M-d*p-_*v-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,m=d(r/2),g=d(l/2),p=d(f/2),v=_(r/2),E=_(l/2),M=_(f/2);switch(h){case"XYZ":this._x=v*g*p+m*E*M,this._y=m*E*p-v*g*M,this._z=m*g*M+v*E*p,this._w=m*g*p-v*E*M;break;case"YXZ":this._x=v*g*p+m*E*M,this._y=m*E*p-v*g*M,this._z=m*g*M-v*E*p,this._w=m*g*p+v*E*M;break;case"ZXY":this._x=v*g*p-m*E*M,this._y=m*E*p+v*g*M,this._z=m*g*M+v*E*p,this._w=m*g*p-v*E*M;break;case"ZYX":this._x=v*g*p-m*E*M,this._y=m*E*p+v*g*M,this._z=m*g*M-v*E*p,this._w=m*g*p+v*E*M;break;case"YZX":this._x=v*g*p+m*E*M,this._y=m*E*p+v*g*M,this._z=m*g*M-v*E*p,this._w=m*g*p-v*E*M;break;case"XZY":this._x=v*g*p-m*E*M,this._y=m*E*p-v*g*M,this._z=m*g*M+v*E*p,this._w=m*g*p+v*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],_=i[9],m=i[2],g=i[6],p=i[10],v=r+d+p;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(g-_)*E,this._y=(f-m)*E,this._z=(h-l)*E}else if(r>d&&r>p){const E=2*Math.sqrt(1+r-d-p);this._w=(g-_)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(f+m)/E}else if(d>p){const E=2*Math.sqrt(1+d-r-p);this._w=(f-m)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(_+g)/E}else{const E=2*Math.sqrt(1+p-r-d);this._w=(h-l)/E,this._x=(f+m)/E,this._y=(_+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,_=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-f*_,this._y=l*g+h*_+f*d-r*m,this._z=f*g+h*m+r*_-l*d,this._w=h*g-r*d-l*_-f*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*f+i*this._z,this.normalize(),this}const m=Math.sqrt(_),g=Math.atan2(m,d),p=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=h*p+this._w*v,this._x=r*p+this._x*v,this._y=l*p+this._y*v,this._z=f*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,_=e.w,m=2*(h*l-d*r),g=2*(d*i-f*l),p=2*(f*r-h*i);return this.x=i+_*m+h*p-d*g,this.y=r+_*g+d*m-f*p,this.z=l+_*p+f*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,_=i.z;return this.x=l*_-f*d,this.y=f*h-r*_,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wd=new ot,gS=new cs;class pe{constructor(e,i,r,l,f,h,d,_,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,m)}set(e,i,r,l,f,h,d,_,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=f,g[5]=_,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],_=r[6],m=r[1],g=r[4],p=r[7],v=r[2],E=r[5],M=r[8],A=l[0],x=l[3],y=l[6],U=l[1],N=l[4],C=l[7],B=l[2],z=l[5],O=l[8];return f[0]=h*A+d*U+_*B,f[3]=h*x+d*N+_*z,f[6]=h*y+d*C+_*O,f[1]=m*A+g*U+p*B,f[4]=m*x+g*N+p*z,f[7]=m*y+g*C+p*O,f[2]=v*A+E*U+M*B,f[5]=v*x+E*N+M*z,f[8]=v*y+E*C+M*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*f*g+r*d*_+l*f*m-l*h*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],g=e[8],p=g*h-d*m,v=d*_-g*f,E=m*f-h*_,M=i*p+r*v+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=p*A,e[1]=(l*m-g*r)*A,e[2]=(d*r-l*h)*A,e[3]=v*A,e[4]=(g*i-l*_)*A,e[5]=(l*f-d*i)*A,e[6]=E*A,e[7]=(r*_-m*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const _=Math.cos(f),m=Math.sin(f);return this.set(r*_,r*m,-r*(_*h+m*d)+h+e,-l*m,l*_,-l*(-m*h+_*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Zd.makeScale(e,i)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new pe;function Fy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function rb(){const o=Jc("canvas");return o.style.display="block",o}const _S={};function Il(o){o in _S||(_S[o]=!0,console.warn(o))}function sb(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const vS=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),SS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ob(){const o={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ye&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=Eo(l.r),l.g=Eo(l.g),l.b=Eo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===xr?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Il("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Il("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[bo]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:vS,fromXYZ:SS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ye,toXYZ:vS,fromXYZ:SS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Oe=ob();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class lb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{no===void 0&&(no=Jc("canvas")),no.width=e.width,no.height=e.height;const l=no.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=no}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ia(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ia(i[r]/255)*255):i[r]=Ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ub=0;class Xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(jd(l[h].image)):f.push(jd(l[h]))}else f=jd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function jd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cb=0;const Kd=new ot;class Vn extends ds{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=os,l=os,f=Ni,h=ls,d=Li,_=Ba,m=Vn.DEFAULT_ANISOTROPY,g=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Xl(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=_,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ip:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case Bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ip:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case Bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wy;Vn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,m=_[0],g=_[4],p=_[8],v=_[1],E=_[5],M=_[9],A=_[2],x=_[6],y=_[10];if(Math.abs(g-v)<.01&&Math.abs(p-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(p+A)<.1&&Math.abs(M+x)<.1&&Math.abs(m+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,C=(E+1)/2,B=(y+1)/2,z=(g+v)/4,O=(p+A)/4,G=(M+x)/4;return N>C&&N>B?N<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(N),l=z/r,f=O/r):C>B?C<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(C),r=z/l,f=G/l):B<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(B),r=O/f,l=G/f),this.set(r,l,f,i),this}let U=Math.sqrt((x-M)*(x-M)+(p-A)*(p-A)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(x-M)/U,this.y=(p-A)/U,this.z=(v-g)/U,this.w=Math.acos((m+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fb extends ds{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Xm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends fb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Hy extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hb extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Gi):Gi.fromBufferAttribute(f,h),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),_c.subVectors(this.max,Ml),io.subVectors(e.a,Ml),ao.subVectors(e.b,Ml),ro.subVectors(e.c,Ml),mr.subVectors(ao,io),gr.subVectors(ro,ao),Qr.subVectors(io,ro);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Qr.z,Qr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Qr.z,0,-Qr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Qr.y,Qr.x,0];return!Qd(i,io,ao,ro,_c)||(i=[1,0,0,0,1,0,0,0,1],!Qd(i,io,ao,ro,_c))?!1:(vc.crossVectors(mr,gr),i=[vc.x,vc.y,vc.z],Qd(i,io,ao,ro,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Gi=new ot,gc=new kl,io=new ot,ao=new ot,ro=new ot,mr=new ot,gr=new ot,Qr=new ot,Ml=new ot,_c=new ot,vc=new ot,Jr=new ot;function Qd(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Jr.fromArray(o,f);const d=l.x*Math.abs(Jr.x)+l.y*Math.abs(Jr.y)+l.z*Math.abs(Jr.z),_=e.dot(Jr),m=i.dot(Jr),g=r.dot(Jr);if(Math.max(-Math.max(_,m,g),Math.min(_,m,g))>d)return!1}return!0}const db=new kl,Tl=new ot,Jd=new ot;class km{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):db.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Tl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Jd)),this.expandByPoint(Tl.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ca=new ot,$d=new ot,Sc=new ot,_r=new ot,tp=new ot,yc=new ot,ep=new ot;class Gy{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){$d.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),_r.copy(this.origin).sub($d);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Sc),d=_r.dot(this.direction),_=-_r.dot(Sc),m=_r.lengthSq(),g=Math.abs(1-h*h);let p,v,E,M;if(g>0)if(p=h*_-d,v=h*d-_,M=f*g,p>=0)if(v>=-M)if(v<=M){const A=1/g;p*=A,v*=A,E=p*(p+h*v+2*d)+v*(h*p+v+2*_)+m}else v=f,p=Math.max(0,-(h*v+d)),E=-p*p+v*(v+2*_)+m;else v=-f,p=Math.max(0,-(h*v+d)),E=-p*p+v*(v+2*_)+m;else v<=-M?(p=Math.max(0,-(-h*f+d)),v=p>0?-f:Math.min(Math.max(-f,-_),f),E=-p*p+v*(v+2*_)+m):v<=M?(p=0,v=Math.min(Math.max(-f,-_),f),E=v*(v+2*_)+m):(p=Math.max(0,-(h*f+d)),v=p>0?f:Math.min(Math.max(-f,-_),f),E=-p*p+v*(v+2*_)+m);else v=h>0?-f:f,p=Math.max(0,-(h*v+d)),E=-p*p+v*(v+2*_)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy($d).addScaledVector(Sc,v),E}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const r=Ca.dot(this.direction),l=Ca.dot(Ca)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,_=r+h;return _<0?null:d<0?this.at(_,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,_;const m=1/this.direction.x,g=1/this.direction.y,p=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),g>=0?(f=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(f=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-v.z)*p,_=(e.max.z-v.z)*p):(d=(e.max.z-v.z)*p,_=(e.min.z-v.z)*p),r>_||d>l)||((d>r||r!==r)&&(r=d),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,r,l,f){tp.subVectors(i,e),yc.subVectors(r,e),ep.crossVectors(tp,yc);let h=this.direction.dot(ep),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;_r.subVectors(this.origin,e);const _=d*this.direction.dot(yc.crossVectors(_r,yc));if(_<0)return null;const m=d*this.direction.dot(tp.cross(_r));if(m<0||_+m>h)return null;const g=-d*_r.dot(ep);return g<0?null:this.at(g/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(e,i,r,l,f,h,d,_,m,g,p,v,E,M,A,x){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,m,g,p,v,E,M,A,x)}set(e,i,r,l,f,h,d,_,m,g,p,v,E,M,A,x){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=f,y[5]=h,y[9]=d,y[13]=_,y[2]=m,y[6]=g,y[10]=p,y[14]=v,y[3]=E,y[7]=M,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/so.setFromMatrixColumn(e,0).length(),f=1/so.setFromMatrixColumn(e,1).length(),h=1/so.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),_=Math.cos(l),m=Math.sin(l),g=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const v=h*g,E=h*p,M=d*g,A=d*p;i[0]=_*g,i[4]=-_*p,i[8]=m,i[1]=E+M*m,i[5]=v-A*m,i[9]=-d*_,i[2]=A-v*m,i[6]=M+E*m,i[10]=h*_}else if(e.order==="YXZ"){const v=_*g,E=_*p,M=m*g,A=m*p;i[0]=v+A*d,i[4]=M*d-E,i[8]=h*m,i[1]=h*p,i[5]=h*g,i[9]=-d,i[2]=E*d-M,i[6]=A+v*d,i[10]=h*_}else if(e.order==="ZXY"){const v=_*g,E=_*p,M=m*g,A=m*p;i[0]=v-A*d,i[4]=-h*p,i[8]=M+E*d,i[1]=E+M*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*m,i[6]=d,i[10]=h*_}else if(e.order==="ZYX"){const v=h*g,E=h*p,M=d*g,A=d*p;i[0]=_*g,i[4]=M*m-E,i[8]=v*m+A,i[1]=_*p,i[5]=A*m+v,i[9]=E*m-M,i[2]=-m,i[6]=d*_,i[10]=h*_}else if(e.order==="YZX"){const v=h*_,E=h*m,M=d*_,A=d*m;i[0]=_*g,i[4]=A-v*p,i[8]=M*p+E,i[1]=p,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*p+M,i[10]=v-A*p}else if(e.order==="XZY"){const v=h*_,E=h*m,M=d*_,A=d*m;i[0]=_*g,i[4]=-p,i[8]=m*g,i[1]=v*p+A,i[5]=h*g,i[9]=E*p-M,i[2]=M*p-E,i[6]=d*g,i[10]=A*p+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pb,e,mb)}lookAt(e,i,r){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),vr.crossVectors(r,pi),vr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),vr.crossVectors(r,pi)),vr.normalize(),Ec.crossVectors(pi,vr),l[0]=vr.x,l[4]=Ec.x,l[8]=pi.x,l[1]=vr.y,l[5]=Ec.y,l[9]=pi.y,l[2]=vr.z,l[6]=Ec.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],_=r[8],m=r[12],g=r[1],p=r[5],v=r[9],E=r[13],M=r[2],A=r[6],x=r[10],y=r[14],U=r[3],N=r[7],C=r[11],B=r[15],z=l[0],O=l[4],G=l[8],w=l[12],D=l[1],I=l[5],tt=l[9],rt=l[13],ct=l[2],V=l[6],X=l[10],$=l[14],q=l[3],vt=l[7],yt=l[11],wt=l[15];return f[0]=h*z+d*D+_*ct+m*q,f[4]=h*O+d*I+_*V+m*vt,f[8]=h*G+d*tt+_*X+m*yt,f[12]=h*w+d*rt+_*$+m*wt,f[1]=g*z+p*D+v*ct+E*q,f[5]=g*O+p*I+v*V+E*vt,f[9]=g*G+p*tt+v*X+E*yt,f[13]=g*w+p*rt+v*$+E*wt,f[2]=M*z+A*D+x*ct+y*q,f[6]=M*O+A*I+x*V+y*vt,f[10]=M*G+A*tt+x*X+y*yt,f[14]=M*w+A*rt+x*$+y*wt,f[3]=U*z+N*D+C*ct+B*q,f[7]=U*O+N*I+C*V+B*vt,f[11]=U*G+N*tt+C*X+B*yt,f[15]=U*w+N*rt+C*$+B*wt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],_=e[9],m=e[13],g=e[2],p=e[6],v=e[10],E=e[14],M=e[3],A=e[7],x=e[11],y=e[15];return M*(+f*_*p-l*m*p-f*d*v+r*m*v+l*d*E-r*_*E)+A*(+i*_*E-i*m*v+f*h*v-l*h*E+l*m*g-f*_*g)+x*(+i*m*p-i*d*E-f*h*p+r*h*E+f*d*g-r*m*g)+y*(-l*d*g-i*_*p+i*d*v+l*h*p-r*h*v+r*_*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],g=e[8],p=e[9],v=e[10],E=e[11],M=e[12],A=e[13],x=e[14],y=e[15],U=p*x*m-A*v*m+A*_*E-d*x*E-p*_*y+d*v*y,N=M*v*m-g*x*m-M*_*E+h*x*E+g*_*y-h*v*y,C=g*A*m-M*p*m+M*d*E-h*A*E-g*d*y+h*p*y,B=M*p*_-g*A*_-M*d*v+h*A*v+g*d*x-h*p*x,z=i*U+r*N+l*C+f*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=U*O,e[1]=(A*v*f-p*x*f-A*l*E+r*x*E+p*l*y-r*v*y)*O,e[2]=(d*x*f-A*_*f+A*l*m-r*x*m-d*l*y+r*_*y)*O,e[3]=(p*_*f-d*v*f-p*l*m+r*v*m+d*l*E-r*_*E)*O,e[4]=N*O,e[5]=(g*x*f-M*v*f+M*l*E-i*x*E-g*l*y+i*v*y)*O,e[6]=(M*_*f-h*x*f-M*l*m+i*x*m+h*l*y-i*_*y)*O,e[7]=(h*v*f-g*_*f+g*l*m-i*v*m-h*l*E+i*_*E)*O,e[8]=C*O,e[9]=(M*p*f-g*A*f-M*r*E+i*A*E+g*r*y-i*p*y)*O,e[10]=(h*A*f-M*d*f+M*r*m-i*A*m-h*r*y+i*d*y)*O,e[11]=(g*d*f-h*p*f-g*r*m+i*p*m+h*r*E-i*d*E)*O,e[12]=B*O,e[13]=(g*A*l-M*p*l+M*r*v-i*A*v-g*r*x+i*p*x)*O,e[14]=(M*d*l-h*A*l-M*r*_+i*A*_+h*r*x-i*d*x)*O,e[15]=(h*p*l-g*d*l+g*r*_-i*p*_-h*r*v+i*d*v)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,_=e.z,m=f*h,g=f*d;return this.set(m*h+r,m*d-l*_,m*_+l*d,0,m*d+l*_,g*d+r,g*_-l*h,0,m*_-l*d,g*_+l*h,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,_=i._w,m=f+f,g=h+h,p=d+d,v=f*m,E=f*g,M=f*p,A=h*g,x=h*p,y=d*p,U=_*m,N=_*g,C=_*p,B=r.x,z=r.y,O=r.z;return l[0]=(1-(A+y))*B,l[1]=(E+C)*B,l[2]=(M-N)*B,l[3]=0,l[4]=(E-C)*z,l[5]=(1-(v+y))*z,l[6]=(x+U)*z,l[7]=0,l[8]=(M+N)*O,l[9]=(x-U)*O,l[10]=(1-(v+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=so.set(l[0],l[1],l[2]).length();const h=so.set(l[4],l[5],l[6]).length(),d=so.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Vi.copy(this);const m=1/f,g=1/h,p=1/d;return Vi.elements[0]*=m,Vi.elements[1]*=m,Vi.elements[2]*=m,Vi.elements[4]*=g,Vi.elements[5]*=g,Vi.elements[6]*=g,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,i.setFromRotationMatrix(Vi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=oa,_=!1){const m=this.elements,g=2*f/(i-e),p=2*f/(r-l),v=(i+e)/(i-e),E=(r+l)/(r-l);let M,A;if(_)M=f/(h-f),A=h*f/(h-f);else if(d===oa)M=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===Qc)M=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=p,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=oa,_=!1){const m=this.elements,g=2/(i-e),p=2/(r-l),v=-(i+e)/(i-e),E=-(r+l)/(r-l);let M,A;if(_)M=1/(h-f),A=h/(h-f);else if(d===oa)M=-2/(h-f),A=-(h+f)/(h-f);else if(d===Qc)M=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=p,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const so=new ot,Vi=new xn,pb=new ot(0,0,0),mb=new ot(1,1,1),vr=new ot,Ec=new ot,pi=new ot,yS=new xn,ES=new cs;class Fa{constructor(e=0,i=0,r=0,l=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],_=l[1],m=l[5],g=l[9],p=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(_,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return yS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ES.setFromEuler(this),this.setFromQuaternion(ES,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class Vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gb=0;const xS=new ot,oo=new cs,wa=new xn,xc=new ot,bl=new ot,_b=new ot,vb=new cs,MS=new ot(1,0,0),TS=new ot(0,1,0),bS=new ot(0,0,1),AS={type:"added"},Sb={type:"removed"},lo={type:"childadded",child:null},np={type:"childremoved",child:null};class vi extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new ot,i=new Fa,r=new cs,l=new ot(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new pe}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return oo.setFromAxisAngle(e,i),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,i){return oo.setFromAxisAngle(e,i),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(MS,e)}rotateY(e){return this.rotateOnAxis(TS,e)}rotateZ(e){return this.rotateOnAxis(bS,e)}translateOnAxis(e,i){return xS.copy(e).applyQuaternion(this.quaternion),this.position.add(xS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(MS,e)}translateY(e){return this.translateOnAxis(TS,e)}translateZ(e){return this.translateOnAxis(bS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?xc.copy(e):xc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(bl,xc,this.up):wa.lookAt(xc,bl,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),oo.setFromRotationMatrix(wa),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(AS),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Sb),np.child=e,this.dispatchEvent(np),np.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(AS),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,_b),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let m=0,g=_.length;m<g;m++){const p=_[m];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,m=this.material.length;_<m;_++)d.push(f(e.materials,this.material[_]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];l.animations.push(f(e.animations,_))}}if(i){const d=h(e.geometries),_=h(e.materials),m=h(e.textures),g=h(e.images),p=h(e.shapes),v=h(e.skeletons),E=h(e.animations),M=h(e.nodes);d.length>0&&(r.geometries=d),_.length>0&&(r.materials=_),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),p.length>0&&(r.shapes=p),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),M.length>0&&(r.nodes=M)}return r.object=l,r;function h(d){const _=[];for(const m in d){const g=d[m];delete g.metadata,_.push(g)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}vi.DEFAULT_UP=new ot(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new ot,Da=new ot,ip=new ot,Ua=new ot,uo=new ot,co=new ot,RS=new ot,ap=new ot,rp=new ot,sp=new ot,op=new fn,lp=new fn,up=new fn;class ki{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Xi.subVectors(e,i),l.cross(Xi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Xi.subVectors(l,i),Da.subVectors(r,i),ip.subVectors(e,i);const h=Xi.dot(Xi),d=Xi.dot(Da),_=Xi.dot(ip),m=Da.dot(Da),g=Da.dot(ip),p=h*m-d*d;if(p===0)return f.set(0,0,0),null;const v=1/p,E=(m*_-d*g)*v,M=(h*g-d*_)*v;return f.set(1-E-M,M,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,f,h,d,_){return this.getBarycoord(e,i,r,l,Ua)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ua.x),_.addScaledVector(h,Ua.y),_.addScaledVector(d,Ua.z),_)}static getInterpolatedAttribute(e,i,r,l,f,h){return op.setScalar(0),lp.setScalar(0),up.setScalar(0),op.fromBufferAttribute(e,i),lp.fromBufferAttribute(e,r),up.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(op,f.x),h.addScaledVector(lp,f.y),h.addScaledVector(up,f.z),h}static isFrontFacing(e,i,r,l){return Xi.subVectors(r,i),Da.subVectors(e,i),Xi.cross(Da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Xi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ki.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return ki.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;uo.subVectors(l,r),co.subVectors(f,r),ap.subVectors(e,r);const _=uo.dot(ap),m=co.dot(ap);if(_<=0&&m<=0)return i.copy(r);rp.subVectors(e,l);const g=uo.dot(rp),p=co.dot(rp);if(g>=0&&p<=g)return i.copy(l);const v=_*p-g*m;if(v<=0&&_>=0&&g<=0)return h=_/(_-g),i.copy(r).addScaledVector(uo,h);sp.subVectors(e,f);const E=uo.dot(sp),M=co.dot(sp);if(M>=0&&E<=M)return i.copy(f);const A=E*m-_*M;if(A<=0&&m>=0&&M<=0)return d=m/(m-M),i.copy(r).addScaledVector(co,d);const x=g*M-E*p;if(x<=0&&p-g>=0&&E-M>=0)return RS.subVectors(f,l),d=(p-g)/(p-g+(E-M)),i.copy(l).addScaledVector(RS,d);const y=1/(x+A+v);return h=A*y,d=v*y,i.copy(r).addScaledVector(uo,h).addScaledVector(co,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function cp(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class We{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Oe.workingColorSpace){if(e=ib(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=cp(h,f,e+1/3),this.g=cp(h,f,e),this.b=cp(h,f,e-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Xy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Oe.workingToColorSpace(Hn.copy(this),e),Math.round(xe(Hn.r*255,0,255))*65536+Math.round(xe(Hn.g*255,0,255))*256+Math.round(xe(Hn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,f=Hn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let _,m;const g=(d+h)/2;if(d===h)_=0,m=0;else{const p=h-d;switch(m=g<=.5?p/(h+d):p/(2-h-d),h){case r:_=(l-f)/p+(l<f?6:0);break;case l:_=(f-r)/p+2;break;case f:_=(r-l)/p+4;break}_/=6}return e.h=_,e.s=m,e.l=g,e}getRGB(e,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=gi){Oe.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+i,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Sr),e.getHSL(Mc);const r=qd(Sr.h,Mc.h,i),l=qd(Sr.s,Mc.s,i),f=qd(Sr.l,Mc.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new We;We.NAMES=Xy;let yb=0;class ff extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=yo,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ap&&(r.blendSrc=this.blendSrc),this.blendDst!==Rp&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ky extends ff{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=new ot,Tc=new ve;let Eb=0;class ua{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=pS,this.updateRanges=[],this.gpuType=za,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array),l=ei(l,this.array),f=ei(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pS&&(e.usage=this.usage),e}}class Yy extends ua{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class qy extends ua{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ca extends ua{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xb=0;const wi=new xn,fp=new vi,fo=new ot,mi=new kl,Al=new kl,Cn=new ot;class Ar extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fy(e)?qy:Yy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,r){return wi.makeTranslation(e,i,r),this.applyMatrix4(wi),this}scale(e,i,r){return wi.makeScale(e,i,r),this.applyMatrix4(wi),this}lookAt(e){return fp.lookAt(e),fp.updateMatrix(),this.applyMatrix4(fp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ca(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];mi.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new km);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];Al.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(mi.min,Al.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,Al.max),mi.expandByPoint(Cn)):(mi.expandByPoint(Al.min),mi.expandByPoint(Al.max))}mi.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)Cn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],_=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Cn.fromBufferAttribute(d,m),_&&(fo.fromBufferAttribute(e,m),Cn.add(fo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let G=0;G<r.count;G++)d[G]=new ot,_[G]=new ot;const m=new ot,g=new ot,p=new ot,v=new ve,E=new ve,M=new ve,A=new ot,x=new ot;function y(G,w,D){m.fromBufferAttribute(r,G),g.fromBufferAttribute(r,w),p.fromBufferAttribute(r,D),v.fromBufferAttribute(f,G),E.fromBufferAttribute(f,w),M.fromBufferAttribute(f,D),g.sub(m),p.sub(m),E.sub(v),M.sub(v);const I=1/(E.x*M.y-M.x*E.y);isFinite(I)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(p,-E.y).multiplyScalar(I),x.copy(p).multiplyScalar(E.x).addScaledVector(g,-M.x).multiplyScalar(I),d[G].add(A),d[w].add(A),d[D].add(A),_[G].add(x),_[w].add(x),_[D].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,w=U.length;G<w;++G){const D=U[G],I=D.start,tt=D.count;for(let rt=I,ct=I+tt;rt<ct;rt+=3)y(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const N=new ot,C=new ot,B=new ot,z=new ot;function O(G){B.fromBufferAttribute(l,G),z.copy(B);const w=d[G];N.copy(w),N.sub(B.multiplyScalar(B.dot(w))).normalize(),C.crossVectors(z,w);const I=C.dot(_[G])<0?-1:1;h.setXYZW(G,N.x,N.y,N.z,I)}for(let G=0,w=U.length;G<w;++G){const D=U[G],I=D.start,tt=D.count;for(let rt=I,ct=I+tt;rt<ct;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ua(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new ot,f=new ot,h=new ot,d=new ot,_=new ot,m=new ot,g=new ot,p=new ot;if(e)for(let v=0,E=e.count;v<E;v+=3){const M=e.getX(v+0),A=e.getX(v+1),x=e.getX(v+2);l.fromBufferAttribute(i,M),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,x),g.subVectors(h,f),p.subVectors(l,f),g.cross(p),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,A),m.fromBufferAttribute(r,x),d.add(g),_.add(g),m.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,_.x,_.y,_.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,f),p.subVectors(l,f),g.cross(p),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(d,_){const m=d.array,g=d.itemSize,p=d.normalized,v=new m.constructor(_.length*g);let E=0,M=0;for(let A=0,x=_.length;A<x;A++){d.isInterleavedBufferAttribute?E=_[A]*d.data.stride+d.offset:E=_[A]*g;for(let y=0;y<g;y++)v[M++]=m[E++]}return new ua(v,g,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ar,r=this.index.array,l=this.attributes;for(const d in l){const _=l[d],m=e(_,r);i.setAttribute(d,m)}const f=this.morphAttributes;for(const d in f){const _=[],m=f[d];for(let g=0,p=m.length;g<p;g++){const v=m[g],E=e(v,r);_.push(E)}i.morphAttributes[d]=_}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const m in _)_[m]!==void 0&&(e[m]=_[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const m=r[_];e.data.attributes[_]=m.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const m=this.morphAttributes[_],g=[];for(let p=0,v=m.length;p<v;p++){const E=m[p];g.push(E.toJSON(e.data))}g.length>0&&(l[_]=g,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const f=e.morphAttributes;for(const m in f){const g=[],p=f[m];for(let v=0,E=p.length;v<E;v++)g.push(p[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const p=h[m];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const CS=new xn,$r=new Gy,bc=new km,wS=new ot,Ac=new ot,Rc=new ot,Cc=new ot,hp=new ot,wc=new ot,DS=new ot,Dc=new ot;class la extends vi{constructor(e=new Ar,i=new ky){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){wc.set(0,0,0);for(let _=0,m=f.length;_<m;_++){const g=d[_],p=f[_];g!==0&&(hp.fromBufferAttribute(p,e),h?wc.addScaledVector(hp,g):wc.addScaledVector(hp.sub(i),g))}i.add(wc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(f),$r.copy(e.ray).recast(e.near),!(bc.containsPoint($r.origin)===!1&&($r.intersectSphere(bc,wS)===null||$r.origin.distanceToSquared(wS)>(e.far-e.near)**2))&&(CS.copy(f).invert(),$r.copy(e.ray).applyMatrix4(CS),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,$r)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,m=f.attributes.uv,g=f.attributes.uv1,p=f.attributes.normal,v=f.groups,E=f.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,A=v.length;M<A;M++){const x=v[M],y=h[x.materialIndex],U=Math.max(x.start,E.start),N=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let C=U,B=N;C<B;C+=3){const z=d.getX(C),O=d.getX(C+1),G=d.getX(C+2);l=Uc(this,y,e,r,m,g,p,z,O,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let x=M,y=A;x<y;x+=3){const U=d.getX(x),N=d.getX(x+1),C=d.getX(x+2);l=Uc(this,h,e,r,m,g,p,U,N,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(h))for(let M=0,A=v.length;M<A;M++){const x=v[M],y=h[x.materialIndex],U=Math.max(x.start,E.start),N=Math.min(_.count,Math.min(x.start+x.count,E.start+E.count));for(let C=U,B=N;C<B;C+=3){const z=C,O=C+1,G=C+2;l=Uc(this,y,e,r,m,g,p,z,O,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),A=Math.min(_.count,E.start+E.count);for(let x=M,y=A;x<y;x+=3){const U=x,N=x+1,C=x+2;l=Uc(this,h,e,r,m,g,p,U,N,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Mb(o,e,i,r,l,f,h,d){let _;if(e.side===ii?_=r.intersectTriangle(h,f,l,!0,d):_=r.intersectTriangle(l,f,h,e.side===br,d),_===null)return null;Dc.copy(d),Dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Dc);return m<i.near||m>i.far?null:{distance:m,point:Dc.clone(),object:o}}function Uc(o,e,i,r,l,f,h,d,_,m){o.getVertexPosition(d,Ac),o.getVertexPosition(_,Rc),o.getVertexPosition(m,Cc);const g=Mb(o,e,i,r,Ac,Rc,Cc,DS);if(g){const p=new ot;ki.getBarycoord(DS,Ac,Rc,Cc,p),l&&(g.uv=ki.getInterpolatedAttribute(l,d,_,m,p,new ve)),f&&(g.uv1=ki.getInterpolatedAttribute(f,d,_,m,p,new ve)),h&&(g.normal=ki.getInterpolatedAttribute(h,d,_,m,p,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:_,c:m,normal:new ot,materialIndex:0};ki.getNormal(Ac,Rc,Cc,v.normal),g.face=v,g.barycoord=p}return g}class Yl extends Ar{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const _=[],m=[],g=[],p=[];let v=0,E=0;M("z","y","x",-1,-1,r,i,e,h,f,0),M("z","y","x",1,-1,r,i,-e,h,f,1),M("x","z","y",1,1,e,r,i,l,h,2),M("x","z","y",1,-1,e,r,-i,l,h,3),M("x","y","z",1,-1,e,i,r,l,f,4),M("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new ca(m,3)),this.setAttribute("normal",new ca(g,3)),this.setAttribute("uv",new ca(p,2));function M(A,x,y,U,N,C,B,z,O,G,w){const D=C/O,I=B/G,tt=C/2,rt=B/2,ct=z/2,V=O+1,X=G+1;let $=0,q=0;const vt=new ot;for(let yt=0;yt<X;yt++){const wt=yt*I-rt;for(let Qt=0;Qt<V;Qt++){const le=Qt*D-tt;vt[A]=le*U,vt[x]=wt*N,vt[y]=ct,m.push(vt.x,vt.y,vt.z),vt[A]=0,vt[x]=0,vt[y]=z>0?1:-1,g.push(vt.x,vt.y,vt.z),p.push(Qt/O),p.push(1-yt/G),$+=1}}for(let yt=0;yt<G;yt++)for(let wt=0;wt<O;wt++){const Qt=v+wt+V*yt,le=v+wt+V*(yt+1),F=v+(wt+1)+V*(yt+1),lt=v+(wt+1)+V*yt;_.push(Qt,le,lt),_.push(le,F,lt),q+=6}d.addGroup(E,q,w),E+=q,v+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ao(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const r=Ao(o[i]);for(const l in r)e[l]=r[l]}return e}function Tb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Wy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const bb={clone:Ao,merge:Zn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends ff{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Zy extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ot,US=new ve,NS=new ve;class Di extends Zy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,i){return this.getViewBounds(e,US,NS),i.subVectors(NS,US)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/_,i-=h.offsetY*r/m,l*=h.width/_,r*=h.height/m}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ho=-90,po=1;class Cb extends vi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(ho,po,e,i);l.layers=this.layers,this.add(l);const f=new Di(ho,po,e,i);f.layers=this.layers,this.add(f);const h=new Di(ho,po,e,i);h.layers=this.layers,this.add(h);const d=new Di(ho,po,e,i);d.layers=this.layers,this.add(d);const _=new Di(ho,po,e,i);_.layers=this.layers,this.add(_);const m=new Di(ho,po,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,_]=i;for(const m of i)this.remove(m);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,m,g]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(p,v,E),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class jy extends Vn{constructor(e=[],i=Mo,r,l,f,h,d,_,m,g){super(e,i,r,l,f,h,d,_,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wb extends fs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new jy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yl(5,5,5),f=new Ha({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Mr});f.uniforms.tEquirect.value=i;const h=new la(l,f),d=i.minFilter;return i.minFilter===ls&&(i.minFilter=Ni),new Cb(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Nc extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,_=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const x=i.getJointPose(A,r),y=this._getHandJoint(m,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],v=g.position.distanceTo(p.position),E=.02,M=.005;m.inputState.pinching&&v>E+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=E-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return d!==null&&(d.visible=l!==null),_!==null&&(_.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Ub extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Nb extends Vn{constructor(e=null,i=1,r=1,l,f,h,d,_,m=_i,g=_i,p,v){super(null,h,d,_,m,g,l,f,p,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pp=new ot,Lb=new ot,Ob=new pe;class Er{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=pp.subVectors(r,i).cross(Lb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(pp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ob.getNormalMatrix(e),l=this.coplanarPoint(pp).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new km,Pb=new ve(.5,.5),Lc=new ot;class Ky{constructor(e=new Er,i=new Er,r=new Er,l=new Er,f=new Er,h=new Er){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],m=f[3],g=f[4],p=f[5],v=f[6],E=f[7],M=f[8],A=f[9],x=f[10],y=f[11],U=f[12],N=f[13],C=f[14],B=f[15];if(l[0].setComponents(m-h,E-g,y-M,B-U).normalize(),l[1].setComponents(m+h,E+g,y+M,B+U).normalize(),l[2].setComponents(m+d,E+p,y+A,B+N).normalize(),l[3].setComponents(m-d,E-p,y-A,B-N).normalize(),r)l[4].setComponents(_,v,x,C).normalize(),l[5].setComponents(m-_,E-v,y-x,B-C).normalize();else if(l[4].setComponents(m-_,E-v,y-x,B-C).normalize(),i===oa)l[5].setComponents(m+_,E+v,y+x,B+C).normalize();else if(i===Qc)l[5].setComponents(_,v,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const i=Pb.distanceTo(e.center);return ts.radius=.7071067811865476+i,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?e.max.x:e.min.x,Lc.y=l.normal.y>0?e.max.y:e.min.y,Lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zb extends Vn{constructor(e,i,r,l,f,h,d,_,m){super(e,i,r,l,f,h,d,_,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qy extends Vn{constructor(e,i,r=us,l,f,h,d=_i,_=_i,m,g=Pl,p=1){if(g!==Pl&&g!==zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:p};super(v,l,f,h,d,_,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hf extends Ar{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),_=Math.floor(l),m=d+1,g=_+1,p=e/d,v=i/_,E=[],M=[],A=[],x=[];for(let y=0;y<g;y++){const U=y*v-h;for(let N=0;N<m;N++){const C=N*p-f;M.push(C,-U,0),A.push(0,0,1),x.push(N/d),x.push(1-y/_)}}for(let y=0;y<_;y++)for(let U=0;U<d;U++){const N=U+m*y,C=U+m*(y+1),B=U+1+m*(y+1),z=U+1+m*y;E.push(N,C,z),E.push(C,B,z)}this.setIndex(E),this.setAttribute("position",new ca(M,3)),this.setAttribute("normal",new ca(A,3)),this.setAttribute("uv",new ca(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ym extends Ar{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const _=Math.min(h+d,Math.PI);let m=0;const g=[],p=new ot,v=new ot,E=[],M=[],A=[],x=[];for(let y=0;y<=r;y++){const U=[],N=y/r;let C=0;y===0&&h===0?C=.5/i:y===r&&_===Math.PI&&(C=-.5/i);for(let B=0;B<=i;B++){const z=B/i;p.x=-e*Math.cos(l+z*f)*Math.sin(h+N*d),p.y=e*Math.cos(h+N*d),p.z=e*Math.sin(l+z*f)*Math.sin(h+N*d),M.push(p.x,p.y,p.z),v.copy(p).normalize(),A.push(v.x,v.y,v.z),x.push(z+C,1-N),U.push(m++)}g.push(U)}for(let y=0;y<r;y++)for(let U=0;U<i;U++){const N=g[y][U+1],C=g[y][U],B=g[y+1][U],z=g[y+1][U+1];(y!==0||h>0)&&E.push(N,C,z),(y!==r-1||_<Math.PI)&&E.push(C,B,z)}this.setIndex(E),this.setAttribute("position",new ca(M,3)),this.setAttribute("normal",new ca(A,3)),this.setAttribute("uv",new ca(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ym(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ib extends ff{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bb extends ff{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fb extends Zy{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,d-=g*this.view.offsetY,_=d-g*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Hb extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class LS{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gb extends ds{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function OS(o,e,i,r){const l=Vb(r);switch(i){case Oy:return o*e;case zy:return o*e/l.components*l.byteLength;case Hm:return o*e/l.components*l.byteLength;case Iy:return o*e*2/l.components*l.byteLength;case Gm:return o*e*2/l.components*l.byteLength;case Py:return o*e*3/l.components*l.byteLength;case Li:return o*e*4/l.components*l.byteLength;case Vm:return o*e*4/l.components*l.byteLength;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kc:case Yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hp:case Vp:return Math.max(o,16)*Math.max(e,8)/4;case Fp:case Gp:return Math.max(o,8)*Math.max(e,8)/2;case Xp:case kp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case $p:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case tm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case em:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case sm:case om:case lm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case um:case cm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case fm:case hm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vb(o){switch(o){case Ba:case Dy:return{byteLength:1,components:1};case Ll:case Uy:case Vl:return{byteLength:2,components:1};case Bm:case Fm:return{byteLength:2,components:4};case us:case Im:case za:return{byteLength:4,components:1};case Ny:case Ly:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);function $y(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function Xb(o){const e=new WeakMap;function i(d,_){const m=d.array,g=d.usage,p=m.byteLength,v=o.createBuffer();o.bindBuffer(_,v),o.bufferData(_,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,_,m){const g=_.array,p=_.updateRanges;if(o.bindBuffer(m,d),p.length===0)o.bufferSubData(m,0,g);else{p.sort((E,M)=>E.start-M.start);let v=0;for(let E=1;E<p.length;E++){const M=p[v],A=p[E];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,p[v]=A)}p.length=v+1;for(let E=0,M=p.length;E<M;E++){const A=p[E];o.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,_));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,_),m.version=d.version}}return{get:l,remove:f,update:h}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,d1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_A=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ER=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:kb,alphahash_pars_fragment:Yb,alphamap_fragment:qb,alphamap_pars_fragment:Wb,alphatest_fragment:Zb,alphatest_pars_fragment:jb,aomap_fragment:Kb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:$b,begin_vertex:t1,beginnormal_vertex:e1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:a1,clipping_planes_fragment:r1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:l1,color_fragment:u1,color_pars_fragment:c1,color_pars_vertex:f1,color_vertex:h1,common:d1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:_1,emissivemap_fragment:v1,emissivemap_pars_fragment:S1,colorspace_fragment:y1,colorspace_pars_fragment:E1,envmap_fragment:x1,envmap_common_pars_fragment:M1,envmap_pars_fragment:T1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:z1,envmap_vertex:A1,fog_vertex:R1,fog_pars_vertex:C1,fog_fragment:w1,fog_pars_fragment:D1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:N1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:O1,lights_pars_begin:P1,lights_toon_fragment:I1,lights_toon_pars_fragment:B1,lights_phong_fragment:F1,lights_phong_pars_fragment:H1,lights_physical_fragment:G1,lights_physical_pars_fragment:V1,lights_fragment_begin:X1,lights_fragment_maps:k1,lights_fragment_end:Y1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:W1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:j1,map_fragment:K1,map_pars_fragment:Q1,map_particle_fragment:J1,map_particle_pars_fragment:$1,metalnessmap_fragment:tA,metalnessmap_pars_fragment:eA,morphinstance_vertex:nA,morphcolor_vertex:iA,morphnormal_vertex:aA,morphtarget_pars_vertex:rA,morphtarget_vertex:sA,normal_fragment_begin:oA,normal_fragment_maps:lA,normal_pars_fragment:uA,normal_pars_vertex:cA,normal_vertex:fA,normalmap_pars_fragment:hA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:pA,clearcoat_pars_fragment:mA,iridescence_pars_fragment:gA,opaque_fragment:_A,packing:vA,premultiplied_alpha_fragment:SA,project_vertex:yA,dithering_fragment:EA,dithering_pars_fragment:xA,roughnessmap_fragment:MA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:AA,shadowmap_vertex:RA,shadowmask_pars_fragment:CA,skinbase_vertex:wA,skinning_pars_vertex:DA,skinning_vertex:UA,skinnormal_vertex:NA,specularmap_fragment:LA,specularmap_pars_fragment:OA,tonemapping_fragment:PA,tonemapping_pars_fragment:zA,transmission_fragment:IA,transmission_pars_fragment:BA,uv_pars_fragment:FA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:VA,background_vert:XA,background_frag:kA,backgroundCube_vert:YA,backgroundCube_frag:qA,cube_vert:WA,cube_frag:ZA,depth_vert:jA,depth_frag:KA,distanceRGBA_vert:QA,distanceRGBA_frag:JA,equirect_vert:$A,equirect_frag:tR,linedashed_vert:eR,linedashed_frag:nR,meshbasic_vert:iR,meshbasic_frag:aR,meshlambert_vert:rR,meshlambert_frag:sR,meshmatcap_vert:oR,meshmatcap_frag:lR,meshnormal_vert:uR,meshnormal_frag:cR,meshphong_vert:fR,meshphong_frag:hR,meshphysical_vert:dR,meshphysical_frag:pR,meshtoon_vert:mR,meshtoon_frag:gR,points_vert:_R,points_frag:vR,shadow_vert:SR,shadow_frag:yR,sprite_vert:ER,sprite_frag:xR},Ht={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},aa={basic:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new We(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Zn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Zn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new We(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Zn([Ht.points,Ht.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Zn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Zn([Ht.common,Ht.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Zn([Ht.sprite,Ht.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Zn([Ht.common,Ht.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Zn([Ht.lights,Ht.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};aa.physical={uniforms:Zn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Oc={r:0,b:0,g:0},es=new Fa,MR=new xn;function TR(o,e,i,r,l,f,h){const d=new We(0);let _=f===!0?0:1,m,g,p=null,v=0,E=null;function M(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:e).get(C)),C}function A(N){let C=!1;const B=M(N);B===null?y(d,_):B&&B.isColor&&(y(B,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(N,C){const B=M(C);B&&(B.isCubeTexture||B.mapping===cf)?(g===void 0&&(g=new la(new Yl(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ao(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),es.copy(C.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MR.makeRotationFromEuler(es)),g.material.toneMapped=Oe.getTransfer(B.colorSpace)!==Ye,(p!==B||v!==B.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,p=B,v=B.version,E=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new la(new hf(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ao(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(B.colorSpace)!==Ye,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(p!==B||v!==B.version||E!==o.toneMapping)&&(m.material.needsUpdate=!0,p=B,v=B.version,E=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,C){N.getRGB(Oc,Wy(o)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,C,h)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),_=C,y(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(N){_=N,y(d,_)},render:A,addToRenderList:x,dispose:U}}function bR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let f=l,h=!1;function d(D,I,tt,rt,ct){let V=!1;const X=p(rt,tt,I);f!==X&&(f=X,m(f.object)),V=E(D,rt,tt,ct),V&&M(D,rt,tt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,C(D,I,tt,rt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function _(){return o.createVertexArray()}function m(D){return o.bindVertexArray(D)}function g(D){return o.deleteVertexArray(D)}function p(D,I,tt){const rt=tt.wireframe===!0;let ct=r[D.id];ct===void 0&&(ct={},r[D.id]=ct);let V=ct[I.id];V===void 0&&(V={},ct[I.id]=V);let X=V[rt];return X===void 0&&(X=v(_()),V[rt]=X),X}function v(D){const I=[],tt=[],rt=[];for(let ct=0;ct<i;ct++)I[ct]=0,tt[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:tt,attributeDivisors:rt,object:D,attributes:{},index:null}}function E(D,I,tt,rt){const ct=f.attributes,V=I.attributes;let X=0;const $=tt.getAttributes();for(const q in $)if($[q].location>=0){const yt=ct[q];let wt=V[q];if(wt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;X++}return f.attributesNum!==X||f.index!==rt}function M(D,I,tt,rt){const ct={},V=I.attributes;let X=0;const $=tt.getAttributes();for(const q in $)if($[q].location>=0){let yt=V[q];yt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));const wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),ct[q]=wt,X++}f.attributes=ct,f.attributesNum=X,f.index=rt}function A(){const D=f.newAttributes;for(let I=0,tt=D.length;I<tt;I++)D[I]=0}function x(D){y(D,0)}function y(D,I){const tt=f.newAttributes,rt=f.enabledAttributes,ct=f.attributeDivisors;tt[D]=1,rt[D]===0&&(o.enableVertexAttribArray(D),rt[D]=1),ct[D]!==I&&(o.vertexAttribDivisor(D,I),ct[D]=I)}function U(){const D=f.newAttributes,I=f.enabledAttributes;for(let tt=0,rt=I.length;tt<rt;tt++)I[tt]!==D[tt]&&(o.disableVertexAttribArray(tt),I[tt]=0)}function N(D,I,tt,rt,ct,V,X){X===!0?o.vertexAttribIPointer(D,I,tt,ct,V):o.vertexAttribPointer(D,I,tt,rt,ct,V)}function C(D,I,tt,rt){A();const ct=rt.attributes,V=tt.getAttributes(),X=I.defaultAttributeValues;for(const $ in V){const q=V[$];if(q.location>=0){let vt=ct[$];if(vt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),vt!==void 0){const yt=vt.normalized,wt=vt.itemSize,Qt=e.get(vt);if(Qt===void 0)continue;const le=Qt.buffer,F=Qt.type,lt=Qt.bytesPerElement,W=F===o.INT||F===o.UNSIGNED_INT||vt.gpuType===Im;if(vt.isInterleavedBufferAttribute){const it=vt.data,Et=it.stride,Dt=vt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt,it.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)x(q.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,le);for(let Rt=0;Rt<q.locationSize;Rt++)N(q.location+Rt,wt/q.locationSize,F,yt,Et*lt,(Dt+wt/q.locationSize*Rt)*lt,W)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)y(q.location+it,vt.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<q.locationSize;it++)x(q.location+it);o.bindBuffer(o.ARRAY_BUFFER,le);for(let it=0;it<q.locationSize;it++)N(q.location+it,wt/q.locationSize,F,yt,wt*lt,wt/q.locationSize*it*lt,W)}}else if(X!==void 0){const yt=X[$];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(q.location,yt);break;case 3:o.vertexAttrib3fv(q.location,yt);break;case 4:o.vertexAttrib4fv(q.location,yt);break;default:o.vertexAttrib1fv(q.location,yt)}}}}U()}function B(){G();for(const D in r){const I=r[D];for(const tt in I){const rt=I[tt];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete I[tt]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const I=r[D.id];for(const tt in I){const rt=I[tt];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete I[tt]}delete r[D.id]}function O(D){for(const I in r){const tt=r[I];if(tt[D.id]===void 0)continue;const rt=tt[D.id];for(const ct in rt)g(rt[ct].object),delete rt[ct];delete tt[D.id]}}function G(){w(),h=!0,f!==l&&(f=l,m(f.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:x,disableUnusedAttributes:U}}function AR(o,e,i){let r;function l(m){r=m}function f(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,p){p!==0&&(o.drawArraysInstanced(r,m,g,p),i.update(g,r,p))}function d(m,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,p);let E=0;for(let M=0;M<p;M++)E+=g[M];i.update(E,r,1)}function _(m,g,p,v){if(p===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<m.length;M++)h(m[M],g[M],v[M]);else{E.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,p);let M=0;for(let A=0;A<p;A++)M+=g[A]*v[A];i.update(M,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function RR(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Li&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const G=O===Vl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ba&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==za&&!G)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=_(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const p=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:B,maxSamples:z}}function CR(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new Er,d=new pe,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const E=p.length!==0||v||r!==0||l;return l=v,r=p.length,E},this.beginShadows=function(){f=!0,g(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,v){i=g(p,v,0)},this.setState=function(p,v,E){const M=p.clippingPlanes,A=p.clipIntersection,x=p.clipShadows,y=o.get(p);if(!l||M===null||M.length===0||f&&!x)f?g(null):m();else{const U=f?0:r,N=U*4;let C=y.clippingState||null;_.value=C,C=g(M,v,N,E);for(let B=0;B!==N;++B)C[B]=i[B];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(p,v,E,M){const A=p!==null?p.length:0;let x=null;if(A!==0){if(x=_.value,M!==!0||x===null){const y=E+A*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<y)&&(x=new Float32Array(y));for(let N=0,C=E;N!==A;++N,C+=4)h.copy(p[N]).applyMatrix4(U,d),h.normal.toArray(x,C),x[C+3]=h.constant}_.value=x,_.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function wR(o){let e=new WeakMap;function i(h,d){return d===Pp?h.mapping=Mo:d===zp&&(h.mapping=To),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Pp||d===zp)if(e.has(h)){const _=e.get(h).texture;return i(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const m=new wb(_.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const _o=4,PS=[.125,.215,.35,.446,.526,.582],rs=20,mp=new Fb,zS=new We;let gp=null,_p=0,vp=0,Sp=!1;const is=(1+Math.sqrt(5))/2,mo=1/is,IS=[new ot(-is,mo,0),new ot(is,mo,0),new ot(-mo,0,is),new ot(mo,0,is),new ot(0,is,-mo),new ot(0,is,mo),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],DR=new ot;class BS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=DR}=f;gp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,d),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=GS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=HS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gp,_p,vp),this._renderer.xr.enabled=Sp,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Mo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Vl,format:Li,colorSpace:bo,depthBuffer:!1},l=FS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=FS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UR(f)),this._blurMaterial=NR(f,e,i)}return l}_compileMaterial(e){const i=new la(this._lodPlanes[0],e);this._renderer.compile(i,mp)}_sceneToCubeUV(e,i,r,l,f){const _=new Di(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,E=p.toneMapping;p.getClearColor(zS),p.toneMapping=Tr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const A=new ky({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),x=new la(new Yl,A);let y=!1;const U=e.background;U?U.isColor&&(A.color.copy(U),e.background=null,y=!0):(A.color.copy(zS),y=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(_.up.set(0,m[N],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+g[N],f.y,f.z)):C===1?(_.up.set(0,0,m[N]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+g[N],f.z)):(_.up.set(0,m[N],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+g[N]));const B=this._cubeSize;Pc(l,C*B,N>2?B:0,B,B),p.setRenderTarget(l),y&&p.render(x,_),p.render(e,_)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=E,p.autoClear=v,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Mo||e.mapping===To;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=GS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=HS());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new la(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;Pc(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(h,mp)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=IS[(l-f-1)%IS.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const _=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,p=new la(this._lodPlanes[l],m),v=m.uniforms,E=this._sizeLods[r]-1,M=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*rs-1),A=f/M,x=isFinite(f)?1+Math.floor(g*A):rs;x>rs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${rs}`);const y=[];let U=0;for(let O=0;O<rs;++O){const G=O/A,w=Math.exp(-G*G/2);y.push(w),O===0?U+=w:O<x&&(U+=2*w)}for(let O=0;O<y.length;O++)y[O]=y[O]/U;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=M,v.mipInt.value=N-r;const C=this._sizeLods[l],B=3*C*(l>N-_o?l-N+_o:0),z=4*(this._cubeSize-C);Pc(i,B,z,3*C,2*C),_.setRenderTarget(i),_.render(p,mp)}}function UR(o){const e=[],i=[],r=[];let l=o;const f=o-_o+1+PS.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let _=1/d;h>o-_o?_=PS[h-o+_o-1]:h===0&&(_=0),r.push(_);const m=1/(d-2),g=-m,p=1+m,v=[g,g,p,g,p,p,g,g,p,p,g,p],E=6,M=6,A=3,x=2,y=1,U=new Float32Array(A*M*E),N=new Float32Array(x*M*E),C=new Float32Array(y*M*E);for(let z=0;z<E;z++){const O=z%3*2/3-1,G=z>2?0:-1,w=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];U.set(w,A*M*z),N.set(v,x*M*z);const D=[z,z,z,z,z,z];C.set(D,y*M*z)}const B=new Ar;B.setAttribute("position",new ua(U,A)),B.setAttribute("uv",new ua(N,x)),B.setAttribute("faceIndex",new ua(C,y)),e.push(B),l>_o&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function FS(o,e,i){const r=new fs(o,e,i);return r.texture.mapping=cf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function NR(o,e,i){const r=new Float32Array(rs),l=new ot(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function HS(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function GS(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function qm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LR(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const _=d.mapping,m=_===Pp||_===zp,g=_===Mo||_===To;if(m||g){let p=e.get(d);const v=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new BS(o)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new BS(o)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let _=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&_++;return _===m}function f(d){const _=d.target;_.removeEventListener("dispose",f);const m=e.get(_);m!==void 0&&(e.delete(_),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function OR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Il("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PR(o,e,i,r){const l={},f=new WeakMap;function h(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",h),delete l[v.id];const E=f.get(v);E&&(e.remove(E),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(p,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function _(p){const v=p.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function m(p){const v=[],E=p.index,M=p.attributes.position;let A=0;if(E!==null){const U=E.array;A=E.version;for(let N=0,C=U.length;N<C;N+=3){const B=U[N+0],z=U[N+1],O=U[N+2];v.push(B,z,z,O,O,B)}}else if(M!==void 0){const U=M.array;A=M.version;for(let N=0,C=U.length/3-1;N<C;N+=3){const B=N+0,z=N+1,O=N+2;v.push(B,z,z,O,O,B)}}else return;const x=new(Fy(v)?qy:Yy)(v,1);x.version=A;const y=f.get(p);y&&e.remove(y),f.set(p,x)}function g(p){const v=f.get(p);if(v){const E=p.index;E!==null&&v.version<E.version&&m(p)}else m(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:g}}function zR(o,e,i){let r;function l(v){r=v}let f,h;function d(v){f=v.type,h=v.bytesPerElement}function _(v,E){o.drawElements(r,E,f,v*h),i.update(E,r,1)}function m(v,E,M){M!==0&&(o.drawElementsInstanced(r,E,f,v*h,M),i.update(E,r,M))}function g(v,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,f,v,0,M);let x=0;for(let y=0;y<M;y++)x+=E[y];i.update(x,r,1)}function p(v,E,M,A){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)m(v[y]/h,E[y],A[y]);else{x.multiDrawElementsInstancedWEBGL(r,E,0,f,v,0,A,0,M);let y=0;for(let U=0;U<M;U++)y+=E[U]*A[U];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=_,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=p}function IR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BR(o,e,i){const r=new WeakMap,l=new fn;function f(h,d,_){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==p){let D=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var E=D;v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),x===!0&&(C=3);let B=d.attributes.position.count*C,z=1;B>e.maxTextureSize&&(z=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*z*4*p),G=new Hy(O,B,z,p);G.type=za,G.needsUpdate=!0;const w=C*4;for(let I=0;I<p;I++){const tt=y[I],rt=U[I],ct=N[I],V=B*z*4*I;for(let X=0;X<tt.count;X++){const $=X*w;M===!0&&(l.fromBufferAttribute(tt,X),O[V+$+0]=l.x,O[V+$+1]=l.y,O[V+$+2]=l.z,O[V+$+3]=0),A===!0&&(l.fromBufferAttribute(rt,X),O[V+$+4]=l.x,O[V+$+5]=l.y,O[V+$+6]=l.z,O[V+$+7]=0),x===!0&&(l.fromBufferAttribute(ct,X),O[V+$+8]=l.x,O[V+$+9]=l.y,O[V+$+10]=l.z,O[V+$+11]=ct.itemSize===4?l.w:1)}}v={count:p,texture:G,size:new ve(B,z)},r.set(d,v),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let x=0;x<m.length;x++)M+=m[x];const A=d.morphTargetsRelative?1:1-M;_.getUniforms().setValue(o,"morphTargetBaseInfluence",A),_.getUniforms().setValue(o,"morphTargetInfluences",m)}_.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function FR(o,e,i,r){let l=new WeakMap;function f(_){const m=r.render.frame,g=_.geometry,p=e.get(_,g);if(l.get(p)!==m&&(e.update(p),l.set(p,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),l.get(_)!==m&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,m))),_.isSkinnedMesh){const v=_.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return p}function h(){l=new WeakMap}function d(_){const m=_.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}const tE=new Vn,VS=new Qy(1,1),eE=new Hy,nE=new hb,iE=new jy,XS=[],kS=[],YS=new Float32Array(16),qS=new Float32Array(9),WS=new Float32Array(4);function Do(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=XS[l];if(f===void 0&&(f=new Float32Array(l),XS[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function df(o,e){let i=kS[e];i===void 0&&(i=new Int32Array(e),kS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function HR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function VR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function XR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function kR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(Mn(i,r))return;WS.set(r),o.uniformMatrix2fv(this.addr,!1,WS),Tn(i,r)}}function YR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(Mn(i,r))return;qS.set(r),o.uniformMatrix3fv(this.addr,!1,qS),Tn(i,r)}}function qR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(Mn(i,r))return;YS.set(r),o.uniformMatrix4fv(this.addr,!1,YS),Tn(i,r)}}function WR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ZR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function jR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function KR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function QR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function tC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function eC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(VS.compareFunction=By,f=VS):f=tE,i.setTexture2D(e||f,l)}function nC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||nE,l)}function iC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||iE,l)}function aC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||eE,l)}function rC(o){switch(o){case 5126:return HR;case 35664:return GR;case 35665:return VR;case 35666:return XR;case 35674:return kR;case 35675:return YR;case 35676:return qR;case 5124:case 35670:return WR;case 35667:case 35671:return ZR;case 35668:case 35672:return jR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return $R;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return aC}}function sC(o,e){o.uniform1fv(this.addr,e)}function oC(o,e){const i=Do(e,this.size,2);o.uniform2fv(this.addr,i)}function lC(o,e){const i=Do(e,this.size,3);o.uniform3fv(this.addr,i)}function uC(o,e){const i=Do(e,this.size,4);o.uniform4fv(this.addr,i)}function cC(o,e){const i=Do(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function fC(o,e){const i=Do(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hC(o,e){const i=Do(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function dC(o,e){o.uniform1iv(this.addr,e)}function pC(o,e){o.uniform2iv(this.addr,e)}function mC(o,e){o.uniform3iv(this.addr,e)}function gC(o,e){o.uniform4iv(this.addr,e)}function _C(o,e){o.uniform1uiv(this.addr,e)}function vC(o,e){o.uniform2uiv(this.addr,e)}function SC(o,e){o.uniform3uiv(this.addr,e)}function yC(o,e){o.uniform4uiv(this.addr,e)}function EC(o,e,i){const r=this.cache,l=e.length,f=df(i,l);Mn(r,f)||(o.uniform1iv(this.addr,f),Tn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||tE,f[h])}function xC(o,e,i){const r=this.cache,l=e.length,f=df(i,l);Mn(r,f)||(o.uniform1iv(this.addr,f),Tn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||nE,f[h])}function MC(o,e,i){const r=this.cache,l=e.length,f=df(i,l);Mn(r,f)||(o.uniform1iv(this.addr,f),Tn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||iE,f[h])}function TC(o,e,i){const r=this.cache,l=e.length,f=df(i,l);Mn(r,f)||(o.uniform1iv(this.addr,f),Tn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||eE,f[h])}function bC(o){switch(o){case 5126:return sC;case 35664:return oC;case 35665:return lC;case 35666:return uC;case 35674:return cC;case 35675:return fC;case 35676:return hC;case 5124:case 35670:return dC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return gC;case 5125:return _C;case 36294:return vC;case 36295:return SC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return EC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return TC}}class AC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=rC(i.type)}}class RC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bC(i.type)}}class CC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function ZS(o,e){o.seq.push(e),o.map[e.id]=e}function wC(o,e,i){const r=o.name,l=r.length;for(yp.lastIndex=0;;){const f=yp.exec(r),h=yp.lastIndex;let d=f[1];const _=f[2]==="]",m=f[3];if(_&&(d=d|0),m===void 0||m==="["&&h+2===l){ZS(i,m===void 0?new AC(d,o,e):new RC(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new CC(d),ZS(i,p)),i=p}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);wC(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],_=r[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function jS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const DC=37297;let UC=0;function NC(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const KS=new pe;function LC(o){Oe._getMatrix(KS,Oe.workingColorSpace,o);const e=`mat3( ${KS.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Kc:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function QS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+NC(o.getShaderSource(e),d)}else return f}function OC(o,e){const i=LC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function PC(o,e){let i;switch(e){case BT:i="Linear";break;case FT:i="Reinhard";break;case HT:i="Cineon";break;case GT:i="ACESFilmic";break;case XT:i="AgX";break;case kT:i="Neutral";break;case VT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new ot;function zC(){Oe.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function BC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function FC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Rl(o){return o!==""}function JS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $S(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HC=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(o){return o.replace(HC,VC)}const GC=new Map;function VC(o,e){let i=me[e];if(i===void 0){const r=GC.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return pm(i)}const XC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ty(o){return o.replace(XC,kC)}function kC(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function ey(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===_T?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===La&&(e="SHADOWMAP_TYPE_VSM"),e}function qC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Mo:case To:e="ENVMAP_TYPE_CUBE";break;case cf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WC(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===To&&(e="ENVMAP_MODE_REFRACTION"),e}function ZC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cy:e="ENVMAP_BLENDING_MULTIPLY";break;case zT:e="ENVMAP_BLENDING_MIX";break;case IT:e="ENVMAP_BLENDING_ADD";break}return e}function jC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function KC(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const _=YC(i),m=qC(i),g=WC(i),p=ZC(i),v=jC(i),E=IC(i),M=BC(f),A=l.createProgram();let x,y,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Rl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Rl).join(`
`),y.length>0&&(y+=`
`)):(x=[ey(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),y=[ey(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Tr?"#define TONE_MAPPING":"",i.toneMapping!==Tr?me.tonemapping_pars_fragment:"",i.toneMapping!==Tr?PC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,OC("linearToOutputTexel",i.outputColorSpace),zC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Rl).join(`
`)),h=pm(h),h=JS(h,i),h=$S(h,i),d=pm(d),d=JS(d,i),d=$S(d,i),h=ty(h),d=ty(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===mS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=U+x+h,C=U+y+d,B=jS(l,l.VERTEX_SHADER,N),z=jS(l,l.FRAGMENT_SHADER,C);l.attachShader(A,B),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(I){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",rt=l.getShaderInfoLog(B)||"",ct=l.getShaderInfoLog(z)||"",V=tt.trim(),X=rt.trim(),$=ct.trim();let q=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,B,z);else{const yt=QS(l,B,"vertex"),wt=QS(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+yt+`
`+wt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||$==="")&&(vt=!1);vt&&(I.diagnostics={runnable:q,programLog:V,vertexShader:{log:X,prefix:x},fragmentShader:{log:$,prefix:y}})}l.deleteShader(B),l.deleteShader(z),G=new Wc(l,A),w=FC(l,A)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,DC)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=z,this}let QC=0;class JC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new $C(e),i.set(e,r)),r}}class $C{constructor(e){this.id=QC++,this.code=e,this.usedTimes=0}}function t2(o,e,i,r,l,f,h){const d=new Vy,_=new JC,m=new Set,g=[],p=l.logarithmicDepthBuffer,v=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return m.add(w),w===0?"uv":`uv${w}`}function x(w,D,I,tt,rt){const ct=tt.fog,V=rt.geometry,X=w.isMeshStandardMaterial?tt.environment:null,$=(w.isMeshStandardMaterial?i:e).get(w.envMap||X),q=$&&$.mapping===cf?$.image.height:null,vt=M[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=yt!==void 0?yt.length:0;let Qt=0;V.morphAttributes.position!==void 0&&(Qt=1),V.morphAttributes.normal!==void 0&&(Qt=2),V.morphAttributes.color!==void 0&&(Qt=3);let le,F,lt,W;if(vt){const Me=aa[vt];le=Me.vertexShader,F=Me.fragmentShader}else le=w.vertexShader,F=w.fragmentShader,_.update(w),lt=_.getVertexShaderID(w),W=_.getFragmentShaderID(w);const it=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Dt=rt.isInstancedMesh===!0,Rt=rt.isBatchedMesh===!0,xt=!!w.map,Gt=!!w.matcap,H=!!$,Ae=!!w.aoMap,re=!!w.lightMap,Yt=!!w.bumpMap,Ut=!!w.normalMap,ne=!!w.displacementMap,Pt=!!w.emissiveMap,se=!!w.metalnessMap,Ce=!!w.roughnessMap,De=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,nt=w.iridescence>0,pt=w.sheen>0,ut=w.transmission>0,ft=De&&!!w.anisotropyMap,zt=L&&!!w.clearcoatMap,Ct=L&&!!w.clearcoatNormalMap,qt=L&&!!w.clearcoatRoughnessMap,Kt=nt&&!!w.iridescenceMap,bt=nt&&!!w.iridescenceThicknessMap,It=pt&&!!w.sheenColorMap,ae=pt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Bt=!!w.specularColorMap,fe=!!w.specularIntensityMap,Y=ut&&!!w.transmissionMap,At=ut&&!!w.thicknessMap,Lt=!!w.gradientMap,kt=!!w.alphaMap,Mt=w.alphaTest>0,St=!!w.alphaHash,jt=!!w.extensions;let ce=Tr;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Xe={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:le,fragmentShader:F,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Rt,batchingColor:Rt&&rt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&rt.instanceColor!==null,instancingMorph:Dt&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:bo,alphaToCoverage:!!w.alphaToCoverage,map:xt,matcap:Gt,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:re,bumpMap:Yt,normalMap:Ut,displacementMap:v&&ne,emissiveMap:Pt,normalMapObjectSpace:Ut&&w.normalMapType===jT,normalMapTangentSpace:Ut&&w.normalMapType===ZT,metalnessMap:se,roughnessMap:Ce,anisotropy:De,anisotropyMap:ft,clearcoat:L,clearcoatMap:zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:qt,dispersion:b,iridescence:nt,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:It,sheenRoughnessMap:ae,specularMap:Jt,specularColorMap:Bt,specularIntensityMap:fe,transmission:ut,transmissionMap:Y,thicknessMap:At,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===yo&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Mt,alphaHash:St,combine:w.combine,mapUv:xt&&A(w.map.channel),aoMapUv:Ae&&A(w.aoMap.channel),lightMapUv:re&&A(w.lightMap.channel),bumpMapUv:Yt&&A(w.bumpMap.channel),normalMapUv:Ut&&A(w.normalMap.channel),displacementMapUv:ne&&A(w.displacementMap.channel),emissiveMapUv:Pt&&A(w.emissiveMap.channel),metalnessMapUv:se&&A(w.metalnessMap.channel),roughnessMapUv:Ce&&A(w.roughnessMap.channel),anisotropyMapUv:ft&&A(w.anisotropyMap.channel),clearcoatMapUv:zt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ae&&A(w.sheenRoughnessMap.channel),specularMapUv:Jt&&A(w.specularMap.channel),specularColorMapUv:Bt&&A(w.specularColorMap.channel),specularIntensityMapUv:fe&&A(w.specularIntensityMap.channel),transmissionMapUv:Y&&A(w.transmissionMap.channel),thicknessMapUv:At&&A(w.thicknessMap.channel),alphaMapUv:kt&&A(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||De),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!V.attributes.uv&&(xt||kt),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Et,skinning:rt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Qt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===Ye,decodeVideoTextureEmissive:Pt&&w.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(w.emissiveMap.colorSpace)===Ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oa,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function y(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)D.push(I),D.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(U(D,w),N(D,w),D.push(o.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function U(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function N(w,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),w.push(d.mask)}function C(w){const D=M[w.type];let I;if(D){const tt=aa[D];I=bb.clone(tt.uniforms)}else I=w.uniforms;return I}function B(w,D){let I;for(let tt=0,rt=g.length;tt<rt;tt++){const ct=g[tt];if(ct.cacheKey===D){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new KC(o,D,w,f),g.push(I)),I}function z(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),w.destroy()}}function O(w){_.remove(w)}function G(){_.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:C,acquireProgram:B,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:G}}function e2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function n2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ny(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function iy(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(p,v,E,M,A,x){let y=o[e];return y===void 0?(y={id:p.id,object:p,geometry:v,material:E,groupOrder:M,renderOrder:p.renderOrder,z:A,group:x},o[e]=y):(y.id=p.id,y.object=p,y.geometry=v,y.material=E,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=A,y.group=x),e++,y}function d(p,v,E,M,A,x){const y=h(p,v,E,M,A,x);E.transmission>0?r.push(y):E.transparent===!0?l.push(y):i.push(y)}function _(p,v,E,M,A,x){const y=h(p,v,E,M,A,x);E.transmission>0?r.unshift(y):E.transparent===!0?l.unshift(y):i.unshift(y)}function m(p,v){i.length>1&&i.sort(p||n2),r.length>1&&r.sort(v||ny),l.length>1&&l.sort(v||ny)}function g(){for(let p=e,v=o.length;p<v;p++){const E=o[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:_,finish:g,sort:m}}function i2(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new iy,o.set(r,[h])):l>=f.length?(h=new iy,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function a2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new We};break;case"SpotLight":i={position:new ot,direction:new ot,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function r2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let s2=0;function o2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function l2(o){const e=new a2,i=r2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ot);const l=new ot,f=new xn,h=new xn;function d(m){let g=0,p=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let E=0,M=0,A=0,x=0,y=0,U=0,N=0,C=0,B=0,z=0,O=0;m.sort(o2);for(let w=0,D=m.length;w<D;w++){const I=m[w],tt=I.color,rt=I.intensity,ct=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=tt.r*rt,p+=tt.g*rt,v+=tt.b*rt;else if(I.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(I.sh.coefficients[X],rt);O++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,q=i.get(I);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.directionalShadow[E]=q,r.directionalShadowMap[E]=V,r.directionalShadowMatrix[E]=I.shadow.matrix,U++}r.directional[E]=X,E++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(tt).multiplyScalar(rt),X.distance=ct,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,r.spot[A]=X;const $=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,$.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[A]=$.matrix,I.castShadow){const q=i.get(I);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=V,C++}A++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(tt).multiplyScalar(rt),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),r.rectArea[x]=X,x++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const $=I.shadow,q=i.get(I);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=V,r.pointShadowMatrix[M]=I.shadow.matrix,N++}r.point[M]=X,M++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(rt),X.groundColor.copy(I.groundColor).multiplyScalar(rt),r.hemi[y]=X,y++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=p,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==E||G.pointLength!==M||G.spotLength!==A||G.rectAreaLength!==x||G.hemiLength!==y||G.numDirectionalShadows!==U||G.numPointShadows!==N||G.numSpotShadows!==C||G.numSpotMaps!==B||G.numLightProbes!==O)&&(r.directional.length=E,r.spot.length=A,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,G.directionalLength=E,G.pointLength=M,G.spotLength=A,G.rectAreaLength=x,G.hemiLength=y,G.numDirectionalShadows=U,G.numPointShadows=N,G.numSpotShadows=C,G.numSpotMaps=B,G.numLightProbes=O,r.version=s2++)}function _(m,g){let p=0,v=0,E=0,M=0,A=0;const x=g.matrixWorldInverse;for(let y=0,U=m.length;y<U;y++){const N=m[y];if(N.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),p++}else if(N.isSpotLight){const C=r.spot[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),E++}else if(N.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(x),h.identity(),f.copy(N.matrixWorld),f.premultiply(x),h.extractRotation(f),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),M++}else if(N.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(x),v++}else if(N.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(x),A++}}}return{setup:d,setupView:_,state:r}}function ay(o){const e=new l2(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function f(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function _(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function u2(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new ay(o),e.set(l,[d])):f>=h.length?(d=new ay(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(o,e,i){let r=new Ky;const l=new ve,f=new ve,h=new fn,d=new Ib({depthPacking:WT}),_=new Bb,m={},g=i.maxTextureSize,p={[br]:ii,[ii]:br,[Oa]:Oa},v=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:c2,fragmentShader:f2}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const M=new Ar;M.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new la(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ry;let y=this.type;this.render=function(z,O,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const w=o.getRenderTarget(),D=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Mr),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const rt=y!==La&&this.type===La,ct=y===La&&this.type!==La;for(let V=0,X=z.length;V<X;V++){const $=z[V],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const vt=q.getFrameExtents();if(l.multiply(vt),f.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(f.x=Math.floor(g/vt.x),l.x=f.x*vt.x,q.mapSize.x=f.x),l.y>g&&(f.y=Math.floor(g/vt.y),l.y=f.y*vt.y,q.mapSize.y=f.y)),q.map===null||rt===!0||ct===!0){const wt=this.type!==La?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new fs(l.x,l.y,wt),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const yt=q.getViewportCount();for(let wt=0;wt<yt;wt++){const Qt=q.getViewport(wt);h.set(f.x*Qt.x,f.y*Qt.y,f.x*Qt.z,f.y*Qt.w),tt.viewport(h),q.updateMatrices($,wt),r=q.getFrustum(),C(O,G,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===La&&U(q,G),q.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(w,D,I)};function U(z,O){const G=e.update(A);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new fs(l.x,l.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,G,v,A,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,G,E,A,null)}function N(z,O,G,w){let D=null;const I=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)D=I;else if(D=G.isPointLight===!0?_:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const tt=D.uuid,rt=O.uuid;let ct=m[tt];ct===void 0&&(ct={},m[tt]=ct);let V=ct[rt];V===void 0&&(V=D.clone(),ct[rt]=V,O.addEventListener("dispose",B)),D=V}if(D.visible=O.visible,D.wireframe=O.wireframe,w===La?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:p[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const tt=o.properties.get(D);tt.light=G}return D}function C(z,O,G,w,D){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===La)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const rt=e.update(z),ct=z.material;if(Array.isArray(ct)){const V=rt.groups;for(let X=0,$=V.length;X<$;X++){const q=V[X],vt=ct[q.materialIndex];if(vt&&vt.visible){const yt=N(z,vt,w,D);z.onBeforeShadow(o,z,O,G,rt,yt,q),o.renderBufferDirect(G,null,rt,yt,z,q),z.onAfterShadow(o,z,O,G,rt,yt,q)}}}else if(ct.visible){const V=N(z,ct,w,D);z.onBeforeShadow(o,z,O,G,rt,V,null),o.renderBufferDirect(G,null,rt,V,z,null),z.onAfterShadow(o,z,O,G,rt,V,null)}}const tt=z.children;for(let rt=0,ct=tt.length;rt<ct;rt++)C(tt[rt],O,G,w,D)}function B(z){z.target.removeEventListener("dispose",B);for(const G in m){const w=m[G],D=z.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const d2={[Cp]:wp,[Dp]:Lp,[Up]:Op,[xo]:Np,[wp]:Cp,[Lp]:Dp,[Op]:Up,[Np]:xo};function p2(o,e){function i(){let Y=!1;const At=new fn;let Lt=null;const kt=new fn(0,0,0,0);return{setMask:function(Mt){Lt!==Mt&&!Y&&(o.colorMask(Mt,Mt,Mt,Mt),Lt=Mt)},setLocked:function(Mt){Y=Mt},setClear:function(Mt,St,jt,ce,Xe){Xe===!0&&(Mt*=ce,St*=ce,jt*=ce),At.set(Mt,St,jt,ce),kt.equals(At)===!1&&(o.clearColor(Mt,St,jt,ce),kt.copy(At))},reset:function(){Y=!1,Lt=null,kt.set(-1,0,0,0)}}}function r(){let Y=!1,At=!1,Lt=null,kt=null,Mt=null;return{setReversed:function(St){if(At!==St){const jt=e.get("EXT_clip_control");St?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),At=St;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return At},setTest:function(St){St?it(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(St){Lt!==St&&!Y&&(o.depthMask(St),Lt=St)},setFunc:function(St){if(At&&(St=d2[St]),kt!==St){switch(St){case Cp:o.depthFunc(o.NEVER);break;case wp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case xo:o.depthFunc(o.LEQUAL);break;case Up:o.depthFunc(o.EQUAL);break;case Np:o.depthFunc(o.GEQUAL);break;case Lp:o.depthFunc(o.GREATER);break;case Op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=St}},setLocked:function(St){Y=St},setClear:function(St){Mt!==St&&(At&&(St=1-St),o.clearDepth(St),Mt=St)},reset:function(){Y=!1,Lt=null,kt=null,Mt=null,At=!1}}}function l(){let Y=!1,At=null,Lt=null,kt=null,Mt=null,St=null,jt=null,ce=null,Xe=null;return{setTest:function(Me){Y||(Me?it(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Me){At!==Me&&!Y&&(o.stencilMask(Me),At=Me)},setFunc:function(Me,an,vn){(Lt!==Me||kt!==an||Mt!==vn)&&(o.stencilFunc(Me,an,vn),Lt=Me,kt=an,Mt=vn)},setOp:function(Me,an,vn){(St!==Me||jt!==an||ce!==vn)&&(o.stencilOp(Me,an,vn),St=Me,jt=an,ce=vn)},setLocked:function(Me){Y=Me},setClear:function(Me){Xe!==Me&&(o.clearStencil(Me),Xe=Me)},reset:function(){Y=!1,At=null,Lt=null,kt=null,Mt=null,St=null,jt=null,ce=null,Xe=null}}}const f=new i,h=new r,d=new l,_=new WeakMap,m=new WeakMap;let g={},p={},v=new WeakMap,E=[],M=null,A=!1,x=null,y=null,U=null,N=null,C=null,B=null,z=null,O=new We(0,0,0),G=0,w=!1,D=null,I=null,tt=null,rt=null,ct=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=$>=2);let vt=null,yt={};const wt=o.getParameter(o.SCISSOR_BOX),Qt=o.getParameter(o.VIEWPORT),le=new fn().fromArray(wt),F=new fn().fromArray(Qt);function lt(Y,At,Lt,kt){const Mt=new Uint8Array(4),St=o.createTexture();o.bindTexture(Y,St),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Lt;jt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(At+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return St}const W={};W[o.TEXTURE_2D]=lt(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(xo),Yt(!1),Ut(uS),it(o.CULL_FACE),Ae(Mr);function it(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function Et(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function Dt(Y,At){return p[Y]!==At?(o.bindFramebuffer(Y,At),p[Y]=At,Y===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=At),Y===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(Y,At){let Lt=E,kt=!1;if(Y){Lt=v.get(At),Lt===void 0&&(Lt=[],v.set(At,Lt));const Mt=Y.textures;if(Lt.length!==Mt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,jt=Mt.length;St<jt;St++)Lt[St]=o.COLOR_ATTACHMENT0+St;Lt.length=Mt.length,kt=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Lt)}function xt(Y){return M!==Y?(o.useProgram(Y),M=Y,!0):!1}const Gt={[as]:o.FUNC_ADD,[ST]:o.FUNC_SUBTRACT,[yT]:o.FUNC_REVERSE_SUBTRACT};Gt[ET]=o.MIN,Gt[xT]=o.MAX;const H={[MT]:o.ZERO,[TT]:o.ONE,[bT]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[UT]:o.SRC_ALPHA_SATURATE,[wT]:o.DST_COLOR,[RT]:o.DST_ALPHA,[AT]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[DT]:o.ONE_MINUS_DST_COLOR,[CT]:o.ONE_MINUS_DST_ALPHA,[NT]:o.CONSTANT_COLOR,[LT]:o.ONE_MINUS_CONSTANT_COLOR,[OT]:o.CONSTANT_ALPHA,[PT]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(Y,At,Lt,kt,Mt,St,jt,ce,Xe,Me){if(Y===Mr){A===!0&&(Et(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),Y!==vT){if(Y!==x||Me!==w){if((y!==as||C!==as)&&(o.blendEquation(o.FUNC_ADD),y=as,C=as),Me)switch(Y){case yo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cS:o.blendFunc(o.ONE,o.ONE);break;case fS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case yo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case fS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}U=null,N=null,B=null,z=null,O.set(0,0,0),G=0,x=Y,w=Me}return}Mt=Mt||At,St=St||Lt,jt=jt||kt,(At!==y||Mt!==C)&&(o.blendEquationSeparate(Gt[At],Gt[Mt]),y=At,C=Mt),(Lt!==U||kt!==N||St!==B||jt!==z)&&(o.blendFuncSeparate(H[Lt],H[kt],H[St],H[jt]),U=Lt,N=kt,B=St,z=jt),(ce.equals(O)===!1||Xe!==G)&&(o.blendColor(ce.r,ce.g,ce.b,Xe),O.copy(ce),G=Xe),x=Y,w=!1}function re(Y,At){Y.side===Oa?Et(o.CULL_FACE):it(o.CULL_FACE);let Lt=Y.side===ii;At&&(Lt=!Lt),Yt(Lt),Y.blending===yo&&Y.transparent===!1?Ae(Mr):Ae(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),f.setMask(Y.colorWrite);const kt=Y.stencilWrite;d.setTest(kt),kt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Pt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Y){D!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),D=Y)}function Ut(Y){Y!==mT?(it(o.CULL_FACE),Y!==I&&(Y===uS?o.cullFace(o.BACK):Y===gT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),I=Y}function ne(Y){Y!==tt&&(X&&o.lineWidth(Y),tt=Y)}function Pt(Y,At,Lt){Y?(it(o.POLYGON_OFFSET_FILL),(rt!==At||ct!==Lt)&&(o.polygonOffset(At,Lt),rt=At,ct=Lt)):Et(o.POLYGON_OFFSET_FILL)}function se(Y){Y?it(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function Ce(Y){Y===void 0&&(Y=o.TEXTURE0+V-1),vt!==Y&&(o.activeTexture(Y),vt=Y)}function De(Y,At,Lt){Lt===void 0&&(vt===null?Lt=o.TEXTURE0+V-1:Lt=vt);let kt=yt[Lt];kt===void 0&&(kt={type:void 0,texture:void 0},yt[Lt]=kt),(kt.type!==Y||kt.texture!==At)&&(vt!==Lt&&(o.activeTexture(Lt),vt=Lt),o.bindTexture(Y,At||W[Y]),kt.type=Y,kt.texture=At)}function L(){const Y=yt[vt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(Y){le.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),le.copy(Y))}function ae(Y){F.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),F.copy(Y))}function Jt(Y,At){let Lt=m.get(At);Lt===void 0&&(Lt=new WeakMap,m.set(At,Lt));let kt=Lt.get(Y);kt===void 0&&(kt=o.getUniformBlockIndex(At,Y.name),Lt.set(Y,kt))}function Bt(Y,At){const kt=m.get(At).get(Y);_.get(At)!==kt&&(o.uniformBlockBinding(At,kt,Y.__bindingPointIndex),_.set(At,kt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},vt=null,yt={},p={},v=new WeakMap,E=[],M=null,A=!1,x=null,y=null,U=null,N=null,C=null,B=null,z=null,O=new We(0,0,0),G=0,w=!1,D=null,I=null,tt=null,rt=null,ct=null,le.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:Et,bindFramebuffer:Dt,drawBuffers:Rt,useProgram:xt,setBlending:Ae,setMaterial:re,setFlipSided:Yt,setCullFace:Ut,setLineWidth:ne,setPolygonOffset:Pt,setScissorTest:se,activeTexture:Ce,bindTexture:De,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Jt,uniformBlockBinding:Bt,texStorage2D:Ct,texStorage3D:qt,texSubImage2D:pt,texSubImage3D:ut,compressedTexSubImage2D:ft,compressedTexSubImage3D:zt,scissor:It,viewport:ae,reset:fe}}function m2(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ve,g=new WeakMap;let p;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,b){return E?new OffscreenCanvas(L,b):Jc("canvas")}function A(L,b,nt){let pt=1;const ut=De(L);if((ut.width>nt||ut.height>nt)&&(pt=nt/Math.max(ut.width,ut.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*ut.width),zt=Math.floor(pt*ut.height);p===void 0&&(p=M(ft,zt));const Ct=b?M(ft,zt):p;return Ct.width=ft,Ct.height=zt,Ct.getContext("2d").drawImage(L,0,0,ft,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ft+"x"+zt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),L;return L}function x(L){return L.generateMipmaps}function y(L){o.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,b,nt,pt,ut=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=b;if(b===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),b===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const zt=ut?Kc:Oe.getTransfer(pt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=zt===Ye?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function C(L,b){let nt;return L?b===null||b===us||b===Ol?nt=o.DEPTH24_STENCIL8:b===za?nt=o.DEPTH32F_STENCIL8:b===Ll&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===Ol?nt=o.DEPTH_COMPONENT24:b===za?nt=o.DEPTH_COMPONENT32F:b===Ll&&(nt=o.DEPTH_COMPONENT16),nt}function B(L,b){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function z(L){const b=L.target;b.removeEventListener("dispose",z),G(b),b.isVideoTexture&&g.delete(b)}function O(L){const b=L.target;b.removeEventListener("dispose",O),D(b)}function G(L){const b=r.get(L);if(b.__webglInit===void 0)return;const nt=L.source,pt=v.get(nt);if(pt){const ut=pt[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&w(L),Object.keys(pt).length===0&&v.delete(nt)}r.remove(L)}function w(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const nt=L.source,pt=v.get(nt);delete pt[b.__cacheKey],h.memory.textures--}function D(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let ut=0;ut<b.__webglFramebuffer[pt].length;ut++)o.deleteFramebuffer(b.__webglFramebuffer[pt][ut]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let pt=0,ut=nt.length;pt<ut;pt++){const ft=r.get(nt[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(nt[pt])}r.remove(L)}let I=0;function tt(){I=0}function rt(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ct(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){const nt=r.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&nt.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,L,b);return}}else L.isExternalTexture&&(nt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+b)}function X(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){W(nt,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+b)}function $(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){W(nt,L,b);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+b)}function q(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){it(nt,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+b)}const vt={[Ip]:o.REPEAT,[os]:o.CLAMP_TO_EDGE,[Bp]:o.MIRRORED_REPEAT},yt={[_i]:o.NEAREST,[YT]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[Yd]:o.LINEAR_MIPMAP_NEAREST,[ls]:o.LINEAR_MIPMAP_LINEAR},wt={[KT]:o.NEVER,[nb]:o.ALWAYS,[QT]:o.LESS,[By]:o.LEQUAL,[JT]:o.EQUAL,[eb]:o.GEQUAL,[$T]:o.GREATER,[tb]:o.NOTEQUAL};function Qt(L,b){if(b.type===za&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===Yd||b.magFilter===mc||b.magFilter===ls||b.minFilter===Ni||b.minFilter===Yd||b.minFilter===mc||b.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,vt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,yt[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==mc&&b.minFilter!==ls||b.type===za&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function le(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",z));const pt=b.source;let ut=v.get(pt);ut===void 0&&(ut={},v.set(pt,ut));const ft=ct(b);if(ft!==L.__cacheKey){ut[ft]===void 0&&(ut[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),ut[ft].usedTimes++;const zt=ut[L.__cacheKey];zt!==void 0&&(ut[L.__cacheKey].usedTimes--,zt.usedTimes===0&&w(b)),L.__cacheKey=ft,L.__webglTexture=ut[ft].texture}return nt}function F(L,b,nt){return Math.floor(Math.floor(L/nt)/b)}function lt(L,b,nt,pt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,nt,pt,b.data);else{ft.sort((bt,It)=>bt.start-It.start);let zt=0;for(let bt=1;bt<ft.length;bt++){const It=ft[zt],ae=ft[bt],Jt=It.start+It.count,Bt=F(ae.start,b.width,4),fe=F(It.start,b.width,4);ae.start<=Jt+1&&Bt===fe&&F(ae.start+ae.count-1,b.width,4)===Bt?It.count=Math.max(It.count,ae.start+ae.count-It.start):(++zt,ft[zt]=ae)}ft.length=zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,It=ft.length;bt<It;bt++){const ae=ft[bt],Jt=Math.floor(ae.start/4),Bt=Math.ceil(ae.count/4),fe=Jt%b.width,Y=Math.floor(Jt/b.width),At=Bt,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,fe,Y,At,Lt,nt,pt,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function W(L,b,nt){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const ut=le(L,b),ft=b.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+nt);const zt=r.get(ft);if(ft.version!==zt.__version||ut===!0){i.activeTexture(o.TEXTURE0+nt);const Ct=Oe.getPrimaries(Oe.workingColorSpace),qt=b.colorSpace===xr?null:Oe.getPrimaries(b.colorSpace),Kt=b.colorSpace===xr||Ct===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=A(b.image,!1,l.maxTextureSize);bt=Ce(b,bt);const It=f.convert(b.format,b.colorSpace),ae=f.convert(b.type);let Jt=N(b.internalFormat,It,ae,b.colorSpace,b.isVideoTexture);Qt(pt,b);let Bt;const fe=b.mipmaps,Y=b.isVideoTexture!==!0,At=zt.__version===void 0||ut===!0,Lt=ft.dataReady,kt=B(b,bt);if(b.isDepthTexture)Jt=C(b.format===zl,b.type),At&&(Y?i.texStorage2D(o.TEXTURE_2D,1,Jt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Jt,bt.width,bt.height,0,It,ae,null));else if(b.isDataTexture)if(fe.length>0){Y&&At&&i.texStorage2D(o.TEXTURE_2D,kt,Jt,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],Y?Lt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,ae,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,It,ae,Bt.data);b.generateMipmaps=!1}else Y?(At&&i.texStorage2D(o.TEXTURE_2D,kt,Jt,bt.width,bt.height),Lt&&lt(b,bt,It,ae)):i.texImage2D(o.TEXTURE_2D,0,Jt,bt.width,bt.height,0,It,ae,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Jt,fe[0].width,fe[0].height,bt.depth);for(let Mt=0,St=fe.length;Mt<St;Mt++)if(Bt=fe[Mt],b.format!==Li)if(It!==null)if(Y){if(Lt)if(b.layerUpdates.size>0){const jt=OS(Bt.width,Bt.height,b.format,b.type);for(const ce of b.layerUpdates){const Xe=Bt.data.subarray(ce*jt/Bt.data.BYTES_PER_ELEMENT,(ce+1)*jt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ce,Bt.width,Bt.height,1,It,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,bt.depth,It,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Bt.width,Bt.height,bt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,bt.depth,It,ae,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Bt.width,Bt.height,bt.depth,0,It,ae,Bt.data)}else{Y&&At&&i.texStorage2D(o.TEXTURE_2D,kt,Jt,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],b.format!==Li?It!==null?Y?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Lt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,ae,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,It,ae,Bt.data)}else if(b.isDataArrayTexture)if(Y){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Jt,bt.width,bt.height,bt.depth),Lt)if(b.layerUpdates.size>0){const Mt=OS(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const jt=bt.data.subarray(St*Mt/bt.data.BYTES_PER_ELEMENT,(St+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,It,ae,jt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,ae,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,bt.width,bt.height,bt.depth,0,It,ae,bt.data);else if(b.isData3DTexture)Y?(At&&i.texStorage3D(o.TEXTURE_3D,kt,Jt,bt.width,bt.height,bt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,ae,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,bt.width,bt.height,bt.depth,0,It,ae,bt.data);else if(b.isFramebufferTexture){if(At)if(Y)i.texStorage2D(o.TEXTURE_2D,kt,Jt,bt.width,bt.height);else{let Mt=bt.width,St=bt.height;for(let jt=0;jt<kt;jt++)i.texImage2D(o.TEXTURE_2D,jt,Jt,Mt,St,0,It,ae,null),Mt>>=1,St>>=1}}else if(fe.length>0){if(Y&&At){const Mt=De(fe[0]);i.texStorage2D(o.TEXTURE_2D,kt,Jt,Mt.width,Mt.height)}for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],Y?Lt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It,ae,Bt):i.texImage2D(o.TEXTURE_2D,Mt,Jt,It,ae,Bt);b.generateMipmaps=!1}else if(Y){if(At){const Mt=De(bt);i.texStorage2D(o.TEXTURE_2D,kt,Jt,Mt.width,Mt.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,ae,bt)}else i.texImage2D(o.TEXTURE_2D,0,Jt,It,ae,bt);x(b)&&y(pt),zt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function it(L,b,nt){if(b.image.length!==6)return;const pt=le(L,b),ut=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const ft=r.get(ut);if(ut.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+nt);const zt=Oe.getPrimaries(Oe.workingColorSpace),Ct=b.colorSpace===xr?null:Oe.getPrimaries(b.colorSpace),qt=b.colorSpace===xr||zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let St=0;St<6;St++)!Kt&&!bt?It[St]=A(b.image[St],!0,l.maxCubemapSize):It[St]=bt?b.image[St].image:b.image[St],It[St]=Ce(b,It[St]);const ae=It[0],Jt=f.convert(b.format,b.colorSpace),Bt=f.convert(b.type),fe=N(b.internalFormat,Jt,Bt,b.colorSpace),Y=b.isVideoTexture!==!0,At=ft.__version===void 0||pt===!0,Lt=ut.dataReady;let kt=B(b,ae);Qt(o.TEXTURE_CUBE_MAP,b);let Mt;if(Kt){Y&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,fe,ae.width,ae.height);for(let St=0;St<6;St++){Mt=It[St].mipmaps;for(let jt=0;jt<Mt.length;jt++){const ce=Mt[jt];b.format!==Li?Jt!==null?Y?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ce.width,ce.height,Jt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ce.width,ce.height,Jt,Bt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,fe,ce.width,ce.height,0,Jt,Bt,ce.data)}}}else{if(Mt=b.mipmaps,Y&&At){Mt.length>0&&kt++;const St=De(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(bt){Y?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It[St].width,It[St].height,Jt,Bt,It[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,It[St].width,It[St].height,0,Jt,Bt,It[St].data);for(let jt=0;jt<Mt.length;jt++){const Xe=Mt[jt].image[St].image;Y?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,Xe.width,Xe.height,Jt,Bt,Xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,fe,Xe.width,Xe.height,0,Jt,Bt,Xe.data)}}else{Y?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Jt,Bt,It[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Jt,Bt,It[St]);for(let jt=0;jt<Mt.length;jt++){const ce=Mt[jt];Y?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,Jt,Bt,ce.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,fe,Jt,Bt,ce.image[St])}}}x(b)&&y(o.TEXTURE_CUBE_MAP),ft.__version=ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Et(L,b,nt,pt,ut,ft){const zt=f.convert(nt.format,nt.colorSpace),Ct=f.convert(nt.type),qt=N(nt.internalFormat,zt,Ct,nt.colorSpace),Kt=r.get(b),bt=r.get(nt);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const It=Math.max(1,b.width>>ft),ae=Math.max(1,b.height>>ft);ut===o.TEXTURE_3D||ut===o.TEXTURE_2D_ARRAY?i.texImage3D(ut,ft,qt,It,ae,b.depth,0,zt,Ct,null):i.texImage2D(ut,ft,qt,It,ae,0,zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Pt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,ut,bt.__webglTexture,0,ne(b)):(ut===o.TEXTURE_2D||ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,ut,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(L,b,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const pt=b.depthTexture,ut=pt&&pt.isDepthTexture?pt.type:null,ft=C(b.stencilBuffer,ut),zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ne(b);Pt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ft,b.width,b.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,L)}else{const pt=b.textures;for(let ut=0;ut<pt.length;ut++){const ft=pt[ut],zt=f.convert(ft.format,ft.colorSpace),Ct=f.convert(ft.type),qt=N(ft.internalFormat,zt,Ct,ft.colorSpace),Kt=ne(b);nt&&Pt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,qt,b.width,b.height):Pt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,qt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,qt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const ut=pt.__webglTexture,ft=ne(b);if(b.depthTexture.format===Pl)Pt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0);else if(b.depthTexture.format===zl)Pt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function xt(L){const b=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",ut)};pt.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=pt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?Rt(b.__webglFramebuffer[0],L):Rt(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),Dt(b.__webglDepthbuffer[pt],L,!1);else{const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Dt(b.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(L,b,nt){const pt=r.get(L);b!==void 0&&Et(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&xt(L)}function H(L){const b=L.texture,nt=r.get(L),pt=r.get(b);L.addEventListener("dispose",O);const ut=L.textures,ft=L.isWebGLCubeRenderTarget===!0,zt=ut.length>1;if(zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let qt=0;qt<b.mipmaps.length;qt++)nt.__webglFramebuffer[Ct][qt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Ct=0,qt=ut.length;Ct<qt;Ct++){const Kt=r.get(ut[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Pt(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ut.length;Ct++){const qt=ut[Ct];nt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const Kt=f.convert(qt.format,qt.colorSpace),bt=f.convert(qt.type),It=N(qt.internalFormat,Kt,bt,qt.colorSpace,L.isXRRenderTarget===!0),ae=ne(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,It,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Qt(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Et(nt.__webglFramebuffer[Ct][qt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt);else Et(nt.__webglFramebuffer[Ct],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);x(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Ct=0,qt=ut.length;Ct<qt;Ct++){const Kt=ut[Ct],bt=r.get(Kt);let It=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,bt.__webglTexture),Qt(It,Kt),Et(nt.__webglFramebuffer,L,Kt,o.COLOR_ATTACHMENT0+Ct,It,0),x(Kt)&&y(It)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Qt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Et(nt.__webglFramebuffer[qt],L,b,o.COLOR_ATTACHMENT0,Ct,qt);else Et(nt.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ct,0);x(b)&&y(Ct),i.unbindTexture()}L.depthBuffer&&xt(L)}function Ae(L){const b=L.textures;for(let nt=0,pt=b.length;nt<pt;nt++){const ut=b[nt];if(x(ut)){const ft=U(L),zt=r.get(ut).__webglTexture;i.bindTexture(ft,zt),y(ft),i.unbindTexture()}}}const re=[],Yt=[];function Ut(L){if(L.samples>0){if(Pt(L)===!1){const b=L.textures,nt=L.width,pt=L.height;let ut=o.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(L),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const qt=L.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ut|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ut|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,ut,o.NEAREST),_===!0&&(re.length=0,Yt.length=0,re.push(o.COLOR_ATTACHMENT0+Kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(ft),Yt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&_){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ne(L){return Math.min(l.maxSamples,L.samples)}function Pt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ce(L,b){const nt=L.colorSpace,pt=L.format,ut=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==bo&&nt!==xr&&(Oe.getTransfer(nt)===Ye?(pt!==Li||ut!==Ba)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=tt,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=Gt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Pt}function g2(o,e){function i(r,l=xr){let f;const h=Oe.getTransfer(l);if(r===Ba)return o.UNSIGNED_BYTE;if(r===Bm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Fm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Ny)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ly)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dy)return o.BYTE;if(r===Uy)return o.SHORT;if(r===Ll)return o.UNSIGNED_SHORT;if(r===Im)return o.INT;if(r===us)return o.UNSIGNED_INT;if(r===za)return o.FLOAT;if(r===Vl)return o.HALF_FLOAT;if(r===Oy)return o.ALPHA;if(r===Py)return o.RGB;if(r===Li)return o.RGBA;if(r===Pl)return o.DEPTH_COMPONENT;if(r===zl)return o.DEPTH_STENCIL;if(r===zy)return o.RED;if(r===Hm)return o.RED_INTEGER;if(r===Iy)return o.RG;if(r===Gm)return o.RG_INTEGER;if(r===Vm)return o.RGBA_INTEGER;if(r===Vc||r===Xc||r===kc||r===Yc)if(h===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Vc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Vc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fp||r===Hp||r===Gp||r===Vp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Fp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xp||r===kp||r===Yp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Xp||r===kp)return h===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Yp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qp||r===Wp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm||r===im||r===am||r===rm)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===qp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jp)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$p)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tm)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===em)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nm)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===im)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===am)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rm)return h===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sm||r===om||r===lm)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===sm)return h===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===om)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lm)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===cm||r===fm||r===hm)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===um)return f.COMPRESSED_RED_RGTC1_EXT;if(r===cm)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fm)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hm)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ol?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const _2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Jy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ha({vertexShader:_2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new la(new hf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends ds{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",_=1,m=null,g=null,p=null,v=null,E=null,M=null;const A=typeof XRWebGLBinding<"u",x=new S2,y={},U=i.getContextAttributes();let N=null,C=null;const B=[],z=[],O=new ve;let G=null;const w=new Di;w.viewport=new fn;const D=new Di;D.viewport=new fn;const I=[w,D],tt=new Hb;let rt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=B[W];return it===void 0&&(it=new dp,B[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=B[W];return it===void 0&&(it=new dp,B[W]=it),it.getGripSpace()},this.getHand=function(W){let it=B[W];return it===void 0&&(it=new dp,B[W]=it),it.getHandSpace()};function V(W){const it=z.indexOf(W.inputSource);if(it===-1)return;const Et=B[it];Et!==void 0&&(Et.update(W.inputSource,W.frame,m||h),Et.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",$);for(let W=0;W<B.length;W++){const it=z[W];it!==null&&(z[W]=null,B[W].disconnect(it))}rt=null,ct=null,x.reset();for(const W in y)delete y[W];e.setRenderTarget(N),E=null,v=null,p=null,l=null,C=null,lt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",X),l.addEventListener("inputsourceschange",$),U.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Dt=null,Rt=null;U.depth&&(Rt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=U.stencil?zl:Pl,Dt=U.stencil?Ol:us);const xt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};p=this.getBinding(),v=p.createProjectionLayer(xt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new fs(v.textureWidth,v.textureHeight,{format:Li,type:Ba,depthTexture:new Qy(v.textureWidth,v.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new fs(E.framebufferWidth,E.framebufferHeight,{format:Li,type:Ba,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(_),m=null,h=await l.requestReferenceSpace(d),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(W){for(let it=0;it<W.removed.length;it++){const Et=W.removed[it],Dt=z.indexOf(Et);Dt>=0&&(z[Dt]=null,B[Dt].disconnect(Et))}for(let it=0;it<W.added.length;it++){const Et=W.added[it];let Dt=z.indexOf(Et);if(Dt===-1){for(let xt=0;xt<B.length;xt++)if(xt>=z.length){z.push(Et),Dt=xt;break}else if(z[xt]===null){z[xt]=Et,Dt=xt;break}if(Dt===-1)break}const Rt=B[Dt];Rt&&Rt.connect(Et)}}const q=new ot,vt=new ot;function yt(W,it,Et){q.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(Et.matrixWorld);const Dt=q.distanceTo(vt),Rt=it.projectionMatrix.elements,xt=Et.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),H=Rt[14]/(Rt[10]+1),Ae=(Rt[9]+1)/Rt[5],re=(Rt[9]-1)/Rt[5],Yt=(Rt[8]-1)/Rt[0],Ut=(xt[8]+1)/xt[0],ne=Gt*Yt,Pt=Gt*Ut,se=Dt/(-Yt+Ut),Ce=se*-Yt;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ce),W.translateZ(se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Rt[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const De=Gt+se,L=H+se,b=ne-Ce,nt=Pt+(Dt-Ce),pt=Ae*H/L*De,ut=re*H/L*De;W.projectionMatrix.makePerspective(b,nt,pt,ut,De,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function wt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let it=W.near,Et=W.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(Et=x.depthFar)),tt.near=D.near=w.near=it,tt.far=D.far=w.far=Et,(rt!==tt.near||ct!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),rt=tt.near,ct=tt.far),tt.layers.mask=W.layers.mask|6,w.layers.mask=tt.layers.mask&3,D.layers.mask=tt.layers.mask&5;const Dt=W.parent,Rt=tt.cameras;wt(tt,Dt);for(let xt=0;xt<Rt.length;xt++)wt(Rt[xt],Dt);Rt.length===2?yt(tt,w,D):tt.projectionMatrix.copy(w.projectionMatrix),Qt(W,tt,Dt)};function Qt(W,it,Et){Et===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(Et.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dm*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(v===null&&E===null))return _},this.setFoveation=function(W){_=W,v!==null&&(v.fixedFoveation=W),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(tt)},this.getCameraTexture=function(W){return y[W]};let le=null;function F(W,it){if(g=it.getViewerPose(m||h),M=it,g!==null){const Et=g.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let Dt=!1;Et.length!==tt.cameras.length&&(tt.cameras.length=0,Dt=!0);for(let H=0;H<Et.length;H++){const Ae=Et[H];let re=null;if(E!==null)re=E.getViewport(Ae);else{const Ut=p.getViewSubImage(v,Ae);re=Ut.viewport,H===0&&(e.setRenderTargetTextures(C,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(C))}let Yt=I[H];Yt===void 0&&(Yt=new Di,Yt.layers.enable(H),Yt.viewport=new fn,I[H]=Yt),Yt.matrix.fromArray(Ae.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Ae.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),H===0&&(tt.matrix.copy(Yt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Dt===!0&&tt.cameras.push(Yt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=r.getBinding();const H=p.getDepthInformation(Et[0]);H&&H.isValid&&H.texture&&x.init(H,l.renderState)}if(Rt&&Rt.includes("camera-access")&&A){e.state.unbindTexture(),p=r.getBinding();for(let H=0;H<Et.length;H++){const Ae=Et[H].camera;if(Ae){let re=y[Ae];re||(re=new Jy,y[Ae]=re);const Yt=p.getCameraImage(Ae);re.sourceTexture=Yt}}}}for(let Et=0;Et<B.length;Et++){const Dt=z[Et],Rt=B[Et];Dt!==null&&Rt!==void 0&&Rt.update(Dt,it,m||h)}le&&le(W,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),M=null}const lt=new $y;lt.setAnimationLoop(F),this.setAnimationLoop=function(W){le=W},this.dispose=function(){}}}const ns=new Fa,E2=new xn;function x2(o,e){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Wy(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,U,N,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(x,y):y.isMeshToonMaterial?(f(x,y),p(x,y)):y.isMeshPhongMaterial?(f(x,y),g(x,y)):y.isMeshStandardMaterial?(f(x,y),v(x,y),y.isMeshPhysicalMaterial&&E(x,y,C)):y.isMeshMatcapMaterial?(f(x,y),M(x,y)):y.isMeshDepthMaterial?f(x,y):y.isMeshDistanceMaterial?(f(x,y),A(x,y)):y.isMeshNormalMaterial?f(x,y):y.isLineBasicMaterial?(h(x,y),y.isLineDashedMaterial&&d(x,y)):y.isPointsMaterial?_(x,y,U,N):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ii&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ii&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const U=e.get(y),N=U.envMap,C=U.envMapRotation;N&&(x.envMap.value=N,ns.copy(C),ns.x*=-1,ns.y*=-1,ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(ns)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function d(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function _(x,y,U,N){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*U,x.scale.value=N*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function E(x,y,U){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const U=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function M2(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(U,N){const C=N.program;r.uniformBlockBinding(U,C)}function m(U,N){let C=l[U.id];C===void 0&&(M(U),C=g(U),l[U.id]=C,U.addEventListener("dispose",x));const B=N.program;r.updateUBOMapping(U,B);const z=e.render.frame;f[U.id]!==z&&(v(U),f[U.id]=z)}function g(U){const N=p();U.__bindingPointIndex=N;const C=o.createBuffer(),B=U.__size,z=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,B,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function p(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const N=l[U.id],C=U.uniforms,B=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let z=0,O=C.length;z<O;z++){const G=Array.isArray(C[z])?C[z]:[C[z]];for(let w=0,D=G.length;w<D;w++){const I=G[w];if(E(I,z,w,B)===!0){const tt=I.__offset,rt=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let V=0;V<rt.length;V++){const X=rt[V],$=A(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,tt+ct,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,ct),ct+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(U,N,C,B){const z=U.value,O=N+"_"+C;if(B[O]===void 0)return typeof z=="number"||typeof z=="boolean"?B[O]=z:B[O]=z.clone(),!0;{const G=B[O];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return B[O]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function M(U){const N=U.uniforms;let C=0;const B=16;for(let O=0,G=N.length;O<G;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let D=0,I=w.length;D<I;D++){const tt=w[D],rt=Array.isArray(tt.value)?tt.value:[tt.value];for(let ct=0,V=rt.length;ct<V;ct++){const X=rt[ct],$=A(X),q=C%B,vt=q%$.boundary,yt=q+vt;C+=vt,yt!==0&&B-yt<$.storage&&(C+=B-yt),tt.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=C,C+=$.storage}}}const z=C%B;return z>0&&(C+=B-z),U.__size=C,U.__cache={},this}function A(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function x(U){const N=U.target;N.removeEventListener("dispose",x);const C=h.indexOf(N.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete f[N.id]}function y(){for(const U in l)o.deleteBuffer(l[U]);h=[],l={},f={}}return{bind:_,update:m,dispose:y}}class T2{constructor(e={}){const{canvas:i=rb(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const M=new Uint32Array(4),A=new Int32Array(4);let x=null,y=null;const U=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=gi;let z=0,O=0,G=null,w=-1,D=null;const I=new fn,tt=new fn;let rt=null;const ct=new We(0);let V=0,X=i.width,$=i.height,q=1,vt=null,yt=null;const wt=new fn(0,0,X,$),Qt=new fn(0,0,X,$);let le=!1;const F=new Ky;let lt=!1,W=!1;const it=new xn,Et=new ot,Dt=new fn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Gt(){return G===null?q:1}let H=r;function Ae(R,Q){return i.getContext(R,Q)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zm}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const Q="webgl2";if(H=Ae(Q,R),H===null)throw Ae(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,Yt,Ut,ne,Pt,se,Ce,De,L,b,nt,pt,ut,ft,zt,Ct,qt,Kt,bt,It,ae,Jt,Bt,fe;function Y(){re=new OR(H),re.init(),Jt=new g2(H,re),Yt=new RR(H,re,e,Jt),Ut=new p2(H,re),Yt.reversedDepthBuffer&&v&&Ut.buffers.depth.setReversed(!0),ne=new IR(H),Pt=new e2,se=new m2(H,re,Ut,Pt,Yt,Jt,ne),Ce=new wR(C),De=new LR(C),L=new Xb(H),Bt=new bR(H,L),b=new PR(H,L,ne,Bt),nt=new FR(H,b,L,ne),bt=new BR(H,Yt,se),Ct=new CR(Pt),pt=new t2(C,Ce,De,re,Yt,Bt,Ct),ut=new x2(C,Pt),ft=new i2,zt=new u2(re),Kt=new TR(C,Ce,De,Ut,nt,E,_),qt=new h2(C,nt,Yt),fe=new M2(H,ne,Yt,Ut),It=new AR(H,re,ne),ae=new zR(H,re,ne),ne.programs=pt.programs,C.capabilities=Yt,C.extensions=re,C.properties=Pt,C.renderLists=ft,C.shadowMap=qt,C.state=Ut,C.info=ne}Y();const At=new y2(C,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(X,$,!1))},this.getSize=function(R){return R.set(X,$)},this.setSize=function(R,Q,ht=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,$=Q,i.width=Math.floor(R*q),i.height=Math.floor(Q*q),ht===!0&&(i.style.width=R+"px",i.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(X*q,$*q).floor()},this.setDrawingBufferSize=function(R,Q,ht){X=R,$=Q,q=ht,i.width=Math.floor(R*ht),i.height=Math.floor(Q*ht),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(wt)},this.setViewport=function(R,Q,ht,dt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,Q,ht,dt),Ut.viewport(I.copy(wt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Qt)},this.setScissor=function(R,Q,ht,dt){R.isVector4?Qt.set(R.x,R.y,R.z,R.w):Qt.set(R,Q,ht,dt),Ut.scissor(tt.copy(Qt).multiplyScalar(q).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Ut.setScissorTest(le=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,ht=!0){let dt=0;if(R){let J=!1;if(G!==null){const Tt=G.texture.format;J=Tt===Vm||Tt===Gm||Tt===Hm}if(J){const Tt=G.texture.type,Ft=Tt===Ba||Tt===us||Tt===Ll||Tt===Ol||Tt===Bm||Tt===Fm,Vt=Kt.getClearColor(),Nt=Kt.getClearAlpha(),Wt=Vt.r,ie=Vt.g,te=Vt.b;Ft?(M[0]=Wt,M[1]=ie,M[2]=te,M[3]=Nt,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=Wt,A[1]=ie,A[2]=te,A[3]=Nt,H.clearBufferiv(H.COLOR,0,A))}else dt|=H.COLOR_BUFFER_BIT}Q&&(dt|=H.DEPTH_BUFFER_BIT),ht&&(dt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Kt.dispose(),ft.dispose(),zt.dispose(),Pt.dispose(),Ce.dispose(),De.dispose(),nt.dispose(),Bt.dispose(),fe.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",vn),At.removeEventListener("sessionend",zn),fa.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=ne.autoReset,Q=qt.enabled,ht=qt.autoUpdate,dt=qt.needsUpdate,J=qt.type;Y(),ne.autoReset=R,qt.enabled=Q,qt.autoUpdate=ht,qt.needsUpdate=dt,qt.type=J}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const Q=R.target;Q.removeEventListener("dispose",St),jt(Q)}function jt(R){ce(R),Pt.remove(R)}function ce(R){const Q=Pt.get(R).programs;Q!==void 0&&(Q.forEach(function(ht){pt.releaseProgram(ht)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ht,dt,J,Tt){Q===null&&(Q=Rt);const Ft=J.isMesh&&J.matrixWorld.determinant()<0,Vt=Wl(R,Q,ht,dt,J);Ut.setMaterial(dt,Ft);let Nt=ht.index,Wt=1;if(dt.wireframe===!0){if(Nt=b.getWireframeAttribute(ht),Nt===void 0)return;Wt=2}const ie=ht.drawRange,te=ht.attributes.position;let Se=ie.start*Wt,Be=(ie.start+ie.count)*Wt;Tt!==null&&(Se=Math.max(Se,Tt.start*Wt),Be=Math.min(Be,(Tt.start+Tt.count)*Wt)),Nt!==null?(Se=Math.max(Se,0),Be=Math.min(Be,Nt.count)):te!=null&&(Se=Math.max(Se,0),Be=Math.min(Be,te.count));const $e=Be-Se;if($e<0||$e===1/0)return;Bt.setup(J,dt,Vt,ht,Nt);let Pe,Ue=It;if(Nt!==null&&(Pe=L.get(Nt),Ue=ae,Ue.setIndex(Pe)),J.isMesh)dt.wireframe===!0?(Ut.setLineWidth(dt.wireframeLinewidth*Gt()),Ue.setMode(H.LINES)):Ue.setMode(H.TRIANGLES);else if(J.isLine){let ee=dt.linewidth;ee===void 0&&(ee=1),Ut.setLineWidth(ee*Gt()),J.isLineSegments?Ue.setMode(H.LINES):J.isLineLoop?Ue.setMode(H.LINE_LOOP):Ue.setMode(H.LINE_STRIP)}else J.isPoints?Ue.setMode(H.POINTS):J.isSprite&&Ue.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ue.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ee=J._multiDrawStarts,ze=J._multiDrawCounts,ge=J._multiDrawCount,Sn=Nt?L.get(Nt).bytesPerElement:1,ri=Pt.get(dt).currentProgram.getUniforms();for(let Ne=0;Ne<ge;Ne++)ri.setValue(H,"_gl_DrawID",Ne),Ue.render(ee[Ne]/Sn,ze[Ne])}else if(J.isInstancedMesh)Ue.renderInstances(Se,$e,J.count);else if(ht.isInstancedBufferGeometry){const ee=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,ze=Math.min(ht.instanceCount,ee);Ue.renderInstances(Se,$e,ze)}else Ue.render(Se,$e)};function Xe(R,Q,ht){R.transparent===!0&&R.side===Oa&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Si(R,Q,ht),R.side=br,R.needsUpdate=!0,Si(R,Q,ht),R.side=Oa):Si(R,Q,ht)}this.compile=function(R,Q,ht=null){ht===null&&(ht=R),y=zt.get(ht),y.init(Q),N.push(y),ht.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),R!==ht&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const dt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){const Vt=Tt[Ft];Xe(Vt,ht,J),dt.add(Vt)}else Xe(Tt,ht,J),dt.add(Tt)}),y=N.pop(),dt},this.compileAsync=function(R,Q,ht=null){const dt=this.compile(R,Q,ht);return new Promise(J=>{function Tt(){if(dt.forEach(function(Ft){Pt.get(Ft).currentProgram.isReady()&&dt.delete(Ft)}),dt.size===0){J(R);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Me=null;function an(R){Me&&Me(R)}function vn(){fa.stop()}function zn(){fa.start()}const fa=new $y;fa.setAnimationLoop(an),typeof self<"u"&&fa.setContext(self),this.setAnimationLoop=function(R){Me=R,At.setAnimationLoop(R),R===null?fa.stop():fa.start()},At.addEventListener("sessionstart",vn),At.addEventListener("sessionend",zn),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Q),Q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Q,G),y=zt.get(R,N.length),y.init(Q),N.push(y),it.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F.setFromProjectionMatrix(it,oa,Q.reversedDepth),W=this.localClippingEnabled,lt=Ct.init(this.clippingPlanes,W),x=ft.get(R,U.length),x.init(),U.push(x),At.enabled===!0&&At.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&Uo(Tt,Q,-1/0,C.sortObjects)}Uo(R,Q,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(vt,yt),xt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,xt&&Kt.addToRenderList(x,R),this.info.render.frame++,lt===!0&&Ct.beginShadows();const ht=y.state.shadowsArray;qt.render(ht,R,Q),lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=x.opaque,J=x.transmissive;if(y.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if(J.length>0)for(let Ft=0,Vt=Tt.length;Ft<Vt;Ft++){const Nt=Tt[Ft];Rr(dt,J,R,Nt)}xt&&Kt.render(R);for(let Ft=0,Vt=Tt.length;Ft<Vt;Ft++){const Nt=Tt[Ft];ql(x,R,Nt,Nt.viewport)}}else J.length>0&&Rr(dt,J,R,Q),xt&&Kt.render(R),ql(x,R,Q);G!==null&&O===0&&(se.updateMultisampleRenderTarget(G),se.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(C,R,Q),Bt.resetDefaultState(),w=-1,D=null,N.pop(),N.length>0?(y=N[N.length-1],lt===!0&&Ct.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Uo(R,Q,ht,dt){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ht=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){dt&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Ft=nt.update(R),Vt=R.material;Vt.visible&&x.push(R,Ft,Vt,ht,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const Ft=nt.update(R),Vt=R.material;if(dt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Dt.copy(Ft.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(Vt)){const Nt=Ft.groups;for(let Wt=0,ie=Nt.length;Wt<ie;Wt++){const te=Nt[Wt],Se=Vt[te.materialIndex];Se&&Se.visible&&x.push(R,Ft,Se,ht,Dt.z,te)}}else Vt.visible&&x.push(R,Ft,Vt,ht,Dt.z,null)}}const Tt=R.children;for(let Ft=0,Vt=Tt.length;Ft<Vt;Ft++)Uo(Tt[Ft],Q,ht,dt)}function ql(R,Q,ht,dt){const J=R.opaque,Tt=R.transmissive,Ft=R.transparent;y.setupLightsView(ht),lt===!0&&Ct.setGlobalState(C.clippingPlanes,ht),dt&&Ut.viewport(I.copy(dt)),J.length>0&&ha(J,Q,ht),Tt.length>0&&ha(Tt,Q,ht),Ft.length>0&&ha(Ft,Q,ht),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Rr(R,Q,ht,dt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[dt.id]===void 0&&(y.state.transmissionRenderTarget[dt.id]=new fs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Vl:Ba,minFilter:ls,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[dt.id],Ft=dt.viewport||I;Tt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const Vt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Wt=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(ct),V=C.getClearAlpha(),V<1&&C.setClearColor(16777215,.5),C.clear(),xt&&Kt.render(ht);const ie=C.toneMapping;C.toneMapping=Tr;const te=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),y.setupLightsView(dt),lt===!0&&Ct.setGlobalState(C.clippingPlanes,dt),ha(R,ht,dt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Be=0,$e=Q.length;Be<$e;Be++){const Pe=Q[Be],Ue=Pe.object,ee=Pe.geometry,ze=Pe.material,ge=Pe.group;if(ze.side===Oa&&Ue.layers.test(dt.layers)){const Sn=ze.side;ze.side=ii,ze.needsUpdate=!0,Cr(Ue,ht,dt,ee,ze,ge),ze.side=Sn,ze.needsUpdate=!0,Se=!0}}Se===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Vt,Nt,Wt),C.setClearColor(ct,V),te!==void 0&&(dt.viewport=te),C.toneMapping=ie}function ha(R,Q,ht){const dt=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Tt=R.length;J<Tt;J++){const Ft=R[J],Vt=Ft.object,Nt=Ft.geometry,Wt=Ft.group;let ie=Ft.material;ie.allowOverride===!0&&dt!==null&&(ie=dt),Vt.layers.test(ht.layers)&&Cr(Vt,Q,ht,Nt,ie,Wt)}}function Cr(R,Q,ht,dt,J,Tt){R.onBeforeRender(C,Q,ht,dt,J,Tt),R.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,Q,ht,dt,R,Tt),J.transparent===!0&&J.side===Oa&&J.forceSinglePass===!1?(J.side=ii,J.needsUpdate=!0,C.renderBufferDirect(ht,Q,dt,J,R,Tt),J.side=br,J.needsUpdate=!0,C.renderBufferDirect(ht,Q,dt,J,R,Tt),J.side=Oa):C.renderBufferDirect(ht,Q,dt,J,R,Tt),R.onAfterRender(C,Q,ht,dt,J,Tt)}function Si(R,Q,ht){Q.isScene!==!0&&(Q=Rt);const dt=Pt.get(R),J=y.state.lights,Tt=y.state.shadowsArray,Ft=J.state.version,Vt=pt.getParameters(R,J.state,Tt,Q,ht),Nt=pt.getProgramCacheKey(Vt);let Wt=dt.programs;dt.environment=R.isMeshStandardMaterial?Q.environment:null,dt.fog=Q.fog,dt.envMap=(R.isMeshStandardMaterial?De:Ce).get(R.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",St),Wt=new Map,dt.programs=Wt);let ie=Wt.get(Nt);if(ie!==void 0){if(dt.currentProgram===ie&&dt.lightsStateVersion===Ft)return Ga(R,Vt),ie}else Vt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Vt,C),ie=pt.acquireProgram(Vt,Nt),Wt.set(Nt,ie),dt.uniforms=Vt.uniforms;const te=dt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Ct.uniform),Ga(R,Vt),dt.needsLights=Zl(R),dt.lightsStateVersion=Ft,dt.needsLights&&(te.ambientLightColor.value=J.state.ambient,te.lightProbe.value=J.state.probe,te.directionalLights.value=J.state.directional,te.directionalLightShadows.value=J.state.directionalShadow,te.spotLights.value=J.state.spot,te.spotLightShadows.value=J.state.spotShadow,te.rectAreaLights.value=J.state.rectArea,te.ltc_1.value=J.state.rectAreaLTC1,te.ltc_2.value=J.state.rectAreaLTC2,te.pointLights.value=J.state.point,te.pointLightShadows.value=J.state.pointShadow,te.hemisphereLights.value=J.state.hemi,te.directionalShadowMap.value=J.state.directionalShadowMap,te.directionalShadowMatrix.value=J.state.directionalShadowMatrix,te.spotShadowMap.value=J.state.spotShadowMap,te.spotLightMatrix.value=J.state.spotLightMatrix,te.spotLightMap.value=J.state.spotLightMap,te.pointShadowMap.value=J.state.pointShadowMap,te.pointShadowMatrix.value=J.state.pointShadowMatrix),dt.currentProgram=ie,dt.uniformsList=null,ie}function wr(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Ga(R,Q){const ht=Pt.get(R);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.batchingColor=Q.batchingColor,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function Wl(R,Q,ht,dt,J){Q.isScene!==!0&&(Q=Rt),se.resetTextureUnits();const Tt=Q.fog,Ft=dt.isMeshStandardMaterial?Q.environment:null,Vt=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:bo,Nt=(dt.isMeshStandardMaterial?De:Ce).get(dt.envMap||Ft),Wt=dt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ie=!!ht.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),te=!!ht.morphAttributes.position,Se=!!ht.morphAttributes.normal,Be=!!ht.morphAttributes.color;let $e=Tr;dt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($e=C.toneMapping);const Pe=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,ee=Pt.get(dt),ze=y.state.lights;if(lt===!0&&(W===!0||R!==D)){const on=R===D&&dt.id===w;Ct.setState(dt,R,on)}let ge=!1;dt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ze.state.version||ee.outputColorSpace!==Vt||J.isBatchedMesh&&ee.batching===!1||!J.isBatchedMesh&&ee.batching===!0||J.isBatchedMesh&&ee.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ee.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ee.instancing===!1||!J.isInstancedMesh&&ee.instancing===!0||J.isSkinnedMesh&&ee.skinning===!1||!J.isSkinnedMesh&&ee.skinning===!0||J.isInstancedMesh&&ee.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ee.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ee.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ee.instancingMorph===!1&&J.morphTexture!==null||ee.envMap!==Nt||dt.fog===!0&&ee.fog!==Tt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ct.numPlanes||ee.numIntersection!==Ct.numIntersection)||ee.vertexAlphas!==Wt||ee.vertexTangents!==ie||ee.morphTargets!==te||ee.morphNormals!==Se||ee.morphColors!==Be||ee.toneMapping!==$e||ee.morphTargetsCount!==Ue)&&(ge=!0):(ge=!0,ee.__version=dt.version);let Sn=ee.currentProgram;ge===!0&&(Sn=Si(dt,Q,J));let ri=!1,Ne=!1,Va=!1;const je=Sn.getUniforms(),Xn=ee.uniforms;if(Ut.useProgram(Sn.program)&&(ri=!0,Ne=!0,Va=!0),dt.id!==w&&(w=dt.id,Ne=!0),ri||D!==R){Ut.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(H,"projectionMatrix",R.projectionMatrix),je.setValue(H,"viewMatrix",R.matrixWorldInverse);const In=je.map.cameraPosition;In!==void 0&&In.setValue(H,Et.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&je.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&je.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Ne=!0,Va=!0)}if(J.isSkinnedMesh){je.setOptional(H,J,"bindMatrix"),je.setOptional(H,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),je.setValue(H,"boneTexture",on.boneTexture,se))}J.isBatchedMesh&&(je.setOptional(H,J,"batchingTexture"),je.setValue(H,"batchingTexture",J._matricesTexture,se),je.setOptional(H,J,"batchingIdTexture"),je.setValue(H,"batchingIdTexture",J._indirectTexture,se),je.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&je.setValue(H,"batchingColorTexture",J._colorsTexture,se));const hn=ht.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&bt.update(J,ht,Sn),(Ne||ee.receiveShadow!==J.receiveShadow)&&(ee.receiveShadow=J.receiveShadow,je.setValue(H,"receiveShadow",J.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Xn.envMap.value=Nt,Xn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&Q.environment!==null&&(Xn.envMapIntensity.value=Q.environmentIntensity),Ne&&(je.setValue(H,"toneMappingExposure",C.toneMappingExposure),ee.needsLights&&pf(Xn,Va),Tt&&dt.fog===!0&&ut.refreshFogUniforms(Xn,Tt),ut.refreshMaterialUniforms(Xn,dt,q,$,y.state.transmissionRenderTarget[R.id]),Wc.upload(H,wr(ee),Xn,se)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Wc.upload(H,wr(ee),Xn,se),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&je.setValue(H,"center",J.center),je.setValue(H,"modelViewMatrix",J.modelViewMatrix),je.setValue(H,"normalMatrix",J.normalMatrix),je.setValue(H,"modelMatrix",J.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let In=0,ms=on.length;In<ms;In++){const qi=on[In];fe.update(qi,Sn),fe.bind(qi,Sn)}}return Sn}function pf(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Zl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,Q,ht){const dt=Pt.get(R);dt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Pt.get(R.texture).__webglTexture=Q,Pt.get(R.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ht,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const ht=Pt.get(R);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0};const No=H.createFramebuffer();this.setRenderTarget=function(R,Q=0,ht=0){G=R,z=Q,O=ht;let dt=!0,J=null,Tt=!1,Ft=!1;if(R){const Nt=Pt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(H.FRAMEBUFFER,null),dt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Nt.__hasExternalTextures)se.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Nt.__boundDepthTexture!==te){if(te!==null&&Pt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ft=!0);const ie=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Q])?J=ie[Q][ht]:J=ie[Q],Tt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?J=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?J=ie[ht]:J=ie,I.copy(R.viewport),tt.copy(R.scissor),rt=R.scissorTest}else I.copy(wt).multiplyScalar(q).floor(),tt.copy(Qt).multiplyScalar(q).floor(),rt=le;if(ht!==0&&(J=No),Ut.bindFramebuffer(H.FRAMEBUFFER,J)&&dt&&Ut.drawBuffers(R,J),Ut.viewport(I),Ut.scissor(tt),Ut.setScissorTest(rt),Tt){const Nt=Pt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Nt.__webglTexture,ht)}else if(Ft){const Nt=Q;for(let Wt=0;Wt<R.textures.length;Wt++){const ie=Pt.get(R.textures[Wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Wt,ie.__webglTexture,ht,Nt)}}else if(R!==null&&ht!==0){const Nt=Pt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,ht)}w=-1},this.readRenderTargetPixels=function(R,Q,ht,dt,J,Tt,Ft,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){Ut.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Wt=R.textures[Vt],ie=Wt.format,te=Wt.type;if(!Yt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-dt&&ht>=0&&ht<=R.height-J&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Q,ht,dt,J,Jt.convert(ie),Jt.convert(te),Tt))}finally{const Wt=G!==null?Pt.get(G).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ht,dt,J,Tt,Ft,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(Q>=0&&Q<=R.width-dt&&ht>=0&&ht<=R.height-J){Ut.bindFramebuffer(H.FRAMEBUFFER,Nt);const Wt=R.textures[Vt],ie=Wt.format,te=Wt.type;if(!Yt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Q,ht,dt,J,Jt.convert(ie),Jt.convert(te),0);const Be=G!==null?Pt.get(G).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,Be);const $e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await sb(H,$e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Se),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(Se),H.deleteSync($e),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,ht=0){const dt=Math.pow(2,-ht),J=Math.floor(R.image.width*dt),Tt=Math.floor(R.image.height*dt),Ft=Q!==null?Q.x:0,Vt=Q!==null?Q.y:0;se.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ht,0,0,Ft,Vt,J,Tt),Ut.unbindTexture()};const Dr=H.createFramebuffer(),mf=H.createFramebuffer();this.copyTextureToTexture=function(R,Q,ht=null,dt=null,J=0,Tt=null){Tt===null&&(J!==0?(Il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let Ft,Vt,Nt,Wt,ie,te,Se,Be,$e;const Pe=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(ht!==null)Ft=ht.max.x-ht.min.x,Vt=ht.max.y-ht.min.y,Nt=ht.isBox3?ht.max.z-ht.min.z:1,Wt=ht.min.x,ie=ht.min.y,te=ht.isBox3?ht.min.z:0;else{const hn=Math.pow(2,-J);Ft=Math.floor(Pe.width*hn),Vt=Math.floor(Pe.height*hn),R.isDataArrayTexture?Nt=Pe.depth:R.isData3DTexture?Nt=Math.floor(Pe.depth*hn):Nt=1,Wt=0,ie=0,te=0}dt!==null?(Se=dt.x,Be=dt.y,$e=dt.z):(Se=0,Be=0,$e=0);const Ue=Jt.convert(Q.format),ee=Jt.convert(Q.type);let ze;Q.isData3DTexture?(se.setTexture3D(Q,0),ze=H.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(se.setTexture2DArray(Q,0),ze=H.TEXTURE_2D_ARRAY):(se.setTexture2D(Q,0),ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ri=H.getParameter(H.UNPACK_SKIP_PIXELS),Ne=H.getParameter(H.UNPACK_SKIP_ROWS),Va=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,te);const je=R.isDataArrayTexture||R.isData3DTexture,Xn=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const hn=Pt.get(R),on=Pt.get(Q),In=Pt.get(hn.__renderTarget),ms=Pt.get(on.__renderTarget);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,In.__webglFramebuffer),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let qi=0;qi<Nt;qi++)je&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(R).__webglTexture,J,te+qi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(Q).__webglTexture,Tt,$e+qi)),H.blitFramebuffer(Wt,ie,Ft,Vt,Se,Be,Ft,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Pt.has(R)){const hn=Pt.get(R),on=Pt.get(Q);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,Dr),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,mf);for(let In=0;In<Nt;In++)je?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,J,te+In):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,J),Xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,Tt,$e+In):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,Tt),J!==0?H.blitFramebuffer(Wt,ie,Ft,Vt,Se,Be,Ft,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Xn?H.copyTexSubImage3D(ze,Tt,Se,Be,$e+In,Wt,ie,Ft,Vt):H.copyTexSubImage2D(ze,Tt,Se,Be,Wt,ie,Ft,Vt);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Xn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(ze,Tt,Se,Be,$e,Ft,Vt,Nt,Ue,ee,Pe.data):Q.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,Tt,Se,Be,$e,Ft,Vt,Nt,Ue,Pe.data):H.texSubImage3D(ze,Tt,Se,Be,$e,Ft,Vt,Nt,Ue,ee,Pe):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,Se,Be,Ft,Vt,Ue,ee,Pe.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,Se,Be,Pe.width,Pe.height,Ue,Pe.data):H.texSubImage2D(H.TEXTURE_2D,Tt,Se,Be,Ft,Vt,Ue,ee,Pe);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ri),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Va),Tt===0&&Q.generateMipmaps&&H.generateMipmap(ze),Ut.unbindTexture()},this.initRenderTarget=function(R){Pt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Ut.unbindTexture()},this.resetState=function(){z=0,O=0,G=null,Ut.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const ry={type:"change"},Wm={type:"start"},aE={type:"end"},Ic=new Gy,sy=new Er,b2=Math.cos(70*ab.DEG2RAD),En=new ot,ni=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ep=1e-6;class A2 extends Gb{constructor(e,i=null){super(e,i),this.state=qe.NONE,this.target=new ot,this.cursor=new ot,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:So.ROTATE,MIDDLE:So.DOLLY,RIGHT:So.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ot,this._lastQuaternion=new cs,this._lastTargetPosition=new ot,this._quat=new cs().setFromUnitVectors(e.up,new ot(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new LS,this._sphericalDelta=new LS,this._scale=1,this._panOffset=new ot,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new ot,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C2.bind(this),this._onPointerDown=R2.bind(this),this._onPointerUp=w2.bind(this),this._onContextMenu=z2.bind(this),this._onMouseWheel=N2.bind(this),this._onKeyDown=L2.bind(this),this._onTouchStart=O2.bind(this),this._onTouchMove=P2.bind(this),this._onMouseDown=D2.bind(this),this._onMouseMove=U2.bind(this),this._interceptControlDown=I2.bind(this),this._interceptControlUp=B2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ry),this.update(),this.state=qe.NONE}update(e=null){const i=this.object.position;En.copy(i).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=ni:r>Math.PI&&(r-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),i.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=En.length();h=this._clampDistance(d*this._scale);const _=d-h;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const d=new ot(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const m=new ot(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<b2?this.object.lookAt(this.target):(sy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(sy,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Ep||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ep||this._lastTargetPosition.distanceToSquared(this.target)>Ep?(this.dispatchEvent(ry),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){En.setFromMatrixColumn(i,0),En.multiplyScalar(-e),this._panOffset.add(En)}_panUp(e,i){this.screenSpacePanning===!0?En.setFromMatrixColumn(i,1):(En.setFromMatrixColumn(i,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(e),this._panOffset.add(En)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let f=En.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ve,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function R2(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function C2(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function w2(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(aE),this.state=qe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function D2(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case So.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qe.DOLLY;break;case So.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}break;case So.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Wm)}function U2(o){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function N2(o){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(o.preventDefault(),this.dispatchEvent(Wm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(aE))}function L2(o){this.enabled!==!1&&this._handleKeyDown(o)}function O2(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qe.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qe.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Wm)}function P2(o){switch(this._trackPointer(o),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qe.NONE}}function z2(o){this.enabled!==!1&&o.preventDefault()}function I2(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B2(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Yi{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let r=0;for(let l=0;l<this._n&&l<32;l++){const f=i[l],h=e+f,d=Math.abs(e)<Math.abs(f)?e-(h-f):f-(h-e);d&&(i[r++]=d),e=h}return i[r]=e,this._n=r+1,this}valueOf(){const e=this._partials;let i=this._n,r,l,f,h=0;if(i>0){for(h=e[--i];i>0&&(r=h,l=e[--i],h=r+l,f=l-(h-r),!f););i>0&&(f<0&&e[i-1]<0||f>0&&e[i-1]>0)&&(l=f*2,r=h+l,l==r-h&&(h=r))}return h}}function*F2(o){for(const e of o)yield*e}function rE(o){return Array.from(F2(o))}var Je=1e-6,we=Math.PI,Oi=we/2,$c=we/4,ai=we*2,Na=180/we,Pn=we/180,sn=Math.abs,H2=Math.atan,Ro=Math.atan2,en=Math.cos,nn=Math.sin,G2=Math.sign||function(o){return o>0?1:o<0?-1:0},ps=Math.sqrt;function V2(o){return o>1?0:o<-1?we:Math.acos(o)}function Bl(o){return o>1?Oi:o<-1?-Oi:Math.asin(o)}function Gn(){}function tf(o,e){o&&ly.hasOwnProperty(o.type)&&ly[o.type](o,e)}var oy={Feature:function(o,e){tf(o.geometry,e)},FeatureCollection:function(o,e){for(var i=o.features,r=-1,l=i.length;++r<l;)tf(i[r].geometry,e)}},ly={Sphere:function(o,e){e.sphere()},Point:function(o,e){o=o.coordinates,e.point(o[0],o[1],o[2])},MultiPoint:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)o=i[r],e.point(o[0],o[1],o[2])},LineString:function(o,e){mm(o.coordinates,e,0)},MultiLineString:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)mm(i[r],e,0)},Polygon:function(o,e){uy(o.coordinates,e)},MultiPolygon:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)uy(i[r],e)},GeometryCollection:function(o,e){for(var i=o.geometries,r=-1,l=i.length;++r<l;)tf(i[r],e)}};function mm(o,e,i){var r=-1,l=o.length-i,f;for(e.lineStart();++r<l;)f=o[r],e.point(f[0],f[1],f[2]);e.lineEnd()}function uy(o,e){var i=-1,r=o.length;for(e.polygonStart();++i<r;)mm(o[i],e,1);e.polygonEnd()}function ss(o,e){o&&oy.hasOwnProperty(o.type)?oy[o.type](o,e):tf(o,e)}var gm=new Yi,ef=new Yi,sE,oE,_m,vm,Sm,Fl={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){gm=new Yi,Fl.lineStart=X2,Fl.lineEnd=k2},polygonEnd:function(){var o=+gm;ef.add(o<0?ai+o:o),this.lineStart=this.lineEnd=this.point=Gn},sphere:function(){ef.add(ai)}};function X2(){Fl.point=Y2}function k2(){lE(sE,oE)}function Y2(o,e){Fl.point=lE,sE=o,oE=e,o*=Pn,e*=Pn,_m=o,vm=en(e=e/2+$c),Sm=nn(e)}function lE(o,e){o*=Pn,e*=Pn,e=e/2+$c;var i=o-_m,r=i>=0?1:-1,l=r*i,f=en(e),h=nn(e),d=Sm*h,_=vm*f+d*en(l),m=d*r*nn(l);gm.add(Ro(m,_)),_m=o,vm=f,Sm=h}function q2(o){return ef=new Yi,ss(o,Fl),ef*2}function ym(o){return[Ro(o[1],o[0]),Bl(o[2])]}function Co(o){var e=o[0],i=o[1],r=en(i);return[r*en(e),r*nn(e),nn(i)]}function Bc(o,e){return o[0]*e[0]+o[1]*e[1]+o[2]*e[2]}function nf(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function xp(o,e){o[0]+=e[0],o[1]+=e[1],o[2]+=e[2]}function Fc(o,e){return[o[0]*e,o[1]*e,o[2]*e]}function Em(o){var e=ps(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);o[0]/=e,o[1]/=e,o[2]/=e}function xm(o,e){function i(r,l){return r=o(r,l),e(r[0],r[1])}return o.invert&&e.invert&&(i.invert=function(r,l){return r=e.invert(r,l),r&&o.invert(r[0],r[1])}),i}function Mm(o,e){return sn(o)>we&&(o-=Math.round(o/ai)*ai),[o,e]}Mm.invert=Mm;function W2(o,e,i){return(o%=ai)?e||i?xm(fy(o),hy(e,i)):fy(o):e||i?hy(e,i):Mm}function cy(o){return function(e,i){return e+=o,sn(e)>we&&(e-=Math.round(e/ai)*ai),[e,i]}}function fy(o){var e=cy(o);return e.invert=cy(-o),e}function hy(o,e){var i=en(o),r=nn(o),l=en(e),f=nn(e);function h(d,_){var m=en(_),g=en(d)*m,p=nn(d)*m,v=nn(_),E=v*i+g*r;return[Ro(p*l-E*f,g*i-v*r),Bl(E*l+p*f)]}return h.invert=function(d,_){var m=en(_),g=en(d)*m,p=nn(d)*m,v=nn(_),E=v*l-p*f;return[Ro(p*l+v*f,g*i+E*r),Bl(E*i-g*r)]},h}function Z2(o,e,i,r,l,f){if(i){var h=en(e),d=nn(e),_=r*i;l==null?(l=e+r*ai,f=e-_/2):(l=dy(h,l),f=dy(h,f),(r>0?l<f:l>f)&&(l+=r*ai));for(var m,g=l;r>0?g>f:g<f;g-=_)m=ym([h,-d*en(g),-d*nn(g)]),o.point(m[0],m[1])}}function dy(o,e){e=Co(e),e[0]-=o,Em(e);var i=V2(-e[1]);return((-e[2]<0?-i:i)+ai-Je)%ai}function uE(){var o=[],e;return{point:function(i,r,l){e.push([i,r,l])},lineStart:function(){o.push(e=[])},lineEnd:Gn,rejoin:function(){o.length>1&&o.push(o.pop().concat(o.shift()))},result:function(){var i=o;return o=[],e=null,i}}}function Zc(o,e){return sn(o[0]-e[0])<Je&&sn(o[1]-e[1])<Je}function Hc(o,e,i,r){this.x=o,this.z=e,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function cE(o,e,i,r,l){var f=[],h=[],d,_;if(o.forEach(function(M){if(!((A=M.length-1)<=0)){var A,x=M[0],y=M[A],U;if(Zc(x,y)){if(!x[2]&&!y[2]){for(l.lineStart(),d=0;d<A;++d)l.point((x=M[d])[0],x[1]);l.lineEnd();return}y[0]+=2*Je}f.push(U=new Hc(x,M,null,!0)),h.push(U.o=new Hc(x,null,U,!1)),f.push(U=new Hc(y,M,null,!1)),h.push(U.o=new Hc(y,null,U,!0))}}),!!f.length){for(h.sort(e),py(f),py(h),d=0,_=h.length;d<_;++d)h[d].e=i=!i;for(var m=f[0],g,p;;){for(var v=m,E=!0;v.v;)if((v=v.n)===m)return;g=v.z,l.lineStart();do{if(v.v=v.o.v=!0,v.e){if(E)for(d=0,_=g.length;d<_;++d)l.point((p=g[d])[0],p[1]);else r(v.x,v.n.x,1,l);v=v.n}else{if(E)for(g=v.p.z,d=g.length-1;d>=0;--d)l.point((p=g[d])[0],p[1]);else r(v.x,v.p.x,-1,l);v=v.p}v=v.o,g=v.z,E=!E}while(!v.v);l.lineEnd()}}}function py(o){if(e=o.length){for(var e,i=0,r=o[0],l;++i<e;)r.n=l=o[i],l.p=r,r=l;r.n=l=o[0],l.p=r}}function Mp(o){return sn(o[0])<=we?o[0]:G2(o[0])*((sn(o[0])+we)%ai-we)}function j2(o,e){var i=Mp(e),r=e[1],l=nn(r),f=[nn(i),-en(i),0],h=0,d=0,_=new Yi;l===1?r=Oi+Je:l===-1&&(r=-Oi-Je);for(var m=0,g=o.length;m<g;++m)if(v=(p=o[m]).length)for(var p,v,E=p[v-1],M=Mp(E),A=E[1]/2+$c,x=nn(A),y=en(A),U=0;U<v;++U,M=C,x=z,y=O,E=N){var N=p[U],C=Mp(N),B=N[1]/2+$c,z=nn(B),O=en(B),G=C-M,w=G>=0?1:-1,D=w*G,I=D>we,tt=x*z;if(_.add(Ro(tt*w*nn(D),y*O+tt*en(D))),h+=I?G+w*ai:G,I^M>=i^C>=i){var rt=nf(Co(E),Co(N));Em(rt);var ct=nf(f,rt);Em(ct);var V=(I^G>=0?-1:1)*Bl(ct[2]);(r>V||r===V&&(rt[0]||rt[1]))&&(d+=I^G>=0?1:-1)}}return(h<-Je||h<Je&&_<-1e-12)^d&1}function fE(o,e,i,r){return function(l){var f=e(l),h=uE(),d=e(h),_=!1,m,g,p,v={point:E,lineStart:A,lineEnd:x,polygonStart:function(){v.point=y,v.lineStart=U,v.lineEnd=N,g=[],m=[]},polygonEnd:function(){v.point=E,v.lineStart=A,v.lineEnd=x,g=rE(g);var C=j2(m,r);g.length?(_||(l.polygonStart(),_=!0),cE(g,Q2,C,i,l)):C&&(_||(l.polygonStart(),_=!0),l.lineStart(),i(null,null,1,l),l.lineEnd()),_&&(l.polygonEnd(),_=!1),g=m=null},sphere:function(){l.polygonStart(),l.lineStart(),i(null,null,1,l),l.lineEnd(),l.polygonEnd()}};function E(C,B){o(C,B)&&l.point(C,B)}function M(C,B){f.point(C,B)}function A(){v.point=M,f.lineStart()}function x(){v.point=E,f.lineEnd()}function y(C,B){p.push([C,B]),d.point(C,B)}function U(){d.lineStart(),p=[]}function N(){y(p[0][0],p[0][1]),d.lineEnd();var C=d.clean(),B=h.result(),z,O=B.length,G,w,D;if(p.pop(),m.push(p),p=null,!!O){if(C&1){if(w=B[0],(G=w.length-1)>0){for(_||(l.polygonStart(),_=!0),l.lineStart(),z=0;z<G;++z)l.point((D=w[z])[0],D[1]);l.lineEnd()}return}O>1&&C&2&&B.push(B.pop().concat(B.shift())),g.push(B.filter(K2))}}return v}}function K2(o){return o.length>1}function Q2(o,e){return((o=o.x)[0]<0?o[1]-Oi-Je:Oi-o[1])-((e=e.x)[0]<0?e[1]-Oi-Je:Oi-e[1])}const my=fE(function(){return!0},J2,tw,[-we,-Oi]);function J2(o){var e=NaN,i=NaN,r=NaN,l;return{lineStart:function(){o.lineStart(),l=1},point:function(f,h){var d=f>0?we:-we,_=sn(f-e);sn(_-we)<Je?(o.point(e,i=(i+h)/2>0?Oi:-Oi),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(d,i),o.point(f,i),l=0):r!==d&&_>=we&&(sn(e-r)<Je&&(e-=r*Je),sn(f-d)<Je&&(f-=d*Je),i=$2(e,i,f,h),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(d,i),l=0),o.point(e=f,i=h),r=d},lineEnd:function(){o.lineEnd(),e=i=NaN},clean:function(){return 2-l}}}function $2(o,e,i,r){var l,f,h=nn(o-i);return sn(h)>Je?H2((nn(e)*(f=en(r))*nn(i)-nn(r)*(l=en(e))*nn(o))/(l*f*h)):(e+r)/2}function tw(o,e,i,r){var l;if(o==null)l=i*Oi,r.point(-we,l),r.point(0,l),r.point(we,l),r.point(we,0),r.point(we,-l),r.point(0,-l),r.point(-we,-l),r.point(-we,0),r.point(-we,l);else if(sn(o[0]-e[0])>Je){var f=o[0]<e[0]?we:-we;l=i*f/2,r.point(-f,l),r.point(0,l),r.point(f,l)}else r.point(e[0],e[1])}function ew(o){var e=en(o),i=2*Pn,r=e>0,l=sn(e)>Je;function f(g,p,v,E){Z2(E,o,i,v,g,p)}function h(g,p){return en(g)*en(p)>e}function d(g){var p,v,E,M,A;return{lineStart:function(){M=E=!1,A=1},point:function(x,y){var U=[x,y],N,C=h(x,y),B=r?C?0:m(x,y):C?m(x+(x<0?we:-we),y):0;if(!p&&(M=E=C)&&g.lineStart(),C!==E&&(N=_(p,U),(!N||Zc(p,N)||Zc(U,N))&&(U[2]=1)),C!==E)A=0,C?(g.lineStart(),N=_(U,p),g.point(N[0],N[1])):(N=_(p,U),g.point(N[0],N[1],2),g.lineEnd()),p=N;else if(l&&p&&r^C){var z;!(B&v)&&(z=_(U,p,!0))&&(A=0,r?(g.lineStart(),g.point(z[0][0],z[0][1]),g.point(z[1][0],z[1][1]),g.lineEnd()):(g.point(z[1][0],z[1][1]),g.lineEnd(),g.lineStart(),g.point(z[0][0],z[0][1],3)))}C&&(!p||!Zc(p,U))&&g.point(U[0],U[1]),p=U,E=C,v=B},lineEnd:function(){E&&g.lineEnd(),p=null},clean:function(){return A|(M&&E)<<1}}}function _(g,p,v){var E=Co(g),M=Co(p),A=[1,0,0],x=nf(E,M),y=Bc(x,x),U=x[0],N=y-U*U;if(!N)return!v&&g;var C=e*y/N,B=-e*U/N,z=nf(A,x),O=Fc(A,C),G=Fc(x,B);xp(O,G);var w=z,D=Bc(O,w),I=Bc(w,w),tt=D*D-I*(Bc(O,O)-1);if(!(tt<0)){var rt=ps(tt),ct=Fc(w,(-D-rt)/I);if(xp(ct,O),ct=ym(ct),!v)return ct;var V=g[0],X=p[0],$=g[1],q=p[1],vt;X<V&&(vt=V,V=X,X=vt);var yt=X-V,wt=sn(yt-we)<Je,Qt=wt||yt<Je;if(!wt&&q<$&&(vt=$,$=q,q=vt),Qt?wt?$+q>0^ct[1]<(sn(ct[0]-V)<Je?$:q):$<=ct[1]&&ct[1]<=q:yt>we^(V<=ct[0]&&ct[0]<=X)){var le=Fc(w,(-D+rt)/I);return xp(le,O),[ct,ym(le)]}}}function m(g,p){var v=r?o:we-o,E=0;return g<-v?E|=1:g>v&&(E|=2),p<-v?E|=4:p>v&&(E|=8),E}return fE(h,d,f,r?[0,-o]:[-we,o-we])}function nw(o,e,i,r,l,f){var h=o[0],d=o[1],_=e[0],m=e[1],g=0,p=1,v=_-h,E=m-d,M;if(M=i-h,!(!v&&M>0)){if(M/=v,v<0){if(M<g)return;M<p&&(p=M)}else if(v>0){if(M>p)return;M>g&&(g=M)}if(M=l-h,!(!v&&M<0)){if(M/=v,v<0){if(M>p)return;M>g&&(g=M)}else if(v>0){if(M<g)return;M<p&&(p=M)}if(M=r-d,!(!E&&M>0)){if(M/=E,E<0){if(M<g)return;M<p&&(p=M)}else if(E>0){if(M>p)return;M>g&&(g=M)}if(M=f-d,!(!E&&M<0)){if(M/=E,E<0){if(M>p)return;M>g&&(g=M)}else if(E>0){if(M<g)return;M<p&&(p=M)}return g>0&&(o[0]=h+g*v,o[1]=d+g*E),p<1&&(e[0]=h+p*v,e[1]=d+p*E),!0}}}}}var Cl=1e9,Gc=-Cl;function iw(o,e,i,r){function l(m,g){return o<=m&&m<=i&&e<=g&&g<=r}function f(m,g,p,v){var E=0,M=0;if(m==null||(E=h(m,p))!==(M=h(g,p))||_(m,g)<0^p>0)do v.point(E===0||E===3?o:i,E>1?r:e);while((E=(E+p+4)%4)!==M);else v.point(g[0],g[1])}function h(m,g){return sn(m[0]-o)<Je?g>0?0:3:sn(m[0]-i)<Je?g>0?2:1:sn(m[1]-e)<Je?g>0?1:0:g>0?3:2}function d(m,g){return _(m.x,g.x)}function _(m,g){var p=h(m,1),v=h(g,1);return p!==v?p-v:p===0?g[1]-m[1]:p===1?m[0]-g[0]:p===2?m[1]-g[1]:g[0]-m[0]}return function(m){var g=m,p=uE(),v,E,M,A,x,y,U,N,C,B,z,O={point:G,lineStart:tt,lineEnd:rt,polygonStart:D,polygonEnd:I};function G(V,X){l(V,X)&&g.point(V,X)}function w(){for(var V=0,X=0,$=E.length;X<$;++X)for(var q=E[X],vt=1,yt=q.length,wt=q[0],Qt,le,F=wt[0],lt=wt[1];vt<yt;++vt)Qt=F,le=lt,wt=q[vt],F=wt[0],lt=wt[1],le<=r?lt>r&&(F-Qt)*(r-le)>(lt-le)*(o-Qt)&&++V:lt<=r&&(F-Qt)*(r-le)<(lt-le)*(o-Qt)&&--V;return V}function D(){g=p,v=[],E=[],z=!0}function I(){var V=w(),X=z&&V,$=(v=rE(v)).length;(X||$)&&(m.polygonStart(),X&&(m.lineStart(),f(null,null,1,m),m.lineEnd()),$&&cE(v,d,V,f,m),m.polygonEnd()),g=m,v=E=M=null}function tt(){O.point=ct,E&&E.push(M=[]),B=!0,C=!1,U=N=NaN}function rt(){v&&(ct(A,x),y&&C&&p.rejoin(),v.push(p.result())),O.point=G,C&&g.lineEnd()}function ct(V,X){var $=l(V,X);if(E&&M.push([V,X]),B)A=V,x=X,y=$,B=!1,$&&(g.lineStart(),g.point(V,X));else if($&&C)g.point(V,X);else{var q=[U=Math.max(Gc,Math.min(Cl,U)),N=Math.max(Gc,Math.min(Cl,N))],vt=[V=Math.max(Gc,Math.min(Cl,V)),X=Math.max(Gc,Math.min(Cl,X))];nw(q,vt,o,e,i,r)?(C||(g.lineStart(),g.point(q[0],q[1])),g.point(vt[0],vt[1]),$||g.lineEnd(),z=!1):$&&(g.lineStart(),g.point(V,X),z=!1)}U=V,N=X,C=$}return O}}const Tm=o=>o;var Tp=new Yi,bm=new Yi,hE,dE,Am,Rm,Pa={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){Pa.lineStart=aw,Pa.lineEnd=sw},polygonEnd:function(){Pa.lineStart=Pa.lineEnd=Pa.point=Gn,Tp.add(sn(bm)),bm=new Yi},result:function(){var o=Tp/2;return Tp=new Yi,o}};function aw(){Pa.point=rw}function rw(o,e){Pa.point=pE,hE=Am=o,dE=Rm=e}function pE(o,e){bm.add(Rm*o-Am*e),Am=o,Rm=e}function sw(){pE(hE,dE)}var wo=1/0,af=wo,Hl=-wo,rf=Hl,sf={point:ow,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var o=[[wo,af],[Hl,rf]];return Hl=rf=-(af=wo=1/0),o}};function ow(o,e){o<wo&&(wo=o),o>Hl&&(Hl=o),e<af&&(af=e),e>rf&&(rf=e)}var Cm=0,wm=0,wl=0,of=0,lf=0,vo=0,Dm=0,Um=0,Dl=0,mE,gE,ra,sa,Ui={point:hs,lineStart:gy,lineEnd:_y,polygonStart:function(){Ui.lineStart=cw,Ui.lineEnd=fw},polygonEnd:function(){Ui.point=hs,Ui.lineStart=gy,Ui.lineEnd=_y},result:function(){var o=Dl?[Dm/Dl,Um/Dl]:vo?[of/vo,lf/vo]:wl?[Cm/wl,wm/wl]:[NaN,NaN];return Cm=wm=wl=of=lf=vo=Dm=Um=Dl=0,o}};function hs(o,e){Cm+=o,wm+=e,++wl}function gy(){Ui.point=lw}function lw(o,e){Ui.point=uw,hs(ra=o,sa=e)}function uw(o,e){var i=o-ra,r=e-sa,l=ps(i*i+r*r);of+=l*(ra+o)/2,lf+=l*(sa+e)/2,vo+=l,hs(ra=o,sa=e)}function _y(){Ui.point=hs}function cw(){Ui.point=hw}function fw(){_E(mE,gE)}function hw(o,e){Ui.point=_E,hs(mE=ra=o,gE=sa=e)}function _E(o,e){var i=o-ra,r=e-sa,l=ps(i*i+r*r);of+=l*(ra+o)/2,lf+=l*(sa+e)/2,vo+=l,l=sa*o-ra*e,Dm+=l*(ra+o),Um+=l*(sa+e),Dl+=l*3,hs(ra=o,sa=e)}function vE(o){this._context=o}vE.prototype={_radius:4.5,pointRadius:function(o){return this._radius=o,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(o,e){switch(this._point){case 0:{this._context.moveTo(o,e),this._point=1;break}case 1:{this._context.lineTo(o,e);break}default:{this._context.moveTo(o+this._radius,e),this._context.arc(o,e,this._radius,0,ai);break}}},result:Gn};var Nm=new Yi,bp,SE,yE,Ul,Nl,Gl={point:Gn,lineStart:function(){Gl.point=dw},lineEnd:function(){bp&&EE(SE,yE),Gl.point=Gn},polygonStart:function(){bp=!0},polygonEnd:function(){bp=null},result:function(){var o=+Nm;return Nm=new Yi,o}};function dw(o,e){Gl.point=EE,SE=Ul=o,yE=Nl=e}function EE(o,e){Ul-=o,Nl-=e,Nm.add(ps(Ul*Ul+Nl*Nl)),Ul=o,Nl=e}let vy,uf,Sy,yy;class Ey{constructor(e){this._append=e==null?xE:pw(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==Sy||this._append!==uf){const r=this._radius,l=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,Sy=r,uf=this._append,yy=this._,this._=l}this._+=yy;break}}}result(){const e=this._;return this._="",e.length?e:null}}function xE(o){let e=1;this._+=o[0];for(const i=o.length;e<i;++e)this._+=arguments[e]+o[e]}function pw(o){const e=Math.floor(o);if(!(e>=0))throw new RangeError(`invalid digits: ${o}`);if(e>15)return xE;if(e!==vy){const i=10**e;vy=e,uf=function(l){let f=1;this._+=l[0];for(const h=l.length;f<h;++f)this._+=Math.round(arguments[f]*i)/i+l[f]}}return uf}function xy(o,e){let i=3,r=4.5,l,f;function h(d){return d&&(typeof r=="function"&&f.pointRadius(+r.apply(this,arguments)),ss(d,l(f))),f.result()}return h.area=function(d){return ss(d,l(Pa)),Pa.result()},h.measure=function(d){return ss(d,l(Gl)),Gl.result()},h.bounds=function(d){return ss(d,l(sf)),sf.result()},h.centroid=function(d){return ss(d,l(Ui)),Ui.result()},h.projection=function(d){return arguments.length?(l=d==null?(o=null,Tm):(o=d).stream,h):o},h.context=function(d){return arguments.length?(f=d==null?(e=null,new Ey(i)):new vE(e=d),typeof r!="function"&&f.pointRadius(r),h):e},h.pointRadius=function(d){return arguments.length?(r=typeof d=="function"?d:(f.pointRadius(+d),+d),h):r},h.digits=function(d){if(!arguments.length)return i;if(d==null)i=null;else{const _=Math.floor(d);if(!(_>=0))throw new RangeError(`invalid digits: ${d}`);i=_}return e===null&&(f=new Ey(i)),h},h.projection(o).digits(i).context(e)}function Zm(o){return function(e){var i=new Lm;for(var r in o)i[r]=o[r];return i.stream=e,i}}function Lm(){}Lm.prototype={constructor:Lm,point:function(o,e){this.stream.point(o,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function jm(o,e,i){var r=o.clipExtent&&o.clipExtent();return o.scale(150).translate([0,0]),r!=null&&o.clipExtent(null),ss(i,o.stream(sf)),e(sf.result()),r!=null&&o.clipExtent(r),o}function ME(o,e,i){return jm(o,function(r){var l=e[1][0]-e[0][0],f=e[1][1]-e[0][1],h=Math.min(l/(r[1][0]-r[0][0]),f/(r[1][1]-r[0][1])),d=+e[0][0]+(l-h*(r[1][0]+r[0][0]))/2,_=+e[0][1]+(f-h*(r[1][1]+r[0][1]))/2;o.scale(150*h).translate([d,_])},i)}function mw(o,e,i){return ME(o,[[0,0],e],i)}function gw(o,e,i){return jm(o,function(r){var l=+e,f=l/(r[1][0]-r[0][0]),h=(l-f*(r[1][0]+r[0][0]))/2,d=-f*r[0][1];o.scale(150*f).translate([h,d])},i)}function _w(o,e,i){return jm(o,function(r){var l=+e,f=l/(r[1][1]-r[0][1]),h=-f*r[0][0],d=(l-f*(r[1][1]+r[0][1]))/2;o.scale(150*f).translate([h,d])},i)}var My=16,vw=en(30*Pn);function Ty(o,e){return+e?yw(o,e):Sw(o)}function Sw(o){return Zm({point:function(e,i){e=o(e,i),this.stream.point(e[0],e[1])}})}function yw(o,e){function i(r,l,f,h,d,_,m,g,p,v,E,M,A,x){var y=m-r,U=g-l,N=y*y+U*U;if(N>4*e&&A--){var C=h+v,B=d+E,z=_+M,O=ps(C*C+B*B+z*z),G=Bl(z/=O),w=sn(sn(z)-1)<Je||sn(f-p)<Je?(f+p)/2:Ro(B,C),D=o(w,G),I=D[0],tt=D[1],rt=I-r,ct=tt-l,V=U*rt-y*ct;(V*V/N>e||sn((y*rt+U*ct)/N-.5)>.3||h*v+d*E+_*M<vw)&&(i(r,l,f,h,d,_,I,tt,w,C/=O,B/=O,z,A,x),x.point(I,tt),i(I,tt,w,C,B,z,m,g,p,v,E,M,A,x))}}return function(r){var l,f,h,d,_,m,g,p,v,E,M,A,x={point:y,lineStart:U,lineEnd:C,polygonStart:function(){r.polygonStart(),x.lineStart=B},polygonEnd:function(){r.polygonEnd(),x.lineStart=U}};function y(G,w){G=o(G,w),r.point(G[0],G[1])}function U(){p=NaN,x.point=N,r.lineStart()}function N(G,w){var D=Co([G,w]),I=o(G,w);i(p,v,g,E,M,A,p=I[0],v=I[1],g=G,E=D[0],M=D[1],A=D[2],My,r),r.point(p,v)}function C(){x.point=y,r.lineEnd()}function B(){U(),x.point=z,x.lineEnd=O}function z(G,w){N(l=G,w),f=p,h=v,d=E,_=M,m=A,x.point=N}function O(){i(p,v,g,E,M,A,f,h,l,d,_,m,My,r),x.lineEnd=C,C()}return x}}var Ew=Zm({point:function(o,e){this.stream.point(o*Pn,e*Pn)}});function xw(o){return Zm({point:function(e,i){var r=o(e,i);return this.stream.point(r[0],r[1])}})}function Mw(o,e,i,r,l){function f(h,d){return h*=r,d*=l,[e+o*h,i-o*d]}return f.invert=function(h,d){return[(h-e)/o*r,(i-d)/o*l]},f}function by(o,e,i,r,l,f){if(!f)return Mw(o,e,i,r,l);var h=en(f),d=nn(f),_=h*o,m=d*o,g=h/o,p=d/o,v=(d*i-h*e)/o,E=(d*e+h*i)/o;function M(A,x){return A*=r,x*=l,[_*A-m*x+e,i-m*A-_*x]}return M.invert=function(A,x){return[r*(g*A-p*x+v),l*(E-p*A-g*x)]},M}function Tw(o){return bw(function(){return o})()}function bw(o){var e,i=150,r=480,l=250,f=0,h=0,d=0,_=0,m=0,g,p=0,v=1,E=1,M=null,A=my,x=null,y,U,N,C=Tm,B=.5,z,O,G,w,D;function I(V){return G(V[0]*Pn,V[1]*Pn)}function tt(V){return V=G.invert(V[0],V[1]),V&&[V[0]*Na,V[1]*Na]}I.stream=function(V){return w&&D===V?w:w=Ew(xw(g)(A(z(C(D=V)))))},I.preclip=function(V){return arguments.length?(A=V,M=void 0,ct()):A},I.postclip=function(V){return arguments.length?(C=V,x=y=U=N=null,ct()):C},I.clipAngle=function(V){return arguments.length?(A=+V?ew(M=V*Pn):(M=null,my),ct()):M*Na},I.clipExtent=function(V){return arguments.length?(C=V==null?(x=y=U=N=null,Tm):iw(x=+V[0][0],y=+V[0][1],U=+V[1][0],N=+V[1][1]),ct()):x==null?null:[[x,y],[U,N]]},I.scale=function(V){return arguments.length?(i=+V,rt()):i},I.translate=function(V){return arguments.length?(r=+V[0],l=+V[1],rt()):[r,l]},I.center=function(V){return arguments.length?(f=V[0]%360*Pn,h=V[1]%360*Pn,rt()):[f*Na,h*Na]},I.rotate=function(V){return arguments.length?(d=V[0]%360*Pn,_=V[1]%360*Pn,m=V.length>2?V[2]%360*Pn:0,rt()):[d*Na,_*Na,m*Na]},I.angle=function(V){return arguments.length?(p=V%360*Pn,rt()):p*Na},I.reflectX=function(V){return arguments.length?(v=V?-1:1,rt()):v<0},I.reflectY=function(V){return arguments.length?(E=V?-1:1,rt()):E<0},I.precision=function(V){return arguments.length?(z=Ty(O,B=V*V),ct()):ps(B)},I.fitExtent=function(V,X){return ME(I,V,X)},I.fitSize=function(V,X){return mw(I,V,X)},I.fitWidth=function(V,X){return gw(I,V,X)},I.fitHeight=function(V,X){return _w(I,V,X)};function rt(){var V=by(i,0,0,v,E,p).apply(null,e(f,h)),X=by(i,r-V[0],l-V[1],v,E,p);return g=W2(d,_,m),O=xm(e,X),G=xm(g,O),z=Ty(O,B),ct()}function ct(){return w=D=null,I}return function(){return e=o.apply(this,arguments),I.invert=e.invert&&tt,rt()}}function Om(o,e){return[o,e]}Om.invert=Om;function Aw(){return Tw(Om).scale(152.63)}function Rw({colorMap:o,reliefMap:e,relief:i,rimStrength:r}){return new Ha({uniforms:{colorMap:{value:o},reliefMap:{value:e},relief:{value:i},rimStrength:{value:r}},vertexShader:`
      uniform float rimStrength;
      varying vec2 globeUv;
      varying vec3 lighting;
      void main() {
        globeUv = uv;
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vec3 eye = normalize(-view.xyz);
        vec3 light = normalize(vec3(-0.65, 0.9, 1.3));
        float diffuse = max(dot(n, light), 0.0);
        float specular = pow(max(dot(reflect(-light, n), eye), 0.0), 12.0);
        float edge = 1.0 - max(dot(n, eye), 0.0);
        float rimLight = max(dot(n, normalize(vec3(-0.6, 0.85, 0.0))), 0.0);
        float rim = edge * edge * edge * edge * rimStrength * (0.12 + 0.88 * rimLight);
        lighting = vec3(diffuse, specular, rim);
        gl_Position = projectionMatrix * view;
      }
    `,fragmentShader:`
      uniform sampler2D colorMap;
      uniform sampler2D reliefMap;
      uniform float relief;
      varying vec2 globeUv;
      varying vec3 lighting;
      void main() {
        // R: land coverage, GB: coast gradients, A: nearby-land shadow mask.
        vec4 coast = texture2D(reliefMap, globeUv);
        float land = coast.r;
        vec2 slope = coast.gb * 2.0 - 1.0;
        float bevel = min(abs(slope.x) + abs(slope.y), 1.0);
        float bevelLight = clamp(-slope.x * 0.6 + slope.y * 0.8, -1.0, 1.0);
        vec3 base = texture2D(colorMap, globeUv).rgb;
        vec3 color = base * mix(0.25 + 0.75 * lighting.x, 0.68 + 0.32 * lighting.x, land);
        color *= 1.0 - bevel * land * min(relief * 28.0, 0.65);
        color += vec3(0.05) * max(bevelLight, 0.0) * land * min(relief * 85.0, 1.0);
        color += vec3(lighting.y * mix(0.12, 0.015, land));
        float coastShadow = (1.0 - land) * coast.a;
        color *= 1.0 - coastShadow * min(relief * 55.0, 0.85);
        color += vec3(lighting.z) * (1.0 - land * 0.88);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}function TE({dataUrl:o="/data/countries.geojson",rotationPeriod:e=20,paused:i=!1,interactive:r=!0,landColor:l="#00f58a",oceanColor:f="#111215",borderColor:h="#00e580",relief:d=.012,rimStrength:_=.2,maxPixelRatio:m=1.5,textureWidth:g=2048,className:p="",style:v,onFrame:E,onReady:M}){const A=jn.useRef(null),x=jn.useRef({paused:i,rotationPeriod:e,onFrame:E,onReady:M}),y=jn.useRef(()=>{}),[U,N]=jn.useState("");return jn.useEffect(()=>{x.current={paused:i,rotationPeriod:e,onFrame:E,onReady:M},y.current()},[i,e,E,M]),jn.useEffect(()=>{const C=A.current,B=new AbortController,z=window.matchMedia("(prefers-reduced-motion: reduce)"),O=[];let G,w,D,I,tt=!1,rt=null,ct=null,V=!0,X=0;const $=()=>{!tt&&rt===null&&(rt=requestAnimationFrame(vt))},q=()=>{ct=null,$()};y.current=q;function vt(F){if(rt=null,tt||!G||document.hidden||!V){ct=null;return}const lt=ct===null?0:(F-ct)/1e3;ct=F;const{paused:W,rotationPeriod:it,onFrame:Et}=x.current,Dt=!W&&!z.matches&&Number.isFinite(it)&&it>0;Dt&&(Qt.rotation.y+=Math.PI*2/it*lt),X+=lt,w.update(),G.render(yt,wt),Et?.({timestamp:F,delta:lt,elapsed:X,rotation:Qt.rotation.y,drawCalls:G.info.render.calls,triangles:G.info.render.triangles}),Dt?$():ct=null}let yt,wt,Qt;async function le(){try{N("");const F=await fetch(o,{signal:B.signal});if(!F.ok)throw new Error(`Geography request failed (${F.status})`);const lt=await F.json();if(tt)return;lt.features=lt.features.filter(ut=>!["RUS","BLR"].includes(ut.properties.iso_a3??ut.properties["ISO3166-1-Alpha-3"]));for(const ut of lt.features){const ft=ut.geometry.type==="Polygon"?[ut.geometry.coordinates]:ut.geometry.coordinates;for(const zt of ft)zt.forEach((Ct,qt)=>{const Kt=q2({type:"Polygon",coordinates:[Ct]});(qt===0&&Kt>2*Math.PI||qt>0&&Kt<2*Math.PI)&&Ct.reverse()})}const W=Math.min(4096,Math.max(512,Math.round(g))),it=document.createElement("canvas");it.width=W,it.height=W/2;const Et=it.getContext("2d");Et.fillStyle=f,Et.fillRect(0,0,W,W/2);const Dt=Aw().scale(W/(2*Math.PI)).translate([W/2,W/4]),Rt=xy(Dt,Et);Et.fillStyle=l,Et.strokeStyle=h,Et.lineWidth=W/4096*1.5;for(const ut of lt.features)Et.beginPath(),Rt(ut),Et.fill(),Et.stroke();const xt=document.createElement("canvas");xt.width=W,xt.height=W/2;const Gt=xt.getContext("2d");Gt.fillStyle="#000",Gt.fillRect(0,0,W,W/2),Gt.fillStyle="#fff";const H=xy(Dt,Gt);for(const ut of lt.features)Gt.beginPath(),H(ut),Gt.fill(),Gt.strokeStyle="#fff",Gt.lineWidth=.4,Gt.stroke();const Ae=Gt.getImageData(0,0,W,W/2),re=Ae.data.slice(),Yt=xt.height,Ut=(ut,ft)=>re[(Math.max(0,Math.min(Yt-1,ft))*W+(ut+W)%W)*4];for(let ut=0;ut<Yt;ut++)for(let ft=0;ft<W;ft++){const zt=(ut*W+ft)*4;Ae.data[zt+1]=Math.round(127.5+(Ut(ft+1,ut)-Ut(ft-1,ut))/2),Ae.data[zt+2]=Math.round(127.5+(Ut(ft,ut-1)-Ut(ft,ut+1))/2),Ae.data[zt+3]=Ut(ft-2,ut-2)}const ne=new Uint8Array(Ae.data.length);for(let ut=0;ut<Yt;ut++)ne.set(Ae.data.subarray(ut*W*4,(ut+1)*W*4),(Yt-1-ut)*W*4);const Pt=new Nb(ne,W,Yt,Li);Pt.minFilter=Ni,Pt.magFilter=Ni,Pt.needsUpdate=!0,O.push(Pt);const se=new zb(it);se.colorSpace=gi,O.push(se),G=new T2({alpha:!0,antialias:!0,powerPreference:"low-power"}),G.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,m))),G.setClearColor(0,0),se.anisotropy=Math.min(4,G.capabilities.getMaxAnisotropy()),C.appendChild(G.domElement),yt=new Ub,wt=new Di(34,1,.1,20),wt.position.set(0,0,3.7);const Ce=new Ym(1,64,48),De=Ce.attributes.position,L=Ce.attributes.uv;for(let ut=0;ut<De.count;ut++){const zt=1+Ut(Math.round(L.getX(ut)*(W-1)),Math.round((1-L.getY(ut))*(Yt-1)))/255*Math.max(0,Math.min(.03,d));De.setXYZ(ut,De.getX(ut)*zt,De.getY(ut)*zt,De.getZ(ut)*zt)}Ce.computeBoundingSphere();const b=Rw({colorMap:se,reliefMap:Pt,textureWidth:W,relief:Math.max(0,Math.min(.03,d)),rimStrength:Math.max(0,Math.min(1,_))});O.push(Ce,b),Qt=new la(Ce,b),Qt.rotation.set(.5,-1.45,0),yt.add(Qt),w=new A2(wt,G.domElement),w.enabled=r,w.enableZoom=!1,w.enablePan=!1,w.enableDamping=!1,w.autoRotate=!1,w.rotateSpeed=.55,w.minPolarAngle=.15,w.maxPolarAngle=Math.PI-.15,w.addEventListener("change",$);const nt=G.domElement;nt.setAttribute("role","img"),nt.setAttribute("aria-label",r?"Animated globe. Drag or use arrow keys while focused to rotate.":"Animated globe."),r&&(nt.tabIndex=0,w.listenToKeyEvents(nt));const pt=()=>{const{width:ut,height:ft}=C.getBoundingClientRect();!ut||!ft||(G.setSize(ut,ft),wt.aspect=ut/ft,wt.updateProjectionMatrix(),wt.position.setLength(3.7/Math.min(1,wt.aspect)),q())};D=new ResizeObserver(pt),D.observe(C),pt(),I=new IntersectionObserver(([ut])=>{V=ut.isIntersecting,q()}),I.observe(C),document.addEventListener("visibilitychange",q),z.addEventListener("change",q),x.current.onReady?.(),$()}catch(F){!tt&&F.name!=="AbortError"&&N("The globe could not load. Check the geography URL and WebGL browser support.")}}return le(),()=>{tt=!0,B.abort(),cancelAnimationFrame(rt),y.current=()=>{},document.removeEventListener("visibilitychange",q),z.removeEventListener("change",q),D?.disconnect(),I?.disconnect(),w?.dispose(),O.forEach(F=>F.dispose()),G?.dispose(),G?.domElement.remove()}},[o,r,l,f,h,d,_,m,g]),_t.createElement("div",{className:`expla-globe ${p}`,style:v,ref:A,"data-interactive":r},U&&_t.createElement("p",{className:"expla-globe__error",role:"alert"},U))}const Cw={uk:{nav:["Про нас","Наші напрямки","Кар’єра","Блог","Контакти"],title:"expla топ-100 партнерів",subtitle:"Meta Ads & Google Ads у Європі",directions:"Наші напрямки",more:"ДЕТАЛЬНІШЕ",cards:[{title:"Social Media Advertising",description:"Залучаємо користувачів через рекламу в соціальних мережах",tags:"META ADS · TIKTOK · SNAPCHAT · X",detail:"Поєднуємо стратегію, креативи та аналітику, щоб знаходити вашу аудиторію в соціальних мережах. Тестуємо ідеї, оптимізуємо кампанії та масштабуємо те, що працює."},{title:"PPC Team",description:"Перетворюємо рекламний клік на реєстрацію чи покупку",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS",detail:"Працюємо з пошуковою та нативною рекламою на всіх етапах шляху користувача. Аналізуємо результати та оптимізуємо кампанії відповідно до бізнес-цілей."},{title:"SEO",description:"Розвиваємо власні сайти та залучаємо користувачів із пошуку Google",tags:"ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА",detail:"Досліджуємо пошуковий попит, створюємо корисний контент і працюємо з технічною оптимізацією. Допомагаємо людям знаходити відповіді, а проєктам — свою аудиторію."},{title:"Affiliate Network",description:"Поєднуємо рекламодавців і афіліатів у партнерську мережу",tags:"CPAMATICA · 1 000+ ПАРТНЕРІВ",detail:"Об’єднуємо рекламодавців і партнерів навколо спільного результату. Створюємо можливості для співпраці та розвитку performance-маркетингу."}],seen:"нашу рекламу бачать",online:"онлайн-користувачів у світі",users:"8 з 10 користувачів",zone:"НАША ЗОНА РОБОТИ",channelsStart:"Канали, що перетворюють",channelsEnd:"увагу на",result:"результат",close:"Закрити",menu:"Відкрити меню",socialTitle:"Соціальні мережі expla",socialBody:"Дізнавайтеся більше про команду, ідеї та життя expla.",careerTitle:"Зростай разом з expla",careerBody:"Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.",careerAction:"Дослідити напрямки",blogTitle:"Ідеї, що рухають уперед",blogBody:"Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.",contactTitle:"Почнімо з вашої задачі",contactBody:"Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.",name:"Ваше ім’я",email:"Email",message:"Про вашу задачу",submit:"Скопіювати звернення",copied:"Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.",copyError:"Скопіюйте текст із поля нижче.",skip:"Перейти до вмісту",globe:"Жива планета expla"},en:{nav:["About us","Our expertise","Careers","Blog","Contacts"],title:"expla is a top-100 partner",subtitle:"for Meta Ads & Google Ads in Europe",directions:"Our expertise",more:"LEARN MORE",cards:[{title:"Social Media Advertising",description:"Connecting people with brands through social media advertising",tags:"META ADS · TIKTOK · SNAPCHAT · X",detail:"We bring strategy, creative work, and analytics together to find your audience on social media. We test ideas, optimize campaigns, and scale what works."},{title:"PPC Team",description:"Turning an ad click into a registration or a purchase",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS",detail:"We work with search and native advertising throughout the customer journey, measuring results and optimizing campaigns around business goals."},{title:"SEO",description:"Growing our own websites and attracting users from Google search",tags:"ORGANIC SEARCH · CONTENT · ANALYTICS",detail:"We research search demand, create useful content, and improve technical performance. Helping people find answers and projects find their audience."},{title:"Affiliate Network",description:"Bringing advertisers and affiliates together in a partner network",tags:"CPAMATICA · 1,000+ PARTNERS",detail:"We connect advertisers and partners around shared outcomes, creating opportunities for collaboration and growth in performance marketing."}],seen:"our advertising reaches",online:"of online users worldwide",users:"8 out of 10 users",zone:"WHERE WE WORK",channelsStart:"Channels that turn",channelsEnd:"attention into",result:"results",close:"Close",menu:"Open menu",socialTitle:"Find expla on social media",socialBody:"Get to know our people, ideas, and life at expla.",careerTitle:"Grow with expla",careerBody:"Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.",careerAction:"Explore our expertise",blogTitle:"Ideas that move us forward",blogBody:"Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.",contactTitle:"Let’s start with your challenge",contactBody:"Tell us what you want to grow. Prepare and copy your inquiry here.",name:"Your name",email:"Email",message:"Your challenge",submit:"Copy inquiry",copied:"Inquiry copied. You can send it through your preferred contact channel.",copyError:"Copy the text from the field below.",skip:"Skip to content",globe:"The live expla globe"}};function Ay({small:o=!1}){return _t.createElement("a",{className:`logo${o?" logo--small":""}`,href:"#about","aria-label":"expla"},_t.createElement("span",null,"expla"),_t.createElement("i",{"aria-hidden":"true"}))}function jc(){return _t.createElement("svg",{"aria-hidden":"true",width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},_t.createElement("path",{d:"M4 12h15m-6-6 6 6-6 6"}))}function ww({name:o}){return o==="Microsoft"?_t.createElement("span",{className:"channel-brand microsoft"},_t.createElement("span",{className:"windows","aria-hidden":"true"},_t.createElement("i",null),_t.createElement("i",null),_t.createElement("i",null),_t.createElement("i",null)),"Microsoft"):o==="Meta"?_t.createElement("span",{className:"channel-brand meta"},_t.createElement("svg",{width:"35",height:"24",viewBox:"0 0 40 25",fill:"none",stroke:"currentColor",strokeWidth:"3","aria-hidden":"true"},_t.createElement("path",{d:"M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"})),"Meta"):o==="TikTok"?_t.createElement("span",{className:"channel-brand tiktok"},_t.createElement("svg",{width:"25",height:"29",viewBox:"0 0 26 30",fill:"currentColor","aria-hidden":"true"},_t.createElement("path",{d:"M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"})),"TikTok"):_t.createElement("span",{className:`channel-brand ${o==="Google"?"google":""}`},o)}function Dw({t:o}){const[e,i]=jn.useState(""),[r,l]=jn.useState("");async function f(h){h.preventDefault();const d=new FormData(h.currentTarget),_=`${d.get("name")}
${d.get("email")}

${d.get("message")}`;try{await navigator.clipboard.writeText(_),i(o.copied)}catch{l(_),i(o.copyError)}}return _t.createElement("form",{className:"contact-form",onSubmit:f},_t.createElement("label",null,o.name,_t.createElement("input",{name:"name",autoComplete:"name",required:!0,maxLength:100})),_t.createElement("label",null,o.email,_t.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:200})),_t.createElement("label",null,o.message,_t.createElement("textarea",{name:"message",rows:4,required:!0,maxLength:4e3})),_t.createElement("button",{className:"primary-button",type:"submit"},o.submit,_t.createElement(jc,null)),e&&_t.createElement("p",{className:"form-status",role:"status"},e),r&&_t.createElement("textarea",{readOnly:!0,"aria-label":o.message,value:r,rows:5,onFocus:h=>h.target.select()}))}function Uw(){const[o,e]=jn.useState("uk"),[i,r]=jn.useState(!1),[l,f]=jn.useState(null),h=jn.useRef(null),d=Cw[o];jn.useEffect(()=>{document.documentElement.lang=o},[o]),jn.useEffect(()=>{if(!l)return;const v=h.current,E=document.activeElement;v.showModal();const M=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{v.close(),document.body.style.overflow=M,E instanceof HTMLElement&&E.isConnected&&E.focus({preventScroll:!0})}},[l]);function _(v){r(!1),f(v)}function m(){f(null),document.getElementById("directions").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}const g=l?.type==="direction"?d.cards[l.index]:null,p=g?.title||(l?.type==="career"?d.careerTitle:l?.type==="blog"?d.blogTitle:l?.type==="contact"?d.contactTitle:`${l?.network||""} · expla`);return _t.createElement(_t.Fragment,null,_t.createElement("a",{className:"skip-link",href:"#main"},d.skip),_t.createElement("header",{className:"site-header container"},_t.createElement(Ay,null),_t.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":i,"aria-controls":"site-navigation","aria-label":d.menu,onClick:()=>r(!i)},_t.createElement("span",null),_t.createElement("span",null)),_t.createElement("nav",{id:"site-navigation",className:`navigation${i?" is-open":""}`,"aria-label":o==="uk"?"Основна навігація":"Main navigation"},_t.createElement("a",{href:"#about",onClick:()=>r(!1)},d.nav[0]),_t.createElement("a",{href:"#directions",onClick:()=>r(!1)},d.nav[1]),_t.createElement("button",{onClick:()=>_({type:"career"})},d.nav[2]),_t.createElement("button",{onClick:()=>_({type:"blog"})},d.nav[3]),_t.createElement("button",{onClick:()=>_({type:"contact"})},d.nav[4])),_t.createElement("div",{className:"language-switch","aria-label":o==="uk"?"Мова сайту":"Website language"},_t.createElement("button",{lang:"uk","aria-pressed":o==="uk",onClick:()=>e("uk")},"UA"),_t.createElement("span",{"aria-hidden":"true"},"|"),_t.createElement("button",{lang:"en","aria-pressed":o==="en",onClick:()=>e("en")},"EN"))),_t.createElement("main",{id:"main"},_t.createElement("section",{className:"hero container",id:"about"},_t.createElement("h1",null,d.title),_t.createElement("p",null,d.subtitle)),_t.createElement("section",{className:"directions",id:"directions","aria-labelledby":"directions-title"},_t.createElement("div",{className:"container"},_t.createElement("h2",{id:"directions-title"},d.directions),_t.createElement("div",{className:"direction-grid"},d.cards.map((v,E)=>_t.createElement("article",{className:"direction-card",key:v.title},_t.createElement("h3",null,v.title),_t.createElement("p",null,v.description),_t.createElement("div",{className:"card-bottom"},_t.createElement("p",{className:"card-tags"},v.tags),_t.createElement("button",{className:"detail-button",onClick:()=>_({type:"direction",index:E}),"aria-label":`${d.more}: ${v.title}`},d.more,_t.createElement(jc,null)))))))),_t.createElement("section",{className:"reach container","aria-label":d.globe},_t.createElement("div",{className:"reach-globe"},_t.createElement("div",{className:"globe-ring","aria-hidden":"true"}),_t.createElement(TE,{dataUrl:"./data/countries.geojson"})),_t.createElement("div",{className:"reach-copy"},_t.createElement("p",{className:"reach-intro"},d.seen),_t.createElement("p",{className:"reach-value"},"80",_t.createElement("span",null,"%")),_t.createElement("h2",null,d.online),_t.createElement("div",{className:"reach-meter"},_t.createElement("span",{className:"meter-blocks","aria-hidden":"true"},Array.from({length:10},(v,E)=>_t.createElement("i",{key:E,className:E<8?"is-filled":""}))),_t.createElement("span",null,d.users)))),_t.createElement("section",{className:"channels","aria-labelledby":"channels-title"},_t.createElement("div",{className:"container channels-heading"},_t.createElement("p",{className:"section-eyebrow"},_t.createElement("i",{"aria-hidden":"true"}),d.zone),_t.createElement("h2",{id:"channels-title"},d.channelsStart,_t.createElement("br",null),d.channelsEnd," ",_t.createElement("span",null,d.result))),_t.createElement("div",{className:"channel-strip"},["Google","Meta","Microsoft","Native Ads","TikTok","Snapchat"].map((v,E)=>_t.createElement("div",{className:"channel",key:v},_t.createElement("span",{className:"channel-number"},"0",E+1),_t.createElement(ww,{name:v})))))),_t.createElement("footer",{className:"site-footer container"},_t.createElement(Ay,{small:!0}),_t.createElement("div",{className:"social-links"},["Facebook","Instagram","LinkedIn"].map(v=>_t.createElement("button",{key:v,onClick:()=>_({type:"social",network:v})},v)))),l&&_t.createElement("dialog",{className:"info-dialog",ref:h,"aria-labelledby":"dialog-title",onCancel:v=>{v.preventDefault(),f(null)},onClick:v=>{if(v.target===v.currentTarget){const E=v.currentTarget.getBoundingClientRect();(v.clientX<E.left||v.clientX>E.right||v.clientY<E.top||v.clientY>E.bottom)&&f(null)}}},_t.createElement("button",{className:"dialog-close",type:"button","aria-label":d.close,onClick:()=>f(null)},"×"),_t.createElement("h2",{id:"dialog-title"},p),g?_t.createElement(_t.Fragment,null,_t.createElement("p",null,g.detail),_t.createElement("p",{className:"dialog-tags"},g.tags)):l.type==="contact"?_t.createElement(_t.Fragment,null,_t.createElement("p",null,d.contactBody),_t.createElement(Dw,{t:d})):l.type==="career"?_t.createElement(_t.Fragment,null,_t.createElement("p",null,d.careerBody),_t.createElement("button",{className:"primary-button",onClick:m},d.careerAction,_t.createElement(jc,null))):l.type==="blog"?_t.createElement(_t.Fragment,null,_t.createElement("p",null,d.blogBody),_t.createElement("div",{className:"dialog-directions"},d.cards.map((v,E)=>_t.createElement("button",{key:v.title,onClick:()=>_({type:"direction",index:E})},v.title,_t.createElement(jc,null))))):_t.createElement("p",null,d.socialBody)))}const Nw=o=>{window.__globeFrame=o,window.__globeSamples?.push(o)},Lw=new URLSearchParams(window.location.search).get("view")==="globe";pT.createRoot(document.getElementById("root")).render(Lw?_t.createElement("main",{className:"standalone-preview","aria-label":"Globe integration preview"},_t.createElement(TE,{dataUrl:"./data/countries.geojson",onFrame:Nw})):_t.createElement(Uw,null));
