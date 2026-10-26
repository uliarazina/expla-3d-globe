(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function JM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ih={exports:{}},ue={};var Q_;function $M(){if(Q_)return ue;Q_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),x=Symbol.iterator;function M(X){return X===null||typeof X!="object"?null:(X=x&&X[x]||X["@@iterator"],typeof X=="function"?X:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,E={};function U(X,ct,J){this.props=X,this.context=ct,this.refs=E,this.updater=J||A}U.prototype.isReactComponent={},U.prototype.setState=function(X,ct){if(typeof X!="object"&&typeof X!="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,ct,"setState")},U.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};function L(){}L.prototype=U.prototype;function R(X,ct,J){this.props=X,this.context=ct,this.refs=E,this.updater=J||A}var I=R.prototype=new L;I.constructor=R,y(I,U.prototype),I.isPureReactComponent=!0;var P=Array.isArray;function N(){}var H={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(X,ct,J){var j=J.ref;return{$$typeof:o,type:X,key:ct,ref:j!==void 0?j:null,props:J}}function F(X,ct){return w(X.type,ct,X.props)}function et(X){return typeof X=="object"&&X!==null&&X.$$typeof===o}function rt(X){var ct={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(J){return ct[J]})}var ut=/\/+/g;function V(X,ct){return typeof X=="object"&&X!==null&&X.key!=null?rt(""+X.key):ct.toString(36)}function z(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status=="string"?X.then(N,N):(X.status="pending",X.then(function(ct){X.status==="pending"&&(X.status="fulfilled",X.value=ct)},function(ct){X.status==="pending"&&(X.status="rejected",X.reason=ct)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function Q(X,ct,J,j,yt){var wt=typeof X;(wt==="undefined"||wt==="boolean")&&(X=null);var At=!1;if(X===null)At=!0;else switch(wt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(X.$$typeof){case o:case e:At=!0;break;case m:return At=X._init,Q(At(X._payload),ct,J,j,yt)}}if(At)return yt=yt(X),At=j===""?"."+V(X,0):j,P(yt)?(J="",At!=null&&(J=At.replace(ut,"$&/")+"/"),Q(yt,ct,J,"",function(G){return G})):yt!=null&&(et(yt)&&(yt=F(yt,J+(yt.key==null||X&&X.key===yt.key?"":(""+yt.key).replace(ut,"$&/")+"/")+At)),ct.push(yt)),1;At=0;var xt=j===""?".":j+":";if(P(X))for(var Xt=0;Xt<X.length;Xt++)j=X[Xt],wt=xt+V(j,Xt),At+=Q(j,ct,J,wt,yt);else if(Xt=M(X),typeof Xt=="function")for(X=Xt.call(X),Xt=0;!(j=X.next()).done;)j=j.value,wt=xt+V(j,Xt++),At+=Q(j,ct,J,wt,yt);else if(wt==="object"){if(typeof X.then=="function")return Q(z(X),ct,J,j,yt);throw ct=String(X),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function Y(X,ct,J){if(X==null)return X;var j=[],yt=0;return Q(X,j,"","",function(wt){return ct.call(J,wt,yt++)}),j}function mt(X){if(X._status===-1){var ct=X._result,J=ct();J.then(function(j){(X._status===0||X._status===-1)&&(X._status=1,X._result=j,J.status===void 0&&(J.status="fulfilled",J.value=j))},function(j){(X._status===0||X._status===-1)&&(X._status=2,X._result=j,J.status===void 0&&(J.status="rejected",J.reason=j))}),X._status===-1&&(X._status=0,X._result=J)}if(X._status===1)return X._result.default;throw X._result}var Et=typeof reportError=="function"?reportError:function(X){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X=="object"&&X!==null&&typeof X.message=="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",X);return}console.error(X)};function Ot(X){var ct=H.T,J={};J.types=ct!==null?ct.types:null,H.T=J;try{var j=X(),yt=H.S;yt!==null&&yt(J,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(N,Et)}catch(wt){Et(wt)}finally{ct!==null&&J.types!==null&&(ct.types=J.types),H.T=ct}}function Zt(X){var ct=H.T;if(ct!==null){var J=ct.types;J===null?ct.types=[X]:J.indexOf(X)===-1&&J.push(X)}else Ot(Zt.bind(null,X))}var re={map:Y,forEach:function(X,ct,J){Y(X,function(){ct.apply(this,arguments)},J)},count:function(X){var ct=0;return Y(X,function(){ct++}),ct},toArray:function(X){return Y(X,function(ct){return ct})||[]},only:function(X){if(!et(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};return ue.Activity=p,ue.Children=re,ue.Component=U,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=R,ue.StrictMode=r,ue.Suspense=v,ue.ViewTransition=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ue.__COMPILER_RUNTIME={__proto__:null,c:function(X){return H.H.useMemoCache(X)}},ue.addTransitionType=Zt,ue.cache=function(X){return function(){return X.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(X,ct,J){if(X==null)throw Error("The argument must be a React element, but you passed "+X+".");var j=y({},X.props),yt=X.key;if(ct!=null)for(wt in ct.key!==void 0&&(yt=""+ct.key),ct)!D.call(ct,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&ct.ref===void 0||(j[wt]=ct[wt]);var wt=arguments.length-2;if(wt===1)j.children=J;else if(1<wt){for(var At=Array(wt),xt=0;xt<wt;xt++)At[xt]=arguments[xt+2];j.children=At}return w(X.type,yt,j)},ue.createContext=function(X){return X={$$typeof:d,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:f,_context:X},X},ue.createElement=function(X,ct,J){var j,yt={},wt=null;if(ct!=null)for(j in ct.key!==void 0&&(wt=""+ct.key),ct)D.call(ct,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(yt[j]=ct[j]);var At=arguments.length-2;if(At===1)yt.children=J;else if(1<At){for(var xt=Array(At),Xt=0;Xt<At;Xt++)xt[Xt]=arguments[Xt+2];yt.children=xt}if(X&&X.defaultProps)for(j in At=X.defaultProps,At)yt[j]===void 0&&(yt[j]=At[j]);return w(X,wt,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(X){return{$$typeof:h,render:X}},ue.isValidElement=et,ue.lazy=function(X){return{$$typeof:m,_payload:{_status:-1,_result:X},_init:mt}},ue.memo=function(X,ct){return{$$typeof:g,type:X,compare:ct===void 0?null:ct}},ue.startTransition=Ot,ue.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ue.use=function(X){return H.H.use(X)},ue.useActionState=function(X,ct,J){return H.H.useActionState(X,ct,J)},ue.useCallback=function(X,ct){return H.H.useCallback(X,ct)},ue.useContext=function(X){return H.H.useContext(X)},ue.useDebugValue=function(){},ue.useDeferredValue=function(X,ct){return H.H.useDeferredValue(X,ct)},ue.useEffect=function(X,ct){return H.H.useEffect(X,ct)},ue.useEffectEvent=function(X){return H.H.useEffectEvent(X)},ue.useId=function(){return H.H.useId()},ue.useImperativeHandle=function(X,ct,J){return H.H.useImperativeHandle(X,ct,J)},ue.useInsertionEffect=function(X,ct){return H.H.useInsertionEffect(X,ct)},ue.useLayoutEffect=function(X,ct){return H.H.useLayoutEffect(X,ct)},ue.useMemo=function(X,ct){return H.H.useMemo(X,ct)},ue.useOptimistic=function(X,ct){return H.H.useOptimistic(X,ct)},ue.useReducer=function(X,ct,J){return H.H.useReducer(X,ct,J)},ue.useRef=function(X){return H.H.useRef(X)},ue.useState=function(X){return H.H.useState(X)},ue.useSyncExternalStore=function(X,ct,J){return H.H.useSyncExternalStore(X,ct,J)},ue.useTransition=function(){return H.H.useTransition()},ue.version="19.3.1",ue}var J_;function Dm(){return J_||(J_=1,Ih.exports=$M()),Ih.exports}var rn=Dm();const ot=JM(rn);var Bh={exports:{}},vl={},Fh={exports:{}},Hh={};var $_;function tT(){return $_||($_=1,(function(o){function e(z,Q){var Y=z.length;z.push(Q);t:for(;0<Y;){var mt=Y-1>>>1,Et=z[mt];if(0<l(Et,Q))z[mt]=Q,z[Y]=Et,Y=mt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Y=z.pop();if(Y!==Q){z[0]=Y;t:for(var mt=0,Et=z.length,Ot=Et>>>1;mt<Ot;){var Zt=2*(mt+1)-1,re=z[Zt],X=Zt+1,ct=z[X];if(0>l(re,Y))X<Et&&0>l(ct,re)?(z[mt]=ct,z[X]=Y,mt=X):(z[mt]=re,z[Zt]=Y,mt=Zt);else if(X<Et&&0>l(ct,Y))z[mt]=ct,z[X]=Y,mt=X;else break t}}return Q}function l(z,Q){var Y=z.sortIndex-Q.sortIndex;return Y!==0?Y:z.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var v=[],g=[],m=1,p=null,_=3,x=!1,M=!1,A=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var Q=i(g);Q!==null;){if(Q.callback===null)r(g);else if(Q.startTime<=z)r(g),Q.sortIndex=Q.expirationTime,e(v,Q);else break;Q=i(g)}}function I(z){if(A=!1,R(z),!M)if(i(v)!==null)M=!0,P||(P=!0,et());else{var Q=i(g);Q!==null&&V(I,Q.startTime-z)}}var P=!1,N=-1,H=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<H)}function F(){if(y=!1,P){var z=o.unstable_now();D=z;var Q=!0;try{t:{M=!1,A&&(A=!1,U(N),N=-1),x=!0;var Y=_;try{e:{for(R(z),p=i(v);p!==null&&!(p.expirationTime>z&&w());){var mt=p.callback;if(typeof mt=="function"){p.callback=null,_=p.priorityLevel;var Et=mt(p.expirationTime<=z);if(z=o.unstable_now(),typeof Et=="function"){p.callback=Et,R(z),Q=!0;break e}p===i(v)&&r(v),R(z)}else r(v);p=i(v)}if(p!==null)Q=!0;else{var Ot=i(g);Ot!==null&&V(I,Ot.startTime-z),Q=!1}}break t}finally{p=null,_=Y,x=!1}Q=void 0}}finally{Q?et():P=!1}}}var et;if(typeof L=="function")et=function(){L(F)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ut=rt.port2;rt.port1.onmessage=F,et=function(){ut.postMessage(null)}}else et=function(){E(F,0)};function V(z,Q){N=E(function(){z(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var Y=_;_=Q;try{return z()}finally{_=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=_;_=z;try{return Q()}finally{_=Y}},o.unstable_scheduleCallback=function(z,Q,Y){var mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?mt+Y:mt):Y=mt,z){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,z={id:m++,callback:Q,priorityLevel:z,startTime:Y,expirationTime:Et,sortIndex:-1},Y>mt?(z.sortIndex=Y,e(g,z),i(v)===null&&z===i(g)&&(A?(U(N),N=-1):A=!0,V(I,Y-mt))):(z.sortIndex=Et,e(v,z),M||x||(M=!0,P||(P=!0,et()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var Q=_;return function(){var Y=_;_=Q;try{return z.apply(this,arguments)}finally{_=Y}}}})(Hh)),Hh}var tS;function eT(){return tS||(tS=1,Fh.exports=tT()),Fh.exports}var Gh={exports:{}},Ln={};var eS;function nT(){if(eS)return Ln;eS=1;var o=Dm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===d?d:""+x,children:m,containerInfo:p,implementation:_}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(m){return{$$typeof:f,_reason:m}},Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(m,p,null,_)},Ln.flushSync=function(m){var p=v.T,_=r.p;try{if(v.T=null,r.p=2,m)return m()}finally{v.T=p,r.p=_,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=g(_,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:M,fetchPriority:A}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:M,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=g(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=g(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=g(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return v.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var nS;function iT(){if(nS)return Gh.exports;nS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gh.exports=nT(),Gh.exports}var iS;function aT(){if(iS)return vl;iS=1;var o=eT(),e=Dm(),i=iT();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return v(u),t;if(c===s)return v(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=c;break}if(T===s){S=!0,s=u,a=c;break}T=T.sibling}if(!S){for(T=c.child;T;){if(T===a){S=!0,a=c,s=u;break}if(T===s){S=!0,s=c,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function M(t){var n=[null,null],a=_(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,U=null;function L(t,n,a){return t===a?!0:t===n?(E=t,!0):!1}function R(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(E=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function P(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var N=Object.assign,H=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ut=Symbol.for("react.consumer"),V=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),re=Symbol.for("react.memo_cache_sentinel"),X=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),J=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case rt:return"Profiler";case et:return"StrictMode";case Q:return"Suspense";case Y:return"SuspenseList";case Ot:return"Activity";case X:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case V:return t.displayName||"Context";case ut:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mt:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var At=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ze=[],ee=-1;function Jt(t){return{current:t}}function Ut(t){0>ee||(t.current=ze[ee],ze[ee]=null,ee--)}function $t(t,n){ee++,ze[ee]=t.current,t.current=n}var zt=Jt(null),le=Jt(null),be=Jt(null),Ce=Jt(null);function O(t,n){switch($t(be,n),$t(le,t),$t(zt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?s_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=s_(n),t=o_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut(zt),$t(zt,t)}function b(){Ut(zt),Ut(le),Ut(be)}function it(t){var n=t.memoizedState;n!==null&&(Ws._currentValue=n.memoizedState,$t(Ce,t)),n=zt.current;var a=o_(n,t.type);n!==a&&($t(le,t),$t(zt,a))}function gt(t){le.current===t&&(Ut(zt),Ut(le)),Ce.current===t&&(Ut(Ce),Ws._currentValue=G)}var ft,lt;function Ht(t){if(ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ft=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+t+lt}var Ct=!1;function Gt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Pt){var W=Pt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Pt){W=Pt}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){W=Pt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Pt){if(Pt&&W&&typeof Pt.stack=="string")return[Pt.stack,W.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),S=c[0],T=c[1];if(S&&T){var B=S.split(`
`),K=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===K.length)for(s=B.length-1,u=K.length-1;1<=s&&0<=u&&B[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==K[u]){var st=`
`+B[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ht(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return Ht(t.type);case 16:return Ht("Lazy");case 13:return t.child!==n&&n!==null?Ht("Suspense Fallback"):Ht("Suspense");case 19:return Ht("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return Ht("Activity");case 30:return Ht("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Mt=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,It=o.unstable_shouldYield,fe=o.unstable_requestPaint,q=o.unstable_now,Dt=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,qt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,St=o.unstable_LowPriority,jt=o.unstable_IdlePriority,ce=o.log,Xe=o.unstable_setDisableYieldValue,ye=null,nn=null;function _n(t){if(typeof ce=="function"&&Xe(t),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(ye,t)}catch{}}var Pn=Math.clz32?Math.clz32:Yl,ua=Math.log,Ro=Math.LN2;function Yl(t){return t>>>=0,t===0?32:31-(ua(t)/Ro|0)|0}var Tr=256,ca=262144,br=4194304;function gi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~c,s!==0?u=gi(s):(S&=T,S!==0?u=gi(S):a||(a=T&~t,a!==0&&(u=gi(a))))):(T=s&~c,T!==0?u=gi(T):S!==0?u=gi(S):a||(a=s&~t,a!==0&&(u=gi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Wl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Pn(a),u=1<<s;n|=t[s],a&=~u}return n}function ff(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zl(){var t=br;return br<<=1,(br&62914560)===0&&(br=4194304),t}function Co(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function df(t,n,a,s,u,c){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,K=t.hiddenUpdates;for(a=S&~a;0<a;){var st=31-Pn(a),_t=1<<st;T[st]=0,B[st]=-1;var W=K[st];if(W!==null)for(K[st]=null,st=0;st<W.length;st++){var at=W[st];at!==null&&(at.lane&=-536870913)}a&=~_t}s!==0&&C(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(S&~n))}function C(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function $(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function dt(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=Xt.p;return t!==0?t:(t=window.event,t===void 0?32:k_(t.type))}function Bt(t,n){var a=Xt.p;try{return Xt.p=t,n()}finally{Xt.p=a}}var Vt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Vt,Yt="__reactProps$"+Vt,se="__reactContainer$"+Vt,ie="__reactEvents$"+Vt,_e="__reactListeners$"+Vt,Ie="__reactHandles$"+Vt,Je="__reactResources$"+Vt,Le="__reactMarker$"+Vt,we="__reactLoad$"+Vt;function ae(t){delete t[Nt],delete t[Yt],delete t[_e],delete t[Ie]}function Oe(t){var n;if(n=t[Nt])return n;for(var a=t.parentNode;a;){if(n=a[se]||a[Nt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=T_(t);t!==null;){if(a=t[Nt])return a;t=T_(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Nt]||t[se]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ni(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Fa(t){t[we]=void 0}var Ze=new Set,Vn={};function dn(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Vn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var zn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cs={},ki={};function vy(t){return Mt.call(ki,t)?!0:Mt.call(cs,t)?!1:zn.test(t)?ki[t]=!0:(cs[t]=!0,!1)}var Ue=!1;function Ym(){var t=Ue;return Ue=!1,t}function Kl(t,n,a){if(vy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function jl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function fa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _y(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,c.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function hf(t){if(!t._valueTracker){var n=Wm(t)?"checked":"value";t._valueTracker=_y(t,n,""+t[n])}}function Zm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Wm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var Sy=/[\n"\\]/g;function vi(t){return t.replace(Sy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pf(t,n,a,s,u,c,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?S==="number"&&t.value==n?mf(t,ii(t.value)):mf(t,ii(n)):a!=null?mf(t,ii(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ii(T):t.removeAttribute("name")}function Km(t,n,a,s,u,c,S,T){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){hf(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),hf(t)}function mf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function fs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function jm(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function Qm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),hf(t)}function ds(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ey=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ey.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $m(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ue=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Jm(t,u,s),Ue=!0)}else for(var c in n)n.hasOwnProperty(c)&&Jm(t,c,n[c])}function gf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return xy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var vf=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hs=null,ps=null;function tg(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Yt]||null;t:switch(t=n.stateNode,n.type){case"input":if(pf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Yt]||null;if(!u)throw Error(r(90));pf(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Zm(s)}break t;case"textarea":jm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fs(t,!!a.multiple,n,!1)}}}var Sf=!1;function eg(t,n,a){if(Sf)return t(n,a);Sf=!0;try{var s=t(n);return s}finally{if(Sf=!1,(hs!==null||ps!==null)&&(Qu(),hs&&(n=hs,t=ps,ps=hs=null,tg(n),t)))for(n=0;n<t.length;n++)tg(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Yt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(da)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Ef=!1}var Ha=null,yf=null,Jl=null;function ng(){if(Jl)return Jl;var t,n=yf,a=n.length,s,u="value"in Ha?Ha.value:Ha.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[c-s];s++);return Jl=u.slice(t,1<s?1-s:void 0)}function $l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function ig(){return!1}function Xn(t){function n(a,s,u,c,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(c):c[T]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tu:ig,this.isPropagationStopped=ig,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Xn(Ga),Uo=N({},Ga,{view:0,detail:0}),My=Xn(Uo),xf,Mf,No,nu=N({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(xf=t.screenX-No.screenX,Mf=t.screenY-No.screenY):Mf=xf=0,No=t),xf)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),ag=Xn(nu),Ty=N({},nu,{dataTransfer:0}),by=Xn(Ty),Ay=N({},Uo,{relatedTarget:0}),Tf=Xn(Ay),Ry=N({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Xn(Ry),wy=N({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dy=Xn(wy),Uy=N({},Ga,{data:0}),rg=Xn(Uy),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Oy[t])?!!n[t]:!1}function bf(){return Py}var zy=N({},Uo,{key:function(t){if(t.key){var n=Ny[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ly[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iy=Xn(zy),By=N({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=Xn(By),Fy=N({},Ga,{submitter:0}),Hy=Xn(Fy),Gy=N({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),Vy=Xn(Gy),Xy=N({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=Xn(Xy),qy=N({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Xn(qy),Wy=N({},Ga,{newState:0,oldState:0,source:0}),Zy=Xn(Wy),Ky=[9,13,27,32],Af=da&&"CompositionEvent"in window,Lo=null;da&&"documentMode"in document&&(Lo=document.documentMode);var jy=da&&"TextEvent"in window&&!Lo,og=da&&(!Af||Lo&&8<Lo&&11>=Lo),lg=" ",ug=!1;function cg(t,n){switch(t){case"keyup":return Ky.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Qy(t,n){switch(t){case"compositionend":return fg(n);case"keypress":return n.which!==32?null:(ug=!0,lg);case"textInput":return t=n.data,t===lg&&ug?null:t;default:return null}}function Jy(t,n){if(ms)return t==="compositionend"||!Af&&cg(t,n)?(t=ng(),Jl=yf=Ha=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return og&&n.locale!=="ko"?null:n.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$y[t.type]:n==="textarea"}function hg(t,n,a,s){hs?ps?ps.push(s):ps=[s]:hs=s,n=ic(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function tx(t){t_(t,0)}function iu(t){var n=Sn(t);if(Zm(n))return t}function pg(t,n){if(t==="change")return n}var mg=!1;if(da){var Rf;if(da){var Cf="oninput"in document;if(!Cf){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Cf=typeof gg.oninput=="function"}Rf=Cf}else Rf=!1;mg=Rf&&(!document.documentMode||9<document.documentMode)}function vg(){Oo&&(Oo.detachEvent("onpropertychange",_g),Po=Oo=null)}function _g(t){if(t.propertyName==="value"&&iu(Po)){var n=[];hg(n,Po,t,_f(t)),eg(tx,n)}}function ex(t,n,a){t==="focusin"?(vg(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",_g)):t==="focusout"&&vg()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Po)}function ix(t,n){if(t==="click")return iu(n)}function ax(t,n){if(t==="input"||t==="change")return iu(n)}function rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:rx;function zo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Mt.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function wf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,n){var a=Sg(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sg(a)}}function yg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=wf(t.document)}return n}function Df(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var sx=da&&"documentMode"in document&&11>=document.documentMode,gs=null,Uf=null,Io=null,Nf=!1;function Mg(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nf||gs==null||gs!==wf(s)||(s=gs,"selectionStart"in s&&Df(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Io&&zo(Io,s)||(Io=s,s=ic(Uf,"onSelect"),0<s.length&&(n=new eu("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=gs)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var vs={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Lf={},Tg={};da&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function wr(t){if(Lf[t])return Lf[t];if(!vs[t])return t;var n=vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tg)return Lf[t]=n[a];return t}var bg=wr("animationend"),Ag=wr("animationiteration"),Rg=wr("animationstart"),ox=wr("transitionrun"),lx=wr("transitionstart"),ux=wr("transitioncancel"),Cg=wr("transitionend"),wg=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Ui(t,n){wg.set(t,n),dn(n,[t])}var cx=0;function ha(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Pi.identifierPrefix;var a=cx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Dg(t){if(t==null||typeof t=="string")return t;var n=null,a=Is;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function pa(t,n){return t=Dg(t),n=Dg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var au=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],_s=0,Pf=0;function ru(){for(var t=_s,n=Pf=_s=0;n<t;){var a=_i[n];_i[n++]=null;var s=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}c!==0&&Ug(a,u,c)}}function su(t,n,a,s){_i[_s++]=t,_i[_s++]=n,_i[_s++]=a,_i[_s++]=s,Pf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function zf(t,n,a,s){return su(t,n,a,s),ou(t)}function Dr(t,n){return su(t,null,null,n),ou(t)}function Ug(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Pn(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function ou(t){if(50<rl)throw rl=0,ju=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ss={};function fx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new fx(t,n,a,s)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ng(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function lu(t,n,a,s,u,c){var S=0;if(s=t,typeof s=="function")If(s)&&(S=1);else if(typeof s=="string")S=FM(t,a,zt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ot:return t=Kn(31,a,n,u),t.elementType=Ot,t.lanes=c,t;case F:return Ur(a.children,u,c,n);case et:S=8,u|=24;break;case rt:return t=Kn(12,a,n,u|2),t.elementType=rt,t.lanes=c,t;case Q:return t=Kn(13,a,n,u),t.elementType=Q,t.lanes=c,t;case Y:return t=Kn(19,a,n,u),t.elementType=Y,t.lanes=c,t;case Zt:case X:return t=u|32,t=Kn(30,a,n,t),t.elementType=X,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case V:S=10;break t;case ut:S=9;break t;case z:S=11;break t;case mt:S=14;break t;case Et:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Ur(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function Bf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Lg(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Ff(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Og=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=Og.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},Og.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var Es=[],ys=0,uu=null,Bo=0,Ei=[],yi=0,Va=null,Yi=1,Wi="";function ga(t,n){Es[ys++]=Bo,Es[ys++]=uu,uu=t,Bo=n}function Pg(t,n,a){Ei[yi++]=Yi,Ei[yi++]=Wi,Ei[yi++]=Va,Va=t;var s=Yi;t=Wi;var u=32-Pn(s)-1;s&=~(1<<u),a+=1;var c=32-Pn(n)+u;if(30<c){var S=u-u%5;c=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Yi=1<<32-Pn(n)+u|a<<u|s,Wi=c+t}else Yi=1<<c|a<<u|s,Wi=t}function cu(t){t.return!==null&&(ga(t,1),Pg(t,1,0))}function Hf(t){for(;t===uu;)uu=Es[--ys],Es[ys]=null,Bo=Es[--ys],Es[ys]=null;for(;t===Va;)Va=Ei[--yi],Ei[yi]=null,Wi=Ei[--yi],Ei[yi]=null,Yi=Ei[--yi],Ei[yi]=null}function zg(t,n){Ei[yi++]=Yi,Ei[yi++]=Wi,Ei[yi++]=Va,Yi=n.id,Wi=n.overflow,Va=t}var Tn=null,Ke=null,ve=!1,Xa=null,xi=!1,Gf=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Si(n,t)),Gf}function Ig(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Nt]=t,n[Yt]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ee(ol[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Km(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Qm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||a_(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||ka(t,!0)}function fu(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function xs(t){if(t!==Tn)return!1;if(!ve)return fu(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vh(t.type,t.memoizedProps)),a=!a),a&&Ke&&ka(t),fu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=M_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=M_(t)}else n===27?(n=Ke,sr(t.type)?(t=Ah,Ah=null,Ke=t):Ke=n):Ke=Tn?Ti(t.stateNode.nextSibling):null;return!0}function Nr(){Ke=Tn=null,ve=!1}function Vf(){var t=Xa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Xa=null),t}function Fo(t){Xa===null?Xa=[t]:Xa.push(t)}var Xf=Jt(null),Lr=null,va=null;function qa(t,n,a){$t(Xf,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=Xf.current,Ut(Xf)}function du(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function kf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var S=u.child;c=c.firstContext;t:for(;c!==null;){var T=c;c=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){c.lanes|=a,T=c.alternate,T!==null&&(T.lanes|=a),du(c.return,a,t),s||(S=null);break t}c=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,c=S.alternate,c!==null&&(c.lanes|=a),du(S,a,t),S=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,S=u.alternate,S!==null&&(S.lanes|=a),du(u.return,a,t),S=u.child,S=S!==null?S.sibling:null):S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Or(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;ai(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ce.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ws):t=[Ws])}u=u.return}return t!==null&&kf(n,t,a,s),n.flags|=262144,t!==null}function hu(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Lr=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Bg(Lr,t)}function pu(t,n){return Lr===null&&Pr(t),Bg(t,n)}function Bg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(r(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,hn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new dx,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&hx(px,function(){t.controller.abort()})}function Fg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Go=null;function mx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Vo=null,Yf=0,zr=0,Ms=null;function gx(t,n){if(Vo===null){var a=Vo=[];Yf=0,zr=lh(),Ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Yf++,n.then(Hg,Hg),n}function Hg(){if(--Yf===0&&(Go=null,Vo!==null)){Ms!==null&&(Ms.status="fulfilled");var t=Vo;Vo=null,zr=0,Ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Gg=xt.S;xt.S=function(t,n){if(L0=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(t,n),Go!==null)for(var a=Gs;a!==null;)Fg(a,Go),a=a.next;if(a=t.types,a!==null){for(var s=Gs;s!==null;)Fg(s,a),s=s.next;if(zr!==0){s=Go,s===null&&(s=Go=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}Gg!==null&&Gg(t,n)};var Ir=Jt(null);function Wf(){var t=Ir.current;return t!==null?t:We.pooledCache}function mu(t,n){n===null?$t(Ir,Ir.current):$t(Ir,n.pool)}function Vg(){var t=Wf();return t===null?null:{parent:hn._currentValue,pool:t}}var Ts=Error(r(460)),Zf=Error(r(474)),gu=Error(r(542)),vu={then:function(){}};function Xg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yg(t),t}throw Fr=n,Ts}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ts):a}}var Fr=null;function qg(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function Yg(t){if(t===Ts||t===gu)throw Error(r(483))}var bs=null,Xo=0;function _u(t){var n=Xo;return Xo+=1,bs===null&&(bs=[]),kg(bs,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Su(t,n){throw n.$$typeof===H?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wg(t){function n(Z,k){if(t){var nt=Z.deletions;nt===null?(Z.deletions=[k],Z.flags|=16):nt.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function s(Z){for(var k=new Map;Z!==null;)Z.key===null?k.set(Z.index,Z):k.set(Z.key,Z),Z=Z.sibling;return k}function u(Z,k){return Z=ma(Z,k),Z.index=0,Z.sibling=null,Z}function c(Z,k,nt){return Z.index=nt,t?(nt=Z.alternate,nt!==null?(nt=nt.index,nt<k?(Z.flags|=2,k):nt):(Z.flags|=134217730,k)):(Z.flags|=1048576,k)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function T(Z,k,nt,vt){return k===null||k.tag!==6?(k=Bf(nt,Z.mode,vt),k.return=Z,k):(k=u(k,nt),k.return=Z,k)}function B(Z,k,nt,vt){var kt=nt.type;return kt===F?(Z=st(Z,k,nt.props.children,vt,nt.key),Ya(Z,nt),Z):k!==null&&(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Et&&Br(kt)===k.type)?(k=u(k,nt.props),Ya(k,nt),k.return=Z,k):(k=lu(nt.type,nt.key,nt.props,null,Z.mode,vt),Ya(k,nt),k.return=Z,k)}function K(Z,k,nt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Ff(nt,Z.mode,vt),k.return=Z,k):(k=u(k,nt.children||[]),k.return=Z,k)}function st(Z,k,nt,vt,kt){return k===null||k.tag!==7?(k=Ur(nt,Z.mode,vt,kt),k.return=Z,k):(k=u(k,nt),k.return=Z,k)}function _t(Z,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Bf(""+k,Z.mode,nt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return nt=lu(k.type,k.key,k.props,null,Z.mode,nt),Ya(nt,k),nt.return=Z,nt;case w:return k=Ff(k,Z.mode,nt),k.return=Z,k;case Et:return k=Br(k),_t(Z,k,nt)}if(At(k)||j(k))return k=Ur(k,Z.mode,nt,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,_u(k),nt);if(k.$$typeof===V)return _t(Z,pu(Z,k),nt);Su(Z,k)}return null}function W(Z,k,nt,vt){var kt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return kt!==null?null:T(Z,k,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:return nt.key===kt?B(Z,k,nt,vt):null;case w:return nt.key===kt?K(Z,k,nt,vt):null;case Et:return nt=Br(nt),W(Z,k,nt,vt)}if(At(nt)||j(nt))return kt!==null?null:st(Z,k,nt,vt,null);if(typeof nt.then=="function")return W(Z,k,_u(nt),vt);if(nt.$$typeof===V)return W(Z,k,pu(Z,nt),vt);Su(Z,nt)}return null}function at(Z,k,nt,vt,kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Z=Z.get(nt)||null,T(k,Z,""+vt,kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case D:return Z=Z.get(vt.key===null?nt:vt.key)||null,B(k,Z,vt,kt);case w:return Z=Z.get(vt.key===null?nt:vt.key)||null,K(k,Z,vt,kt);case Et:return vt=Br(vt),at(Z,k,nt,vt,kt)}if(At(vt)||j(vt))return Z=Z.get(nt)||null,st(k,Z,vt,kt,null);if(typeof vt.then=="function")return at(Z,k,nt,_u(vt),kt);if(vt.$$typeof===V)return at(Z,k,nt,pu(k,vt),kt);Su(k,vt)}return null}function Pt(Z,k,nt,vt){for(var kt=null,Me=null,te=k,oe=k=0,gn=null;te!==null&&oe<nt.length;oe++){te.index>oe?(gn=te,te=null):gn=te.sibling;var Ae=W(Z,te,nt[oe],vt);if(Ae===null){te===null&&(te=gn);break}t&&te&&Ae.alternate===null&&n(Z,te),k=c(Ae,k,oe),Me===null?kt=Ae:Me.sibling=Ae,Me=Ae,te=gn}if(oe===nt.length)return a(Z,te),ve&&ga(Z,oe),kt;if(te===null){for(;oe<nt.length;oe++)te=_t(Z,nt[oe],vt),te!==null&&(k=c(te,k,oe),Me===null?kt=te:Me.sibling=te,Me=te);return ve&&ga(Z,oe),kt}for(te=s(te);oe<nt.length;oe++)gn=at(te,Z,oe,nt[oe],vt),gn!==null&&(t&&(Ae=gn.alternate,Ae!==null&&te.delete(Ae.key===null?oe:Ae.key)),k=c(gn,k,oe),Me===null?kt=gn:Me.sibling=gn,Me=gn);return t&&te.forEach(function(fr){return n(Z,fr)}),ve&&ga(Z,oe),kt}function Wt(Z,k,nt,vt){if(nt==null)throw Error(r(151));for(var kt=null,Me=null,te=k,oe=k=0,gn=null,Ae=nt.next();te!==null&&!Ae.done;oe++,Ae=nt.next()){te.index>oe?(gn=te,te=null):gn=te.sibling;var fr=W(Z,te,Ae.value,vt);if(fr===null){te===null&&(te=gn);break}t&&te&&fr.alternate===null&&n(Z,te),k=c(fr,k,oe),Me===null?kt=fr:Me.sibling=fr,Me=fr,te=gn}if(Ae.done)return a(Z,te),ve&&ga(Z,oe),kt;if(te===null){for(;!Ae.done;oe++,Ae=nt.next())Ae=_t(Z,Ae.value,vt),Ae!==null&&(k=c(Ae,k,oe),Me===null?kt=Ae:Me.sibling=Ae,Me=Ae);return ve&&ga(Z,oe),kt}for(te=s(te);!Ae.done;oe++,Ae=nt.next())Ae=at(te,Z,oe,Ae.value,vt),Ae!==null&&(t&&(gn=Ae.alternate,gn!==null&&te.delete(gn.key===null?oe:gn.key)),k=c(Ae,k,oe),Me===null?kt=Ae:Me.sibling=Ae,Me=Ae);return t&&te.forEach(function(QM){return n(Z,QM)}),ve&&ga(Z,oe),kt}function he(Z,k,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===F&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:t:{for(var kt=nt.key;k!==null;){if(k.key===kt){if(kt=nt.type,kt===F){if(k.tag===7){a(Z,k.sibling),vt=u(k,nt.props.children),Ya(vt,nt),vt.return=Z,Z=vt;break t}}else if(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Et&&Br(kt)===k.type){a(Z,k.sibling),vt=u(k,nt.props),Ya(vt,nt),vt.return=Z,Z=vt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}nt.type===F?(vt=Ur(nt.props.children,Z.mode,vt,nt.key),Ya(vt,nt),vt.return=Z,Z=vt):(vt=lu(nt.type,nt.key,nt.props,null,Z.mode,vt),Ya(vt,nt),vt.return=Z,Z=vt)}return S(Z);case w:t:{for(kt=nt.key;k!==null;){if(k.key===kt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(Z,k.sibling),vt=u(k,nt.children||[]),vt.return=Z,Z=vt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}vt=Ff(nt,Z.mode,vt),vt.return=Z,Z=vt}return S(Z);case Et:return nt=Br(nt),he(Z,k,nt,vt)}if(At(nt))return Pt(Z,k,nt,vt);if(j(nt)){if(kt=j(nt),typeof kt!="function")throw Error(r(150));return nt=kt.call(nt),Wt(Z,k,nt,vt)}if(typeof nt.then=="function")return he(Z,k,_u(nt),vt);if(nt.$$typeof===V)return he(Z,k,pu(Z,nt),vt);Su(Z,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(Z,k.sibling),vt=u(k,nt),vt.return=Z,Z=vt):(a(Z,k),vt=Bf(nt,Z.mode,vt),vt.return=Z,Z=vt),S(Z)):a(Z,k)}return function(Z,k,nt,vt){try{Xo=0;var kt=he(Z,k,nt,vt);return bs=null,kt}catch(te){if(te===Ts||te===gu)throw te;var Me=Kn(29,te,null,Z.mode);return Me.lanes=vt,Me.return=Z,Me}}}var Hr=Wg(!0),Zg=Wg(!1),Wa=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ou(t),Ug(t,null,a),n}return su(t,s,n,a),ou(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$(t,a)}}function Qf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=S:c=c.next=S,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Jf=!1;function qo(){if(Jf){var t=Ms;if(t!==null)throw t}}function Yo(t,n,a,s){Jf=!1;var u=t.updateQueue;Wa=!1;var c=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,K=B.next;B.next=null,S===null?c=K:S.next=K,S=B;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==S&&(T===null?st.firstBaseUpdate=K:T.next=K,st.lastBaseUpdate=B))}if(c!==null){var _t=u.baseState;S=0,st=K=B=null,T=c;do{var W=T.lane&-536870913,at=W!==T.lane;if(at?(xe&W)===W:(s&W)===W){W!==0&&W===zr&&(Jf=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Pt=t,Wt=T;W=n;var he=a;switch(Wt.tag){case 1:if(Pt=Wt.payload,typeof Pt=="function"){_t=Pt.call(he,_t,W);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Wt.payload,W=typeof Pt=="function"?Pt.call(he,_t,W):Pt,W==null)break t;_t=N({},_t,W);break t;case 2:Wa=!0}}W=T.callback,W!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[W]:at.push(W))}else at={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(K=st=at,B=_t):st=st.next=at,S|=W;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);st===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=K,u.lastBaseUpdate=st,c===null&&(u.shared.lanes=0),nr|=S,t.lanes=S,t.memoizedState=_t}}function Kg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function jg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kg(a[t],n)}var ja=Jt(null),Eu=Jt(0);function Qg(t,n){t=Ma,$t(Eu,t),$t(ja,n),Ma=t|n.baseLanes}function $f(){$t(Eu,Ma),$t(ja,ja.current)}function td(){Ma=Eu.current,Ut(ja),Ut(Eu)}var wn=Jt(null),In=null;function Qa(t){var n=t.alternate;$t(Dn,Dn.current&1),$t(wn,t),In===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(In=t)}function ed(t){$t(Dn,Dn.current),$t(wn,t),In===null&&(In=t)}function Jg(t){t.tag===22?($t(Dn,Dn.current),$t(wn,t),In===null&&(In=t)):Ja()}function Ja(){$t(Dn,Dn.current),$t(wn,wn.current)}function ri(t){Ut(wn),In===t&&(In=null),Ut(Dn)}var Dn=Jt(0);function Wo(t,n){$t(wn,wn.current),$t(Dn,n)}function nd(t){Ut(Dn),Ut(wn),In===t&&(In=null)}function yu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||bh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,de=null,ke=null,pn=null,xu=!1,As=!1,Gr=!1,Mu=0,Zo=0,Rs=null,_x=0;function ln(){throw Error(r(321))}function id(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function ad(t,n,a,s,u,c){return Sa=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?Pv:zv,Gr=!1,c=a(s,u),Gr=!1,As&&(c=tv(n,a,s,u)),$g(t),c}function $g(t){xt.H=Du;var n=ke!==null&&ke.next!==null;if(Sa=0,pn=ke=de=null,xu=!1,Zo=0,Rs=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&hu(t)&&(mn=!0))}function tv(t,n,a,s){de=t;var u=0;do{if(As&&(Rs=null),Zo=0,As=!1,25<=u)throw Error(r(301));if(u+=1,pn=ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=Ax,c=n(a,s)}while(As);return c}function Sx(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(de.flags|=1024),n}function rd(){var t=Mu!==0;return Mu=0,t}function sd(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function od(t){if(xu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xu=!1}Sa=0,pn=ke=de=null,As=!1,Zo=Mu=0,Rs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?de.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=pn===null?de.memoizedState:pn.next;if(n!==null)pn=n,ke=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},pn===null?de.memoizedState=pn=t:pn=pn.next=t}return pn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=Zo;return Zo+=1,Rs===null&&(Rs=[]),t=kg(Rs,t,n),n=de,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?Pv:zv),t}function bu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===ct)return;if(t.$$typeof===V)return Cn(t)}throw Error(r(438,String(t)))}function ld(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=re;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function Au(t){var n=cn();return ud(n,ke,t)}function ud(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var S=u.next;u.next=c.next,c.next=S}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var T=S=null,B=null,K=n,st=!1;do{var _t=K.lane&-536870913;if(_t!==K.lane?(xe&_t)===_t:(Sa&_t)===_t){var W=K.revertLane;if(W===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),_t===zr&&(st=!0);else if((Sa&W)===W){K=K.next,W===zr&&(st=!0);continue}else _t={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(T=B=_t,S=c):B=B.next=_t,de.lanes|=W,nr|=W;_t=K.action,Gr&&a(c,_t),c=K.hasEagerState?K.eagerState:a(c,_t)}else W={lane:_t,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(T=B=W,S=c):B=B.next=W,de.lanes|=_t,nr|=_t;K=K.next}while(K!==null&&K!==n);if(B===null?S=c:B.next=T,!ai(c,t.memoizedState)&&(mn=!0,st&&(a=Ms,a!==null)))throw a;t.memoizedState=c,t.baseState=S,t.baseQueue=B,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function cd(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do c=t(c,S.action),S=S.next;while(S!==u);ai(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function ev(t,n,a){var s=de,u=cn(),c=ve;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!ai((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,mn=!0),u=u.queue,hd(av.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||S||pn!==null&&(pn.memoizedState.tag&1)!==0,Cs(t?9:8,{destroy:void 0},iv.bind(null,s,u,a,n),null),t){if(s.flags|=2048,We===null)throw Error(r(349));c||(Sa&127)!==0||nv(s,n,a)}return a}function nv(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Tu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function iv(t,n,a,s){n.value=a,n.getSnapshot=s,rv(n)&&sv(t)}function av(t,n,a){return a(function(){rv(n)&&sv(t)})}function rv(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function sv(t){var n=Dr(t,2);n!==null&&$n(n,t,2)}function fd(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Gr){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function ov(t,n,a,s){return t.baseState=a,ud(t,ke,typeof s=="function"?s:Ea)}function Ex(t,n,a,s,u){if(wu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){c.listeners.push(S)}};xt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,lv(n,c)):(c.next=a.next,n.pending=a.next=c)}}function lv(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=xt.T,S={};S.types=c!==null?c.types:null,xt.T=S;try{var T=a(u,s),B=xt.S;B!==null&&B(S,T),uv(t,n,T)}catch(K){dd(t,n,K)}finally{c!==null&&S.types!==null&&(c.types=S.types),xt.T=c}}else try{c=a(u,s),uv(t,n,c)}catch(K){dd(t,n,K)}}function uv(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){cv(t,n,s)},function(s){return dd(t,n,s)}):cv(t,n,a)}function cv(t,n,a){n.status="fulfilled",n.value=a,fv(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lv(t,a)))}function dd(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,fv(n),n=n.next;while(n!==s)}t.action=null}function fv(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dv(t,n){return n}function hv(t,n){if(ve){var a=We.formState;if(a!==null){t:{var s=de;if(ve){if(Ke){e:{for(var u=Ke,c=xi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ke=Ti(u.nextSibling),s=u.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dv,lastRenderedState:n},a.queue=s,a=Nv.bind(null,de,s),s.dispatch=a,s=fd(!1),c=_d.bind(null,de,!1,s.queue),s=kn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Ex.bind(null,de,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function pv(t){var n=cn();return mv(n,ke,t)}function mv(t,n,a){if(n=ud(t,n,dv)[0],t=Au(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ko(n)}catch(S){throw S===Ts?gu:S}else s=n;n=cn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Cs(9,{destroy:void 0},yx.bind(null,u,a),null)),[s,c,t]}function yx(t,n){t.action=n}function gv(t){var n=cn(),a=ke;if(a!==null)return mv(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Cs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Tu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function vv(){return cn().memoizedState}function Ru(t,n,a,s){var u=kn();de.flags|=t,u.memoizedState=Cs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cu(t,n,a,s){var u=cn();s=s===void 0?null:s;var c=u.memoizedState.inst;ke!==null&&s!==null&&id(s,ke.memoizedState.deps)?u.memoizedState=Cs(n,c,a,s):(de.flags|=t,u.memoizedState=Cs(1|n,c,a,s))}function _v(t,n){Ru(8390656,8,t,n)}function hd(t,n){Cu(2048,8,t,n)}function xx(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Tu(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Sv(t){var n=cn().memoizedState;return xx({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ev(t,n){return Cu(4,2,t,n)}function yv(t,n){return Cu(4,4,t,n)}function xv(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mv(t,n,a){a=a!=null?a.concat([t]):null,Cu(4,4,xv.bind(null,n,t),a)}function pd(){}function Tv(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&id(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function bv(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&id(n,s[1]))return s[0];if(s=t(),Gr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s}function md(t,n,a){return a===void 0||(Sa&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=P0(),de.lanes|=t,nr|=t,a)}function Av(t,n,a,s){return ai(a,n)?a:ja.current!==null?(t=md(t,a,s),ai(t,n)||(mn=!0),t):(Sa&106)===0||(Sa&1073741824)!==0&&(xe&261930)===0?(mn=!0,t.memoizedState=a):(t=P0(),de.lanes|=t,nr|=t,n)}function Rv(t,n,a,s,u){var c=Xt.p;Xt.p=c!==0&&8>c?c:8;var S=xt.T,T={};T.types=S!==null?S.types:null,xt.T=T,_d(t,!1,n,a);try{var B=u(),K=xt.S;if(K!==null&&K(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var st=vx(B,s);jo(t,n,st,ui(t))}else jo(t,n,s,ui(t))}catch(_t){jo(t,n,{then:function(){},status:"rejected",reason:_t},ui())}finally{Xt.p=c,S!==null&&T.types!==null&&(S.types=T.types),xt.T=S}}function Mx(){}function gd(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Cv(t).queue;Rv(t,u,n,G,a===null?Mx:function(){return wv(t),a(s)})}function Cv(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wv(t){var n=Cv(t);n.next===null&&(n=t.alternate.memoizedState),jo(t,n.next.queue,{},ui())}function vd(){return Cn(Ws)}function Dv(){return cn().memoizedState}function Uv(){return cn().memoizedState}function Tx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Za(a);var s=Ka(n,t,a);s!==null&&($n(s,n,a),ko(s,n,a)),n={cache:qf()},t.payload=n;return}n=n.return}}function bx(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wu(t)?Lv(n,a):(a=zf(t,n,a,s),a!==null&&($n(a,t,s),Ov(a,n,s)))}function Nv(t,n,a){var s=ui();jo(t,n,a,s)}function jo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wu(t))Lv(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var S=n.lastRenderedState,T=c(S,a);if(u.hasEagerState=!0,u.eagerState=T,ai(T,S))return su(t,n,u,0),We===null&&ru(),!1}catch{}if(a=zf(t,n,u,s),a!==null)return $n(a,t,s),Ov(a,n,s),!0}return!1}function _d(t,n,a,s){if(s={lane:2,revertLane:lh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wu(t)){if(n)throw Error(r(479))}else n=zf(t,a,s,2),n!==null&&$n(n,t,2)}function wu(t){var n=t.alternate;return t===de||n!==null&&n===de}function Lv(t,n){As=xu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ov(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$(t,a)}}var Du={readContext:Cn,use:bu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Pv={readContext:Cn,use:bu,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:_v,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ru(4194308,4,xv.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ru(4194308,4,t,n)},useInsertionEffect:function(t,n){Ru(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Gr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var u=a(n);if(Gr){_n(!0);try{a(n)}finally{_n(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=bx.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=fd(t);var n=t.queue,a=Nv.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pd,useDeferredValue:function(t,n){var a=kn();return md(a,t,n)},useTransition:function(){var t=fd(!1);return t=Rv.bind(null,de,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=kn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(xe&127)!==0||nv(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,_v(av.bind(null,s,c,t),[t]),s.flags|=2048,Cs(9,{destroy:void 0},iv.bind(null,s,c,a,n),null),a},useId:function(){var t=kn(),n=We.identifierPrefix;if(ve){var a=Wi,s=Yi;a=(s&~(1<<32-Pn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Mu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:vd,useFormState:hv,useActionState:hv,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_d.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:ld,useCacheRefresh:function(){return kn().memoizedState=Tx.bind(null,de)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zv={readContext:Cn,use:bu,useCallback:Tv,useContext:Cn,useEffect:hd,useImperativeHandle:Mv,useInsertionEffect:Ev,useLayoutEffect:yv,useMemo:bv,useReducer:Au,useRef:vv,useState:function(){return Au(Ea)},useDebugValue:pd,useDeferredValue:function(t,n){var a=cn();return Av(a,ke.memoizedState,t,n)},useTransition:function(){var t=Au(Ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:ev,useId:Dv,useHostTransitionStatus:vd,useFormState:pv,useActionState:pv,useOptimistic:function(t,n){var a=cn();return ov(a,ke,t,n)},useMemoCache:ld,useCacheRefresh:Uv,useEffectEvent:Sv},Ax={readContext:Cn,use:bu,useCallback:Tv,useContext:Cn,useEffect:hd,useImperativeHandle:Mv,useInsertionEffect:Ev,useLayoutEffect:yv,useMemo:bv,useReducer:cd,useRef:vv,useState:function(){return cd(Ea)},useDebugValue:pd,useDeferredValue:function(t,n){var a=cn();return ke===null?md(a,t,n):Av(a,ke.memoizedState,t,n)},useTransition:function(){var t=cd(Ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:ev,useId:Dv,useHostTransitionStatus:vd,useFormState:gv,useActionState:gv,useOptimistic:function(t,n){var a=cn();return ke!==null?ov(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ld,useCacheRefresh:Uv,useEffectEvent:Sv};function Sd(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ed={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),u=Za(s);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&($n(n,t,s),ko(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),u=Za(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&($n(n,t,s),ko(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=Za(a);s.tag=2,n!=null&&(s.callback=n),n=Ka(t,s,a),n!==null&&($n(n,t,a),ko(n,t,a))}};function Iv(t,n,a,s,u,c,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,S):n.prototype&&n.prototype.isPureReactComponent?!zo(a,s)||!zo(u,c):!0}function Bv(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ed.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Fv(t){au(t)}function Hv(t){console.error(t)}function Gv(t){au(t)}function Uu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Vv(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yd(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(t,n)},a}function Xv(t){return t=Za(t),t.tag=3,t}function kv(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){Vv(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Vv(n,a,s),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Rx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Ju():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rh(t,s,u)),!1;case 22:return a.flags|=65536,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rh(t,s,u)),!1}throw Error(r(435,a.tag))}return rh(t,s,u),Ju(),!1}if(ve)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Gf&&(t=Error(r(422),{cause:s}),Fo(Si(t,a)))):(s!==Gf&&(n=Error(r(423),{cause:s}),Fo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Si(s,a),u=yd(t.stateNode,s,u),Qf(t,u),un!==4&&(un=2)),!1;var c=Error(r(520),{cause:s});if(c=Si(c,a),al===null?al=[c]:al.push(c),un!==4&&(un=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yd(a.stateNode,s,t),Qf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xv(u),kv(u,t,a,s),Qf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var xd=Error(r(461)),mn=!1;function En(t,n,a,s){n.child=t===null?Zg(n,null,a,s):Hr(n,t.child,a,s)}function qv(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Pr(n),s=ad(t,n,a,S,c,u),T=rd(),t!==null&&!mn?(sd(t,n,u),ya(t,n,u)):(ve&&T&&cu(n),n.flags|=1,En(t,n,s,u),n.child)}function Yv(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!If(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Wv(t,n,c,s,u)):(t=lu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Dd(t,u)){var S=c.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(S,s)&&t.ref===n.ref)return ya(t,n,u)}return n.flags|=1,t=ma(c,s),t.ref=n.ref,t.return=n,n.child=t}function Wv(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(zo(c,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=c,Dd(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ya(t,n,u)}return Md(t,n,a,s,u)}function Zv(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return Kv(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&mu(n,c!==null?c.cachePool:null),c!==null?Qg(n,c):$f(),Jg(n);else return s=n.lanes=536870912,Kv(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(mu(n,c.cachePool),Qg(n,c),Ja(),n.memoizedState=null):(t!==null&&mu(n,null),$f(),Ja());return En(t,n,u,a),n.child}function Qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Kv(t,n,a,s,u){var c=Wf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&mu(n,null),$f(),Jg(n),t!==null&&Or(t,n,s,!0),n.childLanes=u,null}function Nu(t,n){return n=Lu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function jv(t,n,a){return Hr(n,t.child,null,a),t=Nu(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Cx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=Nu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Qo(null,t);if(ed(n),(t=Ke)?(t=x_(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Lg(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return Nu(n,s)}var c=t.memoizedState;if(c!==null){var S=c.dehydrated;if(ed(n),u)if(n.flags&256)n.flags&=-257,n=jv(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(ja.current===null){if(s=We,s!==null&&(S=dt(s,a),S!==0&&S!==c.retryLane))throw c.retryLane=S,Dr(t,S),$n(s,t,S),xd;Ju()}n=jv(t,n,a)}else t=c.treeContext,Ke=Ti(S.nextSibling),Tn=n,ve=!0,Xa=null,xi=!1,t!==null&&zg(n,t),n=Nu(n,s),n.flags|=134221824;return n}return t=ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ws(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Md(t,n,a,s,u){return Pr(n),a=ad(t,n,a,s,void 0,u),s=rd(),t!==null&&!mn?(sd(t,n,u),ya(t,n,u)):(ve&&s&&cu(n),n.flags|=1,En(t,n,a,u),n.child)}function Qv(t,n,a,s,u,c){return Pr(n),n.updateQueue=null,a=tv(n,s,a,u),$g(t),s=rd(),t!==null&&!mn?(sd(t,n,c),ya(t,n,c)):(ve&&s&&cu(n),n.flags|=1,En(t,n,a,c),n.child)}function Jv(t,n,a,s,u){if(Pr(n),n.stateNode===null){var c=Ss,S=a.contextType;typeof S=="object"&&S!==null&&(c=Cn(S)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ed,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Kf(n),S=a.contextType,c.context=typeof S=="object"&&S!==null?Cn(S):Ss,c.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sd(n,a,S,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(S=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),S!==c.state&&Ed.enqueueReplaceState(c,c.state,null),Yo(n,s,c,u),qo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var T=n.memoizedProps,B=Vr(a,T);c.props=B;var K=c.context,st=a.contextType;S=Ss,typeof st=="object"&&st!==null&&(S=Cn(st));var _t=a.getDerivedStateFromProps;st=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(T||K!==S)&&Bv(n,c,s,S),Wa=!1;var W=n.memoizedState;c.state=W,Yo(n,s,c,u),qo(),K=n.memoizedState,T||W!==K||Wa?(typeof _t=="function"&&(Sd(n,a,_t,s),K=n.memoizedState),(B=Wa||Iv(n,a,B,s,W,K,S))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),c.props=s,c.state=K,c.context=S,s=B):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,jf(t,n),S=n.memoizedProps,st=Vr(a,S),c.props=st,_t=n.pendingProps,W=c.context,K=a.contextType,B=Ss,typeof K=="object"&&K!==null&&(B=Cn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(S!==_t||W!==B)&&Bv(n,c,s,B),Wa=!1,W=n.memoizedState,c.state=W,Yo(n,s,c,u),qo();var at=n.memoizedState;S!==_t||W!==at||Wa||t!==null&&t.dependencies!==null&&hu(t.dependencies)?(typeof T=="function"&&(Sd(n,a,T,s),at=n.memoizedState),(st=Wa||Iv(n,a,st,s,W,at,B)||t!==null&&t.dependencies!==null&&hu(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,at,B),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,at,B)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),c.props=s,c.state=at,c.context=B,s=st):(typeof c.componentDidUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,ws(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Hr(n,t.child,null,u),n.child=Hr(n,null,a,u)):En(t,n,a,u),n.memoizedState=c.state,t=n.child):t=ya(t,n,u),t}function $v(t,n,a,s){return Nr(),n.flags|=256,En(t,n,a,s),n.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(t){return{baseLanes:t,cachePool:Vg()}}function Ad(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function t0(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,S;if((S=c)||(S=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Qa(n):Ja(),(t=Ke)?(t=x_(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Lg(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw ka(n);return bh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ja(),u=n.mode,c=Lu({mode:"hidden",children:c},u),s=Ur(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=bd(a),s.childLanes=Ad(t,S,a),n.memoizedState=Td,Qo(null,s)):(Qa(n),Rd(n,c))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return wx(t,n,c,S,s,B,T,a)}return u?(Ja(),u=s.fallback,c=n.mode,T=t.child,B=T.sibling,s=ma(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=ma(B,u):(u=Ur(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Qo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=bd(a):(c=u.cachePool,c!==null?(T=hn._currentValue,c=c.parent!==T?{parent:T,pool:T}:c):c=Vg(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=Ad(t,S,a),n.memoizedState=Td,Qo(t.child,s)):(Qa(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Rd(t,n){return n=Lu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Lu(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Ou(t,n,a){return Hr(n,t.child,null,a),t=Rd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wx(t,n,a,s,u,c,S,T){if(a)return n.flags&256?(Qa(n),n.flags&=-257,Ou(t,n,T)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),c=u.fallback,S=n.mode,u=Lu({mode:"visible",children:u.children},S),c=Ur(c,S,T,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Hr(n,t.child,null,T),u=n.child,u.memoizedState=bd(T),u.childLanes=Ad(t,s,T),n.memoizedState=Td,Qo(null,u));if(Qa(n),bh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Fo({value:u,source:null,stack:null})),Ou(t,n,T)}if(mn||Or(t,n,T,!1),s=(T&t.childLanes)!==0,mn||s){if(ja.current!==null)return Ou(t,n,T);if(s=We,s!==null&&(u=dt(s,T),u!==0&&u!==S.retryLane))throw S.retryLane=u,Dr(t,u),$n(s,t,u),xd;return Th(c)||Ju(),Ou(t,n,T)}return Th(c)?(n.flags|=192,n.child=t.child,null):(t=S.treeContext,Ke=Ti(c.nextSibling),Tn=n,ve=!0,Xa=null,xi=!1,t!==null&&zg(n,t),n=Rd(n,u.children),n.flags|=134221824,n)}function e0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),du(t.return,n,a)}function n0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&yu(a)===null&&(n=t),t=t.sibling}return n}function Pu(t,n,a,s,u,c){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=c)}function Cd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function wd(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var S=Dn.current;if(n.flags&128)return Wo(n,S),null;var T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Wo(n,S),u==="backwards"&&t!==null?(Cd(t),En(t,n,s,a),Cd(t)):En(t,n,s,a),s=ve?Bo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,a,n);else if(t.tag===19)e0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=n0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Cd(n)),Pu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&yu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pu(n,!0,a,null,c,s);break;case"together":Pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=n0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pu(n,!1,u,a,c,s)}return n.child}function i0(t,n,a){var s=n.pendingProps;return qa(n,n.type,s.value),En(t,n,s.children,a),n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Dd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hu(t)))}function Dx(t,n,a){switch(n.tag){case 3:O(n,n.stateNode.containerInfo),qa(n,hn,t.memoizedState.cache),Nr();break;case 27:case 5:it(n);break;case 4:O(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ed(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=Or(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?t0(t,n,a):(Qa(n),t=ya(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return wd(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Or(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return wd(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Wo(n,Dn.current),s)break;return null;case 22:return n.lanes=0,Zv(t,n,a,n.pendingProps);case 24:qa(n,hn,t.memoizedState.cache)}return ya(t,n,a)}function a0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Dd(t,a)&&(n.flags&128)===0)return mn=!1,Dx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,ve&&(n.flags&1048576)!==0&&Pg(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")If(t)?(s=Vr(t,s),n.tag=1,n=Jv(null,n,t,s,a)):(n.tag=0,n=Md(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===z){n.tag=11,n=qv(null,n,t,s,a);break t}else if(u===mt){n.tag=14,n=Yv(null,n,t,s,a);break t}else if(u===V){n.tag=10,n.type=t,n=i0(null,n,a);break t}}throw n=wt(t)||t,Error(r(306,n,""))}}return n;case 0:return Md(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Vr(s,n.pendingProps),Jv(t,n,s,u,a);case 3:t:{if(O(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,jf(t,n),Yo(n,s,null,a);var S=n.memoizedState;if(s=S.cache,qa(n,hn,s),s!==c.cache&&kf(n,[hn],a,!0),qo(),s=S.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=$v(t,n,s,a);break t}else if(s!==u){u=Si(Error(r(424)),n),Fo(u),n=$v(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Ti(t.firstChild),Tn=n,ve=!0,Xa=null,xi=!0,a=Zg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Nr(),s===u){n=ya(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return ws(t,n),t===null?(a=w_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=l_(n.type,n.pendingProps,be.current,n)):n.memoizedState=w_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&ve&&(s=n.stateNode=b_(n.type,n.pendingProps,be.current),Tn=n,xi=!0,u=Ke,sr(n.type)?(Ah=u,Ke=Ti(s.firstChild)):Ke=u),En(t,n,n.pendingProps.children,a),ws(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=Ke)&&(s=TM(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Tn=n,Ke=Ti(s.firstChild),xi=!1,u=!0):u=!1),u||ka(n)),it(n),u=n.type,c=n.pendingProps,S=t!==null?t.memoizedProps:null,s=c.children,vh(u,c)?s=null:S!==null&&vh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ad(t,n,Sx,null,null,a),Ws._currentValue=u),ws(t,n),En(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ke)&&(a=bM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||ka(n)),null;case 13:return t0(t,n,a);case 4:return O(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Hr(n,null,s,a):En(t,n,s,a),n.child;case 11:return qv(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,ws(t,n),En(t,n,s,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return i0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Pr(n),u=Cn(u),s=s(u),n.flags|=1,En(t,n,s,a),n.child;case 14:return Yv(t,n,n.type,n.pendingProps,a);case 15:return Wv(t,n,n.type,n.pendingProps,a);case 19:return wd(t,n,a);case 31:return Cx(t,n,a);case 22:return Zv(t,n,a,n.pendingProps);case 24:return Pr(n),s=Cn(hn),t===null?(u=Wf(),u===null&&(u=We,c=qf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},Kf(n),qa(n,hn,u)):((t.lanes&a)!==0&&(jf(t,n),Yo(n,null,null,a),qo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,hn,s)):(s=c.cache,qa(n,hn,s),s!==u.cache&&kf(n,[hn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&cu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:ws(t,n),En(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function xa(t){t.flags|=4}function Ud(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?L_(n,s):L_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(F0())t.flags|=8192;else throw Fr=vu,Zf}else t.flags&=-16777217}function r0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O_(n))if(F0())t.flags|=8192;else throw Fr=vu,Zf}function zu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Zl():536870912,t.lanes|=n,Os|=n)}function Jo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ux(t,n,a){var s=n.pendingProps;switch(Hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),_a(hn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xs(n)?xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vf())),je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(xa(n),c!==null?(je(n),r0(n,c)):(je(n),Ud(n,u,null,s,a))):c?c!==t.memoizedState?(xa(n),je(n),r0(n,c)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&xa(n),je(n),Ud(n,u,t,s,a)),null;case 27:if(gt(n),a=be.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}t=zt.current,xs(n)?Ig(n):(t=b_(u,s,a),n.stateNode=t,xa(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}if(c=zt.current,xs(n))Ig(n);else{var S=ul(be.current);switch(c){case 1:c=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=S.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}c[Nt]=n,c[Yt]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)c.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=c;t:switch(Nn(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&xa(n)}}return je(n),n.subtreeFlags&=-33554433,Ud(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&xa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Nt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||a_(t.nodeValue,a)),t||ka(n,!0)}else t=ul(t).createTextNode(s),t[Nt]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Nt]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),je(n),null);case 4:return b(),t===null&&dh(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return _a(n.type),je(n),null;case 19:if(nd(n),s=n.memoizedState,s===null)return je(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)Jo(s,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=yu(t),c!==null){for(n.flags|=128,Jo(s,!1),t=c.updateQueue,n.updateQueue=t,zu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ng(a,t),a=a.sibling;return Wo(n,Dn.current&1|2),ve&&ga(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&q()>Zu&&(n.flags|=128,u=!0,Jo(s,!1),n.lanes=4194304)}else{if(!u)if(t=yu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zu(n,t),Jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ve)return je(n),null}else 2*q()-s.renderingStartTime>Zu&&a!==536870912&&(n.flags|=128,u=!0,Jo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,c=Dn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Wo(n,c):(a=c,$t(wn,n),$t(Dn,a),In===null&&(In=n)),ve&&ga(n,s.treeForkCount),t}return je(n),null;case 22:case 23:return ri(n),td(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ut(Ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(hn),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(r(156,n.tag))}function Nx(t,n){switch(Hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(hn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nd(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return _a(n.type),null;case 22:case 23:return ri(n),td(),t!==null&&Ut(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(hn),null;case 25:return null;default:return null}}function s0(t,n){switch(Hf(n),n.tag){case 3:_a(hn),b();break;case 26:case 27:case 5:gt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:nd(n);break;case 10:_a(n.type);break;case 22:case 23:ri(n),td(),t!==null&&Ut(Ir);break;case 24:_a(hn)}}function $o(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,S=a.inst;s=c(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){Ge(n,n.return,T)}}function $a(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var B=a,K=T;try{K()}catch(st){Ge(u,B,st)}}}s=s.next}while(s!==c)}}catch(st){Ge(n,n.return,st)}}function o0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{jg(n,a)}catch(s){Ge(t,t.return,s)}}}function l0(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=ha(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=m_(c)),s=u.ref;break;case 7:if(t.stateNode===null){var S=new ci(t);p(t.child,!1,xM,S,void 0,void 0),t.stateNode=S}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Ge(t,n,T)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function Iu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)y_(t.stateNode,n[a])}function u0(t){for(var n=t.return;n!==null&&(Ld(n)&&y_(t.stateNode,n.stateNode),!Nd(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(Ld(n)&&MM(t.stateNode,n.stateNode),!Nd(n));)n=n.return}function Nd(t){return t.tag===5||t.tag===3||t.tag===27}function Ld(t){return t&&t.tag===7&&t.stateNode!==null}function Od(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function Pd(t,n,a){try{var s=t.stateNode;aM(s,t.type,a,n),s[Yt]=n}catch(u){Ge(t,t.return,u)}}function c0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function zd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Iu(t,s),Ue=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Id(t,n,a,s),t=t.sibling;t!==null;)Id(t,n,a,s),t=t.sibling}function Bu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Iu(t,s),Ue=!0;else if(u!==4&&(u===27&&(Iu(t,s),s=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Bu(t,n,a,s),t=t.sibling;t!==null;)Bu(t,n,a,s),t=t.sibling}function f0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,s,a),n[Nt]=t,n[Yt]=a}catch(c){Ge(t,t.return,c)}}var Fu=!1,si=null;function d0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Fu=!0)}var Ki=null;function h0(){var t=Ki;return Ki=null,t}var jn=0;function Ds(t,n,a,s,u){return jn=0,p0(t.child,n,a,s,u)}function p0(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var S=t.stateNode;if(s!==null){var T=Eh(S);s.push(T),T.view&&(c=!0)}else c||Eh(S).view&&(c=!0);Fu=!0,h_(S,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||p0(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function ji(t,n){for(;t!==null;)t.tag===5?p_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Ds(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Bd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ha(s,a),c=pa(s.default,a.paired?s.share:s.enter);c!=="none"?Ds(t,u,c,null,!1)?(Hu(t),a.paired||n||Bs(t,s.onEnter)):ji(t.child,!1):Hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Bd(t,n),t=t.sibling;else Hu(t)}function Fd(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=pa(a.default,a.share);if(c!=="none"&&(Ds(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Bs(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Fd(t)}t=t.sibling}}}function Hd(t){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode),s=si!==null?si.get(a):void 0,u=pa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Ds(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,si.delete(a),Bs(t,n.onShare)):Bs(t,n.onExit):ji(t.child,!1)),si!==null&&Fd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Hd(t),t=t.sibling;else si!==null&&Fd(t)}function m0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&Ds(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&m0(t);t=t.sibling}}function Gd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Gd(t)}t=t.sibling}}function Gu(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Gd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gu(t),t=t.sibling;else Gd(t)}function g0(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&g0(t),t=t.sibling}function Vd(t,n,a,s,u,c,S){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(c!==null&&jn<c.length){var K=c[jn],st=Eh(B);(K.view||st.view)&&(T=!0);var _t;if(_t=(t.flags&4)===0)if(st.clip)_t=!0;else{_t=K.rect;var W=st.rect;_t=_t.y!==W.y||_t.x!==W.x||_t.height!==W.height||_t.width!==W.width}_t&&(t.flags|=4),st.abs?st=!K.abs:(K=K.rect,st=st.rect,st=K.height!==st.height||K.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&h_(B,jn===0?a:a+"_"+jn,u),T&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(B,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?t.flags|=n.flags&32:Vd(t,n.child,a,s,u,c,S)&&(T=!0));n=n.sibling}return T}function v0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ha(a,s),c=pa(a.default,a.update),S;S=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;jn=0,u=Vd(s,T,u,u,c,S,!1),(t.flags&4)!==0&&u&&Bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&v0(t);t=t.sibling}}var bn=!1,Be=!1,Qi=!1,Xd=!1,_0=typeof WeakSet=="function"?WeakSet:Set,An=null,Ji=!1,el=!1,Vu=!1,kd=!1;function Lx(t,n,a){if(t=t.containerInfo,mh=Zs,t=xg(t),Df(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,S=u.focusNode;u=u.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break t}var T=0,B=-1,K=-1,st=0,_t=0,W=t,at=null;e:for(;;){for(var Pt;W!==s||c!==0&&W.nodeType!==3||(B=T+c),W!==S||u!==0&&W.nodeType!==3||(K=T+u),W.nodeType===3&&(T+=W.nodeValue.length),(Pt=W.firstChild)!==null;)at=W,W=Pt;for(;;){if(W===t)break e;if(at===s&&++st===c&&(B=T),at===S&&++_t===u&&(K=T),(Pt=W.nextSibling)!==null)break;W=at,at=W.parentNode}W=Pt}s=B===-1||K===-1?null:{start:B,end:K}}else s=null}s=s||{start:0,end:0}}else s=null;for(gh={focusedElem:t,selectionRange:s},Zs=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&Hd(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&d0(t),Xu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Hd(s),Xu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&d0(t),Xu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&m0(t),Xu(a))}}si=null}function Xu(t){for(;An!==null;){var n=An,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var S=Vr(n.type,u);a=c.getSnapshotBeforeUpdate(S,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ge(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Mh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Mh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ha(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=pa(u.default,u.update),u!=="none"&&Ds(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function S0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),s&4&&$o(5,a);break;case 1:if($i(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&o0(a),s&512&&Zi(a,a.return);break;case 3:if($i(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jg(t,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&f0(a);case 26:case 5:$i(t,a),n===null&&s&4&&Od(a),s&512&&Zi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),s&4&&M0(t,a);break;case 13:$i(t,a),s&4&&T0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qx.bind(null,a),AM(t,a))));break;case 22:if(s=a.memoizedState!==null||bn,!s){var c=n!==null&&n.memoizedState!==null||Be;n=bn,u=Be,bn=s,(Be=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Oi(t,a,s)):$i(t,a),bn=n,Be=u}break;case 30:$i(t,a),s&512&&Zi(a,a.return);break;case 7:s&512&&Zi(a,a.return);default:$i(t,a)}}function qd(t,n){for(t=t.child;t!==null;)E0(t,n),t=t.sibling}function E0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,S=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(B){Ge(t,t.return,B)}Yd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(B){Ge(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?d_(T,!0):d_(t.stateNode,!1)}catch(B){Ge(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&qd(t,n);break;default:qd(t,n)}}function Yd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:E0(a,s);break t;case 22:a.memoizedState===null&&Yd(a,s);break t;default:Yd(a,s)}}t=t.sibling}}function y0(t){var n=t.alternate;n!==null&&(t.alternate=null,y0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Qn=!1;function Ni(t,n,a){for(a=a.child;a!==null;)x0(t,n,a),a=a.sibling}function x0(t,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Be||Un(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Un(a,n),tl(a);var s=$e,u=Qn;sr(a.type)&&($e=a.stateNode,Qn=!1),Ni(t,n,a),A_(a.stateNode,a.type,a.memoizedProps),$e=s,Qn=u;break;case 5:Be||Un(a,n),tl(a);case 6:if(a.tag===6&&tl(a),s=$e,u=Qn,$e=null,Ni(t,n,a),$e=s,Qn=u,$e!==null)if(Qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Ue=!0}catch(c){Ge(a,n,c)}else try{$e.removeChild(a.stateNode),Ue=!0}catch(c){Ge(a,n,c)}break;case 18:$e!==null&&(Qn?(t=$e,f_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ks(t)):f_($e,a.stateNode));break;case 4:s=$e,u=Qn,$e=a.stateNode.containerInfo,Qn=!0,Ni(t,n,a),$e=s,Qn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Be||$a(4,a,n),Ni(t,n,a);break;case 1:Be||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&l0(a,n,s)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Ni(t,n,a),Be=s;break;case 30:Un(a,n),Ni(t,n,a);break;case 7:Be||Un(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function M0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ks(t)}catch(a){Ge(n,n.return,a)}}}function T0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ks(t)}catch(a){Ge(n,n.return,a)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _0),n;default:throw Error(r(435,t.tag))}}function ku(t,n){var a=Ox(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Yx.bind(null,t,s);s.then(u,u)}})}function qn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],S=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(sr(B.type)){$e=B.stateNode,Qn=!1;break t}break;case 5:$e=B.stateNode,Qn=!1;break t;case 3:case 4:$e=B.stateNode.containerInfo,Qn=!0;break t}B=B.return}if($e===null)throw Error(r(160));x0(S,T,c),$e=null,Qn=!1,S=c.alternate,S!==null&&(S.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)b0(n,t,a),n=n.sibling}var Li=null;function b0(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var S=s[c];S.ref.impl=S.nextImpl}qn(n,t,a),Yn(t),u&4&&($a(3,t,t.return),$o(3,t),$a(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Li,qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=l_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Le]||s[Nt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Nn(s,n,a),s[Nt]=t,De(s),n=s;break t;case"link":if(c=N_("link","href",u).get(n+(a.href||""))){for(S=0;S<c.length;S++)if(s=c[S],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(S,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;case"meta":if(c=N_("meta","content",u).get(n+(a.content||""))){for(S=0;S<c.length;S++)if(s=c[S],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(S,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Nt]=t,De(s),n=s}t.stateNode=n}else bn||Dh(c,t.type,t.stateNode);else t.stateNode=U_(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?bn||Dh(c,t.type,t.stateNode):U_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 27:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),s!==null&&u&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Qi,Qi=!1,qn(n,t,a),Qi=c,Yn(t),u&512&&(Be||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{ds(n,""),Ue=!0}catch(st){Ge(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Pd(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Xd=!0);break;case 6:if(qn(n,t,a),Yn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(st){Ge(t,t.return,st)}}break;case 3:if(Ue=!1,rc=null,c=Li,Li=cl(n.containerInfo),qn(n,t,a),Li=c,Yn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Ks(n.containerInfo)}catch(st){Ge(t,t.return,st)}Xd&&(Xd=!1,A0(t)),Ue=!1;break;case 4:u=Qi,Qi=bn,s=Ym(),c=Li,Li=cl(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Li=c,Ue&&el&&(Vu=!0),Ue=s,Qi=u;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wu=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 22:c=t.memoizedState!==null,S=s!==null&&s.memoizedState!==null;var T=bn,B=Be,K=Qi;bn=T||c,Qi=K||c,Be=B||S,qn(n,t,a),Be=B,Qi=K,bn=T,Yn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||S||bn||Be||(n=S||Be,a=bn,s=Be,bn=c||bn,Be=n,tr(t,2),bn=a,Be=s),!c&&Qi||qd(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ku(t,a))));break;case 19:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ku(t,n)));break;case 30:u&512&&(Be||s===null||Un(s,s.return)),u=Ym(),c=el,S=(a&335544064)===a,T=t.memoizedProps,el=S&&pa(T.default,T.update)!=="none",qn(n,t,a),Yn(t),S&&s!==null&&Ue&&(t.flags|=4),el=c,Ue=u;break;case 21:break;case 7:u&512&&(Be||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(c0(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(Ld(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(Nd(u))break;u=u.return}var S=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,B=zd(t);Bu(t,B,T,S);break;case 5:var K=a.stateNode;a.flags&32&&(ds(K,""),a.flags&=-33);var st=zd(t);Bu(t,st,K,S);break;case 3:case 4:var _t=a.stateNode.containerInfo,W=zd(t);Id(t,W,_t,S);break;default:throw Error(r(161))}}catch(at){Ge(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;A0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zs=!0,n.reset(),Zs=!1),t=t.sibling}}function Us(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)R0(n,t),n=n.sibling;else v0(n)}function R0(t,n){var a=t.alternate;if(a===null)Bd(t,!1);else switch(t.tag){case 3:if(kd=Ji=!1,h0(),Us(n,t),!Ji&&!Vu){if(t=Ki,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];p_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kd=!0}Ki=null;break;case 5:Us(n,t);break;case 4:s=Ji,Ji=!1,Us(n,t),Ji&&(Vu=!0),Ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Bd(t,!1):Us(n,t));break;case 30:s=Ji,u=h0(),Ji=!1,Us(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,S=t.stateNode;n=ha(c,S),S=ha(a.memoizedProps,S);var T=pa(c.default,c.update);T==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=Vd(t,a,n,S,T,c,!0),jn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Bs(t,t.memoizedProps.onUpdate),Ki=u):u!==null&&(u.push.apply(u,Ki),Ki=u),Ji=(t.flags&32)!==0?!0:s;break;default:Us(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S0(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,s);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&l0(a,a.return,u),tr(a,s);break;case 27:(s&2)!==0&&A_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||tl(a),tr(a,s);break;case 6:tl(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),tr(a,s);break;case 22:a.memoizedState===null&&tr(a,s);break;case 30:Un(a,a.return),tr(a,s);break;case 7:Un(a,a.return);default:tr(a,s)}t=t.sibling}}function Oi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,S=c.flags,T=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Oi(u,c,a),$o(4,c);break;case 1:if(Oi(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(s,s.return,st)}if(s=c,u=s.updateQueue,u!==null){var B=s.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)Kg(K[u],B)}catch(st){Ge(s,s.return,st)}}T&&S&64&&o0(c),Zi(c,c.return);break;case 27:(a&2)!==0&&f0(c);case 5:c.tag!==5&&c.tag!==27||u0(c),Oi(u,c,a),T&&s===null&&S&4&&Od(c),Zi(c,c.return);break;case 6:u0(c);break;case 26:B=c.stateNode,c.memoizedState!==null||B===null||bn||Dh(cl(B.ownerDocument),c.type,B),Oi(u,c,a),T&&s===null&&S&4&&Od(c),Zi(c,c.return);break;case 12:Oi(u,c,a);break;case 31:Oi(u,c,a),T&&S&4&&M0(u,c);break;case 13:Oi(u,c,a),T&&S&4&&T0(u,c);break;case 22:c.memoizedState===null&&Oi(u,c,a),Zi(c,c.return);break;case 30:Oi(u,c,a),Zi(c,c.return);break;case 7:Zi(c,c.return);default:Oi(u,c,a)}n=n.sibling}}function Wd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Zd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function Mi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)C0(t,n,a,s),n=n.sibling;else u&&g0(n)}function C0(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Gu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&$o(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),u&&kd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ho(c)));break;case 12:if(c&2048){Mi(t,n,a,s),c=n.stateNode;try{var S=n.memoizedProps,T=S.id,B=S.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){Ge(n,n.return,K)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:S=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Gu(T),S._visibility&2?Mi(t,n,a,s):nl(t,n)):(u&&T!==null&&T.memoizedState!==null&&Gu(n),S._visibility&2?Mi(t,n,a,s):(S._visibility|=2,Ns(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Wd(T,n);break;case 24:Mi(t,n,a,s),c&2048&&Zd(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(ji(c.child,!0),ji(n.child,!0))),Mi(t,n,a,s);break;default:Mi(t,n,a,s)}}function Ns(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,S=n,T=a,B=s,K=S.flags;switch(S.tag){case 0:case 11:case 15:Ns(c,S,T,B,u),$o(8,S);break;case 23:break;case 22:var st=S.stateNode;S.memoizedState!==null?st._visibility&2?Ns(c,S,T,B,u):nl(c,S):(st._visibility|=2,Ns(c,S,T,B,u)),u&&K&2048&&Wd(S.alternate,S);break;case 24:Ns(c,S,T,B,u),u&&K&2048&&Zd(S.alternate,S);break;default:Ns(c,S,T,B,u)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:nl(a,s),u&2048&&Wd(s.alternate,s);break;case 24:nl(a,s),u&2048&&Zd(s.alternate,s);break;default:nl(a,s)}n=n.sibling}}var Xr=8192;function kr(t,n,a){if(t.subtreeFlags&Xr)for(t=t.child;t!==null;)w0(t,n,a),t=t.sibling}function w0(t,n,a){switch(t.tag){case 26:kr(t,n,a),t.flags&Xr&&(t.memoizedState!==null?HM(a,Li,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&z_(a,t)));break;case 5:kr(t,n,a),t.flags&Xr&&(t=t.stateNode,(n&335544128)===n&&z_(a,t));break;case 3:case 4:var s=Li;Li=cl(t.stateNode.containerInfo),kr(t,n,a),Li=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Xr,Xr=16777216,kr(t,n,a),Xr=s):kr(t,n,a));break;case 30:if((t.flags&Xr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,si===null&&(si=new Map),si.set(s,u)}kr(t,n,a);break;default:kr(t,n,a)}}function D0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,N0(s,t)}D0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)U0(t),t=t.sibling}function U0(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&$a(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,qu(t)):il(t);break;default:il(t)}}function qu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,N0(s,t)}D0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),qu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qu(n));break;default:qu(n)}t=t.sibling}}function N0(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var u=s.sibling,c=s.return;if(y0(s),s===a){An=null;break t}if(u!==null){u.return=c,An=u;break t}An=c}}}var Px={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Se=null,xe=0,He=0,oi=null,er=!1,Ls=!1,Kd=!1,Ma=0,un=0,nr=0,qr=0,Yu=0,li=0,Os=0,al=null,Jn=null,jd=!1,Wu=0,L0=0,Zu=1/0,Ku=null,ir=null,an=0,Pi=null,Yr=null,ta=0,Qd=0,Jd=null,O0=null,Ps=null,zs=null,Is=null,rl=0,ju=null;function ui(){return(Pe&2)!==0&&xe!==0?xe&-xe:xt.T!==null?lh():Rt()}function P0(){if(li===0)if((xe&536870912)===0||ve){var t=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),li=t}else li=536870912;return t=wn.current,t!==null&&(t.flags|=32),li}function Bs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=m_(ha(t.memoizedProps,a))),zs===null&&(zs=[]),zs.push(n.bind(null,s))}}function $n(t,n,a){(t===We&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),ar(t,xe,li,!1)),Rr(t,a),((Pe&2)===0||t!==We)&&(t===We&&((Pe&2)===0&&(qr|=a),un===4&&ar(t,xe,li,!1)),ea(t))}function z0(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ba(t,n),u=s?Fx(t,n):th(t,n,!0),c=s;do{if(u===0){Ls&&!s&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ix(a)){u=th(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=al;var B=T.current.memoizedState.isDehydrated;if(B&&(Fs(T,S).flags|=256),S=th(T,S,!1),S!==2&&S!==6){if(Kd&&!B){T.errorRecoveryDisabledLanes|=c,qr|=c,u=4;break t}c=Jn,Jn=u,c!==null&&(Jn===null?Jn=c:Jn.push.apply(Jn,c))}u=S}if(c=!1,u!==2)continue}}if(u===1){Fs(t,0),ar(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(s,n,li,!er);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wu+300-q(),10<u)){if(ar(s,n,li,!er),Ar(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=Sh(I0.bind(null,s,a,Jn,Ku,jd,n,li,qr,Os,er,c,"Throttled",-0,0),u);break t}I0(s,a,Jn,Ku,jd,n,li,qr,Os,er,c,null,-0,0)}}break}while(!0);ea(t)}function I0(t,n,a,s,u,c,S,T,B,K,st,_t,W,at){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Wt=(c&335544064)===c;if(_t=null,(Wt||Pt&8192||(Pt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},si=null,w0(n,c,_t),Wt&&(Pt=_t,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=hl.bind(Pt),Wt.finished.then(Pt,Pt))),Pt=(c&62914560)===c?Wu-q():(c&4194048)===c?L0-q():0,Pt=GM(_t,Pt),Pt!==null)){ta=c,t.cancelPendingCommit=Pt(q0.bind(null,t,n,c,a,s,u,S,T,B,K,st,_t,null,W,at)),ar(t,c,S,!K);return}q0(t,n,c,a,s,u,S,T,B,K,st,_t)}function Ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ai(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,s){n=Wl(t,n),n&=~Yu,n&=~qr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Pn(u),S=1<<c;s[c]=-1,u&=~S}a!==0&&C(t,a,n)}function Qu(){return(Pe&6)===0?(sl(0),!1):!0}function $d(){if(Se!==null){if(He===0)var t=Se.return;else t=Se,va=Lr=null,od(t),bs=null,Xo=0,t=Se;for(;t!==null;)s0(t.alternate,t),t=t.return;Se=null}}function Fs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,oM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,$d(),We=t,Se=a=ma(t.current,null),xe=n,He=0,oi=null,er=!1,Ls=Ba(t,n),Kd=!1,Os=li=Yu=qr=nr=un=0,Jn=al=null,jd=!1,Ma=Wl(t,n),ru(),a}function B0(t,n){de=null,xt.H=Du,n===Ts||n===gu?(n=qg(),He=3):n===Zf?(n=qg(),He=4):He=n===xd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Se===null&&(un=1,Uu(t,Si(n,t.current)))}function F0(){var t=wn.current;return t===null?!0:(xe&4194048)===xe?In===null:(xe&62914560)===xe||(xe&536870912)!==0?t===In:!1}function H0(){var t=xt.H;return xt.H=Du,t===null?Du:t}function G0(){var t=xt.A;return xt.A=Px,t}function Ju(){un=4,er||(xe&4194048)!==xe&&wn.current!==null||(Ls=!0),(nr&134217727)===0&&(qr&134217727)===0||We===null||ar(We,xe,li,!1)}function th(t,n,a){var s=Pe;Pe|=2;var u=H0(),c=G0();(We!==t||xe!==n)&&(Ku=null,Fs(t,n)),n=!1;var S=un;t:do try{if(He!==0&&Se!==null){var T=Se,B=oi;switch(He){case 8:$d(),S=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var K=He;if(He=0,oi=null,Hs(t,T,B,K),a&&Ls){S=0;break t}break;default:K=He,He=0,oi=null,Hs(t,T,B,K)}}Bx(),S=un;break}catch(st){B0(t,st)}while(!0);return n&&t.shellSuspendCounter++,va=Lr=null,Pe=s,xt.H=u,xt.A=c,Se===null&&(We=null,xe=0,ru()),S}function Bx(){for(;Se!==null;)V0(Se)}function Fx(t,n){var a=Pe;Pe|=2;var s=H0(),u=G0();We!==t||xe!==n?(Ku=null,Zu=q()+500,Fs(t,n)):Ls=Ba(t,n);t:do try{if(He!==0&&Se!==null){n=Se;var c=oi;e:switch(He){case 1:He=0,oi=null,Hs(t,n,c,1);break;case 2:case 9:if(Xg(c)){He=0,oi=null,X0(n);break}n=function(){He!==2&&He!==9||We!==t||(He=7),ea(t)},c.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Xg(c)?(He=0,oi=null,X0(n)):(He=0,oi=null,Hs(t,n,c,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var T=Se;if(S?O_(S):T.stateNode.complete){He=0,oi=null;var B=T.sibling;if(B!==null)Se=B;else{var K=T.return;K!==null?(Se=K,$u(K)):Se=null}break e}}He=0,oi=null,Hs(t,n,c,5);break;case 6:He=0,oi=null,Hs(t,n,c,6);break;case 8:$d(),un=6;break t;default:throw Error(r(462))}}Hx();break}catch(st){B0(t,st)}while(!0);return va=Lr=null,xt.H=s,xt.A=u,Pe=a,Se!==null?0:(We=null,xe=0,ru(),un)}function Hx(){for(;Se!==null&&!It();)V0(Se)}function V0(t){var n=a0(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?$u(t):Se=n}function X0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qv(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Qv(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:od(n);var s=n;s===Tn&&(ve?(fu(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(fu(s),ve=!0));default:s0(a,n),n=Se=Ng(n,Ma),n=a0(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?$u(t):Se=n}function Hs(t,n,a,s){va=Lr=null,od(n),bs=null,Xo=0;var u=n.return;try{if(Rx(t,u,n,a,xe)){un=1,Uu(t,Si(a,t.current)),Se=null;return}}catch(c){if(u!==null)throw Se=u,c;un=1,Uu(t,Si(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:Ls||(xe&536870912)!==0?t=!1:(er=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),k0(n,t)):$u(n)}function $u(t){var n=t;do{if((n.flags&32768)!==0){k0(n,er);return}t=n.return;var a=Ux(n.alternate,n,Ma);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);un===0&&(un=5)}function k0(t,n){do{var a=Nx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);un=6,Se=null}function q0(t,n,a,s,u,c,S,T,B,K,st,_t){t.cancelPendingCommit=null;do tc();while(an!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===We&&(Se=We=null,xe=0),Yr=n,Pi=t,ta=a,Jd=u,O0=s,Gx(t,n,a,S,T,B,_t)}}function Gx(t,n,a,s,u,c,S){var T=n.lanes|n.childLanes;if(Qd=T,T|=Pf,df(t,a,T,s,u,c),zs=null,(a&335544064)===a?(Is=mx(t),s=10262):(Is=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Wx(Tt,function(){return ah(),null})):(t.callbackNode=null,t.callbackPriority=0),Fu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,u=Xt.p,Xt.p=2,c=Pe,Pe|=4;try{Lx(t,n,a)}finally{Pe=c,Xt.p=u,xt.T=s}}an=1,Fu?Ps=hM(S,t.containerInfo,Is,eh,nh,Xx,ih,ah,Vx):(eh(),nh(),ih())}function Vx(t){if(an!==0){var n=Pi.onRecoverableError;n(t,{componentStack:null})}}function Xx(){an===3&&(an=0,R0(Yr,Pi),an=4)}function eh(){if(an===1){an=0;var t=Pi,n=Yr,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var u=Xt.p;Xt.p=2;var c=Pe;Pe|=4;try{el=Vu=!1,b0(n,t,a),a=gh;var S=xg(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(S!==T&&T&&T.ownerDocument&&yg(T.ownerDocument.documentElement,T)){if(B!==null&&Df(T)){var K=B.start,st=B.end;if(st===void 0&&(st=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(st,T.value.length);else{var _t=T.ownerDocument||document,W=_t&&_t.defaultView||window;if(W.getSelection){var at=W.getSelection(),Pt=T.textContent.length,Wt=Math.min(B.start,Pt),he=B.end===void 0?Wt:Math.min(B.end,Pt);!at.extend&&Wt>he&&(S=he,he=Wt,Wt=S);var Z=Eg(T,Wt),k=Eg(T,he);if(Z&&k&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var nt=_t.createRange();nt.setStart(Z.node,Z.offset),at.removeAllRanges(),Wt>he?(at.addRange(nt),at.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),at.addRange(nt))}}}}for(_t=[],at=T;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var vt=_t[T];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Zs=!!mh,gh=mh=null}finally{Pe=c,Xt.p=u,xt.T=s}}t.current=n,an=2}}function nh(){if(an===2){an=0;var t=Pi,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=Xt.p;Xt.p=2;var u=Pe;Pe|=4;try{S0(t,n.alternate,n)}finally{Pe=u,Xt.p=s,xt.T=a}}an=3}}function ih(){if(an===4||an===3){an=0;var t=Ps;Ps=null,fe();var n=Pi,a=Yr,s=ta,u=O0,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Yr=Pi=null,Y0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ir=null),tt(s),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,c=Xt.p,Xt.p=2,xt.T=null;try{for(var S=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];S(B.value,{componentStack:B.stack})}}finally{xt.T=a,Xt.p=c}}if(u=zs,S=Is,Is=null,u!==null&&(zs=null,S===null&&(S=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(S),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&tc(),ea(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===ju?rl++:(rl=0,ju=n):(rl=0,ju=null),sl(0)}}function Y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function tc(){return Ps!==null&&(Ps.skipTransition(),Ps=null),eh(),nh(),ih(),ah()}function ah(){if(an!==5)return!1;var t=Pi,n=Qd;Qd=0;var a=tt(ta),s=xt.T,u=Xt.p;try{Xt.p=32>a?32:a,xt.T=null,a=Jd,Jd=null;var c=Pi,S=ta;if(an=0,Yr=Pi=null,ta=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,U0(c.current),C0(c,c.current,S,a),Pe=T,sl(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Xt.p=u,xt.T=s,Y0(t,n)}}function W0(t,n,a){n=Si(a,n),n=yd(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Rr(t,2),ea(t))}function Ge(t,n,a){if(t.tag===3)W0(t,t,a);else for(;n!==null;){if(n.tag===3){W0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){t=Si(a,t),a=Xv(2),s=Ka(n,a,2),s!==null&&(kv(a,s,n,t),Rr(s,2),ea(s));break}}n=n.return}}function rh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new zx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Kd=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(xe&a)===a&&((un===4||un===3&&(xe&62914560)===xe&&300>q()-Wu)&&(Pe&2)===0?Fs(t,0):Yu|=a,Os===xe&&(Os=0)),ea(t)}function Z0(t,n){n===0&&(n=Zl()),t=Dr(t,n),t!==null&&(Rr(t,n),ea(t))}function qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Z0(t,a)}function Yx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Z0(t,a)}function Wx(t,n){return ne(t,n)}var Gs=null,Vs=null,sh=!1,ec=!1,oh=!1,rr=0;function ea(t){t!==Vs&&t.next===null&&(Vs===null?Gs=Vs=t:Vs=Vs.next=t),ec=!0,sh||(sh=!0,Kx())}function sl(t,n){if(!oh&&ec){oh=!0;do for(var a=!1,s=Gs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var S=s.suspendedLanes,T=s.pingedLanes;c=(1<<31-Pn(42|t)+1)-1,c&=u&~(S&~T),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,J0(s,c))}else c=xe,c=Ar(s,s===We?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Ba(s,c)||(a=!0,J0(s,c));s=s.next}while(a);oh=!1}}function Zx(){K0()}function K0(){ec=sh=!1;var t=0;rr!==0&&sM()&&(t=rr);for(var n=q(),a=null,s=Gs;s!==null;){var u=s.next,c=j0(s,n);c===0?(s.next=null,a===null?Gs=u:a.next=u,u===null&&(Vs=a)):(a=s,(t!==0||(c&3)!==0)&&(ec=!0)),s=u}an!==0&&an!==5||sl(t),rr!==0&&(rr=0)}function j0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var S=31-Pn(c),T=1<<S,B=u[S];B===-1?((T&a)===0||(T&s)!==0)&&(u[S]=ff(T,n)):B<=n&&(t.expiredLanes|=T),c&=~T}if(n=We,a=xe,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Qt(s),tt(a)){case 2:case 8:a=qt;break;case 32:a=Tt;break;case 268435456:a=jt;break;default:a=Tt}return s=Q0.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Qt(s),t.callbackPriority=2,t.callbackNode=null,2}function Q0(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var s=xe;return s=Ar(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(z0(t,s,n),j0(t,q()),t.callbackNode!=null&&t.callbackNode===a?Q0.bind(null,t):null)}function J0(t,n){if(tc())return null;z0(t,n,!0)}function Kx(){lM(function(){(Pe&6)!==0?ne(Lt,Zx):K0()})}function lh(){if(rr===0){var t=zr;t===0&&(t=Tr,Tr<<=1,(Tr&261888)===0&&(Tr=256)),rr=t}return rr}function $0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(t)}function jx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=$0((u[Yt]||null).action),S=s.submitter;S&&(n=(n=S[Yt]||null)?$0(n.formAction):S.getAttribute("formAction"),n!==null&&(c=n,S=null));var T=new eu("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var B=new FormData(u,S);gd(a,{pending:!0,data:B,method:u.method,action:c},null,B)}}else typeof c=="function"&&(T.preventDefault(),B=new FormData(u,S),gd(a,{pending:!0,data:B,method:u.method,action:c},c,B))},currentTarget:u}]})}}for(var uh=0;uh<Of.length;uh++){var ch=Of[uh],Qx=ch.toLowerCase(),Jx=ch[0].toUpperCase()+ch.slice(1);Ui(Qx,"on"+Jx)}Ui(bg,"onAnimationEnd"),Ui(Ag,"onAnimationIteration"),Ui(Rg,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(ox,"onTransitionRun"),Ui(lx,"onTransitionStart"),Ui(ux,"onTransitionCancel"),Ui(Cg,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function t_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],B=T.instance,K=T.currentTarget;if(T=T.listener,B!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=K;try{c(u)}catch(st){au(st)}u.currentTarget=null,c=B}else for(S=0;S<s.length;S++){if(T=s[S],B=T.instance,K=T.currentTarget,T=T.listener,B!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=K;try{c(u)}catch(st){au(st)}u.currentTarget=null,c=B}}}}function Ee(t,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var s=t+"__bubble";a.has(s)||(e_(n,t,2,!1),a.add(s))}function fh(t,n,a){var s=0;n&&(s|=4),e_(a,t,s,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function dh(t){if(!t[nc]){t[nc]=!0,Ze.forEach(function(a){a!=="selectionchange"&&($x.has(a)||fh(a,!1,t),fh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,fh("selectionchange",!1,n))}}function e_(t,n,a,s){switch(k_(n)){case 2:var u=qM;break;case 8:u=YM;break;default:u=Nh}a=u.bind(null,n,a,t),u=void 0,!Ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function hh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Oe(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=c=S;continue t}T=T.parentNode}}s=s.return}eg(function(){var K=c,st=_f(a),_t=[];t:{var W=wg.get(t);if(W!==void 0){var at=eu,Pt=t;switch(t){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":at=Iy;break;case"focusin":Pt="focus",at=Tf;break;case"focusout":Pt="blur",at=Tf;break;case"beforeblur":case"afterblur":at=Tf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Vy;break;case bg:case Ag:case Rg:at=Cy;break;case Cg:at=ky;break;case"scroll":case"scrollend":at=My;break;case"wheel":at=Yy;break;case"copy":case"cut":case"paste":at=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=sg;break;case"submit":at=Hy;break;case"toggle":case"beforetoggle":at=Zy}var Wt=(n&4)!==0,he=!Wt&&(t==="scroll"||t==="scrollend"),Z=Wt?W!==null?W+"Capture":null:W;Wt=[];for(var k=K,nt;k!==null;){var vt=k;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Z===null||(vt=wo(k,Z),vt!=null&&Wt.push(ll(k,vt,nt))),he)break;k=k.return}0<Wt.length&&(W=new at(W,Pt,null,a,st),_t.push({event:W,listeners:Wt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",at&&a!==vf&&(Pt=a.relatedTarget||a.fromElement)&&(Oe(Pt)||Pt[se]))break t;(W||at)&&(Pt=st.window===st?st:(at=st.ownerDocument)?at.defaultView||at.parentWindow:window,W?(at=a.relatedTarget||a.toElement,W=K,at=at?Oe(at):null,at!==null&&(he=f(at),Wt=at.tag,at!==he||Wt!==5&&Wt!==27&&Wt!==6)&&(at=null)):(W=null,at=K),W!==at&&(Wt=ag,vt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=sg,vt="onPointerLeave",Z="onPointerEnter",k="pointer"),he=W==null?Pt:Sn(W),nt=at==null?Pt:Sn(at),Pt=new Wt(vt,k+"leave",W,a,st),Pt.target=he,Pt.relatedTarget=nt,vt=null,Oe(st)===K&&(Wt=new Wt(Z,k+"enter",at,a,st),Wt.target=nt,Wt.relatedTarget=he,vt=Wt),he=vt,Wt=W&&at?P(W,at,tM):null,W!==null&&n_(_t,Pt,W,Wt,!1),at!==null&&he!==null&&n_(_t,he,at,Wt,!0)))}t:{if(W=K?Sn(K):window,at=W.nodeName&&W.nodeName.toLowerCase(),at==="select"||at==="input"&&W.type==="file")var kt=pg;else if(dg(W))if(mg)kt=ax;else{kt=nx;var Me=ex}else at=W.nodeName,!at||at.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?K&&gf(K.elementType)&&(kt=pg):kt=ix;if(kt&&(kt=kt(t,K))){hg(_t,kt,a,st);break t}Me&&Me(t,W,K)}switch(Me=K?Sn(K):window,t){case"focusin":(dg(Me)||Me.contentEditable==="true")&&(gs=Me,Uf=K,Io=null);break;case"focusout":Io=Uf=gs=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,Mg(_t,a,st);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":Mg(_t,a,st)}var te;if(Af)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ms?cg(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(og&&a.locale!=="ko"&&(ms||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ms&&(te=ng()):(Ha=st,yf="value"in Ha?Ha.value:Ha.textContent,ms=!0)),Me=ic(K,oe),0<Me.length&&(oe=new rg(oe,t,null,a,st),_t.push({event:oe,listeners:Me}),te?oe.data=te:(te=fg(a),te!==null&&(oe.data=te)))),(te=jy?Qy(t,a):Jy(t,a))&&(oe=ic(K,"onBeforeInput"),0<oe.length&&(Me=new rg("onBeforeInput","beforeinput",null,a,st),_t.push({event:Me,listeners:oe}),Me.data=te)),jx(_t,t,K,a,st)}t_(_t,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=wo(t,a),u!=null&&s.unshift(ll(t,u,c)),u=wo(t,n),u!=null&&s.push(ll(t,u,c))),t.tag===3)return s;t=t.return}return[]}function tM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n_(t,n,a,s,u){for(var c=n._reactName,S=[];a!==null&&a!==s;){var T=a,B=T.alternate,K=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||K===null||(B=K,u?(K=wo(a,c),K!=null&&S.unshift(ll(a,K,B))):u||(K=wo(a,c),K!=null&&S.push(ll(a,K,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var eM=/\r\n?/g,nM=/\u0000|\uFFFD/g;function i_(t){return(typeof t=="string"?t:""+t).replace(eM,`
`).replace(nM,"")}function a_(t,n){return n=i_(n),i_(t)===n}function Ve(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ds(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ds(t,""+s);else return;break;case"className":jl(t,"class",s);break;case"tabIndex":jl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":jl(t,a,s);break;case"style":$m(t,s,c);return;case"data":if(n!=="object"){jl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ql(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Kl(t,"popover",s);break;case"xlinkActuate":fa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":fa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":fa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":fa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":fa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":fa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":fa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":fa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":fa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Kl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=yy.get(a)||a,Kl(t,a,s);else return}Ue=!0}function ph(t,n,a,s,u,c){switch(a){case"style":$m(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ds(t,s);else if(typeof s=="number"||typeof s=="bigint")ds(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}Ue=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Kl(t,a,s)}return}Ue=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var S=a[c];if(S!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,c,S,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=c=S=u=null,B=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":u=st;break;case"type":S=st;break;case"checked":B=st;break;case"defaultChecked":K=st;break;case"value":c=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ve(t,n,s,st,a,null)}}Km(t,c,T,B,K,S,u,!1);return;case"select":Ee("invalid",t),s=S=c=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":c=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ve(t,n,u,T,a,null)}n=c,a=S,t.multiple=!!s,n!=null?fs(t,!!s,n,!1):a!=null&&fs(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),c=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":c=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(t,n,S,T,a,null)}Qm(t,s,u,c);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ve(t,n,B,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<ol.length;s++)Ee(ol[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,K,s,a,null)}return;default:if(gf(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&ph(t,n,st,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ve(t,n,T,s,a,null))}var iM={};function aM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,S=null,T=null,B=null,K=null,st=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(at)||Ve(t,n,at,null,s,_t)}}for(var W in s){var at=s[W];if(_t=a[W],s.hasOwnProperty(W)&&(at!=null||_t!=null))switch(W){case"type":at!==_t&&(Ue=!0),c=at;break;case"name":at!==_t&&(Ue=!0),u=at;break;case"checked":at!==_t&&(Ue=!0),K=at;break;case"defaultChecked":at!==_t&&(Ue=!0),st=at;break;case"value":at!==_t&&(Ue=!0),S=at;break;case"defaultValue":at!==_t&&(Ue=!0),T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==_t&&Ve(t,n,W,at,s,_t)}}pf(t,S,T,B,K,st,c,u);return;case"select":at=S=T=W=null;for(c in a)if(B=a[c],a.hasOwnProperty(c)&&B!=null)switch(c){case"value":break;case"multiple":at=B;default:s.hasOwnProperty(c)||Ve(t,n,c,null,s,B)}for(u in s)if(c=s[u],B=a[u],s.hasOwnProperty(u)&&(c!=null||B!=null))switch(u){case"value":c!==B&&(Ue=!0),W=c;break;case"defaultValue":c!==B&&(Ue=!0),T=c;break;case"multiple":c!==B&&(Ue=!0),S=c;default:c!==B&&Ve(t,n,u,c,s,B)}n=T,a=S,s=at,W!=null?fs(t,!!a,W,!1):!!s!=!!a&&(n!=null?fs(t,!!a,n,!0):fs(t,!!a,a?[]:"",!1));return;case"textarea":at=W=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,s,u)}for(S in s)if(u=s[S],c=a[S],s.hasOwnProperty(S)&&(u!=null||c!=null))switch(S){case"value":u!==c&&(Ue=!0),W=u;break;case"defaultValue":u!==c&&(Ue=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Ve(t,n,S,u,s,c)}jm(t,W,at);return;case"option":for(var Pt in a)W=a[Pt],a.hasOwnProperty(Pt)&&W!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Ve(t,n,Pt,null,s,W));for(B in s)W=s[B],at=a[B],s.hasOwnProperty(B)&&W!==at&&(W!=null||at!=null)&&(B==="selected"?(W!==at&&(Ue=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol"):Ve(t,n,B,W,s,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)W=a[Wt],a.hasOwnProperty(Wt)&&W!=null&&!s.hasOwnProperty(Wt)&&Ve(t,n,Wt,null,s,W);for(K in s)if(W=s[K],at=a[K],s.hasOwnProperty(K)&&W!==at&&(W!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,n));break;default:Ve(t,n,K,W,s,at)}return;default:if(gf(n)){for(var he in a)W=a[he],a.hasOwnProperty(he)&&W!==void 0&&!s.hasOwnProperty(he)&&ph(t,n,he,void 0,s,W);for(st in s)W=s[st],at=a[st],!s.hasOwnProperty(st)||W===at||W===void 0&&at===void 0||ph(t,n,st,W,s,at);return}}for(var Z in a)W=a[Z],a.hasOwnProperty(Z)&&W!=null&&!s.hasOwnProperty(Z)&&Ve(t,n,Z,null,s,W);for(_t in s)W=s[_t],at=a[_t],!s.hasOwnProperty(_t)||W===at||W==null&&at==null||Ve(t,n,_t,W,s,at)}function r_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,S=u.initiatorType,T=u.duration;if(c&&T&&r_(S)){for(S=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],K=B.startTime;if(K>T)break;var st=B.transferSize,_t=B.initiatorType;st&&r_(_t)&&(B=B.responseEnd,S+=st*(B<T?1:(T-K)/(B-K)))}if(--s,n+=8*(c+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var mh=null,gh=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function s_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function l_(t,n,a,s){return a=ul(a).createElement(t),a[Nt]=s,a[Yt]=n,Nn(a,t,n),De(a),a}function vh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _h=null;function sM(){var t=window.event;return t&&t.type==="popstate"?t===_h?!1:(_h=t,!0):(_h=null,!1)}var Sh=typeof setTimeout=="function"?setTimeout:void 0,oM=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,c_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sh,lM=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(t){return u_.resolve(null).then(t).catch(uM)}:Sh;function uM(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function f_(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Ks(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Rh(a);for(var c=a.firstChild;c;){var S=c.nextSibling,T=c.nodeName;c[Le]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=S}}else a==="body"&&Rh(t.ownerDocument.body);a=u}while(a);Ks(n)}function d_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function h_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function p_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function cM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Eh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return cM(n,a,t)}function fM(t){return t.documentElement.clientHeight}function dM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function hM(t,n,a,s,u,c,S,T,B){var K=n.nodeType===9?n:n.ownerDocument;try{var st=K.startViewTransition({update:function(){var W=K.defaultView,at=W.navigation&&W.navigation.transition,Pt=K.fonts.status;s();var Wt=[];if(Pt==="loaded"&&(fM(K),K.fonts.status==="loading"&&Wt.push(K.fonts.ready)),Pt=Wt.length,t!==null)for(var he=t.suspenseyImages,Z=0,k=0;k<he.length;k++){var nt=he[k];if(!nt.complete){var vt=nt.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<W.innerHeight&&vt.left<W.innerWidth){if(Z+=P_(nt),Z>sc){Wt.length=Pt;break}nt=new Promise(dM.bind(nt)),Wt.push(nt)}}}if(0<Wt.length)return W=Promise.race([Promise.all(Wt),new Promise(function(kt){return setTimeout(kt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,W]):W).then(c,c);if(u(),at)return at.finished.then(c,c);c()},types:a});K.__reactViewTransition=st;var _t=[];return st.ready.then(function(){for(var W=K.documentElement.getAnimations({subtree:!0}),at=0;at<W.length;at++){var Pt=W[at],Wt=Pt.effect,he=Wt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){_t.push(Pt),Pt=Wt.getKeyframes();for(var Z=he=void 0,k=!0,nt=0;nt<Pt.length;nt++){var vt=Pt[nt],kt=vt.width;if(he===void 0)he=kt;else if(he!==kt){k=!1;break}if(kt=vt.height,Z===void 0)Z=kt;else if(Z!==kt){k=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}k&&he!==void 0&&Z!==void 0&&(Wt.setKeyframes(Pt),k=getComputedStyle(Wt.target,Wt.pseudoElement),k.width!==he||k.height!==Z)&&(k=Pt[0],k.width=he,k.height=Z,k=Pt[Pt.length-1],k.width=he,k.height=Z,Wt.setKeyframes(Pt))}}S()},function(W){K.__reactViewTransition===st&&(K.__reactViewTransition=null);try{typeof W=="object"&&W!==null&&W.name==="InvalidStateError"&&(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null),W!==null&&B(W)}finally{s(),u(),S()}}),st.finished.finally(function(){for(var W=0;W<_t.length;W++)_t[W].cancel();K.__reactViewTransition===st&&(K.__reactViewTransition=null),T()}),st}catch{return s(),u(),S(),null}}function Wr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Wr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Wr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function m_(t){return{name:t,group:new Wr("group",t),imagePair:new Wr("image-pair",t),old:new Wr("old",t),new:new Wr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(v_(c,t,n,a)===-1){var S=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){S.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(u=S.removeEventListener.bind(S,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Xs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),p(this._fragmentFiber.child,!1,pM,t,T,s)}this._eventListeners=c}};function pM(t,n,a,s){return y(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=v_(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Xs(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,mM,t,a,u),s.splice(n,1),c!==null&&c()}};function mM(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function Xs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function g_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function v_(t,n,a,s){if(t.length===0)return-1;s=g_(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&g_(c.optionsOrUseCapture)===s)return u}return-1}ci.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Xs(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Xs(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){p(this._fragmentFiber.child,!0,__,t,void 0,void 0)};function __(t,n){return t.tag===6?!1:(t=y(t),RM(t,n))}ci.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,yh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!__(n[a],t);a--);};function yh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=ul(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,gM,t,void 0,void 0))};function gM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,vM,t,void 0,void 0)};function vM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,_M,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function _M(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var zi=[],xh=!1;function SM(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),xh||(xh=!0,CM(function(){xh=!1;var s=zi;zi=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,EM,t,void 0,void 0),t};function EM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,yh,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=M(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=x(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=S&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&c&&S&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||yM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function yM(t,n,a,s,u){var c=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=P(a,c,I),n===null?n=!1:(p(n,!0,L,c,a),c=E,E=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=P(s,c,I),n===null?n=!1:(p(n,!0,R,c,s),c=E,U=E=null,n=c!==null)),n):!1}function S_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,yh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=M(this._fragmentFiber);if(s=a?s[1]||s[0]||_(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),S_(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=y(u),S_(u,a)):y(u).scrollIntoView(t),s+=a?-1:1}};function xM(t,n){return t=y(t),E_(t,n),!1}function E_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function y_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Xs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var S=0,T=0;T<zi.length;T++){var B=zi[T];(B.fragmentInstance!==n||B.observer!==c||B.instance!==t)&&(zi[S++]=B)}zi.length=S,c.observe(t)}),E_(t,n))}function MM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Xs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?SM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Mh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mh(a),ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function bM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function x_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function bh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function AM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ah=null;function M_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function T_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function RM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function CM(t){c_(function(){c_(function(n){return t(n)})})}function b_(t,n,a){switch(n=ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function A_(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ve(t,n,s,null,iM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),ae(t)}function Rh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ae(t)}var bi=new Map,R_=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ta=Xt.d;Xt.d={f:wM,r:DM,D:UM,C:NM,L:LM,m:OM,X:zM,S:PM,M:IM};function wM(){var t=Ta.f(),n=Qu();return t||n}function DM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?wv(n):Ta.r(t)}var ks=typeof document>"u"?null:document;function C_(t,n,a){var s=ks;if(s&&typeof n=="string"&&n){var u=vi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),R_.has(u)||(R_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Nn(n,"link",t),De(n),s.head.appendChild(n)))}}function UM(t){Ta.D(t),C_("dns-prefetch",t,null)}function NM(t,n){Ta.C(t,n),C_("preconnect",t,n)}function LM(t,n,a){Ta.L(t,n,a);var s=ks;if(s&&t&&n){var u='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vi(a.imageSizes)+'"]')):u+='[href="'+vi(t)+'"]';var c=u;switch(n){case"style":c=qs(t);break;case"script":c=Ys(t)}if(!(bi.has(c)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(fl(c))||n==="script"&&s.querySelector(dl(c))))){var S=s.createElement("link");Nn(S,"link",t),n==="style"&&(S[we]=!0,S.onload=S.onerror=function(){Fa(S)}),De(S),s.head.appendChild(S)}}}function OM(t,n){Ta.m(t,n);var a=ks;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vi(s)+'"][href="'+vi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ys(t)}if(!bi.has(c)&&(t=N({rel:"modulepreload",href:t},n),bi.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(c)))return}s=a.createElement("link"),Nn(s,"link",t),De(s),a.head.appendChild(s)}}}function PM(t,n,a){Ta.S(t,n,a);var s=ks;if(s&&t){var u=ni(s).hoistableStyles,c=qs(t);n=n||"default";var S=u.get(c);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(fl(c)))T.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(c))&&Ch(t,a);var B=S=s.createElement("link");De(B),Nn(B,"link",t),B._p=new Promise(function(K,st){B.onload=K,B.onerror=st}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(c,S)}}}function zM(t,n){Ta.X(t,n);var a=ks;if(a&&t){var s=ni(a).hoistableScripts,u=Ys(t),c=s.get(u);c||(c=a.querySelector(dl(u)),c||(t=N({src:t,async:!0},n),(n=bi.get(u))&&wh(t,n),c=a.createElement("script"),De(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function IM(t,n){Ta.M(t,n);var a=ks;if(a&&t){var s=ni(a).hoistableScripts,u=Ys(t),c=s.get(u);c||(c=a.querySelector(dl(u)),c||(t=N({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&wh(t,n),c=a.createElement("script"),De(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function w_(t,n,a,s){var u=(u=be.current)?cl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qs(a.href),n=ni(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qs(a.href);var c=ni(u).hoistableStyles,S=c.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,S),(c=u.querySelector(fl(t)))?c._p||(S.instance=c,S.state.loading=5):(c=bi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,c)),BM(u,t,c,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ys(a),n=ni(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qs(t){return'href="'+vi(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function BM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Fa.bind(null,n),Nn(n,"link",a),De(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ys(t){return'[src="'+vi(t)+'"]'}function dl(t){return"script[async]"+t}function U_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+vi(a.href)+'"]');if(s)return n.instance=s,De(s),s;var u=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),De(s),Nn(s,"style",u),ac(s,a.precedence,t),n.instance=s;case"stylesheet":u=qs(a.href);var c=t.querySelector(fl(u));if(c)return n.state.loading|=4,n.instance=c,De(c),c;s=D_(a),(u=bi.get(u))&&Ch(s,u),c=(t.ownerDocument||t).createElement("link"),De(c);var S=c;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(c,"link",s),n.state.loading|=4,ac(c,a.precedence,t),n.instance=c;case"script":return c=Ys(a.src),(u=t.querySelector(dl(c)))?(n.instance=u,De(u),u):(s=a,(u=bi.get(c))&&(s=N({},a),wh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),De(u),Nn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ac(s,a.precedence,t));return n.instance}function ac(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)c=T;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function N_(t,n,a){if(rc===null){var s=new Map,u=rc=new Map;u.set(a,s)}else u=rc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Le]||c[Nt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var S=c.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(c):s.set(S,[c])}}return s}function Dh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function FM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function O_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function P_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function z_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=P_(n),t.suspenseyImages.push(n)),t=VM.bind(t),n.decode().then(t,t))}function HM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=qs(s.href),c=n.querySelector(fl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,De(c);return}c=n.ownerDocument||n,s=D_(s),(u=bi.get(u))&&Ch(s,u),c=c.createElement("link"),De(c);var S=c;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),Nn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sc=0;function GM(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&sc===0&&(sc=62500*rM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>sc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function I_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)lc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function hl(){this.count--,I_(this)}function VM(){this.imgCount--,I_(this)}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(XM,t),oc=null,hl.call(t))}function XM(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var s=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var S=u[c];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),c=a.get(S)||s,c===s&&a.set(null,u),a.set(S,u),this.count++,s=hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ws={$$typeof:V,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function kM(t,n,a,s,u,c,S,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function B_(t,n,a,s,u,c,S,T,B,K,st,_t){return t=new kM(t,n,a,S,B,K,st,_t,T),n=1,c===!0&&(n|=24),c=Kn(3,null,null,n),t.current=c,c.stateNode=t,n=qf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Kf(c),t}function F_(t){return t?(t=Ss,t):Ss}function H_(t,n,a,s,u,c){u=F_(u),s.context===null?s.context=u:s.pendingContext=u,s=Za(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ka(t,s,n),a!==null&&($n(a,t,n),ko(a,t,n))}function G_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uh(t,n){G_(t,n),(t=t.alternate)&&G_(t,n)}function V_(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&$n(n,t,67108864),Uh(t,67108864)}}function X_(t){if(t.tag===13||t.tag===31){var n=ui();n=ht(n);var a=Dr(t,n);a!==null&&$n(a,t,n),Uh(t,n)}}var Zs=!0;function qM(t,n,a,s){var u=xt.T;xt.T=null;var c=Xt.p;try{Xt.p=2,Nh(t,n,a,s)}finally{Xt.p=c,xt.T=u}}function YM(t,n,a,s){var u=xt.T;xt.T=null;var c=Xt.p;try{Xt.p=8,Nh(t,n,a,s)}finally{Xt.p=c,xt.T=u}}function Nh(t,n,a,s){if(Zs){var u=Lh(s);if(u===null)hh(t,n,s,uc,a),q_(t,s);else if(ZM(u,t,n,a,s))s.stopPropagation();else if(q_(t,s),n&4&&-1<WM.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var S=gi(c.pendingLanes);if(S!==0){var T=c;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-Pn(S);T.entanglements[1]|=B,S&=~B}ea(c),(Pe&6)===0&&(Zu=q()+500,sl(0))}}break;case 31:case 13:T=Dr(c,2),T!==null&&$n(T,c,2),Qu(),Uh(c,2)}if(c=Lh(s),c===null&&hh(t,n,s,uc,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else hh(t,n,s,null,a)}}function Lh(t){return t=_f(t),Oh(t)}var uc=null;function Oh(t){if(uc=null,t=Oe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function k_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case Lt:return 2;case qt:return 8;case Tt:case St:return 32;case jt:return 268435456;default:return 32}default:return 32}}var Ph=!1,or=null,lr=null,ur=null,pl=new Map,ml=new Map,cr=[],WM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&V_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ZM(t,n,a,s,u){switch(n){case"focusin":return or=gl(or,t,n,a,s,u),!0;case"dragenter":return lr=gl(lr,t,n,a,s,u),!0;case"mouseover":return ur=gl(ur,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return pl.set(c,gl(pl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,ml.set(c,gl(ml.get(c)||null,t,n,a,s,u)),!0}return!1}function Y_(t){var n=Oe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Bt(t.priority,function(){X_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Bt(t.priority,function(){X_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);vf=s,a.target.dispatchEvent(s),vf=null}else return n=ge(a),n!==null&&V_(n),t.blockedOn=a,!1;n.shift()}return!0}function W_(t,n,a){cc(t)&&a.delete(n)}function KM(){Ph=!1,or!==null&&cc(or)&&(or=null),lr!==null&&cc(lr)&&(lr=null),ur!==null&&cc(ur)&&(ur=null),pl.forEach(W_),ml.forEach(W_)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ph||(Ph=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,KM)))}var dc=null;function Z_(t){dc!==t&&(dc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Oh(s||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,gd(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Ks(t){function n(B){return fc(B,t)}or!==null&&fc(or,t),lr!==null&&fc(lr,t),ur!==null&&fc(ur,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<cr.length;a++){var s=cr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],S=u[Yt]||null;if(typeof c=="function")S||Z_(a);else if(S){var T=null;if(c&&c.hasAttribute("formAction")){if(u=c,S=c[Yt]||null)T=S.formAction;else if(Oh(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Z_(a)}}}function K_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function zh(t){this._internalRoot=t}hc.prototype.render=zh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();H_(a,s,t,n,null,null)},hc.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;H_(t.current,2,null,t,null,null),Qu(),n[se]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&Y_(t)}};var j_=e.version;if(j_!=="19.3.1")throw Error(r(527,j_,"19.3.1"));Xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var jM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ye=pc.inject(jM),nn=pc}catch{}}return vl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Fv,c=Hv,S=Gv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=B_(t,1,!1,null,null,a,s,null,u,c,S,K_),t[se]=n.current,dh(t),new zh(n)},vl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=Fv,S=Hv,T=Gv,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=B_(t,1,!0,n,a??null,s,u,B,c,S,T,K_),n.context=F_(null),a=n.current,s=ui(),s=ht(s),u=Za(s),u.callback=null,Ka(a,u,s),a=s,n.current.lanes=a,Rr(n,a),ea(n),t[se]=n.current,dh(t),new hc(n)},vl.version="19.3.1",vl}var aS;function rT(){if(aS)return Bh.exports;aS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bh.exports=aT(),Bh.exports}var sT=rT();const Um="180",oT=0,rS=1,lT=2,EE=1,uT=2,Ua=3,xr=0,ti=1,Na=2,Er=0,po=1,sS=2,oS=3,lS=4,cT=5,ns=100,fT=101,dT=102,hT=103,pT=104,mT=200,gT=201,vT=202,_T=203,xp=204,Mp=205,ST=206,ET=207,yT=208,xT=209,MT=210,TT=211,bT=212,AT=213,RT=214,Tp=0,bp=1,Ap=2,go=3,Rp=4,Cp=5,wp=6,Dp=7,yE=0,CT=1,wT=2,yr=0,DT=1,UT=2,NT=3,LT=4,OT=5,PT=6,zT=7,xE=300,vo=301,_o=302,Up=303,Np=304,lf=306,Dl=1e3,rs=1001,Lp=1002,pi=1003,IT=1004,mc=1005,Gi=1006,Vh=1007,Sr=1008,za=1009,ME=1010,TE=1011,Ul=1012,Nm=1013,ss=1014,Oa=1015,Gl=1016,Lm=1017,Om=1018,Nl=1020,bE=35902,AE=35899,RE=1021,CE=1022,wi=1023,Ll=1026,Ol=1027,wE=1028,Pm=1029,DE=1030,zm=1031,Im=1033,Gc=33776,Vc=33777,Xc=33778,kc=33779,Op=35840,Pp=35841,zp=35842,Ip=35843,Bp=36196,Fp=37492,Hp=37496,Gp=37808,Vp=37809,Xp=37810,kp=37811,qp=37812,Yp=37813,Wp=37814,Zp=37815,Kp=37816,jp=37817,Qp=37818,Jp=37819,$p=37820,tm=37821,em=36492,nm=36494,im=36495,am=36283,rm=36284,sm=36285,om=36286,BT=3200,FT=3201,HT=0,GT=1,_r="",hi="srgb",So="srgb-linear",Zc="linear",qe="srgb",js=7680,uS=519,VT=512,XT=513,kT=514,UE=515,qT=516,YT=517,WT=518,ZT=519,cS=35044,fS="300 es",ra=2e3,Kc=2001;class To{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dS=1234567;const Cl=Math.PI/180,Pl=180/Math.PI;function bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function Bm(o,e){return(o%e+e)%e}function KT(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function jT(o,e,i){return o!==e?(i-o)/(e-o):0}function wl(o,e,i){return(1-i)*o+i*e}function QT(o,e,i,r){return wl(o,e,1-Math.exp(-i*r))}function JT(o,e=1){return e-Math.abs(Bm(o,e*2)-e)}function $T(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function t1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function e1(o,e){return o+Math.floor(Math.random()*(e-o+1))}function n1(o,e){return o+Math.random()*(e-o)}function i1(o){return o*(.5-Math.random())}function a1(o){o!==void 0&&(dS=o);let e=dS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r1(o){return o*Cl}function s1(o){return o*Pl}function o1(o){return(o&o-1)===0&&o!==0}function l1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function u1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function c1(o,e,i,r,l){const f=Math.cos,d=Math.sin,h=f(i/2),v=d(i/2),g=f((e+r)/2),m=d((e+r)/2),p=f((e-r)/2),_=d((e-r)/2),x=f((r-e)/2),M=d((r-e)/2);switch(l){case"XYX":o.set(h*m,v*p,v*_,h*g);break;case"YZY":o.set(v*_,h*m,v*p,h*g);break;case"ZXZ":o.set(v*p,v*_,h*m,h*g);break;case"XZX":o.set(h*m,v*M,v*x,h*g);break;case"YXY":o.set(v*x,h*m,v*M,h*g);break;case"ZYZ":o.set(v*M,v*x,h*m,h*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function co(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xh={DEG2RAD:Cl,RAD2DEG:Pl,generateUUID:bo,clamp:Te,euclideanModulo:Bm,mapLinear:KT,inverseLerp:jT,lerp:wl,damp:QT,pingpong:JT,smoothstep:$T,smootherstep:t1,randInt:e1,randFloat:n1,randFloatSpread:i1,seededRandom:a1,degToRad:r1,radToDeg:s1,isPowerOfTwo:o1,ceilPowerOfTwo:l1,floorPowerOfTwo:u1,setQuaternionFromProperEuler:c1,normalize:Wn,denormalize:co};class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let v=r[l+0],g=r[l+1],m=r[l+2],p=r[l+3];const _=f[d+0],x=f[d+1],M=f[d+2],A=f[d+3];if(h===0){e[i+0]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p;return}if(h===1){e[i+0]=_,e[i+1]=x,e[i+2]=M,e[i+3]=A;return}if(p!==A||v!==_||g!==x||m!==M){let y=1-h;const E=v*_+g*x+m*M+p*A,U=E>=0?1:-1,L=1-E*E;if(L>Number.EPSILON){const I=Math.sqrt(L),P=Math.atan2(I,E*U);y=Math.sin(y*P)/I,h=Math.sin(h*P)/I}const R=h*U;if(v=v*y+_*R,g=g*y+x*R,m=m*y+M*R,p=p*y+A*R,y===1-h){const I=1/Math.sqrt(v*v+g*g+m*m+p*p);v*=I,g*=I,m*=I,p*=I}}e[i]=v,e[i+1]=g,e[i+2]=m,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],v=r[l+1],g=r[l+2],m=r[l+3],p=f[d],_=f[d+1],x=f[d+2],M=f[d+3];return e[i]=h*M+m*p+v*x-g*_,e[i+1]=v*M+m*_+g*p-h*x,e[i+2]=g*M+m*x+h*_-v*p,e[i+3]=m*M-h*p-v*_-g*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,v=Math.sin,g=h(r/2),m=h(l/2),p=h(f/2),_=v(r/2),x=v(l/2),M=v(f/2);switch(d){case"XYZ":this._x=_*m*p+g*x*M,this._y=g*x*p-_*m*M,this._z=g*m*M+_*x*p,this._w=g*m*p-_*x*M;break;case"YXZ":this._x=_*m*p+g*x*M,this._y=g*x*p-_*m*M,this._z=g*m*M-_*x*p,this._w=g*m*p+_*x*M;break;case"ZXY":this._x=_*m*p-g*x*M,this._y=g*x*p+_*m*M,this._z=g*m*M+_*x*p,this._w=g*m*p-_*x*M;break;case"ZYX":this._x=_*m*p-g*x*M,this._y=g*x*p+_*m*M,this._z=g*m*M-_*x*p,this._w=g*m*p+_*x*M;break;case"YZX":this._x=_*m*p+g*x*M,this._y=g*x*p+_*m*M,this._z=g*m*M-_*x*p,this._w=g*m*p-_*x*M;break;case"XZY":this._x=_*m*p-g*x*M,this._y=g*x*p-_*m*M,this._z=g*m*M+_*x*p,this._w=g*m*p+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],v=i[9],g=i[2],m=i[6],p=i[10],_=r+h+p;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-v)*x,this._y=(f-g)*x,this._z=(d-l)*x}else if(r>h&&r>p){const x=2*Math.sqrt(1+r-h-p);this._w=(m-v)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(f+g)/x}else if(h>p){const x=2*Math.sqrt(1+h-r-p);this._w=(f-g)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(v+m)/x}else{const x=2*Math.sqrt(1+p-r-h);this._w=(d-l)/x,this._x=(f+g)/x,this._y=(v+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,v=i._y,g=i._z,m=i._w;return this._x=r*m+d*h+l*g-f*v,this._y=l*m+d*v+f*h-r*g,this._z=f*m+d*g+r*v-l*h,this._w=d*m-r*h-l*v-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=f,this;const v=1-h*h;if(v<=Number.EPSILON){const x=1-i;return this._w=x*d+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*f+i*this._z,this.normalize(),this}const g=Math.sqrt(v),m=Math.atan2(g,h),p=Math.sin((1-i)*m)/g,_=Math.sin(i*m)/g;return this._w=d*p+this._w*_,this._x=r*p+this._x*_,this._y=l*p+this._y*_,this._z=f*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(e=0,i=0,r=0){pt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(hS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(hS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,v=e.w,g=2*(d*l-h*r),m=2*(h*i-f*l),p=2*(f*r-d*i);return this.x=i+v*g+d*p-h*m,this.y=r+v*m+h*g-f*p,this.z=l+v*p+f*m-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,v=i.z;return this.x=l*v-f*h,this.y=f*d-r*v,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kh=new pt,hS=new Vl;class pe{constructor(e,i,r,l,f,d,h,v,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,v,g)}set(e,i,r,l,f,d,h,v,g){const m=this.elements;return m[0]=e,m[1]=l,m[2]=h,m[3]=i,m[4]=f,m[5]=v,m[6]=r,m[7]=d,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],v=r[6],g=r[1],m=r[4],p=r[7],_=r[2],x=r[5],M=r[8],A=l[0],y=l[3],E=l[6],U=l[1],L=l[4],R=l[7],I=l[2],P=l[5],N=l[8];return f[0]=d*A+h*U+v*I,f[3]=d*y+h*L+v*P,f[6]=d*E+h*R+v*N,f[1]=g*A+m*U+p*I,f[4]=g*y+m*L+p*P,f[7]=g*E+m*R+p*N,f[2]=_*A+x*U+M*I,f[5]=_*y+x*L+M*P,f[8]=_*E+x*R+M*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8];return i*d*m-i*h*g-r*f*m+r*h*v+l*f*g-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=m*d-h*g,_=h*v-m*f,x=g*f-d*v,M=i*p+r*_+l*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=p*A,e[1]=(l*g-m*r)*A,e[2]=(h*r-l*d)*A,e[3]=_*A,e[4]=(m*i-l*v)*A,e[5]=(l*f-h*i)*A,e[6]=x*A,e[7]=(r*v-g*i)*A,e[8]=(d*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const v=Math.cos(f),g=Math.sin(f);return this.set(r*v,r*g,-r*(v*d+g*h)+d+e,-l*g,l*v,-l*(-g*d+v*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(qh.makeScale(e,i)),this}rotate(e){return this.premultiply(qh.makeRotation(-e)),this}translate(e,i){return this.premultiply(qh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qh=new pe;function NE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function f1(){const o=jc("canvas");return o.style.display="block",o}const pS={};function zl(o){o in pS||(pS[o]=!0,console.warn(o))}function d1(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const mS=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h1(){const o={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_r?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return zl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return zl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[So]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:mS,fromXYZ:gS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:qe,toXYZ:mS,fromXYZ:gS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ne=h1();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qs;class p1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=jc("canvas")),Qs.width=e.width,Qs.height=e.height;const l=Qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m1=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Yh(l[d].image)):f.push(Yh(l[d]))}else f=Yh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Yh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?p1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;const Wh=new pt;class Gn extends To{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=rs,l=rs,f=Gi,d=Sr,h=wi,v=za,g=Gn.DEFAULT_ANISOTROPY,m=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=bo(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=v,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=xE;Gn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const v=e.elements,g=v[0],m=v[4],p=v[8],_=v[1],x=v[5],M=v[9],A=v[2],y=v[6],E=v[10];if(Math.abs(m-_)<.01&&Math.abs(p-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(p+A)<.1&&Math.abs(M+y)<.1&&Math.abs(g+x+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(g+1)/2,R=(x+1)/2,I=(E+1)/2,P=(m+_)/4,N=(p+A)/4,H=(M+y)/4;return L>R&&L>I?L<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(L),l=P/r,f=N/r):R>I?R<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(R),r=P/l,f=H/l):I<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(I),r=N/f,l=H/f),this.set(r,l,f,i),this}let U=Math.sqrt((y-M)*(y-M)+(p-A)*(p-A)+(_-m)*(_-m));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(p-A)/U,this.z=(_-m)/U,this.w=Math.acos((g+x+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v1 extends To{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Fm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends v1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class LE extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _1 extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl{constructor(e=new pt(1/0,1/0,1/0),i=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(f,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),vc.subVectors(this.max,_l),Js.subVectors(e.a,_l),$s.subVectors(e.b,_l),to.subVectors(e.c,_l),dr.subVectors($s,Js),hr.subVectors(to,$s),Zr.subVectors(Js,to);let i=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Zr.z,Zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Zr.z,0,-Zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Zr.y,Zr.x,0];return!Zh(i,Js,$s,to,vc)||(i=[1,0,0,0,1,0,0,0,1],!Zh(i,Js,$s,to,vc))?!1:(_c.crossVectors(dr,hr),i=[_c.x,_c.y,_c.z],Zh(i,Js,$s,to,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ba=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],Ii=new pt,gc=new Xl,Js=new pt,$s=new pt,to=new pt,dr=new pt,hr=new pt,Zr=new pt,_l=new pt,vc=new pt,_c=new pt,Kr=new pt;function Zh(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){Kr.fromArray(o,f);const h=l.x*Math.abs(Kr.x)+l.y*Math.abs(Kr.y)+l.z*Math.abs(Kr.z),v=e.dot(Kr),g=i.dot(Kr),m=r.dot(Kr);if(Math.max(-Math.max(v,g,m),Math.min(v,g,m))>h)return!1}return!0}const S1=new Xl,Sl=new pt,Kh=new pt;class Hm{constructor(e=new pt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):S1.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Sl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(Kh)),this.expandByPoint(Sl.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Aa=new pt,jh=new pt,Sc=new pt,pr=new pt,Qh=new pt,Ec=new pt,Jh=new pt;class E1{constructor(e=new pt,i=new pt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){jh.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),pr.copy(this.origin).sub(jh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=pr.dot(this.direction),v=-pr.dot(Sc),g=pr.lengthSq(),m=Math.abs(1-d*d);let p,_,x,M;if(m>0)if(p=d*v-h,_=d*h-v,M=f*m,p>=0)if(_>=-M)if(_<=M){const A=1/m;p*=A,_*=A,x=p*(p+d*_+2*h)+_*(d*p+_+2*v)+g}else _=f,p=Math.max(0,-(d*_+h)),x=-p*p+_*(_+2*v)+g;else _=-f,p=Math.max(0,-(d*_+h)),x=-p*p+_*(_+2*v)+g;else _<=-M?(p=Math.max(0,-(-d*f+h)),_=p>0?-f:Math.min(Math.max(-f,-v),f),x=-p*p+_*(_+2*v)+g):_<=M?(p=0,_=Math.min(Math.max(-f,-v),f),x=_*(_+2*v)+g):(p=Math.max(0,-(d*f+h)),_=p>0?f:Math.min(Math.max(-f,-v),f),x=-p*p+_*(_+2*v)+g);else _=d>0?-f:f,p=Math.max(0,-(d*_+h)),x=-p*p+_*(_+2*v)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(jh).addScaledVector(Sc,_),x}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const r=Aa.dot(this.direction),l=Aa.dot(Aa)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,v=r+d;return v<0?null:h<0?this.at(v,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,v;const g=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,_=this.origin;return g>=0?(r=(e.min.x-_.x)*g,l=(e.max.x-_.x)*g):(r=(e.max.x-_.x)*g,l=(e.min.x-_.x)*g),m>=0?(f=(e.min.y-_.y)*m,d=(e.max.y-_.y)*m):(f=(e.max.y-_.y)*m,d=(e.min.y-_.y)*m),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),p>=0?(h=(e.min.z-_.z)*p,v=(e.max.z-_.z)*p):(h=(e.max.z-_.z)*p,v=(e.min.z-_.z)*p),r>v||h>l)||((h>r||r!==r)&&(r=h),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,r,l,f){Qh.subVectors(i,e),Ec.subVectors(r,e),Jh.crossVectors(Qh,Ec);let d=this.direction.dot(Jh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;pr.subVectors(this.origin,e);const v=h*this.direction.dot(Ec.crossVectors(pr,Ec));if(v<0)return null;const g=h*this.direction.dot(Qh.cross(pr));if(g<0||v+g>d)return null;const m=-h*pr.dot(Jh);return m<0?null:this.at(m/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,i,r,l,f,d,h,v,g,m,p,_,x,M,A,y){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,v,g,m,p,_,x,M,A,y)}set(e,i,r,l,f,d,h,v,g,m,p,_,x,M,A,y){const E=this.elements;return E[0]=e,E[4]=i,E[8]=r,E[12]=l,E[1]=f,E[5]=d,E[9]=h,E[13]=v,E[2]=g,E[6]=m,E[10]=p,E[14]=_,E[3]=x,E[7]=M,E[11]=A,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),f=1/eo.setFromMatrixColumn(e,1).length(),d=1/eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),v=Math.cos(l),g=Math.sin(l),m=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const _=d*m,x=d*p,M=h*m,A=h*p;i[0]=v*m,i[4]=-v*p,i[8]=g,i[1]=x+M*g,i[5]=_-A*g,i[9]=-h*v,i[2]=A-_*g,i[6]=M+x*g,i[10]=d*v}else if(e.order==="YXZ"){const _=v*m,x=v*p,M=g*m,A=g*p;i[0]=_+A*h,i[4]=M*h-x,i[8]=d*g,i[1]=d*p,i[5]=d*m,i[9]=-h,i[2]=x*h-M,i[6]=A+_*h,i[10]=d*v}else if(e.order==="ZXY"){const _=v*m,x=v*p,M=g*m,A=g*p;i[0]=_-A*h,i[4]=-d*p,i[8]=M+x*h,i[1]=x+M*h,i[5]=d*m,i[9]=A-_*h,i[2]=-d*g,i[6]=h,i[10]=d*v}else if(e.order==="ZYX"){const _=d*m,x=d*p,M=h*m,A=h*p;i[0]=v*m,i[4]=M*g-x,i[8]=_*g+A,i[1]=v*p,i[5]=A*g+_,i[9]=x*g-M,i[2]=-g,i[6]=h*v,i[10]=d*v}else if(e.order==="YZX"){const _=d*v,x=d*g,M=h*v,A=h*g;i[0]=v*m,i[4]=A-_*p,i[8]=M*p+x,i[1]=p,i[5]=d*m,i[9]=-h*m,i[2]=-g*m,i[6]=x*p+M,i[10]=_-A*p}else if(e.order==="XZY"){const _=d*v,x=d*g,M=h*v,A=h*g;i[0]=v*m,i[4]=-p,i[8]=g*m,i[1]=_*p+A,i[5]=d*m,i[9]=x*p-M,i[2]=M*p-x,i[6]=h*m,i[10]=A*p+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,x1)}lookAt(e,i,r){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),mr.crossVectors(r,fi),mr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),mr.crossVectors(r,fi)),mr.normalize(),yc.crossVectors(fi,mr),l[0]=mr.x,l[4]=yc.x,l[8]=fi.x,l[1]=mr.y,l[5]=yc.y,l[9]=fi.y,l[2]=mr.z,l[6]=yc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],v=r[8],g=r[12],m=r[1],p=r[5],_=r[9],x=r[13],M=r[2],A=r[6],y=r[10],E=r[14],U=r[3],L=r[7],R=r[11],I=r[15],P=l[0],N=l[4],H=l[8],D=l[12],w=l[1],F=l[5],et=l[9],rt=l[13],ut=l[2],V=l[6],z=l[10],Q=l[14],Y=l[3],mt=l[7],Et=l[11],Ot=l[15];return f[0]=d*P+h*w+v*ut+g*Y,f[4]=d*N+h*F+v*V+g*mt,f[8]=d*H+h*et+v*z+g*Et,f[12]=d*D+h*rt+v*Q+g*Ot,f[1]=m*P+p*w+_*ut+x*Y,f[5]=m*N+p*F+_*V+x*mt,f[9]=m*H+p*et+_*z+x*Et,f[13]=m*D+p*rt+_*Q+x*Ot,f[2]=M*P+A*w+y*ut+E*Y,f[6]=M*N+A*F+y*V+E*mt,f[10]=M*H+A*et+y*z+E*Et,f[14]=M*D+A*rt+y*Q+E*Ot,f[3]=U*P+L*w+R*ut+I*Y,f[7]=U*N+L*F+R*V+I*mt,f[11]=U*H+L*et+R*z+I*Et,f[15]=U*D+L*rt+R*Q+I*Ot,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],v=e[9],g=e[13],m=e[2],p=e[6],_=e[10],x=e[14],M=e[3],A=e[7],y=e[11],E=e[15];return M*(+f*v*p-l*g*p-f*h*_+r*g*_+l*h*x-r*v*x)+A*(+i*v*x-i*g*_+f*d*_-l*d*x+l*g*m-f*v*m)+y*(+i*g*p-i*h*x-f*d*p+r*d*x+f*h*m-r*g*m)+E*(-l*h*m-i*v*p+i*h*_+l*d*p-r*d*_+r*v*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],v=e[6],g=e[7],m=e[8],p=e[9],_=e[10],x=e[11],M=e[12],A=e[13],y=e[14],E=e[15],U=p*y*g-A*_*g+A*v*x-h*y*x-p*v*E+h*_*E,L=M*_*g-m*y*g-M*v*x+d*y*x+m*v*E-d*_*E,R=m*A*g-M*p*g+M*h*x-d*A*x-m*h*E+d*p*E,I=M*p*v-m*A*v-M*h*_+d*A*_+m*h*y-d*p*y,P=i*U+r*L+l*R+f*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=U*N,e[1]=(A*_*f-p*y*f-A*l*x+r*y*x+p*l*E-r*_*E)*N,e[2]=(h*y*f-A*v*f+A*l*g-r*y*g-h*l*E+r*v*E)*N,e[3]=(p*v*f-h*_*f-p*l*g+r*_*g+h*l*x-r*v*x)*N,e[4]=L*N,e[5]=(m*y*f-M*_*f+M*l*x-i*y*x-m*l*E+i*_*E)*N,e[6]=(M*v*f-d*y*f-M*l*g+i*y*g+d*l*E-i*v*E)*N,e[7]=(d*_*f-m*v*f+m*l*g-i*_*g-d*l*x+i*v*x)*N,e[8]=R*N,e[9]=(M*p*f-m*A*f-M*r*x+i*A*x+m*r*E-i*p*E)*N,e[10]=(d*A*f-M*h*f+M*r*g-i*A*g-d*r*E+i*h*E)*N,e[11]=(m*h*f-d*p*f-m*r*g+i*p*g+d*r*x-i*h*x)*N,e[12]=I*N,e[13]=(m*A*l-M*p*l+M*r*_-i*A*_-m*r*y+i*p*y)*N,e[14]=(M*h*l-d*A*l-M*r*v+i*A*v+d*r*y-i*h*y)*N,e[15]=(d*p*l-m*h*l+m*r*v-i*p*v-d*r*_+i*h*_)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,v=e.z,g=f*d,m=f*h;return this.set(g*d+r,g*h-l*v,g*v+l*h,0,g*h+l*v,m*h+r,m*v-l*d,0,g*v-l*h,m*v+l*d,f*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,v=i._w,g=f+f,m=d+d,p=h+h,_=f*g,x=f*m,M=f*p,A=d*m,y=d*p,E=h*p,U=v*g,L=v*m,R=v*p,I=r.x,P=r.y,N=r.z;return l[0]=(1-(A+E))*I,l[1]=(x+R)*I,l[2]=(M-L)*I,l[3]=0,l[4]=(x-R)*P,l[5]=(1-(_+E))*P,l[6]=(y+U)*P,l[7]=0,l[8]=(M+L)*N,l[9]=(y-U)*N,l[10]=(1-(_+A))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=eo.set(l[0],l[1],l[2]).length();const d=eo.set(l[4],l[5],l[6]).length(),h=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Bi.copy(this);const g=1/f,m=1/d,p=1/h;return Bi.elements[0]*=g,Bi.elements[1]*=g,Bi.elements[2]*=g,Bi.elements[4]*=m,Bi.elements[5]*=m,Bi.elements[6]*=m,Bi.elements[8]*=p,Bi.elements[9]*=p,Bi.elements[10]*=p,i.setFromRotationMatrix(Bi),r.x=f,r.y=d,r.z=h,this}makePerspective(e,i,r,l,f,d,h=ra,v=!1){const g=this.elements,m=2*f/(i-e),p=2*f/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(v)M=f/(d-f),A=d*f/(d-f);else if(h===ra)M=-(d+f)/(d-f),A=-2*d*f/(d-f);else if(h===Kc)M=-d/(d-f),A=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=p,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=M,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=ra,v=!1){const g=this.elements,m=2/(i-e),p=2/(r-l),_=-(i+e)/(i-e),x=-(r+l)/(r-l);let M,A;if(v)M=1/(d-f),A=d/(d-f);else if(h===ra)M=-2/(d-f),A=-(d+f)/(d-f);else if(h===Kc)M=-1/(d-f),A=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=m,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=p,g[9]=0,g[13]=x,g[2]=0,g[6]=0,g[10]=M,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const eo=new pt,Bi=new yn,y1=new pt(0,0,0),x1=new pt(1,1,1),mr=new pt,yc=new pt,fi=new pt,vS=new yn,_S=new Vl;class Ia{constructor(e=0,i=0,r=0,l=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],v=l[1],g=l[5],m=l[9],p=l[2],_=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(v,f));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(v,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return vS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _S.setFromEuler(this),this.setFromQuaternion(_S,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class OE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M1=0;const SS=new pt,no=new Vl,Ra=new yn,xc=new pt,El=new pt,T1=new pt,b1=new Vl,ES=new pt(1,0,0),yS=new pt(0,1,0),xS=new pt(0,0,1),MS={type:"added"},A1={type:"removed"},io={type:"childadded",child:null},$h={type:"childremoved",child:null};class mi extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new pt,i=new Ia,r=new Vl,l=new pt(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yn},normalMatrix:{value:new pe}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(ES,e)}rotateY(e){return this.rotateOnAxis(yS,e)}rotateZ(e){return this.rotateOnAxis(xS,e)}translateOnAxis(e,i){return SS.copy(e).applyQuaternion(this.quaternion),this.position.add(SS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ES,e)}translateY(e){return this.translateOnAxis(yS,e)}translateZ(e){return this.translateOnAxis(xS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?xc.copy(e):xc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(El,xc,this.up):Ra.lookAt(xc,El,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ra),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(MS),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(A1),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(MS),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,T1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,b1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,v){return h[v.uuid]===void 0&&(h[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const v=h.shapes;if(Array.isArray(v))for(let g=0,m=v.length;g<m;g++){const p=v[g];f(e.shapes,p)}else f(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let v=0,g=this.material.length;v<g;v++)h.push(f(e.materials,this.material[v]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const v=this.animations[h];l.animations.push(f(e.animations,v))}}if(i){const h=d(e.geometries),v=d(e.materials),g=d(e.textures),m=d(e.images),p=d(e.shapes),_=d(e.skeletons),x=d(e.animations),M=d(e.nodes);h.length>0&&(r.geometries=h),v.length>0&&(r.materials=v),g.length>0&&(r.textures=g),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(h){const v=[];for(const g in h){const m=h[g];delete m.metadata,v.push(m)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}mi.DEFAULT_UP=new pt(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new pt,Ca=new pt,tp=new pt,wa=new pt,ao=new pt,ro=new pt,TS=new pt,ep=new pt,np=new pt,ip=new pt,ap=new fn,rp=new fn,sp=new fn;class Hi{constructor(e=new pt,i=new pt,r=new pt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Fi.subVectors(e,i),l.cross(Fi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Fi.subVectors(l,i),Ca.subVectors(r,i),tp.subVectors(e,i);const d=Fi.dot(Fi),h=Fi.dot(Ca),v=Fi.dot(tp),g=Ca.dot(Ca),m=Ca.dot(tp),p=d*g-h*h;if(p===0)return f.set(0,0,0),null;const _=1/p,x=(g*v-h*m)*_,M=(d*m-h*v)*_;return f.set(1-x-M,M,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,r,l,f,d,h,v){return this.getBarycoord(e,i,r,l,wa)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(f,wa.x),v.addScaledVector(d,wa.y),v.addScaledVector(h,wa.z),v)}static getInterpolatedAttribute(e,i,r,l,f,d){return ap.setScalar(0),rp.setScalar(0),sp.setScalar(0),ap.fromBufferAttribute(e,i),rp.fromBufferAttribute(e,r),sp.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ap,f.x),d.addScaledVector(rp,f.y),d.addScaledVector(sp,f.z),d}static isFrontFacing(e,i,r,l){return Fi.subVectors(r,i),Ca.subVectors(e,i),Fi.cross(Ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Fi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;ao.subVectors(l,r),ro.subVectors(f,r),ep.subVectors(e,r);const v=ao.dot(ep),g=ro.dot(ep);if(v<=0&&g<=0)return i.copy(r);np.subVectors(e,l);const m=ao.dot(np),p=ro.dot(np);if(m>=0&&p<=m)return i.copy(l);const _=v*p-m*g;if(_<=0&&v>=0&&m<=0)return d=v/(v-m),i.copy(r).addScaledVector(ao,d);ip.subVectors(e,f);const x=ao.dot(ip),M=ro.dot(ip);if(M>=0&&x<=M)return i.copy(f);const A=x*g-v*M;if(A<=0&&g>=0&&M<=0)return h=g/(g-M),i.copy(r).addScaledVector(ro,h);const y=m*M-x*p;if(y<=0&&p-m>=0&&x-M>=0)return TS.subVectors(f,l),h=(p-m)/(p-m+(x-M)),i.copy(l).addScaledVector(TS,h);const E=1/(y+A+_);return d=A*E,h=_*E,i.copy(r).addScaledVector(ao,d).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const PE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function op(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ye{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=Bm(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=op(d,f,e+1/3),this.g=op(d,f,e),this.b=op(d,f,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=PE[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ne.workingToColorSpace(Fn.copy(this),e),Math.round(Te(Fn.r*255,0,255))*65536+Math.round(Te(Fn.g*255,0,255))*256+Math.round(Te(Fn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,f=Fn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let v,g;const m=(h+d)/2;if(h===d)v=0,g=0;else{const p=d-h;switch(g=m<=.5?p/(d+h):p/(2-d-h),d){case r:v=(l-f)/p+(l<f?6:0);break;case l:v=(f-r)/p+2;break;case f:v=(r-l)/p+4;break}v/=6}return e.h=v,e.s=g,e.l=m,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=hi){Ne.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,r=Fn.g,l=Fn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(Mc);const r=wl(gr.h,Mc.h,i),l=wl(gr.s,Mc.s,i),f=wl(gr.l,Mc.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ye;Ye.NAMES=PE;let R1=0;class uf extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=po,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=Mp,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xp&&(r.blendSrc=this.blendSrc),this.blendDst!==Mp&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const v=f[h];delete v.metadata,d.push(v)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zE extends uf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=yE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new pt,Tc=new Fe;let C1=0;class sa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=cS,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=co(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=co(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=co(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),f=Wn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cS&&(e.usage=this.usage),e}}class IE extends sa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class BE extends sa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class oa extends sa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let w1=0;const Ai=new yn,lp=new mi,so=new pt,di=new Xl,yl=new Xl,Rn=new pt;class Mr extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NE(e)?BE:IE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];di.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(di.min,yl.min),di.expandByPoint(Rn),Rn.addVectors(di.max,yl.max),di.expandByPoint(Rn)):(di.expandByPoint(yl.min),di.expandByPoint(yl.max))}di.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],v=this.morphTargetsRelative;for(let g=0,m=h.count;g<m;g++)Rn.fromBufferAttribute(h,g),v&&(so.fromBufferAttribute(e,g),Rn.add(so)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],v=[];for(let H=0;H<r.count;H++)h[H]=new pt,v[H]=new pt;const g=new pt,m=new pt,p=new pt,_=new Fe,x=new Fe,M=new Fe,A=new pt,y=new pt;function E(H,D,w){g.fromBufferAttribute(r,H),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,w),_.fromBufferAttribute(f,H),x.fromBufferAttribute(f,D),M.fromBufferAttribute(f,w),m.sub(g),p.sub(g),x.sub(_),M.sub(_);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(F),y.copy(p).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(F),h[H].add(A),h[D].add(A),h[w].add(A),v[H].add(y),v[D].add(y),v[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let H=0,D=U.length;H<D;++H){const w=U[H],F=w.start,et=w.count;for(let rt=F,ut=F+et;rt<ut;rt+=3)E(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const L=new pt,R=new pt,I=new pt,P=new pt;function N(H){I.fromBufferAttribute(l,H),P.copy(I);const D=h[H];L.copy(D),L.sub(I.multiplyScalar(I.dot(D))).normalize(),R.crossVectors(P,D);const F=R.dot(v[H])<0?-1:1;d.setXYZW(H,L.x,L.y,L.z,F)}for(let H=0,D=U.length;H<D;++H){const w=U[H],F=w.start,et=w.count;for(let rt=F,ut=F+et;rt<ut;rt+=3)N(e.getX(rt+0)),N(e.getX(rt+1)),N(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const l=new pt,f=new pt,d=new pt,h=new pt,v=new pt,g=new pt,m=new pt,p=new pt;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,M),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),m.subVectors(d,f),p.subVectors(l,f),m.cross(p),h.fromBufferAttribute(r,M),v.fromBufferAttribute(r,A),g.fromBufferAttribute(r,y),h.add(m),v.add(m),g.add(m),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(A,v.x,v.y,v.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let _=0,x=i.count;_<x;_+=3)l.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),m.subVectors(d,f),p.subVectors(l,f),m.cross(p),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,v){const g=h.array,m=h.itemSize,p=h.normalized,_=new g.constructor(v.length*m);let x=0,M=0;for(let A=0,y=v.length;A<y;A++){h.isInterleavedBufferAttribute?x=v[A]*h.data.stride+h.offset:x=v[A]*m;for(let E=0;E<m;E++)_[M++]=g[x++]}return new sa(_,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mr,r=this.index.array,l=this.attributes;for(const h in l){const v=l[h],g=e(v,r);i.setAttribute(h,g)}const f=this.morphAttributes;for(const h in f){const v=[],g=f[h];for(let m=0,p=g.length;m<p;m++){const _=g[m],x=e(_,r);v.push(x)}i.morphAttributes[h]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const g=r[v];e.data.attributes[v]=g.toJSON(e.data)}const l={};let f=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],m=[];for(let p=0,_=g.length;p<_;p++){const x=g[p];m.push(x.toJSON(e.data))}m.length>0&&(l[v]=m,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const m=l[g];this.setAttribute(g,m.clone(i))}const f=e.morphAttributes;for(const g in f){const m=[],p=f[g];for(let _=0,x=p.length;_<x;_++)m.push(p[_].clone(i));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,m=d.length;g<m;g++){const p=d[g];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bS=new yn,jr=new E1,bc=new Hm,AS=new pt,Ac=new pt,Rc=new pt,Cc=new pt,up=new pt,wc=new pt,RS=new pt,Dc=new pt;class Vi extends mi{constructor(e=new Mr,i=new zE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){wc.set(0,0,0);for(let v=0,g=f.length;v<g;v++){const m=h[v],p=f[v];m!==0&&(up.fromBufferAttribute(p,e),d?wc.addScaledVector(up,m):wc.addScaledVector(up.sub(i),m))}i.add(wc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(f),jr.copy(e.ray).recast(e.near),!(bc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(bc,AS)===null||jr.origin.distanceToSquared(AS)>(e.far-e.near)**2))&&(bS.copy(f).invert(),jr.copy(e.ray).applyMatrix4(bS),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,v=f.attributes.position,g=f.attributes.uv,m=f.attributes.uv1,p=f.attributes.normal,_=f.groups,x=f.drawRange;if(h!==null)if(Array.isArray(d))for(let M=0,A=_.length;M<A;M++){const y=_[M],E=d[y.materialIndex],U=Math.max(y.start,x.start),L=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,I=L;R<I;R+=3){const P=h.getX(R),N=h.getX(R+1),H=h.getX(R+2);l=Uc(this,E,e,r,g,m,p,P,N,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let y=M,E=A;y<E;y+=3){const U=h.getX(y),L=h.getX(y+1),R=h.getX(y+2);l=Uc(this,d,e,r,g,m,p,U,L,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let M=0,A=_.length;M<A;M++){const y=_[M],E=d[y.materialIndex],U=Math.max(y.start,x.start),L=Math.min(v.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,I=L;R<I;R+=3){const P=R,N=R+1,H=R+2;l=Uc(this,E,e,r,g,m,p,P,N,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,x.start),A=Math.min(v.count,x.start+x.count);for(let y=M,E=A;y<E;y+=3){const U=y,L=y+1,R=y+2;l=Uc(this,d,e,r,g,m,p,U,L,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function D1(o,e,i,r,l,f,d,h){let v;if(e.side===ti?v=r.intersectTriangle(d,f,l,!0,h):v=r.intersectTriangle(l,f,d,e.side===xr,h),v===null)return null;Dc.copy(h),Dc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Dc);return g<i.near||g>i.far?null:{distance:g,point:Dc.clone(),object:o}}function Uc(o,e,i,r,l,f,d,h,v,g){o.getVertexPosition(h,Ac),o.getVertexPosition(v,Rc),o.getVertexPosition(g,Cc);const m=D1(o,e,i,r,Ac,Rc,Cc,RS);if(m){const p=new pt;Hi.getBarycoord(RS,Ac,Rc,Cc,p),l&&(m.uv=Hi.getInterpolatedAttribute(l,h,v,g,p,new Fe)),f&&(m.uv1=Hi.getInterpolatedAttribute(f,h,v,g,p,new Fe)),d&&(m.normal=Hi.getInterpolatedAttribute(d,h,v,g,p,new pt),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:h,b:v,c:g,normal:new pt,materialIndex:0};Hi.getNormal(Ac,Rc,Cc,_.normal),m.face=_,m.barycoord=p}return m}class kl extends Mr{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const v=[],g=[],m=[],p=[];let _=0,x=0;M("z","y","x",-1,-1,r,i,e,d,f,0),M("z","y","x",1,-1,r,i,-e,d,f,1),M("x","z","y",1,1,e,r,i,l,d,2),M("x","z","y",1,-1,e,r,-i,l,d,3),M("x","y","z",1,-1,e,i,r,l,f,4),M("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(v),this.setAttribute("position",new oa(g,3)),this.setAttribute("normal",new oa(m,3)),this.setAttribute("uv",new oa(p,2));function M(A,y,E,U,L,R,I,P,N,H,D){const w=R/N,F=I/H,et=R/2,rt=I/2,ut=P/2,V=N+1,z=H+1;let Q=0,Y=0;const mt=new pt;for(let Et=0;Et<z;Et++){const Ot=Et*F-rt;for(let Zt=0;Zt<V;Zt++){const re=Zt*w-et;mt[A]=re*U,mt[y]=Ot*L,mt[E]=ut,g.push(mt.x,mt.y,mt.z),mt[A]=0,mt[y]=0,mt[E]=P>0?1:-1,m.push(mt.x,mt.y,mt.z),p.push(Zt/N),p.push(1-Et/H),Q+=1}}for(let Et=0;Et<H;Et++)for(let Ot=0;Ot<N;Ot++){const Zt=_+Ot+V*Et,re=_+Ot+V*(Et+1),X=_+(Ot+1)+V*(Et+1),ct=_+(Ot+1)+V*Et;v.push(Zt,re,ct),v.push(re,X,ct),Y+=6}h.addGroup(x,Y,D),x+=Y,_+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const r=Eo(o[i]);for(const l in r)e[l]=r[l]}return e}function U1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function FE(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const N1={clone:Eo,merge:Zn};var L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends uf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=O1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=U1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Gm extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new pt,CS=new Fe,wS=new Fe;class Ri extends Gm{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,i){return this.getViewBounds(e,CS,wS),i.subVectors(wS,CS)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,g=d.fullHeight;f+=d.offsetX*l/v,i-=d.offsetY*r/g,l*=d.width/v,r*=d.height/g}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class P1 extends mi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(oo,lo,e,i);l.layers=this.layers,this.add(l);const f=new Ri(oo,lo,e,i);f.layers=this.layers,this.add(f);const d=new Ri(oo,lo,e,i);d.layers=this.layers,this.add(d);const h=new Ri(oo,lo,e,i);h.layers=this.layers,this.add(h);const v=new Ri(oo,lo,e,i);v.layers=this.layers,this.add(v);const g=new Ri(oo,lo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,v]=i;for(const g of i)this.remove(g);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,v,g,m]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,m),e.setRenderTarget(p,_,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class HE extends Gn{constructor(e=[],i=vo,r,l,f,d,h,v,g,m){super(e,i,r,l,f,d,h,v,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z1 extends os{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new HE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new kl(5,5,5),f=new la({name:"CubemapFromEquirect",uniforms:Eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Er});f.uniforms.tEquirect.value=i;const d=new Vi(l,f),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Gi),new P1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}class Nc extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class cp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),E=this._getHandJoint(g,A);y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=y.radius),E.visible=y!==null}const m=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],_=m.position.distanceTo(p.position),x=.02,M=.005;g.inputState.pinching&&_>x+M?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=x-M&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,f.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(f.linearVelocity)):v.hasLinearVelocity=!1,f.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(f.angularVelocity)):v.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return h!==null&&(h.visible=l!==null),v!==null&&(v.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class GE extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class B1 extends Gn{constructor(e=null,i=1,r=1,l,f,d,h,v,g=pi,m=pi,p,_){super(null,d,h,v,g,m,l,f,p,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fp=new pt,F1=new pt,H1=new pe;class ts{constructor(e=new pt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=fp.subVectors(r,i).cross(F1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(fp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||H1.getNormalMatrix(e),l=this.coplanarPoint(fp).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Hm,G1=new Fe(.5,.5),Lc=new pt;class VE{constructor(e=new ts,i=new ts,r=new ts,l=new ts,f=new ts,d=new ts){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],v=f[2],g=f[3],m=f[4],p=f[5],_=f[6],x=f[7],M=f[8],A=f[9],y=f[10],E=f[11],U=f[12],L=f[13],R=f[14],I=f[15];if(l[0].setComponents(g-d,x-m,E-M,I-U).normalize(),l[1].setComponents(g+d,x+m,E+M,I+U).normalize(),l[2].setComponents(g+h,x+p,E+A,I+L).normalize(),l[3].setComponents(g-h,x-p,E-A,I-L).normalize(),r)l[4].setComponents(v,_,y,R).normalize(),l[5].setComponents(g-v,x-_,E-y,I-R).normalize();else if(l[4].setComponents(g-v,x-_,E-y,I-R).normalize(),i===ra)l[5].setComponents(g+v,x+_,E+y,I+R).normalize();else if(i===Kc)l[5].setComponents(v,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const i=G1.distanceTo(e.center);return Qr.radius=.7071067811865476+i,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?e.max.x:e.min.x,Lc.y=l.normal.y>0?e.max.y:e.min.y,Lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V1 extends Gn{constructor(e,i,r,l,f,d,h,v,g){super(e,i,r,l,f,d,h,v,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class XE extends Gn{constructor(e,i,r=ss,l,f,d,h=pi,v=pi,g,m=Ll,p=1){if(m!==Ll&&m!==Ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:p};super(_,l,f,d,h,v,m,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kE extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ql extends Mr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),v=Math.floor(l),g=h+1,m=v+1,p=e/h,_=i/v,x=[],M=[],A=[],y=[];for(let E=0;E<m;E++){const U=E*_-d;for(let L=0;L<g;L++){const R=L*p-f;M.push(R,-U,0),A.push(0,0,1),y.push(L/h),y.push(1-E/v)}}for(let E=0;E<v;E++)for(let U=0;U<h;U++){const L=U+g*E,R=U+g*(E+1),I=U+1+g*(E+1),P=U+1+g*E;x.push(L,R,P),x.push(R,I,P)}this.setIndex(x),this.setAttribute("position",new oa(M,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vm extends Mr{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(d+h,Math.PI);let g=0;const m=[],p=new pt,_=new pt,x=[],M=[],A=[],y=[];for(let E=0;E<=r;E++){const U=[],L=E/r;let R=0;E===0&&d===0?R=.5/i:E===r&&v===Math.PI&&(R=-.5/i);for(let I=0;I<=i;I++){const P=I/i;p.x=-e*Math.cos(l+P*f)*Math.sin(d+L*h),p.y=e*Math.cos(d+L*h),p.z=e*Math.sin(l+P*f)*Math.sin(d+L*h),M.push(p.x,p.y,p.z),_.copy(p).normalize(),A.push(_.x,_.y,_.z),y.push(P+R,1-L),U.push(g++)}m.push(U)}for(let E=0;E<r;E++)for(let U=0;U<i;U++){const L=m[E][U+1],R=m[E][U],I=m[E+1][U],P=m[E+1][U+1];(E!==0||d>0)&&x.push(L,R,P),(E!==r-1||v<Math.PI)&&x.push(R,I,P)}this.setIndex(x),this.setAttribute("position",new oa(M,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class X1 extends uf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends uf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q1 extends Gm{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,h-=m*this.view.offsetY,v=h-m*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Y1 extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function DS(o,e,i,r){const l=W1(r);switch(i){case RE:return o*e;case wE:return o*e/l.components*l.byteLength;case Pm:return o*e/l.components*l.byteLength;case DE:return o*e*2/l.components*l.byteLength;case zm:return o*e*2/l.components*l.byteLength;case CE:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Im:return o*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xc:case kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pp:case Ip:return Math.max(o,16)*Math.max(e,8)/4;case Op:case zp:return Math.max(o,8)*Math.max(e,8)/2;case Bp:case Fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case $p:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case tm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case em:case nm:case im:return Math.ceil(o/4)*Math.ceil(e/4)*16;case am:case rm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case sm:case om:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function W1(o){switch(o){case za:case ME:return{byteLength:1,components:1};case Ul:case TE:case Gl:return{byteLength:2,components:1};case Lm:case Om:return{byteLength:2,components:4};case ss:case Nm:case Oa:return{byteLength:4,components:1};case bE:case AE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);function qE(){let o=null,e=!1,i=null,r=null;function l(f,d){i(f,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function Z1(o){const e=new WeakMap;function i(h,v){const g=h.array,m=h.usage,p=g.byteLength,_=o.createBuffer();o.bindBuffer(v,_),o.bufferData(v,g,m),h.onUploadCallback();let x;if(g instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)x=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)x=o.SHORT;else if(g instanceof Uint32Array)x=o.UNSIGNED_INT;else if(g instanceof Int32Array)x=o.INT;else if(g instanceof Int8Array)x=o.BYTE;else if(g instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:x,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:p}}function r(h,v,g){const m=v.array,p=v.updateRanges;if(o.bindBuffer(g,h),p.length===0)o.bufferSubData(g,0,m);else{p.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<p.length;x++){const M=p[_],A=p[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++_,p[_]=A)}p.length=_+1;for(let x=0,M=p.length;x<M;x++){const A=p[x];o.bufferSubData(g,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=e.get(h);v&&(o.deleteBuffer(v.buffer),e.delete(h))}function d(h,v){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,i(h,v));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,v),g.version=h.version}}return{get:l,remove:f,update:d}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
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
#endif`,Q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,ub=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_b=`#define PI 3.141592653589793
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
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eb=`vec3 transformedNormal = objectNormal;
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
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
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
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,Zb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aA=`#if defined( USE_POINTS_UV )
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
#endif`,rA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
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
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
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
#endif`,_A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LA=`float getShadowMask() {
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
}`,OA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,zA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
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
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
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
#endif`,XA=`#ifdef USE_TRANSMISSION
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KA=`uniform sampler2D t2D;
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
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
}`,eR=`#if DEPTH_PACKING == 3200
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
}`,nR=`#define DISTANCE
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
}`,iR=`#define DISTANCE
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
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
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
}`,oR=`uniform vec3 diffuse;
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
}`,lR=`#include <common>
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
}`,uR=`uniform vec3 diffuse;
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
}`,cR=`#define LAMBERT
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
}`,fR=`#define LAMBERT
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
}`,dR=`#define MATCAP
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
}`,hR=`#define MATCAP
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
}`,pR=`#define NORMAL
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
}`,mR=`#define NORMAL
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
}`,gR=`#define PHONG
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
}`,vR=`#define PHONG
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
}`,_R=`#define STANDARD
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
}`,SR=`#define STANDARD
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
}`,ER=`#define TOON
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
}`,yR=`#define TOON
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
}`,xR=`uniform float size;
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
}`,MR=`uniform vec3 diffuse;
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
}`,TR=`#include <common>
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
}`,bR=`uniform vec3 color;
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
}`,AR=`uniform float rotation;
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
}`,RR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:K1,alphahash_pars_fragment:j1,alphamap_fragment:Q1,alphamap_pars_fragment:J1,alphatest_fragment:$1,alphatest_pars_fragment:tb,aomap_fragment:eb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:rb,beginnormal_vertex:sb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:ub,clipping_planes_fragment:cb,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:db,clipping_planes_vertex:hb,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:vb,common:_b,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:yb,displacementmap_vertex:xb,emissivemap_fragment:Mb,emissivemap_pars_fragment:Tb,colorspace_fragment:bb,colorspace_pars_fragment:Ab,envmap_fragment:Rb,envmap_common_pars_fragment:Cb,envmap_pars_fragment:wb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Gb,envmap_vertex:Ub,fog_vertex:Nb,fog_pars_vertex:Lb,fog_fragment:Ob,fog_pars_fragment:Pb,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:Xb,lights_phong_fragment:kb,lights_phong_pars_fragment:qb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Zb,lights_fragment_maps:Kb,lights_fragment_end:jb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:tA,map_fragment:eA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:aA,metalnessmap_fragment:rA,metalnessmap_pars_fragment:sA,morphinstance_vertex:oA,morphcolor_vertex:lA,morphnormal_vertex:uA,morphtarget_pars_vertex:cA,morphtarget_vertex:fA,normal_fragment_begin:dA,normal_fragment_maps:hA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:_A,clearcoat_normal_fragment_maps:SA,clearcoat_pars_fragment:EA,iridescence_pars_fragment:yA,opaque_fragment:xA,packing:MA,premultiplied_alpha_fragment:TA,project_vertex:bA,dithering_fragment:AA,dithering_pars_fragment:RA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:UA,shadowmap_vertex:NA,shadowmask_pars_fragment:LA,skinbase_vertex:OA,skinning_pars_vertex:PA,skinning_vertex:zA,skinnormal_vertex:IA,specularmap_fragment:BA,specularmap_pars_fragment:FA,tonemapping_fragment:HA,tonemapping_pars_fragment:GA,transmission_fragment:VA,transmission_pars_fragment:XA,uv_pars_fragment:kA,uv_pars_vertex:qA,uv_vertex:YA,worldpos_vertex:WA,background_vert:ZA,background_frag:KA,backgroundCube_vert:jA,backgroundCube_frag:QA,cube_vert:JA,cube_frag:$A,depth_vert:tR,depth_frag:eR,distanceRGBA_vert:nR,distanceRGBA_frag:iR,equirect_vert:aR,equirect_frag:rR,linedashed_vert:sR,linedashed_frag:oR,meshbasic_vert:lR,meshbasic_frag:uR,meshlambert_vert:cR,meshlambert_frag:fR,meshmatcap_vert:dR,meshmatcap_frag:hR,meshnormal_vert:pR,meshnormal_frag:mR,meshphong_vert:gR,meshphong_frag:vR,meshphysical_vert:_R,meshphysical_frag:SR,meshtoon_vert:ER,meshtoon_frag:yR,points_vert:xR,points_frag:MR,shadow_vert:TR,shadow_frag:bR,sprite_vert:AR,sprite_frag:RR},Ft={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ye(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Zn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Zn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ye(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Zn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Zn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Zn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Zn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Zn([Ft.common,Ft.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Zn([Ft.lights,Ft.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};na.physical={uniforms:Zn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Oc={r:0,b:0,g:0},Jr=new Ia,CR=new yn;function wR(o,e,i,r,l,f,d){const h=new Ye(0);let v=f===!0?0:1,g,m,p=null,_=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function A(L){let R=!1;const I=M(L);I===null?E(h,v):I&&I.isColor&&(E(I,1),R=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,R){const I=M(R);I&&(I.isCubeTexture||I.mapping===lf)?(m===void 0&&(m=new Vi(new kl(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Eo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(m)),Jr.copy(R.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CR.makeRotationFromEuler(Jr)),m.material.toneMapped=Ne.getTransfer(I.colorSpace)!==qe,(p!==I||_!==I.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,p=I,_=I.version,x=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new Vi(new ql(2,2),new la({name:"BackgroundMaterial",uniforms:Eo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(I.colorSpace)!==qe,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||_!==I.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,p=I,_=I.version,x=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null))}function E(L,R){L.getRGB(Oc,FE(o)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,R,d)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,R=1){h.set(L),v=R,E(h,v)},getClearAlpha:function(){return v},setClearAlpha:function(L){v=L,E(h,v)},render:A,addToRenderList:y,dispose:U}}function DR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let f=l,d=!1;function h(w,F,et,rt,ut){let V=!1;const z=p(rt,et,F);f!==z&&(f=z,g(f.object)),V=x(w,rt,et,ut),V&&M(w,rt,et,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,R(w,F,et,rt),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function v(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function m(w){return o.deleteVertexArray(w)}function p(w,F,et){const rt=et.wireframe===!0;let ut=r[w.id];ut===void 0&&(ut={},r[w.id]=ut);let V=ut[F.id];V===void 0&&(V={},ut[F.id]=V);let z=V[rt];return z===void 0&&(z=_(v()),V[rt]=z),z}function _(w){const F=[],et=[],rt=[];for(let ut=0;ut<i;ut++)F[ut]=0,et[ut]=0,rt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:et,attributeDivisors:rt,object:w,attributes:{},index:null}}function x(w,F,et,rt){const ut=f.attributes,V=F.attributes;let z=0;const Q=et.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const Et=ut[Y];let Ot=V[Y];if(Ot===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Ot=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Ot=w.instanceColor)),Et===void 0||Et.attribute!==Ot||Ot&&Et.data!==Ot.data)return!0;z++}return f.attributesNum!==z||f.index!==rt}function M(w,F,et,rt){const ut={},V=F.attributes;let z=0;const Q=et.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let Et=V[Y];Et===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const Ot={};Ot.attribute=Et,Et&&Et.data&&(Ot.data=Et.data),ut[Y]=Ot,z++}f.attributes=ut,f.attributesNum=z,f.index=rt}function A(){const w=f.newAttributes;for(let F=0,et=w.length;F<et;F++)w[F]=0}function y(w){E(w,0)}function E(w,F){const et=f.newAttributes,rt=f.enabledAttributes,ut=f.attributeDivisors;et[w]=1,rt[w]===0&&(o.enableVertexAttribArray(w),rt[w]=1),ut[w]!==F&&(o.vertexAttribDivisor(w,F),ut[w]=F)}function U(){const w=f.newAttributes,F=f.enabledAttributes;for(let et=0,rt=F.length;et<rt;et++)F[et]!==w[et]&&(o.disableVertexAttribArray(et),F[et]=0)}function L(w,F,et,rt,ut,V,z){z===!0?o.vertexAttribIPointer(w,F,et,ut,V):o.vertexAttribPointer(w,F,et,rt,ut,V)}function R(w,F,et,rt){A();const ut=rt.attributes,V=et.getAttributes(),z=F.defaultAttributeValues;for(const Q in V){const Y=V[Q];if(Y.location>=0){let mt=ut[Q];if(mt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor)),mt!==void 0){const Et=mt.normalized,Ot=mt.itemSize,Zt=e.get(mt);if(Zt===void 0)continue;const re=Zt.buffer,X=Zt.type,ct=Zt.bytesPerElement,J=X===o.INT||X===o.UNSIGNED_INT||mt.gpuType===Nm;if(mt.isInterleavedBufferAttribute){const j=mt.data,yt=j.stride,wt=mt.offset;if(j.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)E(Y.location+At,j.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let At=0;At<Y.locationSize;At++)y(Y.location+At);o.bindBuffer(o.ARRAY_BUFFER,re);for(let At=0;At<Y.locationSize;At++)L(Y.location+At,Ot/Y.locationSize,X,Et,yt*ct,(wt+Ot/Y.locationSize*At)*ct,J)}else{if(mt.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)E(Y.location+j,mt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let j=0;j<Y.locationSize;j++)y(Y.location+j);o.bindBuffer(o.ARRAY_BUFFER,re);for(let j=0;j<Y.locationSize;j++)L(Y.location+j,Ot/Y.locationSize,X,Et,Ot*ct,Ot/Y.locationSize*j*ct,J)}}else if(z!==void 0){const Et=z[Q];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}U()}function I(){H();for(const w in r){const F=r[w];for(const et in F){const rt=F[et];for(const ut in rt)m(rt[ut].object),delete rt[ut];delete F[et]}delete r[w]}}function P(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const et in F){const rt=F[et];for(const ut in rt)m(rt[ut].object),delete rt[ut];delete F[et]}delete r[w.id]}function N(w){for(const F in r){const et=r[F];if(et[w.id]===void 0)continue;const rt=et[w.id];for(const ut in rt)m(rt[ut].object),delete rt[ut];delete et[w.id]}}function H(){D(),d=!0,f!==l&&(f=l,g(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function UR(o,e,i){let r;function l(g){r=g}function f(g,m){o.drawArrays(r,g,m),i.update(m,r,1)}function d(g,m,p){p!==0&&(o.drawArraysInstanced(r,g,m,p),i.update(m,r,p))}function h(g,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];i.update(x,r,1)}function v(g,m,p,_){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<g.length;M++)d(g[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(r,g,0,m,0,_,0,p);let M=0;for(let A=0;A<p;A++)M+=m[A]*_[A];i.update(M,r,1)}}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=v}function NR(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(N){return!(N!==wi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const H=N===Gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==za&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Oa&&!H)}function v(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const m=v(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const p=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:I,maxSamples:P}}function LR(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new ts,h=new pe,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const x=p.length!==0||_||r!==0||l;return l=_,r=p.length,x},this.beginShadows=function(){f=!0,m(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,_){i=m(p,_,0)},this.setState=function(p,_,x){const M=p.clippingPlanes,A=p.clipIntersection,y=p.clipShadows,E=o.get(p);if(!l||M===null||M.length===0||f&&!y)f?m(null):g();else{const U=f?0:r,L=U*4;let R=E.clippingState||null;v.value=R,R=m(M,_,L,x);for(let I=0;I!==L;++I)R[I]=i[I];E.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,_,x,M){const A=p!==null?p.length:0;let y=null;if(A!==0){if(y=v.value,M!==!0||y===null){const E=x+A*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<E)&&(y=new Float32Array(E));for(let L=0,R=x;L!==A;++L,R+=4)d.copy(p[L]).applyMatrix4(U,h),d.normal.toArray(y,R),y[R+3]=d.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function OR(o){let e=new WeakMap;function i(d,h){return h===Up?d.mapping=vo:h===Np&&(d.mapping=_o),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Up||h===Np)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const g=new z1(v.height);return g.fromEquirectangularTexture(o,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const fo=4,US=[.125,.215,.35,.446,.526,.582],is=20,dp=new q1,NS=new Ye;let hp=null,pp=0,mp=0,gp=!1;const es=(1+Math.sqrt(5))/2,uo=1/es,LS=[new pt(-es,uo,0),new pt(es,uo,0),new pt(-uo,0,es),new pt(uo,0,es),new pt(0,es,-uo),new pt(0,es,uo),new pt(-1,1,-1),new pt(1,1,-1),new pt(-1,1,1),new pt(1,1,1)],PR=new pt;class OS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=PR}=f;hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,h),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hp,pp,mp),this._renderer.xr.enabled=gp,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:Gl,format:wi,colorSpace:So,depthBuffer:!1},l=PS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=PS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zR(f)),this._blurMaterial=IR(f,e,i)}return l}_compileMaterial(e){const i=new Vi(this._lodPlanes[0],e);this._renderer.compile(i,dp)}_sceneToCubeUV(e,i,r,l,f){const v=new Ri(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,x=p.toneMapping;p.getClearColor(NS),p.toneMapping=yr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const A=new zE({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),y=new Vi(new kl,A);let E=!1;const U=e.background;U?U.isColor&&(A.color.copy(U),e.background=null,E=!0):(A.color.copy(NS),E=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(v.up.set(0,g[L],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x+m[L],f.y,f.z)):R===1?(v.up.set(0,0,g[L]),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y+m[L],f.z)):(v.up.set(0,g[L],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y,f.z+m[L]));const I=this._cubeSize;Pc(l,R*I,L>2?I:0,I,I),p.setRenderTarget(l),E&&p.render(y,v),p.render(e,v)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=x,p.autoClear=_,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vo||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=IS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zS());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new Vi(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const v=this._cubeSize;Pc(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,dp)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=LS[(l-f-1)%LS.length];this._blur(e,f-1,f,d,h)}i.autoClear=r}_blur(e,i,r,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",f),this._halfBlur(d,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,d,h){const v=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new Vi(this._lodPlanes[l],g),_=g.uniforms,x=this._sizeLods[r]-1,M=isFinite(f)?Math.PI/(2*x):2*Math.PI/(2*is-1),A=f/M,y=isFinite(f)?1+Math.floor(m*A):is;y>is&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const E=[];let U=0;for(let N=0;N<is;++N){const H=N/A,D=Math.exp(-H*H/2);E.push(D),N===0?U+=D:N<y&&(U+=2*D)}for(let N=0;N<E.length;N++)E[N]=E[N]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=E,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-r;const R=this._sizeLods[l],I=3*R*(l>L-fo?l-L+fo:0),P=4*(this._cubeSize-R);Pc(i,I,P,3*R,2*R),v.setRenderTarget(i),v.render(p,dp)}}function zR(o){const e=[],i=[],r=[];let l=o;const f=o-fo+1+US.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let v=1/h;d>o-fo?v=US[d-o+fo-1]:d===0&&(v=0),r.push(v);const g=1/(h-2),m=-g,p=1+g,_=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,M=6,A=3,y=2,E=1,U=new Float32Array(A*M*x),L=new Float32Array(y*M*x),R=new Float32Array(E*M*x);for(let P=0;P<x;P++){const N=P%3*2/3-1,H=P>2?0:-1,D=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];U.set(D,A*M*P),L.set(_,y*M*P);const w=[P,P,P,P,P,P];R.set(w,E*M*P)}const I=new Mr;I.setAttribute("position",new sa(U,A)),I.setAttribute("uv",new sa(L,y)),I.setAttribute("faceIndex",new sa(R,E)),e.push(I),l>fo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function PS(o,e,i){const r=new os(o,e,i);return r.texture.mapping=lf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function IR(o,e,i){const r=new Float32Array(is),l=new pt(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function zS(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function IS(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Xm(){return`

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
	`}function BR(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const v=h.mapping,g=v===Up||v===Np,m=v===vo||v===_o;if(g||m){let p=e.get(h);const _=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new OS(o)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const x=h.image;return g&&x&&x.height>0||m&&x&&l(x)?(i===null&&(i=new OS(o)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function l(h){let v=0;const g=6;for(let m=0;m<g;m++)h[m]!==void 0&&v++;return v===g}function f(h){const v=h.target;v.removeEventListener("dispose",f);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function FR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function HR(o,e,i,r){const l={},f=new WeakMap;function d(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",d),delete l[_.id];const x=f.get(_);x&&(e.remove(x),f.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(p,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function v(p){const _=p.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function g(p){const _=[],x=p.index,M=p.attributes.position;let A=0;if(x!==null){const U=x.array;A=x.version;for(let L=0,R=U.length;L<R;L+=3){const I=U[L+0],P=U[L+1],N=U[L+2];_.push(I,P,P,N,N,I)}}else if(M!==void 0){const U=M.array;A=M.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const I=L+0,P=L+1,N=L+2;_.push(I,P,P,N,N,I)}}else return;const y=new(NE(_)?BE:IE)(_,1);y.version=A;const E=f.get(p);E&&e.remove(E),f.set(p,y)}function m(p){const _=f.get(p);if(_){const x=p.index;x!==null&&_.version<x.version&&g(p)}else g(p);return f.get(p)}return{get:h,update:v,getWireframeAttribute:m}}function GR(o,e,i){let r;function l(_){r=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function v(_,x){o.drawElements(r,x,f,_*d),i.update(x,r,1)}function g(_,x,M){M!==0&&(o.drawElementsInstanced(r,x,f,_*d,M),i.update(x,r,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,f,_,0,M);let y=0;for(let E=0;E<M;E++)y+=x[E];i.update(y,r,1)}function p(_,x,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<_.length;E++)g(_[E]/d,x[E],A[E]);else{y.multiDrawElementsInstancedWEBGL(r,x,0,f,_,0,A,0,M);let E=0;for(let U=0;U<M;U++)E+=x[U]*A[U];i.update(E,r,1)}}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function VR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function XR(o,e,i){const r=new WeakMap,l=new fn;function f(d,h,v){const g=d.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==p){let w=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var x=w;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let I=h.attributes.position.count*R,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*P*4*p),H=new LE(N,I,P,p);H.type=Oa,H.needsUpdate=!0;const D=R*4;for(let F=0;F<p;F++){const et=E[F],rt=U[F],ut=L[F],V=I*P*4*F;for(let z=0;z<et.count;z++){const Q=z*D;M===!0&&(l.fromBufferAttribute(et,z),N[V+Q+0]=l.x,N[V+Q+1]=l.y,N[V+Q+2]=l.z,N[V+Q+3]=0),A===!0&&(l.fromBufferAttribute(rt,z),N[V+Q+4]=l.x,N[V+Q+5]=l.y,N[V+Q+6]=l.z,N[V+Q+7]=0),y===!0&&(l.fromBufferAttribute(ut,z),N[V+Q+8]=l.x,N[V+Q+9]=l.y,N[V+Q+10]=l.z,N[V+Q+11]=ut.itemSize===4?l.w:1)}}_={count:p,texture:H,size:new Fe(I,P)},r.set(h,_),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let y=0;y<g.length;y++)M+=g[y];const A=h.morphTargetsRelative?1:1-M;v.getUniforms().setValue(o,"morphTargetBaseInfluence",A),v.getUniforms().setValue(o,"morphTargetInfluences",g)}v.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function kR(o,e,i,r){let l=new WeakMap;function f(v){const g=r.render.frame,m=v.geometry,p=e.get(v,m);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",h)===!1&&v.addEventListener("dispose",h),l.get(v)!==g&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,g))),v.isSkinnedMesh){const _=v.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return p}function d(){l=new WeakMap}function h(v){const g=v.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:d}}const YE=new Gn,BS=new XE(1,1),WE=new LE,ZE=new _1,KE=new HE,FS=[],HS=[],GS=new Float32Array(16),VS=new Float32Array(9),XS=new Float32Array(4);function Ao(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=FS[l];if(f===void 0&&(f=new Float32Array(l),FS[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function cf(o,e){let i=HS[e];i===void 0&&(i=new Int32Array(e),HS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function qR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function YR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function WR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function ZR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function KR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;XS.set(r),o.uniformMatrix2fv(this.addr,!1,XS),Mn(i,r)}}function jR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;VS.set(r),o.uniformMatrix3fv(this.addr,!1,VS),Mn(i,r)}}function QR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;GS.set(r),o.uniformMatrix4fv(this.addr,!1,GS),Mn(i,r)}}function JR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function tC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function eC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function nC(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function iC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function aC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function rC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function sC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(BS.compareFunction=UE,f=BS):f=YE,i.setTexture2D(e||f,l)}function oC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ZE,l)}function lC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||KE,l)}function uC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||WE,l)}function cC(o){switch(o){case 5126:return qR;case 35664:return YR;case 35665:return WR;case 35666:return ZR;case 35674:return KR;case 35675:return jR;case 35676:return QR;case 5124:case 35670:return JR;case 35667:case 35671:return $R;case 35668:case 35672:return tC;case 35669:case 35673:return eC;case 5125:return nC;case 36294:return iC;case 36295:return aC;case 36296:return rC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return uC}}function fC(o,e){o.uniform1fv(this.addr,e)}function dC(o,e){const i=Ao(e,this.size,2);o.uniform2fv(this.addr,i)}function hC(o,e){const i=Ao(e,this.size,3);o.uniform3fv(this.addr,i)}function pC(o,e){const i=Ao(e,this.size,4);o.uniform4fv(this.addr,i)}function mC(o,e){const i=Ao(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function gC(o,e){const i=Ao(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function vC(o,e){const i=Ao(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _C(o,e){o.uniform1iv(this.addr,e)}function SC(o,e){o.uniform2iv(this.addr,e)}function EC(o,e){o.uniform3iv(this.addr,e)}function yC(o,e){o.uniform4iv(this.addr,e)}function xC(o,e){o.uniform1uiv(this.addr,e)}function MC(o,e){o.uniform2uiv(this.addr,e)}function TC(o,e){o.uniform3uiv(this.addr,e)}function bC(o,e){o.uniform4uiv(this.addr,e)}function AC(o,e,i){const r=this.cache,l=e.length,f=cf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||YE,f[d])}function RC(o,e,i){const r=this.cache,l=e.length,f=cf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ZE,f[d])}function CC(o,e,i){const r=this.cache,l=e.length,f=cf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||KE,f[d])}function wC(o,e,i){const r=this.cache,l=e.length,f=cf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||WE,f[d])}function DC(o){switch(o){case 5126:return fC;case 35664:return dC;case 35665:return hC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return _C;case 35667:case 35671:return SC;case 35668:case 35672:return EC;case 35669:case 35673:return yC;case 5125:return xC;case 36294:return MC;case 36295:return TC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return CC;case 36289:case 36303:case 36311:case 36292:return wC}}class UC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=cC(i.type)}}class NC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DC(i.type)}}class LC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const vp=/(\w+)(\])?(\[|\.)?/g;function kS(o,e){o.seq.push(e),o.map[e.id]=e}function OC(o,e,i){const r=o.name,l=r.length;for(vp.lastIndex=0;;){const f=vp.exec(r),d=vp.lastIndex;let h=f[1];const v=f[2]==="]",g=f[3];if(v&&(h=h|0),g===void 0||g==="["&&d+2===l){kS(i,g===void 0?new UC(h,o,e):new NC(h,o,e));break}else{let p=i.map[h];p===void 0&&(p=new LC(h),kS(i,p)),i=p}}}class qc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);OC(f,d,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],v=r[h.id];v.needsUpdate!==!1&&h.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function qS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const PC=37297;let zC=0;function IC(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const YS=new pe;function BC(o){Ne._getMatrix(YS,Ne.workingColorSpace,o);const e=`mat3( ${YS.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function WS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+IC(o.getShaderSource(e),h)}else return f}function FC(o,e){const i=BC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function HC(o,e){let i;switch(e){case DT:i="Linear";break;case UT:i="Reinhard";break;case NT:i="Cineon";break;case LT:i="ACESFilmic";break;case PT:i="AgX";break;case zT:i="Neutral";break;case OT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new pt;function GC(){Ne.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function XC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function kC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function xl(o){return o!==""}function ZS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function KS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qC=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(o){return o.replace(qC,WC)}const YC=new Map;function WC(o,e){let i=me[e];if(i===void 0){const r=YC.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lm(i)}const ZC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jS(o){return o.replace(ZC,KC)}function KC(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function QS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function jC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===EE?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===uT?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ua&&(e="SHADOWMAP_TYPE_VSM"),e}function QC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case _o:e="ENVMAP_TYPE_CUBE";break;case lf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JC(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===_o&&(e="ENVMAP_MODE_REFRACTION"),e}function $C(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yE:e="ENVMAP_BLENDING_MULTIPLY";break;case CT:e="ENVMAP_BLENDING_MIX";break;case wT:e="ENVMAP_BLENDING_ADD";break}return e}function t2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function e2(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const v=jC(i),g=QC(i),m=JC(i),p=$C(i),_=t2(i),x=VC(i),M=XC(f),A=l.createProgram();let y,E,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(xl).join(`
`),y.length>0&&(y+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(xl).join(`
`),E.length>0&&(E+=`
`)):(y=[QS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),E=[QS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",i.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==yr?"#define TONE_MAPPING":"",i.toneMapping!==yr?me.tonemapping_pars_fragment:"",i.toneMapping!==yr?HC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,FC("linearToOutputTexel",i.outputColorSpace),GC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xl).join(`
`)),d=lm(d),d=ZS(d,i),d=KS(d,i),h=lm(h),h=ZS(h,i),h=KS(h,i),d=jS(d),h=jS(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",i.glslVersion===fS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const L=U+y+d,R=U+E+h,I=qS(l,l.VERTEX_SHADER,L),P=qS(l,l.FRAGMENT_SHADER,R);l.attachShader(A,I),l.attachShader(A,P),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function N(F){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(A)||"",rt=l.getShaderInfoLog(I)||"",ut=l.getShaderInfoLog(P)||"",V=et.trim(),z=rt.trim(),Q=ut.trim();let Y=!0,mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,I,P);else{const Et=WS(l,I,"vertex"),Ot=WS(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+Et+`
`+Ot)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Q==="")&&(mt=!1);mt&&(F.diagnostics={runnable:Y,programLog:V,vertexShader:{log:z,prefix:y},fragmentShader:{log:Q,prefix:E}})}l.deleteShader(I),l.deleteShader(P),H=new qc(l,A),D=kC(l,A)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,PC)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=P,this}let n2=0;class i2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new a2(e),i.set(e,r)),r}}class a2{constructor(e){this.id=n2++,this.code=e,this.usedTimes=0}}function r2(o,e,i,r,l,f,d){const h=new OE,v=new i2,g=new Set,m=[],p=l.logarithmicDepthBuffer,_=l.vertexTextures;let x=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return g.add(D),D===0?"uv":`uv${D}`}function y(D,w,F,et,rt){const ut=et.fog,V=rt.geometry,z=D.isMeshStandardMaterial?et.environment:null,Q=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),Y=Q&&Q.mapping===lf?Q.image.height:null,mt=M[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const Et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=Et!==void 0?Et.length:0;let Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let re,X,ct,J;if(mt){const ye=na[mt];re=ye.vertexShader,X=ye.fragmentShader}else re=D.vertexShader,X=D.fragmentShader,v.update(D),ct=v.getVertexShaderID(D),J=v.getFragmentShaderID(D);const j=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),wt=rt.isInstancedMesh===!0,At=rt.isBatchedMesh===!0,xt=!!D.map,Xt=!!D.matcap,G=!!Q,ze=!!D.aoMap,ee=!!D.lightMap,Jt=!!D.bumpMap,Ut=!!D.normalMap,$t=!!D.displacementMap,zt=!!D.emissiveMap,le=!!D.metalnessMap,be=!!D.roughnessMap,Ce=D.anisotropy>0,O=D.clearcoat>0,b=D.dispersion>0,it=D.iridescence>0,gt=D.sheen>0,ft=D.transmission>0,lt=Ce&&!!D.anisotropyMap,Ht=O&&!!D.clearcoatMap,Ct=O&&!!D.clearcoatNormalMap,Gt=O&&!!D.clearcoatRoughnessMap,Kt=it&&!!D.iridescenceMap,bt=it&&!!D.iridescenceThicknessMap,Mt=gt&&!!D.sheenColorMap,ne=gt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,It=!!D.specularColorMap,fe=!!D.specularIntensityMap,q=ft&&!!D.transmissionMap,Dt=ft&&!!D.thicknessMap,Lt=!!D.gradientMap,qt=!!D.alphaMap,Tt=D.alphaTest>0,St=!!D.alphaHash,jt=!!D.extensions;let ce=yr;D.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Xe={shaderID:mt,shaderType:D.type,shaderName:D.name,vertexShader:re,fragmentShader:X,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:At,batchingColor:At&&rt._colorsTexture!==null,instancing:wt,instancingColor:wt&&rt.instanceColor!==null,instancingMorph:wt&&rt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:j===null?o.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:So,alphaToCoverage:!!D.alphaToCoverage,map:xt,matcap:Xt,envMap:G,envMapMode:G&&Q.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:ee,bumpMap:Jt,normalMap:Ut,displacementMap:_&&$t,emissiveMap:zt,normalMapObjectSpace:Ut&&D.normalMapType===GT,normalMapTangentSpace:Ut&&D.normalMapType===HT,metalnessMap:le,roughnessMap:be,anisotropy:Ce,anisotropyMap:lt,clearcoat:O,clearcoatMap:Ht,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:it,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:gt,sheenColorMap:Mt,sheenRoughnessMap:ne,specularMap:Qt,specularColorMap:It,specularIntensityMap:fe,transmission:ft,transmissionMap:q,thicknessMap:Dt,gradientMap:Lt,opaque:D.transparent===!1&&D.blending===po&&D.alphaToCoverage===!1,alphaMap:qt,alphaTest:Tt,alphaHash:St,combine:D.combine,mapUv:xt&&A(D.map.channel),aoMapUv:ze&&A(D.aoMap.channel),lightMapUv:ee&&A(D.lightMap.channel),bumpMapUv:Jt&&A(D.bumpMap.channel),normalMapUv:Ut&&A(D.normalMap.channel),displacementMapUv:$t&&A(D.displacementMap.channel),emissiveMapUv:zt&&A(D.emissiveMap.channel),metalnessMapUv:le&&A(D.metalnessMap.channel),roughnessMapUv:be&&A(D.roughnessMap.channel),anisotropyMapUv:lt&&A(D.anisotropyMap.channel),clearcoatMapUv:Ht&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:Qt&&A(D.specularMap.channel),specularColorMapUv:It&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Dt&&A(D.thicknessMap.channel),alphaMapUv:qt&&A(D.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||Ce),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!V.attributes.uv&&(xt||qt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:rt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:zt&&D.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Na,flipSided:D.side===ti,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:jt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&D.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Xe.vertexUv1s=g.has(1),Xe.vertexUv2s=g.has(2),Xe.vertexUv3s=g.has(3),g.clear(),Xe}function E(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)w.push(F),w.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(U(w,D),L(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function U(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const w=M[D.type];let F;if(w){const et=na[w];F=N1.clone(et.uniforms)}else F=D.uniforms;return F}function I(D,w){let F;for(let et=0,rt=m.length;et<rt;et++){const ut=m[et];if(ut.cacheKey===w){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new e2(o,w,D,f),m.push(F)),F}function P(D){if(--D.usedTimes===0){const w=m.indexOf(D);m[w]=m[m.length-1],m.pop(),D.destroy()}}function N(D){v.remove(D)}function H(){v.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:R,acquireProgram:I,releaseProgram:P,releaseShaderCache:N,programs:m,dispose:H}}function s2(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,v){o.get(d)[h]=v}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function o2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function JS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $S(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(p,_,x,M,A,y){let E=o[e];return E===void 0?(E={id:p.id,object:p,geometry:_,material:x,groupOrder:M,renderOrder:p.renderOrder,z:A,group:y},o[e]=E):(E.id=p.id,E.object=p,E.geometry=_,E.material=x,E.groupOrder=M,E.renderOrder=p.renderOrder,E.z=A,E.group=y),e++,E}function h(p,_,x,M,A,y){const E=d(p,_,x,M,A,y);x.transmission>0?r.push(E):x.transparent===!0?l.push(E):i.push(E)}function v(p,_,x,M,A,y){const E=d(p,_,x,M,A,y);x.transmission>0?r.unshift(E):x.transparent===!0?l.unshift(E):i.unshift(E)}function g(p,_){i.length>1&&i.sort(p||o2),r.length>1&&r.sort(_||JS),l.length>1&&l.sort(_||JS)}function m(){for(let p=e,_=o.length;p<_;p++){const x=o[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:h,unshift:v,finish:m,sort:g}}function l2(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new $S,o.set(r,[d])):l>=f.length?(d=new $S,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function u2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pt,color:new Ye};break;case"SpotLight":i={position:new pt,direction:new pt,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pt,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pt,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":i={color:new Ye,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return o[e.id]=i,i}}}function c2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let f2=0;function d2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function h2(o){const e=new u2,i=c2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new pt);const l=new pt,f=new yn,d=new yn;function h(g){let m=0,p=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,M=0,A=0,y=0,E=0,U=0,L=0,R=0,I=0,P=0,N=0;g.sort(d2);for(let D=0,w=g.length;D<w;D++){const F=g[D],et=F.color,rt=F.intensity,ut=F.distance,V=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=et.r*rt,p+=et.g*rt,_+=et.b*rt;else if(F.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(F.sh.coefficients[z],rt);N++}else if(F.isDirectionalLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,Y=i.get(F);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=V,r.directionalShadowMatrix[x]=F.shadow.matrix,U++}r.directional[x]=z,x++}else if(F.isSpotLight){const z=e.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(et).multiplyScalar(rt),z.distance=ut,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,r.spot[A]=z;const Q=F.shadow;if(F.map&&(r.spotLightMap[I]=F.map,I++,Q.updateMatrices(F),F.castShadow&&P++),r.spotLightMatrix[A]=Q.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=V,R++}A++}else if(F.isRectAreaLight){const z=e.get(F);z.color.copy(et).multiplyScalar(rt),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=z,y++}else if(F.isPointLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),z.distance=F.distance,z.decay=F.decay,F.castShadow){const Q=F.shadow,Y=i.get(F);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=V,r.pointShadowMatrix[M]=F.shadow.matrix,L++}r.point[M]=z,M++}else if(F.isHemisphereLight){const z=e.get(F);z.skyColor.copy(F.color).multiplyScalar(rt),z.groundColor.copy(F.groundColor).multiplyScalar(rt),r.hemi[E]=z,E++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==x||H.pointLength!==M||H.spotLength!==A||H.rectAreaLength!==y||H.hemiLength!==E||H.numDirectionalShadows!==U||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==I||H.numLightProbes!==N)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=E,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=N,H.directionalLength=x,H.pointLength=M,H.spotLength=A,H.rectAreaLength=y,H.hemiLength=E,H.numDirectionalShadows=U,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=I,H.numLightProbes=N,r.version=f2++)}function v(g,m){let p=0,_=0,x=0,M=0,A=0;const y=m.matrixWorldInverse;for(let E=0,U=g.length;E<U;E++){const L=g[E];if(L.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),p++}else if(L.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),d.identity(),f.copy(L.matrixWorld),f.premultiply(y),d.extractRotation(f),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),M++}else if(L.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:h,setupView:v,state:r}}function tE(o){const e=new h2(o),i=[],r=[];function l(m){g.camera=m,i.length=0,r.length=0}function f(m){i.push(m)}function d(m){r.push(m)}function h(){e.setup(i)}function v(m){e.setupView(i,m)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:d}}function p2(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new tE(o),e.set(l,[h])):f>=d.length?(h=new tE(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const m2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
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
}`;function v2(o,e,i){let r=new VE;const l=new Fe,f=new Fe,d=new fn,h=new X1({depthPacking:FT}),v=new k1,g={},m=i.maxTextureSize,p={[xr]:ti,[ti]:xr,[Na]:Na},_=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:m2,fragmentShader:g2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Mr;M.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Vi(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=EE;let E=this.type;this.render=function(P,N,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Er),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const rt=E!==Ua&&this.type===Ua,ut=E===Ua&&this.type!==Ua;for(let V=0,z=P.length;V<z;V++){const Q=P[V],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const mt=Y.getFrameExtents();if(l.multiply(mt),f.copy(Y.mapSize),(l.x>m||l.y>m)&&(l.x>m&&(f.x=Math.floor(m/mt.x),l.x=f.x*mt.x,Y.mapSize.x=f.x),l.y>m&&(f.y=Math.floor(m/mt.y),l.y=f.y*mt.y,Y.mapSize.y=f.y)),Y.map===null||rt===!0||ut===!0){const Ot=this.type!==Ua?{minFilter:pi,magFilter:pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new os(l.x,l.y,Ot),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let Ot=0;Ot<Et;Ot++){const Zt=Y.getViewport(Ot);d.set(f.x*Zt.x,f.y*Zt.y,f.x*Zt.z,f.y*Zt.w),et.viewport(d),Y.updateMatrices(Q,Ot),r=Y.getFrustum(),R(N,H,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ua&&U(Y,H),Y.needsUpdate=!1}E=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,F)};function U(P,N){const H=e.update(A);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new os(l.x,l.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,H,_,A,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,H,x,A,null)}function L(P,N,H,D){let w=null;const F=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)w=F;else if(w=H.isPointLight===!0?v:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const et=w.uuid,rt=N.uuid;let ut=g[et];ut===void 0&&(ut={},g[et]=ut);let V=ut[rt];V===void 0&&(V=w.clone(),ut[rt]=V,N.addEventListener("dispose",I)),w=V}if(w.visible=N.visible,w.wireframe=N.wireframe,D===Ua?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:p[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const et=o.properties.get(w);et.light=H}return w}function R(P,N,H,D,w){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Ua)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const rt=e.update(P),ut=P.material;if(Array.isArray(ut)){const V=rt.groups;for(let z=0,Q=V.length;z<Q;z++){const Y=V[z],mt=ut[Y.materialIndex];if(mt&&mt.visible){const Et=L(P,mt,D,w);P.onBeforeShadow(o,P,N,H,rt,Et,Y),o.renderBufferDirect(H,null,rt,Et,P,Y),P.onAfterShadow(o,P,N,H,rt,Et,Y)}}}else if(ut.visible){const V=L(P,ut,D,w);P.onBeforeShadow(o,P,N,H,rt,V,null),o.renderBufferDirect(H,null,rt,V,P,null),P.onAfterShadow(o,P,N,H,rt,V,null)}}const et=P.children;for(let rt=0,ut=et.length;rt<ut;rt++)R(et[rt],N,H,D,w)}function I(P){P.target.removeEventListener("dispose",I);for(const H in g){const D=g[H],w=P.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const _2={[Tp]:bp,[Ap]:wp,[Rp]:Dp,[go]:Cp,[bp]:Tp,[wp]:Ap,[Dp]:Rp,[Cp]:go};function S2(o,e){function i(){let q=!1;const Dt=new fn;let Lt=null;const qt=new fn(0,0,0,0);return{setMask:function(Tt){Lt!==Tt&&!q&&(o.colorMask(Tt,Tt,Tt,Tt),Lt=Tt)},setLocked:function(Tt){q=Tt},setClear:function(Tt,St,jt,ce,Xe){Xe===!0&&(Tt*=ce,St*=ce,jt*=ce),Dt.set(Tt,St,jt,ce),qt.equals(Dt)===!1&&(o.clearColor(Tt,St,jt,ce),qt.copy(Dt))},reset:function(){q=!1,Lt=null,qt.set(-1,0,0,0)}}}function r(){let q=!1,Dt=!1,Lt=null,qt=null,Tt=null;return{setReversed:function(St){if(Dt!==St){const jt=e.get("EXT_clip_control");St?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Dt=St;const ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return Dt},setTest:function(St){St?j(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(St){Lt!==St&&!q&&(o.depthMask(St),Lt=St)},setFunc:function(St){if(Dt&&(St=_2[St]),qt!==St){switch(St){case Tp:o.depthFunc(o.NEVER);break;case bp:o.depthFunc(o.ALWAYS);break;case Ap:o.depthFunc(o.LESS);break;case go:o.depthFunc(o.LEQUAL);break;case Rp:o.depthFunc(o.EQUAL);break;case Cp:o.depthFunc(o.GEQUAL);break;case wp:o.depthFunc(o.GREATER);break;case Dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}qt=St}},setLocked:function(St){q=St},setClear:function(St){Tt!==St&&(Dt&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){q=!1,Lt=null,qt=null,Tt=null,Dt=!1}}}function l(){let q=!1,Dt=null,Lt=null,qt=null,Tt=null,St=null,jt=null,ce=null,Xe=null;return{setTest:function(ye){q||(ye?j(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!q&&(o.stencilMask(ye),Dt=ye)},setFunc:function(ye,nn,_n){(Lt!==ye||qt!==nn||Tt!==_n)&&(o.stencilFunc(ye,nn,_n),Lt=ye,qt=nn,Tt=_n)},setOp:function(ye,nn,_n){(St!==ye||jt!==nn||ce!==_n)&&(o.stencilOp(ye,nn,_n),St=ye,jt=nn,ce=_n)},setLocked:function(ye){q=ye},setClear:function(ye){Xe!==ye&&(o.clearStencil(ye),Xe=ye)},reset:function(){q=!1,Dt=null,Lt=null,qt=null,Tt=null,St=null,jt=null,ce=null,Xe=null}}}const f=new i,d=new r,h=new l,v=new WeakMap,g=new WeakMap;let m={},p={},_=new WeakMap,x=[],M=null,A=!1,y=null,E=null,U=null,L=null,R=null,I=null,P=null,N=new Ye(0,0,0),H=0,D=!1,w=null,F=null,et=null,rt=null,ut=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Q>=2);let mt=null,Et={};const Ot=o.getParameter(o.SCISSOR_BOX),Zt=o.getParameter(o.VIEWPORT),re=new fn().fromArray(Ot),X=new fn().fromArray(Zt);function ct(q,Dt,Lt,qt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(q,St),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Lt;jt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,qt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Dt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const J={};J[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),j(o.DEPTH_TEST),d.setFunc(go),Jt(!1),Ut(rS),j(o.CULL_FACE),ze(Er);function j(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function yt(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function wt(q,Dt){return p[q]!==Dt?(o.bindFramebuffer(q,Dt),p[q]=Dt,q===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Dt),q===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function At(q,Dt){let Lt=x,qt=!1;if(q){Lt=_.get(Dt),Lt===void 0&&(Lt=[],_.set(Dt,Lt));const Tt=q.textures;if(Lt.length!==Tt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,jt=Tt.length;St<jt;St++)Lt[St]=o.COLOR_ATTACHMENT0+St;Lt.length=Tt.length,qt=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,qt=!0);qt&&o.drawBuffers(Lt)}function xt(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const Xt={[ns]:o.FUNC_ADD,[fT]:o.FUNC_SUBTRACT,[dT]:o.FUNC_REVERSE_SUBTRACT};Xt[hT]=o.MIN,Xt[pT]=o.MAX;const G={[mT]:o.ZERO,[gT]:o.ONE,[vT]:o.SRC_COLOR,[xp]:o.SRC_ALPHA,[MT]:o.SRC_ALPHA_SATURATE,[yT]:o.DST_COLOR,[ST]:o.DST_ALPHA,[_T]:o.ONE_MINUS_SRC_COLOR,[Mp]:o.ONE_MINUS_SRC_ALPHA,[xT]:o.ONE_MINUS_DST_COLOR,[ET]:o.ONE_MINUS_DST_ALPHA,[TT]:o.CONSTANT_COLOR,[bT]:o.ONE_MINUS_CONSTANT_COLOR,[AT]:o.CONSTANT_ALPHA,[RT]:o.ONE_MINUS_CONSTANT_ALPHA};function ze(q,Dt,Lt,qt,Tt,St,jt,ce,Xe,ye){if(q===Er){A===!0&&(yt(o.BLEND),A=!1);return}if(A===!1&&(j(o.BLEND),A=!0),q!==cT){if(q!==y||ye!==D){if((E!==ns||R!==ns)&&(o.blendEquation(o.FUNC_ADD),E=ns,R=ns),ye)switch(q){case po:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sS:o.blendFunc(o.ONE,o.ONE);break;case oS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case po:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case oS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,L=null,I=null,P=null,N.set(0,0,0),H=0,y=q,D=ye}return}Tt=Tt||Dt,St=St||Lt,jt=jt||qt,(Dt!==E||Tt!==R)&&(o.blendEquationSeparate(Xt[Dt],Xt[Tt]),E=Dt,R=Tt),(Lt!==U||qt!==L||St!==I||jt!==P)&&(o.blendFuncSeparate(G[Lt],G[qt],G[St],G[jt]),U=Lt,L=qt,I=St,P=jt),(ce.equals(N)===!1||Xe!==H)&&(o.blendColor(ce.r,ce.g,ce.b,Xe),N.copy(ce),H=Xe),y=q,D=!1}function ee(q,Dt){q.side===Na?yt(o.CULL_FACE):j(o.CULL_FACE);let Lt=q.side===ti;Dt&&(Lt=!Lt),Jt(Lt),q.blending===po&&q.transparent===!1?ze(Er):ze(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const qt=q.stencilWrite;h.setTest(qt),qt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function Ut(q){q!==oT?(j(o.CULL_FACE),q!==F&&(q===rS?o.cullFace(o.BACK):q===lT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),F=q}function $t(q){q!==et&&(z&&o.lineWidth(q),et=q)}function zt(q,Dt,Lt){q?(j(o.POLYGON_OFFSET_FILL),(rt!==Dt||ut!==Lt)&&(o.polygonOffset(Dt,Lt),rt=Dt,ut=Lt)):yt(o.POLYGON_OFFSET_FILL)}function le(q){q?j(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function be(q){q===void 0&&(q=o.TEXTURE0+V-1),mt!==q&&(o.activeTexture(q),mt=q)}function Ce(q,Dt,Lt){Lt===void 0&&(mt===null?Lt=o.TEXTURE0+V-1:Lt=mt);let qt=Et[Lt];qt===void 0&&(qt={type:void 0,texture:void 0},Et[Lt]=qt),(qt.type!==q||qt.texture!==Dt)&&(mt!==Lt&&(o.activeTexture(Lt),mt=Lt),o.bindTexture(q,Dt||J[q]),qt.type=q,qt.texture=Dt)}function O(){const q=Et[mt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(q){re.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),re.copy(q))}function ne(q){X.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function Qt(q,Dt){let Lt=g.get(Dt);Lt===void 0&&(Lt=new WeakMap,g.set(Dt,Lt));let qt=Lt.get(q);qt===void 0&&(qt=o.getUniformBlockIndex(Dt,q.name),Lt.set(q,qt))}function It(q,Dt){const qt=g.get(Dt).get(q);v.get(Dt)!==qt&&(o.uniformBlockBinding(Dt,qt,q.__bindingPointIndex),v.set(Dt,qt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},mt=null,Et={},p={},_=new WeakMap,x=[],M=null,A=!1,y=null,E=null,U=null,L=null,R=null,I=null,P=null,N=new Ye(0,0,0),H=0,D=!1,w=null,F=null,et=null,rt=null,ut=null,re.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:j,disable:yt,bindFramebuffer:wt,drawBuffers:At,useProgram:xt,setBlending:ze,setMaterial:ee,setFlipSided:Jt,setCullFace:Ut,setLineWidth:$t,setPolygonOffset:zt,setScissorTest:le,activeTexture:be,bindTexture:Ce,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:it,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Qt,uniformBlockBinding:It,texStorage2D:Ct,texStorage3D:Gt,texSubImage2D:gt,texSubImage3D:ft,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ht,scissor:Mt,viewport:ne,reset:fe}}function E2(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Fe,m=new WeakMap;let p;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,b){return x?new OffscreenCanvas(O,b):jc("canvas")}function A(O,b,it){let gt=1;const ft=Ce(O);if((ft.width>it||ft.height>it)&&(gt=it/Math.max(ft.width,ft.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const lt=Math.floor(gt*ft.width),Ht=Math.floor(gt*ft.height);p===void 0&&(p=M(lt,Ht));const Ct=b?M(lt,Ht):p;return Ct.width=lt,Ct.height=Ht,Ct.getContext("2d").drawImage(O,0,0,lt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+lt+"x"+Ht+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),O;return O}function y(O){return O.generateMipmaps}function E(O){o.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,b,it,gt,ft=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let lt=b;if(b===o.RED&&(it===o.FLOAT&&(lt=o.R32F),it===o.HALF_FLOAT&&(lt=o.R16F),it===o.UNSIGNED_BYTE&&(lt=o.R8)),b===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(lt=o.R8UI),it===o.UNSIGNED_SHORT&&(lt=o.R16UI),it===o.UNSIGNED_INT&&(lt=o.R32UI),it===o.BYTE&&(lt=o.R8I),it===o.SHORT&&(lt=o.R16I),it===o.INT&&(lt=o.R32I)),b===o.RG&&(it===o.FLOAT&&(lt=o.RG32F),it===o.HALF_FLOAT&&(lt=o.RG16F),it===o.UNSIGNED_BYTE&&(lt=o.RG8)),b===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(lt=o.RG8UI),it===o.UNSIGNED_SHORT&&(lt=o.RG16UI),it===o.UNSIGNED_INT&&(lt=o.RG32UI),it===o.BYTE&&(lt=o.RG8I),it===o.SHORT&&(lt=o.RG16I),it===o.INT&&(lt=o.RG32I)),b===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),it===o.UNSIGNED_INT&&(lt=o.RGB32UI),it===o.BYTE&&(lt=o.RGB8I),it===o.SHORT&&(lt=o.RGB16I),it===o.INT&&(lt=o.RGB32I)),b===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),it===o.UNSIGNED_INT&&(lt=o.RGBA32UI),it===o.BYTE&&(lt=o.RGBA8I),it===o.SHORT&&(lt=o.RGBA16I),it===o.INT&&(lt=o.RGBA32I)),b===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),b===o.RGBA){const Ht=ft?Zc:Ne.getTransfer(gt);it===o.FLOAT&&(lt=o.RGBA32F),it===o.HALF_FLOAT&&(lt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(lt=Ht===qe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function R(O,b){let it;return O?b===null||b===ss||b===Nl?it=o.DEPTH24_STENCIL8:b===Oa?it=o.DEPTH32F_STENCIL8:b===Ul&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===Nl?it=o.DEPTH_COMPONENT24:b===Oa?it=o.DEPTH_COMPONENT32F:b===Ul&&(it=o.DEPTH_COMPONENT16),it}function I(O,b){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==pi&&O.minFilter!==Gi?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function P(O){const b=O.target;b.removeEventListener("dispose",P),H(b),b.isVideoTexture&&m.delete(b)}function N(O){const b=O.target;b.removeEventListener("dispose",N),w(b)}function H(O){const b=r.get(O);if(b.__webglInit===void 0)return;const it=O.source,gt=_.get(it);if(gt){const ft=gt[b.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&D(O),Object.keys(gt).length===0&&_.delete(it)}r.remove(O)}function D(O){const b=r.get(O);o.deleteTexture(b.__webglTexture);const it=O.source,gt=_.get(it);delete gt[b.__cacheKey],d.memory.textures--}function w(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let ft=0;ft<b.__webglFramebuffer[gt].length;ft++)o.deleteFramebuffer(b.__webglFramebuffer[gt][ft]);else o.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)o.deleteFramebuffer(b.__webglFramebuffer[gt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=O.textures;for(let gt=0,ft=it.length;gt<ft;gt++){const lt=r.get(it[gt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(it[gt])}r.remove(O)}let F=0;function et(){F=0}function rt(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ut(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function V(O,b){const it=r.get(O);if(O.isVideoTexture&&le(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&it.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(it,O,b);return}}else O.isExternalTexture&&(it.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+b)}function z(O,b){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){J(it,O,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+b)}function Q(O,b){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){J(it,O,b);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+b)}function Y(O,b){const it=r.get(O);if(O.version>0&&it.__version!==O.version){j(it,O,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+b)}const mt={[Dl]:o.REPEAT,[rs]:o.CLAMP_TO_EDGE,[Lp]:o.MIRRORED_REPEAT},Et={[pi]:o.NEAREST,[IT]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[Gi]:o.LINEAR,[Vh]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},Ot={[VT]:o.NEVER,[ZT]:o.ALWAYS,[XT]:o.LESS,[UE]:o.LEQUAL,[kT]:o.EQUAL,[WT]:o.GEQUAL,[qT]:o.GREATER,[YT]:o.NOTEQUAL};function Zt(O,b){if(b.type===Oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gi||b.magFilter===Vh||b.magFilter===mc||b.magFilter===Sr||b.minFilter===Gi||b.minFilter===Vh||b.minFilter===mc||b.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,mt[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,mt[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,mt[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Et[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pi||b.minFilter!==mc&&b.minFilter!==Sr||b.type===Oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function re(O,b){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",P));const gt=b.source;let ft=_.get(gt);ft===void 0&&(ft={},_.set(gt,ft));const lt=ut(b);if(lt!==O.__cacheKey){ft[lt]===void 0&&(ft[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),ft[lt].usedTimes++;const Ht=ft[O.__cacheKey];Ht!==void 0&&(ft[O.__cacheKey].usedTimes--,Ht.usedTimes===0&&D(b)),O.__cacheKey=lt,O.__webglTexture=ft[lt].texture}return it}function X(O,b,it){return Math.floor(Math.floor(O/it)/b)}function ct(O,b,it,gt){const lt=O.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,it,gt,b.data);else{lt.sort((bt,Mt)=>bt.start-Mt.start);let Ht=0;for(let bt=1;bt<lt.length;bt++){const Mt=lt[Ht],ne=lt[bt],Qt=Mt.start+Mt.count,It=X(ne.start,b.width,4),fe=X(Mt.start,b.width,4);ne.start<=Qt+1&&It===fe&&X(ne.start+ne.count-1,b.width,4)===It?Mt.count=Math.max(Mt.count,ne.start+ne.count-Mt.start):(++Ht,lt[Ht]=ne)}lt.length=Ht+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Mt=lt.length;bt<Mt;bt++){const ne=lt[bt],Qt=Math.floor(ne.start/4),It=Math.ceil(ne.count/4),fe=Qt%b.width,q=Math.floor(Qt/b.width),Dt=It,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,fe,q,Dt,Lt,it,gt,b.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function J(O,b,it){let gt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=o.TEXTURE_3D);const ft=re(O,b),lt=b.source;i.bindTexture(gt,O.__webglTexture,o.TEXTURE0+it);const Ht=r.get(lt);if(lt.version!==Ht.__version||ft===!0){i.activeTexture(o.TEXTURE0+it);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Gt=b.colorSpace===_r?null:Ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===_r||Ct===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=A(b.image,!1,l.maxTextureSize);bt=be(b,bt);const Mt=f.convert(b.format,b.colorSpace),ne=f.convert(b.type);let Qt=L(b.internalFormat,Mt,ne,b.colorSpace,b.isVideoTexture);Zt(gt,b);let It;const fe=b.mipmaps,q=b.isVideoTexture!==!0,Dt=Ht.__version===void 0||ft===!0,Lt=lt.dataReady,qt=I(b,bt);if(b.isDepthTexture)Qt=R(b.format===Ol,b.type),Dt&&(q?i.texStorage2D(o.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Mt,ne,null));else if(b.isDataTexture)if(fe.length>0){q&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,Mt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,Mt,ne,It.data);b.generateMipmaps=!1}else q?(Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,bt.width,bt.height),Lt&&ct(b,bt,Mt,ne)):i.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Mt,ne,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Qt,fe[0].width,fe[0].height,bt.depth);for(let Tt=0,St=fe.length;Tt<St;Tt++)if(It=fe[Tt],b.format!==wi)if(Mt!==null)if(q){if(Lt)if(b.layerUpdates.size>0){const jt=DS(It.width,It.height,b.format,b.type);for(const ce of b.layerUpdates){const Xe=It.data.subarray(ce*jt/It.data.BYTES_PER_ELEMENT,(ce+1)*jt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ce,It.width,It.height,1,Mt,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,bt.depth,Mt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,It.width,It.height,bt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,It.width,It.height,bt.depth,Mt,ne,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,It.width,It.height,bt.depth,0,Mt,ne,It.data)}else{q&&Dt&&i.texStorage2D(o.TEXTURE_2D,qt,Qt,fe[0].width,fe[0].height);for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],b.format!==wi?Mt!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,Mt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,It.width,It.height,Mt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,It.width,It.height,0,Mt,ne,It.data)}else if(b.isDataArrayTexture)if(q){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Qt,bt.width,bt.height,bt.depth),Lt)if(b.layerUpdates.size>0){const Tt=DS(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const jt=bt.data.subarray(St*Tt/bt.data.BYTES_PER_ELEMENT,(St+1)*Tt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,Mt,ne,jt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Mt,ne,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,Mt,ne,bt.data);else if(b.isData3DTexture)q?(Dt&&i.texStorage3D(o.TEXTURE_3D,qt,Qt,bt.width,bt.height,bt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Mt,ne,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,Mt,ne,bt.data);else if(b.isFramebufferTexture){if(Dt)if(q)i.texStorage2D(o.TEXTURE_2D,qt,Qt,bt.width,bt.height);else{let Tt=bt.width,St=bt.height;for(let jt=0;jt<qt;jt++)i.texImage2D(o.TEXTURE_2D,jt,Qt,Tt,St,0,Mt,ne,null),Tt>>=1,St>>=1}}else if(fe.length>0){if(q&&Dt){const Tt=Ce(fe[0]);i.texStorage2D(o.TEXTURE_2D,qt,Qt,Tt.width,Tt.height)}for(let Tt=0,St=fe.length;Tt<St;Tt++)It=fe[Tt],q?Lt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Mt,ne,It):i.texImage2D(o.TEXTURE_2D,Tt,Qt,Mt,ne,It);b.generateMipmaps=!1}else if(q){if(Dt){const Tt=Ce(bt);i.texStorage2D(o.TEXTURE_2D,qt,Qt,Tt.width,Tt.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,ne,bt)}else i.texImage2D(o.TEXTURE_2D,0,Qt,Mt,ne,bt);y(b)&&E(gt),Ht.__version=lt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function j(O,b,it){if(b.image.length!==6)return;const gt=re(O,b),ft=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+it);const lt=r.get(ft);if(ft.version!==lt.__version||gt===!0){i.activeTexture(o.TEXTURE0+it);const Ht=Ne.getPrimaries(Ne.workingColorSpace),Ct=b.colorSpace===_r?null:Ne.getPrimaries(b.colorSpace),Gt=b.colorSpace===_r||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let St=0;St<6;St++)!Kt&&!bt?Mt[St]=A(b.image[St],!0,l.maxCubemapSize):Mt[St]=bt?b.image[St].image:b.image[St],Mt[St]=be(b,Mt[St]);const ne=Mt[0],Qt=f.convert(b.format,b.colorSpace),It=f.convert(b.type),fe=L(b.internalFormat,Qt,It,b.colorSpace),q=b.isVideoTexture!==!0,Dt=lt.__version===void 0||gt===!0,Lt=ft.dataReady;let qt=I(b,ne);Zt(o.TEXTURE_CUBE_MAP,b);let Tt;if(Kt){q&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,ne.width,ne.height);for(let St=0;St<6;St++){Tt=Mt[St].mipmaps;for(let jt=0;jt<Tt.length;jt++){const ce=Tt[jt];b.format!==wi?Qt!==null?q?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ce.width,ce.height,Qt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,0,0,ce.width,ce.height,Qt,It,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt,fe,ce.width,ce.height,0,Qt,It,ce.data)}}}else{if(Tt=b.mipmaps,q&&Dt){Tt.length>0&&qt++;const St=Ce(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(bt){q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Mt[St].width,Mt[St].height,Qt,It,Mt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Mt[St].width,Mt[St].height,0,Qt,It,Mt[St].data);for(let jt=0;jt<Tt.length;jt++){const Xe=Tt[jt].image[St].image;q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,Xe.width,Xe.height,Qt,It,Xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,fe,Xe.width,Xe.height,0,Qt,It,Xe.data)}}else{q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Qt,It,Mt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Qt,It,Mt[St]);for(let jt=0;jt<Tt.length;jt++){const ce=Tt[jt];q?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,0,0,Qt,It,ce.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,jt+1,fe,Qt,It,ce.image[St])}}}y(b)&&E(o.TEXTURE_CUBE_MAP),lt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function yt(O,b,it,gt,ft,lt){const Ht=f.convert(it.format,it.colorSpace),Ct=f.convert(it.type),Gt=L(it.internalFormat,Ht,Ct,it.colorSpace),Kt=r.get(b),bt=r.get(it);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const Mt=Math.max(1,b.width>>lt),ne=Math.max(1,b.height>>lt);ft===o.TEXTURE_3D||ft===o.TEXTURE_2D_ARRAY?i.texImage3D(ft,lt,Gt,Mt,ne,b.depth,0,Ht,Ct,null):i.texImage2D(ft,lt,Gt,Mt,ne,0,Ht,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,ft,bt.__webglTexture,0,$t(b)):(ft===o.TEXTURE_2D||ft>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,ft,bt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(O,b,it){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const gt=b.depthTexture,ft=gt&&gt.isDepthTexture?gt.type:null,lt=R(b.stencilBuffer,ft),Ht=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=$t(b);zt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,lt,b.width,b.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,lt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,lt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,O)}else{const gt=b.textures;for(let ft=0;ft<gt.length;ft++){const lt=gt[ft],Ht=f.convert(lt.format,lt.colorSpace),Ct=f.convert(lt.type),Gt=L(lt.internalFormat,Ht,Ct,lt.colorSpace),Kt=$t(b);it&&zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Gt,b.width,b.height):zt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Gt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const ft=gt.__webglTexture,lt=$t(b);if(b.depthTexture.format===Ll)zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0);else if(b.depthTexture.format===Ol)zt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function xt(O){const b=r.get(O),it=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const ft=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",ft)};gt.addEventListener("dispose",ft),b.__depthDisposeCallback=ft}b.__boundDepthTexture=gt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const gt=O.texture.mipmaps;gt&&gt.length>0?At(b.__webglFramebuffer[0],O):At(b.__webglFramebuffer,O)}else if(it){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=o.createRenderbuffer(),wt(b.__webglDepthbuffer[gt],O,!1);else{const ft=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,lt)}}else{const gt=O.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),wt(b.__webglDepthbuffer,O,!1);else{const ft=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(O,b,it){const gt=r.get(O);b!==void 0&&yt(gt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&xt(O)}function G(O){const b=O.texture,it=r.get(O),gt=r.get(b);O.addEventListener("dispose",N);const ft=O.textures,lt=O.isWebGLCubeRenderTarget===!0,Ht=ft.length>1;if(Ht||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=b.version,d.memory.textures++),lt){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)it.__webglFramebuffer[Ct][Gt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Ct=0,Gt=ft.length;Ct<Gt;Ct++){const Kt=r.get(ft[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&zt(O)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ft.length;Ct++){const Gt=ft[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Kt=f.convert(Gt.format,Gt.colorSpace),bt=f.convert(Gt.type),Mt=L(Gt.internalFormat,Kt,bt,Gt.colorSpace,O.isXRRenderTarget===!0),ne=$t(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Mt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(it.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),Zt(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)yt(it.__webglFramebuffer[Ct][Gt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Gt);else yt(it.__webglFramebuffer[Ct],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ct=0,Gt=ft.length;Ct<Gt;Ct++){const Kt=ft[Ct],bt=r.get(Kt);let Mt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,bt.__webglTexture),Zt(Mt,Kt),yt(it.__webglFramebuffer,O,Kt,o.COLOR_ATTACHMENT0+Ct,Mt,0),y(Kt)&&E(Mt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,gt.__webglTexture),Zt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)yt(it.__webglFramebuffer[Gt],O,b,o.COLOR_ATTACHMENT0,Ct,Gt);else yt(it.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,Ct,0);y(b)&&E(Ct),i.unbindTexture()}O.depthBuffer&&xt(O)}function ze(O){const b=O.textures;for(let it=0,gt=b.length;it<gt;it++){const ft=b[it];if(y(ft)){const lt=U(O),Ht=r.get(ft).__webglTexture;i.bindTexture(lt,Ht),E(lt),i.unbindTexture()}}}const ee=[],Jt=[];function Ut(O){if(O.samples>0){if(zt(O)===!1){const b=O.textures,it=O.width,gt=O.height;let ft=o.COLOR_BUFFER_BIT;const lt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(O),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ft|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ft|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,it,gt,0,0,it,gt,ft,o.NEAREST),v===!0&&(ee.length=0,Jt.length=0,ee.push(o.COLOR_ATTACHMENT0+Kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ee.push(lt),Jt.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&v){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function $t(O){return Math.min(l.maxSamples,O.samples)}function zt(O){const b=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(O){const b=d.render.frame;m.get(O)!==b&&(m.set(O,b),O.update())}function be(O,b){const it=O.colorSpace,gt=O.format,ft=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==So&&it!==_r&&(Ne.getTransfer(it)===qe?(gt!==wi||ft!==za)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Ce(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=rt,this.resetTextureUnits=et,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=zt}function y2(o,e){function i(r,l=_r){let f;const d=Ne.getTransfer(l);if(r===za)return o.UNSIGNED_BYTE;if(r===Lm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Om)return o.UNSIGNED_SHORT_5_5_5_1;if(r===bE)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===AE)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ME)return o.BYTE;if(r===TE)return o.SHORT;if(r===Ul)return o.UNSIGNED_SHORT;if(r===Nm)return o.INT;if(r===ss)return o.UNSIGNED_INT;if(r===Oa)return o.FLOAT;if(r===Gl)return o.HALF_FLOAT;if(r===RE)return o.ALPHA;if(r===CE)return o.RGB;if(r===wi)return o.RGBA;if(r===Ll)return o.DEPTH_COMPONENT;if(r===Ol)return o.DEPTH_STENCIL;if(r===wE)return o.RED;if(r===Pm)return o.RED_INTEGER;if(r===DE)return o.RG;if(r===zm)return o.RG_INTEGER;if(r===Im)return o.RGBA_INTEGER;if(r===Gc||r===Vc||r===Xc||r===kc)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Gc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Gc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Op||r===Pp||r===zp||r===Ip)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Op)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ip)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bp||r===Fp||r===Hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Bp||r===Fp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Hp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gp||r===Vp||r===Xp||r===kp||r===qp||r===Yp||r===Wp||r===Zp||r===Kp||r===jp||r===Qp||r===Jp||r===$p||r===tm)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Gp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$p)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tm)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===em||r===nm||r===im)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===em)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nm)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===im)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===am||r===rm||r===sm||r===om)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===am)return f.COMPRESSED_RED_RGTC1_EXT;if(r===rm)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sm)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===om)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M2=`
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

}`;class T2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new kE(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new la({vertexShader:x2,fragmentShader:M2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends To{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",v=1,g=null,m=null,p=null,_=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",y=new T2,E={},U=i.getContextAttributes();let L=null,R=null;const I=[],P=[],N=new Fe;let H=null;const D=new Ri;D.viewport=new fn;const w=new Ri;w.viewport=new fn;const F=[D,w],et=new Y1;let rt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=I[J];return j===void 0&&(j=new cp,I[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=I[J];return j===void 0&&(j=new cp,I[J]=j),j.getGripSpace()},this.getHand=function(J){let j=I[J];return j===void 0&&(j=new cp,I[J]=j),j.getHandSpace()};function V(J){const j=P.indexOf(J.inputSource);if(j===-1)return;const yt=I[j];yt!==void 0&&(yt.update(J.inputSource,J.frame,g||d),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Q);for(let J=0;J<I.length;J++){const j=P[J];j!==null&&(P[J]=null,I[J].disconnect(j))}rt=null,ut=null,y.reset();for(const J in E)delete E[J];e.setRenderTarget(L),x=null,_=null,p=null,l=null,R=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Q),U.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,At=null;U.depth&&(At=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=U.stencil?Ol:Ll,wt=U.stencil?Nl:ss);const xt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};p=this.getBinding(),_=p.createProjectionLayer(xt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new os(_.textureWidth,_.textureHeight,{format:wi,type:za,depthTexture:new XE(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};x=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new os(x.framebufferWidth,x.framebufferHeight,{format:wi,type:za,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(v),g=null,d=await l.requestReferenceSpace(h),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(J){for(let j=0;j<J.removed.length;j++){const yt=J.removed[j],wt=P.indexOf(yt);wt>=0&&(P[wt]=null,I[wt].disconnect(yt))}for(let j=0;j<J.added.length;j++){const yt=J.added[j];let wt=P.indexOf(yt);if(wt===-1){for(let xt=0;xt<I.length;xt++)if(xt>=P.length){P.push(yt),wt=xt;break}else if(P[xt]===null){P[xt]=yt,wt=xt;break}if(wt===-1)break}const At=I[wt];At&&At.connect(yt)}}const Y=new pt,mt=new pt;function Et(J,j,yt){Y.setFromMatrixPosition(j.matrixWorld),mt.setFromMatrixPosition(yt.matrixWorld);const wt=Y.distanceTo(mt),At=j.projectionMatrix.elements,xt=yt.projectionMatrix.elements,Xt=At[14]/(At[10]-1),G=At[14]/(At[10]+1),ze=(At[9]+1)/At[5],ee=(At[9]-1)/At[5],Jt=(At[8]-1)/At[0],Ut=(xt[8]+1)/xt[0],$t=Xt*Jt,zt=Xt*Ut,le=wt/(-Jt+Ut),be=le*-Jt;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(be),J.translateZ(le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ce=Xt+le,O=G+le,b=$t-be,it=zt+(wt-be),gt=ze*G/O*Ce,ft=ee*G/O*Ce;J.projectionMatrix.makePerspective(b,it,gt,ft,Ce,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ot(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let j=J.near,yt=J.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),et.near=w.near=D.near=j,et.far=w.far=D.far=yt,(rt!==et.near||ut!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),rt=et.near,ut=et.far),et.layers.mask=J.layers.mask|6,D.layers.mask=et.layers.mask&3,w.layers.mask=et.layers.mask&5;const wt=J.parent,At=et.cameras;Ot(et,wt);for(let xt=0;xt<At.length;xt++)Ot(At[xt],wt);At.length===2?Et(et,D,w):et.projectionMatrix.copy(D.projectionMatrix),Zt(J,et,wt)};function Zt(J,j,yt){yt===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Pl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(_===null&&x===null))return v},this.setFoveation=function(J){v=J,_!==null&&(_.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(J){return E[J]};let re=null;function X(J,j){if(m=j.getViewerPose(g||d),M=j,m!==null){const yt=m.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let wt=!1;yt.length!==et.cameras.length&&(et.cameras.length=0,wt=!0);for(let G=0;G<yt.length;G++){const ze=yt[G];let ee=null;if(x!==null)ee=x.getViewport(ze);else{const Ut=p.getViewSubImage(_,ze);ee=Ut.viewport,G===0&&(e.setRenderTargetTextures(R,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(R))}let Jt=F[G];Jt===void 0&&(Jt=new Ri,Jt.layers.enable(G),Jt.viewport=new fn,F[G]=Jt),Jt.matrix.fromArray(ze.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ze.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ee.x,ee.y,ee.width,ee.height),G===0&&(et.matrix.copy(Jt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),wt===!0&&et.cameras.push(Jt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=r.getBinding();const G=p.getDepthInformation(yt[0]);G&&G.isValid&&G.texture&&y.init(G,l.renderState)}if(At&&At.includes("camera-access")&&A){e.state.unbindTexture(),p=r.getBinding();for(let G=0;G<yt.length;G++){const ze=yt[G].camera;if(ze){let ee=E[ze];ee||(ee=new kE,E[ze]=ee);const Jt=p.getCameraImage(ze);ee.sourceTexture=Jt}}}}for(let yt=0;yt<I.length;yt++){const wt=P[yt],At=I[yt];wt!==null&&At!==void 0&&At.update(wt,j,g||d)}re&&re(J,j),j.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:j}),M=null}const ct=new qE;ct.setAnimationLoop(X),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}}const $r=new Ia,A2=new yn;function R2(o,e){function i(y,E){y.matrixAutoUpdate===!0&&y.updateMatrix(),E.value.copy(y.matrix)}function r(y,E){E.color.getRGB(y.fogColor.value,FE(o)),E.isFog?(y.fogNear.value=E.near,y.fogFar.value=E.far):E.isFogExp2&&(y.fogDensity.value=E.density)}function l(y,E,U,L,R){E.isMeshBasicMaterial||E.isMeshLambertMaterial?f(y,E):E.isMeshToonMaterial?(f(y,E),p(y,E)):E.isMeshPhongMaterial?(f(y,E),m(y,E)):E.isMeshStandardMaterial?(f(y,E),_(y,E),E.isMeshPhysicalMaterial&&x(y,E,R)):E.isMeshMatcapMaterial?(f(y,E),M(y,E)):E.isMeshDepthMaterial?f(y,E):E.isMeshDistanceMaterial?(f(y,E),A(y,E)):E.isMeshNormalMaterial?f(y,E):E.isLineBasicMaterial?(d(y,E),E.isLineDashedMaterial&&h(y,E)):E.isPointsMaterial?v(y,E,U,L):E.isSpriteMaterial?g(y,E):E.isShadowMaterial?(y.color.value.copy(E.color),y.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function f(y,E){y.opacity.value=E.opacity,E.color&&y.diffuse.value.copy(E.color),E.emissive&&y.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.bumpMap&&(y.bumpMap.value=E.bumpMap,i(E.bumpMap,y.bumpMapTransform),y.bumpScale.value=E.bumpScale,E.side===ti&&(y.bumpScale.value*=-1)),E.normalMap&&(y.normalMap.value=E.normalMap,i(E.normalMap,y.normalMapTransform),y.normalScale.value.copy(E.normalScale),E.side===ti&&y.normalScale.value.negate()),E.displacementMap&&(y.displacementMap.value=E.displacementMap,i(E.displacementMap,y.displacementMapTransform),y.displacementScale.value=E.displacementScale,y.displacementBias.value=E.displacementBias),E.emissiveMap&&(y.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,y.emissiveMapTransform)),E.specularMap&&(y.specularMap.value=E.specularMap,i(E.specularMap,y.specularMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest);const U=e.get(E),L=U.envMap,R=U.envMapRotation;L&&(y.envMap.value=L,$r.copy(R),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler($r)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=E.reflectivity,y.ior.value=E.ior,y.refractionRatio.value=E.refractionRatio),E.lightMap&&(y.lightMap.value=E.lightMap,y.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,y.lightMapTransform)),E.aoMap&&(y.aoMap.value=E.aoMap,y.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,y.aoMapTransform))}function d(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform))}function h(y,E){y.dashSize.value=E.dashSize,y.totalSize.value=E.dashSize+E.gapSize,y.scale.value=E.scale}function v(y,E,U,L){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.size.value=E.size*U,y.scale.value=L*.5,E.map&&(y.map.value=E.map,i(E.map,y.uvTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function g(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.rotation.value=E.rotation,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function m(y,E){y.specular.value.copy(E.specular),y.shininess.value=Math.max(E.shininess,1e-4)}function p(y,E){E.gradientMap&&(y.gradientMap.value=E.gradientMap)}function _(y,E){y.metalness.value=E.metalness,E.metalnessMap&&(y.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,y.metalnessMapTransform)),y.roughness.value=E.roughness,E.roughnessMap&&(y.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,y.roughnessMapTransform)),E.envMap&&(y.envMapIntensity.value=E.envMapIntensity)}function x(y,E,U){y.ior.value=E.ior,E.sheen>0&&(y.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),y.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(y.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,y.sheenColorMapTransform)),E.sheenRoughnessMap&&(y.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,y.sheenRoughnessMapTransform))),E.clearcoat>0&&(y.clearcoat.value=E.clearcoat,y.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(y.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,y.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(y.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===ti&&y.clearcoatNormalScale.value.negate())),E.dispersion>0&&(y.dispersion.value=E.dispersion),E.iridescence>0&&(y.iridescence.value=E.iridescence,y.iridescenceIOR.value=E.iridescenceIOR,y.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(y.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,y.iridescenceMapTransform)),E.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),E.transmission>0&&(y.transmission.value=E.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),E.transmissionMap&&(y.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,y.transmissionMapTransform)),y.thickness.value=E.thickness,E.thicknessMap&&(y.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=E.attenuationDistance,y.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(y.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(y.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=E.specularIntensity,y.specularColor.value.copy(E.specularColor),E.specularColorMap&&(y.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,y.specularColorMapTransform)),E.specularIntensityMap&&(y.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,E){E.matcap&&(y.matcap.value=E.matcap)}function A(y,E){const U=e.get(E).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function C2(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(U,L){const R=L.program;r.uniformBlockBinding(U,R)}function g(U,L){let R=l[U.id];R===void 0&&(M(U),R=m(U),l[U.id]=R,U.addEventListener("dispose",y));const I=L.program;r.updateUBOMapping(U,I);const P=e.render.frame;f[U.id]!==P&&(_(U),f[U.id]=P)}function m(U){const L=p();U.__bindingPointIndex=L;const R=o.createBuffer(),I=U.__size,P=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,I,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function p(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const L=l[U.id],R=U.uniforms,I=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let P=0,N=R.length;P<N;P++){const H=Array.isArray(R[P])?R[P]:[R[P]];for(let D=0,w=H.length;D<w;D++){const F=H[D];if(x(F,P,D,I)===!0){const et=F.__offset,rt=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let V=0;V<rt.length;V++){const z=rt[V],Q=A(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,et+ut,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,ut),ut+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(U,L,R,I){const P=U.value,N=L+"_"+R;if(I[N]===void 0)return typeof P=="number"||typeof P=="boolean"?I[N]=P:I[N]=P.clone(),!0;{const H=I[N];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return I[N]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function M(U){const L=U.uniforms;let R=0;const I=16;for(let N=0,H=L.length;N<H;N++){const D=Array.isArray(L[N])?L[N]:[L[N]];for(let w=0,F=D.length;w<F;w++){const et=D[w],rt=Array.isArray(et.value)?et.value:[et.value];for(let ut=0,V=rt.length;ut<V;ut++){const z=rt[ut],Q=A(z),Y=R%I,mt=Y%Q.boundary,Et=Y+mt;R+=mt,Et!==0&&I-Et<Q.storage&&(R+=I-Et),et.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=R,R+=Q.storage}}}const P=R%I;return P>0&&(R+=I-P),U.__size=R,U.__cache={},this}function A(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const R=d.indexOf(L.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete f[L.id]}function E(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},f={}}return{bind:v,update:g,dispose:E}}class jE{constructor(e={}){const{canvas:i=f1(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const M=new Uint32Array(4),A=new Int32Array(4);let y=null,E=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1;this._outputColorSpace=hi;let P=0,N=0,H=null,D=-1,w=null;const F=new fn,et=new fn;let rt=null;const ut=new Ye(0);let V=0,z=i.width,Q=i.height,Y=1,mt=null,Et=null;const Ot=new fn(0,0,z,Q),Zt=new fn(0,0,z,Q);let re=!1;const X=new VE;let ct=!1,J=!1;const j=new yn,yt=new pt,wt=new fn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Xt(){return H===null?Y:1}let G=r;function ze(C,$){return i.getContext(C,$)}try{const C={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Um}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const $="webgl2";if(G=ze($,C),G===null)throw ze($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,Jt,Ut,$t,zt,le,be,Ce,O,b,it,gt,ft,lt,Ht,Ct,Gt,Kt,bt,Mt,ne,Qt,It,fe;function q(){ee=new FR(G),ee.init(),Qt=new y2(G,ee),Jt=new NR(G,ee,e,Qt),Ut=new S2(G,ee),Jt.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),$t=new VR(G),zt=new s2,le=new E2(G,ee,Ut,zt,Jt,Qt,$t),be=new OR(R),Ce=new BR(R),O=new Z1(G),It=new DR(G,O),b=new HR(G,O,$t,It),it=new kR(G,b,O,$t),bt=new XR(G,Jt,le),Ct=new LR(zt),gt=new r2(R,be,Ce,ee,Jt,It,Ct),ft=new R2(R,zt),lt=new l2,Ht=new p2(ee),Kt=new wR(R,be,Ce,Ut,it,x,v),Gt=new v2(R,it,Jt),fe=new C2(G,$t,Jt,Ut),Mt=new UR(G,ee,$t),ne=new GR(G,ee,$t),$t.programs=gt.programs,R.capabilities=Jt,R.extensions=ee,R.properties=zt,R.renderLists=lt,R.shadowMap=Gt,R.state=Ut,R.info=$t}q();const Dt=new b2(R,G);this.xr=Dt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(z,Q,!1))},this.getSize=function(C){return C.set(z,Q)},this.setSize=function(C,$,dt=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,Q=$,i.width=Math.floor(C*Y),i.height=Math.floor($*Y),dt===!0&&(i.style.width=C+"px",i.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(z*Y,Q*Y).floor()},this.setDrawingBufferSize=function(C,$,dt){z=C,Q=$,Y=dt,i.width=Math.floor(C*dt),i.height=Math.floor($*dt),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Ot)},this.setViewport=function(C,$,dt,ht){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,$,dt,ht),Ut.viewport(F.copy(Ot).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(Zt)},this.setScissor=function(C,$,dt,ht){C.isVector4?Zt.set(C.x,C.y,C.z,C.w):Zt.set(C,$,dt,ht),Ut.scissor(et.copy(Zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){Ut.setScissorTest(re=C)},this.setOpaqueSort=function(C){mt=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,dt=!0){let ht=0;if(C){let tt=!1;if(H!==null){const Rt=H.texture.format;tt=Rt===Im||Rt===zm||Rt===Pm}if(tt){const Rt=H.texture.type,Bt=Rt===za||Rt===ss||Rt===Ul||Rt===Nl||Rt===Lm||Rt===Om,Vt=Kt.getClearColor(),Nt=Kt.getClearAlpha(),Yt=Vt.r,se=Vt.g,ie=Vt.b;Bt?(M[0]=Yt,M[1]=se,M[2]=ie,M[3]=Nt,G.clearBufferuiv(G.COLOR,0,M)):(A[0]=Yt,A[1]=se,A[2]=ie,A[3]=Nt,G.clearBufferiv(G.COLOR,0,A))}else ht|=G.COLOR_BUFFER_BIT}$&&(ht|=G.DEPTH_BUFFER_BIT),dt&&(ht|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Kt.dispose(),lt.dispose(),Ht.dispose(),zt.dispose(),be.dispose(),Ce.dispose(),it.dispose(),It.dispose(),fe.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",_n),Dt.removeEventListener("sessionend",Pn),ua.stop()};function Lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=$t.autoReset,$=Gt.enabled,dt=Gt.autoUpdate,ht=Gt.needsUpdate,tt=Gt.type;q(),$t.autoReset=C,Gt.enabled=$,Gt.autoUpdate=dt,Gt.needsUpdate=ht,Gt.type=tt}function Tt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function St(C){const $=C.target;$.removeEventListener("dispose",St),jt($)}function jt(C){ce(C),zt.remove(C)}function ce(C){const $=zt.get(C).programs;$!==void 0&&($.forEach(function(dt){gt.releaseProgram(dt)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,dt,ht,tt,Rt){$===null&&($=At);const Bt=tt.isMesh&&tt.matrixWorld.determinant()<0,Vt=Wl(C,$,dt,ht,tt);Ut.setMaterial(ht,Bt);let Nt=dt.index,Yt=1;if(ht.wireframe===!0){if(Nt=b.getWireframeAttribute(dt),Nt===void 0)return;Yt=2}const se=dt.drawRange,ie=dt.attributes.position;let _e=se.start*Yt,Ie=(se.start+se.count)*Yt;Rt!==null&&(_e=Math.max(_e,Rt.start*Yt),Ie=Math.min(Ie,(Rt.start+Rt.count)*Yt)),Nt!==null?(_e=Math.max(_e,0),Ie=Math.min(Ie,Nt.count)):ie!=null&&(_e=Math.max(_e,0),Ie=Math.min(Ie,ie.count));const Je=Ie-_e;if(Je<0||Je===1/0)return;It.setup(tt,ht,Vt,dt,Nt);let Le,we=Mt;if(Nt!==null&&(Le=O.get(Nt),we=ne,we.setIndex(Le)),tt.isMesh)ht.wireframe===!0?(Ut.setLineWidth(ht.wireframeLinewidth*Xt()),we.setMode(G.LINES)):we.setMode(G.TRIANGLES);else if(tt.isLine){let ae=ht.linewidth;ae===void 0&&(ae=1),Ut.setLineWidth(ae*Xt()),tt.isLineSegments?we.setMode(G.LINES):tt.isLineLoop?we.setMode(G.LINE_LOOP):we.setMode(G.LINE_STRIP)}else tt.isPoints?we.setMode(G.POINTS):tt.isSprite&&we.setMode(G.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)zl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))we.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ae=tt._multiDrawStarts,Oe=tt._multiDrawCounts,ge=tt._multiDrawCount,Sn=Nt?O.get(Nt).bytesPerElement:1,ni=zt.get(ht).currentProgram.getUniforms();for(let De=0;De<ge;De++)ni.setValue(G,"_gl_DrawID",De),we.render(ae[De]/Sn,Oe[De])}else if(tt.isInstancedMesh)we.renderInstances(_e,Je,tt.count);else if(dt.isInstancedBufferGeometry){const ae=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Oe=Math.min(dt.instanceCount,ae);we.renderInstances(_e,Je,Oe)}else we.render(_e,Je)};function Xe(C,$,dt){C.transparent===!0&&C.side===Na&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,gi(C,$,dt),C.side=xr,C.needsUpdate=!0,gi(C,$,dt),C.side=Na):gi(C,$,dt)}this.compile=function(C,$,dt=null){dt===null&&(dt=C),E=Ht.get(dt),E.init($),L.push(E),dt.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),C!==dt&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),E.setupLights();const ht=new Set;return C.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){const Vt=Rt[Bt];Xe(Vt,dt,tt),ht.add(Vt)}else Xe(Rt,dt,tt),ht.add(Rt)}),E=L.pop(),ht},this.compileAsync=function(C,$,dt=null){const ht=this.compile(C,$,dt);return new Promise(tt=>{function Rt(){if(ht.forEach(function(Bt){zt.get(Bt).currentProgram.isReady()&&ht.delete(Bt)}),ht.size===0){tt(C);return}setTimeout(Rt,10)}ee.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ye=null;function nn(C){ye&&ye(C)}function _n(){ua.stop()}function Pn(){ua.start()}const ua=new qE;ua.setAnimationLoop(nn),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(C){ye=C,Dt.setAnimationLoop(C),C===null?ua.stop():ua.start()},Dt.addEventListener("sessionstart",_n),Dt.addEventListener("sessionend",Pn),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera($),$=Dt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,$,H),E=Ht.get(C,L.length),E.init($),L.push(E),j.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(j,ra,$.reversedDepth),J=this.localClippingEnabled,ct=Ct.init(this.clippingPlanes,J),y=lt.get(C,U.length),y.init(),U.push(y),Dt.enabled===!0&&Dt.isPresenting===!0){const Rt=R.xr.getDepthSensingMesh();Rt!==null&&Ro(Rt,$,-1/0,R.sortObjects)}Ro(C,$,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(mt,Et),xt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,xt&&Kt.addToRenderList(y,C),this.info.render.frame++,ct===!0&&Ct.beginShadows();const dt=E.state.shadowsArray;Gt.render(dt,C,$),ct===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=y.opaque,tt=y.transmissive;if(E.setupLights(),$.isArrayCamera){const Rt=$.cameras;if(tt.length>0)for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++){const Nt=Rt[Bt];Tr(ht,tt,C,Nt)}xt&&Kt.render(C);for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++){const Nt=Rt[Bt];Yl(y,C,Nt,Nt.viewport)}}else tt.length>0&&Tr(ht,tt,C,$),xt&&Kt.render(C),Yl(y,C,$);H!==null&&N===0&&(le.updateMultisampleRenderTarget(H),le.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(R,C,$),It.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(E=L[L.length-1],ct===!0&&Ct.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ro(C,$,dt,ht){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)dt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){ht&&wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Bt=it.update(C),Vt=C.material;Vt.visible&&y.push(C,Bt,Vt,dt,wt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Bt=it.update(C),Vt=C.material;if(ht&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),wt.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),wt.copy(Bt.boundingSphere.center)),wt.applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Vt)){const Nt=Bt.groups;for(let Yt=0,se=Nt.length;Yt<se;Yt++){const ie=Nt[Yt],_e=Vt[ie.materialIndex];_e&&_e.visible&&y.push(C,Bt,_e,dt,wt.z,ie)}}else Vt.visible&&y.push(C,Bt,Vt,dt,wt.z,null)}}const Rt=C.children;for(let Bt=0,Vt=Rt.length;Bt<Vt;Bt++)Ro(Rt[Bt],$,dt,ht)}function Yl(C,$,dt,ht){const tt=C.opaque,Rt=C.transmissive,Bt=C.transparent;E.setupLightsView(dt),ct===!0&&Ct.setGlobalState(R.clippingPlanes,dt),ht&&Ut.viewport(F.copy(ht)),tt.length>0&&ca(tt,$,dt),Rt.length>0&&ca(Rt,$,dt),Bt.length>0&&ca(Bt,$,dt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Tr(C,$,dt,ht){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[ht.id]===void 0&&(E.state.transmissionRenderTarget[ht.id]=new os(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Gl:za,minFilter:Sr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Rt=E.state.transmissionRenderTarget[ht.id],Bt=ht.viewport||F;Rt.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);const Vt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Yt=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(ut),V=R.getClearAlpha(),V<1&&R.setClearColor(16777215,.5),R.clear(),xt&&Kt.render(dt);const se=R.toneMapping;R.toneMapping=yr;const ie=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),E.setupLightsView(ht),ct===!0&&Ct.setGlobalState(R.clippingPlanes,ht),ca(C,dt,ht),le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ie=0,Je=$.length;Ie<Je;Ie++){const Le=$[Ie],we=Le.object,ae=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===Na&&we.layers.test(ht.layers)){const Sn=Oe.side;Oe.side=ti,Oe.needsUpdate=!0,br(we,dt,ht,ae,Oe,ge),Oe.side=Sn,Oe.needsUpdate=!0,_e=!0}}_e===!0&&(le.updateMultisampleRenderTarget(Rt),le.updateRenderTargetMipmap(Rt))}R.setRenderTarget(Vt,Nt,Yt),R.setClearColor(ut,V),ie!==void 0&&(ht.viewport=ie),R.toneMapping=se}function ca(C,$,dt){const ht=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,Rt=C.length;tt<Rt;tt++){const Bt=C[tt],Vt=Bt.object,Nt=Bt.geometry,Yt=Bt.group;let se=Bt.material;se.allowOverride===!0&&ht!==null&&(se=ht),Vt.layers.test(dt.layers)&&br(Vt,$,dt,Nt,se,Yt)}}function br(C,$,dt,ht,tt,Rt){C.onBeforeRender(R,$,dt,ht,tt,Rt),C.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(R,$,dt,ht,C,Rt),tt.transparent===!0&&tt.side===Na&&tt.forceSinglePass===!1?(tt.side=ti,tt.needsUpdate=!0,R.renderBufferDirect(dt,$,ht,tt,C,Rt),tt.side=xr,tt.needsUpdate=!0,R.renderBufferDirect(dt,$,ht,tt,C,Rt),tt.side=Na):R.renderBufferDirect(dt,$,ht,tt,C,Rt),C.onAfterRender(R,$,dt,ht,tt,Rt)}function gi(C,$,dt){$.isScene!==!0&&($=At);const ht=zt.get(C),tt=E.state.lights,Rt=E.state.shadowsArray,Bt=tt.state.version,Vt=gt.getParameters(C,tt.state,Rt,$,dt),Nt=gt.getProgramCacheKey(Vt);let Yt=ht.programs;ht.environment=C.isMeshStandardMaterial?$.environment:null,ht.fog=$.fog,ht.envMap=(C.isMeshStandardMaterial?Ce:be).get(C.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",St),Yt=new Map,ht.programs=Yt);let se=Yt.get(Nt);if(se!==void 0){if(ht.currentProgram===se&&ht.lightsStateVersion===Bt)return Ba(C,Vt),se}else Vt.uniforms=gt.getUniforms(C),C.onBeforeCompile(Vt,R),se=gt.acquireProgram(Vt,Nt),Yt.set(Nt,se),ht.uniforms=Vt.uniforms;const ie=ht.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ie.clippingPlanes=Ct.uniform),Ba(C,Vt),ht.needsLights=Zl(C),ht.lightsStateVersion=Bt,ht.needsLights&&(ie.ambientLightColor.value=tt.state.ambient,ie.lightProbe.value=tt.state.probe,ie.directionalLights.value=tt.state.directional,ie.directionalLightShadows.value=tt.state.directionalShadow,ie.spotLights.value=tt.state.spot,ie.spotLightShadows.value=tt.state.spotShadow,ie.rectAreaLights.value=tt.state.rectArea,ie.ltc_1.value=tt.state.rectAreaLTC1,ie.ltc_2.value=tt.state.rectAreaLTC2,ie.pointLights.value=tt.state.point,ie.pointLightShadows.value=tt.state.pointShadow,ie.hemisphereLights.value=tt.state.hemi,ie.directionalShadowMap.value=tt.state.directionalShadowMap,ie.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ie.spotShadowMap.value=tt.state.spotShadowMap,ie.spotLightMatrix.value=tt.state.spotLightMatrix,ie.spotLightMap.value=tt.state.spotLightMap,ie.pointShadowMap.value=tt.state.pointShadowMap,ie.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=se,ht.uniformsList=null,se}function Ar(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=qc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Ba(C,$){const dt=zt.get(C);dt.outputColorSpace=$.outputColorSpace,dt.batching=$.batching,dt.batchingColor=$.batchingColor,dt.instancing=$.instancing,dt.instancingColor=$.instancingColor,dt.instancingMorph=$.instancingMorph,dt.skinning=$.skinning,dt.morphTargets=$.morphTargets,dt.morphNormals=$.morphNormals,dt.morphColors=$.morphColors,dt.morphTargetsCount=$.morphTargetsCount,dt.numClippingPlanes=$.numClippingPlanes,dt.numIntersection=$.numClipIntersection,dt.vertexAlphas=$.vertexAlphas,dt.vertexTangents=$.vertexTangents,dt.toneMapping=$.toneMapping}function Wl(C,$,dt,ht,tt){$.isScene!==!0&&($=At),le.resetTextureUnits();const Rt=$.fog,Bt=ht.isMeshStandardMaterial?$.environment:null,Vt=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:So,Nt=(ht.isMeshStandardMaterial?Ce:be).get(ht.envMap||Bt),Yt=ht.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,se=!!dt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ie=!!dt.morphAttributes.position,_e=!!dt.morphAttributes.normal,Ie=!!dt.morphAttributes.color;let Je=yr;ht.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Je=R.toneMapping);const Le=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,we=Le!==void 0?Le.length:0,ae=zt.get(ht),Oe=E.state.lights;if(ct===!0&&(J===!0||C!==w)){const on=C===w&&ht.id===D;Ct.setState(ht,C,on)}let ge=!1;ht.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Oe.state.version||ae.outputColorSpace!==Vt||tt.isBatchedMesh&&ae.batching===!1||!tt.isBatchedMesh&&ae.batching===!0||tt.isBatchedMesh&&ae.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ae.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ae.instancing===!1||!tt.isInstancedMesh&&ae.instancing===!0||tt.isSkinnedMesh&&ae.skinning===!1||!tt.isSkinnedMesh&&ae.skinning===!0||tt.isInstancedMesh&&ae.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ae.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ae.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ae.instancingMorph===!1&&tt.morphTexture!==null||ae.envMap!==Nt||ht.fog===!0&&ae.fog!==Rt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ct.numPlanes||ae.numIntersection!==Ct.numIntersection)||ae.vertexAlphas!==Yt||ae.vertexTangents!==se||ae.morphTargets!==ie||ae.morphNormals!==_e||ae.morphColors!==Ie||ae.toneMapping!==Je||ae.morphTargetsCount!==we)&&(ge=!0):(ge=!0,ae.__version=ht.version);let Sn=ae.currentProgram;ge===!0&&(Sn=gi(ht,$,tt));let ni=!1,De=!1,Fa=!1;const Ze=Sn.getUniforms(),Vn=ae.uniforms;if(Ut.useProgram(Sn.program)&&(ni=!0,De=!0,Fa=!0),ht.id!==D&&(D=ht.id,De=!0),ni||w!==C){Ut.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ze.setValue(G,"projectionMatrix",C.projectionMatrix),Ze.setValue(G,"viewMatrix",C.matrixWorldInverse);const zn=Ze.map.cameraPosition;zn!==void 0&&zn.setValue(G,yt.setFromMatrixPosition(C.matrixWorld)),Jt.logarithmicDepthBuffer&&Ze.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ze.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,De=!0,Fa=!0)}if(tt.isSkinnedMesh){Ze.setOptional(G,tt,"bindMatrix"),Ze.setOptional(G,tt,"bindMatrixInverse");const on=tt.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ze.setValue(G,"boneTexture",on.boneTexture,le))}tt.isBatchedMesh&&(Ze.setOptional(G,tt,"batchingTexture"),Ze.setValue(G,"batchingTexture",tt._matricesTexture,le),Ze.setOptional(G,tt,"batchingIdTexture"),Ze.setValue(G,"batchingIdTexture",tt._indirectTexture,le),Ze.setOptional(G,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ze.setValue(G,"batchingColorTexture",tt._colorsTexture,le));const dn=dt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&bt.update(tt,dt,Sn),(De||ae.receiveShadow!==tt.receiveShadow)&&(ae.receiveShadow=tt.receiveShadow,Ze.setValue(G,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Vn.envMap.value=Nt,Vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&$.environment!==null&&(Vn.envMapIntensity.value=$.environmentIntensity),De&&(Ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),ae.needsLights&&ff(Vn,Fa),Rt&&ht.fog===!0&&ft.refreshFogUniforms(Vn,Rt),ft.refreshMaterialUniforms(Vn,ht,Y,Q,E.state.transmissionRenderTarget[C.id]),qc.upload(G,Ar(ae),Vn,le)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(qc.upload(G,Ar(ae),Vn,le),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ze.setValue(G,"center",tt.center),Ze.setValue(G,"modelViewMatrix",tt.modelViewMatrix),Ze.setValue(G,"normalMatrix",tt.normalMatrix),Ze.setValue(G,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const on=ht.uniformsGroups;for(let zn=0,cs=on.length;zn<cs;zn++){const ki=on[zn];fe.update(ki,Sn),fe.bind(ki,Sn)}}return Sn}function ff(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Zl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,$,dt){const ht=zt.get(C);ht.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),zt.get(C.texture).__webglTexture=$,zt.get(C.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:dt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const dt=zt.get(C);dt.__webglFramebuffer=$,dt.__useDefaultFramebuffer=$===void 0};const Co=G.createFramebuffer();this.setRenderTarget=function(C,$=0,dt=0){H=C,P=$,N=dt;let ht=!0,tt=null,Rt=!1,Bt=!1;if(C){const Nt=zt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(G.FRAMEBUFFER,null),ht=!1;else if(Nt.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Nt.__hasExternalTextures)le.rebindTextures(C,zt.get(C.texture).__webglTexture,zt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(Nt.__boundDepthTexture!==ie){if(ie!==null&&zt.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const se=zt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(se[$])?tt=se[$][dt]:tt=se[$],Rt=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?tt=zt.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?tt=se[dt]:tt=se,F.copy(C.viewport),et.copy(C.scissor),rt=C.scissorTest}else F.copy(Ot).multiplyScalar(Y).floor(),et.copy(Zt).multiplyScalar(Y).floor(),rt=re;if(dt!==0&&(tt=Co),Ut.bindFramebuffer(G.FRAMEBUFFER,tt)&&ht&&Ut.drawBuffers(C,tt),Ut.viewport(F),Ut.scissor(et),Ut.setScissorTest(rt),Rt){const Nt=zt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,Nt.__webglTexture,dt)}else if(Bt){const Nt=$;for(let Yt=0;Yt<C.textures.length;Yt++){const se=zt.get(C.textures[Yt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Yt,se.__webglTexture,dt,Nt)}}else if(C!==null&&dt!==0){const Nt=zt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,dt)}D=-1},this.readRenderTargetPixels=function(C,$,dt,ht,tt,Rt,Bt,Vt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt]),Nt){Ut.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const Yt=C.textures[Vt],se=Yt.format,ie=Yt.type;if(!Jt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ht&&dt>=0&&dt<=C.height-tt&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels($,dt,ht,tt,Qt.convert(se),Qt.convert(ie),Rt))}finally{const Yt=H!==null?zt.get(H).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,$,dt,ht,tt,Rt,Bt,Vt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt]),Nt)if($>=0&&$<=C.width-ht&&dt>=0&&dt<=C.height-tt){Ut.bindFramebuffer(G.FRAMEBUFFER,Nt);const Yt=C.textures[Vt],se=Yt.format,ie=Yt.type;if(!Jt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,_e),G.bufferData(G.PIXEL_PACK_BUFFER,Rt.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Vt),G.readPixels($,dt,ht,tt,Qt.convert(se),Qt.convert(ie),0);const Ie=H!==null?zt.get(H).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Ie);const Je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await d1(G,Je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,_e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Rt),G.deleteBuffer(_e),G.deleteSync(Je),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,dt=0){const ht=Math.pow(2,-dt),tt=Math.floor(C.image.width*ht),Rt=Math.floor(C.image.height*ht),Bt=$!==null?$.x:0,Vt=$!==null?$.y:0;le.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,dt,0,0,Bt,Vt,tt,Rt),Ut.unbindTexture()};const Rr=G.createFramebuffer(),df=G.createFramebuffer();this.copyTextureToTexture=function(C,$,dt=null,ht=null,tt=0,Rt=null){Rt===null&&(tt!==0?(zl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=tt,tt=0):Rt=0);let Bt,Vt,Nt,Yt,se,ie,_e,Ie,Je;const Le=C.isCompressedTexture?C.mipmaps[Rt]:C.image;if(dt!==null)Bt=dt.max.x-dt.min.x,Vt=dt.max.y-dt.min.y,Nt=dt.isBox3?dt.max.z-dt.min.z:1,Yt=dt.min.x,se=dt.min.y,ie=dt.isBox3?dt.min.z:0;else{const dn=Math.pow(2,-tt);Bt=Math.floor(Le.width*dn),Vt=Math.floor(Le.height*dn),C.isDataArrayTexture?Nt=Le.depth:C.isData3DTexture?Nt=Math.floor(Le.depth*dn):Nt=1,Yt=0,se=0,ie=0}ht!==null?(_e=ht.x,Ie=ht.y,Je=ht.z):(_e=0,Ie=0,Je=0);const we=Qt.convert($.format),ae=Qt.convert($.type);let Oe;$.isData3DTexture?(le.setTexture3D($,0),Oe=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(le.setTexture2DArray($,0),Oe=G.TEXTURE_2D_ARRAY):(le.setTexture2D($,0),Oe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const ge=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ni=G.getParameter(G.UNPACK_SKIP_PIXELS),De=G.getParameter(G.UNPACK_SKIP_ROWS),Fa=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,se),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ie);const Ze=C.isDataArrayTexture||C.isData3DTexture,Vn=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const dn=zt.get(C),on=zt.get($),zn=zt.get(dn.__renderTarget),cs=zt.get(on.__renderTarget);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,zn.__webglFramebuffer),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let ki=0;ki<Nt;ki++)Ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.get(C).__webglTexture,tt,ie+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.get($).__webglTexture,Rt,Je+ki)),G.blitFramebuffer(Yt,se,Bt,Vt,_e,Ie,Bt,Vt,G.DEPTH_BUFFER_BIT,G.NEAREST);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(tt!==0||C.isRenderTargetTexture||zt.has(C)){const dn=zt.get(C),on=zt.get($);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,Rr),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,df);for(let zn=0;zn<Nt;zn++)Ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,tt,ie+zn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,tt),Vn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,on.__webglTexture,Rt,Je+zn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,on.__webglTexture,Rt),tt!==0?G.blitFramebuffer(Yt,se,Bt,Vt,_e,Ie,Bt,Vt,G.COLOR_BUFFER_BIT,G.NEAREST):Vn?G.copyTexSubImage3D(Oe,Rt,_e,Ie,Je+zn,Yt,se,Bt,Vt):G.copyTexSubImage2D(Oe,Rt,_e,Ie,Yt,se,Bt,Vt);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Oe,Rt,_e,Ie,Je,Bt,Vt,Nt,we,ae,Le.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,Rt,_e,Ie,Je,Bt,Vt,Nt,we,Le.data):G.texSubImage3D(Oe,Rt,_e,Ie,Je,Bt,Vt,Nt,we,ae,Le):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Rt,_e,Ie,Bt,Vt,we,ae,Le.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Rt,_e,Ie,Le.width,Le.height,we,Le.data):G.texSubImage2D(G.TEXTURE_2D,Rt,_e,Ie,Bt,Vt,we,ae,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ni),G.pixelStorei(G.UNPACK_SKIP_ROWS,De),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fa),Rt===0&&$.generateMipmaps&&G.generateMipmap(Oe),Ut.unbindTexture()},this.initRenderTarget=function(C){zt.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),Ut.unbindTexture()},this.resetState=function(){P=0,N=0,H=null,Ut.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}class Xi{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let r=0;for(let l=0;l<this._n&&l<32;l++){const f=i[l],d=e+f,h=Math.abs(e)<Math.abs(f)?e-(d-f):f-(d-e);h&&(i[r++]=h),e=d}return i[r]=e,this._n=r+1,this}valueOf(){const e=this._partials;let i=this._n,r,l,f,d=0;if(i>0){for(d=e[--i];i>0&&(r=d,l=e[--i],d=r+l,f=l-(d-r),!f););i>0&&(f<0&&e[i-1]<0||f>0&&e[i-1]>0)&&(l=f*2,r=d+l,l==r-d&&(d=r))}return d}}function*w2(o){for(const e of o)yield*e}function QE(o){return Array.from(w2(o))}var Qe=1e-6,Re=Math.PI,Di=Re/2,Qc=Re/4,ei=Re*2,Da=180/Re,On=Re/180,sn=Math.abs,D2=Math.atan,yo=Math.atan2,tn=Math.cos,en=Math.sin,U2=Math.sign||function(o){return o>0?1:o<0?-1:0},us=Math.sqrt;function N2(o){return o>1?0:o<-1?Re:Math.acos(o)}function Il(o){return o>1?Di:o<-1?-Di:Math.asin(o)}function Hn(){}function Jc(o,e){o&&nE.hasOwnProperty(o.type)&&nE[o.type](o,e)}var eE={Feature:function(o,e){Jc(o.geometry,e)},FeatureCollection:function(o,e){for(var i=o.features,r=-1,l=i.length;++r<l;)Jc(i[r].geometry,e)}},nE={Sphere:function(o,e){e.sphere()},Point:function(o,e){o=o.coordinates,e.point(o[0],o[1],o[2])},MultiPoint:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)o=i[r],e.point(o[0],o[1],o[2])},LineString:function(o,e){um(o.coordinates,e,0)},MultiLineString:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)um(i[r],e,0)},Polygon:function(o,e){iE(o.coordinates,e)},MultiPolygon:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)iE(i[r],e)},GeometryCollection:function(o,e){for(var i=o.geometries,r=-1,l=i.length;++r<l;)Jc(i[r],e)}};function um(o,e,i){var r=-1,l=o.length-i,f;for(e.lineStart();++r<l;)f=o[r],e.point(f[0],f[1],f[2]);e.lineEnd()}function iE(o,e){var i=-1,r=o.length;for(e.polygonStart();++i<r;)um(o[i],e,1);e.polygonEnd()}function as(o,e){o&&eE.hasOwnProperty(o.type)?eE[o.type](o,e):Jc(o,e)}var cm=new Xi,$c=new Xi,JE,$E,fm,dm,hm,Bl={point:Hn,lineStart:Hn,lineEnd:Hn,polygonStart:function(){cm=new Xi,Bl.lineStart=L2,Bl.lineEnd=O2},polygonEnd:function(){var o=+cm;$c.add(o<0?ei+o:o),this.lineStart=this.lineEnd=this.point=Hn},sphere:function(){$c.add(ei)}};function L2(){Bl.point=P2}function O2(){ty(JE,$E)}function P2(o,e){Bl.point=ty,JE=o,$E=e,o*=On,e*=On,fm=o,dm=tn(e=e/2+Qc),hm=en(e)}function ty(o,e){o*=On,e*=On,e=e/2+Qc;var i=o-fm,r=i>=0?1:-1,l=r*i,f=tn(e),d=en(e),h=hm*d,v=dm*f+h*tn(l),g=h*r*en(l);cm.add(yo(g,v)),fm=o,dm=f,hm=d}function z2(o){return $c=new Xi,as(o,Bl),$c*2}function pm(o){return[yo(o[1],o[0]),Il(o[2])]}function xo(o){var e=o[0],i=o[1],r=tn(i);return[r*tn(e),r*en(e),en(i)]}function Ic(o,e){return o[0]*e[0]+o[1]*e[1]+o[2]*e[2]}function tf(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function _p(o,e){o[0]+=e[0],o[1]+=e[1],o[2]+=e[2]}function Bc(o,e){return[o[0]*e,o[1]*e,o[2]*e]}function mm(o){var e=us(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);o[0]/=e,o[1]/=e,o[2]/=e}function gm(o,e){function i(r,l){return r=o(r,l),e(r[0],r[1])}return o.invert&&e.invert&&(i.invert=function(r,l){return r=e.invert(r,l),r&&o.invert(r[0],r[1])}),i}function vm(o,e){return sn(o)>Re&&(o-=Math.round(o/ei)*ei),[o,e]}vm.invert=vm;function I2(o,e,i){return(o%=ei)?e||i?gm(rE(o),sE(e,i)):rE(o):e||i?sE(e,i):vm}function aE(o){return function(e,i){return e+=o,sn(e)>Re&&(e-=Math.round(e/ei)*ei),[e,i]}}function rE(o){var e=aE(o);return e.invert=aE(-o),e}function sE(o,e){var i=tn(o),r=en(o),l=tn(e),f=en(e);function d(h,v){var g=tn(v),m=tn(h)*g,p=en(h)*g,_=en(v),x=_*i+m*r;return[yo(p*l-x*f,m*i-_*r),Il(x*l+p*f)]}return d.invert=function(h,v){var g=tn(v),m=tn(h)*g,p=en(h)*g,_=en(v),x=_*l-p*f;return[yo(p*l+_*f,m*i+x*r),Il(x*i-m*r)]},d}function B2(o,e,i,r,l,f){if(i){var d=tn(e),h=en(e),v=r*i;l==null?(l=e+r*ei,f=e-v/2):(l=oE(d,l),f=oE(d,f),(r>0?l<f:l>f)&&(l+=r*ei));for(var g,m=l;r>0?m>f:m<f;m-=v)g=pm([d,-h*tn(m),-h*en(m)]),o.point(g[0],g[1])}}function oE(o,e){e=xo(e),e[0]-=o,mm(e);var i=N2(-e[1]);return((-e[2]<0?-i:i)+ei-Qe)%ei}function ey(){var o=[],e;return{point:function(i,r,l){e.push([i,r,l])},lineStart:function(){o.push(e=[])},lineEnd:Hn,rejoin:function(){o.length>1&&o.push(o.pop().concat(o.shift()))},result:function(){var i=o;return o=[],e=null,i}}}function Yc(o,e){return sn(o[0]-e[0])<Qe&&sn(o[1]-e[1])<Qe}function Fc(o,e,i,r){this.x=o,this.z=e,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function ny(o,e,i,r,l){var f=[],d=[],h,v;if(o.forEach(function(M){if(!((A=M.length-1)<=0)){var A,y=M[0],E=M[A],U;if(Yc(y,E)){if(!y[2]&&!E[2]){for(l.lineStart(),h=0;h<A;++h)l.point((y=M[h])[0],y[1]);l.lineEnd();return}E[0]+=2*Qe}f.push(U=new Fc(y,M,null,!0)),d.push(U.o=new Fc(y,null,U,!1)),f.push(U=new Fc(E,M,null,!1)),d.push(U.o=new Fc(E,null,U,!0))}}),!!f.length){for(d.sort(e),lE(f),lE(d),h=0,v=d.length;h<v;++h)d[h].e=i=!i;for(var g=f[0],m,p;;){for(var _=g,x=!0;_.v;)if((_=_.n)===g)return;m=_.z,l.lineStart();do{if(_.v=_.o.v=!0,_.e){if(x)for(h=0,v=m.length;h<v;++h)l.point((p=m[h])[0],p[1]);else r(_.x,_.n.x,1,l);_=_.n}else{if(x)for(m=_.p.z,h=m.length-1;h>=0;--h)l.point((p=m[h])[0],p[1]);else r(_.x,_.p.x,-1,l);_=_.p}_=_.o,m=_.z,x=!x}while(!_.v);l.lineEnd()}}}function lE(o){if(e=o.length){for(var e,i=0,r=o[0],l;++i<e;)r.n=l=o[i],l.p=r,r=l;r.n=l=o[0],l.p=r}}function Sp(o){return sn(o[0])<=Re?o[0]:U2(o[0])*((sn(o[0])+Re)%ei-Re)}function F2(o,e){var i=Sp(e),r=e[1],l=en(r),f=[en(i),-tn(i),0],d=0,h=0,v=new Xi;l===1?r=Di+Qe:l===-1&&(r=-Di-Qe);for(var g=0,m=o.length;g<m;++g)if(_=(p=o[g]).length)for(var p,_,x=p[_-1],M=Sp(x),A=x[1]/2+Qc,y=en(A),E=tn(A),U=0;U<_;++U,M=R,y=P,E=N,x=L){var L=p[U],R=Sp(L),I=L[1]/2+Qc,P=en(I),N=tn(I),H=R-M,D=H>=0?1:-1,w=D*H,F=w>Re,et=y*P;if(v.add(yo(et*D*en(w),E*N+et*tn(w))),d+=F?H+D*ei:H,F^M>=i^R>=i){var rt=tf(xo(x),xo(L));mm(rt);var ut=tf(f,rt);mm(ut);var V=(F^H>=0?-1:1)*Il(ut[2]);(r>V||r===V&&(rt[0]||rt[1]))&&(h+=F^H>=0?1:-1)}}return(d<-Qe||d<Qe&&v<-1e-12)^h&1}function iy(o,e,i,r){return function(l){var f=e(l),d=ey(),h=e(d),v=!1,g,m,p,_={point:x,lineStart:A,lineEnd:y,polygonStart:function(){_.point=E,_.lineStart=U,_.lineEnd=L,m=[],g=[]},polygonEnd:function(){_.point=x,_.lineStart=A,_.lineEnd=y,m=QE(m);var R=F2(g,r);m.length?(v||(l.polygonStart(),v=!0),ny(m,G2,R,i,l)):R&&(v||(l.polygonStart(),v=!0),l.lineStart(),i(null,null,1,l),l.lineEnd()),v&&(l.polygonEnd(),v=!1),m=g=null},sphere:function(){l.polygonStart(),l.lineStart(),i(null,null,1,l),l.lineEnd(),l.polygonEnd()}};function x(R,I){o(R,I)&&l.point(R,I)}function M(R,I){f.point(R,I)}function A(){_.point=M,f.lineStart()}function y(){_.point=x,f.lineEnd()}function E(R,I){p.push([R,I]),h.point(R,I)}function U(){h.lineStart(),p=[]}function L(){E(p[0][0],p[0][1]),h.lineEnd();var R=h.clean(),I=d.result(),P,N=I.length,H,D,w;if(p.pop(),g.push(p),p=null,!!N){if(R&1){if(D=I[0],(H=D.length-1)>0){for(v||(l.polygonStart(),v=!0),l.lineStart(),P=0;P<H;++P)l.point((w=D[P])[0],w[1]);l.lineEnd()}return}N>1&&R&2&&I.push(I.pop().concat(I.shift())),m.push(I.filter(H2))}}return _}}function H2(o){return o.length>1}function G2(o,e){return((o=o.x)[0]<0?o[1]-Di-Qe:Di-o[1])-((e=e.x)[0]<0?e[1]-Di-Qe:Di-e[1])}const uE=iy(function(){return!0},V2,k2,[-Re,-Di]);function V2(o){var e=NaN,i=NaN,r=NaN,l;return{lineStart:function(){o.lineStart(),l=1},point:function(f,d){var h=f>0?Re:-Re,v=sn(f-e);sn(v-Re)<Qe?(o.point(e,i=(i+d)/2>0?Di:-Di),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(h,i),o.point(f,i),l=0):r!==h&&v>=Re&&(sn(e-r)<Qe&&(e-=r*Qe),sn(f-h)<Qe&&(f-=h*Qe),i=X2(e,i,f,d),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(h,i),l=0),o.point(e=f,i=d),r=h},lineEnd:function(){o.lineEnd(),e=i=NaN},clean:function(){return 2-l}}}function X2(o,e,i,r){var l,f,d=en(o-i);return sn(d)>Qe?D2((en(e)*(f=tn(r))*en(i)-en(r)*(l=tn(e))*en(o))/(l*f*d)):(e+r)/2}function k2(o,e,i,r){var l;if(o==null)l=i*Di,r.point(-Re,l),r.point(0,l),r.point(Re,l),r.point(Re,0),r.point(Re,-l),r.point(0,-l),r.point(-Re,-l),r.point(-Re,0),r.point(-Re,l);else if(sn(o[0]-e[0])>Qe){var f=o[0]<e[0]?Re:-Re;l=i*f/2,r.point(-f,l),r.point(0,l),r.point(f,l)}else r.point(e[0],e[1])}function q2(o){var e=tn(o),i=2*On,r=e>0,l=sn(e)>Qe;function f(m,p,_,x){B2(x,o,i,_,m,p)}function d(m,p){return tn(m)*tn(p)>e}function h(m){var p,_,x,M,A;return{lineStart:function(){M=x=!1,A=1},point:function(y,E){var U=[y,E],L,R=d(y,E),I=r?R?0:g(y,E):R?g(y+(y<0?Re:-Re),E):0;if(!p&&(M=x=R)&&m.lineStart(),R!==x&&(L=v(p,U),(!L||Yc(p,L)||Yc(U,L))&&(U[2]=1)),R!==x)A=0,R?(m.lineStart(),L=v(U,p),m.point(L[0],L[1])):(L=v(p,U),m.point(L[0],L[1],2),m.lineEnd()),p=L;else if(l&&p&&r^R){var P;!(I&_)&&(P=v(U,p,!0))&&(A=0,r?(m.lineStart(),m.point(P[0][0],P[0][1]),m.point(P[1][0],P[1][1]),m.lineEnd()):(m.point(P[1][0],P[1][1]),m.lineEnd(),m.lineStart(),m.point(P[0][0],P[0][1],3)))}R&&(!p||!Yc(p,U))&&m.point(U[0],U[1]),p=U,x=R,_=I},lineEnd:function(){x&&m.lineEnd(),p=null},clean:function(){return A|(M&&x)<<1}}}function v(m,p,_){var x=xo(m),M=xo(p),A=[1,0,0],y=tf(x,M),E=Ic(y,y),U=y[0],L=E-U*U;if(!L)return!_&&m;var R=e*E/L,I=-e*U/L,P=tf(A,y),N=Bc(A,R),H=Bc(y,I);_p(N,H);var D=P,w=Ic(N,D),F=Ic(D,D),et=w*w-F*(Ic(N,N)-1);if(!(et<0)){var rt=us(et),ut=Bc(D,(-w-rt)/F);if(_p(ut,N),ut=pm(ut),!_)return ut;var V=m[0],z=p[0],Q=m[1],Y=p[1],mt;z<V&&(mt=V,V=z,z=mt);var Et=z-V,Ot=sn(Et-Re)<Qe,Zt=Ot||Et<Qe;if(!Ot&&Y<Q&&(mt=Q,Q=Y,Y=mt),Zt?Ot?Q+Y>0^ut[1]<(sn(ut[0]-V)<Qe?Q:Y):Q<=ut[1]&&ut[1]<=Y:Et>Re^(V<=ut[0]&&ut[0]<=z)){var re=Bc(D,(-w+rt)/F);return _p(re,N),[ut,pm(re)]}}}function g(m,p){var _=r?o:Re-o,x=0;return m<-_?x|=1:m>_&&(x|=2),p<-_?x|=4:p>_&&(x|=8),x}return iy(d,h,f,r?[0,-o]:[-Re,o-Re])}function Y2(o,e,i,r,l,f){var d=o[0],h=o[1],v=e[0],g=e[1],m=0,p=1,_=v-d,x=g-h,M;if(M=i-d,!(!_&&M>0)){if(M/=_,_<0){if(M<m)return;M<p&&(p=M)}else if(_>0){if(M>p)return;M>m&&(m=M)}if(M=l-d,!(!_&&M<0)){if(M/=_,_<0){if(M>p)return;M>m&&(m=M)}else if(_>0){if(M<m)return;M<p&&(p=M)}if(M=r-h,!(!x&&M>0)){if(M/=x,x<0){if(M<m)return;M<p&&(p=M)}else if(x>0){if(M>p)return;M>m&&(m=M)}if(M=f-h,!(!x&&M<0)){if(M/=x,x<0){if(M>p)return;M>m&&(m=M)}else if(x>0){if(M<m)return;M<p&&(p=M)}return m>0&&(o[0]=d+m*_,o[1]=h+m*x),p<1&&(e[0]=d+p*_,e[1]=h+p*x),!0}}}}}var Ml=1e9,Hc=-Ml;function W2(o,e,i,r){function l(g,m){return o<=g&&g<=i&&e<=m&&m<=r}function f(g,m,p,_){var x=0,M=0;if(g==null||(x=d(g,p))!==(M=d(m,p))||v(g,m)<0^p>0)do _.point(x===0||x===3?o:i,x>1?r:e);while((x=(x+p+4)%4)!==M);else _.point(m[0],m[1])}function d(g,m){return sn(g[0]-o)<Qe?m>0?0:3:sn(g[0]-i)<Qe?m>0?2:1:sn(g[1]-e)<Qe?m>0?1:0:m>0?3:2}function h(g,m){return v(g.x,m.x)}function v(g,m){var p=d(g,1),_=d(m,1);return p!==_?p-_:p===0?m[1]-g[1]:p===1?g[0]-m[0]:p===2?g[1]-m[1]:m[0]-g[0]}return function(g){var m=g,p=ey(),_,x,M,A,y,E,U,L,R,I,P,N={point:H,lineStart:et,lineEnd:rt,polygonStart:w,polygonEnd:F};function H(V,z){l(V,z)&&m.point(V,z)}function D(){for(var V=0,z=0,Q=x.length;z<Q;++z)for(var Y=x[z],mt=1,Et=Y.length,Ot=Y[0],Zt,re,X=Ot[0],ct=Ot[1];mt<Et;++mt)Zt=X,re=ct,Ot=Y[mt],X=Ot[0],ct=Ot[1],re<=r?ct>r&&(X-Zt)*(r-re)>(ct-re)*(o-Zt)&&++V:ct<=r&&(X-Zt)*(r-re)<(ct-re)*(o-Zt)&&--V;return V}function w(){m=p,_=[],x=[],P=!0}function F(){var V=D(),z=P&&V,Q=(_=QE(_)).length;(z||Q)&&(g.polygonStart(),z&&(g.lineStart(),f(null,null,1,g),g.lineEnd()),Q&&ny(_,h,V,f,g),g.polygonEnd()),m=g,_=x=M=null}function et(){N.point=ut,x&&x.push(M=[]),I=!0,R=!1,U=L=NaN}function rt(){_&&(ut(A,y),E&&R&&p.rejoin(),_.push(p.result())),N.point=H,R&&m.lineEnd()}function ut(V,z){var Q=l(V,z);if(x&&M.push([V,z]),I)A=V,y=z,E=Q,I=!1,Q&&(m.lineStart(),m.point(V,z));else if(Q&&R)m.point(V,z);else{var Y=[U=Math.max(Hc,Math.min(Ml,U)),L=Math.max(Hc,Math.min(Ml,L))],mt=[V=Math.max(Hc,Math.min(Ml,V)),z=Math.max(Hc,Math.min(Ml,z))];Y2(Y,mt,o,e,i,r)?(R||(m.lineStart(),m.point(Y[0],Y[1])),m.point(mt[0],mt[1]),Q||m.lineEnd(),P=!1):Q&&(m.lineStart(),m.point(V,z),P=!1)}U=V,L=z,R=Q}return N}}const _m=o=>o;var Ep=new Xi,Sm=new Xi,ay,ry,Em,ym,La={point:Hn,lineStart:Hn,lineEnd:Hn,polygonStart:function(){La.lineStart=Z2,La.lineEnd=j2},polygonEnd:function(){La.lineStart=La.lineEnd=La.point=Hn,Ep.add(sn(Sm)),Sm=new Xi},result:function(){var o=Ep/2;return Ep=new Xi,o}};function Z2(){La.point=K2}function K2(o,e){La.point=sy,ay=Em=o,ry=ym=e}function sy(o,e){Sm.add(ym*o-Em*e),Em=o,ym=e}function j2(){sy(ay,ry)}var Mo=1/0,ef=Mo,Fl=-Mo,nf=Fl,af={point:Q2,lineStart:Hn,lineEnd:Hn,polygonStart:Hn,polygonEnd:Hn,result:function(){var o=[[Mo,ef],[Fl,nf]];return Fl=nf=-(ef=Mo=1/0),o}};function Q2(o,e){o<Mo&&(Mo=o),o>Fl&&(Fl=o),e<ef&&(ef=e),e>nf&&(nf=e)}var xm=0,Mm=0,Tl=0,rf=0,sf=0,ho=0,Tm=0,bm=0,bl=0,oy,ly,ia,aa,Ci={point:ls,lineStart:cE,lineEnd:fE,polygonStart:function(){Ci.lineStart=tw,Ci.lineEnd=ew},polygonEnd:function(){Ci.point=ls,Ci.lineStart=cE,Ci.lineEnd=fE},result:function(){var o=bl?[Tm/bl,bm/bl]:ho?[rf/ho,sf/ho]:Tl?[xm/Tl,Mm/Tl]:[NaN,NaN];return xm=Mm=Tl=rf=sf=ho=Tm=bm=bl=0,o}};function ls(o,e){xm+=o,Mm+=e,++Tl}function cE(){Ci.point=J2}function J2(o,e){Ci.point=$2,ls(ia=o,aa=e)}function $2(o,e){var i=o-ia,r=e-aa,l=us(i*i+r*r);rf+=l*(ia+o)/2,sf+=l*(aa+e)/2,ho+=l,ls(ia=o,aa=e)}function fE(){Ci.point=ls}function tw(){Ci.point=nw}function ew(){uy(oy,ly)}function nw(o,e){Ci.point=uy,ls(oy=ia=o,ly=aa=e)}function uy(o,e){var i=o-ia,r=e-aa,l=us(i*i+r*r);rf+=l*(ia+o)/2,sf+=l*(aa+e)/2,ho+=l,l=aa*o-ia*e,Tm+=l*(ia+o),bm+=l*(aa+e),bl+=l*3,ls(ia=o,aa=e)}function cy(o){this._context=o}cy.prototype={_radius:4.5,pointRadius:function(o){return this._radius=o,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(o,e){switch(this._point){case 0:{this._context.moveTo(o,e),this._point=1;break}case 1:{this._context.lineTo(o,e);break}default:{this._context.moveTo(o+this._radius,e),this._context.arc(o,e,this._radius,0,ei);break}}},result:Hn};var Am=new Xi,yp,fy,dy,Al,Rl,Hl={point:Hn,lineStart:function(){Hl.point=iw},lineEnd:function(){yp&&hy(fy,dy),Hl.point=Hn},polygonStart:function(){yp=!0},polygonEnd:function(){yp=null},result:function(){var o=+Am;return Am=new Xi,o}};function iw(o,e){Hl.point=hy,fy=Al=o,dy=Rl=e}function hy(o,e){Al-=o,Rl-=e,Am.add(us(Al*Al+Rl*Rl)),Al=o,Rl=e}let dE,of,hE,pE;class mE{constructor(e){this._append=e==null?py:aw(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==hE||this._append!==of){const r=this._radius,l=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,hE=r,of=this._append,pE=this._,this._=l}this._+=pE;break}}}result(){const e=this._;return this._="",e.length?e:null}}function py(o){let e=1;this._+=o[0];for(const i=o.length;e<i;++e)this._+=arguments[e]+o[e]}function aw(o){const e=Math.floor(o);if(!(e>=0))throw new RangeError(`invalid digits: ${o}`);if(e>15)return py;if(e!==dE){const i=10**e;dE=e,of=function(l){let f=1;this._+=l[0];for(const d=l.length;f<d;++f)this._+=Math.round(arguments[f]*i)/i+l[f]}}return of}function gE(o,e){let i=3,r=4.5,l,f;function d(h){return h&&(typeof r=="function"&&f.pointRadius(+r.apply(this,arguments)),as(h,l(f))),f.result()}return d.area=function(h){return as(h,l(La)),La.result()},d.measure=function(h){return as(h,l(Hl)),Hl.result()},d.bounds=function(h){return as(h,l(af)),af.result()},d.centroid=function(h){return as(h,l(Ci)),Ci.result()},d.projection=function(h){return arguments.length?(l=h==null?(o=null,_m):(o=h).stream,d):o},d.context=function(h){return arguments.length?(f=h==null?(e=null,new mE(i)):new cy(e=h),typeof r!="function"&&f.pointRadius(r),d):e},d.pointRadius=function(h){return arguments.length?(r=typeof h=="function"?h:(f.pointRadius(+h),+h),d):r},d.digits=function(h){if(!arguments.length)return i;if(h==null)i=null;else{const v=Math.floor(h);if(!(v>=0))throw new RangeError(`invalid digits: ${h}`);i=v}return e===null&&(f=new mE(i)),d},d.projection(o).digits(i).context(e)}function km(o){return function(e){var i=new Rm;for(var r in o)i[r]=o[r];return i.stream=e,i}}function Rm(){}Rm.prototype={constructor:Rm,point:function(o,e){this.stream.point(o,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function qm(o,e,i){var r=o.clipExtent&&o.clipExtent();return o.scale(150).translate([0,0]),r!=null&&o.clipExtent(null),as(i,o.stream(af)),e(af.result()),r!=null&&o.clipExtent(r),o}function my(o,e,i){return qm(o,function(r){var l=e[1][0]-e[0][0],f=e[1][1]-e[0][1],d=Math.min(l/(r[1][0]-r[0][0]),f/(r[1][1]-r[0][1])),h=+e[0][0]+(l-d*(r[1][0]+r[0][0]))/2,v=+e[0][1]+(f-d*(r[1][1]+r[0][1]))/2;o.scale(150*d).translate([h,v])},i)}function rw(o,e,i){return my(o,[[0,0],e],i)}function sw(o,e,i){return qm(o,function(r){var l=+e,f=l/(r[1][0]-r[0][0]),d=(l-f*(r[1][0]+r[0][0]))/2,h=-f*r[0][1];o.scale(150*f).translate([d,h])},i)}function ow(o,e,i){return qm(o,function(r){var l=+e,f=l/(r[1][1]-r[0][1]),d=-f*r[0][0],h=(l-f*(r[1][1]+r[0][1]))/2;o.scale(150*f).translate([d,h])},i)}var vE=16,lw=tn(30*On);function _E(o,e){return+e?cw(o,e):uw(o)}function uw(o){return km({point:function(e,i){e=o(e,i),this.stream.point(e[0],e[1])}})}function cw(o,e){function i(r,l,f,d,h,v,g,m,p,_,x,M,A,y){var E=g-r,U=m-l,L=E*E+U*U;if(L>4*e&&A--){var R=d+_,I=h+x,P=v+M,N=us(R*R+I*I+P*P),H=Il(P/=N),D=sn(sn(P)-1)<Qe||sn(f-p)<Qe?(f+p)/2:yo(I,R),w=o(D,H),F=w[0],et=w[1],rt=F-r,ut=et-l,V=U*rt-E*ut;(V*V/L>e||sn((E*rt+U*ut)/L-.5)>.3||d*_+h*x+v*M<lw)&&(i(r,l,f,d,h,v,F,et,D,R/=N,I/=N,P,A,y),y.point(F,et),i(F,et,D,R,I,P,g,m,p,_,x,M,A,y))}}return function(r){var l,f,d,h,v,g,m,p,_,x,M,A,y={point:E,lineStart:U,lineEnd:R,polygonStart:function(){r.polygonStart(),y.lineStart=I},polygonEnd:function(){r.polygonEnd(),y.lineStart=U}};function E(H,D){H=o(H,D),r.point(H[0],H[1])}function U(){p=NaN,y.point=L,r.lineStart()}function L(H,D){var w=xo([H,D]),F=o(H,D);i(p,_,m,x,M,A,p=F[0],_=F[1],m=H,x=w[0],M=w[1],A=w[2],vE,r),r.point(p,_)}function R(){y.point=E,r.lineEnd()}function I(){U(),y.point=P,y.lineEnd=N}function P(H,D){L(l=H,D),f=p,d=_,h=x,v=M,g=A,y.point=L}function N(){i(p,_,m,x,M,A,f,d,l,h,v,g,vE,r),y.lineEnd=R,R()}return y}}var fw=km({point:function(o,e){this.stream.point(o*On,e*On)}});function dw(o){return km({point:function(e,i){var r=o(e,i);return this.stream.point(r[0],r[1])}})}function hw(o,e,i,r,l){function f(d,h){return d*=r,h*=l,[e+o*d,i-o*h]}return f.invert=function(d,h){return[(d-e)/o*r,(i-h)/o*l]},f}function SE(o,e,i,r,l,f){if(!f)return hw(o,e,i,r,l);var d=tn(f),h=en(f),v=d*o,g=h*o,m=d/o,p=h/o,_=(h*i-d*e)/o,x=(h*e+d*i)/o;function M(A,y){return A*=r,y*=l,[v*A-g*y+e,i-g*A-v*y]}return M.invert=function(A,y){return[r*(m*A-p*y+_),l*(x-p*A-m*y)]},M}function pw(o){return mw(function(){return o})()}function mw(o){var e,i=150,r=480,l=250,f=0,d=0,h=0,v=0,g=0,m,p=0,_=1,x=1,M=null,A=uE,y=null,E,U,L,R=_m,I=.5,P,N,H,D,w;function F(V){return H(V[0]*On,V[1]*On)}function et(V){return V=H.invert(V[0],V[1]),V&&[V[0]*Da,V[1]*Da]}F.stream=function(V){return D&&w===V?D:D=fw(dw(m)(A(P(R(w=V)))))},F.preclip=function(V){return arguments.length?(A=V,M=void 0,ut()):A},F.postclip=function(V){return arguments.length?(R=V,y=E=U=L=null,ut()):R},F.clipAngle=function(V){return arguments.length?(A=+V?q2(M=V*On):(M=null,uE),ut()):M*Da},F.clipExtent=function(V){return arguments.length?(R=V==null?(y=E=U=L=null,_m):W2(y=+V[0][0],E=+V[0][1],U=+V[1][0],L=+V[1][1]),ut()):y==null?null:[[y,E],[U,L]]},F.scale=function(V){return arguments.length?(i=+V,rt()):i},F.translate=function(V){return arguments.length?(r=+V[0],l=+V[1],rt()):[r,l]},F.center=function(V){return arguments.length?(f=V[0]%360*On,d=V[1]%360*On,rt()):[f*Da,d*Da]},F.rotate=function(V){return arguments.length?(h=V[0]%360*On,v=V[1]%360*On,g=V.length>2?V[2]%360*On:0,rt()):[h*Da,v*Da,g*Da]},F.angle=function(V){return arguments.length?(p=V%360*On,rt()):p*Da},F.reflectX=function(V){return arguments.length?(_=V?-1:1,rt()):_<0},F.reflectY=function(V){return arguments.length?(x=V?-1:1,rt()):x<0},F.precision=function(V){return arguments.length?(P=_E(N,I=V*V),ut()):us(I)},F.fitExtent=function(V,z){return my(F,V,z)},F.fitSize=function(V,z){return rw(F,V,z)},F.fitWidth=function(V,z){return sw(F,V,z)},F.fitHeight=function(V,z){return ow(F,V,z)};function rt(){var V=SE(i,0,0,_,x,p).apply(null,e(f,d)),z=SE(i,r-V[0],l-V[1],_,x,p);return m=I2(h,v,g),N=gm(e,z),H=gm(m,N),P=_E(N,I),ut()}function ut(){return D=w=null,F}return function(){return e=o.apply(this,arguments),F.invert=e.invert&&et,rt()}}function Cm(o,e){return[o,e]}Cm.invert=Cm;function gw(){return pw(Cm).scale(152.63)}function vw({colorMap:o,reliefMap:e,relief:i,rimStrength:r}){return new la({uniforms:{colorMap:{value:o},reliefMap:{value:e},relief:{value:i},rimStrength:{value:r}},vertexShader:`
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
        color += vec3(0.012) * max(bevelLight, 0.0) * land * min(relief * 85.0, 1.0);
        color += vec3(lighting.y * mix(0.008, 0.002, land));
        float coastShadow = (1.0 - land) * coast.a;
        color *= 1.0 - coastShadow * min(relief * 55.0, 0.85);
        color += vec3(lighting.z) * (1.0 - land * 0.88);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}function gy({dataUrl:o="/data/countries.geojson",rotationPeriod:e=40,paused:i=!1,interactive:r=!0,landColor:l="#03FA7F",oceanColor:f="#212121",borderColor:d="#02e573",relief:h=.008,rimStrength:v=.025,maxPixelRatio:g=2,textureWidth:m=4096,className:p="",style:_,onFrame:x,onReady:M}){const A=rn.useRef(null),y=rn.useRef({paused:i,rotationPeriod:e,onFrame:x,onReady:M}),E=rn.useRef(()=>{}),[U,L]=rn.useState("");return rn.useEffect(()=>{y.current={paused:i,rotationPeriod:e,onFrame:x,onReady:M},E.current()},[i,e,x,M]),rn.useEffect(()=>{const R=A.current,I=new AbortController,P=window.matchMedia("(prefers-reduced-motion: reduce)"),N=[];let H,D,w,F=()=>{},et=!1,rt=null,ut=null,V=!0,z=0,Q=!1;const Y=()=>{!et&&rt===null&&(rt=requestAnimationFrame(Et))},mt=()=>{ut=null,Y()};E.current=mt;function Et(ct){if(rt=null,et||!H||!re||document.hidden||!V){ut=null;return}const J=ut===null?0:(ct-ut)/1e3;ut=ct;const{paused:j,rotationPeriod:yt,onFrame:wt}=y.current,At=!j&&!Q&&!P.matches&&Number.isFinite(yt)&&yt>0;At&&(re.rotation.y+=Math.PI*2/yt*J),z+=J,H.render(Ot,Zt),wt?.({timestamp:ct,delta:J,elapsed:z,rotation:re.rotation.y,axisTilt:re.rotation.x,drawCalls:H.info.render.calls,triangles:H.info.render.triangles,textureWidth:re.material.uniforms.colorMap.value.image.width,pixelRatio:H.getPixelRatio()}),At?Y():ut=null}let Ot,Zt,re;async function X(){try{L("");const ct=await fetch(o,{signal:I.signal});if(!ct.ok)throw new Error(`Geography request failed (${ct.status})`);const J=await ct.json();if(et)return;J.features=J.features.filter(ft=>!["RUS","BLR"].includes(ft.properties.iso_a3??ft.properties["ISO3166-1-Alpha-3"]));for(const ft of J.features){const lt=ft.geometry.type==="Polygon"?[ft.geometry.coordinates]:ft.geometry.coordinates;for(const Ht of lt)Ht.forEach((Ct,Gt)=>{const Kt=z2({type:"Polygon",coordinates:[Ct]});(Gt===0&&Kt>2*Math.PI||Gt>0&&Kt<2*Math.PI)&&Ct.reverse()})}H=new jE({alpha:!0,antialias:!0,powerPreference:"low-power"}),H.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,g))),H.setClearColor(0,0);const j=Math.min(H.capabilities.maxTextureSize,4096,Math.max(512,Math.round(m))),yt=document.createElement("canvas");yt.width=j,yt.height=j/2;const wt=yt.getContext("2d");wt.fillStyle=f,wt.fillRect(0,0,j,j/2);const At=gw().precision(.1).scale(j/(2*Math.PI)).translate([j/2,j/4]),xt=gE(At,wt);wt.fillStyle=l,wt.strokeStyle=d,wt.lineWidth=j/4096*1.5;for(const ft of J.features)wt.beginPath(),xt(ft),wt.fill(),wt.stroke();const Xt=document.createElement("canvas");Xt.width=j,Xt.height=j/2;const G=Xt.getContext("2d");G.fillStyle="#000",G.fillRect(0,0,j,j/2),G.fillStyle="#fff";const ze=gE(At,G);for(const ft of J.features)G.beginPath(),ze(ft),G.fill(),G.strokeStyle="#fff",G.lineWidth=.4,G.stroke();const ee=G.getImageData(0,0,j,j/2),Jt=ee.data.slice(),Ut=Xt.height,$t=(ft,lt)=>Jt[(Math.max(0,Math.min(Ut-1,lt))*j+(ft+j)%j)*4],zt=Math.max(1,Math.round(j/2048));for(let ft=0;ft<Ut;ft++){for(let lt=0;lt<j;lt++){const Ht=(ft*j+lt)*4;ee.data[Ht+1]=Math.round(127.5+($t(lt+zt,ft)-$t(lt-zt,ft))/2),ee.data[Ht+2]=Math.round(127.5+($t(lt,ft-zt)-$t(lt,ft+zt))/2),ee.data[Ht+3]=$t(lt-2*zt,ft-2*zt)}if((ft+1)%64===0&&(await new Promise(lt=>setTimeout(lt,0)),et))return}const le=new Uint8Array(ee.data.length);for(let ft=0;ft<Ut;ft++)le.set(ee.data.subarray(ft*j*4,(ft+1)*j*4),(Ut-1-ft)*j*4);const be=new B1(le,j,Ut,wi);be.generateMipmaps=!0,be.minFilter=Sr,be.wrapS=Dl,be.magFilter=Gi,be.needsUpdate=!0,N.push(be);const Ce=new V1(yt);Ce.colorSpace=hi,N.push(Ce),Ce.wrapS=Dl,Ce.anisotropy=Math.min(8,H.capabilities.getMaxAnisotropy()),R.appendChild(H.domElement),Ot=new GE,Zt=new Ri(34,1,.1,20),Zt.position.set(0,0,3.7);const O=new Vm(1,128,96),b=vw({colorMap:Ce,reliefMap:be,textureWidth:j,relief:Math.max(0,Math.min(.03,h)),rimStrength:Math.max(0,Math.min(1,v))});N.push(O,b),re=new Vi(O,b),re.rotation.set(.5,-1.45,0),Ot.add(re);const it=H.domElement;if(it.setAttribute("role","img"),it.setAttribute("aria-label",r?"Animated globe. Drag horizontally or use left and right arrow keys to turn it.":"Animated globe."),r){it.tabIndex=0;let ft=null,lt=0;const Ht=Mt=>{!Mt.isPrimary||Mt.button!==0||(ft=Mt.pointerId,lt=Mt.clientX,Q=!0,mt(),it.setPointerCapture(ft))},Ct=Mt=>{Mt.pointerId===ft&&(re.rotation.y+=(Mt.clientX-lt)/Math.max(1,R.clientWidth)*Math.PI*1.3,lt=Mt.clientX,Y())},Gt=Mt=>{Mt?.pointerId!==void 0&&Mt.pointerId!==ft||(ft=null,Q=!1,mt())},bt={pointerdown:Ht,pointermove:Ct,pointerup:Gt,pointercancel:Gt,lostpointercapture:Gt,keydown:Mt=>{Mt.key!=="ArrowLeft"&&Mt.key!=="ArrowRight"||(Mt.preventDefault(),re.rotation.y+=(Mt.key==="ArrowLeft"?-1:1)*Math.PI/18,Y())}};for(const[Mt,ne]of Object.entries(bt))it.addEventListener(Mt,ne);window.addEventListener("blur",Gt),F=()=>{window.removeEventListener("blur",Gt);for(const[Mt,ne]of Object.entries(bt))it.removeEventListener(Mt,ne)}}const gt=()=>{const{width:ft,height:lt}=R.getBoundingClientRect();!ft||!lt||(H.setSize(ft,lt),Zt.aspect=ft/lt,Zt.updateProjectionMatrix(),Zt.position.setLength(3.7/Math.min(1,Zt.aspect)),mt())};D=new ResizeObserver(gt),D.observe(R),gt(),w=new IntersectionObserver(([ft])=>{V=ft.isIntersecting,mt()}),w.observe(R),document.addEventListener("visibilitychange",mt),P.addEventListener("change",mt),y.current.onReady?.(),Y()}catch(ct){!et&&ct.name!=="AbortError"&&L("The globe could not load. Check the geography URL and WebGL browser support.")}}return X(),()=>{et=!0,I.abort(),cancelAnimationFrame(rt),E.current=()=>{},document.removeEventListener("visibilitychange",mt),P.removeEventListener("change",mt),D?.disconnect(),w?.disconnect(),F(),N.forEach(ct=>ct.dispose()),H?.dispose(),H?.domElement.remove()}},[o,r,l,f,d,h,v,g,m]),ot.createElement("div",{className:`expla-globe ${p}`,style:_,ref:A,"data-interactive":r},U&&ot.createElement("p",{className:"expla-globe__error",role:"alert"},U))}function _w(){const o=rn.useRef(null),[e,i]=rn.useState(!1);return rn.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.disconnect())},{threshold:.3});return r.observe(o.current),()=>r.disconnect()},[]),[o,e]}function Sw(){const o=rn.useRef(null);return rn.useEffect(()=>{const e=o.current,i=e.parentElement,r=matchMedia("(prefers-reduced-motion: reduce)");let l,f,d,h=null,v=null,g=0,m=!0,p=0;const _=new Fe(.5,.5),x=()=>{h===null&&(h=requestAnimationFrame(E))},M=()=>{v=null,x()};let A,y;function E(P){if(h=null,!m||document.hidden||!l){v=null;return}const N=v===null?0:Math.min((P-v)/1e3,.1);v=P,r.matches||(g+=N),d.uniforms.time.value=g,r.matches?(d.uniforms.pointer.value.set(.5,.5),d.uniforms.activity.value=0):(p*=Math.exp(-N*1.3),d.uniforms.pointer.value.lerp(_,1-Math.exp(-N*5)),d.uniforms.activity.value=Xh.lerp(d.uniforms.activity.value,p,1-Math.exp(-N*3))),l.render(U,L),r.matches||x()}let U,L;const R=P=>{const N=i.getBoundingClientRect(),H=Xh.clamp((P.clientX-N.left)/N.width,0,1),D=Xh.clamp(1-(P.clientY-N.top)/N.height,0,1);p=Math.min(1,p+.25+Math.hypot(H-_.x,D-_.y)*12),_.set(H,D),x()},I=()=>{p=0,_.set(.5,.5),x()};try{l=new jE({alpha:!1,antialias:!1,powerPreference:"low-power"}),l.setPixelRatio(Math.min(devicePixelRatio||1,1)),l.domElement.setAttribute("aria-hidden","true"),e.appendChild(l.domElement),U=new GE,L=new Gm,f=new ql(2,2),d=new la({uniforms:{time:{value:0},aspect:{value:1},pointer:{value:new Fe(.5,.5)},activity:{value:0}},vertexShader:"varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}",fragmentShader:`
          uniform float time, aspect, activity; uniform vec2 pointer;
          varying vec2 uvPosition;
          float band(float distance, float width){
            float d=distance/width; return exp(-d*d);
          }
          void main(){
            vec2 p=(uvPosition-.5)*vec2(aspect,1.0);
            vec2 mouse=(pointer-.5)*vec2(aspect,1.0);
            float radius=length(p-mouse);
            float t=time*.42;
            // Ambient movement has its own center; the cursor adds a local swirl.
            float ambientAngle=sin(t*.55)*.055;
            mat2 ambientTurn=mat2(cos(ambientAngle),-sin(ambientAngle),sin(ambientAngle),cos(ambientAngle));
            p=ambientTurn*p;
            float angle=activity*exp(-radius*radius*1.5)*sin(t*.8+radius*4.0)*1.05;
            mat2 turn=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
            p=mouse+turn*(p-mouse);
            vec2 uv=p/vec2(aspect,1.0)+.5;
            uv+=vec2(.025*sin(t*.8+uv.y*4.0),.018*sin(t*.6+uv.x*3.0));
            // Curved, feathered aurora arcs follow the supplied wide reference:
            // a bright lower-left sweep and a taller upper-right crescent.
            // Broad lower emerald sweep, fine inner filaments and a dark center.
            vec2 center=vec2(.53+.012*sin(t*.5),.78+.012*cos(t*.4));
            vec2 q=(uv-center)/vec2(.57,.90);
            float r=length(q);
            float flow=.85+.15*sin(atan(q.y,q.x)*3.0-t*.6);
            float lower=1.0-smoothstep(.20,.95,uv.y);
            float outer=band(r-1.0,.18)*flow;
            float threads=.25*band(r-.88-.009*sin(t+uv.x*6.0),.012)
              +.16*band(r-.93,.018)+.12*band(r-.72,.008);
            float leftArc=length((uv-vec2(.34,.12))/vec2(.38,.95));
            float upperLeft=band(leftArc-1.0,.08)*smoothstep(.45,1.0,uv.y);
            float corner=band(uv.x,.17)*(1.0-uv.y);
            float readability=1.0-.72*exp(-pow((uvPosition.x-.5)/.24,2.0));
            float hover=1.0+activity*.65*exp(-radius*2.0);
            vec3 emerald=vec3(.0007,.095,.052)*outer*(.28+.72*lower)
              +vec3(.0004,.038,.023)*threads
              +vec3(.0003,.035,.021)*upperLeft+vec3(.0002,.035,.023)*corner;
            gl_FragColor=vec4(vec3(.0003,.0009,.0006)+emerald*readability*hover,1.0);
            #include <colorspace_fragment>
          }
        `}),U.add(new Vi(f,d));const P=()=>{const{width:N,height:H}=e.getBoundingClientRect();!N||!H||(l.setSize(N,H),d.uniforms.aspect.value=N/H,M())};A=new ResizeObserver(P),A.observe(e),y=new IntersectionObserver(([N])=>{m=N.isIntersecting,M()}),y.observe(e),i.addEventListener("pointermove",R),i.addEventListener("pointerleave",I),i.addEventListener("pointercancel",I),document.addEventListener("visibilitychange",M),r.addEventListener("change",M),P()}catch{e.dataset.fallback="true",l?.domElement.remove()}return()=>{cancelAnimationFrame(h),A?.disconnect(),y?.disconnect(),i.removeEventListener("pointermove",R),i.removeEventListener("pointerleave",I),i.removeEventListener("pointercancel",I),document.removeEventListener("visibilitychange",M),r.removeEventListener("change",M),f?.dispose(),d?.dispose(),l?.dispose(),l?.domElement.remove()}},[]),ot.createElement("div",{className:"hero-background",ref:o,"aria-hidden":"true"})}function Ew({items:o,renderItem:e,label:i}){const r=rn.useRef(null);return rn.useEffect(()=>{const l=r.current,f=l.querySelector(".channel-track"),d=l.querySelector(".channel-group"),h=matchMedia("(prefers-reduced-motion: reduce)");let v,g=null,m=0,p=0,_=0,x=!1,M=0,A=0,y=!0,E=null,U=0;const L=()=>{f.style.transform=`translate3d(${m}px,0,0)`},R=()=>{p=d.getBoundingClientRect().width,_=Math.max(0,p-l.clientWidth),M=Math.min(M,_),m=x?-M:-p,L()},I=z=>{const Q=g===null?0:Math.min((z-g)/1e3,.1);g=z,!document.hidden&&y&&!h.matches&&z>=A&&(m+=22*Q,m>=0&&(m-=p),L()),v=requestAnimationFrame(I)},P=z=>{if(z.ctrlKey||!_)return;const Q=Math.abs(z.deltaX)>Math.abs(z.deltaY)?z.deltaX:z.deltaY;if(!Q)return;x||(x=!0,M=0);const Y=Q*(z.deltaMode===1?16:z.deltaMode===2?l.clientHeight:1),mt=Math.min(_,Math.max(0,M+Y));A=performance.now()+900,!(Math.abs(mt-M)<.01)&&(z.preventDefault(),M=mt,m=-M,l.dataset.wheelPosition=String(M),l.dataset.wheelMaximum=String(_),L())},N=()=>{x=!1},H=z=>{z.key!=="ArrowLeft"&&z.key!=="ArrowRight"||(z.preventDefault(),x=!0,M=Math.min(_,Math.max(0,M+(z.key==="ArrowRight"?120:-120))),m=-M,A=performance.now()+900,L())},D=z=>{z.pointerType!=="touch"||!z.isPrimary||(E=z.pointerId,U=z.clientX,x=!0,M=Math.min(_,Math.max(0,-m)),l.setPointerCapture(E))},w=z=>{z.pointerId===E&&(M=Math.min(_,Math.max(0,M+U-z.clientX)),U=z.clientX,m=-M,A=performance.now()+900,L())},F=()=>{E=null},et=()=>{g=null},rt={pointerdown:D,pointermove:w,pointerup:F,pointercancel:F};for(const[z,Q]of Object.entries(rt))l.addEventListener(z,Q);l.addEventListener("wheel",P,{passive:!1}),l.addEventListener("pointerleave",N),l.addEventListener("keydown",H),document.addEventListener("visibilitychange",et);const ut=new ResizeObserver(R);ut.observe(l),ut.observe(d);const V=new IntersectionObserver(([z])=>{y=z.isIntersecting,g=null});return V.observe(l),R(),v=requestAnimationFrame(I),()=>{cancelAnimationFrame(v),ut.disconnect(),V.disconnect();for(const[z,Q]of Object.entries(rt))l.removeEventListener(z,Q);l.removeEventListener("wheel",P),l.removeEventListener("pointerleave",N),l.removeEventListener("keydown",H),document.removeEventListener("visibilitychange",et)}},[o.length]),ot.createElement("div",{className:"channel-strip",ref:r,tabIndex:0,role:"region","aria-label":i},ot.createElement("div",{className:"channel-track"},[0,1].map(l=>ot.createElement("div",{className:`channel-group${l?" channel-group--duplicate":""}`,key:l,"aria-hidden":l?!0:void 0},o.map((f,d)=>ot.createElement("div",{className:"channel",key:f},ot.createElement("span",{className:"channel-number"},String(d+1).padStart(2,"0")),e(f)))))))}function wm({small:o=!1,linked:e=!0}){const i=`logo${o?" logo--small":""}`,r=ot.createElement("img",{src:"./brand/logo.svg",alt:"expla",width:"202",height:"44"});return e?ot.createElement("a",{className:i,href:"#about","aria-label":"expla"},r):ot.createElement("span",{className:i},r)}const yw={uk:[{lead:"З 2015 року залучаємо користувачів через рекламу у Meta, Instagram, Snapchat, TikTok та X (Twitter)",paragraphs:["Будуємо маркетингові воронки для діджитал-компаній у різних напрямах. Поєднуємо креативний підхід з аналітикою, щоб знаходити потрібну аудиторію та перетворювати її інтерес на цільові дії.","Досліджуємо продукт партнера й потреби потенційних клієнтів, проєктуємо їхній шлях до покупки та працюємо з даними на кожному етапі. Це допомагає коригувати кампанії й підвищувати ефективність залучення."],benefits:[["Ефективне залучення клієнтів","Фокусуємося на окупності маркетингових інвестицій — ROMI. Наші партнери оплачують отримані результати."],["Швидкість реагування","Відстежуємо реєстрації та покупки залучених користувачів, щоб оцінювати ефективність рекламних кампаній."],["Автоматизація","Автоматизуємо управління рекламними кампаніями, щоб швидше реагувати на зміни та ефективніше залучати користувачів."],["Зацікавлена аудиторія","Знаходимо аудиторію, зацікавлену в продуктах партнерів, і приводимо користувачів, готових до покупки."]]},{lead:"Залучаємо користувачів для наших партнерів через Google Ads, Microsoft Ads та інші рекламні платформи",paragraphs:["Працюємо з пошуковою, медійною та нативною рекламою різних діджитал-компаній на ринках англомовних країн. Будуємо маркетингові воронки, які ведуть користувача від рекламного оголошення до реєстрації чи покупки на сайті партнера.","Наші сайти допомагають користувачам ознайомитися з продуктами й сервісами та обрати потрібну пропозицію. Відстежуємо ефективність рекламних кампаній, аналізуємо цільові дії та оптимізуємо витрати на залучення."],benefits:[["Різні джерела залучення","Поєднуємо можливості пошукової, медійної та нативної реклами, щоб знаходити зацікавлену аудиторію в різних каналах."],["Ефективне залучення клієнтів","Фокусуємося на окупності маркетингових інвестицій — ROMI. Наші партнери оплачують отримані результати."],["Автоматизація","Автоматизуємо управління рекламними кампаніями, щоб швидше реагувати на зміни та ефективніше залучати користувачів."]]},{lead:"Створюємо та розвиваємо власні онлайн-проєкти, які залучають користувачів із пошуку Google та Bing",paragraphs:["Працюємо з різними діджитал-компаніями на міжнародних ринках. Досліджуємо, що шукають користувачі, створюємо контент під їхні запити та розвиваємо сайти, які допомагають обирати потрібні продукти й сервіси.","Поєднуємо SEO, контент, аналітику й технічну розробку. Команда відповідає за повний цикл розвитку проєктів — від вибору ніші й запуску сайту до його зростання та монетизації."],benefits:[["Робота з пошуковим запитом","Залучаємо користувачів, які шукають інформацію для вибору продуктів і сервісів та зацікавлені в пропозиціях наших партнерів."],["Власні проєкти","Створюємо й розвиваємо власні сайти, керуємо їхнім контентом, структурою та стратегією просування."],["Спільна експертиза","SEO-фахівці, контент-команда, аналітики, дизайнери та розробники працюють разом над розвитком проєктів."]]},{lead:"Cpamatica — глобальна афіліат-мережа powered by expla, яка об’єднує рекламодавців та афіліатів із 2015 року",paragraphs:["Допомагаємо рекламодавцям залучати нових користувачів, а афіліатам — знаходити пропозиції для роботи зі своєю аудиторією.","Поєднуємо досвід у performance-маркетингу, розгалужену мережу партнерів та аналітику, щоб розвивати діджитал-компанії наших клієнтів. Будуємо співпрацю, яка приносить результат рекламодавцям і афіліатам."],benefits:[["Оплата за цільові дії","Працюємо за CPA-моделлю: партнери платять за погоджені дії користувачів на їхніх сайтах або в застосунках."],["Широка мережа паблішерів","Просуваємо продукти рекламодавців через понад 1 000 афіліат-партнерів."],["Професійна підтримка","За кожним партнером закріплений менеджер, який супроводжує співпрацю та допомагає вирішувати робочі питання."]]}],en:[{lead:"Acquiring users through Meta, Instagram, Snapchat, TikTok, and X (Twitter) advertising since 2015",paragraphs:["We build marketing funnels for digital companies, bringing creative thinking and analytics together to find the right audience and turn interest into action.","We research our partners’ products and customers’ needs, design the path to purchase, and work with data at every stage to improve acquisition."],benefits:[["Efficient customer acquisition","We focus on return on marketing investment. Our partners pay for results."],["Fast response","We track registrations and purchases to evaluate advertising campaign performance."],["Automation","We automate campaign management to respond faster and acquire users more efficiently."],["Interested audiences","We find audiences interested in our partners’ products and bring users who are ready to buy."]]},{lead:"Acquiring users for our partners through Google Ads, Microsoft Ads, and other advertising platforms",paragraphs:["We work with search, display, and native advertising for digital companies in English-speaking markets. Our funnels take users from an ad to a registration or purchase.","Our websites help users discover products and services and choose the right offer. We analyze conversions and optimize acquisition costs."],benefits:[["Multiple acquisition sources","We combine search, display, and native advertising to reach interested audiences."],["Efficient customer acquisition","We focus on return on marketing investment. Partners pay for results."],["Automation","We automate campaign management to respond faster and acquire users more efficiently."]]},{lead:"Creating and growing our own online projects that attract users from Google and Bing search",paragraphs:["We research what people search for, create content around their needs, and develop websites that help them choose products and services.","We combine SEO, content, analytics, and engineering across the full project lifecycle, from niche selection and launch to growth and monetization."],benefits:[["Search intent","We attract users researching products and services who are interested in our partners’ offers."],["Our own projects","We develop our own websites and manage their content, structure, and growth strategy."],["Shared expertise","SEO specialists, content teams, analysts, designers, and developers work together."]]},{lead:"Cpamatica is a global affiliate network powered by expla, connecting advertisers and affiliates since 2015",paragraphs:["We help advertisers acquire new users and affiliates find offers for their audiences.","We combine performance-marketing experience, a broad partner network, and analytics to build collaborations that deliver results for advertisers and affiliates."],benefits:[["Pay for actions","Our CPA model means partners pay for agreed user actions on their websites or apps."],["Extensive publisher network","We promote advertisers’ products through more than 1,000 affiliate partners."],["Professional support","A dedicated manager supports every partner and helps resolve operational questions."]]}]};function xw({language:o,cards:e,index:i,onChange:r,onClose:l,closeLabel:f}){const d=e[i],h=yw[o][i];return ot.createElement(ot.Fragment,null,ot.createElement("header",{className:"direction-dialog-header"},ot.createElement("div",{className:"direction-dialog-toolbar"},ot.createElement(wm,{linked:!1}),ot.createElement("button",{className:"dialog-close direction-dialog-close",type:"button","aria-label":f,onClick:l,autoFocus:!0},ot.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},ot.createElement("path",{d:"m5 5 14 14M19 5 5 19"})))),ot.createElement("div",{className:"direction-select-wrap"},ot.createElement("select",{"aria-label":o==="uk"?"Напрямок":"Expertise",className:"direction-select",value:i,onChange:v=>r(Number(v.target.value))},e.map((v,g)=>ot.createElement("option",{key:v.title,value:g},v.title))),ot.createElement("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true"},ot.createElement("path",{d:"m8 10 4 4 4-4"}))),ot.createElement("h2",{id:"dialog-title"},d.title),ot.createElement("p",{className:"direction-dialog-tags"},d.tags)),ot.createElement("div",{className:"direction-dialog-body"},ot.createElement("p",{className:"direction-dialog-lead"},h.lead),ot.createElement("div",{className:"direction-dialog-description"},h.paragraphs.map(v=>ot.createElement("p",{key:v},v))),ot.createElement("h3",{className:"direction-benefits-heading"},ot.createElement("i",{"aria-hidden":"true"}),o==="uk"?"ПЕРЕВАГИ":"OUR STRENGTHS"),ot.createElement("ul",{className:"dialog-benefits"},h.benefits.map(([v,g])=>ot.createElement("li",{key:v},ot.createElement("h4",null,v),ot.createElement("p",null,g))))))}const Mw={uk:{nav:["Про нас","Наші напрямки","Кар’єра","Блог","Контакти"],title:"expla топ-100 партнерів",subtitle:"Meta Ads & Google Ads у Європі",directions:"Наші напрямки",more:"ДЕТАЛЬНІШЕ",cards:[{title:"Social Media Advertising",description:"Залучаємо користувачів через рекламу в соціальних мережах",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Перетворюємо рекламний клік на реєстрацію чи покупку",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Розвиваємо власні сайти та залучаємо користувачів із пошуку Google",tags:"ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА"},{title:"Affiliate Network",description:"Поєднуємо рекламодавців і афіліатів у партнерську мережу",tags:"CPAMATICA · 1 000+ ПАРТНЕРІВ"}],seen:"нашу рекламу бачать",online:"онлайн-користувачів у світі",users:"8 з 10 користувачів",zone:"НАША ЗОНА РОБОТИ",channelsStart:"Канали, що перетворюють",channelsEnd:"увагу на",result:"результат",close:"Закрити",menu:"Відкрити меню",socialTitle:"Соціальні мережі expla",socialBody:"Дізнавайтеся більше про команду, ідеї та життя expla.",careerTitle:"Зростай разом з expla",careerBody:"Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.",careerAction:"Дослідити напрямки",blogTitle:"Ідеї, що рухають уперед",blogBody:"Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.",contactTitle:"Почнімо з вашої задачі",contactBody:"Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.",name:"Ваше ім’я",email:"Email",message:"Про вашу задачу",submit:"Скопіювати звернення",copied:"Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.",copyError:"Скопіюйте текст із поля нижче.",skip:"Перейти до вмісту",globe:"Жива планета expla"},en:{nav:["About us","Our expertise","Careers","Blog","Contacts"],title:"expla is a top-100 partner",subtitle:"for Meta Ads & Google Ads in Europe",directions:"Our expertise",more:"LEARN MORE",cards:[{title:"Social Media Advertising",description:"Connecting people with brands through social media advertising",tags:"META ADS · TIKTOK · SNAPCHAT · X"},{title:"PPC Team",description:"Turning an ad click into a registration or a purchase",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS"},{title:"SEO",description:"Growing our own websites and attracting users from Google search",tags:"ORGANIC SEARCH · CONTENT · ANALYTICS"},{title:"Affiliate Network",description:"Bringing advertisers and affiliates together in a partner network",tags:"CPAMATICA · 1,000+ PARTNERS"}],seen:"our advertising reaches",online:"of online users worldwide",users:"8 out of 10 users",zone:"WHERE WE WORK",channelsStart:"Channels that turn",channelsEnd:"attention into",result:"results",close:"Close",menu:"Open menu",socialTitle:"Find expla on social media",socialBody:"Get to know our people, ideas, and life at expla.",careerTitle:"Grow with expla",careerBody:"Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.",careerAction:"Explore our expertise",blogTitle:"Ideas that move us forward",blogBody:"Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.",contactTitle:"Let’s start with your challenge",contactBody:"Tell us what you want to grow. Prepare and copy your inquiry here.",name:"Your name",email:"Email",message:"Your challenge",submit:"Copy inquiry",copied:"Inquiry copied. You can send it through your preferred contact channel.",copyError:"Copy the text from the field below.",skip:"Skip to content",globe:"The live expla globe"}};function Wc(){return ot.createElement("svg",{"aria-hidden":"true",width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},ot.createElement("path",{d:"M4 12h15m-6-6 6 6-6 6"}))}function Tw({name:o}){return o==="Microsoft"?ot.createElement("span",{className:"channel-brand microsoft"},ot.createElement("span",{className:"windows","aria-hidden":"true"},ot.createElement("i",null),ot.createElement("i",null),ot.createElement("i",null),ot.createElement("i",null)),"Microsoft"):o==="Meta"?ot.createElement("span",{className:"channel-brand meta"},ot.createElement("svg",{width:"35",height:"24",viewBox:"0 0 40 25",fill:"none",stroke:"currentColor",strokeWidth:"3","aria-hidden":"true"},ot.createElement("path",{d:"M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"})),"Meta"):o==="TikTok"?ot.createElement("span",{className:"channel-brand tiktok"},ot.createElement("svg",{width:"25",height:"29",viewBox:"0 0 26 30",fill:"currentColor","aria-hidden":"true"},ot.createElement("path",{d:"M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"})),"TikTok"):ot.createElement("span",{className:`channel-brand ${o==="Google"?"google":""}`},o)}function bw({t:o}){const[e,i]=rn.useState(""),[r,l]=rn.useState("");async function f(d){d.preventDefault();const h=new FormData(d.currentTarget),v=`${h.get("name")}
${h.get("email")}

${h.get("message")}`;try{await navigator.clipboard.writeText(v),i(o.copied)}catch{l(v),i(o.copyError)}}return ot.createElement("form",{className:"contact-form",onSubmit:f},ot.createElement("label",null,o.name,ot.createElement("input",{name:"name",autoComplete:"name",required:!0,maxLength:100})),ot.createElement("label",null,o.email,ot.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:200})),ot.createElement("label",null,o.message,ot.createElement("textarea",{name:"message",rows:4,required:!0,maxLength:4e3})),ot.createElement("button",{className:"primary-button",type:"submit"},o.submit,ot.createElement(Wc,null)),e&&ot.createElement("p",{className:"form-status",role:"status"},e),r&&ot.createElement("textarea",{readOnly:!0,"aria-label":o.message,value:r,rows:5,onFocus:d=>d.target.select()}))}function Aw(){const[o,e]=rn.useState("uk"),[i,r]=rn.useState(!1),[l,f]=rn.useState(null),d=rn.useRef(null),[h,v]=_w(),g=`reach-ring-${rn.useId().replaceAll(":","")}`,m=Mw[o],p=!!l;rn.useEffect(()=>{document.documentElement.lang=o},[o]),rn.useEffect(()=>{if(!l)return;const y=d.current,E=document.activeElement;y.showModal();const U=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{y.close(),document.body.style.overflow=U,E instanceof HTMLElement&&E.isConnected&&E.focus({preventScroll:!0})}},[p]);function _(y){r(!1),f(y)}function x(){f(null),document.getElementById("directions").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}const M=l?.type==="direction"?m.cards[l.index]:null,A=M?.title||(l?.type==="career"?m.careerTitle:l?.type==="blog"?m.blogTitle:l?.type==="contact"?m.contactTitle:`${l?.network||""} · expla`);return ot.createElement(ot.Fragment,null,ot.createElement("a",{className:"skip-link",href:"#main"},m.skip),ot.createElement("header",{className:"masthead"},ot.createElement(Sw,null),ot.createElement("div",{className:"site-header container"},ot.createElement(wm,null),ot.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":i,"aria-controls":"site-navigation","aria-label":m.menu,onClick:()=>r(!i)},ot.createElement("span",null),ot.createElement("span",null)),ot.createElement("nav",{id:"site-navigation",className:`navigation${i?" is-open":""}`,"aria-label":o==="uk"?"Основна навігація":"Main navigation"},ot.createElement("a",{href:"#about",onClick:()=>r(!1)},m.nav[0]),ot.createElement("a",{href:"#directions",onClick:()=>r(!1)},m.nav[1]),ot.createElement("button",{onClick:()=>_({type:"career"})},m.nav[2]),ot.createElement("button",{onClick:()=>_({type:"blog"})},m.nav[3]),ot.createElement("button",{onClick:()=>_({type:"contact"})},m.nav[4])),ot.createElement("div",{className:"language-switch","aria-label":o==="uk"?"Мова сайту":"Website language"},ot.createElement("button",{lang:"uk","aria-pressed":o==="uk",onClick:()=>e("uk")},"UA"),ot.createElement("span",{"aria-hidden":"true"},"|"),ot.createElement("button",{lang:"en","aria-pressed":o==="en",onClick:()=>e("en")},"EN"))),ot.createElement("section",{className:"hero container",id:"about"},ot.createElement("h1",null,m.title),ot.createElement("p",null,m.subtitle))),ot.createElement("main",{id:"main"},ot.createElement("section",{className:"directions",id:"directions","aria-labelledby":"directions-title"},ot.createElement("div",{className:"container"},ot.createElement("h2",{id:"directions-title"},m.directions),ot.createElement("div",{className:"direction-grid"},m.cards.map((y,E)=>ot.createElement("article",{className:"direction-card",key:y.title},ot.createElement("h3",null,y.title),ot.createElement("p",null,y.description),ot.createElement("div",{className:"card-bottom"},ot.createElement("p",{className:"card-tags"},y.tags),ot.createElement("button",{className:"detail-button","aria-haspopup":"dialog",onClick:()=>_({type:"direction",index:E}),"aria-label":`${m.more}: ${y.title}`},m.more,ot.createElement(Wc,null)))))))),ot.createElement("section",{className:`reach container${v?" is-revealed":""}`,ref:h,"aria-label":m.globe},ot.createElement("div",{className:"reach-globe"},ot.createElement("svg",{className:"globe-ring",viewBox:"0 0 100 100","aria-hidden":"true"},ot.createElement("defs",null,ot.createElement("linearGradient",{id:g,x1:"0",y1:"0",x2:"1",y2:"1"},ot.createElement("stop",{offset:"0%",stopColor:"#20c57c"}),ot.createElement("stop",{offset:"55%",stopColor:"#138353"}),ot.createElement("stop",{offset:"100%",stopColor:"#06492e"}))),ot.createElement("circle",{className:"ring-progress",cx:"50",cy:"50",r:"49",pathLength:"100",stroke:`url(#${g})`})),ot.createElement(gy,{dataUrl:"./data/countries.geojson"})),ot.createElement("div",{className:"reach-copy"},ot.createElement("p",{className:"reach-intro"},m.seen),ot.createElement("p",{className:"reach-value"},"80",ot.createElement("span",null,"%")),ot.createElement("h2",null,m.online),ot.createElement("div",{className:"reach-meter"},ot.createElement("span",{className:"meter-blocks","aria-hidden":"true"},Array.from({length:10},(y,E)=>ot.createElement("i",{key:E,className:E<8?"is-filled":"",style:{"--cube-delay":`${E*.26}s`}}))),ot.createElement("span",null,m.users)))),ot.createElement("section",{className:"channels","aria-labelledby":"channels-title"},ot.createElement("div",{className:"container channels-heading"},ot.createElement("p",{className:"section-eyebrow"},ot.createElement("i",{"aria-hidden":"true"}),m.zone),ot.createElement("h2",{id:"channels-title"},m.channelsStart,ot.createElement("br",null),m.channelsEnd," ",ot.createElement("span",null,m.result))),ot.createElement(Ew,{items:["Google","Meta","Microsoft","Native Ads","TikTok","Snapchat","X","SEO","Affiliate Network"],renderItem:y=>ot.createElement(Tw,{name:y}),label:o==="uk"?"Рекламні платформи":"Advertising platforms"}))),ot.createElement("footer",{className:"site-footer container"},ot.createElement(wm,{small:!0}),ot.createElement("div",{className:"social-links"},["Facebook","Instagram","LinkedIn"].map(y=>ot.createElement("button",{key:y,onClick:()=>_({type:"social",network:y})},y)))),l&&ot.createElement("dialog",{className:`info-dialog${M?" direction-dialog":""}`,ref:d,"aria-labelledby":"dialog-title",onCancel:y=>{y.preventDefault(),f(null)},onClick:y=>{if(y.target===y.currentTarget){const E=y.currentTarget.getBoundingClientRect();(y.clientX<E.left||y.clientX>E.right||y.clientY<E.top||y.clientY>E.bottom)&&f(null)}}},M?ot.createElement(xw,{language:o,cards:m.cards,index:l.index,closeLabel:m.close,onClose:()=>f(null),onChange:y=>{f({type:"direction",index:y}),d.current.scrollTop=0}}):ot.createElement(ot.Fragment,null,ot.createElement("button",{className:"dialog-close",type:"button","aria-label":m.close,onClick:()=>f(null),autoFocus:!0},"×"),ot.createElement("h2",{id:"dialog-title"},A),l.type==="contact"?ot.createElement(ot.Fragment,null,ot.createElement("p",null,m.contactBody),ot.createElement(bw,{t:m})):l.type==="career"?ot.createElement(ot.Fragment,null,ot.createElement("p",null,m.careerBody),ot.createElement("button",{className:"primary-button",onClick:x},m.careerAction,ot.createElement(Wc,null))):l.type==="blog"?ot.createElement(ot.Fragment,null,ot.createElement("p",null,m.blogBody),ot.createElement("div",{className:"dialog-directions"},m.cards.map((y,E)=>ot.createElement("button",{key:y.title,onClick:()=>{_({type:"direction",index:E}),d.current.scrollTop=0}},y.title,ot.createElement(Wc,null))))):ot.createElement("p",null,m.socialBody))))}const Rw=o=>{window.__globeFrame=o,window.__globeSamples?.push(o)},Cw=new URLSearchParams(window.location.search).get("view")==="globe";sT.createRoot(document.getElementById("root")).render(Cw?ot.createElement("main",{className:"standalone-preview","aria-label":"Globe integration preview"},ot.createElement(gy,{dataUrl:"./data/countries.geojson",onFrame:Rw})):ot.createElement(Aw,null));
