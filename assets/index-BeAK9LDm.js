(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function WM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ld={exports:{}},ue={};var Wv;function ZM(){if(Wv)return ue;Wv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),x=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,E={};function U(F,ut,W){this.props=F,this.context=ut,this.refs=E,this.updater=W||A}U.prototype.isReactComponent={},U.prototype.setState=function(F,ut){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ut,"setState")},U.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=U.prototype;function R(F,ut,W){this.props=F,this.context=ut,this.refs=E,this.updater=W||A}var B=R.prototype=new N;B.constructor=R,y(B,U.prototype),B.isPureReactComponent=!0;var z=Array.isArray;function O(){}var G={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(F,ut,W){var it=W.ref;return{$$typeof:o,type:F,key:ut,ref:it!==void 0?it:null,props:W}}function I(F,ut){return w(F.type,ut,F.props)}function tt(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function rt(F){var ut={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(W){return ut[W]})}var ct=/\/+/g;function V(F,ut){return typeof F=="object"&&F!==null&&F.key!=null?rt(""+F.key):ut.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function(ut){F.status==="pending"&&(F.status="fulfilled",F.value=ut)},function(ut){F.status==="pending"&&(F.status="rejected",F.reason=ut)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function $(F,ut,W,it,yt){var Ut=typeof F;(Ut==="undefined"||Ut==="boolean")&&(F=null);var wt=!1;if(F===null)wt=!0;else switch(Ut){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(F.$$typeof){case o:case e:wt=!0;break;case m:return wt=F._init,$(wt(F._payload),ut,W,it,yt)}}if(wt)return yt=yt(F),wt=it===""?"."+V(F,0):it,z(yt)?(W="",wt!=null&&(W=wt.replace(ct,"$&/")+"/"),$(yt,ut,W,"",function(H){return H})):yt!=null&&(tt(yt)&&(yt=I(yt,W+(yt.key==null||F&&F.key===yt.key?"":(""+yt.key).replace(ct,"$&/")+"/")+wt)),ut.push(yt)),1;wt=0;var xt=it===""?".":it+":";if(z(F))for(var Gt=0;Gt<F.length;Gt++)it=F[Gt],Ut=xt+V(it,Gt),wt+=$(it,ut,W,Ut,yt);else if(Gt=M(F),typeof Gt=="function")for(F=Gt.call(F),Gt=0;!(it=F.next()).done;)it=it.value,Ut=xt+V(it,Gt++),wt+=$(it,ut,W,Ut,yt);else if(Ut==="object"){if(typeof F.then=="function")return $(X(F),ut,W,it,yt);throw ut=String(F),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Y(F,ut,W){if(F==null)return F;var it=[],yt=0;return $(F,it,"","",function(Ut){return ut.call(W,Ut,yt++)}),it}function vt(F){if(F._status===-1){var ut=F._result,W=ut();W.then(function(it){(F._status===0||F._status===-1)&&(F._status=1,F._result=it,W.status===void 0&&(W.status="fulfilled",W.value=it))},function(it){(F._status===0||F._status===-1)&&(F._status=2,F._result=it,W.status===void 0&&(W.status="rejected",W.reason=it))}),F._status===-1&&(F._status=0,F._result=W)}if(F._status===1)return F._result.default;throw F._result}var Et=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Dt(F){var ut=G.T,W={};W.types=ut!==null?ut.types:null,G.T=W;try{var it=F(),yt=G.S;yt!==null&&yt(W,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(O,Et)}catch(Ut){Et(Ut)}finally{ut!==null&&W.types!==null&&(ut.types=W.types),G.T=ut}}function Wt(F){var ut=G.T;if(ut!==null){var W=ut.types;W===null?ut.types=[F]:W.indexOf(F)===-1&&W.push(F)}else Dt(Wt.bind(null,F))}var le={map:Y,forEach:function(F,ut,W){Y(F,function(){ut.apply(this,arguments)},W)},count:function(F){var ut=0;return Y(F,function(){ut++}),ut},toArray:function(F){return Y(F,function(ut){return ut})||[]},only:function(F){if(!tt(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ue.Activity=p,ue.Children=le,ue.Component=U,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=R,ue.StrictMode=r,ue.Suspense=_,ue.ViewTransition=S,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(F){return G.H.useMemoCache(F)}},ue.addTransitionType=Wt,ue.cache=function(F){return function(){return F.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(F,ut,W){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var it=y({},F.props),yt=F.key;if(ut!=null)for(Ut in ut.key!==void 0&&(yt=""+ut.key),ut)!D.call(ut,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ut.ref===void 0||(it[Ut]=ut[Ut]);var Ut=arguments.length-2;if(Ut===1)it.children=W;else if(1<Ut){for(var wt=Array(Ut),xt=0;xt<Ut;xt++)wt[xt]=arguments[xt+2];it.children=wt}return w(F.type,yt,it)},ue.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ue.createElement=function(F,ut,W){var it,yt={},Ut=null;if(ut!=null)for(it in ut.key!==void 0&&(Ut=""+ut.key),ut)D.call(ut,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(yt[it]=ut[it]);var wt=arguments.length-2;if(wt===1)yt.children=W;else if(1<wt){for(var xt=Array(wt),Gt=0;Gt<wt;Gt++)xt[Gt]=arguments[Gt+2];yt.children=xt}if(F&&F.defaultProps)for(it in wt=F.defaultProps,wt)yt[it]===void 0&&(yt[it]=wt[it]);return w(F,Ut,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(F){return{$$typeof:d,render:F}},ue.isValidElement=tt,ue.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:vt}},ue.memo=function(F,ut){return{$$typeof:g,type:F,compare:ut===void 0?null:ut}},ue.startTransition=Dt,ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(F){return G.H.use(F)},ue.useActionState=function(F,ut,W){return G.H.useActionState(F,ut,W)},ue.useCallback=function(F,ut){return G.H.useCallback(F,ut)},ue.useContext=function(F){return G.H.useContext(F)},ue.useDebugValue=function(){},ue.useDeferredValue=function(F,ut){return G.H.useDeferredValue(F,ut)},ue.useEffect=function(F,ut){return G.H.useEffect(F,ut)},ue.useEffectEvent=function(F){return G.H.useEffectEvent(F)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(F,ut,W){return G.H.useImperativeHandle(F,ut,W)},ue.useInsertionEffect=function(F,ut){return G.H.useInsertionEffect(F,ut)},ue.useLayoutEffect=function(F,ut){return G.H.useLayoutEffect(F,ut)},ue.useMemo=function(F,ut){return G.H.useMemo(F,ut)},ue.useOptimistic=function(F,ut){return G.H.useOptimistic(F,ut)},ue.useReducer=function(F,ut,W){return G.H.useReducer(F,ut,W)},ue.useRef=function(F){return G.H.useRef(F)},ue.useState=function(F){return G.H.useState(F)},ue.useSyncExternalStore=function(F,ut,W){return G.H.useSyncExternalStore(F,ut,W)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.3.1",ue}var Zv;function Cm(){return Zv||(Zv=1,Ld.exports=ZM()),Ld.exports}var En=Cm();const mt=WM(En);var Od={exports:{}},ml={},Pd={exports:{}},zd={};var Kv;function KM(){return Kv||(Kv=1,(function(o){function e(X,$){var Y=X.length;X.push($);t:for(;0<Y;){var vt=Y-1>>>1,Et=X[vt];if(0<l(Et,$))X[vt]=$,X[Y]=Et,Y=vt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var $=X[0],Y=X.pop();if(Y!==$){X[0]=Y;t:for(var vt=0,Et=X.length,Dt=Et>>>1;vt<Dt;){var Wt=2*(vt+1)-1,le=X[Wt],F=Wt+1,ut=X[F];if(0>l(le,Y))F<Et&&0>l(ut,le)?(X[vt]=ut,X[F]=Y,vt=F):(X[vt]=le,X[Wt]=Y,vt=Wt);else if(F<Et&&0>l(ut,Y))X[vt]=ut,X[F]=Y,vt=F;else break t}}return $}function l(X,$){var Y=X.sortIndex-$.sortIndex;return Y!==0?Y:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],g=[],m=1,p=null,S=3,x=!1,M=!1,A=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function R(X){for(var $=i(g);$!==null;){if($.callback===null)r(g);else if($.startTime<=X)r(g),$.sortIndex=$.expirationTime,e(_,$);else break;$=i(g)}}function B(X){if(A=!1,R(X),!M)if(i(_)!==null)M=!0,z||(z=!0,tt());else{var $=i(g);$!==null&&V(B,$.startTime-X)}}var z=!1,O=-1,G=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<G)}function I(){if(y=!1,z){var X=o.unstable_now();D=X;var $=!0;try{t:{M=!1,A&&(A=!1,U(O),O=-1),x=!0;var Y=S;try{e:{for(R(X),p=i(_);p!==null&&!(p.expirationTime>X&&w());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,S=p.priorityLevel;var Et=vt(p.expirationTime<=X);if(X=o.unstable_now(),typeof Et=="function"){p.callback=Et,R(X),$=!0;break e}p===i(_)&&r(_),R(X)}else r(_);p=i(_)}if(p!==null)$=!0;else{var Dt=i(g);Dt!==null&&V(B,Dt.startTime-X),$=!1}}break t}finally{p=null,S=Y,x=!1}$=void 0}}finally{$?tt():z=!1}}}var tt;if(typeof N=="function")tt=function(){N(I)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=I,tt=function(){ct.postMessage(null)}}else tt=function(){E(I,0)};function V(X,$){O=E(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var Y=S;S=$;try{return X()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=S;S=X;try{return $()}finally{S=Y}},o.unstable_scheduleCallback=function(X,$,Y){var vt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,X){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,X={id:m++,callback:$,priorityLevel:X,startTime:Y,expirationTime:Et,sortIndex:-1},Y>vt?(X.sortIndex=Y,e(g,X),i(_)===null&&X===i(g)&&(A?(U(O),O=-1):A=!0,V(B,Y-vt))):(X.sortIndex=Et,e(_,X),M||x||(M=!0,z||(z=!0,tt()))),X},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(X){var $=S;return function(){var Y=S;S=$;try{return X.apply(this,arguments)}finally{S=Y}}}})(zd)),zd}var jv;function jM(){return jv||(jv=1,Pd.exports=KM()),Pd.exports}var Id={exports:{}},Ln={};var Qv;function QM(){if(Qv)return Ln;Qv=1;var o=Cm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(m,p,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:m,containerInfo:p,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(m){return{$$typeof:f,_reason:m}},Ln.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(m,p,null,S)},Ln.flushSync=function(m){var p=_.T,S=r.p;try{if(_.T=null,r.p=2,m)return m()}finally{_.T=p,r.p=S,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,x=g(S,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:M,fetchPriority:A}):S==="script"&&r.d.X(m,{crossOrigin:x,integrity:M,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,x=g(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=g(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,S){return _.H.useFormState(m,p,S)},Ln.useFormStatus=function(){return _.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var Jv;function JM(){if(Jv)return Id.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Id.exports=QM(),Id.exports}var $v;function $M(){if($v)return ml;$v=1;var o=jM(),e=Cm(),i=JM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return _(u),t;if(c===s)return _(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=c;break}if(T===s){v=!0,s=u,a=c;break}T=T.sibling}if(!v){for(T=c.child;T;){if(T===a){v=!0,a=c,s=u;break}if(T===s){v=!0,s=c,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function M(t){var n=[null,null],a=S(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,U=null;function N(t,n,a){return t===a?!0:t===n?(E=t,!0):!1}function R(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(E=t),!0):!1}function B(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,G=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),V=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Dt=Symbol.for("react.activity"),Wt=Symbol.for("react.legacy_hidden"),le=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ut=Symbol.for("react.recoverable"),W=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case rt:return"Profiler";case tt:return"StrictMode";case $:return"Suspense";case Y:return"SuspenseList";case Dt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case V:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var wt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},Te=[],re=-1;function Yt(t){return{current:t}}function Nt(t){0>re||(t.current=Te[re],Te[re]=null,re--)}function ie(t,n){re++,Te[re]=t.current,t.current=n}var It=Yt(null),se=Yt(null),Re=Yt(null),we=Yt(null);function L(t,n){switch(ie(Re,n),ie(se,t),ie(It,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?nv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=nv(n),t=iv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(It),ie(It,t)}function b(){Nt(It),Nt(se),Nt(Re)}function nt(t){var n=t.memoizedState;n!==null&&(Ws._currentValue=n.memoizedState,ie(we,t)),n=It.current;var a=iv(n,t.type);n!==a&&(ie(se,t),ie(It,a))}function pt(t){se.current===t&&(Nt(It),Nt(se)),we.current===t&&(Nt(we),Ws._currentValue=H)}var ot,lt;function zt(t){if(ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ot=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+t+lt}var Rt=!1;function Xt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Pt){var Z=Pt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Pt){Z=Pt}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){Z=Pt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Pt){if(Pt&&Z&&typeof Pt.stack=="string")return[Pt.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),v=c[0],T=c[1];if(v&&T){var P=v.split(`
`),j=T.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===j.length)for(s=P.length-1,u=j.length-1;1<=s&&0<=u&&P[s]!==j[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==j[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==j[u]){var st=`
`+P[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?zt(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return zt(t.type);case 16:return zt("Lazy");case 13:return t.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Xt(t.type,!1);case 11:return Xt(t.type.render,!1);case 1:return Xt(t.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var At=Object.prototype.hasOwnProperty,te=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,fe=o.unstable_requestPaint,q=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ot=o.unstable_ImmediatePriority,qt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Qt=o.unstable_IdlePriority,ce=o.log,Ve=o.unstable_setDisableYieldValue,ye=null,nn=null;function _n(t){if(typeof ce=="function"&&Ve(t),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(ye,t)}catch{}}var Pn=Math.clz32?Math.clz32:Gl,la=Math.log,Ao=Math.LN2;function Gl(t){return t>>>=0,t===0?32:31-(la(t)/Ao|0)|0}var Mr=256,ua=262144,Tr=4194304;function gi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~c,s!==0?u=gi(s):(v&=T,v!==0?u=gi(v):a||(a=T&~t,a!==0&&(u=gi(a))))):(T=s&~c,T!==0?u=gi(T):v!==0?u=gi(v):a||(a=s&~t,a!==0&&(u=gi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Pn(a),u=1<<s;n|=t[s],a&=~u}return n}function of(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xl(){var t=Tr;return Tr<<=1,(Tr&62914560)===0&&(Tr=4194304),t}function bo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function br(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function lf(t,n,a,s,u,c){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var st=31-Pn(a),_t=1<<st;T[st]=0,P[st]=-1;var Z=j[st];if(Z!==null)for(j[st]=null,st=0;st<Z.length;st++){var at=Z[st];at!==null&&(at.lane&=-536870913)}a&=~_t}s!==0&&C(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(v&~n))}function C(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Q(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ft(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:Hv(t.type))}function Ft(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Vt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Vt,Zt="__reactProps$"+Vt,ae="__reactContainer$"+Vt,ee="__reactEvents$"+Vt,ve="__reactListeners$"+Vt,Ie="__reactHandles$"+Vt,Je="__reactResources$"+Vt,Oe="__reactMarker$"+Vt,De="__reactLoad$"+Vt;function ne(t){delete t[Lt],delete t[Zt],delete t[ve],delete t[Ie]}function Pe(t){var n;if(n=t[Lt])return n;for(var a=t.parentNode;a;){if(n=a[ae]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ev(t);t!==null;){if(a=t[Lt])return a;t=Ev(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Lt]||t[ae]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ni(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Oe]=!0}function Fa(t){t[De]=void 0}var Ze=new Set,Vn={};function fn(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(Vn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var zn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cs={},Xi={};function hy(t){return At.call(Xi,t)?!0:At.call(cs,t)?!1:zn.test(t)?Xi[t]=!0:(cs[t]=!0,!1)}var Ne=!1;function Vm(){var t=Ne;return Ne=!1,t}function kl(t,n,a){if(hy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ql(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ca(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,c.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function uf(t){if(!t._valueTracker){var n=Xm(t)?"checked":"value";t._valueTracker=dy(t,n,""+t[n])}}function km(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Xm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var py=/[\n"\\]/g;function _i(t){return t.replace(py,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cf(t,n,a,s,u,c,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?ff(t,ii(t.value)):ff(t,ii(n)):a!=null?ff(t,ii(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ii(T):t.removeAttribute("name")}function qm(t,n,a,s,u,c,v,T){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){uf(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),uf(t)}function ff(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function fs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ym(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function Wm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(wt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),uf(t)}function hs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var my=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||my.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Km(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Ne=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Zm(t,u,s),Ne=!0)}else for(var c in n)n.hasOwnProperty(c)&&Zm(t,c,n[c])}function hf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_y=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return _y.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var df=null;function pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ds=null,ps=null;function jm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(cf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Zt]||null;if(!u)throw Error(r(90));cf(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&km(s)}break t;case"textarea":Ym(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fs(t,!!a.multiple,n,!1)}}}var mf=!1;function Qm(t,n,a){if(mf)return t(n,a);mf=!0;try{var s=t(n);return s}finally{if(mf=!1,(ds!==null||ps!==null)&&(Yu(),ds&&(n=ds,t=ps,ps=ds=null,jm(n),t)))for(n=0;n<t.length;n++)jm(t[n])}}function Ro(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Zt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=!1;if(fa)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){gf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{gf=!1}var Ha=null,_f=null,Wl=null;function Jm(){if(Wl)return Wl;var t,n=_f,a=n.length,s,u="value"in Ha?Ha.value:Ha.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[c-s];s++);return Wl=u.slice(t,1<s?1-s:void 0)}function Zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function $m(){return!1}function Xn(t){function n(a,s,u,c,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(c):c[T]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Kl:$m,this.isPropagationStopped=$m,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Xn(Ga),wo=O({},Ga,{view:0,detail:0}),vy=Xn(wo),vf,Sf,Do,Ql=O({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(vf=t.screenX-Do.screenX,Sf=t.screenY-Do.screenY):Sf=vf=0,Do=t),vf)},movementY:function(t){return"movementY"in t?t.movementY:Sf}}),tg=Xn(Ql),Sy=O({},Ql,{dataTransfer:0}),Ey=Xn(Sy),yy=O({},wo,{relatedTarget:0}),Ef=Xn(yy),xy=O({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Xn(xy),Ty=O({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ay=Xn(Ty),by=O({},Ga,{data:0}),eg=Xn(by),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wy[t])?!!n[t]:!1}function yf(){return Dy}var Uy=O({},wo,{key:function(t){if(t.key){var n=Ry[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ny=Xn(Uy),Ly=O({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=Xn(Ly),Oy=O({},Ga,{submitter:0}),Py=Xn(Oy),zy=O({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),Iy=Xn(zy),By=O({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Xn(By),Hy=O({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Xn(Hy),Vy=O({},Ga,{newState:0,oldState:0,source:0}),Xy=Xn(Vy),ky=[9,13,27,32],xf=fa&&"CompositionEvent"in window,Uo=null;fa&&"documentMode"in document&&(Uo=document.documentMode);var qy=fa&&"TextEvent"in window&&!Uo,ig=fa&&(!xf||Uo&&8<Uo&&11>=Uo),ag=" ",rg=!1;function sg(t,n){switch(t){case"keyup":return ky.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Yy(t,n){switch(t){case"compositionend":return og(n);case"keypress":return n.which!==32?null:(rg=!0,ag);case"textInput":return t=n.data,t===ag&&rg?null:t;default:return null}}function Wy(t,n){if(ms)return t==="compositionend"||!xf&&sg(t,n)?(t=Jm(),Wl=_f=Ha=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ig&&n.locale!=="ko"?null:n.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zy[t.type]:n==="textarea"}function ug(t,n,a,s){ds?ps?ps.push(s):ps=[s]:ds=s,n=Ju(n,"onChange"),0<n.length&&(a=new jl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var No=null,Lo=null;function Ky(t){j0(t,0)}function Jl(t){var n=vn(t);if(km(n))return t}function cg(t,n){if(t==="change")return n}var fg=!1;if(fa){var Mf;if(fa){var Tf="oninput"in document;if(!Tf){var hg=document.createElement("div");hg.setAttribute("oninput","return;"),Tf=typeof hg.oninput=="function"}Mf=Tf}else Mf=!1;fg=Mf&&(!document.documentMode||9<document.documentMode)}function dg(){No&&(No.detachEvent("onpropertychange",pg),Lo=No=null)}function pg(t){if(t.propertyName==="value"&&Jl(Lo)){var n=[];ug(n,Lo,t,pf(t)),Qm(Ky,n)}}function jy(t,n,a){t==="focusin"?(dg(),No=n,Lo=a,No.attachEvent("onpropertychange",pg)):t==="focusout"&&dg()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Lo)}function Jy(t,n){if(t==="click")return Jl(n)}function $y(t,n){if(t==="input"||t==="change")return Jl(n)}function tx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:tx;function Oo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!At.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function Af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,n){var a=mg(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mg(a)}}function _g(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_g(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Af(t.document)}return n}function bf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ex=fa&&"documentMode"in document&&11>=document.documentMode,gs=null,Rf=null,Po=null,Cf=!1;function Sg(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||gs==null||gs!==Af(s)||(s=gs,"selectionStart"in s&&bf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Po&&Oo(Po,s)||(Po=s,s=Ju(Rf,"onSelect"),0<s.length&&(n=new jl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=gs)))}function Rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var _s={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},wf={},Eg={};fa&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Cr(t){if(wf[t])return wf[t];if(!_s[t])return t;var n=_s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Eg)return wf[t]=n[a];return t}var yg=Cr("animationend"),xg=Cr("animationiteration"),Mg=Cr("animationstart"),nx=Cr("transitionrun"),ix=Cr("transitionstart"),ax=Cr("transitioncancel"),Tg=Cr("transitionend"),Ag=new Map,Df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Df.push("scrollEnd");function Ni(t,n){Ag.set(t,n),fn(n,[t])}var rx=0;function ha(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=zi.identifierPrefix;var a=rx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function bg(t){if(t==null||typeof t=="string")return t;var n=null,a=Is;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function da(t,n){return t=bg(t),n=bg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],vs=0,Uf=0;function tu(){for(var t=vs,n=Uf=vs=0;n<t;){var a=vi[n];vi[n++]=null;var s=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var c=vi[n];if(vi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}c!==0&&Rg(a,u,c)}}function eu(t,n,a,s){vi[vs++]=t,vi[vs++]=n,vi[vs++]=a,vi[vs++]=s,Uf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Nf(t,n,a,s){return eu(t,n,a,s),nu(t)}function wr(t,n){return eu(t,null,null,n),nu(t)}function Rg(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Pn(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function nu(t){if(50<il)throw il=0,qu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ss={};function sx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,s){return new sx(t,n,a,s)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Cg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function iu(t,n,a,s,u,c){var v=0;if(s=t,typeof s=="function")Lf(s)&&(v=1);else if(typeof s=="string")v=OM(t,a,It.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Dt:return t=Zn(31,a,n,u),t.elementType=Dt,t.lanes=c,t;case I:return Dr(a.children,u,c,n);case tt:v=8,u|=24;break;case rt:return t=Zn(12,a,n,u|2),t.elementType=rt,t.lanes=c,t;case $:return t=Zn(13,a,n,u),t.elementType=$,t.lanes=c,t;case Y:return t=Zn(19,a,n,u),t.elementType=Y,t.lanes=c,t;case Wt:case F:return t=u|32,t=Zn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case V:v=10;break t;case ct:v=9;break t;case X:v=11;break t;case vt:v=14;break t;case Et:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Zn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Dr(t,n,a,s){return t=Zn(7,t,s,n),t.lanes=a,t}function Of(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function wg(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Pf(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dg=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=Dg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},Dg.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var Es=[],ys=0,au=null,zo=0,Ei=[],yi=0,Va=null,qi=1,Yi="";function ma(t,n){Es[ys++]=zo,Es[ys++]=au,au=t,zo=n}function Ug(t,n,a){Ei[yi++]=qi,Ei[yi++]=Yi,Ei[yi++]=Va,Va=t;var s=qi;t=Yi;var u=32-Pn(s)-1;s&=~(1<<u),a+=1;var c=32-Pn(n)+u;if(30<c){var v=u-u%5;c=(s&(1<<v)-1).toString(32),s>>=v,u-=v,qi=1<<32-Pn(n)+u|a<<u|s,Yi=c+t}else qi=1<<c|a<<u|s,Yi=t}function ru(t){t.return!==null&&(ma(t,1),Ug(t,1,0))}function zf(t){for(;t===au;)au=Es[--ys],Es[ys]=null,zo=Es[--ys],Es[ys]=null;for(;t===Va;)Va=Ei[--yi],Ei[yi]=null,Yi=Ei[--yi],Ei[yi]=null,qi=Ei[--yi],Ei[yi]=null}function Ng(t,n){Ei[yi++]=qi,Ei[yi++]=Yi,Ei[yi++]=Va,qi=n.id,Yi=n.overflow,Va=t}var Tn=null,Ke=null,_e=!1,Xa=null,xi=!1,If=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Si(n,t)),If}function Lg(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Lt]=t,n[Zt]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<rl.length;a++)Ee(rl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),qm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Wm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||tv(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||ka(t,!0)}function su(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function xs(t){if(t!==Tn)return!1;if(!_e)return su(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&Ke&&ka(t),su(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Sv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Sv(t)}else n===27?(n=Ke,sr(t.type)?(t=xd,xd=null,Ke=t):Ke=n):Ke=Tn?Ti(t.stateNode.nextSibling):null;return!0}function Ur(){Ke=Tn=null,_e=!1}function Bf(){var t=Xa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Xa=null),t}function Io(t){Xa===null?Xa=[t]:Xa.push(t)}var Ff=Yt(null),Nr=null,ga=null;function qa(t,n,a){ie(Ff,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=Ff.current,Nt(Ff)}function ou(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Hf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var v=u.child;c=c.firstContext;t:for(;c!==null;){var T=c;c=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){c.lanes|=a,T=c.alternate,T!==null&&(T.lanes|=a),ou(c.return,a,t),s||(v=null);break t}c=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,c=v.alternate,c!==null&&(c.lanes|=a),ou(v,a,t),v=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),ou(u.return,a,t),v=u.child,v=v!==null?v.sibling:null):v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Lr(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;ai(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===we.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ws):t=[Ws])}u=u.return}return t!==null&&Hf(n,t,a,s),n.flags|=262144,t!==null}function lu(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Nr=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Og(Nr,t)}function uu(t,n){return Nr===null&&Or(t),Og(t,n)}function Og(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(r(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lx=o.unstable_scheduleCallback,ux=o.unstable_NormalPriority,hn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gf(){return{controller:new ox,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&lx(ux,function(){t.controller.abort()})}function Pg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Fo=null;function cx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ho=null,Vf=0,Pr=0,Ms=null;function fx(t,n){if(Ho===null){var a=Ho=[];Vf=0,Pr=ad(),Ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Vf++,n.then(zg,zg),n}function zg(){if(--Vf===0&&(Fo=null,Ho!==null)){Ms!==null&&(Ms.status="fulfilled");var t=Ho;Ho=null,Pr=0,Ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ig=xt.S;xt.S=function(t,n){if(w0=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fx(t,n),Fo!==null)for(var a=Gs;a!==null;)Pg(a,Fo),a=a.next;if(a=t.types,a!==null){for(var s=Gs;s!==null;)Pg(s,a),s=s.next;if(Pr!==0){s=Fo,s===null&&(s=Fo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}Ig!==null&&Ig(t,n)};var zr=Yt(null);function Xf(){var t=zr.current;return t!==null?t:We.pooledCache}function cu(t,n){n===null?ie(zr,zr.current):ie(zr,n.pool)}function Bg(){var t=Xf();return t===null?null:{parent:hn._currentValue,pool:t}}var Ts=Error(r(460)),kf=Error(r(474)),fu=Error(r(542)),hu={then:function(){}};function Fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vg(t),t}throw Br=n,Ts}}function Ir(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Br=a,Ts):a}}var Br=null;function Gg(){if(Br===null)throw Error(r(459));var t=Br;return Br=null,t}function Vg(t){if(t===Ts||t===fu)throw Error(r(483))}var As=null,Go=0;function du(t){var n=Go;return Go+=1,As===null&&(As=[]),Hg(As,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xg(t){function n(K,k){if(t){var et=K.deletions;et===null?(K.deletions=[k],K.flags|=16):et.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function s(K){for(var k=new Map;K!==null;)K.key===null?k.set(K.index,K):k.set(K.key,K),K=K.sibling;return k}function u(K,k){return K=pa(K,k),K.index=0,K.sibling=null,K}function c(K,k,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<k?(K.flags|=2,k):et):(K.flags|=134217730,k)):(K.flags|=1048576,k)}function v(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function T(K,k,et,gt){return k===null||k.tag!==6?(k=Of(et,K.mode,gt),k.return=K,k):(k=u(k,et),k.return=K,k)}function P(K,k,et,gt){var kt=et.type;return kt===I?(K=st(K,k,et.props.children,gt,et.key),Ya(K,et),K):k!==null&&(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Et&&Ir(kt)===k.type)?(k=u(k,et.props),Ya(k,et),k.return=K,k):(k=iu(et.type,et.key,et.props,null,K.mode,gt),Ya(k,et),k.return=K,k)}function j(K,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Pf(et,K.mode,gt),k.return=K,k):(k=u(k,et.children||[]),k.return=K,k)}function st(K,k,et,gt,kt){return k===null||k.tag!==7?(k=Dr(et,K.mode,gt,kt),k.return=K,k):(k=u(k,et),k.return=K,k)}function _t(K,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Of(""+k,K.mode,et),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return et=iu(k.type,k.key,k.props,null,K.mode,et),Ya(et,k),et.return=K,et;case w:return k=Pf(k,K.mode,et),k.return=K,k;case Et:return k=Ir(k),_t(K,k,et)}if(wt(k)||it(k))return k=Dr(k,K.mode,et,null),k.return=K,k;if(typeof k.then=="function")return _t(K,du(k),et);if(k.$$typeof===V)return _t(K,uu(K,k),et);pu(K,k)}return null}function Z(K,k,et,gt){var kt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return kt!==null?null:T(K,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case D:return et.key===kt?P(K,k,et,gt):null;case w:return et.key===kt?j(K,k,et,gt):null;case Et:return et=Ir(et),Z(K,k,et,gt)}if(wt(et)||it(et))return kt!==null?null:st(K,k,et,gt,null);if(typeof et.then=="function")return Z(K,k,du(et),gt);if(et.$$typeof===V)return Z(K,k,uu(K,et),gt);pu(K,et)}return null}function at(K,k,et,gt,kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(et)||null,T(k,K,""+gt,kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case D:return K=K.get(gt.key===null?et:gt.key)||null,P(k,K,gt,kt);case w:return K=K.get(gt.key===null?et:gt.key)||null,j(k,K,gt,kt);case Et:return gt=Ir(gt),at(K,k,et,gt,kt)}if(wt(gt)||it(gt))return K=K.get(et)||null,st(k,K,gt,kt,null);if(typeof gt.then=="function")return at(K,k,et,du(gt),kt);if(gt.$$typeof===V)return at(K,k,et,uu(k,gt),kt);pu(k,gt)}return null}function Pt(K,k,et,gt){for(var kt=null,Me=null,$t=k,oe=k=0,mn=null;$t!==null&&oe<et.length;oe++){$t.index>oe?(mn=$t,$t=null):mn=$t.sibling;var be=Z(K,$t,et[oe],gt);if(be===null){$t===null&&($t=mn);break}t&&$t&&be.alternate===null&&n(K,$t),k=c(be,k,oe),Me===null?kt=be:Me.sibling=be,Me=be,$t=mn}if(oe===et.length)return a(K,$t),_e&&ma(K,oe),kt;if($t===null){for(;oe<et.length;oe++)$t=_t(K,et[oe],gt),$t!==null&&(k=c($t,k,oe),Me===null?kt=$t:Me.sibling=$t,Me=$t);return _e&&ma(K,oe),kt}for($t=s($t);oe<et.length;oe++)mn=at($t,K,oe,et[oe],gt),mn!==null&&(t&&(be=mn.alternate,be!==null&&$t.delete(be.key===null?oe:be.key)),k=c(mn,k,oe),Me===null?kt=mn:Me.sibling=mn,Me=mn);return t&&$t.forEach(function(fr){return n(K,fr)}),_e&&ma(K,oe),kt}function Kt(K,k,et,gt){if(et==null)throw Error(r(151));for(var kt=null,Me=null,$t=k,oe=k=0,mn=null,be=et.next();$t!==null&&!be.done;oe++,be=et.next()){$t.index>oe?(mn=$t,$t=null):mn=$t.sibling;var fr=Z(K,$t,be.value,gt);if(fr===null){$t===null&&($t=mn);break}t&&$t&&fr.alternate===null&&n(K,$t),k=c(fr,k,oe),Me===null?kt=fr:Me.sibling=fr,Me=fr,$t=mn}if(be.done)return a(K,$t),_e&&ma(K,oe),kt;if($t===null){for(;!be.done;oe++,be=et.next())be=_t(K,be.value,gt),be!==null&&(k=c(be,k,oe),Me===null?kt=be:Me.sibling=be,Me=be);return _e&&ma(K,oe),kt}for($t=s($t);!be.done;oe++,be=et.next())be=at($t,K,oe,be.value,gt),be!==null&&(t&&(mn=be.alternate,mn!==null&&$t.delete(mn.key===null?oe:mn.key)),k=c(be,k,oe),Me===null?kt=be:Me.sibling=be,Me=be);return t&&$t.forEach(function(YM){return n(K,YM)}),_e&&ma(K,oe),kt}function de(K,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===I&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case D:t:{for(var kt=et.key;k!==null;){if(k.key===kt){if(kt=et.type,kt===I){if(k.tag===7){a(K,k.sibling),gt=u(k,et.props.children),Ya(gt,et),gt.return=K,K=gt;break t}}else if(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Et&&Ir(kt)===k.type){a(K,k.sibling),gt=u(k,et.props),Ya(gt,et),gt.return=K,K=gt;break t}a(K,k);break}else n(K,k);k=k.sibling}et.type===I?(gt=Dr(et.props.children,K.mode,gt,et.key),Ya(gt,et),gt.return=K,K=gt):(gt=iu(et.type,et.key,et.props,null,K.mode,gt),Ya(gt,et),gt.return=K,K=gt)}return v(K);case w:t:{for(kt=et.key;k!==null;){if(k.key===kt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(K,k.sibling),gt=u(k,et.children||[]),gt.return=K,K=gt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}gt=Pf(et,K.mode,gt),gt.return=K,K=gt}return v(K);case Et:return et=Ir(et),de(K,k,et,gt)}if(wt(et))return Pt(K,k,et,gt);if(it(et)){if(kt=it(et),typeof kt!="function")throw Error(r(150));return et=kt.call(et),Kt(K,k,et,gt)}if(typeof et.then=="function")return de(K,k,du(et),gt);if(et.$$typeof===V)return de(K,k,uu(K,et),gt);pu(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(K,k.sibling),gt=u(k,et),gt.return=K,K=gt):(a(K,k),gt=Of(et,K.mode,gt),gt.return=K,K=gt),v(K)):a(K,k)}return function(K,k,et,gt){try{Go=0;var kt=de(K,k,et,gt);return As=null,kt}catch($t){if($t===Ts||$t===fu)throw $t;var Me=Zn(29,$t,null,K.mode);return Me.lanes=gt,Me.return=K,Me}}}var Fr=Xg(!0),kg=Xg(!1),Wa=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=nu(t),Rg(t,null,a),n}return eu(t,s,n,a),nu(t)}function Vo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}function Wf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=v:c=c.next=v,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Zf=!1;function Xo(){if(Zf){var t=Ms;if(t!==null)throw t}}function ko(t,n,a,s){Zf=!1;var u=t.updateQueue;Wa=!1;var c=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,j=P.next;P.next=null,v===null?c=j:v.next=j,v=P;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==v&&(T===null?st.firstBaseUpdate=j:T.next=j,st.lastBaseUpdate=P))}if(c!==null){var _t=u.baseState;v=0,st=j=P=null,T=c;do{var Z=T.lane&-536870913,at=Z!==T.lane;if(at?(xe&Z)===Z:(s&Z)===Z){Z!==0&&Z===Pr&&(Zf=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Pt=t,Kt=T;Z=n;var de=a;switch(Kt.tag){case 1:if(Pt=Kt.payload,typeof Pt=="function"){_t=Pt.call(de,_t,Z);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Kt.payload,Z=typeof Pt=="function"?Pt.call(de,_t,Z):Pt,Z==null)break t;_t=O({},_t,Z);break t;case 2:Wa=!0}}Z=T.callback,Z!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[Z]:at.push(Z))}else at={lane:Z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(j=st=at,P=_t):st=st.next=at,v|=Z;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);st===null&&(P=_t),u.baseState=P,u.firstBaseUpdate=j,u.lastBaseUpdate=st,c===null&&(u.shared.lanes=0),nr|=v,t.lanes=v,t.memoizedState=_t}}function qg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Yg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qg(a[t],n)}var ja=Yt(null),mu=Yt(0);function Wg(t,n){t=xa,ie(mu,t),ie(ja,n),xa=t|n.baseLanes}function Kf(){ie(mu,xa),ie(ja,ja.current)}function jf(){xa=mu.current,Nt(ja),Nt(mu)}var wn=Yt(null),In=null;function Qa(t){var n=t.alternate;ie(Dn,Dn.current&1),ie(wn,t),In===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(In=t)}function Qf(t){ie(Dn,Dn.current),ie(wn,t),In===null&&(In=t)}function Zg(t){t.tag===22?(ie(Dn,Dn.current),ie(wn,t),In===null&&(In=t)):Ja()}function Ja(){ie(Dn,Dn.current),ie(wn,wn.current)}function ri(t){Nt(wn),In===t&&(In=null),Nt(Dn)}var Dn=Yt(0);function qo(t,n){ie(wn,wn.current),ie(Dn,n)}function Jf(t){Nt(Dn),Nt(wn),In===t&&(In=null)}function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||yd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,he=null,Xe=null,dn=null,_u=!1,bs=!1,Hr=!1,vu=0,Yo=0,Rs=null,dx=0;function on(){throw Error(r(321))}function $f(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function th(t,n,a,s,u,c){return va=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?U_:N_,Hr=!1,c=a(s,u),Hr=!1,bs&&(c=jg(n,a,s,u)),Kg(t),c}function Kg(t){xt.H=Au;var n=Xe!==null&&Xe.next!==null;if(va=0,dn=Xe=he=null,_u=!1,Yo=0,Rs=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&lu(t)&&(pn=!0))}function jg(t,n,a,s){he=t;var u=0;do{if(bs&&(Rs=null),Yo=0,bs=!1,25<=u)throw Error(r(301));if(u+=1,dn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=yx,c=n(a,s)}while(bs);return c}function px(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(he.flags|=1024),n}function eh(){var t=vu!==0;return vu=0,t}function nh(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ih(t){if(_u){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_u=!1}va=0,dn=Xe=he=null,bs=!1,Yo=vu=0,Rs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?he.memoizedState=dn=t:dn=dn.next=t,dn}function un(){if(Xe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=dn===null?he.memoizedState:dn.next;if(n!==null)dn=n,Xe=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dn===null?he.memoizedState=dn=t:dn=dn.next=t}return dn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=Yo;return Yo+=1,Rs===null&&(Rs=[]),t=Hg(Rs,t,n),n=he,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?U_:N_),t}function Eu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===ut)return;if(t.$$typeof===V)return Cn(t)}throw Error(r(438,String(t)))}function ah(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=le;return n.index++,a}function Sa(t,n){return typeof n=="function"?n(t):n}function yu(t){var n=un();return rh(n,Xe,t)}function rh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var v=u.next;u.next=c.next,c.next=v}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var T=v=null,P=null,j=n,st=!1;do{var _t=j.lane&-536870913;if(_t!==j.lane?(xe&_t)===_t:(va&_t)===_t){var Z=j.revertLane;if(Z===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),_t===Pr&&(st=!0);else if((va&Z)===Z){j=j.next,Z===Pr&&(st=!0);continue}else _t={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=_t,v=c):P=P.next=_t,he.lanes|=Z,nr|=Z;_t=j.action,Hr&&a(c,_t),c=j.hasEagerState?j.eagerState:a(c,_t)}else Z={lane:_t,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=Z,v=c):P=P.next=Z,he.lanes|=_t,nr|=_t;j=j.next}while(j!==null&&j!==n);if(P===null?v=c:P.next=T,!ai(c,t.memoizedState)&&(pn=!0,st&&(a=Ms,a!==null)))throw a;t.memoizedState=c,t.baseState=v,t.baseQueue=P,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function sh(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do c=t(c,v.action),v=v.next;while(v!==u);ai(c,n.memoizedState)||(pn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function Qg(t,n,a){var s=he,u=un(),c=_e;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ai((Xe||u).memoizedState,a);if(v&&(u.memoizedState=a,pn=!0),u=u.queue,uh(t_.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||v||dn!==null&&(dn.memoizedState.tag&1)!==0,Cs(t?9:8,{destroy:void 0},$g.bind(null,s,u,a,n),null),t){if(s.flags|=2048,We===null)throw Error(r(349));c||(va&127)!==0||Jg(s,n,a)}return a}function Jg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Su(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $g(t,n,a,s){n.value=a,n.getSnapshot=s,e_(n)&&n_(t)}function t_(t,n,a){return a(function(){e_(n)&&n_(t)})}function e_(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function n_(t){var n=wr(t,2);n!==null&&Jn(n,t,2)}function oh(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Hr){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function i_(t,n,a,s){return t.baseState=a,rh(t,Xe,typeof s=="function"?s:Sa)}function mx(t,n,a,s,u){if(Tu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};xt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,a_(n,c)):(c.next=a.next,n.pending=a.next=c)}}function a_(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=xt.T,v={};v.types=c!==null?c.types:null,xt.T=v;try{var T=a(u,s),P=xt.S;P!==null&&P(v,T),r_(t,n,T)}catch(j){lh(t,n,j)}finally{c!==null&&v.types!==null&&(c.types=v.types),xt.T=c}}else try{c=a(u,s),r_(t,n,c)}catch(j){lh(t,n,j)}}function r_(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){s_(t,n,s)},function(s){return lh(t,n,s)}):s_(t,n,a)}function s_(t,n,a){n.status="fulfilled",n.value=a,o_(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,a_(t,a)))}function lh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,o_(n),n=n.next;while(n!==s)}t.action=null}function o_(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function l_(t,n){return n}function u_(t,n){if(_e){var a=We.formState;if(a!==null){t:{var s=he;if(_e){if(Ke){e:{for(var u=Ke,c=xi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ke=Ti(u.nextSibling),s=u.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l_,lastRenderedState:n},a.queue=s,a=C_.bind(null,he,s),s.dispatch=a,s=oh(!1),c=ph.bind(null,he,!1,s.queue),s=kn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=mx.bind(null,he,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function c_(t){var n=un();return f_(n,Xe,t)}function f_(t,n,a){if(n=rh(t,n,l_)[0],t=yu(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Wo(n)}catch(v){throw v===Ts?fu:v}else s=n;n=un();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Cs(9,{destroy:void 0},gx.bind(null,u,a),null)),[s,c,t]}function gx(t,n){t.action=n}function h_(t){var n=un(),a=Xe;if(a!==null)return f_(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Cs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Su(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function d_(){return un().memoizedState}function xu(t,n,a,s){var u=kn();he.flags|=t,u.memoizedState=Cs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Mu(t,n,a,s){var u=un();s=s===void 0?null:s;var c=u.memoizedState.inst;Xe!==null&&s!==null&&$f(s,Xe.memoizedState.deps)?u.memoizedState=Cs(n,c,a,s):(he.flags|=t,u.memoizedState=Cs(1|n,c,a,s))}function p_(t,n){xu(8390656,8,t,n)}function uh(t,n){Mu(2048,8,t,n)}function _x(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Su(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function m_(t){var n=un().memoizedState;return _x({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function g_(t,n){return Mu(4,2,t,n)}function __(t,n){return Mu(4,4,t,n)}function v_(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function S_(t,n,a){a=a!=null?a.concat([t]):null,Mu(4,4,v_.bind(null,n,t),a)}function ch(){}function E_(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&$f(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function y_(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&$f(n,s[1]))return s[0];if(s=t(),Hr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s}function fh(t,n,a){return a===void 0||(va&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=U0(),he.lanes|=t,nr|=t,a)}function x_(t,n,a,s){return ai(a,n)?a:ja.current!==null?(t=fh(t,a,s),ai(t,n)||(pn=!0),t):(va&106)===0||(va&1073741824)!==0&&(xe&261930)===0?(pn=!0,t.memoizedState=a):(t=U0(),he.lanes|=t,nr|=t,n)}function M_(t,n,a,s,u){var c=Gt.p;Gt.p=c!==0&&8>c?c:8;var v=xt.T,T={};T.types=v!==null?v.types:null,xt.T=T,ph(t,!1,n,a);try{var P=u(),j=xt.S;if(j!==null&&j(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var st=hx(P,s);Zo(t,n,st,ui(t))}else Zo(t,n,s,ui(t))}catch(_t){Zo(t,n,{then:function(){},status:"rejected",reason:_t},ui())}finally{Gt.p=c,v!==null&&T.types!==null&&(v.types=T.types),xt.T=v}}function vx(){}function hh(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=T_(t).queue;M_(t,u,n,H,a===null?vx:function(){return A_(t),a(s)})}function T_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function A_(t){var n=T_(t);n.next===null&&(n=t.alternate.memoizedState),Zo(t,n.next.queue,{},ui())}function dh(){return Cn(Ws)}function b_(){return un().memoizedState}function R_(){return un().memoizedState}function Sx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Za(a);var s=Ka(n,t,a);s!==null&&(Jn(s,n,a),Vo(s,n,a)),n={cache:Gf()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?w_(n,a):(a=Nf(t,n,a,s),a!==null&&(Jn(a,t,s),D_(a,n,s)))}function C_(t,n,a){var s=ui();Zo(t,n,a,s)}function Zo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))w_(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var v=n.lastRenderedState,T=c(v,a);if(u.hasEagerState=!0,u.eagerState=T,ai(T,v))return eu(t,n,u,0),We===null&&tu(),!1}catch{}if(a=Nf(t,n,u,s),a!==null)return Jn(a,t,s),D_(a,n,s),!0}return!1}function ph(t,n,a,s){if(s={lane:2,revertLane:ad(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(r(479))}else n=Nf(t,a,s,2),n!==null&&Jn(n,t,2)}function Tu(t){var n=t.alternate;return t===he||n!==null&&n===he}function w_(t,n){bs=_u=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function D_(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Q(t,a)}}var Au={readContext:Cn,use:Eu,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},U_={readContext:Cn,use:Eu,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:p_,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xu(4194308,4,v_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xu(4194308,4,t,n)},useInsertionEffect:function(t,n){xu(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Hr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var u=a(n);if(Hr){_n(!0);try{a(n)}finally{_n(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Ex.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=oh(t);var n=t.queue,a=C_.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ch,useDeferredValue:function(t,n){var a=kn();return fh(a,t,n)},useTransition:function(){var t=oh(!1);return t=M_.bind(null,he,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=kn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(xe&127)!==0||Jg(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,p_(t_.bind(null,s,c,t),[t]),s.flags|=2048,Cs(9,{destroy:void 0},$g.bind(null,s,c,a,n),null),a},useId:function(){var t=kn(),n=We.identifierPrefix;if(_e){var a=Yi,s=qi;a=(s&~(1<<32-Pn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:dh,useFormState:u_,useActionState:u_,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ph.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:ah,useCacheRefresh:function(){return kn().memoizedState=Sx.bind(null,he)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},N_={readContext:Cn,use:Eu,useCallback:E_,useContext:Cn,useEffect:uh,useImperativeHandle:S_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:y_,useReducer:yu,useRef:d_,useState:function(){return yu(Sa)},useDebugValue:ch,useDeferredValue:function(t,n){var a=un();return x_(a,Xe.memoizedState,t,n)},useTransition:function(){var t=yu(Sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Qg,useId:b_,useHostTransitionStatus:dh,useFormState:c_,useActionState:c_,useOptimistic:function(t,n){var a=un();return i_(a,Xe,t,n)},useMemoCache:ah,useCacheRefresh:R_,useEffectEvent:m_},yx={readContext:Cn,use:Eu,useCallback:E_,useContext:Cn,useEffect:uh,useImperativeHandle:S_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:y_,useReducer:sh,useRef:d_,useState:function(){return sh(Sa)},useDebugValue:ch,useDeferredValue:function(t,n){var a=un();return Xe===null?fh(a,t,n):x_(a,Xe.memoizedState,t,n)},useTransition:function(){var t=sh(Sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Qg,useId:b_,useHostTransitionStatus:dh,useFormState:h_,useActionState:h_,useOptimistic:function(t,n){var a=un();return Xe!==null?i_(a,Xe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ah,useCacheRefresh:R_,useEffectEvent:m_};function mh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),u=Za(s);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&(Jn(n,t,s),Vo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),u=Za(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,s),n!==null&&(Jn(n,t,s),Vo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=Za(a);s.tag=2,n!=null&&(s.callback=n),n=Ka(t,s,a),n!==null&&(Jn(n,t,a),Vo(n,t,a))}};function L_(t,n,a,s,u,c,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,v):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,s)||!Oo(u,c):!0}function O_(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&gh.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function P_(t){$l(t)}function z_(t){console.error(t)}function I_(t){$l(t)}function bu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function B_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _h(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){bu(t,n)},a}function F_(t){return t=Za(t),t.tag=3,t}function H_(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){B_(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){B_(n,a,s),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function xx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Lr(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Wu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ed(t,s,u)),!1;case 22:return a.flags|=65536,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ed(t,s,u)),!1}throw Error(r(435,a.tag))}return ed(t,s,u),Wu(),!1}if(_e)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==If&&(t=Error(r(422),{cause:s}),Io(Si(t,a)))):(s!==If&&(n=Error(r(423),{cause:s}),Io(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Si(s,a),u=_h(t.stateNode,s,u),Wf(t,u),ln!==4&&(ln=2)),!1;var c=Error(r(520),{cause:s});if(c=Si(c,a),nl===null?nl=[c]:nl.push(c),ln!==4&&(ln=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=_h(a.stateNode,s,t),Wf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=F_(u),H_(u,t,a,s),Wf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var vh=Error(r(461)),pn=!1;function Sn(t,n,a,s){n.child=t===null?kg(n,null,a,s):Fr(n,t.child,a,s)}function G_(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return Or(n),s=th(t,n,a,v,c,u),T=eh(),t!==null&&!pn?(nh(t,n,u),Ea(t,n,u)):(_e&&T&&ru(n),n.flags|=1,Sn(t,n,s,u),n.child)}function V_(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!Lf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,X_(t,n,c,s,u)):(t=iu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!bh(t,u)){var v=c.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(v,s)&&t.ref===n.ref)return Ea(t,n,u)}return n.flags|=1,t=pa(c,s),t.ref=n.ref,t.return=n,n.child=t}function X_(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Oo(c,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=c,bh(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Ea(t,n,u)}return Sh(t,n,a,s,u)}function k_(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return q_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,c!==null?c.cachePool:null),c!==null?Wg(n,c):Kf(),Zg(n);else return s=n.lanes=536870912,q_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(cu(n,c.cachePool),Wg(n,c),Ja(),n.memoizedState=null):(t!==null&&cu(n,null),Kf(),Ja());return Sn(t,n,u,a),n.child}function Ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function q_(t,n,a,s,u){var c=Xf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&cu(n,null),Kf(),Zg(n),t!==null&&Lr(t,n,s,!0),n.childLanes=u,null}function Ru(t,n){return n=Cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Y_(t,n,a){return Fr(n,t.child,null,a),t=Ru(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Mx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=Ru(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ko(null,t);if(Qf(n),(t=Ke)?(t=vv(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=wg(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return Ru(n,s)}var c=t.memoizedState;if(c!==null){var v=c.dehydrated;if(Qf(n),u)if(n.flags&256)n.flags&=-257,n=Y_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||Lr(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(ja.current===null){if(s=We,s!==null&&(v=ft(s,a),v!==0&&v!==c.retryLane))throw c.retryLane=v,wr(t,v),Jn(s,t,v),vh;Wu()}n=Y_(t,n,a)}else t=c.treeContext,Ke=Ti(v.nextSibling),Tn=n,_e=!0,Xa=null,xi=!1,t!==null&&Ng(n,t),n=Ru(n,s),n.flags|=134221824;return n}return t=pa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ws(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sh(t,n,a,s,u){return Or(n),a=th(t,n,a,s,void 0,u),s=eh(),t!==null&&!pn?(nh(t,n,u),Ea(t,n,u)):(_e&&s&&ru(n),n.flags|=1,Sn(t,n,a,u),n.child)}function W_(t,n,a,s,u,c){return Or(n),n.updateQueue=null,a=jg(n,s,a,u),Kg(t),s=eh(),t!==null&&!pn?(nh(t,n,c),Ea(t,n,c)):(_e&&s&&ru(n),n.flags|=1,Sn(t,n,a,c),n.child)}function Z_(t,n,a,s,u){if(Or(n),n.stateNode===null){var c=Ss,v=a.contextType;typeof v=="object"&&v!==null&&(c=Cn(v)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=gh,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},qf(n),v=a.contextType,c.context=typeof v=="object"&&v!==null?Cn(v):Ss,c.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(mh(n,a,v,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&gh.enqueueReplaceState(c,c.state,null),ko(n,s,c,u),Xo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var T=n.memoizedProps,P=Gr(a,T);c.props=P;var j=c.context,st=a.contextType;v=Ss,typeof st=="object"&&st!==null&&(v=Cn(st));var _t=a.getDerivedStateFromProps;st=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(T||j!==v)&&O_(n,c,s,v),Wa=!1;var Z=n.memoizedState;c.state=Z,ko(n,s,c,u),Xo(),j=n.memoizedState,T||Z!==j||Wa?(typeof _t=="function"&&(mh(n,a,_t,s),j=n.memoizedState),(P=Wa||L_(n,a,P,s,Z,j,v))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),c.props=s,c.state=j,c.context=v,s=P):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Yf(t,n),v=n.memoizedProps,st=Gr(a,v),c.props=st,_t=n.pendingProps,Z=c.context,j=a.contextType,P=Ss,typeof j=="object"&&j!==null&&(P=Cn(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==_t||Z!==P)&&O_(n,c,s,P),Wa=!1,Z=n.memoizedState,c.state=Z,ko(n,s,c,u),Xo();var at=n.memoizedState;v!==_t||Z!==at||Wa||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof T=="function"&&(mh(n,a,T,s),at=n.memoizedState),(st=Wa||L_(n,a,st,s,Z,at,P)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,at,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,at,P)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),c.props=s,c.state=at,c.context=P,s=st):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,ws(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,u),n.child=Fr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Ea(t,n,u),t}function K_(t,n,a,s){return Ur(),n.flags|=256,Sn(t,n,a,s),n.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yh(t){return{baseLanes:t,cachePool:Bg()}}function xh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function j_(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,v;if((v=c)||(v=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Qa(n):Ja(),(t=Ke)?(t=vv(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=wg(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw ka(n);return yd(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ja(),u=n.mode,c=Cu({mode:"hidden",children:c},u),s=Dr(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=yh(a),s.childLanes=xh(t,v,a),n.memoizedState=Eh,Ko(null,s)):(Qa(n),Mh(n,c))}var T=t.memoizedState;if(T!==null){var P=T.dehydrated;if(P!==null)return Tx(t,n,c,v,s,P,T,a)}return u?(Ja(),u=s.fallback,c=n.mode,T=t.child,P=T.sibling,s=pa(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,P!==null?u=pa(P,u):(u=Dr(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Ko(null,s),s=n.child,u=t.child.memoizedState,u===null?u=yh(a):(c=u.cachePool,c!==null?(T=hn._currentValue,c=c.parent!==T?{parent:T,pool:T}:c):c=Bg(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=xh(t,v,a),n.memoizedState=Eh,Ko(t.child,s)):(Qa(n),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Mh(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function wu(t,n,a){return Fr(n,t.child,null,a),t=Mh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tx(t,n,a,s,u,c,v,T){if(a)return n.flags&256?(Qa(n),n.flags&=-257,wu(t,n,T)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),c=u.fallback,v=n.mode,u=Cu({mode:"visible",children:u.children},v),c=Dr(c,v,T,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Fr(n,t.child,null,T),u=n.child,u.memoizedState=yh(T),u.childLanes=xh(t,s,T),n.memoizedState=Eh,Ko(null,u));if(Qa(n),yd(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var P=s.dgst;return s=P,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Io({value:u,source:null,stack:null})),wu(t,n,T)}if(pn||Lr(t,n,T,!1),s=(T&t.childLanes)!==0,pn||s){if(ja.current!==null)return wu(t,n,T);if(s=We,s!==null&&(u=ft(s,T),u!==0&&u!==v.retryLane))throw v.retryLane=u,wr(t,u),Jn(s,t,u),vh;return Ed(c)||Wu(),wu(t,n,T)}return Ed(c)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ke=Ti(c.nextSibling),Tn=n,_e=!0,Xa=null,xi=!1,t!==null&&Ng(n,t),n=Mh(n,u.children),n.flags|=134221824,n)}function Q_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ou(t.return,n,a)}function J_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&gu(a)===null&&(n=t),t=t.sibling}return n}function Du(t,n,a,s,u,c){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=c)}function Th(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Ah(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var v=Dn.current;if(n.flags&128)return qo(n,v),null;var T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,qo(n,v),u==="backwards"&&t!==null?(Th(t),Sn(t,n,s,a),Th(t)):Sn(t,n,s,a),s=_e?zo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q_(t,a,n);else if(t.tag===19)Q_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=J_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Th(n)),Du(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&gu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Du(n,!0,a,null,c,s);break;case"together":Du(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=J_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Du(n,!1,u,a,c,s)}return n.child}function $_(t,n,a){var s=n.pendingProps;return qa(n,n.type,s.value),Sn(t,n,s.children,a),n.child}function Ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function Ax(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),qa(n,hn,t.memoizedState.cache),Ur();break;case 27:case 5:nt(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=Lr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?j_(t,n,a):(Qa(n),t=Ea(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return Ah(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Lr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Ah(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),qo(n,Dn.current),s)break;return null;case 22:return n.lanes=0,k_(t,n,a,n.pendingProps);case 24:qa(n,hn,t.memoizedState.cache)}return Ea(t,n,a)}function t0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!bh(t,a)&&(n.flags&128)===0)return pn=!1,Ax(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,_e&&(n.flags&1048576)!==0&&Ug(n,zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ir(n.elementType),n.type=t,typeof t=="function")Lf(t)?(s=Gr(t,s),n.tag=1,n=Z_(null,n,t,s,a)):(n.tag=0,n=Sh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===X){n.tag=11,n=G_(null,n,t,s,a);break t}else if(u===vt){n.tag=14,n=V_(null,n,t,s,a);break t}else if(u===V){n.tag=10,n.type=t,n=$_(null,n,a);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Sh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Gr(s,n.pendingProps),Z_(t,n,s,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,Yf(t,n),ko(n,s,null,a);var v=n.memoizedState;if(s=v.cache,qa(n,hn,s),s!==c.cache&&Hf(n,[hn],a,!0),Xo(),s=v.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=K_(t,n,s,a);break t}else if(s!==u){u=Si(Error(r(424)),n),Io(u),n=K_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=Ti(t.firstChild),Tn=n,_e=!0,Xa=null,xi=!0,a=kg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ur(),s===u){n=Ea(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return ws(t,n),t===null?(a=Av(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=av(n.type,n.pendingProps,Re.current,n)):n.memoizedState=Av(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&_e&&(s=n.stateNode=yv(n.type,n.pendingProps,Re.current),Tn=n,xi=!0,u=Ke,sr(n.type)?(xd=u,Ke=Ti(s.firstChild)):Ke=u),Sn(t,n,n.pendingProps.children,a),ws(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=s=Ke)&&(s=SM(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Tn=n,Ke=Ti(s.firstChild),xi=!1,u=!0):u=!1),u||ka(n)),nt(n),u=n.type,c=n.pendingProps,v=t!==null?t.memoizedProps:null,s=c.children,dd(u,c)?s=null:v!==null&&dd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=th(t,n,px,null,null,a),Ws._currentValue=u),ws(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Ke)&&(a=EM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||ka(n)),null;case 13:return j_(t,n,a);case 4:return L(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return G_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,ws(t,n),Sn(t,n,s,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return $_(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Or(n),u=Cn(u),s=s(u),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return V_(t,n,n.type,n.pendingProps,a);case 15:return X_(t,n,n.type,n.pendingProps,a);case 19:return Ah(t,n,a);case 31:return Mx(t,n,a);case 22:return k_(t,n,a,n.pendingProps);case 24:return Or(n),s=Cn(hn),t===null?(u=Xf(),u===null&&(u=We,c=Gf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},qf(n),qa(n,hn,u)):((t.lanes&a)!==0&&(Yf(t,n),ko(n,null,null,a),Xo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,hn,s)):(s=c.cache,qa(n,hn,s),s!==u.cache&&Hf(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&ru(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:ws(t,n),Sn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function Rh(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?wv(n,s):wv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(P0())t.flags|=8192;else throw Br=hu,kf}else t.flags&=-16777217}function e0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dv(n))if(P0())t.flags|=8192;else throw Br=hu,kf}function Uu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Xl():536870912,t.lanes|=n,Os|=n)}function jo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function bx(t,n,a){var s=n.pendingProps;switch(zf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),_a(hn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xs(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bf())),je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?(je(n),e0(n,c)):(je(n),Rh(n,u,null,s,a))):c?c!==t.memoizedState?(ya(n),je(n),e0(n,c)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ya(n),je(n),Rh(n,u,t,s,a)),null;case 27:if(pt(n),a=Re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}t=It.current,xs(n)?Lg(n):(t=yv(u,s,a),n.stateNode=t,ya(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),n.subtreeFlags&=-33554433,null}if(c=It.current,xs(n))Lg(n);else{var v=ol(Re.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}c[Lt]=n,c[Zt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=c;t:switch(Nn(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ya(n)}}return je(n),n.subtreeFlags&=-33554433,Rh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Re.current,xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||tv(t.nodeValue,a)),t||ka(n,!0)}else t=ol(t).createTextNode(s),t[Lt]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Lt]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Lt]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Uu(n,n.updateQueue),je(n),null);case 4:return b(),t===null&&ld(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return _a(n.type),je(n),null;case 19:if(Jf(n),s=n.memoizedState,s===null)return je(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)jo(s,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=gu(t),c!==null){for(n.flags|=128,jo(s,!1),t=c.updateQueue,n.updateQueue=t,Uu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Cg(a,t),a=a.sibling;return qo(n,Dn.current&1|2),_e&&ma(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&q()>Xu&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304)}else{if(!u)if(t=gu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Uu(n,t),jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!_e)return je(n),null}else 2*q()-s.renderingStartTime>Xu&&a!==536870912&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,c=Dn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||_e?qo(n,c):(a=c,ie(wn,n),ie(Dn,a),In===null&&(In=n)),_e&&ma(n,s.treeForkCount),t}return je(n),null;case 22:case 23:return ri(n),jf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Uu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(zr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(hn),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(r(156,n.tag))}function Rx(t,n){switch(zf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(hn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Jf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return _a(n.type),null;case 22:case 23:return ri(n),jf(),t!==null&&Nt(zr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(hn),null;case 25:return null;default:return null}}function n0(t,n){switch(zf(n),n.tag){case 3:_a(hn),b();break;case 26:case 27:case 5:pt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Jf(n);break;case 10:_a(n.type);break;case 22:case 23:ri(n),jf(),t!==null&&Nt(zr);break;case 24:_a(hn)}}function Qo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,v=a.inst;s=c(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function $a(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var P=a,j=T;try{j()}catch(st){He(u,P,st)}}}s=s.next}while(s!==c)}}catch(st){He(n,n.return,st)}}function i0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Yg(n,a)}catch(s){He(t,t.return,s)}}}function a0(t,n,a){a.props=Gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=ha(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=fv(c)),s=u.ref;break;case 7:if(t.stateNode===null){var v=new ci(t);p(t.child,!1,_M,v,void 0,void 0),t.stateNode=v}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){He(t,n,T)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function Nu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)_v(t.stateNode,n[a])}function r0(t){for(var n=t.return;n!==null&&(wh(n)&&_v(t.stateNode,n.stateNode),!Ch(n));)n=n.return}function Jo(t){for(var n=t.return;n!==null&&(wh(n)&&vM(t.stateNode,n.stateNode),!Ch(n));)n=n.return}function Ch(t){return t.tag===5||t.tag===3||t.tag===27}function wh(t){return t&&t.tag===7&&t.stateNode!==null}function Dh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Uh(t,n,a){try{var s=t.stateNode;$x(s,t.type,a,n),s[Zt]=n}catch(u){He(t,t.return,u)}}function s0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function Nh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),Nu(t,s),Ne=!0;else if(u!==4&&(u===27&&(Nu(t,s),s=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Lh(t,n,a,s),t=t.sibling;t!==null;)Lh(t,n,a,s),t=t.sibling}function Lu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Nu(t,s),Ne=!0;else if(u!==4&&(u===27&&(Nu(t,s),s=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Lu(t,n,a,s),t=t.sibling;t!==null;)Lu(t,n,a,s),t=t.sibling}function o0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,s,a),n[Lt]=t,n[Zt]=a}catch(c){He(t,t.return,c)}}var Ou=!1,si=null;function l0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ou=!0)}var Zi=null;function u0(){var t=Zi;return Zi=null,t}var Kn=0;function Ds(t,n,a,s,u){return Kn=0,c0(t.child,n,a,s,u)}function c0(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(s!==null){var T=gd(v);s.push(T),T.view&&(c=!0)}else c||gd(v).view&&(c=!0);Ou=!0,uv(v,Kn===0?n:n+"_"+Kn,a),Kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||c0(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?cv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=da(n.default,n.share),n!=="none"&&(Ds(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function Oh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ha(s,a),c=da(s.default,a.paired?s.share:s.enter);c!=="none"?Ds(t,u,c,null,!1)?(Pu(t),a.paired||n||Bs(t,s.onEnter)):Ki(t.child,!1):Pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Oh(t,n),t=t.sibling;else Pu(t)}function Ph(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=da(a.default,a.share);if(c!=="none"&&(Ds(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Bs(t,a.onShare)):Ki(t.child,!1)),n.delete(s),n.size===0)break}}}Ph(t)}t=t.sibling}}}function zh(t){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode),s=si!==null?si.get(a):void 0,u=da(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Ds(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,si.delete(a),Bs(t,n.onShare)):Bs(t,n.onExit):Ki(t.child,!1)),si!==null&&Ph(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zh(t),t=t.sibling;else si!==null&&Ph(t)}function f0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode);n=da(n.default,n.update),t.flags&=-5,n!=="none"&&Ds(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&f0(t);t=t.sibling}}function Ih(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}Ih(t)}t=t.sibling}}function zu(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),Ih(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zu(t),t=t.sibling;else Ih(t)}function h0(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&h0(t),t=t.sibling}function Bh(t,n,a,s,u,c,v){for(var T=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(c!==null&&Kn<c.length){var j=c[Kn],st=gd(P);(j.view||st.view)&&(T=!0);var _t;if(_t=(t.flags&4)===0)if(st.clip)_t=!0;else{_t=j.rect;var Z=st.rect;_t=_t.y!==Z.y||_t.x!==Z.x||_t.height!==Z.height||_t.width!==Z.width}_t&&(t.flags|=4),st.abs?st=!j.abs:(j=j.rect,st=st.rect,st=j.height!==st.height||j.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&uv(P,Kn===0?a:a+"_"+Kn,u),T&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(P,Kn===0?s:s+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:Bh(t,n.child,a,s,u,c,v)&&(T=!0));n=n.sibling}return T}function d0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ha(a,s),c=da(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;Kn=0,u=Bh(s,T,u,u,c,v,!1),(t.flags&4)!==0&&u&&Bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&d0(t);t=t.sibling}}var An=!1,Be=!1,ji=!1,Fh=!1,p0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,$o=!1,Iu=!1,Hh=!1;function Cx(t,n,a){if(t=t.containerInfo,fd=Zs,t=vg(t),bf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break t}var T=0,P=-1,j=-1,st=0,_t=0,Z=t,at=null;e:for(;;){for(var Pt;Z!==s||c!==0&&Z.nodeType!==3||(P=T+c),Z!==v||u!==0&&Z.nodeType!==3||(j=T+u),Z.nodeType===3&&(T+=Z.nodeValue.length),(Pt=Z.firstChild)!==null;)at=Z,Z=Pt;for(;;){if(Z===t)break e;if(at===s&&++st===c&&(P=T),at===v&&++_t===u&&(j=T),(Pt=Z.nextSibling)!==null)break;Z=at,at=Z.parentNode}Z=Pt}s=P===-1||j===-1?null:{start:P,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(hd={focusedElem:t,selectionRange:s},Zs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&zh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&l0(t),Bu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&zh(s),Bu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&l0(t),Bu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,bn=s):(a&&f0(t),Bu(a))}}si=null}function Bu(t){for(;bn!==null;){var n=bn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var v=Gr(n.type,u);a=c.getSnapshotBeforeUpdate(v,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(T){He(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Sd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Sd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ha(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=da(u.default,u.update),u!=="none"&&Ds(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,bn=s;break}bn=n.return}}function m0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),s&4&&Qo(5,a);break;case 1:if(Ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){He(a,a.return,v)}else{var u=Gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){He(a,a.return,v)}}s&64&&i0(a),s&512&&Wi(a,a.return);break;case 3:if(Ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yg(t,n)}catch(v){He(a,a.return,v)}}break;case 27:n===null&&s&4&&o0(a);case 26:case 5:Ji(t,a),n===null&&s&4&&Dh(a),s&512&&Wi(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),s&4&&S0(t,a);break;case 13:Ji(t,a),s&4&&E0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hx.bind(null,a),yM(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var c=n!==null&&n.memoizedState!==null||Be;n=An,u=Be,An=s,(Be=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):Ji(t,a),An=n,Be=u}break;case 30:Ji(t,a),s&512&&Wi(a,a.return);break;case 7:s&512&&Wi(a,a.return);default:Ji(t,a)}}function Gh(t,n){for(t=t.child;t!==null;)g0(t,n),t=t.sibling}function g0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,v=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(P){He(t,t.return,P)}Vh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(P){He(t,t.return,P)}break;case 18:try{var T=t.stateNode;n?lv(T,!0):lv(t.stateNode,!1)}catch(P){He(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Gh(t,n);break;default:Gh(t,n)}}function Vh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:g0(a,s);break t;case 22:a.memoizedState===null&&Vh(a,s);break t;default:Vh(a,s)}}t=t.sibling}}function _0(t){var n=t.alternate;n!==null&&(t.alternate=null,_0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,jn=!1;function Li(t,n,a){for(a=a.child;a!==null;)v0(t,n,a),a=a.sibling}function v0(t,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Be||Un(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Un(a,n),Jo(a);var s=$e,u=jn;sr(a.type)&&($e=a.stateNode,jn=!1),Li(t,n,a),xv(a.stateNode,a.type,a.memoizedProps),$e=s,jn=u;break;case 5:Be||Un(a,n),Jo(a);case 6:if(a.tag===6&&Jo(a),s=$e,u=jn,$e=null,Li(t,n,a),$e=s,jn=u,$e!==null)if(jn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Ne=!0}catch(c){He(a,n,c)}else try{$e.removeChild(a.stateNode),Ne=!0}catch(c){He(a,n,c)}break;case 18:$e!==null&&(jn?(t=$e,ov(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ks(t)):ov($e,a.stateNode));break;case 4:s=$e,u=jn,$e=a.stateNode.containerInfo,jn=!0,Li(t,n,a),$e=s,jn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Be||$a(4,a,n),Li(t,n,a);break;case 1:Be||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&a0(a,n,s)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Li(t,n,a),Be=s;break;case 30:Un(a,n),Li(t,n,a);break;case 7:Be||Un(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function S0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ks(t)}catch(a){He(n,n.return,a)}}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ks(t)}catch(a){He(n,n.return,a)}}function wx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new p0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new p0),n;default:throw Error(r(435,t.tag))}}function Fu(t,n){var a=wx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Gx.bind(null,t,s);s.then(u,u)}})}function qn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],v=t,T=n,P=T;t:for(;P!==null;){switch(P.tag){case 27:if(sr(P.type)){$e=P.stateNode,jn=!1;break t}break;case 5:$e=P.stateNode,jn=!1;break t;case 3:case 4:$e=P.stateNode.containerInfo,jn=!0;break t}P=P.return}if($e===null)throw Error(r(160));v0(v,T,c),$e=null,jn=!1,v=c.alternate,v!==null&&(v.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)y0(n,t,a),n=n.sibling}var Oi=null;function y0(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var v=s[c];v.ref.impl=v.nextImpl}qn(n,t,a),Yn(t),u&4&&($a(3,t,t.return),Qo(3,t),$a(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Oi,qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=av(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Oe]||s[Lt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Nn(s,n,a),s[Lt]=t,Ue(s),n=s;break t;case"link":if(c=Cv("link","href",u).get(n+(a.href||""))){for(v=0;v<c.length;v++)if(s=c[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(v,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;case"meta":if(c=Cv("meta","content",u).get(n+(a.content||""))){for(v=0;v<c.length;v++)if(s=c[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(v,1);break e}}s=u.createElement(n),Nn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Lt]=t,Ue(s),n=s}t.stateNode=n}else An||bd(c,t.type,t.stateNode);else t.stateNode=Rv(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?An||bd(c,t.type,t.stateNode):Rv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Uh(t,t.memoizedProps,s.memoizedProps);break;case 27:qn(n,t,a),Yn(t),u&512&&(Be||s===null||Un(s,s.return)),s!==null&&u&4&&Uh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=ji,ji=!1,qn(n,t,a),ji=c,Yn(t),u&512&&(Be||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{hs(n,""),Ne=!0}catch(st){He(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Uh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Fh=!0);break;case 6:if(qn(n,t,a),Yn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(st){He(t,t.return,st)}}break;case 3:if(Ne=!1,tc=null,c=Oi,Oi=ll(n.containerInfo),qn(n,t,a),Oi=c,Yn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Ks(n.containerInfo)}catch(st){He(t,t.return,st)}Fh&&(Fh=!1,x0(t)),Ne=!1;break;case 4:u=ji,ji=An,s=Vm(),c=Oi,Oi=ll(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Oi=c,Ne&&$o&&(Iu=!0),Ne=s,ji=u;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vu=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 22:c=t.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var T=An,P=Be,j=ji;An=T||c,ji=j||c,Be=P||v,qn(n,t,a),Be=P,ji=j,An=T,Yn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||v||An||Be||(n=v||Be,a=An,s=Be,An=c||An,Be=n,tr(t,2),An=a,Be=s),!c&&ji||Gh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Fu(t,a))));break;case 19:qn(n,t,a),Yn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 30:u&512&&(Be||s===null||Un(s,s.return)),u=Vm(),c=$o,v=(a&335544064)===a,T=t.memoizedProps,$o=v&&da(T.default,T.update)!=="none",qn(n,t,a),Yn(t),v&&s!==null&&Ne&&(t.flags|=4),$o=c,Ne=u;break;case 21:break;case 7:u&512&&(Be||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(s0(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(wh(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(Ch(u))break;u=u.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,P=Nh(t);Lu(t,P,T,v);break;case 5:var j=a.stateNode;a.flags&32&&(hs(j,""),a.flags&=-33);var st=Nh(t);Lu(t,st,j,v);break;case 3:case 4:var _t=a.stateNode.containerInfo,Z=Nh(t);Lh(t,Z,_t,v);break;default:throw Error(r(161))}}catch(at){He(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function x0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;x0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zs=!0,n.reset(),Zs=!1),t=t.sibling}}function Us(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)M0(n,t),n=n.sibling;else d0(n)}function M0(t,n){var a=t.alternate;if(a===null)Oh(t,!1);else switch(t.tag){case 3:if(Hh=Qi=!1,u0(),Us(n,t),!Qi&&!Iu){if(t=Zi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];cv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hh=!0}Zi=null;break;case 5:Us(n,t);break;case 4:s=Qi,Qi=!1,Us(n,t),Qi&&(Iu=!0),Qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Oh(t,!1):Us(n,t));break;case 30:s=Qi,u=u0(),Qi=!1,Us(n,t),Qi&&(t.flags|=4);var c=t.memoizedProps,v=t.stateNode;n=ha(c,v),v=ha(a.memoizedProps,v);var T=da(c.default,c.update);T==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Kn=0,n=Bh(t,a,n,v,T,c,!0),Kn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Bs(t,t.memoizedProps.onUpdate),Zi=u):u!==null&&(u.push.apply(u,Zi),Zi=u),Qi=(t.flags&32)!==0?!0:s;break;default:Us(n,t)}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)m0(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,s);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&a0(a,a.return,u),tr(a,s);break;case 27:(s&2)!==0&&xv(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Jo(a),tr(a,s);break;case 6:Jo(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),tr(a,s);break;case 22:a.memoizedState===null&&tr(a,s);break;case 30:Un(a,a.return),tr(a,s);break;case 7:Un(a,a.return);default:tr(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,v=c.flags,T=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Pi(u,c,a),Qo(4,c);break;case 1:if(Pi(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){He(s,s.return,st)}if(s=c,u=s.updateQueue,u!==null){var P=s.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)qg(j[u],P)}catch(st){He(s,s.return,st)}}T&&v&64&&i0(c),Wi(c,c.return);break;case 27:(a&2)!==0&&o0(c);case 5:c.tag!==5&&c.tag!==27||r0(c),Pi(u,c,a),T&&s===null&&v&4&&Dh(c),Wi(c,c.return);break;case 6:r0(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||An||bd(ll(P.ownerDocument),c.type,P),Pi(u,c,a),T&&s===null&&v&4&&Dh(c),Wi(c,c.return);break;case 12:Pi(u,c,a);break;case 31:Pi(u,c,a),T&&v&4&&S0(u,c);break;case 13:Pi(u,c,a),T&&v&4&&E0(u,c);break;case 22:c.memoizedState===null&&Pi(u,c,a),Wi(c,c.return);break;case 30:Pi(u,c,a),Wi(c,c.return);break;case 7:Wi(c,c.return);default:Pi(u,c,a)}n=n.sibling}}function Xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bo(a))}function kh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t))}function Mi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)T0(t,n,a,s),n=n.sibling;else u&&h0(n)}function T0(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&zu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&Qo(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),u&&Hh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Bo(c)));break;case 12:if(c&2048){Mi(t,n,a,s),c=n.stateNode;try{var v=n.memoizedProps,T=v.id,P=v.onPostCommit;typeof P=="function"&&P(T,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){He(n,n.return,j)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:v=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&zu(T),v._visibility&2?Mi(t,n,a,s):tl(t,n)):(u&&T!==null&&T.memoizedState!==null&&zu(n),v._visibility&2?Mi(t,n,a,s):(v._visibility|=2,Ns(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Xh(T,n);break;case 24:Mi(t,n,a,s),c&2048&&kh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),Mi(t,n,a,s);break;default:Mi(t,n,a,s)}}function Ns(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,v=n,T=a,P=s,j=v.flags;switch(v.tag){case 0:case 11:case 15:Ns(c,v,T,P,u),Qo(8,v);break;case 23:break;case 22:var st=v.stateNode;v.memoizedState!==null?st._visibility&2?Ns(c,v,T,P,u):tl(c,v):(st._visibility|=2,Ns(c,v,T,P,u)),u&&j&2048&&Xh(v.alternate,v);break;case 24:Ns(c,v,T,P,u),u&&j&2048&&kh(v.alternate,v);break;default:Ns(c,v,T,P,u)}n=n.sibling}}function tl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:tl(a,s),u&2048&&Xh(s.alternate,s);break;case 24:tl(a,s),u&2048&&kh(s.alternate,s);break;default:tl(a,s)}n=n.sibling}}var Vr=8192;function Xr(t,n,a){if(t.subtreeFlags&Vr)for(t=t.child;t!==null;)A0(t,n,a),t=t.sibling}function A0(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&Vr&&(t.memoizedState!==null?PM(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Nv(a,t)));break;case 5:Xr(t,n,a),t.flags&Vr&&(t=t.stateNode,(n&335544128)===n&&Nv(a,t));break;case 3:case 4:var s=Oi;Oi=ll(t.stateNode.containerInfo),Xr(t,n,a),Oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Vr,Vr=16777216,Xr(t,n,a),Vr=s):Xr(t,n,a));break;case 30:if((t.flags&Vr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,si===null&&(si=new Map),si.set(s,u)}Xr(t,n,a);break;default:Xr(t,n,a)}}function b0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function el(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,C0(s,t)}b0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R0(t),t=t.sibling}function R0(t){switch(t.tag){case 0:case 11:case 15:el(t),t.flags&2048&&$a(9,t,t.return);break;case 3:el(t);break;case 12:el(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hu(t)):el(t);break;default:el(t)}}function Hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,C0(s,t)}b0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}t=t.sibling}}function C0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else t:for(a=t;bn!==null;){s=bn;var u=s.sibling,c=s.return;if(_0(s),s===a){bn=null;break t}if(u!==null){u.return=c,bn=u;break t}bn=c}}}var Dx={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},Ux=typeof WeakMap=="function"?WeakMap:Map,ze=0,We=null,Se=null,xe=0,Fe=0,oi=null,er=!1,Ls=!1,qh=!1,xa=0,ln=0,nr=0,kr=0,Gu=0,li=0,Os=0,nl=null,Qn=null,Yh=!1,Vu=0,w0=0,Xu=1/0,ku=null,ir=null,an=0,zi=null,qr=null,$i=0,Wh=0,Zh=null,D0=null,Ps=null,zs=null,Is=null,il=0,qu=null;function ui(){return(ze&2)!==0&&xe!==0?xe&-xe:xt.T!==null?ad():bt()}function U0(){if(li===0)if((xe&536870912)===0||_e){var t=ua;ua<<=1,(ua&3932160)===0&&(ua=262144),li=t}else li=536870912;return t=wn.current,t!==null&&(t.flags|=32),li}function Bs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=fv(ha(t.memoizedProps,a))),zs===null&&(zs=[]),zs.push(n.bind(null,s))}}function Jn(t,n,a){(t===We&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),ar(t,xe,li,!1)),br(t,a),((ze&2)===0||t!==We)&&(t===We&&((ze&2)===0&&(kr|=a),ln===4&&ar(t,xe,li,!1)),ta(t))}function N0(t,n,a){if((ze&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ba(t,n),u=s?Ox(t,n):jh(t,n,!0),c=s;do{if(u===0){Ls&&!s&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Nx(a)){u=jh(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=nl;var P=T.current.memoizedState.isDehydrated;if(P&&(Fs(T,v).flags|=256),v=jh(T,v,!1),v!==2&&v!==6){if(qh&&!P){T.errorRecoveryDisabledLanes|=c,kr|=c,u=4;break t}c=Qn,Qn=u,c!==null&&(Qn===null?Qn=c:Qn.push.apply(Qn,c))}u=v}if(c=!1,u!==2)continue}}if(u===1){Fs(t,0),ar(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(s,n,li,!er);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vu+300-q(),10<u)){if(ar(s,n,li,!er),Ar(s,0,!0)!==0)break t;$i=n,s.timeoutHandle=md(L0.bind(null,s,a,Qn,ku,Yh,n,li,kr,Os,er,c,"Throttled",-0,0),u);break t}L0(s,a,Qn,ku,Yh,n,li,kr,Os,er,c,null,-0,0)}}break}while(!0);ta(t)}function L0(t,n,a,s,u,c,v,T,P,j,st,_t,Z,at){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Kt=(c&335544064)===c;if(_t=null,(Kt||Pt&8192||(Pt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},si=null,A0(n,c,_t),Kt&&(Pt=_t,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=fl.bind(Pt),Kt.finished.then(Pt,Pt))),Pt=(c&62914560)===c?Vu-q():(c&4194048)===c?w0-q():0,Pt=zM(_t,Pt),Pt!==null)){$i=c,t.cancelPendingCommit=Pt(G0.bind(null,t,n,c,a,s,u,v,T,P,j,st,_t,null,Z,at)),ar(t,c,v,!j);return}G0(t,n,c,a,s,u,v,T,P,j,st,_t)}function Nx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ai(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,s){n=Vl(t,n),n&=~Gu,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Pn(u),v=1<<c;s[c]=-1,u&=~v}a!==0&&C(t,a,n)}function Yu(){return(ze&6)===0?(al(0),!1):!0}function Kh(){if(Se!==null){if(Fe===0)var t=Se.return;else t=Se,ga=Nr=null,ih(t),As=null,Go=0,t=Se;for(;t!==null;)n0(t.alternate,t),t=t.return;Se=null}}function Fs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,nM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Kh(),We=t,Se=a=pa(t.current,null),xe=n,Fe=0,oi=null,er=!1,Ls=Ba(t,n),qh=!1,Os=li=Gu=kr=nr=ln=0,Qn=nl=null,Yh=!1,xa=Vl(t,n),tu(),a}function O0(t,n){he=null,xt.H=Au,n===Ts||n===fu?(n=Gg(),Fe=3):n===kf?(n=Gg(),Fe=4):Fe=n===vh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Se===null&&(ln=1,bu(t,Si(n,t.current)))}function P0(){var t=wn.current;return t===null?!0:(xe&4194048)===xe?In===null:(xe&62914560)===xe||(xe&536870912)!==0?t===In:!1}function z0(){var t=xt.H;return xt.H=Au,t===null?Au:t}function I0(){var t=xt.A;return xt.A=Dx,t}function Wu(){ln=4,er||(xe&4194048)!==xe&&wn.current!==null||(Ls=!0),(nr&134217727)===0&&(kr&134217727)===0||We===null||ar(We,xe,li,!1)}function jh(t,n,a){var s=ze;ze|=2;var u=z0(),c=I0();(We!==t||xe!==n)&&(ku=null,Fs(t,n)),n=!1;var v=ln;t:do try{if(Fe!==0&&Se!==null){var T=Se,P=oi;switch(Fe){case 8:Kh(),v=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var j=Fe;if(Fe=0,oi=null,Hs(t,T,P,j),a&&Ls){v=0;break t}break;default:j=Fe,Fe=0,oi=null,Hs(t,T,P,j)}}Lx(),v=ln;break}catch(st){O0(t,st)}while(!0);return n&&t.shellSuspendCounter++,ga=Nr=null,ze=s,xt.H=u,xt.A=c,Se===null&&(We=null,xe=0,tu()),v}function Lx(){for(;Se!==null;)B0(Se)}function Ox(t,n){var a=ze;ze|=2;var s=z0(),u=I0();We!==t||xe!==n?(ku=null,Xu=q()+500,Fs(t,n)):Ls=Ba(t,n);t:do try{if(Fe!==0&&Se!==null){n=Se;var c=oi;e:switch(Fe){case 1:Fe=0,oi=null,Hs(t,n,c,1);break;case 2:case 9:if(Fg(c)){Fe=0,oi=null,F0(n);break}n=function(){Fe!==2&&Fe!==9||We!==t||(Fe=7),ta(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Fg(c)?(Fe=0,oi=null,F0(n)):(Fe=0,oi=null,Hs(t,n,c,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var T=Se;if(v?Dv(v):T.stateNode.complete){Fe=0,oi=null;var P=T.sibling;if(P!==null)Se=P;else{var j=T.return;j!==null?(Se=j,Zu(j)):Se=null}break e}}Fe=0,oi=null,Hs(t,n,c,5);break;case 6:Fe=0,oi=null,Hs(t,n,c,6);break;case 8:Kh(),ln=6;break t;default:throw Error(r(462))}}Px();break}catch(st){O0(t,st)}while(!0);return ga=Nr=null,xt.H=s,xt.A=u,ze=a,Se!==null?0:(We=null,xe=0,tu(),ln)}function Px(){for(;Se!==null&&!Bt();)B0(Se)}function B0(t){var n=t0(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?Zu(t):Se=n}function F0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=W_(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=W_(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:ih(n);var s=n;s===Tn&&(_e?(su(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(su(s),_e=!0));default:n0(a,n),n=Se=Cg(n,xa),n=t0(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?Zu(t):Se=n}function Hs(t,n,a,s){ga=Nr=null,ih(n),As=null,Go=0;var u=n.return;try{if(xx(t,u,n,a,xe)){ln=1,bu(t,Si(a,t.current)),Se=null;return}}catch(c){if(u!==null)throw Se=u,c;ln=1,bu(t,Si(a,t.current)),Se=null;return}n.flags&32768?(_e||s===1?t=!0:Ls||(xe&536870912)!==0?t=!1:(er=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),H0(n,t)):Zu(n)}function Zu(t){var n=t;do{if((n.flags&32768)!==0){H0(n,er);return}t=n.return;var a=bx(n.alternate,n,xa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);ln===0&&(ln=5)}function H0(t,n){do{var a=Rx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);ln=6,Se=null}function G0(t,n,a,s,u,c,v,T,P,j,st,_t){t.cancelPendingCommit=null;do Ku();while(an!==0);if((ze&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===We&&(Se=We=null,xe=0),qr=n,zi=t,$i=a,Zh=u,D0=s,zx(t,n,a,v,T,P,_t)}}function zx(t,n,a,s,u,c,v){var T=n.lanes|n.childLanes;if(Wh=T,T|=Uf,lf(t,a,T,s,u,c),zs=null,(a&335544064)===a?(Is=cx(t),s=10262):(Is=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Vx(Mt,function(){return td(),null})):(t.callbackNode=null,t.callbackPriority=0),Ou=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,u=Gt.p,Gt.p=2,c=ze,ze|=4;try{Cx(t,n,a)}finally{ze=c,Gt.p=u,xt.T=s}}an=1,Ou?Ps=lM(v,t.containerInfo,Is,Qh,Jh,Bx,$h,td,Ix):(Qh(),Jh(),$h())}function Ix(t){if(an!==0){var n=zi.onRecoverableError;n(t,{componentStack:null})}}function Bx(){an===3&&(an=0,M0(qr,zi),an=4)}function Qh(){if(an===1){an=0;var t=zi,n=qr,a=$i,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var u=Gt.p;Gt.p=2;var c=ze;ze|=4;try{$o=Iu=!1,y0(n,t,a),a=hd;var v=vg(t.containerInfo),T=a.focusedElem,P=a.selectionRange;if(v!==T&&T&&T.ownerDocument&&_g(T.ownerDocument.documentElement,T)){if(P!==null&&bf(T)){var j=P.start,st=P.end;if(st===void 0&&(st=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(st,T.value.length);else{var _t=T.ownerDocument||document,Z=_t&&_t.defaultView||window;if(Z.getSelection){var at=Z.getSelection(),Pt=T.textContent.length,Kt=Math.min(P.start,Pt),de=P.end===void 0?Kt:Math.min(P.end,Pt);!at.extend&&Kt>de&&(v=de,de=Kt,Kt=v);var K=gg(T,Kt),k=gg(T,de);if(K&&k&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),at.removeAllRanges(),Kt>de?(at.addRange(et),at.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),at.addRange(et))}}}}for(_t=[],at=T;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var gt=_t[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Zs=!!fd,hd=fd=null}finally{ze=c,Gt.p=u,xt.T=s}}t.current=n,an=2}}function Jh(){if(an===2){an=0;var t=zi,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=Gt.p;Gt.p=2;var u=ze;ze|=4;try{m0(t,n.alternate,n)}finally{ze=u,Gt.p=s,xt.T=a}}an=3}}function $h(){if(an===4||an===3){an=0;var t=Ps;Ps=null,fe();var n=zi,a=qr,s=$i,u=D0,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,qr=zi=null,V0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ir=null),J(s),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ye,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,c=Gt.p,Gt.p=2,xt.T=null;try{for(var v=n.onRecoverableError,T=0;T<u.length;T++){var P=u[T];v(P.value,{componentStack:P.stack})}}finally{xt.T=a,Gt.p=c}}if(u=zs,v=Is,Is=null,u!==null&&(zs=null,v===null&&(v=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(v),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Ku(),ta(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===qu?il++:(il=0,qu=n):(il=0,qu=null),al(0)}}function V0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bo(n)))}function Ku(){return Ps!==null&&(Ps.skipTransition(),Ps=null),Qh(),Jh(),$h(),td()}function td(){if(an!==5)return!1;var t=zi,n=Wh;Wh=0;var a=J($i),s=xt.T,u=Gt.p;try{Gt.p=32>a?32:a,xt.T=null,a=Zh,Zh=null;var c=zi,v=$i;if(an=0,qr=zi=null,$i=0,(ze&6)!==0)throw Error(r(331));var T=ze;if(ze|=4,R0(c.current),T0(c,c.current,v,a),ze=T,al(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ye,c)}catch{}return!0}finally{Gt.p=u,xt.T=s,V0(t,n)}}function X0(t,n,a){n=Si(a,n),n=_h(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(br(t,2),ta(t))}function He(t,n,a){if(t.tag===3)X0(t,t,a);else for(;n!==null;){if(n.tag===3){X0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){t=Si(a,t),a=F_(2),s=Ka(n,a,2),s!==null&&(H_(a,s,n,t),br(s,2),ta(s));break}}n=n.return}}function ed(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ux;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(qh=!0,u.add(a),t=Fx.bind(null,t,n,a),n.then(t,t))}function Fx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(xe&a)===a&&((ln===4||ln===3&&(xe&62914560)===xe&&300>q()-Vu)&&(ze&2)===0?Fs(t,0):Gu|=a,Os===xe&&(Os=0)),ta(t)}function k0(t,n){n===0&&(n=Xl()),t=wr(t,n),t!==null&&(br(t,n),ta(t))}function Hx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),k0(t,a)}function Gx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),k0(t,a)}function Vx(t,n){return te(t,n)}var Gs=null,Vs=null,nd=!1,ju=!1,id=!1,rr=0;function ta(t){t!==Vs&&t.next===null&&(Vs===null?Gs=Vs=t:Vs=Vs.next=t),ju=!0,nd||(nd=!0,kx())}function al(t,n){if(!id&&ju){id=!0;do for(var a=!1,s=Gs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var v=s.suspendedLanes,T=s.pingedLanes;c=(1<<31-Pn(42|t)+1)-1,c&=u&~(v&~T),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Z0(s,c))}else c=xe,c=Ar(s,s===We?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Ba(s,c)||(a=!0,Z0(s,c));s=s.next}while(a);id=!1}}function Xx(){q0()}function q0(){ju=nd=!1;var t=0;rr!==0&&eM()&&(t=rr);for(var n=q(),a=null,s=Gs;s!==null;){var u=s.next,c=Y0(s,n);c===0?(s.next=null,a===null?Gs=u:a.next=u,u===null&&(Vs=a)):(a=s,(t!==0||(c&3)!==0)&&(ju=!0)),s=u}an!==0&&an!==5||al(t),rr!==0&&(rr=0)}function Y0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var v=31-Pn(c),T=1<<v,P=u[v];P===-1?((T&a)===0||(T&s)!==0)&&(u[v]=of(T,n)):P<=n&&(t.expiredLanes|=T),c&=~T}if(n=We,a=xe,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Jt(s),J(a)){case 2:case 8:a=qt;break;case 32:a=Mt;break;case 268435456:a=Qt;break;default:a=Mt}return s=W0.bind(null,t),a=te(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Jt(s),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ku()&&t.callbackNode!==a)return null;var s=xe;return s=Ar(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(N0(t,s,n),Y0(t,q()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function Z0(t,n){if(Ku())return null;N0(t,n,!0)}function kx(){iM(function(){(ze&6)!==0?te(Ot,Xx):q0()})}function ad(){if(rr===0){var t=Pr;t===0&&(t=Mr,Mr<<=1,(Mr&261888)===0&&(Mr=256)),rr=t}return rr}function K0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(t)}function qx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=K0((u[Zt]||null).action),v=s.submitter;v&&(n=(n=v[Zt]||null)?K0(n.formAction):v.getAttribute("formAction"),n!==null&&(c=n,v=null));var T=new jl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var P=new FormData(u,v);hh(a,{pending:!0,data:P,method:u.method,action:c},null,P)}}else typeof c=="function"&&(T.preventDefault(),P=new FormData(u,v),hh(a,{pending:!0,data:P,method:u.method,action:c},c,P))},currentTarget:u}]})}}for(var rd=0;rd<Df.length;rd++){var sd=Df[rd],Yx=sd.toLowerCase(),Wx=sd[0].toUpperCase()+sd.slice(1);Ni(Yx,"on"+Wx)}Ni(yg,"onAnimationEnd"),Ni(xg,"onAnimationIteration"),Ni(Mg,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(nx,"onTransitionRun"),Ni(ix,"onTransitionStart"),Ni(ax,"onTransitionCancel"),Ni(Tg,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function j0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],P=T.instance,j=T.currentTarget;if(T=T.listener,P!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=j;try{c(u)}catch(st){$l(st)}u.currentTarget=null,c=P}else for(v=0;v<s.length;v++){if(T=s[v],P=T.instance,j=T.currentTarget,T=T.listener,P!==c&&u.isPropagationStopped())break t;c=T,u.currentTarget=j;try{c(u)}catch(st){$l(st)}u.currentTarget=null,c=P}}}}function Ee(t,n){var a=n[ee];a===void 0&&(a=n[ee]=new Set);var s=t+"__bubble";a.has(s)||(Q0(n,t,2,!1),a.add(s))}function od(t,n,a){var s=0;n&&(s|=4),Q0(a,t,s,n)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function ld(t){if(!t[Qu]){t[Qu]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||od(a,!1,t),od(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Qu]||(n[Qu]=!0,od("selectionchange",!1,n))}}function Q0(t,n,a,s){switch(Hv(n)){case 2:var u=HM;break;case 8:u=GM;break;default:u=Cd}a=u.bind(null,n,a,t),u=void 0,!gf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ud(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Pe(T),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){s=c=v;continue t}T=T.parentNode}}s=s.return}Qm(function(){var j=c,st=pf(a),_t=[];t:{var Z=Ag.get(t);if(Z!==void 0){var at=jl,Pt=t;switch(t){case"keypress":if(Zl(a)===0)break t;case"keydown":case"keyup":at=Ny;break;case"focusin":Pt="focus",at=Ef;break;case"focusout":Pt="blur",at=Ef;break;case"beforeblur":case"afterblur":at=Ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Iy;break;case yg:case xg:case Mg:at=My;break;case Tg:at=Fy;break;case"scroll":case"scrollend":at=vy;break;case"wheel":at=Gy;break;case"copy":case"cut":case"paste":at=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=ng;break;case"submit":at=Py;break;case"toggle":case"beforetoggle":at=Xy}var Kt=(n&4)!==0,de=!Kt&&(t==="scroll"||t==="scrollend"),K=Kt?Z!==null?Z+"Capture":null:Z;Kt=[];for(var k=j,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||K===null||(gt=Ro(k,K),gt!=null&&Kt.push(sl(k,gt,et))),de)break;k=k.return}0<Kt.length&&(Z=new at(Z,Pt,null,a,st),_t.push({event:Z,listeners:Kt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",at&&a!==df&&(Pt=a.relatedTarget||a.fromElement)&&(Pe(Pt)||Pt[ae]))break t;(Z||at)&&(Pt=st.window===st?st:(at=st.ownerDocument)?at.defaultView||at.parentWindow:window,Z?(at=a.relatedTarget||a.toElement,Z=j,at=at?Pe(at):null,at!==null&&(de=f(at),Kt=at.tag,at!==de||Kt!==5&&Kt!==27&&Kt!==6)&&(at=null)):(Z=null,at=j),Z!==at&&(Kt=tg,gt="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=ng,gt="onPointerLeave",K="onPointerEnter",k="pointer"),de=Z==null?Pt:vn(Z),et=at==null?Pt:vn(at),Pt=new Kt(gt,k+"leave",Z,a,st),Pt.target=de,Pt.relatedTarget=et,gt=null,Pe(st)===j&&(Kt=new Kt(K,k+"enter",at,a,st),Kt.target=et,Kt.relatedTarget=de,gt=Kt),de=gt,Kt=Z&&at?z(Z,at,Kx):null,Z!==null&&J0(_t,Pt,Z,Kt,!1),at!==null&&de!==null&&J0(_t,de,at,Kt,!0)))}t:{if(Z=j?vn(j):window,at=Z.nodeName&&Z.nodeName.toLowerCase(),at==="select"||at==="input"&&Z.type==="file")var kt=cg;else if(lg(Z))if(fg)kt=$y;else{kt=Qy;var Me=jy}else at=Z.nodeName,!at||at.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?j&&hf(j.elementType)&&(kt=cg):kt=Jy;if(kt&&(kt=kt(t,j))){ug(_t,kt,a,st);break t}Me&&Me(t,Z,j)}switch(Me=j?vn(j):window,t){case"focusin":(lg(Me)||Me.contentEditable==="true")&&(gs=Me,Rf=j,Po=null);break;case"focusout":Po=Rf=gs=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,Sg(_t,a,st);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Sg(_t,a,st)}var $t;if(xf)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ms?sg(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(ig&&a.locale!=="ko"&&(ms||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ms&&($t=Jm()):(Ha=st,_f="value"in Ha?Ha.value:Ha.textContent,ms=!0)),Me=Ju(j,oe),0<Me.length&&(oe=new eg(oe,t,null,a,st),_t.push({event:oe,listeners:Me}),$t?oe.data=$t:($t=og(a),$t!==null&&(oe.data=$t)))),($t=qy?Yy(t,a):Wy(t,a))&&(oe=Ju(j,"onBeforeInput"),0<oe.length&&(Me=new eg("onBeforeInput","beforeinput",null,a,st),_t.push({event:Me,listeners:oe}),Me.data=$t)),qx(_t,t,j,a,st)}j0(_t,n)})}function sl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ju(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Ro(t,a),u!=null&&s.unshift(sl(t,u,c)),u=Ro(t,n),u!=null&&s.push(sl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function Kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J0(t,n,a,s,u){for(var c=n._reactName,v=[];a!==null&&a!==s;){var T=a,P=T.alternate,j=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||j===null||(P=j,u?(j=Ro(a,c),j!=null&&v.unshift(sl(a,j,P))):u||(j=Ro(a,c),j!=null&&v.push(sl(a,j,P)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var jx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Qx,"")}function tv(t,n){return n=$0(n),$0(t)===n}function Ge(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||hs(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&hs(t,""+s);else return;break;case"className":ql(t,"class",s);break;case"tabIndex":ql(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(t,a,s);break;case"style":Km(t,s,c);return;case"data":if(n!=="object"){ql(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Yl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Yl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ki);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Yl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),kl(t,"popover",s);break;case"xlinkActuate":ca(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ca(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ca(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ca(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ca(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ca(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ca(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ca(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ca(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=gy.get(a)||a,kl(t,a,s);else return}Ne=!0}function cd(t,n,a,s,u,c){switch(a){case"style":Km(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")hs(t,s);else if(typeof s=="number"||typeof s=="bigint")hs(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Zt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}Ne=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):kl(t,a,s)}return}Ne=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var v=a[c];if(v!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,c,v,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=c=v=u=null,P=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":u=st;break;case"type":v=st;break;case"checked":P=st;break;case"defaultChecked":j=st;break;case"value":c=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ge(t,n,s,st,a,null)}}qm(t,c,T,P,j,v,u,!1);return;case"select":Ee("invalid",t),s=v=c=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":c=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Ge(t,n,u,T,a,null)}n=c,a=v,t.multiple=!!s,n!=null?fs(t,!!s,n,!1):a!=null&&fs(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),c=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":c=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ge(t,n,v,T,a,null)}Wm(t,s,u,c);return;case"option":for(P in a)a.hasOwnProperty(P)&&(s=a[P],s!=null)&&(P==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,P,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<rl.length;s++)Ee(rl[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,j,s,a,null)}return;default:if(hf(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&cd(t,n,st,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ge(t,n,T,s,a,null))}var Jx={};function $x(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,v=null,T=null,P=null,j=null,st=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=_t;default:s.hasOwnProperty(at)||Ge(t,n,at,null,s,_t)}}for(var Z in s){var at=s[Z];if(_t=a[Z],s.hasOwnProperty(Z)&&(at!=null||_t!=null))switch(Z){case"type":at!==_t&&(Ne=!0),c=at;break;case"name":at!==_t&&(Ne=!0),u=at;break;case"checked":at!==_t&&(Ne=!0),j=at;break;case"defaultChecked":at!==_t&&(Ne=!0),st=at;break;case"value":at!==_t&&(Ne=!0),v=at;break;case"defaultValue":at!==_t&&(Ne=!0),T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==_t&&Ge(t,n,Z,at,s,_t)}}cf(t,v,T,P,j,st,c,u);return;case"select":at=v=T=Z=null;for(c in a)if(P=a[c],a.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":at=P;default:s.hasOwnProperty(c)||Ge(t,n,c,null,s,P)}for(u in s)if(c=s[u],P=a[u],s.hasOwnProperty(u)&&(c!=null||P!=null))switch(u){case"value":c!==P&&(Ne=!0),Z=c;break;case"defaultValue":c!==P&&(Ne=!0),T=c;break;case"multiple":c!==P&&(Ne=!0),v=c;default:c!==P&&Ge(t,n,u,c,s,P)}n=T,a=v,s=at,Z!=null?fs(t,!!a,Z,!1):!!s!=!!a&&(n!=null?fs(t,!!a,n,!0):fs(t,!!a,a?[]:"",!1));return;case"textarea":at=Z=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,n,T,null,s,u)}for(v in s)if(u=s[v],c=a[v],s.hasOwnProperty(v)&&(u!=null||c!=null))switch(v){case"value":u!==c&&(Ne=!0),Z=u;break;case"defaultValue":u!==c&&(Ne=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Ge(t,n,v,u,s,c)}Ym(t,Z,at);return;case"option":for(var Pt in a)Z=a[Pt],a.hasOwnProperty(Pt)&&Z!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Ge(t,n,Pt,null,s,Z));for(P in s)Z=s[P],at=a[P],s.hasOwnProperty(P)&&Z!==at&&(Z!=null||at!=null)&&(P==="selected"?(Z!==at&&(Ne=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):Ge(t,n,P,Z,s,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)Z=a[Kt],a.hasOwnProperty(Kt)&&Z!=null&&!s.hasOwnProperty(Kt)&&Ge(t,n,Kt,null,s,Z);for(j in s)if(Z=s[j],at=a[j],s.hasOwnProperty(j)&&Z!==at&&(Z!=null||at!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:Ge(t,n,j,Z,s,at)}return;default:if(hf(n)){for(var de in a)Z=a[de],a.hasOwnProperty(de)&&Z!==void 0&&!s.hasOwnProperty(de)&&cd(t,n,de,void 0,s,Z);for(st in s)Z=s[st],at=a[st],!s.hasOwnProperty(st)||Z===at||Z===void 0&&at===void 0||cd(t,n,st,Z,s,at);return}}for(var K in a)Z=a[K],a.hasOwnProperty(K)&&Z!=null&&!s.hasOwnProperty(K)&&Ge(t,n,K,null,s,Z);for(_t in s)Z=s[_t],at=a[_t],!s.hasOwnProperty(_t)||Z===at||Z==null&&at==null||Ge(t,n,_t,Z,s,at)}function ev(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,v=u.initiatorType,T=u.duration;if(c&&T&&ev(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],j=P.startTime;if(j>T)break;var st=P.transferSize,_t=P.initiatorType;st&&ev(_t)&&(P=P.responseEnd,v+=st*(P<T?1:(T-j)/(P-j)))}if(--s,n+=8*(c+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fd=null,hd=null;function ol(t){return t.nodeType===9?t:t.ownerDocument}function nv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function av(t,n,a,s){return a=ol(a).createElement(t),a[Lt]=s,a[Zt]=n,Nn(a,t,n),Ue(a),a}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function eM(){var t=window.event;return t&&t.type==="popstate"?t===pd?!1:(pd=t,!0):(pd=null,!1)}var md=typeof setTimeout=="function"?setTimeout:void 0,nM=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,sv=typeof requestAnimationFrame=="function"?requestAnimationFrame:md,iM=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(aM)}:md;function aM(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function ov(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Ks(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Md(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Md(a);for(var c=a.firstChild;c;){var v=c.nextSibling,T=c.nodeName;c[Oe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=v}}else a==="body"&&Md(t.ownerDocument.body);a=u}while(a);Ks(n)}function lv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function uv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function cv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function rM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function gd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return rM(n,a,t)}function sM(t){return t.documentElement.clientHeight}function oM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function lM(t,n,a,s,u,c,v,T,P){var j=n.nodeType===9?n:n.ownerDocument;try{var st=j.startViewTransition({update:function(){var Z=j.defaultView,at=Z.navigation&&Z.navigation.transition,Pt=j.fonts.status;s();var Kt=[];if(Pt==="loaded"&&(sM(j),j.fonts.status==="loading"&&Kt.push(j.fonts.ready)),Pt=Kt.length,t!==null)for(var de=t.suspenseyImages,K=0,k=0;k<de.length;k++){var et=de[k];if(!et.complete){var gt=et.getBoundingClientRect();if(0<gt.bottom&&0<gt.right&&gt.top<Z.innerHeight&&gt.left<Z.innerWidth){if(K+=Uv(et),K>ec){Kt.length=Pt;break}et=new Promise(oM.bind(et)),Kt.push(et)}}}if(0<Kt.length)return Z=Promise.race([Promise.all(Kt),new Promise(function(kt){return setTimeout(kt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,Z]):Z).then(c,c);if(u(),at)return at.finished.then(c,c);c()},types:a});j.__reactViewTransition=st;var _t=[];return st.ready.then(function(){for(var Z=j.documentElement.getAnimations({subtree:!0}),at=0;at<Z.length;at++){var Pt=Z[at],Kt=Pt.effect,de=Kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){_t.push(Pt),Pt=Kt.getKeyframes();for(var K=de=void 0,k=!0,et=0;et<Pt.length;et++){var gt=Pt[et],kt=gt.width;if(de===void 0)de=kt;else if(de!==kt){k=!1;break}if(kt=gt.height,K===void 0)K=kt;else if(K!==kt){k=!1;break}delete gt.width,delete gt.height,gt.transform==="none"&&delete gt.transform}k&&de!==void 0&&K!==void 0&&(Kt.setKeyframes(Pt),k=getComputedStyle(Kt.target,Kt.pseudoElement),k.width!==de||k.height!==K)&&(k=Pt[0],k.width=de,k.height=K,k=Pt[Pt.length-1],k.width=de,k.height=K,Kt.setKeyframes(Pt))}}v()},function(Z){j.__reactViewTransition===st&&(j.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&P(Z)}finally{s(),u(),v()}}),st.finished.finally(function(){for(var Z=0;Z<_t.length;Z++)_t[Z].cancel();j.__reactViewTransition===st&&(j.__reactViewTransition=null),T()}),st}catch{return s(),u(),v(),null}}function Yr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Yr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Yr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Yr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function fv(t){return{name:t,group:new Yr("group",t),imagePair:new Yr("image-pair",t),old:new Yr("old",t),new:new Yr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(dv(c,t,n,a)===-1){var v=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(P){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),s!==null&&(u=v.removeEventListener.bind(v,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Xs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),p(this._fragmentFiber.child,!1,uM,t,T,s)}this._eventListeners=c}};function uM(t,n,a,s){return y(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=dv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Xs(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,cM,t,a,u),s.splice(n,1),c!==null&&c()}};function cM(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function Xs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function hv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function dv(t,n,a,s){if(t.length===0)return-1;s=hv(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&hv(c.optionsOrUseCapture)===s)return u}return-1}ci.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Xs(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Xs(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){p(this._fragmentFiber.child,!0,pv,t,void 0,void 0)};function pv(t,n){return t.tag===6?!1:(t=y(t),xM(t,n))}ci.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,_d,n,void 0,void 0);for(var a=n.length-1;0<=a&&!pv(n[a],t);a--);};function _d(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=ol(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,fM,t,void 0,void 0))};function fM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,hM,t,void 0,void 0)};function hM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,dM,t,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var s=Ii[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ii[n++]=s}Ii.length=n}};function dM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ii=[],vd=!1;function pM(t,n,a){Ii.push({fragmentInstance:t,observer:n,instance:a}),vd||(vd=!0,MM(function(){vd=!1;var s=Ii;Ii=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,mM,t,void 0,void 0),t};function mM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,_d,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=M(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=x(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),P=v&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&c&&v&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||P||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||gM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function gM(t,n,a,s,u){var c=Pe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=z(a,c,B),n===null?n=!1:(p(n,!0,N,c,a),c=E,E=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=z(s,c,B),n===null?n=!1:(p(n,!0,R,c,s),c=E,U=E=null,n=c!==null)),n):!1}function mv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,_d,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=M(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),mv(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=y(u),mv(u,a)):y(u).scrollIntoView(t),s+=a?-1:1}};function _M(t,n){return t=y(t),gv(t,n),!1}function gv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function _v(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Xs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var v=0,T=0;T<Ii.length;T++){var P=Ii[T];(P.fragmentInstance!==n||P.observer!==c||P.instance!==t)&&(Ii[v++]=P)}Ii.length=v,c.observe(t)}),gv(t,n))}function vM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Xs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?pM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function SM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Oe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function EM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function vv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function Ed(t){return t.data==="$?"||t.data==="$~"}function yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xd=null;function Sv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ev(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function MM(t){sv(function(){sv(function(n){return t(n)})})}function yv(t,n,a){switch(n=ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ge(t,n,s,null,Jx,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ki&&(t.onclick=null),ne(t)}function Md(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var Ai=new Map,Mv=new Set;function ll(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Gt.d;Gt.d={f:TM,r:AM,D:bM,C:RM,L:CM,m:wM,X:UM,S:DM,M:NM};function TM(){var t=Ma.f(),n=Yu();return t||n}function AM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?A_(n):Ma.r(t)}var ks=typeof document>"u"?null:document;function Tv(t,n,a){var s=ks;if(s&&typeof n=="string"&&n){var u=_i(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mv.has(u)||(Mv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Nn(n,"link",t),Ue(n),s.head.appendChild(n)))}}function bM(t){Ma.D(t),Tv("dns-prefetch",t,null)}function RM(t,n){Ma.C(t,n),Tv("preconnect",t,n)}function CM(t,n,a){Ma.L(t,n,a);var s=ks;if(s&&t&&n){var u='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_i(a.imageSizes)+'"]')):u+='[href="'+_i(t)+'"]';var c=u;switch(n){case"style":c=qs(t);break;case"script":c=Ys(t)}if(!(Ai.has(c)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ul(c))||n==="script"&&s.querySelector(cl(c))))){var v=s.createElement("link");Nn(v,"link",t),n==="style"&&(v[De]=!0,v.onload=v.onerror=function(){Fa(v)}),Ue(v),s.head.appendChild(v)}}}function wM(t,n){Ma.m(t,n);var a=ks;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_i(s)+'"][href="'+_i(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ys(t)}if(!Ai.has(c)&&(t=O({rel:"modulepreload",href:t},n),Ai.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(c)))return}s=a.createElement("link"),Nn(s,"link",t),Ue(s),a.head.appendChild(s)}}}function DM(t,n,a){Ma.S(t,n,a);var s=ks;if(s&&t){var u=ni(s).hoistableStyles,c=qs(t);n=n||"default";var v=u.get(c);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(ul(c)))T.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(c))&&Td(t,a);var P=v=s.createElement("link");Ue(P),Nn(P,"link",t),P._p=new Promise(function(j,st){P.onload=j,P.onerror=st}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$u(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(c,v)}}}function UM(t,n){Ma.X(t,n);var a=ks;if(a&&t){var s=ni(a).hoistableScripts,u=Ys(t),c=s.get(u);c||(c=a.querySelector(cl(u)),c||(t=O({src:t,async:!0},n),(n=Ai.get(u))&&Ad(t,n),c=a.createElement("script"),Ue(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function NM(t,n){Ma.M(t,n);var a=ks;if(a&&t){var s=ni(a).hoistableScripts,u=Ys(t),c=s.get(u);c||(c=a.querySelector(cl(u)),c||(t=O({src:t,async:!0,type:"module"},n),(n=Ai.get(u))&&Ad(t,n),c=a.createElement("script"),Ue(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Av(t,n,a,s){var u=(u=Re.current)?ll(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qs(a.href),n=ni(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qs(a.href);var c=ni(u).hoistableStyles,v=c.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,v),(c=u.querySelector(ul(t)))?c._p||(v.instance=c,v.state.loading=5):(c=Ai.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,c)),LM(u,t,c,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ys(a),n=ni(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function qs(t){return'href="'+_i(t)+'"'}function ul(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function LM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[De]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[De]=!0,n.onload=n.onerror=Fa.bind(null,n),Nn(n,"link",a),Ue(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ys(t){return'[src="'+_i(t)+'"]'}function cl(t){return"script[async]"+t}function Rv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+_i(a.href)+'"]');if(s)return n.instance=s,Ue(s),s;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ue(s),Nn(s,"style",u),$u(s,a.precedence,t),n.instance=s;case"stylesheet":u=qs(a.href);var c=t.querySelector(ul(u));if(c)return n.state.loading|=4,n.instance=c,Ue(c),c;s=bv(a),(u=Ai.get(u))&&Td(s,u),c=(t.ownerDocument||t).createElement("link"),Ue(c);var v=c;return v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),Nn(c,"link",s),n.state.loading|=4,$u(c,a.precedence,t),n.instance=c;case"script":return c=Ys(a.src),(u=t.querySelector(cl(c)))?(n.instance=u,Ue(u),u):(s=a,(u=Ai.get(c))&&(s=O({},a),Ad(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ue(u),Nn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$u(s,a.precedence,t));return n.instance}function $u(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)c=T;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function Cv(t,n,a){if(tc===null){var s=new Map,u=tc=new Map;u.set(a,s)}else u=tc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Oe]||c[Lt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(c):s.set(v,[c])}}return s}function bd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function OM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Dv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Uv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Nv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Uv(n),t.suspenseyImages.push(n)),t=IM.bind(t),n.decode().then(t,t))}function PM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=qs(s.href),c=n.querySelector(ul(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=fl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ue(c);return}c=n.ownerDocument||n,s=bv(s),(u=Ai.get(u))&&Td(s,u),c=c.createElement("link"),Ue(c);var v=c;v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),Nn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ec=0;function zM(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ec===0&&(ec=62500*tM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ec?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Lv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ic(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function fl(){this.count--,Lv(this)}function IM(){this.imgCount--,Lv(this)}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(BM,t),nc=null,fl.call(t))}function BM(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var s=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var v=u[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),c=a.get(v)||s,c===s&&a.set(null,u),a.set(v,u),this.count++,s=fl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ws={$$typeof:V,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function FM(t,n,a,s,u,c,v,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.hiddenUpdates=bo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ov(t,n,a,s,u,c,v,T,P,j,st,_t){return t=new FM(t,n,a,v,P,j,st,_t,T),n=1,c===!0&&(n|=24),c=Zn(3,null,null,n),t.current=c,c.stateNode=t,n=Gf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},qf(c),t}function Pv(t){return t?(t=Ss,t):Ss}function zv(t,n,a,s,u,c){u=Pv(u),s.context===null?s.context=u:s.pendingContext=u,s=Za(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ka(t,s,n),a!==null&&(Jn(a,t,n),Vo(a,t,n))}function Iv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rd(t,n){Iv(t,n),(t=t.alternate)&&Iv(t,n)}function Bv(t){if(t.tag===13||t.tag===31){var n=wr(t,67108864);n!==null&&Jn(n,t,67108864),Rd(t,67108864)}}function Fv(t){if(t.tag===13||t.tag===31){var n=ui();n=ht(n);var a=wr(t,n);a!==null&&Jn(a,t,n),Rd(t,n)}}var Zs=!0;function HM(t,n,a,s){var u=xt.T;xt.T=null;var c=Gt.p;try{Gt.p=2,Cd(t,n,a,s)}finally{Gt.p=c,xt.T=u}}function GM(t,n,a,s){var u=xt.T;xt.T=null;var c=Gt.p;try{Gt.p=8,Cd(t,n,a,s)}finally{Gt.p=c,xt.T=u}}function Cd(t,n,a,s){if(Zs){var u=wd(s);if(u===null)ud(t,n,s,ac,a),Gv(t,s);else if(XM(u,t,n,a,s))s.stopPropagation();else if(Gv(t,s),n&4&&-1<VM.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=gi(c.pendingLanes);if(v!==0){var T=c;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var P=1<<31-Pn(v);T.entanglements[1]|=P,v&=~P}ta(c),(ze&6)===0&&(Xu=q()+500,al(0))}}break;case 31:case 13:T=wr(c,2),T!==null&&Jn(T,c,2),Yu(),Rd(c,2)}if(c=wd(s),c===null&&ud(t,n,s,ac,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else ud(t,n,s,null,a)}}function wd(t){return t=pf(t),Dd(t)}var ac=null;function Dd(t){if(ac=null,t=Pe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ot:return 2;case qt:return 8;case Mt:case St:return 32;case Qt:return 268435456;default:return 32}default:return 32}}var Ud=!1,or=null,lr=null,ur=null,hl=new Map,dl=new Map,cr=[],VM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gv(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":hl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function pl(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&Bv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function XM(t,n,a,s,u){switch(n){case"focusin":return or=pl(or,t,n,a,s,u),!0;case"dragenter":return lr=pl(lr,t,n,a,s,u),!0;case"mouseover":return ur=pl(ur,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return hl.set(c,pl(hl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,dl.set(c,pl(dl.get(c)||null,t,n,a,s,u)),!0}return!1}function Vv(t){var n=Pe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ft(t.priority,function(){Fv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ft(t.priority,function(){Fv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);df=s,a.target.dispatchEvent(s),df=null}else return n=ge(a),n!==null&&Bv(n),t.blockedOn=a,!1;n.shift()}return!0}function Xv(t,n,a){rc(t)&&a.delete(n)}function kM(){Ud=!1,or!==null&&rc(or)&&(or=null),lr!==null&&rc(lr)&&(lr=null),ur!==null&&rc(ur)&&(ur=null),hl.forEach(Xv),dl.forEach(Xv)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ud||(Ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kM)))}var oc=null;function kv(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Dd(s||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,hh(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Ks(t){function n(P){return sc(P,t)}or!==null&&sc(or,t),lr!==null&&sc(lr,t),ur!==null&&sc(ur,t),hl.forEach(n),dl.forEach(n);for(var a=0;a<cr.length;a++){var s=cr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Vv(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],v=u[Zt]||null;if(typeof c=="function")v||kv(a);else if(v){var T=null;if(c&&c.hasAttribute("formAction")){if(u=c,v=c[Zt]||null)T=v.formAction;else if(Dd(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),kv(a)}}}function qv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nd(t){this._internalRoot=t}lc.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();zv(a,s,t,n,null,null)},lc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;zv(t.current,2,null,t,null,null),Yu(),n[ae]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&Vv(t)}};var Yv=e.version;if(Yv!=="19.3.1")throw Error(r(527,Yv,"19.3.1"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var qM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ye=uc.inject(qM),nn=uc}catch{}}return ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=P_,c=z_,v=I_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ov(t,1,!1,null,null,a,s,null,u,c,v,qv),t[ae]=n.current,ld(t),new Nd(n)},ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=P_,v=z_,T=I_,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Ov(t,1,!0,n,a??null,s,u,P,c,v,T,qv),n.context=Pv(null),a=n.current,s=ui(),s=ht(s),u=Za(s),u.callback=null,Ka(a,u,s),a=s,n.current.lanes=a,br(n,a),ta(n),t[ae]=n.current,ld(t),new lc(n)},ml.version="19.3.1",ml}var tS;function tT(){if(tS)return Od.exports;tS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Od.exports=$M(),Od.exports}var eT=tT();const wm="180",nT=0,eS=1,iT=2,gE=1,aT=2,Da=3,yr=0,ti=1,Ua=2,Sr=0,ho=1,nS=2,iS=3,aS=4,rT=5,es=100,sT=101,oT=102,lT=103,uT=104,cT=200,fT=201,hT=202,dT=203,Sp=204,Ep=205,pT=206,mT=207,gT=208,_T=209,vT=210,ST=211,ET=212,yT=213,xT=214,yp=0,xp=1,Mp=2,mo=3,Tp=4,Ap=5,bp=6,Rp=7,_E=0,MT=1,TT=2,Er=0,AT=1,bT=2,RT=3,CT=4,wT=5,DT=6,UT=7,vE=300,go=301,_o=302,Cp=303,wp=304,nf=306,Dp=1e3,as=1001,Up=1002,pi=1003,NT=1004,cc=1005,wi=1006,Bd=1007,rs=1008,Pa=1009,SE=1010,EE=1011,Rl=1012,Dm=1013,ss=1014,La=1015,zl=1016,Um=1017,Nm=1018,Cl=1020,yE=35902,xE=35899,ME=1021,TE=1022,Di=1023,wl=1026,Dl=1027,AE=1028,Lm=1029,bE=1030,Om=1031,Pm=1033,zc=33776,Ic=33777,Bc=33778,Fc=33779,Np=35840,Lp=35841,Op=35842,Pp=35843,zp=36196,Ip=37492,Bp=37496,Fp=37808,Hp=37809,Gp=37810,Vp=37811,Xp=37812,kp=37813,qp=37814,Yp=37815,Wp=37816,Zp=37817,Kp=37818,jp=37819,Qp=37820,Jp=37821,$p=36492,tm=36494,em=36495,nm=36283,im=36284,am=36285,rm=36286,LT=3200,OT=3201,PT=0,zT=1,vr="",di="srgb",vo="srgb-linear",Xc="linear",ke="srgb",js=7680,rS=519,IT=512,BT=513,FT=514,RE=515,HT=516,GT=517,VT=518,XT=519,sS=35044,oS="300 es",aa=2e3,kc=2001;class Mo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=Math.PI/180,sm=180/Math.PI;function Il(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ae(o,e,i){return Math.max(e,Math.min(i,o))}function kT(o,e){return(o%e+e)%e}function Hd(o,e,i){return(1-i)*o+i*e}function gl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $n(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,i=0){Ye.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ae(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let _=r[l+0],g=r[l+1],m=r[l+2],p=r[l+3];const S=f[h+0],x=f[h+1],M=f[h+2],A=f[h+3];if(d===0){e[i+0]=_,e[i+1]=g,e[i+2]=m,e[i+3]=p;return}if(d===1){e[i+0]=S,e[i+1]=x,e[i+2]=M,e[i+3]=A;return}if(p!==A||_!==S||g!==x||m!==M){let y=1-d;const E=_*S+g*x+m*M+p*A,U=E>=0?1:-1,N=1-E*E;if(N>Number.EPSILON){const B=Math.sqrt(N),z=Math.atan2(B,E*U);y=Math.sin(y*z)/B,d=Math.sin(d*z)/B}const R=d*U;if(_=_*y+S*R,g=g*y+x*R,m=m*y+M*R,p=p*y+A*R,y===1-d){const B=1/Math.sqrt(_*_+g*g+m*m+p*p);_*=B,g*=B,m*=B,p*=B}}e[i]=_,e[i+1]=g,e[i+2]=m,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],_=r[l+1],g=r[l+2],m=r[l+3],p=f[h],S=f[h+1],x=f[h+2],M=f[h+3];return e[i]=d*M+m*p+_*x-g*S,e[i+1]=_*M+m*S+g*p-d*x,e[i+2]=g*M+m*x+d*S-_*p,e[i+3]=m*M-d*p-_*S-g*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,g=d(r/2),m=d(l/2),p=d(f/2),S=_(r/2),x=_(l/2),M=_(f/2);switch(h){case"XYZ":this._x=S*m*p+g*x*M,this._y=g*x*p-S*m*M,this._z=g*m*M+S*x*p,this._w=g*m*p-S*x*M;break;case"YXZ":this._x=S*m*p+g*x*M,this._y=g*x*p-S*m*M,this._z=g*m*M-S*x*p,this._w=g*m*p+S*x*M;break;case"ZXY":this._x=S*m*p-g*x*M,this._y=g*x*p+S*m*M,this._z=g*m*M+S*x*p,this._w=g*m*p-S*x*M;break;case"ZYX":this._x=S*m*p-g*x*M,this._y=g*x*p+S*m*M,this._z=g*m*M-S*x*p,this._w=g*m*p+S*x*M;break;case"YZX":this._x=S*m*p+g*x*M,this._y=g*x*p+S*m*M,this._z=g*m*M-S*x*p,this._w=g*m*p-S*x*M;break;case"XZY":this._x=S*m*p-g*x*M,this._y=g*x*p-S*m*M,this._z=g*m*M+S*x*p,this._w=g*m*p+S*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],_=i[9],g=i[2],m=i[6],p=i[10],S=r+d+p;if(S>0){const x=.5/Math.sqrt(S+1);this._w=.25/x,this._x=(m-_)*x,this._y=(f-g)*x,this._z=(h-l)*x}else if(r>d&&r>p){const x=2*Math.sqrt(1+r-d-p);this._w=(m-_)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(f+g)/x}else if(d>p){const x=2*Math.sqrt(1+d-r-p);this._w=(f-g)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(_+m)/x}else{const x=2*Math.sqrt(1+p-r-d);this._w=(h-l)/x,this._x=(f+g)/x,this._y=(_+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,_=i._y,g=i._z,m=i._w;return this._x=r*m+h*d+l*g-f*_,this._y=l*m+h*_+f*d-r*g,this._z=f*m+h*g+r*_-l*d,this._w=h*m-r*d-l*_-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*f+i*this._z,this.normalize(),this}const g=Math.sqrt(_),m=Math.atan2(g,d),p=Math.sin((1-i)*m)/g,S=Math.sin(i*m)/g;return this._w=h*p+this._w*S,this._x=r*p+this._x*S,this._y=l*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class dt{constructor(e=0,i=0,r=0){dt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(lS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(lS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,_=e.w,g=2*(h*l-d*r),m=2*(d*i-f*l),p=2*(f*r-h*i);return this.x=i+_*g+h*p-d*m,this.y=r+_*m+d*g-f*p,this.z=l+_*p+f*m-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,_=i.z;return this.x=l*_-f*d,this.y=f*h-r*_,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ae(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new dt,lS=new Bl;class pe{constructor(e,i,r,l,f,h,d,_,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,g)}set(e,i,r,l,f,h,d,_,g){const m=this.elements;return m[0]=e,m[1]=l,m[2]=d,m[3]=i,m[4]=f,m[5]=_,m[6]=r,m[7]=h,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],_=r[6],g=r[1],m=r[4],p=r[7],S=r[2],x=r[5],M=r[8],A=l[0],y=l[3],E=l[6],U=l[1],N=l[4],R=l[7],B=l[2],z=l[5],O=l[8];return f[0]=h*A+d*U+_*B,f[3]=h*y+d*N+_*z,f[6]=h*E+d*R+_*O,f[1]=g*A+m*U+p*B,f[4]=g*y+m*N+p*z,f[7]=g*E+m*R+p*O,f[2]=S*A+x*U+M*B,f[5]=S*y+x*N+M*z,f[8]=S*E+x*R+M*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],m=e[8];return i*h*m-i*d*g-r*f*m+r*d*_+l*f*g-l*h*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],m=e[8],p=m*h-d*g,S=d*_-m*f,x=g*f-h*_,M=i*p+r*S+l*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=p*A,e[1]=(l*g-m*r)*A,e[2]=(d*r-l*h)*A,e[3]=S*A,e[4]=(m*i-l*_)*A,e[5]=(l*f-d*i)*A,e[6]=x*A,e[7]=(r*_-g*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const _=Math.cos(f),g=Math.sin(f);return this.set(r*_,r*g,-r*(_*h+g*d)+h+e,-l*g,l*_,-l*(-g*h+_*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vd.makeScale(e,i)),this}rotate(e){return this.premultiply(Vd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new pe;function CE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qT(){const o=qc("canvas");return o.style.display="block",o}const uS={};function Ul(o){o in uS||(uS[o]=!0,console.warn(o))}function YT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const cS=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fS=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WT(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vr?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:cS,fromXYZ:fS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:cS,fromXYZ:fS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Le=WT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qs;class ZT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=qc("canvas")),Qs.width=e.width,Qs.height=e.height;const l=Qs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Oa(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Oa(i[r]/255)*255):i[r]=Oa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KT=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(Xd(l[h].image)):f.push(Xd(l[h]))}else f=Xd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jT=0;const kd=new dt;class Gn extends Mo{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=as,l=as,f=wi,h=rs,d=Di,_=Pa,g=Gn.DEFAULT_ANISOTROPY,m=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=Il(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=_,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dp:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dp:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=vE;Gn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,r=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,g=_[0],m=_[4],p=_[8],S=_[1],x=_[5],M=_[9],A=_[2],y=_[6],E=_[10];if(Math.abs(m-S)<.01&&Math.abs(p-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+S)<.1&&Math.abs(p+A)<.1&&Math.abs(M+y)<.1&&Math.abs(g+x+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(g+1)/2,R=(x+1)/2,B=(E+1)/2,z=(m+S)/4,O=(p+A)/4,G=(M+y)/4;return N>R&&N>B?N<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(N),l=z/r,f=O/r):R>B?R<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(R),r=z/l,f=G/l):B<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(B),r=O/f,l=G/f),this.set(r,l,f,i),this}let U=Math.sqrt((y-M)*(y-M)+(p-A)*(p-A)+(S-m)*(S-m));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(p-A)/U,this.z=(S-m)/U,this.w=Math.acos((g+x+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this.w=Ae(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this.w=Ae(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QT extends Mo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Gn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends QT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class wE extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JT extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl{constructor(e=new dt(1/0,1/0,1/0),i=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Bi):Bi.fromBufferAttribute(f,h),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),hc.subVectors(this.max,_l),Js.subVectors(e.a,_l),$s.subVectors(e.b,_l),to.subVectors(e.c,_l),hr.subVectors($s,Js),dr.subVectors(to,$s),Wr.subVectors(Js,to);let i=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Wr.z,Wr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Wr.z,0,-Wr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Wr.y,Wr.x,0];return!qd(i,Js,$s,to,hc)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,Js,$s,to,hc))?!1:(dc.crossVectors(hr,dr),i=[dc.x,dc.y,dc.z],qd(i,Js,$s,to,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],Bi=new dt,fc=new Fl,Js=new dt,$s=new dt,to=new dt,hr=new dt,dr=new dt,Wr=new dt,_l=new dt,hc=new dt,dc=new dt,Zr=new dt;function qd(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Zr.fromArray(o,f);const d=l.x*Math.abs(Zr.x)+l.y*Math.abs(Zr.y)+l.z*Math.abs(Zr.z),_=e.dot(Zr),g=i.dot(Zr),m=r.dot(Zr);if(Math.max(-Math.max(_,g,m),Math.min(_,g,m))>d)return!1}return!0}const $T=new Fl,vl=new dt,Yd=new dt;class Im{constructor(e=new dt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):$T.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Yd)),this.expandByPoint(vl.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Aa=new dt,Wd=new dt,pc=new dt,pr=new dt,Zd=new dt,mc=new dt,Kd=new dt;class t1{constructor(e=new dt,i=new dt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wd.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),pr.copy(this.origin).sub(Wd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=pr.dot(this.direction),_=-pr.dot(pc),g=pr.lengthSq(),m=Math.abs(1-h*h);let p,S,x,M;if(m>0)if(p=h*_-d,S=h*d-_,M=f*m,p>=0)if(S>=-M)if(S<=M){const A=1/m;p*=A,S*=A,x=p*(p+h*S+2*d)+S*(h*p+S+2*_)+g}else S=f,p=Math.max(0,-(h*S+d)),x=-p*p+S*(S+2*_)+g;else S=-f,p=Math.max(0,-(h*S+d)),x=-p*p+S*(S+2*_)+g;else S<=-M?(p=Math.max(0,-(-h*f+d)),S=p>0?-f:Math.min(Math.max(-f,-_),f),x=-p*p+S*(S+2*_)+g):S<=M?(p=0,S=Math.min(Math.max(-f,-_),f),x=S*(S+2*_)+g):(p=Math.max(0,-(h*f+d)),S=p>0?f:Math.min(Math.max(-f,-_),f),x=-p*p+S*(S+2*_)+g);else S=h>0?-f:f,p=Math.max(0,-(h*S+d)),x=-p*p+S*(S+2*_)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Wd).addScaledVector(pc,S),x}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const r=Aa.dot(this.direction),l=Aa.dot(Aa)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,_=r+h;return _<0?null:d<0?this.at(_,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,_;const g=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,S=this.origin;return g>=0?(r=(e.min.x-S.x)*g,l=(e.max.x-S.x)*g):(r=(e.max.x-S.x)*g,l=(e.min.x-S.x)*g),m>=0?(f=(e.min.y-S.y)*m,h=(e.max.y-S.y)*m):(f=(e.max.y-S.y)*m,h=(e.min.y-S.y)*m),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-S.z)*p,_=(e.max.z-S.z)*p):(d=(e.max.z-S.z)*p,_=(e.min.z-S.z)*p),r>_||d>l)||((d>r||r!==r)&&(r=d),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,r,l,f){Zd.subVectors(i,e),mc.subVectors(r,e),Kd.crossVectors(Zd,mc);let h=this.direction.dot(Kd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;pr.subVectors(this.origin,e);const _=d*this.direction.dot(mc.crossVectors(pr,mc));if(_<0)return null;const g=d*this.direction.dot(Zd.cross(pr));if(g<0||_+g>h)return null;const m=-d*pr.dot(Kd);return m<0?null:this.at(m/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn{constructor(e,i,r,l,f,h,d,_,g,m,p,S,x,M,A,y){yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,g,m,p,S,x,M,A,y)}set(e,i,r,l,f,h,d,_,g,m,p,S,x,M,A,y){const E=this.elements;return E[0]=e,E[4]=i,E[8]=r,E[12]=l,E[1]=f,E[5]=h,E[9]=d,E[13]=_,E[2]=g,E[6]=m,E[10]=p,E[14]=S,E[3]=x,E[7]=M,E[11]=A,E[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),f=1/eo.setFromMatrixColumn(e,1).length(),h=1/eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),_=Math.cos(l),g=Math.sin(l),m=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const S=h*m,x=h*p,M=d*m,A=d*p;i[0]=_*m,i[4]=-_*p,i[8]=g,i[1]=x+M*g,i[5]=S-A*g,i[9]=-d*_,i[2]=A-S*g,i[6]=M+x*g,i[10]=h*_}else if(e.order==="YXZ"){const S=_*m,x=_*p,M=g*m,A=g*p;i[0]=S+A*d,i[4]=M*d-x,i[8]=h*g,i[1]=h*p,i[5]=h*m,i[9]=-d,i[2]=x*d-M,i[6]=A+S*d,i[10]=h*_}else if(e.order==="ZXY"){const S=_*m,x=_*p,M=g*m,A=g*p;i[0]=S-A*d,i[4]=-h*p,i[8]=M+x*d,i[1]=x+M*d,i[5]=h*m,i[9]=A-S*d,i[2]=-h*g,i[6]=d,i[10]=h*_}else if(e.order==="ZYX"){const S=h*m,x=h*p,M=d*m,A=d*p;i[0]=_*m,i[4]=M*g-x,i[8]=S*g+A,i[1]=_*p,i[5]=A*g+S,i[9]=x*g-M,i[2]=-g,i[6]=d*_,i[10]=h*_}else if(e.order==="YZX"){const S=h*_,x=h*g,M=d*_,A=d*g;i[0]=_*m,i[4]=A-S*p,i[8]=M*p+x,i[1]=p,i[5]=h*m,i[9]=-d*m,i[2]=-g*m,i[6]=x*p+M,i[10]=S-A*p}else if(e.order==="XZY"){const S=h*_,x=h*g,M=d*_,A=d*g;i[0]=_*m,i[4]=-p,i[8]=g*m,i[1]=S*p+A,i[5]=h*m,i[9]=x*p-M,i[2]=M*p-x,i[6]=d*m,i[10]=A*p+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,n1)}lookAt(e,i,r){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),mr.crossVectors(r,fi),mr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),mr.crossVectors(r,fi)),mr.normalize(),gc.crossVectors(fi,mr),l[0]=mr.x,l[4]=gc.x,l[8]=fi.x,l[1]=mr.y,l[5]=gc.y,l[9]=fi.y,l[2]=mr.z,l[6]=gc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],_=r[8],g=r[12],m=r[1],p=r[5],S=r[9],x=r[13],M=r[2],A=r[6],y=r[10],E=r[14],U=r[3],N=r[7],R=r[11],B=r[15],z=l[0],O=l[4],G=l[8],D=l[12],w=l[1],I=l[5],tt=l[9],rt=l[13],ct=l[2],V=l[6],X=l[10],$=l[14],Y=l[3],vt=l[7],Et=l[11],Dt=l[15];return f[0]=h*z+d*w+_*ct+g*Y,f[4]=h*O+d*I+_*V+g*vt,f[8]=h*G+d*tt+_*X+g*Et,f[12]=h*D+d*rt+_*$+g*Dt,f[1]=m*z+p*w+S*ct+x*Y,f[5]=m*O+p*I+S*V+x*vt,f[9]=m*G+p*tt+S*X+x*Et,f[13]=m*D+p*rt+S*$+x*Dt,f[2]=M*z+A*w+y*ct+E*Y,f[6]=M*O+A*I+y*V+E*vt,f[10]=M*G+A*tt+y*X+E*Et,f[14]=M*D+A*rt+y*$+E*Dt,f[3]=U*z+N*w+R*ct+B*Y,f[7]=U*O+N*I+R*V+B*vt,f[11]=U*G+N*tt+R*X+B*Et,f[15]=U*D+N*rt+R*$+B*Dt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],_=e[9],g=e[13],m=e[2],p=e[6],S=e[10],x=e[14],M=e[3],A=e[7],y=e[11],E=e[15];return M*(+f*_*p-l*g*p-f*d*S+r*g*S+l*d*x-r*_*x)+A*(+i*_*x-i*g*S+f*h*S-l*h*x+l*g*m-f*_*m)+y*(+i*g*p-i*d*x-f*h*p+r*h*x+f*d*m-r*g*m)+E*(-l*d*m-i*_*p+i*d*S+l*h*p-r*h*S+r*_*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],m=e[8],p=e[9],S=e[10],x=e[11],M=e[12],A=e[13],y=e[14],E=e[15],U=p*y*g-A*S*g+A*_*x-d*y*x-p*_*E+d*S*E,N=M*S*g-m*y*g-M*_*x+h*y*x+m*_*E-h*S*E,R=m*A*g-M*p*g+M*d*x-h*A*x-m*d*E+h*p*E,B=M*p*_-m*A*_-M*d*S+h*A*S+m*d*y-h*p*y,z=i*U+r*N+l*R+f*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=U*O,e[1]=(A*S*f-p*y*f-A*l*x+r*y*x+p*l*E-r*S*E)*O,e[2]=(d*y*f-A*_*f+A*l*g-r*y*g-d*l*E+r*_*E)*O,e[3]=(p*_*f-d*S*f-p*l*g+r*S*g+d*l*x-r*_*x)*O,e[4]=N*O,e[5]=(m*y*f-M*S*f+M*l*x-i*y*x-m*l*E+i*S*E)*O,e[6]=(M*_*f-h*y*f-M*l*g+i*y*g+h*l*E-i*_*E)*O,e[7]=(h*S*f-m*_*f+m*l*g-i*S*g-h*l*x+i*_*x)*O,e[8]=R*O,e[9]=(M*p*f-m*A*f-M*r*x+i*A*x+m*r*E-i*p*E)*O,e[10]=(h*A*f-M*d*f+M*r*g-i*A*g-h*r*E+i*d*E)*O,e[11]=(m*d*f-h*p*f-m*r*g+i*p*g+h*r*x-i*d*x)*O,e[12]=B*O,e[13]=(m*A*l-M*p*l+M*r*S-i*A*S-m*r*y+i*p*y)*O,e[14]=(M*d*l-h*A*l-M*r*_+i*A*_+h*r*y-i*d*y)*O,e[15]=(h*p*l-m*d*l+m*r*_-i*p*_-h*r*S+i*d*S)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,_=e.z,g=f*h,m=f*d;return this.set(g*h+r,g*d-l*_,g*_+l*d,0,g*d+l*_,m*d+r,m*_-l*h,0,g*_-l*d,m*_+l*h,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,_=i._w,g=f+f,m=h+h,p=d+d,S=f*g,x=f*m,M=f*p,A=h*m,y=h*p,E=d*p,U=_*g,N=_*m,R=_*p,B=r.x,z=r.y,O=r.z;return l[0]=(1-(A+E))*B,l[1]=(x+R)*B,l[2]=(M-N)*B,l[3]=0,l[4]=(x-R)*z,l[5]=(1-(S+E))*z,l[6]=(y+U)*z,l[7]=0,l[8]=(M+N)*O,l[9]=(y-U)*O,l[10]=(1-(S+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=eo.set(l[0],l[1],l[2]).length();const h=eo.set(l[4],l[5],l[6]).length(),d=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Fi.copy(this);const g=1/f,m=1/h,p=1/d;return Fi.elements[0]*=g,Fi.elements[1]*=g,Fi.elements[2]*=g,Fi.elements[4]*=m,Fi.elements[5]*=m,Fi.elements[6]*=m,Fi.elements[8]*=p,Fi.elements[9]*=p,Fi.elements[10]*=p,i.setFromRotationMatrix(Fi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=aa,_=!1){const g=this.elements,m=2*f/(i-e),p=2*f/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(_)M=f/(h-f),A=h*f/(h-f);else if(d===aa)M=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===kc)M=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=m,g[4]=0,g[8]=S,g[12]=0,g[1]=0,g[5]=p,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=M,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=aa,_=!1){const g=this.elements,m=2/(i-e),p=2/(r-l),S=-(i+e)/(i-e),x=-(r+l)/(r-l);let M,A;if(_)M=1/(h-f),A=h/(h-f);else if(d===aa)M=-2/(h-f),A=-(h+f)/(h-f);else if(d===kc)M=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=m,g[4]=0,g[8]=0,g[12]=S,g[1]=0,g[5]=p,g[9]=0,g[13]=x,g[2]=0,g[6]=0,g[10]=M,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const eo=new dt,Fi=new yn,e1=new dt(0,0,0),n1=new dt(1,1,1),mr=new dt,gc=new dt,fi=new dt,hS=new yn,dS=new Bl;class za{constructor(e=0,i=0,r=0,l=za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],_=l[1],g=l[5],m=l[9],p=l[2],S=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,x),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return hS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return dS.setFromEuler(this),this.setFromQuaternion(dS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class DE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const pS=new dt,no=new Bl,ba=new yn,_c=new dt,Sl=new dt,a1=new dt,r1=new Bl,mS=new dt(1,0,0),gS=new dt(0,1,0),_S=new dt(0,0,1),vS={type:"added"},s1={type:"removed"},io={type:"childadded",child:null},jd={type:"childremoved",child:null};class mi extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new dt,i=new za,r=new Bl,l=new dt(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yn},normalMatrix:{value:new pe}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new DE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(mS,e)}rotateY(e){return this.rotateOnAxis(gS,e)}rotateZ(e){return this.rotateOnAxis(_S,e)}translateOnAxis(e,i){return pS.copy(e).applyQuaternion(this.quaternion),this.position.add(pS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(mS,e)}translateY(e){return this.translateOnAxis(gS,e)}translateZ(e){return this.translateOnAxis(_S,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_c.copy(e):_c.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Sl,_c,this.up):ba.lookAt(_c,Sl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),no.setFromRotationMatrix(ba),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vS),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(s1),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vS),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,a1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,r1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let g=0,m=_.length;g<m;g++){const p=_[g];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,g=this.material.length;_<g;_++)d.push(f(e.materials,this.material[_]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];l.animations.push(f(e.animations,_))}}if(i){const d=h(e.geometries),_=h(e.materials),g=h(e.textures),m=h(e.images),p=h(e.shapes),S=h(e.skeletons),x=h(e.animations),M=h(e.nodes);d.length>0&&(r.geometries=d),_.length>0&&(r.materials=_),g.length>0&&(r.textures=g),m.length>0&&(r.images=m),p.length>0&&(r.shapes=p),S.length>0&&(r.skeletons=S),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=l,r;function h(d){const _=[];for(const g in d){const m=d[g];delete m.metadata,_.push(m)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}mi.DEFAULT_UP=new dt(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new dt,Ra=new dt,Qd=new dt,Ca=new dt,ao=new dt,ro=new dt,SS=new dt,Jd=new dt,$d=new dt,tp=new dt,ep=new cn,np=new cn,ip=new cn;class Gi{constructor(e=new dt,i=new dt,r=new dt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Hi.subVectors(e,i),l.cross(Hi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Hi.subVectors(l,i),Ra.subVectors(r,i),Qd.subVectors(e,i);const h=Hi.dot(Hi),d=Hi.dot(Ra),_=Hi.dot(Qd),g=Ra.dot(Ra),m=Ra.dot(Qd),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const S=1/p,x=(g*_-d*m)*S,M=(h*m-d*_)*S;return f.set(1-x-M,M,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,r,l,f,h,d,_){return this.getBarycoord(e,i,r,l,Ca)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ca.x),_.addScaledVector(h,Ca.y),_.addScaledVector(d,Ca.z),_)}static getInterpolatedAttribute(e,i,r,l,f,h){return ep.setScalar(0),np.setScalar(0),ip.setScalar(0),ep.fromBufferAttribute(e,i),np.fromBufferAttribute(e,r),ip.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ep,f.x),h.addScaledVector(np,f.y),h.addScaledVector(ip,f.z),h}static isFrontFacing(e,i,r,l){return Hi.subVectors(r,i),Ra.subVectors(e,i),Hi.cross(Ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Hi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;ao.subVectors(l,r),ro.subVectors(f,r),Jd.subVectors(e,r);const _=ao.dot(Jd),g=ro.dot(Jd);if(_<=0&&g<=0)return i.copy(r);$d.subVectors(e,l);const m=ao.dot($d),p=ro.dot($d);if(m>=0&&p<=m)return i.copy(l);const S=_*p-m*g;if(S<=0&&_>=0&&m<=0)return h=_/(_-m),i.copy(r).addScaledVector(ao,h);tp.subVectors(e,f);const x=ao.dot(tp),M=ro.dot(tp);if(M>=0&&x<=M)return i.copy(f);const A=x*g-_*M;if(A<=0&&g>=0&&M<=0)return d=g/(g-M),i.copy(r).addScaledVector(ro,d);const y=m*M-x*p;if(y<=0&&p-m>=0&&x-M>=0)return SS.subVectors(f,l),d=(p-m)/(p-m+(x-M)),i.copy(l).addScaledVector(SS,d);const E=1/(y+A+S);return h=A*E,d=S*E,i.copy(r).addScaledVector(ao,h).addScaledVector(ro,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const UE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},vc={h:0,s:0,l:0};function ap(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class qe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=kT(e,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=ap(h,f,e+1/3),this.g=ap(h,f,e),this.b=ap(h,f,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=UE[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Le.workingToColorSpace(Fn.copy(this),e),Math.round(Ae(Fn.r*255,0,255))*65536+Math.round(Ae(Fn.g*255,0,255))*256+Math.round(Ae(Fn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,f=Fn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let _,g;const m=(d+h)/2;if(d===h)_=0,g=0;else{const p=h-d;switch(g=m<=.5?p/(h+d):p/(2-h-d),h){case r:_=(l-f)/p+(l<f?6:0);break;case l:_=(f-r)/p+2;break;case f:_=(r-l)/p+4;break}_/=6}return e.h=_,e.s=g,e.l=m,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=di){Le.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,r=Fn.g,l=Fn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(vc);const r=Hd(gr.h,vc.h,i),l=Hd(gr.s,vc.s,i),f=Hd(gr.l,vc.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new qe;qe.NAMES=UE;let o1=0;class af extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=ho,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sp,this.blendDst=Ep,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sp&&(r.blendSrc=this.blendSrc),this.blendDst!==Ep&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rS&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class NE extends af{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=_E,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new dt,Sc=new Ye;let l1=0;class sa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=sS,this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(e),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=gl(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=gl(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=gl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=gl(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),f=$n(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sS&&(e.usage=this.usage),e}}class LE extends sa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class OE extends sa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class oa extends sa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let u1=0;const bi=new yn,rp=new mi,so=new dt,hi=new Fl,El=new Fl,Rn=new dt;class xr extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CE(e)?OE:LE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,r){return bi.makeTranslation(e,i,r),this.applyMatrix4(bi),this}scale(e,i,r){return bi.makeScale(e,i,r),this.applyMatrix4(bi),this}lookAt(e){return rp.lookAt(e),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Im);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];El.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(hi.min,El.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,El.max),hi.expandByPoint(Rn)):(hi.expandByPoint(El.min),hi.expandByPoint(El.max))}hi.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],_=this.morphTargetsRelative;for(let g=0,m=d.count;g<m;g++)Rn.fromBufferAttribute(d,g),_&&(so.fromBufferAttribute(e,g),Rn.add(so)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let G=0;G<r.count;G++)d[G]=new dt,_[G]=new dt;const g=new dt,m=new dt,p=new dt,S=new Ye,x=new Ye,M=new Ye,A=new dt,y=new dt;function E(G,D,w){g.fromBufferAttribute(r,G),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,w),S.fromBufferAttribute(f,G),x.fromBufferAttribute(f,D),M.fromBufferAttribute(f,w),m.sub(g),p.sub(g),x.sub(S),M.sub(S);const I=1/(x.x*M.y-M.x*x.y);isFinite(I)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(I),y.copy(p).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(I),d[G].add(A),d[D].add(A),d[w].add(A),_[G].add(y),_[D].add(y),_[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,D=U.length;G<D;++G){const w=U[G],I=w.start,tt=w.count;for(let rt=I,ct=I+tt;rt<ct;rt+=3)E(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const N=new dt,R=new dt,B=new dt,z=new dt;function O(G){B.fromBufferAttribute(l,G),z.copy(B);const D=d[G];N.copy(D),N.sub(B.multiplyScalar(B.dot(D))).normalize(),R.crossVectors(z,D);const I=R.dot(_[G])<0?-1:1;h.setXYZW(G,N.x,N.y,N.z,I)}for(let G=0,D=U.length;G<D;++G){const w=U[G],I=w.start,tt=w.count;for(let rt=I,ct=I+tt;rt<ct;rt+=3)O(e.getX(rt+0)),O(e.getX(rt+1)),O(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,x=r.count;S<x;S++)r.setXYZ(S,0,0,0);const l=new dt,f=new dt,h=new dt,d=new dt,_=new dt,g=new dt,m=new dt,p=new dt;if(e)for(let S=0,x=e.count;S<x;S+=3){const M=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,M),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),m.subVectors(h,f),p.subVectors(l,f),m.cross(p),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,y),d.add(m),_.add(m),g.add(m),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,_.x,_.y,_.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let S=0,x=i.count;S<x;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),m.subVectors(h,f),p.subVectors(l,f),m.cross(p),r.setXYZ(S+0,m.x,m.y,m.z),r.setXYZ(S+1,m.x,m.y,m.z),r.setXYZ(S+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,_){const g=d.array,m=d.itemSize,p=d.normalized,S=new g.constructor(_.length*m);let x=0,M=0;for(let A=0,y=_.length;A<y;A++){d.isInterleavedBufferAttribute?x=_[A]*d.data.stride+d.offset:x=_[A]*m;for(let E=0;E<m;E++)S[M++]=g[x++]}return new sa(S,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xr,r=this.index.array,l=this.attributes;for(const d in l){const _=l[d],g=e(_,r);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const _=[],g=f[d];for(let m=0,p=g.length;m<p;m++){const S=g[m],x=e(S,r);_.push(x)}i.morphAttributes[d]=_}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const g=r[_];e.data.attributes[_]=g.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],m=[];for(let p=0,S=g.length;p<S;p++){const x=g[p];m.push(x.toJSON(e.data))}m.length>0&&(l[_]=m,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const m=l[g];this.setAttribute(g,m.clone(i))}const f=e.morphAttributes;for(const g in f){const m=[],p=f[g];for(let S=0,x=p.length;S<x;S++)m.push(p[S].clone(i));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,m=h.length;g<m;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ES=new yn,Kr=new t1,Ec=new Im,yS=new dt,yc=new dt,xc=new dt,Mc=new dt,sp=new dt,Tc=new dt,xS=new dt,Ac=new dt;class ra extends mi{constructor(e=new xr,i=new NE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){Tc.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const m=d[_],p=f[_];m!==0&&(sp.fromBufferAttribute(p,e),h?Tc.addScaledVector(sp,m):Tc.addScaledVector(sp.sub(i),m))}i.add(Tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(f),Kr.copy(e.ray).recast(e.near),!(Ec.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Ec,yS)===null||Kr.origin.distanceToSquared(yS)>(e.far-e.near)**2))&&(ES.copy(f).invert(),Kr.copy(e.ray).applyMatrix4(ES),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Kr)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,g=f.attributes.uv,m=f.attributes.uv1,p=f.attributes.normal,S=f.groups,x=f.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,A=S.length;M<A;M++){const y=S[M],E=h[y.materialIndex],U=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,B=N;R<B;R+=3){const z=d.getX(R),O=d.getX(R+1),G=d.getX(R+2);l=bc(this,E,e,r,g,m,p,z,O,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let y=M,E=A;y<E;y+=3){const U=d.getX(y),N=d.getX(y+1),R=d.getX(y+2);l=bc(this,h,e,r,g,m,p,U,N,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(h))for(let M=0,A=S.length;M<A;M++){const y=S[M],E=h[y.materialIndex],U=Math.max(y.start,x.start),N=Math.min(_.count,Math.min(y.start+y.count,x.start+x.count));for(let R=U,B=N;R<B;R+=3){const z=R,O=R+1,G=R+2;l=bc(this,E,e,r,g,m,p,z,O,G),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,x.start),A=Math.min(_.count,x.start+x.count);for(let y=M,E=A;y<E;y+=3){const U=y,N=y+1,R=y+2;l=bc(this,h,e,r,g,m,p,U,N,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function c1(o,e,i,r,l,f,h,d){let _;if(e.side===ti?_=r.intersectTriangle(h,f,l,!0,d):_=r.intersectTriangle(l,f,h,e.side===yr,d),_===null)return null;Ac.copy(d),Ac.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Ac);return g<i.near||g>i.far?null:{distance:g,point:Ac.clone(),object:o}}function bc(o,e,i,r,l,f,h,d,_,g){o.getVertexPosition(d,yc),o.getVertexPosition(_,xc),o.getVertexPosition(g,Mc);const m=c1(o,e,i,r,yc,xc,Mc,xS);if(m){const p=new dt;Gi.getBarycoord(xS,yc,xc,Mc,p),l&&(m.uv=Gi.getInterpolatedAttribute(l,d,_,g,p,new Ye)),f&&(m.uv1=Gi.getInterpolatedAttribute(f,d,_,g,p,new Ye)),h&&(m.normal=Gi.getInterpolatedAttribute(h,d,_,g,p,new dt),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const S={a:d,b:_,c:g,normal:new dt,materialIndex:0};Gi.getNormal(yc,xc,Mc,S.normal),m.face=S,m.barycoord=p}return m}class Hl extends xr{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const _=[],g=[],m=[],p=[];let S=0,x=0;M("z","y","x",-1,-1,r,i,e,h,f,0),M("z","y","x",1,-1,r,i,-e,h,f,1),M("x","z","y",1,1,e,r,i,l,h,2),M("x","z","y",1,-1,e,r,-i,l,h,3),M("x","y","z",1,-1,e,i,r,l,f,4),M("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new oa(g,3)),this.setAttribute("normal",new oa(m,3)),this.setAttribute("uv",new oa(p,2));function M(A,y,E,U,N,R,B,z,O,G,D){const w=R/O,I=B/G,tt=R/2,rt=B/2,ct=z/2,V=O+1,X=G+1;let $=0,Y=0;const vt=new dt;for(let Et=0;Et<X;Et++){const Dt=Et*I-rt;for(let Wt=0;Wt<V;Wt++){const le=Wt*w-tt;vt[A]=le*U,vt[y]=Dt*N,vt[E]=ct,g.push(vt.x,vt.y,vt.z),vt[A]=0,vt[y]=0,vt[E]=z>0?1:-1,m.push(vt.x,vt.y,vt.z),p.push(Wt/O),p.push(1-Et/G),$+=1}}for(let Et=0;Et<G;Et++)for(let Dt=0;Dt<O;Dt++){const Wt=S+Dt+V*Et,le=S+Dt+V*(Et+1),F=S+(Dt+1)+V*(Et+1),ut=S+(Dt+1)+V*Et;_.push(Wt,le,ut),_.push(le,F,ut),Y+=6}d.addGroup(x,Y,D),x+=Y,S+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const r=So(o[i]);for(const l in r)e[l]=r[l]}return e}function f1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function PE(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const h1={clone:So,merge:Wn};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends af{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class zE extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new dt,MS=new Ye,TS=new Ye;class Ri extends zE{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sm*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,i){return this.getViewBounds(e,MS,TS),i.subVectors(TS,MS)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Fd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,g=h.fullHeight;f+=h.offsetX*l/_,i-=h.offsetY*r/g,l*=h.width/_,r*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class m1 extends mi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(oo,lo,e,i);l.layers=this.layers,this.add(l);const f=new Ri(oo,lo,e,i);f.layers=this.layers,this.add(f);const h=new Ri(oo,lo,e,i);h.layers=this.layers,this.add(h);const d=new Ri(oo,lo,e,i);d.layers=this.layers,this.add(d);const _=new Ri(oo,lo,e,i);_.layers=this.layers,this.add(_);const g=new Ri(oo,lo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,_]=i;for(const g of i)this.remove(g);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,g,m]=this.children,p=e.getRenderTarget(),S=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,m),e.setRenderTarget(p,S,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class IE extends Gn{constructor(e=[],i=go,r,l,f,h,d,_,g,m){super(e,i,r,l,f,h,d,_,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g1 extends os{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new IE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Hl(5,5,5),f=new Ia({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Sr});f.uniforms.tEquirect.value=i;const h=new ra(l,f),d=i.minFilter;return i.minFilter===rs&&(i.minFilter=wi),new m1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Rc extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _1={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new dt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new dt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new dt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new dt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,_=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),E=this._getHandJoint(g,A);y!==null&&(E.matrix.fromArray(y.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=y.radius),E.visible=y!==null}const m=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],S=m.position.distanceTo(p.position),x=.02,M=.005;g.inputState.pinching&&S>x+M?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&S<=x-M&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return d!==null&&(d.visible=l!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class v1 extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new za,this.environmentIntensity=1,this.environmentRotation=new za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class S1 extends Gn{constructor(e=null,i=1,r=1,l,f,h,d,_,g=pi,m=pi,p,S){super(null,h,d,_,g,m,l,f,p,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lp=new dt,E1=new dt,y1=new pe;class $r{constructor(e=new dt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=lp.subVectors(r,i).cross(E1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(lp),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||y1.getNormalMatrix(e),l=this.coplanarPoint(lp).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Im,x1=new Ye(.5,.5),Cc=new dt;class BE{constructor(e=new $r,i=new $r,r=new $r,l=new $r,f=new $r,h=new $r){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],g=f[3],m=f[4],p=f[5],S=f[6],x=f[7],M=f[8],A=f[9],y=f[10],E=f[11],U=f[12],N=f[13],R=f[14],B=f[15];if(l[0].setComponents(g-h,x-m,E-M,B-U).normalize(),l[1].setComponents(g+h,x+m,E+M,B+U).normalize(),l[2].setComponents(g+d,x+p,E+A,B+N).normalize(),l[3].setComponents(g-d,x-p,E-A,B-N).normalize(),r)l[4].setComponents(_,S,y,R).normalize(),l[5].setComponents(g-_,x-S,E-y,B-R).normalize();else if(l[4].setComponents(g-_,x-S,E-y,B-R).normalize(),i===aa)l[5].setComponents(g+_,x+S,E+y,B+R).normalize();else if(i===kc)l[5].setComponents(_,S,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const i=x1.distanceTo(e.center);return jr.radius=.7071067811865476+i,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M1 extends Gn{constructor(e,i,r,l,f,h,d,_,g){super(e,i,r,l,f,h,d,_,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class FE extends Gn{constructor(e,i,r=ss,l,f,h,d=pi,_=pi,g,m=wl,p=1){if(m!==wl&&m!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:p};super(S,l,f,h,d,_,m,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class HE extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rf extends xr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),_=Math.floor(l),g=d+1,m=_+1,p=e/d,S=i/_,x=[],M=[],A=[],y=[];for(let E=0;E<m;E++){const U=E*S-h;for(let N=0;N<g;N++){const R=N*p-f;M.push(R,-U,0),A.push(0,0,1),y.push(N/d),y.push(1-E/_)}}for(let E=0;E<_;E++)for(let U=0;U<d;U++){const N=U+g*E,R=U+g*(E+1),B=U+1+g*(E+1),z=U+1+g*E;x.push(N,R,z),x.push(R,B,z)}this.setIndex(x),this.setAttribute("position",new oa(M,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bm extends xr{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const _=Math.min(h+d,Math.PI);let g=0;const m=[],p=new dt,S=new dt,x=[],M=[],A=[],y=[];for(let E=0;E<=r;E++){const U=[],N=E/r;let R=0;E===0&&h===0?R=.5/i:E===r&&_===Math.PI&&(R=-.5/i);for(let B=0;B<=i;B++){const z=B/i;p.x=-e*Math.cos(l+z*f)*Math.sin(h+N*d),p.y=e*Math.cos(h+N*d),p.z=e*Math.sin(l+z*f)*Math.sin(h+N*d),M.push(p.x,p.y,p.z),S.copy(p).normalize(),A.push(S.x,S.y,S.z),y.push(z+R,1-N),U.push(g++)}m.push(U)}for(let E=0;E<r;E++)for(let U=0;U<i;U++){const N=m[E][U+1],R=m[E][U],B=m[E+1][U],z=m[E+1][U+1];(E!==0||h>0)&&x.push(N,R,z),(E!==r-1||_<Math.PI)&&x.push(R,B,z)}this.setIndex(x),this.setAttribute("position",new oa(M,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class T1 extends af{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A1 extends af{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b1 extends zE{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=m*this.view.offsetY,_=d-m*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class R1 extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function AS(o,e,i,r){const l=C1(r);switch(i){case ME:return o*e;case AE:return o*e/l.components*l.byteLength;case Lm:return o*e/l.components*l.byteLength;case bE:return o*e*2/l.components*l.byteLength;case Om:return o*e*2/l.components*l.byteLength;case TE:return o*e*3/l.components*l.byteLength;case Di:return o*e*4/l.components*l.byteLength;case Pm:return o*e*4/l.components*l.byteLength;case zc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lp:case Pp:return Math.max(o,16)*Math.max(e,8)/4;case Np:case Op:return Math.max(o,8)*Math.max(e,8)/2;case zp:case Ip:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case kp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case $p:case tm:case em:return Math.ceil(o/4)*Math.ceil(e/4)*16;case nm:case im:return Math.ceil(o/4)*Math.ceil(e/4)*8;case am:case rm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function C1(o){switch(o){case Pa:case SE:return{byteLength:1,components:1};case Rl:case EE:case zl:return{byteLength:2,components:1};case Um:case Nm:return{byteLength:2,components:4};case ss:case Dm:case La:return{byteLength:4,components:1};case yE:case xE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);function GE(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function w1(o){const e=new WeakMap;function i(d,_){const g=d.array,m=d.usage,p=g.byteLength,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,g,m),d.onUploadCallback();let x;if(g instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)x=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)x=o.SHORT;else if(g instanceof Uint32Array)x=o.UNSIGNED_INT;else if(g instanceof Int32Array)x=o.INT;else if(g instanceof Int8Array)x=o.BYTE;else if(g instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:x,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,_,g){const m=_.array,p=_.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,m);else{p.sort((x,M)=>x.start-M.start);let S=0;for(let x=1;x<p.length;x++){const M=p[S],A=p[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++S,p[S]=A)}p.length=S+1;for(let x=0,M=p.length;x<M;x++){const A=p[x];o.bufferSubData(g,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,_));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,_),g.version=d.version}}return{get:l,remove:f,update:h}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,k1=`#ifdef USE_BUMPMAP
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$1=`#define PI 3.141592653589793
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
} // validated`,tA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eA=`vec3 transformedNormal = objectNormal;
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
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sA="gl_FragColor = linearToOutputTexel( gl_FragColor );",oA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
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
#endif`,dA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_A=`#ifdef USE_GRADIENTMAP
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
}`,vA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yA=`uniform bool receiveShadow;
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
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,MA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RA=`PhysicalMaterial material;
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
#endif`,CA=`struct PhysicalMaterial {
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
}`,wA=`
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
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
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FA=`#if defined( USE_POINTS_UV )
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
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
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
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
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
#endif`,$A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,zb=`#if DEPTH_PACKING == 3200
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
}`,Ib=`#define DISTANCE
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
}`,Bb=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,kb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Yb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,Zb=`#define MATCAP
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
}`,Kb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,tR=`#define STANDARD
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
}`,eR=`#define TOON
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
}`,nR=`#define TOON
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
}`,iR=`uniform float size;
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
}`,aR=`uniform vec3 diffuse;
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
}`,rR=`#include <common>
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
}`,sR=`uniform vec3 color;
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
}`,oR=`uniform float rotation;
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
}`,lR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:D1,alphahash_pars_fragment:U1,alphamap_fragment:N1,alphamap_pars_fragment:L1,alphatest_fragment:O1,alphatest_pars_fragment:P1,aomap_fragment:z1,aomap_pars_fragment:I1,batching_pars_vertex:B1,batching_vertex:F1,begin_vertex:H1,beginnormal_vertex:G1,bsdfs:V1,iridescence_fragment:X1,bumpmap_pars_fragment:k1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:Z1,color_fragment:K1,color_pars_fragment:j1,color_pars_vertex:Q1,color_vertex:J1,common:$1,cube_uv_reflection_fragment:tA,defaultnormal_vertex:eA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:aA,emissivemap_pars_fragment:rA,colorspace_fragment:sA,colorspace_pars_fragment:oA,envmap_fragment:lA,envmap_common_pars_fragment:uA,envmap_pars_fragment:cA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:xA,envmap_vertex:hA,fog_vertex:dA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:_A,lightmap_pars_fragment:vA,lights_lambert_fragment:SA,lights_lambert_pars_fragment:EA,lights_pars_begin:yA,lights_toon_fragment:MA,lights_toon_pars_fragment:TA,lights_phong_fragment:AA,lights_phong_pars_fragment:bA,lights_physical_fragment:RA,lights_physical_pars_fragment:CA,lights_fragment_begin:wA,lights_fragment_maps:DA,lights_fragment_end:UA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:OA,logdepthbuf_vertex:PA,map_fragment:zA,map_pars_fragment:IA,map_particle_fragment:BA,map_particle_pars_fragment:FA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:GA,morphinstance_vertex:VA,morphcolor_vertex:XA,morphnormal_vertex:kA,morphtarget_pars_vertex:qA,morphtarget_vertex:YA,normal_fragment_begin:WA,normal_fragment_maps:ZA,normal_pars_fragment:KA,normal_pars_vertex:jA,normal_vertex:QA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:$A,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:eb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:ab,premultiplied_alpha_fragment:rb,project_vertex:sb,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:vb,specularmap_fragment:Sb,specularmap_pars_fragment:Eb,tonemapping_fragment:yb,tonemapping_pars_fragment:xb,transmission_fragment:Mb,transmission_pars_fragment:Tb,uv_pars_fragment:Ab,uv_pars_vertex:bb,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:wb,background_frag:Db,backgroundCube_vert:Ub,backgroundCube_frag:Nb,cube_vert:Lb,cube_frag:Ob,depth_vert:Pb,depth_frag:zb,distanceRGBA_vert:Ib,distanceRGBA_frag:Bb,equirect_vert:Fb,equirect_frag:Hb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:Xb,meshbasic_frag:kb,meshlambert_vert:qb,meshlambert_frag:Yb,meshmatcap_vert:Wb,meshmatcap_frag:Zb,meshnormal_vert:Kb,meshnormal_frag:jb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:$b,meshphysical_frag:tR,meshtoon_vert:eR,meshtoon_frag:nR,points_vert:iR,points_frag:aR,shadow_vert:rR,shadow_frag:sR,sprite_vert:oR,sprite_frag:lR},Ht={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ea={basic:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new qe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Wn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Wn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Wn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new qe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Wn([Ht.points,Ht.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Wn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Wn([Ht.common,Ht.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Wn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Wn([Ht.sprite,Ht.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Wn([Ht.common,Ht.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Wn([Ht.lights,Ht.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ea.physical={uniforms:Wn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const wc={r:0,b:0,g:0},Qr=new za,uR=new yn;function cR(o,e,i,r,l,f,h){const d=new qe(0);let _=f===!0?0:1,g,m,p=null,S=0,x=null;function M(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?i:e).get(R)),R}function A(N){let R=!1;const B=M(N);B===null?E(d,_):B&&B.isColor&&(E(B,1),R=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,R){const B=M(R);B&&(B.isCubeTexture||B.mapping===nf)?(m===void 0&&(m=new ra(new Hl(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:So(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(m)),Qr.copy(R.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.material.uniforms.envMap.value=B,m.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uR.makeRotationFromEuler(Qr)),m.material.toneMapped=Le.getTransfer(B.colorSpace)!==ke,(p!==B||S!==B.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,p=B,S=B.version,x=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):B&&B.isTexture&&(g===void 0&&(g=new ra(new rf(2,2),new Ia({name:"BackgroundMaterial",uniforms:So(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=B,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=Le.getTransfer(B.colorSpace)!==ke,B.matrixAutoUpdate===!0&&B.updateMatrix(),g.material.uniforms.uvTransform.value.copy(B.matrix),(p!==B||S!==B.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,p=B,S=B.version,x=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function E(N,R){N.getRGB(wc,PE(o)),r.buffers.color.setClear(wc.r,wc.g,wc.b,R,h)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),_=R,E(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(N){_=N,E(d,_)},render:A,addToRenderList:y,dispose:U}}function fR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(w,I,tt,rt,ct){let V=!1;const X=p(rt,tt,I);f!==X&&(f=X,g(f.object)),V=x(w,rt,tt,ct),V&&M(w,rt,tt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,R(w,I,tt,rt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function _(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function m(w){return o.deleteVertexArray(w)}function p(w,I,tt){const rt=tt.wireframe===!0;let ct=r[w.id];ct===void 0&&(ct={},r[w.id]=ct);let V=ct[I.id];V===void 0&&(V={},ct[I.id]=V);let X=V[rt];return X===void 0&&(X=S(_()),V[rt]=X),X}function S(w){const I=[],tt=[],rt=[];for(let ct=0;ct<i;ct++)I[ct]=0,tt[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:tt,attributeDivisors:rt,object:w,attributes:{},index:null}}function x(w,I,tt,rt){const ct=f.attributes,V=I.attributes;let X=0;const $=tt.getAttributes();for(const Y in $)if($[Y].location>=0){const Et=ct[Y];let Dt=V[Y];if(Dt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Dt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Dt=w.instanceColor)),Et===void 0||Et.attribute!==Dt||Dt&&Et.data!==Dt.data)return!0;X++}return f.attributesNum!==X||f.index!==rt}function M(w,I,tt,rt){const ct={},V=I.attributes;let X=0;const $=tt.getAttributes();for(const Y in $)if($[Y].location>=0){let Et=V[Y];Et===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const Dt={};Dt.attribute=Et,Et&&Et.data&&(Dt.data=Et.data),ct[Y]=Dt,X++}f.attributes=ct,f.attributesNum=X,f.index=rt}function A(){const w=f.newAttributes;for(let I=0,tt=w.length;I<tt;I++)w[I]=0}function y(w){E(w,0)}function E(w,I){const tt=f.newAttributes,rt=f.enabledAttributes,ct=f.attributeDivisors;tt[w]=1,rt[w]===0&&(o.enableVertexAttribArray(w),rt[w]=1),ct[w]!==I&&(o.vertexAttribDivisor(w,I),ct[w]=I)}function U(){const w=f.newAttributes,I=f.enabledAttributes;for(let tt=0,rt=I.length;tt<rt;tt++)I[tt]!==w[tt]&&(o.disableVertexAttribArray(tt),I[tt]=0)}function N(w,I,tt,rt,ct,V,X){X===!0?o.vertexAttribIPointer(w,I,tt,ct,V):o.vertexAttribPointer(w,I,tt,rt,ct,V)}function R(w,I,tt,rt){A();const ct=rt.attributes,V=tt.getAttributes(),X=I.defaultAttributeValues;for(const $ in V){const Y=V[$];if(Y.location>=0){let vt=ct[$];if(vt===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const Et=vt.normalized,Dt=vt.itemSize,Wt=e.get(vt);if(Wt===void 0)continue;const le=Wt.buffer,F=Wt.type,ut=Wt.bytesPerElement,W=F===o.INT||F===o.UNSIGNED_INT||vt.gpuType===Dm;if(vt.isInterleavedBufferAttribute){const it=vt.data,yt=it.stride,Ut=vt.offset;if(it.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)E(Y.location+wt,it.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let wt=0;wt<Y.locationSize;wt++)y(Y.location+wt);o.bindBuffer(o.ARRAY_BUFFER,le);for(let wt=0;wt<Y.locationSize;wt++)N(Y.location+wt,Dt/Y.locationSize,F,Et,yt*ut,(Ut+Dt/Y.locationSize*wt)*ut,W)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)E(Y.location+it,vt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<Y.locationSize;it++)y(Y.location+it);o.bindBuffer(o.ARRAY_BUFFER,le);for(let it=0;it<Y.locationSize;it++)N(Y.location+it,Dt/Y.locationSize,F,Et,Dt*ut,Dt/Y.locationSize*it*ut,W)}}else if(X!==void 0){const Et=X[$];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}U()}function B(){G();for(const w in r){const I=r[w];for(const tt in I){const rt=I[tt];for(const ct in rt)m(rt[ct].object),delete rt[ct];delete I[tt]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const tt in I){const rt=I[tt];for(const ct in rt)m(rt[ct].object),delete rt[ct];delete I[tt]}delete r[w.id]}function O(w){for(const I in r){const tt=r[I];if(tt[w.id]===void 0)continue;const rt=tt[w.id];for(const ct in rt)m(rt[ct].object),delete rt[ct];delete tt[w.id]}}function G(){D(),h=!0,f!==l&&(f=l,g(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function hR(o,e,i){let r;function l(g){r=g}function f(g,m){o.drawArrays(r,g,m),i.update(m,r,1)}function h(g,m,p){p!==0&&(o.drawArraysInstanced(r,g,m,p),i.update(m,r,p))}function d(g,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];i.update(x,r,1)}function _(g,m,p,S){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<g.length;M++)h(g[M],m[M],S[M]);else{x.multiDrawArraysInstancedWEBGL(r,g,0,m,0,S,0,p);let M=0;for(let A=0;A<p;A++)M+=m[A]*S[A];i.update(M,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function dR(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Di&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const G=O===zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Pa&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==La&&!G)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const m=_(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const p=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:B,maxSamples:z}}function pR(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new $r,d=new pe,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const x=p.length!==0||S||r!==0||l;return l=S,r=p.length,x},this.beginShadows=function(){f=!0,m(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){i=m(p,S,0)},this.setState=function(p,S,x){const M=p.clippingPlanes,A=p.clipIntersection,y=p.clipShadows,E=o.get(p);if(!l||M===null||M.length===0||f&&!y)f?m(null):g();else{const U=f?0:r,N=U*4;let R=E.clippingState||null;_.value=R,R=m(M,S,N,x);for(let B=0;B!==N;++B)R[B]=i[B];E.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(p,S,x,M){const A=p!==null?p.length:0;let y=null;if(A!==0){if(y=_.value,M!==!0||y===null){const E=x+A*4,U=S.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<E)&&(y=new Float32Array(E));for(let N=0,R=x;N!==A;++N,R+=4)h.copy(p[N]).applyMatrix4(U,d),h.normal.toArray(y,R),y[R+3]=h.constant}_.value=y,_.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function mR(o){let e=new WeakMap;function i(h,d){return d===Cp?h.mapping=go:d===wp&&(h.mapping=_o),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Cp||d===wp)if(e.has(h)){const _=e.get(h).texture;return i(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new g1(_.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const co=4,bS=[.125,.215,.35,.446,.526,.582],ns=20,up=new b1,RS=new qe;let cp=null,fp=0,hp=0,dp=!1;const ts=(1+Math.sqrt(5))/2,uo=1/ts,CS=[new dt(-ts,uo,0),new dt(ts,uo,0),new dt(-uo,0,ts),new dt(uo,0,ts),new dt(0,ts,-uo),new dt(0,ts,uo),new dt(-1,1,-1),new dt(1,1,-1),new dt(-1,1,1),new dt(1,1,1)],gR=new dt;class wS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=gR}=f;cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,d),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=NS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=US(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cp,fp,hp),this._renderer.xr.enabled=dp,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:zl,format:Di,colorSpace:vo,depthBuffer:!1},l=DS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_R(f)),this._blurMaterial=vR(f,e,i)}return l}_compileMaterial(e){const i=new ra(this._lodPlanes[0],e);this._renderer.compile(i,up)}_sceneToCubeUV(e,i,r,l,f){const _=new Ri(90,1,i,r),g=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,x=p.toneMapping;p.getClearColor(RS),p.toneMapping=Er,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const A=new NE({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),y=new ra(new Hl,A);let E=!1;const U=e.background;U?U.isColor&&(A.color.copy(U),e.background=null,E=!0):(A.color.copy(RS),E=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(_.up.set(0,g[N],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+m[N],f.y,f.z)):R===1?(_.up.set(0,0,g[N]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+m[N],f.z)):(_.up.set(0,g[N],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+m[N]));const B=this._cubeSize;Dc(l,R*B,N>2?B:0,B,B),p.setRenderTarget(l),E&&p.render(y,_),p.render(e,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=x,p.autoClear=S,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===go||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=NS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=US());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new ra(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;Dc(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(h,up)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=CS[(l-f-1)%CS.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const _=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new ra(this._lodPlanes[l],g),S=g.uniforms,x=this._sizeLods[r]-1,M=isFinite(f)?Math.PI/(2*x):2*Math.PI/(2*ns-1),A=f/M,y=isFinite(f)?1+Math.floor(m*A):ns;y>ns&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ns}`);const E=[];let U=0;for(let O=0;O<ns;++O){const G=O/A,D=Math.exp(-G*G/2);E.push(D),O===0?U+=D:O<y&&(U+=2*D)}for(let O=0;O<E.length;O++)E[O]=E[O]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=E,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=M,S.mipInt.value=N-r;const R=this._sizeLods[l],B=3*R*(l>N-co?l-N+co:0),z=4*(this._cubeSize-R);Dc(i,B,z,3*R,2*R),_.setRenderTarget(i),_.render(p,up)}}function _R(o){const e=[],i=[],r=[];let l=o;const f=o-co+1+bS.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let _=1/d;h>o-co?_=bS[h-o+co-1]:h===0&&(_=0),r.push(_);const g=1/(d-2),m=-g,p=1+g,S=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,M=6,A=3,y=2,E=1,U=new Float32Array(A*M*x),N=new Float32Array(y*M*x),R=new Float32Array(E*M*x);for(let z=0;z<x;z++){const O=z%3*2/3-1,G=z>2?0:-1,D=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];U.set(D,A*M*z),N.set(S,y*M*z);const w=[z,z,z,z,z,z];R.set(w,E*M*z)}const B=new xr;B.setAttribute("position",new sa(U,A)),B.setAttribute("uv",new sa(N,y)),B.setAttribute("faceIndex",new sa(R,E)),e.push(B),l>co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function DS(o,e,i){const r=new os(o,e,i);return r.texture.mapping=nf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function vR(o,e,i){const r=new Float32Array(ns),l=new dt(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function US(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function NS(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Fm(){return`

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
	`}function SR(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const _=d.mapping,g=_===Cp||_===wp,m=_===go||_===_o;if(g||m){let p=e.get(d);const S=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new wS(o)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return g&&x&&x.height>0||m&&x&&l(x)?(i===null&&(i=new wS(o)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let _=0;const g=6;for(let m=0;m<g;m++)d[m]!==void 0&&_++;return _===g}function f(d){const _=d.target;_.removeEventListener("dispose",f);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ER(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ul("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function yR(o,e,i,r){const l={},f=new WeakMap;function h(p){const S=p.target;S.index!==null&&e.remove(S.index);for(const M in S.attributes)e.remove(S.attributes[M]);S.removeEventListener("dispose",h),delete l[S.id];const x=f.get(S);x&&(e.remove(x),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(p,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function _(p){const S=p.attributes;for(const x in S)e.update(S[x],o.ARRAY_BUFFER)}function g(p){const S=[],x=p.index,M=p.attributes.position;let A=0;if(x!==null){const U=x.array;A=x.version;for(let N=0,R=U.length;N<R;N+=3){const B=U[N+0],z=U[N+1],O=U[N+2];S.push(B,z,z,O,O,B)}}else if(M!==void 0){const U=M.array;A=M.version;for(let N=0,R=U.length/3-1;N<R;N+=3){const B=N+0,z=N+1,O=N+2;S.push(B,z,z,O,O,B)}}else return;const y=new(CE(S)?OE:LE)(S,1);y.version=A;const E=f.get(p);E&&e.remove(E),f.set(p,y)}function m(p){const S=f.get(p);if(S){const x=p.index;x!==null&&S.version<x.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:m}}function xR(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function _(S,x){o.drawElements(r,x,f,S*h),i.update(x,r,1)}function g(S,x,M){M!==0&&(o.drawElementsInstanced(r,x,f,S*h,M),i.update(x,r,M))}function m(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,f,S,0,M);let y=0;for(let E=0;E<M;E++)y+=x[E];i.update(y,r,1)}function p(S,x,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<S.length;E++)g(S[E]/h,x[E],A[E]);else{y.multiDrawElementsInstancedWEBGL(r,x,0,f,S,0,A,0,M);let E=0;for(let U=0;U<M;U++)E+=x[U]*A[U];i.update(E,r,1)}}this.setMode=l,this.setIndex=d,this.render=_,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function MR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TR(o,e,i){const r=new WeakMap,l=new cn;function f(h,d,_){const g=h.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=m!==void 0?m.length:0;let S=r.get(d);if(S===void 0||S.count!==p){let w=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var x=w;S!==void 0&&S.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let B=d.attributes.position.count*R,z=1;B>e.maxTextureSize&&(z=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*z*4*p),G=new wE(O,B,z,p);G.type=La,G.needsUpdate=!0;const D=R*4;for(let I=0;I<p;I++){const tt=E[I],rt=U[I],ct=N[I],V=B*z*4*I;for(let X=0;X<tt.count;X++){const $=X*D;M===!0&&(l.fromBufferAttribute(tt,X),O[V+$+0]=l.x,O[V+$+1]=l.y,O[V+$+2]=l.z,O[V+$+3]=0),A===!0&&(l.fromBufferAttribute(rt,X),O[V+$+4]=l.x,O[V+$+5]=l.y,O[V+$+6]=l.z,O[V+$+7]=0),y===!0&&(l.fromBufferAttribute(ct,X),O[V+$+8]=l.x,O[V+$+9]=l.y,O[V+$+10]=l.z,O[V+$+11]=ct.itemSize===4?l.w:1)}}S={count:p,texture:G,size:new Ye(B,z)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let y=0;y<g.length;y++)M+=g[y];const A=d.morphTargetsRelative?1:1-M;_.getUniforms().setValue(o,"morphTargetBaseInfluence",A),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function AR(o,e,i,r){let l=new WeakMap;function f(_){const g=r.render.frame,m=_.geometry,p=e.get(_,m);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),l.get(_)!==g&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const S=_.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return p}function h(){l=new WeakMap}function d(_){const g=_.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const VE=new Gn,LS=new FE(1,1),XE=new wE,kE=new JT,qE=new IE,OS=[],PS=[],zS=new Float32Array(16),IS=new Float32Array(9),BS=new Float32Array(4);function To(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=OS[l];if(f===void 0&&(f=new Float32Array(l),OS[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function sf(o,e){let i=PS[e];i===void 0&&(i=new Int32Array(e),PS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function bR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function CR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function wR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function DR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;BS.set(r),o.uniformMatrix2fv(this.addr,!1,BS),Mn(i,r)}}function UR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;IS.set(r),o.uniformMatrix3fv(this.addr,!1,IS),Mn(i,r)}}function NR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,r))return;zS.set(r),o.uniformMatrix4fv(this.addr,!1,zS),Mn(i,r)}}function LR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function PR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function zR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function IR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function FR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function GR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(LS.compareFunction=RE,f=LS):f=VE,i.setTexture2D(e||f,l)}function VR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||kE,l)}function XR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||qE,l)}function kR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||XE,l)}function qR(o){switch(o){case 5126:return bR;case 35664:return RR;case 35665:return CR;case 35666:return wR;case 35674:return DR;case 35675:return UR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return OR;case 35668:case 35672:return PR;case 35669:case 35673:return zR;case 5125:return IR;case 36294:return BR;case 36295:return FR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return kR}}function YR(o,e){o.uniform1fv(this.addr,e)}function WR(o,e){const i=To(e,this.size,2);o.uniform2fv(this.addr,i)}function ZR(o,e){const i=To(e,this.size,3);o.uniform3fv(this.addr,i)}function KR(o,e){const i=To(e,this.size,4);o.uniform4fv(this.addr,i)}function jR(o,e){const i=To(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QR(o,e){const i=To(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JR(o,e){const i=To(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $R(o,e){o.uniform1iv(this.addr,e)}function tC(o,e){o.uniform2iv(this.addr,e)}function eC(o,e){o.uniform3iv(this.addr,e)}function nC(o,e){o.uniform4iv(this.addr,e)}function iC(o,e){o.uniform1uiv(this.addr,e)}function aC(o,e){o.uniform2uiv(this.addr,e)}function rC(o,e){o.uniform3uiv(this.addr,e)}function sC(o,e){o.uniform4uiv(this.addr,e)}function oC(o,e,i){const r=this.cache,l=e.length,f=sf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||VE,f[h])}function lC(o,e,i){const r=this.cache,l=e.length,f=sf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||kE,f[h])}function uC(o,e,i){const r=this.cache,l=e.length,f=sf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||qE,f[h])}function cC(o,e,i){const r=this.cache,l=e.length,f=sf(i,l);xn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||XE,f[h])}function fC(o){switch(o){case 5126:return YR;case 35664:return WR;case 35665:return ZR;case 35666:return KR;case 35674:return jR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return $R;case 35667:case 35671:return tC;case 35668:case 35672:return eC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return aC;case 36295:return rC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return oC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return cC}}class hC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qR(i.type)}}class dC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fC(i.type)}}class pC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const pp=/(\w+)(\])?(\[|\.)?/g;function FS(o,e){o.seq.push(e),o.map[e.id]=e}function mC(o,e,i){const r=o.name,l=r.length;for(pp.lastIndex=0;;){const f=pp.exec(r),h=pp.lastIndex;let d=f[1];const _=f[2]==="]",g=f[3];if(_&&(d=d|0),g===void 0||g==="["&&h+2===l){FS(i,g===void 0?new hC(d,o,e):new dC(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new pC(d),FS(i,p)),i=p}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);mC(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],_=r[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function HS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const gC=37297;let _C=0;function vC(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const GS=new pe;function SC(o){Le._getMatrix(GS,Le.workingColorSpace,o);const e=`mat3( ${GS.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Xc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function VS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+vC(o.getShaderSource(e),d)}else return f}function EC(o,e){const i=SC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function yC(o,e){let i;switch(e){case AT:i="Linear";break;case bT:i="Reinhard";break;case RT:i="Cineon";break;case CT:i="ACESFilmic";break;case DT:i="AgX";break;case UT:i="Neutral";break;case wT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new dt;function xC(){Le.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function TC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function AC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function yl(o){return o!==""}function XS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bC=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(o){return o.replace(bC,CC)}const RC=new Map;function CC(o,e){let i=me[e];if(i===void 0){const r=RC.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return om(i)}const wC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qS(o){return o.replace(wC,DC)}function DC(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function YS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function UC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gE?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Da&&(e="SHADOWMAP_TYPE_VSM"),e}function NC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LC(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===_o&&(e="ENVMAP_MODE_REFRACTION"),e}function OC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _E:e="ENVMAP_BLENDING_MULTIPLY";break;case MT:e="ENVMAP_BLENDING_MIX";break;case TT:e="ENVMAP_BLENDING_ADD";break}return e}function PC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function zC(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const _=UC(i),g=NC(i),m=LC(i),p=OC(i),S=PC(i),x=MC(i),M=TC(f),A=l.createProgram();let y,E,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(yl).join(`
`),y.length>0&&(y+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(yl).join(`
`),E.length>0&&(E+=`
`)):(y=[YS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),E=[YS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",i.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Er?"#define TONE_MAPPING":"",i.toneMapping!==Er?me.tonemapping_pars_fragment:"",i.toneMapping!==Er?yC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,EC("linearToOutputTexel",i.outputColorSpace),xC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yl).join(`
`)),h=om(h),h=XS(h,i),h=kS(h,i),d=om(d),d=XS(d,i),d=kS(d,i),h=qS(h),d=qS(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,E=["#define varying in",i.glslVersion===oS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===oS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const N=U+y+h,R=U+E+d,B=HS(l,l.VERTEX_SHADER,N),z=HS(l,l.FRAGMENT_SHADER,R);l.attachShader(A,B),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(I){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",rt=l.getShaderInfoLog(B)||"",ct=l.getShaderInfoLog(z)||"",V=tt.trim(),X=rt.trim(),$=ct.trim();let Y=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,B,z);else{const Et=VS(l,B,"vertex"),Dt=VS(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Et+`
`+Dt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||$==="")&&(vt=!1);vt&&(I.diagnostics={runnable:Y,programLog:V,vertexShader:{log:X,prefix:y},fragmentShader:{log:$,prefix:E}})}l.deleteShader(B),l.deleteShader(z),G=new Hc(l,A),D=AC(l,A)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,gC)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_C++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=z,this}let IC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new FC(e),i.set(e,r)),r}}class FC{constructor(e){this.id=IC++,this.code=e,this.usedTimes=0}}function HC(o,e,i,r,l,f,h){const d=new DE,_=new BC,g=new Set,m=[],p=l.logarithmicDepthBuffer,S=l.vertexTextures;let x=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return g.add(D),D===0?"uv":`uv${D}`}function y(D,w,I,tt,rt){const ct=tt.fog,V=rt.geometry,X=D.isMeshStandardMaterial?tt.environment:null,$=(D.isMeshStandardMaterial?i:e).get(D.envMap||X),Y=$&&$.mapping===nf?$.image.height:null,vt=M[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const Et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Dt=Et!==void 0?Et.length:0;let Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let le,F,ut,W;if(vt){const ye=ea[vt];le=ye.vertexShader,F=ye.fragmentShader}else le=D.vertexShader,F=D.fragmentShader,_.update(D),ut=_.getVertexShaderID(D),W=_.getFragmentShaderID(D);const it=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),Ut=rt.isInstancedMesh===!0,wt=rt.isBatchedMesh===!0,xt=!!D.map,Gt=!!D.matcap,H=!!$,Te=!!D.aoMap,re=!!D.lightMap,Yt=!!D.bumpMap,Nt=!!D.normalMap,ie=!!D.displacementMap,It=!!D.emissiveMap,se=!!D.metalnessMap,Re=!!D.roughnessMap,we=D.anisotropy>0,L=D.clearcoat>0,b=D.dispersion>0,nt=D.iridescence>0,pt=D.sheen>0,ot=D.transmission>0,lt=we&&!!D.anisotropyMap,zt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,Xt=L&&!!D.clearcoatRoughnessMap,jt=nt&&!!D.iridescenceMap,Tt=nt&&!!D.iridescenceThicknessMap,At=pt&&!!D.sheenColorMap,te=pt&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,Bt=!!D.specularColorMap,fe=!!D.specularIntensityMap,q=ot&&!!D.transmissionMap,Ct=ot&&!!D.thicknessMap,Ot=!!D.gradientMap,qt=!!D.alphaMap,Mt=D.alphaTest>0,St=!!D.alphaHash,Qt=!!D.extensions;let ce=Er;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ve={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:le,fragmentShader:F,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:W,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:wt,batchingColor:wt&&rt._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&rt.instanceColor!==null,instancingMorph:Ut&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:vo,alphaToCoverage:!!D.alphaToCoverage,map:xt,matcap:Gt,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:Y,aoMap:Te,lightMap:re,bumpMap:Yt,normalMap:Nt,displacementMap:S&&ie,emissiveMap:It,normalMapObjectSpace:Nt&&D.normalMapType===zT,normalMapTangentSpace:Nt&&D.normalMapType===PT,metalnessMap:se,roughnessMap:Re,anisotropy:we,anisotropyMap:lt,clearcoat:L,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:nt,iridescenceMap:jt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:At,sheenRoughnessMap:te,specularMap:Jt,specularColorMap:Bt,specularIntensityMap:fe,transmission:ot,transmissionMap:q,thicknessMap:Ct,gradientMap:Ot,opaque:D.transparent===!1&&D.blending===ho&&D.alphaToCoverage===!1,alphaMap:qt,alphaTest:Mt,alphaHash:St,combine:D.combine,mapUv:xt&&A(D.map.channel),aoMapUv:Te&&A(D.aoMap.channel),lightMapUv:re&&A(D.lightMap.channel),bumpMapUv:Yt&&A(D.bumpMap.channel),normalMapUv:Nt&&A(D.normalMap.channel),displacementMapUv:ie&&A(D.displacementMap.channel),emissiveMapUv:It&&A(D.emissiveMap.channel),metalnessMapUv:se&&A(D.metalnessMap.channel),roughnessMapUv:Re&&A(D.roughnessMap.channel),anisotropyMapUv:lt&&A(D.anisotropyMap.channel),clearcoatMapUv:zt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:At&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&A(D.sheenRoughnessMap.channel),specularMapUv:Jt&&A(D.specularMap.channel),specularColorMapUv:Bt&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Ct&&A(D.thicknessMap.channel),alphaMapUv:qt&&A(D.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Nt||we),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!V.attributes.uv&&(xt||qt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:rt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ua,flipSided:D.side===ti,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Qt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&D.extensions.multiDraw===!0||wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=g.has(1),Ve.vertexUv2s=g.has(2),Ve.vertexUv3s=g.has(3),g.clear(),Ve}function E(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)w.push(I),w.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(U(w,D),N(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function U(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const w=M[D.type];let I;if(w){const tt=ea[w];I=h1.clone(tt.uniforms)}else I=D.uniforms;return I}function B(D,w){let I;for(let tt=0,rt=m.length;tt<rt;tt++){const ct=m[tt];if(ct.cacheKey===w){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new zC(o,w,D,f),m.push(I)),I}function z(D){if(--D.usedTimes===0){const w=m.indexOf(D);m[w]=m[m.length-1],m.pop(),D.destroy()}}function O(D){_.remove(D)}function G(){_.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:R,acquireProgram:B,releaseProgram:z,releaseShaderCache:O,programs:m,dispose:G}}function GC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function VC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function WS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ZS(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(p,S,x,M,A,y){let E=o[e];return E===void 0?(E={id:p.id,object:p,geometry:S,material:x,groupOrder:M,renderOrder:p.renderOrder,z:A,group:y},o[e]=E):(E.id=p.id,E.object=p,E.geometry=S,E.material=x,E.groupOrder=M,E.renderOrder=p.renderOrder,E.z=A,E.group=y),e++,E}function d(p,S,x,M,A,y){const E=h(p,S,x,M,A,y);x.transmission>0?r.push(E):x.transparent===!0?l.push(E):i.push(E)}function _(p,S,x,M,A,y){const E=h(p,S,x,M,A,y);x.transmission>0?r.unshift(E):x.transparent===!0?l.unshift(E):i.unshift(E)}function g(p,S){i.length>1&&i.sort(p||VC),r.length>1&&r.sort(S||WS),l.length>1&&l.sort(S||WS)}function m(){for(let p=e,S=o.length;p<S;p++){const x=o[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:_,finish:m,sort:g}}function XC(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new ZS,o.set(r,[h])):l>=f.length?(h=new ZS,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function kC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new dt,color:new qe};break;case"SpotLight":i={position:new dt,direction:new dt,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new dt,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new dt,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new dt,halfWidth:new dt,halfHeight:new dt};break}return o[e.id]=i,i}}}function qC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let YC=0;function WC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ZC(o){const e=new kC,i=qC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new dt);const l=new dt,f=new yn,h=new yn;function d(g){let m=0,p=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,M=0,A=0,y=0,E=0,U=0,N=0,R=0,B=0,z=0,O=0;g.sort(WC);for(let D=0,w=g.length;D<w;D++){const I=g[D],tt=I.color,rt=I.intensity,ct=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=tt.r*rt,p+=tt.g*rt,S+=tt.b*rt;else if(I.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(I.sh.coefficients[X],rt);O++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,Y=i.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=V,r.directionalShadowMatrix[x]=I.shadow.matrix,U++}r.directional[x]=X,x++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(tt).multiplyScalar(rt),X.distance=ct,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,r.spot[A]=X;const $=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,$.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[A]=$.matrix,I.castShadow){const Y=i.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=V,R++}A++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(tt).multiplyScalar(rt),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=X,y++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const $=I.shadow,Y=i.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=V,r.pointShadowMatrix[M]=I.shadow.matrix,N++}r.point[M]=X,M++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(rt),X.groundColor.copy(I.groundColor).multiplyScalar(rt),r.hemi[E]=X,E++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=p,r.ambient[2]=S;const G=r.hash;(G.directionalLength!==x||G.pointLength!==M||G.spotLength!==A||G.rectAreaLength!==y||G.hemiLength!==E||G.numDirectionalShadows!==U||G.numPointShadows!==N||G.numSpotShadows!==R||G.numSpotMaps!==B||G.numLightProbes!==O)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=E,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=R+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,G.directionalLength=x,G.pointLength=M,G.spotLength=A,G.rectAreaLength=y,G.hemiLength=E,G.numDirectionalShadows=U,G.numPointShadows=N,G.numSpotShadows=R,G.numSpotMaps=B,G.numLightProbes=O,r.version=YC++)}function _(g,m){let p=0,S=0,x=0,M=0,A=0;const y=m.matrixWorldInverse;for(let E=0,U=g.length;E<U;E++){const N=g[E];if(N.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),p++}else if(N.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),x++}else if(N.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),h.identity(),f.copy(N.matrixWorld),f.premultiply(y),h.extractRotation(f),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),M++}else if(N.isPointLight){const R=r.point[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:_,state:r}}function KS(o){const e=new ZC(o),i=[],r=[];function l(m){g.camera=m,i.length=0,r.length=0}function f(m){i.push(m)}function h(m){r.push(m)}function d(){e.setup(i)}function _(m){e.setupView(i,m)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function KC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new KS(o),e.set(l,[d])):f>=h.length?(d=new KS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const jC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QC=`uniform sampler2D shadow_pass;
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
}`;function JC(o,e,i){let r=new BE;const l=new Ye,f=new Ye,h=new cn,d=new T1({depthPacking:OT}),_=new A1,g={},m=i.maxTextureSize,p={[yr]:ti,[ti]:yr,[Ua]:Ua},S=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:jC,fragmentShader:QC}),x=S.clone();x.defines.HORIZONTAL_PASS=1;const M=new xr;M.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ra(M,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gE;let E=this.type;this.render=function(z,O,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Sr),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const rt=E!==Da&&this.type===Da,ct=E===Da&&this.type!==Da;for(let V=0,X=z.length;V<X;V++){const $=z[V],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const vt=Y.getFrameExtents();if(l.multiply(vt),f.copy(Y.mapSize),(l.x>m||l.y>m)&&(l.x>m&&(f.x=Math.floor(m/vt.x),l.x=f.x*vt.x,Y.mapSize.x=f.x),l.y>m&&(f.y=Math.floor(m/vt.y),l.y=f.y*vt.y,Y.mapSize.y=f.y)),Y.map===null||rt===!0||ct===!0){const Dt=this.type!==Da?{minFilter:pi,magFilter:pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new os(l.x,l.y,Dt),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let Dt=0;Dt<Et;Dt++){const Wt=Y.getViewport(Dt);h.set(f.x*Wt.x,f.y*Wt.y,f.x*Wt.z,f.y*Wt.w),tt.viewport(h),Y.updateMatrices($,Dt),r=Y.getFrustum(),R(O,G,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Da&&U(Y,G),Y.needsUpdate=!1}E=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,I)};function U(z,O){const G=e.update(A);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new os(l.x,l.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,G,S,A,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,G,x,A,null)}function N(z,O,G,D){let w=null;const I=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)w=I;else if(w=G.isPointLight===!0?_:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const tt=w.uuid,rt=O.uuid;let ct=g[tt];ct===void 0&&(ct={},g[tt]=ct);let V=ct[rt];V===void 0&&(V=w.clone(),ct[rt]=V,O.addEventListener("dispose",B)),w=V}if(w.visible=O.visible,w.wireframe=O.wireframe,D===Da?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:p[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const tt=o.properties.get(w);tt.light=G}return w}function R(z,O,G,D,w){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===Da)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const rt=e.update(z),ct=z.material;if(Array.isArray(ct)){const V=rt.groups;for(let X=0,$=V.length;X<$;X++){const Y=V[X],vt=ct[Y.materialIndex];if(vt&&vt.visible){const Et=N(z,vt,D,w);z.onBeforeShadow(o,z,O,G,rt,Et,Y),o.renderBufferDirect(G,null,rt,Et,z,Y),z.onAfterShadow(o,z,O,G,rt,Et,Y)}}}else if(ct.visible){const V=N(z,ct,D,w);z.onBeforeShadow(o,z,O,G,rt,V,null),o.renderBufferDirect(G,null,rt,V,z,null),z.onAfterShadow(o,z,O,G,rt,V,null)}}const tt=z.children;for(let rt=0,ct=tt.length;rt<ct;rt++)R(tt[rt],O,G,D,w)}function B(z){z.target.removeEventListener("dispose",B);for(const G in g){const D=g[G],w=z.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const $C={[yp]:xp,[Mp]:bp,[Tp]:Rp,[mo]:Ap,[xp]:yp,[bp]:Mp,[Rp]:Tp,[Ap]:mo};function t2(o,e){function i(){let q=!1;const Ct=new cn;let Ot=null;const qt=new cn(0,0,0,0);return{setMask:function(Mt){Ot!==Mt&&!q&&(o.colorMask(Mt,Mt,Mt,Mt),Ot=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,St,Qt,ce,Ve){Ve===!0&&(Mt*=ce,St*=ce,Qt*=ce),Ct.set(Mt,St,Qt,ce),qt.equals(Ct)===!1&&(o.clearColor(Mt,St,Qt,ce),qt.copy(Ct))},reset:function(){q=!1,Ot=null,qt.set(-1,0,0,0)}}}function r(){let q=!1,Ct=!1,Ot=null,qt=null,Mt=null;return{setReversed:function(St){if(Ct!==St){const Qt=e.get("EXT_clip_control");St?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=St;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return Ct},setTest:function(St){St?it(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(St){Ot!==St&&!q&&(o.depthMask(St),Ot=St)},setFunc:function(St){if(Ct&&(St=$C[St]),qt!==St){switch(St){case yp:o.depthFunc(o.NEVER);break;case xp:o.depthFunc(o.ALWAYS);break;case Mp:o.depthFunc(o.LESS);break;case mo:o.depthFunc(o.LEQUAL);break;case Tp:o.depthFunc(o.EQUAL);break;case Ap:o.depthFunc(o.GEQUAL);break;case bp:o.depthFunc(o.GREATER);break;case Rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}qt=St}},setLocked:function(St){q=St},setClear:function(St){Mt!==St&&(Ct&&(St=1-St),o.clearDepth(St),Mt=St)},reset:function(){q=!1,Ot=null,qt=null,Mt=null,Ct=!1}}}function l(){let q=!1,Ct=null,Ot=null,qt=null,Mt=null,St=null,Qt=null,ce=null,Ve=null;return{setTest:function(ye){q||(ye?it(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(ye){Ct!==ye&&!q&&(o.stencilMask(ye),Ct=ye)},setFunc:function(ye,nn,_n){(Ot!==ye||qt!==nn||Mt!==_n)&&(o.stencilFunc(ye,nn,_n),Ot=ye,qt=nn,Mt=_n)},setOp:function(ye,nn,_n){(St!==ye||Qt!==nn||ce!==_n)&&(o.stencilOp(ye,nn,_n),St=ye,Qt=nn,ce=_n)},setLocked:function(ye){q=ye},setClear:function(ye){Ve!==ye&&(o.clearStencil(ye),Ve=ye)},reset:function(){q=!1,Ct=null,Ot=null,qt=null,Mt=null,St=null,Qt=null,ce=null,Ve=null}}}const f=new i,h=new r,d=new l,_=new WeakMap,g=new WeakMap;let m={},p={},S=new WeakMap,x=[],M=null,A=!1,y=null,E=null,U=null,N=null,R=null,B=null,z=null,O=new qe(0,0,0),G=0,D=!1,w=null,I=null,tt=null,rt=null,ct=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=$>=2);let vt=null,Et={};const Dt=o.getParameter(o.SCISSOR_BOX),Wt=o.getParameter(o.VIEWPORT),le=new cn().fromArray(Dt),F=new cn().fromArray(Wt);function ut(q,Ct,Ot,qt){const Mt=new Uint8Array(4),St=o.createTexture();o.bindTexture(q,St),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qt=0;Qt<Ot;Qt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,qt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ct+Qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return St}const W={};W[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(mo),Yt(!1),Nt(eS),it(o.CULL_FACE),Te(Sr);function it(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function yt(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function Ut(q,Ct){return p[q]!==Ct?(o.bindFramebuffer(q,Ct),p[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function wt(q,Ct){let Ot=x,qt=!1;if(q){Ot=S.get(Ct),Ot===void 0&&(Ot=[],S.set(Ct,Ot));const Mt=q.textures;if(Ot.length!==Mt.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Qt=Mt.length;St<Qt;St++)Ot[St]=o.COLOR_ATTACHMENT0+St;Ot.length=Mt.length,qt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,qt=!0);qt&&o.drawBuffers(Ot)}function xt(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const Gt={[es]:o.FUNC_ADD,[sT]:o.FUNC_SUBTRACT,[oT]:o.FUNC_REVERSE_SUBTRACT};Gt[lT]=o.MIN,Gt[uT]=o.MAX;const H={[cT]:o.ZERO,[fT]:o.ONE,[hT]:o.SRC_COLOR,[Sp]:o.SRC_ALPHA,[vT]:o.SRC_ALPHA_SATURATE,[gT]:o.DST_COLOR,[pT]:o.DST_ALPHA,[dT]:o.ONE_MINUS_SRC_COLOR,[Ep]:o.ONE_MINUS_SRC_ALPHA,[_T]:o.ONE_MINUS_DST_COLOR,[mT]:o.ONE_MINUS_DST_ALPHA,[ST]:o.CONSTANT_COLOR,[ET]:o.ONE_MINUS_CONSTANT_COLOR,[yT]:o.CONSTANT_ALPHA,[xT]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(q,Ct,Ot,qt,Mt,St,Qt,ce,Ve,ye){if(q===Sr){A===!0&&(yt(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),q!==rT){if(q!==y||ye!==D){if((E!==es||R!==es)&&(o.blendEquation(o.FUNC_ADD),E=es,R=es),ye)switch(q){case ho:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nS:o.blendFunc(o.ONE,o.ONE);break;case iS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case aS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ho:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case iS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case aS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,N=null,B=null,z=null,O.set(0,0,0),G=0,y=q,D=ye}return}Mt=Mt||Ct,St=St||Ot,Qt=Qt||qt,(Ct!==E||Mt!==R)&&(o.blendEquationSeparate(Gt[Ct],Gt[Mt]),E=Ct,R=Mt),(Ot!==U||qt!==N||St!==B||Qt!==z)&&(o.blendFuncSeparate(H[Ot],H[qt],H[St],H[Qt]),U=Ot,N=qt,B=St,z=Qt),(ce.equals(O)===!1||Ve!==G)&&(o.blendColor(ce.r,ce.g,ce.b,Ve),O.copy(ce),G=Ve),y=q,D=!1}function re(q,Ct){q.side===Ua?yt(o.CULL_FACE):it(o.CULL_FACE);let Ot=q.side===ti;Ct&&(Ot=!Ot),Yt(Ot),q.blending===ho&&q.transparent===!1?Te(Sr):Te(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),f.setMask(q.colorWrite);const qt=q.stencilWrite;d.setTest(qt),qt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),It(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function Nt(q){q!==nT?(it(o.CULL_FACE),q!==I&&(q===eS?o.cullFace(o.BACK):q===iT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),I=q}function ie(q){q!==tt&&(X&&o.lineWidth(q),tt=q)}function It(q,Ct,Ot){q?(it(o.POLYGON_OFFSET_FILL),(rt!==Ct||ct!==Ot)&&(o.polygonOffset(Ct,Ot),rt=Ct,ct=Ot)):yt(o.POLYGON_OFFSET_FILL)}function se(q){q?it(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function Re(q){q===void 0&&(q=o.TEXTURE0+V-1),vt!==q&&(o.activeTexture(q),vt=q)}function we(q,Ct,Ot){Ot===void 0&&(vt===null?Ot=o.TEXTURE0+V-1:Ot=vt);let qt=Et[Ot];qt===void 0&&(qt={type:void 0,texture:void 0},Et[Ot]=qt),(qt.type!==q||qt.texture!==Ct)&&(vt!==Ot&&(o.activeTexture(Ot),vt=Ot),o.bindTexture(q,Ct||W[q]),qt.type=q,qt.texture=Ct)}function L(){const q=Et[vt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(q){le.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),le.copy(q))}function te(q){F.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),F.copy(q))}function Jt(q,Ct){let Ot=g.get(Ct);Ot===void 0&&(Ot=new WeakMap,g.set(Ct,Ot));let qt=Ot.get(q);qt===void 0&&(qt=o.getUniformBlockIndex(Ct,q.name),Ot.set(q,qt))}function Bt(q,Ct){const qt=g.get(Ct).get(q);_.get(Ct)!==qt&&(o.uniformBlockBinding(Ct,qt,q.__bindingPointIndex),_.set(Ct,qt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},vt=null,Et={},p={},S=new WeakMap,x=[],M=null,A=!1,y=null,E=null,U=null,N=null,R=null,B=null,z=null,O=new qe(0,0,0),G=0,D=!1,w=null,I=null,tt=null,rt=null,ct=null,le.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:yt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:xt,setBlending:Te,setMaterial:re,setFlipSided:Yt,setCullFace:Nt,setLineWidth:ie,setPolygonOffset:It,setScissorTest:se,activeTexture:Re,bindTexture:we,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:jt,texImage3D:Tt,updateUBOMapping:Jt,uniformBlockBinding:Bt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:ot,compressedTexSubImage2D:lt,compressedTexSubImage3D:zt,scissor:At,viewport:te,reset:fe}}function e2(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ye,m=new WeakMap;let p;const S=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,b){return x?new OffscreenCanvas(L,b):qc("canvas")}function A(L,b,nt){let pt=1;const ot=we(L);if((ot.width>nt||ot.height>nt)&&(pt=nt/Math.max(ot.width,ot.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(pt*ot.width),zt=Math.floor(pt*ot.height);p===void 0&&(p=M(lt,zt));const Rt=b?M(lt,zt):p;return Rt.width=lt,Rt.height=zt,Rt.getContext("2d").drawImage(L,0,0,lt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+lt+"x"+zt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function y(L){return L.generateMipmaps}function E(L){o.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,b,nt,pt,ot=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=b;if(b===o.RED&&(nt===o.FLOAT&&(lt=o.R32F),nt===o.HALF_FLOAT&&(lt=o.R16F),nt===o.UNSIGNED_BYTE&&(lt=o.R8)),b===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(lt=o.R8UI),nt===o.UNSIGNED_SHORT&&(lt=o.R16UI),nt===o.UNSIGNED_INT&&(lt=o.R32UI),nt===o.BYTE&&(lt=o.R8I),nt===o.SHORT&&(lt=o.R16I),nt===o.INT&&(lt=o.R32I)),b===o.RG&&(nt===o.FLOAT&&(lt=o.RG32F),nt===o.HALF_FLOAT&&(lt=o.RG16F),nt===o.UNSIGNED_BYTE&&(lt=o.RG8)),b===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(lt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(lt=o.RG16UI),nt===o.UNSIGNED_INT&&(lt=o.RG32UI),nt===o.BYTE&&(lt=o.RG8I),nt===o.SHORT&&(lt=o.RG16I),nt===o.INT&&(lt=o.RG32I)),b===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),nt===o.UNSIGNED_INT&&(lt=o.RGB32UI),nt===o.BYTE&&(lt=o.RGB8I),nt===o.SHORT&&(lt=o.RGB16I),nt===o.INT&&(lt=o.RGB32I)),b===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(lt=o.RGBA32UI),nt===o.BYTE&&(lt=o.RGBA8I),nt===o.SHORT&&(lt=o.RGBA16I),nt===o.INT&&(lt=o.RGBA32I)),b===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),b===o.RGBA){const zt=ot?Xc:Le.getTransfer(pt);nt===o.FLOAT&&(lt=o.RGBA32F),nt===o.HALF_FLOAT&&(lt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(lt=zt===ke?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function R(L,b){let nt;return L?b===null||b===ss||b===Cl?nt=o.DEPTH24_STENCIL8:b===La?nt=o.DEPTH32F_STENCIL8:b===Rl&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===Cl?nt=o.DEPTH_COMPONENT24:b===La?nt=o.DEPTH_COMPONENT32F:b===Rl&&(nt=o.DEPTH_COMPONENT16),nt}function B(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==wi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function z(L){const b=L.target;b.removeEventListener("dispose",z),G(b),b.isVideoTexture&&m.delete(b)}function O(L){const b=L.target;b.removeEventListener("dispose",O),w(b)}function G(L){const b=r.get(L);if(b.__webglInit===void 0)return;const nt=L.source,pt=S.get(nt);if(pt){const ot=pt[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&D(L),Object.keys(pt).length===0&&S.delete(nt)}r.remove(L)}function D(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const nt=L.source,pt=S.get(nt);delete pt[b.__cacheKey],h.memory.textures--}function w(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let ot=0;ot<b.__webglFramebuffer[pt].length;ot++)o.deleteFramebuffer(b.__webglFramebuffer[pt][ot]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let pt=0,ot=nt.length;pt<ot;pt++){const lt=r.get(nt[pt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(nt[pt])}r.remove(L)}let I=0;function tt(){I=0}function rt(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ct(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){const nt=r.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&nt.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,L,b);return}}else L.isExternalTexture&&(nt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+b)}function X(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){W(nt,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+b)}function $(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){W(nt,L,b);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+b)}function Y(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){it(nt,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+b)}const vt={[Dp]:o.REPEAT,[as]:o.CLAMP_TO_EDGE,[Up]:o.MIRRORED_REPEAT},Et={[pi]:o.NEAREST,[NT]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Bd]:o.LINEAR_MIPMAP_NEAREST,[rs]:o.LINEAR_MIPMAP_LINEAR},Dt={[IT]:o.NEVER,[XT]:o.ALWAYS,[BT]:o.LESS,[RE]:o.LEQUAL,[FT]:o.EQUAL,[VT]:o.GEQUAL,[HT]:o.GREATER,[GT]:o.NOTEQUAL};function Wt(L,b){if(b.type===La&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===wi||b.magFilter===Bd||b.magFilter===cc||b.magFilter===rs||b.minFilter===wi||b.minFilter===Bd||b.minFilter===cc||b.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,vt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Dt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pi||b.minFilter!==cc&&b.minFilter!==rs||b.type===La&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function le(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",z));const pt=b.source;let ot=S.get(pt);ot===void 0&&(ot={},S.set(pt,ot));const lt=ct(b);if(lt!==L.__cacheKey){ot[lt]===void 0&&(ot[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),ot[lt].usedTimes++;const zt=ot[L.__cacheKey];zt!==void 0&&(ot[L.__cacheKey].usedTimes--,zt.usedTimes===0&&D(b)),L.__cacheKey=lt,L.__webglTexture=ot[lt].texture}return nt}function F(L,b,nt){return Math.floor(Math.floor(L/nt)/b)}function ut(L,b,nt,pt){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,nt,pt,b.data);else{lt.sort((Tt,At)=>Tt.start-At.start);let zt=0;for(let Tt=1;Tt<lt.length;Tt++){const At=lt[zt],te=lt[Tt],Jt=At.start+At.count,Bt=F(te.start,b.width,4),fe=F(At.start,b.width,4);te.start<=Jt+1&&Bt===fe&&F(te.start+te.count-1,b.width,4)===Bt?At.count=Math.max(At.count,te.start+te.count-At.start):(++zt,lt[zt]=te)}lt.length=zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,At=lt.length;Tt<At;Tt++){const te=lt[Tt],Jt=Math.floor(te.start/4),Bt=Math.ceil(te.count/4),fe=Jt%b.width,q=Math.floor(Jt/b.width),Ct=Bt,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,fe,q,Ct,Ot,nt,pt,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function W(L,b,nt){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const ot=le(L,b),lt=b.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+nt);const zt=r.get(lt);if(lt.version!==zt.__version||ot===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Le.getPrimaries(Le.workingColorSpace),Xt=b.colorSpace===vr?null:Le.getPrimaries(b.colorSpace),jt=b.colorSpace===vr||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Tt=A(b.image,!1,l.maxTextureSize);Tt=Re(b,Tt);const At=f.convert(b.format,b.colorSpace),te=f.convert(b.type);let Jt=N(b.internalFormat,At,te,b.colorSpace,b.isVideoTexture);Wt(pt,b);let Bt;const fe=b.mipmaps,q=b.isVideoTexture!==!0,Ct=zt.__version===void 0||ot===!0,Ot=lt.dataReady,qt=B(b,Tt);if(b.isDepthTexture)Jt=R(b.format===Dl,b.type),Ct&&(q?i.texStorage2D(o.TEXTURE_2D,1,Jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Jt,Tt.width,Tt.height,0,At,te,null));else if(b.isDataTexture)if(fe.length>0){q&&Ct&&i.texStorage2D(o.TEXTURE_2D,qt,Jt,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],q?Ot&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,At,te,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,At,te,Bt.data);b.generateMipmaps=!1}else q?(Ct&&i.texStorage2D(o.TEXTURE_2D,qt,Jt,Tt.width,Tt.height),Ot&&ut(b,Tt,At,te)):i.texImage2D(o.TEXTURE_2D,0,Jt,Tt.width,Tt.height,0,At,te,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Jt,fe[0].width,fe[0].height,Tt.depth);for(let Mt=0,St=fe.length;Mt<St;Mt++)if(Bt=fe[Mt],b.format!==Di)if(At!==null)if(q){if(Ot)if(b.layerUpdates.size>0){const Qt=AS(Bt.width,Bt.height,b.format,b.type);for(const ce of b.layerUpdates){const Ve=Bt.data.subarray(ce*Qt/Bt.data.BYTES_PER_ELEMENT,(ce+1)*Qt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ce,Bt.width,Bt.height,1,At,Ve)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,Tt.depth,At,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Bt.width,Bt.height,Tt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,Tt.depth,At,te,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Jt,Bt.width,Bt.height,Tt.depth,0,At,te,Bt.data)}else{q&&Ct&&i.texStorage2D(o.TEXTURE_2D,qt,Jt,fe[0].width,fe[0].height);for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],b.format!==Di?At!==null?q?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,At,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ot&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,At,te,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,Jt,Bt.width,Bt.height,0,At,te,Bt.data)}else if(b.isDataArrayTexture)if(q){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,qt,Jt,Tt.width,Tt.height,Tt.depth),Ot)if(b.layerUpdates.size>0){const Mt=AS(Tt.width,Tt.height,b.format,b.type);for(const St of b.layerUpdates){const Qt=Tt.data.subarray(St*Mt/Tt.data.BYTES_PER_ELEMENT,(St+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Tt.width,Tt.height,1,At,te,Qt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,te,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,Tt.width,Tt.height,Tt.depth,0,At,te,Tt.data);else if(b.isData3DTexture)q?(Ct&&i.texStorage3D(o.TEXTURE_3D,qt,Jt,Tt.width,Tt.height,Tt.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,At,te,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,Tt.width,Tt.height,Tt.depth,0,At,te,Tt.data);else if(b.isFramebufferTexture){if(Ct)if(q)i.texStorage2D(o.TEXTURE_2D,qt,Jt,Tt.width,Tt.height);else{let Mt=Tt.width,St=Tt.height;for(let Qt=0;Qt<qt;Qt++)i.texImage2D(o.TEXTURE_2D,Qt,Jt,Mt,St,0,At,te,null),Mt>>=1,St>>=1}}else if(fe.length>0){if(q&&Ct){const Mt=we(fe[0]);i.texStorage2D(o.TEXTURE_2D,qt,Jt,Mt.width,Mt.height)}for(let Mt=0,St=fe.length;Mt<St;Mt++)Bt=fe[Mt],q?Ot&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,At,te,Bt):i.texImage2D(o.TEXTURE_2D,Mt,Jt,At,te,Bt);b.generateMipmaps=!1}else if(q){if(Ct){const Mt=we(Tt);i.texStorage2D(o.TEXTURE_2D,qt,Jt,Mt.width,Mt.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At,te,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Jt,At,te,Tt);y(b)&&E(pt),zt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function it(L,b,nt){if(b.image.length!==6)return;const pt=le(L,b),ot=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const lt=r.get(ot);if(ot.version!==lt.__version||pt===!0){i.activeTexture(o.TEXTURE0+nt);const zt=Le.getPrimaries(Le.workingColorSpace),Rt=b.colorSpace===vr?null:Le.getPrimaries(b.colorSpace),Xt=b.colorSpace===vr||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let St=0;St<6;St++)!jt&&!Tt?At[St]=A(b.image[St],!0,l.maxCubemapSize):At[St]=Tt?b.image[St].image:b.image[St],At[St]=Re(b,At[St]);const te=At[0],Jt=f.convert(b.format,b.colorSpace),Bt=f.convert(b.type),fe=N(b.internalFormat,Jt,Bt,b.colorSpace),q=b.isVideoTexture!==!0,Ct=lt.__version===void 0||pt===!0,Ot=ot.dataReady;let qt=B(b,te);Wt(o.TEXTURE_CUBE_MAP,b);let Mt;if(jt){q&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,te.width,te.height);for(let St=0;St<6;St++){Mt=At[St].mipmaps;for(let Qt=0;Qt<Mt.length;Qt++){const ce=Mt[Qt];b.format!==Di?Jt!==null?q?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,0,0,ce.width,ce.height,Jt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,0,0,ce.width,ce.height,Jt,Bt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt,fe,ce.width,ce.height,0,Jt,Bt,ce.data)}}}else{if(Mt=b.mipmaps,q&&Ct){Mt.length>0&&qt++;const St=we(At[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,qt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(Tt){q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,At[St].width,At[St].height,Jt,Bt,At[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,At[St].width,At[St].height,0,Jt,Bt,At[St].data);for(let Qt=0;Qt<Mt.length;Qt++){const Ve=Mt[Qt].image[St].image;q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,0,0,Ve.width,Ve.height,Jt,Bt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,fe,Ve.width,Ve.height,0,Jt,Bt,Ve.data)}}else{q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Jt,Bt,At[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Jt,Bt,At[St]);for(let Qt=0;Qt<Mt.length;Qt++){const ce=Mt[Qt];q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,0,0,Jt,Bt,ce.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Qt+1,fe,Jt,Bt,ce.image[St])}}}y(b)&&E(o.TEXTURE_CUBE_MAP),lt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function yt(L,b,nt,pt,ot,lt){const zt=f.convert(nt.format,nt.colorSpace),Rt=f.convert(nt.type),Xt=N(nt.internalFormat,zt,Rt,nt.colorSpace),jt=r.get(b),Tt=r.get(nt);if(Tt.__renderTarget=b,!jt.__hasExternalTextures){const At=Math.max(1,b.width>>lt),te=Math.max(1,b.height>>lt);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?i.texImage3D(ot,lt,Xt,At,te,b.depth,0,zt,Rt,null):i.texImage2D(ot,lt,Xt,At,te,0,zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),It(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,ot,Tt.__webglTexture,0,ie(b)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,ot,Tt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(L,b,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const pt=b.depthTexture,ot=pt&&pt.isDepthTexture?pt.type:null,lt=R(b.stencilBuffer,ot),zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ie(b);It(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,lt,b.width,b.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,lt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,lt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,L)}else{const pt=b.textures;for(let ot=0;ot<pt.length;ot++){const lt=pt[ot],zt=f.convert(lt.format,lt.colorSpace),Rt=f.convert(lt.type),Xt=N(lt.internalFormat,zt,Rt,lt.colorSpace),jt=ie(b);nt&&It(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Xt,b.width,b.height):It(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Xt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const ot=pt.__webglTexture,lt=ie(b);if(b.depthTexture.format===wl)It(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(b.depthTexture.format===Dl)It(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function xt(L){const b=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",ot)};pt.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=pt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?wt(b.__webglFramebuffer[0],L):wt(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ut(b.__webglDepthbuffer[pt],L,!1);else{const ot=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,lt)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ut(b.__webglDepthbuffer,L,!1);else{const ot=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(L,b,nt){const pt=r.get(L);b!==void 0&&yt(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&xt(L)}function H(L){const b=L.texture,nt=r.get(L),pt=r.get(b);L.addEventListener("dispose",O);const ot=L.textures,lt=L.isWebGLCubeRenderTarget===!0,zt=ot.length>1;if(zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),lt){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)nt.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,Xt=ot.length;Rt<Xt;Rt++){const jt=r.get(ot[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&It(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ot.length;Rt++){const Xt=ot[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const jt=f.convert(Xt.format,Xt.colorSpace),Tt=f.convert(Xt.type),At=N(Xt.internalFormat,jt,Tt,Xt.colorSpace,L.isXRRenderTarget===!0),te=ie(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,At,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Wt(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)yt(nt.__webglFramebuffer[Rt][Xt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else yt(nt.__webglFramebuffer[Rt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(b)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Xt=ot.length;Rt<Xt;Rt++){const jt=ot[Rt],Tt=r.get(jt);let At=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,Tt.__webglTexture),Wt(At,jt),yt(nt.__webglFramebuffer,L,jt,o.COLOR_ATTACHMENT0+Rt,At,0),y(jt)&&E(At)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,pt.__webglTexture),Wt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)yt(nt.__webglFramebuffer[Xt],L,b,o.COLOR_ATTACHMENT0,Rt,Xt);else yt(nt.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Rt,0);y(b)&&E(Rt),i.unbindTexture()}L.depthBuffer&&xt(L)}function Te(L){const b=L.textures;for(let nt=0,pt=b.length;nt<pt;nt++){const ot=b[nt];if(y(ot)){const lt=U(L),zt=r.get(ot).__webglTexture;i.bindTexture(lt,zt),E(lt),i.unbindTexture()}}}const re=[],Yt=[];function Nt(L){if(L.samples>0){if(It(L)===!1){const b=L.textures,nt=L.width,pt=L.height;let ot=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(L),Rt=b.length>1;if(Rt)for(let jt=0;jt<b.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Tt=r.get(b[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,ot,o.NEAREST),_===!0&&(re.length=0,Yt.length=0,re.push(o.COLOR_ATTACHMENT0+jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(lt),Yt.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Yt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<b.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Tt=r.get(b[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&_){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(L){return Math.min(l.maxSamples,L.samples)}function It(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function se(L){const b=h.render.frame;m.get(L)!==b&&(m.set(L,b),L.update())}function Re(L,b){const nt=L.colorSpace,pt=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==vo&&nt!==vr&&(Le.getTransfer(nt)===ke?(pt!==Di||ot!==Pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=rt,this.resetTextureUnits=tt,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Gt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=It}function n2(o,e){function i(r,l=vr){let f;const h=Le.getTransfer(l);if(r===Pa)return o.UNSIGNED_BYTE;if(r===Um)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Nm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===yE)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===xE)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===SE)return o.BYTE;if(r===EE)return o.SHORT;if(r===Rl)return o.UNSIGNED_SHORT;if(r===Dm)return o.INT;if(r===ss)return o.UNSIGNED_INT;if(r===La)return o.FLOAT;if(r===zl)return o.HALF_FLOAT;if(r===ME)return o.ALPHA;if(r===TE)return o.RGB;if(r===Di)return o.RGBA;if(r===wl)return o.DEPTH_COMPONENT;if(r===Dl)return o.DEPTH_STENCIL;if(r===AE)return o.RED;if(r===Lm)return o.RED_INTEGER;if(r===bE)return o.RG;if(r===Om)return o.RG_INTEGER;if(r===Pm)return o.RGBA_INTEGER;if(r===zc||r===Ic||r===Bc||r===Fc)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===zc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===zc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Np||r===Lp||r===Op||r===Pp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Np)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Op)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zp||r===Ip||r===Bp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===zp||r===Ip)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Bp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp||r===qp||r===Yp||r===Wp||r===Zp||r===Kp||r===jp||r===Qp||r===Jp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$p||r===tm||r===em)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===$p)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tm)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===em)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nm||r===im||r===am||r===rm)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===nm)return f.COMPRESSED_RED_RGTC1_EXT;if(r===im)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===am)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rm)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const i2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
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

}`;class r2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new HE(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:i2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ra(new rf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s2 extends Mo{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",_=1,g=null,m=null,p=null,S=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",y=new r2,E={},U=i.getContextAttributes();let N=null,R=null;const B=[],z=[],O=new Ye;let G=null;const D=new Ri;D.viewport=new cn;const w=new Ri;w.viewport=new cn;const I=[D,w],tt=new R1;let rt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=B[W];return it===void 0&&(it=new op,B[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=B[W];return it===void 0&&(it=new op,B[W]=it),it.getGripSpace()},this.getHand=function(W){let it=B[W];return it===void 0&&(it=new op,B[W]=it),it.getHandSpace()};function V(W){const it=z.indexOf(W.inputSource);if(it===-1)return;const yt=B[it];yt!==void 0&&(yt.update(W.inputSource,W.frame,g||h),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",$);for(let W=0;W<B.length;W++){const it=z[W];it!==null&&(z[W]=null,B[W].disconnect(it))}rt=null,ct=null,y.reset();for(const W in E)delete E[W];e.setRenderTarget(N),x=null,S=null,p=null,l=null,R=null,ut.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(W){g=W},this.getBaseLayer=function(){return S!==null?S:x},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",X),l.addEventListener("inputsourceschange",$),U.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ut=null,wt=null;U.depth&&(wt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=U.stencil?Dl:wl,Ut=U.stencil?Cl:ss);const xt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(xt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),R=new os(S.textureWidth,S.textureHeight,{format:Di,type:Pa,depthTexture:new FE(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};x=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new os(x.framebufferWidth,x.framebufferHeight,{format:Di,type:Pa,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(_),g=null,h=await l.requestReferenceSpace(d),ut.setContext(l),ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(W){for(let it=0;it<W.removed.length;it++){const yt=W.removed[it],Ut=z.indexOf(yt);Ut>=0&&(z[Ut]=null,B[Ut].disconnect(yt))}for(let it=0;it<W.added.length;it++){const yt=W.added[it];let Ut=z.indexOf(yt);if(Ut===-1){for(let xt=0;xt<B.length;xt++)if(xt>=z.length){z.push(yt),Ut=xt;break}else if(z[xt]===null){z[xt]=yt,Ut=xt;break}if(Ut===-1)break}const wt=B[Ut];wt&&wt.connect(yt)}}const Y=new dt,vt=new dt;function Et(W,it,yt){Y.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(yt.matrixWorld);const Ut=Y.distanceTo(vt),wt=it.projectionMatrix.elements,xt=yt.projectionMatrix.elements,Gt=wt[14]/(wt[10]-1),H=wt[14]/(wt[10]+1),Te=(wt[9]+1)/wt[5],re=(wt[9]-1)/wt[5],Yt=(wt[8]-1)/wt[0],Nt=(xt[8]+1)/xt[0],ie=Gt*Yt,It=Gt*Nt,se=Ut/(-Yt+Nt),Re=se*-Yt;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Re),W.translateZ(se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),wt[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const we=Gt+se,L=H+se,b=ie-Re,nt=It+(Ut-Re),pt=Te*H/L*we,ot=re*H/L*we;W.projectionMatrix.makePerspective(b,nt,pt,ot,we,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Dt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let it=W.near,yt=W.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),tt.near=w.near=D.near=it,tt.far=w.far=D.far=yt,(rt!==tt.near||ct!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),rt=tt.near,ct=tt.far),tt.layers.mask=W.layers.mask|6,D.layers.mask=tt.layers.mask&3,w.layers.mask=tt.layers.mask&5;const Ut=W.parent,wt=tt.cameras;Dt(tt,Ut);for(let xt=0;xt<wt.length;xt++)Dt(wt[xt],Ut);wt.length===2?Et(tt,D,w):tt.projectionMatrix.copy(D.projectionMatrix),Wt(W,tt,Ut)};function Wt(W,it,yt){yt===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=sm*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&x===null))return _},this.setFoveation=function(W){_=W,S!==null&&(S.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(W){return E[W]};let le=null;function F(W,it){if(m=it.getViewerPose(g||h),M=it,m!==null){const yt=m.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let Ut=!1;yt.length!==tt.cameras.length&&(tt.cameras.length=0,Ut=!0);for(let H=0;H<yt.length;H++){const Te=yt[H];let re=null;if(x!==null)re=x.getViewport(Te);else{const Nt=p.getViewSubImage(S,Te);re=Nt.viewport,H===0&&(e.setRenderTargetTextures(R,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(R))}let Yt=I[H];Yt===void 0&&(Yt=new Ri,Yt.layers.enable(H),Yt.viewport=new cn,I[H]=Yt),Yt.matrix.fromArray(Te.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Te.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),H===0&&(tt.matrix.copy(Yt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ut===!0&&tt.cameras.push(Yt)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=r.getBinding();const H=p.getDepthInformation(yt[0]);H&&H.isValid&&H.texture&&y.init(H,l.renderState)}if(wt&&wt.includes("camera-access")&&A){e.state.unbindTexture(),p=r.getBinding();for(let H=0;H<yt.length;H++){const Te=yt[H].camera;if(Te){let re=E[Te];re||(re=new HE,E[Te]=re);const Yt=p.getCameraImage(Te);re.sourceTexture=Yt}}}}for(let yt=0;yt<B.length;yt++){const Ut=z[yt],wt=B[yt];Ut!==null&&wt!==void 0&&wt.update(Ut,it,g||h)}le&&le(W,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),M=null}const ut=new GE;ut.setAnimationLoop(F),this.setAnimationLoop=function(W){le=W},this.dispose=function(){}}}const Jr=new za,o2=new yn;function l2(o,e){function i(y,E){y.matrixAutoUpdate===!0&&y.updateMatrix(),E.value.copy(y.matrix)}function r(y,E){E.color.getRGB(y.fogColor.value,PE(o)),E.isFog?(y.fogNear.value=E.near,y.fogFar.value=E.far):E.isFogExp2&&(y.fogDensity.value=E.density)}function l(y,E,U,N,R){E.isMeshBasicMaterial||E.isMeshLambertMaterial?f(y,E):E.isMeshToonMaterial?(f(y,E),p(y,E)):E.isMeshPhongMaterial?(f(y,E),m(y,E)):E.isMeshStandardMaterial?(f(y,E),S(y,E),E.isMeshPhysicalMaterial&&x(y,E,R)):E.isMeshMatcapMaterial?(f(y,E),M(y,E)):E.isMeshDepthMaterial?f(y,E):E.isMeshDistanceMaterial?(f(y,E),A(y,E)):E.isMeshNormalMaterial?f(y,E):E.isLineBasicMaterial?(h(y,E),E.isLineDashedMaterial&&d(y,E)):E.isPointsMaterial?_(y,E,U,N):E.isSpriteMaterial?g(y,E):E.isShadowMaterial?(y.color.value.copy(E.color),y.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function f(y,E){y.opacity.value=E.opacity,E.color&&y.diffuse.value.copy(E.color),E.emissive&&y.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.bumpMap&&(y.bumpMap.value=E.bumpMap,i(E.bumpMap,y.bumpMapTransform),y.bumpScale.value=E.bumpScale,E.side===ti&&(y.bumpScale.value*=-1)),E.normalMap&&(y.normalMap.value=E.normalMap,i(E.normalMap,y.normalMapTransform),y.normalScale.value.copy(E.normalScale),E.side===ti&&y.normalScale.value.negate()),E.displacementMap&&(y.displacementMap.value=E.displacementMap,i(E.displacementMap,y.displacementMapTransform),y.displacementScale.value=E.displacementScale,y.displacementBias.value=E.displacementBias),E.emissiveMap&&(y.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,y.emissiveMapTransform)),E.specularMap&&(y.specularMap.value=E.specularMap,i(E.specularMap,y.specularMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest);const U=e.get(E),N=U.envMap,R=U.envMapRotation;N&&(y.envMap.value=N,Jr.copy(R),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),y.envMapRotation.value.setFromMatrix4(o2.makeRotationFromEuler(Jr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=E.reflectivity,y.ior.value=E.ior,y.refractionRatio.value=E.refractionRatio),E.lightMap&&(y.lightMap.value=E.lightMap,y.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,y.lightMapTransform)),E.aoMap&&(y.aoMap.value=E.aoMap,y.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,y.aoMapTransform))}function h(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform))}function d(y,E){y.dashSize.value=E.dashSize,y.totalSize.value=E.dashSize+E.gapSize,y.scale.value=E.scale}function _(y,E,U,N){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.size.value=E.size*U,y.scale.value=N*.5,E.map&&(y.map.value=E.map,i(E.map,y.uvTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function g(y,E){y.diffuse.value.copy(E.color),y.opacity.value=E.opacity,y.rotation.value=E.rotation,E.map&&(y.map.value=E.map,i(E.map,y.mapTransform)),E.alphaMap&&(y.alphaMap.value=E.alphaMap,i(E.alphaMap,y.alphaMapTransform)),E.alphaTest>0&&(y.alphaTest.value=E.alphaTest)}function m(y,E){y.specular.value.copy(E.specular),y.shininess.value=Math.max(E.shininess,1e-4)}function p(y,E){E.gradientMap&&(y.gradientMap.value=E.gradientMap)}function S(y,E){y.metalness.value=E.metalness,E.metalnessMap&&(y.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,y.metalnessMapTransform)),y.roughness.value=E.roughness,E.roughnessMap&&(y.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,y.roughnessMapTransform)),E.envMap&&(y.envMapIntensity.value=E.envMapIntensity)}function x(y,E,U){y.ior.value=E.ior,E.sheen>0&&(y.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),y.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(y.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,y.sheenColorMapTransform)),E.sheenRoughnessMap&&(y.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,y.sheenRoughnessMapTransform))),E.clearcoat>0&&(y.clearcoat.value=E.clearcoat,y.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(y.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,y.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(y.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===ti&&y.clearcoatNormalScale.value.negate())),E.dispersion>0&&(y.dispersion.value=E.dispersion),E.iridescence>0&&(y.iridescence.value=E.iridescence,y.iridescenceIOR.value=E.iridescenceIOR,y.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(y.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,y.iridescenceMapTransform)),E.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),E.transmission>0&&(y.transmission.value=E.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),E.transmissionMap&&(y.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,y.transmissionMapTransform)),y.thickness.value=E.thickness,E.thicknessMap&&(y.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=E.attenuationDistance,y.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(y.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(y.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=E.specularIntensity,y.specularColor.value.copy(E.specularColor),E.specularColorMap&&(y.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,y.specularColorMapTransform)),E.specularIntensityMap&&(y.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,E){E.matcap&&(y.matcap.value=E.matcap)}function A(y,E){const U=e.get(E).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function u2(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(U,N){const R=N.program;r.uniformBlockBinding(U,R)}function g(U,N){let R=l[U.id];R===void 0&&(M(U),R=m(U),l[U.id]=R,U.addEventListener("dispose",y));const B=N.program;r.updateUBOMapping(U,B);const z=e.render.frame;f[U.id]!==z&&(S(U),f[U.id]=z)}function m(U){const N=p();U.__bindingPointIndex=N;const R=o.createBuffer(),B=U.__size,z=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,B,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,R),R}function p(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const N=l[U.id],R=U.uniforms,B=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let z=0,O=R.length;z<O;z++){const G=Array.isArray(R[z])?R[z]:[R[z]];for(let D=0,w=G.length;D<w;D++){const I=G[D];if(x(I,z,D,B)===!0){const tt=I.__offset,rt=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let V=0;V<rt.length;V++){const X=rt[V],$=A(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,tt+ct,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,ct),ct+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(U,N,R,B){const z=U.value,O=N+"_"+R;if(B[O]===void 0)return typeof z=="number"||typeof z=="boolean"?B[O]=z:B[O]=z.clone(),!0;{const G=B[O];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return B[O]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function M(U){const N=U.uniforms;let R=0;const B=16;for(let O=0,G=N.length;O<G;O++){const D=Array.isArray(N[O])?N[O]:[N[O]];for(let w=0,I=D.length;w<I;w++){const tt=D[w],rt=Array.isArray(tt.value)?tt.value:[tt.value];for(let ct=0,V=rt.length;ct<V;ct++){const X=rt[ct],$=A(X),Y=R%B,vt=Y%$.boundary,Et=Y+vt;R+=vt,Et!==0&&B-Et<$.storage&&(R+=B-Et),tt.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=R,R+=$.storage}}}const z=R%B;return z>0&&(R+=B-z),U.__size=R,U.__cache={},this}function A(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function y(U){const N=U.target;N.removeEventListener("dispose",y);const R=h.indexOf(N.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete f[N.id]}function E(){for(const U in l)o.deleteBuffer(l[U]);h=[],l={},f={}}return{bind:_,update:g,dispose:E}}class c2{constructor(e={}){const{canvas:i=qT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const M=new Uint32Array(4),A=new Int32Array(4);let y=null,E=null;const U=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let B=!1;this._outputColorSpace=di;let z=0,O=0,G=null,D=-1,w=null;const I=new cn,tt=new cn;let rt=null;const ct=new qe(0);let V=0,X=i.width,$=i.height,Y=1,vt=null,Et=null;const Dt=new cn(0,0,X,$),Wt=new cn(0,0,X,$);let le=!1;const F=new BE;let ut=!1,W=!1;const it=new yn,yt=new dt,Ut=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Gt(){return G===null?Y:1}let H=r;function Te(C,Q){return i.getContext(C,Q)}try{const C={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wm}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const Q="webgl2";if(H=Te(Q,C),H===null)throw Te(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,Yt,Nt,ie,It,se,Re,we,L,b,nt,pt,ot,lt,zt,Rt,Xt,jt,Tt,At,te,Jt,Bt,fe;function q(){re=new ER(H),re.init(),Jt=new n2(H,re),Yt=new dR(H,re,e,Jt),Nt=new t2(H,re),Yt.reversedDepthBuffer&&S&&Nt.buffers.depth.setReversed(!0),ie=new MR(H),It=new GC,se=new e2(H,re,Nt,It,Yt,Jt,ie),Re=new mR(R),we=new SR(R),L=new w1(H),Bt=new fR(H,L),b=new yR(H,L,ie,Bt),nt=new AR(H,b,L,ie),Tt=new TR(H,Yt,se),Rt=new pR(It),pt=new HC(R,Re,we,re,Yt,Bt,Rt),ot=new l2(R,It),lt=new XC,zt=new KC(re),jt=new cR(R,Re,we,Nt,nt,x,_),Xt=new JC(R,nt,Yt),fe=new u2(H,ie,Yt,Nt),At=new hR(H,re,ie),te=new xR(H,re,ie),ie.programs=pt.programs,R.capabilities=Yt,R.extensions=re,R.properties=It,R.renderLists=lt,R.shadowMap=Xt,R.state=Nt,R.info=ie}q();const Ct=new s2(R,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(X,$,!1))},this.getSize=function(C){return C.set(X,$)},this.setSize=function(C,Q,ft=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,$=Q,i.width=Math.floor(C*Y),i.height=Math.floor(Q*Y),ft===!0&&(i.style.width=C+"px",i.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(X*Y,$*Y).floor()},this.setDrawingBufferSize=function(C,Q,ft){X=C,$=Q,Y=ft,i.width=Math.floor(C*ft),i.height=Math.floor(Q*ft),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Dt)},this.setViewport=function(C,Q,ft,ht){C.isVector4?Dt.set(C.x,C.y,C.z,C.w):Dt.set(C,Q,ft,ht),Nt.viewport(I.copy(Dt).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(Wt)},this.setScissor=function(C,Q,ft,ht){C.isVector4?Wt.set(C.x,C.y,C.z,C.w):Wt.set(C,Q,ft,ht),Nt.scissor(tt.copy(Wt).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Nt.setScissorTest(le=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ft=!0){let ht=0;if(C){let J=!1;if(G!==null){const bt=G.texture.format;J=bt===Pm||bt===Om||bt===Lm}if(J){const bt=G.texture.type,Ft=bt===Pa||bt===ss||bt===Rl||bt===Cl||bt===Um||bt===Nm,Vt=jt.getClearColor(),Lt=jt.getClearAlpha(),Zt=Vt.r,ae=Vt.g,ee=Vt.b;Ft?(M[0]=Zt,M[1]=ae,M[2]=ee,M[3]=Lt,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=Zt,A[1]=ae,A[2]=ee,A[3]=Lt,H.clearBufferiv(H.COLOR,0,A))}else ht|=H.COLOR_BUFFER_BIT}Q&&(ht|=H.DEPTH_BUFFER_BIT),ft&&(ht|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),jt.dispose(),lt.dispose(),zt.dispose(),It.dispose(),Re.dispose(),we.dispose(),nt.dispose(),Bt.dispose(),fe.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",_n),Ct.removeEventListener("sessionend",Pn),la.stop()};function Ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=ie.autoReset,Q=Xt.enabled,ft=Xt.autoUpdate,ht=Xt.needsUpdate,J=Xt.type;q(),ie.autoReset=C,Xt.enabled=Q,Xt.autoUpdate=ft,Xt.needsUpdate=ht,Xt.type=J}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function St(C){const Q=C.target;Q.removeEventListener("dispose",St),Qt(Q)}function Qt(C){ce(C),It.remove(C)}function ce(C){const Q=It.get(C).programs;Q!==void 0&&(Q.forEach(function(ft){pt.releaseProgram(ft)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ft,ht,J,bt){Q===null&&(Q=wt);const Ft=J.isMesh&&J.matrixWorld.determinant()<0,Vt=Vl(C,Q,ft,ht,J);Nt.setMaterial(ht,Ft);let Lt=ft.index,Zt=1;if(ht.wireframe===!0){if(Lt=b.getWireframeAttribute(ft),Lt===void 0)return;Zt=2}const ae=ft.drawRange,ee=ft.attributes.position;let ve=ae.start*Zt,Ie=(ae.start+ae.count)*Zt;bt!==null&&(ve=Math.max(ve,bt.start*Zt),Ie=Math.min(Ie,(bt.start+bt.count)*Zt)),Lt!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,Lt.count)):ee!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,ee.count));const Je=Ie-ve;if(Je<0||Je===1/0)return;Bt.setup(J,ht,Vt,ft,Lt);let Oe,De=At;if(Lt!==null&&(Oe=L.get(Lt),De=te,De.setIndex(Oe)),J.isMesh)ht.wireframe===!0?(Nt.setLineWidth(ht.wireframeLinewidth*Gt()),De.setMode(H.LINES)):De.setMode(H.TRIANGLES);else if(J.isLine){let ne=ht.linewidth;ne===void 0&&(ne=1),Nt.setLineWidth(ne*Gt()),J.isLineSegments?De.setMode(H.LINES):J.isLineLoop?De.setMode(H.LINE_LOOP):De.setMode(H.LINE_STRIP)}else J.isPoints?De.setMode(H.POINTS):J.isSprite&&De.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))De.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ne=J._multiDrawStarts,Pe=J._multiDrawCounts,ge=J._multiDrawCount,vn=Lt?L.get(Lt).bytesPerElement:1,ni=It.get(ht).currentProgram.getUniforms();for(let Ue=0;Ue<ge;Ue++)ni.setValue(H,"_gl_DrawID",Ue),De.render(ne[Ue]/vn,Pe[Ue])}else if(J.isInstancedMesh)De.renderInstances(ve,Je,J.count);else if(ft.isInstancedBufferGeometry){const ne=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Pe=Math.min(ft.instanceCount,ne);De.renderInstances(ve,Je,Pe)}else De.render(ve,Je)};function Ve(C,Q,ft){C.transparent===!0&&C.side===Ua&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,gi(C,Q,ft),C.side=yr,C.needsUpdate=!0,gi(C,Q,ft),C.side=Ua):gi(C,Q,ft)}this.compile=function(C,Q,ft=null){ft===null&&(ft=C),E=zt.get(ft),E.init(Q),N.push(E),ft.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),C!==ft&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights();const ht=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const bt=J.material;if(bt)if(Array.isArray(bt))for(let Ft=0;Ft<bt.length;Ft++){const Vt=bt[Ft];Ve(Vt,ft,J),ht.add(Vt)}else Ve(bt,ft,J),ht.add(bt)}),E=N.pop(),ht},this.compileAsync=function(C,Q,ft=null){const ht=this.compile(C,Q,ft);return new Promise(J=>{function bt(){if(ht.forEach(function(Ft){It.get(Ft).currentProgram.isReady()&&ht.delete(Ft)}),ht.size===0){J(C);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ye=null;function nn(C){ye&&ye(C)}function _n(){la.stop()}function Pn(){la.start()}const la=new GE;la.setAnimationLoop(nn),typeof self<"u"&&la.setContext(self),this.setAnimationLoop=function(C){ye=C,Ct.setAnimationLoop(C),C===null?la.stop():la.start()},Ct.addEventListener("sessionstart",_n),Ct.addEventListener("sessionend",Pn),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Q),Q=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Q,G),E=zt.get(C,N.length),E.init(Q),N.push(E),it.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F.setFromProjectionMatrix(it,aa,Q.reversedDepth),W=this.localClippingEnabled,ut=Rt.init(this.clippingPlanes,W),y=lt.get(C,U.length),y.init(),U.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&Ao(bt,Q,-1/0,R.sortObjects)}Ao(C,Q,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(vt,Et),xt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,xt&&jt.addToRenderList(y,C),this.info.render.frame++,ut===!0&&Rt.beginShadows();const ft=E.state.shadowsArray;Xt.render(ft,C,Q),ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=y.opaque,J=y.transmissive;if(E.setupLights(),Q.isArrayCamera){const bt=Q.cameras;if(J.length>0)for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++){const Lt=bt[Ft];Mr(ht,J,C,Lt)}xt&&jt.render(C);for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++){const Lt=bt[Ft];Gl(y,C,Lt,Lt.viewport)}}else J.length>0&&Mr(ht,J,C,Q),xt&&jt.render(C),Gl(y,C,Q);G!==null&&O===0&&(se.updateMultisampleRenderTarget(G),se.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(R,C,Q),Bt.resetDefaultState(),D=-1,w=null,N.pop(),N.length>0?(E=N[N.length-1],ut===!0&&Rt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ao(C,Q,ft,ht){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){ht&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);const Ft=nt.update(C),Vt=C.material;Vt.visible&&y.push(C,Ft,Vt,ft,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const Ft=nt.update(C),Vt=C.material;if(ht&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Ut.copy(Ft.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Vt)){const Lt=Ft.groups;for(let Zt=0,ae=Lt.length;Zt<ae;Zt++){const ee=Lt[Zt],ve=Vt[ee.materialIndex];ve&&ve.visible&&y.push(C,Ft,ve,ft,Ut.z,ee)}}else Vt.visible&&y.push(C,Ft,Vt,ft,Ut.z,null)}}const bt=C.children;for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++)Ao(bt[Ft],Q,ft,ht)}function Gl(C,Q,ft,ht){const J=C.opaque,bt=C.transmissive,Ft=C.transparent;E.setupLightsView(ft),ut===!0&&Rt.setGlobalState(R.clippingPlanes,ft),ht&&Nt.viewport(I.copy(ht)),J.length>0&&ua(J,Q,ft),bt.length>0&&ua(bt,Q,ft),Ft.length>0&&ua(Ft,Q,ft),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Mr(C,Q,ft,ht){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[ht.id]===void 0&&(E.state.transmissionRenderTarget[ht.id]=new os(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?zl:Pa,minFilter:rs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const bt=E.state.transmissionRenderTarget[ht.id],Ft=ht.viewport||I;bt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const Vt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Zt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ct),V=R.getClearAlpha(),V<1&&R.setClearColor(16777215,.5),R.clear(),xt&&jt.render(ft);const ae=R.toneMapping;R.toneMapping=Er;const ee=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),E.setupLightsView(ht),ut===!0&&Rt.setGlobalState(R.clippingPlanes,ht),ua(C,ft,ht),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ie=0,Je=Q.length;Ie<Je;Ie++){const Oe=Q[Ie],De=Oe.object,ne=Oe.geometry,Pe=Oe.material,ge=Oe.group;if(Pe.side===Ua&&De.layers.test(ht.layers)){const vn=Pe.side;Pe.side=ti,Pe.needsUpdate=!0,Tr(De,ft,ht,ne,Pe,ge),Pe.side=vn,Pe.needsUpdate=!0,ve=!0}}ve===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}R.setRenderTarget(Vt,Lt,Zt),R.setClearColor(ct,V),ee!==void 0&&(ht.viewport=ee),R.toneMapping=ae}function ua(C,Q,ft){const ht=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,bt=C.length;J<bt;J++){const Ft=C[J],Vt=Ft.object,Lt=Ft.geometry,Zt=Ft.group;let ae=Ft.material;ae.allowOverride===!0&&ht!==null&&(ae=ht),Vt.layers.test(ft.layers)&&Tr(Vt,Q,ft,Lt,ae,Zt)}}function Tr(C,Q,ft,ht,J,bt){C.onBeforeRender(R,Q,ft,ht,J,bt),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(R,Q,ft,ht,C,bt),J.transparent===!0&&J.side===Ua&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,R.renderBufferDirect(ft,Q,ht,J,C,bt),J.side=yr,J.needsUpdate=!0,R.renderBufferDirect(ft,Q,ht,J,C,bt),J.side=Ua):R.renderBufferDirect(ft,Q,ht,J,C,bt),C.onAfterRender(R,Q,ft,ht,J,bt)}function gi(C,Q,ft){Q.isScene!==!0&&(Q=wt);const ht=It.get(C),J=E.state.lights,bt=E.state.shadowsArray,Ft=J.state.version,Vt=pt.getParameters(C,J.state,bt,Q,ft),Lt=pt.getProgramCacheKey(Vt);let Zt=ht.programs;ht.environment=C.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(C.isMeshStandardMaterial?we:Re).get(C.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",St),Zt=new Map,ht.programs=Zt);let ae=Zt.get(Lt);if(ae!==void 0){if(ht.currentProgram===ae&&ht.lightsStateVersion===Ft)return Ba(C,Vt),ae}else Vt.uniforms=pt.getUniforms(C),C.onBeforeCompile(Vt,R),ae=pt.acquireProgram(Vt,Lt),Zt.set(Lt,ae),ht.uniforms=Vt.uniforms;const ee=ht.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ee.clippingPlanes=Rt.uniform),Ba(C,Vt),ht.needsLights=Xl(C),ht.lightsStateVersion=Ft,ht.needsLights&&(ee.ambientLightColor.value=J.state.ambient,ee.lightProbe.value=J.state.probe,ee.directionalLights.value=J.state.directional,ee.directionalLightShadows.value=J.state.directionalShadow,ee.spotLights.value=J.state.spot,ee.spotLightShadows.value=J.state.spotShadow,ee.rectAreaLights.value=J.state.rectArea,ee.ltc_1.value=J.state.rectAreaLTC1,ee.ltc_2.value=J.state.rectAreaLTC2,ee.pointLights.value=J.state.point,ee.pointLightShadows.value=J.state.pointShadow,ee.hemisphereLights.value=J.state.hemi,ee.directionalShadowMap.value=J.state.directionalShadowMap,ee.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ee.spotShadowMap.value=J.state.spotShadowMap,ee.spotLightMatrix.value=J.state.spotLightMatrix,ee.spotLightMap.value=J.state.spotLightMap,ee.pointShadowMap.value=J.state.pointShadowMap,ee.pointShadowMatrix.value=J.state.pointShadowMatrix),ht.currentProgram=ae,ht.uniformsList=null,ae}function Ar(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Ba(C,Q){const ft=It.get(C);ft.outputColorSpace=Q.outputColorSpace,ft.batching=Q.batching,ft.batchingColor=Q.batchingColor,ft.instancing=Q.instancing,ft.instancingColor=Q.instancingColor,ft.instancingMorph=Q.instancingMorph,ft.skinning=Q.skinning,ft.morphTargets=Q.morphTargets,ft.morphNormals=Q.morphNormals,ft.morphColors=Q.morphColors,ft.morphTargetsCount=Q.morphTargetsCount,ft.numClippingPlanes=Q.numClippingPlanes,ft.numIntersection=Q.numClipIntersection,ft.vertexAlphas=Q.vertexAlphas,ft.vertexTangents=Q.vertexTangents,ft.toneMapping=Q.toneMapping}function Vl(C,Q,ft,ht,J){Q.isScene!==!0&&(Q=wt),se.resetTextureUnits();const bt=Q.fog,Ft=ht.isMeshStandardMaterial?Q.environment:null,Vt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vo,Lt=(ht.isMeshStandardMaterial?we:Re).get(ht.envMap||Ft),Zt=ht.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ae=!!ft.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ee=!!ft.morphAttributes.position,ve=!!ft.morphAttributes.normal,Ie=!!ft.morphAttributes.color;let Je=Er;ht.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Je=R.toneMapping);const Oe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,De=Oe!==void 0?Oe.length:0,ne=It.get(ht),Pe=E.state.lights;if(ut===!0&&(W===!0||C!==w)){const sn=C===w&&ht.id===D;Rt.setState(ht,C,sn)}let ge=!1;ht.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Pe.state.version||ne.outputColorSpace!==Vt||J.isBatchedMesh&&ne.batching===!1||!J.isBatchedMesh&&ne.batching===!0||J.isBatchedMesh&&ne.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ne.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ne.instancing===!1||!J.isInstancedMesh&&ne.instancing===!0||J.isSkinnedMesh&&ne.skinning===!1||!J.isSkinnedMesh&&ne.skinning===!0||J.isInstancedMesh&&ne.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ne.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ne.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ne.instancingMorph===!1&&J.morphTexture!==null||ne.envMap!==Lt||ht.fog===!0&&ne.fog!==bt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Rt.numPlanes||ne.numIntersection!==Rt.numIntersection)||ne.vertexAlphas!==Zt||ne.vertexTangents!==ae||ne.morphTargets!==ee||ne.morphNormals!==ve||ne.morphColors!==Ie||ne.toneMapping!==Je||ne.morphTargetsCount!==De)&&(ge=!0):(ge=!0,ne.__version=ht.version);let vn=ne.currentProgram;ge===!0&&(vn=gi(ht,Q,J));let ni=!1,Ue=!1,Fa=!1;const Ze=vn.getUniforms(),Vn=ne.uniforms;if(Nt.useProgram(vn.program)&&(ni=!0,Ue=!0,Fa=!0),ht.id!==D&&(D=ht.id,Ue=!0),ni||w!==C){Nt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ze.setValue(H,"projectionMatrix",C.projectionMatrix),Ze.setValue(H,"viewMatrix",C.matrixWorldInverse);const zn=Ze.map.cameraPosition;zn!==void 0&&zn.setValue(H,yt.setFromMatrixPosition(C.matrixWorld)),Yt.logarithmicDepthBuffer&&Ze.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ze.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Ue=!0,Fa=!0)}if(J.isSkinnedMesh){Ze.setOptional(H,J,"bindMatrix"),Ze.setOptional(H,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ze.setValue(H,"boneTexture",sn.boneTexture,se))}J.isBatchedMesh&&(Ze.setOptional(H,J,"batchingTexture"),Ze.setValue(H,"batchingTexture",J._matricesTexture,se),Ze.setOptional(H,J,"batchingIdTexture"),Ze.setValue(H,"batchingIdTexture",J._indirectTexture,se),Ze.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Ze.setValue(H,"batchingColorTexture",J._colorsTexture,se));const fn=ft.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Tt.update(J,ft,vn),(Ue||ne.receiveShadow!==J.receiveShadow)&&(ne.receiveShadow=J.receiveShadow,Ze.setValue(H,"receiveShadow",J.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Vn.envMap.value=Lt,Vn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(Vn.envMapIntensity.value=Q.environmentIntensity),Ue&&(Ze.setValue(H,"toneMappingExposure",R.toneMappingExposure),ne.needsLights&&of(Vn,Fa),bt&&ht.fog===!0&&ot.refreshFogUniforms(Vn,bt),ot.refreshMaterialUniforms(Vn,ht,Y,$,E.state.transmissionRenderTarget[C.id]),Hc.upload(H,Ar(ne),Vn,se)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Hc.upload(H,Ar(ne),Vn,se),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ze.setValue(H,"center",J.center),Ze.setValue(H,"modelViewMatrix",J.modelViewMatrix),Ze.setValue(H,"normalMatrix",J.normalMatrix),Ze.setValue(H,"modelMatrix",J.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const sn=ht.uniformsGroups;for(let zn=0,cs=sn.length;zn<cs;zn++){const Xi=sn[zn];fe.update(Xi,vn),fe.bind(Xi,vn)}}return vn}function of(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function Xl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Q,ft){const ht=It.get(C);ht.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),It.get(C.texture).__webglTexture=Q,It.get(C.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ft,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const ft=It.get(C);ft.__webglFramebuffer=Q,ft.__useDefaultFramebuffer=Q===void 0};const bo=H.createFramebuffer();this.setRenderTarget=function(C,Q=0,ft=0){G=C,z=Q,O=ft;let ht=!0,J=null,bt=!1,Ft=!1;if(C){const Lt=It.get(C);if(Lt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(H.FRAMEBUFFER,null),ht=!1;else if(Lt.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Lt.__hasExternalTextures)se.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(Lt.__boundDepthTexture!==ee){if(ee!==null&&It.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ft=!0);const ae=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ae[Q])?J=ae[Q][ft]:J=ae[Q],bt=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?J=It.get(C).__webglMultisampledFramebuffer:Array.isArray(ae)?J=ae[ft]:J=ae,I.copy(C.viewport),tt.copy(C.scissor),rt=C.scissorTest}else I.copy(Dt).multiplyScalar(Y).floor(),tt.copy(Wt).multiplyScalar(Y).floor(),rt=le;if(ft!==0&&(J=bo),Nt.bindFramebuffer(H.FRAMEBUFFER,J)&&ht&&Nt.drawBuffers(C,J),Nt.viewport(I),Nt.scissor(tt),Nt.setScissorTest(rt),bt){const Lt=It.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt.__webglTexture,ft)}else if(Ft){const Lt=Q;for(let Zt=0;Zt<C.textures.length;Zt++){const ae=It.get(C.textures[Zt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Zt,ae.__webglTexture,ft,Lt)}}else if(C!==null&&ft!==0){const Lt=It.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Lt.__webglTexture,ft)}D=-1},this.readRenderTargetPixels=function(C,Q,ft,ht,J,bt,Ft,Vt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft]),Lt){Nt.bindFramebuffer(H.FRAMEBUFFER,Lt);try{const Zt=C.textures[Vt],ae=Zt.format,ee=Zt.type;if(!Yt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ht&&ft>=0&&ft<=C.height-J&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Q,ft,ht,J,Jt.convert(ae),Jt.convert(ee),bt))}finally{const Zt=G!==null?It.get(G).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ft,ht,J,bt,Ft,Vt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft]),Lt)if(Q>=0&&Q<=C.width-ht&&ft>=0&&ft<=C.height-J){Nt.bindFramebuffer(H.FRAMEBUFFER,Lt);const Zt=C.textures[Vt],ae=Zt.format,ee=Zt.type;if(!Yt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Q,ft,ht,J,Jt.convert(ae),Jt.convert(ee),0);const Ie=G!==null?It.get(G).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,Ie);const Je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await YT(H,Je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(ve),H.deleteSync(Je),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ft=0){const ht=Math.pow(2,-ft),J=Math.floor(C.image.width*ht),bt=Math.floor(C.image.height*ht),Ft=Q!==null?Q.x:0,Vt=Q!==null?Q.y:0;se.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ft,0,0,Ft,Vt,J,bt),Nt.unbindTexture()};const br=H.createFramebuffer(),lf=H.createFramebuffer();this.copyTextureToTexture=function(C,Q,ft=null,ht=null,J=0,bt=null){bt===null&&(J!==0?(Ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=J,J=0):bt=0);let Ft,Vt,Lt,Zt,ae,ee,ve,Ie,Je;const Oe=C.isCompressedTexture?C.mipmaps[bt]:C.image;if(ft!==null)Ft=ft.max.x-ft.min.x,Vt=ft.max.y-ft.min.y,Lt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,ae=ft.min.y,ee=ft.isBox3?ft.min.z:0;else{const fn=Math.pow(2,-J);Ft=Math.floor(Oe.width*fn),Vt=Math.floor(Oe.height*fn),C.isDataArrayTexture?Lt=Oe.depth:C.isData3DTexture?Lt=Math.floor(Oe.depth*fn):Lt=1,Zt=0,ae=0,ee=0}ht!==null?(ve=ht.x,Ie=ht.y,Je=ht.z):(ve=0,Ie=0,Je=0);const De=Jt.convert(Q.format),ne=Jt.convert(Q.type);let Pe;Q.isData3DTexture?(se.setTexture3D(Q,0),Pe=H.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(se.setTexture2DArray(Q,0),Pe=H.TEXTURE_2D_ARRAY):(se.setTexture2D(Q,0),Pe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ni=H.getParameter(H.UNPACK_SKIP_PIXELS),Ue=H.getParameter(H.UNPACK_SKIP_ROWS),Fa=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Oe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ae),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ee);const Ze=C.isDataArrayTexture||C.isData3DTexture,Vn=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const fn=It.get(C),sn=It.get(Q),zn=It.get(fn.__renderTarget),cs=It.get(sn.__renderTarget);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,zn.__webglFramebuffer),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Xi=0;Xi<Lt;Xi++)Ze&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(C).__webglTexture,J,ee+Xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(Q).__webglTexture,bt,Je+Xi)),H.blitFramebuffer(Zt,ae,Ft,Vt,ve,Ie,Ft,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||It.has(C)){const fn=It.get(C),sn=It.get(Q);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,br),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,lf);for(let zn=0;zn<Lt;zn++)Ze?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,J,ee+zn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,J),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sn.__webglTexture,bt,Je+zn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sn.__webglTexture,bt),J!==0?H.blitFramebuffer(Zt,ae,Ft,Vt,ve,Ie,Ft,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(Pe,bt,ve,Ie,Je+zn,Zt,ae,Ft,Vt):H.copyTexSubImage2D(Pe,bt,ve,Ie,Zt,ae,Ft,Vt);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Pe,bt,ve,Ie,Je,Ft,Vt,Lt,De,ne,Oe.data):Q.isCompressedArrayTexture?H.compressedTexSubImage3D(Pe,bt,ve,Ie,Je,Ft,Vt,Lt,De,Oe.data):H.texSubImage3D(Pe,bt,ve,Ie,Je,Ft,Vt,Lt,De,ne,Oe):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,ve,Ie,Ft,Vt,De,ne,Oe.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,ve,Ie,Oe.width,Oe.height,De,Oe.data):H.texSubImage2D(H.TEXTURE_2D,bt,ve,Ie,Ft,Vt,De,ne,Oe);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ni),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ue),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fa),bt===0&&Q.generateMipmaps&&H.generateMipmap(Pe),Nt.unbindTexture()},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),Nt.unbindTexture()},this.resetState=function(){z=0,O=0,G=null,Nt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}class Vi{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let r=0;for(let l=0;l<this._n&&l<32;l++){const f=i[l],h=e+f,d=Math.abs(e)<Math.abs(f)?e-(h-f):f-(h-e);d&&(i[r++]=d),e=h}return i[r]=e,this._n=r+1,this}valueOf(){const e=this._partials;let i=this._n,r,l,f,h=0;if(i>0){for(h=e[--i];i>0&&(r=h,l=e[--i],h=r+l,f=l-(h-r),!f););i>0&&(f<0&&e[i-1]<0||f>0&&e[i-1]>0)&&(l=f*2,r=h+l,l==r-h&&(h=r))}return h}}function*f2(o){for(const e of o)yield*e}function YE(o){return Array.from(f2(o))}var Qe=1e-6,Ce=Math.PI,Ui=Ce/2,Yc=Ce/4,ei=Ce*2,wa=180/Ce,On=Ce/180,rn=Math.abs,h2=Math.atan,Eo=Math.atan2,tn=Math.cos,en=Math.sin,d2=Math.sign||function(o){return o>0?1:o<0?-1:0},us=Math.sqrt;function p2(o){return o>1?0:o<-1?Ce:Math.acos(o)}function Nl(o){return o>1?Ui:o<-1?-Ui:Math.asin(o)}function Hn(){}function Wc(o,e){o&&QS.hasOwnProperty(o.type)&&QS[o.type](o,e)}var jS={Feature:function(o,e){Wc(o.geometry,e)},FeatureCollection:function(o,e){for(var i=o.features,r=-1,l=i.length;++r<l;)Wc(i[r].geometry,e)}},QS={Sphere:function(o,e){e.sphere()},Point:function(o,e){o=o.coordinates,e.point(o[0],o[1],o[2])},MultiPoint:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)o=i[r],e.point(o[0],o[1],o[2])},LineString:function(o,e){lm(o.coordinates,e,0)},MultiLineString:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)lm(i[r],e,0)},Polygon:function(o,e){JS(o.coordinates,e)},MultiPolygon:function(o,e){for(var i=o.coordinates,r=-1,l=i.length;++r<l;)JS(i[r],e)},GeometryCollection:function(o,e){for(var i=o.geometries,r=-1,l=i.length;++r<l;)Wc(i[r],e)}};function lm(o,e,i){var r=-1,l=o.length-i,f;for(e.lineStart();++r<l;)f=o[r],e.point(f[0],f[1],f[2]);e.lineEnd()}function JS(o,e){var i=-1,r=o.length;for(e.polygonStart();++i<r;)lm(o[i],e,1);e.polygonEnd()}function is(o,e){o&&jS.hasOwnProperty(o.type)?jS[o.type](o,e):Wc(o,e)}var um=new Vi,Zc=new Vi,WE,ZE,cm,fm,hm,Ll={point:Hn,lineStart:Hn,lineEnd:Hn,polygonStart:function(){um=new Vi,Ll.lineStart=m2,Ll.lineEnd=g2},polygonEnd:function(){var o=+um;Zc.add(o<0?ei+o:o),this.lineStart=this.lineEnd=this.point=Hn},sphere:function(){Zc.add(ei)}};function m2(){Ll.point=_2}function g2(){KE(WE,ZE)}function _2(o,e){Ll.point=KE,WE=o,ZE=e,o*=On,e*=On,cm=o,fm=tn(e=e/2+Yc),hm=en(e)}function KE(o,e){o*=On,e*=On,e=e/2+Yc;var i=o-cm,r=i>=0?1:-1,l=r*i,f=tn(e),h=en(e),d=hm*h,_=fm*f+d*tn(l),g=d*r*en(l);um.add(Eo(g,_)),cm=o,fm=f,hm=h}function v2(o){return Zc=new Vi,is(o,Ll),Zc*2}function dm(o){return[Eo(o[1],o[0]),Nl(o[2])]}function yo(o){var e=o[0],i=o[1],r=tn(i);return[r*tn(e),r*en(e),en(i)]}function Nc(o,e){return o[0]*e[0]+o[1]*e[1]+o[2]*e[2]}function Kc(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function mp(o,e){o[0]+=e[0],o[1]+=e[1],o[2]+=e[2]}function Lc(o,e){return[o[0]*e,o[1]*e,o[2]*e]}function pm(o){var e=us(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);o[0]/=e,o[1]/=e,o[2]/=e}function mm(o,e){function i(r,l){return r=o(r,l),e(r[0],r[1])}return o.invert&&e.invert&&(i.invert=function(r,l){return r=e.invert(r,l),r&&o.invert(r[0],r[1])}),i}function gm(o,e){return rn(o)>Ce&&(o-=Math.round(o/ei)*ei),[o,e]}gm.invert=gm;function S2(o,e,i){return(o%=ei)?e||i?mm(tE(o),eE(e,i)):tE(o):e||i?eE(e,i):gm}function $S(o){return function(e,i){return e+=o,rn(e)>Ce&&(e-=Math.round(e/ei)*ei),[e,i]}}function tE(o){var e=$S(o);return e.invert=$S(-o),e}function eE(o,e){var i=tn(o),r=en(o),l=tn(e),f=en(e);function h(d,_){var g=tn(_),m=tn(d)*g,p=en(d)*g,S=en(_),x=S*i+m*r;return[Eo(p*l-x*f,m*i-S*r),Nl(x*l+p*f)]}return h.invert=function(d,_){var g=tn(_),m=tn(d)*g,p=en(d)*g,S=en(_),x=S*l-p*f;return[Eo(p*l+S*f,m*i+x*r),Nl(x*i-m*r)]},h}function E2(o,e,i,r,l,f){if(i){var h=tn(e),d=en(e),_=r*i;l==null?(l=e+r*ei,f=e-_/2):(l=nE(h,l),f=nE(h,f),(r>0?l<f:l>f)&&(l+=r*ei));for(var g,m=l;r>0?m>f:m<f;m-=_)g=dm([h,-d*tn(m),-d*en(m)]),o.point(g[0],g[1])}}function nE(o,e){e=yo(e),e[0]-=o,pm(e);var i=p2(-e[1]);return((-e[2]<0?-i:i)+ei-Qe)%ei}function jE(){var o=[],e;return{point:function(i,r,l){e.push([i,r,l])},lineStart:function(){o.push(e=[])},lineEnd:Hn,rejoin:function(){o.length>1&&o.push(o.pop().concat(o.shift()))},result:function(){var i=o;return o=[],e=null,i}}}function Gc(o,e){return rn(o[0]-e[0])<Qe&&rn(o[1]-e[1])<Qe}function Oc(o,e,i,r){this.x=o,this.z=e,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function QE(o,e,i,r,l){var f=[],h=[],d,_;if(o.forEach(function(M){if(!((A=M.length-1)<=0)){var A,y=M[0],E=M[A],U;if(Gc(y,E)){if(!y[2]&&!E[2]){for(l.lineStart(),d=0;d<A;++d)l.point((y=M[d])[0],y[1]);l.lineEnd();return}E[0]+=2*Qe}f.push(U=new Oc(y,M,null,!0)),h.push(U.o=new Oc(y,null,U,!1)),f.push(U=new Oc(E,M,null,!1)),h.push(U.o=new Oc(E,null,U,!0))}}),!!f.length){for(h.sort(e),iE(f),iE(h),d=0,_=h.length;d<_;++d)h[d].e=i=!i;for(var g=f[0],m,p;;){for(var S=g,x=!0;S.v;)if((S=S.n)===g)return;m=S.z,l.lineStart();do{if(S.v=S.o.v=!0,S.e){if(x)for(d=0,_=m.length;d<_;++d)l.point((p=m[d])[0],p[1]);else r(S.x,S.n.x,1,l);S=S.n}else{if(x)for(m=S.p.z,d=m.length-1;d>=0;--d)l.point((p=m[d])[0],p[1]);else r(S.x,S.p.x,-1,l);S=S.p}S=S.o,m=S.z,x=!x}while(!S.v);l.lineEnd()}}}function iE(o){if(e=o.length){for(var e,i=0,r=o[0],l;++i<e;)r.n=l=o[i],l.p=r,r=l;r.n=l=o[0],l.p=r}}function gp(o){return rn(o[0])<=Ce?o[0]:d2(o[0])*((rn(o[0])+Ce)%ei-Ce)}function y2(o,e){var i=gp(e),r=e[1],l=en(r),f=[en(i),-tn(i),0],h=0,d=0,_=new Vi;l===1?r=Ui+Qe:l===-1&&(r=-Ui-Qe);for(var g=0,m=o.length;g<m;++g)if(S=(p=o[g]).length)for(var p,S,x=p[S-1],M=gp(x),A=x[1]/2+Yc,y=en(A),E=tn(A),U=0;U<S;++U,M=R,y=z,E=O,x=N){var N=p[U],R=gp(N),B=N[1]/2+Yc,z=en(B),O=tn(B),G=R-M,D=G>=0?1:-1,w=D*G,I=w>Ce,tt=y*z;if(_.add(Eo(tt*D*en(w),E*O+tt*tn(w))),h+=I?G+D*ei:G,I^M>=i^R>=i){var rt=Kc(yo(x),yo(N));pm(rt);var ct=Kc(f,rt);pm(ct);var V=(I^G>=0?-1:1)*Nl(ct[2]);(r>V||r===V&&(rt[0]||rt[1]))&&(d+=I^G>=0?1:-1)}}return(h<-Qe||h<Qe&&_<-1e-12)^d&1}function JE(o,e,i,r){return function(l){var f=e(l),h=jE(),d=e(h),_=!1,g,m,p,S={point:x,lineStart:A,lineEnd:y,polygonStart:function(){S.point=E,S.lineStart=U,S.lineEnd=N,m=[],g=[]},polygonEnd:function(){S.point=x,S.lineStart=A,S.lineEnd=y,m=YE(m);var R=y2(g,r);m.length?(_||(l.polygonStart(),_=!0),QE(m,M2,R,i,l)):R&&(_||(l.polygonStart(),_=!0),l.lineStart(),i(null,null,1,l),l.lineEnd()),_&&(l.polygonEnd(),_=!1),m=g=null},sphere:function(){l.polygonStart(),l.lineStart(),i(null,null,1,l),l.lineEnd(),l.polygonEnd()}};function x(R,B){o(R,B)&&l.point(R,B)}function M(R,B){f.point(R,B)}function A(){S.point=M,f.lineStart()}function y(){S.point=x,f.lineEnd()}function E(R,B){p.push([R,B]),d.point(R,B)}function U(){d.lineStart(),p=[]}function N(){E(p[0][0],p[0][1]),d.lineEnd();var R=d.clean(),B=h.result(),z,O=B.length,G,D,w;if(p.pop(),g.push(p),p=null,!!O){if(R&1){if(D=B[0],(G=D.length-1)>0){for(_||(l.polygonStart(),_=!0),l.lineStart(),z=0;z<G;++z)l.point((w=D[z])[0],w[1]);l.lineEnd()}return}O>1&&R&2&&B.push(B.pop().concat(B.shift())),m.push(B.filter(x2))}}return S}}function x2(o){return o.length>1}function M2(o,e){return((o=o.x)[0]<0?o[1]-Ui-Qe:Ui-o[1])-((e=e.x)[0]<0?e[1]-Ui-Qe:Ui-e[1])}const aE=JE(function(){return!0},T2,b2,[-Ce,-Ui]);function T2(o){var e=NaN,i=NaN,r=NaN,l;return{lineStart:function(){o.lineStart(),l=1},point:function(f,h){var d=f>0?Ce:-Ce,_=rn(f-e);rn(_-Ce)<Qe?(o.point(e,i=(i+h)/2>0?Ui:-Ui),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(d,i),o.point(f,i),l=0):r!==d&&_>=Ce&&(rn(e-r)<Qe&&(e-=r*Qe),rn(f-d)<Qe&&(f-=d*Qe),i=A2(e,i,f,h),o.point(r,i),o.lineEnd(),o.lineStart(),o.point(d,i),l=0),o.point(e=f,i=h),r=d},lineEnd:function(){o.lineEnd(),e=i=NaN},clean:function(){return 2-l}}}function A2(o,e,i,r){var l,f,h=en(o-i);return rn(h)>Qe?h2((en(e)*(f=tn(r))*en(i)-en(r)*(l=tn(e))*en(o))/(l*f*h)):(e+r)/2}function b2(o,e,i,r){var l;if(o==null)l=i*Ui,r.point(-Ce,l),r.point(0,l),r.point(Ce,l),r.point(Ce,0),r.point(Ce,-l),r.point(0,-l),r.point(-Ce,-l),r.point(-Ce,0),r.point(-Ce,l);else if(rn(o[0]-e[0])>Qe){var f=o[0]<e[0]?Ce:-Ce;l=i*f/2,r.point(-f,l),r.point(0,l),r.point(f,l)}else r.point(e[0],e[1])}function R2(o){var e=tn(o),i=2*On,r=e>0,l=rn(e)>Qe;function f(m,p,S,x){E2(x,o,i,S,m,p)}function h(m,p){return tn(m)*tn(p)>e}function d(m){var p,S,x,M,A;return{lineStart:function(){M=x=!1,A=1},point:function(y,E){var U=[y,E],N,R=h(y,E),B=r?R?0:g(y,E):R?g(y+(y<0?Ce:-Ce),E):0;if(!p&&(M=x=R)&&m.lineStart(),R!==x&&(N=_(p,U),(!N||Gc(p,N)||Gc(U,N))&&(U[2]=1)),R!==x)A=0,R?(m.lineStart(),N=_(U,p),m.point(N[0],N[1])):(N=_(p,U),m.point(N[0],N[1],2),m.lineEnd()),p=N;else if(l&&p&&r^R){var z;!(B&S)&&(z=_(U,p,!0))&&(A=0,r?(m.lineStart(),m.point(z[0][0],z[0][1]),m.point(z[1][0],z[1][1]),m.lineEnd()):(m.point(z[1][0],z[1][1]),m.lineEnd(),m.lineStart(),m.point(z[0][0],z[0][1],3)))}R&&(!p||!Gc(p,U))&&m.point(U[0],U[1]),p=U,x=R,S=B},lineEnd:function(){x&&m.lineEnd(),p=null},clean:function(){return A|(M&&x)<<1}}}function _(m,p,S){var x=yo(m),M=yo(p),A=[1,0,0],y=Kc(x,M),E=Nc(y,y),U=y[0],N=E-U*U;if(!N)return!S&&m;var R=e*E/N,B=-e*U/N,z=Kc(A,y),O=Lc(A,R),G=Lc(y,B);mp(O,G);var D=z,w=Nc(O,D),I=Nc(D,D),tt=w*w-I*(Nc(O,O)-1);if(!(tt<0)){var rt=us(tt),ct=Lc(D,(-w-rt)/I);if(mp(ct,O),ct=dm(ct),!S)return ct;var V=m[0],X=p[0],$=m[1],Y=p[1],vt;X<V&&(vt=V,V=X,X=vt);var Et=X-V,Dt=rn(Et-Ce)<Qe,Wt=Dt||Et<Qe;if(!Dt&&Y<$&&(vt=$,$=Y,Y=vt),Wt?Dt?$+Y>0^ct[1]<(rn(ct[0]-V)<Qe?$:Y):$<=ct[1]&&ct[1]<=Y:Et>Ce^(V<=ct[0]&&ct[0]<=X)){var le=Lc(D,(-w+rt)/I);return mp(le,O),[ct,dm(le)]}}}function g(m,p){var S=r?o:Ce-o,x=0;return m<-S?x|=1:m>S&&(x|=2),p<-S?x|=4:p>S&&(x|=8),x}return JE(h,d,f,r?[0,-o]:[-Ce,o-Ce])}function C2(o,e,i,r,l,f){var h=o[0],d=o[1],_=e[0],g=e[1],m=0,p=1,S=_-h,x=g-d,M;if(M=i-h,!(!S&&M>0)){if(M/=S,S<0){if(M<m)return;M<p&&(p=M)}else if(S>0){if(M>p)return;M>m&&(m=M)}if(M=l-h,!(!S&&M<0)){if(M/=S,S<0){if(M>p)return;M>m&&(m=M)}else if(S>0){if(M<m)return;M<p&&(p=M)}if(M=r-d,!(!x&&M>0)){if(M/=x,x<0){if(M<m)return;M<p&&(p=M)}else if(x>0){if(M>p)return;M>m&&(m=M)}if(M=f-d,!(!x&&M<0)){if(M/=x,x<0){if(M>p)return;M>m&&(m=M)}else if(x>0){if(M<m)return;M<p&&(p=M)}return m>0&&(o[0]=h+m*S,o[1]=d+m*x),p<1&&(e[0]=h+p*S,e[1]=d+p*x),!0}}}}}var xl=1e9,Pc=-xl;function w2(o,e,i,r){function l(g,m){return o<=g&&g<=i&&e<=m&&m<=r}function f(g,m,p,S){var x=0,M=0;if(g==null||(x=h(g,p))!==(M=h(m,p))||_(g,m)<0^p>0)do S.point(x===0||x===3?o:i,x>1?r:e);while((x=(x+p+4)%4)!==M);else S.point(m[0],m[1])}function h(g,m){return rn(g[0]-o)<Qe?m>0?0:3:rn(g[0]-i)<Qe?m>0?2:1:rn(g[1]-e)<Qe?m>0?1:0:m>0?3:2}function d(g,m){return _(g.x,m.x)}function _(g,m){var p=h(g,1),S=h(m,1);return p!==S?p-S:p===0?m[1]-g[1]:p===1?g[0]-m[0]:p===2?g[1]-m[1]:m[0]-g[0]}return function(g){var m=g,p=jE(),S,x,M,A,y,E,U,N,R,B,z,O={point:G,lineStart:tt,lineEnd:rt,polygonStart:w,polygonEnd:I};function G(V,X){l(V,X)&&m.point(V,X)}function D(){for(var V=0,X=0,$=x.length;X<$;++X)for(var Y=x[X],vt=1,Et=Y.length,Dt=Y[0],Wt,le,F=Dt[0],ut=Dt[1];vt<Et;++vt)Wt=F,le=ut,Dt=Y[vt],F=Dt[0],ut=Dt[1],le<=r?ut>r&&(F-Wt)*(r-le)>(ut-le)*(o-Wt)&&++V:ut<=r&&(F-Wt)*(r-le)<(ut-le)*(o-Wt)&&--V;return V}function w(){m=p,S=[],x=[],z=!0}function I(){var V=D(),X=z&&V,$=(S=YE(S)).length;(X||$)&&(g.polygonStart(),X&&(g.lineStart(),f(null,null,1,g),g.lineEnd()),$&&QE(S,d,V,f,g),g.polygonEnd()),m=g,S=x=M=null}function tt(){O.point=ct,x&&x.push(M=[]),B=!0,R=!1,U=N=NaN}function rt(){S&&(ct(A,y),E&&R&&p.rejoin(),S.push(p.result())),O.point=G,R&&m.lineEnd()}function ct(V,X){var $=l(V,X);if(x&&M.push([V,X]),B)A=V,y=X,E=$,B=!1,$&&(m.lineStart(),m.point(V,X));else if($&&R)m.point(V,X);else{var Y=[U=Math.max(Pc,Math.min(xl,U)),N=Math.max(Pc,Math.min(xl,N))],vt=[V=Math.max(Pc,Math.min(xl,V)),X=Math.max(Pc,Math.min(xl,X))];C2(Y,vt,o,e,i,r)?(R||(m.lineStart(),m.point(Y[0],Y[1])),m.point(vt[0],vt[1]),$||m.lineEnd(),z=!1):$&&(m.lineStart(),m.point(V,X),z=!1)}U=V,N=X,R=$}return O}}const _m=o=>o;var _p=new Vi,vm=new Vi,$E,ty,Sm,Em,Na={point:Hn,lineStart:Hn,lineEnd:Hn,polygonStart:function(){Na.lineStart=D2,Na.lineEnd=N2},polygonEnd:function(){Na.lineStart=Na.lineEnd=Na.point=Hn,_p.add(rn(vm)),vm=new Vi},result:function(){var o=_p/2;return _p=new Vi,o}};function D2(){Na.point=U2}function U2(o,e){Na.point=ey,$E=Sm=o,ty=Em=e}function ey(o,e){vm.add(Em*o-Sm*e),Sm=o,Em=e}function N2(){ey($E,ty)}var xo=1/0,jc=xo,Ol=-xo,Qc=Ol,Jc={point:L2,lineStart:Hn,lineEnd:Hn,polygonStart:Hn,polygonEnd:Hn,result:function(){var o=[[xo,jc],[Ol,Qc]];return Ol=Qc=-(jc=xo=1/0),o}};function L2(o,e){o<xo&&(xo=o),o>Ol&&(Ol=o),e<jc&&(jc=e),e>Qc&&(Qc=e)}var ym=0,xm=0,Ml=0,$c=0,tf=0,fo=0,Mm=0,Tm=0,Tl=0,ny,iy,na,ia,Ci={point:ls,lineStart:rE,lineEnd:sE,polygonStart:function(){Ci.lineStart=z2,Ci.lineEnd=I2},polygonEnd:function(){Ci.point=ls,Ci.lineStart=rE,Ci.lineEnd=sE},result:function(){var o=Tl?[Mm/Tl,Tm/Tl]:fo?[$c/fo,tf/fo]:Ml?[ym/Ml,xm/Ml]:[NaN,NaN];return ym=xm=Ml=$c=tf=fo=Mm=Tm=Tl=0,o}};function ls(o,e){ym+=o,xm+=e,++Ml}function rE(){Ci.point=O2}function O2(o,e){Ci.point=P2,ls(na=o,ia=e)}function P2(o,e){var i=o-na,r=e-ia,l=us(i*i+r*r);$c+=l*(na+o)/2,tf+=l*(ia+e)/2,fo+=l,ls(na=o,ia=e)}function sE(){Ci.point=ls}function z2(){Ci.point=B2}function I2(){ay(ny,iy)}function B2(o,e){Ci.point=ay,ls(ny=na=o,iy=ia=e)}function ay(o,e){var i=o-na,r=e-ia,l=us(i*i+r*r);$c+=l*(na+o)/2,tf+=l*(ia+e)/2,fo+=l,l=ia*o-na*e,Mm+=l*(na+o),Tm+=l*(ia+e),Tl+=l*3,ls(na=o,ia=e)}function ry(o){this._context=o}ry.prototype={_radius:4.5,pointRadius:function(o){return this._radius=o,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(o,e){switch(this._point){case 0:{this._context.moveTo(o,e),this._point=1;break}case 1:{this._context.lineTo(o,e);break}default:{this._context.moveTo(o+this._radius,e),this._context.arc(o,e,this._radius,0,ei);break}}},result:Hn};var Am=new Vi,vp,sy,oy,Al,bl,Pl={point:Hn,lineStart:function(){Pl.point=F2},lineEnd:function(){vp&&ly(sy,oy),Pl.point=Hn},polygonStart:function(){vp=!0},polygonEnd:function(){vp=null},result:function(){var o=+Am;return Am=new Vi,o}};function F2(o,e){Pl.point=ly,sy=Al=o,oy=bl=e}function ly(o,e){Al-=o,bl-=e,Am.add(us(Al*Al+bl*bl)),Al=o,bl=e}let oE,ef,lE,uE;class cE{constructor(e){this._append=e==null?uy:H2(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==lE||this._append!==ef){const r=this._radius,l=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,lE=r,ef=this._append,uE=this._,this._=l}this._+=uE;break}}}result(){const e=this._;return this._="",e.length?e:null}}function uy(o){let e=1;this._+=o[0];for(const i=o.length;e<i;++e)this._+=arguments[e]+o[e]}function H2(o){const e=Math.floor(o);if(!(e>=0))throw new RangeError(`invalid digits: ${o}`);if(e>15)return uy;if(e!==oE){const i=10**e;oE=e,ef=function(l){let f=1;this._+=l[0];for(const h=l.length;f<h;++f)this._+=Math.round(arguments[f]*i)/i+l[f]}}return ef}function fE(o,e){let i=3,r=4.5,l,f;function h(d){return d&&(typeof r=="function"&&f.pointRadius(+r.apply(this,arguments)),is(d,l(f))),f.result()}return h.area=function(d){return is(d,l(Na)),Na.result()},h.measure=function(d){return is(d,l(Pl)),Pl.result()},h.bounds=function(d){return is(d,l(Jc)),Jc.result()},h.centroid=function(d){return is(d,l(Ci)),Ci.result()},h.projection=function(d){return arguments.length?(l=d==null?(o=null,_m):(o=d).stream,h):o},h.context=function(d){return arguments.length?(f=d==null?(e=null,new cE(i)):new ry(e=d),typeof r!="function"&&f.pointRadius(r),h):e},h.pointRadius=function(d){return arguments.length?(r=typeof d=="function"?d:(f.pointRadius(+d),+d),h):r},h.digits=function(d){if(!arguments.length)return i;if(d==null)i=null;else{const _=Math.floor(d);if(!(_>=0))throw new RangeError(`invalid digits: ${d}`);i=_}return e===null&&(f=new cE(i)),h},h.projection(o).digits(i).context(e)}function Hm(o){return function(e){var i=new bm;for(var r in o)i[r]=o[r];return i.stream=e,i}}function bm(){}bm.prototype={constructor:bm,point:function(o,e){this.stream.point(o,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Gm(o,e,i){var r=o.clipExtent&&o.clipExtent();return o.scale(150).translate([0,0]),r!=null&&o.clipExtent(null),is(i,o.stream(Jc)),e(Jc.result()),r!=null&&o.clipExtent(r),o}function cy(o,e,i){return Gm(o,function(r){var l=e[1][0]-e[0][0],f=e[1][1]-e[0][1],h=Math.min(l/(r[1][0]-r[0][0]),f/(r[1][1]-r[0][1])),d=+e[0][0]+(l-h*(r[1][0]+r[0][0]))/2,_=+e[0][1]+(f-h*(r[1][1]+r[0][1]))/2;o.scale(150*h).translate([d,_])},i)}function G2(o,e,i){return cy(o,[[0,0],e],i)}function V2(o,e,i){return Gm(o,function(r){var l=+e,f=l/(r[1][0]-r[0][0]),h=(l-f*(r[1][0]+r[0][0]))/2,d=-f*r[0][1];o.scale(150*f).translate([h,d])},i)}function X2(o,e,i){return Gm(o,function(r){var l=+e,f=l/(r[1][1]-r[0][1]),h=-f*r[0][0],d=(l-f*(r[1][1]+r[0][1]))/2;o.scale(150*f).translate([h,d])},i)}var hE=16,k2=tn(30*On);function dE(o,e){return+e?Y2(o,e):q2(o)}function q2(o){return Hm({point:function(e,i){e=o(e,i),this.stream.point(e[0],e[1])}})}function Y2(o,e){function i(r,l,f,h,d,_,g,m,p,S,x,M,A,y){var E=g-r,U=m-l,N=E*E+U*U;if(N>4*e&&A--){var R=h+S,B=d+x,z=_+M,O=us(R*R+B*B+z*z),G=Nl(z/=O),D=rn(rn(z)-1)<Qe||rn(f-p)<Qe?(f+p)/2:Eo(B,R),w=o(D,G),I=w[0],tt=w[1],rt=I-r,ct=tt-l,V=U*rt-E*ct;(V*V/N>e||rn((E*rt+U*ct)/N-.5)>.3||h*S+d*x+_*M<k2)&&(i(r,l,f,h,d,_,I,tt,D,R/=O,B/=O,z,A,y),y.point(I,tt),i(I,tt,D,R,B,z,g,m,p,S,x,M,A,y))}}return function(r){var l,f,h,d,_,g,m,p,S,x,M,A,y={point:E,lineStart:U,lineEnd:R,polygonStart:function(){r.polygonStart(),y.lineStart=B},polygonEnd:function(){r.polygonEnd(),y.lineStart=U}};function E(G,D){G=o(G,D),r.point(G[0],G[1])}function U(){p=NaN,y.point=N,r.lineStart()}function N(G,D){var w=yo([G,D]),I=o(G,D);i(p,S,m,x,M,A,p=I[0],S=I[1],m=G,x=w[0],M=w[1],A=w[2],hE,r),r.point(p,S)}function R(){y.point=E,r.lineEnd()}function B(){U(),y.point=z,y.lineEnd=O}function z(G,D){N(l=G,D),f=p,h=S,d=x,_=M,g=A,y.point=N}function O(){i(p,S,m,x,M,A,f,h,l,d,_,g,hE,r),y.lineEnd=R,R()}return y}}var W2=Hm({point:function(o,e){this.stream.point(o*On,e*On)}});function Z2(o){return Hm({point:function(e,i){var r=o(e,i);return this.stream.point(r[0],r[1])}})}function K2(o,e,i,r,l){function f(h,d){return h*=r,d*=l,[e+o*h,i-o*d]}return f.invert=function(h,d){return[(h-e)/o*r,(i-d)/o*l]},f}function pE(o,e,i,r,l,f){if(!f)return K2(o,e,i,r,l);var h=tn(f),d=en(f),_=h*o,g=d*o,m=h/o,p=d/o,S=(d*i-h*e)/o,x=(d*e+h*i)/o;function M(A,y){return A*=r,y*=l,[_*A-g*y+e,i-g*A-_*y]}return M.invert=function(A,y){return[r*(m*A-p*y+S),l*(x-p*A-m*y)]},M}function j2(o){return Q2(function(){return o})()}function Q2(o){var e,i=150,r=480,l=250,f=0,h=0,d=0,_=0,g=0,m,p=0,S=1,x=1,M=null,A=aE,y=null,E,U,N,R=_m,B=.5,z,O,G,D,w;function I(V){return G(V[0]*On,V[1]*On)}function tt(V){return V=G.invert(V[0],V[1]),V&&[V[0]*wa,V[1]*wa]}I.stream=function(V){return D&&w===V?D:D=W2(Z2(m)(A(z(R(w=V)))))},I.preclip=function(V){return arguments.length?(A=V,M=void 0,ct()):A},I.postclip=function(V){return arguments.length?(R=V,y=E=U=N=null,ct()):R},I.clipAngle=function(V){return arguments.length?(A=+V?R2(M=V*On):(M=null,aE),ct()):M*wa},I.clipExtent=function(V){return arguments.length?(R=V==null?(y=E=U=N=null,_m):w2(y=+V[0][0],E=+V[0][1],U=+V[1][0],N=+V[1][1]),ct()):y==null?null:[[y,E],[U,N]]},I.scale=function(V){return arguments.length?(i=+V,rt()):i},I.translate=function(V){return arguments.length?(r=+V[0],l=+V[1],rt()):[r,l]},I.center=function(V){return arguments.length?(f=V[0]%360*On,h=V[1]%360*On,rt()):[f*wa,h*wa]},I.rotate=function(V){return arguments.length?(d=V[0]%360*On,_=V[1]%360*On,g=V.length>2?V[2]%360*On:0,rt()):[d*wa,_*wa,g*wa]},I.angle=function(V){return arguments.length?(p=V%360*On,rt()):p*wa},I.reflectX=function(V){return arguments.length?(S=V?-1:1,rt()):S<0},I.reflectY=function(V){return arguments.length?(x=V?-1:1,rt()):x<0},I.precision=function(V){return arguments.length?(z=dE(O,B=V*V),ct()):us(B)},I.fitExtent=function(V,X){return cy(I,V,X)},I.fitSize=function(V,X){return G2(I,V,X)},I.fitWidth=function(V,X){return V2(I,V,X)},I.fitHeight=function(V,X){return X2(I,V,X)};function rt(){var V=pE(i,0,0,S,x,p).apply(null,e(f,h)),X=pE(i,r-V[0],l-V[1],S,x,p);return m=S2(d,_,g),O=mm(e,X),G=mm(m,O),z=dE(O,B),ct()}function ct(){return D=w=null,I}return function(){return e=o.apply(this,arguments),I.invert=e.invert&&tt,rt()}}function Rm(o,e){return[o,e]}Rm.invert=Rm;function J2(){return j2(Rm).scale(152.63)}function $2({colorMap:o,reliefMap:e,relief:i,rimStrength:r}){return new Ia({uniforms:{colorMap:{value:o},reliefMap:{value:e},relief:{value:i},rimStrength:{value:r}},vertexShader:`
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
    `})}function fy({dataUrl:o="/data/countries.geojson",rotationPeriod:e=20,paused:i=!1,interactive:r=!0,landColor:l="#03FA7F",oceanColor:f="#212121",borderColor:h="#02e573",relief:d=.012,rimStrength:_=.2,maxPixelRatio:g=1.5,textureWidth:m=2048,className:p="",style:S,onFrame:x,onReady:M}){const A=En.useRef(null),y=En.useRef({paused:i,rotationPeriod:e,onFrame:x,onReady:M}),E=En.useRef(()=>{}),[U,N]=En.useState("");return En.useEffect(()=>{y.current={paused:i,rotationPeriod:e,onFrame:x,onReady:M},E.current()},[i,e,x,M]),En.useEffect(()=>{const R=A.current,B=new AbortController,z=window.matchMedia("(prefers-reduced-motion: reduce)"),O=[];let G,D,w,I=()=>{},tt=!1,rt=null,ct=null,V=!0,X=0;const $=()=>{!tt&&rt===null&&(rt=requestAnimationFrame(vt))},Y=()=>{ct=null,$()};E.current=Y;function vt(F){if(rt=null,tt||!G||document.hidden||!V){ct=null;return}const ut=ct===null?0:(F-ct)/1e3;ct=F;const{paused:W,rotationPeriod:it,onFrame:yt}=y.current,Ut=!W&&!z.matches&&Number.isFinite(it)&&it>0;Ut&&(Wt.rotation.y+=Math.PI*2/it*ut),X+=ut,G.render(Et,Dt),yt?.({timestamp:F,delta:ut,elapsed:X,rotation:Wt.rotation.y,axisTilt:Wt.rotation.x,drawCalls:G.info.render.calls,triangles:G.info.render.triangles}),Ut?$():ct=null}let Et,Dt,Wt;async function le(){try{N("");const F=await fetch(o,{signal:B.signal});if(!F.ok)throw new Error(`Geography request failed (${F.status})`);const ut=await F.json();if(tt)return;ut.features=ut.features.filter(ot=>!["RUS","BLR"].includes(ot.properties.iso_a3??ot.properties["ISO3166-1-Alpha-3"]));for(const ot of ut.features){const lt=ot.geometry.type==="Polygon"?[ot.geometry.coordinates]:ot.geometry.coordinates;for(const zt of lt)zt.forEach((Rt,Xt)=>{const jt=v2({type:"Polygon",coordinates:[Rt]});(Xt===0&&jt>2*Math.PI||Xt>0&&jt<2*Math.PI)&&Rt.reverse()})}const W=Math.min(4096,Math.max(512,Math.round(m))),it=document.createElement("canvas");it.width=W,it.height=W/2;const yt=it.getContext("2d");yt.fillStyle=f,yt.fillRect(0,0,W,W/2);const Ut=J2().scale(W/(2*Math.PI)).translate([W/2,W/4]),wt=fE(Ut,yt);yt.fillStyle=l,yt.strokeStyle=h,yt.lineWidth=W/4096*1.5;for(const ot of ut.features)yt.beginPath(),wt(ot),yt.fill(),yt.stroke();const xt=document.createElement("canvas");xt.width=W,xt.height=W/2;const Gt=xt.getContext("2d");Gt.fillStyle="#000",Gt.fillRect(0,0,W,W/2),Gt.fillStyle="#fff";const H=fE(Ut,Gt);for(const ot of ut.features)Gt.beginPath(),H(ot),Gt.fill(),Gt.strokeStyle="#fff",Gt.lineWidth=.4,Gt.stroke();const Te=Gt.getImageData(0,0,W,W/2),re=Te.data.slice(),Yt=xt.height,Nt=(ot,lt)=>re[(Math.max(0,Math.min(Yt-1,lt))*W+(ot+W)%W)*4];for(let ot=0;ot<Yt;ot++)for(let lt=0;lt<W;lt++){const zt=(ot*W+lt)*4;Te.data[zt+1]=Math.round(127.5+(Nt(lt+1,ot)-Nt(lt-1,ot))/2),Te.data[zt+2]=Math.round(127.5+(Nt(lt,ot-1)-Nt(lt,ot+1))/2),Te.data[zt+3]=Nt(lt-2,ot-2)}const ie=new Uint8Array(Te.data.length);for(let ot=0;ot<Yt;ot++)ie.set(Te.data.subarray(ot*W*4,(ot+1)*W*4),(Yt-1-ot)*W*4);const It=new S1(ie,W,Yt,Di);It.minFilter=wi,It.magFilter=wi,It.needsUpdate=!0,O.push(It);const se=new M1(it);se.colorSpace=di,O.push(se),G=new c2({alpha:!0,antialias:!0,powerPreference:"low-power"}),G.setPixelRatio(Math.min(window.devicePixelRatio||1,Math.max(1,g))),G.setClearColor(0,0),se.anisotropy=Math.min(4,G.capabilities.getMaxAnisotropy()),R.appendChild(G.domElement),Et=new v1,Dt=new Ri(34,1,.1,20),Dt.position.set(0,0,3.7);const Re=new Bm(1,64,48),we=Re.attributes.position,L=Re.attributes.uv;for(let ot=0;ot<we.count;ot++){const zt=1+Nt(Math.round(L.getX(ot)*(W-1)),Math.round((1-L.getY(ot))*(Yt-1)))/255*Math.max(0,Math.min(.03,d));we.setXYZ(ot,we.getX(ot)*zt,we.getY(ot)*zt,we.getZ(ot)*zt)}Re.computeBoundingSphere();const b=$2({colorMap:se,reliefMap:It,textureWidth:W,relief:Math.max(0,Math.min(.03,d)),rimStrength:Math.max(0,Math.min(1,_))});O.push(Re,b),Wt=new ra(Re,b),Wt.rotation.set(.5,-1.45,0),Et.add(Wt);const nt=G.domElement;if(nt.setAttribute("role","img"),nt.setAttribute("aria-label",r?"Animated globe. Drag horizontally or use left and right arrow keys to turn it.":"Animated globe."),r){nt.tabIndex=0;let ot=null,lt=0;const zt=At=>{!At.isPrimary||At.button!==0||(ot=At.pointerId,lt=At.clientX,nt.setPointerCapture(ot))},Rt=At=>{At.pointerId===ot&&(Wt.rotation.y+=(At.clientX-lt)/Math.max(1,R.clientWidth)*Math.PI*1.3,lt=At.clientX,$())},Xt=()=>{ot=null},Tt={pointerdown:zt,pointermove:Rt,pointerup:Xt,pointercancel:Xt,lostpointercapture:Xt,keydown:At=>{At.key!=="ArrowLeft"&&At.key!=="ArrowRight"||(At.preventDefault(),Wt.rotation.y+=(At.key==="ArrowLeft"?-1:1)*Math.PI/18,$())}};for(const[At,te]of Object.entries(Tt))nt.addEventListener(At,te);I=()=>{for(const[At,te]of Object.entries(Tt))nt.removeEventListener(At,te)}}const pt=()=>{const{width:ot,height:lt}=R.getBoundingClientRect();!ot||!lt||(G.setSize(ot,lt),Dt.aspect=ot/lt,Dt.updateProjectionMatrix(),Dt.position.setLength(3.7/Math.min(1,Dt.aspect)),Y())};D=new ResizeObserver(pt),D.observe(R),pt(),w=new IntersectionObserver(([ot])=>{V=ot.isIntersecting,Y()}),w.observe(R),document.addEventListener("visibilitychange",Y),z.addEventListener("change",Y),y.current.onReady?.(),$()}catch(F){!tt&&F.name!=="AbortError"&&N("The globe could not load. Check the geography URL and WebGL browser support.")}}return le(),()=>{tt=!0,B.abort(),cancelAnimationFrame(rt),E.current=()=>{},document.removeEventListener("visibilitychange",Y),z.removeEventListener("change",Y),D?.disconnect(),w?.disconnect(),I(),O.forEach(F=>F.dispose()),G?.dispose(),G?.domElement.remove()}},[o,r,l,f,h,d,_,g,m]),mt.createElement("div",{className:`expla-globe ${p}`,style:S,ref:A,"data-interactive":r},U&&mt.createElement("p",{className:"expla-globe__error",role:"alert"},U))}function tw(){const o=En.useRef(null),[e,i]=En.useState(!1);return En.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),r.disconnect())},{threshold:.3});return r.observe(o.current),()=>r.disconnect()},[]),[o,e]}const ew={uk:{nav:["Про нас","Наші напрямки","Кар’єра","Блог","Контакти"],title:"expla топ-100 партнерів",subtitle:"Meta Ads & Google Ads у Європі",directions:"Наші напрямки",more:"ДЕТАЛЬНІШЕ",cards:[{title:"Social Media Advertising",description:"Залучаємо користувачів через рекламу в соціальних мережах",tags:"META ADS · TIKTOK · SNAPCHAT · X",detail:"Поєднуємо стратегію, креативи та аналітику, щоб знаходити вашу аудиторію в соціальних мережах. Тестуємо ідеї, оптимізуємо кампанії та масштабуємо те, що працює."},{title:"PPC Team",description:"Перетворюємо рекламний клік на реєстрацію чи покупку",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS",detail:"Працюємо з пошуковою та нативною рекламою на всіх етапах шляху користувача. Аналізуємо результати та оптимізуємо кампанії відповідно до бізнес-цілей."},{title:"SEO",description:"Розвиваємо власні сайти та залучаємо користувачів із пошуку Google",tags:"ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА",detail:"Досліджуємо пошуковий попит, створюємо корисний контент і працюємо з технічною оптимізацією. Допомагаємо людям знаходити відповіді, а проєктам — свою аудиторію."},{title:"Affiliate Network",description:"Поєднуємо рекламодавців і афіліатів у партнерську мережу",tags:"CPAMATICA · 1 000+ ПАРТНЕРІВ",detail:"Об’єднуємо рекламодавців і партнерів навколо спільного результату. Створюємо можливості для співпраці та розвитку performance-маркетингу."}],seen:"нашу рекламу бачать",online:"онлайн-користувачів у світі",users:"8 з 10 користувачів",zone:"НАША ЗОНА РОБОТИ",channelsStart:"Канали, що перетворюють",channelsEnd:"увагу на",result:"результат",close:"Закрити",menu:"Відкрити меню",socialTitle:"Соціальні мережі expla",socialBody:"Дізнавайтеся більше про команду, ідеї та життя expla.",careerTitle:"Зростай разом з expla",careerBody:"Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.",careerAction:"Дослідити напрямки",blogTitle:"Ідеї, що рухають уперед",blogBody:"Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.",contactTitle:"Почнімо з вашої задачі",contactBody:"Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.",name:"Ваше ім’я",email:"Email",message:"Про вашу задачу",submit:"Скопіювати звернення",copied:"Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.",copyError:"Скопіюйте текст із поля нижче.",skip:"Перейти до вмісту",globe:"Жива планета expla"},en:{nav:["About us","Our expertise","Careers","Blog","Contacts"],title:"expla is a top-100 partner",subtitle:"for Meta Ads & Google Ads in Europe",directions:"Our expertise",more:"LEARN MORE",cards:[{title:"Social Media Advertising",description:"Connecting people with brands through social media advertising",tags:"META ADS · TIKTOK · SNAPCHAT · X",detail:"We bring strategy, creative work, and analytics together to find your audience on social media. We test ideas, optimize campaigns, and scale what works."},{title:"PPC Team",description:"Turning an ad click into a registration or a purchase",tags:"GOOGLE ADS · MICROSOFT ADS · NATIVE ADS",detail:"We work with search and native advertising throughout the customer journey, measuring results and optimizing campaigns around business goals."},{title:"SEO",description:"Growing our own websites and attracting users from Google search",tags:"ORGANIC SEARCH · CONTENT · ANALYTICS",detail:"We research search demand, create useful content, and improve technical performance. Helping people find answers and projects find their audience."},{title:"Affiliate Network",description:"Bringing advertisers and affiliates together in a partner network",tags:"CPAMATICA · 1,000+ PARTNERS",detail:"We connect advertisers and partners around shared outcomes, creating opportunities for collaboration and growth in performance marketing."}],seen:"our advertising reaches",online:"of online users worldwide",users:"8 out of 10 users",zone:"WHERE WE WORK",channelsStart:"Channels that turn",channelsEnd:"attention into",result:"results",close:"Close",menu:"Open menu",socialTitle:"Find expla on social media",socialBody:"Get to know our people, ideas, and life at expla.",careerTitle:"Grow with expla",careerBody:"Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.",careerAction:"Explore our expertise",blogTitle:"Ideas that move us forward",blogBody:"Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.",contactTitle:"Let’s start with your challenge",contactBody:"Tell us what you want to grow. Prepare and copy your inquiry here.",name:"Your name",email:"Email",message:"Your challenge",submit:"Copy inquiry",copied:"Inquiry copied. You can send it through your preferred contact channel.",copyError:"Copy the text from the field below.",skip:"Skip to content",globe:"The live expla globe"}};function mE({small:o=!1}){return mt.createElement("a",{className:`logo${o?" logo--small":""}`,href:"#about","aria-label":"expla"},mt.createElement("span",null,"expla"),mt.createElement("i",{"aria-hidden":"true"}))}function Vc(){return mt.createElement("svg",{"aria-hidden":"true",width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},mt.createElement("path",{d:"M4 12h15m-6-6 6 6-6 6"}))}function nw({name:o}){return o==="Microsoft"?mt.createElement("span",{className:"channel-brand microsoft"},mt.createElement("span",{className:"windows","aria-hidden":"true"},mt.createElement("i",null),mt.createElement("i",null),mt.createElement("i",null),mt.createElement("i",null)),"Microsoft"):o==="Meta"?mt.createElement("span",{className:"channel-brand meta"},mt.createElement("svg",{width:"35",height:"24",viewBox:"0 0 40 25",fill:"none",stroke:"currentColor",strokeWidth:"3","aria-hidden":"true"},mt.createElement("path",{d:"M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"})),"Meta"):o==="TikTok"?mt.createElement("span",{className:"channel-brand tiktok"},mt.createElement("svg",{width:"25",height:"29",viewBox:"0 0 26 30",fill:"currentColor","aria-hidden":"true"},mt.createElement("path",{d:"M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"})),"TikTok"):mt.createElement("span",{className:`channel-brand ${o==="Google"?"google":""}`},o)}function iw({t:o}){const[e,i]=En.useState(""),[r,l]=En.useState("");async function f(h){h.preventDefault();const d=new FormData(h.currentTarget),_=`${d.get("name")}
${d.get("email")}

${d.get("message")}`;try{await navigator.clipboard.writeText(_),i(o.copied)}catch{l(_),i(o.copyError)}}return mt.createElement("form",{className:"contact-form",onSubmit:f},mt.createElement("label",null,o.name,mt.createElement("input",{name:"name",autoComplete:"name",required:!0,maxLength:100})),mt.createElement("label",null,o.email,mt.createElement("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:200})),mt.createElement("label",null,o.message,mt.createElement("textarea",{name:"message",rows:4,required:!0,maxLength:4e3})),mt.createElement("button",{className:"primary-button",type:"submit"},o.submit,mt.createElement(Vc,null)),e&&mt.createElement("p",{className:"form-status",role:"status"},e),r&&mt.createElement("textarea",{readOnly:!0,"aria-label":o.message,value:r,rows:5,onFocus:h=>h.target.select()}))}function aw(){const[o,e]=En.useState("uk"),[i,r]=En.useState(!1),[l,f]=En.useState(null),h=En.useRef(null),[d,_]=tw(),g=`reach-ring-${En.useId().replaceAll(":","")}`,m=ew[o];En.useEffect(()=>{document.documentElement.lang=o},[o]),En.useEffect(()=>{if(!l)return;const A=h.current,y=document.activeElement;A.showModal();const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{A.close(),document.body.style.overflow=E,y instanceof HTMLElement&&y.isConnected&&y.focus({preventScroll:!0})}},[l]);function p(A){r(!1),f(A)}function S(){f(null),document.getElementById("directions").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}const x=l?.type==="direction"?m.cards[l.index]:null,M=x?.title||(l?.type==="career"?m.careerTitle:l?.type==="blog"?m.blogTitle:l?.type==="contact"?m.contactTitle:`${l?.network||""} · expla`);return mt.createElement(mt.Fragment,null,mt.createElement("a",{className:"skip-link",href:"#main"},m.skip),mt.createElement("header",{className:"site-header container"},mt.createElement(mE,null),mt.createElement("button",{className:"menu-toggle",type:"button","aria-expanded":i,"aria-controls":"site-navigation","aria-label":m.menu,onClick:()=>r(!i)},mt.createElement("span",null),mt.createElement("span",null)),mt.createElement("nav",{id:"site-navigation",className:`navigation${i?" is-open":""}`,"aria-label":o==="uk"?"Основна навігація":"Main navigation"},mt.createElement("a",{href:"#about",onClick:()=>r(!1)},m.nav[0]),mt.createElement("a",{href:"#directions",onClick:()=>r(!1)},m.nav[1]),mt.createElement("button",{onClick:()=>p({type:"career"})},m.nav[2]),mt.createElement("button",{onClick:()=>p({type:"blog"})},m.nav[3]),mt.createElement("button",{onClick:()=>p({type:"contact"})},m.nav[4])),mt.createElement("div",{className:"language-switch","aria-label":o==="uk"?"Мова сайту":"Website language"},mt.createElement("button",{lang:"uk","aria-pressed":o==="uk",onClick:()=>e("uk")},"UA"),mt.createElement("span",{"aria-hidden":"true"},"|"),mt.createElement("button",{lang:"en","aria-pressed":o==="en",onClick:()=>e("en")},"EN"))),mt.createElement("main",{id:"main"},mt.createElement("section",{className:"hero container",id:"about"},mt.createElement("h1",null,m.title),mt.createElement("p",null,m.subtitle)),mt.createElement("section",{className:"directions",id:"directions","aria-labelledby":"directions-title"},mt.createElement("div",{className:"container"},mt.createElement("h2",{id:"directions-title"},m.directions),mt.createElement("div",{className:"direction-grid"},m.cards.map((A,y)=>mt.createElement("article",{className:"direction-card",key:A.title},mt.createElement("h3",null,A.title),mt.createElement("p",null,A.description),mt.createElement("div",{className:"card-bottom"},mt.createElement("p",{className:"card-tags"},A.tags),mt.createElement("button",{className:"detail-button",onClick:()=>p({type:"direction",index:y}),"aria-label":`${m.more}: ${A.title}`},m.more,mt.createElement(Vc,null)))))))),mt.createElement("section",{className:`reach container${_?" is-revealed":""}`,ref:d,"aria-label":m.globe},mt.createElement("div",{className:"reach-globe"},mt.createElement("svg",{className:"globe-ring",viewBox:"0 0 100 100","aria-hidden":"true"},mt.createElement("defs",null,mt.createElement("linearGradient",{id:g,x1:"0",y1:"0",x2:"1",y2:"1"},mt.createElement("stop",{offset:"0%",stopColor:"#20c57c"}),mt.createElement("stop",{offset:"100%",stopColor:"#06492e"}))),mt.createElement("circle",{className:"ring-track",cx:"50",cy:"50",r:"49"}),mt.createElement("circle",{className:"ring-progress",cx:"50",cy:"50",r:"49",pathLength:"100",transform:"rotate(-90 50 50)",stroke:`url(#${g})`})),mt.createElement(fy,{dataUrl:"./data/countries.geojson"})),mt.createElement("div",{className:"reach-copy"},mt.createElement("p",{className:"reach-intro"},m.seen),mt.createElement("p",{className:"reach-value"},"80",mt.createElement("span",null,"%")),mt.createElement("h2",null,m.online),mt.createElement("div",{className:"reach-meter"},mt.createElement("span",{className:"meter-blocks","aria-hidden":"true"},Array.from({length:10},(A,y)=>mt.createElement("i",{key:y,className:y<8?"is-filled":"",style:{"--cube-delay":`${y*.26}s`}}))),mt.createElement("span",null,m.users)))),mt.createElement("section",{className:"channels","aria-labelledby":"channels-title"},mt.createElement("div",{className:"container channels-heading"},mt.createElement("p",{className:"section-eyebrow"},mt.createElement("i",{"aria-hidden":"true"}),m.zone),mt.createElement("h2",{id:"channels-title"},m.channelsStart,mt.createElement("br",null),m.channelsEnd," ",mt.createElement("span",null,m.result))),mt.createElement("div",{className:"channel-strip",tabIndex:0,role:"region","aria-label":o==="uk"?"Рекламні платформи":"Advertising platforms"},mt.createElement("div",{className:"channel-track"},[0,1].map(A=>mt.createElement("div",{className:`channel-group${A?" channel-group--duplicate":""}`,key:A,"aria-hidden":A?!0:void 0},["Google","Meta","Microsoft","Native Ads","TikTok","Snapchat"].map((y,E)=>mt.createElement("div",{className:"channel",key:y},mt.createElement("span",{className:"channel-number"},"0",E+1),mt.createElement(nw,{name:y}))))))))),mt.createElement("footer",{className:"site-footer container"},mt.createElement(mE,{small:!0}),mt.createElement("div",{className:"social-links"},["Facebook","Instagram","LinkedIn"].map(A=>mt.createElement("button",{key:A,onClick:()=>p({type:"social",network:A})},A)))),l&&mt.createElement("dialog",{className:"info-dialog",ref:h,"aria-labelledby":"dialog-title",onCancel:A=>{A.preventDefault(),f(null)},onClick:A=>{if(A.target===A.currentTarget){const y=A.currentTarget.getBoundingClientRect();(A.clientX<y.left||A.clientX>y.right||A.clientY<y.top||A.clientY>y.bottom)&&f(null)}}},mt.createElement("button",{className:"dialog-close",type:"button","aria-label":m.close,onClick:()=>f(null)},"×"),mt.createElement("h2",{id:"dialog-title"},M),x?mt.createElement(mt.Fragment,null,mt.createElement("p",null,x.detail),mt.createElement("p",{className:"dialog-tags"},x.tags)):l.type==="contact"?mt.createElement(mt.Fragment,null,mt.createElement("p",null,m.contactBody),mt.createElement(iw,{t:m})):l.type==="career"?mt.createElement(mt.Fragment,null,mt.createElement("p",null,m.careerBody),mt.createElement("button",{className:"primary-button",onClick:S},m.careerAction,mt.createElement(Vc,null))):l.type==="blog"?mt.createElement(mt.Fragment,null,mt.createElement("p",null,m.blogBody),mt.createElement("div",{className:"dialog-directions"},m.cards.map((A,y)=>mt.createElement("button",{key:A.title,onClick:()=>p({type:"direction",index:y})},A.title,mt.createElement(Vc,null))))):mt.createElement("p",null,m.socialBody)))}const rw=o=>{window.__globeFrame=o,window.__globeSamples?.push(o)},sw=new URLSearchParams(window.location.search).get("view")==="globe";eT.createRoot(document.getElementById("root")).render(sw?mt.createElement("main",{className:"standalone-preview","aria-label":"Globe integration preview"},mt.createElement(fy,{dataUrl:"./data/countries.geojson",onFrame:rw})):mt.createElement(aw,null));
