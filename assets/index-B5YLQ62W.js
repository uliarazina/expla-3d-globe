(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bh={exports:{}},ue={};var tS;function iM(){if(tS)return ue;tS=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=M&&V[M]||V["@@iterator"],typeof V=="function"?V:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,E={};function N(V,ct,Q){this.props=V,this.context=ct,this.refs=E,this.updater=Q||A}N.prototype.isReactComponent={},N.prototype.setState=function(V,ct){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ct,"setState")},N.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function U(){}U.prototype=N.prototype;function C(V,ct,Q){this.props=V,this.context=ct,this.refs=E,this.updater=Q||A}var F=C.prototype=new U;F.constructor=C,y(F,N.prototype),F.isPureReactComponent=!0;var O=Array.isArray;function z(){}var G={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(V,ct,Q){var K=Q.ref;return{$$typeof:o,type:V,key:ct,ref:K!==void 0?K:null,props:Q}}function I(V,ct){return R(V.type,ct,V.props)}function $(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function st(V){var ct={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Q){return ct[Q]})}var ot=/\/+/g;function k(V,ct){return typeof V=="object"&&V!==null&&V.key!=null?st(""+V.key):ct.toString(36)}function P(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(z,z):(V.status="pending",V.then(function(ct){V.status==="pending"&&(V.status="fulfilled",V.value=ct)},function(ct){V.status==="pending"&&(V.status="rejected",V.reason=ct)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function at(V,ct,Q,K,yt){var wt=typeof V;(wt==="undefined"||wt==="boolean")&&(V=null);var At=!1;if(V===null)At=!0;else switch(wt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(V.$$typeof){case o:case e:At=!0;break;case m:return At=V._init,at(At(V._payload),ct,Q,K,yt)}}if(At)return yt=yt(V),At=K===""?"."+k(V,0):K,O(yt)?(Q="",At!=null&&(Q=At.replace(ot,"$&/")+"/"),at(yt,ct,Q,"",function(H){return H})):yt!=null&&($(yt)&&(yt=I(yt,Q+(yt.key==null||V&&V.key===yt.key?"":(""+yt.key).replace(ot,"$&/")+"/")+At)),ct.push(yt)),1;At=0;var Mt=K===""?".":K+":";if(O(V))for(var kt=0;kt<V.length;kt++)K=V[kt],wt=Mt+k(K,kt),At+=at(K,ct,Q,wt,yt);else if(kt=x(V),typeof kt=="function")for(V=kt.call(V),kt=0;!(K=V.next()).done;)K=K.value,wt=Mt+k(K,kt++),At+=at(K,ct,Q,wt,yt);else if(wt==="object"){if(typeof V.then=="function")return at(P(V),ct,Q,K,yt);throw ct=String(V),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function Y(V,ct,Q){if(V==null)return V;var K=[],yt=0;return at(V,K,"","",function(wt){return ct.call(Q,wt,yt++)}),K}function mt(V){if(V._status===-1){var ct=V._result,Q=ct();Q.then(function(K){(V._status===0||V._status===-1)&&(V._status=1,V._result=K,Q.status===void 0&&(Q.status="fulfilled",Q.value=K))},function(K){(V._status===0||V._status===-1)&&(V._status=2,V._result=K,Q.status===void 0&&(Q.status="rejected",Q.reason=K))}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var Et=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ot(V){var ct=G.T,Q={};Q.types=ct!==null?ct.types:null,G.T=Q;try{var K=V(),yt=G.S;yt!==null&&yt(Q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(z,Et)}catch(wt){Et(wt)}finally{ct!==null&&Q.types!==null&&(ct.types=Q.types),G.T=ct}}function Zt(V){var ct=G.T;if(ct!==null){var Q=ct.types;Q===null?ct.types=[V]:Q.indexOf(V)===-1&&Q.push(V)}else Ot(Zt.bind(null,V))}var re={map:Y,forEach:function(V,ct,Q){Y(V,function(){ct.apply(this,arguments)},Q)},count:function(V){var ct=0;return Y(V,function(){ct++}),ct},toArray:function(V){return Y(V,function(ct){return ct})||[]},only:function(V){if(!$(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return ue.Activity=p,ue.Children=re,ue.Component=N,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=C,ue.StrictMode=r,ue.Suspense=v,ue.ViewTransition=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(V){return G.H.useMemoCache(V)}},ue.addTransitionType=Zt,ue.cache=function(V){return function(){return V.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(V,ct,Q){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var K=y({},V.props),yt=V.key;if(ct!=null)for(wt in ct.key!==void 0&&(yt=""+ct.key),ct)!w.call(ct,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&ct.ref===void 0||(K[wt]=ct[wt]);var wt=arguments.length-2;if(wt===1)K.children=Q;else if(1<wt){for(var At=Array(wt),Mt=0;Mt<wt;Mt++)At[Mt]=arguments[Mt+2];K.children=At}return R(V.type,yt,K)},ue.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},ue.createElement=function(V,ct,Q){var K,yt={},wt=null;if(ct!=null)for(K in ct.key!==void 0&&(wt=""+ct.key),ct)w.call(ct,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(yt[K]=ct[K]);var At=arguments.length-2;if(At===1)yt.children=Q;else if(1<At){for(var Mt=Array(At),kt=0;kt<At;kt++)Mt[kt]=arguments[kt+2];yt.children=Mt}if(V&&V.defaultProps)for(K in At=V.defaultProps,At)yt[K]===void 0&&(yt[K]=At[K]);return R(V,wt,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(V){return{$$typeof:h,render:V}},ue.isValidElement=$,ue.lazy=function(V){return{$$typeof:m,_payload:{_status:-1,_result:V},_init:mt}},ue.memo=function(V,ct){return{$$typeof:g,type:V,compare:ct===void 0?null:ct}},ue.startTransition=Ot,ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(V){return G.H.use(V)},ue.useActionState=function(V,ct,Q){return G.H.useActionState(V,ct,Q)},ue.useCallback=function(V,ct){return G.H.useCallback(V,ct)},ue.useContext=function(V){return G.H.useContext(V)},ue.useDebugValue=function(){},ue.useDeferredValue=function(V,ct){return G.H.useDeferredValue(V,ct)},ue.useEffect=function(V,ct){return G.H.useEffect(V,ct)},ue.useEffectEvent=function(V){return G.H.useEffectEvent(V)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(V,ct,Q){return G.H.useImperativeHandle(V,ct,Q)},ue.useInsertionEffect=function(V,ct){return G.H.useInsertionEffect(V,ct)},ue.useLayoutEffect=function(V,ct){return G.H.useLayoutEffect(V,ct)},ue.useMemo=function(V,ct){return G.H.useMemo(V,ct)},ue.useOptimistic=function(V,ct){return G.H.useOptimistic(V,ct)},ue.useReducer=function(V,ct,Q){return G.H.useReducer(V,ct,Q)},ue.useRef=function(V){return G.H.useRef(V)},ue.useState=function(V){return G.H.useState(V)},ue.useSyncExternalStore=function(V,ct,Q){return G.H.useSyncExternalStore(V,ct,Q)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.3.1",ue}var eS;function Nm(){return eS||(eS=1,Bh.exports=iM()),Bh.exports}var ke=Nm();const nt=nM(ke);var Fh={exports:{}},_l={},Hh={exports:{}},Gh={};var nS;function aM(){return nS||(nS=1,(function(o){function e(P,at){var Y=P.length;P.push(at);t:for(;0<Y;){var mt=Y-1>>>1,Et=P[mt];if(0<l(Et,at))P[mt]=at,P[Y]=Et,Y=mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var at=P[0],Y=P.pop();if(Y!==at){P[0]=Y;t:for(var mt=0,Et=P.length,Ot=Et>>>1;mt<Ot;){var Zt=2*(mt+1)-1,re=P[Zt],V=Zt+1,ct=P[V];if(0>l(re,Y))V<Et&&0>l(ct,re)?(P[mt]=ct,P[V]=Y,mt=V):(P[mt]=re,P[Zt]=Y,mt=Zt);else if(V<Et&&0>l(ct,Y))P[mt]=ct,P[V]=Y,mt=V;else break t}}return at}function l(P,at){var Y=P.sortIndex-at.sortIndex;return Y!==0?Y:P.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var v=[],g=[],m=1,p=null,_=3,M=!1,x=!1,A=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var at=i(g);at!==null;){if(at.callback===null)r(g);else if(at.startTime<=P)r(g),at.sortIndex=at.expirationTime,e(v,at);else break;at=i(g)}}function F(P){if(A=!1,C(P),!x)if(i(v)!==null)x=!0,O||(O=!0,$());else{var at=i(g);at!==null&&k(F,at.startTime-P)}}var O=!1,z=-1,G=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<G)}function I(){if(y=!1,O){var P=o.unstable_now();w=P;var at=!0;try{t:{x=!1,A&&(A=!1,N(z),z=-1),M=!0;var Y=_;try{e:{for(C(P),p=i(v);p!==null&&!(p.expirationTime>P&&R());){var mt=p.callback;if(typeof mt=="function"){p.callback=null,_=p.priorityLevel;var Et=mt(p.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){p.callback=Et,C(P),at=!0;break e}p===i(v)&&r(v),C(P)}else r(v);p=i(v)}if(p!==null)at=!0;else{var Ot=i(g);Ot!==null&&k(F,Ot.startTime-P),at=!1}}break t}finally{p=null,_=Y,M=!1}at=void 0}}finally{at?$():O=!1}}}var $;if(typeof U=="function")$=function(){U(I)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ot=st.port2;st.port1.onmessage=I,$=function(){ot.postMessage(null)}}else $=function(){E(I,0)};function k(P,at){z=E(function(){P(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(P){switch(_){case 1:case 2:case 3:var at=3;break;default:at=_}var Y=_;_=at;try{return P()}finally{_=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,at){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=_;_=P;try{return at()}finally{_=Y}},o.unstable_scheduleCallback=function(P,at,Y){var mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?mt+Y:mt):Y=mt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,P={id:m++,callback:at,priorityLevel:P,startTime:Y,expirationTime:Et,sortIndex:-1},Y>mt?(P.sortIndex=Y,e(g,P),i(v)===null&&P===i(g)&&(A?(N(z),z=-1):A=!0,k(F,Y-mt))):(P.sortIndex=Et,e(v,P),x||M||(x=!0,O||(O=!0,$()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var at=_;return function(){var Y=_;_=at;try{return P.apply(this,arguments)}finally{_=Y}}}})(Gh)),Gh}var iS;function rM(){return iS||(iS=1,Hh.exports=aM()),Hh.exports}var Vh={exports:{}},Ln={};var aS;function sM(){if(aS)return Ln;aS=1;var o=Nm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(m,p,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:m,containerInfo:p,implementation:_}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(m){return{$$typeof:c,_reason:m}},Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(m,p,null,_)},Ln.flushSync=function(m){var p=v.T,_=r.p;try{if(v.T=null,r.p=2,m)return m()}finally{v.T=p,r.p=_,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,M=g(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:x,fetchPriority:A}):_==="script"&&r.d.X(m,{crossOrigin:M,integrity:x,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=g(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,M=g(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=g(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return v.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var rS;function oM(){if(rS)return Vh.exports;rS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vh.exports=sM(),Vh.exports}var sS;function lM(){if(sS)return _l;sS=1;var o=rM(),e=Nm(),i=oM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(c(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return v(u),t;if(f===s)return v(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function x(t){var n=[null,null],a=_(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,N=null;function U(t,n,a){return t===a?!0:t===n?(E=t,!0):!1}function C(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(E=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,G=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),ot=Symbol.for("react.consumer"),k=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),re=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),Q=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case st:return"Profiler";case $:return"StrictMode";case at:return"Suspense";case Y:return"SuspenseList";case Ot:return"Activity";case V:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case k:return t.displayName||"Context";case ot:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mt:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var At=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ze=[],ee=-1;function Jt(t){return{current:t}}function Ut(t){0>ee||(t.current=ze[ee],ze[ee]=null,ee--)}function $t(t,n){ee++,ze[ee]=t.current,t.current=n}var zt=Jt(null),le=Jt(null),be=Jt(null),Ce=Jt(null);function L(t,n){switch($t(be,n),$t(le,t),$t(zt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u_(n),t=c_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut(zt),$t(zt,t)}function b(){Ut(zt),Ut(le),Ut(be)}function it(t){var n=t.memoizedState;n!==null&&(Ws._currentValue=n.memoizedState,$t(Ce,t)),n=zt.current;var a=c_(n,t.type);n!==a&&($t(le,t),$t(zt,a))}function gt(t){le.current===t&&(Ut(zt),Ut(le)),Ce.current===t&&(Ut(Ce),Ws._currentValue=H)}var ft,ut;function Ht(t){if(ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ft=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+t+ut}var Ct=!1;function Gt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Pt){var W=Pt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Pt){W=Pt}_t=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){W=Pt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Pt){if(Pt&&W&&typeof Pt.stack=="string")return[Pt.stack,W.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var B=S.split(`
`),j=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===j.length)for(s=B.length-1,u=j.length-1;1<=s&&0<=u&&B[s]!==j[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==j[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==j[u]){var lt=`
`+B[s].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=s&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ht(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ht(t.type);case 16:return Ht("Lazy");case 13:return t.child!==n&&n!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return Ht("Activity");case 30:return Ht("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xt=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,It=o.unstable_shouldYield,fe=o.unstable_requestPaint,q=o.unstable_now,Dt=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,qt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Kt=o.unstable_IdlePriority,ce=o.log,Xe=o.unstable_setDisableYieldValue,ye=null,an=null;function _n(t){if(typeof ce=="function"&&Xe(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(ye,t)}catch{}}var zn=Math.clz32?Math.clz32:Zl,ua=Math.log,Co=Math.LN2;function Zl(t){return t>>>=0,t===0?32:31-(ua(t)/Co|0)|0}var Tr=256,ca=262144,br=4194304;function gi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=gi(s):(S&=T,S!==0?u=gi(S):a||(a=T&~t,a!==0&&(u=gi(a))))):(T=s&~f,T!==0?u=gi(T):S!==0?u=gi(S):a||(a=s&~t,a!==0&&(u=gi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function jl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-zn(a),u=1<<s;n|=t[s],a&=~u}return n}function df(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kl(){var t=br;return br<<=1,(br&62914560)===0&&(br=4194304),t}function wo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hf(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,j=t.hiddenUpdates;for(a=S&~a;0<a;){var lt=31-zn(a),_t=1<<lt;T[lt]=0,B[lt]=-1;var W=j[lt];if(W!==null)for(j[lt]=null,lt=0;lt<W.length;lt++){var rt=W[lt];rt!==null&&(rt.lane&=-536870913)}a&=~_t}s!==0&&D(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function J(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function dt(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=kt.p;return t!==0?t:(t=window.event,t===void 0?32:W_(t.type))}function Bt(t,n){var a=kt.p;try{return kt.p=t,n()}finally{kt.p=a}}var Vt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Vt,Yt="__reactProps$"+Vt,se="__reactContainer$"+Vt,ie="__reactEvents$"+Vt,_e="__reactListeners$"+Vt,Ie="__reactHandles$"+Vt,$e="__reactResources$"+Vt,Le="__reactMarker$"+Vt,we="__reactLoad$"+Vt;function ae(t){delete t[Nt],delete t[Yt],delete t[_e],delete t[Ie]}function Oe(t){var n;if(n=t[Nt])return n;for(var a=t.parentNode;a;){if(n=a[se]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=R_(t);t!==null;){if(a=t[Nt])return a;t=R_(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Nt]||t[se]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ii(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Fa(t){t[we]=void 0}var je=new Set,Vn={};function dn(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Vn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var In=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cs={},Xi={};function yE(t){return xt.call(Xi,t)?!0:xt.call(cs,t)?!1:In.test(t)?Xi[t]=!0:(cs[t]=!0,!1)}var Ue=!1;function jm(){var t=Ue;return Ue=!1,t}function Ql(t,n,a){if(yE(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Jl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function fa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ai(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ME(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function pf(t){if(!t._valueTracker){var n=Km(t)?"checked":"value";t._valueTracker=ME(t,n,""+t[n])}}function Qm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Km(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var xE=/[\n"\\]/g;function vi(t){return t.replace(xE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function mf(t,n,a,s,u,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ai(n)):t.value!==""+ai(n)&&(t.value=""+ai(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?S==="number"&&t.value==n?gf(t,ai(t.value)):gf(t,ai(n)):a!=null?gf(t,ai(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ai(T):t.removeAttribute("name")}function Jm(t,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){pf(t);return}a=a!=null?""+ai(a):"",n=n!=null?""+ai(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),pf(t)}function gf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function fs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ai(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $m(t,n,a){if(n!=null&&(n=""+ai(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ai(a):""}function t0(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ai(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),pf(t)}function ds(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var TE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function e0(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||TE.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function n0(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ue=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(e0(t,u,s),Ue=!0)}else for(var f in n)n.hasOwnProperty(f)&&e0(t,f,n[f])}function vf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(t){return AE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var _f=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hs=null,ps=null;function i0(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Yt]||null;t:switch(t=n.stateNode,n.type){case"input":if(mf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Yt]||null;if(!u)throw Error(r(90));mf(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Qm(s)}break t;case"textarea":$m(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fs(t,!!a.multiple,n,!1)}}}var Ef=!1;function a0(t,n,a){if(Ef)return t(n,a);Ef=!0;try{var s=t(n);return s}finally{if(Ef=!1,(hs!==null||ps!==null)&&($u(),hs&&(n=hs,t=ps,ps=hs=null,i0(n),t)))for(n=0;n<t.length;n++)i0(t[n])}}function Do(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Yt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(da)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{yf=!1}var Ha=null,Mf=null,tu=null;function r0(){if(tu)return tu;var t,n=Mf,a=n.length,s,u="value"in Ha?Ha.value:Ha.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return tu=u.slice(t,1<s?1-s:void 0)}function eu(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nu(){return!0}function s0(){return!1}function kn(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nu:s0,this.isPropagationStopped=s0,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=kn(Ga),No=z({},Ga,{view:0,detail:0}),RE=kn(No),xf,Tf,Lo,au=z({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(xf=t.screenX-Lo.screenX,Tf=t.screenY-Lo.screenY):Tf=xf=0,Lo=t),xf)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),o0=kn(au),CE=z({},au,{dataTransfer:0}),wE=kn(CE),DE=z({},No,{relatedTarget:0}),bf=kn(DE),UE=z({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),NE=kn(UE),LE=z({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OE=kn(LE),PE=z({},Ga,{data:0}),l0=kn(PE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=BE[t])?!!n[t]:!1}function Af(){return FE}var HE=z({},No,{key:function(t){if(t.key){var n=zE[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GE=kn(HE),VE=z({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u0=kn(VE),kE=z({},Ga,{submitter:0}),XE=kn(kE),qE=z({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),YE=kn(qE),WE=z({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZE=kn(WE),jE=z({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KE=kn(jE),QE=z({},Ga,{newState:0,oldState:0,source:0}),JE=kn(QE),$E=[9,13,27,32],Rf=da&&"CompositionEvent"in window,Oo=null;da&&"documentMode"in document&&(Oo=document.documentMode);var t1=da&&"TextEvent"in window&&!Oo,c0=da&&(!Rf||Oo&&8<Oo&&11>=Oo),f0=" ",d0=!1;function h0(t,n){switch(t){case"keyup":return $E.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function e1(t,n){switch(t){case"compositionend":return p0(n);case"keypress":return n.which!==32?null:(d0=!0,f0);case"textInput":return t=n.data,t===f0&&d0?null:t;default:return null}}function n1(t,n){if(ms)return t==="compositionend"||!Rf&&h0(t,n)?(t=r0(),tu=Mf=Ha=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return c0&&n.locale!=="ko"?null:n.data;default:return null}}var i1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!i1[t.type]:n==="textarea"}function g0(t,n,a,s){hs?ps?ps.push(s):ps=[s]:hs=s,n=rc(n,"onChange"),0<n.length&&(a=new iu("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Po=null,zo=null;function a1(t){i_(t,0)}function ru(t){var n=Sn(t);if(Qm(n))return t}function v0(t,n){if(t==="change")return n}var _0=!1;if(da){var Cf;if(da){var wf="oninput"in document;if(!wf){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),wf=typeof S0.oninput=="function"}Cf=wf}else Cf=!1;_0=Cf&&(!document.documentMode||9<document.documentMode)}function E0(){Po&&(Po.detachEvent("onpropertychange",y0),zo=Po=null)}function y0(t){if(t.propertyName==="value"&&ru(zo)){var n=[];g0(n,zo,t,Sf(t)),a0(a1,n)}}function r1(t,n,a){t==="focusin"?(E0(),Po=n,zo=a,Po.attachEvent("onpropertychange",y0)):t==="focusout"&&E0()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(zo)}function o1(t,n){if(t==="click")return ru(n)}function l1(t,n){if(t==="input"||t==="change")return ru(n)}function u1(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:u1;function Io(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!xt.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function Df(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function M0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x0(t,n){var a=M0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=M0(a)}}function T0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?T0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function b0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Df(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Df(t.document)}return n}function Uf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var c1=da&&"documentMode"in document&&11>=document.documentMode,gs=null,Nf=null,Bo=null,Lf=!1;function A0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lf||gs==null||gs!==Df(s)||(s=gs,"selectionStart"in s&&Uf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bo&&Io(Bo,s)||(Bo=s,s=rc(Nf,"onSelect"),0<s.length&&(n=new iu("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=gs)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var vs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Of={},R0={};da&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function wr(t){if(Of[t])return Of[t];if(!vs[t])return t;var n=vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in R0)return Of[t]=n[a];return t}var C0=wr("animationend"),w0=wr("animationiteration"),D0=wr("animationstart"),f1=wr("transitionrun"),d1=wr("transitionstart"),h1=wr("transitioncancel"),U0=wr("transitionend"),N0=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Ui(t,n){N0.set(t,n),dn(n,[t])}var p1=0;function ha(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Pi.identifierPrefix;var a=p1++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function L0(t){if(t==null||typeof t=="string")return t;var n=null,a=Is;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function pa(t,n){return t=L0(t),n=L0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],_s=0,zf=0;function ou(){for(var t=_s,n=zf=_s=0;n<t;){var a=_i[n];_i[n++]=null;var s=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&O0(a,u,f)}}function lu(t,n,a,s){_i[_s++]=t,_i[_s++]=n,_i[_s++]=a,_i[_s++]=s,zf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function If(t,n,a,s){return lu(t,n,a,s),uu(t)}function Dr(t,n){return lu(t,null,null,n),uu(t)}function O0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zn(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function uu(t){if(50<sl)throw sl=0,Ju=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ss={};function m1(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new m1(t,n,a,s)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function P0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cu(t,n,a,s,u,f){var S=0;if(s=t,typeof s=="function")Bf(s)&&(S=1);else if(typeof s=="string")S=ky(t,a,zt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ot:return t=jn(31,a,n,u),t.elementType=Ot,t.lanes=f,t;case I:return Ur(a.children,u,f,n);case $:S=8,u|=24;break;case st:return t=jn(12,a,n,u|2),t.elementType=st,t.lanes=f,t;case at:return t=jn(13,a,n,u),t.elementType=at,t.lanes=f,t;case Y:return t=jn(19,a,n,u),t.elementType=Y,t.lanes=f,t;case Zt:case V:return t=u|32,t=jn(30,a,n,t),t.elementType=V,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case k:S=10;break t;case ot:S=9;break t;case P:S=11;break t;case mt:S=14;break t;case Et:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ur(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function Ff(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function z0(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Hf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var I0=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=I0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},I0.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var Es=[],ys=0,fu=null,Fo=0,Ei=[],yi=0,Va=null,Yi=1,Wi="";function ga(t,n){Es[ys++]=Fo,Es[ys++]=fu,fu=t,Fo=n}function B0(t,n,a){Ei[yi++]=Yi,Ei[yi++]=Wi,Ei[yi++]=Va,Va=t;var s=Yi;t=Wi;var u=32-zn(s)-1;s&=~(1<<u),a+=1;var f=32-zn(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Yi=1<<32-zn(n)+u|a<<u|s,Wi=f+t}else Yi=1<<f|a<<u|s,Wi=t}function du(t){t.return!==null&&(ga(t,1),B0(t,1,0))}function Gf(t){for(;t===fu;)fu=Es[--ys],Es[ys]=null,Fo=Es[--ys],Es[ys]=null;for(;t===Va;)Va=Ei[--yi],Ei[yi]=null,Wi=Ei[--yi],Ei[yi]=null,Yi=Ei[--yi],Ei[yi]=null}function F0(t,n){Ei[yi++]=Yi,Ei[yi++]=Wi,Ei[yi++]=Va,Yi=n.id,Wi=n.overflow,Va=t}var Tn=null,Ke=null,ve=!1,ka=null,Mi=!1,Vf=Error(r(519));function Xa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ho(Si(n,t)),Vf}function H0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Nt]=t,n[Yt]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Ee(ll[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Jm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),t0(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||o_(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Xa(t,!0)}function hu(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Tn=Tn.return}}function Ms(t){if(t!==Tn)return!1;if(!ve)return hu(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_h(t.type,t.memoizedProps)),a=!a),a&&Ke&&Xa(t),hu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=A_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=A_(t)}else n===27?(n=Ke,sr(t.type)?(t=Rh,Rh=null,Ke=t):Ke=n):Ke=Tn?Ti(t.stateNode.nextSibling):null;return!0}function Nr(){Ke=Tn=null,ve=!1}function kf(){var t=ka;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),ka=null),t}function Ho(t){ka===null?ka=[t]:ka.push(t)}var Xf=Jt(null),Lr=null,va=null;function qa(t,n,a){$t(Xf,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=Xf.current,Ut(Xf)}function pu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function qf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),pu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),pu(S,a,t),S=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,S=u.alternate,S!==null&&(S.lanes|=a),pu(u.return,a,t),S=u.child,S=S!==null?S.sibling:null):S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Or(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;ri(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ce.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ws):t=[Ws])}u=u.return}return t!==null&&qf(n,t,a,s),n.flags|=262144,t!==null}function mu(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Lr=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return G0(Lr,t)}function gu(t,n){return Lr===null&&Pr(t),G0(t,n)}function G0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(r(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var g1=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},v1=o.unstable_scheduleCallback,_1=o.unstable_NormalPriority,hn={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new g1,data:new Map,refCount:0}}function Go(t){t.refCount--,t.refCount===0&&v1(_1,function(){t.controller.abort()})}function V0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Vo=null;function S1(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var ko=null,Wf=0,zr=0,xs=null;function E1(t,n){if(ko===null){var a=ko=[];Wf=0,zr=uh(),xs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(k0,k0),n}function k0(){if(--Wf===0&&(Vo=null,ko!==null)){xs!==null&&(xs.status="fulfilled");var t=ko;ko=null,zr=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function y1(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var X0=Mt.S;Mt.S=function(t,n){if(zv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&E1(t,n),Vo!==null)for(var a=Gs;a!==null;)V0(a,Vo),a=a.next;if(a=t.types,a!==null){for(var s=Gs;s!==null;)V0(s,a),s=s.next;if(zr!==0){s=Vo,s===null&&(s=Vo=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}X0!==null&&X0(t,n)};var Ir=Jt(null);function Zf(){var t=Ir.current;return t!==null?t:Ze.pooledCache}function vu(t,n){n===null?$t(Ir,Ir.current):$t(Ir,n.pool)}function q0(){var t=Zf();return t===null?null:{parent:hn._currentValue,pool:t}}var Ts=Error(r(460)),jf=Error(r(474)),_u=Error(r(542)),Su={then:function(){}};function Y0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function W0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,j0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,j0(t),t}throw Fr=n,Ts}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ts):a}}var Fr=null;function Z0(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function j0(t){if(t===Ts||t===_u)throw Error(r(483))}var bs=null,Xo=0;function Eu(t){var n=Xo;return Xo+=1,bs===null&&(bs=[]),W0(bs,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yu(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function K0(t){function n(Z,X){if(t){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function s(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ma(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=2,X):et):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function T(Z,X,et,vt){return X===null||X.tag!==6?(X=Ff(et,Z.mode,vt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function B(Z,X,et,vt){var Xt=et.type;return Xt===I?(Z=lt(Z,X,et.props.children,vt,et.key),Ya(Z,et),Z):X!==null&&(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===Et&&Br(Xt)===X.type)?(X=u(X,et.props),Ya(X,et),X.return=Z,X):(X=cu(et.type,et.key,et.props,null,Z.mode,vt),Ya(X,et),X.return=Z,X)}function j(Z,X,et,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Hf(et,Z.mode,vt),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function lt(Z,X,et,vt,Xt){return X===null||X.tag!==7?(X=Ur(et,Z.mode,vt,Xt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function _t(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ff(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return et=cu(X.type,X.key,X.props,null,Z.mode,et),Ya(et,X),et.return=Z,et;case R:return X=Hf(X,Z.mode,et),X.return=Z,X;case Et:return X=Br(X),_t(Z,X,et)}if(At(X)||K(X))return X=Ur(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return _t(Z,Eu(X),et);if(X.$$typeof===k)return _t(Z,gu(Z,X),et);yu(Z,X)}return null}function W(Z,X,et,vt){var Xt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Xt!==null?null:T(Z,X,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case w:return et.key===Xt?B(Z,X,et,vt):null;case R:return et.key===Xt?j(Z,X,et,vt):null;case Et:return et=Br(et),W(Z,X,et,vt)}if(At(et)||K(et))return Xt!==null?null:lt(Z,X,et,vt,null);if(typeof et.then=="function")return W(Z,X,Eu(et),vt);if(et.$$typeof===k)return W(Z,X,gu(Z,et),vt);yu(Z,et)}return null}function rt(Z,X,et,vt,Xt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Z=Z.get(et)||null,T(X,Z,""+vt,Xt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case w:return Z=Z.get(vt.key===null?et:vt.key)||null,B(X,Z,vt,Xt);case R:return Z=Z.get(vt.key===null?et:vt.key)||null,j(X,Z,vt,Xt);case Et:return vt=Br(vt),rt(Z,X,et,vt,Xt)}if(At(vt)||K(vt))return Z=Z.get(et)||null,lt(X,Z,vt,Xt,null);if(typeof vt.then=="function")return rt(Z,X,et,Eu(vt),Xt);if(vt.$$typeof===k)return rt(Z,X,et,gu(X,vt),Xt);yu(X,vt)}return null}function Pt(Z,X,et,vt){for(var Xt=null,xe=null,te=X,oe=X=0,gn=null;te!==null&&oe<et.length;oe++){te.index>oe?(gn=te,te=null):gn=te.sibling;var Ae=W(Z,te,et[oe],vt);if(Ae===null){te===null&&(te=gn);break}t&&te&&Ae.alternate===null&&n(Z,te),X=f(Ae,X,oe),xe===null?Xt=Ae:xe.sibling=Ae,xe=Ae,te=gn}if(oe===et.length)return a(Z,te),ve&&ga(Z,oe),Xt;if(te===null){for(;oe<et.length;oe++)te=_t(Z,et[oe],vt),te!==null&&(X=f(te,X,oe),xe===null?Xt=te:xe.sibling=te,xe=te);return ve&&ga(Z,oe),Xt}for(te=s(te);oe<et.length;oe++)gn=rt(te,Z,oe,et[oe],vt),gn!==null&&(t&&(Ae=gn.alternate,Ae!==null&&te.delete(Ae.key===null?oe:Ae.key)),X=f(gn,X,oe),xe===null?Xt=gn:xe.sibling=gn,xe=gn);return t&&te.forEach(function(fr){return n(Z,fr)}),ve&&ga(Z,oe),Xt}function Wt(Z,X,et,vt){if(et==null)throw Error(r(151));for(var Xt=null,xe=null,te=X,oe=X=0,gn=null,Ae=et.next();te!==null&&!Ae.done;oe++,Ae=et.next()){te.index>oe?(gn=te,te=null):gn=te.sibling;var fr=W(Z,te,Ae.value,vt);if(fr===null){te===null&&(te=gn);break}t&&te&&fr.alternate===null&&n(Z,te),X=f(fr,X,oe),xe===null?Xt=fr:xe.sibling=fr,xe=fr,te=gn}if(Ae.done)return a(Z,te),ve&&ga(Z,oe),Xt;if(te===null){for(;!Ae.done;oe++,Ae=et.next())Ae=_t(Z,Ae.value,vt),Ae!==null&&(X=f(Ae,X,oe),xe===null?Xt=Ae:xe.sibling=Ae,xe=Ae);return ve&&ga(Z,oe),Xt}for(te=s(te);!Ae.done;oe++,Ae=et.next())Ae=rt(te,Z,oe,Ae.value,vt),Ae!==null&&(t&&(gn=Ae.alternate,gn!==null&&te.delete(gn.key===null?oe:gn.key)),X=f(Ae,X,oe),xe===null?Xt=Ae:xe.sibling=Ae,xe=Ae);return t&&te.forEach(function(eM){return n(Z,eM)}),ve&&ga(Z,oe),Xt}function he(Z,X,et,vt){if(typeof et=="object"&&et!==null&&et.type===I&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case w:t:{for(var Xt=et.key;X!==null;){if(X.key===Xt){if(Xt=et.type,Xt===I){if(X.tag===7){a(Z,X.sibling),vt=u(X,et.props.children),Ya(vt,et),vt.return=Z,Z=vt;break t}}else if(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===Et&&Br(Xt)===X.type){a(Z,X.sibling),vt=u(X,et.props),Ya(vt,et),vt.return=Z,Z=vt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===I?(vt=Ur(et.props.children,Z.mode,vt,et.key),Ya(vt,et),vt.return=Z,Z=vt):(vt=cu(et.type,et.key,et.props,null,Z.mode,vt),Ya(vt,et),vt.return=Z,Z=vt)}return S(Z);case R:t:{for(Xt=et.key;X!==null;){if(X.key===Xt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),vt=u(X,et.children||[]),vt.return=Z,Z=vt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}vt=Hf(et,Z.mode,vt),vt.return=Z,Z=vt}return S(Z);case Et:return et=Br(et),he(Z,X,et,vt)}if(At(et))return Pt(Z,X,et,vt);if(K(et)){if(Xt=K(et),typeof Xt!="function")throw Error(r(150));return et=Xt.call(et),Wt(Z,X,et,vt)}if(typeof et.then=="function")return he(Z,X,Eu(et),vt);if(et.$$typeof===k)return he(Z,X,gu(Z,et),vt);yu(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),vt=u(X,et),vt.return=Z,Z=vt):(a(Z,X),vt=Ff(et,Z.mode,vt),vt.return=Z,Z=vt),S(Z)):a(Z,X)}return function(Z,X,et,vt){try{Xo=0;var Xt=he(Z,X,et,vt);return bs=null,Xt}catch(te){if(te===Ts||te===_u)throw te;var xe=jn(29,te,null,Z.mode);return xe.lanes=vt,xe.return=Z,xe}}}var Hr=K0(!0),Q0=K0(!1),Wa=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=uu(t),O0(t,null,a),n}return lu(t,s,n,a),uu(t)}function qo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,J(t,a)}}function Jf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $f=!1;function Yo(){if($f){var t=xs;if(t!==null)throw t}}function Wo(t,n,a,s){$f=!1;var u=t.updateQueue;Wa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,j=B.next;B.next=null,S===null?f=j:S.next=j,S=B;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==S&&(T===null?lt.firstBaseUpdate=j:T.next=j,lt.lastBaseUpdate=B))}if(f!==null){var _t=u.baseState;S=0,lt=j=B=null,T=f;do{var W=T.lane&-536870913,rt=W!==T.lane;if(rt?(Me&W)===W:(s&W)===W){W!==0&&W===zr&&($f=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Pt=t,Wt=T;W=n;var he=a;switch(Wt.tag){case 1:if(Pt=Wt.payload,typeof Pt=="function"){_t=Pt.call(he,_t,W);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Wt.payload,W=typeof Pt=="function"?Pt.call(he,_t,W):Pt,W==null)break t;_t=z({},_t,W);break t;case 2:Wa=!0}}W=T.callback,W!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[W]:rt.push(W))}else rt={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(j=lt=rt,B=_t):lt=lt.next=rt,S|=W;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);lt===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=j,u.lastBaseUpdate=lt,f===null&&(u.shared.lanes=0),nr|=S,t.lanes=S,t.memoizedState=_t}}function J0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)J0(a[t],n)}var Ka=Jt(null),Mu=Jt(0);function tg(t,n){t=xa,$t(Mu,t),$t(Ka,n),xa=t|n.baseLanes}function td(){$t(Mu,xa),$t(Ka,Ka.current)}function ed(){xa=Mu.current,Ut(Ka),Ut(Mu)}var wn=Jt(null),Bn=null;function Qa(t){var n=t.alternate;$t(Dn,Dn.current&1),$t(wn,t),Bn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Bn=t)}function nd(t){$t(Dn,Dn.current),$t(wn,t),Bn===null&&(Bn=t)}function eg(t){t.tag===22?($t(Dn,Dn.current),$t(wn,t),Bn===null&&(Bn=t)):Ja()}function Ja(){$t(Dn,Dn.current),$t(wn,wn.current)}function si(t){Ut(wn),Bn===t&&(Bn=null),Ut(Dn)}var Dn=Jt(0);function Zo(t,n){$t(wn,wn.current),$t(Dn,n)}function id(t){Ut(Dn),Ut(wn),Bn===t&&(Bn=null)}function xu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bh(a)||Ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,de=null,qe=null,pn=null,Tu=!1,As=!1,Gr=!1,bu=0,jo=0,Rs=null,M1=0;function ln(){throw Error(r(321))}function ad(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function rd(t,n,a,s,u,f){return Sa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?Bg:Fg,Gr=!1,f=a(s,u),Gr=!1,As&&(f=ig(n,a,s,u)),ng(t),f}function ng(t){Mt.H=Nu;var n=qe!==null&&qe.next!==null;if(Sa=0,pn=qe=de=null,Tu=!1,jo=0,Rs=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&mu(t)&&(mn=!0))}function ig(t,n,a,s){de=t;var u=0;do{if(As&&(Rs=null),jo=0,As=!1,25<=u)throw Error(r(301));if(u+=1,pn=qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Mt.H=D1,f=n(a,s)}while(As);return f}function x1(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(de.flags|=1024),n}function sd(){var t=bu!==0;return bu=0,t}function od(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ld(t){if(Tu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tu=!1}Sa=0,pn=qe=de=null,As=!1,jo=bu=0,Rs=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?de.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(qe===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=pn===null?de.memoizedState:pn.next;if(n!==null)pn=n,qe=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},pn===null?de.memoizedState=pn=t:pn=pn.next=t}return pn}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=jo;return jo+=1,Rs===null&&(Rs=[]),t=W0(Rs,t,n),n=de,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?Bg:Fg),t}function Ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===ct)return;if(t.$$typeof===k)return Cn(t)}throw Error(r(438,String(t)))}function ud(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=re;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function Cu(t){var n=cn();return cd(n,qe,t)}function cd(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=S=null,B=null,j=n,lt=!1;do{var _t=j.lane&-536870913;if(_t!==j.lane?(Me&_t)===_t:(Sa&_t)===_t){var W=j.revertLane;if(W===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),_t===zr&&(lt=!0);else if((Sa&W)===W){j=j.next,W===zr&&(lt=!0);continue}else _t={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(T=B=_t,S=f):B=B.next=_t,de.lanes|=W,nr|=W;_t=j.action,Gr&&a(f,_t),f=j.hasEagerState?j.eagerState:a(f,_t)}else W={lane:_t,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(T=B=W,S=f):B=B.next=W,de.lanes|=_t,nr|=_t;j=j.next}while(j!==null&&j!==n);if(B===null?S=f:B.next=T,!ri(f,t.memoizedState)&&(mn=!0,lt&&(a=xs,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function fd(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);ri(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ag(t,n,a){var s=de,u=cn(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!ri((qe||u).memoizedState,a);if(S&&(u.memoizedState=a,mn=!0),u=u.queue,pd(og.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||S||pn!==null&&(pn.memoizedState.tag&1)!==0,Cs(t?9:8,{destroy:void 0},sg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ze===null)throw Error(r(349));f||(Sa&127)!==0||rg(s,n,a)}return a}function rg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Au(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sg(t,n,a,s){n.value=a,n.getSnapshot=s,lg(n)&&ug(t)}function og(t,n,a){return a(function(){lg(n)&&ug(t)})}function lg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function ug(t){var n=Dr(t,2);n!==null&&$n(n,t,2)}function dd(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Gr){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function cg(t,n,a,s){return t.baseState=a,cd(t,qe,typeof s=="function"?s:Ea)}function T1(t,n,a,s,u){if(Uu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};Mt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,fg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=Mt.T,S={};S.types=f!==null?f.types:null,Mt.T=S;try{var T=a(u,s),B=Mt.S;B!==null&&B(S,T),dg(t,n,T)}catch(j){hd(t,n,j)}finally{f!==null&&S.types!==null&&(f.types=S.types),Mt.T=f}}else try{f=a(u,s),dg(t,n,f)}catch(j){hd(t,n,j)}}function dg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){hg(t,n,s)},function(s){return hd(t,n,s)}):hg(t,n,a)}function hg(t,n,a){n.status="fulfilled",n.value=a,pg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,fg(t,a)))}function hd(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,pg(n),n=n.next;while(n!==s)}t.action=null}function pg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mg(t,n){return n}function gg(t,n){if(ve){var a=Ze.formState;if(a!==null){t:{var s=de;if(ve){if(Ke){e:{for(var u=Ke,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=Ti(u.nextSibling),s=u.data==="F!";break t}}Xa(s)}s=!1}s&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:n},a.queue=s,a=Pg.bind(null,de,s),s.dispatch=a,s=dd(!1),f=Sd.bind(null,de,!1,s.queue),s=Xn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=T1.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vg(t){var n=cn();return _g(n,qe,t)}function _g(t,n,a){if(n=cd(t,n,mg)[0],t=Cu(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ko(n)}catch(S){throw S===Ts?_u:S}else s=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Cs(9,{destroy:void 0},b1.bind(null,u,a),null)),[s,f,t]}function b1(t,n){t.action=n}function Sg(t){var n=cn(),a=qe;if(a!==null)return _g(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Cs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Au(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Eg(){return cn().memoizedState}function wu(t,n,a,s){var u=Xn();de.flags|=t,u.memoizedState=Cs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Du(t,n,a,s){var u=cn();s=s===void 0?null:s;var f=u.memoizedState.inst;qe!==null&&s!==null&&ad(s,qe.memoizedState.deps)?u.memoizedState=Cs(n,f,a,s):(de.flags|=t,u.memoizedState=Cs(1|n,f,a,s))}function yg(t,n){wu(8390656,8,t,n)}function pd(t,n){Du(2048,8,t,n)}function A1(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Au(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mg(t){var n=cn().memoizedState;return A1({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xg(t,n){return Du(4,2,t,n)}function Tg(t,n){return Du(4,4,t,n)}function bg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ag(t,n,a){a=a!=null?a.concat([t]):null,Du(4,4,bg.bind(null,n,t),a)}function md(){}function Rg(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ad(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Cg(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ad(n,s[1]))return s[0];if(s=t(),Gr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s}function gd(t,n,a){return a===void 0||(Sa&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Bv(),de.lanes|=t,nr|=t,a)}function wg(t,n,a,s){return ri(a,n)?a:Ka.current!==null?(t=gd(t,a,s),ri(t,n)||(mn=!0),t):(Sa&106)===0||(Sa&1073741824)!==0&&(Me&261930)===0?(mn=!0,t.memoizedState=a):(t=Bv(),de.lanes|=t,nr|=t,n)}function Dg(t,n,a,s,u){var f=kt.p;kt.p=f!==0&&8>f?f:8;var S=Mt.T,T={};T.types=S!==null?S.types:null,Mt.T=T,Sd(t,!1,n,a);try{var B=u(),j=Mt.S;if(j!==null&&j(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var lt=y1(B,s);Qo(t,n,lt,ci(t))}else Qo(t,n,s,ci(t))}catch(_t){Qo(t,n,{then:function(){},status:"rejected",reason:_t},ci())}finally{kt.p=f,S!==null&&T.types!==null&&(S.types=T.types),Mt.T=S}}function R1(){}function vd(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Ug(t).queue;Dg(t,u,n,H,a===null?R1:function(){return Ng(t),a(s)})}function Ug(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ng(t){var n=Ug(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},ci())}function _d(){return Cn(Ws)}function Lg(){return cn().memoizedState}function Og(){return cn().memoizedState}function C1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Za(a);var s=ja(n,t,a);s!==null&&($n(s,n,a),qo(s,n,a)),n={cache:Yf()},t.payload=n;return}n=n.return}}function w1(t,n,a){var s=ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(t)?zg(n,a):(a=If(t,n,a,s),a!==null&&($n(a,t,s),Ig(a,n,s)))}function Pg(t,n,a){var s=ci();Qo(t,n,a,s)}function Qo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(t))zg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,ri(T,S))return lu(t,n,u,0),Ze===null&&ou(),!1}catch{}if(a=If(t,n,u,s),a!==null)return $n(a,t,s),Ig(a,n,s),!0}return!1}function Sd(t,n,a,s){if(s={lane:2,revertLane:uh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Uu(t)){if(n)throw Error(r(479))}else n=If(t,a,s,2),n!==null&&$n(n,t,2)}function Uu(t){var n=t.alternate;return t===de||n!==null&&n===de}function zg(t,n){As=Tu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ig(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,J(t,a)}}var Nu={readContext:Cn,use:Ru,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Bg={readContext:Cn,use:Ru,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:yg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wu(4194308,4,bg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wu(4194308,4,t,n)},useInsertionEffect:function(t,n){wu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var s=t();if(Gr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Xn();if(a!==void 0){var u=a(n);if(Gr){_n(!0);try{a(n)}finally{_n(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=w1.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=dd(t);var n=t.queue,a=Pg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:md,useDeferredValue:function(t,n){var a=Xn();return gd(a,t,n)},useTransition:function(){var t=dd(!1);return t=Dg.bind(null,de,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=Xn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Me&127)!==0||rg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,yg(og.bind(null,s,f,t),[t]),s.flags|=2048,Cs(9,{destroy:void 0},sg.bind(null,s,f,a,n),null),a},useId:function(){var t=Xn(),n=Ze.identifierPrefix;if(ve){var a=Wi,s=Yi;a=(s&~(1<<32-zn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=M1++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_d,useFormState:gg,useActionState:gg,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:ud,useCacheRefresh:function(){return Xn().memoizedState=C1.bind(null,de)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fg={readContext:Cn,use:Ru,useCallback:Rg,useContext:Cn,useEffect:pd,useImperativeHandle:Ag,useInsertionEffect:xg,useLayoutEffect:Tg,useMemo:Cg,useReducer:Cu,useRef:Eg,useState:function(){return Cu(Ea)},useDebugValue:md,useDeferredValue:function(t,n){var a=cn();return wg(a,qe.memoizedState,t,n)},useTransition:function(){var t=Cu(Ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:_d,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var a=cn();return cg(a,qe,t,n)},useMemoCache:ud,useCacheRefresh:Og,useEffectEvent:Mg},D1={readContext:Cn,use:Ru,useCallback:Rg,useContext:Cn,useEffect:pd,useImperativeHandle:Ag,useInsertionEffect:xg,useLayoutEffect:Tg,useMemo:Cg,useReducer:fd,useRef:Eg,useState:function(){return fd(Ea)},useDebugValue:md,useDeferredValue:function(t,n){var a=cn();return qe===null?gd(a,t,n):wg(a,qe.memoizedState,t,n)},useTransition:function(){var t=fd(Ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:ag,useId:Lg,useHostTransitionStatus:_d,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,n){var a=cn();return qe!==null?cg(a,qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Og,useEffectEvent:Mg};function Ed(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ci(),u=Za(s);u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,s),n!==null&&($n(n,t,s),qo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ci(),u=Za(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,s),n!==null&&($n(n,t,s),qo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),s=Za(a);s.tag=2,n!=null&&(s.callback=n),n=ja(t,s,a),n!==null&&($n(n,t,a),qo(n,t,a))}};function Hg(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Io(a,s)||!Io(u,f):!0}function Gg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&yd.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Vg(t){su(t)}function kg(t){console.error(t)}function Xg(t){su(t)}function Lu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function qg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Md(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Lu(t,n)},a}function Yg(t){return t=Za(t),t.tag=3,t}function Wg(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){qg(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){qg(n,a,s),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function U1(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?tc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Su?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sh(t,s,u)),!1;case 22:return a.flags|=65536,s===Su?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sh(t,s,u)),!1}throw Error(r(435,a.tag))}return sh(t,s,u),tc(),!1}if(ve)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Vf&&(t=Error(r(422),{cause:s}),Ho(Si(t,a)))):(s!==Vf&&(n=Error(r(423),{cause:s}),Ho(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Si(s,a),u=Md(t.stateNode,s,u),Jf(t,u),un!==4&&(un=2)),!1;var f=Error(r(520),{cause:s});if(f=Si(f,a),rl===null?rl=[f]:rl.push(f),un!==4&&(un=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Md(a.stateNode,s,t),Jf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ir===null||!ir.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Yg(u),Wg(u,t,a,s),Jf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var xd=Error(r(461)),mn=!1;function En(t,n,a,s){n.child=t===null?Q0(n,null,a,s):Hr(n,t.child,a,s)}function Zg(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Pr(n),s=rd(t,n,a,S,f,u),T=sd(),t!==null&&!mn?(od(t,n,u),ya(t,n,u)):(ve&&T&&du(n),n.flags|=1,En(t,n,s,u),n.child)}function jg(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Bf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Kg(t,n,f,s,u)):(t=cu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ud(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(S,s)&&t.ref===n.ref)return ya(t,n,u)}return n.flags|=1,t=ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Kg(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Io(f,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=f,Ud(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ya(t,n,u)}return Td(t,n,a,s,u)}function Qg(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Jg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vu(n,f!==null?f.cachePool:null),f!==null?tg(n,f):td(),eg(n);else return s=n.lanes=536870912,Jg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(vu(n,f.cachePool),tg(n,f),Ja(),n.memoizedState=null):(t!==null&&vu(n,null),td(),Ja());return En(t,n,u,a),n.child}function Jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jg(t,n,a,s,u){var f=Zf();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vu(n,null),td(),eg(n),t!==null&&Or(t,n,s,!0),n.childLanes=u,null}function Ou(t,n){return n=Pu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $g(t,n,a){return Hr(n,t.child,null,a),t=Ou(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function N1(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=Ou(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(nd(n),(t=Ke)?(t=b_(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=z0(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return Ou(n,s)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(nd(n),u)if(n.flags&256)n.flags&=-257,n=$g(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(Ka.current===null){if(s=Ze,s!==null&&(S=dt(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Dr(t,S),$n(s,t,S),xd;tc()}n=$g(t,n,a)}else t=f.treeContext,Ke=Ti(S.nextSibling),Tn=n,ve=!0,ka=null,Mi=!1,t!==null&&F0(n,t),n=Ou(n,s),n.flags|=134221824;return n}return t=ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ws(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Td(t,n,a,s,u){return Pr(n),a=rd(t,n,a,s,void 0,u),s=sd(),t!==null&&!mn?(od(t,n,u),ya(t,n,u)):(ve&&s&&du(n),n.flags|=1,En(t,n,a,u),n.child)}function tv(t,n,a,s,u,f){return Pr(n),n.updateQueue=null,a=ig(n,s,a,u),ng(t),s=sd(),t!==null&&!mn?(od(t,n,f),ya(t,n,f)):(ve&&s&&du(n),n.flags|=1,En(t,n,a,f),n.child)}function ev(t,n,a,s,u){if(Pr(n),n.stateNode===null){var f=Ss,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Kf(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Ss,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ed(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&yd.enqueueReplaceState(f,f.state,null),Wo(n,s,f,u),Yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Vr(a,T);f.props=B;var j=f.context,lt=a.contextType;S=Ss,typeof lt=="object"&&lt!==null&&(S=Cn(lt));var _t=a.getDerivedStateFromProps;lt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||j!==S)&&Gg(n,f,s,S),Wa=!1;var W=n.memoizedState;f.state=W,Wo(n,s,f,u),Yo(),j=n.memoizedState,T||W!==j||Wa?(typeof _t=="function"&&(Ed(n,a,_t,s),j=n.memoizedState),(B=Wa||Hg(n,a,B,s,W,j,S))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),f.props=s,f.state=j,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Qf(t,n),S=n.memoizedProps,lt=Vr(a,S),f.props=lt,_t=n.pendingProps,W=f.context,j=a.contextType,B=Ss,typeof j=="object"&&j!==null&&(B=Cn(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||W!==B)&&Gg(n,f,s,B),Wa=!1,W=n.memoizedState,f.state=W,Wo(n,s,f,u),Yo();var rt=n.memoizedState;S!==_t||W!==rt||Wa||t!==null&&t.dependencies!==null&&mu(t.dependencies)?(typeof T=="function"&&(Ed(n,a,T,s),rt=n.memoizedState),(lt=Wa||Hg(n,a,lt,s,W,rt,B)||t!==null&&t.dependencies!==null&&mu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=B,s=lt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ws(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Hr(n,t.child,null,u),n.child=Hr(n,null,a,u)):En(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ya(t,n,u),t}function nv(t,n,a,s){return Nr(),n.flags|=256,En(t,n,a,s),n.child}var bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(t){return{baseLanes:t,cachePool:q0()}}function Rd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function iv(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Qa(n):Ja(),(t=Ke)?(t=b_(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=z0(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw Xa(n);return Ah(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(Ja(),u=n.mode,f=Pu({mode:"hidden",children:f},u),s=Ur(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Ad(a),s.childLanes=Rd(t,S,a),n.memoizedState=bd,Jo(null,s)):(Qa(n),Cd(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return L1(t,n,f,S,s,B,T,a)}return u?(Ja(),u=s.fallback,f=n.mode,T=t.child,B=T.sibling,s=ma(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=ma(B,u):(u=Ur(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Jo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Ad(a):(f=u.cachePool,f!==null?(T=hn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=q0(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=Rd(t,S,a),n.memoizedState=bd,Jo(t.child,s)):(Qa(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Cd(t,n){return n=Pu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pu(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function zu(t,n,a){return Hr(n,t.child,null,a),t=Cd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L1(t,n,a,s,u,f,S,T){if(a)return n.flags&256?(Qa(n),n.flags&=-257,zu(t,n,T)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),f=u.fallback,S=n.mode,u=Pu({mode:"visible",children:u.children},S),f=Ur(f,S,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Hr(n,t.child,null,T),u=n.child,u.memoizedState=Ad(T),u.childLanes=Rd(t,s,T),n.memoizedState=bd,Jo(null,u));if(Qa(n),Ah(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Ho({value:u,source:null,stack:null})),zu(t,n,T)}if(mn||Or(t,n,T,!1),s=(T&t.childLanes)!==0,mn||s){if(Ka.current!==null)return zu(t,n,T);if(s=Ze,s!==null&&(u=dt(s,T),u!==0&&u!==S.retryLane))throw S.retryLane=u,Dr(t,u),$n(s,t,u),xd;return bh(f)||tc(),zu(t,n,T)}return bh(f)?(n.flags|=192,n.child=t.child,null):(t=S.treeContext,Ke=Ti(f.nextSibling),Tn=n,ve=!0,ka=null,Mi=!1,t!==null&&F0(n,t),n=Cd(n,u.children),n.flags|=134221824,n)}function av(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),pu(t.return,n,a)}function rv(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&xu(a)===null&&(n=t),t=t.sibling}return n}function Iu(t,n,a,s,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function wd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Dd(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var S=Dn.current;if(n.flags&128)return Zo(n,S),null;var T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Zo(n,S),u==="backwards"&&t!==null?(wd(t),En(t,n,s,a),wd(t)):En(t,n,s,a),s=ve?Fo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&av(t,a,n);else if(t.tag===19)av(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=rv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,wd(n)),Iu(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&xu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Iu(n,!0,a,null,f,s);break;case"together":Iu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=rv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Iu(n,!1,u,a,f,s)}return n.child}function sv(t,n,a){var s=n.pendingProps;return qa(n,n.type,s.value),En(t,n,s.children,a),n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ud(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mu(t)))}function O1(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),qa(n,hn,t.memoizedState.cache),Nr();break;case 27:case 5:it(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nd(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=Or(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?iv(t,n,a):(Qa(n),t=ya(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return Dd(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Or(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Dd(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Zo(n,Dn.current),s)break;return null;case 22:return n.lanes=0,Qg(t,n,a,n.pendingProps);case 24:qa(n,hn,t.memoizedState.cache)}return ya(t,n,a)}function ov(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Ud(t,a)&&(n.flags&128)===0)return mn=!1,O1(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,ve&&(n.flags&1048576)!==0&&B0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")Bf(t)?(s=Vr(t,s),n.tag=1,n=ev(null,n,t,s,a)):(n.tag=0,n=Td(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=Zg(null,n,t,s,a);break t}else if(u===mt){n.tag=14,n=jg(null,n,t,s,a);break t}else if(u===k){n.tag=10,n.type=t,n=sv(null,n,a);break t}}throw n=wt(t)||t,Error(r(306,n,""))}}return n;case 0:return Td(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Vr(s,n.pendingProps),ev(t,n,s,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Qf(t,n),Wo(n,s,null,a);var S=n.memoizedState;if(s=S.cache,qa(n,hn,s),s!==f.cache&&qf(n,[hn],a,!0),Yo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=nv(t,n,s,a);break t}else if(s!==u){u=Si(Error(r(424)),n),Ho(u),n=nv(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Ti(t.firstChild),Tn=n,ve=!0,ka=null,Mi=!0,a=Q0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Nr(),s===u){n=ya(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return ws(t,n),t===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=f_(n.type,n.pendingProps,be.current,n)):n.memoizedState=N_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&ve&&(s=n.stateNode=C_(n.type,n.pendingProps,be.current),Tn=n,Mi=!0,u=Ke,sr(n.type)?(Rh=u,Ke=Ti(s.firstChild)):Ke=u),En(t,n,n.pendingProps.children,a),ws(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=Ke)&&(s=Cy(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Tn=n,Ke=Ti(s.firstChild),Mi=!1,u=!0):u=!1),u||Xa(n)),it(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,_h(u,f)?s=null:S!==null&&_h(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rd(t,n,x1,null,null,a),Ws._currentValue=u),ws(t,n),En(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ke)&&(a=wy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||Xa(n)),null;case 13:return iv(t,n,a);case 4:return L(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Hr(n,null,s,a):En(t,n,s,a),n.child;case 11:return Zg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,ws(t,n),En(t,n,s,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return sv(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Pr(n),u=Cn(u),s=s(u),n.flags|=1,En(t,n,s,a),n.child;case 14:return jg(t,n,n.type,n.pendingProps,a);case 15:return Kg(t,n,n.type,n.pendingProps,a);case 19:return Dd(t,n,a);case 31:return N1(t,n,a);case 22:return Qg(t,n,a,n.pendingProps);case 24:return Pr(n),s=Cn(hn),t===null?(u=Zf(),u===null&&(u=Ze,f=Yf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Kf(n),qa(n,hn,u)):((t.lanes&a)!==0&&(Qf(t,n),Wo(n,null,null,a),Yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,hn,s)):(s=f.cache,qa(n,hn,s),s!==u.cache&&qf(n,[hn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&du(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:ws(t,n),En(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ma(t){t.flags|=4}function Nd(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?z_(n,s):z_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Vv())t.flags|=8192;else throw Fr=Su,jf}else t.flags&=-16777217}function lv(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(n))if(Vv())t.flags|=8192;else throw Fr=Su,jf}function Bu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Kl():536870912,t.lanes|=n,Os|=n)}function $o(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function P1(t,n,a){var s=n.pendingProps;switch(Gf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),_a(hn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ms(n)?Ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kf())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ma(n),f!==null?(Qe(n),lv(n,f)):(Qe(n),Nd(n,u,null,s,a))):f?f!==t.memoizedState?(Ma(n),Qe(n),lv(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ma(n),Qe(n),Nd(n,u,t,s,a)),null;case 27:if(gt(n),a=be.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=zt.current,Ms(n)?H0(n):(t=C_(u,s,a),n.stateNode=t,Ma(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(f=zt.current,Ms(n))H0(n);else{var S=cl(be.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}f[Nt]=n,f[Yt]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Nn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ma(n)}}return Qe(n),n.subtreeFlags&=-33554433,Nd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ma(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,Ms(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Nt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||o_(t.nodeValue,a)),t||Xa(n,!0)}else t=cl(t).createTextNode(s),t[Nt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ms(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Bu(n,n.updateQueue),Qe(n),null);case 4:return b(),t===null&&hh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return _a(n.type),Qe(n),null;case 19:if(id(n),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)$o(s,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xu(t),f!==null){for(n.flags|=128,$o(s,!1),t=f.updateQueue,n.updateQueue=t,Bu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)P0(a,t),a=a.sibling;return Zo(n,Dn.current&1|2),ve&&ga(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&q()>Ku&&(n.flags|=128,u=!0,$o(s,!1),n.lanes=4194304)}else{if(!u)if(t=xu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Bu(n,t),$o(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!ve)return Qe(n),null}else 2*q()-s.renderingStartTime>Ku&&a!==536870912&&(n.flags|=128,u=!0,$o(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,f=Dn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Zo(n,f):(a=f,$t(wn,n),$t(Dn,a),Bn===null&&(Bn=n)),ve&&ga(n,s.treeForkCount),t}return Qe(n),null;case 22:case 23:return si(n),ed(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Bu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ut(Ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(hn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function z1(t,n){switch(Gf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(hn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return id(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return _a(n.type),null;case 22:case 23:return si(n),ed(),t!==null&&Ut(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(hn),null;case 25:return null;default:return null}}function uv(t,n){switch(Gf(n),n.tag){case 3:_a(hn),b();break;case 26:case 27:case 5:gt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:id(n);break;case 10:_a(n.type);break;case 22:case 23:si(n),ed(),t!==null&&Ut(Ir);break;case 24:_a(hn)}}function tl(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){Ge(n,n.return,T)}}function $a(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var B=a,j=T;try{j()}catch(lt){Ge(u,B,lt)}}}s=s.next}while(s!==f)}}catch(lt){Ge(n,n.return,lt)}}function cv(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$0(n,a)}catch(s){Ge(t,t.return,s)}}}function fv(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=ha(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=__(f)),s=u.ref;break;case 7:if(t.stateNode===null){var S=new fi(t);p(t.child,!1,Ay,S,void 0,void 0),t.stateNode=S}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Ge(t,n,T)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function Fu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)T_(t.stateNode,n[a])}function dv(t){for(var n=t.return;n!==null&&(Od(n)&&T_(t.stateNode,n.stateNode),!Ld(n));)n=n.return}function el(t){for(var n=t.return;n!==null&&(Od(n)&&Ry(t.stateNode,n.stateNode),!Ld(n));)n=n.return}function Ld(t){return t.tag===5||t.tag===3||t.tag===27}function Od(t){return t&&t.tag===7&&t.stateNode!==null}function Pd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function zd(t,n,a){try{var s=t.stateNode;ly(s,t.type,a,n),s[Yt]=n}catch(u){Ge(t,t.return,u)}}function hv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function Id(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Fu(t,s),Ue=!0;else if(u!==4&&(u===27&&(Fu(t,s),s=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Bd(t,n,a,s),t=t.sibling;t!==null;)Bd(t,n,a,s),t=t.sibling}function Hu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Fu(t,s),Ue=!0;else if(u!==4&&(u===27&&(Fu(t,s),s=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Hu(t,n,a,s),t=t.sibling;t!==null;)Hu(t,n,a,s),t=t.sibling}function pv(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,s,a),n[Nt]=t,n[Yt]=a}catch(f){Ge(t,t.return,f)}}var Gu=!1,oi=null;function mv(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Gu=!0)}var ji=null;function gv(){var t=ji;return ji=null,t}var Kn=0;function Ds(t,n,a,s,u){return Kn=0,vv(t.child,n,a,s,u)}function vv(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var S=t.stateNode;if(s!==null){var T=yh(S);s.push(T),T.view&&(f=!0)}else f||yh(S).view&&(f=!0);Gu=!0,g_(S,Kn===0?n:n+"_"+Kn,a),Kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||vv(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function Ki(t,n){for(;t!==null;)t.tag===5?v_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Vu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Vu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Ds(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function Fd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ha(s,a),f=pa(s.default,a.paired?s.share:s.enter);f!=="none"?Ds(t,u,f,null,!1)?(Vu(t),a.paired||n||Bs(t,s.onEnter)):Ki(t.child,!1):Vu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Fd(t,n),t=t.sibling;else Vu(t)}function Hd(t){if(oi!==null&&oi.size!==0){var n=oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=pa(a.default,a.share);if(f!=="none"&&(Ds(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Bs(t,a.onShare)):Ki(t.child,!1)),n.delete(s),n.size===0)break}}}Hd(t)}t=t.sibling}}}function Gd(t){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode),s=oi!==null?oi.get(a):void 0,u=pa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Ds(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,oi.delete(a),Bs(t,n.onShare)):Bs(t,n.onExit):Ki(t.child,!1)),oi!==null&&Hd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gd(t),t=t.sibling;else oi!==null&&Hd(t)}function _v(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&Ds(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&_v(t);t=t.sibling}}function Vd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}Vd(t)}t=t.sibling}}function ku(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),Vd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ku(t),t=t.sibling;else Vd(t)}function Sv(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&Sv(t),t=t.sibling}function kd(t,n,a,s,u,f,S){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Kn<f.length){var j=f[Kn],lt=yh(B);(j.view||lt.view)&&(T=!0);var _t;if(_t=(t.flags&4)===0)if(lt.clip)_t=!0;else{_t=j.rect;var W=lt.rect;_t=_t.y!==W.y||_t.x!==W.x||_t.height!==W.height||_t.width!==W.width}_t&&(t.flags|=4),lt.abs?lt=!j.abs:(j=j.rect,lt=lt.rect,lt=j.height!==lt.height||j.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&g_(B,Kn===0?a:a+"_"+Kn,u),T&&(t.flags&4)!==0||(ji===null&&(ji=[]),ji.push(B,Kn===0?s:s+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?t.flags|=n.flags&32:kd(t,n.child,a,s,u,f,S)&&(T=!0));n=n.sibling}return T}function Ev(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ha(a,s),f=pa(a.default,a.update),S;S=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;Kn=0,u=kd(s,T,u,u,f,S,!1),(t.flags&4)!==0&&u&&Bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Ev(t);t=t.sibling}}var bn=!1,Be=!1,Qi=!1,Xd=!1,yv=typeof WeakSet=="function"?WeakSet:Set,An=null,Ji=!1,nl=!1,Xu=!1,qd=!1;function I1(t,n,a){if(t=t.containerInfo,gh=Zs,t=b0(t),Uf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,S=u.focusNode;u=u.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break t}var T=0,B=-1,j=-1,lt=0,_t=0,W=t,rt=null;e:for(;;){for(var Pt;W!==s||f!==0&&W.nodeType!==3||(B=T+f),W!==S||u!==0&&W.nodeType!==3||(j=T+u),W.nodeType===3&&(T+=W.nodeValue.length),(Pt=W.firstChild)!==null;)rt=W,W=Pt;for(;;){if(W===t)break e;if(rt===s&&++lt===f&&(B=T),rt===S&&++_t===u&&(j=T),(Pt=W.nextSibling)!==null)break;W=rt,rt=W.parentNode}W=Pt}s=B===-1||j===-1?null:{start:B,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(vh={focusedElem:t,selectionRange:s},Zs=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Gd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&mv(t),qu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Gd(s),qu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&mv(t),qu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&_v(t),qu(a))}}oi=null}function qu(t){for(;An!==null;){var n=An,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var S=Vr(n.type,u);a=f.getSnapshotBeforeUpdate(S,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ge(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Th(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Th(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ha(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=pa(u.default,u.update),u!=="none"&&Ds(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function Mv(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),s&4&&tl(5,a);break;case 1:if($i(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&cv(a),s&512&&Zi(a,a.return);break;case 3:if($i(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$0(t,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&pv(a);case 26:case 5:$i(t,a),n===null&&s&4&&Pd(a),s&512&&Zi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),s&4&&Av(t,a);break;case 13:$i(t,a),s&4&&Rv(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=j1.bind(null,a),Dy(t,a))));break;case 22:if(s=a.memoizedState!==null||bn,!s){var f=n!==null&&n.memoizedState!==null||Be;n=bn,u=Be,bn=s,(Be=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Oi(t,a,s)):$i(t,a),bn=n,Be=u}break;case 30:$i(t,a),s&512&&Zi(a,a.return);break;case 7:s&512&&Zi(a,a.return);default:$i(t,a)}}function Yd(t,n){for(t=t.child;t!==null;)xv(t,n),t=t.sibling}function xv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,S=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(B){Ge(t,t.return,B)}Wd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(B){Ge(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?m_(T,!0):m_(t.stateNode,!1)}catch(B){Ge(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Yd(t,n);break;default:Yd(t,n)}}function Wd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:xv(a,s);break t;case 22:a.memoizedState===null&&Wd(a,s);break t;default:Wd(a,s)}}t=t.sibling}}function Tv(t){var n=t.alternate;n!==null&&(t.alternate=null,Tv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Qn=!1;function Ni(t,n,a){for(a=a.child;a!==null;)bv(t,n,a),a=a.sibling}function bv(t,n,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Be||Un(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Un(a,n),el(a);var s=tn,u=Qn;sr(a.type)&&(tn=a.stateNode,Qn=!1),Ni(t,n,a),w_(a.stateNode,a.type,a.memoizedProps),tn=s,Qn=u;break;case 5:Be||Un(a,n),el(a);case 6:if(a.tag===6&&el(a),s=tn,u=Qn,tn=null,Ni(t,n,a),tn=s,Qn=u,tn!==null)if(Qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ue=!0}catch(f){Ge(a,n,f)}else try{tn.removeChild(a.stateNode),Ue=!0}catch(f){Ge(a,n,f)}break;case 18:tn!==null&&(Qn?(t=tn,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),js(t)):p_(tn,a.stateNode));break;case 4:s=tn,u=Qn,tn=a.stateNode.containerInfo,Qn=!0,Ni(t,n,a),tn=s,Qn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Be||$a(4,a,n),Ni(t,n,a);break;case 1:Be||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&fv(a,n,s)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Ni(t,n,a),Be=s;break;case 30:Un(a,n),Ni(t,n,a);break;case 7:Be||Un(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function Av(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{js(t)}catch(a){Ge(n,n.return,a)}}}function Rv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{js(t)}catch(a){Ge(n,n.return,a)}}function B1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new yv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new yv),n;default:throw Error(r(435,t.tag))}}function Yu(t,n){var a=B1(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=K1.bind(null,t,s);s.then(u,u)}})}function qn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],S=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(sr(B.type)){tn=B.stateNode,Qn=!1;break t}break;case 5:tn=B.stateNode,Qn=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,Qn=!0;break t}B=B.return}if(tn===null)throw Error(r(160));bv(S,T,f),tn=null,Qn=!1,S=f.alternate,S!==null&&(S.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cv(n,t,a),n=n.sibling}var Li=null;function Cv(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var S=s[f];S.ref.impl=S.nextImpl}qn(n,t,a),Yn(t),u&4&&($a(3,t,t.return),tl(3,t),$a(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Li,qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=f_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Le]||s[Nt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Nn(s,n,a),s[Nt]=t,De(s),n=s;break t;case"link":if(f=P_("link","href",u).get(n+(a.href||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(S,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;case"meta":if(f=P_("meta","content",u).get(n+(a.content||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(S,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Nt]=t,De(s),n=s}t.stateNode=n}else bn||Uh(f,t.type,t.stateNode);else t.stateNode=O_(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?bn||Uh(f,t.type,t.stateNode):O_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&zd(t,t.memoizedProps,s.memoizedProps);break;case 27:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),s!==null&&u&4&&zd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=Qi,Qi=!1,qn(n,t,a),Qi=f,Yn(t),u&512&&(Be||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{ds(n,""),Ue=!0}catch(lt){Ge(t,t.return,lt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,zd(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Xd=!0);break;case 6:if(qn(n,t,a),Yn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(lt){Ge(t,t.return,lt)}}break;case 3:if(Ue=!1,oc=null,f=Li,Li=fl(n.containerInfo),qn(n,t,a),Li=f,Yn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{js(n.containerInfo)}catch(lt){Ge(t,t.return,lt)}Xd&&(Xd=!1,wv(t)),Ue=!1;break;case 4:u=Qi,Qi=bn,s=jm(),f=Li,Li=fl(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Li=f,Ue&&nl&&(Xu=!0),Ue=s,Qi=u;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Yu(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ju=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Yu(t,n)));break;case 22:f=t.memoizedState!==null,S=s!==null&&s.memoizedState!==null;var T=bn,B=Be,j=Qi;bn=T||f,Qi=j||f,Be=B||S,qn(n,t,a),Be=B,Qi=j,bn=T,Yn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||S||bn||Be||(n=S||Be,a=bn,s=Be,bn=f||bn,Be=n,tr(t,2),bn=a,Be=s),!f&&Qi||Yd(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Yu(t,a))));break;case 19:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Yu(t,n)));break;case 30:u&512&&(Be||s===null||Un(s,s.return)),u=jm(),f=nl,S=(a&335544064)===a,T=t.memoizedProps,nl=S&&pa(T.default,T.update)!=="none",qn(n,t,a),Yn(t),S&&s!==null&&Ue&&(t.flags|=4),nl=f,Ue=u;break;case 21:break;case 7:u&512&&(Be||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(hv(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(Od(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(Ld(u))break;u=u.return}var S=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,B=Id(t);Hu(t,B,T,S);break;case 5:var j=a.stateNode;a.flags&32&&(ds(j,""),a.flags&=-33);var lt=Id(t);Hu(t,lt,j,S);break;case 3:case 4:var _t=a.stateNode.containerInfo,W=Id(t);Bd(t,W,_t,S);break;default:throw Error(r(161))}}catch(rt){Ge(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function wv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;wv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zs=!0,n.reset(),Zs=!1),t=t.sibling}}function Us(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Dv(n,t),n=n.sibling;else Ev(n)}function Dv(t,n){var a=t.alternate;if(a===null)Fd(t,!1);else switch(t.tag){case 3:if(qd=Ji=!1,gv(),Us(n,t),!Ji&&!Xu){if(t=ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];v_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),qd=!0}ji=null;break;case 5:Us(n,t);break;case 4:s=Ji,Ji=!1,Us(n,t),Ji&&(Xu=!0),Ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Fd(t,!1):Us(n,t));break;case 30:s=Ji,u=gv(),Ji=!1,Us(n,t),Ji&&(t.flags|=4);var f=t.memoizedProps,S=t.stateNode;n=ha(f,S),S=ha(a.memoizedProps,S);var T=pa(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Kn=0,n=kd(t,a,n,S,T,f,!0),Kn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Bs(t,t.memoizedProps.onUpdate),ji=u):u!==null&&(u.push.apply(u,ji),ji=u),Ji=(t.flags&32)!==0?!0:s;break;default:Us(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mv(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,s);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&fv(a,a.return,u),tr(a,s);break;case 27:(s&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||el(a),tr(a,s);break;case 6:el(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),tr(a,s);break;case 22:a.memoizedState===null&&tr(a,s);break;case 30:Un(a,a.return),tr(a,s);break;case 7:Un(a,a.return);default:tr(a,s)}t=t.sibling}}function Oi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Oi(u,f,a),tl(4,f);break;case 1:if(Oi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ge(s,s.return,lt)}if(s=f,u=s.updateQueue,u!==null){var B=s.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)J0(j[u],B)}catch(lt){Ge(s,s.return,lt)}}T&&S&64&&cv(f),Zi(f,f.return);break;case 27:(a&2)!==0&&pv(f);case 5:f.tag!==5&&f.tag!==27||dv(f),Oi(u,f,a),T&&s===null&&S&4&&Pd(f),Zi(f,f.return);break;case 6:dv(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||bn||Uh(fl(B.ownerDocument),f.type,B),Oi(u,f,a),T&&s===null&&S&4&&Pd(f),Zi(f,f.return);break;case 12:Oi(u,f,a);break;case 31:Oi(u,f,a),T&&S&4&&Av(u,f);break;case 13:Oi(u,f,a),T&&S&4&&Rv(u,f);break;case 22:f.memoizedState===null&&Oi(u,f,a),Zi(f,f.return);break;case 30:Oi(u,f,a),Zi(f,f.return);break;case 7:Zi(f,f.return);default:Oi(u,f,a)}n=n.sibling}}function Zd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Go(a))}function jd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Go(t))}function xi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Uv(t,n,a,s),n=n.sibling;else u&&Sv(n)}function Uv(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&ku(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),f&2048&&tl(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),u&&qd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Go(f)));break;case 12:if(f&2048){xi(t,n,a,s),f=n.stateNode;try{var S=n.memoizedProps,T=S.id,B=S.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(j){Ge(n,n.return,j)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:S=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&ku(T),S._visibility&2?xi(t,n,a,s):il(t,n)):(u&&T!==null&&T.memoizedState!==null&&ku(n),S._visibility&2?xi(t,n,a,s):(S._visibility|=2,Ns(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Zd(T,n);break;case 24:xi(t,n,a,s),f&2048&&jd(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Ki(f.child,!0),Ki(n.child,!0))),xi(t,n,a,s);break;default:xi(t,n,a,s)}}function Ns(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,T=a,B=s,j=S.flags;switch(S.tag){case 0:case 11:case 15:Ns(f,S,T,B,u),tl(8,S);break;case 23:break;case 22:var lt=S.stateNode;S.memoizedState!==null?lt._visibility&2?Ns(f,S,T,B,u):il(f,S):(lt._visibility|=2,Ns(f,S,T,B,u)),u&&j&2048&&Zd(S.alternate,S);break;case 24:Ns(f,S,T,B,u),u&&j&2048&&jd(S.alternate,S);break;default:Ns(f,S,T,B,u)}n=n.sibling}}function il(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:il(a,s),u&2048&&Zd(s.alternate,s);break;case 24:il(a,s),u&2048&&jd(s.alternate,s);break;default:il(a,s)}n=n.sibling}}var kr=8192;function Xr(t,n,a){if(t.subtreeFlags&kr)for(t=t.child;t!==null;)Nv(t,n,a),t=t.sibling}function Nv(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&kr&&(t.memoizedState!==null?Xy(a,Li,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&F_(a,t)));break;case 5:Xr(t,n,a),t.flags&kr&&(t=t.stateNode,(n&335544128)===n&&F_(a,t));break;case 3:case 4:var s=Li;Li=fl(t.stateNode.containerInfo),Xr(t,n,a),Li=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=kr,kr=16777216,Xr(t,n,a),kr=s):Xr(t,n,a));break;case 30:if((t.flags&kr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,oi===null&&(oi=new Map),oi.set(s,u)}Xr(t,n,a);break;default:Xr(t,n,a)}}function Lv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Pv(s,t)}Lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ov(t),t=t.sibling}function Ov(t){switch(t.tag){case 0:case 11:case 15:al(t),t.flags&2048&&$a(9,t,t.return);break;case 3:al(t);break;case 12:al(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wu(t)):al(t);break;default:al(t)}}function Wu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Pv(s,t)}Lv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wu(n));break;default:Wu(n)}t=t.sibling}}function Pv(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Go(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var u=s.sibling,f=s.return;if(Tv(s),s===a){An=null;break t}if(u!==null){u.return=f,An=u;break t}An=f}}}var F1={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},H1=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ze=null,Se=null,Me=0,He=0,li=null,er=!1,Ls=!1,Kd=!1,xa=0,un=0,nr=0,qr=0,Zu=0,ui=0,Os=0,rl=null,Jn=null,Qd=!1,ju=0,zv=0,Ku=1/0,Qu=null,ir=null,rn=0,Pi=null,Yr=null,ta=0,Jd=0,$d=null,Iv=null,Ps=null,zs=null,Is=null,sl=0,Ju=null;function ci(){return(Pe&2)!==0&&Me!==0?Me&-Me:Mt.T!==null?uh():Rt()}function Bv(){if(ui===0)if((Me&536870912)===0||ve){var t=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),ui=t}else ui=536870912;return t=wn.current,t!==null&&(t.flags|=32),ui}function Bs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=__(ha(t.memoizedProps,a))),zs===null&&(zs=[]),zs.push(n.bind(null,s))}}function $n(t,n,a){(t===Ze&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),ar(t,Me,ui,!1)),Rr(t,a),((Pe&2)===0||t!==Ze)&&(t===Ze&&((Pe&2)===0&&(qr|=a),un===4&&ar(t,Me,ui,!1)),ea(t))}function Fv(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ba(t,n),u=s?k1(t,n):eh(t,n,!0),f=s;do{if(u===0){Ls&&!s&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!G1(a)){u=eh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=rl;var B=T.current.memoizedState.isDehydrated;if(B&&(Fs(T,S).flags|=256),S=eh(T,S,!1),S!==2&&S!==6){if(Kd&&!B){T.errorRecoveryDisabledLanes|=f,qr|=f,u=4;break t}f=Jn,Jn=u,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Fs(t,0),ar(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(s,n,ui,!er);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ju+300-q(),10<u)){if(ar(s,n,ui,!er),Ar(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=Eh(Hv.bind(null,s,a,Jn,Qu,Qd,n,ui,qr,Os,er,f,"Throttled",-0,0),u);break t}Hv(s,a,Jn,Qu,Qd,n,ui,qr,Os,er,f,null,-0,0)}}break}while(!0);ea(t)}function Hv(t,n,a,s,u,f,S,T,B,j,lt,_t,W,rt){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Wt=(f&335544064)===f;if(_t=null,(Wt||Pt&8192||(Pt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},oi=null,Nv(n,f,_t),Wt&&(Pt=_t,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=pl.bind(Pt),Wt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?ju-q():(f&4194048)===f?zv-q():0,Pt=qy(_t,Pt),Pt!==null)){ta=f,t.cancelPendingCommit=Pt(Zv.bind(null,t,n,f,a,s,u,S,T,B,j,lt,_t,null,W,rt)),ar(t,f,S,!j);return}Zv(t,n,f,a,s,u,S,T,B,j,lt,_t)}function G1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,s){n=jl(t,n),n&=~Zu,n&=~qr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-zn(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&D(t,a,n)}function $u(){return(Pe&6)===0?(ol(0),!1):!0}function th(){if(Se!==null){if(He===0)var t=Se.return;else t=Se,va=Lr=null,ld(t),bs=null,Xo=0,t=Se;for(;t!==null;)uv(t.alternate,t),t=t.return;Se=null}}function Fs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,fy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,th(),Ze=t,Se=a=ma(t.current,null),Me=n,He=0,li=null,er=!1,Ls=Ba(t,n),Kd=!1,Os=ui=Zu=qr=nr=un=0,Jn=rl=null,Qd=!1,xa=jl(t,n),ou(),a}function Gv(t,n){de=null,Mt.H=Nu,n===Ts||n===_u?(n=Z0(),He=3):n===jf?(n=Z0(),He=4):He=n===xd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Se===null&&(un=1,Lu(t,Si(n,t.current)))}function Vv(){var t=wn.current;return t===null?!0:(Me&4194048)===Me?Bn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Bn:!1}function kv(){var t=Mt.H;return Mt.H=Nu,t===null?Nu:t}function Xv(){var t=Mt.A;return Mt.A=F1,t}function tc(){un=4,er||(Me&4194048)!==Me&&wn.current!==null||(Ls=!0),(nr&134217727)===0&&(qr&134217727)===0||Ze===null||ar(Ze,Me,ui,!1)}function eh(t,n,a){var s=Pe;Pe|=2;var u=kv(),f=Xv();(Ze!==t||Me!==n)&&(Qu=null,Fs(t,n)),n=!1;var S=un;t:do try{if(He!==0&&Se!==null){var T=Se,B=li;switch(He){case 8:th(),S=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var j=He;if(He=0,li=null,Hs(t,T,B,j),a&&Ls){S=0;break t}break;default:j=He,He=0,li=null,Hs(t,T,B,j)}}V1(),S=un;break}catch(lt){Gv(t,lt)}while(!0);return n&&t.shellSuspendCounter++,va=Lr=null,Pe=s,Mt.H=u,Mt.A=f,Se===null&&(Ze=null,Me=0,ou()),S}function V1(){for(;Se!==null;)qv(Se)}function k1(t,n){var a=Pe;Pe|=2;var s=kv(),u=Xv();Ze!==t||Me!==n?(Qu=null,Ku=q()+500,Fs(t,n)):Ls=Ba(t,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=li;e:switch(He){case 1:He=0,li=null,Hs(t,n,f,1);break;case 2:case 9:if(Y0(f)){He=0,li=null,Yv(n);break}n=function(){He!==2&&He!==9||Ze!==t||(He=7),ea(t)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Y0(f)?(He=0,li=null,Yv(n)):(He=0,li=null,Hs(t,n,f,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var T=Se;if(S?I_(S):T.stateNode.complete){He=0,li=null;var B=T.sibling;if(B!==null)Se=B;else{var j=T.return;j!==null?(Se=j,ec(j)):Se=null}break e}}He=0,li=null,Hs(t,n,f,5);break;case 6:He=0,li=null,Hs(t,n,f,6);break;case 8:th(),un=6;break t;default:throw Error(r(462))}}X1();break}catch(lt){Gv(t,lt)}while(!0);return va=Lr=null,Mt.H=s,Mt.A=u,Pe=a,Se!==null?0:(Ze=null,Me=0,ou(),un)}function X1(){for(;Se!==null&&!It();)qv(Se)}function qv(t){var n=ov(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?ec(t):Se=n}function Yv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tv(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=tv(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ld(n);var s=n;s===Tn&&(ve?(hu(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(hu(s),ve=!0));default:uv(a,n),n=Se=P0(n,xa),n=ov(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?ec(t):Se=n}function Hs(t,n,a,s){va=Lr=null,ld(n),bs=null,Xo=0;var u=n.return;try{if(U1(t,u,n,a,Me)){un=1,Lu(t,Si(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;un=1,Lu(t,Si(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:Ls||(Me&536870912)!==0?t=!1:(er=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Wv(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){Wv(n,er);return}t=n.return;var a=P1(n.alternate,n,xa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);un===0&&(un=5)}function Wv(t,n){do{var a=z1(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);un=6,Se=null}function Zv(t,n,a,s,u,f,S,T,B,j,lt,_t){t.cancelPendingCommit=null;do nc();while(rn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ze&&(Se=Ze=null,Me=0),Yr=n,Pi=t,ta=a,$d=u,Iv=s,q1(t,n,a,S,T,B,_t)}}function q1(t,n,a,s,u,f,S){var T=n.lanes|n.childLanes;if(Jd=T,T|=zf,hf(t,a,T,s,u,f),zs=null,(a&335544064)===a?(Is=S1(t),s=10262):(Is=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Q1(Tt,function(){return rh(),null})):(t.callbackNode=null,t.callbackPriority=0),Gu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,u=kt.p,kt.p=2,f=Pe,Pe|=4;try{I1(t,n,a)}finally{Pe=f,kt.p=u,Mt.T=s}}rn=1,Gu?Ps=vy(S,t.containerInfo,Is,nh,ih,W1,ah,rh,Y1):(nh(),ih(),ah())}function Y1(t){if(rn!==0){var n=Pi.onRecoverableError;n(t,{componentStack:null})}}function W1(){rn===3&&(rn=0,Dv(Yr,Pi),rn=4)}function nh(){if(rn===1){rn=0;var t=Pi,n=Yr,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var u=kt.p;kt.p=2;var f=Pe;Pe|=4;try{nl=Xu=!1,Cv(n,t,a),a=vh;var S=b0(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(S!==T&&T&&T.ownerDocument&&T0(T.ownerDocument.documentElement,T)){if(B!==null&&Uf(T)){var j=B.start,lt=B.end;if(lt===void 0&&(lt=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(lt,T.value.length);else{var _t=T.ownerDocument||document,W=_t&&_t.defaultView||window;if(W.getSelection){var rt=W.getSelection(),Pt=T.textContent.length,Wt=Math.min(B.start,Pt),he=B.end===void 0?Wt:Math.min(B.end,Pt);!rt.extend&&Wt>he&&(S=he,he=Wt,Wt=S);var Z=x0(T,Wt),X=x0(T,he);if(Z&&X&&(rt.rangeCount!==1||rt.anchorNode!==Z.node||rt.anchorOffset!==Z.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(Z.node,Z.offset),rt.removeAllRanges(),Wt>he?(rt.addRange(et),rt.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),rt.addRange(et))}}}}for(_t=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var vt=_t[T];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Zs=!!gh,vh=gh=null}finally{Pe=f,kt.p=u,Mt.T=s}}t.current=n,rn=2}}function ih(){if(rn===2){rn=0;var t=Pi,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=kt.p;kt.p=2;var u=Pe;Pe|=4;try{Mv(t,n.alternate,n)}finally{Pe=u,kt.p=s,Mt.T=a}}rn=3}}function ah(){if(rn===4||rn===3){rn=0;var t=Ps;Ps=null,fe();var n=Pi,a=Yr,s=ta,u=Iv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?rn=5:(rn=0,Yr=Pi=null,jv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ir=null),tt(s),a=a.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,f=kt.p,kt.p=2,Mt.T=null;try{for(var S=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];S(B.value,{componentStack:B.stack})}}finally{Mt.T=a,kt.p=f}}if(u=zs,S=Is,Is=null,u!==null&&(zs=null,S===null&&(S=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(S),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&nc(),ea(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Ju?sl++:(sl=0,Ju=n):(sl=0,Ju=null),ol(0)}}function jv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Go(n)))}function nc(){return Ps!==null&&(Ps.skipTransition(),Ps=null),nh(),ih(),ah(),rh()}function rh(){if(rn!==5)return!1;var t=Pi,n=Jd;Jd=0;var a=tt(ta),s=Mt.T,u=kt.p;try{kt.p=32>a?32:a,Mt.T=null,a=$d,$d=null;var f=Pi,S=ta;if(rn=0,Yr=Pi=null,ta=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,Ov(f.current),Uv(f,f.current,S,a),Pe=T,ol(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{kt.p=u,Mt.T=s,jv(t,n)}}function Kv(t,n,a){n=Si(a,n),n=Md(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(Rr(t,2),ea(t))}function Ge(t,n,a){if(t.tag===3)Kv(t,t,a);else for(;n!==null;){if(n.tag===3){Kv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){t=Si(a,t),a=Yg(2),s=ja(n,a,2),s!==null&&(Wg(a,s,n,t),Rr(s,2),ea(s));break}}n=n.return}}function sh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new H1;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Kd=!0,u.add(a),t=Z1.bind(null,t,n,a),n.then(t,t))}function Z1(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Me&a)===a&&((un===4||un===3&&(Me&62914560)===Me&&300>q()-ju)&&(Pe&2)===0?Fs(t,0):Zu|=a,Os===Me&&(Os=0)),ea(t)}function Qv(t,n){n===0&&(n=Kl()),t=Dr(t,n),t!==null&&(Rr(t,n),ea(t))}function j1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qv(t,a)}function K1(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Qv(t,a)}function Q1(t,n){return ne(t,n)}var Gs=null,Vs=null,oh=!1,ic=!1,lh=!1,rr=0;function ea(t){t!==Vs&&t.next===null&&(Vs===null?Gs=Vs=t:Vs=Vs.next=t),ic=!0,oh||(oh=!0,$1())}function ol(t,n){if(!lh&&ic){lh=!0;do for(var a=!1,s=Gs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zn(42|t)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e_(s,f))}else f=Me,f=Ar(s,s===Ze?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ba(s,f)||(a=!0,e_(s,f));s=s.next}while(a);lh=!1}}function J1(){Jv()}function Jv(){ic=oh=!1;var t=0;rr!==0&&cy()&&(t=rr);for(var n=q(),a=null,s=Gs;s!==null;){var u=s.next,f=$v(s,n);f===0?(s.next=null,a===null?Gs=u:a.next=u,u===null&&(Vs=a)):(a=s,(t!==0||(f&3)!==0)&&(ic=!0)),s=u}rn!==0&&rn!==5||ol(t),rr!==0&&(rr=0)}function $v(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-zn(f),T=1<<S,B=u[S];B===-1?((T&a)===0||(T&s)!==0)&&(u[S]=df(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ze,a=Me,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Qt(s),tt(a)){case 2:case 8:a=qt;break;case 32:a=Tt;break;case 268435456:a=Kt;break;default:a=Tt}return s=t_.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Qt(s),t.callbackPriority=2,t.callbackNode=null,2}function t_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nc()&&t.callbackNode!==a)return null;var s=Me;return s=Ar(t,t===Ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Fv(t,s,n),$v(t,q()),t.callbackNode!=null&&t.callbackNode===a?t_.bind(null,t):null)}function e_(t,n){if(nc())return null;Fv(t,n,!0)}function $1(){dy(function(){(Pe&6)!==0?ne(Lt,J1):Jv()})}function uh(){if(rr===0){var t=zr;t===0&&(t=Tr,Tr<<=1,(Tr&261888)===0&&(Tr=256)),rr=t}return rr}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$l(t)}function ty(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=n_((u[Yt]||null).action),S=s.submitter;S&&(n=(n=S[Yt]||null)?n_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new iu("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var B=new FormData(u,S);vd(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(u,S),vd(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var ch=0;ch<Pf.length;ch++){var fh=Pf[ch],ey=fh.toLowerCase(),ny=fh[0].toUpperCase()+fh.slice(1);Ui(ey,"on"+ny)}Ui(C0,"onAnimationEnd"),Ui(w0,"onAnimationIteration"),Ui(D0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(f1,"onTransitionRun"),Ui(d1,"onTransitionStart"),Ui(h1,"onTransitionCancel"),Ui(U0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function i_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],B=T.instance,j=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(lt){su(lt)}u.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(T=s[S],B=T.instance,j=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(lt){su(lt)}u.currentTarget=null,f=B}}}}function Ee(t,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var s=t+"__bubble";a.has(s)||(a_(n,t,2,!1),a.add(s))}function dh(t,n,a){var s=0;n&&(s|=4),a_(a,t,s,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function hh(t){if(!t[ac]){t[ac]=!0,je.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||dh(a,!1,t),dh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,dh("selectionchange",!1,n))}}function a_(t,n,a,s){switch(W_(n)){case 2:var u=jy;break;case 8:u=Ky;break;default:u=Lh}a=u.bind(null,n,a,t),u=void 0,!yf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ph(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Oe(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}T=T.parentNode}}s=s.return}a0(function(){var j=f,lt=Sf(a),_t=[];t:{var W=N0.get(t);if(W!==void 0){var rt=iu,Pt=t;switch(t){case"keypress":if(eu(a)===0)break t;case"keydown":case"keyup":rt=GE;break;case"focusin":Pt="focus",rt=bf;break;case"focusout":Pt="blur",rt=bf;break;case"beforeblur":case"afterblur":rt=bf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=o0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=wE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=YE;break;case C0:case w0:case D0:rt=NE;break;case U0:rt=ZE;break;case"scroll":case"scrollend":rt=RE;break;case"wheel":rt=KE;break;case"copy":case"cut":case"paste":rt=OE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=u0;break;case"submit":rt=XE;break;case"toggle":case"beforetoggle":rt=JE}var Wt=(n&4)!==0,he=!Wt&&(t==="scroll"||t==="scrollend"),Z=Wt?W!==null?W+"Capture":null:W;Wt=[];for(var X=j,et;X!==null;){var vt=X;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||Z===null||(vt=Do(X,Z),vt!=null&&Wt.push(ul(X,vt,et))),he)break;X=X.return}0<Wt.length&&(W=new rt(W,Pt,null,a,lt),_t.push({event:W,listeners:Wt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",rt&&a!==_f&&(Pt=a.relatedTarget||a.fromElement)&&(Oe(Pt)||Pt[se]))break t;(W||rt)&&(Pt=lt.window===lt?lt:(rt=lt.ownerDocument)?rt.defaultView||rt.parentWindow:window,W?(rt=a.relatedTarget||a.toElement,W=j,rt=rt?Oe(rt):null,rt!==null&&(he=c(rt),Wt=rt.tag,rt!==he||Wt!==5&&Wt!==27&&Wt!==6)&&(rt=null)):(W=null,rt=j),W!==rt&&(Wt=o0,vt="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=u0,vt="onPointerLeave",Z="onPointerEnter",X="pointer"),he=W==null?Pt:Sn(W),et=rt==null?Pt:Sn(rt),Pt=new Wt(vt,X+"leave",W,a,lt),Pt.target=he,Pt.relatedTarget=et,vt=null,Oe(lt)===j&&(Wt=new Wt(Z,X+"enter",rt,a,lt),Wt.target=et,Wt.relatedTarget=he,vt=Wt),he=vt,Wt=W&&rt?O(W,rt,ay):null,W!==null&&r_(_t,Pt,W,Wt,!1),rt!==null&&he!==null&&r_(_t,he,rt,Wt,!0)))}t:{if(W=j?Sn(j):window,rt=W.nodeName&&W.nodeName.toLowerCase(),rt==="select"||rt==="input"&&W.type==="file")var Xt=v0;else if(m0(W))if(_0)Xt=l1;else{Xt=s1;var xe=r1}else rt=W.nodeName,!rt||rt.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?j&&vf(j.elementType)&&(Xt=v0):Xt=o1;if(Xt&&(Xt=Xt(t,j))){g0(_t,Xt,a,lt);break t}xe&&xe(t,W,j)}switch(xe=j?Sn(j):window,t){case"focusin":(m0(xe)||xe.contentEditable==="true")&&(gs=xe,Nf=j,Bo=null);break;case"focusout":Bo=Nf=gs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,A0(_t,a,lt);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":A0(_t,a,lt)}var te;if(Rf)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ms?h0(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(c0&&a.locale!=="ko"&&(ms||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ms&&(te=r0()):(Ha=lt,Mf="value"in Ha?Ha.value:Ha.textContent,ms=!0)),xe=rc(j,oe),0<xe.length&&(oe=new l0(oe,t,null,a,lt),_t.push({event:oe,listeners:xe}),te?oe.data=te:(te=p0(a),te!==null&&(oe.data=te)))),(te=t1?e1(t,a):n1(t,a))&&(oe=rc(j,"onBeforeInput"),0<oe.length&&(xe=new l0("onBeforeInput","beforeinput",null,a,lt),_t.push({event:xe,listeners:oe}),xe.data=te)),ty(_t,t,j,a,lt)}i_(_t,n)})}function ul(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Do(t,a),u!=null&&s.unshift(ul(t,u,f)),u=Do(t,n),u!=null&&s.push(ul(t,u,f))),t.tag===3)return s;t=t.return}return[]}function ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r_(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,B=T.alternate,j=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||j===null||(B=j,u?(j=Do(a,f),j!=null&&S.unshift(ul(a,j,B))):u||(j=Do(a,f),j!=null&&S.push(ul(a,j,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(ry,`
`).replace(sy,"")}function o_(t,n){return n=s_(n),s_(t)===n}function Ve(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ds(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ds(t,""+s);else return;break;case"className":Jl(t,"class",s);break;case"tabIndex":Jl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(t,a,s);break;case"style":n0(t,s,f);return;case"data":if(n!=="object"){Jl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$l(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$l(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=$l(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Ql(t,"popover",s);break;case"xlinkActuate":fa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":fa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":fa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":fa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":fa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":fa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":fa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":fa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":fa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ql(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=bE.get(a)||a,Ql(t,a,s);else return}Ue=!0}function mh(t,n,a,s,u,f){switch(a){case"style":n0(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ds(t,s);else if(typeof s=="number"||typeof s=="bigint")ds(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}Ue=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ql(t,a,s)}return}Ue=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,f,S,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=f=S=u=null,B=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var lt=a[s];if(lt!=null)switch(s){case"name":u=lt;break;case"type":S=lt;break;case"checked":B=lt;break;case"defaultChecked":j=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Ve(t,n,s,lt,a,null)}}Jm(t,f,T,B,j,S,u,!1);return;case"select":Ee("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ve(t,n,u,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?fs(t,!!s,n,!1):a!=null&&fs(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(t,n,S,T,a,null)}t0(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ve(t,n,B,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<ll.length;s++)Ee(ll[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,j,s,a,null)}return;default:if(vf(n)){for(lt in a)a.hasOwnProperty(lt)&&(s=a[lt],s!==void 0&&mh(t,n,lt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ve(t,n,T,s,a,null))}var oy={};function ly(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,B=null,j=null,lt=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(rt)||Ve(t,n,rt,null,s,_t)}}for(var W in s){var rt=s[W];if(_t=a[W],s.hasOwnProperty(W)&&(rt!=null||_t!=null))switch(W){case"type":rt!==_t&&(Ue=!0),f=rt;break;case"name":rt!==_t&&(Ue=!0),u=rt;break;case"checked":rt!==_t&&(Ue=!0),j=rt;break;case"defaultChecked":rt!==_t&&(Ue=!0),lt=rt;break;case"value":rt!==_t&&(Ue=!0),S=rt;break;case"defaultValue":rt!==_t&&(Ue=!0),T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==_t&&Ve(t,n,W,rt,s,_t)}}mf(t,S,T,B,j,lt,f,u);return;case"select":rt=S=T=W=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:s.hasOwnProperty(f)||Ve(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(Ue=!0),W=f;break;case"defaultValue":f!==B&&(Ue=!0),T=f;break;case"multiple":f!==B&&(Ue=!0),S=f;default:f!==B&&Ve(t,n,u,f,s,B)}n=T,a=S,s=rt,W!=null?fs(t,!!a,W,!1):!!s!=!!a&&(n!=null?fs(t,!!a,n,!0):fs(t,!!a,a?[]:"",!1));return;case"textarea":rt=W=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":u!==f&&(Ue=!0),W=u;break;case"defaultValue":u!==f&&(Ue=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ve(t,n,S,u,s,f)}$m(t,W,rt);return;case"option":for(var Pt in a)W=a[Pt],a.hasOwnProperty(Pt)&&W!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Ve(t,n,Pt,null,s,W));for(B in s)W=s[B],rt=a[B],s.hasOwnProperty(B)&&W!==rt&&(W!=null||rt!=null)&&(B==="selected"?(W!==rt&&(Ue=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol"):Ve(t,n,B,W,s,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)W=a[Wt],a.hasOwnProperty(Wt)&&W!=null&&!s.hasOwnProperty(Wt)&&Ve(t,n,Wt,null,s,W);for(j in s)if(W=s[j],rt=a[j],s.hasOwnProperty(j)&&W!==rt&&(W!=null||rt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,n));break;default:Ve(t,n,j,W,s,rt)}return;default:if(vf(n)){for(var he in a)W=a[he],a.hasOwnProperty(he)&&W!==void 0&&!s.hasOwnProperty(he)&&mh(t,n,he,void 0,s,W);for(lt in s)W=s[lt],rt=a[lt],!s.hasOwnProperty(lt)||W===rt||W===void 0&&rt===void 0||mh(t,n,lt,W,s,rt);return}}for(var Z in a)W=a[Z],a.hasOwnProperty(Z)&&W!=null&&!s.hasOwnProperty(Z)&&Ve(t,n,Z,null,s,W);for(_t in s)W=s[_t],rt=a[_t],!s.hasOwnProperty(_t)||W===rt||W==null&&rt==null||Ve(t,n,_t,W,s,rt)}function l_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,S=u.initiatorType,T=u.duration;if(f&&T&&l_(S)){for(S=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],j=B.startTime;if(j>T)break;var lt=B.transferSize,_t=B.initiatorType;lt&&l_(_t)&&(B=B.responseEnd,S+=lt*(B<T?1:(T-j)/(B-j)))}if(--s,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gh=null,vh=null;function cl(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function f_(t,n,a,s){return a=cl(a).createElement(t),a[Nt]=s,a[Yt]=n,Nn(a,t,n),De(a),a}function _h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sh=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===Sh?!1:(Sh=t,!0):(Sh=null,!1)}var Eh=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,h_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Eh,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(t){return d_.resolve(null).then(t).catch(hy)}:Eh;function hy(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function p_(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),js(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ch(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ch(a);for(var f=a.firstChild;f;){var S=f.nextSibling,T=f.nodeName;f[Le]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Ch(t.ownerDocument.body);a=u}while(a);js(n)}function m_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function g_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function v_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function py(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function yh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return py(n,a,t)}function my(t){return t.documentElement.clientHeight}function gy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function vy(t,n,a,s,u,f,S,T,B){var j=n.nodeType===9?n:n.ownerDocument;try{var lt=j.startViewTransition({update:function(){var W=j.defaultView,rt=W.navigation&&W.navigation.transition,Pt=j.fonts.status;s();var Wt=[];if(Pt==="loaded"&&(my(j),j.fonts.status==="loading"&&Wt.push(j.fonts.ready)),Pt=Wt.length,t!==null)for(var he=t.suspenseyImages,Z=0,X=0;X<he.length;X++){var et=he[X];if(!et.complete){var vt=et.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<W.innerHeight&&vt.left<W.innerWidth){if(Z+=B_(et),Z>lc){Wt.length=Pt;break}et=new Promise(gy.bind(et)),Wt.push(et)}}}if(0<Wt.length)return W=Promise.race([Promise.all(Wt),new Promise(function(Xt){return setTimeout(Xt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,W]):W).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:a});j.__reactViewTransition=lt;var _t=[];return lt.ready.then(function(){for(var W=j.documentElement.getAnimations({subtree:!0}),rt=0;rt<W.length;rt++){var Pt=W[rt],Wt=Pt.effect,he=Wt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){_t.push(Pt),Pt=Wt.getKeyframes();for(var Z=he=void 0,X=!0,et=0;et<Pt.length;et++){var vt=Pt[et],Xt=vt.width;if(he===void 0)he=Xt;else if(he!==Xt){X=!1;break}if(Xt=vt.height,Z===void 0)Z=Xt;else if(Z!==Xt){X=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}X&&he!==void 0&&Z!==void 0&&(Wt.setKeyframes(Pt),X=getComputedStyle(Wt.target,Wt.pseudoElement),X.width!==he||X.height!==Z)&&(X=Pt[0],X.width=he,X.height=Z,X=Pt[Pt.length-1],X.width=he,X.height=Z,Wt.setKeyframes(Pt))}}S()},function(W){j.__reactViewTransition===lt&&(j.__reactViewTransition=null);try{typeof W=="object"&&W!==null&&W.name==="InvalidStateError"&&(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null),W!==null&&B(W)}finally{s(),u(),S()}}),lt.finished.finally(function(){for(var W=0;W<_t.length;W++)_t[W].cancel();j.__reactViewTransition===lt&&(j.__reactViewTransition=null),T()}),lt}catch{return s(),u(),S(),null}}function Wr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Wr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Wr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},Wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function __(t){return{name:t,group:new Wr("group",t),imagePair:new Wr("image-pair",t),old:new Wr("old",t),new:new Wr("new",t)}}function fi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(E_(f,t,n,a)===-1){var S=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){S.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(u=S.removeEventListener.bind(S,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=ks(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),p(this._fragmentFiber.child,!1,_y,t,T,s)}this._eventListeners=f}};function _y(t,n,a,s){return y(t).addEventListener(n,a,s),!1}fi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=E_(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=ks(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Sy,t,a,u),s.splice(n,1),f!==null&&f()}};function Sy(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function ks(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function S_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function E_(t,n,a,s){if(t.length===0)return-1;s=S_(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&S_(f.optionsOrUseCapture)===s)return u}return-1}fi.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,ks(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,ks(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},fi.prototype.focus=function(t){p(this._fragmentFiber.child,!0,y_,t,void 0,void 0)};function y_(t,n){return t.tag===6?!1:(t=y(t),Uy(t,n))}fi.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Mh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],t);a--);};function Mh(t,n){return n.push(t),!1}fi.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=cl(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Ey,t,void 0,void 0))};function Ey(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,yy,t,void 0,void 0)};function yy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}fi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,My,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function My(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var zi=[],xh=!1;function xy(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),xh||(xh=!0,Ny(function(){xh=!1;var s=zi;zi=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}fi.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Ty,t,void 0,void 0),t};function Ty(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}fi.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},fi.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Mh,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=x(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=S&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&f&&S&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||by(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function by(t,n,a,s,u){var f=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=O(a,f,F),n===null?n=!1:(p(n,!0,U,f,a),f=E,E=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=O(s,f,F),n===null?n=!1:(p(n,!0,C,f,s),f=E,N=E=null,n=f!==null)),n):!1}function M_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,Mh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=x(this._fragmentFiber);if(s=a?s[1]||s[0]||_(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),M_(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=y(u),M_(u,a)):y(u).scrollIntoView(t),s+=a?-1:1}};function Ay(t,n){return t=y(t),x_(t,n),!1}function x_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function T_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,ks(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var S=0,T=0;T<zi.length;T++){var B=zi[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(zi[S++]=B)}zi.length=S,f.observe(t)}),x_(t,n))}function Ry(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,ks(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?xy(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Th(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Th(a),ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Cy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function wy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function b_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function bh(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Dy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rh=null;function A_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function R_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Uy(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function Ny(t){h_(function(){h_(function(n){return t(n)})})}function C_(t,n,a){switch(n=cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function w_(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ve(t,n,s,null,oy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),ae(t)}function Ch(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ae(t)}var bi=new Map,D_=new Set;function fl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ta=kt.d;kt.d={f:Ly,r:Oy,D:Py,C:zy,L:Iy,m:By,X:Hy,S:Fy,M:Gy};function Ly(){var t=Ta.f(),n=$u();return t||n}function Oy(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Ng(n):Ta.r(t)}var Xs=typeof document>"u"?null:document;function U_(t,n,a){var s=Xs;if(s&&typeof n=="string"&&n){var u=vi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D_.has(u)||(D_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Nn(n,"link",t),De(n),s.head.appendChild(n)))}}function Py(t){Ta.D(t),U_("dns-prefetch",t,null)}function zy(t,n){Ta.C(t,n),U_("preconnect",t,n)}function Iy(t,n,a){Ta.L(t,n,a);var s=Xs;if(s&&t&&n){var u='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vi(a.imageSizes)+'"]')):u+='[href="'+vi(t)+'"]';var f=u;switch(n){case"style":f=qs(t);break;case"script":f=Ys(t)}if(!(bi.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(dl(f))||n==="script"&&s.querySelector(hl(f))))){var S=s.createElement("link");Nn(S,"link",t),n==="style"&&(S[we]=!0,S.onload=S.onerror=function(){Fa(S)}),De(S),s.head.appendChild(S)}}}function By(t,n){Ta.m(t,n);var a=Xs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vi(s)+'"][href="'+vi(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ys(t)}if(!bi.has(f)&&(t=z({rel:"modulepreload",href:t},n),bi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(f)))return}s=a.createElement("link"),Nn(s,"link",t),De(s),a.head.appendChild(s)}}}function Fy(t,n,a){Ta.S(t,n,a);var s=Xs;if(s&&t){var u=ii(s).hoistableStyles,f=qs(t);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(dl(f)))T.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(f))&&wh(t,a);var B=S=s.createElement("link");De(B),Nn(B,"link",t),B._p=new Promise(function(j,lt){B.onload=j,B.onerror=lt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,sc(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Hy(t,n){Ta.X(t,n);var a=Xs;if(a&&t){var s=ii(a).hoistableScripts,u=Ys(t),f=s.get(u);f||(f=a.querySelector(hl(u)),f||(t=z({src:t,async:!0},n),(n=bi.get(u))&&Dh(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Gy(t,n){Ta.M(t,n);var a=Xs;if(a&&t){var s=ii(a).hoistableScripts,u=Ys(t),f=s.get(u);f||(f=a.querySelector(hl(u)),f||(t=z({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&Dh(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function N_(t,n,a,s){var u=(u=be.current)?fl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qs(a.href),n=ii(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qs(a.href);var f=ii(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(dl(t)))?f._p||(S.instance=f,S.state.loading=5):(f=bi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,f)),Vy(u,t,f,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ys(a),n=ii(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qs(t){return'href="'+vi(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function L_(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function Vy(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Fa.bind(null,n),Nn(n,"link",a),De(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ys(t){return'[src="'+vi(t)+'"]'}function hl(t){return"script[async]"+t}function O_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+vi(a.href)+'"]');if(s)return n.instance=s,De(s),s;var u=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),De(s),Nn(s,"style",u),sc(s,a.precedence,t),n.instance=s;case"stylesheet":u=qs(a.href);var f=t.querySelector(dl(u));if(f)return n.state.loading|=4,n.instance=f,De(f),f;s=L_(a),(u=bi.get(u))&&wh(s,u),f=(t.ownerDocument||t).createElement("link"),De(f);var S=f;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(f,"link",s),n.state.loading|=4,sc(f,a.precedence,t),n.instance=f;case"script":return f=Ys(a.src),(u=t.querySelector(hl(f)))?(n.instance=u,De(u),u):(s=a,(u=bi.get(f))&&(s=z({},a),Dh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),De(u),Nn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,sc(s,a.precedence,t));return n.instance}function sc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Dh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function P_(t,n,a){if(oc===null){var s=new Map,u=oc=new Map;u.set(a,s)}else u=oc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Le]||f[Nt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Uh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ky(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function B_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=B_(n),t.suspenseyImages.push(n)),t=Yy.bind(t),n.decode().then(t,t))}function Xy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=qs(s.href),f=n.querySelector(dl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,De(f);return}f=n.ownerDocument||n,s=L_(s),(u=bi.get(u))&&wh(s,u),f=f.createElement("link"),De(f);var S=f;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var lc=0;function qy(t,n){return t.stylesheets&&t.count===0&&cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&lc===0&&(lc=62500*uy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>lc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function H_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)cc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function pl(){this.count--,H_(this)}function Yy(){this.imgCount--,H_(this)}var uc=null;function cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(Wy,t),uc=null,pl.call(t))}function Wy(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var s=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=pl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ws={$$typeof:k,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Zy(t,n,a,s,u,f,S,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function G_(t,n,a,s,u,f,S,T,B,j,lt,_t){return t=new Zy(t,n,a,S,B,j,lt,_t,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Yf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Kf(f),t}function V_(t){return t?(t=Ss,t):Ss}function k_(t,n,a,s,u,f){u=V_(u),s.context===null?s.context=u:s.pendingContext=u,s=Za(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ja(t,s,n),a!==null&&($n(a,t,n),qo(a,t,n))}function X_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nh(t,n){X_(t,n),(t=t.alternate)&&X_(t,n)}function q_(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&$n(n,t,67108864),Nh(t,67108864)}}function Y_(t){if(t.tag===13||t.tag===31){var n=ci();n=ht(n);var a=Dr(t,n);a!==null&&$n(a,t,n),Nh(t,n)}}var Zs=!0;function jy(t,n,a,s){var u=Mt.T;Mt.T=null;var f=kt.p;try{kt.p=2,Lh(t,n,a,s)}finally{kt.p=f,Mt.T=u}}function Ky(t,n,a,s){var u=Mt.T;Mt.T=null;var f=kt.p;try{kt.p=8,Lh(t,n,a,s)}finally{kt.p=f,Mt.T=u}}function Lh(t,n,a,s){if(Zs){var u=Oh(s);if(u===null)ph(t,n,s,fc,a),Z_(t,s);else if(Jy(u,t,n,a,s))s.stopPropagation();else if(Z_(t,s),n&4&&-1<Qy.indexOf(t)){for(;u!==null;){var f=ge(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=gi(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-zn(S);T.entanglements[1]|=B,S&=~B}ea(f),(Pe&6)===0&&(Ku=q()+500,ol(0))}}break;case 31:case 13:T=Dr(f,2),T!==null&&$n(T,f,2),$u(),Nh(f,2)}if(f=Oh(s),f===null&&ph(t,n,s,fc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else ph(t,n,s,null,a)}}function Oh(t){return t=Sf(t),Ph(t)}var fc=null;function Ph(t){if(fc=null,t=Oe(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function W_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case Lt:return 2;case qt:return 8;case Tt:case St:return 32;case Kt:return 268435456;default:return 32}default:return 32}}var zh=!1,or=null,lr=null,ur=null,ml=new Map,gl=new Map,cr=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z_(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function vl(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&q_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Jy(t,n,a,s,u){switch(n){case"focusin":return or=vl(or,t,n,a,s,u),!0;case"dragenter":return lr=vl(lr,t,n,a,s,u),!0;case"mouseover":return ur=vl(ur,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return ml.set(f,vl(ml.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,gl.set(f,vl(gl.get(f)||null,t,n,a,s,u)),!0}return!1}function j_(t){var n=Oe(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Bt(t.priority,function(){Y_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Bt(t.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Oh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);_f=s,a.target.dispatchEvent(s),_f=null}else return n=ge(a),n!==null&&q_(n),t.blockedOn=a,!1;n.shift()}return!0}function K_(t,n,a){dc(t)&&a.delete(n)}function $y(){zh=!1,or!==null&&dc(or)&&(or=null),lr!==null&&dc(lr)&&(lr=null),ur!==null&&dc(ur)&&(ur=null),ml.forEach(K_),gl.forEach(K_)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,zh||(zh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$y)))}var pc=null;function Q_(t){pc!==t&&(pc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Ph(s||a)===null)continue;break}var f=ge(a);f!==null&&(t.splice(n,3),n-=3,vd(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function js(t){function n(B){return hc(B,t)}or!==null&&hc(or,t),lr!==null&&hc(lr,t),ur!==null&&hc(ur,t),ml.forEach(n),gl.forEach(n);for(var a=0;a<cr.length;a++){var s=cr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)j_(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[Yt]||null;if(typeof f=="function")S||Q_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Yt]||null)T=S.formAction;else if(Ph(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Q_(a)}}}function J_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ih(t){this._internalRoot=t}mc.prototype.render=Ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ci();k_(a,s,t,n,null,null)},mc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k_(t.current,2,null,t,null,null),$u(),n[se]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&j_(t)}};var $_=e.version;if($_!=="19.3.1")throw Error(r(527,$_,"19.3.1"));kt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var tM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ye=gc.inject(tM),an=gc}catch{}}return _l.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Vg,f=kg,S=Xg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=G_(t,1,!1,null,null,a,s,null,u,f,S,J_),t[se]=n.current,hh(t),new Ih(n)},_l.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Vg,S=kg,T=Xg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=G_(t,1,!0,n,a??null,s,u,B,f,S,T,J_),n.context=V_(null),a=n.current,s=ci(),s=ht(s),u=Za(s),u.callback=null,ja(a,u,s),a=s,n.current.lanes=a,Rr(n,a),ea(n),t[se]=n.current,hh(t),new mc(n)},_l.version="19.3.1",_l}var oS;function uM(){if(oS)return Fh.exports;oS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Fh.exports=lM(),Fh.exports}var cM=uM();const Lm="180",fM=0,lS=1,dM=2,T2=1,hM=2,Ua=3,Mr=0,ei=1,Na=2,Er=0,mo=1,uS=2,cS=3,fS=4,pM=5,ns=100,mM=101,gM=102,vM=103,_M=104,SM=200,EM=201,yM=202,MM=203,Tp=204,bp=205,xM=206,TM=207,bM=208,AM=209,RM=210,CM=211,wM=212,DM=213,UM=214,Ap=0,Rp=1,Cp=2,vo=3,wp=4,Dp=5,Up=6,Np=7,b2=0,NM=1,LM=2,yr=0,OM=1,PM=2,zM=3,IM=4,BM=5,FM=6,HM=7,A2=300,_o=301,So=302,Lp=303,Op=304,uf=306,Ul=1e3,rs=1001,Pp=1002,pi=1003,GM=1004,vc=1005,Gi=1006,kh=1007,Sr=1008,za=1009,R2=1010,C2=1011,Nl=1012,Om=1013,ss=1014,Oa=1015,kl=1016,Pm=1017,zm=1018,Ll=1020,w2=35902,D2=35899,U2=1021,N2=1022,wi=1023,Ol=1026,Pl=1027,L2=1028,Im=1029,O2=1030,Bm=1031,Fm=1033,kc=33776,Xc=33777,qc=33778,Yc=33779,zp=35840,Ip=35841,Bp=35842,Fp=35843,Hp=36196,Gp=37492,Vp=37496,kp=37808,Xp=37809,qp=37810,Yp=37811,Wp=37812,Zp=37813,jp=37814,Kp=37815,Qp=37816,Jp=37817,$p=37818,tm=37819,em=37820,nm=37821,im=36492,am=36494,rm=36495,sm=36283,om=36284,lm=36285,um=36286,VM=3200,kM=3201,XM=0,qM=1,_r="",ti="srgb",Eo="srgb-linear",Kc="linear",Ye="srgb",Ks=7680,dS=519,YM=512,WM=513,ZM=514,P2=515,jM=516,KM=517,QM=518,JM=519,hS=35044,pS="300 es",ra=2e3,Qc=2001;class bo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mS=1234567;const wl=Math.PI/180,zl=180/Math.PI;function Ao(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function Hm(o,e){return(o%e+e)%e}function $M(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function tx(o,e,i){return o!==e?(i-o)/(e-o):0}function Dl(o,e,i){return(1-i)*o+i*e}function ex(o,e,i,r){return Dl(o,e,1-Math.exp(-i*r))}function nx(o,e=1){return e-Math.abs(Hm(o,e*2)-e)}function ix(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function ax(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function rx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function sx(o,e){return o+Math.random()*(e-o)}function ox(o){return o*(.5-Math.random())}function lx(o){o!==void 0&&(mS=o);let e=mS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ux(o){return o*wl}function cx(o){return o*zl}function fx(o){return(o&o-1)===0&&o!==0}function dx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function hx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function px(o,e,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),v=d(i/2),g=c((e+r)/2),m=d((e+r)/2),p=c((e-r)/2),_=d((e-r)/2),M=c((r-e)/2),x=d((r-e)/2);switch(l){case"XYX":o.set(h*m,v*p,v*_,h*g);break;case"YZY":o.set(v*_,h*m,v*p,h*g);break;case"ZXZ":o.set(v*p,v*_,h*m,h*g);break;case"XZX":o.set(h*m,v*x,v*M,h*g);break;case"YXY":o.set(v*M,h*m,v*x,h*g);break;case"ZYZ":o.set(v*x,v*M,h*m,h*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xh={DEG2RAD:wl,RAD2DEG:zl,generateUUID:Ao,clamp:Te,euclideanModulo:Hm,mapLinear:$M,inverseLerp:tx,lerp:Dl,damp:ex,pingpong:nx,smoothstep:ix,smootherstep:ax,randInt:rx,randFloat:sx,randFloatSpread:ox,seededRandom:lx,degToRad:ux,radToDeg:cx,isPowerOfTwo:fx,ceilPowerOfTwo:dx,floorPowerOfTwo:hx,setQuaternionFromProperEuler:px,normalize:Wn,denormalize:fo};class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let v=r[l+0],g=r[l+1],m=r[l+2],p=r[l+3];const _=c[d+0],M=c[d+1],x=c[d+2],A=c[d+3];if(h===0){e[i+0]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p;return}if(h===1){e[i+0]=_,e[i+1]=M,e[i+2]=x,e[i+3]=A;return}if(p!==A||v!==_||g!==M||m!==x){let y=1-h;const E=v*_+g*M+m*x+p*A,N=E>=0?1:-1,U=1-E*E;if(U>Number.EPSILON){const F=Math.sqrt(U),O=Math.atan2(F,E*N);y=Math.sin(y*O)/F,h=Math.sin(h*O)/F}const C=h*N;if(v=v*y+_*C,g=g*y+M*C,m=m*y+x*C,p=p*y+A*C,y===1-h){const F=1/Math.sqrt(v*v+g*g+m*m+p*p);v*=F,g*=F,m*=F,p*=F}}e[i]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],v=r[l+1],g=r[l+2],m=r[l+3],p=c[d],_=c[d+1],M=c[d+2],x=c[d+3];return e[i]=h*x+m*p+v*M-g*_,e[i+1]=v*x+m*_+g*p-h*M,e[i+2]=g*x+m*M+h*_-v*p,e[i+3]=m*x-h*p-v*_-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,v=Math.sin,g=h(r/2),m=h(l/2),p=h(c/2),_=v(r/2),M=v(l/2),x=v(c/2);switch(d){case"XYZ":this._x=_*m*p+g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p-_*M*x;break;case"YXZ":this._x=_*m*p+g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p+_*M*x;break;case"ZXY":this._x=_*m*p-g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p-_*M*x;break;case"ZYX":this._x=_*m*p-g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p+_*M*x;break;case"YZX":this._x=_*m*p+g*M*x,this._y=g*M*p+_*m*x,this._z=g*m*x-_*M*p,this._w=g*m*p-_*M*x;break;case"XZY":this._x=_*m*p-g*M*x,this._y=g*M*p-_*m*x,this._z=g*m*x+_*M*p,this._w=g*m*p+_*M*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],v=i[9],g=i[2],m=i[6],p=i[10],_=r+h+p;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(m-v)*M,this._y=(c-g)*M,this._z=(d-l)*M}else if(r>h&&r>p){const M=2*Math.sqrt(1+r-h-p);this._w=(m-v)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+g)/M}else if(h>p){const M=2*Math.sqrt(1+h-r-p);this._w=(c-g)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(v+m)/M}else{const M=2*Math.sqrt(1+p-r-h);this._w=(d-l)/M,this._x=(c+g)/M,this._y=(v+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,v=i._y,g=i._z,m=i._w;return this._x=r*m+d*h+l*g-c*v,this._y=l*m+d*v+c*h-r*g,this._z=c*m+d*g+r*v-l*h,this._w=d*m-r*h-l*v-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const v=1-h*h;if(v<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const g=Math.sqrt(v),m=Math.atan2(g,h),p=Math.sin((1-i)*m)/g,_=Math.sin(i*m)/g;return this._w=d*p+this._w*_,this._x=r*p+this._x*_,this._y=l*p+this._y*_,this._z=c*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(e=0,i=0,r=0){pt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,v=e.w,g=2*(d*l-h*r),m=2*(h*i-c*l),p=2*(c*r-d*i);return this.x=i+v*g+d*p-h*m,this.y=r+v*m+h*g-c*p,this.z=l+v*p+c*m-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,v=i.z;return this.x=l*v-c*h,this.y=c*d-r*v,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qh=new pt,gS=new Xl;class pe{constructor(e,i,r,l,c,d,h,v,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,v,g)}set(e,i,r,l,c,d,h,v,g){const m=this.elements;return m[0]=e,m[1]=l,m[2]=h,m[3]=i,m[4]=c,m[5]=v,m[6]=r,m[7]=d,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],v=r[6],g=r[1],m=r[4],p=r[7],_=r[2],M=r[5],x=r[8],A=l[0],y=l[3],E=l[6],N=l[1],U=l[4],C=l[7],F=l[2],O=l[5],z=l[8];return c[0]=d*A+h*N+v*F,c[3]=d*y+h*U+v*O,c[6]=d*E+h*C+v*z,c[1]=g*A+m*N+p*F,c[4]=g*y+m*U+p*O,c[7]=g*E+m*C+p*z,c[2]=_*A+M*N+x*F,c[5]=_*y+M*U+x*O,c[8]=_*E+M*C+x*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8];return i*d*m-i*h*g-r*c*m+r*h*v+l*c*g-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=m*d-h*g,_=h*v-m*c,M=g*c-d*v,x=i*p+r*_+l*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=p*A,e[1]=(l*g-m*r)*A,e[2]=(h*r-l*d)*A,e[3]=_*A,e[4]=(m*i-l*v)*A,e[5]=(l*c-h*i)*A,e[6]=M*A,e[7]=(r*v-g*i)*A,e[8]=(d*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const v=Math.cos(c),g=Math.sin(c);return this.set(r*v,r*g,-r*(v*d+g*h)+d+e,-l*g,l*v,-l*(-g*d+v*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Yh.makeScale(e,i)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yh=new pe;function z2(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Il(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mx(){const o=Il("canvas");return o.style.display="block",o}const vS={};function Bl(o){o in vS||(vS[o]=!0,console.warn(o))}function gx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const _S=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),SS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const o={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ye&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(l.r=go(l.r),l.g=go(l.g),l.b=go(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_r?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Eo]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:_S,fromXYZ:SS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Ye,toXYZ:_S,fromXYZ:SS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),o}const Ne=vx();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function go(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qs;class _x{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=Il("canvas")),Qs.width=e.width,Qs.height=e.height;const l=Qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Il("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Pa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Wh(l[d].image)):c.push(Wh(l[d]))}else c=Wh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Wh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_x.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;const Zh=new pt;class Pn extends bo{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=rs,l=rs,c=Gi,d=Sr,h=wi,v=za,g=Pn.DEFAULT_ANISOTROPY,m=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ao(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=v,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ul:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ul:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=A2;Pn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const v=e.elements,g=v[0],m=v[4],p=v[8],_=v[1],M=v[5],x=v[9],A=v[2],y=v[6],E=v[10];if(Math.abs(m-_)<.01&&Math.abs(p-A)<.01&&Math.abs(x-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(p+A)<.1&&Math.abs(x+y)<.1&&Math.abs(g+M+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(g+1)/2,C=(M+1)/2,F=(E+1)/2,O=(m+_)/4,z=(p+A)/4,G=(x+y)/4;return U>C&&U>F?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=O/r,c=z/r):C>F?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=O/l,c=G/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=z/c,l=G/c),this.set(r,l,c,i),this}let N=Math.sqrt((y-x)*(y-x)+(p-A)*(p-A)+(_-m)*(_-m));return Math.abs(N)<.001&&(N=1),this.x=(y-x)/N,this.y=(p-A)/N,this.z=(_-m)/N,this.w=Math.acos((g+M+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yx extends bo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends yx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class I2 extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mx extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(e=new pt(1/0,1/0,1/0),i=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(c,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),Sc.subVectors(this.max,Sl),Js.subVectors(e.a,Sl),$s.subVectors(e.b,Sl),to.subVectors(e.c,Sl),dr.subVectors($s,Js),hr.subVectors(to,$s),Zr.subVectors(Js,to);let i=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Zr.z,Zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Zr.z,0,-Zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Zr.y,Zr.x,0];return!jh(i,Js,$s,to,Sc)||(i=[1,0,0,0,1,0,0,0,1],!jh(i,Js,$s,to,Sc))?!1:(Ec.crossVectors(dr,hr),i=[Ec.x,Ec.y,Ec.z],jh(i,Js,$s,to,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ba=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],Ii=new pt,_c=new ql,Js=new pt,$s=new pt,to=new pt,dr=new pt,hr=new pt,Zr=new pt,Sl=new pt,Sc=new pt,Ec=new pt,jr=new pt;function jh(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){jr.fromArray(o,c);const h=l.x*Math.abs(jr.x)+l.y*Math.abs(jr.y)+l.z*Math.abs(jr.z),v=e.dot(jr),g=i.dot(jr),m=r.dot(jr);if(Math.max(-Math.max(v,g,m),Math.min(v,g,m))>h)return!1}return!0}const xx=new ql,El=new pt,Kh=new pt;class Vm{constructor(e=new pt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):xx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(El,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Kh)),this.expandByPoint(El.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Aa=new pt,Qh=new pt,yc=new pt,pr=new pt,Jh=new pt,Mc=new pt,$h=new pt;class Tx{constructor(e=new pt,i=new pt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qh.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),pr.copy(this.origin).sub(Qh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(yc),h=pr.dot(this.direction),v=-pr.dot(yc),g=pr.lengthSq(),m=Math.abs(1-d*d);let p,_,M,x;if(m>0)if(p=d*v-h,_=d*h-v,x=c*m,p>=0)if(_>=-x)if(_<=x){const A=1/m;p*=A,_*=A,M=p*(p+d*_+2*h)+_*(d*p+_+2*v)+g}else _=c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;else _=-c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;else _<=-x?(p=Math.max(0,-(-d*c+h)),_=p>0?-c:Math.min(Math.max(-c,-v),c),M=-p*p+_*(_+2*v)+g):_<=x?(p=0,_=Math.min(Math.max(-c,-v),c),M=_*(_+2*v)+g):(p=Math.max(0,-(d*c+h)),_=p>0?c:Math.min(Math.max(-c,-v),c),M=-p*p+_*(_+2*v)+g);else _=d>0?-c:c,p=Math.max(0,-(d*_+h)),M=-p*p+_*(_+2*v)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Qh).addScaledVector(yc,_),M}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const r=Aa.dot(this.direction),l=Aa.dot(Aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,v=r+d;return v<0?null:h<0?this.at(v,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,v;const g=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,l=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,l=(e.min.x-_.x)*g),m>=0?(c=(e.min.y-_.y)*m,d=(e.max.y-_.y)*m):(c=(e.max.y-_.y)*m,d=(e.min.y-_.y)*m),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),p>=0?(h=(e.min.z-_.z)*p,v=(e.max.z-_.z)*p):(h=(e.max.z-_.z)*p,v=(e.min.z-_.z)*p),r>v||h>l)||((h>r||r!==r)&&(r=h),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,r,l,c){Jh.subVectors(i,e),Mc.subVectors(r,e),$h.crossVectors(Jh,Mc);let d=this.direction.dot($h),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;pr.subVectors(this.origin,e);const v=h*this.direction.dot(Mc.crossVectors(pr,Mc));if(v<0)return null;const g=h*this.direction.dot(Jh.cross(pr));if(g<0||v+g>d)return null;const m=-h*pr.dot($h);return m<0?null:this.at(m/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,i,r,l,c,d,h,v,g,m,p,_,M,x,A,y){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,v,g,m,p,_,M,x,A,y)}set(e,i,r,l,c,d,h,v,g,m,p,_,M,x,A,y){const E=this.elements;return E[0]=e,E[4]=i,E[8]=r,E[12]=l,E[1]=c,E[5]=d,E[9]=h,E[13]=v,E[2]=g,E[6]=m,E[10]=p,E[14]=_,E[3]=M,E[7]=x,E[11]=A,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),c=1/eo.setFromMatrixColumn(e,1).length(),d=1/eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),v=Math.cos(l),g=Math.sin(l),m=Math.cos(c),p=Math.sin(c);if(e.order==="XYZ"){const _=d*m,M=d*p,x=h*m,A=h*p;i[0]=v*m,i[4]=-v*p,i[8]=g,i[1]=M+x*g,i[5]=_-A*g,i[9]=-h*v,i[2]=A-_*g,i[6]=x+M*g,i[10]=d*v}else if(e.order==="YXZ"){const _=v*m,M=v*p,x=g*m,A=g*p;i[0]=_+A*h,i[4]=x*h-M,i[8]=d*g,i[1]=d*p,i[5]=d*m,i[9]=-h,i[2]=M*h-x,i[6]=A+_*h,i[10]=d*v}else if(e.order==="ZXY"){const _=v*m,M=v*p,x=g*m,A=g*p;i[0]=_-A*h,i[4]=-d*p,i[8]=x+M*h,i[1]=M+x*h,i[5]=d*m,i[9]=A-_*h,i[2]=-d*g,i[6]=h,i[10]=d*v}else if(e.order==="ZYX"){const _=d*m,M=d*p,x=h*m,A=h*p;i[0]=v*m,i[4]=x*g-M,i[8]=_*g+A,i[1]=v*p,i[5]=A*g+_,i[9]=M*g-x,i[2]=-g,i[6]=h*v,i[10]=d*v}else if(e.order==="YZX"){const _=d*v,M=d*g,x=h*v,A=h*g;i[0]=v*m,i[4]=A-_*p,i[8]=x*p+M,i[1]=p,i[5]=d*m,i[9]=-h*m,i[2]=-g*m,i[6]=M*p+x,i[10]=_-A*p}else if(e.order==="XZY"){const _=d*v,M=d*g,x=h*v,A=h*g;i[0]=v*m,i[4]=-p,i[8]=g*m,i[1]=_*p+A,i[5]=d*m,i[9]=M*p-x,i[2]=x*p-M,i[6]=h*m,i[10]=A*p+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Ax)}lookAt(e,i,r){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),mr.crossVectors(r,di),mr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),mr.crossVectors(r,di)),mr.normalize(),xc.crossVectors(di,mr),l[0]=mr.x,l[4]=xc.x,l[8]=di.x,l[1]=mr.y,l[5]=xc.y,l[9]=di.y,l[2]=mr.z,l[6]=xc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],v=r[8],g=r[12],m=r[1],p=r[5],_=r[9],M=r[13],x=r[2],A=r[6],y=r[10],E=r[14],N=r[3],U=r[7],C=r[11],F=r[15],O=l[0],z=l[4],G=l[8],w=l[12],R=l[1],I=l[5],$=l[9],st=l[13],ot=l[2],k=l[6],P=l[10],at=l[14],Y=l[3],mt=l[7],Et=l[11],Ot=l[15];return c[0]=d*O+h*R+v*ot+g*Y,c[4]=d*z+h*I+v*k+g*mt,c[8]=d*G+h*$+v*P+g*Et,c[12]=d*w+h*st+v*at+g*Ot,c[1]=m*O+p*R+_*ot+M*Y,c[5]=m*z+p*I+_*k+M*mt,c[9]=m*G+p*$+_*P+M*Et,c[13]=m*w+p*st+_*at+M*Ot,c[2]=x*O+A*R+y*ot+E*Y,c[6]=x*z+A*I+y*k+E*mt,c[10]=x*G+A*$+y*P+E*Et,c[14]=x*w+A*st+y*at+E*Ot,c[3]=N*O+U*R+C*ot+F*Y,c[7]=N*z+U*I+C*k+F*mt,c[11]=N*G+U*$+C*P+F*Et,c[15]=N*w+U*st+C*at+F*Ot,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],v=e[9],g=e[13],m=e[2],p=e[6],_=e[10],M=e[14],x=e[3],A=e[7],y=e[11],E=e[15];return x*(+c*v*p-l*g*p-c*h*_+r*g*_+l*h*M-r*v*M)+A*(+i*v*M-i*g*_+c*d*_-l*d*M+l*g*m-c*v*m)+y*(+i*g*p-i*h*M-c*d*p+r*d*M+c*h*m-r*g*m)+E*(-l*h*m-i*v*p+i*h*_+l*d*p-r*d*_+r*v*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=e[9],_=e[10],M=e[11],x=e[12],A=e[13],y=e[14],E=e[15],N=p*y*g-A*_*g+A*v*M-h*y*M-p*v*E+h*_*E,U=x*_*g-m*y*g-x*v*M+d*y*M+m*v*E-d*_*E,C=m*A*g-x*p*g+x*h*M-d*A*M-m*h*E+d*p*E,F=x*p*v-m*A*v-x*h*_+d*A*_+m*h*y-d*p*y,O=i*N+r*U+l*C+c*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=N*z,e[1]=(A*_*c-p*y*c-A*l*M+r*y*M+p*l*E-r*_*E)*z,e[2]=(h*y*c-A*v*c+A*l*g-r*y*g-h*l*E+r*v*E)*z,e[3]=(p*v*c-h*_*c-p*l*g+r*_*g+h*l*M-r*v*M)*z,e[4]=U*z,e[5]=(m*y*c-x*_*c+x*l*M-i*y*M-m*l*E+i*_*E)*z,e[6]=(x*v*c-d*y*c-x*l*g+i*y*g+d*l*E-i*v*E)*z,e[7]=(d*_*c-m*v*c+m*l*g-i*_*g-d*l*M+i*v*M)*z,e[8]=C*z,e[9]=(x*p*c-m*A*c-x*r*M+i*A*M+m*r*E-i*p*E)*z,e[10]=(d*A*c-x*h*c+x*r*g-i*A*g-d*r*E+i*h*E)*z,e[11]=(m*h*c-d*p*c-m*r*g+i*p*g+d*r*M-i*h*M)*z,e[12]=F*z,e[13]=(m*A*l-x*p*l+x*r*_-i*A*_-m*r*y+i*p*y)*z,e[14]=(x*h*l-d*A*l-x*r*v+i*A*v+d*r*y-i*h*y)*z,e[15]=(d*p*l-m*h*l+m*r*v-i*p*v-d*r*_+i*h*_)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,v=e.z,g=c*d,m=c*h;return this.set(g*d+r,g*h-l*v,g*v+l*h,0,g*h+l*v,m*h+r,m*v-l*d,0,g*v-l*h,m*v+l*d,c*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,v=i._w,g=c+c,m=d+d,p=h+h,_=c*g,M=c*m,x=c*p,A=d*m,y=d*p,E=h*p,N=v*g,U=v*m,C=v*p,F=r.x,O=r.y,z=r.z;return l[0]=(1-(A+E))*F,l[1]=(M+C)*F,l[2]=(x-U)*F,l[3]=0,l[4]=(M-C)*O,l[5]=(1-(_+E))*O,l[6]=(y+N)*O,l[7]=0,l[8]=(x+U)*z,l[9]=(y-N)*z,l[10]=(1-(_+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=eo.set(l[0],l[1],l[2]).length();const d=eo.set(l[4],l[5],l[6]).length(),h=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Bi.copy(this);const g=1/c,m=1/d,p=1/h;return Bi.elements[0]*=g,Bi.elements[1]*=g,Bi.elements[2]*=g,Bi.elements[4]*=m,Bi.elements[5]*=m,Bi.elements[6]*=m,Bi.elements[8]*=p,Bi.elements[9]*=p,Bi.elements[10]*=p,i.setFromRotationMatrix(Bi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=ra,v=!1){const g=this.elements,m=2*c/(i-e),p=2*c/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let x,A;if(v)x=c/(d-c),A=d*c/(d-c);else if(h===ra)x=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Qc)x=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=x,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=ra,v=!1){const g=this.elements,m=2/(i-e),p=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let x,A;if(v)x=1/(d-c),A=d/(d-c);else if(h===ra)x=-2/(d-c),A=-(d+c)/(d-c);else if(h===Qc)x=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=x,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const eo=new pt,Bi=new yn,bx=new pt(0,0,0),Ax=new pt(1,1,1),mr=new pt,xc=new pt,di=new pt,ES=new yn,yS=new Xl;class Ia{constructor(e=0,i=0,r=0,l=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],v=l[1],g=l[5],m=l[9],p=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-p,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(v,c));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(v,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-p,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return ES.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ES,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return yS.setFromEuler(this),this.setFromQuaternion(yS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class B2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const MS=new pt,no=new Xl,Ra=new yn,Tc=new pt,yl=new pt,Cx=new pt,wx=new Xl,xS=new pt(1,0,0),TS=new pt(0,1,0),bS=new pt(0,0,1),AS={type:"added"},Dx={type:"removed"},io={type:"childadded",child:null},tp={type:"childremoved",child:null};class mi extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new pt,i=new Ia,r=new Xl,l=new pt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yn},normalMatrix:{value:new pe}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(xS,e)}rotateY(e){return this.rotateOnAxis(TS,e)}rotateZ(e){return this.rotateOnAxis(bS,e)}translateOnAxis(e,i){return MS.copy(e).applyQuaternion(this.quaternion),this.position.add(MS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xS,e)}translateY(e){return this.translateOnAxis(TS,e)}translateZ(e){return this.translateOnAxis(bS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Tc.copy(e):Tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(yl,Tc,this.up):Ra.lookAt(Tc,yl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ra),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(AS),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Dx),tp.child=e,this.dispatchEvent(tp),tp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(AS),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,v){return h[v.uuid]===void 0&&(h[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const v=h.shapes;if(Array.isArray(v))for(let g=0,m=v.length;g<m;g++){const p=v[g];c(e.shapes,p)}else c(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let v=0,g=this.material.length;v<g;v++)h.push(c(e.materials,this.material[v]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const v=this.animations[h];l.animations.push(c(e.animations,v))}}if(i){const h=d(e.geometries),v=d(e.materials),g=d(e.textures),m=d(e.images),p=d(e.shapes),_=d(e.skeletons),M=d(e.animations),x=d(e.nodes);h.length>0&&(r.geometries=h),v.length>0&&(r.materials=v),g.length>0&&(r.textures=g),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),x.length>0&&(r.nodes=x)}return r.object=l,r;function d(h){const v=[];for(const g in h){const m=h[g];delete m.metadata,v.push(m)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}mi.DEFAULT_UP=new pt(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new pt,Ca=new pt,ep=new pt,wa=new pt,ao=new pt,ro=new pt,RS=new pt,np=new pt,ip=new pt,ap=new pt,rp=new fn,sp=new fn,op=new fn;class Hi{constructor(e=new pt,i=new pt,r=new pt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Fi.subVectors(l,i),Ca.subVectors(r,i),ep.subVectors(e,i);const d=Fi.dot(Fi),h=Fi.dot(Ca),v=Fi.dot(ep),g=Ca.dot(Ca),m=Ca.dot(ep),p=d*g-h*h;if(p===0)return c.set(0,0,0),null;const _=1/p,M=(g*v-h*m)*_,x=(d*m-h*v)*_;return c.set(1-M-x,x,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,r,l,c,d,h,v){return this.getBarycoord(e,i,r,l,wa)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(c,wa.x),v.addScaledVector(d,wa.y),v.addScaledVector(h,wa.z),v)}static getInterpolatedAttribute(e,i,r,l,c,d){return rp.setScalar(0),sp.setScalar(0),op.setScalar(0),rp.fromBufferAttribute(e,i),sp.fromBufferAttribute(e,r),op.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(rp,c.x),d.addScaledVector(sp,c.y),d.addScaledVector(op,c.z),d}static isFrontFacing(e,i,r,l){return Fi.subVectors(r,i),Ca.subVectors(e,i),Fi.cross(Ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Fi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;ao.subVectors(l,r),ro.subVectors(c,r),np.subVectors(e,r);const v=ao.dot(np),g=ro.dot(np);if(v<=0&&g<=0)return i.copy(r);ip.subVectors(e,l);const m=ao.dot(ip),p=ro.dot(ip);if(m>=0&&p<=m)return i.copy(l);const _=v*p-m*g;if(_<=0&&v>=0&&m<=0)return d=v/(v-m),i.copy(r).addScaledVector(ao,d);ap.subVectors(e,c);const M=ao.dot(ap),x=ro.dot(ap);if(x>=0&&M<=x)return i.copy(c);const A=M*g-v*x;if(A<=0&&g>=0&&x<=0)return h=g/(g-x),i.copy(r).addScaledVector(ro,h);const y=m*x-M*p;if(y<=0&&p-m>=0&&M-x>=0)return RS.subVectors(c,l),h=(p-m)/(p-m+(M-x)),i.copy(l).addScaledVector(RS,h);const E=1/(y+A+_);return d=A*E,h=_*E,i.copy(r).addScaledVector(ao,d).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},bc={h:0,s:0,l:0};function lp(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class We{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=Hm(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=lp(d,c,e+1/3),this.g=lp(d,c,e),this.b=lp(d,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=ti){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const r=F2[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ne.workingToColorSpace(Hn.copy(this),e),Math.round(Te(Hn.r*255,0,255))*65536+Math.round(Te(Hn.g*255,0,255))*256+Math.round(Te(Hn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,c=Hn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let v,g;const m=(h+d)/2;if(h===d)v=0,g=0;else{const p=d-h;switch(g=m<=.5?p/(d+h):p/(2-d-h),d){case r:v=(l-c)/p+(l<c?6:0);break;case l:v=(c-r)/p+2;break;case c:v=(r-l)/p+4;break}v/=6}return e.h=v,e.s=g,e.l=m,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ti){Ne.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(bc);const r=Dl(gr.h,bc.h,i),l=Dl(gr.s,bc.s,i),c=Dl(gr.l,bc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new We;We.NAMES=F2;let Ux=0;class cf extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=mo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=bp,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Tp&&(r.blendSrc=this.blendSrc),this.blendDst!==bp&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const v=c[h];delete v.metadata,d.push(v)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class H2 extends cf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=b2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new pt,Ac=new Fe;let Nx=0;class sa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=hS,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hS&&(e.usage=this.usage),e}}class G2 extends sa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class V2 extends sa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class oa extends sa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Lx=0;const Ai=new yn,up=new mi,so=new pt,hi=new ql,Ml=new ql,Rn=new pt;class xr extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z2(e)?V2:G2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return up.lookAt(e),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ml.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(hi.min,Ml.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,Ml.max),hi.expandByPoint(Rn)):(hi.expandByPoint(Ml.min),hi.expandByPoint(Ml.max))}hi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],v=this.morphTargetsRelative;for(let g=0,m=h.count;g<m;g++)Rn.fromBufferAttribute(h,g),v&&(so.fromBufferAttribute(e,g),Rn.add(so)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],v=[];for(let G=0;G<r.count;G++)h[G]=new pt,v[G]=new pt;const g=new pt,m=new pt,p=new pt,_=new Fe,M=new Fe,x=new Fe,A=new pt,y=new pt;function E(G,w,R){g.fromBufferAttribute(r,G),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),_.fromBufferAttribute(c,G),M.fromBufferAttribute(c,w),x.fromBufferAttribute(c,R),m.sub(g),p.sub(g),M.sub(_),x.sub(_);const I=1/(M.x*x.y-x.x*M.y);isFinite(I)&&(A.copy(m).multiplyScalar(x.y).addScaledVector(p,-M.y).multiplyScalar(I),y.copy(p).multiplyScalar(M.x).addScaledVector(m,-x.x).multiplyScalar(I),h[G].add(A),h[w].add(A),h[R].add(A),v[G].add(y),v[w].add(y),v[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,w=N.length;G<w;++G){const R=N[G],I=R.start,$=R.count;for(let st=I,ot=I+$;st<ot;st+=3)E(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const U=new pt,C=new pt,F=new pt,O=new pt;function z(G){F.fromBufferAttribute(l,G),O.copy(F);const w=h[G];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),C.crossVectors(O,w);const I=C.dot(v[G])<0?-1:1;d.setXYZW(G,U.x,U.y,U.z,I)}for(let G=0,w=N.length;G<w;++G){const R=N[G],I=R.start,$=R.count;for(let st=I,ot=I+$;st<ot;st+=3)z(e.getX(st+0)),z(e.getX(st+1)),z(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new pt,c=new pt,d=new pt,h=new pt,v=new pt,g=new pt,m=new pt,p=new pt;if(e)for(let _=0,M=e.count;_<M;_+=3){const x=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),m.subVectors(d,c),p.subVectors(l,c),m.cross(p),h.fromBufferAttribute(r,x),v.fromBufferAttribute(r,A),g.fromBufferAttribute(r,y),h.add(m),v.add(m),g.add(m),r.setXYZ(x,h.x,h.y,h.z),r.setXYZ(A,v.x,v.y,v.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),m.subVectors(d,c),p.subVectors(l,c),m.cross(p),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,v){const g=h.array,m=h.itemSize,p=h.normalized,_=new g.constructor(v.length*m);let M=0,x=0;for(let A=0,y=v.length;A<y;A++){h.isInterleavedBufferAttribute?M=v[A]*h.data.stride+h.offset:M=v[A]*m;for(let E=0;E<m;E++)_[x++]=g[M++]}return new sa(_,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xr,r=this.index.array,l=this.attributes;for(const h in l){const v=l[h],g=e(v,r);i.setAttribute(h,g)}const c=this.morphAttributes;for(const h in c){const v=[],g=c[h];for(let m=0,p=g.length;m<p;m++){const _=g[m],M=e(_,r);v.push(M)}i.morphAttributes[h]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const g=r[v];e.data.attributes[v]=g.toJSON(e.data)}const l={};let c=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],m=[];for(let p=0,_=g.length;p<_;p++){const M=g[p];m.push(M.toJSON(e.data))}m.length>0&&(l[v]=m,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const m=l[g];this.setAttribute(g,m.clone(i))}const c=e.morphAttributes;for(const g in c){const m=[],p=c[g];for(let _=0,M=p.length;_<M;_++)m.push(p[_].clone(i));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,m=d.length;g<m;g++){const p=d[g];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const CS=new yn,Kr=new Tx,Rc=new Vm,wS=new pt,Cc=new pt,wc=new pt,Dc=new pt,cp=new pt,Uc=new pt,DS=new pt,Nc=new pt;class Vi extends mi{constructor(e=new xr,i=new H2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let v=0,g=c.length;v<g;v++){const m=h[v],p=c[v];m!==0&&(cp.fromBufferAttribute(p,e),d?Uc.addScaledVector(cp,m):Uc.addScaledVector(cp.sub(i),m))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),Kr.copy(e.ray).recast(e.near),!(Rc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Rc,wS)===null||Kr.origin.distanceToSquared(wS)>(e.far-e.near)**2))&&(CS.copy(c).invert(),Kr.copy(e.ray).applyMatrix4(CS),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Kr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,v=c.attributes.position,g=c.attributes.uv,m=c.attributes.uv1,p=c.attributes.normal,_=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let x=0,A=_.length;x<A;x++){const y=_[x],E=d[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,F=U;C<F;C+=3){const O=h.getX(C),z=h.getX(C+1),G=h.getX(C+2);l=Lc(this,E,e,r,g,m,p,O,z,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const x=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=x,E=A;y<E;y+=3){const N=h.getX(y),U=h.getX(y+1),C=h.getX(y+2);l=Lc(this,d,e,r,g,m,p,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let x=0,A=_.length;x<A;x++){const y=_[x],E=d[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(v.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,F=U;C<F;C+=3){const O=C,z=C+1,G=C+2;l=Lc(this,E,e,r,g,m,p,O,z,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const x=Math.max(0,M.start),A=Math.min(v.count,M.start+M.count);for(let y=x,E=A;y<E;y+=3){const N=y,U=y+1,C=y+2;l=Lc(this,d,e,r,g,m,p,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ox(o,e,i,r,l,c,d,h){let v;if(e.side===ei?v=r.intersectTriangle(d,c,l,!0,h):v=r.intersectTriangle(l,c,d,e.side===Mr,h),v===null)return null;Nc.copy(h),Nc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Nc);return g<i.near||g>i.far?null:{distance:g,point:Nc.clone(),object:o}}function Lc(o,e,i,r,l,c,d,h,v,g){o.getVertexPosition(h,Cc),o.getVertexPosition(v,wc),o.getVertexPosition(g,Dc);const m=Ox(o,e,i,r,Cc,wc,Dc,DS);if(m){const p=new pt;Hi.getBarycoord(DS,Cc,wc,Dc,p),l&&(m.uv=Hi.getInterpolatedAttribute(l,h,v,g,p,new Fe)),c&&(m.uv1=Hi.getInterpolatedAttribute(c,h,v,g,p,new Fe)),d&&(m.normal=Hi.getInterpolatedAttribute(d,h,v,g,p,new pt),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:h,b:v,c:g,normal:new pt,materialIndex:0};Hi.getNormal(Cc,wc,Dc,_.normal),m.face=_,m.barycoord=p}return m}class Yl extends xr{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const v=[],g=[],m=[],p=[];let _=0,M=0;x("z","y","x",-1,-1,r,i,e,d,c,0),x("z","y","x",1,-1,r,i,-e,d,c,1),x("x","z","y",1,1,e,r,i,l,d,2),x("x","z","y",1,-1,e,r,-i,l,d,3),x("x","y","z",1,-1,e,i,r,l,c,4),x("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(v),this.setAttribute("position",new oa(g,3)),this.setAttribute("normal",new oa(m,3)),this.setAttribute("uv",new oa(p,2));function x(A,y,E,N,U,C,F,O,z,G,w){const R=C/z,I=F/G,$=C/2,st=F/2,ot=O/2,k=z+1,P=G+1;let at=0,Y=0;const mt=new pt;for(let Et=0;Et<P;Et++){const Ot=Et*I-st;for(let Zt=0;Zt<k;Zt++){const re=Zt*R-$;mt[A]=re*N,mt[y]=Ot*U,mt[E]=ot,g.push(mt.x,mt.y,mt.z),mt[A]=0,mt[y]=0,mt[E]=O>0?1:-1,m.push(mt.x,mt.y,mt.z),p.push(Zt/z),p.push(1-Et/G),at+=1}}for(let Et=0;Et<G;Et++)for(let Ot=0;Ot<z;Ot++){const Zt=_+Ot+k*Et,re=_+Ot+k*(Et+1),V=_+(Ot+1)+k*(Et+1),ct=_+(Ot+1)+k*Et;v.push(Zt,re,ct),v.push(re,V,ct),Y+=6}h.addGroup(M,Y,w),M+=Y,_+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const r=yo(o[i]);for(const l in r)e[l]=r[l]}return e}function Px(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function k2(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const zx={clone:yo,merge:Zn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends cf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class km extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new pt,US=new Fe,NS=new Fe;class Ri extends km{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,i){return this.getViewBounds(e,US,NS),i.subVectors(NS,US)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,g=d.fullHeight;c+=d.offsetX*l/v,i-=d.offsetY*r/g,l*=d.width/v,r*=d.height/g}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class Fx extends mi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(oo,lo,e,i);l.layers=this.layers,this.add(l);const c=new Ri(oo,lo,e,i);c.layers=this.layers,this.add(c);const d=new Ri(oo,lo,e,i);d.layers=this.layers,this.add(d);const h=new Ri(oo,lo,e,i);h.layers=this.layers,this.add(h);const v=new Ri(oo,lo,e,i);v.layers=this.layers,this.add(v);const g=new Ri(oo,lo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,v]=i;for(const g of i)this.remove(g);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,v,g,m]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,m),e.setRenderTarget(p,_,M),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class X2 extends Pn{constructor(e=[],i=_o,r,l,c,d,h,v,g,m){super(e,i,r,l,c,d,h,v,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends os{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new X2(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yl(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Er});c.uniforms.tEquirect.value=i;const d=new Vi(l,c),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Gi),new Fx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class Oc extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),E=this._getHandJoint(g,A);y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=y.radius),E.visible=y!==null}const m=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],_=m.position.distanceTo(p.position),M=.02,x=.005;g.inputState.pinching&&_>M+x?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=M-x&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(v.matrix.fromArray(c.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,c.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(c.linearVelocity)):v.hasLinearVelocity=!1,c.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(c.angularVelocity)):v.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return h!==null&&(h.visible=l!==null),v!==null&&(v.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class q2 extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Vx extends Pn{constructor(e=null,i=1,r=1,l,c,d,h,v,g=pi,m=pi,p,_){super(null,d,h,v,g,m,l,c,p,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dp=new pt,kx=new pt,Xx=new pe;class ts{constructor(e=new pt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=dp.subVectors(r,i).cross(kx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(dp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Xx.getNormalMatrix(e),l=this.coplanarPoint(dp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Vm,qx=new Fe(.5,.5),Pc=new pt;class Y2{constructor(e=new ts,i=new ts,r=new ts,l=new ts,c=new ts,d=new ts){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],M=c[7],x=c[8],A=c[9],y=c[10],E=c[11],N=c[12],U=c[13],C=c[14],F=c[15];if(l[0].setComponents(g-d,M-m,E-x,F-N).normalize(),l[1].setComponents(g+d,M+m,E+x,F+N).normalize(),l[2].setComponents(g+h,M+p,E+A,F+U).normalize(),l[3].setComponents(g-h,M-p,E-A,F-U).normalize(),r)l[4].setComponents(v,_,y,C).normalize(),l[5].setComponents(g-v,M-_,E-y,F-C).normalize();else if(l[4].setComponents(g-v,M-_,E-y,F-C).normalize(),i===ra)l[5].setComponents(g+v,M+_,E+y,F+C).normalize();else if(i===Qc)l[5].setComponents(v,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const i=qx.distanceTo(e.center);return Qr.radius=.7071067811865476+i,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yx extends Pn{constructor(e,i,r,l,c,d,h,v,g){super(e,i,r,l,c,d,h,v,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class W2 extends Pn{constructor(e,i,r=ss,l,c,d,h=pi,v=pi,g,m=Ol,p=1){if(m!==Ol&&m!==Pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:p};super(_,l,c,d,h,v,m,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Z2 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wl extends xr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),v=Math.floor(l),g=h+1,m=v+1,p=e/h,_=i/v,M=[],x=[],A=[],y=[];for(let E=0;E<m;E++){const N=E*_-d;for(let U=0;U<g;U++){const C=U*p-c;x.push(C,-N,0),A.push(0,0,1),y.push(U/h),y.push(1-E/v)}}for(let E=0;E<v;E++)for(let N=0;N<h;N++){const U=N+g*E,C=N+g*(E+1),F=N+1+g*(E+1),O=N+1+g*E;M.push(U,C,O),M.push(C,F,O)}this.setIndex(M),this.setAttribute("position",new oa(x,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xm extends xr{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(d+h,Math.PI);let g=0;const m=[],p=new pt,_=new pt,M=[],x=[],A=[],y=[];for(let E=0;E<=r;E++){const N=[],U=E/r;let C=0;E===0&&d===0?C=.5/i:E===r&&v===Math.PI&&(C=-.5/i);for(let F=0;F<=i;F++){const O=F/i;p.x=-e*Math.cos(l+O*c)*Math.sin(d+U*h),p.y=e*Math.cos(d+U*h),p.z=e*Math.sin(l+O*c)*Math.sin(d+U*h),x.push(p.x,p.y,p.z),_.copy(p).normalize(),A.push(_.x,_.y,_.z),y.push(O+C,1-U),N.push(g++)}m.push(N)}for(let E=0;E<r;E++)for(let N=0;N<i;N++){const U=m[E][N+1],C=m[E][N],F=m[E+1][N],O=m[E+1][N+1];(E!==0||d>0)&&M.push(U,C,O),(E!==r-1||v<Math.PI)&&M.push(C,F,O)}this.setIndex(M),this.setAttribute("position",new oa(x,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wx extends cf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zx extends cf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class jx{constructor(e,i,r){const l=this;let c=!1,d=0,h=0,v;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(m){h++,c===!1&&l.onStart!==void 0&&l.onStart(m,d,h),c=!0},this.itemEnd=function(m){d++,l.onProgress!==void 0&&l.onProgress(m,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(m){l.onError!==void 0&&l.onError(m)},this.resolveURL=function(m){return v?v(m):m},this.setURLModifier=function(m){return v=m,this},this.addHandler=function(m,p){return g.push(m,p),this},this.removeHandler=function(m){const p=g.indexOf(m);return p!==-1&&g.splice(p,2),this},this.getHandler=function(m){for(let p=0,_=g.length;p<_;p+=2){const M=g[p],x=g[p+1];if(M.global&&(M.lastIndex=0),M.test(m))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Kx=new jx;class qm{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qm.DEFAULT_MATERIAL_NAME="__DEFAULT";const uo=new WeakMap;class Qx extends qm{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=hp.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let p=uo.get(d);p===void 0&&(p=[],uo.set(d,p)),p.push({onLoad:i,onError:l})}return d}const h=Il("img");function v(){m(),i&&i(this);const p=uo.get(this)||[];for(let _=0;_<p.length;_++){const M=p[_];M.onLoad&&M.onLoad(this)}uo.delete(this),c.manager.itemEnd(e)}function g(p){m(),l&&l(p),hp.remove(`image:${e}`);const _=uo.get(this)||[];for(let M=0;M<_.length;M++){const x=_[M];x.onError&&x.onError(p)}uo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function m(){h.removeEventListener("load",v,!1),h.removeEventListener("error",g,!1)}return h.addEventListener("load",v,!1),h.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),hp.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class Jx extends qm{constructor(e){super(e)}load(e,i,r,l){const c=new Pn,d=new Qx(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class $x extends km{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,h-=m*this.view.offsetY,v=h-m*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tT extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function LS(o,e,i,r){const l=eT(r);switch(i){case U2:return o*e;case L2:return o*e/l.components*l.byteLength;case Im:return o*e/l.components*l.byteLength;case O2:return o*e*2/l.components*l.byteLength;case Bm:return o*e*2/l.components*l.byteLength;case N2:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Fm:return o*e*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ip:case Fp:return Math.max(o,16)*Math.max(e,8)/4;case zp:case Bp:return Math.max(o,8)*Math.max(e,8)/2;case Hp:case Gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case jp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case $p:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case tm:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case em:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case nm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case im:case am:case rm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case sm:case om:return Math.ceil(o/4)*Math.ceil(e/4)*8;case lm:case um:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eT(o){switch(o){case za:case R2:return{byteLength:1,components:1};case Nl:case C2:case kl:return{byteLength:2,components:1};case Pm:case zm:return{byteLength:2,components:4};case ss:case Om:case Oa:return{byteLength:4,components:1};case w2:case D2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);function j2(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function nT(o){const e=new WeakMap;function i(h,v){const g=h.array,m=h.usage,p=g.byteLength,_=o.createBuffer();o.bindBuffer(v,_),o.bufferData(v,g,m),h.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:p}}function r(h,v,g){const m=v.array,p=v.updateRanges;if(o.bindBuffer(g,h),p.length===0)o.bufferSubData(g,0,m);else{p.sort((M,x)=>M.start-x.start);let _=0;for(let M=1;M<p.length;M++){const x=p[_],A=p[M];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++_,p[_]=A)}p.length=_+1;for(let M=0,x=p.length;M<x;M++){const A=p[M];o.bufferSubData(g,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=e.get(h);v&&(o.deleteBuffer(v.buffer),e.delete(h))}function d(h,v){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,i(h,v));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,v),g.version=h.version}}return{get:l,remove:c,update:d}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
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
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AT=`#define PI 3.141592653589793
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
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",OT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,qT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZT=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
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
#endif`,eb=`struct PhysicalMaterial {
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,db=`#if defined( USE_POINTS_UV )
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
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gb=`float getShadowMask() {
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
}`,Vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,cA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,SA=`#define LAMBERT
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
}`,EA=`#define MATCAP
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
}`,yA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,xA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,bA=`#define PHONG
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
}`,AA=`#define STANDARD
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
}`,RA=`#define STANDARD
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
}`,CA=`#define TOON
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
}`,wA=`#define TOON
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
}`,DA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,LA=`uniform vec3 color;
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
}`,OA=`uniform float rotation;
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
}`,PA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:iT,alphahash_pars_fragment:aT,alphamap_fragment:rT,alphamap_pars_fragment:sT,alphatest_fragment:oT,alphatest_pars_fragment:lT,aomap_fragment:uT,aomap_pars_fragment:cT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:ET,clipping_planes_vertex:yT,color_fragment:MT,color_pars_fragment:xT,color_pars_vertex:TT,color_vertex:bT,common:AT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:CT,displacementmap_pars_vertex:wT,displacementmap_vertex:DT,emissivemap_fragment:UT,emissivemap_pars_fragment:NT,colorspace_fragment:LT,colorspace_pars_fragment:OT,envmap_fragment:PT,envmap_common_pars_fragment:zT,envmap_pars_fragment:IT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:jT,envmap_vertex:FT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:VT,fog_pars_fragment:kT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:qT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:WT,lights_pars_begin:ZT,lights_toon_fragment:KT,lights_toon_pars_fragment:QT,lights_phong_fragment:JT,lights_phong_pars_fragment:$T,lights_physical_fragment:tb,lights_physical_pars_fragment:eb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:ab,logdepthbuf_fragment:rb,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:ob,logdepthbuf_vertex:lb,map_fragment:ub,map_pars_fragment:cb,map_particle_fragment:fb,map_particle_pars_fragment:db,metalnessmap_fragment:hb,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:vb,morphtarget_pars_vertex:_b,morphtarget_vertex:Sb,normal_fragment_begin:Eb,normal_fragment_maps:yb,normal_pars_fragment:Mb,normal_pars_vertex:xb,normal_vertex:Tb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:wb,opaque_fragment:Db,packing:Ub,premultiplied_alpha_fragment:Nb,project_vertex:Lb,dithering_fragment:Ob,dithering_pars_fragment:Pb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:Fb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Gb,skinbase_vertex:Vb,skinning_pars_vertex:kb,skinning_vertex:Xb,skinnormal_vertex:qb,specularmap_fragment:Yb,specularmap_pars_fragment:Wb,tonemapping_fragment:Zb,tonemapping_pars_fragment:jb,transmission_fragment:Kb,transmission_pars_fragment:Qb,uv_pars_fragment:Jb,uv_pars_vertex:$b,uv_vertex:tA,worldpos_vertex:eA,background_vert:nA,background_frag:iA,backgroundCube_vert:aA,backgroundCube_frag:rA,cube_vert:sA,cube_frag:oA,depth_vert:lA,depth_frag:uA,distanceRGBA_vert:cA,distanceRGBA_frag:fA,equirect_vert:dA,equirect_frag:hA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:_A,meshlambert_frag:SA,meshmatcap_vert:EA,meshmatcap_frag:yA,meshnormal_vert:MA,meshnormal_frag:xA,meshphong_vert:TA,meshphong_frag:bA,meshphysical_vert:AA,meshphysical_frag:RA,meshtoon_vert:CA,meshtoon_frag:wA,points_vert:DA,points_frag:UA,shadow_vert:NA,shadow_frag:LA,sprite_vert:OA,sprite_frag:PA},Ft={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new We(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Zn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Zn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new We(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Zn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Zn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Zn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Zn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Zn([Ft.common,Ft.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Zn([Ft.lights,Ft.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};na.physical={uniforms:Zn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const zc={r:0,b:0,g:0},Jr=new Ia,zA=new yn;function IA(o,e,i,r,l,c,d){const h=new We(0);let v=c===!0?0:1,g,m,p=null,_=0,M=null;function x(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function A(U){let C=!1;const F=x(U);F===null?E(h,v):F&&F.isColor&&(E(F,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,C){const F=x(C);F&&(F.isCubeTexture||F.mapping===uf)?(m===void 0&&(m=new Vi(new Yl(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:yo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(m)),Jr.copy(C.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.material.uniforms.envMap.value=F,m.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Jr)),m.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Ye,(p!==F||_!==F.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,p=F,_=F.version,M=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new Vi(new Wl(2,2),new la({name:"BackgroundMaterial",uniforms:yo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Ye,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||_!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=F,_=F.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function E(U,C){U.getRGB(zc,k2(o)),r.buffers.color.setClear(zc.r,zc.g,zc.b,C,d)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),v=C,E(h,v)},getClearAlpha:function(){return v},setClearAlpha:function(U){v=U,E(h,v)},render:A,addToRenderList:y,dispose:N}}function BA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function h(R,I,$,st,ot){let k=!1;const P=p(st,$,I);c!==P&&(c=P,g(c.object)),k=M(R,st,$,ot),k&&x(R,st,$,ot),ot!==null&&e.update(ot,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,C(R,I,$,st),ot!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function v(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function p(R,I,$){const st=$.wireframe===!0;let ot=r[R.id];ot===void 0&&(ot={},r[R.id]=ot);let k=ot[I.id];k===void 0&&(k={},ot[I.id]=k);let P=k[st];return P===void 0&&(P=_(v()),k[st]=P),P}function _(R){const I=[],$=[],st=[];for(let ot=0;ot<i;ot++)I[ot]=0,$[ot]=0,st[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,I,$,st){const ot=c.attributes,k=I.attributes;let P=0;const at=$.getAttributes();for(const Y in at)if(at[Y].location>=0){const Et=ot[Y];let Ot=k[Y];if(Ot===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Ot=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Ot=R.instanceColor)),Et===void 0||Et.attribute!==Ot||Ot&&Et.data!==Ot.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function x(R,I,$,st){const ot={},k=I.attributes;let P=0;const at=$.getAttributes();for(const Y in at)if(at[Y].location>=0){let Et=k[Y];Et===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor));const Ot={};Ot.attribute=Et,Et&&Et.data&&(Ot.data=Et.data),ot[Y]=Ot,P++}c.attributes=ot,c.attributesNum=P,c.index=st}function A(){const R=c.newAttributes;for(let I=0,$=R.length;I<$;I++)R[I]=0}function y(R){E(R,0)}function E(R,I){const $=c.newAttributes,st=c.enabledAttributes,ot=c.attributeDivisors;$[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),ot[R]!==I&&(o.vertexAttribDivisor(R,I),ot[R]=I)}function N(){const R=c.newAttributes,I=c.enabledAttributes;for(let $=0,st=I.length;$<st;$++)I[$]!==R[$]&&(o.disableVertexAttribArray($),I[$]=0)}function U(R,I,$,st,ot,k,P){P===!0?o.vertexAttribIPointer(R,I,$,ot,k):o.vertexAttribPointer(R,I,$,st,ot,k)}function C(R,I,$,st){A();const ot=st.attributes,k=$.getAttributes(),P=I.defaultAttributeValues;for(const at in k){const Y=k[at];if(Y.location>=0){let mt=ot[at];if(mt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const Et=mt.normalized,Ot=mt.itemSize,Zt=e.get(mt);if(Zt===void 0)continue;const re=Zt.buffer,V=Zt.type,ct=Zt.bytesPerElement,Q=V===o.INT||V===o.UNSIGNED_INT||mt.gpuType===Om;if(mt.isInterleavedBufferAttribute){const K=mt.data,yt=K.stride,wt=mt.offset;if(K.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)E(Y.location+At,K.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let At=0;At<Y.locationSize;At++)y(Y.location+At);o.bindBuffer(o.ARRAY_BUFFER,re);for(let At=0;At<Y.locationSize;At++)U(Y.location+At,Ot/Y.locationSize,V,Et,yt*ct,(wt+Ot/Y.locationSize*At)*ct,Q)}else{if(mt.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)E(Y.location+K,mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let K=0;K<Y.locationSize;K++)y(Y.location+K);o.bindBuffer(o.ARRAY_BUFFER,re);for(let K=0;K<Y.locationSize;K++)U(Y.location+K,Ot/Y.locationSize,V,Et,Ot*ct,Ot/Y.locationSize*K*ct,Q)}}else if(P!==void 0){const Et=P[at];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}N()}function F(){G();for(const R in r){const I=r[R];for(const $ in I){const st=I[$];for(const ot in st)m(st[ot].object),delete st[ot];delete I[$]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const $ in I){const st=I[$];for(const ot in st)m(st[ot].object),delete st[ot];delete I[$]}delete r[R.id]}function z(R){for(const I in r){const $=r[I];if($[R.id]===void 0)continue;const st=$[R.id];for(const ot in st)m(st[ot].object),delete st[ot];delete $[R.id]}}function G(){w(),d=!0,c!==l&&(c=l,g(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:N}}function FA(o,e,i){let r;function l(g){r=g}function c(g,m){o.drawArrays(r,g,m),i.update(m,r,1)}function d(g,m,p){p!==0&&(o.drawArraysInstanced(r,g,m,p),i.update(m,r,p))}function h(g,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,p);let M=0;for(let x=0;x<p;x++)M+=m[x];i.update(M,r,1)}function v(g,m,p,_){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<g.length;x++)d(g[x],m[x],_[x]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,m,0,_,0,p);let x=0;for(let A=0;A<p;A++)x+=m[A]*_[A];i.update(x,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=v}function HA(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==wi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const G=z===kl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==za&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Oa&&!G)}function v(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const m=v(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const p=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:F,maxSamples:O}}function GA(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new ts,h=new pe,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const M=p.length!==0||_||r!==0||l;return l=_,r=p.length,M},this.beginShadows=function(){c=!0,m(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(p,_){i=m(p,_,0)},this.setState=function(p,_,M){const x=p.clippingPlanes,A=p.clipIntersection,y=p.clipShadows,E=o.get(p);if(!l||x===null||x.length===0||c&&!y)c?m(null):g();else{const N=c?0:r,U=N*4;let C=E.clippingState||null;v.value=C,C=m(x,_,U,M);for(let F=0;F!==U;++F)C[F]=i[F];E.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,_,M,x){const A=p!==null?p.length:0;let y=null;if(A!==0){if(y=v.value,x!==!0||y===null){const E=M+A*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<E)&&(y=new Float32Array(E));for(let U=0,C=M;U!==A;++U,C+=4)d.copy(p[U]).applyMatrix4(N,h),d.normal.toArray(y,C),y[C+3]=d.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function VA(o){let e=new WeakMap;function i(d,h){return h===Lp?d.mapping=_o:h===Op&&(d.mapping=So),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Lp||h===Op)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const g=new Hx(v.height);return g.fromEquirectangularTexture(o,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ho=4,OS=[.125,.215,.35,.446,.526,.582],is=20,pp=new $x,PS=new We;let mp=null,gp=0,vp=0,_p=!1;const es=(1+Math.sqrt(5))/2,co=1/es,zS=[new pt(-es,co,0),new pt(es,co,0),new pt(-co,0,es),new pt(co,0,es),new pt(0,es,-co),new pt(0,es,co),new pt(-1,1,-1),new pt(1,1,-1),new pt(-1,1,1),new pt(1,1,1)],kA=new pt;class IS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=kA}=c;mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,h),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=HS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mp,gp,vp),this._renderer.xr.enabled=_p,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===_o||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:kl,format:wi,colorSpace:Eo,depthBuffer:!1},l=BS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=BS(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(c)),this._blurMaterial=qA(c,e,i)}return l}_compileMaterial(e){const i=new Vi(this._lodPlanes[0],e);this._renderer.compile(i,pp)}_sceneToCubeUV(e,i,r,l,c){const v=new Ri(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,M=p.toneMapping;p.getClearColor(PS),p.toneMapping=yr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const A=new H2({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),y=new Vi(new Yl,A);let E=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,E=!0):(A.color.copy(PS),E=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(v.up.set(0,g[U],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x+m[U],c.y,c.z)):C===1?(v.up.set(0,0,g[U]),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y+m[U],c.z)):(v.up.set(0,g[U],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y,c.z+m[U]));const F=this._cubeSize;Ic(l,C*F,U>2?F:0,F,F),p.setRenderTarget(l),E&&p.render(y,v),p.render(e,v)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=_,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===_o||e.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=HS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=FS());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Vi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const v=this._cubeSize;Ic(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,pp)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=zS[(l-c-1)%zS.length];this._blur(e,c-1,c,d,h)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const v=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new Vi(this._lodPlanes[l],g),_=g.uniforms,M=this._sizeLods[r]-1,x=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*is-1),A=c/x,y=isFinite(c)?1+Math.floor(m*A):is;y>is&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const E=[];let N=0;for(let z=0;z<is;++z){const G=z/A,w=Math.exp(-G*G/2);E.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<E.length;z++)E[z]=E[z]/N;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=E,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=x,_.mipInt.value=U-r;const C=this._sizeLods[l],F=3*C*(l>U-ho?l-U+ho:0),O=4*(this._cubeSize-C);Ic(i,F,O,3*C,2*C),v.setRenderTarget(i),v.render(p,pp)}}function XA(o){const e=[],i=[],r=[];let l=o;const c=o-ho+1+OS.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let v=1/h;d>o-ho?v=OS[d-o+ho-1]:d===0&&(v=0),r.push(v);const g=1/(h-2),m=-g,p=1+g,_=[m,m,p,m,p,p,m,m,p,p,m,p],M=6,x=6,A=3,y=2,E=1,N=new Float32Array(A*x*M),U=new Float32Array(y*x*M),C=new Float32Array(E*x*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,G=O>2?0:-1,w=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];N.set(w,A*x*O),U.set(_,y*x*O);const R=[O,O,O,O,O,O];C.set(R,E*x*O)}const F=new xr;F.setAttribute("position",new sa(N,A)),F.setAttribute("uv",new sa(U,y)),F.setAttribute("faceIndex",new sa(C,E)),e.push(F),l>ho&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function BS(o,e,i){const r=new os(o,e,i);return r.texture.mapping=uf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function qA(o,e,i){const r=new Float32Array(is),l=new pt(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ym(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function FS(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ym(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function HS(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Ym(){return`

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
	`}function YA(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const v=h.mapping,g=v===Lp||v===Op,m=v===_o||v===So;if(g||m){let p=e.get(h);const _=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new IS(o)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return g&&M&&M.height>0||m&&M&&l(M)?(i===null&&(i=new IS(o)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",c),p.texture):null}}}return h}function l(h){let v=0;const g=6;for(let m=0;m<g;m++)h[m]!==void 0&&v++;return v===g}function c(h){const v=h.target;v.removeEventListener("dispose",c);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function WA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ZA(o,e,i,r){const l={},c=new WeakMap;function d(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",d),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(p,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function v(p){const _=p.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function g(p){const _=[],M=p.index,x=p.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let U=0,C=N.length;U<C;U+=3){const F=N[U+0],O=N[U+1],z=N[U+2];_.push(F,O,O,z,z,F)}}else if(x!==void 0){const N=x.array;A=x.version;for(let U=0,C=N.length/3-1;U<C;U+=3){const F=U+0,O=U+1,z=U+2;_.push(F,O,O,z,z,F)}}else return;const y=new(z2(_)?V2:G2)(_,1);y.version=A;const E=c.get(p);E&&e.remove(E),c.set(p,y)}function m(p){const _=c.get(p);if(_){const M=p.index;M!==null&&_.version<M.version&&g(p)}else g(p);return c.get(p)}return{get:h,update:v,getWireframeAttribute:m}}function jA(o,e,i){let r;function l(_){r=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function v(_,M){o.drawElements(r,M,c,_*d),i.update(M,r,1)}function g(_,M,x){x!==0&&(o.drawElementsInstanced(r,M,c,_*d,x),i.update(M,r,x))}function m(_,M,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,x);let y=0;for(let E=0;E<x;E++)y+=M[E];i.update(y,r,1)}function p(_,M,x,A){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<_.length;E++)g(_[E]/d,M[E],A[E]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,A,0,x);let E=0;for(let N=0;N<x;N++)E+=M[N]*A[N];i.update(E,r,1)}}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function KA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function QA(o,e,i){const r=new WeakMap,l=new fn;function c(d,h,v){const g=d.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==p){let w=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),x===!0&&(U=2),A===!0&&(U=3);let C=h.attributes.position.count*U,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*F*4*p),z=new I2(O,C,F,p);z.type=Oa,z.needsUpdate=!0;const G=U*4;for(let R=0;R<p;R++){const I=y[R],$=E[R],st=N[R],ot=C*F*4*R;for(let k=0;k<I.count;k++){const P=k*G;M===!0&&(l.fromBufferAttribute(I,k),O[ot+P+0]=l.x,O[ot+P+1]=l.y,O[ot+P+2]=l.z,O[ot+P+3]=0),x===!0&&(l.fromBufferAttribute($,k),O[ot+P+4]=l.x,O[ot+P+5]=l.y,O[ot+P+6]=l.z,O[ot+P+7]=0),A===!0&&(l.fromBufferAttribute(st,k),O[ot+P+8]=l.x,O[ot+P+9]=l.y,O[ot+P+10]=l.z,O[ot+P+11]=st.itemSize===4?l.w:1)}}_={count:p,texture:z,size:new Fe(C,F)},r.set(h,_),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let A=0;A<g.length;A++)M+=g[A];const x=h.morphTargetsRelative?1:1-M;v.getUniforms().setValue(o,"morphTargetBaseInfluence",x),v.getUniforms().setValue(o,"morphTargetInfluences",g)}v.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function JA(o,e,i,r){let l=new WeakMap;function c(v){const g=r.render.frame,m=v.geometry,p=e.get(v,m);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",h)===!1&&v.addEventListener("dispose",h),l.get(v)!==g&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,g))),v.isSkinnedMesh){const _=v.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return p}function d(){l=new WeakMap}function h(v){const g=v.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:d}}const K2=new Pn,GS=new W2(1,1),Q2=new I2,J2=new Mx,$2=new X2,VS=[],kS=[],XS=new Float32Array(16),qS=new Float32Array(9),YS=new Float32Array(4);function Ro(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=VS[l];if(c===void 0&&(c=new Float32Array(l),VS[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ff(o,e){let i=kS[e];i===void 0&&(i=new Int32Array(e),kS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function $A(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function t3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function e3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function n3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function i3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;YS.set(r),o.uniformMatrix2fv(this.addr,!1,YS),xn(i,r)}}function a3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;qS.set(r),o.uniformMatrix3fv(this.addr,!1,qS),xn(i,r)}}function r3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(Mn(i,r))return;XS.set(r),o.uniformMatrix4fv(this.addr,!1,XS),xn(i,r)}}function s3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function o3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function l3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function u3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function c3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function f3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function d3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function h3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function p3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(GS.compareFunction=P2,c=GS):c=K2,i.setTexture2D(e||c,l)}function m3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J2,l)}function g3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$2,l)}function v3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q2,l)}function _3(o){switch(o){case 5126:return $A;case 35664:return t3;case 35665:return e3;case 35666:return n3;case 35674:return i3;case 35675:return a3;case 35676:return r3;case 5124:case 35670:return s3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return u3;case 5125:return c3;case 36294:return f3;case 36295:return d3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return v3}}function S3(o,e){o.uniform1fv(this.addr,e)}function E3(o,e){const i=Ro(e,this.size,2);o.uniform2fv(this.addr,i)}function y3(o,e){const i=Ro(e,this.size,3);o.uniform3fv(this.addr,i)}function M3(o,e){const i=Ro(e,this.size,4);o.uniform4fv(this.addr,i)}function x3(o,e){const i=Ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function T3(o,e){const i=Ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function b3(o,e){const i=Ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function A3(o,e){o.uniform1iv(this.addr,e)}function R3(o,e){o.uniform2iv(this.addr,e)}function C3(o,e){o.uniform3iv(this.addr,e)}function w3(o,e){o.uniform4iv(this.addr,e)}function D3(o,e){o.uniform1uiv(this.addr,e)}function U3(o,e){o.uniform2uiv(this.addr,e)}function N3(o,e){o.uniform3uiv(this.addr,e)}function L3(o,e){o.uniform4uiv(this.addr,e)}function O3(o,e,i){const r=this.cache,l=e.length,c=ff(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||K2,c[d])}function P3(o,e,i){const r=this.cache,l=e.length,c=ff(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||J2,c[d])}function z3(o,e,i){const r=this.cache,l=e.length,c=ff(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||$2,c[d])}function I3(o,e,i){const r=this.cache,l=e.length,c=ff(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Q2,c[d])}function B3(o){switch(o){case 5126:return S3;case 35664:return E3;case 35665:return y3;case 35666:return M3;case 35674:return x3;case 35675:return T3;case 35676:return b3;case 5124:case 35670:return A3;case 35667:case 35671:return R3;case 35668:case 35672:return C3;case 35669:case 35673:return w3;case 5125:return D3;case 36294:return U3;case 36295:return N3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return O3;case 35679:case 36299:case 36307:return P3;case 35680:case 36300:case 36308:case 36293:return z3;case 36289:case 36303:case 36311:case 36292:return I3}}class F3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_3(i.type)}}class H3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=B3(i.type)}}class G3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function WS(o,e){o.seq.push(e),o.map[e.id]=e}function V3(o,e,i){const r=o.name,l=r.length;for(Sp.lastIndex=0;;){const c=Sp.exec(r),d=Sp.lastIndex;let h=c[1];const v=c[2]==="]",g=c[3];if(v&&(h=h|0),g===void 0||g==="["&&d+2===l){WS(i,g===void 0?new F3(h,o,e):new H3(h,o,e));break}else{let p=i.map[h];p===void 0&&(p=new G3(h),WS(i,p)),i=p}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);V3(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],v=r[h.id];v.needsUpdate!==!1&&h.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function ZS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const k3=37297;let X3=0;function q3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const jS=new pe;function Y3(o){Ne._getMatrix(jS,Ne.workingColorSpace,o);const e=`mat3( ${jS.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Kc:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function KS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+q3(o.getShaderSource(e),h)}else return c}function W3(o,e){const i=Y3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Z3(o,e){let i;switch(e){case OM:i="Linear";break;case PM:i="Reinhard";break;case zM:i="Cineon";break;case IM:i="ACESFilmic";break;case FM:i="AgX";break;case HM:i="Neutral";break;case BM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new pt;function j3(){Ne.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function Q3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function J3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function xl(o){return o!==""}function QS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function JS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $3=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(o){return o.replace($3,eR)}const tR=new Map;function eR(o,e){let i=me[e];if(i===void 0){const r=tR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cm(i)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $S(o){return o.replace(nR,iR)}function iR(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t2(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function aR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T2?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ua&&(e="SHADOWMAP_TYPE_VSM"),e}function rR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _o:case So:e="ENVMAP_TYPE_CUBE";break;case uf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===So&&(e="ENVMAP_MODE_REFRACTION"),e}function oR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case b2:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function lR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uR(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const v=aR(i),g=rR(i),m=sR(i),p=oR(i),_=lR(i),M=K3(i),x=Q3(c),A=l.createProgram();let y,E,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(xl).join(`
`),y.length>0&&(y+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(xl).join(`
`),E.length>0&&(E+=`
`)):(y=[t2(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),E=[t2(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",i.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==yr?"#define TONE_MAPPING":"",i.toneMapping!==yr?me.tonemapping_pars_fragment:"",i.toneMapping!==yr?Z3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,W3("linearToOutputTexel",i.outputColorSpace),j3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xl).join(`
`)),d=cm(d),d=QS(d,i),d=JS(d,i),h=cm(h),h=QS(h,i),h=JS(h,i),d=$S(d),h=$S(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",i.glslVersion===pS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===pS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const U=N+y+d,C=N+E+h,F=ZS(l,l.VERTEX_SHADER,U),O=ZS(l,l.FRAGMENT_SHADER,C);l.attachShader(A,F),l.attachShader(A,O),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(I){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(A)||"",st=l.getShaderInfoLog(F)||"",ot=l.getShaderInfoLog(O)||"",k=$.trim(),P=st.trim(),at=ot.trim();let Y=!0,mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,O);else{const Et=KS(l,F,"vertex"),Ot=KS(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+Et+`
`+Ot)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||at==="")&&(mt=!1);mt&&(I.diagnostics={runnable:Y,programLog:k,vertexShader:{log:P,prefix:y},fragmentShader:{log:at,prefix:E}})}l.deleteShader(F),l.deleteShader(O),G=new Wc(l,A),w=J3(l,A)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,k3)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=X3++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=O,this}let cR=0;class fR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dR(e),i.set(e,r)),r}}class dR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function hR(o,e,i,r,l,c,d){const h=new B2,v=new fR,g=new Set,m=[],p=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,R,I,$,st){const ot=$.fog,k=st.geometry,P=w.isMeshStandardMaterial?$.environment:null,at=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),Y=at&&at.mapping===uf?at.image.height:null,mt=x[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ot=Et!==void 0?Et.length:0;let Zt=0;k.morphAttributes.position!==void 0&&(Zt=1),k.morphAttributes.normal!==void 0&&(Zt=2),k.morphAttributes.color!==void 0&&(Zt=3);let re,V,ct,Q;if(mt){const ye=na[mt];re=ye.vertexShader,V=ye.fragmentShader}else re=w.vertexShader,V=w.fragmentShader,v.update(w),ct=v.getVertexShaderID(w),Q=v.getFragmentShaderID(w);const K=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),wt=st.isInstancedMesh===!0,At=st.isBatchedMesh===!0,Mt=!!w.map,kt=!!w.matcap,H=!!at,ze=!!w.aoMap,ee=!!w.lightMap,Jt=!!w.bumpMap,Ut=!!w.normalMap,$t=!!w.displacementMap,zt=!!w.emissiveMap,le=!!w.metalnessMap,be=!!w.roughnessMap,Ce=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,it=w.iridescence>0,gt=w.sheen>0,ft=w.transmission>0,ut=Ce&&!!w.anisotropyMap,Ht=L&&!!w.clearcoatMap,Ct=L&&!!w.clearcoatNormalMap,Gt=L&&!!w.clearcoatRoughnessMap,jt=it&&!!w.iridescenceMap,bt=it&&!!w.iridescenceThicknessMap,xt=gt&&!!w.sheenColorMap,ne=gt&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,It=!!w.specularColorMap,fe=!!w.specularIntensityMap,q=ft&&!!w.transmissionMap,Dt=ft&&!!w.thicknessMap,Lt=!!w.gradientMap,qt=!!w.alphaMap,Tt=w.alphaTest>0,St=!!w.alphaHash,Kt=!!w.extensions;let ce=yr;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Xe={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:re,fragmentShader:V,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:At,batchingColor:At&&st._colorsTexture!==null,instancing:wt,instancingColor:wt&&st.instanceColor!==null,instancingMorph:wt&&st.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:K===null?o.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Eo,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:kt,envMap:H,envMapMode:H&&at.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:ee,bumpMap:Jt,normalMap:Ut,displacementMap:_&&$t,emissiveMap:zt,normalMapObjectSpace:Ut&&w.normalMapType===qM,normalMapTangentSpace:Ut&&w.normalMapType===XM,metalnessMap:le,roughnessMap:be,anisotropy:Ce,anisotropyMap:ut,clearcoat:L,clearcoatMap:Ht,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:it,iridescenceMap:jt,iridescenceThicknessMap:bt,sheen:gt,sheenColorMap:xt,sheenRoughnessMap:ne,specularMap:Qt,specularColorMap:It,specularIntensityMap:fe,transmission:ft,transmissionMap:q,thicknessMap:Dt,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===mo&&w.alphaToCoverage===!1,alphaMap:qt,alphaTest:Tt,alphaHash:St,combine:w.combine,mapUv:Mt&&A(w.map.channel),aoMapUv:ze&&A(w.aoMap.channel),lightMapUv:ee&&A(w.lightMap.channel),bumpMapUv:Jt&&A(w.bumpMap.channel),normalMapUv:Ut&&A(w.normalMap.channel),displacementMapUv:$t&&A(w.displacementMap.channel),emissiveMapUv:zt&&A(w.emissiveMap.channel),metalnessMapUv:le&&A(w.metalnessMap.channel),roughnessMapUv:be&&A(w.roughnessMap.channel),anisotropyMapUv:ut&&A(w.anisotropyMap.channel),clearcoatMapUv:Ht&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(w.sheenRoughnessMap.channel),specularMapUv:Qt&&A(w.specularMap.channel),specularColorMapUv:It&&A(w.specularColorMap.channel),specularIntensityMapUv:fe&&A(w.specularIntensityMap.channel),transmissionMapUv:q&&A(w.transmissionMap.channel),thicknessMapUv:Dt&&A(w.thicknessMap.channel),alphaMapUv:qt&&A(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ut||Ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!k.attributes.uv&&(Mt||qt),fog:!!ot,useFog:w.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:st.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Zt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===Ye,decodeVideoTextureEmissive:zt&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===Ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Na,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Kt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&w.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=g.has(1),Xe.vertexUv2s=g.has(2),Xe.vertexUv3s=g.has(3),g.clear(),Xe}function E(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)R.push(I),R.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(N(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const R=x[w.type];let I;if(R){const $=na[R];I=zx.clone($.uniforms)}else I=w.uniforms;return I}function F(w,R){let I;for(let $=0,st=m.length;$<st;$++){const ot=m[$];if(ot.cacheKey===R){I=ot,++I.usedTimes;break}}return I===void 0&&(I=new uR(o,R,w,c),m.push(I)),I}function O(w){if(--w.usedTimes===0){const R=m.indexOf(w);m[R]=m[m.length-1],m.pop(),w.destroy()}}function z(w){v.remove(w)}function G(){v.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:C,acquireProgram:F,releaseProgram:O,releaseShaderCache:z,programs:m,dispose:G}}function pR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,v){o.get(d)[h]=v}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function mR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function e2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function n2(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(p,_,M,x,A,y){let E=o[e];return E===void 0?(E={id:p.id,object:p,geometry:_,material:M,groupOrder:x,renderOrder:p.renderOrder,z:A,group:y},o[e]=E):(E.id=p.id,E.object=p,E.geometry=_,E.material=M,E.groupOrder=x,E.renderOrder=p.renderOrder,E.z=A,E.group=y),e++,E}function h(p,_,M,x,A,y){const E=d(p,_,M,x,A,y);M.transmission>0?r.push(E):M.transparent===!0?l.push(E):i.push(E)}function v(p,_,M,x,A,y){const E=d(p,_,M,x,A,y);M.transmission>0?r.unshift(E):M.transparent===!0?l.unshift(E):i.unshift(E)}function g(p,_){i.length>1&&i.sort(p||mR),r.length>1&&r.sort(_||e2),l.length>1&&l.sort(_||e2)}function m(){for(let p=e,_=o.length;p<_;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:v,finish:m,sort:g}}function gR(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new n2,o.set(r,[d])):l>=c.length?(d=new n2,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function vR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pt,color:new We};break;case"SpotLight":i={position:new pt,direction:new pt,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pt,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pt,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return o[e.id]=i,i}}}function _R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let SR=0;function ER(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yR(o){const e=new vR,i=_R(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new pt);const l=new pt,c=new yn,d=new yn;function h(g){let m=0,p=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,x=0,A=0,y=0,E=0,N=0,U=0,C=0,F=0,O=0,z=0;g.sort(ER);for(let w=0,R=g.length;w<R;w++){const I=g[w],$=I.color,st=I.intensity,ot=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=$.r*st,p+=$.g*st,_+=$.b*st;else if(I.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(I.sh.coefficients[P],st);z++}else if(I.isDirectionalLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const at=I.shadow,Y=i.get(I);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=k,r.directionalShadowMatrix[M]=I.shadow.matrix,N++}r.directional[M]=P,M++}else if(I.isSpotLight){const P=e.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy($).multiplyScalar(st),P.distance=ot,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,r.spot[A]=P;const at=I.shadow;if(I.map&&(r.spotLightMap[F]=I.map,F++,at.updateMatrices(I),I.castShadow&&O++),r.spotLightMatrix[A]=at.matrix,I.castShadow){const Y=i.get(I);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=k,C++}A++}else if(I.isRectAreaLight){const P=e.get(I);P.color.copy($).multiplyScalar(st),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=P,y++}else if(I.isPointLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const at=I.shadow,Y=i.get(I);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,Y.shadowCameraNear=at.camera.near,Y.shadowCameraFar=at.camera.far,r.pointShadow[x]=Y,r.pointShadowMap[x]=k,r.pointShadowMatrix[x]=I.shadow.matrix,U++}r.point[x]=P,x++}else if(I.isHemisphereLight){const P=e.get(I);P.skyColor.copy(I.color).multiplyScalar(st),P.groundColor.copy(I.groundColor).multiplyScalar(st),r.hemi[E]=P,E++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==M||G.pointLength!==x||G.spotLength!==A||G.rectAreaLength!==y||G.hemiLength!==E||G.numDirectionalShadows!==N||G.numPointShadows!==U||G.numSpotShadows!==C||G.numSpotMaps!==F||G.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=x,r.hemi.length=E,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+F-O,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,G.directionalLength=M,G.pointLength=x,G.spotLength=A,G.rectAreaLength=y,G.hemiLength=E,G.numDirectionalShadows=N,G.numPointShadows=U,G.numSpotShadows=C,G.numSpotMaps=F,G.numLightProbes=z,r.version=SR++)}function v(g,m){let p=0,_=0,M=0,x=0,A=0;const y=m.matrixWorldInverse;for(let E=0,N=g.length;E<N;E++){const U=g[E];if(U.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),p++}else if(U.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),x++}else if(U.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:h,setupView:v,state:r}}function i2(o){const e=new yR(o),i=[],r=[];function l(m){g.camera=m,i.length=0,r.length=0}function c(m){i.push(m)}function d(m){r.push(m)}function h(){e.setup(i)}function v(m){e.setupView(i,m)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:h,setupLightsView:v,pushLight:c,pushShadow:d}}function MR(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new i2(o),e.set(l,[h])):c>=d.length?(h=new i2(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const xR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TR=`uniform sampler2D shadow_pass;
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
}`;function bR(o,e,i){let r=new Y2;const l=new Fe,c=new Fe,d=new fn,h=new Wx({depthPacking:kM}),v=new Zx,g={},m=i.maxTextureSize,p={[Mr]:ei,[ei]:Mr,[Na]:Na},_=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:xR,fragmentShader:TR}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const x=new xr;x.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Vi(x,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T2;let E=this.type;this.render=function(O,z,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Er),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const st=E!==Ua&&this.type===Ua,ot=E===Ua&&this.type!==Ua;for(let k=0,P=O.length;k<P;k++){const at=O[k],Y=at.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const mt=Y.getFrameExtents();if(l.multiply(mt),c.copy(Y.mapSize),(l.x>m||l.y>m)&&(l.x>m&&(c.x=Math.floor(m/mt.x),l.x=c.x*mt.x,Y.mapSize.x=c.x),l.y>m&&(c.y=Math.floor(m/mt.y),l.y=c.y*mt.y,Y.mapSize.y=c.y)),Y.map===null||st===!0||ot===!0){const Ot=this.type!==Ua?{minFilter:pi,magFilter:pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new os(l.x,l.y,Ot),Y.map.texture.name=at.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let Ot=0;Ot<Et;Ot++){const Zt=Y.getViewport(Ot);d.set(c.x*Zt.x,c.y*Zt.y,c.x*Zt.z,c.y*Zt.w),$.viewport(d),Y.updateMatrices(at,Ot),r=Y.getFrustum(),C(z,G,Y.camera,at,this.type)}Y.isPointLightShadow!==!0&&this.type===Ua&&N(Y,G),Y.needsUpdate=!1}E=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,I)};function N(O,z){const G=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new os(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(z,null,G,_,A,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(z,null,G,M,A,null)}function U(O,z,G,w){let R=null;const I=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)R=I;else if(R=G.isPointLight===!0?v:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const $=R.uuid,st=z.uuid;let ot=g[$];ot===void 0&&(ot={},g[$]=ot);let k=ot[st];k===void 0&&(k=R.clone(),ot[st]=k,z.addEventListener("dispose",F)),R=k}if(R.visible=z.visible,R.wireframe=z.wireframe,w===Ua?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:p[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=o.properties.get(R);$.light=G}return R}function C(O,z,G,w,R){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Ua)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const st=e.update(O),ot=O.material;if(Array.isArray(ot)){const k=st.groups;for(let P=0,at=k.length;P<at;P++){const Y=k[P],mt=ot[Y.materialIndex];if(mt&&mt.visible){const Et=U(O,mt,w,R);O.onBeforeShadow(o,O,z,G,st,Et,Y),o.renderBufferDirect(G,null,st,Et,O,Y),O.onAfterShadow(o,O,z,G,st,Et,Y)}}}else if(ot.visible){const k=U(O,ot,w,R);O.onBeforeShadow(o,O,z,G,st,k,null),o.renderBufferDirect(G,null,st,k,O,null),O.onAfterShadow(o,O,z,G,st,k,null)}}const $=O.children;for(let st=0,ot=$.length;st<ot;st++)C($[st],z,G,w,R)}function F(O){O.target.removeEventListener("dispose",F);for(const G in g){const w=g[G],R=O.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const AR={[Ap]:Rp,[Cp]:Up,[wp]:Np,[vo]:Dp,[Rp]:Ap,[Up]:Cp,[Np]:wp,[Dp]:vo};function RR(o,e){function i(){let q=!1;const Dt=new fn;let Lt=null;const qt=new fn(0,0,0,0);return{setMask:function(Tt){Lt!==Tt&&!q&&(o.colorMask(Tt,Tt,Tt,Tt),Lt=Tt)},setLocked:function(Tt){q=Tt},setClear:function(Tt,St,Kt,ce,Xe){Xe===!0&&(Tt*=ce,St*=ce,Kt*=ce),Dt.set(Tt,St,Kt,ce),qt.equals(Dt)===!1&&(o.clearColor(Tt,St,Kt,ce),qt.copy(Dt))},reset:function(){q=!1,Lt=null,qt.set(-1,0,0,0)}}}function r(){let q=!1,Dt=!1,Lt=null,qt=null,Tt=null;return{setReversed:function(St){if(Dt!==St){const Kt=e.get("EXT_clip_control");St?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Dt=St;const ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return Dt},setTest:function(St){St?K(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(St){Lt!==St&&!q&&(o.depthMask(St),Lt=St)},setFunc:function(St){if(Dt&&(St=AR[St]),qt!==St){switch(St){case Ap:o.depthFunc(o.NEVER);break;case Rp:o.depthFunc(o.ALWAYS);break;case Cp:o.depthFunc(o.LESS);break;case vo:o.depthFunc(o.LEQUAL);break;case wp:o.depthFunc(o.EQUAL);break;case Dp:o.depthFunc(o.GEQUAL);break;case Up:o.depthFunc(o.GREATER);break;case Np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}qt=St}},setLocked:function(St){q=St},setClear:function(St){Tt!==St&&(Dt&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){q=!1,Lt=null,qt=null,Tt=null,Dt=!1}}}function l(){let q=!1,Dt=null,Lt=null,qt=null,Tt=null,St=null,Kt=null,ce=null,Xe=null;return{setTest:function(ye){q||(ye?K(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!q&&(o.stencilMask(ye),Dt=ye)},setFunc:function(ye,an,_n){(Lt!==ye||qt!==an||Tt!==_n)&&(o.stencilFunc(ye,an,_n),Lt=ye,qt=an,Tt=_n)},setOp:function(ye,an,_n){(St!==ye||Kt!==an||ce!==_n)&&(o.stencilOp(ye,an,_n),St=ye,Kt=an,ce=_n)},setLocked:function(ye){q=ye},setClear:function(ye){Xe!==ye&&(o.clearStencil(ye),Xe=ye)},reset:function(){q=!1,Dt=null,Lt=null,qt=null,Tt=null,St=null,Kt=null,ce=null,Xe=null}}}const c=new i,d=new r,h=new l,v=new WeakMap,g=new WeakMap;let m={},p={},_=new WeakMap,M=[],x=null,A=!1,y=null,E=null,N=null,U=null,C=null,F=null,O=null,z=new We(0,0,0),G=0,w=!1,R=null,I=null,$=null,st=null,ot=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,at=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=at>=2);let mt=null,Et={};const Ot=o.getParameter(o.SCISSOR_BOX),Zt=o.getParameter(o.VIEWPORT),re=new fn().fromArray(Ot),V=new fn().fromArray(Zt);function ct(q,Dt,Lt,qt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(q,St),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<Lt;Kt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,qt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Dt+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const Q={};Q[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),K(o.DEPTH_TEST),d.setFunc(vo),Jt(!1),Ut(lS),K(o.CULL_FACE),ze(Er);function K(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function yt(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function wt(q,Dt){return p[q]!==Dt?(o.bindFramebuffer(q,Dt),p[q]=Dt,q===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Dt),q===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function At(q,Dt){let Lt=M,qt=!1;if(q){Lt=_.get(Dt),Lt===void 0&&(Lt=[],_.set(Dt,Lt));const Tt=q.textures;if(Lt.length!==Tt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Kt=Tt.length;St<Kt;St++)Lt[St]=o.COLOR_ATTACHMENT0+St;Lt.length=Tt.length,qt=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,qt=!0);qt&&o.drawBuffers(Lt)}function Mt(q){return x!==q?(o.useProgram(q),x=q,!0):!1}const kt={[ns]:o.FUNC_ADD,[mM]:o.FUNC_SUBTRACT,[gM]:o.FUNC_REVERSE_SUBTRACT};kt[vM]=o.MIN,kt[_M]=o.MAX;const H={[SM]:o.ZERO,[EM]:o.ONE,[yM]:o.SRC_COLOR,[Tp]:o.SRC_ALPHA,[RM]:o.SRC_ALPHA_SATURATE,[bM]:o.DST_COLOR,[xM]:o.DST_ALPHA,[MM]:o.ONE_MINUS_SRC_COLOR,[bp]:o.ONE_MINUS_SRC_ALPHA,[AM]:o.ONE_MINUS_DST_COLOR,[TM]:o.ONE_MINUS_DST_ALPHA,[CM]:o.CONSTANT_COLOR,[wM]:o.ONE_MINUS_CONSTANT_COLOR,[DM]:o.CONSTANT_ALPHA,[UM]:o.ONE_MINUS_CONSTANT_ALPHA};function ze(q,Dt,Lt,qt,Tt,St,Kt,ce,Xe,ye){if(q===Er){A===!0&&(yt(o.BLEND),A=!1);return}if(A===!1&&(K(o.BLEND),A=!0),q!==pM){if(q!==y||ye!==w){if((E!==ns||C!==ns)&&(o.blendEquation(o.FUNC_ADD),E=ns,C=ns),ye)switch(q){case mo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uS:o.blendFunc(o.ONE,o.ONE);break;case cS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case mo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case cS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,U=null,F=null,O=null,z.set(0,0,0),G=0,y=q,w=ye}return}Tt=Tt||Dt,St=St||Lt,Kt=Kt||qt,(Dt!==E||Tt!==C)&&(o.blendEquationSeparate(kt[Dt],kt[Tt]),E=Dt,C=Tt),(Lt!==N||qt!==U||St!==F||Kt!==O)&&(o.blendFuncSeparate(H[Lt],H[qt],H[St],H[Kt]),N=Lt,U=qt,F=St,O=Kt),(ce.equals(z)===!1||Xe!==G)&&(o.blendColor(ce.r,ce.g,ce.b,Xe),z.copy(ce),G=Xe),y=q,w=!1}function ee(q,Dt){q.side===Na?yt(o.CULL_FACE):K(o.CULL_FACE);let Lt=q.side===ei;Dt&&(Lt=!Lt),Jt(Lt),q.blending===mo&&q.transparent===!1?ze(Er):ze(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const qt=q.stencilWrite;h.setTest(qt),qt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function Ut(q){q!==fM?(K(o.CULL_FACE),q!==I&&(q===lS?o.cullFace(o.BACK):q===dM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),I=q}function $t(q){q!==$&&(P&&o.lineWidth(q),$=q)}function zt(q,Dt,Lt){q?(K(o.POLYGON_OFFSET_FILL),(st!==Dt||ot!==Lt)&&(o.polygonOffset(Dt,Lt),st=Dt,ot=Lt)):yt(o.POLYGON_OFFSET_FILL)}function le(q){q?K(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function be(q){q===void 0&&(q=o.TEXTURE0+k-1),mt!==q&&(o.activeTexture(q),mt=q)}function Ce(q,Dt,Lt){Lt===void 0&&(mt===null?Lt=o.TEXTURE0+k-1:Lt=mt);let qt=Et[Lt];qt===void 0&&(qt={type:void 0,texture:void 0},Et[Lt]=qt),(qt.type!==q||qt.texture!==Dt)&&(mt!==Lt&&(o.activeTexture(Lt),mt=Lt),o.bindTexture(q,Dt||Q[q]),qt.type=q,qt.texture=Dt)}function L(){const q=Et[mt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(q){re.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),re.copy(q))}function ne(q){V.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),V.copy(q))}function Qt(q,Dt){let Lt=g.get(Dt);Lt===void 0&&(Lt=new WeakMap,g.set(Dt,Lt));let qt=Lt.get(q);qt===void 0&&(qt=o.getUniformBlockIndex(Dt,q.name),Lt.set(q,qt))}function It(q,Dt){const qt=g.get(Dt).get(q);v.get(Dt)!==qt&&(o.uniformBlockBinding(Dt,qt,q.__bindingPointIndex),v.set(Dt,qt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},mt=null,Et={},p={},_=new WeakMap,M=[],x=null,A=!1,y=null,E=null,N=null,U=null,C=null,F=null,O=null,z=new We(0,0,0),G=0,w=!1,R=null,I=null,$=null,st=null,ot=null,re.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:K,disable:yt,bindFramebuffer:wt,drawBuffers:At,useProgram:Mt,setBlending:ze,setMaterial:ee,setFlipSided:Jt,setCullFace:Ut,setLineWidth:$t,setPolygonOffset:zt,setScissorTest:le,activeTexture:be,bindTexture:Ce,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:it,texImage2D:jt,texImage3D:bt,updateUBOMapping:Qt,uniformBlockBinding:It,texStorage2D:Ct,texStorage3D:Gt,texSubImage2D:gt,texSubImage3D:ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ht,scissor:xt,viewport:ne,reset:fe}}function CR(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Fe,m=new WeakMap;let p;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return M?new OffscreenCanvas(L,b):Il("canvas")}function A(L,b,it){let gt=1;const ft=Ce(L);if((ft.width>it||ft.height>it)&&(gt=it/Math.max(ft.width,ft.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(gt*ft.width),Ht=Math.floor(gt*ft.height);p===void 0&&(p=x(ut,Ht));const Ct=b?x(ut,Ht):p;return Ct.width=ut,Ct.height=Ht,Ct.getContext("2d").drawImage(L,0,0,ut,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+ut+"x"+Ht+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),L;return L}function y(L){return L.generateMipmaps}function E(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,b,it,gt,ft=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=b;if(b===o.RED&&(it===o.FLOAT&&(ut=o.R32F),it===o.HALF_FLOAT&&(ut=o.R16F),it===o.UNSIGNED_BYTE&&(ut=o.R8)),b===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(ut=o.R8UI),it===o.UNSIGNED_SHORT&&(ut=o.R16UI),it===o.UNSIGNED_INT&&(ut=o.R32UI),it===o.BYTE&&(ut=o.R8I),it===o.SHORT&&(ut=o.R16I),it===o.INT&&(ut=o.R32I)),b===o.RG&&(it===o.FLOAT&&(ut=o.RG32F),it===o.HALF_FLOAT&&(ut=o.RG16F),it===o.UNSIGNED_BYTE&&(ut=o.RG8)),b===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(ut=o.RG8UI),it===o.UNSIGNED_SHORT&&(ut=o.RG16UI),it===o.UNSIGNED_INT&&(ut=o.RG32UI),it===o.BYTE&&(ut=o.RG8I),it===o.SHORT&&(ut=o.RG16I),it===o.INT&&(ut=o.RG32I)),b===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),it===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),it===o.UNSIGNED_INT&&(ut=o.RGB32UI),it===o.BYTE&&(ut=o.RGB8I),it===o.SHORT&&(ut=o.RGB16I),it===o.INT&&(ut=o.RGB32I)),b===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),it===o.UNSIGNED_INT&&(ut=o.RGBA32UI),it===o.BYTE&&(ut=o.RGBA8I),it===o.SHORT&&(ut=o.RGBA16I),it===o.INT&&(ut=o.RGBA32I)),b===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),b===o.RGBA){const Ht=ft?Kc:Ne.getTransfer(gt);it===o.FLOAT&&(ut=o.RGBA32F),it===o.HALF_FLOAT&&(ut=o.RGBA16F),it===o.UNSIGNED_BYTE&&(ut=Ht===Ye?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function C(L,b){let it;return L?b===null||b===ss||b===Ll?it=o.DEPTH24_STENCIL8:b===Oa?it=o.DEPTH32F_STENCIL8:b===Nl&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===Ll?it=o.DEPTH_COMPONENT24:b===Oa?it=o.DEPTH_COMPONENT32F:b===Nl&&(it=o.DEPTH_COMPONENT16),it}function F(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==Gi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function O(L){const b=L.target;b.removeEventListener("dispose",O),G(b),b.isVideoTexture&&m.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),R(b)}function G(L){const b=r.get(L);if(b.__webglInit===void 0)return;const it=L.source,gt=_.get(it);if(gt){const ft=gt[b.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&w(L),Object.keys(gt).length===0&&_.delete(it)}r.remove(L)}function w(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const it=L.source,gt=_.get(it);delete gt[b.__cacheKey],d.memory.textures--}function R(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let ft=0;ft<b.__webglFramebuffer[gt].length;ft++)o.deleteFramebuffer(b.__webglFramebuffer[gt][ft]);else o.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)o.deleteFramebuffer(b.__webglFramebuffer[gt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=L.textures;for(let gt=0,ft=it.length;gt<ft;gt++){const ut=r.get(it[gt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(it[gt])}r.remove(L)}let I=0;function $(){I=0}function st(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ot(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function k(L,b){const it=r.get(L);if(L.isVideoTexture&&le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&it.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(it,L,b);return}}else L.isExternalTexture&&(it.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+b)}function P(L,b){const it=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){Q(it,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+b)}function at(L,b){const it=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){Q(it,L,b);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+b)}function Y(L,b){const it=r.get(L);if(L.version>0&&it.__version!==L.version){K(it,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+b)}const mt={[Ul]:o.REPEAT,[rs]:o.CLAMP_TO_EDGE,[Pp]:o.MIRRORED_REPEAT},Et={[pi]:o.NEAREST,[GM]:o.NEAREST_MIPMAP_NEAREST,[vc]:o.NEAREST_MIPMAP_LINEAR,[Gi]:o.LINEAR,[kh]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},Ot={[YM]:o.NEVER,[JM]:o.ALWAYS,[WM]:o.LESS,[P2]:o.LEQUAL,[ZM]:o.EQUAL,[QM]:o.GEQUAL,[jM]:o.GREATER,[KM]:o.NOTEQUAL};function Zt(L,b){if(b.type===Oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gi||b.magFilter===kh||b.magFilter===vc||b.magFilter===Sr||b.minFilter===Gi||b.minFilter===kh||b.minFilter===vc||b.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,mt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,mt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,mt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pi||b.minFilter!==vc&&b.minFilter!==Sr||b.type===Oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function re(L,b){let it=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",O));const gt=b.source;let ft=_.get(gt);ft===void 0&&(ft={},_.set(gt,ft));const ut=ot(b);if(ut!==L.__cacheKey){ft[ut]===void 0&&(ft[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),ft[ut].usedTimes++;const Ht=ft[L.__cacheKey];Ht!==void 0&&(ft[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(b)),L.__cacheKey=ut,L.__webglTexture=ft[ut].texture}return it}function V(L,b,it){return Math.floor(Math.floor(L/it)/b)}function ct(L,b,it,gt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,it,gt,b.data);else{ut.sort((bt,xt)=>bt.start-xt.start);let Ht=0;for(let bt=1;bt<ut.length;bt++){const xt=ut[Ht],ne=ut[bt],Qt=xt.start+xt.count,It=V(ne.start,b.width,4),fe=V(xt.start,b.width,4);ne.start<=Qt+1&&It===fe&&V(ne.start+ne.count-1,b.width,4)===It?xt.count=Math.max(xt.count,ne.start+ne.count-xt.start):(++Ht,ut[Ht]=ne)}ut.length=Ht+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,xt=ut.length;bt<xt;bt++){const ne=ut[bt],Qt=Math.floor(ne.start/4),It=Math.ceil(ne.count/4),fe=Qt%b.width,q=Math.floor(Qt/b.width),Dt=It,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,fe,q,Dt,Lt,it,gt,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function Q(L,b,it){let gt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=o.TEXTURE_3D);const ft=re(L,b),ut=b.source;i.bindTexture(gt,L.__webglTexture,o.TEXTURE0+it);const Ht=r.get(ut);if(ut.version!==Ht.__version||ft===!0){i.activeTexture(o.TEXTURE0+it);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Gt=b.colorSpace===_r?null:Ne.getPrimaries(b.colorSpace),jt=b.colorSpace===_r||Ct===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let bt=A(b.image,!1,l.maxTextureSize);bt=be(b,bt);const xt=c.convert(b.format,b.colorSpace),ne=c.convert(b.type);let Qt=U(b.internalFormat,xt,ne,b.colorSpace,b.isVideoTexture);Zt(gt,b);let It;const fe=b.mipmaps,q=b.isVideoTexture!==!0,Dt=Ht.__version===void 0||ft===!0,Lt=ut.dataReady,qt=F(b,bt);if(b.isDepthTexture)Qt=C(b.format===Pl,b.type),Dt&&(q?i.texStorage2D(o.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,xt,ne,null));else if(b.isDataTexture)if(fe.length>0){q&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,xt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,xt,ne,It.data);b.generateMipmaps=!1}else q?(Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,bt.width,bt.height),Lt&&ct(b,bt,xt,ne)):i.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,xt,ne,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Qt,fe[0].width,fe[0].height,bt.depth);for(let Tt=0,St=fe.length;Tt<St;Tt++)if(It=fe[Tt],b.format!==wi)if(xt!==null)if(q){if(Lt)if(b.layerUpdates.size>0){const Kt=LS(It.width,It.height,b.format,b.type);for(const ce of b.layerUpdates){const Xe=It.data.subarray(ce*Kt/It.data.BYTES_PER_ELEMENT,(ce+1)*Kt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ce,It.width,It.height,1,xt,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,bt.depth,xt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,It.width,It.height,bt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,bt.depth,xt,ne,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,It.width,It.height,bt.depth,0,xt,ne,It.data)}else{q&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],b.format!==wi?xt!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,xt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,xt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,xt,ne,It.data)}else if(b.isDataArrayTexture)if(q){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Qt,bt.width,bt.height,bt.depth),Lt)if(b.layerUpdates.size>0){const Tt=LS(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const Kt=bt.data.subarray(St*Tt/bt.data.BYTES_PER_ELEMENT,(St+1)*Tt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,xt,ne,Kt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,xt,ne,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,xt,ne,bt.data);else if(b.isData3DTexture)q?(Dt&&i.texStorage3D(o.TEXTURE_3D,qt,Qt,bt.width,bt.height,bt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,xt,ne,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,xt,ne,bt.data);else if(b.isFramebufferTexture){if(Dt)if(q)i.texStorage2D(o.TEXTURE_2D,qt,Qt,bt.width,bt.height);else{let Tt=bt.width,St=bt.height;for(let Kt=0;Kt<qt;Kt++)i.texImage2D(o.TEXTURE_2D,Kt,Qt,Tt,St,0,xt,ne,null),Tt>>=1,St>>=1}}else if(fe.length>0){if(q&&Dt){const Tt=Ce(fe[0]);i.texStorage2D(o.TEXTURE_2D,qt,Qt,Tt.width,Tt.height)}for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,xt,ne,It):i.texImage2D(o.TEXTURE_2D,Tt,Qt,xt,ne,It);b.generateMipmaps=!1}else if(q){if(Dt){const Tt=Ce(bt);i.texStorage2D(o.TEXTURE_2D,qt,Qt,Tt.width,Tt.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,xt,ne,bt)}else i.texImage2D(o.TEXTURE_2D,0,Qt,xt,ne,bt);y(b)&&E(gt),Ht.__version=ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function K(L,b,it){if(b.image.length!==6)return;const gt=re(L,b),ft=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+it);const ut=r.get(ft);if(ft.version!==ut.__version||gt===!0){i.activeTexture(o.TEXTURE0+it);const Ht=Ne.getPrimaries(Ne.workingColorSpace),Ct=b.colorSpace===_r?null:Ne.getPrimaries(b.colorSpace),Gt=b.colorSpace===_r||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let St=0;St<6;St++)!jt&&!bt?xt[St]=A(b.image[St],!0,l.maxCubemapSize):xt[St]=bt?b.image[St].image:b.image[St],xt[St]=be(b,xt[St]);const ne=xt[0],Qt=c.convert(b.format,b.colorSpace),It=c.convert(b.type),fe=U(b.internalFormat,Qt,It,b.colorSpace),q=b.isVideoTexture!==!0,Dt=ut.__version===void 0||gt===!0,Lt=ft.dataReady;let qt=F(b,ne);Zt(o.TEXTURE_CUBE_MAP,b);let Tt;if(jt){q&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,ne.width,ne.height);for(let St=0;St<6;St++){Tt=xt[St].mipmaps;for(let Kt=0;Kt<Tt.length;Kt++){const ce=Tt[Kt];b.format!==wi?Qt!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,0,0,ce.width,ce.height,Qt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,0,0,ce.width,ce.height,Qt,It,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt,fe,ce.width,ce.height,0,Qt,It,ce.data)}}}else{if(Tt=b.mipmaps,q&&Dt){Tt.length>0&&qt++;const St=Ce(xt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(bt){q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,xt[St].width,xt[St].height,Qt,It,xt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,xt[St].width,xt[St].height,0,Qt,It,xt[St].data);for(let Kt=0;Kt<Tt.length;Kt++){const Xe=Tt[Kt].image[St].image;q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,0,0,Xe.width,Xe.height,Qt,It,Xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,fe,Xe.width,Xe.height,0,Qt,It,Xe.data)}}else{q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Qt,It,xt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Qt,It,xt[St]);for(let Kt=0;Kt<Tt.length;Kt++){const ce=Tt[Kt];q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,0,0,Qt,It,ce.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Kt+1,fe,Qt,It,ce.image[St])}}}y(b)&&E(o.TEXTURE_CUBE_MAP),ut.__version=ft.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function yt(L,b,it,gt,ft,ut){const Ht=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Gt=U(it.internalFormat,Ht,Ct,it.colorSpace),jt=r.get(b),bt=r.get(it);if(bt.__renderTarget=b,!jt.__hasExternalTextures){const xt=Math.max(1,b.width>>ut),ne=Math.max(1,b.height>>ut);ft===o.TEXTURE_3D||ft===o.TEXTURE_2D_ARRAY?i.texImage3D(ft,ut,Gt,xt,ne,b.depth,0,Ht,Ct,null):i.texImage2D(ft,ut,Gt,xt,ne,0,Ht,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,ft,bt.__webglTexture,0,$t(b)):(ft===o.TEXTURE_2D||ft>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,ft,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(L,b,it){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const gt=b.depthTexture,ft=gt&&gt.isDepthTexture?gt.type:null,ut=C(b.stencilBuffer,ft),Ht=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=$t(b);zt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ut,b.width,b.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ut,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ut,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const gt=b.textures;for(let ft=0;ft<gt.length;ft++){const ut=gt[ft],Ht=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),Gt=U(ut.internalFormat,Ht,Ct,ut.colorSpace),jt=$t(b);it&&zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Gt,b.width,b.height):zt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Gt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const ft=gt.__webglTexture,ut=$t(b);if(b.depthTexture.format===Ol)zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0);else if(b.depthTexture.format===Pl)zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function Mt(L){const b=r.get(L),it=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const ft=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",ft)};gt.addEventListener("dispose",ft),b.__depthDisposeCallback=ft}b.__boundDepthTexture=gt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const gt=L.texture.mipmaps;gt&&gt.length>0?At(b.__webglFramebuffer[0],L):At(b.__webglFramebuffer,L)}else if(it){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=o.createRenderbuffer(),wt(b.__webglDepthbuffer[gt],L,!1);else{const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,ut)}}else{const gt=L.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),wt(b.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(L,b,it){const gt=r.get(L);b!==void 0&&yt(gt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Mt(L)}function H(L){const b=L.texture,it=r.get(L),gt=r.get(b);L.addEventListener("dispose",z);const ft=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Ht=ft.length>1;if(Ht||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=b.version,d.memory.textures++),ut){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)it.__webglFramebuffer[Ct][Gt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Ct=0,Gt=ft.length;Ct<Gt;Ct++){const jt=r.get(ft[Ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&zt(L)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ft.length;Ct++){const Gt=ft[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const jt=c.convert(Gt.format,Gt.colorSpace),bt=c.convert(Gt.type),xt=U(Gt.internalFormat,jt,bt,Gt.colorSpace,L.isXRRenderTarget===!0),ne=$t(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,xt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(it.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),Zt(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)yt(it.__webglFramebuffer[Ct][Gt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Gt);else yt(it.__webglFramebuffer[Ct],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ct=0,Gt=ft.length;Ct<Gt;Ct++){const jt=ft[Ct],bt=r.get(jt);let xt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,bt.__webglTexture),Zt(xt,jt),yt(it.__webglFramebuffer,L,jt,o.COLOR_ATTACHMENT0+Ct,xt,0),y(jt)&&E(xt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,gt.__webglTexture),Zt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)yt(it.__webglFramebuffer[Gt],L,b,o.COLOR_ATTACHMENT0,Ct,Gt);else yt(it.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ct,0);y(b)&&E(Ct),i.unbindTexture()}L.depthBuffer&&Mt(L)}function ze(L){const b=L.textures;for(let it=0,gt=b.length;it<gt;it++){const ft=b[it];if(y(ft)){const ut=N(L),Ht=r.get(ft).__webglTexture;i.bindTexture(ut,Ht),E(ut),i.unbindTexture()}}}const ee=[],Jt=[];function Ut(L){if(L.samples>0){if(zt(L)===!1){const b=L.textures,it=L.width,gt=L.height;let ft=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(L),Ct=b.length>1;if(Ct)for(let jt=0;jt<b.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Gt=L.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ft|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ft|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[jt]);const bt=r.get(b[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,it,gt,0,0,it,gt,ft,o.NEAREST),v===!0&&(ee.length=0,Jt.length=0,ee.push(o.COLOR_ATTACHMENT0+jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ee.push(ut),Jt.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let jt=0;jt<b.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[jt]);const bt=r.get(b[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&v){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function $t(L){return Math.min(l.maxSamples,L.samples)}function zt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(L){const b=d.render.frame;m.get(L)!==b&&(m.set(L,b),L.update())}function be(L,b){const it=L.colorSpace,gt=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||it!==Eo&&it!==_r&&(Ne.getTransfer(it)===Ye?(gt!==wi||ft!==za)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=st,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=P,this.setTexture3D=at,this.setTextureCube=Y,this.rebindTextures=kt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=zt}function wR(o,e){function i(r,l=_r){let c;const d=Ne.getTransfer(l);if(r===za)return o.UNSIGNED_BYTE;if(r===Pm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===zm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===w2)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===D2)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===R2)return o.BYTE;if(r===C2)return o.SHORT;if(r===Nl)return o.UNSIGNED_SHORT;if(r===Om)return o.INT;if(r===ss)return o.UNSIGNED_INT;if(r===Oa)return o.FLOAT;if(r===kl)return o.HALF_FLOAT;if(r===U2)return o.ALPHA;if(r===N2)return o.RGB;if(r===wi)return o.RGBA;if(r===Ol)return o.DEPTH_COMPONENT;if(r===Pl)return o.DEPTH_STENCIL;if(r===L2)return o.RED;if(r===Im)return o.RED_INTEGER;if(r===O2)return o.RG;if(r===Bm)return o.RG_INTEGER;if(r===Fm)return o.RGBA_INTEGER;if(r===kc||r===Xc||r===qc||r===Yc)if(d===Ye)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zp||r===Ip||r===Bp||r===Fp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ip)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hp||r===Gp||r===Vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Hp||r===Gp)return d===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Vp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kp||r===Xp||r===qp||r===Yp||r===Wp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jp)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$p)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tm)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===em)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nm)return d===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===im||r===am||r===rm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===im)return d===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===am)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sm||r===om||r===lm||r===um)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===sm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===om)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===um)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Z2(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new la({vertexShader:DR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new Wl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LR extends bo{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",v=1,g=null,m=null,p=null,_=null,M=null,x=null;const A=typeof XRWebGLBinding<"u",y=new NR,E={},N=i.getContextAttributes();let U=null,C=null;const F=[],O=[],z=new Fe;let G=null;const w=new Ri;w.viewport=new fn;const R=new Ri;R.viewport=new fn;const I=[w,R],$=new tT;let st=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=F[Q];return K===void 0&&(K=new fp,F[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=F[Q];return K===void 0&&(K=new fp,F[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=F[Q];return K===void 0&&(K=new fp,F[Q]=K),K.getHandSpace()};function k(Q){const K=O.indexOf(Q.inputSource);if(K===-1)return;const yt=F[K];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,g||d),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",at);for(let Q=0;Q<F.length;Q++){const K=O[Q];K!==null&&(O[Q]=null,F[Q].disconnect(K))}st=null,ot=null,y.reset();for(const Q in E)delete E[Q];e.setRenderTarget(U),M=null,_=null,p=null,l=null,C=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",P),l.addEventListener("inputsourceschange",at),N.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,At=null;N.depth&&(At=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=N.stencil?Pl:Ol,wt=N.stencil?Ll:ss);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};p=this.getBinding(),_=p.createProjectionLayer(Mt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new os(_.textureWidth,_.textureHeight,{format:wi,type:za,depthTexture:new W2(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new os(M.framebufferWidth,M.framebufferHeight,{format:wi,type:za,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(v),g=null,d=await l.requestReferenceSpace(h),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(Q){for(let K=0;K<Q.removed.length;K++){const yt=Q.removed[K],wt=O.indexOf(yt);wt>=0&&(O[wt]=null,F[wt].disconnect(yt))}for(let K=0;K<Q.added.length;K++){const yt=Q.added[K];let wt=O.indexOf(yt);if(wt===-1){for(let Mt=0;Mt<F.length;Mt++)if(Mt>=O.length){O.push(yt),wt=Mt;break}else if(O[Mt]===null){O[Mt]=yt,wt=Mt;break}if(wt===-1)break}const At=F[wt];At&&At.connect(yt)}}const Y=new pt,mt=new pt;function Et(Q,K,yt){Y.setFromMatrixPosition(K.matrixWorld),mt.setFromMatrixPosition(yt.matrixWorld);const wt=Y.distanceTo(mt),At=K.projectionMatrix.elements,Mt=yt.projectionMatrix.elements,kt=At[14]/(At[10]-1),H=At[14]/(At[10]+1),ze=(At[9]+1)/At[5],ee=(At[9]-1)/At[5],Jt=(At[8]-1)/At[0],Ut=(Mt[8]+1)/Mt[0],$t=kt*Jt,zt=kt*Ut,le=wt/(-Jt+Ut),be=le*-Jt;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(be),Q.translateZ(le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ce=kt+le,L=H+le,b=$t-be,it=zt+(wt-be),gt=ze*H/L*Ce,ft=ee*H/L*Ce;Q.projectionMatrix.makePerspective(b,it,gt,ft,Ce,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ot(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let K=Q.near,yt=Q.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),$.near=R.near=w.near=K,$.far=R.far=w.far=yt,(st!==$.near||ot!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),st=$.near,ot=$.far),$.layers.mask=Q.layers.mask|6,w.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const wt=Q.parent,At=$.cameras;Ot($,wt);for(let Mt=0;Mt<At.length;Mt++)Ot(At[Mt],wt);At.length===2?Et($,w,R):$.projectionMatrix.copy(w.projectionMatrix),Zt(Q,$,wt)};function Zt(Q,K,yt){yt===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&M===null))return v},this.setFoveation=function(Q){v=Q,_!==null&&(_.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(Q){return E[Q]};let re=null;function V(Q,K){if(m=K.getViewerPose(g||d),x=K,m!==null){const yt=m.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let wt=!1;yt.length!==$.cameras.length&&($.cameras.length=0,wt=!0);for(let H=0;H<yt.length;H++){const ze=yt[H];let ee=null;if(M!==null)ee=M.getViewport(ze);else{const Ut=p.getViewSubImage(_,ze);ee=Ut.viewport,H===0&&(e.setRenderTargetTextures(C,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(C))}let Jt=I[H];Jt===void 0&&(Jt=new Ri,Jt.layers.enable(H),Jt.viewport=new fn,I[H]=Jt),Jt.matrix.fromArray(ze.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ze.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ee.x,ee.y,ee.width,ee.height),H===0&&($.matrix.copy(Jt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),wt===!0&&$.cameras.push(Jt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=r.getBinding();const H=p.getDepthInformation(yt[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(At&&At.includes("camera-access")&&A){e.state.unbindTexture(),p=r.getBinding();for(let H=0;H<yt.length;H++){const ze=yt[H].camera;if(ze){let ee=E[ze];ee||(ee=new Z2,E[ze]=ee);const Jt=p.getCameraImage(ze);ee.sourceTexture=Jt}}}}for(let yt=0;yt<F.length;yt++){const wt=O[yt],At=F[yt];wt!==null&&At!==void 0&&At.update(wt,K,g||d)}re&&re(Q,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),x=null}const ct=new j2;ct.setAnimationLoop(V),this.setAnimationLoop=function(Q){re=Q},this.dispose=function(){}}}const $r=new Ia,OR=new yn;function PR(o,e){function i(y,E){y.matrixAutoUpdate===!0&&y.updateMatrix(),E.value.copy(y.matrix)}function r(y,E){E.color.getRGB(y.fogColor.value,k2(o)),E.isFog?(y.fogNear.value=E.near,y.fogFar.value=E.far):E.isFogExp2&&(y.fogDensity.value=E.density)}function l(y,E,N,U,C){E.isMeshBasicMaterial||E.isMeshLambertMaterial?c(y,E):E.isMeshToonMaterial?(c(y,E),p(y,E)):E.isMeshPhongMaterial?(c(y,E),m(y,E)):E.isMeshStandardMaterial?(c(y,E),_(y,E),E.isMeshPhysicalMaterial&&M(y,E,C)):E.isMeshMatcapMaterial?(c(y,E),x(y,E)):E.isMeshDepthMaterial?c(y,E):E.isMeshDistanceMaterial?(c(y,E),A(y,E)):E.isMeshNormalMaterial?c(y,E):E.isLineBasicMaterial?(d(y,E),E.isLineDashedMaterial&&h(y,E)):E.isPointsMaterial?v(y,E,N,U):E.isSpriteMaterial?g(y,E):E.isShadowMaterial?(y.color.value.copy(E.color),y.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function c(y,E){y.opacity.value=E.opacity,E.color&&y.diffuse.value.copy(E.color),E.emissive&&y.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.bumpMap&&(y.bumpMap.value=E.bumpMap,i(E.bumpMap,y.bumpMapTransform),y.bumpScale.value=E.bumpScale,E.side===ei&&(y.bumpScale.value*=-1)),E.normalMap&&(y.normalMap.value=E.normalMap,i(E.normalMap,y.normalMapTransform),y.normalScale.value.copy(E.normalScale),E.side===ei&&y.normalScale.value.negate()),E.displacementMap&&(y.displacementMap.value=E.displacementMap,i(E.displacementMap,y.displacementMapTransform),y.displacementScale.value=E.displacementScale,y.displacementBias.value=E.displacementBias),E.emissiveMap&&(y.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,y.emissiveMapTransform)),E.specularMap&&(y.specularMap.value=E.specularMap,i(E.specularMap,y.specularMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest);const N=e.get(E),U=N.envMap,C=N.envMapRotation;U&&(y.envMap.value=U,$r.copy(C),$r.x*=-1,$r.y*=-1,$r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(OR.makeRotationFromEuler($r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=E.reflectivity,y.ior.value=E.ior,y.refractionRatio.value=E.refractionRatio),E.lightMap&&(y.lightMap.value=E.lightMap,y.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,y.lightMapTransform)),E.aoMap&&(y.aoMap.value=E.aoMap,y.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,y.aoMapTransform))}function d(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform))}function h(y,E){y.dashSize.value=E.dashSize,y.totalSize.value=E.dashSize+E.gapSize,y.scale.value=E.scale}function v(y,E,N,U){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.size.value=E.size*N,y.scale.value=U*.5,E.map&&(y.map.value=E.map,i(E.map,y.uvTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function g(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.rotation.value=E.rotation,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function m(y,E){y.specular.value.copy(E.specular),y.shininess.value=Math.max(E.shininess,1e-4)}function p(y,E){E.gradientMap&&(y.gradientMap.value=E.gradientMap)}function _(y,E){y.metalness.value=E.metalness,E.metalnessMap&&(y.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,y.metalnessMapTransform)),y.roughness.value=E.roughness,E.roughnessMap&&(y.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,y.roughnessMapTransform)),E.envMap&&(y.envMapIntensity.value=E.envMapIntensity)}function M(y,E,N){y.ior.value=E.ior,E.sheen>0&&(y.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),y.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(y.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,y.sheenColorMapTransform)),E.sheenRoughnessMap&&(y.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,y.sheenRoughnessMapTransform))),E.clearcoat>0&&(y.clearcoat.value=E.clearcoat,y.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(y.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,y.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(y.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===ei&&y.clearcoatNormalScale.value.negate())),E.dispersion>0&&(y.dispersion.value=E.dispersion),E.iridescence>0&&(y.iridescence.value=E.iridescence,y.iridescenceIOR.value=E.iridescenceIOR,y.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(y.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,y.iridescenceMapTransform)),E.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),E.transmission>0&&(y.transmission.value=E.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),E.transmissionMap&&(y.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,y.transmissionMapTransform)),y.thickness.value=E.thickness,E.thicknessMap&&(y.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=E.attenuationDistance,y.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(y.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(y.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=E.specularIntensity,y.specularColor.value.copy(E.specularColor),E.specularColorMap&&(y.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,y.specularColorMapTransform)),E.specularIntensityMap&&(y.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,E){E.matcap&&(y.matcap.value=E.matcap)}function A(y,E){const N=e.get(E).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function zR(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(N,U){const C=U.program;r.uniformBlockBinding(N,C)}function g(N,U){let C=l[N.id];C===void 0&&(x(N),C=m(N),l[N.id]=C,N.addEventListener("dispose",y));const F=U.program;r.updateUBOMapping(N,F);const O=e.render.frame;c[N.id]!==O&&(_(N),c[N.id]=O)}function m(N){const U=p();N.__bindingPointIndex=U;const C=o.createBuffer(),F=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,F,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,C),C}function p(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=l[N.id],C=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let O=0,z=C.length;O<z;O++){const G=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,R=G.length;w<R;w++){const I=G[w];if(M(I,O,w,F)===!0){const $=I.__offset,st=Array.isArray(I.value)?I.value:[I.value];let ot=0;for(let k=0;k<st.length;k++){const P=st[k],at=A(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,$+ot,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,ot),ot+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,U,C,F){const O=N.value,z=U+"_"+C;if(F[z]===void 0)return typeof O=="number"||typeof O=="boolean"?F[z]=O:F[z]=O.clone(),!0;{const G=F[z];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return F[z]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function x(N){const U=N.uniforms;let C=0;const F=16;for(let z=0,G=U.length;z<G;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let R=0,I=w.length;R<I;R++){const $=w[R],st=Array.isArray($.value)?$.value:[$.value];for(let ot=0,k=st.length;ot<k;ot++){const P=st[ot],at=A(P),Y=C%F,mt=Y%at.boundary,Et=Y+mt;C+=mt,Et!==0&&F-Et<at.storage&&(C+=F-Et),$.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=at.storage}}}const O=C%F;return O>0&&(C+=F-O),N.__size=C,N.__cache={},this}function A(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function E(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:v,update:g,dispose:E}}class tE{constructor(e={}){const{canvas:i=mx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const x=new Uint32Array(4),A=new Int32Array(4);let y=null,E=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=ti;let O=0,z=0,G=null,w=-1,R=null;const I=new fn,$=new fn;let st=null;const ot=new We(0);let k=0,P=i.width,at=i.height,Y=1,mt=null,Et=null;const Ot=new fn(0,0,P,at),Zt=new fn(0,0,P,at);let re=!1;const V=new Y2;let ct=!1,Q=!1;const K=new yn,yt=new pt,wt=new fn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function kt(){return G===null?Y:1}let H=r;function ze(D,J){return i.getContext(D,J)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lm}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),H===null){const J="webgl2";if(H=ze(J,D),H===null)throw ze(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ee,Jt,Ut,$t,zt,le,be,Ce,L,b,it,gt,ft,ut,Ht,Ct,Gt,jt,bt,xt,ne,Qt,It,fe;function q(){ee=new WA(H),ee.init(),Qt=new wR(H,ee),Jt=new HA(H,ee,e,Qt),Ut=new RR(H,ee),Jt.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),$t=new KA(H),zt=new pR,le=new CR(H,ee,Ut,zt,Jt,Qt,$t),be=new VA(C),Ce=new YA(C),L=new nT(H),It=new BA(H,L),b=new ZA(H,L,$t,It),it=new JA(H,b,L,$t),bt=new QA(H,Jt,le),Ct=new GA(zt),gt=new hR(C,be,Ce,ee,Jt,It,Ct),ft=new PR(C,zt),ut=new gR,Ht=new MR(ee),jt=new IA(C,be,Ce,Ut,it,M,v),Gt=new bR(C,it,Jt),fe=new zR(H,$t,Jt,Ut),xt=new FA(H,ee,$t),ne=new jA(H,ee,$t),$t.programs=gt.programs,C.capabilities=Jt,C.extensions=ee,C.properties=zt,C.renderLists=ut,C.shadowMap=Gt,C.state=Ut,C.info=$t}q();const Dt=new LR(C,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(P,at,!1))},this.getSize=function(D){return D.set(P,at)},this.setSize=function(D,J,dt=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=D,at=J,i.width=Math.floor(D*Y),i.height=Math.floor(J*Y),dt===!0&&(i.style.width=D+"px",i.style.height=J+"px"),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(P*Y,at*Y).floor()},this.setDrawingBufferSize=function(D,J,dt){P=D,at=J,Y=dt,i.width=Math.floor(D*dt),i.height=Math.floor(J*dt),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(Ot)},this.setViewport=function(D,J,dt,ht){D.isVector4?Ot.set(D.x,D.y,D.z,D.w):Ot.set(D,J,dt,ht),Ut.viewport(I.copy(Ot).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(Zt)},this.setScissor=function(D,J,dt,ht){D.isVector4?Zt.set(D.x,D.y,D.z,D.w):Zt.set(D,J,dt,ht),Ut.scissor($.copy(Zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(D){Ut.setScissorTest(re=D)},this.setOpaqueSort=function(D){mt=D},this.setTransparentSort=function(D){Et=D},this.getClearColor=function(D){return D.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(D=!0,J=!0,dt=!0){let ht=0;if(D){let tt=!1;if(G!==null){const Rt=G.texture.format;tt=Rt===Fm||Rt===Bm||Rt===Im}if(tt){const Rt=G.texture.type,Bt=Rt===za||Rt===ss||Rt===Nl||Rt===Ll||Rt===Pm||Rt===zm,Vt=jt.getClearColor(),Nt=jt.getClearAlpha(),Yt=Vt.r,se=Vt.g,ie=Vt.b;Bt?(x[0]=Yt,x[1]=se,x[2]=ie,x[3]=Nt,H.clearBufferuiv(H.COLOR,0,x)):(A[0]=Yt,A[1]=se,A[2]=ie,A[3]=Nt,H.clearBufferiv(H.COLOR,0,A))}else ht|=H.COLOR_BUFFER_BIT}J&&(ht|=H.DEPTH_BUFFER_BIT),dt&&(ht|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),jt.dispose(),ut.dispose(),Ht.dispose(),zt.dispose(),be.dispose(),Ce.dispose(),it.dispose(),It.dispose(),fe.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",_n),Dt.removeEventListener("sessionend",zn),ua.stop()};function Lt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=$t.autoReset,J=Gt.enabled,dt=Gt.autoUpdate,ht=Gt.needsUpdate,tt=Gt.type;q(),$t.autoReset=D,Gt.enabled=J,Gt.autoUpdate=dt,Gt.needsUpdate=ht,Gt.type=tt}function Tt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function St(D){const J=D.target;J.removeEventListener("dispose",St),Kt(J)}function Kt(D){ce(D),zt.remove(D)}function ce(D){const J=zt.get(D).programs;J!==void 0&&(J.forEach(function(dt){gt.releaseProgram(dt)}),D.isShaderMaterial&&gt.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,dt,ht,tt,Rt){J===null&&(J=At);const Bt=tt.isMesh&&tt.matrixWorld.determinant()<0,Vt=jl(D,J,dt,ht,tt);Ut.setMaterial(ht,Bt);let Nt=dt.index,Yt=1;if(ht.wireframe===!0){if(Nt=b.getWireframeAttribute(dt),Nt===void 0)return;Yt=2}const se=dt.drawRange,ie=dt.attributes.position;let _e=se.start*Yt,Ie=(se.start+se.count)*Yt;Rt!==null&&(_e=Math.max(_e,Rt.start*Yt),Ie=Math.min(Ie,(Rt.start+Rt.count)*Yt)),Nt!==null?(_e=Math.max(_e,0),Ie=Math.min(Ie,Nt.count)):ie!=null&&(_e=Math.max(_e,0),Ie=Math.min(Ie,ie.count));const $e=Ie-_e;if($e<0||$e===1/0)return;It.setup(tt,ht,Vt,dt,Nt);let Le,we=xt;if(Nt!==null&&(Le=L.get(Nt),we=ne,we.setIndex(Le)),tt.isMesh)ht.wireframe===!0?(Ut.setLineWidth(ht.wireframeLinewidth*kt()),we.setMode(H.LINES)):we.setMode(H.TRIANGLES);else if(tt.isLine){let ae=ht.linewidth;ae===void 0&&(ae=1),Ut.setLineWidth(ae*kt()),tt.isLineSegments?we.setMode(H.LINES):tt.isLineLoop?we.setMode(H.LINE_LOOP):we.setMode(H.LINE_STRIP)}else tt.isPoints?we.setMode(H.POINTS):tt.isSprite&&we.setMode(H.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Bl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))we.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ae=tt._multiDrawStarts,Oe=tt._multiDrawCounts,ge=tt._multiDrawCount,Sn=Nt?L.get(Nt).bytesPerElement:1,ii=zt.get(ht).currentProgram.getUniforms();for(let De=0;De<ge;De++)ii.setValue(H,"_gl_DrawID",De),we.render(ae[De]/Sn,Oe[De])}else if(tt.isInstancedMesh)we.renderInstances(_e,$e,tt.count);else if(dt.isInstancedBufferGeometry){const ae=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Oe=Math.min(dt.instanceCount,ae);we.renderInstances(_e,$e,Oe)}else we.render(_e,$e)};function Xe(D,J,dt){D.transparent===!0&&D.side===Na&&D.forceSinglePass===!1?(D.side=ei,D.needsUpdate=!0,gi(D,J,dt),D.side=Mr,D.needsUpdate=!0,gi(D,J,dt),D.side=Na):gi(D,J,dt)}this.compile=function(D,J,dt=null){dt===null&&(dt=D),E=Ht.get(dt),E.init(J),U.push(E),dt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),D!==dt&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),E.setupLights();const ht=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){const Vt=Rt[Bt];Xe(Vt,dt,tt),ht.add(Vt)}else Xe(Rt,dt,tt),ht.add(Rt)}),E=U.pop(),ht},this.compileAsync=function(D,J,dt=null){const ht=this.compile(D,J,dt);return new Promise(tt=>{function Rt(){if(ht.forEach(function(Bt){zt.get(Bt).currentProgram.isReady()&&ht.delete(Bt)}),ht.size===0){tt(D);return}setTimeout(Rt,10)}ee.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ye=null;function an(D){ye&&ye(D)}function _n(){ua.stop()}function zn(){ua.start()}const ua=new j2;ua.setAnimationLoop(an),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(D){ye=D,Dt.setAnimationLoop(D),D===null?ua.stop():ua.start()},Dt.addEventListener("sessionstart",_n),Dt.addEventListener("sessionend",zn),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(J),J=Dt.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,J,G),E=Ht.get(D,U.length),E.init(J),U.push(E),K.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V.setFromProjectionMatrix(K,ra,J.reversedDepth),Q=this.localClippingEnabled,ct=Ct.init(this.clippingPlanes,Q),y=ut.get(D,N.length),y.init(),N.push(y),Dt.enabled===!0&&Dt.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&Co(Rt,J,-1/0,C.sortObjects)}Co(D,J,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(mt,Et),Mt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Mt&&jt.addToRenderList(y,D),this.info.render.frame++,ct===!0&&Ct.beginShadows();const dt=E.state.shadowsArray;Gt.render(dt,D,J),ct===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=y.opaque,tt=y.transmissive;if(E.setupLights(),J.isArrayCamera){const Rt=J.cameras;if(tt.length>0)for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++){const Nt=Rt[Bt];Tr(ht,tt,D,Nt)}Mt&&jt.render(D);for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++){const Nt=Rt[Bt];Zl(y,D,Nt,Nt.viewport)}}else tt.length>0&&Tr(ht,tt,D,J),Mt&&jt.render(D),Zl(y,D,J);G!==null&&z===0&&(le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G)),D.isScene===!0&&D.onAfterRender(C,D,J),It.resetDefaultState(),w=-1,R=null,U.pop(),U.length>0?(E=U[U.length-1],ct===!0&&Ct.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Co(D,J,dt,ht){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)dt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||V.intersectsSprite(D)){ht&&wt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(K);const Bt=it.update(D),Vt=D.material;Vt.visible&&y.push(D,Bt,Vt,dt,wt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||V.intersectsObject(D))){const Bt=it.update(D),Vt=D.material;if(ht&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),wt.copy(D.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),wt.copy(Bt.boundingSphere.center)),wt.applyMatrix4(D.matrixWorld).applyMatrix4(K)),Array.isArray(Vt)){const Nt=Bt.groups;for(let Yt=0,se=Nt.length;Yt<se;Yt++){const ie=Nt[Yt],_e=Vt[ie.materialIndex];_e&&_e.visible&&y.push(D,Bt,_e,dt,wt.z,ie)}}else Vt.visible&&y.push(D,Bt,Vt,dt,wt.z,null)}}const Rt=D.children;for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++)Co(Rt[Bt],J,dt,ht)}function Zl(D,J,dt,ht){const tt=D.opaque,Rt=D.transmissive,Bt=D.transparent;E.setupLightsView(dt),ct===!0&&Ct.setGlobalState(C.clippingPlanes,dt),ht&&Ut.viewport(I.copy(ht)),tt.length>0&&ca(tt,J,dt),Rt.length>0&&ca(Rt,J,dt),Bt.length>0&&ca(Bt,J,dt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Tr(D,J,dt,ht){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[ht.id]===void 0&&(E.state.transmissionRenderTarget[ht.id]=new os(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?kl:za,minFilter:Sr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Rt=E.state.transmissionRenderTarget[ht.id],Bt=ht.viewport||I;Rt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Vt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(Rt),C.getClearColor(ot),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear(),Mt&&jt.render(dt);const se=C.toneMapping;C.toneMapping=yr;const ie=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),E.setupLightsView(ht),ct===!0&&Ct.setGlobalState(C.clippingPlanes,ht),ca(D,dt,ht),le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ie=0,$e=J.length;Ie<$e;Ie++){const Le=J[Ie],we=Le.object,ae=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===Na&&we.layers.test(ht.layers)){const Sn=Oe.side;Oe.side=ei,Oe.needsUpdate=!0,br(we,dt,ht,ae,Oe,ge),Oe.side=Sn,Oe.needsUpdate=!0,_e=!0}}_e===!0&&(le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt))}C.setRenderTarget(Vt,Nt,Yt),C.setClearColor(ot,k),ie!==void 0&&(ht.viewport=ie),C.toneMapping=se}function ca(D,J,dt){const ht=J.isScene===!0?J.overrideMaterial:null;for(let tt=0,Rt=D.length;tt<Rt;tt++){const Bt=D[tt],Vt=Bt.object,Nt=Bt.geometry,Yt=Bt.group;let se=Bt.material;se.allowOverride===!0&&ht!==null&&(se=ht),Vt.layers.test(dt.layers)&&br(Vt,J,dt,Nt,se,Yt)}}function br(D,J,dt,ht,tt,Rt){D.onBeforeRender(C,J,dt,ht,tt,Rt),D.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(C,J,dt,ht,D,Rt),tt.transparent===!0&&tt.side===Na&&tt.forceSinglePass===!1?(tt.side=ei,tt.needsUpdate=!0,C.renderBufferDirect(dt,J,ht,tt,D,Rt),tt.side=Mr,tt.needsUpdate=!0,C.renderBufferDirect(dt,J,ht,tt,D,Rt),tt.side=Na):C.renderBufferDirect(dt,J,ht,tt,D,Rt),D.onAfterRender(C,J,dt,ht,tt,Rt)}function gi(D,J,dt){J.isScene!==!0&&(J=At);const ht=zt.get(D),tt=E.state.lights,Rt=E.state.shadowsArray,Bt=tt.state.version,Vt=gt.getParameters(D,tt.state,Rt,J,dt),Nt=gt.getProgramCacheKey(Vt);let Yt=ht.programs;ht.environment=D.isMeshStandardMaterial?J.environment:null,ht.fog=J.fog,ht.envMap=(D.isMeshStandardMaterial?Ce:be).get(D.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,Yt===void 0&&(D.addEventListener("dispose",St),Yt=new Map,ht.programs=Yt);let se=Yt.get(Nt);if(se!==void 0){if(ht.currentProgram===se&&ht.lightsStateVersion===Bt)return Ba(D,Vt),se}else Vt.uniforms=gt.getUniforms(D),D.onBeforeCompile(Vt,C),se=gt.acquireProgram(Vt,Nt),Yt.set(Nt,se),ht.uniforms=Vt.uniforms;const ie=ht.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ie.clippingPlanes=Ct.uniform),Ba(D,Vt),ht.needsLights=Kl(D),ht.lightsStateVersion=Bt,ht.needsLights&&(ie.ambientLightColor.value=tt.state.ambient,ie.lightProbe.value=tt.state.probe,ie.directionalLights.value=tt.state.directional,ie.directionalLightShadows.value=tt.state.directionalShadow,ie.spotLights.value=tt.state.spot,ie.spotLightShadows.value=tt.state.spotShadow,ie.rectAreaLights.value=tt.state.rectArea,ie.ltc_1.value=tt.state.rectAreaLTC1,ie.ltc_2.value=tt.state.rectAreaLTC2,ie.pointLights.value=tt.state.point,ie.pointLightShadows.value=tt.state.pointShadow,ie.hemisphereLights.value=tt.state.hemi,ie.directionalShadowMap.value=tt.state.directionalShadowMap,ie.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ie.spotShadowMap.value=tt.state.spotShadowMap,ie.spotLightMatrix.value=tt.state.spotLightMatrix,ie.spotLightMap.value=tt.state.spotLightMap,ie.pointShadowMap.value=tt.state.pointShadowMap,ie.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=se,ht.uniformsList=null,se}function Ar(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=Wc.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function Ba(D,J){const dt=zt.get(D);dt.outputColorSpace=J.outputColorSpace,dt.batching=J.batching,dt.batchingColor=J.batchingColor,dt.instancing=J.instancing,dt.instancingColor=J.instancingColor,dt.instancingMorph=J.instancingMorph,dt.skinning=J.skinning,dt.morphTargets=J.morphTargets,dt.morphNormals=J.morphNormals,dt.morphColors=J.morphColors,dt.morphTargetsCount=J.morphTargetsCount,dt.numClippingPlanes=J.numClippingPlanes,dt.numIntersection=J.numClipIntersection,dt.vertexAlphas=J.vertexAlphas,dt.vertexTangents=J.vertexTangents,dt.toneMapping=J.toneMapping}function jl(D,J,dt,ht,tt){J.isScene!==!0&&(J=At),le.resetTextureUnits();const Rt=J.fog,Bt=ht.isMeshStandardMaterial?J.environment:null,Vt=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Eo,Nt=(ht.isMeshStandardMaterial?Ce:be).get(ht.envMap||Bt),Yt=ht.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,se=!!dt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ie=!!dt.morphAttributes.position,_e=!!dt.morphAttributes.normal,Ie=!!dt.morphAttributes.color;let $e=yr;ht.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($e=C.toneMapping);const Le=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,we=Le!==void 0?Le.length:0,ae=zt.get(ht),Oe=E.state.lights;if(ct===!0&&(Q===!0||D!==R)){const on=D===R&&ht.id===w;Ct.setState(ht,D,on)}let ge=!1;ht.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Oe.state.version||ae.outputColorSpace!==Vt||tt.isBatchedMesh&&ae.batching===!1||!tt.isBatchedMesh&&ae.batching===!0||tt.isBatchedMesh&&ae.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ae.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ae.instancing===!1||!tt.isInstancedMesh&&ae.instancing===!0||tt.isSkinnedMesh&&ae.skinning===!1||!tt.isSkinnedMesh&&ae.skinning===!0||tt.isInstancedMesh&&ae.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ae.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ae.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ae.instancingMorph===!1&&tt.morphTexture!==null||ae.envMap!==Nt||ht.fog===!0&&ae.fog!==Rt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ct.numPlanes||ae.numIntersection!==Ct.numIntersection)||ae.vertexAlphas!==Yt||ae.vertexTangents!==se||ae.morphTargets!==ie||ae.morphNormals!==_e||ae.morphColors!==Ie||ae.toneMapping!==$e||ae.morphTargetsCount!==we)&&(ge=!0):(ge=!0,ae.__version=ht.version);let Sn=ae.currentProgram;ge===!0&&(Sn=gi(ht,J,tt));let ii=!1,De=!1,Fa=!1;const je=Sn.getUniforms(),Vn=ae.uniforms;if(Ut.useProgram(Sn.program)&&(ii=!0,De=!0,Fa=!0),ht.id!==w&&(w=ht.id,De=!0),ii||R!==D){Ut.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),je.setValue(H,"projectionMatrix",D.projectionMatrix),je.setValue(H,"viewMatrix",D.matrixWorldInverse);const In=je.map.cameraPosition;In!==void 0&&In.setValue(H,yt.setFromMatrixPosition(D.matrixWorld)),Jt.logarithmicDepthBuffer&&je.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&je.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,De=!0,Fa=!0)}if(tt.isSkinnedMesh){je.setOptional(H,tt,"bindMatrix"),je.setOptional(H,tt,"bindMatrixInverse");const on=tt.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),je.setValue(H,"boneTexture",on.boneTexture,le))}tt.isBatchedMesh&&(je.setOptional(H,tt,"batchingTexture"),je.setValue(H,"batchingTexture",tt._matricesTexture,le),je.setOptional(H,tt,"batchingIdTexture"),je.setValue(H,"batchingIdTexture",tt._indirectTexture,le),je.setOptional(H,tt,"batchingColorTexture"),tt._colorsTexture!==null&&je.setValue(H,"batchingColorTexture",tt._colorsTexture,le));const dn=dt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&bt.update(tt,dt,Sn),(De||ae.receiveShadow!==tt.receiveShadow)&&(ae.receiveShadow=tt.receiveShadow,je.setValue(H,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Vn.envMap.value=Nt,Vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&J.environment!==null&&(Vn.envMapIntensity.value=J.environmentIntensity),De&&(je.setValue(H,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&df(Vn,Fa),Rt&&ht.fog===!0&&ft.refreshFogUniforms(Vn,Rt),ft.refreshMaterialUniforms(Vn,ht,Y,at,E.state.transmissionRenderTarget[D.id]),Wc.upload(H,Ar(ae),Vn,le)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Wc.upload(H,Ar(ae),Vn,le),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&je.setValue(H,"center",tt.center),je.setValue(H,"modelViewMatrix",tt.modelViewMatrix),je.setValue(H,"normalMatrix",tt.normalMatrix),je.setValue(H,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const on=ht.uniformsGroups;for(let In=0,cs=on.length;In<cs;In++){const Xi=on[In];fe.update(Xi,Sn),fe.bind(Xi,Sn)}}return Sn}function df(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function Kl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,J,dt){const ht=zt.get(D);ht.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),zt.get(D.texture).__webglTexture=J,zt.get(D.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:dt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,J){const dt=zt.get(D);dt.__webglFramebuffer=J,dt.__useDefaultFramebuffer=J===void 0};const wo=H.createFramebuffer();this.setRenderTarget=function(D,J=0,dt=0){G=D,O=J,z=dt;let ht=!0,tt=null,Rt=!1,Bt=!1;if(D){const Nt=zt.get(D);if(Nt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(H.FRAMEBUFFER,null),ht=!1;else if(Nt.__webglFramebuffer===void 0)le.setupRenderTarget(D);else if(Nt.__hasExternalTextures)le.rebindTextures(D,zt.get(D.texture).__webglTexture,zt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ie=D.depthTexture;if(Nt.__boundDepthTexture!==ie){if(ie!==null&&zt.has(ie)&&(D.width!==ie.image.width||D.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(D)}}const Yt=D.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const se=zt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(se[J])?tt=se[J][dt]:tt=se[J],Rt=!0):D.samples>0&&le.useMultisampledRTT(D)===!1?tt=zt.get(D).__webglMultisampledFramebuffer:Array.isArray(se)?tt=se[dt]:tt=se,I.copy(D.viewport),$.copy(D.scissor),st=D.scissorTest}else I.copy(Ot).multiplyScalar(Y).floor(),$.copy(Zt).multiplyScalar(Y).floor(),st=re;if(dt!==0&&(tt=wo),Ut.bindFramebuffer(H.FRAMEBUFFER,tt)&&ht&&Ut.drawBuffers(D,tt),Ut.viewport(I),Ut.scissor($),Ut.setScissorTest(st),Rt){const Nt=zt.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Nt.__webglTexture,dt)}else if(Bt){const Nt=J;for(let Yt=0;Yt<D.textures.length;Yt++){const se=zt.get(D.textures[Yt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Yt,se.__webglTexture,dt,Nt)}}else if(D!==null&&dt!==0){const Nt=zt.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,dt)}w=-1},this.readRenderTargetPixels=function(D,J,dt,ht,tt,Rt,Bt,Vt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=zt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt]),Nt){Ut.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Yt=D.textures[Vt],se=Yt.format,ie=Yt.type;if(!Jt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-ht&&dt>=0&&dt<=D.height-tt&&(D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(J,dt,ht,tt,Qt.convert(se),Qt.convert(ie),Rt))}finally{const Yt=G!==null?zt.get(G).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(D,J,dt,ht,tt,Rt,Bt,Vt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=zt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt]),Nt)if(J>=0&&J<=D.width-ht&&dt>=0&&dt<=D.height-tt){Ut.bindFramebuffer(H.FRAMEBUFFER,Nt);const Yt=D.textures[Vt],se=Yt.format,ie=Yt.type;if(!Jt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(J,dt,ht,tt,Qt.convert(se),Qt.convert(ie),0);const Ie=G!==null?zt.get(G).__webglFramebuffer:null;Ut.bindFramebuffer(H.FRAMEBUFFER,Ie);const $e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await gx(H,$e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.deleteBuffer(_e),H.deleteSync($e),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,J=null,dt=0){const ht=Math.pow(2,-dt),tt=Math.floor(D.image.width*ht),Rt=Math.floor(D.image.height*ht),Bt=J!==null?J.x:0,Vt=J!==null?J.y:0;le.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,dt,0,0,Bt,Vt,tt,Rt),Ut.unbindTexture()};const Rr=H.createFramebuffer(),hf=H.createFramebuffer();this.copyTextureToTexture=function(D,J,dt=null,ht=null,tt=0,Rt=null){Rt===null&&(tt!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=tt,tt=0):Rt=0);let Bt,Vt,Nt,Yt,se,ie,_e,Ie,$e;const Le=D.isCompressedTexture?D.mipmaps[Rt]:D.image;if(dt!==null)Bt=dt.max.x-dt.min.x,Vt=dt.max.y-dt.min.y,Nt=dt.isBox3?dt.max.z-dt.min.z:1,Yt=dt.min.x,se=dt.min.y,ie=dt.isBox3?dt.min.z:0;else{const dn=Math.pow(2,-tt);Bt=Math.floor(Le.width*dn),Vt=Math.floor(Le.height*dn),D.isDataArrayTexture?Nt=Le.depth:D.isData3DTexture?Nt=Math.floor(Le.depth*dn):Nt=1,Yt=0,se=0,ie=0}ht!==null?(_e=ht.x,Ie=ht.y,$e=ht.z):(_e=0,Ie=0,$e=0);const we=Qt.convert(J.format),ae=Qt.convert(J.type);let Oe;J.isData3DTexture?(le.setTexture3D(J,0),Oe=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(le.setTexture2DArray(J,0),Oe=H.TEXTURE_2D_ARRAY):(le.setTexture2D(J,0),Oe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ii=H.getParameter(H.UNPACK_SKIP_PIXELS),De=H.getParameter(H.UNPACK_SKIP_ROWS),Fa=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Yt),H.pixelStorei(H.UNPACK_SKIP_ROWS,se),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ie);const je=D.isDataArrayTexture||D.isData3DTexture,Vn=J.isDataArrayTexture||J.isData3DTexture;if(D.isDepthTexture){const dn=zt.get(D),on=zt.get(J),In=zt.get(dn.__renderTarget),cs=zt.get(on.__renderTarget);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,In.__webglFramebuffer),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Xi=0;Xi<Nt;Xi++)je&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(D).__webglTexture,tt,ie+Xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(J).__webglTexture,Rt,$e+Xi)),H.blitFramebuffer(Yt,se,Bt,Vt,_e,Ie,Bt,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||zt.has(D)){const dn=zt.get(D),on=zt.get(J);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,Rr),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,hf);for(let In=0;In<Nt;In++)je?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dn.__webglTexture,tt,ie+In):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dn.__webglTexture,tt),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,Rt,$e+In):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,Rt),tt!==0?H.blitFramebuffer(Yt,se,Bt,Vt,_e,Ie,Bt,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(Oe,Rt,_e,Ie,$e+In,Yt,se,Bt,Vt):H.copyTexSubImage2D(Oe,Rt,_e,Ie,Yt,se,Bt,Vt);Ut.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Oe,Rt,_e,Ie,$e,Bt,Vt,Nt,we,ae,Le.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,Rt,_e,Ie,$e,Bt,Vt,Nt,we,Le.data):H.texSubImage3D(Oe,Rt,_e,Ie,$e,Bt,Vt,Nt,we,ae,Le):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,_e,Ie,Bt,Vt,we,ae,Le.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,_e,Ie,Le.width,Le.height,we,Le.data):H.texSubImage2D(H.TEXTURE_2D,Rt,_e,Ie,Bt,Vt,we,ae,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ii),H.pixelStorei(H.UNPACK_SKIP_ROWS,De),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fa),Rt===0&&J.generateMipmaps&&H.generateMipmap(Oe),Ut.unbindTexture()},this.initRenderTarget=function(D){zt.get(D).__webglFramebuffer===void 0&&le.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?le.setTextureCube(D,0):D.isData3DTexture?le.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?le.setTexture2DArray(D,0):le.setTexture2D(D,0),Ut.unbindTexture()},this.resetState=function(){O=0,z=0,G=null,Ut.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}class ki{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let r=0;for(let l=0;l<this._n&&l<32;l++){const c=i[l],d=e+c,h=Math.abs(e)<Math.abs(c)?e-(d-c):c-(d-e);h&&(i[r++]=h),e=d}return i[r]=e,this._n=r+1,this}valueOf(){const e=this._partials;let i=this._n,r,l,c,d=0;if(i>0){for(d=e[--i];i>0&&(r=d,l=e[--i],d=r+l,c=l-(d-r),!c););i>0&&(c<0&&e[i-1]<0||c>0&&e[i-1]>0)&&(l=c*2,r=d+l,l==r-d&&(d=r))}return d}}function*IR(o){for(const e of o)yield*e}function eE(o){return Array.from(IR(o))}var Je=1e-6,Re=Math.PI,Di=Re/2,Jc=Re/4,ni=Re*2,Da=180/Re,On=Re/180,sn=Math.abs,BR=Math.atan,Mo=Math.atan2,en=Math.cos,nn=Math.sin,FR=Math.sign||function(o){return o>0?1:o<0?-1:0},us=Math.sqrt;function HR(o){return o>1?0:o<-1?Re:Math.acos(o)}function Fl(o){return o>1?Di:o<-1?-Di:Math.asin(o)}function Gn(){}function $c(o,e){o&&r2.hasOwnProperty(o.type)&&r2[o.type](o,e)}var a2={Feature:function(o,e){$c(o.geometry,e)},FeatureCollection:function(o,e){for(var i=o.features,r=-1,l=i.length;++r<l;)$c(i[r].geometry,e)}},r2={Sphere:function(o,e){e.sphere()},Point:function(o,e){o=o.coordinates,e.point(o[0],o[1],o[2])},MultiPoint:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)o=i[r],e.point(o[0],o[1],o[2])},LineString:function(o,e){fm(o.coordinates,e,0)},MultiLineString:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)fm(i[r],e,0)},Polygon:function(o,e){s2(o.coordinates,e)},MultiPolygon:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)s2(i[r],e)},GeometryCollection:function(o,e){for(var i=o.geometries,r=-1,l=i.length;++r<l;)$c(i[r],e)}};function fm(o,e,i){var r=-1,l=o.length-i,c;for(e.lineStart();++r<l;)c=o[r],e.point(c[0],c[1],c[2]);e.lineEnd()}function s2(o,e){var i=-1,r=o.length;for(e.polygonStart();++i<r;)fm(o[i],e,1);e.polygonEnd()}function as(o,e){o&&a2.hasOwnProperty(o.type)?a2[o.type](o,e):$c(o,e)}var dm=new ki,tf=new ki,nE,iE,hm,pm,mm,Hl={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){dm=new ki,Hl.lineStart=GR,Hl.lineEnd=VR},polygonEnd:function(){var o=+dm;tf.add(o<0?ni+o:o),this.lineStart=this.lineEnd=this.point=Gn},sphere:function(){tf.add(ni)}};function GR(){Hl.point=kR}function VR(){aE(nE,iE)}function kR(o,e){Hl.point=aE,nE=o,iE=e,o*=On,e*=On,hm=o,pm=en(e=e/2+Jc),mm=nn(e)}function aE(o,e){o*=On,e*=On,e=e/2+Jc;var i=o-hm,r=i>=0?1:-1,l=r*i,c=en(e),d=nn(e),h=mm*d,v=pm*c+h*en(l),g=h*r*nn(l);dm.add(Mo(g,v)),hm=o,pm=c,mm=d}function XR(o){return tf=new ki,as(o,Hl),tf*2}function gm(o){return[Mo(o[1],o[0]),Fl(o[2])]}function xo(o){var e=o[0],i=o[1],r=en(i);return[r*en(e),r*nn(e),nn(i)]}function Fc(o,e){return o[0]*e[0]+o[1]*e[1]+o[2]*e[2]}function ef(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function Ep(o,e){o[0]+=e[0],o[1]+=e[1],o[2]+=e[2]}function Hc(o,e){return[o[0]*e,o[1]*e,o[2]*e]}function vm(o){var e=us(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);o[0]/=e,o[1]/=e,o[2]/=e}function _m(o,e){function i(r,l){return r=o(r,l),e(r[0],r[1])}return o.invert&&e.invert&&(i.invert=function(r,l){return r=e.invert(r,l),r&&o.invert(r[0],r[1])}),i}function Sm(o,e){return sn(o)>Re&&(o-=Math.round(o/ni)*ni),[o,e]}Sm.invert=Sm;function qR(o,e,i){return(o%=ni)?e||i?_m(l2(o),u2(e,i)):l2(o):e||i?u2(e,i):Sm}function o2(o){return function(e,i){return e+=o,sn(e)>Re&&(e-=Math.round(e/ni)*ni),[e,i]}}function l2(o){var e=o2(o);return e.invert=o2(-o),e}function u2(o,e){var i=en(o),r=nn(o),l=en(e),c=nn(e);function d(h,v){var g=en(v),m=en(h)*g,p=nn(h)*g,_=nn(v),M=_*i+m*r;return[Mo(p*l-M*c,m*i-_*r),Fl(M*l+p*c)]}return d.invert=function(h,v){var g=en(v),m=en(h)*g,p=nn(h)*g,_=nn(v),M=_*l-p*c;return[Mo(p*l+_*c,m*i+M*r),Fl(M*i-m*r)]},d}function YR(o,e,i,r,l,c){if(i){var d=en(e),h=nn(e),v=r*i;l==null?(l=e+r*ni,c=e-v/2):(l=c2(d,l),c=c2(d,c),(r>0?l<c:l>c)&&(l+=r*ni));for(var g,m=l;r>0?m>c:m<c;m-=v)g=gm([d,-h*en(m),-h*nn(m)]),o.point(g[0],g[1])}}function c2(o,e){e=xo(e),e[0]-=o,vm(e);var i=HR(-e[1]);return((-e[2]<0?-i:i)+ni-Je)%ni}function rE(){var o=[],e;return{point:function(i,r,l){e.push([i,r,l])},lineStart:function(){o.push(e=[])},lineEnd:Gn,rejoin:function(){o.length>1&&o.push(o.pop().concat(o.shift()))},result:function(){var i=o;return o=[],e=null,i}}}function Zc(o,e){return sn(o[0]-e[0])<Je&&sn(o[1]-e[1])<Je}function Gc(o,e,i,r){this.x=o,this.z=e,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function sE(o,e,i,r,l){var c=[],d=[],h,v;if(o.forEach(function(x){if(!((A=x.length-1)<=0)){var A,y=x[0],E=x[A],N;if(Zc(y,E)){if(!y[2]&&!E[2]){for(l.lineStart(),h=0;h<A;++h)l.point((y=x[h])[0],y[1]);l.lineEnd();return}E[0]+=2*Je}c.push(N=new Gc(y,x,null,!0)),d.push(N.o=new Gc(y,null,N,!1)),c.push(N=new Gc(E,x,null,!1)),d.push(N.o=new Gc(E,null,N,!0))}}),!!c.length){for(d.sort(e),f2(c),f2(d),h=0,v=d.length;h<v;++h)d[h].e=i=!i;for(var g=c[0],m,p;;){for(var _=g,M=!0;_.v;)if((_=_.n)===g)return;m=_.z,l.lineStart();do{if(_.v=_.o.v=!0,_.e){if(M)for(h=0,v=m.length;h<v;++h)l.point((p=m[h])[0],p[1]);else r(_.x,_.n.x,1,l);_=_.n}else{if(M)for(m=_.p.z,h=m.length-1;h>=0;--h)l.point((p=m[h])[0],p[1]);else r(_.x,_.p.x,-1,l);_=_.p}_=_.o,m=_.z,M=!M}while(!_.v);l.lineEnd()}}}function f2(o){if(e=o.length){for(var e,i=0,r=o[0],l;++i<e;)r.n=l=o[i],l.p=r,r=l;r.n=l=o[0],l.p=r}}function yp(o){return sn(o[0])<=Re?o[0]:FR(o[0])*((sn(o[0])+Re)%ni-Re)}function WR(o,e){var i=yp(e),r=e[1],l=nn(r),c=[nn(i),-en(i),0],d=0,h=0,v=new ki;l===1?r=Di+Je:l===-1&&(r=-Di-Je);for(var g=0,m=o.length;g<m;++g)if(_=(p=o[g]).length)for(var p,_,M=p[_-1],x=yp(M),A=M[1]/2+Jc,y=nn(A),E=en(A),N=0;N<_;++N,x=C,y=O,E=z,M=U){var U=p[N],C=yp(U),F=U[1]/2+Jc,O=nn(F),z=en(F),G=C-x,w=G>=0?1:-1,R=w*G,I=R>Re,$=y*O;if(v.add(Mo($*w*nn(R),E*z+$*en(R))),d+=I?G+w*ni:G,I^x>=i^C>=i){var st=ef(xo(M),xo(U));vm(st);var ot=ef(c,st);vm(ot);var k=(I^G>=0?-1:1)*Fl(ot[2]);(r>k||r===k&&(st[0]||st[1]))&&(h+=I^G>=0?1:-1)}}return(d<-Je||d<Je&&v<-1e-12)^h&1}function oE(o,e,i,r){return function(l){var c=e(l),d=rE(),h=e(d),v=!1,g,m,p,_={point:M,lineStart:A,lineEnd:y,polygonStart:function(){_.point=E,_.lineStart=N,_.lineEnd=U,m=[],g=[]},polygonEnd:function(){_.point=M,_.lineStart=A,_.lineEnd=y,m=eE(m);var C=WR(g,r);m.length?(v||(l.polygonStart(),v=!0),sE(m,jR,C,i,l)):C&&(v||(l.polygonStart(),v=!0),l.lineStart(),i(null,null,1,l),l.lineEnd()),v&&(l.polygonEnd(),v=!1),m=g=null},sphere:function(){l.polygonStart(),l.lineStart(),i(null,null,1,l),l.lineEnd(),l.polygonEnd()}};function M(C,F){o(C,F)&&l.point(C,F)}function x(C,F){c.point(C,F)}function A(){_.point=x,c.lineStart()}function y(){_.point=M,c.lineEnd()}function E(C,F){p.push([C,F]),h.point(C,F)}function N(){h.lineStart(),p=[]}function U(){E(p[0][0],p[0][1]),h.lineEnd();var C=h.clean(),F=d.result(),O,z=F.length,G,w,R;if(p.pop(),g.push(p),p=null,!!z){if(C&1){if(w=F[0],(G=w.length-1)>0){for(v||(l.polygonStart(),v=!0),l.lineStart(),O=0;O<G;++O)l.point((R=w[O])[0],R[1]);l.lineEnd()}return}z>1&&C&2&&F.push(F.pop().concat(F.shift())),m.push(F.filter(ZR))}}return _}}function ZR(o){return o.length>1}function jR(o,e){return((o=o.x)[0]<0?o[1]-Di-Je:Di-o[1])-((e=e.x)[0]<0?e[1]-Di-Je:Di-e[1])}const d2=oE(function(){return!0},KR,JR,[-Re,-Di]);function KR(o){var e=NaN,i=NaN,r=NaN,l;return{lineStart:function(){o.lineStart(),l=1},point:function(c,d){var h=c>0?Re:-Re,v=sn(c-e);sn(v-Re)<Je?(o.point(e,i=(i+d)/2>0?Di:-Di),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(h,i),o.point(c,i),l=0):r!==h&&v>=Re&&(sn(e-r)<Je&&(e-=r*Je),sn(c-h)<Je&&(c-=h*Je),i=QR(e,i,c,d),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(h,i),l=0),o.point(e=c,i=d),r=h},lineEnd:function(){o.lineEnd(),e=i=NaN},clean:function(){return 2-l}}}function QR(o,e,i,r){var l,c,d=nn(o-i);return sn(d)>Je?BR((nn(e)*(c=en(r))*nn(i)-nn(r)*(l=en(e))*nn(o))/(l*c*d)):(e+r)/2}function JR(o,e,i,r){var l;if(o==null)l=i*Di,r.point(-Re,l),r.point(0,l),r.point(Re,l),r.point(Re,0),r.point(Re,-l),r.point(0,-l),r.point(-Re,-l),r.point(-Re,0),r.point(-Re,l);else if(sn(o[0]-e[0])>Je){var c=o[0]<e[0]?Re:-Re;l=i*c/2,r.point(-c,l),r.point(0,l),r.point(c,l)}else r.point(e[0],e[1])}function $R(o){var e=en(o),i=2*On,r=e>0,l=sn(e)>Je;function c(m,p,_,M){YR(M,o,i,_,m,p)}function d(m,p){return en(m)*en(p)>e}function h(m){var p,_,M,x,A;return{lineStart:function(){x=M=!1,A=1},point:function(y,E){var N=[y,E],U,C=d(y,E),F=r?C?0:g(y,E):C?g(y+(y<0?Re:-Re),E):0;if(!p&&(x=M=C)&&m.lineStart(),C!==M&&(U=v(p,N),(!U||Zc(p,U)||Zc(N,U))&&(N[2]=1)),C!==M)A=0,C?(m.lineStart(),U=v(N,p),m.point(U[0],U[1])):(U=v(p,N),m.point(U[0],U[1],2),m.lineEnd()),p=U;else if(l&&p&&r^C){var O;!(F&_)&&(O=v(N,p,!0))&&(A=0,r?(m.lineStart(),m.point(O[0][0],O[0][1]),m.point(O[1][0],O[1][1]),m.lineEnd()):(m.point(O[1][0],O[1][1]),m.lineEnd(),m.lineStart(),m.point(O[0][0],O[0][1],3)))}C&&(!p||!Zc(p,N))&&m.point(N[0],N[1]),p=N,M=C,_=F},lineEnd:function(){M&&m.lineEnd(),p=null},clean:function(){return A|(x&&M)<<1}}}function v(m,p,_){var M=xo(m),x=xo(p),A=[1,0,0],y=ef(M,x),E=Fc(y,y),N=y[0],U=E-N*N;if(!U)return!_&&m;var C=e*E/U,F=-e*N/U,O=ef(A,y),z=Hc(A,C),G=Hc(y,F);Ep(z,G);var w=O,R=Fc(z,w),I=Fc(w,w),$=R*R-I*(Fc(z,z)-1);if(!($<0)){var st=us($),ot=Hc(w,(-R-st)/I);if(Ep(ot,z),ot=gm(ot),!_)return ot;var k=m[0],P=p[0],at=m[1],Y=p[1],mt;P<k&&(mt=k,k=P,P=mt);var Et=P-k,Ot=sn(Et-Re)<Je,Zt=Ot||Et<Je;if(!Ot&&Y<at&&(mt=at,at=Y,Y=mt),Zt?Ot?at+Y>0^ot[1]<(sn(ot[0]-k)<Je?at:Y):at<=ot[1]&&ot[1]<=Y:Et>Re^(k<=ot[0]&&ot[0]<=P)){var re=Hc(w,(-R+st)/I);return Ep(re,z),[ot,gm(re)]}}}function g(m,p){var _=r?o:Re-o,M=0;return m<-_?M|=1:m>_&&(M|=2),p<-_?M|=4:p>_&&(M|=8),M}return oE(d,h,c,r?[0,-o]:[-Re,o-Re])}function tC(o,e,i,r,l,c){var d=o[0],h=o[1],v=e[0],g=e[1],m=0,p=1,_=v-d,M=g-h,x;if(x=i-d,!(!_&&x>0)){if(x/=_,_<0){if(x<m)return;x<p&&(p=x)}else if(_>0){if(x>p)return;x>m&&(m=x)}if(x=l-d,!(!_&&x<0)){if(x/=_,_<0){if(x>p)return;x>m&&(m=x)}else if(_>0){if(x<m)return;x<p&&(p=x)}if(x=r-h,!(!M&&x>0)){if(x/=M,M<0){if(x<m)return;x<p&&(p=x)}else if(M>0){if(x>p)return;x>m&&(m=x)}if(x=c-h,!(!M&&x<0)){if(x/=M,M<0){if(x>p)return;x>m&&(m=x)}else if(M>0){if(x<m)return;x<p&&(p=x)}return m>0&&(o[0]=d+m*_,o[1]=h+m*M),p<1&&(e[0]=d+p*_,e[1]=h+p*M),!0}}}}}var Tl=1e9,Vc=-Tl;function eC(o,e,i,r){function l(g,m){return o<=g&&g<=i&&e<=m&&m<=r}function c(g,m,p,_){var M=0,x=0;if(g==null||(M=d(g,p))!==(x=d(m,p))||v(g,m)<0^p>0)do _.point(M===0||M===3?o:i,M>1?r:e);while((M=(M+p+4)%4)!==x);else _.point(m[0],m[1])}function d(g,m){return sn(g[0]-o)<Je?m>0?0:3:sn(g[0]-i)<Je?m>0?2:1:sn(g[1]-e)<Je?m>0?1:0:m>0?3:2}function h(g,m){return v(g.x,m.x)}function v(g,m){var p=d(g,1),_=d(m,1);return p!==_?p-_:p===0?m[1]-g[1]:p===1?g[0]-m[0]:p===2?g[1]-m[1]:m[0]-g[0]}return function(g){var m=g,p=rE(),_,M,x,A,y,E,N,U,C,F,O,z={point:G,lineStart:$,lineEnd:st,polygonStart:R,polygonEnd:I};function G(k,P){l(k,P)&&m.point(k,P)}function w(){for(var k=0,P=0,at=M.length;P<at;++P)for(var Y=M[P],mt=1,Et=Y.length,Ot=Y[0],Zt,re,V=Ot[0],ct=Ot[1];mt<Et;++mt)Zt=V,re=ct,Ot=Y[mt],V=Ot[0],ct=Ot[1],re<=r?ct>r&&(V-Zt)*(r-re)>(ct-re)*(o-Zt)&&++k:ct<=r&&(V-Zt)*(r-re)<(ct-re)*(o-Zt)&&--k;return k}function R(){m=p,_=[],M=[],O=!0}function I(){var k=w(),P=O&&k,at=(_=eE(_)).length;(P||at)&&(g.polygonStart(),P&&(g.lineStart(),c(null,null,1,g),g.lineEnd()),at&&sE(_,h,k,c,g),g.polygonEnd()),m=g,_=M=x=null}function $(){z.point=ot,M&&M.push(x=[]),F=!0,C=!1,N=U=NaN}function st(){_&&(ot(A,y),E&&C&&p.rejoin(),_.push(p.result())),z.point=G,C&&m.lineEnd()}function ot(k,P){var at=l(k,P);if(M&&x.push([k,P]),F)A=k,y=P,E=at,F=!1,at&&(m.lineStart(),m.point(k,P));else if(at&&C)m.point(k,P);else{var Y=[N=Math.max(Vc,Math.min(Tl,N)),U=Math.max(Vc,Math.min(Tl,U))],mt=[k=Math.max(Vc,Math.min(Tl,k)),P=Math.max(Vc,Math.min(Tl,P))];tC(Y,mt,o,e,i,r)?(C||(m.lineStart(),m.point(Y[0],Y[1])),m.point(mt[0],mt[1]),at||m.lineEnd(),O=!1):at&&(m.lineStart(),m.point(k,P),O=!1)}N=k,U=P,C=at}return z}}const Em=o=>o;var Mp=new ki,ym=new ki,lE,uE,Mm,xm,La={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){La.lineStart=nC,La.lineEnd=aC},polygonEnd:function(){La.lineStart=La.lineEnd=La.point=Gn,Mp.add(sn(ym)),ym=new ki},result:function(){var o=Mp/2;return Mp=new ki,o}};function nC(){La.point=iC}function iC(o,e){La.point=cE,lE=Mm=o,uE=xm=e}function cE(o,e){ym.add(xm*o-Mm*e),Mm=o,xm=e}function aC(){cE(lE,uE)}var To=1/0,nf=To,Gl=-To,af=Gl,rf={point:rC,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var o=[[To,nf],[Gl,af]];return Gl=af=-(nf=To=1/0),o}};function rC(o,e){o<To&&(To=o),o>Gl&&(Gl=o),e<nf&&(nf=e),e>af&&(af=e)}var Tm=0,bm=0,bl=0,sf=0,of=0,po=0,Am=0,Rm=0,Al=0,fE,dE,ia,aa,Ci={point:ls,lineStart:h2,lineEnd:p2,polygonStart:function(){Ci.lineStart=lC,Ci.lineEnd=uC},polygonEnd:function(){Ci.point=ls,Ci.lineStart=h2,Ci.lineEnd=p2},result:function(){var o=Al?[Am/Al,Rm/Al]:po?[sf/po,of/po]:bl?[Tm/bl,bm/bl]:[NaN,NaN];return Tm=bm=bl=sf=of=po=Am=Rm=Al=0,o}};function ls(o,e){Tm+=o,bm+=e,++bl}function h2(){Ci.point=sC}function sC(o,e){Ci.point=oC,ls(ia=o,aa=e)}function oC(o,e){var i=o-ia,r=e-aa,l=us(i*i+r*r);sf+=l*(ia+o)/2,of+=l*(aa+e)/2,po+=l,ls(ia=o,aa=e)}function p2(){Ci.point=ls}function lC(){Ci.point=cC}function uC(){hE(fE,dE)}function cC(o,e){Ci.point=hE,ls(fE=ia=o,dE=aa=e)}function hE(o,e){var i=o-ia,r=e-aa,l=us(i*i+r*r);sf+=l*(ia+o)/2,of+=l*(aa+e)/2,po+=l,l=aa*o-ia*e,Am+=l*(ia+o),Rm+=l*(aa+e),Al+=l*3,ls(ia=o,aa=e)}function pE(o){this._context=o}pE.prototype={_radius:4.5,pointRadius:function(o){return this._radius=o,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(o,e){switch(this._point){case 0:{this._context.moveTo(o,e),this._point=1;break}case 1:{this._context.lineTo(o,e);break}default:{this._context.moveTo(o+this._radius,e),this._context.arc(o,e,this._radius,0,ni);break}}},result:Gn};var Cm=new ki,xp,mE,gE,Rl,Cl,Vl={point:Gn,lineStart:function(){Vl.point=fC},lineEnd:function(){xp&&vE(mE,gE),Vl.point=Gn},polygonStart:function(){xp=!0},polygonEnd:function(){xp=null},result:function(){var o=+Cm;return Cm=new ki,o}};function fC(o,e){Vl.point=vE,mE=Rl=o,gE=Cl=e}function vE(o,e){Rl-=o,Cl-=e,Cm.add(us(Rl*Rl+Cl*Cl)),Rl=o,Cl=e}let m2,lf,g2,v2;class _2{constructor(e){this._append=e==null?_E:dC(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==g2||this._append!==lf){const r=this._radius,l=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,g2=r,lf=this._append,v2=this._,this._=l}this._+=v2;break}}}result(){const e=this._;return this._="",e.length?e:null}}function _E(o){let e=1;this._+=o[0];for(const i=o.length;e<i;++e)this._+=arguments[e]+o[e]}function dC(o){const e=Math.floor(o);if(!(e>=0))throw new RangeError(`invalid digits: ${o}`);if(e>15)return _E;if(e!==m2){const i=10**e;m2=e,lf=function(l){let c=1;this._+=l[0];for(const d=l.length;c<d;++c)this._+=Math.round(arguments[c]*i)/i+l[c]}}return lf}function S2(o,e){let i=3,r=4.5,l,c;function d(h){return h&&(typeof r=="function"&&c.pointRadius(+r.apply(this,arguments)),as(h,l(c))),c.result()}return d.area=function(h){return as(h,l(La)),La.result()},d.measure=function(h){return as(h,l(Vl)),Vl.result()},d.bounds=function(h){return as(h,l(rf)),rf.result()},d.centroid=function(h){return as(h,l(Ci)),Ci.result()},d.projection=function(h){return arguments.length?(l=h==null?(o=null,Em):(o=h).stream,d):o},d.context=function(h){return arguments.length?(c=h==null?(e=null,new _2(i)):new pE(e=h),typeof r!="function"&&c.pointRadius(r),d):e},d.pointRadius=function(h){return arguments.length?(r=typeof h=="function"?h:(c.pointRadius(+h),+h),d):r},d.digits=function(h){if(!arguments.length)return i;if(h==null)i=null;else{const v=Math.floor(h);if(!(v>=0))throw new RangeError(`invalid digits: ${h}`);i=v}return e===null&&(c=new _2(i)),d},d.projection(o).digits(i).context(e)}function Wm(o){return function(e){var i=new wm;for(var r in o)i[r]=o[r];return i.stream=e,i}}function wm(){}wm.prototype={constructor:wm,point:function(o,e){this.stream.point(o,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Zm(o,e,i){var r=o.clipExtent&&o.clipExtent();return o.scale(150).translate([0,0]),r!=null&&o.clipExtent(null),as(i,o.stream(rf)),e(rf.result()),r!=null&&o.clipExtent(r),o}function SE(o,e,i){return Zm(o,function(r){var l=e[1][0]-e[0][0],c=e[1][1]-e[0][1],d=Math.min(l/(r[1][0]-r[0][0]),c/(r[1][1]-r[0][1])),h=+e[0][0]+(l-d*(r[1][0]+r[0][0]))/2,v=+e[0][1]+(c-d*(r[1][1]+r[0][1]))/2;o.scale(150*d).translate([h,v])},i)}function hC(o,e,i){return SE(o,[[0,0],e],i)}function pC(o,e,i){return Zm(o,function(r){var l=+e,c=l/(r[1][0]-r[0][0]),d=(l-c*(r[1][0]+r[0][0]))/2,h=-c*r[0][1];o.scale(150*c).translate([d,h])},i)}function mC(o,e,i){return Zm(o,function(r){var l=+e,c=l/(r[1][1]-r[0][1]),d=-c*r[0][0],h=(l-c*(r[1][1]+r[0][1]))/2;o.scale(150*c).translate([d,h])},i)}var E2=16,gC=en(30*On);function y2(o,e){return+e?_C(o,e):vC(o)}function vC(o){return Wm({point:function(e,i){e=o(e,i),this.stream.point(e[0],e[1])}})}function _C(o,e){function i(r,l,c,d,h,v,g,m,p,_,M,x,A,y){var E=g-r,N=m-l,U=E*E+N*N;if(U>4*e&&A--){var C=d+_,F=h+M,O=v+x,z=us(C*C+F*F+O*O),G=Fl(O/=z),w=sn(sn(O)-1)<Je||sn(c-p)<Je?(c+p)/2:Mo(F,C),R=o(w,G),I=R[0],$=R[1],st=I-r,ot=$-l,k=N*st-E*ot;(k*k/U>e||sn((E*st+N*ot)/U-.5)>.3||d*_+h*M+v*x<gC)&&(i(r,l,c,d,h,v,I,$,w,C/=z,F/=z,O,A,y),y.point(I,$),i(I,$,w,C,F,O,g,m,p,_,M,x,A,y))}}return function(r){var l,c,d,h,v,g,m,p,_,M,x,A,y={point:E,lineStart:N,lineEnd:C,polygonStart:function(){r.polygonStart(),y.lineStart=F},polygonEnd:function(){r.polygonEnd(),y.lineStart=N}};function E(G,w){G=o(G,w),r.point(G[0],G[1])}function N(){p=NaN,y.point=U,r.lineStart()}function U(G,w){var R=xo([G,w]),I=o(G,w);i(p,_,m,M,x,A,p=I[0],_=I[1],m=G,M=R[0],x=R[1],A=R[2],E2,r),r.point(p,_)}function C(){y.point=E,r.lineEnd()}function F(){N(),y.point=O,y.lineEnd=z}function O(G,w){U(l=G,w),c=p,d=_,h=M,v=x,g=A,y.point=U}function z(){i(p,_,m,M,x,A,c,d,l,h,v,g,E2,r),y.lineEnd=C,C()}return y}}var SC=Wm({point:function(o,e){this.stream.point(o*On,e*On)}});function EC(o){return Wm({point:function(e,i){var r=o(e,i);return this.stream.point(r[0],r[1])}})}function yC(o,e,i,r,l){function c(d,h){return d*=r,h*=l,[e+o*d,i-o*h]}return c.invert=function(d,h){return[(d-e)/o*r,(i-h)/o*l]},c}function M2(o,e,i,r,l,c){if(!c)return yC(o,e,i,r,l);var d=en(c),h=nn(c),v=d*o,g=h*o,m=d/o,p=h/o,_=(h*i-d*e)/o,M=(h*e+d*i)/o;function x(A,y){return A*=r,y*=l,[v*A-g*y+e,i-g*A-v*y]}return x.invert=function(A,y){return[r*(m*A-p*y+_),l*(M-p*A-m*y)]},x}function MC(o){return xC(function(){return o})()}function xC(o){var e,i=150,r=480,l=250,c=0,d=0,h=0,v=0,g=0,m,p=0,_=1,M=1,x=null,A=d2,y=null,E,N,U,C=Em,F=.5,O,z,G,w,R;function I(k){return G(k[0]*On,k[1]*On)}function $(k){return k=G.invert(k[0],k[1]),k&&[k[0]*Da,k[1]*Da]}I.stream=function(k){return w&&R===k?w:w=SC(EC(m)(A(O(C(R=k)))))},I.preclip=function(k){return arguments.length?(A=k,x=void 0,ot()):A},I.postclip=function(k){return arguments.length?(C=k,y=E=N=U=null,ot()):C},I.clipAngle=function(k){return arguments.length?(A=+k?$R(x=k*On):(x=null,d2),ot()):x*Da},I.clipExtent=function(k){return arguments.length?(C=k==null?(y=E=N=U=null,Em):eC(y=+k[0][0],E=+k[0][1],N=+k[1][0],U=+k[1][1]),ot()):y==null?null:[[y,E],[N,U]]},I.scale=function(k){return arguments.length?(i=+k,st()):i},I.translate=function(k){return arguments.length?(r=+k[0],l=+k[1],st()):[r,l]},I.center=function(k){return arguments.length?(c=k[0]%360*On,d=k[1]%360*On,st()):[c*Da,d*Da]},I.rotate=function(k){return arguments.length?(h=k[0]%360*On,v=k[1]%360*On,g=k.length>2?k[2]%360*On:0,st()):[h*Da,v*Da,g*Da]},I.angle=function(k){return arguments.length?(p=k%360*On,st()):p*Da},I.reflectX=function(k){return arguments.length?(_=k?-1:1,st()):_<0},I.reflectY=function(k){return arguments.length?(M=k?-1:1,st()):M<0},I.precision=function(k){return arguments.length?(O=y2(z,F=k*k),ot()):us(F)},I.fitExtent=function(k,P){return SE(I,k,P)},I.fitSize=function(k,P){return hC(I,k,P)},I.fitWidth=function(k,P){return pC(I,k,P)},I.fitHeight=function(k,P){return mC(I,k,P)};function st(){var k=M2(i,0,0,_,M,p).apply(null,e(c,d)),P=M2(i,r-k[0],l-k[1],_,M,p);return m=qR(h,v,g),z=_m(e,P),G=_m(m,z),O=y2(z,F),ot()}function ot(){return w=R=null,I}return function(){return e=o.apply(this,arguments),I.invert=e.invert&&$,st()}}function Dm(o,e){return[o,e]}Dm.invert=Dm;function TC(){return MC(Dm).scale(152.63)}function bC({colorMap:o,reliefMap:e,relief:i,rimStrength:r}){return new la({uniforms:{colorMap:{value:o},reliefMap:{value:e},relief:{value:i},rimStrength:{value:r}},vertexShader:`
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
        float reflection = max(dot(reflect(-light, n), eye), 0.0);
        // Layer a broad studio softbox with a tighter clearcoat reflection.
        float specular = .7 * pow(reflection, 14.0) + .3 * pow(reflection, 70.0);
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
        color += vec3(0.06) * max(bevelLight, 0.0) * land * min(relief * 85.0, 1.0);
        color += vec3(lighting.y * mix(0.20, 0.075, land));
        float coastShadow = (1.0 - land) * coast.a;
        color *= 1.0 - coastShadow * min(relief * 55.0, 0.85);
        color += vec3(lighting.z) * (1.0 - land * 0.88);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}function EE({dataUrl:o="/data/countries.geojson",rotationPeriod:e=60,paused:i=!1,interactive:r=!0,landColor:l="#03FA7F",oceanColor:c="#212121",borderColor:d="#02e573",relief:h=.022,rimStrength:v=0,maxPixelRatio:g=2,textureWidth:m=4096,className:p="",style:_,onFrame:M,onReady:x}){const A=ke.useRef(null),y=ke.useRef({paused:i,rotationPeriod:e,onFrame:M,onReady:x}),E=ke.useRef(()=>{}),[N,U]=ke.useState("");return ke.useEffect(()=>{y.current={paused:i,rotationPeriod:e,onFrame:M,onReady:x},E.current()},[i,e,M,x]),ke.useEffect(()=>{const C=A.current,F=new AbortController,O=window.matchMedia("(prefers-reduced-motion: reduce)"),z=[];let G,w,R,I=()=>{},$=!1,st=null,ot=null,k=!0,P=0,at=!1;const Y=()=>{!$&&st===null&&(st=requestAnimationFrame(Et))},mt=()=>{ot=null,Y()};E.current=mt;function Et(ct){if(st=null,$||!G||!re||document.hidden||!k){ot=null;return}const Q=ot===null?0:(ct-ot)/1e3;ot=ct;const{paused:K,rotationPeriod:yt,onFrame:wt}=y.current,At=!K&&!at&&!O.matches&&Number.isFinite(yt)&&yt>0;At&&(re.rotation.y+=Math.PI*2/yt*Q),P+=Q,G.render(Ot,Zt),wt?.({timestamp:ct,delta:Q,elapsed:P,rotation:re.rotation.y,axisTilt:re.rotation.x,drawCalls:G.info.render.calls,triangles:G.info.render.triangles,textureWidth:re.material.uniforms.colorMap.value.image.width,pixelRatio:G.getPixelRatio()}),At?Y():ot=null}let Ot,Zt,re;async function V(){try{U("");const ct=await fetch(o,{signal:F.signal});if(!ct.ok)throw new Error(`Geography request failed (${ct.status})`);const Q=await ct.json();if($)return;Q.features=Q.features.filter(ft=>!["RUS","BLR"].includes(ft.properties.iso_a3??ft.properties["ISO3166-1-Alpha-3"]));for(const ft of Q.features){const ut=ft.geometry.type==="Polygon"?[ft.geometry.coordinates]:ft.geometry.coordinates;for(const Ht of ut)Ht.forEach((Ct,Gt)=>{const jt=XR({type:"Polygon",coordinates:[Ct]});(Gt===0&&jt>2*Math.PI||Gt>0&&jt<2*Math.PI)&&Ct.reverse()})}G=new tE({alpha:!0,antialias:!0,powerPreference:"low-power"}),G.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,g))),G.setClearColor(0,0);const K=Math.min(G.capabilities.maxTextureSize,4096,Math.max(512,Math.round(m))),yt=document.createElement("canvas");yt.width=K,yt.height=K/2;const wt=yt.getContext("2d");wt.fillStyle=c,wt.fillRect(0,0,K,K/2);const At=TC().precision(.1).scale(K/(2*Math.PI)).translate([K/2,K/4]),Mt=S2(At,wt);wt.fillStyle=l,wt.strokeStyle=d,wt.lineWidth=K/4096*1.5;for(const ft of Q.features)wt.beginPath(),Mt(ft),wt.fill(),wt.stroke();const kt=document.createElement("canvas");kt.width=K,kt.height=K/2;const H=kt.getContext("2d");H.fillStyle="#000",H.fillRect(0,0,K,K/2),H.fillStyle="#fff";const ze=S2(At,H);for(const ft of Q.features)H.beginPath(),ze(ft),H.fill(),H.strokeStyle="#fff",H.lineWidth=.4,H.stroke();const ee=H.getImageData(0,0,K,K/2),Jt=ee.data.slice(),Ut=kt.height,$t=(ft,ut)=>Jt[(Math.max(0,Math.min(Ut-1,ut))*K+(ft+K)%K)*4],zt=Math.max(1,Math.round(K/1536));for(let ft=0;ft<Ut;ft++){for(let ut=0;ut<K;ut++){const Ht=(ft*K+ut)*4;ee.data[Ht+1]=Math.round(127.5+($t(ut+zt,ft)-$t(ut-zt,ft))/2),ee.data[Ht+2]=Math.round(127.5+($t(ut,ft-zt)-$t(ut,ft+zt))/2),ee.data[Ht+3]=$t(ut-3*zt,ft-3*zt)}if((ft+1)%64===0&&(await new Promise(ut=>setTimeout(ut,0)),$))return}const le=new Uint8Array(ee.data.length);for(let ft=0;ft<Ut;ft++)le.set(ee.data.subarray(ft*K*4,(ft+1)*K*4),(Ut-1-ft)*K*4);const be=new Vx(le,K,Ut,wi);be.generateMipmaps=!0,be.minFilter=Sr,be.wrapS=Ul,be.magFilter=Gi,be.needsUpdate=!0,z.push(be);const Ce=new Yx(yt);Ce.colorSpace=ti,z.push(Ce),Ce.wrapS=Ul,Ce.anisotropy=Math.min(8,G.capabilities.getMaxAnisotropy()),C.appendChild(G.domElement),Ot=new q2,Zt=new Ri(34,1,.1,20),Zt.position.set(0,0,3.7);const L=new Xm(1,128,96),b=bC({colorMap:Ce,reliefMap:be,textureWidth:K,relief:Math.max(0,Math.min(.03,h)),rimStrength:Math.max(0,Math.min(1,v))});z.push(L,b),re=new Vi(L,b),re.rotation.set(.5,-1.45,0),Ot.add(re);const it=G.domElement;if(it.setAttribute("role","img"),it.setAttribute("aria-label",r?"Animated globe. Drag horizontally or use left and right arrow keys to turn it.":"Animated globe."),r){it.tabIndex=0;let ft=null,ut=0;const Ht=xt=>{!xt.isPrimary||xt.button!==0||(ft=xt.pointerId,ut=xt.clientX,at=!0,mt(),it.setPointerCapture(ft))},Ct=xt=>{xt.pointerId===ft&&(re.rotation.y+=(xt.clientX-ut)/Math.max(1,C.clientWidth)*Math.PI*1.3,ut=xt.clientX,Y())},Gt=xt=>{xt?.pointerId!==void 0&&xt.pointerId!==ft||(ft=null,at=!1,mt())},bt={pointerdown:Ht,pointermove:Ct,pointerup:Gt,pointercancel:Gt,lostpointercapture:Gt,keydown:xt=>{xt.key!=="ArrowLeft"&&xt.key!=="ArrowRight"||(xt.preventDefault(),re.rotation.y+=(xt.key==="ArrowLeft"?-1:1)*Math.PI/18,Y())}};for(const[xt,ne]of Object.entries(bt))it.addEventListener(xt,ne);window.addEventListener("blur",Gt),I=()=>{window.removeEventListener("blur",Gt);for(const[xt,ne]of Object.entries(bt))it.removeEventListener(xt,ne)}}const gt=()=>{const{width:ft,height:ut}=C.getBoundingClientRect();!ft||!ut||(G.setSize(ft,ut),Zt.aspect=ft/ut,Zt.updateProjectionMatrix(),Zt.position.setLength(3.7/Math.min(1,Zt.aspect)),mt())};w=new ResizeObserver(gt),w.observe(C),gt(),R=new IntersectionObserver(([ft])=>{k=ft.isIntersecting,mt()}),R.observe(C),document.addEventListener("visibilitychange",mt),O.addEventListener("change",mt),y.current.onReady?.(),Y()}catch(ct){!$&&ct.name!=="AbortError"&&U("The globe could not load. Check the geography URL and WebGL browser support.")}}return V(),()=>{$=!0,F.abort(),cancelAnimationFrame(st),E.current=()=>{},document.removeEventListener("visibilitychange",mt),O.removeEventListener("change",mt),w?.disconnect(),R?.disconnect(),I(),z.forEach(ct=>ct.dispose()),G?.dispose(),G?.domElement.remove()}},[o,r,l,c,d,h,v,g,m]),nt.createElement("div",{className:`expla-globe ${p}`,style:_,ref:A,"data-interactive":r},N&&nt.createElement("p",{className:"expla-globe__error",role:"alert"},N))}function AC(){const o=ke.useRef(null),[e,i]=ke.useState(!1);return ke.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.disconnect())},{threshold:.3});return r.observe(o.current),()=>r.disconnect()},[]),[o,e]}const x2=""+new URL("top-100-background-BPLwb_hO.png",import.meta.url).href;function RC(){const o=ke.useRef(null);return ke.useEffect(()=>{const e=o.current,i=e.parentElement,r=matchMedia("(prefers-reduced-motion: reduce)");let l,c,d,h=null,v=null,g=0,m=!0,p=0,_,M=!1,x=!1;const A=new Fe(.5,.5),y=()=>{h===null&&(h=requestAnimationFrame(C))},E=()=>{v=null,y()};let N,U;function C(w){if(h=null,!m||document.hidden||!l||!M){v=null;return}const R=v===null?0:Math.min((w-v)/1e3,.1);v=w,r.matches||(g+=R),d.uniforms.time.value=r.matches?0:g,r.matches?(d.uniforms.pointer.value.set(.5,.5),d.uniforms.activity.value=0):(p*=Math.exp(-R*.8),d.uniforms.pointer.value.lerp(A,1-Math.exp(-R*3.5)),d.uniforms.activity.value=Xh.lerp(d.uniforms.activity.value,p,1-Math.exp(-R*2.5))),l.render(F,O),r.matches||y()}let F,O;const z=w=>{const R=i.getBoundingClientRect(),I=Xh.clamp((w.clientX-R.left)/R.width,0,1),$=Xh.clamp(1-(w.clientY-R.top)/R.height,0,1);p=Math.min(1,p+.22+Math.hypot(I-A.x,$-A.y)*12),A.set(I,$),y()},G=()=>{p=0,A.set(.5,.5),y()};try{l=new tE({alpha:!1,antialias:!1,powerPreference:"low-power"}),l.setPixelRatio(Math.min(devicePixelRatio||1,1)),l.domElement.setAttribute("aria-hidden","true"),e.appendChild(l.domElement),F=new q2,O=new km,c=new Wl(2,2),_=new Jx().load(x2,()=>{x||(M=!0,E())}),_.colorSpace=ti,d=new la({uniforms:{backgroundMap:{value:_},time:{value:0},aspect:{value:1},pointer:{value:new Fe(.5,.5)},activity:{value:0}},vertexShader:"varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}",fragmentShader:`
          uniform float time, aspect, activity;
          uniform vec2 pointer;
          uniform sampler2D backgroundMap;
          varying vec2 uvPosition;
          void main(){
            vec2 uv=uvPosition;
            float t=time*.42;
            // Continuous autonomous flow starts with the uploaded image at t=0.
            vec2 drift=vec2(sin(t+uv.y*3.0)-sin(uv.y*3.0),
              sin(t*.73+uv.x*4.0)-sin(uv.x*4.0))*.075;
            vec2 offset=(uv-pointer)*vec2(aspect,1.0);
            float influence=exp(-dot(offset,offset)*1.4);
            vec2 swirl=vec2(-offset.y,offset.x)/vec2(aspect,1.0);
            vec2 reactive=(swirl*.14+(pointer-.5)*.08)*activity*influence;
            // Anchor the image edges so movement never reveals empty borders.
            vec2 envelope=sin(uv*3.14159265);
            uv+=(drift+reactive)*envelope;
            gl_FragColor=vec4(texture2D(backgroundMap,uv).rgb,1.0);
            #include <colorspace_fragment>
          }
        `}),F.add(new Vi(c,d));const w=()=>{const{width:R,height:I}=e.getBoundingClientRect();!R||!I||(l.setSize(R,I),d.uniforms.aspect.value=R/I,E())};N=new ResizeObserver(w),N.observe(e),U=new IntersectionObserver(([R])=>{m=R.isIntersecting,E()}),U.observe(e),i.addEventListener("pointermove",z),i.addEventListener("pointerleave",G),i.addEventListener("pointercancel",G),document.addEventListener("visibilitychange",E),r.addEventListener("change",E),w()}catch{e.dataset.fallback="true",l?.domElement.remove()}return()=>{x=!0,_?.dispose(),cancelAnimationFrame(h),N?.disconnect(),U?.disconnect(),i.removeEventListener("pointermove",z),i.removeEventListener("pointerleave",G),i.removeEventListener("pointercancel",G),document.removeEventListener("visibilitychange",E),r.removeEventListener("change",E),c?.dispose(),d?.dispose(),l?.dispose(),l?.domElement.remove()}},[]),nt.createElement("div",{className:"hero-background",ref:o,style:{backgroundImage:`url(${x2})`,backgroundSize:"100% 100%"},"aria-hidden":"true"})}function CC({items:o,renderItem:e,label:i}){const r=ke.useRef(null);return ke.useEffect(()=>{const l=r.current,c=l.querySelector(".channel-track"),d=l.querySelector(".channel-group"),h=matchMedia("(prefers-reduced-motion: reduce)");let v,g=null,m=0,p=0,_=0,M=!1,x=0,A=0,y=!0,E=null,N=0;const U=()=>{c.style.transform=`translate3d(${m}px,0,0)`},C=()=>{p=d.getBoundingClientRect().width,_=Math.max(0,p-l.clientWidth),x=Math.min(x,_),m=M?-x:-p,U()},F=P=>{const at=g===null?0:Math.min((P-g)/1e3,.1);g=P,!document.hidden&&y&&!h.matches&&P>=A&&(m+=22*at,m>=0&&(m-=p),U()),v=requestAnimationFrame(F)},O=P=>{if(P.ctrlKey||!_)return;const at=Math.abs(P.deltaX)>Math.abs(P.deltaY)?P.deltaX:P.deltaY;if(!at)return;M||(M=!0,x=0);const Y=at*(P.deltaMode===1?16:P.deltaMode===2?l.clientHeight:1),mt=Math.min(_,Math.max(0,x+Y));A=performance.now()+900,!(Math.abs(mt-x)<.01)&&(P.preventDefault(),x=mt,m=-x,l.dataset.wheelPosition=String(x),l.dataset.wheelMaximum=String(_),U())},z=()=>{M=!1},G=P=>{P.key!=="ArrowLeft"&&P.key!=="ArrowRight"||(P.preventDefault(),M=!0,x=Math.min(_,Math.max(0,x+(P.key==="ArrowRight"?120:-120))),m=-x,A=performance.now()+900,U())},w=P=>{P.pointerType!=="touch"||!P.isPrimary||(E=P.pointerId,N=P.clientX,M=!0,x=Math.min(_,Math.max(0,-m)),l.setPointerCapture(E))},R=P=>{P.pointerId===E&&(x=Math.min(_,Math.max(0,x+N-P.clientX)),N=P.clientX,m=-x,A=performance.now()+900,U())},I=()=>{E=null},$=()=>{g=null},st={pointerdown:w,pointermove:R,pointerup:I,pointercancel:I};for(const[P,at]of Object.entries(st))l.addEventListener(P,at);l.addEventListener("wheel",O,{passive:!1}),l.addEventListener("pointerleave",z),l.addEventListener("keydown",G),document.addEventListener("visibilitychange",$);const ot=new ResizeObserver(C);ot.observe(l),ot.observe(d);const k=new IntersectionObserver(([P])=>{y=P.isIntersecting,g=null});return k.observe(l),C(),v=requestAnimationFrame(F),()=>{cancelAnimationFrame(v),ot.disconnect(),k.disconnect();for(const[P,at]of Object.entries(st))l.removeEventListener(P,at);l.removeEventListener("wheel",O),l.removeEventListener("pointerleave",z),l.removeEventListener("keydown",G),document.removeEventListener("visibilitychange",$)}},[o.length]),nt.createElement("div",{className:"channel-strip",ref:r,tabIndex:0,role:"region","aria-label":i},nt.createElement("div",{className:"channel-track"},[0,1].map(l=>nt.createElement("div",{className:`channel-group${l?" channel-group--duplicate":""}`,key:l,"aria-hidden":l?!0:void 0},o.map((c,d)=>nt.createElement("div",{className:"channel",key:c},nt.createElement("span",{className:"channel-number"},String(d+1).padStart(2,"0")),e(c)))))))}function Um({small:o=!1,linked:e=!0}){const i=`logo${o?" logo--small":""}`,r=nt.createElement("img",{src:"./brand/logo.svg",alt:"expla",width:"202",height:"44"});return e?nt.createElement("a",{className:i,href:"#about","aria-label":"expla"},r):nt.createElement("span",{className:i},r)}const wC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2024V21.7647C2%2019.9862%202.75857%2018.2805%204.10883%2017.0229C5.45909%2015.7653%207.29044%2015.0588%209.2%2015.0588C11.1096%2015.0588%2012.9409%2015.7653%2014.2912%2017.0229C15.6414%2018.2805%2016.4%2019.9862%2016.4%2021.7647V24M18.8%2011.7059H22.4M22.4%2011.7059H26M22.4%2011.7059V8.35294M22.4%2011.7059V15.0588M12.8%208.35294C12.8%2010.2047%2011.1882%2011.7059%209.2%2011.7059C7.21177%2011.7059%205.6%2010.2047%205.6%208.35294C5.6%206.50116%207.21177%205%209.2%205C11.1882%205%2012.8%206.50116%2012.8%208.35294Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",DC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%204V25H24M9.47059%2019.1667V14.5M15.0588%2019.1667V9.83333M20.6471%2019.1667V6.33333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",UC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023V20.75C4%2018.9598%204.7375%2017.2429%206.05025%2015.977C7.36301%2014.7112%209.14348%2014%2011%2014C12.8565%2014%2014.637%2014.7112%2015.9497%2015.977C17.2625%2017.2429%2018%2018.9598%2018%2020.75V23M19.1667%205C20.0949%205%2020.9852%205.35558%2021.6415%205.98851C22.2979%206.62145%2022.6667%207.47989%2022.6667%208.375C22.6667%209.27011%2022.2979%2010.1286%2021.6415%2010.7615C20.9852%2011.3944%2020.0949%2011.75%2019.1667%2011.75M20.3333%2016.25C21.4914%2016.458%2022.5571%2016.9992%2023.3901%2017.8024C24.223%2018.6057%2024.7843%2019.6333%2025%2020.75V23M14.5%208.375C14.5%2010.239%2012.933%2011.75%2011%2011.75C9.067%2011.75%207.5%2010.239%207.5%208.375C7.5%206.51104%209.067%205%2011%205C12.933%205%2014.5%206.51104%2014.5%208.375Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",NC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023V20.75C4%2018.9598%204.7375%2017.2429%206.05025%2015.977C7.36301%2014.7112%209.14348%2014%2011%2014C12.8565%2014%2014.637%2014.7112%2015.9497%2015.977C17.2625%2017.2429%2018%2018.9598%2018%2020.75V23M19.1667%205C20.0949%205%2020.9852%205.35558%2021.6415%205.98851C22.2979%206.62145%2022.6667%207.47989%2022.6667%208.375C22.6667%209.27011%2022.2979%2010.1286%2021.6415%2010.7615C20.9852%2011.3944%2020.0949%2011.75%2019.1667%2011.75M20.3333%2016.25C21.4914%2016.458%2022.5571%2016.9992%2023.3901%2017.8024C24.223%2018.6057%2024.7843%2019.6333%2025%2020.75V23M14.5%208.375C14.5%2010.239%2012.933%2011.75%2011%2011.75C9.067%2011.75%207.5%2010.239%207.5%208.375C7.5%206.51104%209.067%205%2011%205C12.933%205%2014.5%206.51104%2014.5%208.375Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",LC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.8333%209.9334C23.2932%208.52039%2022.4038%207.26032%2021.2446%206.26576C20.0854%205.2712%2018.6924%204.57312%2017.1902%204.23389C15.688%203.89466%2014.1234%203.92485%2012.636%204.32176C11.1486%204.71867%209.78492%205.46994%208.66667%206.50844L4%209.9334M9.83333%209.9334H4V4.22514M5.16667%2019.0666C5.70679%2020.4796%206.59619%2021.7397%207.75541%2022.7342C8.91463%2023.7288%2010.3076%2024.4269%2011.8098%2024.7661C13.312%2025.1053%2014.8766%2025.0751%2016.364%2024.6782C17.8514%2024.2813%2019.2151%2023.5301%2020.3333%2022.4916L25%2019.0666M25%2024.7749V19.0666H19.1667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",OC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%206.33333H22M6%2014.5H22M6%2022.6667H22M11.7143%206.33333C11.7143%207.622%2010.6909%208.66667%209.42857%208.66667C8.16621%208.66667%207.14286%207.622%207.14286%206.33333C7.14286%205.04467%208.16621%204%209.42857%204C10.6909%204%2011.7143%205.04467%2011.7143%206.33333ZM20.8571%2014.5C20.8571%2015.7887%2019.8338%2016.8333%2018.5714%2016.8333C17.3091%2016.8333%2016.2857%2015.7887%2016.2857%2014.5C16.2857%2013.2113%2017.3091%2012.1667%2018.5714%2012.1667C19.8338%2012.1667%2020.8571%2013.2113%2020.8571%2014.5ZM14%2022.6667C14%2023.9553%2012.9767%2025%2011.7143%2025C10.4519%2025%209.42857%2023.9553%209.42857%2022.6667C9.42857%2021.378%2010.4519%2020.3333%2011.7143%2020.3333C12.9767%2020.3333%2014%2021.378%2014%2022.6667Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",PC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2023V20.75C2%2018.9598%202.75853%2017.2429%204.10872%2015.977C5.45892%2014.7112%207.29017%2014%209.19963%2014C11.1091%2014%2012.9403%2014.7112%2014.2905%2015.977C15.6407%2017.2429%2016.3993%2018.9598%2016.3993%2020.75V23M18.7991%2017.375C19.6809%2017.2061%2020.592%2017.2253%2021.4648%2017.4313C22.3376%2017.6372%2023.1498%2018.0247%2023.8412%2018.5649C24.5326%2019.1051%2025.0856%2019.7842%2025.459%2020.5519C25.8325%2021.3197%2026.017%2022.1564%2025.9988%2023M12.7994%208.375C12.7994%2010.239%2011.1878%2011.75%209.19963%2011.75C7.21151%2011.75%205.59982%2010.239%205.59982%208.375C5.59982%206.51104%207.21151%205%209.19963%205C11.1878%205%2012.7994%206.51104%2012.7994%208.375ZM22.9989%2010.625C22.9989%2012.1783%2021.6558%2013.4375%2019.9991%2013.4375C18.3423%2013.4375%2016.9992%2012.1783%2016.9992%2010.625C16.9992%209.0717%2018.3423%207.8125%2019.9991%207.8125C21.6558%207.8125%2022.9989%209.0717%2022.9989%2010.625Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",zC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25%2014.5C25%2020.299%2020.299%2025%2014.5%2025M25%2014.5C25%208.70101%2020.299%204%2014.5%204M25%2014.5H18.875M14.5%2025C8.70101%2025%204%2020.299%204%2014.5M14.5%2025C17.4167%2022.0833%2018.875%2018.2917%2018.875%2014.5M14.5%2025C11.5833%2022.0833%2010.125%2018.2917%2010.125%2014.5M4%2014.5C4%208.70101%208.70101%204%2014.5%204M4%2014.5H10.125M14.5%204C17.4167%206.91667%2018.875%2010.7083%2018.875%2014.5M14.5%204C11.5833%206.91667%2010.125%2010.7083%2010.125%2014.5M10.125%2014.5H18.875'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",IC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%209.83333V14.5M14.5%2014.5H6.45V19.1667M14.5%2014.5H22.55V19.1667M12.2%204H16.8C17.4351%204%2017.95%204.52233%2017.95%205.16667V8.66667C17.95%209.311%2017.4351%209.83333%2016.8%209.83333H12.2C11.5649%209.83333%2011.05%209.311%2011.05%208.66667V5.16667C11.05%204.52233%2011.5649%204%2012.2%204ZM4.15%2019.1667H8.75C9.38513%2019.1667%209.9%2019.689%209.9%2020.3333V23.8333C9.9%2024.4777%209.38513%2025%208.75%2025H4.15C3.51487%2025%203%2024.4777%203%2023.8333V20.3333C3%2019.689%203.51487%2019.1667%204.15%2019.1667ZM20.25%2019.1667H24.85C25.4851%2019.1667%2026%2019.689%2026%2020.3333V23.8333C26%2024.4777%2025.4851%2025%2024.85%2025H20.25C19.6149%2025%2019.1%2024.4777%2019.1%2023.8333V20.3333C19.1%2019.689%2019.6149%2019.1667%2020.25%2019.1667Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",BC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2010.5714H25M8.66667%2016.2857H12.1667M16.8333%2017.4286L19.1667%2019.7143L23.8333%2015.1429M6.33333%206H22.6667C23.9553%206%2025%207.02335%2025%208.28571V19.7143C25%2020.9767%2023.9553%2022%2022.6667%2022H6.33333C5.04467%2022%204%2020.9767%204%2019.7143V8.28571C4%207.02335%205.04467%206%206.33333%206Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",FC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2023H25M6.33333%2018.4667L12.1667%2012.8L16.8333%2016.2L25%206M25%2012.8V6H18'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",HC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.83333%207.5V4H19.1667V7.5M4%2013.3333H12.1667M12.1667%2013.3333H16.8333M12.1667%2013.3333V16.8333H16.8333V13.3333M16.8333%2013.3333H25M6.33333%207.5H22.6667C23.9553%207.5%2025%208.54467%2025%209.83333V22.6667C25%2023.9553%2023.9553%2025%2022.6667%2025H6.33333C5.04467%2025%204%2023.9553%204%2022.6667V9.83333C4%208.54467%205.04467%207.5%206.33333%207.5Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",GC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204V25H25M8.66667%2020.3333V15.6667M14.5%2020.3333V11M20.3333%2020.3333V6.33333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",VC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.1765%2017.1765L24%2024M19.2941%2011.6471C19.2941%2015.8704%2015.8704%2019.2941%2011.6471%2019.2941C7.4237%2019.2941%204%2015.8704%204%2011.6471C4%207.4237%207.4237%204%2011.6471%204C15.8704%204%2019.2941%207.4237%2019.2941%2011.6471Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",kC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25%2014.5C25%2020.299%2020.299%2025%2014.5%2025C8.70101%2025%204%2020.299%204%2014.5C4%208.70101%208.70101%204%2014.5%204M25%2014.5C25%208.70101%2020.299%204%2014.5%204M25%2014.5H14.5M14.5%204V14.5M14.5%2014.5L7.03333%2021.9667'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",XC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%205H8.70588L14.5882%2014M14.5882%2014L8.70588%2023H4M14.5882%2014H4M14.5882%2014H24M19.2941%2018.5L24%2014L19.2941%209.5'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",qC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.125%203L5%2016.8H12.875L11.75%2026L23%2011.05H15.125L16.25%203H15.125Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",YC="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.61538%2013.3333C5.61538%2010.858%206.56846%208.48401%208.26494%206.73367C9.96142%204.98333%2012.2623%204%2014.6615%204C17.0607%204%2019.3617%204.98333%2021.0581%206.73367C22.7546%208.48401%2023.7077%2010.858%2023.7077%2013.3333M15.7923%2025H19.1846C20.3842%2025%2021.4735%2024.6653%2022.3829%2023.6332C22.9864%2022.9482%2022.8997%2022%2022.8997%2022M6.26154%2013.667C7.51055%2013.667%208.52308%2014.7117%208.52308%2016.0003V19.5003C8.52308%2020.789%207.51055%2021.8337%206.26154%2021.8337C5.01253%2021.8337%204%2020.789%204%2019.5003V16.0003C4%2014.7117%205.01253%2013.667%206.26154%2013.667ZM22.7385%2013.5C23.9875%2013.5%2025%2014.5447%2025%2015.8333V19.3333C25%2020.622%2023.9875%2021.6667%2022.7385%2021.6667C21.4894%2021.6667%2020.4769%2020.622%2020.4769%2019.3333V15.8333C20.4769%2014.5447%2021.4894%2013.5%2022.7385%2013.5Z'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%230E0E12'/%3e%3c/svg%3e",WC=Object.assign({"../assets/benefits/acquisition.svg":wC,"../assets/benefits/analytics.svg":DC,"../assets/benefits/audience-1.svg":UC,"../assets/benefits/audience.svg":NC,"../assets/benefits/automation.svg":LC,"../assets/benefits/data.svg":OC,"../assets/benefits/expertise.svg":PC,"../assets/benefits/globe.svg":zC,"../assets/benefits/network.svg":IC,"../assets/benefits/payment.svg":BC,"../assets/benefits/profit.svg":FC,"../assets/benefits/projects.svg":HC,"../assets/benefits/results.svg":GC,"../assets/benefits/search.svg":VC,"../assets/benefits/segments.svg":kC,"../assets/benefits/sources.svg":XC,"../assets/benefits/speed.svg":qC,"../assets/benefits/support.svg":YC});function ZC({name:o}){return nt.createElement("img",{className:"benefit-icon",src:WC[`../assets/benefits/${o}.svg`],width:"28",height:"28",alt:"","aria-hidden":"true"})}const jC={uk:[{lead:"З 2015 року залучаємо користувачів через рекламу у Meta, Instagram, Snapchat, TikTok та X (Twitter)",paragraphs:["Будуємо маркетингові воронки для діджитал-компаній у різних напрямах. Поєднуємо креативний підхід з аналітикою, щоб знаходити потрібну аудиторію та перетворювати її інтерес на цільові дії.","Досліджуємо продукт партнера й потреби потенційних клієнтів, проєктуємо їхній шлях до покупки та працюємо з даними на кожному етапі. Це допомагає коригувати кампанії й підвищувати ефективність залучення."],benefits:[["Ефективне залучення клієнтів"],["Швидкість реагування"],["Автоматизація"],["Зацікавлена аудиторія"]],icons:["acquisition","speed","automation","audience"],tags:"META ADS · TIKTOK · SNAPCHAT · X"},{lead:"Залучаємо користувачів для наших партнерів через Google Ads, Microsoft Ads та інші рекламні платформи",paragraphs:["Працюємо з пошуковою, медійною та нативною рекламою різних діджитал-компаній на ринках англомовних країн. Будуємо маркетингові воронки, які ведуть користувача від рекламного оголошення до реєстрації чи покупки на сайті партнера.","Наші сайти допомагають користувачам ознайомитися з продуктами й сервісами та обрати потрібну пропозицію. Відстежуємо ефективність рекламних кампаній, аналізуємо цільові дії та оптимізуємо витрати на залучення. Робимо фокус на результатах, які приносять дохід нашим партнерам і команді."],benefits:[["Різні джерела залучення"],["Вимірюваний результат"],["Оплата за цільові дії"],["Фокус на прибутковості"]],icons:["sources","results","payment","profit"],tags:"GOOGLE ADS · MICROSOFT ADS · DISPLAY · NATIVE ADS"},{lead:"Створюємо та розвиваємо власні онлайн-проєкти, які залучають користувачів із пошуку Google та Bing",paragraphs:["Працюємо з різними діджитал-компаніями на міжнародних ринках. Досліджуємо, що шукають користувачі, створюємо контент під їхні запити та розвиваємо сайти, які допомагають обирати потрібні продукти й сервіси.","Поєднуємо SEO, контент, аналітику й технічну розробку, щоб залучати більше користувачів із пошукових систем та приводити клієнтів нашим партнерам. Команда відповідає за повний цикл розвитку проєктів — від вибору ніші й запуску сайту до його зростання та монетизації."],benefits:[["Робота з пошуковим запитом"],["Власні проєкти"],["Рішення на основі даних"],["Спільна експертиза"]],icons:["search","projects","data","expertise"],tags:"GOOGLE SEARCH · КОНТЕНТ · АНАЛІТИКА · ВЛАСНІ ПРОЄКТИ"},{lead:"Cpamatica — глобальна афіліат-мережа powered by expla, яка об’єднує рекламодавців та афіліатів із 2015 року",paragraphs:["Допомагаємо рекламодавцям залучати нових користувачів, а афіліатам — знаходити пропозиції для роботи зі своєю аудиторією.","Поєднуємо досвід у performance-маркетингу, розгалужену мережу партнерів та аналітику, щоб розвивати діджитал-компанії наших клієнтів. Будуємо співпрацю, яка приносить результат рекламодавцям і афіліатам."],benefits:[["Професійна підтримка"],["Зацікавлена аудиторія"],["Широка мережа паблішерів"],["Аналітика та звітність"],["Сегментація аудиторії"],["Міжнародна географія"]],icons:["support","audience-1","network","analytics","segments","globe"],tags:"CPAMATICA · РЕКЛАМОДАВЦІ · АФІЛІАТИ · ПАРТНЕРСТВА",stats:[["1 000+","активних партнерів"],["1 000+","рекламних пропозицій"],["11+","років досвіду"]]}],en:[{lead:"Acquiring users through Meta, Instagram, Snapchat, TikTok, and X (Twitter) advertising since 2015",paragraphs:["We build marketing funnels for digital companies, bringing creative thinking and analytics together to find the right audience and turn interest into action.","We research our partners’ products and customers’ needs, design the path to purchase, and work with data at every stage to improve acquisition."],benefits:[["Efficient customer acquisition"],["Fast response"],["Automation"],["Interested audiences"]],icons:["acquisition","speed","automation","audience"],tags:"META ADS · TIKTOK · SNAPCHAT · X"},{lead:"Acquiring users for our partners through Google Ads, Microsoft Ads, and other advertising platforms",paragraphs:["We work with search, display, and native advertising for digital companies in English-speaking markets. Our funnels take users from an ad to a registration or purchase.","Our websites help users discover products and services and choose the right offer. We analyze conversions and optimize acquisition costs."],benefits:[["Multiple acquisition sources"],["Measurable results"],["Pay for actions"],["Focus on profitability"]],icons:["sources","results","payment","profit"],tags:"GOOGLE ADS · MICROSOFT ADS · DISPLAY · NATIVE ADS"},{lead:"Creating and growing our own online projects that attract users from Google and Bing search",paragraphs:["We research what people search for, create content around their needs, and develop websites that help them choose products and services.","We combine SEO, content, analytics, and engineering across the full project lifecycle, from niche selection and launch to growth and monetization."],benefits:[["Search intent"],["Our own projects"],["Data-driven decisions"],["Shared expertise"]],icons:["search","projects","data","expertise"],tags:"GOOGLE SEARCH · CONTENT · ANALYTICS · OWN PROJECTS"},{lead:"Cpamatica is a global affiliate network powered by expla, connecting advertisers and affiliates since 2015",paragraphs:["We help advertisers acquire new users and affiliates find offers for their audiences.","We combine performance-marketing experience, a broad partner network, and analytics to build collaborations that deliver results for advertisers and affiliates."],benefits:[["Professional support"],["Interested audiences"],["Extensive publisher network"],["Analytics and reporting"],["Audience segmentation"],["International reach"]],icons:["support","audience-1","network","analytics","segments","globe"],tags:"CPAMATICA · ADVERTISERS · AFFILIATES · PARTNERSHIPS",stats:[["1 000+","active partners"],["1 000+","advertising offers"],["11+","years of experience"]]}]};function KC({language:o,cards:e,index:i,onChange:r,onClose:l,closeLabel:c}){const[d,h]=ke.useState(!1),[v,g]=ke.useState(!1),m=ke.useRef(null),p=ke.useId(),_=ke.useId();ke.useEffect(()=>{h(!1),g(!1)},[i]);const M=e[i],x=jC[o][i];return nt.createElement(nt.Fragment,null,nt.createElement("header",{className:"direction-dialog-header"},nt.createElement("div",{className:"direction-dialog-toolbar"},nt.createElement(Um,{linked:!1}),nt.createElement("button",{className:"dialog-close direction-dialog-close",type:"button","aria-label":c,onClick:l,autoFocus:!0},nt.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},nt.createElement("path",{d:"m5 5 14 14M19 5 5 19"})))),nt.createElement("nav",{className:"direction-tabs","aria-label":o==="uk"?"Напрямки бізнесу":"Business areas"},e.map((A,y)=>nt.createElement("button",{type:"button",key:A.title,"aria-current":y===i?"page":void 0,onClick:()=>r(y)},A.title,y!==i&&nt.createElement("span",{"aria-hidden":"true"},"›")))),nt.createElement("div",{className:"direction-select-wrap"},nt.createElement("button",{ref:m,type:"button",className:"direction-select","aria-label":o==="uk"?"Напрямок":"Expertise","aria-expanded":d,"aria-controls":p,onClick:()=>h(!d)},M.title,nt.createElement("span",{"aria-hidden":"true"},d?"⌃":"⌄")),d&&nt.createElement("div",{id:p,className:"direction-options"},e.map((A,y)=>y!==i&&nt.createElement("button",{type:"button",key:A.title,onClick:()=>{h(!1),r(y),m.current?.focus()}},A.title)))),nt.createElement("h2",{id:"dialog-title"},M.title),nt.createElement("p",{className:"direction-dialog-tags"},x.tags)),nt.createElement("div",{className:"direction-dialog-body"},nt.createElement("p",{className:"direction-dialog-lead"},x.lead),nt.createElement("div",{className:"direction-dialog-description"},x.paragraphs.map(A=>nt.createElement("p",{key:A},A)))),x.stats&&nt.createElement("section",{className:"direction-stats"},nt.createElement("h3",{className:"direction-benefits-heading"},nt.createElement("i",{"aria-hidden":"true"}),o==="uk"?"ПОКАЗНИКИ":"KEY FIGURES"),nt.createElement("dl",null,x.stats.map(([A,y])=>nt.createElement("div",{key:y},nt.createElement("dt",null,A),nt.createElement("dd",null,y))))),nt.createElement("section",{className:"direction-dialog-benefits"},nt.createElement("h3",{className:"direction-benefits-heading"},nt.createElement("i",{"aria-hidden":"true"}),o==="uk"?"ПЕРЕВАГИ":"OUR STRENGTHS"),nt.createElement("ul",{id:_,className:`dialog-benefits${x.stats&&!v?" is-collapsed":""}`},x.benefits.map(([A],y)=>nt.createElement("li",{key:A},nt.createElement(ZC,{name:x.icons[y]}),nt.createElement("h4",null,A)))),x.stats&&nt.createElement("button",{className:"benefits-toggle",type:"button","aria-expanded":v,"aria-controls":_,onClick:()=>g(!v)},o==="uk"?v?"Показати менше":"Показати більше":v?"Show less":"Show more",nt.createElement("span",{"aria-hidden":"true"},v?"−":"+"))))}const QC={uk:{nav:["Про нас","Наші напрямки","Кар’єра","Блог","Контакти"],title:"expla топ-100 партнерів",subtitle:"Meta Ads & Google Ads у Європі",directions:"Наші напрямки",more:"ДЕТАЛЬНІШЕ",cards:[{title:"Social Media Advertising",description:"Залучаємо користувачів через рекламу в соціальних мережах",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Перетворюємо рекламний клік на реєстрацію чи покупку",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Розвиваємо власні сайти та залучаємо користувачів із пошуку Google",tags:"ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА"},{title:"Affiliate Network",description:"Поєднуємо рекламодавців і афіліатів у партнерську мережу",tags:"CPAMATICA · 1 000+ ПАРТНЕРІВ"}],seen:"нашу рекламу бачать",online:"онлайн-користувачів у світі",users:"8 з 10 користувачів",zone:"НАША ЗОНА РОБОТИ",channelsStart:"Канали, що перетворюють",channelsEnd:"увагу на",result:"результат",close:"Закрити",menu:"Відкрити меню",socialTitle:"Соціальні мережі expla",socialBody:"Дізнавайтеся більше про команду, ідеї та життя expla.",careerTitle:"Зростай разом з expla",careerBody:"Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.",careerAction:"Дослідити напрямки",blogTitle:"Ідеї, що рухають уперед",blogBody:"Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.",contactTitle:"Почнімо з вашої задачі",contactBody:"Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.",name:"Ваше ім’я",email:"Email",message:"Про вашу задачу",submit:"Скопіювати звернення",copied:"Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.",copyError:"Скопіюйте текст із поля нижче.",skip:"Перейти до вмісту",globe:"Жива планета expla"},en:{nav:["About us","Our expertise","Careers","Blog","Contacts"],title:"expla is a top-100 partner",subtitle:"for Meta Ads & Google Ads in Europe",directions:"Our expertise",more:"LEARN MORE",cards:[{title:"Social Media Advertising",description:"Connecting people with brands through social media advertising",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Turning an ad click into a registration or a purchase",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Growing our own websites and attracting users from Google search",tags:"ORGANIC SEARCH · CONTENT · ANALYTICS"},{title:"Affiliate Network",description:"Bringing advertisers and affiliates together in a partner network",tags:"CPAMATICA · 1,000+ PARTNERS"}],seen:"our advertising reaches",online:"of online users worldwide",users:"8 out of 10 users",zone:"WHERE WE WORK",channelsStart:"Channels that turn",channelsEnd:"attention into",result:"results",close:"Close",menu:"Open menu",socialTitle:"Find expla on social media",socialBody:"Get to know our people, ideas, and life at expla.",careerTitle:"Grow with expla",careerBody:"Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.",careerAction:"Explore our expertise",blogTitle:"Ideas that move us forward",blogBody:"Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.",contactTitle:"Let’s start with your challenge",contactBody:"Tell us what you want to grow. Prepare and copy your inquiry here.",name:"Your name",email:"Email",message:"Your challenge",submit:"Copy inquiry",copied:"Inquiry copied. You can send it through your preferred contact channel.",copyError:"Copy the text from the field below.",skip:"Skip to content",globe:"The live expla globe"}};function jc(){return nt.createElement("svg",{"aria-hidden":"true",width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},nt.createElement("path",{d:"M4 12h15m-6-6 6 6-6 6"}))}function JC({name:o}){return o==="Microsoft"?nt.createElement("span",{className:"channel-brand microsoft"},nt.createElement("span",{className:"windows","aria-hidden":"true"},nt.createElement("i",null),nt.createElement("i",null),nt.createElement("i",null),nt.createElement("i",null)),"Microsoft"):o==="Meta"?nt.createElement("span",{className:"channel-brand meta"},nt.createElement("svg",{width:"35",height:"24",viewBox:"0 0 40 25",fill:"none",stroke:"currentColor",strokeWidth:"3","aria-hidden":"true"},nt.createElement("path",{d:"M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"})),"Meta"):o==="TikTok"?nt.createElement("span",{className:"channel-brand tiktok"},nt.createElement("svg",{width:"25",height:"29",viewBox:"0 0 26 30",fill:"currentColor","aria-hidden":"true"},nt.createElement("path",{d:"M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"})),"TikTok"):nt.createElement("span",{className:`channel-brand ${o==="Google"?"google":""}`},o)}function $C({t:o}){const[e,i]=ke.useState(""),[r,l]=ke.useState("");async function c(d){d.preventDefault();const h=new FormData(d.currentTarget),v=`${h.get("name")}
${h.get("email")}

${h.get("message")}`;try{await navigator.clipboard.writeText(v),i(o.copied)}catch{l(v),i(o.copyError)}}return nt.createElement("form",{className:"contact-form",onSubmit:c},nt.createElement("label",null,o.name,nt.createElement("input",{name:"name",autoComplete:"name",required:!0,maxLength:100})),nt.createElement("label",null,o.email,nt.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:200})),nt.createElement("label",null,o.message,nt.createElement("textarea",{name:"message",rows:4,required:!0,maxLength:4e3})),nt.createElement("button",{className:"primary-button",type:"submit"},o.submit,nt.createElement(jc,null)),e&&nt.createElement("p",{className:"form-status",role:"status"},e),r&&nt.createElement("textarea",{readOnly:!0,"aria-label":o.message,value:r,rows:5,onFocus:d=>d.target.select()}))}function tw(){const[o,e]=ke.useState("uk"),[i,r]=ke.useState(!1),[l,c]=ke.useState(null),d=ke.useRef(null),[h,v]=AC(),g=`reach-ring-${ke.useId().replaceAll(":","")}`,m=QC[o],p=!!l;ke.useEffect(()=>{document.documentElement.lang=o},[o]),ke.useEffect(()=>{if(!l)return;const y=d.current,E=document.activeElement;y.showModal();const N=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{y.close(),document.body.style.overflow=N,E instanceof HTMLElement&&E.isConnected&&E.focus({preventScroll:!0})}},[p]);function _(y){r(!1),c(y)}function M(){c(null),document.getElementById("directions").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}const x=l?.type==="direction"?m.cards[l.index]:null,A=x?.title||(l?.type==="career"?m.careerTitle:l?.type==="blog"?m.blogTitle:l?.type==="contact"?m.contactTitle:`${l?.network||""} · expla`);return nt.createElement(nt.Fragment,null,nt.createElement("a",{className:"skip-link",href:"#main"},m.skip),nt.createElement("header",{className:"masthead"},nt.createElement(RC,null),nt.createElement("div",{className:"site-header container"},nt.createElement(Um,null),nt.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":i,"aria-controls":"site-navigation","aria-label":m.menu,onClick:()=>r(!i)},nt.createElement("span",null),nt.createElement("span",null)),nt.createElement("nav",{id:"site-navigation",className:`navigation${i?" is-open":""}`,"aria-label":o==="uk"?"Основна навігація":"Main navigation"},nt.createElement("a",{href:"#about",onClick:()=>r(!1)},m.nav[0]),nt.createElement("a",{href:"#directions",onClick:()=>r(!1)},m.nav[1]),nt.createElement("button",{onClick:()=>_({type:"career"})},m.nav[2]),nt.createElement("button",{onClick:()=>_({type:"blog"})},m.nav[3]),nt.createElement("button",{onClick:()=>_({type:"contact"})},m.nav[4])),nt.createElement("div",{className:"language-switch","aria-label":o==="uk"?"Мова сайту":"Website language"},nt.createElement("button",{lang:"uk","aria-pressed":o==="uk",onClick:()=>e("uk")},"UA"),nt.createElement("span",{"aria-hidden":"true"},"|"),nt.createElement("button",{lang:"en","aria-pressed":o==="en",onClick:()=>e("en")},"EN"))),nt.createElement("section",{className:"hero container",id:"about"},nt.createElement("h1",null,m.title),nt.createElement("p",null,m.subtitle))),nt.createElement("main",{id:"main"},nt.createElement("section",{className:"directions",id:"directions","aria-labelledby":"directions-title"},nt.createElement("div",{className:"container"},nt.createElement("h2",{id:"directions-title"},m.directions),nt.createElement("div",{className:"direction-grid"},m.cards.map((y,E)=>nt.createElement("article",{className:"direction-card",key:y.title},nt.createElement("h3",null,y.title),nt.createElement("p",null,y.description),nt.createElement("div",{className:"card-bottom"},nt.createElement("p",{className:"card-tags"},y.tags),nt.createElement("button",{className:"detail-button","aria-haspopup":"dialog",onClick:()=>_({type:"direction",index:E}),"aria-label":`${m.more}: ${y.title}`},m.more,nt.createElement(jc,null)))))))),nt.createElement("section",{className:`reach container${v?" is-revealed":""}`,ref:h,"aria-label":m.globe},nt.createElement("div",{className:"reach-globe"},nt.createElement("svg",{className:"globe-ring",viewBox:"0 0 100 100","aria-hidden":"true"},nt.createElement("defs",null,nt.createElement("linearGradient",{id:g,x1:"0",y1:"0",x2:"1",y2:"1"},nt.createElement("stop",{offset:"0%",stopColor:"#20c57c"}),nt.createElement("stop",{offset:"55%",stopColor:"#138353"}),nt.createElement("stop",{offset:"100%",stopColor:"#06492e"}))),nt.createElement("circle",{className:"ring-progress",cx:"50",cy:"50",r:"49",pathLength:"100",stroke:`url(#${g})`})),nt.createElement(EE,{dataUrl:"./data/countries.geojson"})),nt.createElement("div",{className:"reach-copy"},nt.createElement("p",{className:"reach-intro"},m.seen),nt.createElement("p",{className:"reach-value"},"80",nt.createElement("span",null,"%")),nt.createElement("h2",null,m.online),nt.createElement("div",{className:"reach-meter"},nt.createElement("span",{className:"meter-blocks","aria-hidden":"true"},Array.from({length:10},(y,E)=>nt.createElement("i",{key:E,className:E<8?"is-filled":"",style:{"--cube-delay":`${E*.26}s`}}))),nt.createElement("span",null,m.users)))),nt.createElement("section",{className:"channels","aria-labelledby":"channels-title"},nt.createElement("div",{className:"container channels-heading"},nt.createElement("p",{className:"section-eyebrow"},nt.createElement("i",{"aria-hidden":"true"}),m.zone),nt.createElement("h2",{id:"channels-title"},m.channelsStart,nt.createElement("br",null),m.channelsEnd," ",nt.createElement("span",null,m.result))),nt.createElement(CC,{items:["Google","Meta","Microsoft","Native Ads","TikTok","Snapchat","X","SEO","Affiliate Network"],renderItem:y=>nt.createElement(JC,{name:y}),label:o==="uk"?"Рекламні платформи":"Advertising platforms"}))),nt.createElement("footer",{className:"site-footer container"},nt.createElement(Um,{small:!0}),nt.createElement("div",{className:"social-links"},["Facebook","Instagram","LinkedIn"].map(y=>nt.createElement("button",{key:y,onClick:()=>_({type:"social",network:y})},y)))),l&&nt.createElement("dialog",{className:`info-dialog${x?" direction-dialog":""}`,ref:d,"aria-labelledby":"dialog-title",onCancel:y=>{y.preventDefault(),c(null)},onClick:y=>{if(y.target===y.currentTarget){const E=y.currentTarget.getBoundingClientRect();(y.clientX<E.left||y.clientX>E.right||y.clientY<E.top||y.clientY>E.bottom)&&c(null)}}},x?nt.createElement(KC,{language:o,cards:m.cards,index:l.index,closeLabel:m.close,onClose:()=>c(null),onChange:y=>{c({type:"direction",index:y}),d.current.scrollTop=0}}):nt.createElement(nt.Fragment,null,nt.createElement("button",{className:"dialog-close",type:"button","aria-label":m.close,onClick:()=>c(null),autoFocus:!0},"×"),nt.createElement("h2",{id:"dialog-title"},A),l.type==="contact"?nt.createElement(nt.Fragment,null,nt.createElement("p",null,m.contactBody),nt.createElement($C,{t:m})):l.type==="career"?nt.createElement(nt.Fragment,null,nt.createElement("p",null,m.careerBody),nt.createElement("button",{className:"primary-button",onClick:M},m.careerAction,nt.createElement(jc,null))):l.type==="blog"?nt.createElement(nt.Fragment,null,nt.createElement("p",null,m.blogBody),nt.createElement("div",{className:"dialog-directions"},m.cards.map((y,E)=>nt.createElement("button",{key:y.title,onClick:()=>{_({type:"direction",index:E}),d.current.scrollTop=0}},y.title,nt.createElement(jc,null))))):nt.createElement("p",null,m.socialBody))))}const ew=o=>{window.__globeFrame=o,window.__globeSamples?.push(o)},nw=new URLSearchParams(window.location.search).get("view")==="globe";cM.createRoot(document.getElementById("root")).render(nw?nt.createElement("main",{className:"standalone-preview","aria-label":"Globe integration preview"},nt.createElement(EE,{dataUrl:"./data/countries.geojson",onFrame:ew})):nt.createElement(tw,null));
